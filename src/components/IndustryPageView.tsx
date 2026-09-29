import { AnswerBox, FaqSection, JsonLd } from "@/components/Seo";
import { serviceLd } from "@/lib/seo";
import { ConversionFooter } from "./ConversionFooter";
import { BulletCards, Chips, LinkChips, MistakeList, Section } from "./EntitySections";
import { PageHeader } from "./PageHeader";
import type { Industry } from "@/lib/industries";
import { getJobRole } from "@/lib/job-roles";

export function IndustryPageView({ industry }: { industry: Industry }) {
  const related = [
    ...industry.relatedRoles
      .map(getJobRole)
      .filter(Boolean)
      .map((r) => ({ href: `/job-roles/${r!.slug}`, label: `${r!.name} CV` })),
    { href: "/industries", label: "All industries" },
    { href: "/cv-writing", label: "ATS Friendly CV service" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Industry"
        title={`${industry.name} CV writing`}
        lead={industry.lead}
        crumbs={[{ label: "Industries", href: "/industries" }, { label: industry.name }]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/cv-writing", label: "CV writing service" }}
      />
      <AnswerBox answer={industry.quickAnswer} />
      <JsonLd data={serviceLd({ name: `${industry.name} CV writing`, description: industry.metaDescription, path: `/industries/${industry.slug}`, serviceType: "CV writing" })} />

      <Section eyebrow="Overview">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{industry.overview}</p>
      </Section>

      <Section eyebrow="What employers screen for" title={`What a ${industry.name} CV has to show.`} tone="surface">
        <BulletCards items={industry.employersLookFor} />
      </Section>

      <Section eyebrow="Positioning" title="How to position the CV.">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{industry.positioning}</p>
        <div className="mt-10">
          <h3 className="text-[15px] font-semibold text-ink">Competencies worth evidencing</h3>
          <div className="mt-4">
            <Chips items={industry.competencies} />
          </div>
        </div>
      </Section>

      <Section eyebrow="Career paths" title="Where the roles lead." tone="surface">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industry.careerPaths.map((path, i) => (
            <li key={path} className="rounded-[14px] border border-line bg-paper p-6">
              <span className="num-badge h-6 px-2.5 rounded-md bg-accent-soft border border-accent/25 text-[11px] text-accent-deep">
                0{i + 1}
              </span>
              <p className="mt-2.5 text-[14px] leading-relaxed text-ink-soft">{path}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section eyebrow="Mistakes" title={`What weakens a ${industry.name} CV.`}>
        <MistakeList items={industry.commonMistakes} />
      </Section>

      <FaqSection faqs={industry.faqs} title={`${industry.name} CV questions`} tone="surface" />

      <Section eyebrow="Related" tone="surface">
        <LinkChips items={related} />
      </Section>

      <ConversionFooter heading={`Have your ${industry.name} CV written.`} />
    </>
  );
}
