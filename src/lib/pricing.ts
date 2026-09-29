/**
 * SRI LANKA PRICING SOURCE OF TRUTH (LKR)
 * ------------------------------------------------------------------
 * Official Sri Lanka market pricing for Chanuka Jeewantha Portfolio:
 * 
 * 1. Starter Pack (Essentials, Students / Fresh Graduates · Less than 1 year):
 *    - ATS CV Writing: LKR 3,950
 *    - Cover Letter Writing: LKR 2,950
 *    - LinkedIn Optimization: LKR 3,950
 *    -> Total: LKR 10,850
 *
 * 2. Career Pack (Signature, Professionals · 1-9 years):
 *    - ATS CV Writing: LKR 13,500
 *    - Cover Letter Writing: LKR 8,500
 *    - LinkedIn Optimization: LKR 13,500
 *    - Foreign Job CV: LKR 17,500
 *    -> Total: LKR 53,000
 *
 * 3. Executive Pack (Signature, Executives · More than 9 years):
 *    - ATS CV Writing: LKR 19,500
 *    - Foreign Job CV: LKR 28,500
 *    - LinkedIn Optimization: LKR 19,500
 *    - Cover Letter Writing: LKR 13,500
 *    - 1-Hour Strategy Consultation: LKR 27,500
 *    -> Total: LKR 108,500
 */

export type ServiceId = "cv" | "cover-letter" | "linkedin" | "foreign-cv" | "consultation";
export type LevelId = "under-2" | "3-to-9" | "over-10";
export type DeliveryId = "normal" | "fast" | "ultra";

export const services: Record<ServiceId, { name: string; short: string }> = {
  cv: { name: "ATS CV Writing", short: "ATS CV" },
  "cover-letter": { name: "Cover Letter Writing", short: "Cover Letter" },
  linkedin: { name: "LinkedIn Optimization", short: "LinkedIn" },
  "foreign-cv": { name: "Foreign Job CV", short: "Foreign Job CV" },
  consultation: { name: "1-Hour Strategy Consultation", short: "Consultation" },
};

export const BASE_PRICES: Record<ServiceId, Record<LevelId, number>> = {
  cv: { "under-2": 3950, "3-to-9": 13500, "over-10": 19500 },
  "cover-letter": { "under-2": 2950, "3-to-9": 8500, "over-10": 13500 },
  linkedin: { "under-2": 3950, "3-to-9": 13500, "over-10": 19500 },
  "foreign-cv": { "under-2": 5950, "3-to-9": 17500, "over-10": 28500 },
  consultation: { "under-2": 7500, "3-to-9": 15000, "over-10": 27500 },
};

export const BUNDLE_DISCOUNT: Record<number, number> = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
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
    id: "complete",
    name: "Full Career Pack",
    includes: ["cv", "cover-letter", "linkedin"],
    blurb: "The complete, all-inclusive suite aligned directly with your career level.",
    popular: true,
  },
  {
    id: "ats-cv",
    name: "ATS CV Writing",
    includes: ["cv"],
    blurb: "100% recruiter-ready, ATS-compliant CV built to pass screening engines.",
  },
  {
    id: "linkedin",
    name: "LinkedIn Optimization",
    includes: ["linkedin"],
    blurb: "Complete profile makeover (headline, about, skills) for maximum search visibility.",
  },
  {
    id: "cover-letter",
    name: "Cover Letter Writing",
    includes: ["cover-letter"],
    blurb: "Role-specific, persuasive pitch letter highlighting your value proposition.",
  },
  {
    id: "foreign-cv",
    name: "Foreign Job CV",
    includes: ["foreign-cv"],
    blurb: "Country-targeted format for Gulf/Middle East, UK, Australia, Europe & remote USD roles.",
  },
  {
    id: "consultation",
    name: "1-Hour Strategy Consultation",
    includes: ["consultation"],
    blurb: "Direct 1-on-1 career strategy & interview consultation session with Chanuka.",
  },
  {
    id: "cv-linkedin",
    name: "CV + LinkedIn",
    includes: ["cv", "linkedin"],
    blurb: "Apply and get discovered. The two essentials every recruiter reviews.",
    popular: true,
  },
  {
    id: "cv-cover-letter",
    name: "CV + Cover Letter",
    includes: ["cv", "cover-letter"],
    blurb: "The complete application pair tailored for high-priority vacancies.",
  },
];

export const levels: Array<{
  id: LevelId;
  name: string;
  hint: string;
  eyebrow: string;
  packName: string;
}> = [
  {
    id: "under-2",
    name: "Starter Pack",
    hint: "Students / Fresh Graduates · Less than 1 year",
    eyebrow: "ESSENTIALS",
    packName: "Starter Pack",
  },
  {
    id: "3-to-9",
    name: "Career Pack",
    hint: "Professionals · 1-9 years",
    eyebrow: "SIGNATURE",
    packName: "Career Pack",
  },
  {
    id: "over-10",
    name: "Executive Pack",
    hint: "Executives · More than 9 years",
    eyebrow: "SIGNATURE",
    packName: "Executive Pack",
  },
];

export const deliveries: Array<{
  id: DeliveryId;
  name: string;
  window: string;
  surcharge: number;
  note: string;
}> = [
  { id: "normal", name: "Standard", window: "48 to 72 hours", surcharge: 0, note: "Included" },
  { id: "fast", name: "Priority Express", window: "24 to 48 hours", surcharge: 0, note: "" },
  { id: "ultra", name: "VIP 24-Hour Express", window: "Within 24 hours", surcharge: 0, note: "" },
];

export function getPackageIncludes(pkg: Package, level: LevelId): ServiceId[] {
  if (pkg.id === "complete") {
    if (level === "under-2") return ["cv", "cover-letter", "linkedin"];
    if (level === "3-to-9") return ["cv", "cover-letter", "linkedin", "foreign-cv"];
    return ["cv", "foreign-cv", "linkedin", "cover-letter", "consultation"];
  }
  return pkg.includes;
}

export function getPackageDisplayName(pkg: Package, level: LevelId): string {
  if (pkg.id === "complete") {
    if (level === "under-2") return "Starter Pack";
    if (level === "3-to-9") return "Career Pack";
    return "Executive Pack";
  }
  return pkg.name;
}

export type Quote = {
  listPrice: number;
  bundleSaving: number;
  subtotal: number;
  deliveryFee: number;
  total: number;
  discountPercent: number;
  includedServices: ServiceId[];
  serviceBreakdown: Array<{ serviceId: ServiceId; name: string; price: number }>;
};

export function quote(pkg: Package, level: LevelId, delivery: DeliveryId): Quote {
  const incs = getPackageIncludes(pkg, level);
  const serviceBreakdown = incs.map((s) => ({
    serviceId: s,
    name: services[s]?.name ?? s,
    price: BASE_PRICES[s]?.[level] ?? 0,
  }));
  const listPrice = serviceBreakdown.reduce((sum, item) => sum + item.price, 0);
  const discount = BUNDLE_DISCOUNT[incs.length] ?? 0;
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
    includedServices: incs,
    serviceBreakdown,
  };
}

export function formatLKR(value: number): string {
  return `LKR ${value.toLocaleString("en-US")}`;
}

export function usd(value: number): string {
  return formatLKR(value);
}

/** Cheapest total for a package, used for the "from" price on cards. */
export function fromPrice(pkg: Package): number {
  return quote(pkg, "under-2", "normal").total;
}
