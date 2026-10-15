import assert from "node:assert/strict";
import nextEnv from "@next/env";

// Start and cancel only our own OAuth flow. Never visit Google, authenticate,
// create an account or print OAuth state, credentials or cookies.
nextEnv.loadEnvConfig(process.cwd());
const base = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL);
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
assert.ok(key, "Supabase public key is required");
const origin = "https://www.chanukajeewantha.lk";
const selection = "/order?package=ats-cv&tier=signature&level=3-to-9&delivery=normal";
const plain = process.argv.includes("--plain");
const callback = `${origin}/auth/callback${plain ? "" : `?next=${encodeURIComponent(selection)}`}`;
const start = new URL("/auth/v1/authorize", base);
start.searchParams.set("provider", "google");
start.searchParams.set("redirect_to", callback);
const response = await fetch(start, {
  headers: { apikey: key }, redirect: "manual", signal: AbortSignal.timeout(30000),
});
assert.equal(response.status, 302, "Google provider must accept OAuth initiation");
const google = new URL(response.headers.get("location"));
assert.equal(google.hostname, "accounts.google.com");
const providerCallback = new URL(google.searchParams.get("redirect_uri"));
assert.equal(providerCallback.origin, base.origin);
assert.equal(providerCallback.pathname, "/auth/v1/callback");
assert.ok(google.searchParams.get("state"), "OAuth flow state must exist");
console.log("PASS Google provider starts at the official Google authorization URL");

// Exercise the real provider-denied branch, not an account authentication.
providerCallback.searchParams.set("state", google.searchParams.get("state"));
providerCallback.searchParams.set("error", "access_denied");
providerCallback.searchParams.set("error_description", "Integration redirect verification cancelled before sign-in");
const cookies = response.headers.getSetCookie().map((cookie) => cookie.split(";")[0]).join("; ");
const cancelled = await fetch(providerCallback, {
  headers: { apikey: key, ...(cookies ? { Cookie: cookies } : {}) },
  redirect: "manual", signal: AbortSignal.timeout(30000),
});
assert.ok([302, 303, 307].includes(cancelled.status), "Cancelled flow must redirect back");
const destination = new URL(cancelled.headers.get("location"));
if (destination.origin !== origin) {
  const stateParts = google.searchParams.get("state").split(".");
  const stateClaims = stateParts.length === 3 ? JSON.parse(Buffer.from(stateParts[1], "base64url").toString()) : null;
  const params = new URLSearchParams(destination.hash.slice(1));
  console.log(JSON.stringify({
    returnedOrigin: destination.origin,
    error: destination.searchParams.get("error") || params.get("error"),
    errorCode: destination.searchParams.get("error_code") || params.get("error_code"),
    recordedReferrerOrigin: stateClaims?.referrer ? new URL(stateClaims.referrer).origin : null,
  }));
}
assert.equal(destination.origin, origin, "Supabase redirect allow-list must retain the .lk origin, not fall back to .com");
assert.equal(destination.pathname, "/auth/callback");
if (!plain) assert.equal(destination.searchParams.get("next"), selection, "Selected tier and service must survive the provider round-trip");
console.log("PASS live Supabase redirect allow-list accepts the .lk callback with order continuation");
console.log("No Google login, account creation or payment performed.");
