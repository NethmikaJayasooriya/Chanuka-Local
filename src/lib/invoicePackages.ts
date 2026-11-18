import {
  BASE_PRICES,
  SIGNATURE_PRICES,
  formatLKR,
  services as lkServices,
  type LevelId,
  type ServiceId,
  type TierId,
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
  { key: "com", name: "Global / International", label: "Global / US", currency: "USD", symbol: "$", flag: "🌐", site: "com" },
  { key: "uk", name: "United Kingdom", label: "UK", currency: "GBP", symbol: "£", flag: "🇬🇧", site: "uk" },
  { key: "au", name: "Australia", label: "Australia", currency: "AUD", symbol: "A$", flag: "🇦🇺", site: "com" },
  { key: "eu", name: "Europe", label: "Europe", currency: "EUR", symbol: "€", flag: "🇪🇺", site: "com" },
  { key: "ae", name: "United Arab Emirates / Gulf", label: "UAE / Gulf", currency: "AED", symbol: "AED ", flag: "🇦🇪", site: "com" },
  { key: "ca", name: "Canada", label: "Canada", currency: "CAD", symbol: "C$", flag: "🇨🇦", site: "com" },
  { key: "sg", name: "Singapore", label: "Singapore", currency: "SGD", symbol: "S$", flag: "🇸🇬", site: "com" },
];

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
 * If country is Sri Lanka ('lk'), rates are strictly bound to official pricing.ts matrices.
 */
