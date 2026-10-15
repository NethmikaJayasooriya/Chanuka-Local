import assert from "node:assert/strict";

// Read-only smoke checks against the already running preview. No credentials,
// analytics events, accounts or order data are submitted.
const origin = new URL(process.argv[2] ?? "http://127.0.0.1:3014");
const canonicalOrigin = "https://www.chanukajeewantha.lk";
const get = (path) => fetch(new URL(path, origin), { redirect: "manual", signal: AbortSignal.timeout(30000) });
const checks = [];
const test = async (name, run) => {
  try { await run(); checks.push(name); console.log(`PASS ${name}`); }
  catch (error) { console.error(`FAIL ${name}: ${error.message}`); process.exitCode = 1; }
};

for (const path of ["/", "/cv-writing", "/linkedin-optimisation", "/linkedin-profile-guide-sri-lanka", "/how-to-choose-a-cv-writer-sri-lanka", "/contact", "/reviews"]) {
  await test(`indexable metadata and valid JSON-LD: ${path}`, async () => {
    const response = await get(path);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.equal((html.match(/<h1(?:\s|>)/g) ?? []).length, 1, "page must have one H1");
    const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/)?.[1];
    assert.equal(new URL(canonical).href, new URL(`${canonicalOrigin}${path === "/" ? "" : path}`).href);
    assert.ok(html.includes('name="description"'), "description required");
    assert.ok(!/<meta[^>]+name="robots"[^>]+content="[^"]*noindex/.test(html), "public page must be indexable");
    const schemas = [...html.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
    assert.ok(schemas.length > 0);
    assert.ok(!schemas.some((schema) => JSON.stringify(schema).includes('"aggregateRating"')), "no self-serving business review markup");
    if (path === "/cv-writing" || path === "/linkedin-optimisation") {
      const service = schemas.find((schema) => schema["@type"] === "Service");
      assert.deepEqual(service.offers.map((offer) => Number(offer.price)), [3950, 5950, 9950, 7500, 13500, 19500]);
      assert.ok(service.offers.every((offer) => offer.priceCurrency === "LKR"));
      assert.ok(html.includes('lang="si-LK"'), "Sinhala summary required");
    }
    if (path === "/") { assert.ok(html.includes("121")); assert.ok(html.includes("JP60D8cDsvYFyST05")); }
  });
}

for (const [path, destination] of [
  ["/linkedin-optimization", "/linkedin-optimisation"],
  ["/pricing", "/packages"],
  ["/blog/the-ats-cv-checklist-20-things-to-check-before-you-apply", "/resources/cv-checklist"],
  ["/cv-writing-guides/hospitality-tourism-industry-cv-guide-sri-lanka", "/industries/hospitality"],
]) {
  await test(`permanent redirect: ${path}`, async () => {
    const response = await get(path);
    assert.ok([301, 308].includes(response.status));
    assert.equal(new URL(response.headers.get("location"), origin).pathname, destination);
    assert.equal((await get(destination)).status, 200);
  });
}

await test("robots and private workflow noindex", async () => {
  const robots = await (await get("/robots.txt")).text();
  assert.ok(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
  assert.ok(robots.includes("OAI-SearchBot"));
  assert.ok(robots.includes("Disallow: /admin"));
  const order = await get("/order");
  assert.ok(order.headers.get("x-robots-tag")?.includes("noindex"));
  assert.equal((await get("/this-page-does-not-exist")).status, 404);
});

await test("sitemap index and all code-built canonical URLs", async () => {
  const index = await (await get("/sitemap.xml")).text();
  assert.ok(index.includes("<sitemapindex"));
  const maps = [...index.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]));
  assert.ok(maps.length > 0);
  const paths = new Set();
  for (const map of maps) {
    assert.equal(map.origin, canonicalOrigin);
    const response = await get(map.pathname);
    assert.equal(response.status, 200);
    const xml = await response.text();
    assert.ok(xml.includes("<urlset"));
    for (const match of xml.matchAll(/<loc>(.*?)<\/loc>/g)) {
      const url = new URL(match[1]);
      assert.equal(url.origin, canonicalOrigin);
      assert.ok(!/^\/(admin|dashboard|checkout|login|signup|order)(\/|$)/.test(url.pathname));
      paths.add(url.pathname);
    }
  }
  assert.ok(paths.has("/linkedin-profile-guide-sri-lanka"), "new guide must be discoverable");
  // Crawl four at a time to exercise every listed route without flooding
  // the preview or its shared backend.
  const queue = [...paths];
  const failures = [];
  await Promise.all(Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const path = queue.shift();
      const response = await get(path);
      if (response.status !== 200) failures.push(`${path}: ${response.status}`);
      await response.arrayBuffer();
    }
  }));
  assert.deepEqual(failures, []);
  console.log(`Checked ${paths.size} distinct sitemap URLs.`);
});

await test("optional AI reference agrees with visible services", async () => {
  const reference = await (await get("/llms-full.txt")).text();
  assert.ok(reference.includes("121"));
  assert.ok(reference.includes("### LinkedIn Optimization"));
  assert.ok(reference.includes("linkedin-profile-guide-sri-lanka"));
});

console.log(`${checks.length} checks passed${process.exitCode ? "; failures above" : ""}.`);
