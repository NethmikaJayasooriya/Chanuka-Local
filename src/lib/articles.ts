/**
 * CAREER ADVICE ARTICLES
 * ------------------------------------------------------------------
 * Each entry generates one post at /career-advice/{slug}. These are
 * informational, top-of-funnel pages, kept deliberately separate from
 * the commercial service pages. Every article carries genuine, usable
 * guidance; a post that only restates a service page in prose does not
 * go up.
 */

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  readMinutes: number;
  /** ISO date, kept for ordering and display. */
  updated: string;
  excerpt: string;
  intro: string;
  sections: ArticleSection[];
  takeaways: string[];
  relatedArticles: string[];
  relatedLinks: Array<{ href: string; label: string }>;
  /** ISO first-publication date. */
  published?: string;
  /** AEO: answer-first summary, 40-70 words. */
  quickAnswer?: string;
  faqs?: Array<{ q: string; a: string }>;
  /** Authoritative references only. */
  sources?: Array<{ label: string; url: string }>;
};

const baseArticles: Article[] = [
  {
    slug: "how-ats-reads-your-cv",
    title: "How an ATS actually reads your CV",
    metaTitle: "How an ATS Actually Reads Your CV (and How to Pass It)",
    metaDescription:
      "What an applicant tracking system really does with your CV, why good candidates get filtered out, and the formatting and keyword choices that let a CV through.",
    category: "ATS and formatting",
    readMinutes: 6,
    updated: "2026-09-01",
    excerpt:
      "An ATS is not the villain it is made out to be, but it is unforgiving about a handful of specific things. Here is what it actually does, and what quietly gets a good CV filtered.",
    intro:
      "Applicant tracking systems get blamed for a lot of rejections they had nothing to do with. They also filter out plenty of strong candidates for reasons that have nothing to do with ability. Understanding what the software actually does, rather than the myths around it, is the difference between writing for the machine at the expense of the human, and writing something that passes both.",
    sections: [
      {
        heading: "What an ATS is, and what it is not",
        paragraphs: [
          "An applicant tracking system is database software. It stores applications, lets recruiters search and filter them, and parses your CV into structured fields: name, contact details, work history, education, skills. It is not an artificial intelligence deciding whether you deserve the job, and in most companies it does not auto-reject anyone. A human still makes the call.",
          "What it does do is decide how findable you are. If the parser cannot read your CV cleanly, your experience lands in the wrong fields or disappears, and when a recruiter searches for a skill you actually have, you do not come up. You were not rejected. You were never surfaced.",
        ],
      },
      {
        heading: "The formatting that breaks parsing",
        paragraphs: [
          "A handful of design choices cause most parsing failures. Text inside images or logos cannot be read at all. Multi-column layouts often get read across the columns, scrambling the order. Tables can collapse into unreadable strings. Headers and footers are sometimes ignored entirely, which is a problem if your contact details live there.",
          "The fix is not an ugly CV. It is a single-column layout with standard section headings, real text rather than text baked into graphics, and contact details in the body rather than the header. A clean, well-designed CV and a parseable one are the same document. The trouble comes from decorative templates that prioritise looking different over being read.",
        ],
      },
      {
        heading: "Keywords, and how they actually count",
        paragraphs: [
          "Recruiters search the database using the language of the job description. If the posting says \"stakeholder management\" and your CV says \"worked with senior people across the business\", you describe the same thing but you will not appear in that search. Matching the posting's own terms, where they are genuinely true of you, is what makes you findable.",
          "This is not keyword stuffing. A block of skills with no evidence behind them reads as padding to the human who eventually opens the CV, and carries no weight. The keywords that count are the ones attached to real experience in your work history, because they survive both the search and the read.",
        ],
      },
    ],
    takeaways: [
      "An ATS mostly filters for findability, not merit; a human still decides.",
      "Single column, standard headings, real text, contact details in the body.",
      "Mirror the job posting's exact terms where they are true of you.",
      "Keywords only count when the experience behind them is visible.",
    ],
    relatedArticles: ["responsibilities-into-achievements", "how-long-should-a-cv-be"],
    relatedLinks: [
      { href: "/cv-writing", label: "ATS Friendly CV service" },
      { href: "/cv-review", label: "CV review" },
    ],
  },
  {
    slug: "responsibilities-into-achievements",
    title: "Turning responsibilities into achievements",
    metaTitle: "Turning Responsibilities Into Achievements on Your CV",
    metaDescription:
      "The single change that separates a strong CV from a weak one: rewriting duties as evidenced achievements. The shape a bullet should take, with before-and-after examples.",
    category: "Writing technique",
    readMinutes: 5,
    updated: "2026-08-20",
    excerpt:
      "Most CVs describe the job. The ones that get interviews describe the person doing it. Here is how to make the switch, with the exact shape a strong bullet takes.",
    intro:
      "If you change one thing about your CV, change this. A responsibility describes what the role involved, which is the same for everyone who held it. An achievement describes what you did with it, which is yours alone. Recruiters read hundreds of the first kind. The second kind is what they remember.",
    sections: [
      {
        heading: "Why responsibilities say nothing",
        paragraphs: [
          "\"Responsible for managing the sales pipeline\" tells a reader what your job was, not whether you were good at it. Every person who has ever held that title could write the same line. It fills space and communicates nothing that helps the reader choose you over the next application.",
          "The reader is trying to answer one question: what happens when this person owns something? A responsibility does not answer it. An achievement does, because it shows the outcome you were actually accountable for.",
        ],
      },
      {
        heading: "The shape of a strong bullet",
        paragraphs: [
          "A good achievement bullet has three parts: the situation or task, the action you took, and the result, ideally with a number. Not every bullet needs all three spelled out, but the result is the part people drop, and it is the part that matters most.",
          "Before: \"Responsible for improving the onboarding process.\" After: \"Redesigned customer onboarding, cutting time-to-first-value from 11 days to 4 and reducing first-month churn by 18%.\" Same job. One version proves you can do it.",
          "The numbers do not have to be dramatic. A percentage, a time saved, a volume handled, a cost avoided: any of these turns a claim into evidence. If you genuinely cannot quantify something, name the concrete outcome instead: the process that got adopted, the client that renewed, the problem that stopped recurring.",
        ],
      },
      {
        heading: "Finding your numbers",
        paragraphs: [
          "Most people insist they have no numbers, then find a dozen once they look. How much did you handle, how often, for how many people or clients? What was it like before you arrived, and after? How long did something take, and how long after you changed it? What did a mistake cost, and did yours go down?",
          "Even rough figures beat none. \"Roughly 40 support tickets a day\" is honest and specific. \"Handled support tickets\" is neither.",
        ],
      },
    ],
    takeaways: [
      "A responsibility is shared by everyone with the title; an achievement is yours.",
      "Use the shape: situation, action, result, with a number where you can.",
      "The result is the part people drop, and the part that matters most.",
      "If you cannot quantify, name the concrete outcome instead.",
    ],
    relatedArticles: ["how-ats-reads-your-cv", "recruiter-first-read"],
    relatedLinks: [
      { href: "/cv-writing", label: "ATS Friendly CV service" },
      { href: "/job-roles", label: "Achievement examples by role" },
    ],
  },
  {
    slug: "how-long-should-a-cv-be",
    title: "How long should a CV be?",
    metaTitle: "How Long Should a CV Be? (By Market and Career Stage)",
    metaDescription:
      "The real answer to CV length: it depends on your market and your stage. Two pages for the UK, longer for Australia and the Gulf, and how to cut without losing what matters.",
    category: "CV structure",
    readMinutes: 5,
    updated: "2026-08-10",
    excerpt:
      "Two pages is the default advice, and it is wrong as often as it is right. Length depends on your market and your stage. Here is how to decide, and how to cut.",
    intro:
      "\"Keep it to two pages\" is the most repeated CV rule and one of the least reliable, because it assumes one market and one career stage. The honest answer is that length depends on where you are applying and how much relevant experience you have. Getting it wrong in either direction costs you.",
    sections: [
      {
        heading: "It depends on the market",
        paragraphs: [
          "The UK expects two pages, occasionally one for early-career, and a longer CV there reads as an inability to prioritise. Australia and New Zealand are comfortable with two to four pages when the detail is relevant, and government roles there add key selection criteria on top. The Gulf accepts two to three pages and expects more personal and project detail. Singapore rewards concision, often one to two pages.",
          "Applying the wrong market's length is a common and quiet mistake. A three-page CV into a UK role, or a stripped one-page CV into an Australian government role, both signal that you do not know the market you are applying to.",
        ],
      },
      {
        heading: "It depends on your stage",
        paragraphs: [
          "A graduate with one internship does not need two pages, and padding to reach them weakens the CV. A senior professional with fifteen years of relevant work cannot compress into one page without cutting the evidence that justifies the level. Match the length to what you genuinely have to say that is relevant to this role.",
          "The keyword is relevant. Fifteen years does not mean every role gets equal space. The last decade earns detail; the early jobs shrink to a line or two, or drop off entirely once they stop adding anything.",
        ],
      },
      {
        heading: "How to cut without losing what matters",
        paragraphs: [
          "When a CV runs long, the fix is rarely smaller margins. Cut the oldest and least relevant roles to a single line. Remove responsibilities that are assumed in the job anyway. Delete the generic profile adjectives that could describe anyone. Merge repetitive bullets that make the same point twice.",
          "What stays is the recent, the relevant and the evidenced. If a line does not help this specific application, its length is not the problem. Its presence is.",
        ],
      },
    ],
    takeaways: [
      "Length depends on market: two pages UK, longer for Australia and the Gulf, concise for Singapore.",
      "Match length to relevant experience, not to a universal rule.",
      "Recent roles earn detail; old ones shrink to a line or drop off.",
      "Cut assumed duties and generic adjectives before you touch the margins.",
    ],
    relatedArticles: ["cv-for-a-new-market", "recruiter-first-read"],
    relatedLinks: [
      { href: "/international-job-seekers", label: "CV conventions by market" },
      { href: "/cv-writing", label: "CV writing service" },
    ],
  },
  {
    slug: "cv-for-a-new-market",
    title: "Writing a CV for a market you have never worked in",
    metaTitle: "Writing a CV for a Market You Have Never Worked In",
    metaDescription:
      "Applying abroad for the first time? What actually changes when you write a CV for a new country: format, work-rights signalling, credentials and the local-experience question.",
    category: "International careers",
    readMinutes: 6,
    updated: "2026-07-28",
    excerpt:
      "Applying to a country you have never worked in is not about a better CV. It is about a differently built one. Here is what changes, and what employers there quietly screen for.",
    intro:
      "The candidate is rarely the problem when an international application fails. The document is. A CV written for one market and sent into another arrives speaking the wrong language: wrong length, wrong conventions, and silent on the things that market screens for first. Nobody writes back to explain, so the mistake repeats.",
    sections: [
      {
        heading: "The format changes more than you think",
        paragraphs: [
          "Photo or no photo, personal details or none, two pages or four, objective or profile: these are not universal, and they flip between markets. A Gulf CV carries a photo, nationality and visa status as standard. A UK or Canadian CV deliberately omits all three. Neither is wrong, but using one market's format in the other signals unfamiliarity before a word of your experience is read.",
          "Before you rewrite anything, learn the destination's conventions and match them. This is the fastest, highest-impact change, and the one most overseas applicants skip.",
        ],
      },
      {
        heading: "Work rights are a screening factor, not a footnote",
        paragraphs: [
          "In most markets, whether you can legally work there is one of the first things an employer needs to know, and ambiguity reads as the hard case. If you already hold the right to work, through a visa, residency, ancestry or a points-based route, say so plainly. It removes the largest silent objection an employer has to an overseas applicant.",
          "If you need sponsorship, that is not fatal in sectors with shortages, but be realistic about which employers can offer it and target them rather than every posting.",
        ],
      },
      {
        heading: "Credentials and the local-experience question",
        paragraphs: [
          "Many markets check qualifications and, in regulated professions, licensing or equivalency. Make these easy to verify rather than implied. Where a market prefers local experience, as Canada is known to, a CV cannot invent it, but it can foreground internationally recognisable employers, standardised skills and any credential recognition already underway.",
          "None of this is about overselling. It is about removing the specific doubts that market has about someone applying from outside it.",
        ],
      },
    ],
    takeaways: [
      "Match the destination's CV format before rewriting anything else.",
      "State work-rights status plainly; ambiguity reads as the hard case.",
      "Make credentials easy to verify, especially in regulated professions.",
      "Address the local-experience preference with recognisable employers and standardised skills.",
    ],
    relatedArticles: ["how-long-should-a-cv-be", "how-ats-reads-your-cv"],
    relatedLinks: [
      { href: "/international-job-seekers", label: "CV conventions by market" },
      { href: "/cv-writing", label: "CV writing service" },
    ],
  },
  {
    slug: "recruiter-first-read",
    title: "What a recruiter sees in the first seven seconds",
    metaTitle: "What a Recruiter Sees in the First Seven Seconds of Your CV",
    metaDescription:
      "A recruiter's first pass over a CV takes seconds, and it decides whether they read on. What they look at, in what order, and how to make those seconds work for you.",
    category: "Recruiter psychology",
    readMinutes: 4,
    updated: "2026-07-15",
    excerpt:
      "The first pass over a CV is a scan, not a read, and it decides whether there is a second pass at all. Here is what the eye lands on, and how to win those seconds.",
    intro:
      "Before anyone reads your CV properly, they scan it. That first pass is a few seconds long and it answers one question: is this worth more time? Everything about the top third of the page is really about surviving that scan, because a CV that fails it never gets the careful read the rest of it was written for.",
    sections: [
      {
        heading: "Where the eye actually goes",
        paragraphs: [
          "In the first pass a recruiter looks at your most recent job title and employer, how long you have been there and in the role before it, and the top few lines of the page. They are pattern-matching against the role they are filling: right level, right kind of company, no alarming gaps, roughly the right trajectory.",
          "This means the top third of your CV does almost all the work in those seconds. If the most relevant thing about you is on page two, the scan may never reach it.",
        ],
      },
      {
        heading: "Making the top third earn its place",
        paragraphs: [
          "Lead with a short, targeted profile that states what you are and the level you operate at, tuned to this role rather than a generic summary. Put your current title, employer and dates where they are immediately visible. If a key qualification or a headline achievement is what makes you a fit, surface it near the top rather than burying it in the third bullet of the second job.",
          "The goal is that a five-second scan lands on the right signals in the right order, so the reader decides to slow down and actually read.",
        ],
      },
    ],
    takeaways: [
      "The first pass is a scan of seconds, and it decides if there is a second pass.",
      "The eye goes to recent title, employer, dates and the top few lines.",
      "The top third of the CV does most of the work; put your strongest signals there.",
      "A targeted profile beats a generic summary for surviving the scan.",
    ],
    relatedArticles: ["responsibilities-into-achievements", "how-ats-reads-your-cv"],
    relatedLinks: [
      { href: "/cv-writing", label: "ATS Friendly CV service" },
      { href: "/cv-review", label: "CV review" },
    ],
  },
];

