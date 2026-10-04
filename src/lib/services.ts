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
};

export const servicePages: ServicePage[] = [
  {
    slug: "cv-writing",
    name: "ATS Friendly CV",
    packageService: "cv",
    title: "CV writing that gets past the filter and holds a recruiter's attention.",
    lead: "Most CVs are rejected before a person reads them, and the ones that survive get about seven seconds of attention. Your CV is rewritten to clear the first gate and earn the second.",
    metaTitle: "CV Writing Service in Sri Lanka | ATS CV from LKR 3,950",
    metaDescription:
      "CPRW certified ATS CV writing in Sri Lanka for private sector, banking, IT and foreign jobs. Written personally by Chanuka Jeewantha, delivery from 24 hours.",
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
        a: "No one can promise a specific system's result, and anyone who does is selling you something. What is guaranteed is that nothing in the document will be the reason it fails: the structure, formatting and keyword strategy are all built for machine parsing first.",
      },
      {
        q: "How long does it take?",
        a: "Standard delivery is 48 to 72 hours. Priority Express is 24 to 48 hours and the VIP option delivers within 24 hours. The 24-hour option has limited weekly capacity, so it is worth confirming availability on WhatsApp before ordering.",
      },
      {
        q: "What do you need from me?",
        a: "Your current CV, the target role and market, and a link to one or two job adverts you would actually apply to. If you do not have a CV, a detailed work history is enough to start.",
      },
    ],
    related: [
      { href: "/linkedin-optimisation", label: "LinkedIn Optimization" },
      { href: "/cover-letter-writing", label: "Cover Letter Writing" },
      { href: "/packages", label: "Packages and pricing" },
      { href: "/how-it-works", label: "How it works" },
    ],
  },
  {
    slug: "linkedin-optimisation",
    name: "LinkedIn Optimization",
    packageService: "linkedin",
    title: "A LinkedIn profile recruiters can find, and want to keep reading.",
    lead: "Recruiters search LinkedIn with keywords and judge in seconds. Being on the platform is not the same as being findable, and being findable is not the same as being convincing.",
    metaTitle: "LinkedIn Profile Optimisation in Sri Lanka",
    metaDescription:
      "LinkedIn profile optimisation in Sri Lanka. Headline, About and experience rewritten so recruiters in Sri Lanka and overseas find you. From LKR 3,950.",
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
        a: "Profile views usually move within the first two weeks. Recruiter approaches depend on your field and market, and are a matter of months rather than days.",
      },
    ],
    related: [
      { href: "/cv-writing", label: "ATS Friendly CV" },
      { href: "/cover-letter-writing", label: "Cover Letter Writing" },
      { href: "/packages", label: "Packages and pricing" },
      { href: "/reviews", label: "Reviews" },
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
