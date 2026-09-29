import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { ARTICLE_CATEGORIES, articles } from "@/lib/articles";
import { LinkChips } from "@/components/EntitySections";
import { pageMetadata } from "@/lib/seo";
import { getPublishedPosts } from "@/lib/blog";

export const metadata: Metadata = pageMetadata({
  title: "Career Advice: CV, LinkedIn, Cover Letter and Job Search Guides",
  description:
    "Practical guides on CVs, ATS, LinkedIn, cover letters, interviews and applying abroad, written by CV writer Chanuka Jeewantha. No filler, no templates.",
  path: "/career-advice",
});

type Item = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readMinutes: number;
  date: string;
};

export default async function CareerAdviceHub() {
  const staticItems: Item[] = articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    category: a.category,
    readMinutes: a.readMinutes,
    date: a.updated,
  }));

  const dbItems: Item[] = (await getPublishedPosts()).map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt ?? "",
    category: p.category ?? "Career advice",
    readMinutes: p.read_minutes ?? 5,
    date: p.published_at ?? "",
  }));

  // Database posts win on slug collisions; newest first.
  const bySlug = new Map<string, Item>();
  for (const it of staticItems) bySlug.set(it.slug, it);
  for (const it of dbItems) bySlug.set(it.slug, it);
  const sorted = [...bySlug.values()].sort((a, b) => b.date.localeCompare(a.date));

  const [featured, ...rest] = sorted;
  if (!featured) {
    return (
      <>
        <PageHeader eyebrow="Career advice" title="Guidance you can act on, not filler." crumbs={[{ label: "Career advice" }]} />
        <section className="py-14 lg:py-20"><div className="container-page"><p className="text-muted">Articles are on the way.</p></div></section>
        <ConversionFooter heading="Rather have it done properly?" body="Build your package and see the price before you commit." />
      </>
    );
  }

  return (
    <>
      <PageHeader
        eyebrow="Career advice"
        title="Guidance you can act on, not filler."
        lead="Short, practical pieces on the things that actually decide applications: how an ATS reads your CV, turning responsibilities into achievements, how long a CV should be, and what changes when you apply abroad."
        crumbs={[{ label: "Career advice" }]}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <nav aria-label="Topics" className="mb-10">
            <p className="mb-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">Browse by topic</p>
            <LinkChips items={ARTICLE_CATEGORIES.map((c) => ({ href: `/career-advice/${c.slug}`, label: c.name }))} />
          </nav>
          <Link
            href={`/career-advice/${featured.slug}`}
            className="group block rounded-[16px] border border-line bg-surface p-8 transition-colors hover:border-brand lg:p-10"
          >
            <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-accent-deep">
              <span>{featured.category}</span>
              <span className="text-line-strong">·</span>
              <span className="text-muted">{featured.readMinutes} min read</span>
            </div>
            <h2 className="display mt-4 max-w-3xl text-[clamp(1.5rem,3vw,2.1rem)] leading-tight text-ink">{featured.title}</h2>
            <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-muted">{featured.excerpt}</p>
            <span className="mt-6 inline-block text-[14px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">Read the article →</span>
          </Link>

          {rest.length > 0 && (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((a) => (
                <Link
                  key={a.slug}
                  href={`/career-advice/${a.slug}`}
                  className="group flex h-full flex-col rounded-[14px] border border-line bg-surface p-6 transition-colors hover:border-brand"
                >
                  <div className="flex flex-wrap items-center gap-2 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-accent-deep">
                    <span>{a.category}</span>
                    <span className="text-line-strong">·</span>
                    <span className="text-muted">{a.readMinutes} min</span>
                  </div>
                  <h3 className="display mt-3 text-[18px] leading-snug text-ink">{a.title}</h3>
                  <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted">{a.excerpt}</p>
                  <span className="mt-5 text-[13.5px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">Read →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <ConversionFooter
        heading="Rather have it done properly?"
        body="The guidance here is free. If you would rather have the CV, cover letter or LinkedIn profile written for you, build your package and see the price before you commit."
        related={[
          { href: "/cv-writing", label: "CV writing" },
          { href: "/linkedin-optimisation", label: "LinkedIn optimisation" },
          { href: "/international-job-seekers", label: "Applying abroad" },
          { href: "/job-roles", label: "Guidance by role" },
        ]}
      />
    </>
  );
}
