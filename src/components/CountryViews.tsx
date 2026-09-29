import Link from "next/link";
import { ConversionFooter } from "./ConversionFooter";
import { Chips, LinkChips, MistakeList, Section } from "./EntitySections";
import { PageHeader } from "./PageHeader";
import { AnswerBox, FaqSection, JsonLd, KeyFacts, Sources } from "./Seo";
import type { CountryMarket } from "@/lib/countries";
import type { CountryBundleFull, CountryService, IjsHub, OriginCorridor } from "@/lib/content/types";
import { BASE_PRICES, levels, usd, type ServiceId } from "@/lib/pricing";
import { itemListLd, serviceLd } from "@/lib/seo";

const SERVICE_ID: Record<string, ServiceId> = {
  "cv-writing": "cv",
  "linkedin-optimisation": "linkedin",
  "cover-letter-writing": "cover-letter",
};

const SERVICE_LABEL: Record<string, string> = {
  "cv-writing": "CV writing",
  "linkedin-optimisation": "LinkedIn optimisation",
  "cover-letter-writing": "Cover letter writing",
};

function docWord(m: CountryMarket) {
  return m.docType === "Resume" ? "resume" : "CV";
}

function serviceName(m: CountryMarket, service: string) {
  if (service === "cv-writing") return `${m.docType} writing`;
  return SERVICE_LABEL[service];
}

// ---------------------------------------------------------------- service

