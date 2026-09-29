import type { Metadata } from "next";
import Link from "next/link";
import { MailIcon } from "@/components/CountryFlags";
import { SignOutButton } from "@/components/account/SignOutButton";
import { getMyBriefOrderIds, getMyDeliverables, getMyName, getMyOrders } from "@/lib/customer";
import { requireUser } from "@/lib/supabase/guard";
import { usd } from "@/lib/pricing";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your dashboard",
  description: "Track your order, complete your intake, review drafts and download your final documents.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/dashboard" },
};

const STATUS_LABEL: Record<string, string> = {
  new: "Order placed",
  in_progress: "In progress",
  draft_delivered: "Draft delivered",
  revision: "In revision",
  completed: "Completed",
  cancelled: "Cancelled",
};

function StatusBadge({ status }: { status: string }) {
  const tone =
    status === "completed"
      ? "bg-green-100 text-green-700"
      : status === "cancelled"
        ? "bg-red-100 text-red-600"
        : status === "draft_delivered" || status === "revision"
          ? "bg-blue-100 text-blue-700"
          : "bg-amber-100 text-amber-700";
  return <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${tone}`}>{STATUS_LABEL[status] ?? status}</span>;
}

function Dot({ state }: { state: "done" | "current" | "todo" }) {
  if (state === "done")
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-paper">
        <svg viewBox="0 0 16 16" aria-hidden className="h-3.5 w-3.5"><path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" /></svg>
      </span>
    );
  if (state === "current")
    return (
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-brand bg-brand-soft"><span className="h-2 w-2 rounded-full bg-brand" /></span>
    );
  return <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-line-strong bg-paper"><span className="h-1.5 w-1.5 rounded-full bg-line-strong" /></span>;
}

export default async function DashboardPage() {
  await requireUser();
  const [name, orders, deliverables, briefOrders] = await Promise.all([
    getMyName(),
    getMyOrders(),
    getMyDeliverables(),
    getMyBriefOrderIds(),
  ]);
  const byOrder = new Map<string, typeof deliverables>();
  for (const d of deliverables) {
    const k = d.order_id ?? "_";
    byOrder.set(k, [...(byOrder.get(k) ?? []), d]);
  }

  return (
    <section className="py-12 lg:py-16">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Your dashboard</p>
            <h1 className="display mt-2 text-[clamp(1.6rem,3.4vw,2.3rem)] text-ink">
              {name ? `Welcome back, ${name.split(" ")[0]}` : "Your account"}
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <SignOutButton />
            <Link href="/order" className="rounded-full bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-paper transition-colors hover:bg-brand-deep">
              Place another order
            </Link>
          </div>
        </div>

        {orders.length === 0 ? (
          <div className="mt-10 rounded-[16px] border border-line bg-surface p-8 text-center">
            <h2 className="display text-[20px] text-ink">No orders yet</h2>
            <p className="mx-auto mt-2 max-w-md text-[14.5px] leading-relaxed text-muted">
              When you place an order it appears here, with live progress, your uploaded CV and your final documents to download.
            </p>
            <Link href="/order" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-[14px] font-semibold text-paper hover:bg-brand-deep">
              Start your order
            </Link>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            {orders.map((o) => {
              const hasBrief = briefOrders.has(o.id);
              const paid = o.payment_status === "paid";
              const files = byOrder.get(o.id) ?? [];
              const hasDraft = files.length > 0 || ["draft_delivered", "revision", "completed"].includes(o.status);
              const done = o.status === "completed";
              const stages: Array<{ label: string; note: string; state: "done" | "current" | "todo" }> = [
                { label: "Order placed", note: `${o.package_name}, ${o.level_name}.`, state: "done" },
                { label: "Payment", note: paid ? "Payment received." : "Pending. Pay by invoice or once online payment is live.", state: paid ? "done" : "current" },
                { label: "Brief and CV", note: hasBrief ? "Received." : "Upload your CV and complete your brief.", state: hasBrief ? "done" : paid ? "current" : "todo" },
                { label: "Writing", note: "Your document is being written.", state: done || hasDraft ? "done" : hasBrief ? "current" : "todo" },
                { label: "Draft and revision", note: "Draft delivered here, one revision round.", state: done ? "done" : hasDraft ? "current" : "todo" },
                { label: "Final documents", note: "Your final files, ready to download.", state: done ? "done" : "todo" },
              ];
              return (
                <div key={o.id} className="rounded-[16px] border border-line bg-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-line pb-5">
                    <div>
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Order {o.ref}</p>
                      <p className="display mt-1 text-[18px] text-ink">{o.package_name} · {o.level_name}</p>
                      <p className="mt-1 text-[13px] text-muted">
                        {o.delivery_window}{o.total_usd ? ` · ${usd(o.total_usd)}` : ""}
                        {o.target_role ? ` · ${o.target_role}` : ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <StatusBadge status={o.status} />
                      <span className={`rounded-full px-3 py-1 text-[12px] font-semibold ${paid ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
                        {paid ? "Paid" : "Payment pending"}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                    <ol className="space-y-4">
                      {stages.map((s) => (
                        <li key={s.label} className="flex items-start gap-3.5">
                          <Dot state={s.state} />
                          <div className="pt-0.5">
                            <p className={`text-[14.5px] font-semibold ${s.state === "todo" ? "text-muted" : "text-ink"}`}>{s.label}</p>
                            <p className="mt-0.5 text-[13px] leading-relaxed text-muted">{s.note}</p>
                          </div>
                        </li>
                      ))}
                    </ol>

                    <div className="space-y-4">
                      {!hasBrief && (
                        <Link href={`/intake?order=${o.id}`} className="block rounded-[12px] bg-brand px-4 py-3 text-center text-[13.5px] font-semibold text-paper hover:bg-brand-deep">
                          Upload CV and complete brief
                        </Link>
                      )}
                      <div className="rounded-[12px] border border-line bg-paper p-5">
                        <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Documents</h3>
                        {files.length === 0 ? (
                          <p className="mt-3 text-[13px] leading-relaxed text-muted">Your draft and final files will appear here to download.</p>
                        ) : (
                          <ul className="mt-3 space-y-2.5">
                            {files.map((f) => (
                              <li key={f.id} className="flex items-center justify-between gap-3">
                                <span className="min-w-0">
                                  <span className="block truncate text-[13.5px] font-medium text-ink">{f.label}</span>
                                  <span className="text-[11.5px] uppercase tracking-wide text-muted">{f.kind}</span>
                                </span>
                                {f.url ? (
                                  <a href={f.url} target="_blank" rel="noopener noreferrer" className="shrink-0 rounded-full bg-brand-soft px-3.5 py-1.5 text-[12.5px] font-semibold text-brand hover:bg-brand-soft/70">
                                    Download
                                  </a>
                                ) : (
                                  <span className="text-[12px] text-muted">unavailable</span>
                                )}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <a href={`mailto:${site.email}?subject=${encodeURIComponent(`About order ${o.ref}`)}`} className="flex items-center justify-center gap-2 rounded-[12px] border border-line px-4 py-2.5 text-[13px] font-semibold text-ink hover:border-brand hover:text-brand">
                        <MailIcon className="h-4 w-4 text-accent" />
                        <span>Message about this order</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
