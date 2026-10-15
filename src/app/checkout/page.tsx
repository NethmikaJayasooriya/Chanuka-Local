import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { isPayHereConfigured, getPayHereConfig } from "@/lib/payhere";
import { PayHerePaymentForm } from "@/components/PayHerePaymentForm";
import { PaymentStatusPoller } from "@/components/PaymentStatusPoller";
import { PageHeader } from "@/components/PageHeader";
import {
  type TierId,
  deliveries,
  levels,
  packages,
  usd,
  type DeliveryId,
  type LevelId,
} from "@/lib/pricing";
import { site } from "@/lib/site";
import { getMyOrder } from "@/lib/customer";
import { requireUser, supabaseConfigured } from "@/lib/supabase/guard";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Order summary and payment.",
  robots: { index: false, follow: false },
};

function Summary({
  title,
  levelName,
  window,
  includes,
  total,
  changeHref,
}: {
  title: string;
  levelName: string;
  window: string;
  includes: string[];
  total: number;
  changeHref: string;
}) {
  return (
    <aside className="card overflow-hidden order-first lg:order-last shadow-xs">
      <div className="border-b border-line bg-sand/50 px-5 sm:px-6 py-4 sm:py-5">
        <span className="eyebrow">Order summary</span>
        <p className="display mt-1.5 text-[19px] sm:text-[21px] leading-tight text-ink">{title}</p>
        <p className="mt-1 text-[12.5px] sm:text-[13px] text-muted">
          {levelName} · {window}
        </p>
      </div>
      <div className="p-5 sm:p-6">
        <ul className="space-y-2.5">
          {includes.map((s) => (
            <li key={s} className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-ink-soft">
              <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent">
                <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" />
              </svg>
              <span>{s}</span>
            </li>
          ))}
          <li className="flex items-start gap-2.5 text-[13px] sm:text-[13.5px] text-ink-soft">
            <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent">
              <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" />
            </svg>
            <span>One revision round included</span>
          </li>
        </ul>
        <div className="mt-5 sm:mt-6 flex items-end justify-between border-t border-line pt-4 sm:pt-5">
          <span className="text-[12.5px] sm:text-[13px] font-medium text-muted">Total due</span>
          <span className="stat-number text-[28px] sm:text-[32px] leading-none text-ink font-extrabold">{usd(total)}</span>
        </div>
        <Link href={changeHref} className="mt-4 sm:mt-5 block text-center text-[13px] sm:text-[13.5px] font-medium text-muted transition-colors hover:text-brand">
          Change your order
        </Link>
      </div>
    </aside>
  );
}

