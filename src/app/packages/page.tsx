import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { deliveries, levels, packages, quote, services, usd } from "@/lib/pricing";

export const metadata: Metadata = pageMetadata({
  title: "Packages and pricing",
  description: "Seven packages across three experience levels and three delivery speeds. Every price is published, with bundle discounts of 20% and 30%.",
  path: "/packages",
});

function Tick() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-accent">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 8.5l3.2 3.2L13 5"
      />
    </svg>
  );
}

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Packages"
        title="Every price is on this page."
        lead="No quote forms and no discovery call before you can see a number. Pick the package, your experience level and the delivery speed, and the total is final."
        crumbs={[{ label: "Packages" }]}
        primary={{ href: "/#build", label: "Build your package" }}
      />

      {/* Package grid */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((p) => {
              const low = quote(p, "under-2", "normal").total;
              const high = quote(p, "over-10", "ultra").total;
              const discount = p.includes.length === 3 ? 30 : p.includes.length === 2 ? 20 : 0;

              return (
                <article
                  key={p.id}
                  className={`flex h-full flex-col rounded-[14px] border bg-surface p-5 sm:p-7 ${
                    p.popular ? "border-brand" : "border-line"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="display text-[19px] leading-snug text-ink">{p.name}</h2>
                    {p.popular && (
                      <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-paper">
                        Popular
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{p.blurb}</p>

                  <div className="mt-5 flex items-baseline gap-2">
                    <span className="display text-[30px] leading-none text-ink">{usd(low)}</span>
                    <span className="text-[13px] text-muted">to {usd(high)}</span>
                  </div>
                  {discount > 0 && (
                    <p className="mt-1.5 text-[12.5px] font-semibold text-accent-deep">
                      Includes a {discount}% bundle discount
                    </p>
                  )}

                  <ul className="mt-6 flex-1 space-y-2.5 border-t border-line pt-5">
                    {p.includes.map((s) => (
                      <li key={s} className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                        <Tick />
                        {services[s].name}
                      </li>
                    ))}
                    <li className="flex items-start gap-2.5 text-[13.5px] text-ink-soft">
                      <Tick />
                      One revision round
                    </li>
                  </ul>

                  <Link
                    href={`/order?package=${p.id}&level=3-to-9&delivery=normal`}
                    className="mt-6 block rounded-full bg-brand px-6 py-3 text-center text-[14.5px] font-semibold text-paper transition-colors hover:bg-brand-deep"
                  >
                    Choose this package
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* What changes the price */}
      <section className="border-y border-line bg-surface py-10 sm:py-14 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">What changes the price</p>
          <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
            Two things, both your choice.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-[15px] font-semibold text-ink">Experience level</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                This sets the depth of the work. An early-career CV needs structure and
                positioning. A senior CV needs a leadership narrative, scope and evidence
                of impact across teams and budgets, which takes considerably longer to
                write properly.
              </p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {levels.map((l) => (
                  <li key={l.id} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <span className="text-[14px] font-medium text-ink">{l.name}</span>
                    <span className="text-[13px] text-muted">{l.hint}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-ink">Delivery speed</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Every document is written personally, so a faster turnaround means
                reordering other work. The fee reflects that. Every option includes one
                full revision round.
              </p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {deliveries.map((d) => (
                  <li key={d.id} className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                    <span className="text-[14px] font-medium text-ink">{d.name}</span>
                    <span className="text-[13px] text-muted">{d.window}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12.5px] text-muted">
                The final total, with everything included, is shown before you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConversionFooter
        heading="See your exact price."
        body="Three choices and the total is on screen. Nothing is added afterwards."
        related={[
          { href: "/services", label: "All services" },
          { href: "/how-it-works", label: "How it works" },
          { href: "/faq", label: "FAQ" },
          { href: "/refund-policy", label: "Refund policy" },
        ]}
      />
    </>
  );
}
