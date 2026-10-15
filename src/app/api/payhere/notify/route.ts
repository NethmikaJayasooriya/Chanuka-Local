import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";
import {
  amountToMinorUnits,
  createNotificationSignature,
  getPayHereConfig,
  isPayHereConfigured,
  safePaymentText,
  signaturesMatch,
} from "@/lib/payhere";
import { SITE_KEY } from "@/lib/site";

export const runtime = "nodejs";

function response(message: string, status: number) {
  return new NextResponse(message, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (!supabaseConfigured() || !isPayHereConfigured()) return response("Unavailable", 503);

  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (!contentType.toLowerCase().startsWith("application/x-www-form-urlencoded")) {
    return response("Unsupported media type", 415);
  }
  if (Number.isFinite(contentLength) && contentLength > 16_384) {
    return response("Payload too large", 413);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return response("Bad request", 400);
  }

  const value = (key: string, max = 200) => {
    const item = form.get(key);
    return typeof item === "string" ? item.trim().slice(0, max) : "";
  };

  const merchantId = value("merchant_id", 80);
  const orderRef = value("order_id", 80);
  const paymentId = value("payment_id", 120);
  const amount = value("payhere_amount", 40);
  const currency = value("payhere_currency", 10).toUpperCase();
  const statusCode = value("status_code", 10);
  const receivedSignature = value("md5sig", 128);
  const method = safePaymentText(value("method", 40), 40);
  const statusMessage = safePaymentText(value("status_message", 300), 300);
  const customOrderId = value("custom_1", 80);

  if (!merchantId || !orderRef || !paymentId || !amount || !currency || !statusCode || !receivedSignature) {
    return response("Missing fields", 400);
  }

  const config = getPayHereConfig();
  if (merchantId !== config.merchantId) return response("Invalid merchant", 400);

  const expected = createNotificationSignature(
    merchantId,
    orderRef,
    amount,
    currency,
    statusCode,
    config.merchantSecret,
  );
  if (!signaturesMatch(expected, receivedSignature)) return response("Invalid signature", 400);

  const status = Number(statusCode);
  if (![2, 0, -1, -2, -3].includes(status)) return response("Invalid status", 400);

  const amountMinor = amountToMinorUnits(amount);
  if (amountMinor === null || currency !== "LKR") return response("Invalid amount", 400);

  const db = createAdminClient();
  const { data: order } = await db
    .from("orders")
    .select("id,ref,total_usd")
    .eq("ref", orderRef)
    .eq("site", SITE_KEY)
    .maybeSingle();
  if (!order || (customOrderId && customOrderId !== order.id)) return response("Order not found", 404);
  if (amountMinor !== amountToMinorUnits(String(order.total_usd))) return response("Amount mismatch", 400);

  const notificationKey = createHash("sha256")
    .update(`${paymentId}|${statusCode}|${receivedSignature}`, "utf8")
    .digest("hex");

  const { error } = await db.rpc("record_payhere_notification", {
    p_order_id: order.id,
    p_notification_key: notificationKey,
    p_payment_id: paymentId,
    p_status_code: status,
    p_amount: amount,
    p_currency: currency,
    p_method: method || null,
    p_status_message: statusMessage || null,
  });
  if (error) return response("Server error", 500);

  return response("OK", 200);
}
