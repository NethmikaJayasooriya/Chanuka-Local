import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/ArticleView";
import { COUNTRY_BUNDLES, getBundle, getCountryArticle } from "@/lib/country-content";
import { pageMetadata } from "@/lib/seo";
import { LandingOverride } from "@/components/LandingOverride";
import { getPublishedLanding } from "@/lib/landing";

type Params = { country: string; slug: string };

// Static articles are pre-rendered; admin-authored ones render on demand.
export const dynamicParams = true;

export function generateStaticParams(): Params[] {
  return COUNTRY_BUNDLES.flatMap((b) => b.articles.map((a) => ({ country: b.country, slug: a.slug })));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { country, slug } = await params;
  const a = getCountryArticle(country, slug);
  if (!a) {
    const ov = getBundle(country) ? await getPublishedLanding(`${country}-advice`, slug) : null;
    if (!ov) return {};
    return pageMetadata({
      title: ov.meta_title || ov.title,
      description: ov.meta_description || ov.title,
      path: `/${country}/career-advice/${slug}`,
      type: "article",
      noindex: !!ov.noindex,
    });
  }
  return pageMetadata({
    title: a.metaTitle,
    description: a.metaDescription,
    path: `/${country}/career-advice/${slug}`,
    type: "article",
    publishedTime: a.published,
    modifiedTime: a.updated,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { country, slug } = await params;
  const b = getBundle(country);
  const a = getCountryArticle(country, slug);
  if (!b) notFound();
  if (!a) {
    const ov = await getPublishedLanding(`${country}-advice`, slug);
    if (!ov) notFound();
    return <LandingOverride page={ov} />;
  }
  const m = b.market;
  return (
    <ArticleView
      path={`/${country}/career-advice/${slug}`}
      title={a.title}
      description={a.metaDescription}
      eyebrow={`${m.name} · ${a.category} · ${a.readMinutes} min read`}
      crumbs={[
        { label: m.name, href: `/${country}` },
        { label: "Career advice", href: `/${country}/career-advice` },
        { label: a.title },
      ]}
      quickAnswer={a.quickAnswer}
      intro={a.intro}
      sections={a.sections}
      takeaways={a.takeaways}
      faqs={a.faqs}
      sources={a.sources}
      published={a.published}
      updated={a.updated}
      category={a.category}
      relatedLinks={a.relatedLinks}
      keepReading={b.articles
        .filter((x) => x.slug !== slug)
        .map((x) => ({ href: `/${country}/career-advice/${x.slug}`, label: x.title }))}
    />
  );
}
