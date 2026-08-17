import { createServer } from "node:http";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HOST = "127.0.0.1";
const PORT = Number(process.env.SHEMSH_WIREFRAME_PRICE_PORT || 4173);
const CACHE_MS = 60_000;
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/139.0.0.0 Safari/537.36";
const PROJECT_ROOT = dirname(dirname(fileURLToPath(import.meta.url)));
const WIREFRAME_PATH = join(PROJECT_ROOT, "06-wireframes-and-testing", "artifacts", "multi-metal-waves-1-and-3-wireframe.html");
let cache = null;
let cachedAt = 0;
const execFileAsync = promisify(execFile);

function cookieHeader(response) {
  const values = typeof response.headers.getSetCookie === "function"
    ? response.headers.getSetCookie()
    : [response.headers.get("set-cookie")].filter(Boolean);
  return values.map(value => value.split(";", 1)[0]).join("; ");
}

async function fetchJson(url, headers = {}) {
  const response = await fetch(url, { headers: { Accept: "application/json", "User-Agent": USER_AGENT, ...headers }, redirect: "follow" });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
}

async function fetchMelliGoldWithWindowsSession() {
  const script = `$ua='${USER_AGENT}'; $landing=Invoke-WebRequest -Uri 'https://melligold.com/' -UserAgent $ua -SessionVariable mgSession -MaximumRedirection 5 -TimeoutSec 20; $headers=@{Referer='https://melligold.com/';Accept='application/json'}; $gold=Invoke-RestMethod -Uri 'https://melligold.com/api/v1/exchange/buy-sell-price/?symbol=XAU18&format=json' -UserAgent $ua -WebSession $mgSession -Headers $headers -MaximumRedirection 3 -TimeoutSec 20; $silver=Invoke-RestMethod -Uri 'https://melligold.com/api/v1/exchange/buy-sell-price/?symbol=XAG&format=json' -UserAgent $ua -WebSession $mgSession -Headers $headers -MaximumRedirection 3 -TimeoutSec 20; @{gold=$gold.data;silver=$silver.data}|ConvertTo-Json -Compress -Depth 5`;
  const { stdout } = await execFileAsync("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", script], { timeout: 25_000, windowsHide: true, maxBuffer: 1024 * 1024 });
  return JSON.parse(stdout.trim());
}

async function loadLivePrices() {
  if (cache && Date.now() - cachedAt < CACHE_MS) return cache;

  const rates = {};
  const sources = {};
  const tasks = [];

  tasks.push((async () => {
    let gold, silver;
    try {
      const landing = await fetch("https://melligold.com/", { headers: { "User-Agent": USER_AGENT, Accept: "text/html" } });
      if (!landing.ok) throw new Error(`MelliGold session returned ${landing.status}`);
      const cookie = cookieHeader(landing);
      const commonHeaders = { Referer: "https://melligold.com/", ...(cookie ? { Cookie: cookie } : {}) };
      [gold, silver] = await Promise.all([
        fetchJson("https://melligold.com/api/v1/exchange/buy-sell-price/?symbol=XAU18&format=json", commonHeaders).then(result => result.data),
        fetchJson("https://melligold.com/api/v1/exchange/buy-sell-price/?symbol=XAG&format=json", commonHeaders).then(result => result.data),
      ]);
    } catch (error) {
      ({ gold, silver } = await fetchMelliGoldWithWindowsSession());
    }
    rates.gold = Number(gold?.price_sell);
    rates.silver = Number(silver?.price_sell);
    sources.gold = { provider: "melligold.com", timestamp: gold?.timestamp || null };
    sources.silver = { provider: "melligold.com", timestamp: silver?.timestamp || null };
  })());

  tasks.push((async () => {
    const copper = await fetchJson("https://api.shemshcopper.ir/api/app/gold/price", { Referer: "https://shemshcopper.ir/" });
    rates.copper = Math.round(Number(copper?.price) / 10);
    sources.copper = { provider: "shemshcopper.ir", timestamp: copper?.updated_at || null };
  })());

  const settled = await Promise.allSettled(tasks);
  const errors = settled.filter(item => item.status === "rejected").map(item => item.reason?.message || "source unavailable");
  if (!Object.keys(rates).length) throw new Error(errors.join("; ") || "No live price source returned data");

  cache = { rates, sources, updatedAt: new Date().toISOString(), partial: errors.length > 0, errors };
  cachedAt = Date.now();
  return cache;
}

const server = createServer(async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Accept, Content-Type");
  response.setHeader("Cache-Control", "no-store");
  if (request.method === "OPTIONS") {
    response.writeHead(204).end();
    return;
  }
  if (request.url === "/health") {
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" }).end(JSON.stringify({ ok: true }));
    return;
  }
  if (request.method === "GET" && (request.url === "/" || request.url.startsWith("/wireframe"))) {
    const html = await readFile(WIREFRAME_PATH);
    response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" }).end(html);
    return;
  }
  if (request.method !== "GET" || request.url !== "/api/live-prices") {
    response.writeHead(404, { "Content-Type": "application/json; charset=utf-8" }).end(JSON.stringify({ error: "Not found" }));
    return;
  }
  try {
    const payload = await loadLivePrices();
    response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" }).end(JSON.stringify(payload));
  } catch (error) {
    response.writeHead(503, { "Content-Type": "application/json; charset=utf-8" }).end(JSON.stringify({ error: "Live prices unavailable", detail: error.message }));
  }
});

server.listen(PORT, HOST, () => {
  console.log(`Shemsh wireframe live prices: http://${HOST}:${PORT}/api/live-prices`);
});
