import "server-only";

import { createHash, timingSafeEqual } from "node:crypto";
import { site } from "@/lib/site";

const LIVE_CHECKOUT = "https://www.payhere.lk/pay/checkout";
const SANDBOX_CHECKOUT = "https://sandbox.payhere.lk/pay/checkout";

function md5(value: string) {
  return createHash("md5").update(value, "utf8").digest("hex").toUpperCase();
}

export function isPayHereConfigured() {
  try { getPayHereConfig(); return true; } catch { return false; }
}

export function getPayHereConfig() {
  const merchantId = process.env.PAYHERE_MERCHANT_ID?.trim();
  const merchantSecret = process.env.PAYHERE_MERCHANT_SECRET;
  if (!merchantId || !merchantSecret) throw new Error("PayHere is not configured");

  if (!/^\d+$/.test(merchantId)) throw new Error("Invalid merchant ID");
  const sandbox = process.env.PAYHERE_SANDBOX !== "false";
  // Secrets are registered per domain: never fall back to the global site's origin.
  const parsedSiteUrl = new URL(process.env.PAYHERE_SITE_URL || site.url);
  if (!["chanukajeewantha.lk", "www.chanukajeewantha.lk"].includes(parsedSiteUrl.hostname) ||
      parsedSiteUrl.username || parsedSiteUrl.password || parsedSiteUrl.port ||
      parsedSiteUrl.pathname !== "/" || parsedSiteUrl.search || parsedSiteUrl.hash) {
    throw new Error("PayHere must be configured for the Sri Lanka domain");
  }
  const siteUrl = site.url;
  if (process.env.NODE_ENV === "production" && parsedSiteUrl.protocol !== "https:") {
    throw new Error("PAYHERE_SITE_URL must use HTTPS in production");
  }
  return {
    merchantId,
    merchantSecret,
    siteUrl,
    checkoutUrl: sandbox ? SANDBOX_CHECKOUT : LIVE_CHECKOUT,
    sandbox,
  };
}

export function formatPayHereAmount(amount: number) {
  if (!Number.isSafeInteger(amount) || amount < 0) throw new Error("Invalid payment amount");
  return amount.toFixed(2);
}

export function createCheckoutHash(
  merchantId: string,
  orderId: string,
  amount: string,
  currency: string,
  merchantSecret: string,
) {
  return md5(`${merchantId}${orderId}${amount}${currency}${md5(merchantSecret)}`);
}

export function createNotificationSignature(
  merchantId: string,
  orderId: string,
  amount: string,
  currency: string,
  statusCode: string,
  merchantSecret: string,
) {
  return md5(`${merchantId}${orderId}${amount}${currency}${statusCode}${md5(merchantSecret)}`);
}

export function signaturesMatch(expected: string, received: string) {
  const a = Buffer.from(expected.toUpperCase(), "utf8");
  const b = Buffer.from(received.toUpperCase(), "utf8");
  return a.length === b.length && timingSafeEqual(a, b);
}

export function amountToMinorUnits(value: string): number | null {
  const match = /^(\d+)(?:\.(\d{1,2}))?$/.exec(value.trim());
  if (!match) return null;
  const whole = Number(match[1]);
  const cents = Number((match[2] ?? "").padEnd(2, "0"));
  if (!Number.isSafeInteger(whole)) return null;
  const minor = whole * 100 + cents;
  return Number.isSafeInteger(minor) ? minor : null;
}

export function safePaymentText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value
    .normalize("NFKC")
    .replace(/[\u0000-\u001F\u007F<>\{\}]/g, "")
    .replace(/[^\p{L}\p{M}\p{N}\s.,'’()\/#&+\-]/gu, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function splitCustomerName(fullName: string) {
  const parts = safePaymentText(fullName, 120).split(" ").filter(Boolean);
  return {
    firstName: parts[0] || "Customer",
    lastName: parts.slice(1).join(" ") || "Customer",
  };
}
