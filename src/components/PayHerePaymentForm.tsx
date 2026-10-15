"use client";

import { useState } from "react";

type GatewayResponse = {
  ok?: boolean;
  reason?: string;
  action?: string;
  fields?: Record<string, string>;
};

const inputClass = "mt-1.5 w-full rounded-xl border border-line bg-white px-4 py-3 text-[16px] sm:text-[14px] text-ink outline-none focus:border-brand";
const labelClass = "block text-[12.5px] font-semibold text-ink-soft";

export function PayHerePaymentForm({ orderId, defaultPhone = "", sandbox = false }: { orderId: string; defaultPhone?: string; sandbox?: boolean }) {
  const [phone, setPhone] = useState(defaultPhone);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("Sri Lanka");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const startPayment = async (event: React.FormEvent) => {
    event.preventDefault();
    if (busy) return;
    setBusy(true);
    setError("");

    try {
      const result = await fetch("/api/payhere/payment", {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id: orderId, phone, address, city, country }),
      });
      const data = (await result.json().catch(() => ({}))) as GatewayResponse;
      if (!result.ok || !data.action || !data.fields) {
        const messages: Record<string, string> = {
          already_paid: "This order is already paid. Refresh to see the verified status.",
          price_mismatch: "This order needs an invoice review. Please contact us with your order reference; no payment has been taken.",
          not_configured: "Online payment is temporarily unavailable. Please request an invoice.",
          not_signed_in: "Your session has expired. Please sign in again before paying.",
          payment_blocked: "Please contact us about payment for this order.",
        };
        setError(messages[data.reason ?? ""] ?? "Payment could not be started. Please check your billing details and try again.");
        setBusy(false);
        return;
      }

      const allowedActions = new Set([
        "https://sandbox.payhere.lk/pay/checkout",
        "https://www.payhere.lk/pay/checkout",
      ]);
      if (!allowedActions.has(data.action)) throw new Error("Unexpected payment destination");

      const form = document.createElement("form");
      form.method = "POST";
      form.action = data.action;
      form.style.display = "none";
      for (const [name, value] of Object.entries(data.fields)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      }
      document.body.appendChild(form);
      form.submit();
    } catch {
      setError("Payment could not be started. Please try again.");
      setBusy(false);
    }
  };

  return (
    <form onSubmit={startPayment} className="mt-6 rounded-[14px] border border-brand/15 bg-brand-soft/25 p-4 sm:p-6">
      <h3 className="text-[14px] font-bold text-ink">Billing details · LKR</h3>
      {sandbox && <p role="status" className="mt-2 text-sm font-semibold text-amber-800">Sandbox test checkout — no real payment is collected.</p>}
      <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
        Your card details are entered only on PayHere&apos;s secure checkout and are never stored on this website.
      </p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="payment-phone">Phone number</label>
          <input id="payment-phone" required autoComplete="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} placeholder="+94 77 123 4567" />
        </div>
        <div>
          <label className={labelClass} htmlFor="payment-country">Billing country</label>
          <input id="payment-country" required autoComplete="country-name" value={country} onChange={(e) => setCountry(e.target.value)} className={inputClass} placeholder="Sri Lanka" />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="payment-address">Billing address</label>
          <input id="payment-address" required autoComplete="street-address" value={address} onChange={(e) => setAddress(e.target.value)} className={inputClass} placeholder="Street address" />
        </div>
        <div>
          <label className={labelClass} htmlFor="payment-city">City</label>
          <input id="payment-city" required autoComplete="address-level2" value={city} onChange={(e) => setCity(e.target.value)} className={inputClass} placeholder="Colombo" />
        </div>
      </div>

      {error && <p className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-700">{error}</p>}

      <button type="submit" disabled={busy} className="mt-5 w-full rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-white shadow-md transition-colors hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60">
        {busy ? "Opening secure checkout..." : "Pay securely with PayHere"}
      </button>
      <p className="mt-3 text-center text-[11.5px] text-muted">Your saved LKR order total is verified on the server. PayHere confirms payment securely before your order is marked paid.</p>
    </form>
  );
}
