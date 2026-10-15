import { pricingSummary } from "@/lib/pricing";
import type { ServiceId } from "./pricing";

export type ServicePage = {
  slug: string;
  name: string;
  /** Links this page to the configurator when the service is sold in packages. */
  packageService?: ServiceId;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  /** What the client actually receives. */
  deliverables: string[];
  /** The work behind the deliverable. */
  includes: Array<{ heading: string; body: string }>;
  whoFor: string[];
  faq: Array<{ q: string; a: string }>;
  related: Array<{ href: string; label: string }>;
  quickAnswer?: string;
  sinhalaSummary?: string;
  localNotes?: Array<{ heading: string; body: string }>;
  examples?: Array<{ label: string; before: string; after: string; why: string }>;
};

export const servicePages: ServicePage[] = [
  {
    slug: "cv-writing",
    name: "ATS Friendly CV",
    packageService: "cv",
    title: "Professional CV writing in Sri Lanka, for your next role.",
    lead: "A targeted CV for Sri Lankan employers or overseas applications, available as supervised Essential or personally crafted Signature work. Clear achievements, readable formatting and a story that matches the role you actually want.",
    metaTitle: "CV Writing Service in Sri Lanka | ATS CV from LKR 3,950",
    metaDescription:
      "CPRW certified ATS CV writing in Sri Lanka for private sector, banking, IT and foreign jobs. Essential or Signature Jeewantha, delivery from 24 hours.",
    quickAnswer: "Chanuka Jeewantha provides professional CV writing in Sri Lanka for graduates, experienced professionals and executives. The service includes target-role research, achievement-led writing, an ATS-friendly layout, editable Word and PDF files, and one revision round. Prices start at LKR 3,950 for students and fresh graduates; standard delivery is 48 to 72 hours. Sinhala and English communication is available online, island-wide.",
    sinhalaSummary: "ශ්‍රී ලංකාවේ හෝ විදේශ රැකියාවකට ගැළපෙන CV එකක් Essential team-crafted හෝ Chanuka විසින්ම ලියන Signature tier එකෙන් තෝරන්න. ඔබේ අත්දැකීම් සහ ඉලක්ක රැකියාව අනුව අන්තර්ගතය සකස් කරන අතර Word සහ PDF files සමඟ එක් revision round එකක් ඇතුළත්. සිසුන් සහ නව උපාධිධාරීන් සඳහා මිල රු. 3,950 සිට.",
    localNotes: [
      { heading: "Private-sector applications", body: "Start with the employer's vacancy notice, whether it is on TopJobs, LinkedIn or a company careers page. A Colombo banking role and a software engineering role need different evidence; your actual qualifications, tools and achievements determine the content." },
      { heading: "Government and prescribed forms", body: "A government vacancy may require its own application form and supporting documents. A professional CV does not replace those instructions. Supply the notice so the document supports the stated requirements." },
      { heading: "Applying overseas from Sri Lanka", body: "Name the destination and target role before writing starts. Personal details, length and terminology are adapted to that application. Foreign-job CV writing is also available as a separate service." },
    ],
    examples: [
      { label: "Banking operations", before: "Responsible for preparing monthly reports.", after: "Prepared monthly branch performance reports by consolidating lending and deposit data, checking variances and highlighting exceptions for the branch manager.", why: "The rewrite makes the task, method and reader clear. Add a volume or measurable result only if your records support it." },
      { label: "Graduate project", before: "Did a final-year software project.", after: "Built a stock-tracking web application for a university project using React and PostgreSQL; implemented item search, stock updates and role-based access.", why: "A graduate can show practical evidence through a project without inventing paid employment or business results." },
    ],
    deliverables: [
      "Your CV in Word and PDF, ready to send",
      "A version formatted for online applications and one for direct sending",
      "A short note on how to tailor it per application",
      "One full revision round",
    ],
    includes: [
      {
        heading: "Positioning before writing",
        body: "Before a word is written, we settle what role you are targeting, in which market, and at what level. A CV written without that decision reads as a list of jobs rather than a case for one.",
      },
      {
        heading: "Achievement-led content",
        body: "Responsibilities describe the job. Achievements describe you. Every bullet is rebuilt around what changed because you were there, with numbers wherever the work allows them.",
      },
      {
        heading: "ATS-safe structure",
        body: "Standard section headings, no text trapped in images or graphics, no critical information inside tables, and a keyword strategy drawn from real job descriptions in your field.",
      },
      {
        heading: "Market conventions",
        body: "A CV for a Colombo employer, a Gulf company and a UK recruiter differ on length, photo, personal details and tone. Yours is written for the employer and country you named, not a generic template.",
      },
    ],
    whoFor: [
      "Professionals applying to roles abroad",
      "Candidates getting no response despite relevant experience",
      "People changing industry or function",
      "Senior candidates whose CV has not kept up with their scope",
    ],
    faq: [
      {
        q: "Will this guarantee my CV passes ATS?",
        a: "No. Different employers configure different systems and screening rules. The CV is built with readable text, standard headings and relevant language drawn from your target job descriptions, but neither an ATS score nor an interview can be guaranteed.",
      },
      {
        q: "How long does it take?",
        a: "Standard delivery is 48 to 72 hours. Priority Express is 24 to 48 hours and the VIP option delivers within 24 hours. The 24-hour option has limited weekly capacity, so it is worth confirming availability on WhatsApp before ordering.",
      },
      {
        q: "What do you need from me?",
        a: "Your current CV, the target role and market, and a link to one or two job adverts you would actually apply to. If you do not have a CV, a detailed work history is enough to start.",
      },
      { q: "How much does CV writing cost in Sri Lanka with Chanuka?", a: `${pricingSummary("cv")}. Essential is team-crafted and checked by Chanuka; Signature is personally crafted by him. See the calculator for your total.` },
      { q: "Can I order online from Kandy, Galle or outside Colombo?", a: "Yes. The service is online across Sri Lanka. Share your existing CV or work history and target vacancies, discuss the brief in Sinhala or English, and receive the files digitally. No visit to a Colombo office is needed." },
      { q: "Who is the best CV writer in Sri Lanka for my application?", a: "Compare named writers using relevant samples, credentials, independent reviews, target-role research, clear prices and revision terms. Chanuka offers supervised Essential and personally written Signature services; use the buyer's guide and public Google reviews to decide whether that approach fits your needs." },
    ],
    related: [
      { href: "/linkedin-optimisation", label: "LinkedIn Optimization" },
      { href: "/cover-letter-writing", label: "Cover Letter Writing" },
      { href: "/packages", label: "Packages and pricing" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/how-to-choose-a-cv-writer-sri-lanka", label: "How to choose a CV writer in Sri Lanka" },
      { href: "/cv-format-sri-lanka", label: "CV format for Sri Lanka" },
      { href: "/foreign-job-cv-sri-lanka", label: "CV writing for foreign jobs" },
    ],
  },
  {
    slug: "linkedin-optimisation",
    name: "LinkedIn Optimization",
    packageService: "linkedin",
    title: "LinkedIn profile optimization in Sri Lanka.",
    lead: "Recruiters search LinkedIn with keywords and judge in seconds. Being on the platform is not the same as being findable, and being findable is not the same as being convincing.",
    metaTitle: "LinkedIn Optimization Sri Lanka | Chanuka Jeewantha",
    metaDescription:
      "LinkedIn profile optimization in Sri Lanka by Chanuka Jeewantha. Headline, About, experience and role-relevant skills guidance. From LKR 3,950; no login needed.",
    quickAnswer: "LinkedIn profile optimization is a rewrite of your headline, About and experience sections around your target roles, supported by relevant skills and consistent career evidence. Chanuka Jeewantha offers this service online in Sri Lanka from LKR 3,950, with one revision round and instructions for updating your own profile. You keep control of your account: no password or login access is requested.",
    sinhalaSummary: "LinkedIn profile එකේ headline, About සහ experience කොටස් ඔබ බලාපොරොත්තු වන රැකියාවට ගැළපෙන ලෙස සකස් කරනවා. ඔබටම profile එක update කරගන්න උපදෙස් ලැබෙන අතර password එක හෝ account access දෙන්න අවශ්‍ය නැහැ. මිල රු. 3,950 සිට.",
    localNotes: [
      { heading: "Sri Lankan and overseas recruiter searches", body: "Choose a realistic target role and keep location, industry and availability accurate. Use the skills and tools you actually have, expressed in the terms employers use. Repeating a keyword cannot make you qualified for a role." },
      { heading: "One career story across CV and LinkedIn", body: "Dates, employers, qualifications and achievements should agree with your CV. LinkedIn adds context and a conversational About section rather than duplicating the CV line for line." },
      { heading: "Measure relevant attention", body: "Record your available Search Appearances and profile-view data before updating, then compare later periods alongside recruiter messages and relevant conversations. Views alone are not evidence of a better job search." },
    ],
    examples: [
      { label: "Finance professional headline", before: "Looking for a new opportunity", after: "Finance Executive | Management Reporting, Budgeting & Excel | Sri Lanka", why: "State a real professional identity and relevant skills. This is an illustrative structure, not a reason to claim a title or skill you do not hold." },
      { label: "Software engineer headline", before: "Passionate IT professional", after: "Software Engineer | Java, Spring Boot & REST APIs | Backend Development", why: "Concrete role and tool names explain your field more clearly than a general adjective. Select terms that match your own work." },
    ],
    deliverables: [
      "Rewritten headline, About section and experience entries",
      "A keyword set matched to your target roles and market",
      "Skills and section order recommendations",
      "One full revision round",
    ],
    includes: [
      {
        heading: "Search visibility",
        body: "Recruiters find candidates through keyword search. Your headline, About section and job titles are rebuilt around the terms actually used in your target market, not the internal job titles your employer invented.",
      },
      {
        heading: "A headline that does work",
        body: "The headline is the one line that appears next to your name everywhere on the platform. It gets written as positioning, not as a job title.",
      },
      {
        heading: "An About section people finish",
        body: "Written in your voice, in first person, with a clear opening line, evidence in the middle and a reason to make contact at the end.",
      },
      {
        heading: "Consistency with your CV",
        body: "Your CV and your profile should tell the same story with the same numbers. When they disagree, a recruiter notices.",
      },
    ],
    whoFor: [
      "Professionals who want to be approached rather than apply",
      "Candidates whose profile has not been touched in years",
      "Senior people building visibility in a new market",
      "Anyone whose CV is working but whose profile is not",
    ],
    faq: [
      {
        q: "Do you update the profile for me?",
        a: "You receive the full written content and clear placement instructions. Account access is never requested, because handing over credentials to anyone is a bad habit worth keeping.",
      },
      {
        q: "How soon will I see results?",
        a: "There is no fixed time or guaranteed increase. Visibility depends on your target market, experience, profile settings, network and hiring demand. Compare available Search Appearances, relevant profile views and recruiter conversations over time, rather than expecting an immediate ranking change.",
      },
      { q: "How much does LinkedIn optimization cost in Sri Lanka?", a: `${pricingSummary("linkedin")}. Essential is team-crafted and checked by Chanuka; Signature is personally crafted by him. See the calculator for your total.` },
      { q: "Can you guarantee the top result in LinkedIn recruiter searches?", a: "No. LinkedIn controls its search and personalizes results. The service improves the clarity, relevance and completeness of your profile; it cannot guarantee a position, number of views or job offer." },
      { q: "Is LinkedIn optimization the same as managing my account?", a: "No. This service provides profile content and placement guidance. It does not include account operation, posting on your behalf, paid promotion or messaging recruiters from your account." },
    ],
    related: [
      { href: "/cv-writing", label: "ATS Friendly CV" },
      { href: "/cover-letter-writing", label: "Cover Letter Writing" },
      { href: "/packages", label: "Packages and pricing" },
      { href: "/reviews", label: "Reviews" },
      { href: "/linkedin-profile-guide-sri-lanka", label: "LinkedIn headline and profile examples for Sri Lanka" },
    ],
  },
  {
    slug: "cover-letter-writing",
    name: "Cover Letter Writing",
    packageService: "cover-letter",
    title: "A letter written for one role, not a template with the name swapped in.",
    lead: "A cover letter is either the most wasted page in your application or the one that explains why you, specifically, for this role. The difference is whether it was written for the advert in front of you.",
    metaTitle: "Cover Letter Writing Service in Sri Lanka",
    metaDescription:
      "Cover letter writing in Sri Lanka for a specific role and employer, written to the job description in the tone that employer expects. From LKR 2,950.",
    deliverables: [
      "A cover letter tailored to one target role",
      "A reusable structure you can adapt for future applications",
      "Guidance on what to change per application and what to leave alone",
      "One full revision round",
    ],
    includes: [
      {
        heading: "Written to the advert",
        body: "The job description is read properly and the letter answers what it actually asks for, in the order the employer raised it.",
      },
      {
        heading: "A reason, not a summary",
        body: "Repeating your CV in paragraphs wastes the page. The letter explains the decision: why this role, why this employer, why now.",
      },
      {
        heading: "Tone for the market",
        body: "A UK letter, a Gulf letter and a US letter carry different levels of formality. Yours is pitched for where you are sending it.",
      },
    ],
    whoFor: [
      "Candidates applying to a specific role they care about",
      "Career changers who need to explain the move",
      "Applicants with a gap or an unusual path to address",
    ],
    faq: [
      {
        q: "Can I reuse it for other applications?",
        a: "Yes, and you are shown exactly which parts to change. The structure and the evidence stay; the role-specific paragraph is rewritten each time.",
      },
      {
        q: "Are cover letters still read?",
        a: "Not always, and rarely first. But when a hiring manager is choosing between two similar CVs, it is often the only thing that separates them.",
      },
    ],
    related: [
      { href: "/cv-writing", label: "ATS Friendly CV" },
      { href: "/linkedin-optimisation", label: "LinkedIn Optimization" },
      { href: "/packages", label: "Packages and pricing" },
    ],
  },
  {
    slug: "cv-review",
    packageService: "cv-review",
    name: "CV Review",
    title: "An honest read of the CV you already have.",
    lead: "Sometimes the document is closer than you think and needs direction rather than a rewrite. A review tells you what is working, what is costing you interviews, and whether a rewrite is worth paying for.",
    metaTitle: "CV Review in Sri Lanka: Professional CV Critique",
    metaDescription:
      "A detailed written critique of your existing CV: ATS readability, structure, achievements, positioning and market fit, with clear next steps.",
    deliverables: [
      "A written critique of your CV, section by section",
      "An ATS readability assessment",
      "A prioritised list of what to fix first",
      "A clear recommendation on whether a rewrite is needed",
    ],
    includes: [
      {
        heading: "Section by section",
        body: "Every part of the document is assessed against what a recruiter in your target market expects to see there.",
      },
      {
        heading: "Prioritised, not exhaustive",
        body: "A list of forty small problems helps nobody. You get the handful of changes that would actually move the result, in order.",
      },
      {
        heading: "An honest recommendation",
        body: "If your CV needs an afternoon of your own work rather than a paid rewrite, that is what the review will say.",
      },
    ],
    whoFor: [
      "Candidates who want a second opinion before spending more",
      "People whose CV worked before and has stopped working",
      "Anyone unsure whether the CV or the applications are the problem",
    ],
    faq: [
      {
        q: "Do you rewrite anything in a review?",
        a: "A review is written feedback, with examples of how specific lines could be rewritten. The full rewrite is the CV writing service.",
      },
      {
        q: "Can the review fee go towards a rewrite?",
        a: "Yes. If you order a CV rewrite within 30 days of a review, the review fee is deducted.",
      },
    ],
    related: [
      { href: "/cv-samples", label: "CV Samples & Formats" },
      { href: "/cv-writing", label: "ATS Friendly CV" },
      { href: "/packages", label: "Packages and pricing" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "career-strategy",
    name: "Career Strategy",
    title: "A conversation about where you are going, before you rewrite anything.",
    lead: "Documents solve a positioning problem. If the positioning itself is unresolved, no rewrite fixes it. A strategy session settles the target first.",
    metaTitle: "Career Strategy Consultation",
    metaDescription:
      "A one-to-one career strategy session on target roles, markets, positioning and the practical next steps for your search.",
    deliverables: [
      "A live one-to-one session",
      "A written summary of what was agreed",
      "A shortlist of target roles and markets",
      "Practical next steps in order",
    ],
    includes: [
      {
        heading: "Target definition",
        body: "Which roles, which markets, which level. Most stalled searches are aimed at three incompatible targets at once.",
      },
      {
        heading: "Gap assessment",
        body: "What your profile currently supports, and what it would need to support the target you actually want.",
      },
      {
        heading: "A sequence, not a wish list",
        body: "You leave with the order of operations: what to do this month, what can wait, and what is not worth doing at all.",
      },
    ],
    whoFor: [
      "People deciding between two directions",
      "Candidates planning a move abroad",
      "Senior professionals planning the next step rather than the next job",
    ],
    faq: [
      {
        q: "How long is the session?",
        a: "Sessions run 30 or 60 minutes. Most people getting a full picture of a move abroad take the 60-minute option.",
      },
      {
        q: "Is this included in a package?",
        a: "The Executive and full-package tiers include a session. It can also be booked on its own.",
      },
    ],
    related: [
      { href: "/cv-writing", label: "ATS Friendly CV" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function getService(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
