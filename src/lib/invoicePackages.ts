import {
  BASE_PRICES,
  SIGNATURE_PRICES,
  formatLKR,
  services as lkServices,
  type LevelId,
  type ServiceId,
  type TierId,
  type DeliveryId,
} from "./pricing";

export interface InvoiceCountry {
  key: string;
  name: string;
  label: string;
  currency: string;
  symbol: string;
  flag: string;
  site: "com" | "lk" | "uk";
}

export const INVOICE_COUNTRIES: InvoiceCountry[] = [
  { key: "lk", name: "Sri Lanka", label: "Sri Lanka", currency: "LKR", symbol: "Rs ", flag: "🇱🇰", site: "lk" },
  { key: "com", name: "Global / US", label: "Global / US", currency: "USD", symbol: "$", flag: "🌐", site: "com" },
  { key: "uk", name: "United Kingdom", label: "UK", currency: "GBP", symbol: "£", flag: "🇬🇧", site: "uk" },
];

export interface InvoiceDeliveryOption {
  id: DeliveryId;
  name: string;
  window: string;
  surcharge: number;
  note: string;
}

/**
 * Returns country-specific delivery turnaround speeds.
 * For .com (USD / Global):
 *   Standard: 5 to 7 days (0% / Included)
 *   Fast: 2 to 3 days (+20%)
 *   Ultra fast: Within 24 hours (+50%)
 * For .lk and .uk:
 *   Standard: 5 to 7 days (Included)
 *   Priority Express: 1 to 3 days (+20%)
 *   VIP 24-Hour Express: Within 24 hours (+30%)
 */
export function getCountryDeliveries(countryKey: string): InvoiceDeliveryOption[] {
  if (countryKey === "com") {
    return [
      { id: "normal", name: "Standard", window: "5 to 7 days", surcharge: 0, note: "Included" },
      { id: "fast", name: "Fast", window: "2 to 3 days", surcharge: 0.20, note: "+20%" },
      { id: "ultra", name: "Ultra fast", window: "Within 24 hours", surcharge: 0.50, note: "+50%" },
    ];
  }
  return [
    { id: "normal", name: "Standard", window: "5 to 7 days", surcharge: 0, note: "Included" },
    { id: "fast", name: "Priority Express", window: "1 to 3 days", surcharge: 0.20, note: "+20%" },
    { id: "ultra", name: "VIP 24-Hour Express", window: "Within 24 hours", surcharge: 0.30, note: "+30%" },
  ];
}

/**
 * Multi-service bundle discount hierarchy:
 * For .com:
 *   1 service: 0% discount
 *   2 services: 20% OFF the combined list price
 *   3+ services: 30% OFF the combined list price
 */
export function getCountryBundleDiscount(
  countryKey: string,
  serviceCount: number
): { rate: number; percent: number } {
  if (countryKey === "com") {
    if (serviceCount === 2) return { rate: 0.20, percent: 20 };
    if (serviceCount >= 3) return { rate: 0.30, percent: 30 };
  }
  return { rate: 0, percent: 0 };
}

export interface InvoicePackagePreset {
  id: string;
  name: string;
  category: "Full Packages" | "Individual Services" | "Consultation & Add-ons";
  tier?: "Essential" | "Signature";
  level?: "Student / Graduate" | "Professional" | "Executive" | "All Levels";
  description: string;
  unitPrice: number;
  currency: string;
}

/**
 * Returns the full list of package presets for a given country code.
 */
export function getInvoicePackagePresets(countryKey: string): InvoicePackagePreset[] {
  if (countryKey === "lk") {
    return getSriLankaPresets();
  }

  if (countryKey === "uk") {
    return getUnitedKingdomPresets();
  }

  // Default: Global / US (USD)
  return getGlobalPresets();
}

/**
 * Sri Lanka official presets directly linked to pricing.ts
 */
