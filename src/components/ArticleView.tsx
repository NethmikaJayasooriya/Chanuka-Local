import Link from "next/link";
import { ConversionFooter } from "./ConversionFooter";
import { LinkChips } from "./EntitySections";
import { PageHeader, type Crumb } from "./PageHeader";
import { AnswerBox, Byline, FaqSection, JsonLd, Sources } from "./Seo";
import { articleLd } from "@/lib/seo";

type Section = { heading: string; paragraphs: string[]; bullets?: string[] };

function slugify(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").slice(0, 60);
}

/**
 * Shared long-form article template for global and country articles:
 * answer-first summary, author byline with dates, table of contents,
 * sections, takeaways, FAQs, official sources and Article schema.
 */
export function ArticleView({
  path,
  title,
  description,
  eyebrow,
  crumbs,
  quickAnswer,
  intro,
  sections,
  takeaways,
  faqs,
  sources,
  published,
  updated,
  category,
  relatedLinks = [],
  keepReading = [],
}: {
  path: string;
  title: string;
  description: string;
  eyebrow: string;
  crumbs: Crumb[];
  quickAnswer?: string;
  intro: string;
  sections: Section[];
  takeaways: string[];
  faqs?: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  published?: string;
  updated: string;
  category?: string;
  relatedLinks?: Array<{ href: string; label: string }>;
  keepReading?: Array<{ href: string; label: string }>;
}) {
  return (
    <>
      <JsonLd
        data={articleLd({
          title,
          description,
          path,
          published: published ?? updated,
          updated,
          section: category,
        })}
      />
      <PageHeader eyebrow={eyebrow} title={title} crumbs={crumbs} showProof={false} />
      <AnswerBox answer={quickAnswer} label="The short answer" narrow />

      <article className="py-12 lg:py-16">
        <div className="container-page max-w-3xl">
          <Byline published={published} updated={updated} />

          <p className="mt-8 text-[18px] font-medium leading-relaxed text-ink">{intro}</p>

          {sections.length > 3 && (
            <nav aria-label="Contents" className="mt-10 rounded-[14px] border border-line bg-surface p-6">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">In this article</p>
              <ol className="mt-3 space-y-2">
                {sections.map((s, i) => (
                  <li key={s.heading} className="text-[14.5px]">
                    <a href={`#${slugify(s.heading)}`} className="text-ink-soft hover:text-brand">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <div className="mt-12 space-y-12">
            {sections.map((section) => (
              <section key={section.heading} id={slugify(section.heading)} className="scroll-mt-28">
                <h2 className="display text-[clamp(1.4rem,2.8vw,1.8rem)] text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-[16px] leading-relaxed text-ink-soft">
                      {p}
                    </p>
                  ))}
                </div>
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-5 space-y-2.5 pl-1">
                    {section.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-ink-soft">
                        <span aria-hidden className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          {takeaways.length > 0 && (
            <div className="mt-14 rounded-[16px] border border-line bg-surface p-7">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-deep">The short version</h2>
              <ul className="mt-5 space-y-3">
                {takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink-soft">
                    <svg viewBox="0 0 16 16" aria-hidden className="mt-1 h-4 w-4 shrink-0 text-accent">
                      <path fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" d="M3 8.5l3.2 3.2L13 5" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <Sources items={sources} />

          {relatedLinks.length > 0 && (
            <div className="mt-12">
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Related</p>
              <div className="mt-4">
                <LinkChips items={relatedLinks} />
              </div>
            </div>
          )}
        </div>
      </article>

      <FaqSection faqs={faqs} tone="surface" />

      {keepReading.length > 0 && (
        <section className="py-12">
          <div className="container-page max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Keep reading</p>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              {keepReading.map((r) => (
                <Link key={r.href} href={r.href} className="group rounded-[14px] border border-line bg-surface p-5 transition-colors hover:border-brand">
                  <h3 className="display text-[16px] leading-snug text-ink">{r.label}</h3>
                  <span className="mt-3 inline-block text-[13.5px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">Read →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConversionFooter
        heading="Rather have it written for you?"
        body="Build your package, choose your level and delivery speed, and see the price before you commit."
      />
    </>
  );
}