export function getInvoicePackagePresets(countryKey: string): InvoicePackagePreset[] {
  const country = INVOICE_COUNTRIES.find((c) => c.key === countryKey) || INVOICE_COUNTRIES[0];
  const curr = country.currency;

  if (countryKey === "lk") {
    return getSriLankaPresets();
  }

  if (countryKey === "uk") {
    return getUnitedKingdomPresets();
  }

  if (countryKey === "au") {
    return getAustraliaPresets();
  }

  if (countryKey === "eu") {
    return getEuropePresets();
  }

  if (countryKey === "ae") {
    return getGulfPresets();
  }

  if (countryKey === "ca") {
    return getCanadaPresets();
  }

  if (countryKey === "sg") {
    return getSingaporePresets();
  }

  // Default: Global (USD)
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
      BASE_PRICES.cv[lvl.id] + BASE_PRICES.linkedin[lvl.id] + BASE_PRICES["cover-letter"][lvl.id];
    presets.push({
      id: `lk-ess-complete-${lvl.id}`,
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
      SIGNATURE_PRICES.cv[lvl.id] + SIGNATURE_PRICES.linkedin[lvl.id] + SIGNATURE_PRICES["cover-letter"][lvl.id];
    presets.push({
      id: `lk-sig-complete-${lvl.id}`,
      name: `Full Career Pack (${lvl.label}) · Signature`,
      category: "Full Packages",
      tier: "Signature",
      level: lvl.label as any,
      description: `Full Career Pack (${lvl.label} · ${lvl.exp}): Personally Crafted by Chanuka Jeewantha (ATS CV + LinkedIn Optimization + Cover Letter + 30-Day Support)`,
      unitPrice: sigPrice,
      currency: "LKR",
    });
  });

  // 2. Bundles: CV + LinkedIn
  levels.forEach((lvl) => {
    const essPrice = BASE_PRICES.cv[lvl.id] + BASE_PRICES.linkedin[lvl.id];
    presets.push({
      id: `lk-ess-cv-li-${lvl.id}`,
      name: `CV + LinkedIn (${lvl.label}) · Essential`,
      category: "Full Packages",
      tier: "Essential",
      level: lvl.label as any,
      description: `CV + LinkedIn Bundle (${lvl.label}): Achievement-led ATS CV Writing + Complete LinkedIn Profile Optimization · Essential Tier`,
      unitPrice: essPrice,
      currency: "LKR",
    });

    const sigPrice = SIGNATURE_PRICES.cv[lvl.id] + SIGNATURE_PRICES.linkedin[lvl.id];
    presets.push({
      id: `lk-sig-cv-li-${lvl.id}`,
      name: `CV + LinkedIn (${lvl.label}) · Signature`,
      category: "Full Packages",
      tier: "Signature",
      level: lvl.label as any,
      description: `CV + LinkedIn Bundle (${lvl.label}): Personally Crafted by Chanuka Jeewantha with Industry Positioning and 30-Day Support`,
      unitPrice: sigPrice,
      currency: "LKR",
    });
  });

  // 3. Bundles: CV + Cover Letter
  levels.forEach((lvl) => {
    const essPrice = BASE_PRICES.cv[lvl.id] + BASE_PRICES["cover-letter"][lvl.id];
    presets.push({
      id: `lk-ess-cv-cl-${lvl.id}`,
      name: `CV + Cover Letter (${lvl.label}) · Essential`,
      category: "Full Packages",
      tier: "Essential",
      level: lvl.label as any,
      description: `CV + Cover Letter (${lvl.label}): Role-specific ATS CV Writing + Tailored Value-Pitch Cover Letter · Essential Tier`,
      unitPrice: essPrice,
      currency: "LKR",
    });
  });

  // 4. Individual Services
  const singleServices: Array<{ id: ServiceId; name: string; blurb: string }> = [
    { id: "cv", name: "ATS CV Writing", blurb: "Achievement-led ATS CV with modern recruiter layout" },
    { id: "linkedin", name: "LinkedIn Optimization", blurb: "Full profile makeover (headline, about, skills, search visibility)" },
    { id: "cover-letter", name: "Cover Letter Writing", blurb: "Role-specific persuasive pitch letter" },
    { id: "foreign-cv", name: "Foreign Job CV", blurb: "Country-targeted CV for Gulf, UK, Europe, Australia, Canada and remote roles" },
  ];

  levels.forEach((lvl) => {
    singleServices.forEach((svc) => {
      // Essential
      presets.push({
        id: `lk-ess-${svc.id}-${lvl.id}`,
        name: `${svc.name} (${lvl.label}) · Essential`,
        category: "Individual Services",
        tier: "Essential",
        level: lvl.label as any,
        description: `${svc.name} (${lvl.label} · ${lvl.exp}) - ${svc.blurb} · Essential Tier`,
        unitPrice: BASE_PRICES[svc.id][lvl.id],
        currency: "LKR",
      });

      // Signature
      presets.push({
        id: `lk-sig-${svc.id}-${lvl.id}`,
        name: `${svc.name} (${lvl.label}) · Signature`,
        category: "Individual Services",
        tier: "Signature",
        level: lvl.label as any,
        description: `${svc.name} (${lvl.label} · ${lvl.exp}) - Personally crafted by Chanuka Jeewantha · Signature Tier`,
        unitPrice: SIGNATURE_PRICES[svc.id][lvl.id],
        currency: "LKR",
      });
    });
  });

  // 5. Strategy Consultation & Add-ons
  levels.forEach((lvl) => {
    presets.push({
      id: `lk-consultation-${lvl.id}`,
      name: `1-Hour Strategy Consultation (${lvl.label})`,
      category: "Consultation & Add-ons",
      level: lvl.label as any,
      description: `1-Hour 1-on-1 Career Strategy & Interview Consultation session with Chanuka Jeewantha (${lvl.label})`,
      unitPrice: BASE_PRICES.consultation[lvl.id],
      currency: "LKR",
    });
  });

  presets.push({
    id: "lk-vip-24h",
    name: "VIP 24-Hour Express Turnaround",
    category: "Consultation & Add-ons",
    description: "VIP Priority Queueing: Final first draft delivery within 24 hours (+30% express turnaround)",
    unitPrice: 4755,
    currency: "LKR",
  });

  presets.push({
    id: "lk-priority-express",
    name: "Priority Express Turnaround (1–3 Days)",
    category: "Consultation & Add-ons",
    description: "Priority Queueing: Expedited draft delivery within 1 to 3 business days (+20%)",
    unitPrice: 3170,
    currency: "LKR",
  });

  return presets;
}

/**
 * Global (USD) Presets
 */
