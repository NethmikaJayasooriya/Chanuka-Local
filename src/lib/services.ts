export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  startingPriceLKR: number;
  overview: string;
  whyItMatters: string;
  deliverables: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "ats-cv",
    slug: "ats-friendly-cv-writing",
    title: "ATS-Friendly Professional CV Writing",
    subtitle: "Engineered to pass recruitment filters and compel hiring managers within 6 seconds",
    icon: "file-text",
    startingPriceLKR: 3950,
    overview:
      "Over 75% of resumes in Sri Lanka and abroad are rejected before a human recruiter even sees them because Applicant Tracking Systems (ATS) cannot parse them. Chanuka rebuilds your CV with clean typography, strategic industry keywords, and quantifiable achievements that secure interview calls.",
    whyItMatters:
      "Modern hiring teams receive hundreds of applicants. A design with heavy graphics, tables, or unindexed terminology gets discarded by software. Our CPRW-aligned methodology ensures 100% ATS score without sacrificing visual elegance.",
    deliverables: [
      "Custom 1 or 2-page ATS-optimized CV in editable Word (.docx)",
      "Recruiter-ready formatted PDF preserving layout fidelity",
      "Executive summary tailored to your next career target",
      "Action-verb and metric-driven bullet points (demonstrating ROI and growth)",
      "Targeted skills matrix aligned with live market job listings",
      "14 to 30 days of free revisions based on package tier",
    ],
    processSteps: [
      {
        title: "1. Intake & Deep Career Audit",
        desc: "Share your current CV and target job roles. We analyze career gaps, target keywords, and strengths via WhatsApp or email.",
      },
      {
        title: "2. Strategic Re-Architecting",
        desc: "Chanuka crafts your narrative, stripping away redundant fluff and replacing passive tasks with measurable achievements.",
      },
      {
        title: "3. ATS Parsing Simulation",
        desc: "We run your draft through ATS simulators to guarantee high keyword match and clean section parsing.",
      },
      {
        title: "4. Review & Final Delivery",
        desc: "You receive your draft, request tweaks, and receive ready-to-apply Word and PDF versions.",
      },
    ],
    faqs: [
      {
        q: "What is an ATS and do Sri Lankan companies really use it?",
        a: "Yes. Major Sri Lankan conglomerates (Dialog, John Keells, MAS, Hemas, Hayleys), banks, IT firms (Virtusa, IFS, LSEG), and multinational subsidiaries use ATS software like Workday, Taleo, SAP SuccessFactors, and Lever to parse incoming job applications.",
      },
      {
        q: "How fast can I get my new CV?",
        a: "Standard turnaround is 48 to 72 hours. Need it urgently for an impending deadline? Our 24-hour VIP express option is available upon request.",
      },
    ],
  },
  {
    id: "linkedin",
    slug: "linkedin-account-optimization",
    title: "LinkedIn Profile Optimization & Personal Branding",
    subtitle: "Turn your LinkedIn into a 24/7 inbound recruiter magnet that attracts headhunters",
    icon: "linkedin",
    startingPriceLKR: 3950,
    overview:
      "87% of recruiters in Sri Lanka and internationally use LinkedIn to actively headhunt talent who aren't even applying for vacancies. If your profile is just a digital copy of your job duties, you are missing out on high-paying opportunities.",
    whyItMatters:
      "LinkedIn's search algorithm prioritizes specific keyword positions, headline structures, and profile completeness. We write a high-converting headline, compelling About narrative, and skill endorsements that position you as an industry authority.",
    deliverables: [
      "High-CTR headline that pops in recruiter search results",
      "Engaging 1st-person Storytelling 'About / Summary' section",
      "Achievement-focused Experience section bullet points",
      "Top 50 search-optimized skills categorized for maximum endorsements",
      "Step-by-step PDF guide on how to update your profile in under 10 minutes",
      "Bonus: Outreach scripts to message recruiters and hiring managers directly",
    ],
    processSteps: [
      {
        title: "1. Profile Analysis",
        desc: "Review of your current profile strength, headline visibility, and industry alignment.",
      },
      {
        title: "2. Keyword & Competitor Research",
        desc: "Identify the top search queries recruiters use in your niche to discover talent.",
      },
      {
        title: "3. Copywriting & Delivery",
        desc: "You receive a complete plug-and-play document containing headlines, bio, and experience bullets ready to copy-paste.",
      },
    ],
    faqs: [
      {
        q: "Do you need my LinkedIn password?",
        a: "No! We never ask for your confidential password. We provide a beautifully formatted master document with exact text and screenshot instructions so you can update it yourself safely.",
      },
    ],
  },
  {
    id: "cover-letter",
    slug: "professional-cover-letter-writing",
    title: "Tailored Professional Cover Letter Writing",
    subtitle: "A persuasive, value-driven letter that hooks the hiring manager before page one of your CV",
    icon: "mail",
    startingPriceLKR: 2950,
    overview:
      "Generic cover letters copied from the internet get deleted immediately. A custom cover letter bridges the gap between your previous achievements and why you are uniquely qualified to solve the employer's current problems.",
    whyItMatters:
      "When two candidates have similar qualifications, the cover letter is often the deciding factor in who gets called for an interview. We tailor your story to demonstrate passion, cultural fit, and undeniable value.",
    deliverables: [
      "Custom 1-page cover letter tailored to your specific role or industry",
      "Editable Microsoft Word format allowing you to adapt it for future roles",
      "Compelling hook opening that grabs attention in the first 2 sentences",
      "Bullet-point achievement highlights matching job description criteria",
    ],
    processSteps: [
      {
        title: "1. Job Specification Matching",
        desc: "We analyze the job ad or target role you want to apply for.",
      },
      {
        title: "2. Value Proposition Synthesis",
        desc: "We extract 2-3 key accomplishments from your career that directly address the employer's needs.",
      },
    ],
    faqs: [
      {
        q: "Can I reuse this letter for multiple jobs?",
        a: "Yes! We structure the letter with clearly indicated brackets so you can quickly swap company names and role titles for similar positions.",
      },
    ],
  },
  {
    id: "international",
    slug: "foreign-job-and-relocation-package",
    title: "Foreign Job & Relocation Packages",
    subtitle: "Specialized CV and LinkedIn tailoring for Gulf/UAE, UK, Australia, Europe & Remote USD roles",
    icon: "globe",
    startingPriceLKR: 24500,
    overview:
      "Applying overseas from Sri Lanka has unique challenges. International employers and immigration consultants have strict expectations regarding formats, visa status disclosure, and currency/scale contextualization.",
    whyItMatters:
      "European CVs (Europass / UK standard) differ radically from Middle East (UAE/Qatar) or North American resumes. Chanuka understands the nuances of international hiring corridors to give you a genuine competitive edge.",
    deliverables: [
      "Country-specific formatted resume (Gulf, UK, Australia, Canada, or EU)",
      "Salary and project metric contextualization for international understanding",
      "Globalized LinkedIn profile positioning for overseas recruiters",
      "Visa-friendly cover letter explaining relocation timeline and availability",
      "Guidance on top authentic international job portals and recruiter networking strategies",
    ],
    processSteps: [
      {
        title: "1. Country & Visa Corridor Assessment",
        desc: "Clarify your target destination and job category (IT, Nursing, Engineering, Hospitality, Finance).",
      },
      {
        title: "2. Terminology Localization",
        desc: "Translate Sri Lankan job titles and qualifications into globally recognized equivalents.",
      },
    ],
    faqs: [
      {
        q: "Which countries do you have experience writing for?",
        a: "We have helped Sri Lankan professionals successfully secure positions in Dubai/UAE, Saudi Arabia, Qatar, UK, Australia, New Zealand, Canada, Germany, Singapore, and 100% remote US/EU companies.",
      },
    ],
  },
];