function getSriLankaPresets(): InvoicePackagePreset[] {
  const levels: Array<{ id: LevelId; label: string; exp: string }> = [
    { id: "under-2", label: "Student / Fresh Graduate", exp: "Less than 1 year" },
    { id: "3-to-9", label: "Professional", exp: "1–9 years" },
    { id: "over-10", label: "Executive", exp: "More than 9 years" },
  ];

  const presets: InvoicePackagePreset[] = [];

  // 1. Full Career Packs
  levels.forEach((lvl) => {
    // Essential Full Career Pack (CV + LinkedIn + Cover Letter)
    const essPrice =
      BASE_PRICES.cv[lvl.id] +
      BASE_PRICES.linkedin[lvl.id] +
      BASE_PRICES["cover-letter"][lvl.id];
    presets.push({
      id: `lk-full-ess-${lvl.id}`,
      name: `Full Career Pack (${lvl.label}) · Essential`,
      category: "Full Packages",
      tier: "Essential",
      level: lvl.label as any,
      description: `Full Career Pack (${lvl.label} · ${lvl.exp}): ATS CV Writing + LinkedIn Optimization + Cover Letter Writing · Essential Tier (Supervised & Quality-Checked)`,
      unitPrice: essPrice,
      currency: "LKR",
    });

    // Signature Full Career Pack
    const sigPrice =
      SIGNATURE_PRICES.cv[lvl.id] +
      SIGNATURE_PRICES.linkedin[lvl.id] +
      SIGNATURE_PRICES["cover-letter"][lvl.id];
    presets.push({
      id: `lk-full-sig-${lvl.id}`,
      name: `Full Career Pack (${lvl.label}) · Signature`,
      category: "Full Packages",
      tier: "Signature",
      level: lvl.label as any,
      description: `Full Career Pack (${lvl.label} · ${lvl.exp}): Personally Crafted by Chanuka Jeewantha (ATS CV + LinkedIn Optimization + Cover Letter + 30-Day Support)`,
      unitPrice: sigPrice,
      currency: "LKR",
    });

    // CV + LinkedIn Combo
    const cvLiPrice = BASE_PRICES.cv[lvl.id] + BASE_PRICES.linkedin[lvl.id];
    presets.push({
      id: `lk-cv-li-${lvl.id}`,
      name: `CV + LinkedIn (${lvl.label}) · Essential`,
      category: "Full Packages",
      tier: "Essential",
      level: lvl.label as any,
      description: `ATS CV Writing + LinkedIn Optimization Combo (${lvl.label})`,
      unitPrice: cvLiPrice,
      currency: "LKR",
    });

    // CV + Cover Letter Combo
    const cvClPrice = BASE_PRICES.cv[lvl.id] + BASE_PRICES["cover-letter"][lvl.id];
    presets.push({
      id: `lk-cv-cl-${lvl.id}`,
      name: `CV + Cover Letter (${lvl.label}) · Essential`,
      category: "Full Packages",
      tier: "Essential",
      level: lvl.label as any,
      description: `ATS CV Writing + Role Cover Letter Combo (${lvl.label})`,
      unitPrice: cvClPrice,
      currency: "LKR",
    });
  });

  // 2. Individual Services
  const singleServicesList: Array<{ id: ServiceId; name: string; blurb: string }> = [
    { id: "cv", name: "ATS CV Writing", blurb: "Achievement-led ATS CV writing with readable formatting" },
    { id: "linkedin", name: "LinkedIn Optimization", blurb: "Complete profile makeover (headline, about, skills, keywords)" },
    { id: "cover-letter", name: "Cover Letter Writing", blurb: "Role-specific, persuasive pitch letter" },
    { id: "foreign-cv", name: "Foreign Job CV", blurb: "Country-targeted CV for Gulf, UK, Europe, Australia, Canada and remote roles" },
  ];

  singleServicesList.forEach((s) => {
    levels.forEach((lvl) => {
      // Essential
      presets.push({
        id: `lk-sing-ess-${s.id}-${lvl.id}`,
        name: `${s.name} (${lvl.label}) · Essential`,
        category: "Individual Services",
        tier: "Essential",
        level: lvl.label as any,
        description: `${s.name} (${lvl.label}): ${s.blurb} · Essential Tier`,
        unitPrice: BASE_PRICES[s.id][lvl.id],
        currency: "LKR",
      });

      // Signature
      presets.push({
        id: `lk-sing-sig-${s.id}-${lvl.id}`,
        name: `${s.name} (${lvl.label}) · Signature`,
        category: "Individual Services",
        tier: "Signature",
        level: lvl.label as any,
        description: `${s.name} (${lvl.label}): ${s.blurb} · Personally Crafted by Chanuka Jeewantha with 30-Day Support`,
        unitPrice: SIGNATURE_PRICES[s.id][lvl.id],
        currency: "LKR",
      });
    });
  });

  // 3. Consultation & Add-ons
  levels.forEach((lvl) => {
    presets.push({
      id: `lk-consult-${lvl.id}`,
      name: `1-Hour Strategy Consultation (${lvl.label})`,
      category: "Consultation & Add-ons",
      level: lvl.label as any,
      description: `1-Hour 1-on-1 Career Strategy & Interview Consultation session with Chanuka Jeewantha (${lvl.label})`,
      unitPrice: BASE_PRICES.consultation[lvl.id],
      currency: "LKR",
    });
  });

  presets.push({
    id: "lk-vip-express",
    name: "VIP 24-Hour Express Delivery Add-on",
    category: "Consultation & Add-ons",
    description: "VIP Priority Queueing: Final first draft delivery within 24 hours (+30% express turnaround)",
    unitPrice: 4755,
    currency: "LKR",
  });

  presets.push({
    id: "lk-priority-express",
    name: "Priority Express Delivery Add-on (1–3 Days)",
    category: "Consultation & Add-ons",
    description: "Priority Queueing: Expedited draft delivery within 1 to 3 business days (+20%)",
    unitPrice: 3170,
    currency: "LKR",
  });

  return presets;
}