export function CountryServiceView({ bundle, svc }: { bundle: CountryBundleFull; svc: CountryService }) {
  const m = bundle.market;
  const sid = SERVICE_ID[svc.service];
  const prices = levels.map((l) => ({ level: l.name, price: BASE_PRICES[sid][l.id] }));
  const others = bundle.services.filter((s) => s.service !== svc.service);

  return (
    <>
      <JsonLd
        data={serviceLd({
          name: svc.h1,
          description: svc.metaDescription,
          path: `/${m.slug}/${svc.service}`,
          serviceType: serviceName(m, svc.service),
          areaServed: m.name,
          lowPrice: Math.min(...prices.map((p) => p.price)),
          highPrice: Math.max(...prices.map((p) => p.price)),
        })}
      />
      <PageHeader
        eyebrow={svc.eyebrow}
        title={svc.h1}
        lead={svc.lead}
        crumbs={[
          { label: "Countries", href: "/countries" },
          { label: m.name, href: `/${m.slug}` },
          { label: serviceName(m, svc.service) },
        ]}
        primary={{ href: `/order?market=${m.slug}`, label: "Start your order" }}
        secondary={{ href: `/${m.slug}`, label: `${m.adjective} market guide` }}
      />
      <AnswerBox answer={svc.quickAnswer} />

      <Section eyebrow={`${m.adjective} market`} title={svc.whyDifferent.heading}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-4">
            {svc.whyDifferent.paragraphs.map((p, i) => (
              <p key={i} className="text-[16px] leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
          <KeyFacts items={svc.keyFacts} title={`${m.adjective} at a glance`} />
        </div>
      </Section>

      <Section eyebrow="What you get" title="What is included." tone="surface">
        <ul className="grid gap-4 sm:grid-cols-2">
          {svc.whatYouGet.map((w) => (
            <li key={w} className="flex items-start gap-3 rounded-[14px] border border-line bg-paper p-5 text-[14.5px] leading-relaxed text-ink-soft">
              <svg viewBox="0 0 16 16" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-accent">
                <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" />
              </svg>
              {w}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Conventions" title={`${m.adjective} ${svc.service === "cv-writing" ? docWord(m) : "document"} conventions.`}>
        <div className="overflow-hidden rounded-[16px] border border-line">
          <table className="w-full text-left text-[14.5px]">
            <tbody className="divide-y divide-line">
              {svc.marketConventions.map((c) => (
                <tr key={c.label} className="align-top">
                  <th scope="row" className="w-[34%] bg-surface px-5 py-4 font-semibold text-ink">
                    {c.label}
                  </th>
                  <td className="px-5 py-4 leading-relaxed text-ink-soft">{c.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {svc.sectors.length > 0 && (
          <div className="mt-10">
            <h3 className="text-[15px] font-semibold text-ink">Where {m.adjective} clients most often need this</h3>
            <div className="mt-4">
              <Chips items={svc.sectors} />
            </div>
          </div>
        )}
      </Section>

      <Section eyebrow="Process" title="How it works." tone="surface">
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {svc.process.map((p, i) => (
            <li key={p.title} className="rounded-[14px] border border-line bg-paper p-6">
              <span className="text-[12px] font-semibold text-accent-deep">Step {i + 1}</span>
              <h3 className="display mt-2 text-[17px] text-ink">{p.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{p.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Pricing" title="Priced by experience, in USD." lead="Bundle two services to save 20%, or all three to save 30%. Faster delivery is available at checkout.">
        <div className="grid gap-4 sm:grid-cols-3">
          {prices.map((p) => (
            <div key={p.level} className="rounded-[16px] border border-line bg-surface p-6">
              <p className="text-[13px] font-semibold text-muted">{p.level}</p>
              <p className="display mt-2 text-[30px] text-ink">{usd(p.price)}</p>
              <p className="mt-1 text-[12.5px] text-muted">{serviceName(m, svc.service)}, delivery in 5 to 7 days</p>
            </div>
          ))}
        </div>
        <Link href={`/order?market=${m.slug}`} className="mt-8 inline-block rounded-full bg-brand px-7 py-3.5 text-[15px] font-semibold text-paper hover:bg-brand-deep">
          Start your order
        </Link>
      </Section>

      <FaqSection faqs={svc.faqs} title={`${serviceName(m, svc.service)} in ${m.name}: questions`} tone="surface" />

      <Section eyebrow="Related">
        <LinkChips
          items={[
            ...others.map((o) => ({ href: `/${m.slug}/${o.service}`, label: `${m.adjective} ${serviceName(m, o.service)}` })),
            { href: `/${m.slug}/career-advice`, label: `${m.adjective} career advice` },
            { href: `/${m.slug}/international-job-seekers`, label: `Applying to ${m.name} from abroad` },
            { href: `/${svc.service}`, label: `${SERVICE_LABEL[svc.service]} (international)` },
          ]}
        />
      </Section>

      <ConversionFooter
        heading={`Have your ${m.adjective} ${svc.service === "cv-writing" ? docWord(m) : SERVICE_LABEL[svc.service].toLowerCase()} written.`}
        body="Choose your package, your experience level and how fast you need it. The price is shown before you commit."
        primaryHref={`/order?market=${m.slug}`}
        primaryLabel="Start your order"
      />
    </>
  );
}

// ---------------------------------------------------------------- advice hub

export function CountryAdviceHubView({ bundle }: { bundle: CountryBundleFull }) {
  const m = bundle.market;
  const items = bundle.articles.map((a) => ({ name: a.title, path: `/${m.slug}/career-advice/${a.slug}` }));
  return (
    <>
      <JsonLd data={itemListLd(`${m.adjective} career advice`, items)} />
      <PageHeader
        eyebrow={`${m.name} · Career advice`}
        title={`${m.adjective} career advice`}
        lead={bundle.adviceHubIntro}
        crumbs={[
          { label: "Countries", href: "/countries" },
          { label: m.name, href: `/${m.slug}` },
          { label: "Career advice" },
        ]}
        showProof={false}
      />
      <section className="py-14 lg:py-20">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {bundle.articles.map((a) => (
            <Link
              key={a.slug}
              href={`/${m.slug}/career-advice/${a.slug}`}
              className="group flex h-full flex-col rounded-[14px] border border-line bg-surface p-6 transition-colors hover:border-brand"
            >
              <p className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-accent-deep">
                {a.category} · {a.readMinutes} min
              </p>
              <h2 className="display mt-3 text-[19px] leading-snug text-ink">{a.title}</h2>
              <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted">{a.excerpt}</p>
              <span className="mt-5 text-[13.5px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">Read →</span>
            </Link>
          ))}
        </div>
        <div className="container-page mt-12">
          <LinkChips
            items={[
              { href: "/career-advice", label: "All career advice (international)" },
              ...bundle.services.map((s) => ({ href: `/${m.slug}/${s.service}`, label: `${m.adjective} ${serviceName(m, s.service)}` })),
            ]}
          />
        </div>
      </section>
      <ConversionFooter heading={`Want your ${m.adjective} ${docWord(m)} written for you?`} primaryHref={`/order?market=${m.slug}`} primaryLabel="Start your order" />
    </>
  );
}

// ---------------------------------------------------------------- IJS hub

export function IjsHubView({ bundle, hub }: { bundle: CountryBundleFull; hub: IjsHub }) {
  const m = bundle.market;
  return (
    <>
      <PageHeader
        eyebrow={`${m.name} · International job seekers`}
        title={hub.h1}
        lead={hub.lead}
        crumbs={[
          { label: "Countries", href: "/countries" },
          { label: m.name, href: `/${m.slug}` },
          { label: "Applying from abroad" },
        ]}
        primary={{ href: `/${m.slug}/cv-writing`, label: `${m.docType === "Resume" ? "Resume" : "CV"} writing service` }}
        secondary={{ href: "/international-job-seekers", label: "All destinations" }}
      />
      <AnswerBox answer={hub.quickAnswer} />

      <Section eyebrow="Overview">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{hub.overview}</p>
      </Section>

      <Section eyebrow="Conventions" title={`What a ${m.adjective} ${docWord(m)} expects.`} tone="surface">
        <KeyFacts items={hub.cvConventions} title={`${m.adjective} ${docWord(m)} conventions`} />
      </Section>

      <Section eyebrow="What changes" title="What overseas applicants have to change.">
        <ul className="grid gap-4 sm:grid-cols-2">
          {hub.whatChanges.map((w) => (
            <li key={w} className="rounded-[14px] border border-line bg-surface p-5 text-[14.5px] leading-relaxed text-ink-soft">
              {w}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Applying from abroad" title="The practical steps." tone="surface">
        <ol className="grid gap-5 md:grid-cols-2">
          {hub.applyingFromAbroad.map((s, i) => (
            <li key={s.title} className="rounded-[14px] border border-line bg-paper p-6">
              <span className="text-[12px] font-semibold text-accent-deep">{i + 1}</span>
              <h3 className="display mt-1.5 text-[17px] text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Sectors" title={`Where international candidates compete in ${m.name}.`}>
        <Chips items={hub.keySectors} />
        <div className="mt-10 rounded-[16px] border border-line bg-surface p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Work rights: orientation only</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{hub.visaContext}</p>
        </div>
      </Section>

      <Section eyebrow="Mistakes" title="What gets overseas applications filtered." tone="surface">
        <MistakeList items={hub.commonMistakes} />
      </Section>

      <Section eyebrow="By origin" title={`Applying to ${m.name} from:`}>
        <div className="grid gap-5 md:grid-cols-2">
          {bundle.origins.map((o) => (
            <Link
              key={o.origin}
              href={`/${m.slug}/international-job-seekers/from-${o.origin}`}
              className="group rounded-[16px] border border-line bg-surface p-6 transition-colors hover:border-brand"
            >
              <h3 className="display text-[19px] text-ink">{o.originName}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{o.lead}</p>
              <span className="mt-4 inline-block text-[13.5px] font-semibold text-brand">Read the guide →</span>
            </Link>
          ))}
        </div>
        <div className="container-page px-0">
          <Sources items={hub.sources} />
        </div>
      </Section>

      <FaqSection faqs={hub.faqs} tone="surface" />
      <ConversionFooter
        heading={`Applying to ${m.name}? Get the ${docWord(m)} right for that market.`}
        primaryHref={`/order?market=${m.slug}`}
        primaryLabel="Start your order"
      />
    </>
  );
}

// ---------------------------------------------------------------- origin corridor

export function OriginView({ bundle, o }: { bundle: CountryBundleFull; o: OriginCorridor }) {
  const m = bundle.market;
  const other = bundle.origins.find((x) => x.origin !== o.origin);
  return (
    <>
      <PageHeader
        eyebrow={`${o.originName} to ${m.name}`}
        title={o.h1}
        lead={o.lead}
        crumbs={[
          { label: m.name, href: `/${m.slug}` },
          { label: "Applying from abroad", href: `/${m.slug}/international-job-seekers` },
          { label: `From ${o.originName}` },
        ]}
        primary={{ href: `/order?market=${m.slug}`, label: "Start your order" }}
        secondary={{ href: `/${m.slug}/cv-writing`, label: `${m.docType === "Resume" ? "Resume" : "CV"} writing service` }}
      />
      <AnswerBox answer={o.quickAnswer} />

      <Section eyebrow="Overview">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{o.overview}</p>
      </Section>

      <Section eyebrow="Convert the CV" title={`From a ${o.originName} CV to a ${m.adjective} ${docWord(m)}.`} tone="surface">
        <div className="overflow-hidden rounded-[16px] border border-line bg-paper">
          <table className="w-full text-left text-[14.5px]">
            <thead className="border-b border-line bg-surface text-[12px] uppercase tracking-wide text-muted">
              <tr>
                <th scope="col" className="px-5 py-3 font-semibold">Common in {o.originName}</th>
                <th scope="col" className="px-5 py-3 font-semibold">What {m.adjective} employers expect</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {o.whatToChange.map((r) => (
                <tr key={r.from} className="align-top">
                  <td className="w-1/2 px-5 py-4 leading-relaxed text-ink-soft">{r.from}</td>
                  <td className="w-1/2 px-5 py-4 leading-relaxed text-ink">{r.to}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Qualifications" title="How your qualifications are read.">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{o.qualificationsNote}</p>
        <div className="mt-10">
          <h3 className="text-[15px] font-semibold text-ink">Sectors where {o.originName} candidates commonly compete</h3>
          <div className="mt-4">
            <Chips items={o.sectorsWhereCandidatesCompete} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Steps" title="What to do, in order." tone="surface">
        <ol className="grid gap-5 md:grid-cols-2">
          {o.practicalSteps.map((s, i) => (
            <li key={s.title} className="rounded-[14px] border border-line bg-paper p-6">
              <span className="text-[12px] font-semibold text-accent-deep">{i + 1}</span>
              <h3 className="display mt-1.5 text-[17px] text-ink">{s.title}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Mistakes" title="What costs these applications interviews.">
        <MistakeList items={o.commonMistakes} />
        <div className="mt-10 rounded-[16px] border border-line bg-surface p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Work rights: orientation only</p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{o.visaContext}</p>
        </div>
        <Sources items={o.sources} />
      </Section>

      <FaqSection faqs={o.faqs} tone="surface" />

      <Section eyebrow="Related">
        <LinkChips
          items={[
            { href: `/${m.slug}/international-job-seekers`, label: `Applying to ${m.name}` },
            ...(other ? [{ href: `/${m.slug}/international-job-seekers/from-${other.origin}`, label: `${m.name} from ${other.originName}` }] : []),
            ...bundle.services.map((s) => ({ href: `/${m.slug}/${s.service}`, label: `${m.adjective} ${serviceName(m, s.service)}` })),
            { href: `/${m.slug}/career-advice`, label: `${m.adjective} career advice` },
          ]}
        />
      </Section>

      <ConversionFooter
        heading={`Moving from ${o.originName} to ${m.name}? Start with the ${docWord(m)}.`}
        primaryHref={`/order?market=${m.slug}`}
        primaryLabel="Start your order"
      />
    </>
  );
}
