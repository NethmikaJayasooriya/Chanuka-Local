import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { ConversionFooter } from "@/components/ConversionFooter";
import { LinkChips } from "@/components/EntitySections";
import { PageHeader } from "@/components/PageHeader";
import { ARTICLE_CATEGORIES, articles, categorySlugFor, getArticle, getArticleCategory } from "@/lib/articles";
import { ArticleView } from "@/components/ArticleView";
import { JsonLd } from "@/components/Seo";
import { articleLd, itemListLd, pageMetadata } from "@/lib/seo";
import { AnswerBox, Byline, FaqSection } from "@/components/Seo";
import { blogCoverUrl, getPublishedPost } from "@/lib/blog";

// Static (hand-authored) articles are pre-rendered. Posts authored in the
// admin panel live in the database and render on demand at the same path.
export function generateStaticParams() {
  return [...ARTICLE_CATEGORIES.map((c) => ({ slug: c.slug })), ...articles.map((a) => ({ slug: a.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cat = getArticleCategory(slug);
  if (cat) {
    return pageMetadata({
      title: `${cat.name} Advice and Guides`,
      description: `${cat.description} Practical guides written by CV writer Chanuka Jeewantha.`,
      path: `/career-advice/${slug}`,
    });
  }
  const article = getArticle(slug);
  if (article) {
    return pageMetadata({
      title: article.metaTitle,
      description: article.metaDescription,
      path: `/career-advice/${article.slug}`,
      type: "article",
      publishedTime: article.published ?? article.updated,
      modifiedTime: article.updated,
    });
  }
  const post = await getPublishedPost(slug);
  if (post) {
    return pageMetadata({
      title: post.meta_title || post.title,
      description: post.meta_description || post.excerpt || post.title,
      path: `/career-advice/${post.slug}`,
      type: "article",
      publishedTime: post.published_at ?? undefined,
      noindex: !!post.noindex,
    });
  }
  return {};
}

const POST_CSS = `
.cj-post{color:var(--color-ink-soft);font-size:16px;line-height:1.7}
.cj-post h2{font-size:clamp(1.35rem,2.6vw,1.75rem);color:var(--color-ink);margin:2rem 0 .75rem;font-weight:700;line-height:1.25}
.cj-post h3{font-size:1.2rem;color:var(--color-ink);margin:1.5rem 0 .5rem;font-weight:700}
.cj-post p{margin:0 0 1rem}
.cj-post a{color:var(--color-brand);text-decoration:underline;text-underline-offset:2px}
.cj-post ul,.cj-post ol{margin:0 0 1rem 1.25rem}
.cj-post li{margin:.35rem 0}
.cj-post img{max-width:100%;height:auto;border-radius:12px;margin:1.25rem 0}
.cj-post blockquote{border-left:3px solid var(--color-accent);padding-left:1rem;margin:1.25rem 0;color:var(--color-muted)}
.cj-post pre{background:#0f172a;color:#e2e8f0;padding:1rem;border-radius:10px;overflow:auto;margin:1.25rem 0}
.cj-post code{font-family:ui-monospace,monospace;font-size:.9em}
`;

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // ---- Category hub ----
  const cat = getArticleCategory(slug);
  if (cat) {
    const list = articles
      .filter((x) => categorySlugFor(x.category) === cat.slug)
      .sort((x, y) => (y.updated ?? "").localeCompare(x.updated ?? ""));
    return (
      <>
        <JsonLd data={itemListLd(`${cat.name} articles`, list.map((x) => ({ name: x.title, path: `/career-advice/${x.slug}` })))} />
        <PageHeader
          eyebrow="Career advice"
          title={cat.name}
          lead={cat.description}
          crumbs={[{ label: "Career advice", href: "/career-advice" }, { label: cat.name }]}
          showProof={false}
        />
        <section className="py-14 lg:py-20">
          <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {list.map((x) => (
              <Link key={x.slug} href={`/career-advice/${x.slug}`} className="group flex h-full flex-col rounded-[14px] border border-line bg-surface p-6 transition-colors hover:border-brand">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-accent-deep">{x.readMinutes} min read</p>
                <h2 className="display mt-3 text-[18px] leading-snug text-ink">{x.title}</h2>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-muted">{x.excerpt}</p>
                <span className="mt-5 text-[13.5px] font-semibold text-brand">Read →</span>
              </Link>
            ))}
            {list.length === 0 && <p className="text-muted">Articles in this topic are on the way.</p>}
          </div>
          <div className="container-page mt-12">
            <LinkChips items={ARTICLE_CATEGORIES.filter((c) => c.slug !== cat.slug).map((c) => ({ href: `/career-advice/${c.slug}`, label: c.name }))} />
          </div>
        </section>
        <ConversionFooter heading="Rather have it written for you?" body="Build your package, choose your level and delivery speed, and see the price before you commit." />
      </>
    );
  }

  // ---- Hand-authored article ----
  const article = getArticle(slug);
  if (article) {
    const catSlug = categorySlugFor(article.category);
    return (
      <ArticleView
        path={`/career-advice/${article.slug}`}
        title={article.title}
        description={article.metaDescription}
        eyebrow={`${article.category} · ${article.readMinutes} min read`}
        crumbs={[
          { label: "Career advice", href: "/career-advice" },
          { label: article.category, href: `/career-advice/${catSlug}` },
          { label: article.title },
        ]}
        quickAnswer={article.quickAnswer}
        intro={article.intro}
        sections={article.sections}
        takeaways={article.takeaways}
        faqs={article.faqs}
        sources={article.sources}
        published={article.published ?? article.updated}
        updated={article.updated}
        category={article.category}
        relatedLinks={article.relatedLinks}
        keepReading={article.relatedArticles
          .map(getArticle)
          .filter(Boolean)
          .map((x) => ({ href: `/career-advice/${x!.slug}`, label: x!.title }))}
      />
    );
  }

  // ---- Admin-authored (database) post ----
  const post = await getPublishedPost(slug);
  if (!post) notFound();

  const rendered = post.body_html && post.body_html.trim()
    ? post.body_html
    : post.body
      ? await marked.parse(post.body)
      : "";
  const cover = blogCoverUrl(post.cover_image_path);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: POST_CSS }} />
      <JsonLd
        data={articleLd({
          title: post.title,
          description: post.meta_description || post.excerpt || post.title,
          path: `/career-advice/${post.slug}`,
          published: post.published_at ?? new Date().toISOString(),
          updated: post.published_at ?? new Date().toISOString(),
          section: post.category ?? undefined,
        })}
      />
      <PageHeader
        eyebrow={[post.category, post.read_minutes ? `${post.read_minutes} min read` : null].filter(Boolean).join(" · ") || "Career advice"}
        title={post.title}
        crumbs={[{ label: "Career advice", href: "/career-advice" }, { label: post.title }]}
      />
      <AnswerBox answer={post.quick_answer ?? undefined} label="The short answer" narrow />
      <article className="py-14 lg:py-20">
        <div className="container-page max-w-3xl">
          {cover && (
            <img src={cover} alt="" className="mb-10 aspect-video w-full rounded-[16px] object-cover" />
          )}
          <div className="mb-8"><Byline published={post.published_at ?? undefined} /></div>
          <div className="cj-post" dangerouslySetInnerHTML={{ __html: rendered }} />
        </div>
      </article>
      <FaqSection faqs={post.faqs ?? undefined} tone="surface" />
      <ConversionFooter heading="Rather have it written for you?" body="Build your package, choose your level and delivery speed, and see the price before you commit." />
    </>
  );
}
