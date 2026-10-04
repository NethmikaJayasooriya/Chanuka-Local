import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { deliveries, levels, formatLKR } from "@/lib/pricing";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "CV Writing Prices in Sri Lanka (LKR Packages)",
  description:
    "Published Sri Lanka package pricing across three career levels. Every price is final with no hidden fees or discovery calls required.",
  path: "/packages",
});

const PACKAGES_DATA = [
  {
    id: "starter",
    eyebrow: "ESSENTIALS",
    title: "Starter Pack",
    subtitle: "Students / Fresh Graduates · Less than 1 year",
    total: "LKR 10,850",
    popular: false,
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
    popular: true,
    services: [
      { name: "ATS CV Writing", price: "LKR 13,500" },
      { name: "Cover Letter Writing", price: "LKR 8,500" },
      { name: "LinkedIn Optimization", price: "LKR 13,500" },
      { name: "Foreign Job CV", price: "LKR 17,500" },
    ],
    whatsappMsg:
      "Hi Chanuka, I would like to discuss the Career Pack (LKR 53,000) for Mid-Level Professionals (1-9 years).",
    orderHref: "/order?package=complete&level=3-to-9&delivery=normal",
  },
  {
    id: "executive",
    eyebrow: "SIGNATURE",
    title: "Executive Pack",
    subtitle: "Executives · More than 9 years",
    total: "LKR 108,500",
    popular: false,
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

const ESSENTIALS_TABLE = [
  {
    service: "ATS Friendly Professional CV Writing",
    student: "LKR 3,950",
    professional: "LKR 6,950",
    executive: "LKR 9,950",
  },
  {
    service: "LinkedIn Account Optimization",
    student: "LKR 3,950",
    professional: "LKR 5,950",
    executive: "LKR 8,950",
  },
  {
    service: "Professional Cover Letter Writing",
    student: "LKR 2,950",
    professional: "LKR 3,950",
    executive: "LKR 5,950",
  },
  {
    service: "Foreign Job CV Writing",
    student: "LKR 4,950",
    professional: "LKR 7,950",
    executive: "LKR 12,950",
  },
  {
    service: "CV Review",
    student: "LKR 1,490",
    professional: "LKR 1,990",
    executive: "LKR 2,490",
  },
];

const SIGNATURE_TABLE = [
  {
    service: "ATS Friendly Professional CV Writing",
    student: "LKR 7,500",
    professional: "LKR 13,500",
    executive: "LKR 19,500",
  },
  {
    service: "LinkedIn Account Optimization",
    student: "LKR 7,500",
    professional: "LKR 13,500",
    executive: "LKR 19,500",
  },
  {
    service: "Professional Cover Letter Writing",
    student: "LKR 5,500",
    professional: "LKR 8,500",
    executive: "LKR 13,500",
  },
  {
    service: "Foreign Job CV Writing",
    student: "LKR 12,500",
    professional: "LKR 17,500",
    executive: "LKR 28,500",
  },
  {
    service: "CV Review",
    student: "LKR 2,500",
    professional: "LKR 3,500",
    executive: "LKR 4,500",
  },
];

export default function PackagesPage() {
  return (
    <>
      {/* 1. ORIGINAL PAGE HEADER (Kept Exactly As Previously) */}
      <PageHeader
        eyebrow="Packages"
        title="Every price is on this page."
        lead="No quote forms and no discovery call before you can see a number. Pick the package, your experience level and the delivery speed, and the total is final."
        crumbs={[{ label: "Packages" }]}
        primary={{ href: "/#build", label: "Build your package" }}
      />

      {/* 2. UPDATED PACKAGE GRID (Exact Updated Package Details & Prices) */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {PACKAGES_DATA.map((p) => (
              <article
                key={p.id}
                className={`flex h-full flex-col justify-between rounded-[14px] border bg-surface p-5 sm:p-7 transition-all ${
                  p.popular ? "border-brand ring-1 ring-brand/20 shadow-md" : "border-line shadow-xs"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#b9862f]">
                      {p.eyebrow}
                    </span>
                    {p.popular && (
                      <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-paper">
                        Popular
                      </span>
                    )}
                  </div>

                  <h2 className="display mt-2 text-[22px] leading-snug text-ink">{p.title}</h2>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{p.subtitle}</p>

                  <div className="mt-5 pb-4 border-b border-line">
                    <span className="display text-[32px] sm:text-[36px] leading-none text-ink font-bold block">
                      {p.total}
                    </span>
                    <span className="mt-1.5 block text-[11.5px] text-muted">
                      Combined service total · No automatic discount
                    </span>
                  </div>

                  {/* Individual service breakdown with itemized rates */}
                  <ul className="mt-5 space-y-2.5 text-[13px]">
                    {p.services.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between py-1 border-b border-line/40 text-ink"
                      >
                        <span className="text-ink-soft">{item.name}</span>
                        <span className="font-bold text-ink">{item.price}</span>
                      </li>
                    ))}
                    <li className="flex items-center justify-between py-1 text-[12px] text-muted">
                      <span>Revision round</span>
                      <span className="font-semibold text-emerald-600">Included</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={whatsappUrl(p.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl bg-[#c5a869] hover:bg-[#b89753] py-3.5 px-6 text-center text-[14.5px] font-bold text-white shadow-xs transition-colors"
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

      {/* 3. SERVICE COMPARISON TABLES (Essentials & Signature Breakdown) */}
      <section className="border-t border-line bg-surface/50 py-12 sm:py-16">
        <div className="container-page space-y-10">
          <div className="text-center max-w-2xl mx-auto">
            <p className="eyebrow">Itemized Rates</p>
            <h2 className="display mt-2 text-[clamp(1.5rem,3vw,2.2rem)] text-ink">
              Compare Every Service by Experience Level
            </h2>
            <p className="mt-1.5 text-[13.5px] text-muted">
              Choose team-crafted Essential packages or founder-led Signature packages.
            </p>
          </div>

          {/* Essentials Table */}
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-7 shadow-xs">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
              Essentials Packages
            </h3>
            <p className="text-[12.5px] text-muted mt-0.5 mb-5">
              Team-crafted under Chanuka&apos;s supervision with quality review and practical delivery.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[580px]">
                <thead>
                  <tr className="border-b border-line text-[11px] font-bold uppercase tracking-wider text-muted">
                    <th className="py-2.5 px-3 w-[42%]">Service</th>
                    <th className="py-2.5 px-3 text-right">Student / Graduate</th>
                    <th className="py-2.5 px-3 text-right">Professional</th>
                    <th className="py-2.5 px-3 text-right">Executive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 text-[13px]">
                  {ESSENTIALS_TABLE.map((row, i) => (
                    <tr key={i} className="hover:bg-sand/30 transition-colors">
                      <td className="py-3 px-3 font-semibold text-ink">{row.service}</td>
                      <td className="py-3 px-3 text-right font-bold text-ink">{row.student}</td>
                      <td className="py-3 px-3 text-right font-bold text-ink">{row.professional}</td>
                      <td className="py-3 px-3 text-right font-bold text-ink">{row.executive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Signature Series Table */}
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xs">
            <div className="bg-[#0e1a2b] p-5 sm:p-6 text-white">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                Signature Series Packages
              </h3>
              <p className="text-[12.5px] text-white/80 mt-0.5">
                Personally crafted by Chanuka Jeewantha with premium positioning and strategic development.
              </p>
            </div>
            <div className="p-5 sm:p-7 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[580px]">
                <thead>
                  <tr className="border-b border-line text-[11px] font-bold uppercase tracking-wider text-muted">
                    <th className="py-2.5 px-3 w-[42%]">Service</th>
                    <th className="py-2.5 px-3 text-right">Student / Graduate</th>
                    <th className="py-2.5 px-3 text-right">Professional</th>
                    <th className="py-2.5 px-3 text-right">Executive</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 text-[13px]">
                  {SIGNATURE_TABLE.map((row, i) => (
                    <tr key={i} className="hover:bg-sand/30 transition-colors">
                      <td className="py-3 px-3 font-semibold text-ink">{row.service}</td>
                      <td className="py-3 px-3 text-right font-bold text-ink">{row.student}</td>
                      <td className="py-3 px-3 text-right font-bold text-ink">{row.professional}</td>
                      <td className="py-3 px-3 text-right font-bold text-ink">{row.executive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ORIGINAL WHAT CHANGES THE PRICE SECTION (Kept Exactly As Previously) */}
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
              <h3 className="text-[15px] font-semibold text-ink">Delivery speed</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                Every document is written personally, so a faster turnaround means
                reordering other work. The fee reflects that. Every option includes one
                full revision round.
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
                The final total, with everything included, is shown before you pay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ORIGINAL CONVERSION FOOTER (Kept Exactly As Previously) */}
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
