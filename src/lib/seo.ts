import type { Metadata } from "next";
import { COUNTRY_BUNDLES } from "@/lib/country-content";
import { site } from "@/lib/site";

/**
 * SEO CORE
 * ------------------------------------------------------------------
 * One place that builds page metadata, hreflang clusters and the
 * JSON-LD entity graph, so every template (and every future page
 * added from the CMS) inherits the same signals.
 */

export const BASE_URL = site.url.replace(/\/$/, "");
export const ORG_ID = `${BASE_URL}/#organization`;
export const PERSON_ID = `${BASE_URL}/#chanuka-jeewantha`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
export const AUTHOR_PATH = "/about/chanuka-jeewantha";
export const LINKEDIN_URL = "https://www.linkedin.com/in/chanukajeewantha";

export const abs = (path: string) => (path.startsWith("http") ? path : `${BASE_URL}${path === "/" ? "" : path}`);

/** hreflang locale per country slug. */
export const COUNTRY_LOCALES: Record<string, string> = {
  uk: "en-GB",
  usa: "en-US",
  australia: "en-AU",
  canada: "en-CA",
  "new-zealand": "en-NZ",
  uae: "en-AE",
  singapore: "en-SG",
};

/**
 * hreflang cluster for a page that has genuine regional equivalents.
 * `globalPath` is the international version (also x-default);
 * `countryPath(c)` builds the regional URL for country c.
 */
export function regionalCluster(globalPath: string, countryPath: (c: string) => string): Record<string, string> {
  const langs: Record<string, string> = { "x-default": globalPath, en: globalPath };
  for (const b of COUNTRY_BUNDLES) langs[COUNTRY_LOCALES[b.country]] = countryPath(b.country);
  return langs;
}

export const homeCluster = () => regionalCluster("/", (c) => `/${c}`);
export const serviceCluster = (service: string) => regionalCluster(`/${service}`, (c) => `/${c}/${service}`);

export function pageMetadata({
  title,
  description,
  path,
  languages,
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  languages?: Record<string, string>;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = abs(path);
  // The layout appends " | Chanuka Jeewantha". Drop it when the result
  // would be truncated in search results, keeping the keyword visible.
  const useAbsolute = absoluteTitle || `${title} | ${site.name}`.length > 65;
  return {
    title: useAbsolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path, ...(languages ? { languages } : {}) },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: "en_GB",
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
      ...(type === "article" ? { publishedTime, modifiedTime, authors: [abs(AUTHOR_PATH)] } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og-image.png"] },
  };
}

// ---------------- JSON-LD builders ----------------

export function breadcrumbLd(items: Array<{ name: string; path?: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.path ? { item: abs(c.path) } : {}),
    })),
  };
}

export function faqLd(faqs: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleLd({
  title,
  description,
  path,
  published,
  updated,
  section,
  about,
}: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  section?: string;
  about?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    mainEntityOfPage: abs(path),
    url: abs(path),
    datePublished: published,
    dateModified: updated,
    inLanguage: "en",
    ...(section ? { articleSection: section } : {}),
    ...(about ? { about: { "@type": "Thing", name: about } } : {}),
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

export function serviceLd({
  name,
  description,
  path,
  serviceType,
  areaServed,
  lowPrice = 79,
  highPrice = 279,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed?: string;
  lowPrice?: number;
  highPrice?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: abs(path),
    serviceType,
    provider: { "@id": ORG_ID },
    areaServed: areaServed ? { "@type": "Country", name: areaServed } : "Worldwide",
    availableChannel: { "@type": "ServiceChannel", serviceUrl: abs("/order") },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice,
      highPrice,
      url: abs("/order"),
    },
  };
}

export function itemListLd(name: string, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: abs(it.path),
    })),
  };
}

/** Site-wide entity graph: organisation, founder/author and website. */
export function siteGraphLd() {
  const areas = COUNTRY_BUNDLES.map((b) => ({ "@type": "Country", name: b.market.name }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: site.name,
        alternateName: "Chanuka Jeewantha Career Branding",
        url: BASE_URL,
        logo: abs("/icon.png"),
        image: abs("/images/chanuka.jpg"),
        email: site.email,
        description:
          "Founder-led CV, resume, cover letter and LinkedIn writing for professionals applying worldwide. Every document is written personally by Chanuka Jeewantha.",
        founder: { "@id": PERSON_ID },
        priceRange: "$79 to $502 USD",
        currenciesAccepted: "USD",
        areaServed: [{ "@type": "Place", name: "Worldwide" }, ...areas],
        knowsLanguage: "en",
        sameAs: [LINKEDIN_URL, site.reviewsUrl],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.score,
          reviewCount: site.rating.count,
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Career documents",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "CV and resume writing", url: abs("/cv-writing") } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "LinkedIn profile optimisation", url: abs("/linkedin-optimisation") } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cover letter writing", url: abs("/cover-letter-writing") } },
          ],
        },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.name,
        url: abs(AUTHOR_PATH),
        image: abs("/images/chanuka.jpg"),
        jobTitle: "CV Writer and Career Branding Specialist",
        worksFor: { "@id": ORG_ID },
        sameAs: [LINKEDIN_URL],
        knowsAbout: [
          "CV writing",
          "Resume writing",
          "Applicant tracking systems",
          "LinkedIn profile optimisation",
          "Cover letter writing",
          "International job search",
          "Executive career positioning",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: BASE_URL,
        name: site.name,
        inLanguage: "en",
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}
