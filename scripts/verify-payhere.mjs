import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import { createRequire } from "node:module";
import { createHash } from "node:crypto";
import ts from "typescript";

// Isolated route tests. Dummy credentials and in-memory database/auth only.
// Never read .env.local, call a gateway, create accounts, or write production data.
const require = createRequire(import.meta.url);
const site = { url: "https://www.chanukajeewantha.lk" };
const env = { NODE_ENV: "production", PAYHERE_MERCHANT_ID: "123456", PAYHERE_MERCHANT_SECRET: "dummy-test-secret-not-a-real-key", PAYHERE_SANDBOX: "true", PAYHERE_SITE_URL: site.url };
function load(path, imports = {}, customEnv = env, globals = {}) {
  const source = fs.readFileSync(new URL(`../${path}`, import.meta.url), "utf8");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const exports = {};
  vm.runInNewContext(output, { exports, Buffer, URL, Request, Response, FormData, process: { env: customEnv }, ...globals, require: (id) => {
    if (id === "server-only") return {};
    if (id === "@/lib/site") return { site, SITE_KEY: "lk" };
    if (id === "next/server") return { NextResponse: Response };
    if (id in imports) return imports[id];
    if (id.startsWith("node:")) return require(id);
    throw new Error(`Unmocked dependency ${id}`);
  } }, { filename: path });
  return exports;
}
const pricing = load("src/lib/pricing.ts");
const payhere = load("src/lib/payhere.ts");
const redirect = load("src/lib/auth-redirect.ts").safeReturnPath;
let checks = 0;
async function test(name, run) { await run(); checks++; console.log(`PASS ${name}`); }

await test("official hash protocol and constant-time comparison", () => {
  const md5 = (v) => createHash("md5").update(v).digest("hex").toUpperCase();
  const expected = md5("123456LK-TEST-15950.00LKR" + md5(env.PAYHERE_MERCHANT_SECRET));
  assert.equal(payhere.createCheckoutHash("123456", "LK-TEST-1", "5950.00", "LKR", env.PAYHERE_MERCHANT_SECRET), expected);
  assert.equal(payhere.signaturesMatch(expected, expected.toLowerCase()), true);
  assert.equal(payhere.signaturesMatch(expected, "bad"), false);
});
await test("exact LKR decimals and integer overflow rejection", () => {
  assert.equal(payhere.formatPayHereAmount(5950), "5950.00");
  for (const value of [-1, 1.25, NaN, Infinity]) assert.throws(() => payhere.formatPayHereAmount(value));
  assert.equal(payhere.amountToMinorUnits("5950.00"), 595000);
  assert.equal(payhere.amountToMinorUnits("1490.5"), 149050);
  for (const value of ["NaN", "1,490.00", "-1", "1.234", "1e3", "9007199254740991.99"]) assert.equal(payhere.amountToMinorUnits(value), null);
});
await test("fail-closed domain settings, sandbox default, canonical callbacks", () => {
  for (const url of ["https://chanukajeewantha.com", "https://evil.test", "https://www.chanukajeewantha.lk/extra", "https://www.chanukajeewantha.lk?x=1", "http://www.chanukajeewantha.lk", "https://user@www.chanukajeewantha.lk"]) {
    assert.equal(load("src/lib/payhere.ts", {}, { ...env, PAYHERE_SITE_URL: url }).isPayHereConfigured(), false);
  }
  assert.equal(load("src/lib/payhere.ts", {}, { ...env, PAYHERE_MERCHANT_SECRET: "" }).isPayHereConfigured(), false);
  const cfg = load("src/lib/payhere.ts", {}, { ...env, PAYHERE_SITE_URL: "https://chanukajeewantha.lk", PAYHERE_SANDBOX: undefined }).getPayHereConfig();
  assert.equal(cfg.siteUrl, site.url);
  assert.equal(cfg.checkoutUrl, "https://sandbox.payhere.lk/pay/checkout");
});
await test("safe login/signup continuation preserves tier and blocks external URLs", () => {
  const next = "/order?package=ats-cv&tier=signature&level=3-to-9&delivery=normal";
  assert.equal(redirect(next), next);
  for (const bad of ["https://evil.test", "//evil.test", "/\\evil.test", "/\nevil.test", null]) assert.equal(redirect(bad), "/dashboard");
});

