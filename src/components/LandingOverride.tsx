import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { AnswerBox, FaqSection } from "@/components/Seo";
import { landingCoverUrl, sectionMeta, type LandingPage } from "@/lib/landing";

const LANDING_CSS = `
.cj-landing{color:var(--color-ink-soft);font-size:16px;line-height:1.7}
.cj-landing h1{font-size:clamp(1.7rem,3.4vw,2.4rem);color:var(--color-ink);margin:0 0 1rem;font-weight:700;line-height:1.15}
.cj-landing h2{font-size:clamp(1.35rem,2.6vw,1.75rem);color:var(--color-ink);margin:2rem 0 .75rem;font-weight:700;line-height:1.25}
.cj-landing h3{font-size:1.2rem;color:var(--color-ink);margin:1.5rem 0 .5rem;font-weight:700}
.cj-landing p{margin:0 0 1rem}
.cj-landing a{color:var(--color-brand);text-decoration:underline;text-underline-offset:2px}
.cj-landing ul,.cj-landing ol{margin:0 0 1rem 1.25rem}
.cj-landing li{margin:.35rem 0}
.cj-landing img{max-width:100%;height:auto;border-radius:12px;margin:1.25rem 0}
.cj-landing table{display:block;width:100%;overflow-x:auto;border-collapse:collapse;margin:1.25rem 0;-webkit-overflow-scrolling:touch}
.cj-landing th,.cj-landing td{border:1px solid var(--color-line);padding:.6rem .75rem;text-align:left}
.cj-landing iframe,.cj-landing video{max-width:100%}
.cj-landing *{overflow-wrap:anywhere}
.cj-landing blockquote{border-left:3px solid var(--color-accent);padding-left:1rem;margin:1.25rem 0;color:var(--color-muted)}
.cj-landing pre{background:#0f172a;color:#e2e8f0;padding:1rem;border-radius:10px;overflow:auto;margin:1.25rem 0}
`;

/**
 * Renders an admin-authored SEO landing page (designed HTML) inside the
 * standard site chrome, so any uploaded page reads consistently.
 */
export function LandingOverride({ page }: { page: LandingPage }) {
  const meta = sectionMeta(page.section);
  const cover = landingCoverUrl(page.cover_image_path);
  const crumbs = meta
    ? [{ label: meta.crumbLabel, href: meta.crumbHref }, { label: page.title }]
    : [{ label: page.title }];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LANDING_CSS }} />
      <PageHeader eyebrow={meta?.crumbLabel ?? "Guide"} title={page.title} crumbs={crumbs} />
      <AnswerBox answer={page.quick_answer ?? undefined} />
      <article className="py-14 lg:py-20">
        <div className="container-page max-w-3xl">
          {cover && <img src={cover} alt="" className="mb-10 aspect-video w-full rounded-[16px] object-cover" />}
          <div className="cj-landing" dangerouslySetInnerHTML={{ __html: page.body_html ?? "" }} />
        </div>
      </article>
      <FaqSection faqs={page.faqs ?? undefined} tone="surface" />
      <ConversionFooter
        heading="Rather have it written for you?"
        body="Build your package, choose your level and delivery speed, and see the price before you commit."
      />
    </>
  );
}
