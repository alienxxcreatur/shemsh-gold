import argparse
import base64
import hashlib
import json
import os
import socket
import struct
import time
import urllib.request


def ws_connect(url):
    assert url.startswith("ws://")
    host_port, path = url[5:].split("/", 1)
    host, port = host_port.split(":")
    port = int(port)
    key = base64.b64encode(os.urandom(16)).decode()
    sock = socket.create_connection((host, port), timeout=10)
    request = (
        f"GET /{path} HTTP/1.1\r\n"
        f"Host: {host_port}\r\n"
        "Upgrade: websocket\r\n"
        "Connection: Upgrade\r\n"
        f"Sec-WebSocket-Key: {key}\r\n"
        "Sec-WebSocket-Version: 13\r\n\r\n"
    )
    sock.sendall(request.encode())
    response = sock.recv(4096)
    if b" 101 " not in response.split(b"\r\n", 1)[0]:
        raise RuntimeError(response.decode(errors="replace"))
    return sock


def ws_send(sock, payload):
    data = payload.encode()
    header = bytearray([0x81])
    if len(data) < 126:
        header.append(0x80 | len(data))
    elif len(data) < 65536:
        header.append(0x80 | 126)
        header.extend(struct.pack("!H", len(data)))
    else:
        header.append(0x80 | 127)
        header.extend(struct.pack("!Q", len(data)))
    mask = os.urandom(4)
    header.extend(mask)
    masked = bytes(b ^ mask[i % 4] for i, b in enumerate(data))
    sock.sendall(header + masked)


def recv_exact(sock, n):
    out = b""
    while len(out) < n:
        chunk = sock.recv(n - len(out))
        if not chunk:
            raise RuntimeError("websocket closed")
        out += chunk
    return out


def ws_recv(sock):
    b1, b2 = recv_exact(sock, 2)
    opcode = b1 & 0x0F
    length = b2 & 0x7F
    if length == 126:
        length = struct.unpack("!H", recv_exact(sock, 2))[0]
    elif length == 127:
        length = struct.unpack("!Q", recv_exact(sock, 8))[0]
    masked = bool(b2 & 0x80)
    mask = recv_exact(sock, 4) if masked else b""
    data = recv_exact(sock, length) if length else b""
    if masked:
        data = bytes(b ^ mask[i % 4] for i, b in enumerate(data))
    if opcode == 8:
        raise RuntimeError("websocket close frame")
    if opcode == 9:
        return ws_recv(sock)
    return data.decode(errors="replace")


class CDP:
    def __init__(self, ws_url):
        self.sock = ws_connect(ws_url)
        self.next_id = 1

    def call(self, method, params=None, timeout=10):
        msg_id = self.next_id
        self.next_id += 1
        ws_send(self.sock, json.dumps({"id": msg_id, "method": method, "params": params or {}}))
        end = time.time() + timeout
        while time.time() < end:
            raw = ws_recv(self.sock)
            msg = json.loads(raw)
            if msg.get("id") == msg_id:
                if "error" in msg:
                    raise RuntimeError(msg["error"])
                return msg.get("result")
        raise TimeoutError(method)

    def eval(self, expression):
        result = self.call(
            "Runtime.evaluate",
            {
                "expression": expression,
                "awaitPromise": True,
                "returnByValue": True,
                "userGesture": True,
            },
        )
        return result.get("result", {}).get("value")


def get_page_ws():
    pages = json.load(urllib.request.urlopen("http://127.0.0.1:9222/json", timeout=10))
    for page in pages:
        if page.get("type") == "page" and "milli.gold/app" in page.get("url", ""):
            return page["webSocketDebuggerUrl"]
    raise RuntimeError("milli.gold app page not found")


SNAPSHOT_JS = r"""
(() => ({
  url: location.href,
  title: document.title,
  text: document.body ? document.body.innerText.slice(0, 4000) : '',
  inputs: [...document.querySelectorAll('input')].map((el, i) => ({
    i,
    type: el.type,
    name: el.name,
    placeholder: el.placeholder,
    value: el.type === 'password' ? '[masked]' : el.value,
    inputmode: el.getAttribute('inputmode'),
    autocomplete: el.autocomplete,
    visible: !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
  })),
  buttons: [...document.querySelectorAll('button,[role=button],a')].slice(0, 40).map((el, i) => ({
    i,
    tag: el.tagName,
    text: (el.innerText || el.textContent || '').trim().slice(0, 120),
    disabled: !!el.disabled,
    href: el.href || '',
    visible: !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length)
  }))
}))()
"""


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--phone", required=True)
    parser.add_argument("--password", required=True)
    args = parser.parse_args()

    cdp = CDP(get_page_ws())
    cdp.call("Runtime.enable")
    cdp.call("Page.enable")
    cdp.eval("location.href = 'https://milli.gold/app/login?stepper=login-form'")
    time.sleep(2)
    print("SNAPSHOT_BEFORE")
    print(json.dumps(cdp.eval(SNAPSHOT_JS), ensure_ascii=False, indent=2))

    fill_credentials = f"""
(async () => {{
  const phone = {json.dumps(args.phone)};
  const password = {json.dumps(args.password)};
  const inputs = [...document.querySelectorAll('input')].filter(el => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
  const phoneInput = inputs.find(el => /tel|text|number/.test(el.type || '') || /mobile|phone|شماره|موبایل/.test((el.placeholder||'') + (el.name||''))) || inputs[0];
  const passwordInput = inputs.find(el => el.type === 'password' || /رمز|password/.test((el.placeholder||'') + (el.name||'')));
  if (!phoneInput || !passwordInput) return {{ok:false, reason:'missing input', count: inputs.length}};
  for (const [input, value] of [[phoneInput, phone], [passwordInput, password]]) {{
    input.focus();
    input.value = value;
    input.dispatchEvent(new Event('input', {{bubbles:true}}));
    input.dispatchEvent(new Event('change', {{bubbles:true}}));
  }}
  return {{ok:true, phoneInput: {{type: phoneInput.type, value: phoneInput.value}}, passwordInput: {{type: passwordInput.type, valueLength: passwordInput.value.length}}}};
}})()
"""
    print("FILL_CREDENTIALS")
    print(json.dumps(cdp.eval(fill_credentials), ensure_ascii=False, indent=2))

    click_continue = r"""
(() => {
  const els = [...document.querySelectorAll('button,[role=button],a')]
    .filter(el => !!(el.offsetWidth || el.offsetHeight || el.getClientRects().length));
  const candidates = els.filter(el => !el.disabled && !/disabled/i.test(el.className || ''));
  const preferred = candidates.find(el => /^ورود به میلی$/.test((el.innerText || el.textContent || '').trim()))
    || candidates.find(el => /^(ادامه|ورود|تایید|تأیید)/.test((el.innerText || el.textContent || '').trim()));
  if (!preferred) return {ok:false, reason:'no clickable'};
  preferred.click();
  return {ok:true, text:(preferred.innerText || preferred.textContent || '').trim(), tag: preferred.tagName};
})()
"""
    print("CLICK_AFTER_CREDENTIALS")
    print(json.dumps(cdp.eval(click_continue), ensure_ascii=False, indent=2))
    time.sleep(3)
    snap = cdp.eval(SNAPSHOT_JS)
    print("SNAPSHOT_AFTER_CREDENTIALS")
    print(json.dumps(snap, ensure_ascii=False, indent=2))

    text = (snap or {}).get("text", "")
    if any(x in text for x in ["کد", "رمز یکبار", "تایید شماره", "تأیید شماره", "پیامک"]):
        print("STOP_AT_OTP")
        return


if __name__ == "__main__":
    main()