export default async function CheckoutPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; tier?: string; package?: string; level?: string; delivery?: string; payment?: string }>;
}) {
  const params = await searchParams;

  // -------- Account-based checkout (real order in the database) --------
  if (params.order && supabaseConfigured()) {
    await requireUser(`/checkout?order=${params.order}`);
    const order = await getMyOrder(params.order);
    if (!order) redirect("/order");

    const paid = order.payment_status === "paid";
    const paymentBlocked = order.payment_status === "refunded" || order.payment_status === "charged_back";
    const paymentLabel: Record<string, string> = {
      pending: "Payment pending",
      paid: "Paid",
      failed: "Payment failed",
      cancelled: "Payment cancelled",
      refunded: "Refunded",
      charged_back: "Charged back",
    };
    const paymentTone: Record<string, string> = {
      pending: "bg-amber-100 text-amber-700",
      paid: "bg-green-100 text-green-700",
      failed: "bg-red-100 text-red-700",
      cancelled: "bg-slate-100 text-slate-700",
      refunded: "bg-blue-100 text-blue-700",
      charged_back: "bg-red-100 text-red-800",
    };
    const payHereReady = isPayHereConfigured();
    const sandbox = payHereReady && getPayHereConfig().sandbox;
    const intakeHref = `/intake?order=${order.id}`;

    return (
      <>
        <PageHeader
          eyebrow="Checkout"
          title={paid ? "Payment received. Let us continue." : "Reserve your slot, then upload your CV."}
          crumbs={[{ label: "Order", href: "/order" }, { label: "Checkout" }]}
        />
        <section className="py-8 sm:py-12 lg:py-16">
          <PaymentStatusPoller active={!paid && params.payment === "return"} />
          <div className="container-page grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <Summary
              title={order.package_name ?? "Your package"}
              levelName={order.level_name ?? ""}
              window={order.delivery_window ?? ""}
              includes={[]}
              total={order.total_usd ?? 0}
              changeHref="/order"
            />

            <div className="card p-4 sm:p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between">
                <h2 className="display text-[19px] sm:text-[21px] text-ink">Payment</h2>
                <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${paymentTone[order.payment_status] ?? paymentTone.pending}`}>
                  {paymentLabel[order.payment_status] ?? "Payment pending"}
                </span>
              </div>
              <p className="mt-1.5 text-[13.5px] text-muted">
                Your order <span className="font-semibold text-ink">{order.ref}</span> is saved to your account. You can complete your brief and CV upload now; writing starts once payment is confirmed.
              </p>

              {params.payment === "cancelled" && !paid && (
                <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-[13.5px] text-amber-800">
                  Payment was cancelled. Your order is still saved, and you can try again safely below.
                </p>
              )}
              {params.payment === "return" && !paid && (
                <p className="mt-5 rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-[13.5px] text-blue-800">
                  PayHere is confirming the payment. This page updates automatically when the signed confirmation arrives.
                </p>
              )}

              {paid ? (
                <div className="mt-6 rounded-[14px] border border-green-200 bg-green-50 p-4.5 sm:p-6">
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-green-800">
                    Payment has been verified. Complete your brief and upload your current CV so work can begin.
                  </p>
                  <Link href={intakeHref} className="mt-5 block w-full rounded-full bg-brand px-7 py-3.5 text-center text-[15px] font-semibold text-paper shadow-md transition-all hover:bg-brand-deep sm:w-auto sm:inline-block">
                    Upload my CV and complete brief
                  </Link>
                </div>
              ) : paymentBlocked ? (
                <div className="mt-6 rounded-[14px] border border-red-200 bg-red-50 p-4.5 sm:p-6">
                  <p className="text-[13.5px] leading-relaxed text-red-800">
                    Online repayment is paused for this order. Please contact {site.email} and include order reference {order.ref}.
                  </p>
                </div>
              ) : payHereReady ? (
                <>
                  <PayHerePaymentForm orderId={order.id} defaultPhone={order.customer_phone ?? ""} sandbox={sandbox} />
                  <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                    <Link href={intakeHref} className="text-center text-[13.5px] font-semibold text-brand underline underline-offset-4">
                      Complete my brief before paying
                    </Link>
                    <span className="hidden text-line-strong sm:inline">·</span>
                    <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Payment help: ${order.ref}`)}`} className="text-center text-[13.5px] font-medium text-muted hover:text-brand">
                      Get payment help
                    </a>
                  </div>
                </>
              ) : (
                <div className="mt-6 rounded-[14px] border border-dashed border-line-strong bg-sand/40 p-4.5 sm:p-6">
                  <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-muted">
                    Online payment is not currently available. Your order is saved; request an invoice or complete your brief now.
                  </p>
                  <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                    <Link href={intakeHref} className="w-full rounded-full bg-brand px-7 py-3.5 text-center text-[15px] font-semibold text-paper hover:bg-brand-deep sm:w-auto">Complete my brief</Link>
                    <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Invoice request: ${order.ref}`)}`} className="w-full rounded-full border border-line-strong bg-surface px-7 py-3.5 text-center text-[15px] font-semibold text-ink hover:border-brand hover:text-brand sm:w-auto">Request invoice</a>
                  </div>
                </div>
              )}

              <ul className="mt-6 sm:mt-7 space-y-2 border-t border-line pt-5 sm:pt-6 text-[13px] sm:text-[13.5px] text-muted">
                <li>Track this order any time from your <Link href="/dashboard" className="font-medium text-ink underline underline-offset-2">dashboard</Link>.</li>
                <li>Prices are in Sri Lankan rupees (LKR) and include everything listed.</li>
                <li>Cancellation and refunds are covered by the <Link href="/refund-policy" className="font-medium text-ink underline underline-offset-2">refund policy</Link>.</li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }

  // -------- Legacy / guest checkout (no account) --------
  const tier: TierId = params.tier === "signature" ? "signature" : "essential";
  const pkg = packages.find((p) => p.id === params.package) ?? packages[4];
  const level = (levels.find((l) => l.id === params.level)?.id ?? "3-to-9") as LevelId;
  const delivery = (deliveries.find((d) => d.id === params.delivery)?.id ?? "normal") as DeliveryId;

  redirect(`/order?package=${pkg.id}&level=${level}&delivery=${delivery}&tier=${tier}`);
}
