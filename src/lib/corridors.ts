/**
 * MIGRATION CORRIDOR ENTITIES
 * ------------------------------------------------------------------
 * Each entry generates one page at /international-job-seekers/{slug}
 * through the shared template. A corridor page is about the CV
 * conventions of one destination market: what changes, what employers
 * there expect, and the mistakes that get an overseas applicant
 * filtered before anyone reads the experience.
 *
 * The same architecture rule applies as everywhere else: no corridor
 * goes up until there is genuinely market-specific content for every
 * field. A page that only swaps a country name into a generic
 * sentence is exactly the thin page the plan rules out.
 *
 * Nothing here is immigration or legal advice. Visa notes are
 * orientation only, and every corridor page says so.
 */

export type Corridor = {
  slug: string;
  /** Destination country, full name. */
  name: string;
  /** Short market adjective used in headings, e.g. "UK". */
  market: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  overview: string;
  /** The format facts: length, photo, personal details, spelling. */
  cvConventions: Array<{ label: string; value: string }>;
  /** What an applicant from another market has to change. */
  whatChanges: string[];
  /** Sectors actively hiring international candidates. */
  keySectors: string[];
  /** High-level work-authorisation orientation. Not legal advice. */
  visaContext: string;
  /** How screening and ATS tend to work in this market. */
  screeningNote: string;
  commonMistakes: string[];
  relatedRoles: string[];
  relatedCorridors: string[];
  quickAnswer?: string;
  faqs?: Array<{ q: string; a: string }>;
};

