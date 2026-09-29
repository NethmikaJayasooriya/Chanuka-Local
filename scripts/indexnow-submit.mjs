// Submit every URL in the live sitemap to IndexNow after a deploy.
// Usage: node scripts/indexnow-submit.mjs [https://chanukajeewantha.com]
const base = (process.argv[2] || "https://chanukajeewantha.com").replace(/\/$/, "");
const KEY = "88c9511b6c1b2ef4367246561ddee2c9";
const index = await (await fetch(`${base}/sitemap.xml`)).text();
const maps = [...index.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = [];
for (const m of maps) {
  const xml = await (await fetch(m)).text();
  urls.push(...[...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((x) => x[1]));
}
const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(base).host, key: KEY, keyLocation: `${base}/${KEY}.txt`, urlList: urls }),
});
console.log(`Submitted ${urls.length} URLs to IndexNow: HTTP ${res.status}`);
