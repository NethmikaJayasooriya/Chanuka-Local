import { AnswerBox, FaqSection, JsonLd } from "@/components/Seo";
import { serviceLd } from "@/lib/seo";
import { ConversionFooter } from "./ConversionFooter";
import {
  BulletCards,
  Chips,
  InlineOfferBanner,
  LinkChips,
  MistakeList,
  Section,
} from "./EntitySections";
import { PageHeader } from "./PageHeader";
import { getIndustry } from "@/lib/industries";
import { getJobRole, type JobRole } from "@/lib/job-roles";

export function JobRolePageView({ role }: { role: JobRole }) {
  const related = [
    ...role.relatedRoles
      .map(getJobRole)
      .filter(Boolean)
      .map((r) => ({ href: `/job-roles/${r!.slug}`, label: `${r!.name} CV` })),
    ...role.relatedIndustries
      .map(getIndustry)
      .filter(Boolean)
      .map((i) => ({ href: `/industries/${i!.slug}`, label: i!.name })),
    { href: "/cv-writing", label: "ATS Friendly CV service" },
  ];

  return (
    <>
      <PageHeader
        eyebrow={`Job role · ${role.category}`}
        title={`${role.name} CV writing`}
        lead={role.lead}
        crumbs={[{ label: "Job roles", href: "/job-roles" }, { label: role.name }]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/cv-writing", label: "CV writing service" }}
      />
      <AnswerBox answer={role.quickAnswer} />
      <JsonLd data={serviceLd({ name: `${role.name} CV writing`, description: role.metaDescription, path: `/job-roles/${role.slug}`, serviceType: "CV writing" })} />

      <Section eyebrow="Overview">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{role.overview}</p>
      </Section>

      <Section
        eyebrow="What employers screen for"
        title={`What a ${role.name} CV has to prove.`}
        tone="surface"
      >
        <BulletCards items={role.employersLookFor} />
      </Section>

      <Section eyebrow="Positioning" title="How to position the CV.">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{role.positioning}</p>

        <div className="mt-10">
          <h3 className="text-[15px] font-semibold text-ink">Skills worth naming</h3>
          <div className="mt-4">
            <Chips items={role.keySkills} />
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-[15px] font-semibold text-ink">Keywords an ATS looks for</h3>
          <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-muted">
            Use these where they are true. Keywords carry weight when the experience
            behind them is visible, and none at all when they are stacked in a list.
          </p>
          <div className="mt-4">
            <Chips items={role.atsKeywords} />
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Achievement examples"
        title="What a strong bullet looks like."
        lead={`These are written in the shape a ${role.name} bullet should take: the situation, the decision, and what moved. Use them as a pattern, never as text to copy.`}
        tone="surface"
      >
        <ol className="space-y-4">
          {role.achievementExamples.map((ex, i) => (
            <li
              key={ex}
              className="flex gap-4 rounded-[14px] border border-line bg-paper p-5 sm:p-6"
            >
              <span className="num-badge h-6 px-2.5 rounded-md bg-accent-soft border border-accent/25 text-[11px] text-accent-deep shrink-0 mt-0.5">
                0{i + 1}
              </span>
              <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-ink-soft">{ex}</p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="container-page">
        <InlineOfferBanner
          badge={`${role.name} Positioning`}
          title={`Need your ${role.name} CV rewritten for international roles?`}
          body="Chanuka personally structures your stack, achievements, and leadership metrics to pass enterprise ATS filters and impress hiring managers."
          ctaText={`Order ${role.name} CV`}
          ctaHref={`/order?package=cv-linkedin&role=${role.slug}`}
        />
      </div>

      <Section eyebrow="Seniority" title="What changes as you move up.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {role.seniority.map((s) => (
            <article key={s.level} className="rounded-[14px] border border-line bg-surface p-5 sm:p-6">
              <h3 className="display text-[17px] text-ink">{s.level}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-muted">{s.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Mistakes"
        title={`What costs ${role.name} candidates interviews.`}
        tone="surface"
      >
        <MistakeList items={role.commonMistakes} />
      </Section>

      <FaqSection faqs={role.faqs} title={`${role.name} CV questions`} tone="surface" />

      <Section eyebrow="Related">
        <LinkChips items={related} />
      </Section>

      <ConversionFooter
        heading={`Have your ${role.name} CV written.`}
        body="Choose your package, your experience level and how fast you need it. The price is shown before you commit."
      />
    </>
  );
}
