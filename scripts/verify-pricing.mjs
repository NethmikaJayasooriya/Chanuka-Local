import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import ts from "typescript";

// Exercise the real shared source, without accounts, payments or database writes.
const code = ts.transpileModule(fs.readFileSync(new URL("../src/lib/pricing.ts", import.meta.url), "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const exports = {};
vm.runInNewContext(code, { exports });
const p = exports;
const expected = {
  essential: { cv: [3950, 5950, 9950], linkedin: [3950, 5950, 9950], "cover-letter": [2950, 3950, 5950], "foreign-cv": [4950, 7450, 10950], "cv-review": [1490, 1990, 2490] },
  signature: { cv: [7500, 13500, 19500], linkedin: [7500, 13500, 19500], "cover-letter": [5500, 8500, 13500], "foreign-cv": [12500, 17500, 28500], "cv-review": [2500, 3500, 4500] },
};
let cells = 0, quotes = 0;
for (const [tier, matrix] of Object.entries(expected)) {
  for (const [service, prices] of Object.entries(matrix)) {
    prices.forEach((price, index) => {
      const level = p.levels[index].id;
      assert.equal(p.TIER_PRICES[tier][service][level], price);
      const pkg = p.packages.find((item) => item.includes.length === 1 && item.includes[0] === service);
      assert.equal(p.resolveOrder(pkg.id, level, "normal", tier).total_usd, price);
      cells++;
    });
  }
  for (const pkg of p.packages) for (const level of p.levels) for (const delivery of p.deliveries) {
    const q = p.quote(pkg, level.id, delivery.id, tier);
    const sum = q.includedServices.reduce((total, id) => total + p.TIER_PRICES[tier][id][level.id], 0);
    assert.equal(q.total, sum);
    const saved = p.resolveOrder(pkg.id, level.id, delivery.id, tier);
    assert.equal(saved.total_usd, q.total);
    assert.equal(saved.package_id, `${tier}:${pkg.id}`);
    assert.ok(saved.package_name.startsWith(tier === "essential" ? "Essential ·" : "Signature ·"));
    quotes++;
  }
}
for (const invalid of [undefined, null, "", "premium", [], {}, "__proto__"]) {
  assert.equal(p.resolveOrder("ats-cv", "under-2", "normal", invalid), null);
}
for (const [pkg, level, delivery] of [["no-such-service", "under-2", "normal"], ["ats-cv", "wrong-level", "normal"], ["ats-cv", "under-2", "bad-speed"]]) {
  assert.equal(p.resolveOrder(pkg, level, delivery, "essential"), null);
}
assert.equal(p.BASE_PRICES.consultation["over-10"], 27500);
console.log(`PASS ${cells} supplied price cells; ${quotes} tier/level/package/delivery quotes; invalid-selection rejection; retained consultation pricing`);

if (process.argv[2]) {
  const origin = new URL(process.argv[2]);
  const get = async (path) => {
    const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(30000) });
    assert.equal(response.status, 200, path);
    return response.text();
  };
  const html = await get("/packages");
  let links = 0;
  for (const [tier, matrix] of Object.entries(expected)) {
    for (const [service, prices] of Object.entries(matrix)) {
      for (let index = 0; index < prices.length; index++) {
        const pkg = p.packages.find((item) => item.includes.length === 1 && item.includes[0] === service);
        const level = p.levels[index];
        const price = p.formatLKR(prices[index]);
        const url = `/order?package=${pkg.id}&tier=${tier}&level=${level.id}&delivery=normal`;
        assert.ok(html.includes(url.replaceAll("&", "&amp;")), `price-list order link ${url}`);
        const order = await get(url);
        assert.ok(order.includes(`${tier === "essential" ? "Essential" : "Signature"} · ${pkg.name}`), `order tier ${url}`);
        assert.ok(order.includes(price), `order price ${url}`);
        const checkout = await get(`/checkout?package=${pkg.id}&tier=${tier}&level=${level.id}&delivery=normal`);
        assert.ok(checkout.includes(price), `checkout price ${url}`);
        assert.ok(checkout.includes(`tier=${tier}`), `checkout retains tier ${url}`);
        links++;
      }
    }
  }
  for (const [path, service] of [["/cv-writing", "cv"], ["/linkedin-optimisation", "linkedin"], ["/cover-letter-writing", "cover-letter"], ["/cv-review", "cv-review"]]) {
    const page = await get(path);
    const schemas = [...page.matchAll(/<script[^>]+type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map((match) => JSON.parse(match[1]));
    const data = schemas.find((schema) => schema["@type"] === "Service");
    assert.deepEqual(data.offers.map((offer) => Number(offer.price)), [...expected.essential[service], ...expected.signature[service]]);
  }
  console.log(`PASS rendered price list, ${links} tier-aware order and checkout selections, four service offer schemas at ${origin.origin}`);
}
