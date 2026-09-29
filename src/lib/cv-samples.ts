/**
 * CV SAMPLE / STRUCTURE ENTITIES
 * ------------------------------------------------------------------
 * Each entry generates a page at /cv-samples/{slug}. These are not
 * downloadable template files. They are annotated structures: the
 * sections a given kind of CV should carry, in what order, and why,
 * so a reader can see the anatomy without copying a generic file.
 *
 * Samples are organised by CV type and career stage, deliberately
 * distinct from the role guidance under /job-roles, so the two silos
 * do not overlap.
 */

export type CvSampleSection = {
  section: string;
  note: string;
};

export type CvSample = {
  slug: string;
  name: string;
  audience: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  overview: string;
  /** The section order for this CV type, annotated. */
  structure: CvSampleSection[];
  /** What makes this kind of CV work. */
  highlights: string[];
  /** What weakens it. */
  watchFor: string[];
  relatedSamples: string[];
  relatedLinks: Array<{ href: string; label: string }>;
  quickAnswer?: string;
  faqs?: Array<{ q: string; a: string }>;
};

const baseSamples: CvSample[] = [
  {
    slug: "graduate-cv",
    name: "Graduate CV",
    audience: "Students and recent graduates",
    metaTitle: "Graduate CV Structure and Example",
    metaDescription:
      "How to structure a graduate CV with little or no work experience: what to lead with, how to use projects and internships, and the order that works when you have no track record yet.",
    lead: "A graduate CV has to make a case from limited material. The trick is not to hide the lack of experience but to lead with what you do have, in the right order.",
    overview:
      "With no long work history to lean on, a graduate CV reorders the usual structure. Education and projects move up, because they carry the evidence. The goal is to show capability and direction, not to pretend to seniority you do not have. A well-built graduate CV reads as focused and ready, not thin.",
    structure: [
      { section: "Contact details", note: "Name, city, phone, email, LinkedIn. No photo for most markets." },
      { section: "Personal profile", note: "Three or four lines: what you are, your field, and the kind of role you are targeting. Specific, not a generic objective." },
      { section: "Education", note: "Higher up than on an experienced CV. Degree, institution, dates, and relevant modules, projects or grades where they help." },
      { section: "Projects", note: "Often the strongest evidence a graduate has. Treat academic, personal or hackathon projects like work: what you built, the tools, the outcome." },
      { section: "Work experience", note: "Internships, part-time and volunteer roles, framed for transferable skills rather than the job title." },
      { section: "Skills", note: "Concrete and relevant, mirroring the posting's language where true. Avoid padding with soft-skill clichés." },
    ],
    highlights: [
      "Leads with education and projects, where the real evidence is",
      "Treats projects as seriously as jobs, with outcomes not just descriptions",
      "A targeted profile that names the field and role, not a vague objective",
      "Transferable framing of part-time and volunteer work",
    ],
    watchFor: [
      "Padding to two pages when one strong page is better",
      "A generic objective that could belong to any graduate",
      "Listing modules with no relevance to the target role",
      "Soft-skill clichés with no evidence behind them",
    ],
    relatedSamples: ["ats-cv", "career-change-cv"],
    relatedLinks: [
      { href: "/career-levels/graduate", label: "Graduate career guidance" },
      { href: "/cv-writing", label: "CV writing service" },
    ],
  },
  {
    slug: "professional-cv",
    name: "Professional CV",
    audience: "Mid-career professionals",
    metaTitle: "Professional CV Structure and Example",
    metaDescription:
      "How to structure a mid-career CV: leading with achievements, weighting recent roles, and cutting the early career to keep the focus where it belongs.",
    lead: "A mid-career CV has the opposite problem to a graduate one: too much material, not too little. The work is deciding what earns space and what shrinks to a line.",
    overview:
      "By mid-career the CV is carried by work experience, and the structure follows: profile, then a reverse-chronological history where recent roles get the detail and older ones compress. The common failure is treating every role equally, which buries the relevant recent work under a decade of history nobody is reading closely.",
    structure: [
      { section: "Contact details", note: "Name, city, phone, email, LinkedIn." },
      { section: "Personal profile", note: "Four to five lines stating your level, specialism and the value you bring, tuned to the target role." },
      { section: "Core skills", note: "A short, scannable block mirroring the posting's key requirements, each one real." },
      { section: "Work experience", note: "Reverse chronological. Recent roles get four to six achievement bullets; older roles get fewer, or a line." },
      { section: "Education and qualifications", note: "Below experience now. Professional certifications that matter to the role can sit higher." },
      { section: "Optional sections", note: "Publications, memberships or key projects, only where they add to this application." },
    ],
    highlights: [
      "Recent, relevant roles carry the detail; early career compresses",
      "Every bullet is an achievement, not a duty",
      "A core-skills block that matches the posting and helps the ATS",
      "A profile that states level and specialism, not a life story",
    ],
    watchFor: [
      "Giving a fifteen-year-old first job the same space as the current role",
      "Responsibilities repeated across every role instead of achievements",
      "Running to four pages when two focused ones would land harder",
      "A profile that lists adjectives instead of stating what you are",
    ],
    relatedSamples: ["executive-cv", "ats-cv"],
    relatedLinks: [
      { href: "/career-levels/professional", label: "Professional career guidance" },
      { href: "/cv-writing", label: "CV writing service" },
    ],
  },
  {
    slug: "executive-cv",
    name: "Executive CV",
    audience: "Senior leaders, directors and C-suite",
    metaTitle: "Executive CV Structure and Example",
    metaDescription:
      "How to structure an executive CV: leading with scope and business impact, reading as a business case, and positioning for boards and search consultants rather than hiring managers.",
    lead: "An executive CV is read by a different audience with a different question. Not \"can they do the job\" but \"what happens to the business when they run it\". The structure has to answer that.",
    overview:
      "At senior level the CV stops being a list of responsibilities and becomes a business case. Scope, P&L, transformation and results lead, and the reader is often a board member, investor or search consultant rather than a hiring manager. The structure foregrounds impact and gives the reader the numbers that size the candidate quickly.",
    structure: [
      { section: "Contact details", note: "Name, location, phone, email, LinkedIn." },
      { section: "Executive profile", note: "A tight statement of the leadership you provide and the scale you operate at. Function, sector and level, immediately." },
      { section: "Key achievements", note: "A short highlights block of the three or four business results that define you: growth, turnaround, exit, transformation." },
      { section: "Leadership experience", note: "Each role framed by scope first (revenue, team, remit), then the results delivered against it." },
      { section: "Board and governance", note: "Non-executive roles, advisory positions and governance experience, where relevant." },
      { section: "Education and credentials", note: "Brief. At this level it is context, not the headline." },
    ],
    highlights: [
      "Reads as a business case, led by scope and results",
      "A key-achievements block that sizes the candidate in seconds",
      "Scope stated before responsibilities in every role",
      "Written for boards and search consultants, not hiring managers",
    ],
    watchFor: [
      "A longer list of responsibilities where impact should be",
      "No numbers to size the remit: revenue, team, budget, market",
      "The same operational detail that suited a mid-career CV",
      "Underplaying transformation and results to avoid sounding immodest",
    ],
    relatedSamples: ["professional-cv", "international-cv"],
    relatedLinks: [
      { href: "/career-levels/executive", label: "Executive career guidance" },
      { href: "/career-strategy", label: "Career strategy service" },
    ],
  },
  {
    slug: "career-change-cv",
    name: "Career change CV",
    audience: "People moving to a new field",
    metaTitle: "Career Change CV Structure and Example",
    metaDescription:
      "How to structure a CV when changing careers: leading with transferable skills, reframing past experience for the new field, and answering the \"why the switch\" question up front.",
    lead: "A career-change CV has to do something a normal one does not: argue that experience in one field is evidence for another. The structure carries that argument.",
    overview:
      "When you change fields, a straight chronological CV works against you, because the reader sees the old career first and stops. A career-change CV reframes the story around transferable skills and relevant evidence, and answers the unspoken question, \"why should I believe this transfers\", before it is asked. The old experience is not hidden. It is re-pointed at the new target.",
    structure: [
      { section: "Contact details", note: "Standard." },
      { section: "Profile with intent", note: "State the move openly: what you are transitioning from and into, and why it is a logical step. Owning it beats hoping it goes unnoticed." },
      { section: "Transferable skills", note: "A block foregrounding the capabilities that carry across, evidenced from your existing experience." },
      { section: "Relevant experience and projects", note: "Any work, courses, certifications or projects pointing at the new field, given prominence even if recent or small." },
      { section: "Professional experience", note: "Your history, reframed for transferable value rather than field-specific duties." },
      { section: "Education and retraining", note: "New qualifications or courses that support the switch, surfaced clearly." },
    ],
    highlights: [
      "Answers \"why the switch\" in the profile, up front",
      "Leads with transferable skills, evidenced from real experience",
      "Surfaces new training and relevant projects even when small",
      "Reframes old roles for what carries across, not the old job",
    ],
    watchFor: [
      "A chronological CV that shows the old field first and loses the reader",
      "Transferable skills claimed but not evidenced",
      "Hiding the change rather than framing it as deliberate",
      "Field-specific jargon from the old career the new reader will not value",
    ],
    relatedSamples: ["professional-cv", "graduate-cv"],
    relatedLinks: [
      { href: "/career-situations/career-change", label: "Career change guidance" },
      { href: "/career-strategy", label: "Career strategy service" },
    ],
  },
  {
    slug: "international-cv",
    name: "International CV",
    audience: "Applicants moving between countries",
    metaTitle: "International CV Structure and Example",
    metaDescription:
      "How to structure a CV for applying abroad: matching the destination's conventions, signalling work rights, and making credentials easy to verify across markets.",
    lead: "An international CV is really several CVs, because there is no universal format. The structure below is the starting frame; the market you are applying into decides the specifics.",
    overview:
      "The single biggest mistake in applying abroad is using your home market's CV in a market with different conventions. An international CV starts from the destination's norms on length, photo and personal details, then makes two things obvious that overseas applicants often leave vague: your right to work, and the equivalence of your qualifications. The structure below adapts to the market; the corridor pages set out how each one differs.",
    structure: [
      { section: "Contact details", note: "Include current location and, in Gulf markets, nationality. Photo only where the market expects one." },
      { section: "Profile", note: "Targeted to the role and, where relevant, signalling your connection to or intent to work in that market." },
      { section: "Work rights", note: "State your status plainly if you hold the right to work. Ambiguity is the largest silent objection an overseas applicant faces." },
      { section: "Experience", note: "Framed with internationally recognisable employers and standardised achievements the reader can size without local context." },
      { section: "Qualifications and equivalency", note: "Make credentials easy to verify; note any recognition or assessment in progress." },
      { section: "Skills and languages", note: "Relevant skills in the posting's terms, plus languages where they matter to the market." },
    ],
    highlights: [
      "Starts from the destination market's conventions, not your home format",
      "Makes work-rights status explicit and easy to find",
      "Foregrounds recognisable employers and verifiable credentials",
      "Adapts length, photo and details to the target market",
    ],
    watchFor: [
      "One CV sent to every country regardless of local norms",
      "Leaving work rights ambiguous, so the employer assumes sponsorship",
      "Unverifiable qualifications in a market that checks them",
      "Home-market jargon and references the overseas reader will not follow",
    ],
    relatedSamples: ["professional-cv", "executive-cv"],
    relatedLinks: [
      { href: "/international-job-seekers", label: "CV conventions by market" },
      { href: "/cv-writing", label: "CV writing service" },
    ],
  },
  {
    slug: "ats-cv",
    name: "ATS-friendly CV",
    audience: "Anyone applying through online systems",
    metaTitle: "ATS-Friendly CV Structure and Example",
    metaDescription:
      "How to structure a CV that parses cleanly through applicant tracking systems: single column, standard headings, real text, and keywords tied to real experience.",
    lead: "An ATS-friendly CV is not an ugly one. It is a cleanly built one. The structure below parses reliably and still reads well to the human who opens it next.",
    overview:
      "Most applications now pass through an applicant tracking system before a person sees them, and a small set of formatting choices decide whether the software reads your CV correctly. The good news is that a parseable CV and a well-designed one are the same document. The structure below avoids the things that break parsing while staying clear and readable.",
    structure: [
      { section: "Single-column layout", note: "Multi-column designs often get read across the columns, scrambling the order. One column keeps the reading order intact." },
      { section: "Contact details in the body", note: "Headers and footers are sometimes ignored by parsers. Keep contact details in the main body of the page." },
      { section: "Standard section headings", note: "\"Work Experience\", \"Education\", \"Skills\". Creative headings can be misfiled or missed entirely." },
      { section: "Real text, not graphics", note: "Text inside images, logos or icons cannot be read. Keep everything as selectable text." },
      { section: "Keywords in context", note: "Mirror the posting's terms where true, attached to real experience in the work history, not stacked in an unsupported list." },
      { section: "Simple, consistent formatting", note: "Standard fonts, no text boxes or tables for layout, dates in a consistent format the parser can read." },
    ],
    highlights: [
      "Single column so the reading order survives parsing",
      "Standard headings and real text throughout",
      "Contact details in the body, not the header",
      "Keywords tied to evidence, which pass the search and the read",
    ],
    watchFor: [
      "Decorative multi-column templates that scramble on parse",
      "Contact details stranded in a header the parser skips",
      "Skills baked into an image or icon set",
      "A keyword block with no experience behind it",
    ],
    relatedSamples: ["professional-cv", "graduate-cv"],
    relatedLinks: [
      { href: "/career-advice/how-ats-reads-your-cv", label: "How an ATS reads your CV" },
      { href: "/cv-writing", label: "ATS Friendly CV service" },
    ],
  },
];

import { aeoCvSamples } from "@/lib/content/aeo-retrofit";

export const cvSamples: Array<CvSample & { quickAnswer?: string; faqs?: Array<{ q: string; a: string }> }> =
  baseSamples.map((s) => ({ ...aeoCvSamples[s.slug], ...s }));

export function getCvSample(slug: string): CvSample | undefined {
  return cvSamples.find((s) => s.slug === slug);
}
