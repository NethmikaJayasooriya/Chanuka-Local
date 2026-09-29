import Link from "next/link";
import { ConversionFooter } from "./ConversionFooter";
import { AnswerBox, FaqSection, JsonLd } from "./Seo";
import { getBundle } from "@/lib/country-content";
import { getJobRole } from "@/lib/job-roles";
import { serviceLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { PageHeader } from "./PageHeader";
import type { CountryMarket } from "@/lib/countries";

export function CountryPageView({ country }: { country: CountryMarket }) {
  const bundle = getBundle(country.slug);
  return (
    <>
      <JsonLd
        data={serviceLd({
          name: `CV and ${country.docType === "Resume" ? "resume" : "CV"} writing for ${country.name}`,
          description: country.metaDescription,
          path: `/${country.slug}`,
          serviceType: country.docType === "Resume" ? "Resume writing" : "CV writing",
          areaServed: country.name,
        })}
      />
      <PageHeader
        eyebrow={`Target Market · ${country.name}`}
        title={country.heroHeading}
        lead={country.heroLead}
        crumbs={[{ label: "Countries", href: "/countries" }, { label: country.name }]}
        primary={{ href: `/#build?market=${country.slug}`, label: "Build your package" }}
        secondary={{ href: `/${country.slug}/cv-writing`, label: `${country.docType === "Resume" ? "Resume" : "CV"} writing service` }}
      />
      <AnswerBox answer={country.quickAnswer} />

      {/* Quick Market Fact Ribbon */}
      <section className="border-b border-line bg-surface py-7">
        <div className="container-page">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
            <div className="rounded-xl border border-line bg-paper p-3 sm:p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Format</p>
              <p className="mt-1 text-[14px] sm:text-[15px] font-semibold text-ink">{country.docType}</p>
            </div>
            <div className="rounded-xl border border-line bg-paper p-3 sm:p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Standard Length</p>
              <p className="mt-1 text-[14px] sm:text-[15px] font-semibold text-ink">{country.standardLength.split("(")[0].trim()}</p>
            </div>
            <div className="rounded-xl border border-line bg-paper p-3 sm:p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Photo Policy</p>
              <p className="mt-1 text-[14px] sm:text-[15px] font-semibold text-ink">
                {country.photoRule.split(/[.(;]/)[0].slice(0, 60)}
              </p>
            </div>
            <div className="rounded-xl border border-line bg-paper p-3 sm:p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Pricing Currency</p>
              <p className="mt-1 text-[14px] sm:text-[15px] font-semibold text-ink">USD ($) Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="py-14 lg:py-18">
        <div className="container-page max-w-4xl">
          <div className="space-y-4">
            <p className="eyebrow">Local hiring landscape</p>
            <h2 className="display text-[clamp(1.6rem,3vw,2.2rem)] text-ink">
              How recruitment works in {country.name}.
            </h2>
            <p className="text-[16px] leading-relaxed text-muted">{country.overview}</p>
          </div>

          {/* Market Rules Checklist */}
          <div className="mt-10">
            <h3 className="text-[18px] font-semibold text-ink">
              Crucial {country.adjective} Application Conventions
            </h3>
            <div className="mt-5 space-y-3.5">
              {country.marketRules.map((rule) => (
                <div
                  key={rule.label}
                  className="flex flex-col gap-1 rounded-[14px] border border-line bg-surface p-5 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <div className="flex items-center gap-2 sm:w-48 sm:shrink-0">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        rule.importance === "critical" ? "bg-red-500" : "bg-accent"
                      }`}
                    />
                    <span className="text-[14px] font-semibold text-ink">{rule.label}</span>
                  </div>
                  <p className="text-[14px] leading-relaxed text-ink-soft">{rule.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Recruiters Screen For & Key Roles */}
      <section className="border-y border-line bg-sand/30 py-14 lg:py-18">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="eyebrow">Screening criteria</p>
              <h2 className="display mt-2 text-[clamp(1.5rem,2.8vw,2rem)] text-ink">
                What {country.adjective} recruiters screen for.
              </h2>
              <ul className="mt-6 space-y-3">
                {country.whatRecruitersLookFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                    <svg viewBox="0 0 16 16" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-accent">
                      <path fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">In-demand sectors</p>
              <h2 className="display mt-2 text-[clamp(1.5rem,2.8vw,2rem)] text-ink">
                Active hiring industries.
              </h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {country.inDemandSectors.map((sector) => (
                  <span
                    key={sector}
                    className="rounded-full border border-line-strong bg-paper px-4 py-2 text-[13.5px] font-medium text-ink shadow-2xs"
                  >
                    {sector}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-[16px] border border-line bg-paper p-6 shadow-sm">
                <h3 className="text-[14px] font-semibold uppercase tracking-wider text-muted">
                  Popular Roles in {country.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {country.keyRoles.map((role) => {
                    const slug = role.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    return getJobRole(slug) ? (
                      <Link
                        key={role}
                        href={`/job-roles/${slug}`}
                        className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-soft transition-colors hover:border-brand hover:text-brand"
                      >
                        {role} CV →
                      </Link>
                    ) : (
                      <span key={role} className="rounded-lg border border-line bg-surface px-3 py-1.5 text-[13px] text-ink-soft">
                        {role}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country mini-site: services, advice and international pages */}
      {bundle && (
        <section className="py-14 lg:py-18">
          <div className="container-page">
            <p className="eyebrow reveal">{country.name} services</p>
            <h2 className="display reveal d1 mt-3 text-[clamp(1.6rem,3vw,2.2rem)] text-ink">
              Written for {country.adjective} employers.
            </h2>
            <div className="reveal d2 mt-8 grid gap-5 md:grid-cols-3">
              {bundle.services.map((s) => (
                <Link
                  key={s.service}
                  href={`/${country.slug}/${s.service}`}
                  className="group flex h-full flex-col rounded-[16px] border border-line bg-surface p-6 transition-colors hover:border-brand"
                >
                  <p className="text-[11.5px] font-semibold uppercase tracking-[0.12em] text-accent-deep">{s.eyebrow}</p>
                  <h3 className="display mt-3 text-[19px] leading-snug text-ink">{s.h1}</h3>
                  <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted">{s.lead}</p>
                  <span className="mt-5 text-[13.5px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">See the service →</span>
                </Link>
              ))}
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-2">
              <div className="reveal">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">{country.adjective} career advice</p>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  {bundle.articles.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/${country.slug}/career-advice/${a.slug}`} className="flex items-center justify-between gap-4 py-4 text-[15px] font-medium text-ink hover:text-brand">
                        {a.title}
                        <span aria-hidden className="text-brand">→</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href={`/${country.slug}/career-advice`} className="block py-4 text-[14px] font-semibold text-brand">All {country.adjective} career advice →</Link>
                  </li>
                </ul>
              </div>
              <div className="reveal d1">
                <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Applying from abroad</p>
                <ul className="mt-4 divide-y divide-line border-y border-line">
                  <li>
                    <Link href={`/${country.slug}/international-job-seekers`} className="flex items-center justify-between gap-4 py-4 text-[15px] font-medium text-ink hover:text-brand">
                      {bundle.ijsHub.h1}
                      <span aria-hidden className="text-brand">→</span>
                    </Link>
                  </li>
                  {bundle.origins.map((o) => (
                    <li key={o.origin}>
                      <Link href={`/${country.slug}/international-job-seekers/from-${o.origin}`} className="flex items-center justify-between gap-4 py-4 text-[15px] font-medium text-ink hover:text-brand">
                        {o.h1}
                        <span aria-hidden className="text-brand">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={site.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal mt-12 flex flex-col gap-2 rounded-[16px] border border-line bg-surface p-6 transition-colors hover:border-brand sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-[15px] font-semibold text-ink">
                Rated {site.rating.score} from {site.rating.count} Google reviews by clients worldwide
              </span>
              <span className="text-[14px] font-semibold text-brand">Read the reviews on Google →</span>
            </a>
          </div>
        </section>
      )}

      <FaqSection faqs={country.faqs} title={`Frequently asked about applying in ${country.name}.`} tone="surface" />

      <ConversionFooter
        heading={`Ready to land interviews in ${country.name}?`}
        body={`Get your ${country.docType} and LinkedIn profile rewritten specifically for the ${country.adjective} market. Delivery from 24 hours.`}
        primaryHref={`/#build?market=${country.slug}`}
        primaryLabel="Build your package"
        related={[
          { href: "/packages", label: "View all packages" },
          { href: "/cv-samples", label: "CV samples" },
          { href: "/countries", label: "Other country markets" },
        ]}
      />
    </>
  );
}