let user = { id: "test-customer", email: "customer@example.test" };
let order;
let rpcError = false;
let writes = 0;
const events = new Set();
function query() {
  const filters = [];
  const q = {
    select() { return q; },
    eq(key, value) { filters.push([key, value]); return q; },
    maybeSingle: async () => ({ data: order && filters.every(([key, value]) => order[key] === value) ? order : null }),
    update() { writes++; return q; },
    then(resolve) { return Promise.resolve({ error: null }).then(resolve); },
  };
  return q;
}
const db = { from: query, rpc: async (_name, data) => {
  if (rpcError) return { error: { message: "test database unavailable" } };
  const duplicate = events.has(data.p_notification_key);
  events.add(data.p_notification_key);
  if (!duplicate) writes++;
  return { data: !duplicate, error: null };
} };
const imports = {
  "@/lib/payhere": payhere,
  "@/lib/pricing": pricing,
  "@/lib/supabase/guard": { supabaseConfigured: () => true },
  "@/lib/supabase/server": { createClient: async () => ({ auth: { getUser: async () => ({ data: { user } }) } }) },
  "@/lib/supabase/admin": { createAdminClient: () => db },
};
const payment = load("src/app/api/payhere/payment/route.ts", imports).POST;
const notify = load("src/app/api/payhere/notify/route.ts", imports).POST;
const orderId = "12345678-1234-1234-1234-123456789abc";
const billing = { order_id: orderId, phone: "+94 77 123 4567", address: "Test billing address", city: "Colombo", country: "Sri Lanka", amount: 1, currency: "USD" };
const request = (body = billing, origin = site.url) => new Request(`${site.url}/api/payhere/payment`, { method: "POST", headers: { "Content-Type": "application/json", origin }, body: JSON.stringify(body) });
function resetOrder(tier = "essential", pkg = "ats-cv", level = "3-to-9") {
  order = { ...pricing.resolveOrder(pkg, level, "normal", tier), id: orderId, ref: "LK-TEST-1", site: "lk", user_id: "test-customer", customer_name: "Test Customer", customer_email: "customer@example.test", payment_status: "pending" };
}
await test("all 30 tier/service/level selections produce signed LKR checkout", async () => {
  for (const tier of pricing.tiers) for (const service of pricing.listedServices) for (const level of pricing.levels) {
    const pkg = pricing.packages.find((p) => p.includes.length === 1 && p.includes[0] === service);
    resetOrder(tier.id, pkg.id, level.id);
    const response = await payment(request());
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("Cache-Control"), "no-store");
    const data = await response.json();
    assert.equal(data.fields.currency, "LKR");
    assert.equal(data.fields.amount, `${order.total_usd.toFixed(2)}`);
    assert.equal(data.fields.custom_2, "lk");
    assert.equal(data.fields.notify_url, `${site.url}/api/payhere/notify`);
    assert.ok(data.fields.return_url.includes("payment=return"));
    assert.ok(data.fields.cancel_url.includes("payment=cancelled"));
    assert.ok(!JSON.stringify(data).includes(env.PAYHERE_MERCHANT_SECRET));
  }
});
await test("cross-site origin, unsigned customer and foreign-site/order ownership rejected", async () => {
  resetOrder();
  assert.equal((await payment(request(billing, "https://evil.test"))).status, 403);
  const saved = user; user = null;
  assert.equal((await payment(request())).status, 401); user = saved;
  order.site = "com"; assert.equal((await payment(request())).status, 404);
  resetOrder(); order.user_id = "another-customer"; assert.equal((await payment(request())).status, 404);
});
await test("paid/refunded/charged-back, stale price and legacy orders blocked", async () => {
  for (const status of ["paid", "refunded", "charged_back"]) { resetOrder(); order.payment_status = status; assert.equal((await payment(request())).status, 409); }
  resetOrder(); order.total_usd = 1; assert.equal((await payment(request())).status, 409);
  resetOrder(); order.package_id = "ats-cv"; assert.equal((await payment(request())).status, 409);
});
await test("invalid JSON shape, oversized body and incomplete billing rejected", async () => {
  resetOrder();
  assert.equal((await payment(request(null))).status, 400);
  assert.equal((await payment(request({ ...billing, address: "x" }))).status, 400);
  assert.equal((await payment(request({ ...billing, extra: "x".repeat(9000) }))).status, 413);
});
function notification(overrides = {}, sign = true) {
  const fields = { merchant_id: env.PAYHERE_MERCHANT_ID, order_id: "LK-TEST-1", payment_id: "sandbox-test-payment", payhere_amount: "5950.00", payhere_currency: "LKR", status_code: "2", custom_1: orderId, method: "VISA", ...overrides };
  fields.md5sig = sign ? payhere.createNotificationSignature(fields.merchant_id, fields.order_id, fields.payhere_amount, fields.payhere_currency, fields.status_code, env.PAYHERE_MERCHANT_SECRET) : "invalid";
  return new Request(`${site.url}/api/payhere/notify`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(fields) });
}
await test("invalid signature, merchant, amount, currency and order binding cannot record payment", async () => {
  resetOrder(); const before = writes;
  assert.equal((await notify(notification({}, false))).status, 400);
  for (const wrong of [{ merchant_id: "999999" }, { payhere_currency: "USD" }, { payhere_amount: "1.00" }, { status_code: "99" }]) assert.equal((await notify(notification(wrong))).status, 400);
  assert.equal((await notify(notification({ custom_1: "wrong-id" }))).status, 404);
  order.site = "com"; assert.equal((await notify(notification())).status, 404);
  assert.equal(writes, before);
});
await test("signed callback, duplicate handling, all gateway statuses and retryable database failure", async () => {
  resetOrder(); const before = writes;
  assert.equal((await notify(notification())).status, 200);
  assert.equal((await notify(notification())).status, 200);
  assert.equal(writes, before + 1);
  for (const code of ["0", "-1", "-2", "-3"]) assert.equal((await notify(notification({ status_code: code }))).status, 200);
  rpcError = true; assert.equal((await notify(notification({ payment_id: "another-test-payment" }))).status, 500); rpcError = false;
});
const migration = fs.readFileSync(new URL("../supabase/migrations/0004_payhere_payments.sql", import.meta.url), "utf8");
assert.ok(migration.includes("on conflict (notification_key) do nothing"));
assert.ok(migration.includes("grant execute") && migration.includes("to service_role"));