/**
 * Global / US (.com) Presets
 * Exactly matching the 3-Tier Pricing Calculation Hierarchy:
 * Hierarchy Level 1 Base Prices:
 *   ATS Friendly CV: Under 2 yrs ($129), 3 to 9 yrs ($189), 10+ yrs ($279)
 *   Cover Letter: Under 2 yrs ($79), 3 to 9 yrs ($119), 10+ yrs ($159)
 *   LinkedIn: Under 2 yrs ($129), 3 to 9 yrs ($189), 10+ yrs ($279)
 * Hierarchy Level 2 Bundle Discounts:
 *   1 item: 0%
 *   2 items: 20% OFF
 *   3 items: 30% OFF
 */
function getGlobalPresets(): InvoicePackagePreset[] {
  return [
    // ==========================================
    // 10+ Years (Senior / Leadership / Executive)
    // ==========================================
    {
      id: "com-full-exec",
      name: "Full Career Pack (10+ years · Senior / Leadership)",
      category: "Full Packages",
      level: "Executive",
      description: "Full Career Pack (10+ years): ATS Friendly CV ($279) + Cover Letter ($159) + LinkedIn Optimization ($279) · 30% bundle discount applied (List $717)",
      unitPrice: 502,
      currency: "USD",
    },
    {
      id: "com-cv-linkedin-exec",
      name: "CV + LinkedIn (10+ years · Senior / Leadership)",
      category: "Full Packages",
      level: "Executive",
      description: "Package: ATS Friendly CV ($279) + LinkedIn Optimization ($279) · 20% bundle discount applied (List $558)",
      unitPrice: 446,
      currency: "USD",
    },
    {
      id: "com-cv-cl-exec",
      name: "CV + Cover Letter (10+ years · Senior / Leadership)",
      category: "Full Packages",
      level: "Executive",
      description: "Package: ATS Friendly CV ($279) + Cover Letter Writing ($159) · 20% bundle discount applied (List $438)",
      unitPrice: 350,
      currency: "USD",
    },
    {
      id: "com-cl-linkedin-exec",
      name: "Cover Letter + LinkedIn (10+ years · Senior / Leadership)",
      category: "Full Packages",
      level: "Executive",
      description: "Package: Cover Letter Writing ($159) + LinkedIn Optimization ($279) · 20% bundle discount applied (List $438)",
      unitPrice: 350,
      currency: "USD",
    },

    // ==========================================
    // 3 to 9 Years (Professionals)
    // ==========================================
    {
      id: "com-full-pro",
      name: "Full Career Pack (3 to 9 years · Professionals)",
      category: "Full Packages",
      level: "Professional",
      description: "Full Career Pack (3 to 9 years): ATS Friendly CV ($189) + Cover Letter ($119) + LinkedIn Optimization ($189) · 30% bundle discount applied (List $497)",
      unitPrice: 348,
      currency: "USD",
    },
    {
      id: "com-cv-linkedin-pro",
      name: "CV + LinkedIn (3 to 9 years · Professionals)",
      category: "Full Packages",
      level: "Professional",
      description: "Package: ATS Friendly CV ($189) + LinkedIn Optimization ($189) · 20% bundle discount applied (List $378)",
      unitPrice: 302,
      currency: "USD",
    },
    {
      id: "com-cv-cl-pro",
      name: "CV + Cover Letter (3 to 9 years · Professionals)",
      category: "Full Packages",
      level: "Professional",
      description: "Package: ATS Friendly CV ($189) + Cover Letter Writing ($119) · 20% bundle discount applied (List $308)",
      unitPrice: 246,
      currency: "USD",
    },
    {
      id: "com-cl-linkedin-pro",
      name: "Cover Letter + LinkedIn (3 to 9 years · Professionals)",
      category: "Full Packages",
      level: "Professional",
      description: "Package: Cover Letter Writing ($119) + LinkedIn Optimization ($189) · 20% bundle discount applied (List $308)",
      unitPrice: 246,
      currency: "USD",
    },

    // ==========================================
    // Under 2 Years (Graduates)
    // ==========================================
    {
      id: "com-full-grad",
      name: "Full Career Pack (Under 2 years · Graduates)",
      category: "Full Packages",
      level: "Student / Graduate",
      description: "Full Career Pack (Under 2 years): ATS Friendly CV ($129) + Cover Letter ($79) + LinkedIn Optimization ($129) · 30% bundle discount applied (List $337)",
      unitPrice: 236,
      currency: "USD",
    },
    {
      id: "com-cv-linkedin-grad",
      name: "CV + LinkedIn (Under 2 years · Graduates)",
      category: "Full Packages",
      level: "Student / Graduate",
      description: "Package: ATS Friendly CV ($129) + LinkedIn Optimization ($129) · 20% bundle discount applied (List $258)",
      unitPrice: 206,
      currency: "USD",
    },
    {
      id: "com-cv-cl-grad",
      name: "CV + Cover Letter (Under 2 years · Graduates)",
      category: "Full Packages",
      level: "Student / Graduate",
      description: "Package: ATS Friendly CV ($129) + Cover Letter Writing ($79) · 20% bundle discount applied (List $208)",
      unitPrice: 166,
      currency: "USD",
    },
    {
      id: "com-cl-linkedin-grad",
      name: "Cover Letter + LinkedIn (Under 2 years · Graduates)",
      category: "Full Packages",
      level: "Student / Graduate",
      description: "Package: Cover Letter Writing ($79) + LinkedIn Optimization ($129) · 20% bundle discount applied (List $208)",
      unitPrice: 166,
      currency: "USD",
    },

    // ==========================================
    // Individual Services
    // ==========================================
    // 10+ years
    {
      id: "com-cv-exec",
      name: "ATS Friendly CV (10+ years · Senior / Leadership)",
      category: "Individual Services",
      level: "Executive",
      description: "Executive Leadership ATS CV: Board, Director, VP, and C-Suite Strategic Career Narrative (10+ years experience)",
      unitPrice: 279,
      currency: "USD",
    },
    {
      id: "com-cl-exec",
      name: "Cover Letter Writing (10+ years · Senior / Leadership)",
      category: "Individual Services",
      level: "Executive",
      description: "Executive Pitch Letter / Letter of Interest for C-Level & Leadership roles (10+ years experience)",
      unitPrice: 159,
      currency: "USD",
    },
    {
      id: "com-linkedin-exec",
      name: "LinkedIn Optimization (10+ years · Senior / Leadership)",
      category: "Individual Services",
      level: "Executive",
      description: "Executive Authority LinkedIn Profile Overhaul for Senior Executives & Directors (10+ years experience)",
      unitPrice: 279,
      currency: "USD",
    },

    // 3 to 9 years
    {
      id: "com-cv-pro",
      name: "ATS Friendly CV (3 to 9 years · Professionals)",
      category: "Individual Services",
      level: "Professional",
      description: "Achievement-Led ATS CV Writing for Mid-Senior Professionals (3 to 9 years experience)",
      unitPrice: 189,
      currency: "USD",
    },
    {
      id: "com-cl-pro",
      name: "Cover Letter Writing (3 to 9 years · Professionals)",
      category: "Individual Services",
      level: "Professional",
      description: "Strategic Role-Specific Cover Letter Writing for Professionals (3 to 9 years experience)",
      unitPrice: 119,
      currency: "USD",
    },
    {
      id: "com-linkedin-pro",
      name: "LinkedIn Optimization (3 to 9 years · Professionals)",
      category: "Individual Services",
      level: "Professional",
      description: "Complete LinkedIn Profile Transformation & Recruiter Search Optimization (3 to 9 years experience)",
      unitPrice: 189,
      currency: "USD",
    },

    // Under 2 years
    {
      id: "com-cv-grad",
      name: "ATS Friendly CV (Under 2 years · Graduates)",
      category: "Individual Services",
      level: "Student / Graduate",
      description: "ATS Friendly CV Writing for Graduates and Early Career Professionals (< 2 years experience)",
      unitPrice: 129,
      currency: "USD",
    },
    {
      id: "com-cl-grad",
      name: "Cover Letter Writing (Under 2 years · Graduates)",
      category: "Individual Services",
      level: "Student / Graduate",
      description: "Tailored Cover Letter Writing for Early Career Vacancies (< 2 years experience)",
      unitPrice: 79,
      currency: "USD",
    },
    {
      id: "com-linkedin-grad",
      name: "LinkedIn Optimization (Under 2 years · Graduates)",
      category: "Individual Services",
      level: "Student / Graduate",
      description: "Graduate Entry LinkedIn Makeover & Keyword Optimization (< 2 years experience)",
      unitPrice: 129,
      currency: "USD",
    },

    // ==========================================
    // Turnaround Speed Add-ons (Fast & Ultra)
    // ==========================================
    {
      id: "com-turnaround-fast",
      name: "Fast Turnaround Surcharge (2 to 3 days)",
      category: "Consultation & Add-ons",
      description: "Expedited turnaround: Draft delivered within 2 to 3 days (+20% surcharge on package subtotal)",
      unitPrice: 49,
      currency: "USD",
    },
    {
      id: "com-turnaround-ultra",
      name: "Ultra Fast Turnaround Surcharge (Within 24 hours)",
      category: "Consultation & Add-ons",
      description: "VIP queue: Priority delivery within 24 hours (+50% surcharge on package subtotal)",
      unitPrice: 125,
      currency: "USD",
    },
  ];
}

