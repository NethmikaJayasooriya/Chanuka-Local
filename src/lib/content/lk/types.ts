export type LkGuideSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { caption?: string; head: string[]; rows: string[][] };
};

/**
 * A Sri Lanka pillar guide. Each one targets a real search cluster
 * (Semrush, LK database) and is written answer-first for Google AI
 * Overviews, ChatGPT, Perplexity and Gemini: a quotable short answer,
 * labelled key facts, a HowTo where it fits, and an FAQ block.
 */
export type LkGuide = {
  slug: string;
  lang: "en" | "si";
  eyebrow: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  quickAnswer: string;
  quickAnswerLabel?: string;
  published: string;
  updated: string;
  keyFacts?: Array<{ label: string; value: string }>;
  sections: LkGuideSection[];
  steps?: { title: string; items: Array<{ name: string; text: string }> };
  takeaways?: string[];
  faqs: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
  related: Array<{ href: string; label: string }>;
  cta: { heading: string; body: string; href: string; label: string };
  /** Same topic in the other language (hreflang en-LK / si-LK pair). */
  alternate?: { lang: "en" | "si"; slug: string; label: string };
  /** UI strings, so the Sinhala guide reads fully in Sinhala. */
  ui?: Partial<Record<"contents" | "faq" | "related" | "steps" | "summary" | "keyFacts", string>>;
};
