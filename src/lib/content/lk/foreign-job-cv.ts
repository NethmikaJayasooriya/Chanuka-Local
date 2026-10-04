import { BASE_PRICES, formatLKR } from "@/lib/pricing";
import type { LkGuide } from "./types";

const f = BASE_PRICES["foreign-cv"];

/** Targets: cv for foreign jobs, cv format for foreign jobs, cv for dubai/qatar/saudi jobs, plus country CV questions from Sri Lanka. */
export const foreignJobCv: LkGuide = {
  slug: "foreign-job-cv-sri-lanka",
  lang: "en",
  eyebrow: "Foreign job CV · Sri Lanka",
  h1: "CV for foreign jobs from Sri Lanka: what each country expects",
  metaTitle: "Foreign Job CV from Sri Lanka: Gulf, UK, Europe, Australia",
  metaDescription:
    "How to write a CV for foreign jobs from Sri Lanka: Gulf, UK, Europe, Australia, Canada, Japan and Korea. Photo, length, personal details and SLBFE.",
  lead: "A CV that works for a Colombo employer can be rejected abroad for having a photo, or for not having one. Here is what changes for each destination Sri Lankans most often apply to.",
  quickAnswer:
    "A CV for a foreign job must follow the destination country's conventions, not Sri Lankan ones. For the Gulf (UAE, Qatar, Saudi Arabia, Kuwait, Oman, Bahrain), use two pages with a professional photo, nationality and visa or notice status. For the UK, Canada, the USA and Australia, never add a photo, date of birth, NIC or civil status, and lead with measurable achievements. Europe often accepts the Europass format, Japan uses the rirekisho form, and most South Korea jobs for Sri Lankans go through the EPS scheme rather than a CV. Before you leave for work abroad, register with the Sri Lanka Bureau of Foreign Employment (SLBFE) and use only licensed agencies.",
  published: "2026-10-04",
  updated: "2026-10-04",
  keyFacts: [
    { label: "Gulf CV", value: "2 pages, professional photo, nationality, visa or notice status" },
    { label: "UK, Canada, USA, Australia", value: "No photo, no date of birth, no NIC; achievements first" },
    { label: "Europe", value: "Europass accepted in many countries; state languages using CEFR levels (A1 to C2)" },
    { label: "Japan", value: "Standard rirekisho form plus a work history document for many employers" },
    { label: "South Korea", value: "Most Sri Lankan workers go through the EPS scheme and EPS-TOPIK test" },
    { label: "Before you leave", value: "Register with SLBFE and check your agency's SLBFE licence" },
  ],
  sections: [
    {
      id: "why-different",
      heading: "Why one CV does not work everywhere",
      paragraphs: [
        "Every country has its own unwritten rules for CVs. A Dubai recruiter expects to see your nationality and a photo because visa sponsorship depends on them. A London recruiter is trained to ignore, or even reject, a CV with a photo and date of birth because of anti-discrimination law. An Australian employer expects a resume that reads like a list of results.",
        "Sending your Sri Lankan CV unchanged to all of them is the most common reason good candidates hear nothing back from overseas applications. The fix is not a new career: it is the same experience, re-ordered and re-worded for the reader.",
      ],
    },
    {
      id: "by-country",
      heading: "CV format by destination",
      table: {
        caption: "What changes for each destination",
        head: ["Destination", "Length and style", "Photo", "Personal details"],
        rows: [
          ["UAE (Dubai, Abu Dhabi), Qatar, Saudi Arabia, Kuwait, Oman, Bahrain", "2 pages, clear headings, GCC or regional experience highlighted", "Usually expected: professional headshot", "Nationality, visa status, notice period, driving licence if relevant; date of birth often included"],
          ["United Kingdom", "2 pages, personal statement, achievements in bullets", "No", "Name, phone, email, city, LinkedIn. State right to work or visa status if relevant"],
          ["Europe (Germany, Italy, Poland and others)", "Europass or a 2 page CV; German employers expect a tidy chronological CV", "Varies; common in Germany, optional elsewhere", "Language levels using CEFR (A1 to C2) are expected"],
          ["Australia and New Zealand", "Resume of 2 to 3 pages, results-focused", "No", "No date of birth, NIC or civil status. Referees or \"available on request\""],
          ["Canada and USA", "Canada: 2 pages. USA: 1 to 2 page resume", "No", "No date of birth, photo or civil status"],
          ["Maldives", "2 pages, hospitality, teaching or healthcare experience up front", "Commonly included", "Nationality, availability, certificates for licensed roles"],
          ["Japan", "Standard rirekisho form, often with a separate work history (shokumu keirekisho)", "Required on the rirekisho", "As the form asks"],
          ["South Korea", "EPS jobs: application through SLBFE and the EPS-TOPIK test. Professional roles: a standard resume", "As requested", "As the EPS process or employer asks"],
        ],
      },
    },
    {
      id: "gulf",
      heading: "CV for Dubai, Qatar and Saudi jobs",
      paragraphs: [
        "The Gulf is where most Sri Lankan overseas applications go, and it is a very competitive market: recruiters receive applications from across South Asia, Africa and Europe for the same roles. Your CV has to show, on the first page, that you can do the job and that you are ready to move.",
      ],
      bullets: [
        "Put your target job title, nationality and availability (notice period or \"available to join immediately\") in the header.",
        "Highlight any GCC experience, international clients or multinational employers early.",
        "List licences and certifications with numbers and expiry dates where relevant (driving licence, safety certificates, professional licences).",
        "For healthcare and engineering roles, mention the destination authority's licensing exam or registration if you have started it.",
        "Use a professional headshot: plain background, formal clothes, no selfies.",
        "Share passport details only with an employer or agency you have verified.",
      ],
    },
    {
      id: "uk-australia-canada",
      heading: "CV for the UK, Australia and Canada",
      paragraphs: [
        "These markets read CVs for evidence. Every bullet should answer \"so what?\": a number, a scale, an outcome. Remove the photo, date of birth, NIC, religion, civil status and the declaration line common on Sri Lankan CVs.",
        "Spell job titles the way the destination does (for example \"Accountant\" rather than \"Executive, Accounts\" if that is what the role was), explain Sri Lankan qualifications briefly (\"CIMA, Chartered Institute of Management Accountants, UK\"), and include a LinkedIn profile that matches the CV, because recruiters check it.",
      ],
    },
    {
      id: "slbfe",
      heading: "SLBFE registration and avoiding job scams",
      paragraphs: [
        "Sri Lankans leaving for employment abroad are required to register with the Sri Lanka Bureau of Foreign Employment (SLBFE). If you use a recruitment agency, check that it holds a valid SLBFE licence before you hand over your passport or pay anything.",
        "Be careful with any offer that guarantees a job, asks for large fees before an interview, or offers a visa without a real employer. A professional CV writer cannot get you a visa or a job, and anyone who claims they can is not telling the truth.",
      ],
    },
  ],
  steps: {
    title: "How to adapt your CV for a foreign job",
    items: [
      { name: "Pick one destination", text: "Choose the country and the role. A CV written for everywhere convinces no one." },
      { name: "Read real adverts there", text: "Read three to five adverts from that country and note the job titles and skills they use." },
      { name: "Fix the personal details", text: "Add or remove photo, nationality, date of birth and visa status according to the table above." },
      { name: "Rewrite achievements for that reader", text: "Translate local terms, add scale (team size, budget, customers) and lead with results." },
      { name: "Explain qualifications", text: "Spell out Sri Lankan qualifications and add equivalents or recognition where you have them." },
      { name: "Match your LinkedIn profile", text: "Make sure your LinkedIn headline, job titles and dates match the CV." },
    ],
  },
  takeaways: [
    "Write for the destination country, not for Sri Lanka.",
    "Gulf: photo, nationality and availability up front.",
    "UK, Canada, USA, Australia: no photo, no date of birth, no NIC, results first.",
    "Europe: consider Europass and give CEFR language levels.",
    "Register with SLBFE and use only licensed agencies.",
  ],
  faqs: [
    { q: "Can I use the same CV for Dubai and Canada?", a: "No. A Dubai CV usually includes a photo, nationality and visa status, while a Canadian employer expects no photo and no personal details such as date of birth. Keep one master CV and create a version for each destination." },
    { q: "Do Gulf employers need a photo on the CV?", a: "Most do expect one. Use a professional headshot with a plain background and formal clothing. A poor photo does more harm than no photo." },
    { q: "What is a Europass CV?", a: "Europass is a free, standard CV format from the European Union. Many European employers accept it, and it is useful for showing language levels on the CEFR scale. For competitive private sector roles, a well-written two page CV in the destination's style can still be stronger." },
    { q: "Should I put my passport number on my CV?", a: "No. Share your passport number only when a verified employer or a licensed agency needs it for a visa or offer. It does not help you get shortlisted." },
    { q: "Do I need to register with SLBFE?", a: "Sri Lankans leaving for employment abroad are required to register with the Sri Lanka Bureau of Foreign Employment. Check the SLBFE website for the current process and fees, and confirm that any agency you use is licensed." },
    { q: "How long should a CV for a foreign job be?", a: "Two pages for most roles in the Gulf, UK, Canada and Europe. Australia accepts two to three pages. A US resume is one to two pages. Japan uses a standard form." },
    { q: "How much does a foreign job CV cost?", a: `With Chanuka Jeewantha a Foreign Job CV is ${formatLKR(f["under-2"])} for students and fresh graduates, ${formatLKR(f["3-to-9"])} for professionals with 1 to 9 years of experience and ${formatLKR(f["over-10"])} for executives. It is written for the specific country you name, with one revision round and Word and PDF files.` },
  ],
  sources: [
    { label: "Sri Lanka Bureau of Foreign Employment (SLBFE)", url: "https://www.slbfe.lk/" },
    { label: "Europass CV (European Union)", url: "https://europass.europa.eu/" },
    { label: "UK government: work visas", url: "https://www.gov.uk/browse/visas-immigration/work-visas" },
    { label: "Australian Department of Home Affairs", url: "https://immi.homeaffairs.gov.au/" },
    { label: "Immigration, Refugees and Citizenship Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship.html" },
  ],
  related: [
    { href: "/cv-format-sri-lanka", label: "CV format for Sri Lanka" },
    { href: "/cv-format-sinhala", label: "CV format in Sinhala" },
    { href: "/linkedin-optimisation", label: "LinkedIn optimisation" },
    { href: "/how-to-choose-a-cv-writer-sri-lanka", label: "How to choose a CV writer" },
    { href: "/packages", label: "Packages and prices" },
  ],
  cta: {
    heading: "Get a CV written for your destination",
    body: `Chanuka writes Foreign Job CVs for the Gulf, UK, Europe, Australia and Canada, personally. From ${formatLKR(f["under-2"])}, delivery from 24 hours.`,
    href: "/order?package=foreign-cv",
    label: "Order a Foreign Job CV",
  },
};
