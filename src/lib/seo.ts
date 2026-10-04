import type { Metadata } from "next";
import { BASE_PRICES } from "@/lib/pricing";
import { site } from "@/lib/site";

/**
 * SEO CORE (Sri Lanka site)
 * ------------------------------------------------------------------
 * One place that builds page metadata, hreflang clusters and the
 * JSON-LD entity graph, so every template (and every future page
 * added from the CMS) inherits the same Sri Lanka signals: en-LK
 * locale, LKR prices, island-wide areaServed and one consistent
 * Chanuka Jeewantha entity shared with chanukajeewantha.com.
 */

export const BASE_URL = site.url.replace(/\/$/, "");
export const GLOBAL_URL = site.globalUrl.replace(/\/$/, "");
export const ORG_ID = `${BASE_URL}/#organization`;
export const PERSON_ID = `${BASE_URL}/#chanuka-jeewantha`;
export const WEBSITE_ID = `${BASE_URL}/#website`;
/** The same person entity on the global site, so engines merge the two. */
export const GLOBAL_PERSON_ID = `${GLOBAL_URL}/#chanuka-jeewantha`;
export const AUTHOR_PATH = "/about/chanuka-jeewantha";
export const LINKEDIN_URL = site.sameAs[0];

export const abs = (path: string) => (path.startsWith("http") ? path : `${BASE_URL}${path === "/" ? "" : path}`);

/** Lowest and highest single-service prices (LKR), from the live price table. */
const allPrices = Object.values(BASE_PRICES).flatMap((p) => Object.values(p));
export const PRICE_MIN = Math.min(...allPrices);
export const PRICE_MAX = Math.max(...allPrices);
const lkr = (n: number) => `LKR ${n.toLocaleString("en-US")}`;

/**
 * hreflang between the two country-code sites. Sri Lankan searchers get
 * the .lk page (en-LK, LKR prices); everyone else gets the .com page
 * (x-default). The .com site carries the reciprocal en-LK link.
 */
export const lkCluster = (path: string, globalPath: string = path): Record<string, string> => ({
  "en-LK": abs(path),
  en: `${GLOBAL_URL}${globalPath === "/" ? "/" : globalPath}`,
  "x-default": `${GLOBAL_URL}${globalPath === "/" ? "/" : globalPath}`,
});
export const homeCluster = () => lkCluster("/");
export const serviceCluster = (service: string) => lkCluster(`/${service}`);

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
  locale = "en_LK",
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
  locale?: string;
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
      locale,
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

export function faqLd(faqs: Array<{ q: string; a: string }>, inLanguage = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function howToLd({
  name,
  description,
  path,
  steps,
  inLanguage = "en",
}: {
  name: string;
  description: string;
  path: string;
  steps: Array<{ name: string; text: string }>;
  inLanguage?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    url: abs(path),
    inLanguage,
    step: steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.name, text: s.text })),
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
  inLanguage = "en",
}: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
  section?: string;
  about?: string;
  inLanguage?: string;
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
    inLanguage,
    ...(section ? { articleSection: section } : {}),
    ...(about ? { about: { "@type": "Thing", name: about } } : {}),
    contentLocation: { "@type": "Country", name: site.country },
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    isPartOf: { "@id": WEBSITE_ID },
  };
}

const areaServed = () => [
  { "@type": "Country", name: site.country },
  ...site.cities.map((c) => ({ "@type": "City", name: c, containedInPlace: { "@type": "Country", name: site.country } })),
];

