/**
 * CANADA COUNTRY BUNDLE
 * ------------------------------------------------------------------
 * Powers the whole Canada mini-site: the /canada hub, the three
 * localised service pages, three Canada-specific articles, the
 * international job seekers hub and the Sri Lanka and India origin
 * corridors.
 *
 * Canadian English throughout (colour, centre, organize, analyze),
 * and the word "resume" rather than "CV". Prices in USD only.
 * Immigration content is orientation only and always points to
 * canada.ca or another official body. No testimonials, no invented
 * statistics, and no claim that ATS software behaves differently in
 * Canada.
 */

import type {
  CountryArticle,
  CountryBundleFull,
  CountryService,
  IjsHub,
  OriginCorridor,
} from "@/lib/content/types";
import type { CountryMarket } from "@/lib/countries";

const UPDATED = "2026-09-27";

/* ------------------------------------------------------------------ */
/* /canada : country hub                                              */
/* ------------------------------------------------------------------ */

const market: CountryMarket = {
  slug: "canada",
  name: "Canada",
  adjective: "Canadian",
  flag: "🇨🇦",
  code: "CA",
  locale: "en-CA",
  quickAnswer:
    "A Canadian resume is a two-page, reverse-chronological document in Canadian English that opens with a short professional summary and leaves out the photo, date of birth, SIN and marital status. Chanuka Jeewantha writes Canadian resumes, LinkedIn profiles and cover letters personally, for newcomers navigating the Canadian-experience question and professionals already working in Canada, from $129 USD.",
  metaTitle: "Resume, LinkedIn and Cover Letter Writing for Canada",
  metaDescription:
    "Resumes, LinkedIn profiles and cover letters written for Canadian employers: two pages, Canadian English, no photo, and a plan for Canadian experience.",
  heroHeading: "Resume, LinkedIn and Cover Letter Writing for the Canadian Job Market",
  heroLead:
    "A Canadian resume follows a plain, functional shape: two pages, most recent role first, a short summary at the top, and nothing that identifies you by age, marital status or photo. Get the shape right and the reader spends their attention on what you have done rather than on your formatting.",
  docType: "Resume",
  standardLength: "Two pages for most professionals. One page suits entry level and new graduates.",
  photoRule:
    "Leave it off. Human rights legislation in every Canadian province and territory makes it unlawful to base a hiring decision on protected characteristics such as age, sex, marital status, disability or religion, so employers generally prefer a resume that does not invite that information in the first place.",
  spellingStyle: "Canadian English",
  overview:
    "Canada hires through a mix of large-company applicant tracking systems, small and mid-size employers who read resumes directly, and a genuine reliance on referrals and networking, so a resume has to work both as a document a system can search and one a person reads with attention. For newcomers, the practical obstacle is rarely qualifications. It is the quiet preference some employers show for candidates who have already worked in Canada, often called the Canadian-experience question. A resume cannot manufacture that experience, but it can present international work in terms a Canadian reader recognises, name any credential assessment already under way, and avoid the formatting habits, a photo or a personal-details block, that mark a resume as unfamiliar with local convention.",
  marketRules: [
    {
      label: "Format and terminology",
      value:
        "Called a resume, not a CV, though CV is understood. Two pages is the norm for most professionals. Three pages is unusual outside academic, medical or very senior profiles and tends to lose a reader's attention rather than add credibility.",
      importance: "critical",
    },
    {
      label: "Personal information",
      value:
        "Leave out the photo, date of birth, Social Insurance Number, marital status and anything tied to a protected characteristic. None of it is illegal to include, but human rights legislation discourages employers from collecting it at the application stage, so its presence reads as unfamiliar rather than thorough.",
      importance: "critical",
    },
    {
      label: "The Canadian-experience question",
      value:
        "Some employers favour candidates who have already worked in Canada. Address it by describing international employers in terms a Canadian reader understands, scale, sector, whether the work served North American or global clients, and by naming any Canadian-recognised credential, registration or assessment already in progress.",
      importance: "critical",
    },
    {
      label: "Bilingualism and French",
      value:
        "French matters most in Quebec and in federally regulated organisations, where a French-language or bilingual resume can be expected rather than optional. Outside Quebec, genuine French ability is worth stating as a skill; it is not something to imply if you do not have it.",
      importance: "recommended",
    },
    {
      label: "Canadian English",
      value:
        "Canadian spelling blends British and American habits: colour, centre and cheque alongside organize, analyze and program. Consistency within one document matters more than which convention you started from.",
      importance: "recommended",
    },
    {
      label: "File and layout",
      value:
        "A clean single-column layout with standard section headings, submitted as a Word document or a text-based PDF depending on what the employer's application system requests.",
      importance: "recommended",
    },
  ],
  whatRecruitersLookFor: [
    "Work authorisation stated plainly: Canadian citizen, permanent resident, or a specific open or employer-specific work permit",
    "Recognised credentials named accurately, such as an educational credential assessment, CPA, a Professional Engineer designation, a Red Seal certificate or provincial nursing registration",
    "Measurable outcomes and the scope behind them: budgets, team size, volumes, timelines",
    "International employers explained in terms a Canadian reader can place: sector, size and client base",
    "A resume that mirrors the language of the job posting closely enough to surface in a keyword search",
    "A readable, single-column layout that a person and an applicant tracking system both parse the same way",
  ],
  inDemandSectors: [
    "Technology, software and cloud",
    "Banking, financial services and insurance",
    "Healthcare, nursing and social services",
    "Skilled trades, construction and engineering",
    "Logistics, supply chain and manufacturing",
    "Public sector and education",
  ],
  keyRoles: [
    "Software Developer",
    "Business Analyst",
    "Project Manager",
    "Financial Analyst",
    "Registered Nurse",
    "Supply Chain Coordinator",
  ],
  faqs: [
    {
      q: "What is the standard Canadian resume format?",
      a: "The standard Canadian resume is a reverse-chronological, two-page document with no photo and no personal details beyond your name, location and contact information, opening with a short professional summary and a skills section. It uses achievement-focused bullet points, states your work authorisation, and is written in Canadian English throughout.",
    },
    {
      q: "How do you handle the Canadian-experience problem when I have never worked in Canada?",
      a: "Your resume is written to describe your international employers in terms a Canadian hiring manager can place: sector, scale and whether the work served North American or global clients. It also states your work authorisation clearly and names any credential assessment or Canadian-recognised certification already in progress, so the reader has fewer unanswered questions.",
    },
    {
      q: "Do you write resumes for both Ontario and Western Canada?",
      a: "Yes. The sectors and job titles differ, Toronto's finance and technology employers read differently from Calgary's energy sector or Vancouver's technology scene, and the resume is written around the roles and industries you are actually targeting rather than a single generic template.",
    },
    {
      q: "What does a Canadian resume cost and what currency do you charge in?",
      a: "Resume writing costs $129, $189 or $279 USD depending on experience: under two years, three to nine years, or ten years and executive. Payment is taken in USD and your card provider converts to CAD at its own rate. Combining any two services saves 20 percent, and all three save 30 percent.",
    },
    {
      q: "Should my resume be in French for Quebec jobs?",
      a: "It depends on the employer and role. Many Quebec employers, and federally regulated organisations operating in Quebec, expect application documents in French or a bilingual profile. Outside Quebec, an English resume is standard, and French ability is worth stating as a skill rather than assumed.",
    },
    {
      q: "How does the process work if I am applying from outside Canada?",
      a: "The whole process runs by email, so your location does not matter. You choose a package and pay, complete a written brief and upload your current resume, and Chanuka writes the document personally. You receive a draft, have one revision round, and get final files in editable Word and PDF, usually within 5 to 7 days.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /canada/{service} : localised commercial pages                     */
/* ------------------------------------------------------------------ */

const services: CountryService[] = [
  {
    country: "canada",
    service: "cv-writing",
    primaryKeyword: "resume writing service Canada",
    secondaryKeywords: [
      "professional resume writer Canada",
      "Canadian resume writing service for newcomers",
      "executive resume writing Canada",
      "resume writer for skilled trades and regulated professions",
      "Canadian resume format help",
    ],
    metaTitle: "Resume Writing Service Canada: Two-Page Resumes",
    metaDescription:
      "Canadian resume writing by one writer, not a team: two pages, Canadian English, and a plan for Canadian experience. From $129 USD, delivered by email.",
    eyebrow: "Canada resume writing",
    h1: "Resume Writing Service for Canadian Jobs",
    lead:
      "A Canadian resume written personally by Chanuka Jeewantha: two pages, Canadian English, a summary that states your value, and international experience framed so a Canadian employer can place it.",
    quickAnswer:
      "This Canadian resume writing service rewrites your resume to Canadian conventions: two pages, reverse chronological, a short professional summary, achievement-led bullets, and no photo, date of birth or personal details. Every resume is written personally by Chanuka Jeewantha, addresses the Canadian-experience question directly, and is delivered in Word and PDF within 5 to 7 days from $129 USD.",
    keyFacts: [
      { label: "Length", value: "Two pages for most professionals, one for entry level" },
      { label: "Opening", value: "A professional summary of three to five lines" },
      { label: "Personal details", value: "Name, city and province, phone, email, LinkedIn" },
      { label: "Spelling", value: "Canadian English throughout" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
      { label: "Standard delivery", value: "5 to 7 days, faster options available" },
    ],
    whyDifferent: {
      heading: "Why a Canadian resume is not a US resume with different spelling",
      paragraphs: [
        "Canada shares a resume format with the United States on the surface, reverse chronological and achievement led, but two things set it apart. Personal details that some other markets include, such as a photo or a marital status line, are read in Canada as a sign the resume was not built for this market. And the Canadian-experience question sits under almost every application from a newcomer, whether or not an employer ever says so out loud.",
        "Regulated and credentialed professions add another layer. Nursing, engineering, accounting and the skilled trades all sit under provincial or national bodies, Engineers Canada and its provincial regulators, CPA Canada, the National Nursing Assessment Service, the Red Seal program, and a resume that names your status with one of them accurately does more for a hiring manager than a long list of duties.",
        "Quebec is its own market inside Canada. Many employers there hire in French, and federally regulated organisations operating in Quebec have their own language expectations. A resume built for Toronto does not automatically work for Montreal.",
      ],
    },
    whatYouGet: [
      "A two-page Canadian resume (one page for entry level) written from scratch around your target role",
      "A professional summary that states your level, specialism and direction in plain Canadian English",
      "Experience rewritten as achievements, with scope and outcomes where you can evidence them",
      "International employers, job titles and qualifications explained in terms a Canadian reader recognises",
      "Your work authorisation stated accurately, whether citizen, permanent resident, or a named permit category",
      "A clean single-column layout that Canadian employer application systems parse reliably",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Section order", value: "Contact details, summary, core skills, experience, education, then certifications or licences" },
      { label: "Dates", value: "Month and year for every role, most recent first" },
      { label: "Credentials", value: "Canadian designations shown in full (P.Eng, CPA, RN); overseas credentials stated as awarded, with any assessment noted" },
      { label: "Leave out", value: "Photo, date of birth, SIN, marital status, nationality, religion, references" },
      { label: "References", value: "Not listed; employers request them later in the process" },
      { label: "Language", value: "English resumes for most of Canada; French or bilingual for Quebec and many federally regulated employers" },
    ],
    sectors: [
      "Technology, software and cloud engineering",
      "Banking, financial services and insurance",
      "Healthcare, nursing and social services",
      "Skilled trades, construction and manufacturing",
      "Engineering and infrastructure",
      "Logistics and supply chain",
    ],
    process: [
      {
        title: "Choose your tier and pay in USD",
        body: "Pick the tier that matches your experience. Payment is in USD, so there is nothing to convert at checkout beyond your card provider's own rate.",
      },
      {
        title: "Complete the brief",
        body: "Upload your current resume and answer a written brief about your target Canadian roles, your results and your work authorisation. Links to two or three job postings help.",
      },
      {
        title: "Chanuka writes your resume",
        body: "Your resume is written personally, never outsourced. Questions come by email, so time zones do not slow anything down.",
      },
      {
        title: "Review, revise and apply",
        body: "You receive the draft, request changes in one revision round, and get final Word and PDF files ready to send to employers and load into Job Bank, Indeed and LinkedIn.",
      },
    ],
    faqs: [
      {
        q: "What makes a resume writing service Canada specific?",
        a: "A Canada-specific resume service writes to Canadian conventions rather than a generic template: two pages, Canadian English, no photo or personal details beyond contact information, and a professional summary tuned to the role. It also knows how to frame international experience against the Canadian-experience preference and how to name provincial or national credentials accurately.",
      },
      {
        q: "Is a professional resume writer worth it for Canadian jobs?",
        a: "It is worth it when your resume is not getting responses despite relevant experience, or when you are new to Canada and your document still follows another country's conventions. It matters less if you are already getting interviews and the gap is later in the process, where interview preparation is the better next step.",
      },
      {
        q: "Can you write a resume for skilled trades or a regulated profession?",
        a: "Yes. The resume reflects where you stand with the relevant body, an educational credential assessment, Red Seal certification, provincial nursing registration or a professional engineering licence, and uses the terminology that body and Canadian employers expect. If a credential is still in progress, the resume states that honestly rather than implying it is complete.",
      },
      {
        q: "Will my resume work with Job Bank, Indeed and LinkedIn in Canada?",
        a: "Yes. The resume uses standard section headings and the job titles and skills your target roles actually use, which is what most employer and platform search tools rely on, whether that is Job Bank, Indeed or a recruiter searching LinkedIn. A separate LinkedIn optimisation service matches your profile to the same resume.",
      },
      {
        q: "Should my resume mention that I do not have Canadian experience?",
        a: "No, not directly. Rather than stating a gap, the resume describes your international employers in terms a Canadian reader can place, sector, scale, client base, and highlights anything that already demonstrates familiarity with Canadian standards, such as a credential assessment or a recognised international certification.",
      },
      {
        q: "Do I need a French resume for jobs in Quebec?",
        a: "Often, yes. Many Quebec employers, and federally regulated organisations operating there, expect a French or bilingual application. Chanuka writes in English; for a Quebec-specific role that requires French documents, say so in your brief so expectations are clear before you order, since translation itself sits outside this service.",
      },
      {
        q: "How long does Canadian resume writing take?",
        a: "Standard delivery is 5 to 7 days from receiving your completed brief. Fast delivery in 2 to 3 days adds 20 percent, and ultra delivery within 24 hours adds 50 percent. After the draft, one revision round is included, and the final Word and PDF files follow once changes are agreed.",
      },
    ],
  },
  {
    country: "canada",
    service: "linkedin-optimisation",
    primaryKeyword: "LinkedIn profile writing Canada",
    secondaryKeywords: [
      "LinkedIn optimisation Canada",
      "LinkedIn profile writer for newcomers to Canada",
      "LinkedIn for Canadian recruiters",
      "LinkedIn profile for immigrating to Canada",
    ],
    metaTitle: "LinkedIn Profile Writing Service Canada",
    metaDescription:
      "LinkedIn profile writing for the Canadian market: a headline recruiters search for, a summary in Canadian English, and clear location and work status.",
    eyebrow: "Canada LinkedIn optimisation",
    h1: "LinkedIn Profile Writing for the Canadian Market",
    lead:
      "Your LinkedIn profile rewritten for how Canadian recruiters search: the right job titles, a clear location and work authorisation, and a summary that reads like a professional, not a pitch.",
    quickAnswer:
      "A Canadian LinkedIn profile writing service rewrites your headline, About section, experience and skills so Canadian recruiters and hiring managers find you under the job titles they search and trust what they read. Chanuka Jeewantha writes each profile personally in Canadian English, handles location and work-authorisation wording, and delivers within 5 to 7 days from $129 USD.",
    keyFacts: [
      { label: "Headline", value: "Target job title and specialism first, not a slogan" },
      { label: "About section", value: "First person, Canadian English, evidence over adjectives" },
      { label: "Location", value: "Your real location, with Canada relocation stated where true" },
      { label: "Deliverable", value: "Ready-to-paste text for every section" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
    ],
    whyDifferent: {
      heading: "How Canadian recruiters use LinkedIn, and what that means for your profile",
      paragraphs: [
        "LinkedIn is a routine sourcing tool for Canadian employers and recruiters, especially in technology, finance and healthcare, and they search by job title, skill and location before a role is even advertised on Job Bank or Indeed. A headline that reads as a slogan instead of a job title, such as ‘Passionate about people’ instead of ‘Registered Nurse, RN’, simply does not surface in that search.",
        "Location works the same quiet way it does on a resume. Setting your location to Toronto while you are still in Colombo or Chennai tends to unravel on the first call. The better approach is your real location plus a clear line about your Canadian relocation plans and work authorisation, so recruiters who hire internationally can still find and contact you honestly.",
        "Canadian LinkedIn culture sits between the more reserved British tone and the more expressive American one. The profile is written to sound confident and specific without reading as either understated or overstated.",
      ],
    },
    whatYouGet: [
      "A search-focused headline built on the Canadian job titles and skills recruiters actually type",
      "An About section in first person and Canadian English, with specific evidence and a clear next step",
      "Experience entries rewritten from your resume, shorter and more conversational than the resume itself",
      "A curated skills list ordered so the most relevant skills show first",
      "Location and work-authorisation wording that is accurate and searchable",
      "Guidance on Open to Work settings, custom URL and recommendations",
      "One revision round on all text",
    ],
    marketConventions: [
      { label: "Spelling", value: "Canadian English: colour, centre, organize, analyze" },
      { label: "Headline format", value: "Job title, specialism, sector or credential" },
      { label: "Photo", value: "Yes on LinkedIn, even though a Canadian resume has none" },
      { label: "Voice", value: "First person in the About section, never third person" },
      { label: "Credentials", value: "Canadian bodies and registrations named in full once, then abbreviated" },
      { label: "Consistency", value: "Titles and dates match the resume, since recruiters check both" },
    ],
    sectors: [
      "Technology, data and software engineering",
      "Banking, financial services and insurance",
      "Healthcare professionals immigrating to Canada",
      "Engineering and skilled trades",
      "Supply chain, logistics and manufacturing",
      "Sales, marketing and business development",
    ],
    process: [
      {
        title: "Choose your tier",
        body: "LinkedIn optimisation uses the same experience tiers as resume writing. Bundling it with a Canadian resume saves 20 percent.",
      },
      {
        title: "Share your profile and targets",
        body: "Send your LinkedIn URL, current resume and the Canadian roles you want to be found for, plus your location and work-authorisation situation.",
      },
      {
        title: "Chanuka rewrites every section",
        body: "Headline, About, experience and skills are written personally, in Canadian English, as ready-to-paste text.",
      },
      {
        title: "Revise and publish",
        body: "Review the draft, request changes in one revision round, then paste the final text into your profile.",
      },
    ],
    faqs: [
      {
        q: "Do Canadian recruiters really use LinkedIn to find candidates?",
        a: "Yes, LinkedIn is a standard sourcing tool for Canadian employers and recruitment agencies, especially in technology, finance and healthcare. They search by title, skill and location to build shortlists, often before a role appears on Job Bank or Indeed. A profile with a vague headline or the wrong job titles does not appear in those searches, however strong the experience behind it.",
      },
      {
        q: "Should I set my LinkedIn location to Canada before I move there?",
        a: "No, keep your real location and state your Canada plans honestly instead. A false Canadian location usually surfaces on the first recruiter call and costs you trust. Say in the headline or About section that you are relocating to a named city and give your work-authorisation position if it is settled, so recruiters who hire internationally can still find and contact you.",
      },
      {
        q: "Should my LinkedIn profile use Canadian spelling?",
        a: "Use Canadian spelling if Canada is your main target market: colour, centre, organize and analyze together, which is the mix Canadian English actually uses. Recruiters notice a profile that is purely British or purely American when it claims Canadian ambitions, and consistent spelling keeps your LinkedIn profile and resume reading as one document.",
      },
      {
        q: "Is LinkedIn optimisation worth it if I already have a good resume?",
        a: "It is worth it when recruiters are not approaching you, or when your profile and resume tell different stories. A resume only works once you send it; LinkedIn works while you are not looking, through search. If most of your target roles are unionised or government postings filled through a formal portal, LinkedIn matters less and the resume is the better spend.",
      },
      {
        q: "What does LinkedIn optimisation cost for the Canadian market?",
        a: "LinkedIn optimisation costs $129, $189 or $279 USD depending on experience level, matching the resume writing tiers. Adding it to a Canadian resume saves 20 percent on both, and taking resume, LinkedIn and cover letter together saves 30 percent. Payment is in USD and delivery is 5 to 7 days as standard.",
      },
      {
        q: "Can a stronger LinkedIn profile help with the Canadian-experience problem?",
        a: "It can help indirectly. A profile that clearly explains your international employers, names any Canadian credential assessment or certification in progress, and stays active with Canadian connections and groups gives a recruiter more reasons to look past the absence of local experience. It will not remove the preference on its own, but it changes what a recruiter sees first.",
      },
    ],
  },
  {
    country: "canada",
    service: "cover-letter-writing",
    primaryKeyword: "cover letter writing service Canada",
    secondaryKeywords: [
      "Canadian cover letter writer",
      "cover letter for Canada jobs from abroad",
      "Canadian cover letter format",
      "cover letter for skilled trades and regulated professions Canada",
    ],
    metaTitle: "Cover Letter Writing Service Canada",
    metaDescription:
      "Canadian cover letters written to local conventions: one page, a direct case for the role, and honest framing of work authorisation. From $79 USD.",
    eyebrow: "Canada cover letter writing",
    h1: "Cover Letter Writing for Canadian Applications",
    lead:
      "A one-page Canadian cover letter that makes the case for one specific role in plain, direct Canadian English, and handles questions like relocation and work authorisation before the reader has to ask.",
    quickAnswer:
      "A Canadian cover letter writing service produces a one-page letter, usually three or four short paragraphs, that links your strongest evidence to the requirements of one role, in Canadian English with local letter conventions. Chanuka Jeewantha writes each letter personally, including how to frame relocation, work authorisation or the Canadian-experience question, with prices from $79 USD and standard delivery in 5 to 7 days.",
    keyFacts: [
      { label: "Length", value: "One page, three to four short paragraphs" },
      { label: "Salutation", value: "A named hiring contact where possible" },
      { label: "Sign-off", value: "Sincerely, followed by your name" },
      { label: "Price", value: "$79, $119 or $159 USD by experience" },
      { label: "Bundle", value: "Save 20 percent with a Canadian resume" },
    ],
    whyDifferent: {
      heading: "What a Canadian cover letter has to do that a generic one does not",
      paragraphs: [
        "Canadian cover letters are direct and specific, not long. They name the role, connect two or three pieces of evidence to what the posting actually asks for, and close without pressure. A letter that opens with ‘I am writing to apply for the post of’ or closes with a list of personality traits reads as written for a different market.",
        "Many Canadian job postings, especially in the public sector, unionised roles and larger employers, ask for a cover letter as a genuine screening step rather than a formality, sometimes with its own word limit inside an online application form. Where that is the case, the letter is written to that limit rather than around it.",
        "For newcomers, the letter is often the right place to handle what the resume should not carry directly: your relocation timeline, your work authorisation, and, when it is relevant, a brief, factual line addressing the Canadian-experience question rather than leaving the reader to assume the worst.",
      ],
    },
    whatYouGet: [
      "A one-page letter written for a specific Canadian role and employer",
      "An opening that names the role and gives the reader a reason to keep going",
      "Two or three paragraphs linking your evidence to the posting's stated requirements",
      "Relocation, availability and work-authorisation wording framed factually where relevant",
      "Correct Canadian salutation, sign-off and date conventions",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Opening", value: "Name the role and where you saw it in the first sentence or two" },
      { label: "Evidence", value: "Two or three specific examples matched to the posting's main requirements" },
      { label: "Tone", value: "Direct and confident, without superlatives" },
      { label: "Date format", value: "Month Day, Year, for example September 27, 2026" },
      { label: "Public sector and unionised roles", value: "Often score the letter against stated criteria, closer to a supporting statement than a free-form note" },
      { label: "Length limits", value: "Online application portals sometimes set a word or character limit; the letter is written to fit it" },
    ],
    sectors: [
      "Corporate roles applied for directly",
      "Public sector and unionised postings with formal criteria",
      "Healthcare and regulated professions alongside credential documentation",
      "Skilled trades applications",
      "Newcomers explaining relocation and work authorisation",
      "Graduate and early-career roles",
    ],
    process: [
      {
        title: "Choose your tier and share the role",
        body: "Pick your experience tier and send the job posting with your current resume.",
      },
      {
        title: "Answer a short brief",
        body: "Tell Chanuka why this role and employer, your availability, and your work-authorisation position if you are outside Canada.",
      },
      {
        title: "Receive, revise, send",
        body: "You get a draft letter, one revision round and final Word and PDF files, ready to adapt for similar roles.",
      },
    ],
    faqs: [
      {
        q: "Do Canadian employers still read cover letters?",
        a: "Many do, especially for direct applications, public sector and unionised postings, and roles where the job posting explicitly asks for one. Some online application systems make the letter optional or skip it entirely. When a letter is requested, a generic one hurts more than a missing one, so write it for the role or leave an optional one out.",
      },
      {
        q: "How long should a cover letter be in Canada?",
        a: "A Canadian cover letter should fit on one page, usually three or four short paragraphs and around 250 to 400 words. The reader wants the role, your fit and your availability, not a second resume. If the online application sets a word or character limit, write to that limit instead of your usual length.",
      },
      {
        q: "Should I mention my work permit or immigration status in a Canadian cover letter?",
        a: "Usually yes, briefly and factually, when the posting invites international applicants or the employer is known to hire newcomers. State your current work-authorisation position and availability in one sentence and keep the rest of the letter about the value you bring. Leaving it out entirely tends to raise more questions than answering it plainly.",
      },
      {
        q: "What is the difference between a cover letter and a statement of qualifications?",
        a: "A cover letter is a short, one-page case for the role, while a statement of qualifications, common in Canadian public sector and government postings, responds point by point to a listed set of criteria. It is scored more formally, so each criterion needs its own specific evidence rather than one flowing narrative.",
      },
      {
        q: "Can a cover letter help with the Canadian-experience problem?",
        a: "It can, briefly. Rather than apologising for a lack of Canadian experience, the letter can note international employers in terms a Canadian reader recognises and point to anything already under way, a credential assessment, a professional membership, volunteering, that shows familiarity with Canadian standards. It works best alongside a resume that does the same.",
      },
      {
        q: "Should my cover letter be in French for a Quebec role?",
        a: "Often, for Quebec-based and many federally regulated employers, yes. Chanuka writes in English, so for a role that specifically requires a French letter, mention it in your brief before ordering so expectations are clear, since translation itself is outside the scope of this service.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /canada/career-advice/{slug} : Canada-specific articles            */
/* ------------------------------------------------------------------ */

const articles: CountryArticle[] = [
  {
    country: "canada",
    slug: "canadian-resume-format",
    title: "Canadian resume format: the layout Canadian employers expect",
    metaTitle: "Canadian Resume Format: Sections and Layout",
    metaDescription:
      "The Canadian resume format section by section: header, experience and education layout, spelling, and the details that mark a resume as foreign.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "A Canadian resume follows a shape employers recognise without thinking about it. Here is that shape, section by section, and the details that quietly mark a resume as built for somewhere else.",
    quickAnswer:
      "The standard Canadian resume format is reverse chronological: name and contact details, a short professional summary, core skills, work experience with achievement-led bullets and month and year dates, education, then certifications or professional memberships. It uses Canadian English, has no photo, date of birth, SIN or marital status, and does not list references. Most experienced candidates fit it on two pages.",
    intro:
      "Canadian employers are not looking for a creative resume structure. They want the information in the place they expect it, and increasingly, in a format an applicant tracking system can parse without losing anything. That makes the Canadian resume format less a design decision than a set of conventions, close enough to a US resume that the two are often confused, but different in specific ways that matter to a Canadian reader. This guide goes through the format section by section, with the details that separate a Canadian resume from a US one and from the CV styles common in South Asia, the Gulf and much of Europe. For how ATS software actually reads a resume, see the separate guide on ATS in Canada; this page is about the shape itself. It also matters because the same resume, largely unchanged, is what you upload to Job Bank, attach on Indeed and mirror on LinkedIn, so getting the base format right once pays off across every channel.",
    sections: [
      {
        heading: "The standard order of a Canadian resume",
        paragraphs: [
          "Almost every Canadian resume that gets read follows a similar order. Departing from it is fine when you have a reason, for example putting education first as a recent graduate with limited work history.",
        ],
        bullets: [
          "Contact details: name, city and province, phone, email and LinkedIn URL, no heading that says ‘Resume’",
          "Professional summary: three to five lines on who you are professionally and where you are headed",
          "Core skills: a short, grouped list of specific, relevant skills, optional but common in technical and skilled roles",
          "Work experience: most recent role first, with dates, employer, location and achievements",
          "Education: degree or diploma, institution and dates, with any credential assessment noted where relevant",
          "Certifications and professional memberships: P.Eng, CPA, RN, Red Seal, PMP and similar",
          "Additional information: languages and relevant volunteering, only where it adds something",
        ],
      },
      {
        heading: "The header: what goes in and what stays out",
        paragraphs: [
          "A Canadian header is short: full name, a phone number, a professional email address, your city and province, and your LinkedIn URL. A full street address is not expected and adds nothing an employer needs at the application stage. If you are applying from outside Canada, give your real location and add your plans plainly, for example ‘Colombo, Sri Lanka. Relocating to Toronto, ON, January 2027.’",
          "What stays out is the personal information that other markets treat as normal: photo, date of birth, age, gender, marital status, nationality, religion, and identification numbers including your Social Insurance Number. Human rights legislation across Canada makes hiring decisions based on protected characteristics unlawful, so employers generally prefer not to see this information before they have assessed your qualifications.",
          "Work authorisation is the one personal detail worth stating. If you already hold Canadian citizenship or permanent residence, or a specific work permit that covers the role, one short line under your contact details answers a question every employer eventually has to confirm.",
        ],
      },
      {
        heading: "Laying out work experience",
        paragraphs: [
          "Each role opens with a consistent line: job title, employer, location and dates. Canadian convention is month and year, for example ‘June 2021 to Present.’ Put the job title first if it is your strongest signal for the role you want, or the employer first if the name carries more weight.",
          "Under each role, one line of context helps a Canadian reader unfamiliar with an overseas employer: what the organisation does, roughly how large it is, and who it serves. A hiring manager in Calgary does not know a regional bank in Colombo or a mid-size IT services firm in Pune by name, and a single line closes that gap.",
          "Bullets should read as outcomes, not duties. ‘Reduced month-end close from eight working days to five across three entities’ tells a Canadian reader more than a paragraph of responsibilities. Recent roles usually get four to six bullets; roles from more than ten years ago shrink to one or two lines or move into a brief earlier-career line.",
          "A gap of a few months rarely needs an explanation on the resume itself; the interview is the place for that. A longer gap, for relocation, caregiving, further study or a layoff, is usually better addressed with a brief, honest line, such as a dated entry for further study, than left as an unexplained blank a reader has to guess about.",
        ],
      },
      {
        heading: "Chronological versus combination formats",
        paragraphs: [
          "Almost every Canadian resume that gets shortlisted uses the reverse-chronological format described above: work experience organised by employer, most recent first. A combination format, which leads with a skills summary before a compressed employment history, shows up occasionally, most often for career changers or people re-entering the workforce after a gap, where a straight chronological story undersells skills built outside a matching job title.",
          "A purely functional resume, which groups skills into categories and drops dates and employers into a short list at the bottom, is rarely the right choice in Canada. Recruiters and hiring managers tend to read it as an attempt to hide something, usually gaps or a lack of directly relevant experience, and it also tends to parse poorly, since most applicant tracking systems expect a fairly standard chronological structure to extract dates and employers correctly. If your work history genuinely needs some reframing, a combination format that still lists employers and dates clearly is a safer middle ground.",
        ],
      },
      {
        heading: "Education, credentials and professional bodies",
        paragraphs: [
          "State your degree or diploma as awarded, with the institution, country and result, for example a CGPA or class of degree. Do not convert an overseas grade into a Canadian-sounding equivalent yourself. If an employer has asked for one, or your target occupation is regulated, name the organisation handling your educational credential assessment and its status, in progress or completed.",
          "Regulated and credentialed professions carry real weight on a Canadian resume: Professional Engineer status through a provincial engineering regulator, CPA for accountants, Red Seal certification for skilled trades, and provincial registration for nurses, most internationally trained applicants reach that through the National Nursing Assessment Service. Name the body in full once, state your status accurately, in progress, eligible, registered, and include the relevant year.",
          "School results belong on a resume only very early in a career, and even then as one summary line rather than a subject-by-subject list. Once you have a degree and some work experience, remove them entirely. New graduates with little paid experience can lean on academic projects, co-op placements and case competitions, described the same way a work role would be: organisation or context, your specific contribution, and the outcome. A co-op term with a Canadian employer is also one of the more effective ways a student builds an early Canadian reference point.",
        ],
      },
      {
        heading: "Language, file and formatting conventions",
        paragraphs: [
          "Canadian English blends British and American spelling: colour, centre and cheque sit alongside organize, analyze and program. Pick a consistent Canadian dictionary and apply it throughout rather than mixing British and US spelling in the same document.",
          "Outside Quebec, English resumes are the default, though naming a genuine French ability is worth doing. Inside Quebec, and for many federally regulated employers with a presence there, a French or bilingual resume can be expected rather than optional, so check the posting or the employer's own instructions before you apply.",
          "Submit a Word document or a text-based PDF depending on what the application system requests. Use a simple, single-column layout with standard headings such as ‘Work Experience’ and ‘Education’, a readable font around 10 to 11 point, and consistent spacing so both a person and a parsing system read it the same way.",
          "A short note on province names: use the standard two-letter abbreviations, ON, BC, AB, QC and so on, since that is what most Canadian systems and readers expect in a header or a form field, even though a full mailing address is unlikely to appear on the resume itself.",
        ],
      },
    ],
    takeaways: [
      "Follow the standard order: contact details, summary, skills, experience, education, certifications.",
      "Keep the header minimal and leave out photo, date of birth, SIN, marital status and nationality.",
      "Write dates as month and year, most recent role first.",
      "State credentials accurately, including where an assessment or registration is still in progress.",
      "Use Canadian spelling consistently, and check whether French or a bilingual resume is expected.",
    ],
    faqs: [
      {
        q: "What is the correct resume format for Canada?",
        a: "The correct Canadian resume format is reverse chronological: contact details, a professional summary, core skills, work experience with month and year dates, education, and certifications or professional memberships. It uses Canadian English, leaves out the photo and personal details beyond contact information, and does not list references. Two pages is the norm for experienced candidates, one page for entry level.",
      },
      {
        q: "Should a Canadian resume include my full home address?",
        a: "No, a full street address is not expected on a Canadian resume. Your city and province are enough for an employer to judge location and any relocation need. If you are applying from outside Canada, give your real city and country and add a line about your relocation plans and timing so the reader is not left guessing.",
      },
      {
        q: "Is it better to send a resume as Word or PDF in Canada?",
        a: "Either can work, so check the application instructions first. A text-based PDF keeps your formatting intact for direct applications and email. Some Canadian employer application systems specifically request Word so their software can extract your details. A simple, single-column layout parses reliably in either format.",
      },
      {
        q: "Do I need a core skills section on a Canadian resume?",
        a: "A core skills section is optional but useful, especially for technical, trades and specialist roles, where it helps a reader and a search system see your relevant skills quickly. Keep it short and specific, group similar skills together, and make sure each important skill is also demonstrated somewhere in your work experience.",
      },
    ],
    sources: [
      {
        label: "Ontario Human Rights Commission: Interviewing and making hiring decisions",
        url: "https://www.ohrc.on.ca/en/iv-human-rights-issues-all-stages-employment/5-interviewing-and-making-hiring-decisions",
      },
      { label: "Job Bank (Government of Canada)", url: "https://www.jobbank.gc.ca/home" },
    ],
    relatedLinks: [
      { href: "/career-advice/how-long-should-a-cv-be", label: "How long should a CV be?" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/canada/career-advice/ats-resume-canada", label: "Passing ATS in Canada" },
      { href: "/canada/career-advice/canadian-experience-on-your-resume", label: "The Canadian experience question" },
      { href: "/canada/cv-writing", label: "Canada resume writing service" },
    ],
  },
  {
    country: "canada",
    slug: "canadian-experience-on-your-resume",
    title: "The Canadian experience question, and how to answer it on your resume",
    metaTitle: "Canadian Experience On Your Resume: How To Frame It",
    metaDescription:
      "How to write a resume when you have no Canadian work experience: framing international employers, credentials, and the steps that actually help.",
    category: "International careers",
    readMinutes: 8,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Every newcomer hears about the Canadian-experience preference within weeks of applying. A resume cannot make it disappear, but it can remove the easiest reasons a hiring manager has to set an application aside.",
    quickAnswer:
      "There is no formatting trick that overcomes the Canadian-experience preference, but a resume can reduce its weight: describe international employers in terms a Canadian reader can place, name any credential assessment or Canadian-recognised certification already under way, use a small Canadian reference point such as relevant volunteering, and never apologise for the gap directly on the page.",
    intro:
      "‘Canadian experience’ is the phrase almost every newcomer hears within weeks of starting to apply, sometimes from a rejection, often just from the quiet pattern of interviews that do not happen. It is not a law or a formal requirement. It is a preference some hiring managers hold, more strongly in some sectors and roles than others, and it is a well-documented, real barrier rather than a myth invented by frustrated applicants. A resume cannot make it disappear. What it can do is remove the easy reasons a hiring manager has to set your application aside, and put your international experience in terms that are easier to trust at a glance. How much it affects you also depends on your field and the size of employer you are targeting, which the sections below cover in turn. This article is about that resume work specifically, not the wider debate over whether the preference is fair.",
    sections: [
      {
        heading: "What the Canadian-experience preference actually is",
        paragraphs: [
          "The preference shows up as a soft filter rather than a written rule: given two similar candidates, a hiring manager leans toward the one whose last role was at a company they recognise, in a system they already understand. It is strongest in fields with strict local practice, such as regulated professions, and weaker in fields that already hire globally, such as much of software engineering. It also varies by employer size; a large multinational with offices in several countries reads international experience very differently from a small local firm hiring its first employee from abroad.",
          "It persists partly because verifying an unfamiliar employer or education system genuinely takes more effort than confirming a known one, and partly because some hiring managers, rightly or not, use local experience as a rough proxy for familiarity with workplace norms, communication style and regulatory context. Understanding the mechanism does not remove the barrier, but it clarifies what your resume is actually working against.",
          "Nothing about it means your international experience does not count. It means the burden of proof sits with the resume: the reader has to work harder to understand an unfamiliar employer than a familiar one, and a resume that does that work for them removes friction rather than asking the reader to do it themselves.",
        ],
      },
      {
        heading: "How employers in different sectors weigh the preference",
        paragraphs: [
          "The preference is not uniform across the Canadian economy. In software engineering, many product companies already hire distributed teams and read GitHub contributions, open-source work or a strong portfolio as a substitute for local references, which softens the preference considerably. In regulated fields such as nursing, engineering and skilled trades, the credential and licensing process itself becomes the main gate, so the Canadian-experience question often shows up less directly and registration status shows up more.",
          "Public sector and unionised employers, by contrast, frequently hire through formal, criteria-based processes rather than informal pattern matching, which can reduce the influence of an unconscious local-experience bias, though it introduces its own hurdles around understanding how the process works. Small and mid-size private employers, who often hire without a dedicated recruiting team, tend to lean on the preference most heavily, simply because they have fewer other ways to judge an unfamiliar resume quickly.",
        ],
      },
      {
        heading: "Describing international employers so a Canadian reader can place them",
        paragraphs: [
          "The single most useful line on a newcomer's resume is often the one most people skip: a short line of context under an unfamiliar employer's name. Sector, approximate size, and who they served, is enough. ‘Regional retail bank, 40 branches, serving corporate and SME clients’ tells a Canadian reader more in eight words than the company name alone ever will.",
          "Where your work served North American or global clients, even indirectly through outsourcing, consulting or remote delivery, say so specifically. ‘Delivered platform features for a US-based fintech client’ or ‘Managed logistics for shipments into Canadian and US distribution centres’ answers the Canadian-experience question more directly than any general statement of skill.",
          "Avoid the instinct to inflate an unfamiliar employer's importance with adjectives. A Canadian reader responds to scope and evidence, not to claims that a company was ‘leading’ or ‘renowned’, which a reader with no way to verify them tends to discount.",
        ],
      },
      {
        heading: "Credentials and assessments that carry real weight",
        paragraphs: [
          "For regulated occupations, engineering, nursing, accounting, skilled trades, the credential process itself is evidence of seriousness, even before it is finished. An educational credential assessment in progress through an organisation designated by Immigration, Refugees and Citizenship Canada, a Red Seal application under way, or registration steps started with a provincial nursing college all signal that you understand and are working through the Canadian system, not just applying into it blind.",
          "For non-regulated fields, internationally recognised certifications, project management, cloud platforms, professional accounting bodies with Canadian recognition arrangements, do similar work. Name the certification, your exact status, and the year, the same discipline that matters on any resume, and it holds up even when the employer that issued your work experience does not.",
        ],
      },
      {
        heading: "Building a Canadian reference point before your first Canadian job",
        paragraphs: [
          "A first Canadian reference point does not have to be paid, full-time work. Relevant volunteering, a short contract, a professional association's local chapter, or a Canadian course or certification all give you something concrete to put above your international roles, and something to speak to in an interview that is not from another country. Newcomer-focused employment programs in most provinces exist specifically to help with this bridge, often through mentorship or short placements.",
          "Networking carries more weight in Canada than many newcomers expect, not as a replacement for a strong resume but as a second channel alongside it. A short informational conversation with someone already working in your field, arranged through a professional association, a newcomer program or a specific, polite LinkedIn message, does two things at once: it often surfaces roles before they are advertised, and it gives you a specific person who can speak, even informally, to your seriousness about the Canadian market.",
          "Be selective about what you add. A Canadian volunteering role with no connection to your target field adds little beyond showing you are settled; a short contract or placement in your actual field, even part time, is worth far more on the page than several unrelated ones.",
        ],
      },
      {
        heading: "What not to do on the resume itself",
        paragraphs: [
          "Do not apologise for the gap directly on the resume. A line like ‘seeking my first opportunity in Canada’ or ‘new to the Canadian job market’ does the opposite of what it intends: it draws attention to the gap instead of letting your evidence speak first. Address it, if at all, briefly in a cover letter, not in the document a reader scans in seconds.",
          "Do not invent Canadian experience, list a remote role for a Canadian company you did not actually work for, or stretch a short visit into work history. Canadian employers do reference checks, and a fabricated line is a far bigger risk than an honest international resume.",
          "Do not let the Canadian-experience question turn into avoiding directly relevant international experience. Your strongest, most senior, most specific work is still your strongest asset. The goal is to present it clearly, not to hide it behind Canadian-sounding language with nothing behind it.",
        ],
      },
    ],
    takeaways: [
      "The Canadian-experience preference is real but soft, a bias to work around, not a rule to meet.",
      "Give unfamiliar international employers one line of context: sector, scale, who they served.",
      "Name credential assessments, registrations or certifications in progress, not just completed ones.",
      "A small, relevant Canadian reference point helps more than several unrelated ones.",
      "Never apologise for the gap on the resume itself; let the evidence carry the case.",
    ],
    faqs: [
      {
        q: "Is the Canadian-experience preference legal?",
        a: "Human rights legislation makes hiring decisions based on protected characteristics such as national origin unlawful, but a general preference for local work experience is not, on its own, treated the same way, and several provinces and advocacy bodies have raised concerns about how it is applied in practice. This is a workplace-fairness question a resume cannot resolve, and nothing here is legal advice.",
      },
      {
        q: "How do I list international work experience on a Canadian resume?",
        a: "List it the same way you would list Canadian experience, reverse chronologically with job title, employer, dates and achievement-led bullets, and add one line of context under any employer a Canadian reader would not recognise: sector, approximate size, and who the organisation served. Keep the format identical to how a Canadian role would appear.",
      },
      {
        q: "Does volunteering in Canada help with the Canadian-experience problem?",
        a: "It can, particularly when it is relevant to your target field rather than general community involvement. A short volunteer placement, mentorship program, or professional association chapter gives you a Canadian reference point and something recent to discuss in an interview. It works best as a bridge alongside a resume that also presents your international experience clearly, not as a replacement for it.",
      },
      {
        q: "Should I take a survival job while I look for a role in my field?",
        a: "That is a personal financial decision outside the scope of a resume, and it depends on your situation. If you do take one, a resume for your target field usually keeps it brief or leaves it off entirely unless it demonstrates a transferable skill, and focuses the space on your relevant professional experience and credentials instead.",
      },
    ],
    sources: [
      {
        label: "IRCC: Educational credential assessment",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html",
      },
      { label: "National Nursing Assessment Service", url: "https://www.nnas.ca/" },
      { label: "Red Seal Program", url: "https://red-seal.ca/eng/welcome.shtml" },
    ],
    relatedLinks: [
      { href: "/career-advice/cv-for-a-new-market", label: "Adapting a CV for a new market" },
      { href: "/canada/career-advice/canadian-resume-format", label: "Canadian resume format" },
      { href: "/canada/international-job-seekers", label: "Applying for Canadian jobs from abroad" },
      { href: "/cv-samples/international-cv", label: "International CV sample" },
      { href: "/canada/cv-writing", label: "Canada resume writing service" },
    ],
  },
  {
    country: "canada",
    slug: "ats-resume-canada",
    title: "Getting an ATS to read your resume for Canadian jobs",
    metaTitle: "ATS Resume Canada: Passing ATS for Canadian Jobs",
    metaDescription:
      "How to format a resume so ATS software used by Canadian employers reads it correctly, without changing how ATS itself works. A practical checklist.",
    category: "ATS and formatting",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Applicant tracking systems do not work differently in Canada. What changes is which employers use them, what their postings ask for, and which Canadian details need to reach the human reader on the other side.",
    quickAnswer:
      "Applicant tracking systems work the same way everywhere: they parse a resume's text and structure, then let a recruiter search and filter by keyword. Passing ATS for a Canadian job means using a simple, single-column layout, standard section headings, the job posting's own terms, and a text-based Word or PDF file, the same practical rules that apply anywhere, applied carefully to Canadian job postings and file conventions.",
    intro:
      "Applicant tracking systems, the software many Canadian employers use to collect, sort and search resumes, are often described as if they work differently from one country to the next. They do not. The same platforms, and the same underlying parsing and keyword-search technology, are used across Canada, the United States and much of the world. What changes for a Canadian application is not how the software behaves, but which employers use it, what their job postings ask for, and which Canadian-specific details, work authorisation, provincial credentials, Canadian spelling, need to appear in the resume for a human reader once it clears the system. This guide covers formatting a resume so it passes cleanly through ATS when you apply to Canadian employers, without any claim that the technology itself is different here. The checklist toward the end covers the small, mechanical checks worth running on any Canadian application before you submit it.",
    sections: [
      {
        heading: "What an ATS actually does",
        paragraphs: [
          "An ATS is, at its simplest, a database with a search function. When you apply, the system extracts text from your resume file and stores it against your application, and a recruiter later searches that stored text by keyword, filters by criteria like location or years of experience, and reviews the results. Some systems also rank or score resumes automatically against a job description; many Canadian employers, particularly small and mid-size ones, use the system mainly for storage and search rather than automated ranking.",
          "The technology is largely the same set of platforms used internationally, adapted to whichever job board or careers site an employer runs. There is no separate ‘Canadian ATS’ with different rules. What differs is the posting itself, the required keywords, the requested file type, and whether the employer also expects province-specific details like a work permit category.",
          "Whatever a system does with your resume first, a human being is still the one who decides whether to move you forward. Recruiters typically review a shortlist the system surfaces, not an automatic ranking treated as final, which is why a resume written to be read well by a person, not just parsed by software, remains the more reliable target.",
        ],
      },
      {
        heading: "Formatting that parses cleanly, wherever you apply",
        paragraphs: [
          "Use a single-column layout. Multi-column resumes, text boxes and tables can be read out of order or dropped entirely by parsing software, scrambling your work history into the wrong sequence. A plain, top-to-bottom layout parses reliably across virtually every system in use.",
          "Use standard section headings. ‘Work Experience’, ‘Education’ and ‘Skills’ are recognised reliably; creative headings like ‘My Journey’ or ‘What I Bring’ are not, and can cause a parser to file content under the wrong section or miss it altogether.",
          "Avoid images, icons and graphics for content that matters. A skills level shown as a row of dots or stars often does not transfer as text at all. If you want to keep a visual resume for networking or a portfolio, keep a plain-text version for online applications.",
          "Submit the file type the posting asks for. Where there is a choice, a text-based PDF, not a scanned image, or a standard Word document both parse well; an image-based PDF, created by scanning a printed page, generally does not.",
        ],
      },
      {
        heading: "Matching the language of a Canadian job posting",
        paragraphs: [
          "Keyword matching is not unique to Canada, but it matters just as much here as anywhere: a system that searches by keyword can only find what is written, in close to the words used. If a posting asks for ‘stakeholder management’ and your resume says ‘liaised with clients’, a keyword search may miss the match even though the skill is the same.",
          "Read the posting closely and mirror its specific terms where they are honestly true of your experience: the exact software names, certifications, and skill phrases it uses. This is not about stuffing the resume with keywords out of context. It is about using the same words for the same things, which is simply good, precise writing as well as good practice for a keyword search.",
          "Canadian postings sometimes include occupation-specific language tied to a National Occupational Classification code, particularly for roles that also matter for immigration purposes. Where a posting uses that kind of formal language, echoing it accurately in your resume can help, without needing to understand the classification system in depth.",
        ],
      },
      {
        heading: "Canadian-specific details worth getting right",
        paragraphs: [
          "State your work authorisation plainly and accurately, citizen, permanent resident, or a specific permit category, since many Canadian application forms ask for it directly, and an ATS field or a human reader will look for it either way.",
          "Use Canadian spelling and terms consistently, colour rather than color, and Canadian job titles where they differ from US or UK equivalents. This will not change how the parser reads the file, but it changes how a human reader assesses fit once your resume reaches them.",
          "Name provincial or national credentials by their exact, correct title, a Professional Engineer designation, a Red Seal certificate, CPA membership, provincial nursing registration, since both keyword search and a human reviewer are looking for the specific term, not a paraphrase of it.",
          "For roles based in Quebec or with a bilingual employer, some application systems expect a French-language resume, or run parallel English and French postings with separate keyword sets. Where a posting is in French, apply in French rather than submitting an English resume machine-translated at the last minute, since an ATS parses the language it receives, and a rough translation reads poorly to both the software and the person after it.",
        ],
      },
      {
        heading: "A short, practical pre-submission checklist",
        paragraphs: [
          "Before you submit a resume to a Canadian employer's application system, a few minutes of checking catches most of the problems that cause a resume to arrive garbled or incomplete. Open the file in a plain text editor, or copy and paste its contents into a blank document, and check that the text comes out in the right order, with your most recent role still at the top and no paragraphs jumbled together.",
          "Confirm that section headings survived as text rather than as part of an image or a styled graphic, that dates read cleanly without unusual symbols, and that your contact details, especially your email address and phone number, are not accidentally embedded inside a header or footer, which some systems strip out entirely before storing the rest of the document.",
          "Finally, save the file with a clear name that includes your own name, such as Firstname-Lastname-Resume.pdf, rather than a generic name like ‘Resume Final v3’, since some systems display the file name directly to a recruiter searching their database.",
        ],
      },
      {
        heading: "What ATS software cannot do, and why it does not need to be tricked",
        paragraphs: [
          "An ATS does not reject a resume outright for having the wrong font or margin size; those concerns are overstated. It also does not somehow rank a well-formatted resume above a strong candidate whose resume is merely plain. A human being still reads the shortlist. The goal of formatting for ATS is simply to make sure your resume arrives intact and searchable, not to game the system into ranking you artificially higher than your experience supports.",
          "The most reliable approach, in Canada or anywhere else, is a resume that is simply written and formatted well: clear structure, honest and specific language that happens to match the posting's own terms, and a plain file the system can read without losing anything. That is also, not coincidentally, the resume a human reader finds easiest to trust.",
        ],
      },
    ],
    takeaways: [
      "ATS technology used by Canadian employers is the same technology used internationally; nothing about it is Canada-specific.",
      "Use a single-column layout, standard section headings, and a text-based Word or PDF file.",
      "Mirror a Canadian job posting's own language where it honestly matches your experience.",
      "State work authorisation and Canadian credentials with their exact, correct titles.",
      "Good formatting gets your resume read intact; it does not replace strong, specific content.",
    ],
    faqs: [
      {
        q: "Does ATS work differently for Canadian job applications?",
        a: "No. The applicant tracking systems used by Canadian employers are largely the same platforms used internationally, and they parse and search resumes the same way everywhere. What is specific to Canada is the job posting's language, the file format an employer's portal requests, and Canadian details like work authorisation and provincial credentials, not the underlying technology.",
      },
      {
        q: "Will a creative resume design get rejected by ATS in Canada?",
        a: "It risks being parsed incorrectly rather than being automatically rejected outright. Multi-column layouts, text boxes and graphics can scramble the order of your information or drop content that a system cannot read as plain text. A simple, single-column layout avoids the risk entirely and still reads well for a human reviewer.",
      },
      {
        q: "Should I copy keywords directly from a Canadian job posting into my resume?",
        a: "Use the posting's own terms only where they honestly describe your experience, rather than copying keywords wholesale. Matching specific, true language, the same software name, the same skill phrase, helps a keyword search find you and reads as precise writing to a human reader; keywords with nothing behind them tend to fall apart at interview stage.",
      },
      {
        q: "What file format should I use for a Canadian job application?",
        a: "Follow the employer's instructions where they give one. Where there is a choice, a text-based PDF or a standard Word document both parse reliably. Avoid an image-based PDF created by scanning a printed page, since most parsing software cannot extract text from it at all.",
      },
    ],
    sources: [{ label: "Job Bank (Government of Canada)", url: "https://www.jobbank.gc.ca/home" }],
    relatedLinks: [
      { href: "/career-advice/how-ats-reads-your-cv", label: "How ATS reads your CV" },
      { href: "/career-advice/ats-friendly-cv-format", label: "ATS-friendly CV format" },
      { href: "/career-advice/how-to-find-ats-keywords", label: "How to find ATS keywords" },
      { href: "/canada/career-advice/canadian-resume-format", label: "Canadian resume format" },
      { href: "/canada/cv-writing", label: "Canada resume writing service" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /canada/international-job-seekers : destination hub                */
/* ------------------------------------------------------------------ */

const ijsHub: IjsHub = {
  country: "canada",
  metaTitle: "Applying for Canadian Jobs From Abroad",
  metaDescription:
    "How to apply for Canadian jobs from overseas: resume format, the Canadian-experience question, credential assessment, and where to check official routes.",
  h1: "Applying for Canadian Jobs From Abroad",
  lead:
    "A resume built for Colombo, Mumbai, Dubai or Manila will be read in Canada as a resume built for somewhere else. The format is specific, the Canadian-experience question sits under every application, and the right immigration route depends on details a resume writer cannot advise on.",
  quickAnswer:
    "To apply for Canadian jobs from abroad, convert your resume to Canadian conventions (two pages, no photo or personal details, a short summary, Canadian English), state your work authorisation honestly, and address the Canadian-experience preference by framing international employers clearly. Start any immigration question on canada.ca, and get an educational credential assessment from an IRCC-designated organisation if your occupation needs one.",
  overview:
    "Most international applicants who struggle to get responses from Canadian employers are not short of relevant experience. They are sending a resume built for a different market's rules, into a process where a hiring manager, often without saying so, is weighing unfamiliar signals as risk: a photo, a personal-details block, three or four pages, duties instead of results, an unstated work-authorisation position, and international employers the reader cannot place. Fix the resume, and your experience gets judged on its content. This page covers the resume conventions, the practical steps to applying from outside Canada, and where to find the official immigration information. It is orientation only, not immigration or legal advice.",
  cvConventions: [
    { label: "Length", value: "Two pages for experienced candidates, one for entry level." },
    {
      label: "Photo",
      value:
        "None. Not a resume-specific law, but human rights legislation discourages employers from collecting information tied to protected characteristics, so a photo reads as unfamiliar with Canadian practice.",
    },
    { label: "Personal details", value: "Name, city and country, phone with country code, email, LinkedIn. No date of birth, SIN, marital status, religion or nationality." },
    { label: "Opening", value: "A three to five line professional summary aimed at the target role." },
    { label: "Experience", value: "Reverse chronological, month and year dates, achievements with scope and outcomes." },
    { label: "Spelling", value: "Canadian English. ‘Resume’, not ‘CV’, though CV is understood." },
    { label: "Language", value: "English for most of Canada; French or bilingual for Quebec and many federally regulated employers." },
    { label: "References", value: "Not listed; employers ask for them later in the process." },
  ],
  whatChanges: [
    "Cut to two pages by shrinking roles older than about ten years and removing duties any reader would assume",
    "Remove the photo, date of birth, SIN and the rest of the personal-details block",
    "Replace an objective statement with a professional summary that states your level, evidence and target role",
    "Add one line of context under unfamiliar employers: sector, size and who they served",
    "Name any educational credential assessment, professional registration or Red Seal process already under way",
    "State overseas qualifications as awarded, and add Canadian-recognised credentials where you hold them",
    "Switch to Canadian spelling and a direct, evidence-led tone",
  ],
  applyingFromAbroad: [
    {
      title: "Work out your likely route before you write",
      body: "Whether you will need a work permit, and which immigration program fits your situation, shapes everything from which employers to target to how you word your resume. Start with the official overview on canada.ca and the Express Entry pages, then take regulated immigration advice if your situation is complex. This site does not provide immigration advice.",
    },
    {
      title: "Get an educational credential assessment if your occupation needs one",
      body: "If your immigration route or target occupation requires it, an educational credential assessment from an organisation designated by Immigration, Refugees and Citizenship Canada confirms how your international education compares to a Canadian credential. Start the process early, since it can take time.",
    },
    {
      title: "Check whether your profession is regulated",
      body: "Nursing, engineering, many skilled trades, accounting and a range of other professions are regulated at the provincial or national level in Canada. Nurses generally go through the National Nursing Assessment Service, engineers through their provincial regulator, and tradespeople can check the Red Seal program for interprovincial recognition. Confirm the requirements for your specific occupation and province before you commit to an application timeline.",
    },
    {
      title: "Rebuild the resume and LinkedIn together",
      body: "Convert your resume to Canadian format and match your LinkedIn profile to it: same titles, same dates, Canadian spelling. Keep your LinkedIn location real and state your Canada plans in the headline or About section.",
    },
    {
      title: "Use Job Bank, Indeed and recruiters deliberately",
      body: "Job Bank, the Government of Canada's own employment service, lists postings and labour market information by occupation and region. Combine it with Indeed and sector-specific recruiters, and be upfront with recruiters about your work-authorisation position and timeline.",
    },
    {
      title: "Prepare for remote interviews and Canadian time zones",
      body: "Early interviews are usually by video. Confirm times in the employer's local time zone, Canada spans six time zones, and have your documents ready, since Canadian employers generally confirm work authorisation before or at the point of hire.",
    },
  ],
  keySectors: [
    "Technology, software and data",
    "Healthcare, nursing and social services",
    "Skilled trades and construction",
    "Engineering",
    "Finance and accounting",
    "Logistics, supply chain and manufacturing",
  ],
  visaContext:
    "Working in Canada as a non-citizen generally requires either permanent residence or a work permit tied to a specific job or program. Express Entry manages several federal economic immigration programs for skilled workers, and Provincial Nominee Programs let individual provinces and territories nominate candidates for permanent residence based on local labour needs; Quebec runs its own separate selection process. Employer-specific and open work permits are a separate, more immediate route into the workforce for some applicants. Eligible occupations, point requirements and processing details change, so rely on canada.ca or a licensed Canadian immigration consultant or lawyer, not on a resume writer. This is orientation only, not immigration advice.",
  commonMistakes: [
    "Sending a three or four page resume into a two-page market",
    "Keeping the photo and personal-details block from a home-market CV",
    "Leaving work authorisation vague, so the employer assumes the least favourable case",
    "Never naming an educational credential assessment or professional registration already under way",
    "Writing experience as duties instead of outcomes with scope",
    "Using UK or US spelling instead of Canadian spelling",
    "Setting a false Canadian location on LinkedIn, which unravels on the first call",
  ],
  faqs: [
    {
      q: "Can I apply for Canadian jobs from outside Canada?",
      a: "Yes, you can apply for Canadian jobs from abroad, and many employers interview overseas candidates by video. What ultimately matters is whether you have, or can get, permission to work. Make sure your resume follows Canadian conventions so the application is judged on your experience, and check your immigration options on canada.ca before you commit to a plan.",
    },
    {
      q: "Should I say I need a work permit on my resume?",
      a: "Usually not directly on the resume itself. If you already hold Canadian citizenship, permanent residence or a valid work permit, state it clearly near the top. If you will need sponsorship or a new permit, keep the resume focused on your evidence and address your situation briefly in the cover letter, since many application forms ask about it directly anyway.",
    },
    {
      q: "How do I know if my profession is regulated in Canada?",
      a: "Check the Canadian Information Centre for International Credentials, which maps regulated occupations by province, or search directly for your profession's regulator, for example a provincial engineering association, a nursing college, or CPA Canada for accounting. Regulated occupations generally require registration or licensing before you can practise, separate from any immigration process.",
    },
    {
      q: "Do Canadian employers accept overseas degrees?",
      a: "Many Canadian employers accept overseas degrees on their own, particularly in fields without formal licensing, but some want an educational credential assessment to understand how your qualification compares. An assessment from an organisation designated by Immigration, Refugees and Citizenship Canada is the standard way to get one, and it is often required for immigration purposes regardless of what an individual employer asks for.",
    },
    {
      q: "Is a Canadian resume different from a CV in other markets?",
      a: "Yes. In Canada the document is usually called a resume and follows Canadian conventions: typically two pages, a professional summary, Canadian spelling, and no photo or personal-details block. Longer CV formats common in South Asia, the Gulf or parts of Europe, with personal details, exam results or lengthy project lists, read as unfamiliar with the Canadian market.",
    },
    {
      q: "Do I need a Canadian address or phone number to apply?",
      a: "No, you do not need a Canadian address or phone number to apply from abroad. Give your real city and country and a phone number with the international code, plus a professional email and LinkedIn URL. Add a line about your relocation timing so employers know when you could realistically start.",
    },
  ],
  sources: [
    { label: "IRCC: Work in Canada", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html" },
    { label: "IRCC: Express Entry", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" },
    { label: "IRCC: Provincial Nominee Program", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" },
    {
      label: "IRCC: Educational credential assessment",
      url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html",
    },
    { label: "Job Bank (Government of Canada)", url: "https://www.jobbank.gc.ca/home" },
    { label: "Canadian Information Centre for International Credentials (CICIC)", url: "https://www.cicic.ca/" },
    { label: "Gouvernement du Québec: Immigration", url: "https://www.quebec.ca/en/immigration" },
  ],
};

/* ------------------------------------------------------------------ */
/* /canada/international-job-seekers/from-{origin}                    */
/* ------------------------------------------------------------------ */

const origins: OriginCorridor[] = [
  {
    country: "canada",
    origin: "sri-lanka",
    originName: "Sri Lanka",
    metaTitle: "Canadian Resume for Sri Lankans: From Sri Lanka",
    metaDescription:
      "How to turn a Sri Lankan CV into a Canadian resume: remove NIC and personal details, reframe CIMA, ACCA and nursing credentials, and plan Express Entry.",
    h1: "Applying for Canadian Jobs From Sri Lanka",
    lead:
      "Sri Lankan CVs are built for a market that expects a photo, a personal-details block and two non-related referees. Canadian employers expect almost none of that, and the conversion is mostly about what to remove and what to reframe.",
    quickAnswer:
      "To apply for Canadian jobs from Sri Lanka, rewrite your CV into a two-page Canadian resume: remove the photo, NIC number, date of birth, religion, marital status and referees, cut O/L and A/L results once you have experience, and replace the objective with a short professional summary. Present CIMA, ACCA, CA Sri Lanka or nursing credentials clearly, and check immigration routes on canada.ca.",
    overview:
      "Sri Lanka sends strong candidates to Canada, particularly in technology, accounting, healthcare and engineering, and many already hold internationally portable qualifications through CIMA, ACCA or degrees delivered by partner arrangements with foreign universities. The obstacle is rarely capability. It is a CV format shaped by Sri Lankan norms, a personal-details section, subject-by-subject exam results, a declaration, and two referees with full contact details, combined with the general Canadian-experience preference that greets every newcomer regardless of origin. The fix is mostly structural: strip the format, reframe the credentials, and address the experience question directly.",
    whatToChange: [
      {
        from: "Photo in the top corner and a personal-details block with NIC number, date of birth, gender, religion, nationality and marital status",
        to: "Name, city and country, phone with +94, email and LinkedIn only. No ID numbers, which are also unnecessary on a document that may be shared between recruiters and systems",
      },
      {
        from: "G.C.E. O/L and A/L results listed subject by subject with grades",
        to: "Remove them once you have a degree and a few years of experience. Recent graduates can keep one summary line of A/L stream and results",
      },
      {
        from: "Two non-related referees with names, designations, phone numbers and addresses",
        to: "No referees on the resume. Canadian employers request them later, usually after an interview",
      },
      {
        from: "An objective about seeking a challenging position in a reputed organisation",
        to: "A three to five line professional summary stating your level, evidence and target Canadian role",
      },
      {
        from: "A closing declaration that the information is true, with date and signature",
        to: "Remove it. Canadian resumes do not carry declarations or signatures",
      },
      {
        from: "Duties copied from a job description, often across three or four pages",
        to: "Two pages, achievements with scope and outcomes, and one line of context about each Sri Lankan employer",
      },
      {
        from: "Language skills listed as Sinhala, Tamil and English with proficiency levels",
        to: "Keep languages in a short additional-information line; note French only if you genuinely have it, since it carries real weight in parts of Canada",
      },
      {
        from: "Job titles like ‘Senior Executive’ or ‘Associate’ used without explanation",
        to: "Keep the real title and add scope, team size, reporting line, so a Canadian reader can place the level",
      },
    ],
    qualificationsNote:
      "Many Sri Lankan professionals hold qualifications that travel reasonably well internationally. CIMA and ACCA are recognised in Canada, and CPA Canada has its own pathways and agreements for internationally designated accountants, so state your CIMA or ACCA status exactly, student, affiliate, member, fellow, with the year, and check CPA Canada's own guidance directly if you plan to pursue Canadian CPA recognition. CA Sri Lanka membership should be written in full, as The Institute of Chartered Accountants of Sri Lanka, since it is less immediately recognisable to a Canadian reader. For a degree from a Sri Lankan university, or one delivered locally through a foreign university's partner programme, name the awarding institution clearly and, where your target role or immigration route requires it, obtain an educational credential assessment from an organisation designated by Immigration, Refugees and Citizenship Canada. Nurses need to go through the National Nursing Assessment Service before registering with a provincial nursing regulator, and engineers should check the requirements of the relevant provincial engineering regulator; Sri Lanka's engineering degree accreditation through IESL sits within the Washington Accord, which can support recognition but does not replace the provincial licensing process.",
    sectorsWhereCandidatesCompete: [
      "Accounting and finance, especially management accounting with CIMA",
      "Software engineering, QA and data, often with experience delivering for North American or European clients",
      "Nursing and healthcare support",
      "Civil and structural engineering",
      "Hospitality and specialist culinary roles",
      "Business analysis and IT project management",
    ],
    practicalSteps: [
      {
        title: "Strip the Sri Lankan format first",
        body: "Before you touch the wording, remove the photo, personal-details block, school results, referees and declaration. You will usually recover close to a page, which is the space you need for evidence.",
      },
      {
        title: "Explain employers a Canadian reader will not know",
        body: "A reader in Calgary or Toronto does not know a Colombo conglomerate, a regional bank or a local software house by name. Add one line under each: sector, size, and whether it serves North American, European or global clients, which is often the case for Sri Lankan IT and BPO firms.",
      },
      {
        title: "Lead with credentials Canada already recognises",
        body: "If you are CIMA or ACCA qualified, make that visible in your professional summary. It answers part of the recognition question before the reader has to ask it, and buys attention for the rest of your resume.",
      },
      {
        title: "Start regulated-profession steps early",
        body: "Nurses should read the National Nursing Assessment Service's process before applying, since registration steps take real time. Engineers should confirm the specific provincial regulator's requirements for their discipline rather than assuming Washington Accord accreditation alone is sufficient.",
      },
      {
        title: "Get an educational credential assessment if you need one",
        body: "If your immigration route or target employer requires it, apply early with an organisation designated by Immigration, Refugees and Citizenship Canada. It can take longer than expected, and several application steps depend on having it in hand.",
      },
      {
        title: "Work with the time difference",
        body: "Sri Lanka is roughly nine and a half to twelve and a half hours ahead of Canada, depending on the Canadian time zone and season. Offer interview times in the employer's local time zone, and be explicit about which time zone you mean when you propose a slot.",
      },
    ],
    commonMistakes: [
      "Keeping the NIC number and personal-details block on a resume that circulates between recruiters and systems",
      "Listing O/L results years into a professional career",
      "Including two non-related referees with full contact details on the resume",
      "Writing CIMA or ACCA status loosely, such as ‘CIMA qualified’ when only some levels are complete",
      "Assuming a Canadian reader knows Sri Lankan employers, universities or grading without explanation",
      "Treating Washington Accord accreditation as equivalent to provincial engineering licensure",
    ],
    visaContext:
      "Sri Lankan nationals generally need permanent residence or a work permit to work in Canada. Express Entry manages several federal economic immigration programs that skilled workers commonly use, and individual Provincial Nominee Programs may fit specific occupations or provinces better. Regulated professions such as nursing and engineering have their own registration steps on top of any immigration process. Check your own situation on canada.ca, and use a licensed Canadian immigration consultant or lawyer for anything complex. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I include my NIC number on a resume for Canadian jobs?",
        a: "No, never include your NIC number on a Canadian resume. Canadian employers do not use it, and it adds an unnecessary identifier to a document that may pass through several recruiters and systems. Identity documents are checked separately, later in the hiring or immigration process, through the employer's or government's own channels.",
      },
      {
        q: "Are CIMA and ACCA recognised in Canada?",
        a: "CIMA and ACCA are recognised professional bodies internationally, and Canadian employers are generally familiar with both, though neither automatically converts into Canadian CPA status. State your exact standing, such as passed finalist, member or fellow, with the year, and check CPA Canada's own pathways directly if Canadian CPA designation is your goal.",
      },
      {
        q: "Should I list my O/L and A/L results on a resume for Canada?",
        a: "Only if you are a recent graduate, and then as a single summary line rather than subject by subject. Once you have a degree and professional experience, remove them entirely. Canadian employers read school results only for early-career applicants, and Sri Lankan exam grading is unfamiliar to most Canadian recruiters, so the space is better spent on evidence.",
      },
      {
        q: "Can Sri Lankan nurses work in Canada?",
        a: "Yes, in principle, once they complete the National Nursing Assessment Service's credentialing process and meet the specific requirements of the provincial nursing regulator where they intend to work, alongside the relevant immigration or work permit route. Registration steps take time, so most applicants start the NNAS process well before they expect to move.",
      },
      {
        q: "How do I present a foreign-university degree I studied for in Sri Lanka?",
        a: "Name the awarding institution and the delivery arrangement clearly, for example a foreign university's degree delivered through a partner institute in Colombo, along with your classification or grade as awarded. If your target role or immigration route calls for it, support this with an educational credential assessment from an IRCC-designated organisation rather than converting the grade yourself.",
      },
    ],
    sources: [
      {
        label: "IRCC: Educational credential assessment",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html",
      },
      { label: "National Nursing Assessment Service", url: "https://www.nnas.ca/" },
      { label: "Engineers Canada: For internationally trained engineers", url: "https://engineerscanada.ca/become-an-engineer/for-internationally-trained-engineers" },
      { label: "IRCC: Express Entry", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry.html" },
    ],
  },
  {
    country: "canada",
    origin: "india",
    originName: "India",
    metaTitle: "Canadian Resume for Indian Professionals: From India",
    metaDescription:
      "How to convert an Indian CV for Canadian employers: drop CTC, declaration and father's name, restructure project-style IT resumes, and plan Express Entry.",
    h1: "Applying for Canadian Jobs From India",
    lead:
      "Indian CVs are written for Indian job portals and IT services recruiters: CTC and notice period up top, projects listed client by client, a personal profile with father's name, and a signed declaration. A Canadian reader wants a different document.",
    quickAnswer:
      "To apply for Canadian jobs from India, rebuild your resume to Canadian conventions: remove CTC, expected salary, father's name, date of birth, photo and the declaration; turn project-by-project IT listings into role-based achievements; state your degree and CGPA as awarded; and cut to two pages. Present ICAI, CPA-recognised, NNAS or engineering-regulator status accurately, and check Express Entry, Provincial Nominee Programs and permit routes on canada.ca.",
    overview:
      "Indian professionals compete strongly for Canadian roles, particularly in technology, engineering, finance and healthcare, and many already have exposure to North American clients through global delivery and outsourcing work. The challenge is that Indian CV habits come from a different hiring system: portal keyword stuffing, CTC-based negotiation, long notice periods, and IT services resumes organised project by project rather than by employer. Canadian readers find those CVs long, repetitive and hard to scan for individual contribution. The conversion is about reorganising around what you personally did, removing details that belong to the Indian hiring process, and being deliberate about how credentials and immigration status are presented.",
    whatToChange: [
      {
        from: "‘Current CTC’, ‘Expected CTC’ in lakhs and ‘Notice period’ near the top of the resume",
        to: "Remove salary figures entirely. Mention notice period, if useful, in the cover letter or an application form rather than the resume itself",
      },
      {
        from: "A personal profile with father's name, date of birth, gender, marital status, nationality and languages known",
        to: "Name, city and country, phone with +91, email and LinkedIn only. Languages go in a short additional-information line",
      },
      {
        from: "IT services format: Project 1, Project 2, each with client, duration, team size, environment and ‘roles and responsibilities’",
        to: "Organise by employer and role. Summarise the technology stack once, and write achievements that show what you personally built, improved or led across projects",
      },
      {
        from: "Class 10 and Class 12 board percentages alongside the degree",
        to: "Remove school results once you have a degree and experience. State the degree with institution and CGPA or class as awarded",
      },
      {
        from: "A career objective and a long list of personal strengths",
        to: "A three to five line professional summary with your level, specialism, evidence and target Canadian role",
      },
      {
        from: "‘I hereby declare that the above information is true to the best of my knowledge’, with place, date and signature",
        to: "Remove it. Canadian resumes have no declaration, place, date or signature",
      },
      {
        from: "A skills block listing every tool ever touched, written for job-portal keyword searches",
        to: "A grouped list of the skills relevant to the Canadian role, each important one demonstrated somewhere in your experience",
      },
      {
        from: "Indian titles and levels such as ‘Associate Consultant’, ‘Technical Lead’ or ‘Senior Executive’ used without context",
        to: "Keep the real title, and add scope so a Canadian reader understands the level: team size, reporting line, responsibilities",
      },
    ],
    qualificationsNote:
      "Indian degrees are broadly familiar to Canadian employers, particularly in technology, but grading and institution names still need clarity. State the degree as awarded, such as B.Tech or BE, with the institution and CGPA out of 10 or the class awarded, rather than converting it yourself. Where your target occupation or immigration route needs it, get an educational credential assessment from an organisation designated by Immigration, Refugees and Citizenship Canada. Indian engineering degrees accredited by the National Board of Accreditation sit within the Washington Accord, which can support recognition, but provincial licensing through the relevant engineering regulator is still a separate step. Chartered accountants under ICAI should state their membership in full and check CPA Canada's current pathways and any mutual recognition arrangement directly with CPA Canada, since routes and requirements change. Nurses need to go through the National Nursing Assessment Service ahead of provincial registration, and doctors face a longer, regulator-specific licensing process that is well worth researching before committing to a Canadian job search in medicine specifically.",
    sectorsWhereCandidatesCompete: [
      "Software engineering, cloud, data and cybersecurity",
      "IT consulting and business analysis, often with North American client exposure",
      "Nursing and allied health",
      "Finance, audit and accounting",
      "Engineering and infrastructure",
      "Supply chain and manufacturing",
    ],
    practicalSteps: [
      {
        title: "Reorganise around roles, not projects",
        body: "If you have spent years on client projects at an IT services firm, group them under your employer and title, then pick the four to six outcomes that show the most responsibility. A Canadian reader wants your trajectory, not every engagement.",
      },
      {
        title: "Make North American client experience visible",
        body: "If you worked for North American or European clients, onsite or offshore, say so in the relevant role with the sector and your scope. It shows familiarity with those ways of working without naming confidential clients.",
      },
      {
        title: "Remove the Indian process details",
        body: "CTC, expected salary, notice period, father's name, declaration and signature all belong to Indian hiring processes. Removing them usually saves close to a page and reads as Canadian-market fluent.",
      },
      {
        title: "Start the credential and registration process early",
        body: "Educational credential assessments, NNAS registration for nurses, and provincial engineering licensing all take real time. Start whichever applies to you as soon as you are seriously considering a Canadian move, not after you have an offer.",
      },
      {
        title: "Check the right immigration route deliberately",
        body: "Read the Express Entry and Provincial Nominee Program pages on canada.ca before you apply for roles. Which route fits depends on your occupation, age, language scores and other factors, so treat this as its own research task rather than an afterthought.",
      },
      {
        title: "Schedule for Canadian time zones",
        body: "India is roughly nine and a half to thirteen and a half hours ahead of Canada, depending on the Canadian time zone and season. Offer interview windows in the employer's local time and be explicit about the time zone in your proposal.",
      },
    ],
    commonMistakes: [
      "Leaving CTC and expected CTC on the resume, which Canadian employers do not expect and which anchors negotiation badly",
      "Keeping the project-by-project IT services layout that runs to four or five pages",
      "Listing Class 10 and 12 percentages years into a career",
      "Including father's name, date of birth and a signed declaration",
      "Converting CGPA into a guessed Canadian-sounding equivalent instead of stating it as awarded",
      "Treating Washington Accord accreditation as the same thing as provincial engineering licensure",
    ],
    visaContext:
      "Indian nationals generally need permanent residence or a work permit to work in Canada. Express Entry manages several federal economic immigration programs commonly used by skilled workers, and Provincial Nominee Programs can fit specific occupations or regions better depending on your profile. Regulated professions add their own registration steps on top of any immigration process. Criteria and processing times change, so check canada.ca directly and use a licensed Canadian immigration consultant or lawyer for anything complex. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I mention my CTC on a resume for Canadian jobs?",
        a: "No, do not put your current or expected CTC on a Canadian resume. Canadian employers do not expect salary on the resume, and figures in lakhs mean little without conversion and context. Salary comes up later, in the application form or conversation, usually against a Canadian range for the role. Use the space for evidence of your impact instead.",
      },
      {
        q: "How do I convert an Indian IT resume into a Canadian one?",
        a: "Reorganise it by employer and role rather than by client project, summarise the technology stack once, and write four to six achievements per recent role that show what you personally built, improved or led. Remove CTC, notice period, the personal-profile block and declaration, then cut to two pages. A Canadian reader wants your trajectory, not every engagement.",
      },
      {
        q: "Should I convert my CGPA to a Canadian grading system?",
        a: "No, state your CGPA as awarded, for example ‘CGPA 8.4 out of 10’, with the degree and institution. Converting it yourself can look like an overclaim. If an employer or immigration process needs a formal comparison, an educational credential assessment from an organisation designated by Immigration, Refugees and Citizenship Canada is the recognised way to get one.",
      },
      {
        q: "Which Canadian immigration route fits an Indian tech professional best?",
        a: "It depends on your occupation, age, language test scores and other personal factors, so there is no single answer. Express Entry covers several federal programs many skilled tech workers use, and some provinces run their own nominee streams targeting specific occupations. Review the official criteria on canada.ca or speak with a licensed immigration consultant before assuming one route fits.",
      },
    ],
    sources: [
      {
        label: "IRCC: Educational credential assessment",
        url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/education-assessment.html",
      },
      { label: "National Nursing Assessment Service", url: "https://www.nnas.ca/" },
      { label: "Engineers Canada: For internationally trained engineers", url: "https://engineerscanada.ca/become-an-engineer/for-internationally-trained-engineers" },
      { label: "IRCC: Provincial Nominee Program", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/provincial-nominees.html" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /canada/career-advice : hub intro                                  */
/* ------------------------------------------------------------------ */

const adviceHubIntro =
  "Canadian hiring has its own habits. The resume is two pages with no photo or personal details, the tone is direct rather than either understated or self-promotional, and a quiet preference for Canadian work experience sits under most newcomer applications whether or not an employer says so. These guides cover what is specific to Canada: the standard resume format, how to frame international experience against the Canadian-experience question, and what actually matters when applying through the systems Canadian employers use. For universal advice on length, structure and writing achievements, the global career advice library goes deeper. If you are applying from abroad, start with the international job seekers guide.";

export const canadaBundle: CountryBundleFull = {
  country: "canada",
  market,
  adviceHubIntro,
  services,
  articles,
  ijsHub,
  origins,
};
