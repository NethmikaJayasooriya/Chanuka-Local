/**
 * SITE FACTS (Sri Lanka site, chanukajeewantha.lk)
 * ------------------------------------------------------------------
 * The single source of truth for every fact the site states about
 * Chanuka Jeewantha. Pages, JSON-LD, llms.txt and FAQ answers all read
 * from here, so search engines and AI assistants always see one
 * consistent entity (the core of GEO). Change a number here, never in
 * page copy.
 */
export const site = {
  name: "Chanuka Jeewantha",
  domain: "chanukajeewantha.lk",
  url: "https://chanukajeewantha.lk",
  globalUrl: "https://chanukajeewantha.com",
  phone: "+94 77 390 2230",
  phoneRaw: "94773902230",
  tagline: "CPRW and CPCC certified CV writer in Sri Lanka, for jobs at home and abroad",
  email: "cjwagaarachchi@gmail.com",
  country: "Sri Lanka",
  credentials: [
    { short: "CPRW", name: "Certified Professional Resume Writer" },
    { short: "CPCC", name: "Certified Professional Career Coach" },
  ],
  yearsExperience: "8+",
  cvsWritten: "5,000+",
  rating: {
    score: "4.9",
    count: "107",
    label: "Google reviews",
  },
  reviewsUrl: "https://share.google/ur2XItxcmhKNt8QL3",
  /** Verified public profiles (schema.org sameAs). Add only confirmed URLs. */
  sameAs: [
    "https://www.linkedin.com/in/chanuka-jeewantha/",
    "https://www.youtube.com/@chanukajeewantha",
    "https://www.facebook.com/chanuka.jeewantha.416517",
    "https://about.me/chanukajeewantha",
  ],
  /** Island-wide online service; these feed areaServed in the schema. */
  cities: [
    "Colombo",
    "Gampaha",
    "Negombo",
    "Kandy",
    "Galle",
    "Matara",
    "Kurunegala",
    "Kalutara",
    "Ratnapura",
    "Anuradhapura",
    "Jaffna",
    "Trincomalee",
    "Batticaloa",
  ],
  stats: [
    { value: "5,000+", label: "CVs written" },
    { value: "107", label: "Google reviews" },
    { value: "24h", label: "Fastest delivery" },
    { value: "4.9/5", label: "Average rating" },
  ],
} as const;

/** Which site this build is. Tags DB rows so one Supabase project serves both sites. */
export const SITE_KEY = "lk" as const;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.phoneRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${site.email}${q ? `?${q}` : ""}`;
}