function getGlobalPresets(): InvoicePackagePreset[] {
  return [
    // Packages
    {
      id: "com-full-exec",
      name: "Full Career Suite (Executive Level) · Signature",
      category: "Full Packages",
      tier: "Signature",
      level: "Executive",
      description: "Executive Career Branding Suite: C-Level/Director ATS CV + Executive LinkedIn Profile Rewrite + Strategic Cover Letter · Personally Crafted with 30-Day Support",
      unitPrice: 495,
      currency: "USD",
    },
    {
      id: "com-full-pro",
      name: "Full Career Pack (Professional) · Signature",
      category: "Full Packages",
      tier: "Signature",
      level: "Professional",
      description: "Full Career Pack (Mid-Senior Professional): Targeted ATS CV + LinkedIn Profile Optimization + Custom Cover Letter",
      unitPrice: 320,
      currency: "USD",
    },
    {
      id: "com-full-ess-pro",
      name: "Full Career Pack (Professional) · Essential",
      category: "Full Packages",
      tier: "Essential",
      level: "Professional",
      description: "Full Career Pack (1–9 years experience): ATS Friendly CV + LinkedIn Makeover + Role-Specific Cover Letter",
      unitPrice: 175,
      currency: "USD",
    },
    {
      id: "com-full-grad",
      name: "Starter Career Pack (Student / Graduate) · Essential",
      category: "Full Packages",
      tier: "Essential",
      level: "Student / Graduate",
      description: "Graduate Entry Pack: Graduate ATS CV + LinkedIn Profile Starter + Entry Cover Letter",
      unitPrice: 110,
      currency: "USD",
    },
    {
      id: "com-cv-linkedin-pro",
      name: "CV + LinkedIn Optimization (Professional)",
      category: "Full Packages",
      level: "Professional",
      description: "Professional CV + LinkedIn Makeover: Dual applicant-ready documents for international recruiters",
      unitPrice: 145,
      currency: "USD",
    },

    // Individual Services
    {
      id: "com-cv-exec",
      name: "Executive CV Writing · Signature",
      category: "Individual Services",
      tier: "Signature",
      level: "Executive",
      description: "Executive Leadership CV Writing: Board/Director/VP Narrative crafted to international search standards",
      unitPrice: 245,
      currency: "USD",
    },
    {
      id: "com-cv-pro",
      name: "Professional ATS CV Writing",
      category: "Individual Services",
      level: "Professional",
      description: "International ATS CV Writing: Achievement-led structure targeted to US, Remote, and Multinational roles",
      unitPrice: 75,
      currency: "USD",
    },
    {
      id: "com-cv-grad",
      name: "Graduate Entry CV Writing",
      category: "Individual Services",
      level: "Student / Graduate",
      description: "Early Career ATS CV Writing: Education, technical projects, internships and value proposition",
      unitPrice: 45,
      currency: "USD",
    },
    {
      id: "com-linkedin-exec",
      name: "Executive LinkedIn Profile Optimization",
      category: "Individual Services",
      level: "Executive",
      description: "Full Executive LinkedIn Profile Overhaul: Headline, About story, Experience highlights & recruiter SEO indexing",
      unitPrice: 135,
      currency: "USD",
    },
    {
      id: "com-linkedin-pro",
      name: "Professional LinkedIn Optimization",
      category: "Individual Services",
      level: "Professional",
      description: "Complete LinkedIn Profile Transformation for keyword discoverability and headhunter outreach",
      unitPrice: 75,
      currency: "USD",
    },
    {
      id: "com-cover-letter",
      name: "Targeted Strategic Cover Letter",
      category: "Individual Services",
      description: "Tailored executive pitch letter addressing key requirements of a specific target opportunity",
      unitPrice: 55,
      currency: "USD",
    },

    // Strategy & Add-ons
    {
      id: "com-strategy-1h",
      name: "1-Hour Executive Career Strategy Session",
      category: "Consultation & Add-ons",
      description: "1-on-1 Strategy & Interview Consultation: Positioning review, salary negotiation prep, and target role roadmap",
      unitPrice: 120,
      currency: "USD",
    },
    {
      id: "com-express-24h",
      name: "VIP 24-Hour Express Turnaround",
      category: "Consultation & Add-ons",
      description: "Guaranteed initial deliverable draft within 24 hours of onboarding confirmation",
      unitPrice: 75,
      currency: "USD",
    },
    {
      id: "com-extra-revision",
      name: "Additional Polish & Revision Round",
      category: "Consultation & Add-ons",
      description: "Dedicated extra round of document refinements and targeted vacancy adjustments",
      unitPrice: 35,
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

/**
 * Australia (AUD) Presets
 */
function getAustraliaPresets(): InvoicePackagePreset[] {
  return [
    {
      id: "au-full-exec",
      name: "Executive Career Suite (Australia) · Signature",
      category: "Full Packages",
      tier: "Signature",
      level: "Executive",
      description: "Executive Australian Resume (3-Page Standard) + LinkedIn Optimization + Targeted Cover Letter",
      unitPrice: 720,
      currency: "AUD",
    },
    {
      id: "au-full-pro",
      name: "Full Career Pack (Professional) · Australia",
      category: "Full Packages",
      level: "Professional",
      description: "Australian Format Resume + LinkedIn Profile Transformation + Key Selection Criteria Cover Letter",
      unitPrice: 380,
      currency: "AUD",
    },
    {
      id: "au-cv-pro",
      name: "Professional Australian Resume Writing",
      category: "Individual Services",
      level: "Professional",
      description: "Australian Format Resume: Aligned with local recruiter norms, competency models and ATS tools",
      unitPrice: 125,
      currency: "AUD",
    },
    {
      id: "au-linkedin-pro",
      name: "LinkedIn Profile Optimization (ANZ Market)",
      category: "Individual Services",
      level: "Professional",
      description: "Australia & New Zealand targeted LinkedIn profile overhaul for headhunters and SEEK recruiters",
      unitPrice: 115,
      currency: "AUD",
    },
    {
      id: "au-cover-letter",
      name: "Targeted Australian Cover Letter / Selection Criteria",
      category: "Individual Services",
      description: "Australian employer pitch letter highlighting core competencies and proven value delivery",
      unitPrice: 75,
      currency: "AUD",
    },
  ];
}

/**
 * Europe (EUR) Presets
 */
function getEuropePresets(): InvoicePackagePreset[] {
  return [
    {
      id: "eu-full-exec",
      name: "Executive European Career Suite · Signature",
      category: "Full Packages",
      tier: "Signature",
      level: "Executive",
      description: "Executive International CV (Europass / Multinational format) + LinkedIn Profile + Executive Pitch Letter",
      unitPrice: 450,
      currency: "EUR",
    },
    {
      id: "eu-full-pro",
      name: "Full Career Pack (Professional) · Europe",
      category: "Full Packages",
      level: "Professional",
      description: "European Format English CV + LinkedIn Profile Optimization + Tailored Motivation Letter",
      unitPrice: 245,
      currency: "EUR",
    },
    {
      id: "eu-cv-pro",
      name: "Professional European Format CV Writing",
      category: "Individual Services",
      level: "Professional",
      description: "Multinational EU English CV written for corporate and international agencies across Europe",
      unitPrice: 69,
      currency: "EUR",
    },
    {
      id: "eu-linkedin-pro",
      name: "LinkedIn Profile Optimization (European Market)",
      category: "Individual Services",
      level: "Professional",
      description: "Optimized for corporate European recruiters, German/Dutch tech hubs and remote EU roles",
      unitPrice: 69,
      currency: "EUR",
    },
    {
      id: "eu-cover-letter",
      name: "Motivation Letter / Application Statement",
      category: "Individual Services",
      description: "European corporate motivation letter tailored to specific position specifications",
      unitPrice: 45,
      currency: "EUR",
    },
  ];
}

/**
 * UAE / Gulf (AED) Presets
 */
function getGulfPresets(): InvoicePackagePreset[] {
  return [
    {
      id: "ae-full-exec",
      name: "Gulf Executive Career Package · Signature",
      category: "Full Packages",
      tier: "Signature",
      level: "Executive",
      description: "Dubai & Gulf Executive CV (UAE/Saudi/Qatar format) + LinkedIn Optimization + Executive Cover Letter",
      unitPrice: 1820,
      currency: "AED",
    },
    {
      id: "ae-full-pro",
      name: "Gulf Professional Career Pack",
      category: "Full Packages",
      level: "Professional",
      description: "Gulf Format ATS CV (UAE / Saudi / Qatar) + LinkedIn Profile Makeover + Regional Cover Letter",
      unitPrice: 975,
      currency: "AED",
    },
    {
      id: "ae-cv-pro",
      name: "Gulf Targeted Professional CV (UAE / KSA / Qatar)",
      category: "Individual Services",
      level: "Professional",
      description: "Gulf Region ATS CV: Tailored with regional positioning, visa status clarity, and industry metrics",
      unitPrice: 325,
      currency: "AED",
    },
    {
      id: "ae-linkedin-pro",
      name: "LinkedIn Optimization (Gulf & Middle East)",
      category: "Individual Services",
      level: "Professional",
      description: "Targeted to Dubai and Gulf recruitment agencies, executive search partners, and HR directors",
      unitPrice: 295,
      currency: "AED",
    },
    {
      id: "ae-cover-letter",
      name: "Gulf Market Strategic Cover Letter",
      category: "Individual Services",
      description: "Gulf employer application letter highlighting relocation readiness, leadership, and regional impact",
      unitPrice: 185,
      currency: "AED",
    },
  ];
}

/**
 * Canada (CAD) Presets
 */
function getCanadaPresets(): InvoicePackagePreset[] {
  return [
    {
      id: "ca-full-exec",
      name: "Executive Canadian Career Suite · Signature",
      category: "Full Packages",
      tier: "Signature",
      level: "Executive",
      description: "Executive Canadian Resume (2-Page ATS Standard) + LinkedIn Optimization + Strategic Cover Letter",
      unitPrice: 670,
      currency: "CAD",
    },
    {
      id: "ca-full-pro",
      name: "Full Career Pack (Professional) · Canada",
      category: "Full Packages",
      level: "Professional",
      description: "Canadian Format Resume + LinkedIn Profile Transformation + Role-Specific Cover Letter",
      unitPrice: 365,
      currency: "CAD",
    },
    {
      id: "ca-cv-pro",
      name: "Canadian Format Professional Resume",
      category: "Individual Services",
      level: "Professional",
      description: "Canadian Standard Resume: Formatted strictly to Canadian anti-discrimination and ATS standards",
      unitPrice: 110,
      currency: "CAD",
    },
    {
      id: "ca-linkedin-pro",
      name: "LinkedIn Profile Optimization (Canadian Market)",
      category: "Individual Services",
      level: "Professional",
      description: "Canadian recruiter keyword optimization, skills endorsement structure, and personal branding",
      unitPrice: 99,
      currency: "CAD",
    },
    {
      id: "ca-cover-letter",
      name: "Canadian Format Cover Letter",
      category: "Individual Services",
      description: "Role-specific Canadian business pitch letter emphasizing local Canadian equivalence and value",
      unitPrice: 65,
      currency: "CAD",
    },
  ];
}

/**
 * Singapore (SGD) Presets
 */
function getSingaporePresets(): InvoicePackagePreset[] {
  return [
    {
      id: "sg-full-exec",
      name: "Executive Career Suite (Singapore / APAC) · Signature",
      category: "Full Packages",
      tier: "Signature",
      level: "Executive",
      description: "Singapore & APAC Regional Director CV + Executive LinkedIn Rewrite + Executive Cover Letter",
      unitPrice: 650,
      currency: "SGD",
    },
    {
      id: "sg-full-pro",
      name: "Full Career Pack (Singapore / APAC)",
      category: "Full Packages",
      level: "Professional",
      description: "Singapore Standard ATS CV + LinkedIn Profile Optimization + Corporate Cover Letter",
      unitPrice: 355,
      currency: "SGD",
    },
    {
      id: "sg-cv-pro",
      name: "Professional Singapore ATS CV Writing",
      category: "Individual Services",
      level: "Professional",
      description: "Singapore / Asia-Pacific corporate CV structured for multinational hubs and regional headquarters",
      unitPrice: 105,
      currency: "SGD",
    },
    {
      id: "sg-linkedin-pro",
      name: "LinkedIn Profile Optimization (APAC Hub)",
      category: "Individual Services",
      level: "Professional",
      description: "Complete LinkedIn optimization targeted to Singapore, Hong Kong and regional APAC talent hunters",
      unitPrice: 95,
      currency: "SGD",
    },
    {
      id: "sg-cover-letter",
      name: "Targeted Singapore Corporate Cover Letter",
      category: "Individual Services",
      description: "Concise executive pitch letter tailored to Singapore hiring practices and business norms",
      unitPrice: 65,
      currency: "SGD",
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
      cv: { "under-2": 45, "3-to-9": 75, "over-10": 125 },
      linkedin: { "under-2": 45, "3-to-9": 75, "over-10": 110 },
      "cover-letter": { "under-2": 35, "3-to-9": 45, "over-10": 65 },
      "foreign-cv": { "under-2": 55, "3-to-9": 85, "over-10": 135 },
      "cv-review": { "under-2": 25, "3-to-9": 35, "over-10": 45 },
      consultation: { "under-2": 60, "3-to-9": 90, "over-10": 120 },
    },
    signature: {
      cv: { "under-2": 75, "3-to-9": 145, "over-10": 245 },
      linkedin: { "under-2": 75, "3-to-9": 135, "over-10": 195 },
      "cover-letter": { "under-2": 55, "3-to-9": 75, "over-10": 110 },
      "foreign-cv": { "under-2": 95, "3-to-9": 165, "over-10": 265 },
      "cv-review": { "under-2": 35, "3-to-9": 55, "over-10": 75 },
      consultation: { "under-2": 75, "3-to-9": 120, "over-10": 150 },
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
  au: {
    essential: {
      cv: { "under-2": 65, "3-to-9": 115, "over-10": 185 },
      linkedin: { "under-2": 65, "3-to-9": 115, "over-10": 165 },
      "cover-letter": { "under-2": 45, "3-to-9": 65, "over-10": 95 },
      "foreign-cv": { "under-2": 75, "3-to-9": 135, "over-10": 195 },
      "cv-review": { "under-2": 35, "3-to-9": 55, "over-10": 75 },
      consultation: { "under-2": 85, "3-to-9": 140, "over-10": 180 },
    },
    signature: {
      cv: { "under-2": 110, "3-to-9": 220, "over-10": 360 },
      linkedin: { "under-2": 110, "3-to-9": 195, "over-10": 295 },
      "cover-letter": { "under-2": 85, "3-to-9": 115, "over-10": 165 },
      "foreign-cv": { "under-2": 145, "3-to-9": 245, "over-10": 395 },
      "cv-review": { "under-2": 50, "3-to-9": 75, "over-10": 110 },
      consultation: { "under-2": 110, "3-to-9": 180, "over-10": 225 },
    },
  },
  eu: {
    essential: {
      cv: { "under-2": 40, "3-to-9": 69, "over-10": 115 },
      linkedin: { "under-2": 40, "3-to-9": 69, "over-10": 99 },
      "cover-letter": { "under-2": 30, "3-to-9": 39, "over-10": 59 },
      "foreign-cv": { "under-2": 50, "3-to-9": 79, "over-10": 125 },
      "cv-review": { "under-2": 25, "3-to-9": 35, "over-10": 45 },
      consultation: { "under-2": 55, "3-to-9": 80, "over-10": 110 },
    },
    signature: {
      cv: { "under-2": 70, "3-to-9": 135, "over-10": 225 },
      linkedin: { "under-2": 70, "3-to-9": 125, "over-10": 180 },
      "cover-letter": { "under-2": 50, "3-to-9": 70, "over-10": 99 },
      "foreign-cv": { "under-2": 85, "3-to-9": 155, "over-10": 245 },
      "cv-review": { "under-2": 35, "3-to-9": 50, "over-10": 70 },
      consultation: { "under-2": 70, "3-to-9": 110, "over-10": 140 },
    },
  },
  ae: {
    essential: {
      cv: { "under-2": 165, "3-to-9": 275, "over-10": 460 },
      linkedin: { "under-2": 165, "3-to-9": 275, "over-10": 400 },
      "cover-letter": { "under-2": 125, "3-to-9": 165, "over-10": 240 },
      "foreign-cv": { "under-2": 195, "3-to-9": 310, "over-10": 495 },
      "cv-review": { "under-2": 95, "3-to-9": 135, "over-10": 185 },
      consultation: { "under-2": 220, "3-to-9": 330, "over-10": 440 },
    },
    signature: {
      cv: { "under-2": 275, "3-to-9": 535, "over-10": 895 },
      linkedin: { "under-2": 275, "3-to-9": 495, "over-10": 715 },
      "cover-letter": { "under-2": 200, "3-to-9": 275, "over-10": 405 },
      "foreign-cv": { "under-2": 350, "3-to-9": 605, "over-10": 975 },
      "cv-review": { "under-2": 135, "3-to-9": 195, "over-10": 265 },
      consultation: { "under-2": 275, "3-to-9": 440, "over-10": 550 },
    },
  },
  ca: {
    essential: {
      cv: { "under-2": 60, "3-to-9": 105, "over-10": 170 },
      linkedin: { "under-2": 60, "3-to-9": 105, "over-10": 150 },
      "cover-letter": { "under-2": 45, "3-to-9": 60, "over-10": 90 },
      "foreign-cv": { "under-2": 70, "3-to-9": 115, "over-10": 180 },
      "cv-review": { "under-2": 35, "3-to-9": 50, "over-10": 65 },
      consultation: { "under-2": 80, "3-to-9": 125, "over-10": 160 },
    },
    signature: {
      cv: { "under-2": 100, "3-to-9": 195, "over-10": 330 },
      linkedin: { "under-2": 100, "3-to-9": 180, "over-10": 260 },
      "cover-letter": { "under-2": 75, "3-to-9": 100, "over-10": 150 },
      "foreign-cv": { "under-2": 130, "3-to-9": 220, "over-10": 355 },
      "cv-review": { "under-2": 45, "3-to-9": 70, "over-10": 95 },
      consultation: { "under-2": 100, "3-to-9": 160, "over-10": 200 },
    },
  },
  sg: {
    essential: {
      cv: { "under-2": 60, "3-to-9": 100, "over-10": 165 },
      linkedin: { "under-2": 60, "3-to-9": 100, "over-10": 145 },
      "cover-letter": { "under-2": 45, "3-to-9": 60, "over-10": 85 },
      "foreign-cv": { "under-2": 70, "3-to-9": 115, "over-10": 175 },
      "cv-review": { "under-2": 35, "3-to-9": 50, "over-10": 65 },
      consultation: { "under-2": 80, "3-to-9": 120, "over-10": 160 },
    },
    signature: {
      cv: { "under-2": 100, "3-to-9": 190, "over-10": 320 },
      linkedin: { "under-2": 100, "3-to-9": 175, "over-10": 255 },
      "cover-letter": { "under-2": 75, "3-to-9": 100, "over-10": 145 },
      "foreign-cv": { "under-2": 130, "3-to-9": 215, "over-10": 345 },
      "cv-review": { "under-2": 45, "3-to-9": 70, "over-10": 95 },
      consultation: { "under-2": 100, "3-to-9": 160, "over-10": 200 },
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
  if (c.currency === "EUR") return `€${amount.toLocaleString("en-US")}`;
  if (c.currency === "AUD") return `A$${amount.toLocaleString("en-US")}`;
  if (c.currency === "CAD") return `C$${amount.toLocaleString("en-US")}`;
  if (c.currency === "AED") return `AED ${amount.toLocaleString("en-US")}`;
  if (c.currency === "SGD") return `S$${amount.toLocaleString("en-US")}`;
  return `${c.currency} ${amount.toLocaleString("en-US")}`;
}
