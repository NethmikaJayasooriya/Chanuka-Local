import { AnswerBox, FaqSection, JsonLd } from "@/components/Seo";
import { serviceLd } from "@/lib/seo";
import { ConversionFooter } from "./ConversionFooter";
import { BulletCards, LinkChips, MistakeList, Section } from "./EntitySections";
import { PageHeader } from "./PageHeader";
import { careerLevels, type CareerLevel } from "@/lib/career-stages";

export function CareerLevelPageView({ level }: { level: CareerLevel }) {
  const related = [
    ...careerLevels
      .filter((l) => l.slug !== level.slug)
      .map((l) => ({ href: `/career-levels/${l.slug}`, label: `${l.name} CV` })),
    { href: "/cv-writing", label: "ATS Friendly CV service" },
  ];

  return (
    <>
      <PageHeader
        eyebrow={`Career level · ${level.years}`}
        title={`${level.name} CV writing`}
        lead={level.lead}
        crumbs={[{ label: "Career levels", href: "/career-levels" }, { label: level.name }]}
        primary={{ href: "/#build", label: "Build your package" }}
        secondary={{ href: "/cv-writing", label: "CV writing service" }}
      />
      <AnswerBox answer={level.quickAnswer} />
      <JsonLd data={serviceLd({ name: `${level.name} CV writing`, description: level.metaDescription, path: `/career-levels/${level.slug}`, serviceType: "CV writing" })} />

      <Section eyebrow="Overview">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{level.overview}</p>
      </Section>

      <Section eyebrow="Focus" title={`What a ${level.name.toLowerCase()} CV has to prove.`} tone="surface">
        <BulletCards items={level.cvFocus} />
      </Section>

      <Section eyebrow="What changes" title="Compared with the level below.">
        <p className="max-w-3xl text-[16px] leading-relaxed text-muted">{level.whatChanges}</p>
      </Section>

      <Section eyebrow="Mistakes" title="What costs candidates at this level." tone="surface">
        <MistakeList items={level.commonMistakes} />
      </Section>

      <FaqSection faqs={level.faqs} title={`${level.name} CV questions`} tone="surface" />

      <Section eyebrow="Related">
        <LinkChips items={related} />
      </Section>

      <ConversionFooter heading="Have your CV written for this level." />
    </>
  );
}
