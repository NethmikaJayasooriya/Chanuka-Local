/**
 * CONTENT TYPES FOR THE SCALABLE SEO PLATFORM
 * ------------------------------------------------------------------
 * Country mini-sites, resources and AEO (answer engine) fields.
 * Every type is designed so one template renders any number of pages
 * from data, per the Global SEO Platform Architecture.
 */

export type FaqItem = { q: string; a: string };
export type LinkItem = { href: string; label: string };
export type SourceItem = { label: string; url: string };
export type LabelValue = { label: string; value: string };

/** The seven active country mini-sites. */
export type CountrySlug =
  | "uk"
  | "usa"
  | "australia"
  | "canada"
  | "new-zealand"
  | "uae"
  | "singapore";

export type CountryServiceSlug = "cv-writing" | "linkedin-optimisation" | "cover-letter-writing";

/** /{country}/{service} : a localised commercial service page. */
export type CountryService = {
  country: CountrySlug;
  service: CountryServiceSlug;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string; // <= 60 chars
  metaDescription: string; // 140-160 chars
  eyebrow: string;
  h1: string;
  lead: string; // 1-2 sentences
  /** Answer-first summary, 40-70 words, quotable by AI engines. */
  quickAnswer: string;
  /** 4-6 concrete market facts shown as a key-facts panel. */
  keyFacts: LabelValue[];
  /** Why this market needs a different document. */
  whyDifferent: { heading: string; paragraphs: string[] };
  /** What the client receives, localised. 5-7 items. */
  whatYouGet: string[];
  /** Document conventions for this market and service. 5-7 rows. */
  marketConventions: LabelValue[];
  /** Sectors and roles where this market's candidates most often need help. */
  sectors: string[];
  /** 3-4 step process, localised. */
  process: Array<{ title: string; body: string }>;
  faqs: FaqItem[]; // 5-7, answer-first, country specific
};

export type ArticleSection = { heading: string; paragraphs: string[]; bullets?: string[] };

/** /{country}/career-advice/{slug} : a genuinely market-specific article. */
export type CountryArticle = {
  country: CountrySlug;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readMinutes: number;
  published: string; // ISO date
  updated: string; // ISO date
  excerpt: string;
  quickAnswer: string;
  intro: string;
  sections: ArticleSection[]; // 4-7 sections
  takeaways: string[];
  faqs: FaqItem[]; // 3-5
  sources?: SourceItem[]; // official / authoritative references only
  relatedLinks: LinkItem[];
};

/** /{country}/international-job-seekers : destination hub for applicants abroad. */
export type IjsHub = {
  country: CountrySlug;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  quickAnswer: string;
  overview: string;
  cvConventions: LabelValue[];
  whatChanges: string[];
  applyingFromAbroad: Array<{ title: string; body: string }>; // practical steps
  keySectors: string[];
  /** Orientation only. Never legal or immigration advice. */
  visaContext: string;
  commonMistakes: string[];
  faqs: FaqItem[];
  sources?: SourceItem[];
};

export type OriginSlug = "sri-lanka" | "india";

/** /{country}/international-job-seekers/from-{origin} : origin to destination corridor. */
export type OriginCorridor = {
  country: CountrySlug; // destination
  origin: OriginSlug;
  originName: string; // "Sri Lanka"
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  quickAnswer: string;
  overview: string;
  /** Convention translation: what a CV from the origin typically has, and what the destination expects. 5-8 rows. */
  whatToChange: Array<{ from: string; to: string }>;
  /** How qualifications from the origin are read, with the recognition body named where one exists. */
  qualificationsNote: string;
  sectorsWhereCandidatesCompete: string[];
  practicalSteps: Array<{ title: string; body: string }>;
  commonMistakes: string[];
  /** Orientation only. Never legal or immigration advice. */
  visaContext: string;
  faqs: FaqItem[];
  sources?: SourceItem[];
};

/** Everything for one country mini-site, written by one author pass. */
export type CountryBundle = {
  country: CountrySlug;
  /** Short intro for /{country}/career-advice hub. */
  adviceHubIntro: string;
  services: CountryService[]; // exactly 3
  articles: CountryArticle[]; // exactly 3
  ijsHub: IjsHub;
  origins: OriginCorridor[]; // exactly 2: sri-lanka, india
};

/** /resources/{slug} : a practical checklist / guide. */
export type Resource = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  quickAnswer: string;
  intro: string;
  groups: Array<{ heading: string; items: string[] }>;
  tips: string[];
  faqs: FaqItem[];
  relatedLinks: LinkItem[];
  updated: string;
};

/** AEO retrofit for existing entities: keyed by slug. */
export type AeoFields = { quickAnswer: string; faqs: FaqItem[] };

import type { CountryMarket } from "@/lib/countries";

/** Everything for one country mini-site, written by one author pass. */
export type CountryBundleFull = CountryBundle & {
  /** Full, corrected country hub entry for /{country}. No testimonials. */
  market: CountryMarket;
};