/**
 * United Kingdom (GBP) Presets
 */
function getUnitedKingdomPresets(): InvoicePackagePreset[] {
  return [
    {
      id: "uk-full-exec",
      name: "Executive Career Suite (UK Market) · Signature",
      category: "Full Packages",
      tier: "Signature",
      level: "Executive",
      description: "Senior Executive UK Career Package: 2-Page British Standard Executive CV + LinkedIn Profile Rewrite + Executive Cover Letter",
      unitPrice: 395,
      currency: "GBP",
    },
    {
      id: "uk-full-pro",
      name: "Full Career Pack (Mid-Senior Professional)",
      category: "Full Packages",
      level: "Professional",
      description: "Full Career Pack: UK Standard ATS CV + LinkedIn Profile Optimization + Supporting Cover Letter",
      unitPrice: 225,
      currency: "GBP",
    },
    {
      id: "uk-full-ess-pro",
      name: "Full Career Pack (Professional) · Essential",
      category: "Full Packages",
      tier: "Essential",
      level: "Professional",
      description: "Essential UK Career Pack: Professional ATS CV + LinkedIn Makeover + Role Cover Letter",
      unitPrice: 139,
      currency: "GBP",
    },
    {
      id: "uk-cv-pro",
      name: "Professional UK ATS CV Writing",
      category: "Individual Services",
      level: "Professional",
      description: "UK Format CV Writing: Achievement-focused British market CV structured for UK recruiters and ATS filters",
      unitPrice: 59,
      currency: "GBP",
    },
    {
      id: "uk-cv-exec",
      name: "Executive UK CV Writing · Signature",
      category: "Individual Services",
      tier: "Signature",
      level: "Executive",
      description: "Executive Director / VP Level CV crafted to London & UK corporate executive recruiting standards",
      unitPrice: 195,
      currency: "GBP",
    },
    {
      id: "uk-linkedin-pro",
      name: "LinkedIn Profile Optimization (UK Market)",
      category: "Individual Services",
      level: "Professional",
      description: "LinkedIn Makeover for UK recruiters: Headline, About narrative and British industry keywords",
      unitPrice: 59,
      currency: "GBP",
    },
    {
      id: "uk-cover-letter",
      name: "UK Standard Supporting Statement / Cover Letter",
      category: "Individual Services",
      description: "Persuasive British business pitch letter customized to a specific vacancy or sector",
      unitPrice: 35,
      currency: "GBP",
    },
    {
      id: "uk-strategy-1h",
      name: "1-Hour UK Career Strategy & Interview Coaching",
      category: "Consultation & Add-ons",
      description: "Direct 1-on-1 strategy session on navigating the UK job market, sponsorships, and interview techniques",
      unitPrice: 85,
      currency: "GBP",
    },
    {
      id: "uk-express-24h",
      name: "VIP 24-Hour Express Turnaround",
      category: "Consultation & Add-ons",
      description: "Priority expedited delivery: First draft delivered within 24 hours",
      unitPrice: 55,
      currency: "GBP",
    },
  ];
}

