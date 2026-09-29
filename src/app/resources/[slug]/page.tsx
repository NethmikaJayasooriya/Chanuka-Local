import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConversionFooter } from "@/components/ConversionFooter";
import { LinkChips } from "@/components/EntitySections";
import { PageHeader } from "@/components/PageHeader";
import { AnswerBox, Byline, FaqSection, JsonLd } from "@/components/Seo";
import { getResource, resources } from "@/lib/content/resources";
import { articleLd, pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return resources.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) return {};
  return pageMetadata({ title: r.metaTitle, description: r.metaDescription, path: `/resources/${slug}` });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = getResource(slug);
  if (!r) notFound();
  const others = resources.filter((x) => x.slug !== slug);
  return (
    <>
      <JsonLd
        data={articleLd({
          title: r.title,
          description: r.metaDescription,
          path: `/resources/${slug}`,
          published: r.updated,
          updated: r.updated,
          section: "Resources",
        })}
      />
      <PageHeader
        eyebrow="Free resource"
        title={r.title}
        lead={r.lead}
        crumbs={[{ label: "Resources", href: "/resources" }, { label: r.title }]}
        showProof={false}
      />
      <AnswerBox answer={r.quickAnswer} label="In short" />
      <section className="py-12 lg:py-16">
        <div className="container-page max-w-4xl">
          <Byline updated={r.updated} />
          <p className="mt-6 text-[17px] leading-relaxed text-ink">{r.intro}</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {r.groups.map((g) => (
              <div key={g.heading} className="rounded-[16px] border border-line bg-surface p-6 sm:p-7">
                <h2 className="display text-[19px] text-ink">{g.heading}</h2>
                <ul className="mt-4 space-y-3">
                  {g.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-ink-soft">
                      <span aria-hidden className="mt-1 h-4 w-4 shrink-0 rounded-[5px] border border-line-strong bg-paper" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {r.tips.length > 0 && (
            <div className="mt-10 rounded-[16px] border border-line bg-sand/40 p-7">
              <h2 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-deep">Tips</h2>
              <ul className="mt-4 space-y-3">
                {r.tips.map((t) => (
                  <li key={t} className="text-[15px] leading-relaxed text-ink-soft">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="mt-10">
            <LinkChips items={[...r.relatedLinks, ...others.slice(0, 3).map((o) => ({ href: `/resources/${o.slug}`, label: o.title }))]} />
          </div>
        </div>
      </section>
      <FaqSection faqs={r.faqs} tone="surface" />
      <ConversionFooter heading="Rather have it done for you?" body="Build your package, choose your level and delivery speed, and see the price before you commit." />
    </>
  );
}
