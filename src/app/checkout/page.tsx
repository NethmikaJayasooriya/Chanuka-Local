import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/PageHeader";
import {
  deliveries,
  levels,
  packages,
  quote,
  services,
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
  searchParams: Promise<{ order?: string; package?: string; level?: string; delivery?: string }>;
}) {
  const params = await searchParams;

  // -------- Account-based checkout (real order in the database) --------
  if (params.order && supabaseConfigured()) {
    await requireUser(`/checkout?order=${params.order}`);
    const order = await getMyOrder(params.order);
    if (!order) redirect("/order");

    const paid = order.payment_status === "paid";
    const intakeHref = `/intake?order=${order.id}`;

    return (
      <>
        <PageHeader
          eyebrow="Checkout"
          title={paid ? "Payment received. Let us continue." : "Reserve your slot, then upload your CV."}
          crumbs={[{ label: "Order", href: "/order" }, { label: "Checkout" }]}
        />
        <section className="py-8 sm:py-12 lg:py-16">
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
                <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${paid ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                  {paid ? "Paid" : "Payment pending"}
                </span>
              </div>
              <p className="mt-1.5 text-[13.5px] text-muted">
                Your order <span className="font-semibold text-ink">{order.ref}</span> is saved to your account. You can complete your brief and CV upload now; writing starts once payment is confirmed.
              </p>

              <div className="mt-6 rounded-[14px] border border-dashed border-line-strong bg-sand/40 p-4.5 sm:p-6">
                <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-muted">
                  Secure online card payment (PayHere) is being connected. Until it goes live, you are invoiced directly for card, PayPal or bank transfer. Either way, upload your CV now so your brief is ready the moment payment clears.
                </p>
                <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                  <Link href={intakeHref} className="w-full sm:w-auto rounded-full bg-brand px-7 py-3.5 text-center text-[14.5px] sm:text-[15px] font-semibold text-paper shadow-[0_10px_26px_-14px_rgb(23_53_92/0.9)] transition-all hover:bg-brand-deep">
                    Upload my CV and complete brief
                  </Link>
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(`Invoice request: ${order.ref}`)}&body=${encodeURIComponent(`Hi Chanuka, please send the invoice and payment details for order ${order.ref} (${order.package_name}, ${order.level_name}, total ${usd(order.total_usd ?? 0)}).`)}`}
                    className="w-full sm:w-auto rounded-full border border-line-strong bg-surface px-7 py-3.5 text-center text-[14px] sm:text-[15px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand shadow-2xs"
                  >
                    Request invoice by email
                  </a>
                </div>
              </div>

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
  const pkg = packages.find((p) => p.id === params.package) ?? packages[4];
  const level = (levels.find((l) => l.id === params.level)?.id ?? "3-to-9") as LevelId;
  const delivery = (deliveries.find((d) => d.id === params.delivery)?.id ?? "normal") as DeliveryId;
  const q = quote(pkg, level, delivery);
  const levelName = levels.find((l) => l.id === level)?.name ?? "";
  const deliveryOption = deliveries.find((d) => d.id === delivery);

  return (
    <>
      <PageHeader eyebrow="Checkout" title="One payment, then we start." crumbs={[{ label: "Order", href: "/order" }, { label: "Checkout" }]} />
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container-page grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <Summary
            title={pkg.name}
            levelName={levelName}
            window={deliveryOption?.window ?? ""}
            includes={pkg.includes.map((s) => services[s].name)}
            total={q.total}
            changeHref={`/order?package=${pkg.id}&level=${level}&delivery=${delivery}`}
          />
          <div className="card p-4 sm:p-6 sm:p-8 shadow-xs">
            <h2 className="display text-[19px] sm:text-[21px] text-ink">Payment</h2>
            <p className="mt-1.5 sm:mt-2 text-[13.5px] sm:text-[14px] leading-relaxed text-muted">
              Payment in LKR by bank transfer for now. Your order number arrives by email, and the CV upload step opens straight after.
            </p>
            <div className="mt-5 rounded-[14px] border border-dashed border-line-strong bg-sand/40 p-4.5 sm:p-6">
              <p className="text-[13.5px] sm:text-[14px] leading-relaxed text-muted">
                Secure online card payment (PayHere) connects here once the merchant account is live. Until then, you are invoiced directly, then you complete your brief so the writing can start.
              </p>
              <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <Link href={`/intake?package=${pkg.id}&level=${level}&delivery=${delivery}`} className="w-full sm:w-auto rounded-full bg-brand px-7 py-3.5 text-center text-[14.5px] sm:text-[15px] font-semibold text-paper transition-all hover:bg-brand-deep">
                  Confirm &amp; continue
                </Link>
                <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Invoice Request: ${pkg.name} (${levelName})`)}`} className="w-full sm:w-auto rounded-full border border-line-strong bg-surface px-7 py-3.5 text-center text-[14px] sm:text-[15px] font-semibold text-ink transition-colors hover:border-brand hover:text-brand shadow-2xs">
                  Request invoice by email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