export const MULTI_COUNTRY_PRICES: Record<
  string,
  Record<TierId, Record<ServiceId, Record<LevelId, number>>>
> = {
  lk: {
    essential: BASE_PRICES,
    signature: SIGNATURE_PRICES,
  },
  com: {
    essential: {
      cv: { "under-2": 129, "3-to-9": 189, "over-10": 279 },
      "cover-letter": { "under-2": 79, "3-to-9": 119, "over-10": 159 },
      linkedin: { "under-2": 129, "3-to-9": 189, "over-10": 279 },
      "foreign-cv": { "under-2": 129, "3-to-9": 189, "over-10": 279 },
      "cv-review": { "under-2": 49, "3-to-9": 79, "over-10": 99 },
      consultation: { "under-2": 129, "3-to-9": 189, "over-10": 279 },
    },
    signature: {
      cv: { "under-2": 129, "3-to-9": 189, "over-10": 279 },
      "cover-letter": { "under-2": 79, "3-to-9": 119, "over-10": 159 },
      linkedin: { "under-2": 129, "3-to-9": 189, "over-10": 279 },
      "foreign-cv": { "under-2": 129, "3-to-9": 189, "over-10": 279 },
      "cv-review": { "under-2": 49, "3-to-9": 79, "over-10": 99 },
      consultation: { "under-2": 129, "3-to-9": 189, "over-10": 279 },
    },
  },
  uk: {
    essential: {
      cv: { "under-2": 35, "3-to-9": 59, "over-10": 95 },
      linkedin: { "under-2": 35, "3-to-9": 59, "over-10": 85 },
      "cover-letter": { "under-2": 25, "3-to-9": 35, "over-10": 55 },
      "foreign-cv": { "under-2": 45, "3-to-9": 69, "over-10": 105 },
      "cv-review": { "under-2": 20, "3-to-9": 30, "over-10": 40 },
      consultation: { "under-2": 50, "3-to-9": 70, "over-10": 95 },
    },
    signature: {
      cv: { "under-2": 60, "3-to-9": 115, "over-10": 195 },
      linkedin: { "under-2": 60, "3-to-9": 105, "over-10": 155 },
      "cover-letter": { "under-2": 45, "3-to-9": 60, "over-10": 85 },
      "foreign-cv": { "under-2": 75, "3-to-9": 135, "over-10": 215 },
      "cv-review": { "under-2": 30, "3-to-9": 45, "over-10": 60 },
      consultation: { "under-2": 60, "3-to-9": 95, "over-10": 120 },
    },
  },
};

export function getCountryServicePrice(
  countryKey: string,
  tier: TierId,
  serviceId: ServiceId,
  levelId: LevelId
): number {
  const table = MULTI_COUNTRY_PRICES[countryKey] || MULTI_COUNTRY_PRICES.com;
  return table[tier]?.[serviceId]?.[levelId] ?? 0;
}

export function formatCountryAmount(amount: number, countryKey: string): string {
  const c = INVOICE_COUNTRIES.find((item) => item.key === countryKey) || INVOICE_COUNTRIES[0];
  if (c.currency === "LKR") return `LKR ${amount.toLocaleString("en-US")}`;
  if (c.currency === "USD") return `$${amount.toLocaleString("en-US")}`;
  if (c.currency === "GBP") return `£${amount.toLocaleString("en-US")}`;
  return `${c.currency} ${amount.toLocaleString("en-US")}`;
}
