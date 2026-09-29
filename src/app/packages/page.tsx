import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Essential & Signature Packages | Chanuka Jeewantha",
  description:
    "Compare every service price for your experience level. Choose team-crafted Essential packages or founder-led Signature packages in Sri Lankan Rupees (LKR).",
  path: "/packages",
});

const ESSENTIALS_DATA = [
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

const SIGNATURE_DATA = [
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

const BUNDLE_PACKS = [
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
    <div className="min-h-screen bg-[#fcfdfd]">
      {/* =================================================================== */}
      {/* 1. HERO HEADER: Dark, Elegant, Centered (Matching Screenshot) */}
      {/* =================================================================== */}
      <section className="relative overflow-hidden bg-[#0d1624] text-white pt-28 pb-16 sm:pt-32 sm:pb-20 text-center px-4">
        {/* Subtle decorative glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 -top-24 -translate-x-1/2 h-80 w-[45rem] rounded-full bg-gradient-to-b from-[#c5a869]/20 to-transparent blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* Breadcrumb */}
          <div className="mb-4 flex items-center justify-center gap-2 text-[12px] text-white/60">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-[#c5a869] font-medium">Pricing</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight text-white leading-[1.15]">
            Essential &amp; Signature{" "}
            <span className="text-[#c5a869] italic font-normal">Packages</span>
          </h1>

          <p className="mt-4 text-[14px] sm:text-[16px] text-white/80 max-w-2xl mx-auto leading-relaxed">
            Compare every service price for your experience level. Choose team-crafted
            Essential packages or founder-led Signature packages.
          </p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <a
              href="#packages-cards"
              className="rounded-lg bg-[#c5a869] hover:bg-[#b89753] text-[#0d1624] font-bold px-6 py-2.5 text-[14px] shadow-md hover:shadow-lg transition-all"
            >
              Find My Package
            </a>
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 2. COMPARISON TABLES SECTION */}
      {/* =================================================================== */}
      <section id="pricing-tables" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-10">
          {/* TABLE 1: Essentials Packages */}
          <div className="rounded-2xl border border-line bg-surface p-5 sm:p-8 shadow-xs">
            <div className="mb-6">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Essentials Packages
              </h2>
              <p className="mt-1 text-[13px] text-muted">
                Team-crafted under Chanuka&apos;s supervision with quality review and practical delivery.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-line text-[11px] font-bold uppercase tracking-wider text-muted">
                    <th className="py-3 px-3 w-[40%]">Service</th>
                    <th className="py-3 px-3 text-right">
                      <span className="block text-ink">Student / Fresh Graduate</span>
                      <span className="text-[10px] text-muted font-normal lowercase">Less than 1 year</span>
                    </th>
                    <th className="py-3 px-3 text-right">
                      <span className="block text-ink">Professional</span>
                      <span className="text-[10px] text-muted font-normal lowercase">1-9 years</span>
                    </th>
                    <th className="py-3 px-3 text-right">
                      <span className="block text-ink">Executive</span>
                      <span className="text-[10px] text-muted font-normal lowercase">More than 9 years</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 text-[13.5px]">
                  {ESSENTIALS_DATA.map((row, i) => (
                    <tr key={i} className="hover:bg-sand/30 transition-colors">
                      <td className="py-3.5 px-3 font-semibold text-ink">{row.service}</td>
                      <td className="py-3.5 px-3 text-right font-bold text-ink">{row.student}</td>
                      <td className="py-3.5 px-3 text-right font-bold text-ink">{row.professional}</td>
                      <td className="py-3.5 px-3 text-right font-bold text-ink">{row.executive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* TABLE 2: Signature Series Packages (Dark Card Header) */}
          <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-xs">
            {/* Header banner */}
            <div className="bg-[#0e1a2b] p-5 sm:p-7 text-white">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Signature Series Packages
              </h2>
              <p className="mt-1 text-[13px] text-white/80">
                Personally crafted by Chanuka Jeewantha with premium positioning and strategic development.
              </p>
            </div>

            <div className="p-5 sm:p-8 overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[620px]">
                <thead>
                  <tr className="border-b border-line text-[11px] font-bold uppercase tracking-wider text-muted">
                    <th className="py-3 px-3 w-[40%]">Service</th>
                    <th className="py-3 px-3 text-right">
                      <span className="block text-ink">Student / Fresh Graduate</span>
                      <span className="text-[10px] text-muted font-normal lowercase">Less than 1 year</span>
                    </th>
                    <th className="py-3 px-3 text-right">
                      <span className="block text-ink">Professional</span>
                      <span className="text-[10px] text-muted font-normal lowercase">1-9 years</span>
                    </th>
                    <th className="py-3 px-3 text-right">
                      <span className="block text-ink">Executive</span>
                      <span className="text-[10px] text-muted font-normal lowercase">More than 9 years</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60 text-[13.5px]">
                  {SIGNATURE_DATA.map((row, i) => (
                    <tr key={i} className="hover:bg-sand/30 transition-colors">
                      <td className="py-3.5 px-3 font-semibold text-ink">{row.service}</td>
                      <td className="py-3.5 px-3 text-right font-bold text-ink">{row.student}</td>
                      <td className="py-3.5 px-3 text-right font-bold text-ink">{row.professional}</td>
                      <td className="py-3.5 px-3 text-right font-bold text-ink">{row.executive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footnote */}
          <p className="text-[12px] leading-relaxed text-muted px-2">
            Student / Fresh Graduate: less than 1 year of experience. Professional: 1-9 years. Executive: more than 9 years. Prices above are standard package prices in LKR. Fast delivery is priced separately in our catalogue. CV Review includes feedback on an existing CV; not a CV rewrite.
          </p>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 3. NEED MORE THAN ONE SERVICE? (3 CARDS MATCHING SCREENSHOT) */}
      {/* =================================================================== */}
      <section id="packages-cards" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-line/60 bg-[#f8fafd]">
        <div className="mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink">
              Need More Than One Service?
            </h2>
            <p className="mt-2 text-[13.5px] sm:text-[14.5px] text-muted leading-relaxed">
              To create your combination, simply add the individual service prices above. No automatic bundle discount applies.
            </p>
          </div>

          {/* 3 Package Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {BUNDLE_PACKS.map((p) => (
              <article
                key={p.id}
                className="flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#b9862f] block">
                    {p.eyebrow}
                  </span>

                  <h3 className="font-display mt-1.5 text-2xl sm:text-3xl font-bold text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-muted">{p.subtitle}</p>

                  <div className="mt-5 pb-5 border-b border-line">
                    <span className="font-display text-3xl sm:text-4xl font-bold text-ink block leading-none">
                      {p.total}
                    </span>
                    <span className="mt-1.5 block text-[11px] text-muted">
                      Combined service total · No automatic discount
                    </span>
                  </div>

                  {/* Individual service breakdown with itemized rates */}
                  <div className="mt-5 space-y-3">
                    {p.services.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-[13px] py-1 border-b border-line/40"
                      >
                        <span className="text-ink-soft">{item.name}</span>
                        <span className="font-bold text-ink">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-2">
                  <a
                    href={whatsappUrl(p.whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-lg bg-[#c5a869] hover:bg-[#b89753] py-3 px-5 text-center text-[14px] font-bold text-[#0d1624] shadow-xs transition-colors"
                  >
                    Discuss This Package
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =================================================================== */}
      {/* 4. BOTTOM CTA BANNER: LET'S WORK TOGETHER (Dark Footer Band) */}
      {/* =================================================================== */}
      <section className="bg-[#0b131e] text-white py-14 px-4 text-center border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-widest text-[#c5a869]">
            Let&apos;s Work Together
          </p>
          <h2 className="font-display mt-2 text-2xl sm:text-4xl font-bold text-white">
            Chanuka Jeewantha
          </h2>
          <p className="mt-2 text-[13.5px] text-white/70 max-w-lg mx-auto">
            Ready to upgrade your career credentials? Message directly on WhatsApp to get tailored recommendations for your profile.
          </p>
          <div className="mt-6">
            <a
              href={whatsappUrl("Hi Chanuka, I would like to inquire about your CV and Career packages.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#c5a869] hover:bg-[#b89753] text-[#0b131e] font-bold px-7 py-3 text-[14px] shadow-lg transition-all"
            >
              <span>Order on WhatsApp</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
