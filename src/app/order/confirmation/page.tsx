import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order confirmed",
  robots: { index: false, follow: false },
};

const next = [
  {
    n: 1,
    title: "Brief received",
    body: "Your details are in and the delivery clock has started. Nothing else is needed from you right now.",
  },
  {
    n: 2,
    title: "Review",
    body: "Your level, industry and target role are reviewed against your brief. Chanuka only reaches out if something genuinely needs clarifying.",
  },
  {
    n: 3,
    title: "First draft",
    body: "Delivered on the date confirmed with your order, in Word and PDF.",
  },
  {
    n: 4,
    title: "Your revision round",
    body: "Send your comments in one message. The revised version comes back within two working days.",
  },
];

export default async function ConfirmationPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order } = await searchParams;
  return (
    <>
      <PageHeader
        eyebrow="Brief received"
        title="That is everything. The writing starts now."
        lead="Your order and your brief are both in. Track everything, review your draft and download your final documents from your dashboard. Chanuka only reaches out if a point needs clarifying."
        crumbs={[{ label: "Order", href: "/order" }, { label: "Confirmation" }]}
        showProof={false}
        primary={{ href: "/dashboard", label: "Go to my dashboard" }}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          {order && (
            <div className="mb-8 flex flex-col gap-3 rounded-[14px] border border-line bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-[14.5px] text-ink-soft">
                Your order is saved to your account. Track its progress and download your documents any time.
              </p>
              <Link href="/dashboard" className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-center text-[13.5px] font-semibold text-paper hover:bg-brand-deep">
                Open my dashboard
              </Link>
            </div>
          )}
          <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {next.map((s) => (
              <li key={s.n} className="rounded-[14px] border border-line bg-surface p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-soft text-[13px] font-semibold text-accent-deep">
                  {s.n}
                </span>
                <h2 className="display mt-5 text-[17px] leading-snug text-ink">{s.title}</h2>
                <p className="mt-3 text-[13.5px] leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-[14px] border border-line bg-sand/50 p-7">
            <h2 className="display text-[19px] text-ink">Need to change something?</h2>
            <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-muted">
              Target role changed, deadline moved, or you want to add a service to the
              order. Message me before the first draft goes out and it costs nothing.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent("Order Change Request")}`}
                className="rounded-full bg-brand px-6 py-3 text-[14.5px] font-semibold text-paper transition-colors hover:bg-brand-deep"
              >
                Email Chanuka ({site.email})
              </a>
            </div>
          </div>

          <p className="mt-8 text-[13.5px] text-muted">
            While you wait,{" "}
            <Link href="/how-it-works" className="font-medium text-ink underline underline-offset-2">
              read how the process runs
            </Link>{" "}
            or{" "}
            <Link href="/faq" className="font-medium text-ink underline underline-offset-2">
              check the FAQ
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
