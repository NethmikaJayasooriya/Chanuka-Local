import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import ts from "typescript";

// In-memory customer/order/upload checks. No .env, network or real records.
const require = createRequire(import.meta.url);
const origin = "https://www.chanukajeewantha.lk";
function load(path, imports = {}) {
  const source = fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText;
  const exports = {};
  vm.runInNewContext(code, { exports, URL, Request, Response, FormData, File, Uint8Array, TextDecoder, process: { env: {} }, require: (id) => {
    if (id === "@/lib/site") return { site: { url: origin }, SITE_KEY: "lk" };
    if (id === "next/server") return { NextResponse: Response };
    if (id in imports) return imports[id];
    if (id === "react/jsx-runtime") return require(id);
    if (id.startsWith("node:")) return require(id);
    throw Error(`Unmocked dependency ${id}`);
  } });
  return exports;
}
const validation = load("src/lib/request-validation.ts");
const pricing = load("src/lib/pricing.ts");
let user, order, orderWrites, briefWrites, uploads, progressFilters, failUpload, failBrief, failOrder;
function reset() {
  user = { id: "test-customer", email: "customer@example.test" };
  order = { id: "12345678-1234-1234-1234-123456789abc", site: "lk", user_id: user.id, payment_status: "pending" };
  orderWrites = []; briefWrites = []; uploads = []; progressFilters = [];
  failUpload = failBrief = failOrder = false;
}
function query(table) {
  const filters = [];
  let inserted, updating = false;
  const q = {
    select() { return q; },
    eq(key, value) { filters.push([key, value]); return q; },
    maybeSingle: async () => ({ data: order && filters.every(([key, value]) => order[key] === value) ? order : null }),
    insert(data) { inserted = data; return q; },
    single: async () => {
      if (failOrder) return { data: null, error: { message: "Private database failure" } };
      orderWrites.push(inserted);
      return { data: { id: order.id, ref: "LK-TEST" }, error: null };
    },
    upsert: async () => ({ error: null }),
    update() { updating = true; return q; },
    then(resolve) {
      if (updating) progressFilters.push(filters);
      if (inserted && table === "intake_submissions" && !failBrief) briefWrites.push(inserted);
      return Promise.resolve({ error: inserted && failBrief ? { message: "Private storage metadata" } : null }).then(resolve);
    },
  };
  return q;
}
const db = { from: query, storage: { from: () => ({ upload: async (path, data, options) => {
  uploads.push({ path, data, options }); return { error: failUpload ? { message: "Private upload details" } : null };
} }) } };
const imports = {
  "@/lib/request-validation": validation,
  "@/lib/pricing": pricing,
  "@/lib/supabase/guard": { supabaseConfigured: () => true },
  "@/lib/supabase/server": { createClient: async () => ({ auth: { getUser: async () => ({ data: { user } }) } }) },
  "@/lib/supabase/admin": { createAdminClient: () => db },
};
const create = load("src/app/api/orders/create/route.ts", imports).POST;
const intake = load("src/app/api/intake/route.ts", imports).POST;
const selection = { package_id: "ats-cv", tier_id: "signature", level_id: "3-to-9", delivery_id: "normal", name: "Test Customer", target_role: "Engineer", target_country: "Sri Lanka" };
const json = (body, headers = {}) => new Request(`${origin}/api/orders/create`, { method: "POST", headers: { "Content-Type": "application/json", Origin: origin, ...headers }, body: JSON.stringify(body) });
function brief({ id = order.id, file, ...overrides } = {}) {
  const form = new FormData();
  for (const [key, value] of Object.entries({ name: "Test Customer", email: "customer@example.test", phone: "0771234567", targetRole: "Engineer", ...overrides })) form.set(key, value);
  if (id) form.set("order_id", id);
  if (file) form.set("cv", file);
  return new Request(`${origin}/api/intake`, { method: "POST", headers: { Origin: origin }, body: form });
}
let checks = 0;
async function test(name, run) { reset(); await run(); checks++; console.log(`PASS ${name}`); }
await test("order input: rejects cross-site writes, malformed shape and non-string customer details", async () => {
  assert.equal((await create(json(selection, { Origin: "https://evil.test" }))).status, 403);
  for (const body of [null, [], { ...selection, name: 1234 }, { ...selection, target_role: {} }]) assert.equal((await create(json(body))).status, 400);
  assert.equal(orderWrites.length, 0);
});
await test("request body has a real streamed byte limit, even without Content-Length", async () => {
  assert.equal((await create(json({ ...selection, notes: "x".repeat(18000) }))).status, 413);
  assert.equal((await create(json(selection, { "Content-Type": "text/plain" }))).status, 415);
  assert.equal(orderWrites.length, 0);
});
await test("order totals are server-derived, account-owned and local; private DB errors stay private", async () => {
  const response = await create(json({ ...selection, total_usd: 1, payment_status: "paid", site: "com", user_id: "attacker", email: "attacker@example.test" }));
  assert.equal(response.status, 200);
  assert.equal(orderWrites[0].total_usd, 13500);
  assert.equal(orderWrites[0].customer_email, user.email);
  assert.equal(orderWrites[0].site, "lk");
  assert.equal(orderWrites[0].user_id, user.id);
  assert.equal(orderWrites[0].payment_status, "pending");
  failOrder = true;
  const failed = await create(json(selection));
  assert.equal(failed.status, 500);
  assert.equal((await failed.json()).reason, "insert_failed");
});
await test("signed-out customer cannot create orders", async () => {
  user = null;
  assert.equal((await create(json(selection))).status, 401);
  assert.equal(orderWrites.length, 0);
});
await test("a foreign-site or other-customer brief cannot fall back to a new guest order", async () => {
  order.site = "com"; assert.equal((await intake(brief())).status, 404);
  order.site = "lk"; order.user_id = "someone-else"; assert.equal((await intake(brief())).status, 404);
  order.user_id = "test-customer"; user = null; assert.equal((await intake(brief())).status, 401);
  assert.equal(briefWrites.length, 0); assert.equal(orderWrites.length, 0);
});
await test("brief validation rejects missing required fields and invalid or oversized CVs before writes", async () => {
  assert.equal((await intake(brief({ name: "" }))).status, 400);
  for (const file of [new File(["fake"], "cv.pdf", { type: "application/pdf" }), new File(["script"], "cv.html", { type: "text/html" })]) assert.equal((await intake(brief({ file }))).status, 400);
  const huge = new File([new Uint8Array(3 * 1024 * 1024 + 1)], "cv.pdf", { type: "application/pdf" });
  assert.equal((await intake(brief({ file: huge }))).status, 413);
  assert.equal(briefWrites.length, 0); assert.equal(uploads.length, 0);
});
await test("failed CV upload never claims brief success or exposes storage errors", async () => {
  failUpload = true;
  const response = await intake(brief({ file: new File(["%PDF-1.7\nTest fixture"], "cv.pdf", { type: "application/pdf" }) }));
  assert.equal(response.status, 500); assert.equal((await response.json()).reason, "cv_upload_failed");
  assert.equal(briefWrites.length, 0);
});
await test("valid CV saves privately to the account; unpaid orders cannot enter writing status", async () => {
  const response = await intake(brief({ file: new File(["%PDF-1.7\nTest fixture"], "cv.pdf", { type: "application/pdf" }) }));
  assert.equal(response.status, 200);
  assert.equal(briefWrites[0].order_id, order.id);
  assert.equal(briefWrites[0].user_id, user.id);
  assert.equal(briefWrites[0].site, "lk");
  assert.ok(uploads[0].path.startsWith(`${user.id}/`));
  assert.equal(uploads[0].options.upsert, false);
  assert.ok(progressFilters[0].some(([key, value]) => key === "payment_status" && value === "paid"));
  assert.ok(progressFilters[0].some(([key, value]) => key === "site" && value === "lk"));
});
await test("failed brief persistence is not reported as success", async () => {
  failBrief = true;
  const response = await intake(brief());
  assert.equal(response.status, 500); assert.equal((await response.json()).reason, "brief_not_saved");
  assert.equal(progressFilters.length, 0);
});
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const navigate = (url) => { throw Error(`REDIRECT:${url}`); };
let hasBrief = true;
const pageImports = {
  "next/link": { default: ({ href, children, ...props }) => React.createElement("a", { ...props, href }, children) },
  "next/navigation": { redirect: navigate },
  "@/lib/customer": { getMyOrder: async () => order, orderHasBrief: async () => hasBrief },
  "@/lib/supabase/guard": { supabaseConfigured: () => true, requireUser: async () => { if (!user) navigate("/login"); } },
  "@/lib/pricing": pricing,
  "@/lib/payhere": { isPayHereConfigured: () => true, getPayHereConfig: () => ({ sandbox: false }) },
  "@/components/PageHeader": { PageHeader: ({ title, lead }) => React.createElement("header", null, title, lead) },
  "@/components/PaymentStatusPoller": { PaymentStatusPoller: () => null },
  "@/components/PayHerePaymentForm": { PayHerePaymentForm: () => React.createElement("form", { "data-payment-form": "true" }) },
};
const checkout = load("src/app/checkout/page.tsx", pageImports).default;
const confirmation = load("src/app/order/confirmation/page.tsx", pageImports).default;
const page = (render, params) => render({ searchParams: Promise.resolve(params) });
await test("gateway return URL cannot mark an order paid or invite another payment while awaiting confirmation", async () => {
  order.ref = "LK-TEST"; order.total_usd = 13500;
  const returned = renderToStaticMarkup(await page(checkout, { order: order.id, payment: "return" }));
  assert.ok(returned.includes("Please do not pay again"));
  assert.ok(!returned.includes('data-payment-form="true"'));
  assert.equal(order.payment_status, "pending");
  const pending = renderToStaticMarkup(await page(checkout, { order: order.id }));
  assert.ok(pending.includes('data-payment-form="true"'));
  order.payment_status = "paid";
  const paid = renderToStaticMarkup(await page(checkout, { order: order.id, payment: "return" }));
  assert.ok(paid.includes("Payment has been verified"));
  assert.ok(!paid.includes('data-payment-form="true"'));
  for (const status of ["refunded", "charged_back"]) {
    order.payment_status = status;
    assert.ok(!renderToStaticMarkup(await page(checkout, { order: order.id })).includes('data-payment-form="true"'));
  }
});
await test("confirmation checks sign-in, a saved order, a received brief and actual payment state", async () => {
  hasBrief = true;
  const pending = renderToStaticMarkup(await page(confirmation, { order: order.id }));
  assert.ok(pending.includes("payment has not yet been confirmed"));
  assert.ok(pending.includes("Continue to payment"));
  order.payment_status = "paid";
  assert.ok(!renderToStaticMarkup(await page(confirmation, { order: order.id })).includes("Continue to payment"));
  hasBrief = false;
  await assert.rejects(page(confirmation, { order: order.id }), /REDIRECT:\/intake/);
  user = null;
  await assert.rejects(page(confirmation, { order: order.id }), /REDIRECT:\/login/);
  user = { id: "test-customer" }; order = null;
  await assert.rejects(page(confirmation, { order: "missing" }), /REDIRECT:\/dashboard/);
});
console.log(`${checks} isolated customer/order/upload checks passed. No production writes or payments.`);
