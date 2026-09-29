import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { IntakeForm, type OrderInfo } from "@/components/IntakeForm";
import { PageHeader } from "@/components/PageHeader";
import {
  deliveries,
  levels,
  packages,
  quote,
  type DeliveryId,
  type LevelId,
} from "@/lib/pricing";
import { getMyOrder } from "@/lib/customer";
import { requireUser, supabaseConfigured } from "@/lib/supabase/guard";

export const metadata: Metadata = {
  title: "Your brief",
  description: "Complete your brief so your documents can be written.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/intake" },
};

export default async function IntakePage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; package?: string; level?: string; delivery?: string }>;
}) {
  const params = await searchParams;

  // Account-based intake: tie the brief and CV to the real order.
  if (params.order && supabaseConfigured()) {
    await requireUser(`/intake?order=${params.order}`);
    const ord = await getMyOrder(params.order);
    if (!ord) redirect("/order");
    const summaryText = [ord.package_name, ord.level_name, ord.delivery_window].filter(Boolean).join(" · ");
    return (
      <>
        <PageHeader
          eyebrow="Step 2 · Your brief"
          title="Tell me about you. Then I get to work."
          lead="This is the only form you fill in. Upload your current CV and give me as much as you can: the more you share, the sharper the first draft comes back."
          crumbs={[{ label: "Order", href: "/order" }, { label: "Your brief" }]}
          showProof={false}
        />
        <section className="py-12 lg:py-16">
          <div className="container-page max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[12px] border border-line bg-surface px-5 py-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-deep">Order {ord.ref}</span>
              <span className="text-[14.5px] font-medium text-ink">{summaryText}</span>
            </div>
            <IntakeForm orderSummary={summaryText} orderId={ord.id} />
          </div>
        </section>
      </>
    );
  }

  const pkg = packages.find((p) => p.id === params.package);
  const level = levels.find((l) => l.id === (params.level as LevelId));
  const delivery = deliveries.find((d) => d.id === (params.delivery as DeliveryId));

  const summary = pkg
    ? [pkg.name, level?.name, delivery?.window].filter(Boolean).join(" · ")
    : undefined;

  const q = pkg && level && delivery ? quote(pkg, level.id, delivery.id) : null;

  const order: OrderInfo | undefined = pkg
    ? {
        package_id: pkg.id,
        package_name: pkg.name,
        level_id: level?.id,
        level_name: level?.name,
        delivery_id: delivery?.id,
        delivery_window: delivery?.window,
        total_usd: q?.total,
      }
    : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Step 2 of 2 · Your brief"
        title="Tell me about you. Then I get to work."
        lead="Payment is done. This is the only form you fill in. The delivery clock starts once this brief is complete, and the more you give me here, the sharper the first draft comes back."
        crumbs={[{ label: "Order", href: "/order" }, { label: "Your brief" }]}
        showProof={false}
      />

      <section className="py-12 lg:py-16">
        <div className="container-page max-w-3xl">
          {summary && (
            <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-1 rounded-[12px] border border-line bg-surface px-5 py-4">
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-deep">
                Your order
              </span>
              <span className="text-[14.5px] font-medium text-ink">{summary}</span>
            </div>
          )}

          <IntakeForm orderSummary={summary} order={order} />
        </div>
      </section>
    </>
  );
}
