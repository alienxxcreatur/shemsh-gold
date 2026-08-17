const CACHE_MS = 60_000;
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/139.0.0.0 Safari/537.36";
let cache = null;
let cachedAt = 0;

function cookieHeader(response) {
  const values = typeof response.headers.getSetCookie === "function" ? response.headers.getSetCookie() : [response.headers.get("set-cookie")].filter(Boolean);
  return values.map(value => value.split(";", 1)[0]).join("; ");
}

async function fetchJson(url, headers = {}) {
  const response = await fetch(url, { headers: { Accept: "application/json", "User-Agent": USER_AGENT, ...headers }, redirect: "follow" });
  if (!response.ok) throw new Error(`${url} returned ${response.status}`);
  return response.json();
}

async function loadLivePrices() {
  if (cache && Date.now() - cachedAt < CACHE_MS) return cache;
  const rates = {}, sources = {};
  const tasks = [
    (async () => {
      const landing = await fetch("https://melligold.com/", { headers: { "User-Agent": USER_AGENT, Accept: "text/html" } });
      if (!landing.ok) throw new Error(`MelliGold session returned ${landing.status}`);
      const cookie = cookieHeader(landing), commonHeaders = { Referer: "https://melligold.com/", ...(cookie ? { Cookie: cookie } : {}) };
      const [gold, silver] = await Promise.all([
        fetchJson("https://melligold.com/api/v1/exchange/buy-sell-price/?symbol=XAU18&format=json", commonHeaders),
        fetchJson("https://melligold.com/api/v1/exchange/buy-sell-price/?symbol=XAG&format=json", commonHeaders),
      ]);
      rates.gold = Number(gold?.data?.price_sell); rates.silver = Number(silver?.data?.price_sell);
      sources.gold = { provider: "melligold.com", timestamp: gold?.data?.timestamp || null };
      sources.silver = { provider: "melligold.com", timestamp: silver?.data?.timestamp || null };
    })(),
    (async () => {
      const copper = await fetchJson("https://api.shemshcopper.ir/api/app/gold/price", { Referer: "https://shemshcopper.ir/" });
      rates.copper = Math.round(Number(copper?.price) / 10);
      sources.copper = { provider: "shemshcopper.ir", timestamp: copper?.updated_at || null };
    })(),
  ];
  const settled = await Promise.allSettled(tasks), errors = settled.filter(item => item.status === "rejected").map(item => item.reason?.message || "source unavailable");
  if (!Object.keys(rates).length) throw new Error(errors.join("; ") || "No live price source returned data");
  cache = { rates, sources, updatedAt: new Date().toISOString(), partial: errors.length > 0, errors }; cachedAt = Date.now();
  return cache;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname !== "/api/live-prices") return env.ASSETS.fetch(request);
    const headers = { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=30" };
    try { return new Response(JSON.stringify(await loadLivePrices()), { status: 200, headers }); }
    catch (error) { return new Response(JSON.stringify({ error: "Live prices unavailable", detail: error.message }), { status: 503, headers }); }
  },
};