import { articlesA } from "@/lib/content/articles-a";
import { articlesB } from "@/lib/content/articles-b";
import { aeoArticles, articleCategoryFix } from "@/lib/content/aeo-retrofit";

export const articles: Article[] = [
  ...baseArticles.map((a) => ({
    ...aeoArticles[a.slug],
    ...a,
    category: articleCategoryFix[a.slug] ?? a.category,
    published: a.published ?? a.updated,
  })),
  ...articlesA,
  ...articlesB,
];

/** Category hubs at /career-advice/{slug}. */
export const ARTICLE_CATEGORIES: Array<{ slug: string; name: string; description: string }> = [
  { slug: "cv-writing", name: "CV writing", description: "How to write, structure and strengthen a CV that gets read and shortlisted." },
  { slug: "ats", name: "ATS and formatting", description: "How applicant tracking systems read a CV, and the formats and keywords that pass them." },
  { slug: "linkedin", name: "LinkedIn", description: "Headlines, About sections and profile strategy that get recruiters to reach out." },
  { slug: "cover-letters", name: "Cover letters", description: "When a cover letter matters, and how to write one that adds something the CV cannot." },
  { slug: "job-search", name: "Job search", description: "Tailoring applications, following up and running a job search that converts." },
  { slug: "interviews", name: "Interviews", description: "Structured answers, the STAR method and the questions every interview opens with." },
  { slug: "career-change", name: "Career change", description: "Moving into a new role or industry, and making the move read as deliberate." },
  { slug: "executive-careers", name: "Executive careers", description: "Board-level positioning, search firms and CVs for senior leadership roles." },
  { slug: "graduates", name: "Graduates", description: "First professional CVs, internships and applying with little formal experience." },
  { slug: "international-careers", name: "International careers", description: "CV conventions by country and applying for jobs in another market." },
];

export function getArticleCategory(slug: string) {
  return ARTICLE_CATEGORIES.find((c) => c.slug === slug);
}

export function categorySlugFor(name: string): string {
  return ARTICLE_CATEGORIES.find((c) => c.name === name)?.slug ?? "cv-writing";
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export const articleCategories = Array.from(new Set(articles.map((a) => a.category)));
