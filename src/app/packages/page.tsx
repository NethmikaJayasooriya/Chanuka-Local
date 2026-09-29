import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { deliveries, levels, packages, quote, formatLKR } from "@/lib/pricing";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Packages and Pricing in Sri Lanka (LKR)",
  description:
    "Transparent CV writing, LinkedIn optimization, and international job application packages in Sri Lankan Rupees (LKR). Fixed rates with no hidden fees.",
  path: "/packages",
});

const SIGNATURE_PACKS = [
  {
    id: "starter",
    eyebrow: "ESSENTIALS",
    title: "Starter Pack",
    subtitle: "Students / Fresh Graduates · Less than 1 year",
    total: "LKR 10,850",
    services: [
      { name: "ATS CV Writing", price: "LKR 3,950" },
      { name: "Cover Letter Writing", price: "LKR 2,950" },
      { name: "LinkedIn Optimization", price: "LKR 3,950" },
    ],
    whatsappMsg:
      "Hi Chanuka, I would like to discuss the Starter Pack (LKR 10,850) for Students / Fresh Graduates.",
    orderHref: "/order?package=complete&level=under-2&delivery=normal",
  },
  {
    id: "career",
    eyebrow: "SIGNATURE",
    title: "Career Pack",
    subtitle: "Professionals · 1-9 years",
    total: "LKR 53,000",
    services: [
      { name: "ATS CV Writing", price: "LKR 13,500" },
      { name: "Cover Letter Writing", price: "LKR 8,500" },
      { name: "LinkedIn Optimization", price: "LKR 13,500" },
      { name: "Foreign Job CV", price: "LKR 17,500" },
    ],
    whatsappMsg:
      "Hi Chanuka, I would like to discuss the Career Pack (LKR 53,000) for Mid-Level Professionals (1-9 years).",
    orderHref: "/order?package=complete&level=3-to-9&delivery=normal",
    popular: true,
  },
  {
    id: "executive",
    eyebrow: "SIGNATURE",
    title: "Executive Pack",
    subtitle: "Executives · More than 9 years",
    total: "LKR 108,500",
    services: [
      { name: "ATS CV Writing", price: "LKR 19,500" },
      { name: "Foreign Job CV", price: "LKR 28,500" },
      { name: "LinkedIn Optimization", price: "LKR 19,500" },
      { name: "Cover Letter Writing", price: "LKR 13,500" },
      { name: "1-Hour Strategy Consultation", price: "LKR 27,500" },
    ],
    whatsappMsg:
      "Hi Chanuka, I would like to discuss the Executive Pack (LKR 108,500) for Executives (More than 9 years).",
    orderHref: "/order?package=complete&level=over-10&delivery=normal",
  },
];

export default function PackagesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Packages & Rates"
        title="Every price is published in Sri Lankan Rupees."
        lead="Transparent, fixed pricing for local and international career advancement. No quote forms and no hidden surprises. Pick your package, choose your delivery speed, and get started."
        crumbs={[{ label: "Packages" }]}
        primary={{ href: "/#build", label: "Open package calculator" }}
      />

      {/* Main 3 Signature Packages Grid - Exact Match to Spec */}
      <section className="py-12 sm:py-16 lg:py-20 bg-paper">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {SIGNATURE_PACKS.map((p) => (
              <article
                key={p.id}
                className={`flex h-full flex-col justify-between rounded-2xl border bg-surface p-6 sm:p-8 transition-all duration-200 shadow-xs hover:shadow-md ${
                  p.popular ? "border-[#c5a869] ring-1 ring-[#c5a869]/30" : "border-line"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#b9862f]">
                      {p.eyebrow}
                    </span>
                    {p.popular && (
                      <span className="rounded-full bg-brand px-2.5 py-0.5 text-[10.5px] font-semibold text-paper">
                        Most Popular
                      </span>
                    )}
                  </div>

                  <h2 className="display mt-2 text-2xl sm:text-3xl font-bold text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-[13px] text-muted">{p.subtitle}</p>

                  <div className="mt-5 pb-5 border-b border-line">
                    <span className="display text-3xl sm:text-4xl font-black text-ink block leading-none">
                      {p.total}
                    </span>
                    <span className="mt-1.5 block text-[11.5px] text-muted">
                      Combined service total · No automatic discount
                    </span>
                  </div>

                  {/* Individual service breakdown with itemized rates */}
                  <div className="mt-5 space-y-3">
                    {p.services.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-[13.5px] py-1 border-b border-line/40"
                      >
                        <span className="text-ink-soft">{item.name}</span>
                        <span className="font-bold text-ink">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={whatsappUrl(p.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl bg-[#c5a869] hover:bg-[#b89753] py-3.5 px-5 text-center text-[14.5px] font-bold text-white shadow-xs transition-colors"
                  >
                    Discuss This Package
                  </a>
                  <div className="mt-2.5 text-center">
                    <Link
                      href={p.orderHref}
                      className="text-[11.5px] font-semibold text-muted hover:text-brand transition-colors"
                    >
                      Or submit intake brief online →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Level & Delivery Guidance */}
      <section className="border-y border-line bg-surface py-12 sm:py-16 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Sri Lanka Pricing Structure</p>
          <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
            What shapes your investment.
          </h2>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-[15px] font-semibold text-ink">Career Stage Depth</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Each career level requires different strategic positioning. An entry-level CV focuses on education, projects, and transferable skills. A mid-level CV emphasizes measurable business impact and growth metrics. Executive documents require a board-ready leadership narrative and foreign market alignment.
              </p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {levels.map((l) => (
                  <li
                    key={l.id}
                    className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span className="text-[14px] font-medium text-ink">{l.name}</span>
                    <span className="text-[13px] text-muted">{l.hint}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-ink">Delivery Turnaround</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Every document is personally written and reviewed by Chanuka Jeewantha. Standard turnaround is 48 to 72 hours, with express options available when applying for fast-closing vacancies.
              </p>
              <ul className="mt-5 divide-y divide-line border-y border-line">
                {deliveries.map((d) => (
                  <li
                    key={d.id}
                    className="flex flex-col gap-1 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                  >
                    <span className="text-[14px] font-medium text-ink">{d.name}</span>
                    <span className="text-[13px] text-muted">{d.window}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[12.5px] text-muted">
                Need urgent assistance? Connect directly on WhatsApp for express availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ConversionFooter
        heading="Discuss your career transition."
        body="Message Chanuka directly on WhatsApp to select the right package for your target roles."
        related={[
          { href: "/services", label: "All services" },
          { href: "/how-it-works", label: "How it works" },
          { href: "/faq", label: "FAQ" },
          { href: "/contact", label: "Contact Chanuka" },
        ]}
      />
    </>
  );
}
