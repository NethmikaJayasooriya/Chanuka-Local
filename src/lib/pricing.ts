/**
 * PRICING SOURCE OF TRUTH
 * ------------------------------------------------------------------
 * Base prices are USD and come from the existing Signature Series
 * catalogue on the current site. Three experience levels are used here,
 * mapped from the six-level catalogue:
 *
 *   under-2   -> "Fresh Graduate"        column
 *   3-to-9    -> "Professional"          column
 *   over-10   -> "Senior Professional"   column
 *
 * The catalogue also holds Executive (449) and C-Suite (749) pricing for
 * CV and LinkedIn. If the 10+ tier should sit at executive level instead,
 * change `over-10` in BASE_PRICES to 449 / 349 / 449 and nothing else
 * needs to be touched anywhere in the site.
 *
 * Bundle discounts follow the existing bundle rules:
 *   any two services   -> 20% off the combined price
 *   all three services -> 30% off the combined price
 */

export type ServiceId = "cv" | "cover-letter" | "linkedin";
export type LevelId = "under-2" | "3-to-9" | "over-10";
export type DeliveryId = "normal" | "fast" | "ultra";

export const services: Record<ServiceId, { name: string; short: string }> = {
  cv: { name: "ATS Friendly CV", short: "CV" },
  "cover-letter": { name: "Cover Letter Writing", short: "Cover Letter" },
  linkedin: { name: "LinkedIn Account Optimization", short: "LinkedIn" },
};

export const BASE_PRICES: Record<ServiceId, Record<LevelId, number>> = {
  cv: { "under-2": 129, "3-to-9": 189, "over-10": 279 },
  "cover-letter": { "under-2": 79, "3-to-9": 119, "over-10": 159 },
  linkedin: { "under-2": 129, "3-to-9": 189, "over-10": 279 },
};

export const BUNDLE_DISCOUNT: Record<number, number> = {
  1: 0,
  2: 0.2,
  3: 0.3,
};

export type Package = {
  id: string;
  name: string;
  includes: ServiceId[];
  blurb: string;
  popular?: boolean;
};

export const packages: Package[] = [
  {
    id: "ats-cv",
    name: "ATS Friendly CV",
    includes: ["cv"],
    blurb: "A recruiter-ready CV built to pass applicant tracking systems.",
  },
  {
    id: "cover-letter",
    name: "Cover Letter Writing",
    includes: ["cover-letter"],
    blurb: "A tailored letter that speaks to the role, not to everyone.",
  },
  {
    id: "linkedin",
    name: "LinkedIn Optimization",
    includes: ["linkedin"],
    blurb: "A profile rewritten so recruiters find you and stay on the page.",
  },
  {
    id: "cv-cover-letter",
    name: "CV + Cover Letter",
    includes: ["cv", "cover-letter"],
    blurb: "The complete application pair for a specific target role.",
  },
  {
    id: "cv-linkedin",
    name: "CV + LinkedIn",
    includes: ["cv", "linkedin"],
    blurb: "Apply and get found. The two places every recruiter looks.",
    popular: true,
  },
  {
    id: "cover-letter-linkedin",
    name: "Cover Letter + LinkedIn",
    includes: ["cover-letter", "linkedin"],
    blurb: "For professionals whose CV is already working.",
  },
  {
    id: "complete",
    name: "CV + Cover Letter + LinkedIn",
    includes: ["cv", "cover-letter", "linkedin"],
    blurb: "The full career brand, written as one consistent story.",
  },
];

export const levels: Array<{ id: LevelId; name: string; hint: string }> = [
  { id: "under-2", name: "Under 2 years", hint: "Students, graduates, first roles" },
  { id: "3-to-9", name: "3 to 9 years", hint: "Established professionals and specialists" },
  { id: "over-10", name: "10+ years", hint: "Senior, management and leadership roles" },
];

export const deliveries: Array<{
  id: DeliveryId;
  name: string;
  window: string;
  surcharge: number;
  note: string;
}> = [
  { id: "normal", name: "Standard", window: "5 to 7 days", surcharge: 0, note: "Included" },
  { id: "fast", name: "Fast", window: "2 to 3 days", surcharge: 0.2, note: "" },
  { id: "ultra", name: "Ultra fast", window: "Within 24 hours", surcharge: 0.5, note: "" },
];

export type Quote = {
  listPrice: number;
  bundleSaving: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  discountPercent: number;
};

export function quote(pkg: Package, level: LevelId, delivery: DeliveryId): Quote {
  const listPrice = pkg.includes.reduce((sum, s) => sum + BASE_PRICES[s][level], 0);
  const discount = BUNDLE_DISCOUNT[pkg.includes.length] ?? 0;
  const subtotal = Math.round(listPrice * (1 - discount));
  const surcharge = deliveries.find((d) => d.id === delivery)?.surcharge ?? 0;
  const deliveryFee = Math.round(subtotal * surcharge);

  return {
    listPrice,
    bundleSaving: listPrice - subtotal,
    subtotal,
    deliveryFee,
    total: subtotal + deliveryFee,
    discountPercent: Math.round(discount * 100),
  };
}

export function usd(value: number): string {
  return `$${value.toLocaleString("en-US")}`;
}

/** Cheapest total for a package, used for the "from" price on cards. */
export function fromPrice(pkg: Package): number {
  return quote(pkg, "under-2", "normal").total;
}
