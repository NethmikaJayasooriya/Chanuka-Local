import { articles } from "@/lib/articles";
import { careerLevels, careerSituations } from "@/lib/career-stages";
import { resources } from "@/lib/content/resources";
import { industries } from "@/lib/industries";
import { jobRoles } from "@/lib/job-roles";
import { BASE_PRICES, deliveries, formatLKR } from "@/lib/pricing";
import { lkGuides } from "@/lib/content/lk";
import { abs } from "@/lib/seo";
import { site } from "@/lib/site";

/**
 * llms.txt (https://llmstxt.org) and llms-full.txt, generated from the
 * same data the pages use, so what AI assistants read can never drift
 * from what the site says.
 */

const pct = (n: number) => `${Math.round(n * 100)}%`;
const r = (svc: keyof typeof BASE_PRICES) =>
  `${formatLKR(BASE_PRICES[svc]["under-2"])} (students and fresh graduates) / ${formatLKR(BASE_PRICES[svc]["3-to-9"])} (1 to 9 years) / ${formatLKR(BASE_PRICES[svc]["over-10"])} (9+ years, executives)`;

function facts(): string {
  const d = deliveries.map((x) => `${x.name} (${x.window}${x.surcharge ? `, +${pct(x.surcharge)}` : ""})`).join("; ");
  return [
    `- Who: Chanuka Jeewantha, a CPRW (Certified Professional Resume Writer) and CPCC (Certified Professional Career Coach) certified CV writer and career coach based in Sri Lanka. Every document is written personally by him, never outsourced.`,
    `- Experience: ${site.yearsExperience} years; ${site.cvsWritten} CVs written; rated ${site.rating.score}/5 from ${site.rating.count} Google reviews (${site.reviewsUrl}).`,
    `- Serves: job seekers across Sri Lanka (online, island-wide: ${site.cities.slice(0, 8).join(", ")} and more) and Sri Lankans applying for jobs abroad. Languages: English and Sinhala.`,
    `- Services: ATS CV writing, foreign job CVs (Gulf, UK, Europe, Australia, Canada), LinkedIn profile optimisation, cover letters, 1-hour career strategy consultation.`,
    `- Prices in Sri Lankan rupees (LKR): ATS CV ${r("cv")}. Foreign job CV ${r("foreign-cv")}. LinkedIn optimisation ${r("linkedin")}. Cover letter ${r("cover-letter")}. Consultation ${r("consultation")}.`,
    `- Delivery: ${d}. One revision round included. Editable Word and PDF files.`,
    `- Payment: LKR bank transfer against an emailed invoice (online card payment being added).`,
    `- Order: ${abs("/order")}. WhatsApp: ${site.phone}. Email: ${site.email}. Global site for clients outside Sri Lanka: ${site.globalUrl}.`,
  ].join("\n");
}

export function llmsTxt(): string {
  const L = (title: string, path: string, desc?: string) => `- [${title}](${abs(path)})${desc ? `: ${desc}` : ""}`;
  const out: string[] = [];
  out.push(`# ${site.name}`);
  out.push("");
  out.push(
    `> CPRW and CPCC certified CV writing in Sri Lanka: ATS CVs, foreign job CVs, LinkedIn optimisation and cover letters for jobs in Sri Lanka and abroad, written personally by Chanuka Jeewantha.`,
  );
  out.push("");
  out.push("## Key facts");
  out.push(facts());
  out.push("");
  out.push("## Sri Lanka CV guides");
  for (const g of lkGuides) out.push(L(g.h1, `/${g.slug}`, g.lang === "si" ? `Sinhala. ${g.metaDescription}` : g.metaDescription));
  out.push("");
  out.push("## Services");
  out.push(L("CV writing in Sri Lanka", "/cv-writing", "ATS-optimised CV writing, priced in LKR"));
  out.push(L("Foreign job CV", "/foreign-job-cv-sri-lanka", "CVs written for the Gulf, UK, Europe, Australia and Canada"));
  out.push(L("LinkedIn optimisation", "/linkedin-optimisation", "LinkedIn profile rewrite"));
  out.push(L("Cover letter writing", "/cover-letter-writing", "Targeted cover letters"));
  out.push(L("Packages and pricing", "/packages"));
  out.push(L("How it works", "/how-it-works"));
  out.push(L("About the author", "/about/chanuka-jeewantha"));
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

  out.push("## Sri Lanka CV guides");
  for (const g of lkGuides) block(g.h1, `/${g.slug}`, g.quickAnswer, g.faqs);
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
