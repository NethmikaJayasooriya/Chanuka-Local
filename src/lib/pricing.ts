export type CareerLevel = "fresh" | "mid" | "senior" | "foreign";

export interface PackageFeature {
  text: string;
  highlight?: boolean;
}

export interface PricingTier {
  id: CareerLevel;
  badge: string;
  title: string;
  experience: string;
  targetRole: string;
  popular?: boolean;
  priceLKR: number;
  originalPriceLKR: number;
  turnaround: string;
  features: PackageFeature[];
  individualServices: {
    cvPrice: number;
    linkedinPrice: number;
    coverLetterPrice: number;
  };
  whatsappText: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "fresh",
    badge: "Most Affordable",
    title: "Starter Career Pack",
    experience: "Students & Fresh Graduates (< 1 Year Exp)",
    targetRole: "Internships, Trainee Roles & Entry-Level Positions in Sri Lanka",
    priceLKR: 8950,
    originalPriceLKR: 10850,
    turnaround: "48 - 72 Hours (24h Express Available)",
    features: [
      { text: "100% ATS-Compliant 1-Page High Impact CV", highlight: true },
      { text: "Academic & Project Achievement Translation" },
      { text: "Optimized Keyword Indexing for Local Job Portals" },
      { text: "Editable Word (.docx) & Clean PDF Versions" },
      { text: "Cover Letter Tailored for Graduate Vacancies" },
      { text: "Free 14-Day Revision Period" },
    ],
    individualServices: {
      cvPrice: 3950,
      linkedinPrice: 3950,
      coverLetterPrice: 2950,
    },
    whatsappText: "Hi Chanuka, I would like to order the Fresh Graduate Starter Package (LKR 8,950). Please guide me through the next steps.",
  },
  {
    id: "mid",
    badge: "Most Popular",
    popular: true,
    title: "Professional Accelerator",
    experience: "Mid-Level Professionals (1 – 8 Years Exp)",
    targetRole: "Executive, Senior Executive & Assistant Manager Roles",
    priceLKR: 17500,
    originalPriceLKR: 21500,
    turnaround: "48 - 72 Hours (24h Express Available)",
    features: [
      { text: "Complete ATS-Optimized 2-Page Executive CV", highlight: true },
      { text: "Metric-Driven Accomplishment Bullet Points (ROI, % Growth)" },
      { text: "Complete LinkedIn Profile Transformation (Headline, About, Skills)", highlight: true },
      { text: "Targeted Strategic Cover Letter for Specific Industry" },
      { text: "Editable Word (.docx) & Recruiter-Ready PDF" },
      { text: "Direct 1-on-1 Guidance via WhatsApp" },
      { text: "Free 30-Day Revisions Support" },
    ],
    individualServices: {
      cvPrice: 8500,
      linkedinPrice: 8500,
      coverLetterPrice: 4500,
    },
    whatsappText: "Hi Chanuka, I want to book the Mid-Level Professional Accelerator Package (LKR 17,500). How do we get started?",
  },
  {
    id: "senior",
    badge: "Executive Class",
    title: "Leadership & Executive Suite",
    experience: "Senior Managers, Heads of Dept & C-Suite (8+ Years)",
    targetRole: "Director, GM, VP & Board-Level Appointments",
    priceLKR: 28500,
    originalPriceLKR: 35000,
    turnaround: "3 - 4 Working Days (Priority Handling)",
    features: [
      { text: "Comprehensive Executive Resume & Leadership Narrative", highlight: true },
      { text: "Boardroom-Ready Executive Summary & Core Competencies" },
      { text: "High-Authority LinkedIn Brand Overhaul for Headhunters", highlight: true },
      { text: "Executive Value Proposition & Strategic Pitch Cover Letter" },
      { text: "ATS Keyword Mastery + Human Recruiter Readability" },
      { text: "30-Minute 1-on-1 Strategic Career Consultation with Chanuka", highlight: true },
      { text: "Unlimited Revisions for 45 Days" },
    ],
    individualServices: {
      cvPrice: 14500,
      linkedinPrice: 14500,
      coverLetterPrice: 7500,
    },
    whatsappText: "Hi Chanuka, I am interested in the Leadership & Executive Suite (LKR 28,500). Please share details for executive onboarding.",
  },
  {
    id: "foreign",
    badge: "Global Migration",
    title: "International Job & Relocation Pack",
    experience: "Professionals targeting UAE, UK, Australia, EU & Remotes",
    targetRole: "Overseas Relocation, Gulf Jobs, Skilled PR Visas & Remote USD Roles",
    priceLKR: 24500,
    originalPriceLKR: 29500,
    turnaround: "48 - 72 Hours (Express Available)",
    features: [
      { text: "Country-Specific CV Formatting (Gulf/Middle East, UK, Aus, EU)", highlight: true },
      { text: "Western ATS Algorithms Alignment (Workday, Taleo, Greenhouse)" },
      { text: "International Relocation & Remote Work Readiness Positioning" },
      { text: "Global LinkedIn Search Optimization for International Recruiters", highlight: true },
      { text: "Visa & Relocation-Sensitive Cover Letter" },
      { text: "Guidance on Target Country Job Portals & Application Strategy" },
      { text: "Free 30-Day Post-Delivery Revisions" },
    ],
    individualServices: {
      cvPrice: 13500,
      linkedinPrice: 11500,
      coverLetterPrice: 5500,
    },
    whatsappText: "Hi Chanuka, I am targeting overseas/foreign jobs and want the International Job & Relocation Package (LKR 24,500).",
  },
];

export interface AddOnService {
  id: string;
  name: string;
  priceLKR: number;
  description: string;
  badge?: string;
}

export const ADD_ONS: AddOnService[] = [
  {
    id: "audit",
    name: "Express 20-Point CV Review & ATS Audit",
    priceLKR: 1490,
    description: "Detailed video or voice feedback highlighting ATS flaws, formatting errors, and missing keywords in your current CV within 24 hours.",
    badge: "Fastest Entry",
  },
  {
    id: "express24",
    name: "VIP 24-Hour Express Delivery",
    priceLKR: 3500,
    description: "Jump to the top of the writing queue and receive your draft within 24 business hours.",
    badge: "Urgent Deadline",
  },
  {
    id: "interview",
    name: "1-on-1 Mock Interview & Career Coaching Session",
    priceLKR: 7500,
    description: "45-minute live mock interview with Chanuka covering behavioral questions, salary negotiation, and elevator pitch.",
  },
  {
    id: "portfolio-web",
    name: "Personal Brand One-Page Portfolio Website",
    priceLKR: 29000,
    description: "Custom, ultra-fast personal website showcasing your executive achievements, publications, and recommendations.",
    badge: "Premium Tech",
  },
];

export function formatLKR(amount: number): string {
  return "LKR " + amount.toLocaleString("en-LK");
}
