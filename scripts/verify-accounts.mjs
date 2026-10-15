import assert from "node:assert/strict";

// Read-only page checks. Does not submit credentials, create accounts or initiate payment.
const origin = new URL(process.argv[2] ?? "http://127.0.0.1:3014");
const selection = "/order?package=ats-cv&tier=signature&level=3-to-9&delivery=normal";
const get = (path) => fetch(new URL(path, origin), { redirect: "manual", signal: AbortSignal.timeout(30000) });
for (const [path, other] of [["signup", "login"], ["login", "signup"]]) {
  const response = await get(`/${path}?next=${encodeURIComponent(selection)}`);
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.ok(html.includes("noindex"));
  assert.ok(html.includes("Continue with Google") || html.includes("Sign up with Google"));
  assert.ok(html.includes(`/${other}?next=${encodeURIComponent(selection)}`), "login/signup must retain selected tier and service");
  console.log(`PASS rendered ${path}: Google/email entry and preserved order continuation`);
}
const checkout = await get("/checkout?order=12345678-1234-1234-1234-123456789abc");
assert.equal(checkout.status, 307);
const login = new URL(checkout.headers.get("location"), origin);
assert.equal(login.pathname, "/login");
assert.ok(login.searchParams.get("next").startsWith("/checkout?order="));
console.log("PASS signed-out checkout redirects to login, not to a gateway");

const callback = await get("/auth/callback?next=//evil.test");
const destination = new URL(callback.headers.get("location"), origin);
const loopback = new Set(["localhost", "127.0.0.1", "[::1]"]);
// Next's production preview normalizes a loopback request hostname to localhost.
assert.ok(destination.origin === origin.origin || (loopback.has(origin.hostname) && loopback.has(destination.hostname) && destination.port === origin.port));
assert.equal(destination.pathname, "/login");
assert.equal(destination.searchParams.get("error"), "oauth");
console.log("PASS invalid OAuth callback stays on the site");
