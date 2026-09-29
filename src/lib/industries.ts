/**
 * INDUSTRY ENTITIES -> /industries/{slug}
 *
 * Same rule as job roles: an industry gets a page only when there is
 * genuinely industry-specific guidance to put on it.
 */

export type Industry = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  overview: string;
  careerPaths: string[];
  employersLookFor: string[];
  positioning: string;
  competencies: string[];
  commonMistakes: string[];
  relatedRoles: string[];
  /** AEO: answer-first summary, 40-70 words. */
  quickAnswer?: string;
  /** AEO: question-led FAQs, answer-first. */
  faqs?: Array<{ q: string; a: string }>;
  /** ISO date of last substantive review. */
  updated?: string;
};

const baseIndustries: Industry[] = [
  {
    slug: "information-technology",
    name: "Information Technology",
    metaTitle: "IT CV Writing Guidance",
    metaDescription:
      "How to position a CV for information technology roles: stack clarity, scope, delivery evidence and the mistakes that get technical CVs filtered out.",
    lead: "IT hiring is filtered by stack before it is judged by ability. A CV that buries the stack loses before anyone forms an opinion of the candidate.",
    overview:
      "IT covers engineering, infrastructure, data, security and support, and each has a different screening pattern. What they share is a parsing step: the tools and platforms are matched first, and only surviving CVs get read by a human.",
    careerPaths: [
      "Engineering: developer to senior to lead or architect",
      "Infrastructure: systems administration to cloud or platform engineering",
      "Data: analyst to engineer or scientist",
      "Security: analyst to engineer to security architect",
      "Support: service desk to systems specialist",
    ],
    employersLookFor: [
      "A clearly identifiable current stack",
      "Scale: users, traffic, data volume, team size",
      "Production ownership, not only build work",
      "Evidence of shipping, with dates attached",
      "Certifications where the market values them, particularly in cloud and security",
    ],
    positioning:
      "Put the stack where a parser and a human both find it in the first screen, then spend the CV proving scope and judgement. In IT, the difference between candidates is rarely the tools listed and almost always what was done with them.",
    competencies: [
      "System design and architecture",
      "Cloud platforms",
      "Automation and CI/CD",
      "Security practice",
      "Incident response",
      "Documentation and knowledge sharing",
    ],
    commonMistakes: [
      "Keyword-stuffing every technology ever encountered",
      "No indication of scale, so seniority cannot be judged",
      "Certifications listed without the experience to support them",
      "Describing team achievements without your part in them",
    ],
    relatedRoles: ["software-engineer", "data-analyst", "project-manager"],
  },
  {
    slug: "banking",
    name: "Banking and Financial Services",
    metaTitle: "Banking CV Writing Guidance",
    metaDescription:
      "How to position a CV for banking and financial services roles: regulatory exposure, product knowledge, risk awareness and common CV mistakes.",
    lead: "Banking CVs are read for risk before they are read for talent. Regulatory exposure and product knowledge decide whether your experience transfers.",
    overview:
      "Banking covers retail, corporate, investment, risk, compliance and operations. Hiring is conservative and specific: employers want to see the products you have handled, the regulations you have worked under, and evidence that you understand why controls exist.",
    careerPaths: [
      "Relationship and corporate banking",
      "Credit and risk analysis",
      "Compliance and financial crime",
      "Treasury and markets",
      "Operations and settlements",
    ],
    employersLookFor: [
      "Products handled, named specifically",
      "Regulatory frameworks worked under, which vary sharply by market",
      "Portfolio or book size where relevant",
      "Risk and control awareness demonstrated, not claimed",
      "Qualifications the market expects, such as ACCA, CFA or local licensing",
    ],
    positioning:
      "Name the products, the book size and the regulatory environment early. For a cross-border move, state explicitly which frameworks you have worked under, because an employer is assessing how much of your experience carries over and how much is re-training.",
    competencies: [
      "Credit assessment",
      "Regulatory reporting",
      "AML and KYC",
      "Financial analysis",
      "Client relationship management",
      "Risk and control frameworks",
    ],
    commonMistakes: [
      "Vague product descriptions where specificity is the whole signal",
      "No portfolio size or transaction volume",
      "Ignoring regulatory context when applying to another market",
      "Compliance experience described as administrative rather than as risk work",
    ],
    relatedRoles: ["accountant", "data-analyst", "business-analyst"],
  },
  {
    slug: "engineering",
    name: "Engineering and Construction",
    metaTitle: "Engineering CV Writing Guidance",
    metaDescription:
      "How to position an engineering CV for international roles: project types, codes and standards, professional registration and common mistakes.",
    lead: "Engineering CVs travel badly when the standards are left out. The codes you have worked to are the first thing an overseas employer checks.",
    overview:
      "Engineering and construction hiring is project-led. Employers assess the type and value of projects, the standards applied, and whether professional registration transfers to their market. Generic engineering CVs fail on all three.",
    careerPaths: [
      "Design engineering to senior design to chartered engineer",
      "Site engineering to site management to project management",
      "Quantity surveying and contract administration",
      "Planning and programme control",
    ],
    employersLookFor: [
      "Project list with type, value and your role",
      "Design codes and standards applied",
      "Professional registration status and route",
      "Software depth in the tools their market uses",
      "Safety record and compliance responsibility",
    ],
    positioning:
      "Structure the CV around projects rather than employers where the projects are the stronger asset. Name the standards on every relevant project, and be explicit about your own technical decisions rather than the team's output.",
    competencies: [
      "Design and analysis",
      "Codes and standards application",
      "Site supervision",
      "Contract administration",
      "Quality and safety management",
      "Cost and quantity control",
    ],
    commonMistakes: [
      "No project values, so scale is invisible",
      "Standards omitted, which blocks international transfer",
      "Registration status unclear",
      "Site and design experience blended into one indistinct block",
    ],
    relatedRoles: ["civil-engineer", "project-manager"],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    metaTitle: "Healthcare CV Writing Guidance",
    metaDescription:
      "How to position a healthcare CV for international roles: registration, clinical settings, specialisms, and the licensing details employers check first.",
    lead: "In healthcare, registration and licensing are checked before anything else. A brilliant clinical CV with unclear registration status stalls at the first gate.",
    overview:
      "Healthcare hiring across borders is dominated by licensing. Employers need to know your registration status in their jurisdiction, the settings you have worked in, and the patient populations you are experienced with, and they need it stated plainly rather than inferred.",
    careerPaths: [
      "Nursing: staff nurse to senior to specialist or management",
      "Allied health and therapy specialisms",
      "Clinical support and technical roles",
      "Healthcare administration and operations",
    ],
    employersLookFor: [
      "Registration status in the target country, including in-progress applications",
      "Clinical settings: ward type, unit, acuity level",
      "Specialisms and patient populations",
      "Clinical hours and caseload where relevant",
      "Mandatory training and certifications kept current",
    ],
    positioning:
      "Put registration status in the first three lines, including which body and what stage. Describe settings in terms the target market recognises, since ward and unit naming differs sharply between countries, and give volume where it indicates capability.",
    competencies: [
      "Clinical assessment and care planning",
      "Patient safety and infection control",
      "Documentation and clinical records",
      "Multidisciplinary team working",
      "Specialist clinical skills",
      "Supervision and mentoring",
    ],
    commonMistakes: [
      "Leaving registration status ambiguous",
      "Using local ward terminology an overseas employer will not recognise",
      "No indication of acuity or caseload",
      "Omitting currency of mandatory training",
    ],
    relatedRoles: [],
  },
  {
    slug: "hospitality",
    name: "Hospitality and Tourism",
    metaTitle: "Hospitality CV Writing Guidance",
    metaDescription:
      "How to position a hospitality CV for international roles: property scale, brand standards, languages, guest metrics and common mistakes.",
    lead: "Hospitality employers read for scale and standards: the size of the property, the brand you operated under, and the guest numbers behind your claims.",
    overview:
      "Hospitality hiring is strongly international, and CVs move between markets constantly. What travels is scale and brand: employers use property size, star rating and brand standards as a shorthand for what you are used to.",
    careerPaths: [
      "Food and beverage operations to management",
      "Front office to rooms division management",
      "Housekeeping to executive housekeeping",
      "Events and conference operations",
      "Property and general management",
    ],
    employersLookFor: [
      "Property scale: rooms, covers, team size, star rating",
      "Brand standards operated under",
      "Guest satisfaction metrics and review scores",
      "Revenue or cost responsibility",
      "Languages spoken, which are a direct commercial asset here",
    ],
    positioning:
      "Give the numbers early: rooms, covers, team size and the brand. Then show commercial impact, because hospitality management is judged on revenue, cost and guest scores rather than on duties performed.",
    competencies: [
      "Guest experience management",
      "Team leadership and rostering",
      "Revenue and cost control",
      "Brand standard compliance",
      "Health, safety and hygiene",
      "Multilingual guest service",
    ],
    commonMistakes: [
      "No property size or team size anywhere",
      "Duties listed instead of guest or revenue outcomes",
      "Languages buried at the bottom when they are a major asset",
      "No brand names, which are the industry's main shorthand",
    ],
    relatedRoles: [],
  },
];

import { industriesA } from "@/lib/content/industries-a";
import { industriesB } from "@/lib/content/industries-b";
import { aeoIndustries } from "@/lib/content/aeo-retrofit";

export const industries: Industry[] = [
  ...baseIndustries.map((i) => ({ ...aeoIndustries[i.slug], ...i })),
  ...industriesA,
  ...industriesB,
];

export function getIndustry(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
