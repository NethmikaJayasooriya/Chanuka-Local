/**
 * CAREER LEVEL and CAREER SITUATION entities.
 *
 * Career level targets seniority: "executive CV writing".
 * Career situation targets the candidate's problem: "CV after a career break".
 * They are different search intents and must not be merged.
 */

export type CareerLevel = {
  slug: string;
  name: string;
  years: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  overview: string;
  /** What the CV has to prove at this level. */
  cvFocus: string[];
  /** What changes compared with the level below. */
  whatChanges: string;
  commonMistakes: string[];
  /** AEO: answer-first summary, 40-70 words. */
  quickAnswer?: string;
  /** AEO: question-led FAQs, answer-first. */
  faqs?: Array<{ q: string; a: string }>;
  /** ISO date of last substantive review. */
  updated?: string;
};

const baseLevels: CareerLevel[] = [
  {
    slug: "graduate",
    name: "Graduate",
    years: "0 to 2 years",
    metaTitle: "Graduate CV Writing Guidance",
    metaDescription:
      "How to write a graduate CV with limited work experience: what to lead with, what counts as evidence, and the mistakes that cost interviews.",
    lead: "A graduate CV has a shortage of work experience and a surplus of things that are not work experience. The skill is knowing which of those actually counts.",
    overview:
      "Employers hiring graduates are not expecting a track record. They are looking for evidence that you can learn quickly, finish things, and work with other people. Projects, part-time work and responsibility outside study all count when they are written as evidence rather than as a list.",
    cvFocus: [
      "A clear target role, because \"open to opportunities\" reads as no direction",
      "Projects described by what you built and what it did, not by module code",
      "Internships and part-time work written as real work, because it is",
      "Technical or professional skills with an honest indication of depth",
      "Responsibility held anywhere: societies, teams, volunteering, family business",
    ],
    whatChanges:
      "Everything is evidence of potential rather than proof of delivery. That is expected. What is not forgiven is a CV that lists activities without saying what came of them.",
    commonMistakes: [
      "Two pages of education detail and four lines of everything else",
      "Listing modules instead of describing what you can now do",
      "An objective statement about what you want rather than what you offer",
      "Dismissing retail or hospitality work that demonstrated genuine responsibility",
      "No target role, leaving the reader to decide what to do with you",
    ],
  },
  {
    slug: "professional",
    name: "Professional",
    years: "3 to 9 years",
    metaTitle: "Professional CV Writing Guidance",
    metaDescription:
      "How to write a CV with 3 to 9 years of experience: moving from duties to outcomes, showing ownership, and positioning for the next level.",
    lead: "This is the stage where a CV stops being a record of jobs held and becomes an argument for the next one. Most CVs at this level never make the switch.",
    overview:
      "With several years behind you, the reader assumes competence and is looking for something else: what you own, what you improved, and whether you are ready for more scope. A CV that still reads like a job description is the single most common reason strong mid-career candidates get overlooked.",
    cvFocus: [
      "Ownership: what was yours rather than what you contributed to",
      "Outcomes with numbers attached wherever the work allows",
      "Progression visible across roles, not just a list of employers",
      "Depth in a specialism rather than breadth across everything",
      "The next role's requirements reflected in how current work is described",
    ],
    whatChanges:
      "Responsibilities stop being interesting. At this level the reader already knows roughly what the job involves, so the CV has to say what you specifically did inside it.",
    commonMistakes: [
      "Copying the job description into the CV",
      "The same four bullets repeated under every employer",
      "No numbers, in roles where numbers exist",
      "Listing every tool and technique rather than showing depth in the relevant ones",
      "A summary that describes a personality rather than a professional",
    ],
  },
  {
    slug: "senior-professional",
    name: "Senior Professional",
    years: "8 to 15 years",
    metaTitle: "Senior Professional CV Writing Guidance",
    metaDescription:
      "How to write a senior CV: scope, complexity, influence beyond your own work, and how to keep 15 years readable in two pages.",
    lead: "A senior CV has the opposite problem to a graduate CV: too much material and not enough room. Editing is the whole job.",
    overview:
      "At senior level the reader is assessing scope and complexity rather than capability. They want to know the size of what you handled, how difficult it was, and what changed because you were the one handling it. Early roles become one line each.",
    cvFocus: [
      "Scope stated plainly: budget, team, region, portfolio, revenue",
      "Complexity, because a difficult small project can outweigh an easy large one",
      "Influence beyond your own output: standards set, people developed, decisions shaped",
      "Recent work in detail, older work compressed hard",
      "Strategic contribution alongside delivery",
    ],
    whatChanges:
      "Volume becomes the enemy. Fifteen years described evenly reads as a career with no trajectory. The last five years should take most of the space.",
    commonMistakes: [
      "Giving a role from 2011 the same space as the current one",
      "A four-page CV that is really a two-page CV with duplication",
      "Still describing hands-on tasks when the role has moved beyond them",
      "No evidence of influence on anything outside your direct output",
      "Reluctance to cut early roles to a single line",
    ],
  },
  {
    slug: "executive",
    name: "Executive",
    years: "15+ years",
    metaTitle: "Executive CV Writing Guidance",
    metaDescription:
      "How to write an executive CV: business results, remit, board-level context, and why executive CVs are read differently from every other level.",
    lead: "An executive CV is read as a business case. Functional detail is assumed; what is being assessed is judgement, remit and results at the level of the organisation.",
    overview:
      "At executive level the audience changes. Boards, chairs and search consultants read for commercial outcomes, the size of the remit, and evidence that you have handled the specific situation they are hiring for, which is usually growth, turnaround or transformation.",
    cvFocus: [
      "Business results: revenue, margin, cost, market position",
      "Remit: P&L size, headcount, geography, functions reporting in",
      "The situation you were hired into and what state you left it in",
      "Board and stakeholder exposure, including investors and regulators",
      "Strategic decisions and what followed from them",
    ],
    whatChanges:
      "The CV stops describing what you manage and starts describing what you changed. Functional expertise becomes context rather than content.",
    commonMistakes: [
      "Describing the size of the organisation rather than the size of your remit",
      "Strategy language with no outcomes attached",
      "Omitting the context a result depended on, which makes it unbelievable",
      "Six pages, when the audience reads fewer than most",
      "Nothing about the type of situation you are strongest in",
    ],
  },
];

