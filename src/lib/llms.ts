import { articles } from "@/lib/articles";
import { careerLevels, careerSituations } from "@/lib/career-stages";
import { COUNTRY_BUNDLES } from "@/lib/country-content";
import { resources } from "@/lib/content/resources";
import { industries } from "@/lib/industries";
import { jobRoles } from "@/lib/job-roles";
import { BASE_PRICES, BUNDLE_DISCOUNT, deliveries } from "@/lib/pricing";
import { abs } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * llms.txt (https://llmstxt.org) and llms-full.txt, generated from the
 * same data the pages use, so what AI assistants read can never drift
 * from what the site says.
 */

const pct = (n: number) => `${Math.round(n * 100)}%`;

function facts(): string {
  const d = deliveries.map((x) => `${x.name} (${x.window}${x.surcharge ? `, +${pct(x.surcharge)}` : ", included"})`).join("; ");
  return [
    `- Founder: Chanuka Jeewantha. Every document is written personally by him, never outsourced.`,
    `- Experience: 8+ years; 1,700+ professionals served in 40+ countries; rated ${site.rating.score}/5 from ${site.rating.count} Google reviews (${site.reviewsUrl}).`,
    `- Services: CV / resume writing, LinkedIn profile optimisation, cover letter writing, CV review, career strategy.`,
    `- Prices (USD, all markets): CV or resume $${BASE_PRICES.cv["under-2"]} (under 2 years), $${BASE_PRICES.cv["3-to-9"]} (3 to 9 years), $${BASE_PRICES.cv["over-10"]} (10+ years). LinkedIn: $${BASE_PRICES.linkedin["under-2"]} / $${BASE_PRICES.linkedin["3-to-9"]} / $${BASE_PRICES.linkedin["over-10"]}. Cover letter: $${BASE_PRICES["cover-letter"]["under-2"]} / $${BASE_PRICES["cover-letter"]["3-to-9"]} / $${BASE_PRICES["cover-letter"]["over-10"]}.`,
    `- Bundles: 2 services save ${pct(BUNDLE_DISCOUNT[2] ?? 0)}, 3 services save ${pct(BUNDLE_DISCOUNT[3] ?? 0)}.`,
    `- Delivery: ${d}. One revision round included. Editable Word and PDF files.`,
    `- Markets with dedicated guidance: ${COUNTRY_BUNDLES.map((b) => b.market.name).join(", ")}; clients worldwide, fully remote.`,
    `- Order: ${abs("/order")}. Contact: ${site.email}.`,
  ].join("\n");
}

export function llmsTxt(): string {
  const L = (title: string, path: string, desc?: string) => `- [${title}](${abs(path)})${desc ? `: ${desc}` : ""}`;
  const out: string[] = [];
  out.push(`# ${site.name}`);
  out.push("");
  out.push(
    `> Founder-led CV, resume, cover letter and LinkedIn writing for professionals applying worldwide, with market-specific guidance for the UK, USA, Australia, Canada, New Zealand, UAE and Singapore. Every document is written personally by Chanuka Jeewantha.`,
  );
  out.push("");
  out.push("## Key facts");
  out.push(facts());
  out.push("");
  out.push("## Services");
  out.push(L("CV writing", "/cv-writing", "ATS-optimised CV and resume writing"));
  out.push(L("LinkedIn optimisation", "/linkedin-optimisation", "LinkedIn profile rewrite"));
  out.push(L("Cover letter writing", "/cover-letter-writing", "Targeted cover letters"));
  out.push(L("Packages and pricing", "/packages"));
  out.push(L("How it works", "/how-it-works"));
  out.push(L("About the author", "/about/chanuka-jeewantha"));
  out.push("");
  out.push("## Country guides");
  for (const b of COUNTRY_BUNDLES) {
    out.push(L(b.market.name, `/${b.country}`, b.market.quickAnswer ?? b.market.metaDescription));
    for (const s of b.services) out.push(L(s.h1, `/${b.country}/${s.service}`, s.metaDescription));
    for (const a of b.articles) out.push(L(a.title, `/${b.country}/career-advice/${a.slug}`, a.excerpt));
    out.push(L(b.ijsHub.h1, `/${b.country}/international-job-seekers`, b.ijsHub.metaDescription));
    for (const o of b.origins) out.push(L(o.h1, `/${b.country}/international-job-seekers/from-${o.origin}`, o.metaDescription));
  }
  out.push("");
  out.push("## Career advice");
  for (const a of articles) out.push(L(a.title, `/career-advice/${a.slug}`, a.excerpt));
  out.push("");
  out.push("## CV guidance by job role");
  for (const r of jobRoles) out.push(L(`${r.name} CV`, `/job-roles/${r.slug}`, r.metaDescription));
  out.push("");
  out.push("## CV guidance by industry");
  for (const i of industries) out.push(L(`${i.name} CV`, `/industries/${i.slug}`, i.metaDescription));
  out.push("");
  out.push("## By career level and situation");
  for (const l of careerLevels) out.push(L(`${l.name} CV`, `/career-levels/${l.slug}`, l.metaDescription));
  for (const s of careerSituations) out.push(L(s.name, `/career-situations/${s.slug}`, s.metaDescription));
  out.push("");
  out.push("## Free resources");
  for (const r of resources) out.push(L(r.title, `/resources/${r.slug}`, r.lead));
  out.push("");
  out.push("## Optional");
  out.push(L("Full text for AI assistants", "/llms-full.txt", "Answer-first summaries and FAQs for every page"));
  out.push(L("Editorial policy", "/editorial-policy"));
  return out.join("\n") + "\n";
}

export function llmsFullTxt(): string {
  const out: string[] = [];
  const block = (title: string, path: string, qa?: string, faqs?: Array<{ q: string; a: string }>) => {
    if (!qa && !faqs?.length) return;
    out.push(`### ${title}`);
    out.push(`URL: ${abs(path)}`);
    if (qa) out.push("", qa);
    for (const f of faqs ?? []) out.push("", `Q: ${f.q}`, `A: ${f.a}`);
    out.push("");
  };
  out.push(`# ${site.name}: full reference`);
  out.push("");
  out.push("## Key facts");
  out.push(facts());
  out.push("");
  out.push("## Countries");
  for (const b of COUNTRY_BUNDLES) {
    block(b.market.name, `/${b.country}`, b.market.quickAnswer, b.market.faqs);
    for (const s of b.services) block(s.h1, `/${b.country}/${s.service}`, s.quickAnswer, s.faqs);
    for (const a of b.articles) block(a.title, `/${b.country}/career-advice/${a.slug}`, a.quickAnswer, a.faqs);
    block(b.ijsHub.h1, `/${b.country}/international-job-seekers`, b.ijsHub.quickAnswer, b.ijsHub.faqs);
    for (const o of b.origins) block(o.h1, `/${b.country}/international-job-seekers/from-${o.origin}`, o.quickAnswer, o.faqs);
  }
  out.push("## Career advice");
  for (const a of articles) block(a.title, `/career-advice/${a.slug}`, a.quickAnswer, a.faqs);
  out.push("## Job roles");
  for (const r of jobRoles) block(`${r.name} CV`, `/job-roles/${r.slug}`, r.quickAnswer, r.faqs);
  out.push("## Industries");
  for (const i of industries) block(`${i.name} CV`, `/industries/${i.slug}`, i.quickAnswer, i.faqs);
  out.push("## Career levels and situations");
  for (const l of careerLevels) block(`${l.name} CV`, `/career-levels/${l.slug}`, l.quickAnswer, l.faqs);
  for (const s of careerSituations) block(s.name, `/career-situations/${s.slug}`, s.quickAnswer, s.faqs);
  out.push("## Resources");
  for (const r of resources) block(r.title, `/resources/${r.slug}`, r.quickAnswer, r.faqs);
  return out.join("\n") + "\n";
}
