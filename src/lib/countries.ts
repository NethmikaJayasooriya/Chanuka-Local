/**
 * COUNTRY ENTITIES & MARKET CONFIGURATION
 * ------------------------------------------------------------------
 * Seven active country mini-sites: /uk, /usa, /australia, /canada,
 * /new-zealand, /uae, /singapore. Each market's hub entry lives in its
 * content bundle (src/lib/content/countries/*) together with that
 * market's localised service pages, articles and international
 * job-seeker pages. Adding a market = adding one bundle.
 *
 * All pricing is in USD on chanukajeewantha.com.
 */

export type CountryMarket = {
  slug: string;
  name: string;
  adjective: string;
  flag: string;
  code: "GB" | "US" | "AU" | "CA" | "NZ" | "AE" | "SG";
  /** hreflang locale, e.g. "en-GB". */
  locale?: string;
  /** AEO: answer-first summary for the country hub, 40-70 words. */
  quickAnswer?: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroLead: string;
  docType: "CV" | "Resume";
  standardLength: string;
  photoRule: string;
  spellingStyle: string;
  overview: string;
  marketRules: Array<{ label: string; value: string; importance: "critical" | "recommended" }>;
  whatRecruitersLookFor: string[];
  inDemandSectors: string[];
  keyRoles: string[];
  faqs: Array<{ q: string; a: string }>;
  /** Only real, verifiable client reviews. Never invented. */
  localTestimonial?: {
    name: string;
    role: string;
    location: string;
    quote: string;
    rating: number;
  };
};

import { COUNTRY_BUNDLES } from "@/lib/country-content";

export const countries: CountryMarket[] = COUNTRY_BUNDLES.map((b) => b.market);

export function getCountry(slug: string): CountryMarket | undefined {
  return countries.find((c) => c.slug === slug);
}

export function getAllCountrySlugs(): string[] {
  return countries.map((c) => c.slug);
}