export function serviceLd({
  name,
  description,
  path,
  serviceType,
  areaServed: area,
  lowPrice = PRICE_MIN,
  highPrice = PRICE_MAX,
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
    areaServed: area ? { "@type": "Country", name: area } : { "@type": "Country", name: site.country },
    availableChannel: { "@type": "ServiceChannel", serviceUrl: abs("/order"), availableLanguage: ["English", "Sinhala"] },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "LKR",
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

const offer = (name: string, path: string, price: number) => ({
  "@type": "Offer",
  priceCurrency: "LKR",
  price,
  priceSpecification: { "@type": "PriceSpecification", priceCurrency: "LKR", minPrice: price },
  url: abs("/order"),
  itemOffered: { "@type": "Service", name, url: abs(path), areaServed: { "@type": "Country", name: site.country } },
});

/** Site-wide entity graph: organisation, founder/author and website. */
export function siteGraphLd() {
  const credentials = site.credentials.map((c) => ({
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "certification",
    name: `${c.name} (${c.short})`,
  }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": ORG_ID,
        name: site.name,
        alternateName: ["Chanuka Jeewantha CV Writing", "Chanuka Jeewantha Career Branding"],
        url: BASE_URL,
        logo: abs("/icon.png"),
        image: abs("/images/chanuka.jpg"),
        email: site.email,
        telephone: site.phone,
        description: `CPRW and CPCC certified CV writing, LinkedIn optimisation, cover letters and foreign job CVs in Sri Lanka. ${site.cvsWritten} CVs written over ${site.yearsExperience} years, every one personally by Chanuka Jeewantha.`,
        slogan: site.tagline,
        founder: { "@id": PERSON_ID },
        address: { "@type": "PostalAddress", addressCountry: "LK" },
        priceRange: `${lkr(PRICE_MIN)} to ${lkr(PRICE_MAX)}`,
        currenciesAccepted: "LKR",
        paymentAccepted: "Bank transfer",
        areaServed: areaServed(),
        availableLanguage: ["English", "Sinhala"],
        knowsLanguage: ["en", "si"],
        sameAs: [...site.sameAs, site.reviewsUrl, GLOBAL_URL],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: site.phone,
          email: site.email,
          areaServed: "LK",
          availableLanguage: ["English", "Sinhala"],
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.score,
          reviewCount: site.rating.count,
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "CV and career services in Sri Lanka",
          itemListElement: [
            offer("ATS CV writing", "/cv-writing", BASE_PRICES.cv["under-2"]),
            offer("Foreign job CV writing", "/foreign-job-cv-sri-lanka", BASE_PRICES["foreign-cv"]["under-2"]),
            offer("LinkedIn profile optimisation", "/linkedin-optimisation", BASE_PRICES.linkedin["under-2"]),
            offer("Cover letter writing", "/cover-letter-writing", BASE_PRICES["cover-letter"]["under-2"]),
            offer("Career strategy consultation", "/career-strategy", BASE_PRICES.consultation["under-2"]),
          ],
        },
      },
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: site.name,
        url: abs(AUTHOR_PATH),
        image: abs("/images/chanuka.jpg"),
        jobTitle: "CV Writer and Career Coach (CPRW, CPCC)",
        description: `Sri Lankan CPRW and CPCC certified CV writer and career coach with ${site.yearsExperience} years of experience and ${site.cvsWritten} CVs written.`,
        nationality: { "@type": "Country", name: site.country },
        homeLocation: { "@type": "Country", name: site.country },
        worksFor: { "@id": ORG_ID },
        hasCredential: credentials,
        knowsLanguage: ["en", "si"],
        sameAs: [...site.sameAs, `${GLOBAL_URL}/about/chanuka-jeewantha`],
        knowsAbout: [
          "CV writing",
          "CV format in Sri Lanka",
          "Applicant tracking systems",
          "Foreign employment CVs",
          "Government job applications in Sri Lanka",
          "LinkedIn profile optimisation",
          "Cover letter writing",
          "Career coaching",
        ],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: BASE_URL,
        name: `${site.name} | CV Writing Sri Lanka`,
        inLanguage: ["en-LK", "si-LK"],
        publisher: { "@id": ORG_ID },
        about: { "@type": "Thing", name: "CV writing in Sri Lanka" },
      },
    ],
  };
}
