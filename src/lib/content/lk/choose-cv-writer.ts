import { BASE_PRICES, formatLKR } from "@/lib/pricing";
import { site } from "@/lib/site";
import type { LkGuide } from "./types";

const cv = BASE_PRICES.cv;

/** Targets: best cv writer in sri lanka, cv writers in sri lanka, cv writing service, cv writer, cv writing price, cv maker sri lanka. */
export const chooseCvWriter: LkGuide = {
  slug: "how-to-choose-a-cv-writer-sri-lanka",
  lang: "en",
  eyebrow: "Buyer's guide · Sri Lanka",
  h1: "How to choose the best CV writer in Sri Lanka",
  metaTitle: "Best CV Writer in Sri Lanka? How to Choose (2026 Checklist)",
  metaDescription:
    "How to choose a CV writer in Sri Lanka: credentials, real reviews, samples, ATS, revisions and fair LKR prices, plus red flags to avoid.",
  lead: "There are many CV writers in Sri Lanka, from Facebook pages to certified professionals. This checklist helps you compare them fairly, including the one whose site you are reading.",
  quickAnswer:
    `Choose a CV writer in Sri Lanka by comparing the named writer, relevant examples, credentials, public reviews, target-role research, deliverables and revision terms. The best fit depends on your career and application. Chanuka Jeewantha's published ATS CV prices are ${formatLKR(cv["under-2"])} for fresh graduates, ${formatLKR(cv["3-to-9"])} for professionals and ${formatLKR(cv["over-10"])} for executives. Those are his prices, not an independently measured market average.`,
  published: "2026-10-04",
  updated: "2026-10-14",
  keyFacts: [
    { label: "Who writes it", value: "One named writer, ideally the person whose reputation is on the business" },
    { label: "Credentials", value: "A recognised certification such as CPRW, plus years of practice" },
    { label: "Proof", value: "Google reviews with names and detail, and anonymised samples" },
    { label: "Format", value: "Plain, single-column, ATS-readable, Word and PDF files" },
    { label: "Chanuka's ATS CV prices", value: `${formatLKR(cv["under-2"])} / ${formatLKR(cv["3-to-9"])} / ${formatLKR(cv["over-10"])}` },
    { label: "Red flag", value: "Any promise of a guaranteed job or visa" },
  ],
  sections: [
    {
      id: "checklist",
      heading: "The 7-point checklist",
      bullets: [
        "Who actually writes your CV? Ask for the writer's name. In some services, the person who sells is not the person who writes.",
        "Credentials and experience. A certification such as CPRW (Certified Professional Resume Writer) shows the writer has been tested on resume writing standards. Years of practice and volume matter too.",
        "Real reviews. Look for Google reviews with names, detail and dates over several years, not only screenshots on a Facebook page.",
        "Samples. A good writer can show anonymised before-and-after examples in your field.",
        "ATS-friendly format. Ask whether the CV uses a single column, standard headings and no text inside images. Fancy designs often fail software screening.",
        "Revisions and turnaround in writing. Know how many revision rounds are included and when you will receive the draft.",
        "A clear price in LKR. The full price should be shown before you pay, with nothing added later.",
      ],
    },
    {
      id: "price",
      heading: "How much does a CV writer cost in Sri Lanka?",
      paragraphs: [
        "Compare current quotes for the same scope: rewriting is different from typing existing text into a template. Ask which services, file formats and revision terms are included. There is no independently verified market price survey behind this guide.",
        "The table below shows Chanuka's published ATS CV prices. These are single-service prices, not a promise of a job, interview or salary increase. Foreign-job CVs, cover letters and LinkedIn services have their own prices.",
      ],
      table: {
        caption: "Chanuka Jeewantha's published ATS CV prices",
        head: ["Career level", "ATS CV price", "Experience level"],
        rows: [
          ["Students and fresh graduates", formatLKR(cv["under-2"]), "Less than 1 year"],
          ["Professionals", formatLKR(cv["3-to-9"]), "1 to 9 years"],
          ["Executives", formatLKR(cv["over-10"]), "More than 9 years"],
        ],
      },
    },
    {
      id: "red-flags",
      heading: "Red flags to avoid",
      bullets: [
        "A guaranteed job, interview or foreign visa. No CV writer can promise this.",
        "No questions about your target role before writing starts.",
        "The same colourful template used for every client.",
        "Requests for your passport or large fees connected to overseas jobs. Use only SLBFE licensed agencies for that.",
        "Reviews that exist only as screenshots, with no public profile behind them.",
        "No revision included, or the price changing after you have shared your details.",
      ],
    },
    {
      id: "questions",
      heading: "Questions to ask before you pay",
      bullets: [
        "Who will write my CV, and can I speak to them directly?",
        "What do you need from me: my current CV, job adverts, a questionnaire?",
        "Will the CV be ATS-friendly, and will I get Word and PDF files?",
        "How many revisions are included, and when will I get the first draft?",
        "Can you write for a foreign job if I need one later?",
        "What exactly is included in the price?",
      ],
    },
    {
      id: "cv-maker-vs-writer",
      heading: "CV maker app, DIY or a professional writer?",
      paragraphs: [
        "A free CV maker is fine for a first part-time job or when you already know exactly what to write. Our CV format guide shows the structure Sri Lankan employers expect, so you can do it yourself.",
        "A professional writer is worth it when the stakes are higher: your first graduate job in a competitive field, a move up to management, a career change, a gap to explain, or a foreign job where the conventions are different. The value is in the content, not the design: knowing what to say about your experience and what to leave out.",
      ],
    },
    {
      id: "disclosure",
      heading: "Where Chanuka Jeewantha fits",
      paragraphs: [
        `For transparency, since this guide is on his site: Chanuka Jeewantha holds the CPRW and CPCC certifications, has ${site.yearsExperience} years of experience and has written ${site.cvsWritten} CVs. He is rated ${site.rating.score} from ${site.rating.count} Google reviews, and offers supervised Essential and personally crafted Signature services. An Essential ATS CV is ${formatLKR(cv["under-2"])} for freshers, ${formatLKR(cv["3-to-9"])} for professionals with 1 to 9 years of experience and ${formatLKR(cv["over-10"])} for executives, with one revision round and Word and PDF files.`,
        "Use the checklist above to compare him fairly with any other writer you are considering.",
      ],
    },
  ],
  takeaways: [
    "Choose a named writer who writes your CV personally.",
    "Check credentials (such as CPRW), real Google reviews and samples.",
    "Insist on an ATS-friendly format, revisions and a clear LKR price.",
    "Walk away from guaranteed jobs or visas.",
  ],
  faqs: [
    { q: "Who is the best CV writer in Sri Lanka?", a: `It depends on your field and goals, so compare writers on who writes the CV, credentials, real reviews, samples, ATS format, revisions and price. Chanuka Jeewantha is a CPRW and CPCC certified CV writer with ${site.cvsWritten} CVs written over ${site.yearsExperience} years and a ${site.rating.score} rating from ${site.rating.count} Google reviews, and offers supervised Essential and personally crafted Signature services.` },
    { q: "How much does CV writing cost in Sri Lanka?", a: `Providers and scopes differ, so compare current quotes. Chanuka's published ATS CV prices are ${formatLKR(cv["under-2"])} for students and fresh graduates, ${formatLKR(cv["3-to-9"])} for professionals, and ${formatLKR(cv["over-10"])} for executives. Packages with other services have different totals.` },
    { q: "Is a professional CV writer worth it?", a: "It is worth it when the job matters: a competitive graduate role, a promotion, a career change or a foreign job. A free template is enough when you already know exactly what to write." },
    { q: "What is CPRW?", a: "CPRW stands for Certified Professional Resume Writer, a professional certification for resume and CV writers that tests their knowledge of writing standards and practical writing. CPCC (Certified Professional Career Coach) is a related certification for career coaching." },
    { q: "Can a CV writer guarantee me a job?", a: "No. A clear, relevant CV helps present your experience, but interviews and offers depend on employer decisions, qualifications, competition and demand. A CV writing service cannot guarantee a job or visa." },
    { q: "Do I need to meet the CV writer in person in Colombo?", a: "No. Professional CV writing works well online: you share your current CV and the jobs you want, answer a short questionnaire and discuss details on WhatsApp or a call. That is how clients across Sri Lanka and overseas work with Chanuka." },
  ],
  sources: [
    { label: "Sri Lanka Bureau of Foreign Employment: licensed agencies", url: "https://www.slbfe.lk/" },
  ],
  related: [
    { href: "/cv-format-sri-lanka", label: "CV format for Sri Lanka" },
    { href: "/cv-format-sinhala", label: "CV format in Sinhala" },
    { href: "/foreign-job-cv-sri-lanka", label: "CV for foreign jobs" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about/chanuka-jeewantha", label: "About Chanuka Jeewantha" },
    { href: "/packages", label: "Packages and prices" },
  ],
  cta: {
    heading: "Compare, then decide",
    body: "See exactly what is included and what it costs in LKR before you share anything. Build your package in under a minute.",
    href: "/#build",
    label: "Build your package",
  },
};
