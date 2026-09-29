import { AnswerBox, FaqSection, JsonLd } from "@/components/Seo";
import { serviceLd } from "@/lib/seo";
import { ConversionFooter } from "./ConversionFooter";
import { LinkChips, MistakeList, Section } from "./EntitySections";
import { PageHeader } from "./PageHeader";
import { careerSituations, type CareerSituation } from "@/lib/career-stages";

export function CareerSituationPageView({ situation }: { situation: CareerSituation }) {
  const related = [
    ...careerSituations
      .filter((s) => s.slug !== situation.slug)
      .map((s) => ({ href: `/career-situations/${s.slug}`, label: s.name })),
    { href: "/cv-writing", label: "ATS Friendly CV service" },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Career situation"
        title={situation.name}
        lead={situation.lead}
        crumbs={[
          { label: "Career situations", href: "/career-situations" },
          { label: situation.name },
        ]}
        primary={{ href: "/#build", label: "Build your package" }}
      />
      <AnswerBox answer={situation.quickAnswer} />
      <JsonLd data={serviceLd({ name: situation.metaTitle, description: situation.metaDescription, path: `/career-situations/${situation.slug}`, serviceType: "CV writing" })} />

      <Section eyebrow="The real problem" title="What the reader is actually thinking." tone="surface">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{situation.problem}</p>
      </Section>

      <Section eyebrow="Approach" title="How to handle it on the CV.">
        <div className="grid gap-5 sm:grid-cols-2">
          {situation.approach.map((step, i) => (
            <article key={step.heading} className="rounded-[14px] border border-line bg-surface p-6">
              <span className="num-badge h-6 px-2.5 rounded-md bg-accent-soft border border-accent/25 text-[11px] text-accent-deep">
                0{i + 1}
              </span>
              <h3 className="display mt-3 text-[18px] leading-snug text-ink">{step.heading}</h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Mistakes" title="What makes it worse." tone="surface">
        <MistakeList items={situation.commonMistakes} />
      </Section>

      <FaqSection faqs={situation.faqs} title={"Questions people ask"} tone="surface" />

      <Section eyebrow="Related">
        <LinkChips items={related} />
      </Section>

      <ConversionFooter heading="Get this handled properly." />
    </>
  );
}
