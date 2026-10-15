import { PriceList } from "./PriceList";
import { ConversionFooter } from "./ConversionFooter";
import Link from "next/link";
import { PageHeader } from "./PageHeader";
import { AnswerBox, JsonLd } from "./Seo";
import { AUTHOR_PATH, serviceLd, webPageLd } from "@/lib/seo";
import { BASE_PRICES, SIGNATURE_PRICES, usd } from "@/lib/pricing";
import { site } from "@/lib/site";
import type { ServicePage } from "@/lib/services";

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

export function ServicePageView({ service }: { service: ServicePage }) {
  const fromPrice = service.packageService
    ? BASE_PRICES[service.packageService]["under-2"]
    : null;

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.title}
        lead={service.lead}
        crumbs={[{ label: "Services", href: "/services" }, { label: service.name }]}
        primary={
          service.packageService
            ? { href: "/#build", label: "Build your package" }
            : { href: "/contact", label: "Enquire about this service" }
        }
        secondary={{ href: "/packages", label: "See packages" }}
      />
      <JsonLd
        data={serviceLd({
          name: service.name,
          description: service.metaDescription,
          path: `/${service.slug}`,
          serviceType: service.name,
          lowPrice: service.packageService ? BASE_PRICES[service.packageService]["under-2"] : undefined,
          highPrice: service.packageService ? SIGNATURE_PRICES[service.packageService]["over-10"] : undefined,
          packageService: service.packageService,
        })}
      />
      <JsonLd data={webPageLd({ name: service.title, description: service.metaDescription, path: `/${service.slug}`, mainEntity: `/${service.slug}#service` })} />
      <AnswerBox answer={service.quickAnswer} label={`${service.name} in Sri Lanka: at a glance`} />

      {fromPrice && (
        <section className="border-b border-line bg-surface py-6">
          <div className="container-page flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <span className="text-[13px] uppercase tracking-[0.1em] text-muted">From</span>
            <span className="display text-[26px] text-ink">{usd(fromPrice)}</span>
            <span className="text-[13.5px] text-muted">
              Essential starting price. Choose your service tier and experience level below.
            </span>
          </div>
        </section>
      )}

      {service.packageService && (
        <section className="border-b border-line py-10">
          <div className="container-page">
            <h2 className="display text-[24px] text-ink">What does {service.name.toLowerCase()} cost in Sri Lanka?</h2>
            <div className="mt-5"><PriceList service={service.packageService} /></div>
            <p className="mt-5 text-sm leading-relaxed text-muted">Essential is team-crafted under Chanuka’s supervision and quality-checked by him. Signature is personally crafted by <Link href={AUTHOR_PATH} className="font-semibold text-brand">{site.name}, CPRW, CPCC</Link>, with 30-day support. <Link href="/how-it-works" className="underline">See the process</Link>.</p>
          </div>
        </section>
      )}

      {/* What you receive */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="eyebrow">What you receive</p>
            <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
              The deliverable.
            </h2>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[14.5px] text-ink-soft">
                  <Tick />
                  {d}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {service.includes.map((item) => (
              <article key={item.heading} className="rounded-[14px] border border-line bg-surface p-5 sm:p-6">
                <h3 className="display text-[17px] leading-snug text-ink">{item.heading}</h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {service.examples && (
        <section className="border-t border-line py-12 lg:py-16">
          <div className="container-page">
            <p className="eyebrow">See the difference</p>
            <h2 className="display mt-3 text-[28px] text-ink">Specific evidence beats generic wording.</h2>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-muted">Illustrative writing examples, not client testimonials or measured outcomes. Use only details that are true for your own career.</p>
            <div className="mt-7 grid gap-5 lg:grid-cols-2">
              {service.examples.map((example) => (
                <article key={example.label} className="rounded-[16px] border border-line bg-surface p-6">
                  <h3 className="font-semibold text-ink">{example.label}</h3>
                  <dl className="mt-5 space-y-4 text-[15px] leading-relaxed">
                    <div><dt className="text-[12px] font-semibold uppercase text-muted">Before</dt><dd className="mt-1 text-muted">{example.before}</dd></div>
                    <div><dt className="text-[12px] font-semibold uppercase text-brand">After</dt><dd className="mt-1 text-ink">{example.after}</dd></div>
                  </dl>
                  <p className="mt-5 border-t border-line pt-4 text-[14px] leading-relaxed text-muted">{example.why}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.localNotes && (
        <section className="border-y border-line bg-surface py-12 lg:py-16">
          <div className="container-page">
            <h2 className="display text-[28px] text-ink">Built around your application, wherever you live in Sri Lanka.</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-3">
              {service.localNotes.map((note) => <article key={note.heading}><h3 className="font-semibold text-ink">{note.heading}</h3><p className="mt-3 text-[15px] leading-relaxed text-muted">{note.body}</p></article>)}
            </div>
            {service.sinhalaSummary && <div lang="si-LK" className="mt-8 rounded-[14px] border border-line bg-paper p-6"><h3 className="font-semibold text-ink">සිංහලෙන් කෙටියෙන්</h3><p className="mt-3 text-[16px] leading-loose text-ink-soft">{service.sinhalaSummary}</p></div>}
          </div>
        </section>
      )}

      {/* Who it is for */}
      <section className="border-y border-line bg-surface py-10 sm:py-14 lg:py-20">
        <div className="container-page">
          <p className="eyebrow">Who it is for</p>
          <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
            This is the right service if you are:
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {service.whoFor.map((w, i) => (
              <li key={w} className="rounded-[14px] border border-line bg-paper p-5">
                <span className="num-badge h-6 px-2.5 rounded-md bg-accent-soft border border-accent/25 text-[11px] text-accent-deep">
                  0{i + 1}
                </span>
                <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{w}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="display mt-3 text-[clamp(1.6rem,3.2vw,2.2rem)] text-ink">
              About this service.
            </h2>
          </div>
          <div className="divide-y divide-line border-t border-line">
            {service.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15.5px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span
                    aria-hidden
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45"
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3">
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        d="M6 2v8M2 6h8"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl pr-2 sm:pr-10 text-[14.5px] leading-relaxed text-muted">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ConversionFooter
        heading={`Start your ${service.name}.`}
        related={service.related}
      />
    </>
  );
}
