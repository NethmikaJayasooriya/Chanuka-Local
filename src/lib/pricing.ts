/** LKR prices from the supplied Essential and Signature lists.
 * Legacy level IDs are retained for existing orders; labels define the current bands.
 */

export type ServiceId = "cv" | "cover-letter" | "linkedin" | "foreign-cv" | "cv-review" | "consultation";
export type TierId = "essential" | "signature";
export const tiers = [
  { id: "essential" as const, name: "Essential", description: "Team-crafted under Chanuka’s supervision. Quality-checked by Chanuka." },
  { id: "signature" as const, name: "Signature", description: "Personally crafted by Chanuka Jeewantha. Industry + country positioning and 30-day support." },
];
export type LevelId = "under-2" | "3-to-9" | "over-10";
export type DeliveryId = "normal" | "fast" | "ultra";

export const services: Record<ServiceId, { name: string; short: string }> = {
  cv: { name: "ATS CV Writing", short: "ATS CV" },
  "cover-letter": { name: "Cover Letter Writing", short: "Cover Letter" },
  linkedin: { name: "LinkedIn Optimization", short: "LinkedIn" },
  "foreign-cv": { name: "Foreign Job CV", short: "Foreign Job CV" },
  consultation: { name: "1-Hour Strategy Consultation", short: "Consultation" },
  "cv-review": { name: "CV Review", short: "CV Review" },
};

export const BASE_PRICES: Record<ServiceId, Record<LevelId, number>> = {
  cv: { "under-2": 3950, "3-to-9": 5950, "over-10": 9950 },
  "cover-letter": { "under-2": 2950, "3-to-9": 3950, "over-10": 5950 },
  linkedin: { "under-2": 3950, "3-to-9": 5950, "over-10": 9950 },
  "foreign-cv": { "under-2": 4950, "3-to-9": 7450, "over-10": 10950 },
  "cv-review": { "under-2": 1490, "3-to-9": 1990, "over-10": 2490 },
  consultation: { "under-2": 7500, "3-to-9": 15000, "over-10": 27500 },
};

export const SIGNATURE_PRICES: typeof BASE_PRICES = {
  cv: { "under-2": 7500, "3-to-9": 13500, "over-10": 19500 },
  linkedin: { "under-2": 7500, "3-to-9": 13500, "over-10": 19500 },
  "cover-letter": { "under-2": 5500, "3-to-9": 8500, "over-10": 13500 },
  "foreign-cv": { "under-2": 12500, "3-to-9": 17500, "over-10": 28500 },
  "cv-review": { "under-2": 2500, "3-to-9": 3500, "over-10": 4500 },
  // Consultation was not revised in the supplied lists; retain its existing rates.
  consultation: BASE_PRICES.consultation,
};
export const TIER_PRICES = { essential: BASE_PRICES, signature: SIGNATURE_PRICES };
export const listedServices: ServiceId[] = ["cv", "linkedin", "cover-letter", "foreign-cv", "cv-review"];
export function pricingSummary(service: ServiceId = "cv"): string {
  return tiers.map((tier) => `${tier.name}: ${levels.map((level) => `${level.hint} ${formatLKR(TIER_PRICES[tier.id][service][level.id])}`).join("; ")}`).join(". ");
}

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
    blurb: "Achievement-led CV writing with readable formatting and relevant language for your target role.",
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
    blurb: "Country-targeted CV for the Gulf/Middle East, UK, Australia, Canada, Europe and remote roles.",
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
  { id: "cv-review", name: "CV Review", includes: ["cv-review"], blurb: "A focused assessment of your existing CV, with practical improvement recommendations." },
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
    name: "Student / Fresh Graduate",
    hint: "Students / Fresh Graduates · Less than 1 year",
    eyebrow: "LESS THAN 1 YEAR",
    packName: "Starter Pack",
  },
  {
    id: "3-to-9",
    name: "Professional",
    hint: "Professionals · 1-9 years",
    eyebrow: "1–9 YEARS",
    packName: "Career Pack",
  },
  {
    id: "over-10",
    name: "Executive",
    hint: "Executives · More than 9 years",
    eyebrow: "MORE THAN 9 YEARS",
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

export function quote(pkg: Package, level: LevelId, delivery: DeliveryId, tier: TierId = "essential"): Quote {
  const incs = getPackageIncludes(pkg, level);
  const serviceBreakdown = incs.map((s) => ({
    serviceId: s,
    name: services[s]?.name ?? s,
    price: TIER_PRICES[tier][s][level],
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

/** Server-side selection validation. Never accept a customer-supplied price. */
export function resolveOrder(packageId: unknown, levelId: unknown, deliveryId: unknown, tierId: unknown) {
  const pkg = packages.find((item) => item.id === packageId);
  const level = levels.find((item) => item.id === levelId);
  const delivery = deliveries.find((item) => item.id === deliveryId);
  const tier = tiers.find((item) => item.id === tierId);
  if (!pkg || !level || !delivery || !tier) return null;
  return {
    package_id: `${tier.id}:${pkg.id}`,
    package_name: `${tier.name} · ${getPackageDisplayName(pkg, level.id)}`,
    level_id: level.id,
    level_name: level.name,
    delivery_id: delivery.id,
    delivery_window: delivery.window,
    total_usd: quote(pkg, level.id, delivery.id, tier.id).total,
  };
}

export function usd(value: number): string {
  return formatLKR(value);
}

/** Cheapest total for a package, used for the "from" price on cards. */
export function fromPrice(pkg: Package): number {
  return quote(pkg, "under-2", "normal").total;
}
