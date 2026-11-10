import { australiaBundle } from "@/lib/content/countries/australia";
import { canadaBundle } from "@/lib/content/countries/canada";
import { newZealandBundle } from "@/lib/content/countries/new-zealand";
import { singaporeBundle } from "@/lib/content/countries/singapore";
import { uaeBundle } from "@/lib/content/countries/uae";
import { ukBundle } from "@/lib/content/countries/uk";
import { usaBundle } from "@/lib/content/countries/usa";
import type {
  CountryArticle,
  CountryBundleFull,
  CountryService,
  CountryServiceSlug,
  OriginCorridor,
} from "@/lib/content/types";

/**
 * Country mini-site registry. Order here is the order markets appear in
 * navigation, sitemaps and hreflang clusters.
 */
export const COUNTRY_BUNDLES: CountryBundleFull[] = [
  ukBundle,
  usaBundle,
  australiaBundle,
  canadaBundle,
  newZealandBundle,
  uaeBundle,
  singaporeBundle,
];

export const COUNTRY_SERVICE_SLUGS: CountryServiceSlug[] = [
  "cv-writing",
  "linkedin-optimisation",
  "cover-letter-writing",
];

export function getBundle(country: string): CountryBundleFull | undefined {
  return COUNTRY_BUNDLES.find((b) => b.country === country);
}

export function getCountryService(country: string, service: string): CountryService | undefined {
  return getBundle(country)?.services.find((s) => s.service === service);
}

export function getCountryArticle(country: string, slug: string): CountryArticle | undefined {
  return getBundle(country)?.articles.find((a) => a.slug === slug);
}

export function getOrigin(country: string, originSlug: string): OriginCorridor | undefined {
  // URL segment is "from-sri-lanka"; the data stores "sri-lanka".
  const origin = originSlug.replace(/^from-/, "");
  return getBundle(country)?.origins.find((o) => o.origin === origin);
}

/** Every URL in one country mini-site, for sitemaps and llms.txt. */
export function countryPaths(country: string): string[] {
  const b = getBundle(country);
  if (!b) return [];
  return [
    `/${country}`,
    ...b.services.map((s) => `/${country}/${s.service}`),
    `/${country}/career-advice`,
    ...b.articles.map((a) => `/${country}/career-advice/${a.slug}`),
    `/${country}/international-job-seekers`,
    ...b.origins.map((o) => `/${country}/international-job-seekers/from-${o.origin}`),
  ];
}

/** Legacy global corridor slugs now served by a country mini-site hub. */
export const MIGRATED_CORRIDORS: Record<string, string> = {
  "united-kingdom": "uk",
  australia: "australia",
  canada: "canada",
  uae: "uae",
  "new-zealand": "new-zealand",
  singapore: "singapore",
};
