import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";
import { resolveOrder } from "@/lib/pricing";
import { SITE_KEY } from "@/lib/site";
import { InputError, readJsonBody } from "@/lib/request-validation";
import {
  createCheckoutHash,
  formatPayHereAmount,
  getPayHereConfig,
  isPayHereConfigured,
  safePaymentText,
  splitCustomerName,
} from "@/lib/payhere";

export const runtime = "nodejs";

function noStore(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function sameOrigin(request: Request, configuredSiteUrl: string) {
  const fetchSite = request.headers.get("sec-fetch-site");
  if (fetchSite && fetchSite !== "same-origin") return false;
  const origin = request.headers.get("origin");
  if (!origin) return true;
  const allowed = new Set([new URL(request.url).origin, new URL(configuredSiteUrl).origin]);
  return allowed.has(origin);
}

export async function POST(request: Request) {
  if (!supabaseConfigured() || !isPayHereConfigured()) {
    return noStore({ ok: false, reason: "not_configured" }, 503);
  }

  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return noStore({ ok: false, reason: "unsupported_media_type" }, 415);
  }
  if (Number.isFinite(contentLength) && contentLength > 8_192) {
    return noStore({ ok: false, reason: "payload_too_large" }, 413);
  }

  const config = getPayHereConfig();
  if (!sameOrigin(request, config.siteUrl)) {
    return noStore({ ok: false, reason: "invalid_origin" }, 403);
  }

  const auth = await createClient();
  const { data: { user } } = await auth.auth.getUser();
  if (!user) return noStore({ ok: false, reason: "not_signed_in" }, 401);

  let body: Record<string, unknown>;
  try {
    body = await readJsonBody(request, 8_192);
  } catch (error) {
    return noStore({ ok: false, reason: error instanceof InputError ? error.reason : "bad_request" }, error instanceof InputError ? error.status : 400);
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) return noStore({ ok: false, reason: "bad_request" }, 400);

  const orderId = typeof body.order_id === "string" ? body.order_id : "";
  if (!/^[0-9a-f-]{36}$/i.test(orderId)) {
    return noStore({ ok: false, reason: "invalid_order" }, 400);
  }

  const phone = safePaymentText(body.phone, 30);
  const address = safePaymentText(body.address, 180);
  const city = safePaymentText(body.city, 80);
  const country = safePaymentText(body.country, 80);
  if (!/^[+\d\s().-]{7,30}$/.test(phone) || address.length < 3 || city.length < 2 || country.length < 2) {
    return noStore({ ok: false, reason: "invalid_billing_details" }, 400);
  }

  const db = createAdminClient();
  const { data: order } = await db
    .from("orders")
    .select("id,ref,user_id,package_id,package_name,level_id,delivery_id,total_usd,payment_status,customer_name,customer_email")
    .eq("id", orderId)
    .eq("user_id", user.id)
    .eq("site", SITE_KEY)
    .maybeSingle();

  if (!order) return noStore({ ok: false, reason: "order_not_found" }, 404);
  if (order.payment_status === "paid") return noStore({ ok: false, reason: "already_paid" }, 409);
  if (order.payment_status === "refunded" || order.payment_status === "charged_back") {
    return noStore({ ok: false, reason: "payment_blocked" }, 409);
  }

  // New local orders persist an explicit tier:package selection.
  // Older or repriced orders need an invoice review, never a silent price change.
  const parts = String(order.package_id ?? "").split(":");
  const selection = parts.length === 2
    ? resolveOrder(parts[1], order.level_id, order.delivery_id, parts[0])
    : null;
  if (!selection || Number(order.total_usd) !== selection.total_usd) {
    return noStore({ ok: false, reason: "price_mismatch" }, 409);
  }

  const email = String(order.customer_email ?? user.email ?? "").trim().slice(0, 200);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return noStore({ ok: false, reason: "invalid_customer_email" }, 409);
  }

  const { firstName, lastName } = splitCustomerName(String(order.customer_name ?? ""));
  const amount = formatPayHereAmount(selection.total_usd);
  const currency = "LKR";
  const hash = createCheckoutHash(
    config.merchantId,
    order.ref,
    amount,
    currency,
    config.merchantSecret,
  );

  const { error: billingError } = await db.from("orders").update({
    customer_phone: phone,
    billing_address: address,
    billing_city: city,
    billing_country: country,
  }).eq("id", order.id).eq("user_id", user.id).eq("site", SITE_KEY);
  if (billingError) {
    return noStore({ ok: false, reason: "billing_details_not_saved" }, 500);
  }

  const returnBase = `${config.siteUrl}/checkout?order=${encodeURIComponent(order.id)}`;
  return noStore({
    ok: true,
    action: config.checkoutUrl,
    fields: {
      merchant_id: config.merchantId,
      return_url: `${returnBase}&payment=return`,
      cancel_url: `${returnBase}&payment=cancelled`,
      notify_url: `${config.siteUrl}/api/payhere/notify`,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      address,
      city,
      country,
      order_id: order.ref,
      items: safePaymentText(order.package_name || order.ref, 120),
      currency,
      amount,
      hash,
      custom_1: order.id,
      custom_2: SITE_KEY,
    },
  });
}
