import { articles, ARTICLE_CATEGORIES } from "@/lib/articles";
import { careerLevels, careerSituations } from "@/lib/career-stages";
import { resources } from "@/lib/content/resources";
import { cvSamples } from "@/lib/cv-samples";
import { industries } from "@/lib/industries";
import { jobRoles } from "@/lib/job-roles";
import { lkGuides } from "@/lib/content/lk";

/**
 * SITE INDEX
 * ------------------------------------------------------------------
 * The single list of every indexable, code-built URL, grouped the way
 * the architecture asks for sitemaps (one group per silo / country),
 * so Search Console can be monitored by directory. Database pages
 * (blog posts, SEO landing pages) are appended at request time.
 */

export const SITE_UPDATED = "2026-10-04";

export type IndexEntry = { path: string; lastmod: string; priority: number };

const e = (path: string, lastmod = SITE_UPDATED, priority = 0.6): IndexEntry => ({ path, lastmod, priority });

export function sitemapGroups(): Record<string, IndexEntry[]> {
  const groups: Record<string, IndexEntry[]> = {
    "sri-lanka-guides": lkGuides.map((g) => e(`/${g.slug}`, g.updated, 0.9)),
    "global-pages": [
      e("/", SITE_UPDATED, 1),
      ...["/cv-writing", "/linkedin-optimisation", "/cover-letter-writing", "/packages", "/services", "/cv-review", "/career-strategy"].map((p) => e(p, SITE_UPDATED, 0.9)),
      ...[
        "/how-it-works",
        "/reviews",
        "/about",
        "/about/chanuka-jeewantha",
        "/faq",
        "/contact",
        "/job-roles",
        "/industries",
        "/career-levels",
        "/career-situations",
        "/cv-samples",
        "/career-advice",
        "/resources",
        "/research",
        "/editorial-policy",
        "/privacy-policy",
        "/terms-and-conditions",
        "/refund-policy",
        "/cookie-policy",
      ].map((p) => e(p, SITE_UPDATED, 0.7)),
    ],
    "job-roles": jobRoles.map((r) => e(`/job-roles/${r.slug}`, r.updated ?? SITE_UPDATED, 0.7)),
    industries: industries.map((i) => e(`/industries/${i.slug}`, i.updated ?? SITE_UPDATED, 0.7)),
    "career-stages": [
      ...careerLevels.map((l) => e(`/career-levels/${l.slug}`, l.updated ?? SITE_UPDATED, 0.7)),
      ...careerSituations.map((s) => e(`/career-situations/${s.slug}`, s.updated ?? SITE_UPDATED, 0.7)),
      ...cvSamples.map((s) => e(`/cv-samples/${s.slug}`, SITE_UPDATED, 0.6)),
    ],
    articles: [
      ...ARTICLE_CATEGORIES.map((c) => e(`/career-advice/${c.slug}`, SITE_UPDATED, 0.5)),
      ...articles.map((a) => e(`/career-advice/${a.slug}`, a.updated, 0.6)),
    ],
    resources: resources.map((r) => e(`/resources/${r.slug}`, r.updated, 0.6)),
  };
  return groups;
}

/** Flat list of every code-built indexable path. */
export function allIndexedPaths(): string[] {
  return Object.values(sitemapGroups()).flat().map((x) => x.path);
}
