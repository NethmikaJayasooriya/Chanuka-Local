import { BASE_PRICES, deliveries, formatLKR } from "@/lib/pricing";
import { site } from "@/lib/site";

export type Faq = { q: string; a: string };

const cv = BASE_PRICES.cv;
const win = (id: string) => deliveries.find((d) => d.id === id)?.window ?? "";

/**
 * FAQs for the Sri Lanka site. Every number comes from pricing.ts or
 * site.ts, so answers quoted by Google or an AI assistant always match
 * what a customer actually pays.
 */
export const faqGroups: Array<{ title: string; items: Faq[] }> = [
  {
    title: "Ordering and pricing",
    items: [
      {
        q: "How much does CV writing cost in Sri Lanka?",
        a: `With Chanuka Jeewantha an ATS CV is ${formatLKR(cv["under-2"])} for students and fresh graduates, ${formatLKR(cv["3-to-9"])} for professionals with 1 to 9 years of experience, and ${formatLKR(cv["over-10"])} for executives with more than 9 years. LinkedIn optimisation and cover letters are priced the same way, and the career packs combine them. The total shows before you order and nothing is added later.`,
      },
      {
        q: "Why does experience level change the price?",
        a: "It changes the depth of the work. A fresh graduate's CV needs positioning and structure. A CV with fifteen years on it needs a leadership story, scope, budgets and evidence of impact across teams, which takes considerably longer to write properly.",
      },
      {
        q: "How do I pay?",
        a: "In Sri Lankan rupees (LKR). For now you receive an invoice by email and pay by bank transfer, and the writing starts once payment is confirmed. Secure online card payment is being added.",
      },
      {
        q: "Do you work with clients outside Colombo?",
        a: "Yes. The whole service runs online, so clients anywhere in Sri Lanka, from Jaffna to Galle, and Sri Lankans working overseas order the same way: choose a package, complete the brief, upload your current CV and message on WhatsApp if anything needs clarifying.",
      },
    ],
  },
  {
    title: "Delivery and revisions",
    items: [
      {
        q: "How fast can I get my CV?",
        a: `Standard delivery is ${win("normal")}. Priority Express is ${win("fast")}, and the VIP option delivers ${win("ultra").toLowerCase()}. 24-hour slots are limited each week, so confirm availability on WhatsApp if your deadline is very close.`,
      },
      {
        q: "How many revisions are included?",
        a: "One full revision round is included in every package. You review the first draft, send your comments in one go, and receive the revised version.",
      },
      {
        q: "What format do I receive?",
        a: "Word and PDF. The Word file is there so you can make small edits yourself for future applications.",
      },
      {
        q: "What do you need from me to start?",
        a: "Your current CV (or a detailed work history if you have none), your target role, and ideally one or two job adverts you would actually apply for, for example from TopJobs, LinkedIn or an overseas employer.",
      },
    ],
  },
  {
    title: "The work itself",
    items: [
      {
        q: "Will my CV pass ATS?",
        a: "No one can promise a specific system's result, and anyone who does is selling you something. What is guaranteed is that nothing in the document will be the reason it fails: standard headings, no text in images, no critical information trapped in tables, and keywords drawn from real job descriptions in your field.",
      },
      {
        q: "Do you write CVs for foreign jobs?",
        a: "Yes. A CV for a Gulf employer, a UK recruiter and an Australian company differ on length, photo, personal details and tone. The Foreign Job CV is written for the country you name, and the foreign job CV guide on this site explains the differences.",
      },
      {
        q: "Can you help with Sri Lankan government job applications?",
        a: "Government vacancies in Sri Lanka usually require the application format published with the Gazette notice, not a free-form CV. Chanuka can prepare the content you enter into that format and a supporting CV where one is requested, but always follow the exact format and closing date in the official notice.",
      },
      {
        q: "Is Chanuka Jeewantha a certified CV writer?",
        a: `Yes. Chanuka holds the Certified Professional Resume Writer (CPRW) and Certified Professional Career Coach (CPCC) certifications, has ${site.yearsExperience} years of experience and has written ${site.cvsWritten} CVs. He is rated ${site.rating.score} from ${site.rating.count} Google reviews.`,
      },
      {
        q: "Who writes the documents?",
        a: "Chanuka writes every document personally. Nothing is passed to a team of writers or filled into a template.",
      },
      {
        q: "Is my information kept private?",
        a: "Your documents and details are used for your order and nothing else. Nothing is published, shared or used as a sample without your written permission, and the samples on this site are anonymised.",
      },
    ],
  },
  {
    title: "Results",
    items: [
      {
        q: "Can you guarantee me a job?",
        a: "No, and be careful with anyone who does, including agencies that promise overseas jobs for a fee. A CV gets you read and gets you interviews. What happens in the interview is outside anyone's control.",
      },
      {
        q: "How soon should I expect a response from employers?",
        a: "Most clients start seeing replies within two to six weeks, depending on the field and how many applications they send. A better document raises your response rate; it does not remove the need to apply.",
      },
      {
        q: "What if I am not happy with the draft?",
        a: "Tell me what is wrong and it gets fixed in the revision round. If the work genuinely does not match what was agreed, the refund policy applies.",
      },
    ],
  },
];

/** The short set used on the home page. */
export const homeFaqs: Faq[] = [
  faqGroups[0].items[0],
  faqGroups[1].items[0],
  faqGroups[2].items[3],
  faqGroups[2].items[1],
  faqGroups[0].items[3],
  faqGroups[2].items[0],
  faqGroups[0].items[2],
];