import { levelsExtra, situationsExtra } from "@/lib/content/stages-extra";
import { aeoLevels, aeoSituations } from "@/lib/content/aeo-retrofit";

/** Ordered by seniority: student first, c-suite last. */
const LEVEL_ORDER = ["student", "graduate", "entry-level", "professional", "senior-professional", "manager", "director", "executive", "c-suite"];

export const careerLevels: CareerLevel[] = [
  ...baseLevels.map((l) => ({ ...aeoLevels[l.slug], ...l })),
  ...levelsExtra,
].sort((a, b) => LEVEL_ORDER.indexOf(a.slug) - LEVEL_ORDER.indexOf(b.slug));

export function getCareerLevel(slug: string): CareerLevel | undefined {
  return careerLevels.find((l) => l.slug === slug);
}

/* ------------------------------------------------------------------ */

export type CareerSituation = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  /** The candidate's actual problem, named honestly. */
  problem: string;
  approach: Array<{ heading: string; body: string }>;
  commonMistakes: string[];
  /** AEO: answer-first summary, 40-70 words. */
  quickAnswer?: string;
  /** AEO: question-led FAQs, answer-first. */
  faqs?: Array<{ q: string; a: string }>;
  /** ISO date of last substantive review. */
  updated?: string;
};

const baseSituations: CareerSituation[] = [
  {
    slug: "career-change",
    name: "Changing career",
    metaTitle: "CV for a Career Change",
    metaDescription:
      "How to write a CV when changing career or industry: leading with transferable evidence, handling the obvious objection, and what to leave out.",
    lead: "A career-change CV has one job: make the change look deliberate rather than desperate.",
    problem:
      "The reader's first thought is that you do not have the experience for the role, and their second is to wonder why you are leaving what you were doing. A chronological CV answers neither question and lets both objections stand.",
    approach: [
      {
        heading: "Name the change in the first three lines",
        body: "Leaving it implicit means the reader discovers it as a discrepancy. Stating it turns it into a decision you have made and can explain.",
      },
      {
        heading: "Translate, do not just list",
        body: "The work you did has an equivalent in the new field. A teacher managing a classroom, a curriculum and parent relationships has stakeholder management, planning and communication evidence, but only when it is written in the target field's language.",
      },
      {
        heading: "Lead with the closest evidence",
        body: "Restructure so that the most relevant experience appears first, even if it is not the most recent. Relevance beats chronology when the two conflict.",
      },
      {
        heading: "Show the investment you have made",
        body: "Courses, certifications, freelance work or personal projects in the new field are what turn a claimed change into a demonstrated one.",
      },
    ],
    commonMistakes: [
      "Hiding the change and hoping it goes unnoticed",
      "Apologising for the previous career in the summary",
      "Listing old duties in old language, forcing the reader to do the translation",
      "Dropping all previous experience, which creates an unexplained gap",
      "Applying to roles two levels above where a changer realistically starts",
    ],
  },
  {
    slug: "career-break",
    name: "Returning after a career break",
    metaTitle: "CV After a Career Break",
    metaDescription:
      "How to handle a career break on a CV: where to address it, how much to explain, and how to show your skills are current.",
    lead: "A break is not the problem. An unexplained gap that the reader has to speculate about is the problem.",
    problem:
      "Employers are not usually hostile to a break, whether it was for caring, health, study or relocation. What they are wary of is currency: whether your skills and knowledge still match the market after time away.",
    approach: [
      {
        heading: "State it briefly and without apology",
        body: "One line in the CV timeline, giving the reason in a few words. A stated break closes the question; a gap leaves it open.",
      },
      {
        heading: "Prove currency",
        body: "Anything that kept you connected counts: a course, freelance work, volunteering, a professional membership, keeping a certification current. This is the part employers actually care about.",
      },
      {
        heading: "Put the strongest experience first",
        body: "If your best work is pre-break, a structure that leads with skills and achievements keeps it in view rather than pushing it to page two.",
      },
      {
        heading: "Leave the detail for the interview",
        body: "The CV needs enough to remove the question. The full story belongs in a conversation, if it belongs anywhere.",
      },
    ],
    commonMistakes: [
      "Leaving the gap unexplained and hoping the reader moves on",
      "Over-explaining personal circumstances in the CV itself",
      "Presenting the break as a disqualification in the summary",
      "Nothing at all that demonstrates current knowledge",
      "Inflating small activities during the break into full roles",
    ],
  },
  {
    slug: "first-job",
    name: "Applying for a first job",
    metaTitle: "CV for Your First Job",
    metaDescription:
      "How to write a CV with no formal work experience: what counts as evidence, how to structure it, and the mistakes that make a first CV weak.",
    lead: "With no formal experience, the CV has to be built from everything else you have actually done. There is usually more of it than people think.",
    problem:
      "The instinct is to apologise for the empty experience section and fill the space with education detail. That produces a CV about what you studied rather than about what you can do.",
    approach: [
      {
        heading: "Decide on one target role",
        body: "A first CV aimed at three different job types convinces nobody. Pick one and write everything towards it.",
      },
      {
        heading: "Treat projects as experience",
        body: "A final-year project, a freelance job, a family business you helped run: write them with the same structure as a job, with what you did and what resulted.",
      },
      {
        heading: "Show initiative, since results are thin",
        body: "Things you started, organised or taught yourself carry real weight when there is no employment record to read.",
      },
      {
        heading: "Keep it to one page",
        body: "A first CV that runs to two pages is padded, and the padding is visible.",
      },
    ],
    commonMistakes: [
      "Listing every module and grade since school",
      "\"No experience\" stated anywhere on the document",
      "Generic claims about being hardworking and a team player with nothing behind them",
      "Ignoring part-time and unpaid work that demonstrated responsibility",
      "One CV sent to every employer without adjustment",
    ],
  },
  {
    slug: "relocating-abroad",
    name: "Applying for jobs abroad",
    metaTitle: "CV for Applying to Jobs Abroad",
    metaDescription:
      "How to prepare a CV for overseas applications: local conventions, work authorisation, qualification equivalence and making experience transferable.",
    lead: "The most common reason a strong overseas application fails is not the candidate. It is a CV written for the wrong country.",
    problem:
      "Conventions differ in ways that matter: length, photographs, personal details, tone and what is expected in a summary. On top of that, the employer is quietly assessing whether your experience, qualifications and right to work actually transfer.",
    approach: [
      {
        heading: "Write to the destination's conventions",
        body: "A UK CV is two pages with no photo and no personal details. Australia accepts longer. Gulf markets often expect a photo and nationality. Getting this wrong signals unfamiliarity before the content is read.",
      },
      {
        heading: "Make experience legible to a stranger",
        body: "Employer names that mean nothing abroad need one line of context: sector, size, market position. Local qualifications need their equivalence stated.",
      },
      {
        heading: "Address work authorisation directly",
        body: "One clear line about your status, sponsorship requirement or eligibility saves the employer a question they will otherwise answer by moving on.",
      },
      {
        heading: "Use the destination's professional vocabulary",
        body: "Job titles and process names differ between markets. Using the local term for the same work removes friction from both the parser and the reader.",
      },
    ],
    commonMistakes: [
      "Sending the same CV to every country",
      "Including personal details that are normal at home and inappropriate abroad",
      "Leaving visa status unmentioned, which employers read as a complication",
      "Unexplained local employer names and qualifications",
      "A five-page CV to a market that expects two",
    ],
  },
  {
    slug: "redundancy",
    name: "After redundancy",
    metaTitle: "CV After Redundancy",
    metaDescription:
      "How to handle redundancy on a CV: whether to mention it, how to present the end date, and how to keep the focus on your record.",
    lead: "Redundancy is a business decision, not a performance one, and the CV should reflect that without making a point of it.",
    problem:
      "Two things worry candidates here: the end date, and whether to explain it. Over-explaining draws attention to something most employers treat as routine, while ignoring the timeline entirely leaves an unexplained stop.",
    approach: [
      {
        heading: "Let the dates be the dates",
        body: "An end date needs no annotation on the CV. Redundancy is common enough that a recent end date raises no eyebrow on its own.",
      },
      {
        heading: "Mention it once if the context helps",
        body: "If the whole site closed or the function was cut, a short clause in the cover letter handles it cleanly. It does not belong in the CV.",
      },
      {
        heading: "Strengthen the record instead",
        body: "The best answer to the question is a CV full of outcomes. Attention spent on explaining the ending is better spent on the four years before it.",
      },
      {
        heading: "Keep the timeline moving",
        body: "Courses, contract work or volunteering since the role ended show momentum, which is what employers actually look for.",
      },
    ],
    commonMistakes: [
      "Writing \"made redundant\" in the CV, which no employer requires",
      "Explaining the company's financial situation at length",
      "Leaving a growing gap with nothing in it",
      "Lowering the target role out of anxiety rather than strategy",
      "A defensive summary that leads with the ending rather than the record",
    ],
  },
];

export const careerSituations: CareerSituation[] = [
  ...baseSituations.map((x) => ({ ...aeoSituations[x.slug], ...x })),
  ...situationsExtra,
];

export function getCareerSituation(slug: string): CareerSituation | undefined {
  return careerSituations.find((s) => s.slug === slug);
}