let createdAccounts = 0;
let accountError = null;
const fakeAccountDb = {
  auth: { admin: { createUser: async () => { createdAccounts++; return { data: { user: { id: "test-customer" } }, error: accountError }; } } },
  from: () => ({ upsert: async () => ({ error: null }) }),
};
const account = load("src/app/api/account/create/route.ts", {
  "@/lib/supabase/admin": { createAdminClient: () => fakeAccountDb },
  "@/lib/supabase/guard": { supabaseConfigured: () => true },
}).POST;
const accountRequest = (body) => new Request(`${site.url}/api/account/create`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
const accountDetails = { email: "customer@example.test", password: "dummy-test-password", full_name: "Test Customer", phone: "0771234567" };
await test("account validation and private provider error handling", async () => {
  for (const body of [null, [], { ...accountDetails, email: "invalid" }, { ...accountDetails, password: "short" }]) assert.equal((await account(accountRequest(body))).status, 400);
  assert.equal(createdAccounts, 0);
  assert.equal((await account(accountRequest(accountDetails))).status, 200);
  accountError = { message: "User already registered" };
  assert.equal((await account(accountRequest(accountDetails))).status, 409);
  accountError = { message: "Private backend error details" };
  const failed = await account(accountRequest(accountDetails));
  assert.equal((await failed.json()).reason, "create_failed");
  accountError = null;
});
await test("existing sign-in and new-account ordering flow without production writes", async () => {
  let signIns = 0;
  const client = { auth: { signInWithPassword: async () => ({ error: ++signIns === 1 ? { message: "Not yet registered" } : null }) } };
  const auth = load("src/lib/auth.ts", { "@/lib/supabase/client": { createClient: () => client } }, { ...env, NEXT_PUBLIC_SUPABASE_URL: "https://test.invalid" }, {
    fetch: async (_url, init) => account(accountRequest(JSON.parse(init.body))),
  });
  const before = createdAccounts;
  assert.equal((await auth.ensureAccount(accountDetails.email, accountDetails.password, accountDetails.full_name)).ok, true);
  assert.equal(createdAccounts, before + 1);
  assert.equal((await auth.ensureAccount(accountDetails.email, accountDetails.password)).ok, true);
  assert.equal(createdAccounts, before + 1, "existing accounts only sign in");
});
console.log(`${checks} isolated checks passed. No external calls or real payment/account writes.`);