const baseCorridors: Corridor[] = [
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    market: "UK",
    region: "Europe",
    metaTitle: "CV Writing for the UK Job Market | International Applicants",
    metaDescription:
      "How to write a CV for the UK: two pages, no photo, a strong personal profile, and the right-to-work reality. What overseas applicants have to change, by sector.",
    lead: "A UK CV that looks like a US resume or a Gulf CV gets filtered fast. The format is specific, the length is fixed, and the things you were told to include elsewhere are the things that hurt you here.",
    overview:
      "The UK market runs on a tight, understated CV: two pages, reverse chronological, opened by a short profile and closed by education. Recruiters read quickly and expect a familiar shape, so anything unusual reads as a risk rather than a differentiator. For international applicants the harder question is rarely the writing. It is whether the CV signals the right to work clearly enough that a hiring manager does not quietly move on.",
    cvConventions: [
      { label: "Length", value: "Two pages. One for early-career, never more than two unless academic or medical." },
      { label: "Photo", value: "No. A photo on a UK CV looks dated and raises discrimination concerns for the employer." },
      { label: "Personal details", value: "No date of birth, marital status or nationality. Name, city, phone, email and LinkedIn only." },
      { label: "Opening", value: "A four to five line personal profile, tuned to the target role, not a generic objective." },
      { label: "Spelling", value: "British English. \"Organised\", \"programme\", \"CV\" not \"resume\"." },
    ],
    whatChanges: [
      "Cut the CV to two pages if it is longer, which almost every overseas CV is",
      "Remove the photo, date of birth and marital status that Gulf and South Asian CVs carry",
      "Replace an objective statement with a targeted personal profile",
      "State your right-to-work position plainly if you already hold it, because it removes the largest silent objection",
      "Convert achievements to the understated UK register: strong, specific, never inflated",
    ],
    keySectors: [
      "Financial services and fintech",
      "Information technology and software",
      "Healthcare and the NHS",
      "Engineering and construction",
      "Accounting and professional services",
    ],
    visaContext:
      "Most non-UK applicants need a job offer from a licensed sponsor under the Skilled Worker route, and the employer has to hold a sponsor licence to hire you. If you already have the right to work through a visa, settlement or ancestry, saying so on the CV removes the single biggest reason a UK employer passes over an overseas applicant. This is orientation only, not immigration advice.",
    screeningNote:
      "Large UK employers and most recruitment agencies use an ATS, so standard headings and a parseable layout matter. Agencies handle a large share of UK hiring, which means your CV is often first read by a recruiter matching keywords to a brief before it reaches the employer.",
    commonMistakes: [
      "Sending a three or four page CV into a two-page market",
      "Keeping the photo and personal details, which signal an unfamiliarity with UK norms",
      "US spelling and US resume structure applied to a UK application",
      "Leaving right-to-work status ambiguous, so the employer assumes sponsorship is required",
      "An inflated, adjective-heavy tone that reads as overselling to a UK recruiter",
    ],
    relatedRoles: ["software-engineer", "accountant", "project-manager"],
    relatedCorridors: ["australia", "canada"],
  },
  {
    slug: "australia",
    name: "Australia",
    market: "Australian",
    region: "Oceania",
    metaTitle: "CV and Resume Writing for Australia | International Applicants",
    metaDescription:
      "How to write a resume for Australia: length, no photo, key selection criteria for government roles, and skilled migration context. What overseas applicants change.",
    lead: "Australia lets a resume breathe more than the UK does, but it has its own trap: government and many large-employer roles are won or lost on key selection criteria, which most overseas applicants have never written.",
    overview:
      "An Australian resume can run longer than a UK CV, and detail is welcome where it is relevant. The market's distinctive feature is the key selection criteria response required by government, health and many large-organisation roles, where you answer each stated criterion with a specific example. A strong resume that ignores the criteria loses to a weaker one that answers them. Skilled migration also shapes the market, and a resume that lines up with the occupation you are being assessed under reads as more credible.",
    cvConventions: [
      { label: "Length", value: "Two to four pages is normal. Detail is fine when it is relevant; padding is not." },
      { label: "Photo", value: "No. Australian resumes do not carry photos." },
      { label: "Personal details", value: "No date of birth or marital status. Include visa or residency status if you hold it." },
      { label: "Selection criteria", value: "For government and many large roles, a separate statement answering each criterion with an example." },
      { label: "Spelling", value: "Australian English, close to British. \"Organised\", \"centre\", \"labour\"." },
    ],
    whatChanges: [
      "Add a key selection criteria response for any government, health or large-employer role that lists them",
      "State your visa or residency status, because employers screen heavily on work rights",
      "Align the resume language with the ANZSCO occupation you are being assessed under, if you are migrating",
      "Remove photo and personal details carried over from a Gulf or South Asian CV",
      "Lead with recent, relevant Australian-recognised experience where you have it",
    ],
    keySectors: [
      "Healthcare and aged care",
      "Mining, resources and energy",
      "Construction and engineering",
      "Information technology",
      "Trades and skilled technical roles",
    ],
    visaContext:
      "Australia runs a points-based skilled migration system alongside employer-sponsored routes, and roles are mapped to occupations on skilled occupation lists. Whether you are applying through skilled independent migration or an employer sponsor, a resume that matches the occupation you are assessed under is easier for an employer to trust. This is orientation only, not migration advice.",
    screeningNote:
      "Larger employers and government use an ATS and, for government, a structured selection process on top of it. The key selection criteria statement is often scored separately from the resume, so it cannot be an afterthought.",
    commonMistakes: [
      "Ignoring the key selection criteria, which are effectively the application for many roles",
      "Treating an Australian resume like a two-page UK CV and cutting relevant detail",
      "Leaving visa or work-rights status off, so the employer assumes the hard case",
      "Keeping photo and personal details from a previous market's format",
      "Generic achievement bullets where the criteria asked for specific, evidenced examples",
    ],
    relatedRoles: ["civil-engineer", "project-manager", "data-analyst"],
    relatedCorridors: ["new-zealand", "united-kingdom"],
  },
  {
    slug: "canada",
    name: "Canada",
    market: "Canadian",
    region: "North America",
    metaTitle: "Resume Writing for Canada | International Applicants",
    metaDescription:
      "How to write a resume for Canada: two pages, no photo, no personal details, Canadian spelling, and the Canadian-experience question. What overseas applicants change.",
    lead: "Canada's resume rules are strict about what to leave out, and the market has one bias every newcomer runs into: the quiet preference for Canadian experience. A well-built resume answers it before it is asked.",
    overview:
      "A Canadian resume is close to the US format in structure but firmer on excluding personal information: no photo, no age, no marital status, nothing that invites a discrimination claim. The real obstacle for arrivals is the Canadian-experience preference, where employers lean toward candidates who have already worked in Canada. The resume cannot manufacture that, but it can foreground internationally recognised employers, transferable and standardised skills, and any Canadian credential recognition already underway.",
    cvConventions: [
      { label: "Length", value: "One to two pages. Two is standard for experienced professionals." },
      { label: "Photo", value: "No. Excluded to avoid bias, and expected to be absent." },
      { label: "Personal details", value: "No date of birth, marital status, photo or nationality. Contact details only." },
      { label: "Opening", value: "A professional summary plus a core-skills block that mirrors the job posting's language." },
      { label: "Spelling", value: "Canadian English, a mix of British and US. \"Colour\", \"organization\", \"centre\"." },
    ],
    whatChanges: [
      "Strip all personal details and the photo, more strictly than most markets",
      "Foreground globally recognisable employers and standardised qualifications to offset the Canadian-experience preference",
      "Mirror the exact skill language of the job posting, because Canadian ATS matching is keyword-literal",
      "Note any credential assessment or recognition in progress, such as an ECA",
      "Switch to Canadian spelling, which is neither fully British nor fully US",
    ],
    keySectors: [
      "Information technology and software",
      "Healthcare and nursing",
      "Skilled trades and construction",
      "Finance and accounting",
      "Engineering",
    ],
    visaContext:
      "Canada's Express Entry system ranks skilled applicants on a points score, and provincial nominee programs target specific occupations. A resume that clearly maps to the occupation code you are applying under, and that reflects any credential assessment already done, is easier for both employers and the process to read. This is orientation only, not immigration advice.",
    screeningNote:
      "Canadian employers rely heavily on ATS keyword matching, and job postings tend to be specific about required skills. Resumes that echo the posting's exact terms parse better than resumes written in the applicant's own phrasing.",
    commonMistakes: [
      "Carrying over a photo and personal details, which Canadian employers treat as a red flag",
      "Not addressing the Canadian-experience preference anywhere in the application",
      "Writing skills in your own words instead of the posting's, so the ATS misses them",
      "US spelling throughout, when Canadian English differs on key words",
      "A one-size resume sent to every posting in a keyword-literal market",
    ],
    relatedRoles: ["software-engineer", "accountant", "civil-engineer"],
    relatedCorridors: ["united-kingdom", "australia"],
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    market: "UAE",
    region: "Middle East",
    metaTitle: "CV Writing for the UAE and Dubai | International Applicants",
    metaDescription:
      "How to write a CV for the UAE: photo and personal details are expected, nationality is stated, and Gulf norms differ sharply from the UK. What applicants change by sector.",
    lead: "The UAE reverses several rules the UK and Canada insist on. A photo is expected, nationality and personal details belong on the page, and a CV stripped to Western minimalism can look incomplete to a Gulf recruiter.",
    overview:
      "The UAE, and Dubai in particular, is one of the most international hiring markets in the world, drawing candidates from South Asia, the wider Middle East, Europe and beyond. Gulf CV norms are distinct: a professional photo is standard, personal details including nationality and visa status are expected, and recruiters move quickly across very high application volumes. Employment is fully employer-sponsored, so your visa status and notice period are practical screening factors, not optional extras.",
    cvConventions: [
      { label: "Length", value: "Two to three pages. Detail on projects and employers is welcomed." },
      { label: "Photo", value: "Yes. A clean, professional headshot is standard and expected." },
      { label: "Personal details", value: "Nationality, visa status and often date of birth are included. Add current location." },
      { label: "Visa status", value: "State it clearly: visit visa, employment visa, or requiring sponsorship." },
      { label: "Spelling", value: "British English is the norm across Gulf business." },
    ],
    whatChanges: [
      "Add a professional photo, which Western CVs deliberately omit",
      "Include nationality, current location and visa status, all of which affect screening",
      "State your notice period, because Gulf hiring often moves on short timelines",
      "Name recognisable regional or multinational employers prominently",
      "Keep the achievements specific, because the volume of applicants makes generic CVs invisible",
    ],
    keySectors: [
      "Construction, real estate and engineering",
      "Hospitality and tourism",
      "Banking and financial services",
      "Healthcare",
      "Logistics, trade and aviation",
    ],
    visaContext:
      "Work in the UAE is tied to employer sponsorship, so your current visa status is a live screening factor. Candidates already in the country on a transferable visa, or free-zone permits, can be quicker to hire than those needing full sponsorship from abroad. This is orientation only, not immigration advice.",
    screeningNote:
      "Recruiters handle very high volumes and often use both job boards and an ATS, so a clear photo, an obvious nationality and visa line, and standard headings all speed up the first sort. Standing out is about specificity within a familiar Gulf format, not reinventing it.",
    commonMistakes: [
      "Sending a photo-free, minimalist Western CV that reads as incomplete to a Gulf recruiter",
      "Leaving out nationality and visa status, which recruiters screen on directly",
      "No notice period, in a market that often hires fast",
      "Burying regional experience that a Gulf employer values highly",
      "Over-long, unfocused CVs lost in a high-volume applicant pool",
    ],
    relatedRoles: ["civil-engineer", "accountant", "project-manager"],
    relatedCorridors: ["qatar", "saudi-arabia"],
  },
  {
    slug: "qatar",
    name: "Qatar",
    market: "Qatar",
    region: "Middle East",
    metaTitle: "CV Writing for Qatar and Doha | International Applicants",
    metaDescription:
      "How to write a CV for Qatar: Gulf norms with a photo and personal details, strong demand in infrastructure, energy and hospitality, and what overseas applicants change.",
    lead: "Qatar follows Gulf CV conventions closely, with a photo and personal details expected, but its hiring demand is shaped by large infrastructure, energy and hospitality employers that recruit heavily from overseas.",
    overview:
      "Qatar shares the Gulf CV format with the UAE: a professional photo, personal and visa details on the page, and recruiters working at speed across high volumes. What is distinct is the concentration of hiring around major state-linked employers in energy, infrastructure, aviation, healthcare and education, several of which run structured, credential-focused recruitment. For overseas applicants, matching qualifications and licensing to the role is often as important as the achievements themselves.",
    cvConventions: [
      { label: "Length", value: "Two to three pages, with room for project and qualification detail." },
      { label: "Photo", value: "Yes. A professional headshot is standard." },
      { label: "Personal details", value: "Nationality, date of birth and visa status are commonly included." },
      { label: "Credentials", value: "State qualifications and any professional licensing clearly; regulated roles check these first." },
      { label: "Spelling", value: "British English." },
    ],
    whatChanges: [
      "Adopt the Gulf format with photo and personal details if coming from a Western CV",
      "Foreground qualifications and licensing, which large Qatari employers verify closely",
      "Include nationality and visa status for the employer's screening",
      "Name experience with recognised regional or international employers",
      "Keep achievements evidenced, because structured recruiters compare candidates directly",
    ],
    keySectors: [
      "Energy, oil and gas",
      "Construction and infrastructure",
      "Hospitality, aviation and tourism",
      "Healthcare",
      "Education",
    ],
    visaContext:
      "Employment in Qatar is employer-sponsored, and labour reforms in recent years have changed how workers move between employers. Your qualifications, licensing and current status all factor into how quickly an employer can bring you on. This is orientation only, not immigration advice.",
    screeningNote:
      "Large state-linked and multinational employers often run structured, qualification-led recruitment with an ATS behind it. Clear credentials, a standard Gulf format and specific, comparable achievements move a CV through that process.",
    commonMistakes: [
      "A minimalist Western CV that omits the photo and details Qatari recruiters expect",
      "Vague or unverifiable qualifications in a market that checks credentials closely",
      "Leaving out nationality and visa status",
      "Generic achievements that cannot be compared in a structured process",
      "Overlooking professional licensing for regulated roles",
    ],
    relatedRoles: ["civil-engineer", "project-manager", "accountant"],
    relatedCorridors: ["uae", "saudi-arabia"],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    market: "Saudi",
    region: "Middle East",
    metaTitle: "CV Writing for Saudi Arabia | International Applicants",
    metaDescription:
      "How to write a CV for Saudi Arabia: Gulf format with photo and personal details, Vision 2030 hiring demand, and what overseas applicants change by sector.",
    lead: "Saudi Arabia is hiring hard across the sectors its Vision 2030 programme is building, and its CV conventions follow the Gulf pattern: a photo, personal details, and qualifications an employer can verify.",
    overview:
      "Saudi Arabia's labour market has shifted rapidly as large-scale projects and economic diversification drive demand in construction, technology, tourism, healthcare and professional services. CV norms are Gulf-standard, with a professional photo and personal details expected. The market also weighs qualifications and, in regulated professions, licensing and equivalency, so an overseas CV that makes credentials easy to verify moves faster than one that leaves them implied.",
    cvConventions: [
      { label: "Length", value: "Two to three pages." },
      { label: "Photo", value: "Yes. A professional headshot is standard." },
      { label: "Personal details", value: "Nationality, date of birth and visa or iqama status are commonly included." },
      { label: "Credentials", value: "State qualifications and any equivalency or licensing; regulated roles require them." },
      { label: "Spelling", value: "British English." },
    ],
    whatChanges: [
      "Move to the Gulf format with photo and personal details from a Western CV",
      "Make qualifications and any credential equivalency easy to verify",
      "State nationality and current status, including iqama if you hold one",
      "Foreground experience relevant to the sectors being built under Vision 2030",
      "Keep achievements specific and evidenced for structured comparison",
    ],
    keySectors: [
      "Construction and giga-projects",
      "Energy and petrochemicals",
      "Technology and digital",
      "Healthcare",
      "Tourism and hospitality",
    ],
    visaContext:
      "Work in Saudi Arabia is employer-sponsored, with status recorded on an iqama once you are resident. Qualifications and, for many professions, credential equivalency and licensing affect eligibility and speed of hire. This is orientation only, not immigration advice.",
    screeningNote:
      "Major employers and government-linked projects run structured recruitment with an ATS, and regulated professions verify credentials early. A clear Gulf-format CV with verifiable qualifications is what moves through that pipeline.",
    commonMistakes: [
      "A Western minimalist CV without the photo and details expected in the Gulf",
      "Unverifiable or vaguely stated qualifications in a credential-checking market",
      "Omitting nationality and current status",
      "Not tailoring to the sectors driving current demand",
      "Ignoring licensing and equivalency for regulated roles",
    ],
    relatedRoles: ["civil-engineer", "project-manager", "accountant"],
    relatedCorridors: ["uae", "qatar"],
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    market: "New Zealand",
    region: "Oceania",
    metaTitle: "CV Writing for New Zealand | International Applicants",
    metaDescription:
      "How to write a CV for New Zealand: two to three pages, no photo, skilled migrant demand in healthcare, construction and IT, and what overseas applicants change.",
    lead: "New Zealand's CV is close to Australia's in format but its own market in demand, with skilled-migrant shortages in healthcare, construction, engineering and IT that shape who gets read first.",
    overview:
      "A New Zealand CV runs two to three pages, carries no photo, and reads in a plain, direct register that employers there value over polish. The market is smaller than Australia's, so fit and demonstrated interest in living in New Zealand matter, and roles on skill-shortage lists move faster for overseas applicants. A CV that clearly maps to a shortage occupation, and that signals a genuine intent to relocate, reads more credibly than a stronger CV that looks like a scattershot international application.",
    cvConventions: [
      { label: "Length", value: "Two to three pages." },
      { label: "Photo", value: "No. New Zealand CVs do not include photos." },
      { label: "Personal details", value: "No date of birth or marital status. Include visa or residency status." },
      { label: "Tone", value: "Plain and direct. Understatement reads better than a hard sell." },
      { label: "Spelling", value: "New Zealand English, close to British." },
    ],
    whatChanges: [
      "Map your experience to a skill-shortage occupation where it fits, which speeds hiring",
      "State visa or residency status, because employers screen on work rights",
      "Signal genuine intent to relocate, which a smaller market weighs",
      "Remove photo and personal details from a Gulf or South Asian CV",
      "Adopt the plain, understated tone New Zealand employers prefer",
    ],
    keySectors: [
      "Healthcare and nursing",
      "Construction and engineering",
      "Information technology",
      "Agriculture and primary industries",
      "Trades and technical roles",
    ],
    visaContext:
      "New Zealand runs a skilled-migrant category and employer-assisted work routes, with occupations on shortage lists given priority. A CV that aligns with a listed occupation and reflects your work-rights position is easier for an employer to act on. This is orientation only, not immigration advice.",
    screeningNote:
      "Employers use an ATS and value clear, no-nonsense CVs. In a smaller market, signalling fit and relocation intent alongside the right keywords helps a CV survive the first read.",
    commonMistakes: [
      "Not tying the CV to a skill-shortage occupation where it would qualify",
      "Leaving work-rights status ambiguous",
      "An overpolished, hard-sell tone that reads as inflated locally",
      "Keeping photo and personal details from another market's format",
      "A generic international CV with no signal of intent to move to New Zealand",
    ],
    relatedRoles: ["civil-engineer", "software-engineer", "project-manager"],
    relatedCorridors: ["australia", "canada"],
  },
  {
    slug: "singapore",
    name: "Singapore",
    market: "Singapore",
    region: "Asia",
    metaTitle: "CV Writing for Singapore | International Applicants",
    metaDescription:
      "How to write a CV for Singapore: concise and metrics-led, Employment Pass context, and strong demand in finance, tech and biomedical. What overseas applicants change.",
    lead: "Singapore rewards a tight, metrics-led CV and screens hard on work-pass eligibility. It is one of Asia's most competitive markets, and a CV that wanders loses to one that proves impact in two pages.",
    overview:
      "Singapore's professional market is fast, international and demanding, concentrated in finance, technology, biomedical science and logistics. CVs are expected to be concise and evidence-led, with quantified achievements doing the work. Employment is pass-based, and eligibility for an Employment Pass or S Pass, which factors in salary and qualifications, is a real screening consideration. A CV that makes seniority, qualifications and measurable impact obvious helps an employer judge both fit and pass eligibility quickly.",
    cvConventions: [
      { label: "Length", value: "One to two pages. Concision is valued in a fast market." },
      { label: "Photo", value: "Optional. Sometimes included, but not expected; a clean CV without one is fine." },
      { label: "Personal details", value: "Nationality and current work-pass status are commonly noted; keep the rest minimal." },
      { label: "Achievements", value: "Metrics-led. Quantified impact is the differentiator." },
      { label: "Spelling", value: "British English." },
    ],
    whatChanges: [
      "Cut to one or two pages, because Singapore rewards concision",
      "Lead with quantified achievements, which carry more weight than responsibilities",
      "State nationality and current work-pass status for the employer's screening",
      "Make seniority and salary-relevant qualifications clear, as they affect pass eligibility",
      "Focus the CV tightly on the target role in a highly competitive pool",
    ],
    keySectors: [
      "Banking, finance and fintech",
      "Technology and software",
      "Biomedical and pharmaceuticals",
      "Logistics and supply chain",
      "Professional and business services",
    ],
    visaContext:
      "Foreign professionals typically work in Singapore on an Employment Pass or S Pass, with eligibility shaped by salary, qualifications and role. A CV that makes seniority and qualifications obvious helps an employer assess pass eligibility alongside fit. This is orientation only, not immigration advice.",
    screeningNote:
      "Employers and recruiters use an ATS and move quickly. In a competitive, metrics-driven market, a concise CV with quantified achievements and clear work-pass information gets read where a long, general one does not.",
    commonMistakes: [
      "A long, unfocused CV in a market that prizes concision",
      "Responsibilities instead of quantified achievements",
      "Omitting nationality and work-pass status, which employers screen on",
      "Hiding seniority and qualifications that affect pass eligibility",
      "A generic CV in one of Asia's most competitive professional pools",
    ],
    relatedRoles: ["software-engineer", "data-analyst", "accountant"],
    relatedCorridors: ["uae", "canada"],
  },
];

import { aeoCorridors } from "@/lib/content/aeo-retrofit";
import { MIGRATED_CORRIDORS } from "@/lib/country-content";

/**
 * Destinations with a full country mini-site are served at
 * /{country}/international-job-seekers (301 from the old URL).
 * Only markets without a mini-site stay here as global corridors.
 */
export const corridors: Array<Corridor & { quickAnswer?: string; faqs?: Array<{ q: string; a: string }> }> =
  baseCorridors
    .filter((c) => !(c.slug in MIGRATED_CORRIDORS))
    .map((c) => ({ ...aeoCorridors[c.slug], ...c }));

export function getCorridor(slug: string): Corridor | undefined {
  return corridors.find((c) => c.slug === slug);
}

export const corridorRegions = Array.from(new Set(corridors.map((c) => c.region)));
