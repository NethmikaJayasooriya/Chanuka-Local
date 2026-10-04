import { BASE_PRICES, formatLKR } from "@/lib/pricing";
import { site } from "@/lib/site";
import type { LkGuide } from "./types";

const cv = BASE_PRICES.cv;

/** Targets: cv format sri lanka (1,900/mo, KD 8), cv sri lanka, cv format for students, bio data format sri lanka, cv sample sri lanka. */
export const cvFormatSriLanka: LkGuide = {
  slug: "cv-format-sri-lanka",
  lang: "en",
  eyebrow: "CV guide · Sri Lanka",
  h1: "CV format for Sri Lanka: the 2026 guide",
  metaTitle: "CV Format Sri Lanka (2026): Structure, Examples and Tips",
  metaDescription:
    "The CV format Sri Lankan employers expect in 2026: sections, length, photo, NIC, referees, and formats for freshers, government, bank and foreign jobs.",
  lead: `What a Sri Lankan employer expects to see, in the order they expect to see it, and what to leave out. Written by Chanuka Jeewantha, CPRW, from ${site.cvsWritten} CVs written for jobs in Sri Lanka and abroad.`,
  quickAnswer:
    "The best CV format for Sri Lanka in 2026 is one or two A4 pages in this order: your name and contact details (phone, email, city, LinkedIn), a three to four line professional summary, work experience with achievements (most recent first), education and professional qualifications, skills and languages, and two non-related referees. Leave out your NIC number, religion, marital status and photo unless the advertisement asks for them, use a plain single-column layout that applicant tracking systems can read, and send it as a PDF unless Word is requested.",
  published: "2026-10-04",
  updated: "2026-10-04",
  keyFacts: [
    { label: "Length", value: "1 page for students and freshers, 2 pages for most professionals, 3 only for senior specialists" },
    { label: "Paper size and font", value: "A4, a standard font such as Calibri or Arial at 10 to 12 pt" },
    { label: "Photo", value: "Optional for Sri Lankan private sector roles; leave it out unless requested" },
    { label: "Personal details", value: "Name, phone, email, city and LinkedIn. NIC, date of birth and civil status only if asked" },
    { label: "Referees", value: "Two non-related referees with designation, organisation, phone and email" },
    { label: "File type", value: "PDF named Firstname-Lastname-CV.pdf, unless the employer asks for Word" },
  ],
  sections: [
    {
      id: "structure",
      heading: "The standard CV structure in Sri Lanka",
      paragraphs: [
        "Recruiters in Colombo and across the country read hundreds of CVs for popular roles, and most now use an applicant tracking system (ATS) or at least a shared inbox with a keyword search. A predictable order lets both the software and the person find what they need in seconds. Use these sections, in this order:",
      ],
      table: {
        caption: "Sri Lankan CV sections, in order",
        head: ["Section", "What to include", "Tip"],
        rows: [
          ["Header", "Full name, mobile number, professional email, city, LinkedIn URL", "Your name is the title. Do not write \"Curriculum Vitae\" at the top."],
          ["Professional summary", "3 to 4 lines: who you are, years of experience, the role you want, one proof point", "Replace the old \"Career Objective\". Recruiters skip generic objectives."],
          ["Work experience", "Job title, company, location, dates, then 3 to 6 achievement bullets per role", "Lead with numbers: targets met, cost saved, customers handled, systems delivered."],
          ["Education", "Degree, university, year, class (for example Second Class Upper)", "Freshers put education first. Experienced candidates put it after work experience."],
          ["Professional qualifications", "CIMA, ACCA, CA Sri Lanka, IBSL, CIM, SLIIT or NIBM diplomas, vendor certifications", "Show the level reached and the year, not every exam paper."],
          ["Skills and languages", "Role-specific skills, software, and English, Sinhala and Tamil proficiency", "Name real tools (SAP, Excel, Python, Figma) instead of \"computer literate\"."],
          ["Referees", "Two non-related referees: name, designation, organisation, phone, email", "Ask permission first. A former manager is stronger than a family friend."],
        ],
      },
    },
    {
      id: "personal-details",
      heading: "Photo, NIC and personal details: what to include",
      paragraphs: [
        "Many Sri Lankan CVs still open with half a page of personal details: NIC number, date of birth, gender, civil status, religion, nationality and a home address. Private sector and multinational recruiters do not need most of this to shortlist you, and some of it invites bias. It also pushes your experience down the page, where it is read less carefully.",
        "Keep your header to name, phone, email, city and LinkedIn. Add NIC, date of birth or civil status only when the advertisement or application form asks for them, which is common for government posts and some banks. A photo is optional for Sri Lankan employers; if you add one, use a clear, professional headshot, never a cropped group or event photo. For UK, Canadian, US and Australian applications, never add a photo.",
      ],
    },
    {
      id: "freshers",
      heading: "CV format for students, school leavers and fresh graduates",
      paragraphs: [
        "If you have little or no work experience, the format changes: education and projects move to the top, and the CV fits on one page. Employers hiring trainees and interns are judging potential, so show evidence of it.",
      ],
      bullets: [
        "Education first: degree or diploma with expected completion date, then G.C.E. Advanced Level (stream, year and results). Add Ordinary Level as one summary line only if you have no degree yet.",
        "Projects: your final year project, group assignments or personal projects, with what you built and the result.",
        "Internships, part-time work and volunteering count as real experience. Write them with achievement bullets like any job.",
        "Leadership: society, sports, scouting or Rotaract roles show responsibility. Give the role and one thing you achieved in it.",
        "Skills: software and languages you can actually use in an interview, not a long list of soft skills.",
        "No declaration line (\"I hereby certify that the above particulars are true\") unless a form requires it.",
      ],
    },
    {
      id: "by-sector",
      heading: "How the format changes by sector",
      table: {
        head: ["Sector", "What employers look for first", "Format notes"],
        rows: [
          ["Private sector and multinationals", "Achievements with numbers, relevant keywords, clear job titles", "ATS-friendly, single column, 2 pages. Tailor the summary to each role."],
          ["Banking and finance", "Professional qualifications (CIMA, ACCA, CA, IBSL), accuracy, compliance exposure", "Put qualifications near the top. Exact figures, no exaggeration."],
          ["IT and software", "Tech stack, projects, GitHub or portfolio links, delivery results", "A skills section grouped by category. Link projects, do not paste screenshots."],
          ["Apparel, manufacturing and BOI companies", "Production, quality, efficiency and safety results", "Name the systems and standards you worked with (for example lean, ISO)."],
          ["Hotels and tourism", "Guest experience, languages, properties and outlets worked in", "Mention property star rating and scale. Languages matter here."],
          ["Government and semi-government", "Exact eligibility: qualifications, age limits, service period", "Use the application form published with the Gazette notice. See below."],
        ],
      },
    },
    {
      id: "government-jobs",
      heading: "CV format for government jobs in Sri Lanka",
      paragraphs: [
        "Government and most semi-government vacancies are advertised in the Government Gazette or in newspapers with a prescribed application format. That format is not optional: applications that change the order of the fields, leave fields blank or arrive after the closing date can be rejected without being read.",
        "Copy the format exactly, in the language you are applying in, and attach certified copies of certificates only when the notice asks for them. A separate CV is only useful when the notice requests one, or for interviews where you are asked to describe your experience. Your achievements still matter: write them clearly in the experience fields of the form.",
      ],
    },
    {
      id: "cv-resume-bio-data",
      heading: "CV, resume or bio data: what is the difference?",
      paragraphs: [
        "In Sri Lanka the words CV and resume are used for the same document: a summary of your education, experience and skills for a job application. Strictly, a resume is the shorter one or two page version used in the United States and Canada, while CV is the term used in Sri Lanka, the UK, the Gulf and most of Asia.",
        "A bio data is different. It is a personal details sheet (name, date of birth, family, religion, address) used for some forms and, in Sri Lanka, often for marriage proposals. Do not send a bio data format for a job. Employers want evidence of what you can do, which only a CV gives them.",
      ],
    },
    {
      id: "mistakes",
      heading: "Common CV mistakes Sri Lankan recruiters see every day",
      bullets: [
        "\"Curriculum Vitae\" as the title instead of your name.",
        "A generic career objective that could belong to anyone.",
        "Duties copied from a job description instead of results you achieved.",
        "Two-column Canva or Word templates with icons, skill bars and text boxes that ATS cannot read.",
        "An unprofessional email address. Create one with your name for job applications.",
        "Listing every O/L subject when you already have a degree and work experience.",
        "Four or five pages for a candidate with under ten years of experience.",
        "Spelling and grammar errors. Ask someone with strong English to read it, or use a professional.",
      ],
    },
  ],
  steps: {
    title: "How to write your CV, step by step",
    items: [
      { name: "Choose the target role", text: "Pick the role and read two or three real adverts for it on TopJobs, LinkedIn or company career pages. Note the words they repeat." },
      { name: "Write the header", text: "Full name as the title, then mobile, professional email, city and LinkedIn URL on one or two lines." },
      { name: "Write a professional summary", text: "Three to four lines: your title, years of experience, strongest result and the role you are applying for." },
      { name: "List experience with achievements", text: "Most recent job first. Under each, three to six bullets that start with an action verb and include a number where possible." },
      { name: "Add education and qualifications", text: "Degree, institution and year, then professional qualifications with the level reached. A/L results only if you are early in your career." },
      { name: "Add skills and languages", text: "Group skills by type and state your English, Sinhala and Tamil level honestly." },
      { name: "Add referees, proofread and save as PDF", text: "Two non-related referees, a careful proofread, then save as Firstname-Lastname-CV.pdf." },
    ],
  },
  takeaways: [
    "One page for freshers, two for most professionals, A4, plain single-column layout.",
    "Name and contact details only in the header. NIC, birthday, religion and civil status only when asked.",
    "Summary, experience with numbers, education, qualifications, skills, two referees.",
    "Government jobs: follow the Gazette application format exactly.",
    "Send a PDF named with your name, unless Word is requested.",
  ],
  faqs: [
    { q: "What is the best CV format for Sri Lanka?", a: "A one or two page A4 CV in a single-column layout with this order: name and contact details, professional summary, work experience with achievements, education, professional qualifications, skills and languages, and two non-related referees. It suits private sector, banking, IT and most multinational employers, and it reads well in applicant tracking systems." },
    { q: "How many pages should a CV be in Sri Lanka?", a: "One page for students, school leavers and fresh graduates. Two pages for most professionals. Three pages only for senior specialists or executives with long, relevant careers. Anything longer is usually cut by the reader, not read." },
    { q: "Should I put a photo on my CV in Sri Lanka?", a: "It is optional for Sri Lankan employers and rarely helps. Leave it out unless the advertisement asks for one. If you do add a photo, use a clear professional headshot. Never add a photo for UK, US, Canadian or Australian applications." },
    { q: "Should I include my NIC number on my CV?", a: "Only when the employer or application form asks for it, which is common for government posts and some banks. For most private sector applications your NIC, date of birth, civil status and religion are not needed to shortlist you." },
    { q: "Do I need referees on a Sri Lankan CV?", a: "Yes, two non-related referees are standard in Sri Lanka: a former manager, supervisor or lecturer, with their designation, organisation, phone number and email. Ask their permission before you list them." },
    { q: "What is the CV format for freshers in Sri Lanka?", a: "A one page CV with education first (degree or diploma, then A/L stream and results), followed by projects, internships, part-time work, leadership roles in societies or sports, and skills. Write internships and projects with results, the same way an experienced candidate writes a job." },
    { q: "What format should I use for government job applications?", a: "The application format published with the Gazette notice or advertisement. Copy it exactly, fill every field, attach the documents it asks for and submit before the closing date. A separate CV is only needed if the notice requests one." },
    { q: "Should I send my CV as PDF or Word?", a: "PDF, unless the employer or recruitment agency asks for Word. A PDF keeps your layout intact on any device. Name the file with your name, for example Nimal-Perera-CV.pdf." },
    { q: "What is the difference between a CV and a bio data?", a: "A CV shows your education, experience, skills and achievements for a job. A bio data is a personal details sheet (date of birth, family, religion, address) used for some forms and often for marriage proposals in Sri Lanka. Employers expect a CV." },
    { q: "How much does a professional CV cost in Sri Lanka?", a: `With Chanuka Jeewantha an ATS CV is ${formatLKR(cv["under-2"])} for students and fresh graduates, ${formatLKR(cv["3-to-9"])} for professionals with 1 to 9 years of experience and ${formatLKR(cv["over-10"])} for executives. Every CV is written personally, with one revision round and Word and PDF files.` },
  ],
  sources: [
    { label: "Department of Government Printing: Government Gazette", url: "https://documents.gov.lk/" },
  ],
  related: [
    { href: "/cv-format-sinhala", label: "CV format in Sinhala" },
    { href: "/foreign-job-cv-sri-lanka", label: "CV for foreign jobs" },
    { href: "/how-to-choose-a-cv-writer-sri-lanka", label: "How to choose a CV writer" },
    { href: "/cv-samples", label: "CV samples" },
    { href: "/cv-writing", label: "CV writing service" },
    { href: "/linkedin-optimisation", label: "LinkedIn optimisation" },
  ],
  cta: {
    heading: "Want this format done for you?",
    body: `Chanuka writes your CV personally in this format, tailored to your target role. From ${formatLKR(cv["under-2"])}, delivery from 24 hours.`,
    href: "/order?package=ats-cv",
    label: "Order your CV",
  },
  alternate: { lang: "si", slug: "cv-format-sinhala", label: "සිංහලෙන් කියවන්න" },
};
