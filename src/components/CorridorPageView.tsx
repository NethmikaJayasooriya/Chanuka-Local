import { MIGRATED_CORRIDORS } from "@/lib/country-content";
import { getCountry } from "@/lib/countries";
import { AnswerBox, FaqSection, JsonLd } from "@/components/Seo";
import { ConversionFooter } from "./ConversionFooter";
import {
  BulletCards,
  InlineOfferBanner,
  LinkChips,
  MistakeList,
  Section,
} from "./EntitySections";
import { PageHeader } from "./PageHeader";
import { getCorridor, type Corridor } from "@/lib/corridors";
import { getJobRole } from "@/lib/job-roles";

export function CorridorPageView({ corridor }: { corridor: Corridor }) {
  const related = [
    ...corridor.relatedRoles
      .map(getJobRole)
      .filter(Boolean)
      .map((r) => ({ href: `/job-roles/${r!.slug}`, label: `${r!.name} CV` })),
    ...corridor.relatedCorridors.flatMap((slug) => {
      const migrated = MIGRATED_CORRIDORS[slug];
      if (migrated) {
        const m = getCountry(migrated);
        return m ? [{ href: `/${m.slug}/international-job-seekers`, label: `Applying to ${m.name}` }] : [];
      }
      const c = getCorridor(slug);
      return c ? [{ href: `/international-job-seekers/${c.slug}`, label: `${c.name} CV` }] : [];
    }),
    { href: "/cv-writing", label: "ATS Friendly CV service" },
  ];

  return (
    <>
      <PageHeader
        eyebrow={`International · ${corridor.region}`}
        title={`Writing a CV for ${corridor.name}`}
        lead={corridor.lead}
        crumbs={[
          { label: "International job seekers", href: "/international-job-seekers" },
          { label: corridor.name },
        ]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/cv-writing", label: "CV writing service" }}
      />
      <AnswerBox answer={corridor.quickAnswer} />

      <Section eyebrow="Overview">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{corridor.overview}</p>
      </Section>

      <Section
        eyebrow="Format"
        title={`How a ${corridor.market} CV is expected to look.`}
        tone="surface"
      >
        <dl className="grid gap-x-10 gap-y-0 border-t border-line sm:grid-cols-2">
          {corridor.cvConventions.map((c) => (
            <div key={c.label} className="border-b border-line py-5">
              <dt className="text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-deep">
                {c.label}
              </dt>
              <dd className="mt-2 text-[14.5px] leading-relaxed text-ink">{c.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        eyebrow="What changes"
        title={`What an overseas applicant has to change for ${corridor.name}.`}
      >
        <BulletCards items={corridor.whatChanges} />
      </Section>

      <Section eyebrow="Demand" title="Sectors hiring international candidates." tone="surface">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {corridor.keySectors.map((s) => (
            <li
              key={s}
              className="rounded-[14px] border border-line bg-paper p-5 text-[14.5px] font-medium text-ink"
            >
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Work authorisation" title="The work-rights reality.">
        <div className="max-w-3xl rounded-[14px] border border-line bg-surface p-6">
          <p className="text-[15.5px] leading-relaxed text-ink-soft">{corridor.visaContext}</p>
        </div>
      </Section>

      <Section eyebrow="Screening" title="How your CV is read there." tone="surface">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">
          {corridor.screeningNote}
        </p>
      </Section>

      <div className="container-page">
        <InlineOfferBanner
          badge={`${corridor.name} Market`}
          title={`Targeting employment in ${corridor.name}?`}
          body={`Have your CV and LinkedIn profile tailored specifically to ${corridor.name} corporate recruitment conventions. Delivery from 24 hours.`}
          ctaText={`Order ${corridor.name} CV`}
          ctaHref={`/order?package=cv-linkedin&country=${corridor.slug}`}
        />
      </div>

      <Section eyebrow="Mistakes" title={`What gets ${corridor.name} applicants filtered.`}>
        <MistakeList items={corridor.commonMistakes} />
      </Section>

      <FaqSection faqs={corridor.faqs} title={`Applying in ${corridor.name}: questions`} tone="surface" />

      <Section eyebrow="Related">
        <LinkChips items={related} />
      </Section>

      <ConversionFooter
        heading={`Have your CV written for ${corridor.name}.`}
        body="Choose your package, your experience level and how fast you need it. The CV is written for the market you are applying into, and the price is shown before you commit."
      />
    </>
  );
}
