/**
 * UK COUNTRY BUNDLE
 * ------------------------------------------------------------------
 * Powers the whole UK mini-site: the /uk hub, the three localised
 * service pages, three UK-specific articles, the international job
 * seekers hub and the Sri Lanka and India origin corridors.
 *
 * British English and "CV" throughout. Prices in USD only.
 * Visa content is orientation only and always points to GOV.UK.
 * No testimonials, no invented statistics.
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
/* /uk : country hub                                                   */
/* ------------------------------------------------------------------ */

const market: CountryMarket = {
  slug: "uk",
  name: "United Kingdom",
  adjective: "UK",
  flag: "🇬🇧",
  code: "GB",
  locale: "en-GB",
  quickAnswer:
    "A UK CV is a two-page, reverse-chronological document in British English that opens with a short personal profile and leaves out the photo, date of birth and marital status. Chanuka Jeewantha writes UK CVs, LinkedIn profiles and cover letters personally, for professionals already in Britain and those applying from abroad, with prices from $129 USD.",
  metaTitle: "UK CV, LinkedIn and Cover Letter Writing Services",
  metaDescription:
    "CVs, LinkedIn profiles and cover letters written for UK employers and agencies: two pages, British English, no photo, clear right to work. Priced in USD.",
  heroHeading: "CV, LinkedIn and Cover Letter Writing for the UK Job Market",
  heroLead:
    "A UK CV has a quiet, familiar shape: two pages, most recent role first, a short profile at the top and no personal biodata. Get the shape right and the reader spends their attention on your evidence instead of your formatting.",
  docType: "CV",
  standardLength: "Two pages for most professionals. One page can work early in a career.",
  photoRule:
    "Leave it off. No law bans a photo, but UK convention is a CV without one, and employers prefer not to see details linked to protected characteristics.",
  spellingStyle: "British English",
  overview:
    "UK hiring is split between employers who recruit directly and recruitment agencies who shortlist on their behalf, so your CV is often read first by a consultant matching it against a client brief. Both readers expect the same thing: a concise, evidence-led document in a layout they have seen a thousand times. The UK register is understated. Claims backed by scope and outcomes land; adjectives do not. For applicants from overseas, the question underneath every read is right to work, and a CV that answers it plainly removes the most common silent objection.",
  marketRules: [
    {
      label: "Length",
      value:
        "Two pages is the working norm for experienced candidates. One page suits graduates and early-career applicants. Academic and medical CVs follow their own, longer conventions.",
      importance: "critical",
    },
    {
      label: "Photo and personal details",
      value:
        "A convention, not a legal ban: leave out the photo, date of birth, marital status, nationality and religion. The Equality Act 2010 makes employers careful about information linked to protected characteristics, so a CV that volunteers it looks unfamiliar with UK norms.",
      importance: "critical",
    },
    {
      label: "Personal profile",
      value:
        "Open with three to five lines that say who you are professionally, what you have delivered and what role you want next. No objective statement, no list of personality adjectives.",
      importance: "recommended",
    },
    {
      label: "Tone",
      value:
        "Understated and specific. Scope, numbers and outcomes persuade a British reader; phrases like ‘visionary leader’ tend to read as overselling.",
      importance: "recommended",
    },
    {
      label: "British English and dates",
      value:
        "Use British spelling (organised, programme, analysed, licence as a noun) and Month Year dates such as ‘March 2022 to present’. US spelling on a UK CV is noticed.",
      importance: "critical",
    },
    {
      label: "Right to work",
      value:
        "If you already hold the right to work in the UK, say so in one line near the top. If you will need sponsorship, do not disguise it; let the cover letter frame it for employers who sponsor.",
      importance: "critical",
    },
    {
      label: "File and layout",
      value:
        "A4, a single clean column, standard headings and a Word or text-based PDF file. Agency and employer systems parse simple layouts far more reliably than designed templates.",
      importance: "recommended",
    },
  ],
  whatRecruitersLookFor: [
    "Commercial or operational impact stated plainly: budgets, revenue, savings, volumes, timelines",
    "The exact tools, systems and methods you use, named rather than implied",
    "Scope of responsibility: team size, stakeholders, suppliers, geography",
    "A readable career line, with gaps and short roles explained briefly rather than hidden",
    "UK-relevant frameworks and bodies where they apply, such as UK GDPR, FCA regulation, NMC registration, CIMA, ACCA or ICAEW membership",
    "A clear right-to-work position for anyone whose history is mostly outside the UK",
  ],
  inDemandSectors: [
    "Technology and software engineering",
    "Financial services, fintech and insurance",
    "Healthcare, the NHS and adult social care",
    "Accounting and professional services",
    "Engineering, construction and infrastructure",
    "Public sector and civil service",
  ],
  keyRoles: [
    "Software Engineer",
    "Data Analyst",
    "Accountant",
    "Project Manager",
    "Nurse",
    "HR Business Partner",
  ],
  faqs: [
    {
      q: "How long should a CV be in the UK?",
      a: "Two pages is the standard for most experienced professionals in the UK. Graduates and people with under two years of experience are usually better served by one tight page. Going beyond two pages is normal only for academic, research and medical CVs, which follow their own conventions. A three-page corporate CV tends to read as a failure to prioritise.",
    },
    {
      q: "Should I put a photo on my CV in the UK?",
      a: "No, a UK CV normally has no photo. There is no law against including one, but employers try to avoid information linked to protected characteristics under the Equality Act 2010, and recruiters see photos as an overseas habit. The exception is acting, presenting and modelling work, where a headshot is expected. Put your photo on LinkedIn instead.",
    },
    {
      q: "Can you help if I am applying for UK jobs from abroad?",
      a: "Yes. A large part of this work is converting CVs from Sri Lanka, India, the Gulf and elsewhere into UK conventions: cutting length, removing biodata, translating job titles and qualifications into terms a UK reader recognises, and stating your right-to-work position honestly. Visa questions themselves belong with GOV.UK or a regulated adviser; the documents are what Chanuka writes.",
    },
    {
      q: "How much does a UK CV cost and what currency do you charge in?",
      a: "UK CV writing costs $129, $189 or $279 USD depending on experience: under two years, three to nine years, or ten years and executive. All payments are taken in USD, and your card provider converts at its own rate. Combining any two services saves 20 percent, and all three save 30 percent.",
    },
    {
      q: "Do I need references on a UK CV?",
      a: "No, references do not belong on a modern UK CV, and the line ‘References available on request’ is no longer needed because employers assume it. UK employers usually request referees after an offer or late in the process. Keep two referees ready, tell them to expect contact, and use the space for evidence instead.",
    },
    {
      q: "How does the process work if I am not in the UK?",
      a: "The whole process runs by email, so where you live does not matter. You choose a package and pay, complete a written brief and upload your current CV, and Chanuka writes the document personally. You receive a draft, have one revision round, and get final files in editable Word and PDF, usually within 5 to 7 days.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /uk/{service} : localised commercial pages                          */
/* ------------------------------------------------------------------ */

const services: CountryService[] = [
  {
    country: "uk",
    service: "cv-writing",
    primaryKeyword: "CV writing service UK",
    secondaryKeywords: [
      "professional CV writer UK",
      "UK CV writing service for international applicants",
      "executive CV writing UK",
      "CV writer for NHS and public sector roles",
      "British CV format help",
    ],
    metaTitle: "CV Writing Service UK: Two-Page CVs for UK Roles",
    metaDescription:
      "UK CV writing by one expert, not a team: British English, a sharp personal profile and a two-page layout that agencies and ATS read cleanly. From $129 USD.",
    eyebrow: "UK CV writing",
    h1: "CV Writing Service for UK Jobs",
    lead:
      "A UK CV written personally by Chanuka Jeewantha: two pages, British English, a profile that says something, and experience written as evidence rather than duties.",
    quickAnswer:
      "This UK CV writing service rewrites your CV to British conventions: two pages, reverse chronological, a three to five line personal profile, achievement-led bullets and no photo or personal biodata. Every CV is written personally by Chanuka Jeewantha, delivered in Word and PDF within 5 to 7 days as standard, from $129 USD.",
    keyFacts: [
      { label: "Length", value: "Two pages for most professionals, one for early career" },
      { label: "Opening", value: "A personal profile of three to five lines" },
      { label: "Personal details", value: "Name, town or city, phone, email, LinkedIn" },
      { label: "Spelling", value: "British English throughout" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
      { label: "Standard delivery", value: "5 to 7 days, faster options available" },
    ],
    whyDifferent: {
      heading: "Why a UK CV is not a resume with different spelling",
      paragraphs: [
        "UK hiring runs through two readers. A recruitment consultant often sees your CV first, scanning it against a client brief, and the hiring manager reads it second, looking for proof you can do the job. Both expect a familiar shape. A CV that looks like a US resume, a Gulf CV with a photo, or a four-page South Asian CV with a declaration at the end gets read as a CV from someone who has not researched the market.",
        "The tone matters as much as the layout. British readers discount self-praise and respond to scope and outcomes stated plainly. ‘Led the migration of 40 branch systems to a single platform, finished two weeks early’ does more than ‘dynamic, results-driven leader’. The writing is calibrated to that register.",
        "Public sector employers add another layer. NHS trusts, the civil service, councils, universities and many charities assess applications against a person specification or a set of behaviours, and the CV has to line up with that framework rather than sit beside it.",
      ],
    },
    whatYouGet: [
      "A two-page UK CV (one page for early career) written from scratch around your target role",
      "A personal profile that states your level, specialism and direction in plain British English",
      "Experience rewritten as achievements, with scope and outcomes where you can evidence them",
      "Overseas job titles, employers and qualifications explained in terms a UK reader recognises",
      "A one-line right-to-work statement where it helps, worded accurately to your situation",
      "A clean single-column layout that recruitment agency systems and employer ATS parse reliably",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Section order", value: "Contact details, profile, key skills, experience, education, then memberships or training" },
      { label: "Dates", value: "Month and year for every role, most recent first" },
      { label: "Degree results", value: "UK degrees show the classification (First, 2:1, 2:2); overseas results are stated as awarded" },
      { label: "Leave out", value: "Photo, date of birth, marital status, nationality, religion, ID numbers, declaration line" },
      { label: "References", value: "Not listed; employers request them later in the process" },
      { label: "Paper size", value: "A4, not US Letter" },
    ],
    sectors: [
      "Technology and software engineering",
      "Financial services, banking and insurance",
      "Accounting and finance, including CIMA, ACCA and ICAEW members",
      "NHS, healthcare and adult social care",
      "Engineering, construction and infrastructure",
      "Public sector, civil service and higher education",
    ],
    process: [
      {
        title: "Choose your tier and pay in USD",
        body: "Pick the tier that matches your experience. Payment is in USD, so there is nothing to convert at checkout beyond your card provider's own rate.",
      },
      {
        title: "Complete the brief",
        body: "Upload your current CV and answer a written brief about your target UK roles, your results and whether you already hold the right to work. Links to two or three job adverts help.",
      },
      {
        title: "Chanuka writes your CV",
        body: "Your CV is written personally, never outsourced. Questions come by email, so time zones do not slow anything down.",
      },
      {
        title: "Review, revise and apply",
        body: "You receive the draft, request changes in one revision round, and get final Word and PDF files ready to send to agencies and employers.",
      },
    ],
    faqs: [
      {
        q: "What makes a CV writing service UK specific?",
        a: "A UK-specific CV service writes to British conventions rather than a generic international template: two pages, a short personal profile, British spelling, A4, no photo or biodata, and an understated, evidence-led tone. It also knows how UK agencies shortlist and how public sector applications assess candidates against a person specification, and it shapes the CV for both.",
      },
      {
        q: "Is a professional CV writer worth it for UK jobs?",
        a: "A professional CV writer is worth it when your CV is not getting shortlisted despite relevant experience, or when you are moving into the UK market from abroad and your document follows another country's conventions. It is less useful if your CV already gets interviews and the issue is later in the process, where interview preparation matters more.",
      },
      {
        q: "Can you write a CV for NHS or civil service jobs?",
        a: "Yes. The CV is written to line up with the person specification or the behaviours the role is assessed on, using the same evidence the application form will ask for. Many NHS and civil service applications also need a supporting statement or behaviour examples, which are separate documents; contact Chanuka first so their scope and word limits can be agreed.",
      },
      {
        q: "Will my CV work with UK recruitment agencies?",
        a: "Yes. Agency consultants search and shortlist quickly, so the CV uses standard headings, a single-column layout and the job titles and skills your target roles actually use. That makes it easy to parse in agency databases and easy for a consultant to pitch you to a client in a sentence or two.",
      },
      {
        q: "Should my UK CV mention my visa or right to work?",
        a: "Mention it when it helps you. If you already hold the right to work in the UK, one clear line near the top removes a common reason to pass over an overseas CV. If you will need sponsorship, keep the CV focused on evidence and address it in the cover letter. Chanuka words the line to your situation, not to legal specifics.",
      },
      {
        q: "How long does UK CV writing take?",
        a: "Standard delivery is 5 to 7 days from receiving your completed brief. Fast delivery in 2 to 3 days adds 20 percent, and ultra delivery within 24 hours adds 50 percent. After the draft, one revision round is included, and the final Word and PDF files follow once changes are agreed.",
      },
    ],
  },
  {
    country: "uk",
    service: "linkedin-optimisation",
    primaryKeyword: "LinkedIn profile writing service UK",
    secondaryKeywords: [
      "LinkedIn optimisation UK",
      "LinkedIn profile writer UK",
      "LinkedIn for UK recruiters",
      "LinkedIn profile for relocating to the UK",
    ],
    metaTitle: "LinkedIn Profile Writing Service UK",
    metaDescription:
      "LinkedIn profile writing for the UK market: a headline UK recruiters search for, an About section in British English and a clear location and work status.",
    eyebrow: "UK LinkedIn optimisation",
    h1: "LinkedIn Profile Writing for the UK Market",
    lead:
      "Your LinkedIn profile rewritten for how UK recruiters and agency consultants search: the right job titles, a clear location and work status, and an About section that sounds like a professional, not a sales page.",
    quickAnswer:
      "A UK LinkedIn profile writing service rewrites your headline, About section, experience and skills so UK recruiters find you under the job titles they search and trust what they read. Chanuka Jeewantha writes each profile personally in British English, handles location and right-to-work signalling, and delivers within 5 to 7 days from $129 USD.",
    keyFacts: [
      { label: "Headline", value: "Target job title and specialism first, not a slogan" },
      { label: "About section", value: "First person, British English, evidence over adjectives" },
      { label: "Location", value: "Your real location, with UK relocation stated where true" },
      { label: "Deliverable", value: "Ready-to-paste text for every section" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
    ],
    whyDifferent: {
      heading: "How UK recruiters use LinkedIn, and what that means for your profile",
      paragraphs: [
        "Recruitment consultants at UK agencies and in-house talent teams use LinkedIn search to build shortlists before a role is even advertised. They search by job title, skill and location. If your headline says ‘Passionate problem solver’ instead of ‘Management Accountant, CIMA’, you do not appear in the search that mattered.",
        "Location is the quiet filter for anyone outside the UK. Setting your location to London when you live in Colombo or Pune misleads recruiters and tends to unravel on the first call. The better approach is your real location plus a clear, honest line about relocation and work status in the headline or About section, so UK recruiters who can sponsor or who hire internationally still find you.",
        "British readers also respond to a quieter tone than US LinkedIn culture rewards. The profile is written to sound confident and specific without the exclamation marks.",
      ],
    },
    whatYouGet: [
      "A search-focused headline built on the UK job titles and skills recruiters actually type",
      "An About section in first person and British English, with specific evidence and a clear next step",
      "Experience entries rewritten from your CV, shorter and more conversational than the CV itself",
      "A curated skills list ordered so the most relevant skills show first",
      "Location and relocation or right-to-work wording that is accurate and searchable",
      "Guidance on Open to Work settings, custom URL and recommendations",
      "One revision round on all text",
    ],
    marketConventions: [
      { label: "Spelling", value: "British English: optimisation, organisation, programme" },
      { label: "Headline format", value: "Job title | specialism | sector or credential" },
      { label: "Photo", value: "Yes on LinkedIn, even though a UK CV has none" },
      { label: "Voice", value: "First person in the About section, never third person" },
      { label: "Credentials", value: "UK-recognised bodies and registrations named in full once, then abbreviated" },
      { label: "Consistency", value: "Titles and dates match the CV, because recruiters check both" },
    ],
    sectors: [
      "Technology, data and software engineering",
      "Financial services and fintech",
      "Accounting and finance",
      "Consulting and professional services",
      "Marketing, sales and business development",
      "Healthcare professionals relocating to the UK",
    ],
    process: [
      {
        title: "Choose your tier",
        body: "LinkedIn optimisation uses the same experience tiers as CV writing. Bundling it with a UK CV saves 20 percent.",
      },
      {
        title: "Share your profile and targets",
        body: "Send your LinkedIn URL, current CV and the UK roles you want to be found for, plus your location and work-status situation.",
      },
      {
        title: "Chanuka rewrites every section",
        body: "Headline, About, experience and skills are written personally, in British English, as ready-to-paste text.",
      },
      {
        title: "Revise and publish",
        body: "Review the draft, request changes in one revision round, then paste the final text into your profile.",
      },
    ],
    faqs: [
      {
        q: "Do UK recruiters really use LinkedIn to find candidates?",
        a: "Yes, LinkedIn is a routine sourcing tool for UK recruitment agencies and in-house talent teams, especially for professional, technology and finance roles. They search by title, skill and location to build shortlists, often before advertising. A profile that uses the wrong job titles or a vague headline simply does not appear in those searches, however strong the experience behind it.",
      },
      {
        q: "Should I change my LinkedIn location to the UK before I move?",
        a: "No, keep your real location and state your UK plans honestly instead. A false UK location usually surfaces on the first recruiter call and damages trust. Say in the headline or About section that you are relocating to a named city, and include your right-to-work position if it is settled, so recruiters who hire internationally can still find and contact you.",
      },
      {
        q: "Should my LinkedIn profile use British or American spelling?",
        a: "Use British spelling if the UK is your main target market. Recruiters notice ‘optimization’ and ‘program’ on a profile claiming UK experience or UK ambitions, and it creates a small mismatch with your UK CV. Keep job titles and product names exactly as they are officially written, even when they use American spelling.",
      },
      {
        q: "Is LinkedIn optimisation worth it if I already have a good CV?",
        a: "It is worth it when recruiters are not approaching you or when your profile and CV tell different stories. The CV only works when you send it; LinkedIn works while you are not looking, through search. If you are applying mainly to public sector roles through application forms, LinkedIn matters less, and a CV or supporting statement is the better spend.",
      },
      {
        q: "What does LinkedIn optimisation cost for the UK market?",
        a: "LinkedIn optimisation costs $129, $189 or $279 USD depending on experience level, matching the CV writing tiers. Adding it to a UK CV saves 20 percent on both, and taking CV, LinkedIn and cover letter together saves 30 percent. Payment is in USD and delivery is 5 to 7 days as standard.",
      },
    ],
  },
  {
    country: "uk",
    service: "cover-letter-writing",
    primaryKeyword: "cover letter writing service UK",
    secondaryKeywords: [
      "UK cover letter writer",
      "cover letter for UK jobs from abroad",
      "British cover letter format",
      "supporting statement help UK",
    ],
    metaTitle: "Cover Letter Writing Service UK",
    metaDescription:
      "UK cover letters written to British conventions: one page, the right salutation and sign-off, and a clear case for this role. Letters from $79 USD, by email.",
    eyebrow: "UK cover letter writing",
    h1: "Cover Letter Writing for UK Applications",
    lead:
      "A one-page UK cover letter that makes the case for one specific role in plain, confident British English, and handles questions like relocation and sponsorship before the reader has to ask.",
    quickAnswer:
      "A UK cover letter writing service produces a one-page letter, usually three or four short paragraphs, that links your strongest evidence to the requirements of one role, in British English with UK letter conventions. Chanuka Jeewantha writes each letter personally, including how to frame relocation or sponsorship, with prices from $79 USD and standard delivery in 5 to 7 days.",
    keyFacts: [
      { label: "Length", value: "One page, three to four short paragraphs" },
      { label: "Salutation", value: "A named person where possible" },
      { label: "Sign-off", value: "‘Yours sincerely’ to a name, ‘Yours faithfully’ to Sir or Madam" },
      { label: "Price", value: "$79, $119 or $159 USD by experience" },
      { label: "Bundle", value: "Save 20 percent with a UK CV" },
    ],
    whyDifferent: {
      heading: "What a UK cover letter has to do that a generic one does not",
      paragraphs: [
        "British cover letters are short, specific and polite in a particular way. They name the role, show in two or three pieces of evidence why you fit it, and close without pressure. American-style letters that open with a bold hook, and South Asian letters that open with ‘I am writing to apply for the post of’ and close with a list of personal qualities, both read as out of place.",
        "UK convention still carries small signals that careful readers notice: ‘Dear Ms Perera’ with ‘Yours sincerely’, ‘Dear Sir or Madam’ with ‘Yours faithfully’, British spelling, and a date written day, month, year. Getting them right costs nothing. Getting them wrong suggests the letter was not written for the UK.",
        "For overseas applicants the letter is also the right place to handle what the CV should not: why you are moving, when you can start, and your work-status position, stated factually and briefly so it reads as a plan rather than a problem.",
      ],
    },
    whatYouGet: [
      "A one-page letter written for a specific UK role and employer",
      "An opening that names the role and gives the reader a reason to keep going",
      "Two or three paragraphs linking your evidence to the advert or person specification",
      "Relocation, notice period and work-status wording framed factually where relevant",
      "Correct UK salutation, sign-off and date conventions",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Opening", value: "Name the role and where you saw it in the first sentence or two" },
      { label: "Evidence", value: "Two or three specific examples matched to the role's main requirements" },
      { label: "Tone", value: "Confident, understated, no superlatives" },
      { label: "Date format", value: "Day Month Year, for example 27 September 2026" },
      { label: "Public sector", value: "Many roles ask for a supporting statement against a person specification instead of a letter" },
      { label: "Agencies", value: "Often not required when applying through a recruiter; a short email note usually does the job" },
    ],
    sectors: [
      "Corporate and financial services roles applied for directly",
      "Graduate schemes and early-career roles",
      "Charities and not-for-profit organisations",
      "Healthcare and NHS roles alongside a supporting statement",
      "Education and higher education",
      "Overseas applicants explaining relocation and availability",
    ],
    process: [
      {
        title: "Choose your tier and share the role",
        body: "Pick your experience tier and send the job advert or person specification with your current CV.",
      },
      {
        title: "Answer a short brief",
        body: "Tell Chanuka why this role and employer, your notice period, and your relocation or work-status position if you are outside the UK.",
      },
      {
        title: "Receive, revise, send",
        body: "You get a draft letter, one revision round and final Word and PDF files, ready to adapt for similar roles.",
      },
    ],
    faqs: [
      {
        q: "Do UK employers still read cover letters?",
        a: "Many do, especially for direct applications, graduate schemes, charities and roles where the advert asks for one. Recruitment agencies often do not need a formal letter, and many public sector roles replace it with a supporting statement. When a letter is requested, a generic one hurts you, so write it for the role or skip optional ones.",
      },
      {
        q: "How long should a cover letter be in the UK?",
        a: "A UK cover letter should fit on one page, usually three or four short paragraphs and somewhere around 250 to 400 words. The reader wants the role, your fit and your availability, not a second CV. If the employer sets a word limit, especially in an online application form, write to that limit instead.",
      },
      {
        q: "Should I use Yours sincerely or Yours faithfully?",
        a: "Use ‘Yours sincerely’ when you address a named person, such as ‘Dear Mr Khan’, and ‘Yours faithfully’ when you write ‘Dear Sir or Madam’. The UK is one of the few markets where this still gets noticed. Wherever possible, find the hiring manager's name, because a named letter reads as more deliberate.",
      },
      {
        q: "What is the difference between a cover letter and a supporting statement?",
        a: "A cover letter is a short, one-page case for the role, while a supporting statement is a longer, structured response to each criterion in a person specification. NHS trusts, councils, universities and the civil service often use supporting statements or behaviour-based examples. They are scored more systematically, so each criterion needs its own specific evidence.",
      },
      {
        q: "Can you write a supporting statement for an NHS or civil service job?",
        a: "Yes, but get in touch before ordering so the scope is clear. Supporting statements and civil service behaviour examples vary widely in length and structure, and each one is written against that specific person specification or set of behaviours. Send the advert through the contact page and Chanuka will confirm what is involved.",
      },
      {
        q: "Should my cover letter mention that I need visa sponsorship?",
        a: "Usually yes, briefly and factually, when the employer lists itself as a sponsor or the advert invites international applicants. State your current position in one sentence near the end and keep the rest of the letter about the value you bring. Hiding it rarely helps, because it comes up at the right-to-work check anyway.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /uk/career-advice/{slug} : UK-specific articles                      */
/* ------------------------------------------------------------------ */

const articles: CountryArticle[] = [
  {
    country: "uk",
    slug: "uk-cv-format",
    title: "UK CV format: the layout British employers expect",
    metaTitle: "UK CV Format: Sections, Layout and Conventions",
    metaDescription:
      "The UK CV format section by section: the header, experience and education layout, A4 and file choices, and the small details that mark a CV as foreign.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "A UK CV follows a shape British readers know by heart. Here is that shape, section by section, and the small details that quietly mark a CV as written for somewhere else.",
    quickAnswer:
      "The standard UK CV format is reverse chronological on A4: name and contact details, a short personal profile, key skills, work experience with month and year dates, education, then memberships or training. It uses British English, has no photo, date of birth or marital status, and does not list references. Most experienced candidates fit it on two pages.",
    intro:
      "British recruiters and hiring managers are not looking for originality in a CV's structure. They are looking for the information in the place they expect it, so they can spend their attention on whether you can do the job. That makes the UK CV format less a creative choice than a set of conventions. This guide goes through them section by section, with the specific UK details that differ from US resumes and from the CV styles common in South Asia, the Gulf and much of Europe. For how much to write overall, see the separate guide to CV length; for the step-by-step writing method, see the guide to writing a professional CV. This page is about the UK shape.",
    sections: [
      {
        heading: "The standard order of a UK CV",
        paragraphs: [
          "Almost every UK CV that works follows the same order. Deviating from it is allowed, but it has to earn its place, for example putting education first when you are a recent graduate with little experience.",
        ],
        bullets: [
          "Name and contact details: one or two lines at the top, no heading that says ‘Curriculum Vitae’",
          "Personal profile: three to five lines on who you are professionally and what you want next",
          "Key skills: a short, grouped list of specific skills, optional but common",
          "Work experience: most recent role first, with dates, employer, location and achievements",
          "Education: degree, institution and dates, with classification for UK degrees",
          "Professional memberships, certifications and training: CIMA, ACCA, PRINCE2, NMC PIN and similar",
          "Additional information: languages, driving licence if the role needs it, relevant volunteering",
        ],
      },
      {
        heading: "The header: what goes in and what stays out",
        paragraphs: [
          "A UK header is minimal. Your full name, a UK or international mobile number with the country code, a professional email address, your town or city and your LinkedIn URL. A full street address is no longer expected; ‘Manchester’ or ‘Leeds, open to relocation’ is enough. If you live outside the UK, write your real location honestly and add your plans, such as ‘Colombo, Sri Lanka. Relocating to London, January 2027’.",
          "What stays out is the personal biodata that many other markets include: photo, date of birth, age, gender, marital status, nationality, religion, and national ID or passport numbers. None of it is illegal to include, but UK employers do not want it at the CV stage, and its presence signals a CV built for another market. The separate guide on photos covers the reasoning in detail.",
          "Right to work is the one personal detail that can earn a place. If you already hold it, a line such as ‘Full right to work in the UK’ under your contact details answers a question every employer has to check anyway.",
        ],
      },
      {
        heading: "Laying out work experience the UK way",
        paragraphs: [
          "Each role opens with a consistent line: job title, employer, location and dates. UK convention is month and year, written as words, such as ‘June 2021 to present’. Year-only dates look evasive, and numeric formats like 06/2021 are harder to read. Put the job title first if it is your strongest signal; put the employer first if the name carries more weight than the title.",
          "Under each role, a single line of context helps an overseas or unfamiliar employer: what the organisation does, its size or sector, and your scope. A UK reader does not know a regional Sri Lankan bank or an Indian mid-size IT services firm by name, and one line fixes that.",
          "Then come the bullets, written as outcomes rather than duties. The UK register is understated, so numbers and scope do the persuading: ‘Reduced month-end close from eight working days to five across three entities’ is British in tone even without a single adjective. Recent roles get four to six bullets. Roles older than ten or so years shrink to one or two lines or move into a brief ‘Earlier career’ section.",
        ],
      },
      {
        heading: "Education, qualifications and professional bodies",
        paragraphs: [
          "For UK degrees, state the classification: First, 2:1, 2:2 or Third. Employers, especially graduate schemes, read it immediately. For overseas degrees, write the qualification as awarded, with the institution and country, and give the grade in its own system, such as a CGPA out of 10 or a class designation, rather than inventing a UK equivalent. If you have a UK ENIC Statement of Comparability, you can mention it in a short line.",
          "School results matter only early in a career. A graduate might list A levels, or the equivalent overseas school qualifications in a single line. Once you have a few years of experience, remove them. UK CVs never list primary or lower secondary schools.",
          "Professional memberships carry real weight in the UK and deserve their own section: ACCA, CIMA and ICAEW for accountants, NMC registration for nurses, chartered status for engineers, CIPD for HR professionals. Name the body in full once, show your membership status accurately, and include the year you qualified.",
        ],
      },
      {
        heading: "Page, font and file conventions",
        paragraphs: [
          "UK CVs are A4, not US Letter. The difference is small, but a Letter-size PDF prints with odd margins in a British office and shows up in document properties. Use a clean single-column layout with standard headings such as ‘Work experience’ and ‘Education’, a readable font at around 10 to 11 point for body text, and consistent spacing.",
          "Send Word or a text-based PDF unless the advert asks for one format. Recruitment agencies in particular often prefer Word because they reformat CVs onto their own branded template before sending them to clients. Name the file clearly, such as ‘Firstname-Lastname-CV.pdf’, never ‘CV final v3’. The ATS-friendly format guide covers parsing in more detail.",
          "On a two-page CV, put your name and a page number in the footer or a small header on page two. Agency consultants and hiring managers often print or split CVs when sharing them internally, and a loose second page with no name on it is easily lost. Let page one end at a natural break between roles rather than splitting a job across the pages mid-bullet.",
        ],
      },
      {
        heading: "British English and the small tells",
        paragraphs: [
          "Spelling is the fastest way a UK reader spots an imported CV. Use organised, analysed, programme (for a planned set of activities), licence as a noun, centre, and behaviour. Keep product names and official job titles as written, even when they use American spelling.",
          "Vocabulary shifts too. The UK says ‘CV’ rather than ‘resume’, ‘university’ or ‘uni’ rather than ‘college’ for degrees, ‘graduate scheme’ rather than ‘new grad program’, and ‘secondary school’ rather than ‘high school’. Currency, where it appears, is best left in the original with context, or translated into scope such as budget size relative to the business, rather than converted at a rate that will change.",
        ],
      },
    ],
    takeaways: [
      "Follow the standard order: contact details, profile, skills, experience, education, memberships.",
      "Keep the header minimal and leave out photo, date of birth, marital status, nationality and ID numbers.",
      "Write dates as month and year in words, most recent role first.",
      "Show UK degree classifications; state overseas grades as awarded rather than guessing an equivalent.",
      "Use A4, a single column, British spelling and a Word or text-based PDF file.",
    ],
    faqs: [
      {
        q: "What is the correct CV format for the UK?",
        a: "The correct UK CV format is reverse chronological on A4: contact details, a personal profile, key skills, work experience with month and year dates, education, and professional memberships. It uses British spelling, leaves out the photo and personal biodata, and does not list references. Two pages is the norm for experienced candidates, one page for most graduates.",
      },
      {
        q: "Should a UK CV include my full address?",
        a: "No, a full street address is no longer expected on a UK CV. Your town or city is enough, because employers use it only to judge commuting distance or relocation. If you are overseas, give your real city and country and add a line about your UK relocation plans and timing, so the reader is not left guessing.",
      },
      {
        q: "Is it better to send a CV as Word or PDF in the UK?",
        a: "Either works, so follow the advert first. Text-based PDFs keep your layout intact for direct applications. Recruitment agencies often prefer Word because they reformat CVs onto their own template before sending them to clients. What matters most is a simple, single-column document that parses cleanly in either format.",
      },
      {
        q: "Do I need a key skills section on a UK CV?",
        a: "A key skills section is optional but useful, especially for technical, finance and specialist roles. Keep it short and specific, grouped by type, such as systems, methods and languages, and make sure each important skill is also proven in your work experience. A list of soft skills like ‘team player’ adds nothing a UK reader will credit.",
      },
    ],
    sources: [
      {
        label: "UK ENIC: Statement of Comparability",
        url: "https://www.enic.org.uk/individuals/statement-of-comparability",
      },
      {
        label: "GOV.UK: Prove your right to work to an employer",
        url: "https://www.gov.uk/prove-right-to-work",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-long-should-a-cv-be", label: "How long should a CV be?" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/career-advice/ats-friendly-cv-format", label: "ATS-friendly CV format" },
      { href: "/uk/career-advice/should-you-add-a-photo-to-a-uk-cv", label: "Should you add a photo to a UK CV?" },
      { href: "/uk/cv-writing", label: "UK CV writing service" },
    ],
  },
  {
    country: "uk",
    slug: "should-you-add-a-photo-to-a-uk-cv",
    title: "Should you add a photo to a UK CV?",
    metaTitle: "Should You Put a Photo on a UK CV? (And Why Not)",
    metaDescription:
      "No photo is the UK norm, but it is not the law. What the Equality Act actually means for CVs, the few exceptions, and which other personal details to remove.",
    category: "CV writing",
    readMinutes: 6,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Photos are normal on CVs in much of the world and unusual in the UK. The reason is not a ban, and understanding the real reason tells you what else to take off.",
    quickAnswer:
      "No, you should not add a photo to a UK CV. No law forbids it, but UK convention is a CV without one, because employers try to avoid seeing information linked to protected characteristics under the Equality Act 2010. A photo also signals a CV written for another market. Performing arts and modelling are the exceptions. Use your photo on LinkedIn instead.",
    intro:
      "If you have built your career in Sri Lanka, India, the Gulf, Germany or much of East Asia, a professional photo in the top corner of your CV is simply normal. In some of those markets, leaving it off looks odd. Then you apply in the UK and hear, often from confident online advice, that a photo will get you ‘automatically rejected’ or that it is ‘illegal’. Neither is accurate. The real picture is more useful, because once you understand why British employers prefer CVs without photos, you know exactly which other details to remove at the same time.",
    sections: [
      {
        heading: "The short answer, and why it is not a law",
        paragraphs: [
          "UK law does not ban photos on CVs, and there is no rule that an employer must reject a CV that has one. What the law does is make discrimination in recruitment unlawful. The Equality Act 2010 protects people from discrimination on the basis of protected characteristics, which include age, disability, race, religion or belief, sex, sexual orientation, gender reassignment, marriage and civil partnership, and pregnancy and maternity.",
          "A photo inevitably reveals, or appears to reveal, several of those characteristics at once. Employers who want a fair process, and who want to be able to show one if a decision is challenged, therefore prefer not to see that information at the shortlisting stage. Many UK application forms ask for equality monitoring data separately and keep it away from the people deciding who to interview. A CV that puts a face on page one works against that design.",
          "Some UK employers go further and anonymise applications, removing names and other identifying details before shortlisting. Those processes usually rely on application forms rather than CVs, but they show the direction of travel: British recruiters are trained to judge evidence, not appearance, and a CV that follows the same logic fits the process instead of fighting it.",
        ],
      },
      {
        heading: "What a photo signals to a UK recruiter",
        paragraphs: [
          "The practical cost of a photo is usually not legal. It is perception. To a UK recruitment consultant, a photo on a CV reads as a CV prepared for another market. It suggests you have not researched UK norms, which is a small but real mark against you when the consultant is deciding who to put in front of a client.",
          "It also takes up space. The top of page one is the most valuable area of a two-page UK CV, and the profile that belongs there does far more for you than a headshot. Some recruiters will simply ignore the photo. Some will remove it before forwarding your CV. None will count it in your favour, so it has no upside.",
          "There is a technical cost too. Photo CVs are usually built on designed templates, with the image in a text box or table and contact details wrapped around it. Applicant tracking systems and agency databases can parse those layouts poorly, pulling your name or phone number out of order or losing them entirely. A single-column CV without images avoids the problem completely.",
        ],
      },
      {
        heading: "The personal details that go with it",
        paragraphs: [
          "The logic that removes the photo removes a whole block of personal information that is standard in other markets. If your current CV has a ‘Personal details’ section, most of it should go.",
        ],
        bullets: [
          "Date of birth and age: linked to age discrimination; your career dates already tell the story",
          "Gender and marital status: protected characteristics with no bearing on the role",
          "Religion and nationality: remove both; right to work is the only relevant fact, and it can be stated directly",
          "Number of children or dependants: never relevant at CV stage",
          "National ID, passport and visa numbers: a security risk on a document that circulates widely",
          "Father's or spouse's name: a convention in some South Asian CVs with no UK equivalent",
          "Signature and declaration line: not used on UK CVs",
        ],
      },
      {
        heading: "The genuine exceptions",
        paragraphs: [
          "A few UK fields do expect a photo, and they are fields where appearance is part of the work. Actors, presenters, models and some performers use headshots, usually as a separate casting profile rather than on a corporate-style CV. If you are applying in these areas, follow the conventions of the agency or casting platform you are using.",
          "Outside those fields, an employer occasionally asks for a photo for a specific reason, such as an ID badge after an offer. That is a request made at the right time for an administrative purpose, and it is fine to comply. It is not a reason to add one to your CV.",
          "Customer-facing roles like hospitality, retail and airline cabin crew sometimes prompt people to wonder whether a photo helps. In UK applications for those roles, the answer is still no photo on the CV; any appearance or uniform standards are assessed later in the process, in person.",
        ],
      },
      {
        heading: "LinkedIn is where your photo belongs",
        paragraphs: [
          "The contrast confuses people, but it is consistent. LinkedIn is a public networking profile you choose to publish, and a clear, professional photo there is expected. A profile without one looks incomplete and gets less engagement from recruiters. Your CV, by contrast, is a document you send into a recruitment process that is trying to stay neutral.",
          "So move the photo, do not delete it. Use a recent, well-lit headshot with a plain background on LinkedIn, make sure the name and job titles match your CV, and let recruiters who want to put a face to the name find it there.",
        ],
      },
      {
        heading: "Converting a photo CV for the UK",
        paragraphs: [
          "If your CV was built for a market that expects a photo, taking the photo out often leaves a strange empty block in the layout, because the template was designed around it. Do not just delete the image. Rebuild the top of the CV in a single column: name, contact line, then a three to five line personal profile directly underneath. That profile is what fills the space, and it is what a UK reader wants to see first.",
          "While you are there, check the rest of the document for the other signals of a foreign format: the personal details block, the declaration at the end, the objective statement, and length beyond two pages. The UK CV format guide goes through the full structure.",
        ],
      },
    ],
    takeaways: [
      "No UK law bans CV photos; the convention comes from employers avoiding protected-characteristic information.",
      "A photo gains you nothing in the UK and signals a CV built for another market.",
      "Remove the rest of the personal details block too: date of birth, marital status, religion, nationality, ID numbers.",
      "Performing arts and modelling are the real exceptions, usually via separate casting profiles.",
      "Put your professional photo on LinkedIn, and use the freed space on your CV for a strong profile.",
    ],
    faqs: [
      {
        q: "Is it illegal to put a photo on a CV in the UK?",
        a: "No, it is not illegal to put a photo on a UK CV, and no law requires employers to reject one. The Equality Act 2010 makes discrimination in recruitment unlawful, so employers prefer not to see information linked to protected characteristics, such as age, race or sex, at shortlisting. That is why no photo is the UK convention.",
      },
      {
        q: "Will my CV be rejected if it has a photo?",
        a: "Not automatically, but the photo will not help you and can count slightly against you. UK recruiters read a photo as a sign the CV was prepared for a different market. Some remove it before forwarding. Since there is no upside, the sensible choice for UK applications is to take it off and use the space for your profile.",
      },
      {
        q: "Should I include my date of birth on a UK CV?",
        a: "No, leave your date of birth off a UK CV. Age is a protected characteristic under the Equality Act 2010, and employers do not want it at the application stage. Your career dates give enough context. If an employer needs your date of birth for right-to-work or pension purposes, they will ask for it after an offer.",
      },
      {
        q: "Should I have a photo on LinkedIn if my UK CV has none?",
        a: "Yes, use a professional photo on LinkedIn even though your UK CV has none. LinkedIn is a public profile you choose to publish, and a clear headshot makes it look complete and credible to recruiters. The CV is a document entering a neutral screening process, which is why the two follow different conventions.",
      },
    ],
    sources: [
      {
        label: "GOV.UK: Discrimination, your rights (protected characteristics)",
        url: "https://www.gov.uk/discrimination-your-rights",
      },
      {
        label: "legislation.gov.uk: Equality Act 2010",
        url: "https://www.legislation.gov.uk/ukpga/2010/15/contents",
      },
      {
        label: "Acas: Following discrimination law in recruitment",
        url: "https://www.acas.org.uk/recruitment/follow-discrimination-law",
      },
    ],
    relatedLinks: [
      { href: "/uk/career-advice/uk-cv-format", label: "UK CV format" },
      { href: "/career-advice/cv-for-a-new-market", label: "Adapting a CV for a new market" },
      { href: "/uk/international-job-seekers", label: "Applying for UK jobs from abroad" },
      { href: "/cv-samples/international-cv", label: "International CV sample" },
      { href: "/uk/cv-writing", label: "UK CV writing service" },
    ],
  },
  {
    country: "uk",
    slug: "uk-cv-personal-statement",
    title: "How to write a personal statement for a UK CV",
    metaTitle: "UK CV Personal Statement: How to Write One",
    metaDescription:
      "How to write a UK CV personal statement: a three-part structure, examples by career stage, what to cut, and how it differs from a supporting statement.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "The three to five lines at the top of a UK CV are read more closely than anything else on the page. Most people fill them with adjectives. Here is how to fill them with a case.",
    quickAnswer:
      "A UK CV personal statement, also called a profile, is three to five lines at the top of the CV that say who you are professionally, what you have delivered, and what role you want next. Write it last, tailor it to each application, use specific evidence instead of adjectives, and keep it to roughly 50 to 100 words in a plain, understated British tone.",
    intro:
      "In the UK, the short paragraph under your name has several names: personal statement, personal profile, professional profile or career summary. They all mean the same thing, and it is the part of your CV that recruiters read first and most closely. It is also the part most people write worst, because they reach for words like ‘motivated’, ‘dynamic’ and ‘team player’ that describe everyone and prove nothing. A strong personal statement does one job: it tells the reader, in a few lines, why they should read the rest of the CV with interest. This guide covers how to do that for UK readers specifically, and how it differs from other documents that share the name.",
    sections: [
      {
        heading: "Which personal statement this is, and which it is not",
        paragraphs: [
          "Three different UK documents are called a personal statement, and mixing them up is common. The CV personal statement is a short profile at the top of your CV. It is three to five lines, it is about your professional value, and it is the subject of this guide.",
          "The UCAS personal statement is a separate essay written for university admissions. It has its own format and nothing in it belongs on a professional CV. The supporting statement, sometimes also called a personal statement in public sector adverts, is a longer document written against a person specification for NHS, civil service, local government, university or charity roles. It is scored criterion by criterion, and it replaces or supplements a cover letter rather than sitting inside the CV.",
          "If an application form asks for a ‘personal statement’ in a box with a word limit of several hundred words, it almost always means the supporting kind. Your CV profile will not fill it.",
        ],
      },
      {
        heading: "A three-part structure that works",
        paragraphs: [
          "Most strong UK profiles answer three questions in order. Keeping to this structure stops the paragraph drifting into generic claims.",
        ],
        bullets: [
          "Who you are professionally: your level, specialism and, where it helps, your sector. ‘CIMA-qualified management accountant with eight years in manufacturing and FMCG.’",
          "What you have delivered: one or two pieces of specific evidence, with scope or numbers. ‘Led the finance side of a three-site ERP migration and rebuilt monthly reporting for a 40 million pound business unit.’",
          "What you want next: the role and context you are targeting, stated plainly. ‘Looking for a finance business partner role supporting operations in the North West.’",
        ],
      },
      {
        heading: "Tone, person and length for British readers",
        paragraphs: [
          "Write in the implied first person, without ‘I’ at the start of every sentence and without the third person. ‘Chartered civil engineer with…’ reads naturally in the UK; ‘Priya is a chartered civil engineer’ reads like a biography someone else wrote, and ‘I am a chartered civil engineer’ repeated through the paragraph feels heavy.",
          "Keep the register understated. British readers respond to confidence expressed through specifics, not through superlatives. ‘Exceptional’, ‘world-class’ and ‘visionary’ invite scepticism. A concrete claim like ‘built the reporting pack now used across all six regional teams’ invites the reader to look for the detail in your experience section, which is exactly where you want them to go next.",
          "Aim for roughly 50 to 100 words. Beyond that, the profile starts repeating the CV. Below it, there is usually no room for evidence.",
        ],
      },
      {
        heading: "Examples by career stage",
        paragraphs: [
          "These examples are illustrations of the structure, not templates to copy. The specifics are what make a profile work, and yours will be different.",
          "Graduate: ‘Economics graduate (2:1, University of Leeds) with a summer internship in credit risk and a final-year dissertation modelling SME default rates in Python. Looking to join a graduate scheme in risk or financial analysis.’",
          "Mid-career professional moving to the UK: ‘Software engineer with seven years building payment services in Java and Kotlin for banking clients in Sri Lanka and Singapore, most recently leading a team of five. Relocating to London in early 2027 and targeting backend engineering roles in fintech.’",
          "Career changer: ‘Former secondary school maths teacher now working as a junior data analyst, with a year of SQL and Power BI reporting for a multi-academy trust. Combines clear stakeholder communication with growing technical depth; seeking an analyst role in education or the public sector.’",
        ],
      },
      {
        heading: "What to cut from your profile",
        paragraphs: [
          "Most profiles improve by deletion. If a phrase would be equally true of a hundred other applicants, it is not doing any work for you.",
        ],
        bullets: [
          "Personality adjectives with no evidence: hard-working, passionate, dynamic, motivated, results-driven",
          "‘Proven track record’ unless the next words are the track record",
          "Objective statements about what you hope to gain, such as ‘seeking a challenging position to grow my skills’",
          "Anything about personal circumstances, such as age, family or reasons for leaving",
          "Lists of skills that belong in the key skills section below",
        ],
      },
      {
        heading: "Tailoring the profile to each application",
        paragraphs: [
          "The profile is the cheapest part of your CV to tailor and the most effective. Changing the target role line and swapping one piece of evidence to match the advert can make the same CV read as written for that job. When an advert leads with stakeholder management, lead your evidence with stakeholders; when it leads with systems, lead with systems.",
          "For recruitment agencies, keep the profile slightly broader, because a consultant may put you forward for several similar roles. For direct applications and public sector roles, match the language of the advert or person specification more closely. If you are relocating, the profile is also a natural place for one line on your UK timing, which saves the reader from having to infer it.",
        ],
      },
      {
        heading: "Before and after: rewriting a weak profile",
        paragraphs: [
          "Here is a typical profile from an overseas CV: ‘A highly motivated and hard-working professional seeking a challenging position in a reputed organisation where I can utilise my skills and contribute to the growth of the company.’ It tells a UK reader nothing about level, field or evidence. It could open any CV in any profession.",
          "Rewritten for the UK, the same person might read: ‘Procurement specialist with six years in hospital supply chains, managing supplier contracts worth around 3 million US dollars a year and cutting emergency orders by a third through a new stock review process. Seeking a category buyer role in NHS or private healthcare procurement.’ Every phrase now does work: it names the field, shows scope, proves one result and points at a specific next role.",
          "Notice what did not change. The person is the same, with the same experience. Only the choice of what to say, and how plainly to say it, moved.",
        ],
      },
    ],
    takeaways: [
      "The CV personal statement is a three to five line profile, not a UCAS essay or a public sector supporting statement.",
      "Structure it as who you are, what you have delivered, and what you want next.",
      "Use implied first person, British spelling and an understated tone.",
      "Replace adjectives with one or two specific, evidenced claims.",
      "Tailor the target line and lead evidence for each application.",
    ],
    faqs: [
      {
        q: "How long should a personal statement on a UK CV be?",
        a: "A personal statement on a UK CV should be three to five lines, roughly 50 to 100 words. That is enough for your professional identity, one or two pieces of evidence and your target role. Anything longer starts repeating your experience section, and anything much shorter usually leaves no room for the specific evidence that makes it credible.",
      },
      {
        q: "Should I write my CV personal statement in first or third person?",
        a: "Use the implied first person, which drops ‘I’ but reads as you speaking: ‘Chartered accountant with…’ rather than ‘I am a chartered accountant’ or ‘Sarah is a chartered accountant’. This is the most common style on UK CVs. Third person reads like a biography, and repeated ‘I’ statements feel heavy on a document this short.",
      },
      {
        q: "Is a personal statement the same as a supporting statement?",
        a: "No, they are different documents. A CV personal statement is a short profile at the top of your CV. A supporting statement is a longer document, often several hundred words or more, that responds to each criterion in a person specification. NHS, civil service, local government and university applications commonly ask for supporting statements, and they are scored against those criteria.",
      },
      {
        q: "Do I need a personal statement on my CV at all?",
        a: "In the UK, yes, a short personal profile is expected on almost every professional CV. It gives recruiters and agency consultants an instant summary they can use to judge fit, and often to describe you to their client. Leaving it out forces the reader to work out your level and direction from your job history alone.",
      },
    ],
    sources: [
      {
        label: "NHS Jobs: Making successful applications",
        url: "https://www.jobs.nhs.uk/candidate/search/advice/making-successful-applications",
      },
      {
        label: "Civil Service Careers: A guide to Civil Service Success Profiles",
        url: "https://www.civil-service-careers.gov.uk/a-guide-to-civil-service-success-profiles/",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/career-advice/responsibilities-into-achievements", label: "Turning responsibilities into achievements" },
      { href: "/career-advice/how-to-tailor-a-cv-to-a-job-description", label: "Tailoring a CV to a job description" },
      { href: "/uk/career-advice/uk-cv-format", label: "UK CV format" },
      { href: "/uk/cover-letter-writing", label: "UK cover letter and supporting statement help" },
      { href: "/uk/cv-writing", label: "UK CV writing service" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /uk/international-job-seekers : destination hub                     */
/* ------------------------------------------------------------------ */

const ijsHub: IjsHub = {
  country: "uk",
  metaTitle: "Applying for UK Jobs From Abroad: CV Guide",
  metaDescription:
    "How to apply for UK jobs from overseas: the UK CV format, what to change from your home-market CV, right to work, sponsors, agencies and mistakes to avoid.",
  h1: "Applying for UK Jobs From Abroad",
  lead:
    "A CV built for Colombo, Mumbai, Dubai or New York will be read in the UK as a CV built for somewhere else. The format is specific, the tone is quieter, and the right-to-work question sits under every read.",
  quickAnswer:
    "To apply for UK jobs from abroad, convert your CV to UK conventions (two pages, no photo or personal biodata, a short profile, British English), state your right-to-work position honestly, and target employers that hire internationally, including licensed visa sponsors. Check visa routes on GOV.UK, get overseas qualifications compared by UK ENIC where useful, and register with any regulator your profession requires.",
  overview:
    "Most international applicants who struggle in the UK are not short of experience. They are sending a document that follows another market's rules, into a process where two readers, often an agency consultant and then a hiring manager, decide quickly whether the candidate looks low-risk. Every unfamiliar signal adds risk: a photo, a date of birth, a four-page length, a list of duties instead of results, an unclear visa position. Fix those, and your experience gets read on its merits. This page covers the CV conventions, what to change, how to apply from outside the UK in practice, and where to find the official visa information.",
  cvConventions: [
    { label: "Length", value: "Two pages for experienced candidates, one for early career. Academic and medical CVs are longer by convention." },
    { label: "Photo", value: "None. Not a legal ban, but UK convention, and employers avoid protected-characteristic information at shortlisting." },
    { label: "Personal details", value: "Name, city and country, phone with country code, email, LinkedIn. No date of birth, marital status, religion, nationality or ID numbers." },
    { label: "Opening", value: "A three to five line personal profile aimed at the target role, not an objective statement." },
    { label: "Experience", value: "Reverse chronological, month and year dates, achievements with scope and outcomes." },
    { label: "Spelling and paper", value: "British English on A4. ‘CV’, not ‘resume’." },
    { label: "References", value: "Not listed, and no ‘references on request’ line; employers ask later." },
  ],
  whatChanges: [
    "Cut to two pages by shrinking roles older than about ten years and removing duties any reader would assume",
    "Remove the photo and the whole personal details block, including any declaration line and signature",
    "Replace an objective statement with a personal profile that states your level, evidence and target role",
    "Add one line of context under unfamiliar employers: sector, size and what they do",
    "Translate job titles into the UK equivalent where yours would confuse, keeping the original in brackets if needed",
    "State overseas qualifications as awarded and add professional memberships UK employers recognise",
    "Switch to British spelling and a quieter, evidence-led tone",
  ],
  applyingFromAbroad: [
    {
      title: "Work out your likely route before you write",
      body: "Whether you will need sponsorship shapes everything: which employers to target, how to word your CV and what your cover letter says. Use the GOV.UK visa checker and the route pages to understand the category you would fall into, then take regulated advice if your situation is complex.",
    },
    {
      title: "Target employers who can hire you",
      body: "If you need a Skilled Worker visa, your employer generally has to be a licensed sponsor. The Home Office publishes a register of licensed sponsors, which is a practical way to check whether an employer can sponsor at all before you invest time in an application.",
    },
    {
      title: "Get qualifications and registration in order",
      body: "Regulated professions such as nursing, medicine, pharmacy and some engineering roles need UK registration with the relevant regulator before you can practise. For other roles, a UK ENIC Statement of Comparability can help an employer understand an overseas degree.",
    },
    {
      title: "Rebuild the CV and LinkedIn together",
      body: "Convert your CV to UK format and make your LinkedIn profile match it: same titles, same dates, British spelling. Keep your LinkedIn location real and state your UK plans in the headline or About section.",
    },
    {
      title: "Use recruitment agencies deliberately",
      body: "Specialist UK agencies fill a large share of professional roles. Approach the ones that recruit in your field, be upfront about your work-status position, and ask plainly whether their clients sponsor. A clear answer early saves both sides time.",
    },
    {
      title: "Prepare for remote interviews and checks",
      body: "Early interviews are usually by video. Confirm times in UK time, test your setup, and have your documents ready, because every UK employer has to check a new hire's right to work before they start.",
    },
  ],
  keySectors: [
    "Health and adult social care, including nursing",
    "Technology, software engineering and data",
    "Engineering and construction",
    "Financial services and accounting",
    "Higher education and research",
    "Hospitality and specialist culinary roles",
  ],
  visaContext:
    "Unless you already have permission to work in the UK, you will need a visa that allows the job. The route most employer-led hires use is the Skilled Worker visa, which generally requires a job offer from an employer approved by the Home Office as a licensed sponsor. Eligible health and care roles may fall under the Health and Care Worker visa, and people who complete an eligible UK course may be able to work on a Graduate visa. Eligible occupations, salary requirements and fees change, so rely on GOV.UK or a regulated immigration adviser, not on a CV writer. This is orientation only, not immigration advice.",
  commonMistakes: [
    "Sending a three or four page CV into a two-page market",
    "Keeping the photo, date of birth and personal details block from a home-market CV",
    "Leaving right-to-work status vague, so the employer assumes the worst",
    "Applying to employers who cannot sponsor when sponsorship is required",
    "Writing job descriptions as duties instead of outcomes with scope",
    "Using American spelling or a US resume layout for a UK application",
    "Setting a false UK location on LinkedIn, which unravels on the first call",
  ],
  faqs: [
    {
      q: "Can I apply for UK jobs from outside the UK?",
      a: "Yes, you can apply for UK jobs from abroad, and many employers interview overseas candidates by video. What matters is whether you have or can get permission to work. If you need a Skilled Worker visa, focus on employers who are licensed sponsors, and make sure your CV follows UK conventions so the application is judged on your experience.",
    },
    {
      q: "Should I say I need visa sponsorship on my CV?",
      a: "Usually not on the CV itself. If you already hold the right to work, state it clearly near the top. If you need sponsorship, keep the CV focused on your evidence and address sponsorship briefly in the cover letter or the application form, which often asks directly. Hiding it does not work, because right-to-work checks are mandatory.",
    },
    {
      q: "How do I find UK companies that sponsor visas?",
      a: "Start with the register of licensed sponsors published by the Home Office on GOV.UK, which lists organisations licensed to sponsor workers. A licence shows the employer can sponsor, not that every role will be sponsored. Cross-check with the job advert, which often states whether sponsorship is available, and ask recruitment agencies directly.",
    },
    {
      q: "Do UK employers accept overseas degrees?",
      a: "Most UK employers accept overseas degrees, but some want help understanding them. UK ENIC, the official UK body for comparing international qualifications, issues a Statement of Comparability that explains how your qualification compares to the UK system. For regulated professions like nursing and medicine, registration with the UK regulator matters more than the degree comparison.",
    },
    {
      q: "Is a UK CV different from a resume?",
      a: "Yes. In the UK the document is called a CV and follows British conventions: usually two pages, a personal profile, British spelling and A4 paper. A US resume is typically shorter for early-career candidates, uses American spelling and Letter size, and has a different tone. Sending a US-style resume to a UK employer is a common, avoidable mismatch.",
    },
    {
      q: "Do I need a UK address or phone number to apply?",
      a: "No, you do not need a UK address or phone number to apply. Give your real city and country and a mobile number with the international code, plus a professional email and LinkedIn URL. Add a line about your relocation timing so recruiters know when you could start. Pretending to be UK-based usually backfires at the first conversation.",
    },
  ],
  sources: [
    { label: "GOV.UK: Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
    { label: "GOV.UK: Skilled Worker visa", url: "https://www.gov.uk/skilled-worker-visa" },
    {
      label: "GOV.UK: Register of licensed sponsors (workers)",
      url: "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers",
    },
    { label: "GOV.UK: Health and Care Worker visa", url: "https://www.gov.uk/health-care-worker-visa" },
    { label: "GOV.UK: Graduate visa", url: "https://www.gov.uk/graduate-visa" },
    { label: "GOV.UK: Prove your right to work to an employer", url: "https://www.gov.uk/prove-right-to-work" },
    {
      label: "UK ENIC: Statement of Comparability",
      url: "https://www.enic.org.uk/individuals/statement-of-comparability",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /uk/international-job-seekers/from-{origin}                         */
/* ------------------------------------------------------------------ */

const origins: OriginCorridor[] = [
  {
    country: "uk",
    origin: "sri-lanka",
    originName: "Sri Lanka",
    metaTitle: "UK CV for Sri Lankans: Applying From Sri Lanka",
    metaDescription:
      "How to turn a Sri Lankan CV into a UK CV: remove NIC and personal details, rethink O/L and A/L results and referees, and position CIMA, ACCA or NMC routes.",
    h1: "Applying for UK Jobs From Sri Lanka",
    lead:
      "Sri Lankan CVs are built for a market that expects a photo, a personal details block, exam results and two non-related referees. UK employers expect almost none of that, and the conversion is mostly about what to take out.",
    quickAnswer:
      "To apply for UK jobs from Sri Lanka, rewrite your CV to UK conventions: remove the photo, NIC number, date of birth, religion, marital status and non-related referees, cut O/L and A/L results once you have experience, and replace the objective with a short profile. Present CIMA, ACCA, CA Sri Lanka or nursing credentials clearly, and check UK registration and visa routes on official sites.",
    overview:
      "Sri Lanka sends strong candidates to the UK, particularly in accounting, software and healthcare, and many of them already hold British qualifications through CIMA, ACCA or UK university degrees delivered locally. The problem is rarely capability. It is a CV format shaped by Sri Lankan norms: a personal details section, subject-by-subject exam results, school achievements, a declaration and two referees with full contact details. To a UK reader these are unfamiliar signals that crowd out the evidence. The fix is structural, and once made, a Sri Lankan candidate's British-linked qualifications often become a genuine advantage.",
    whatToChange: [
      {
        from: "Photo in the top corner and a ‘Personal Details’ block with NIC number, date of birth, gender, religion, nationality and marital status",
        to: "Name, city and country, phone with +94, email and LinkedIn only. No ID numbers, which are also a security risk on a widely shared document",
      },
      {
        from: "G.C.E. O/L and A/L results listed subject by subject with grades",
        to: "Remove them once you have a degree and a few years of experience. Graduates can keep one line summarising A/L stream and results",
      },
      {
        from: "Two ‘non-related referees’ with names, designations, phone numbers and addresses",
        to: "No referees on the CV. UK employers request them later, usually after an offer",
      },
      {
        from: "An ‘Objective’ about seeking a challenging position in a reputed organisation",
        to: "A three to five line personal profile stating your level, evidence and target UK role",
      },
      {
        from: "School prefect roles, sports colours and extracurricular activities from school",
        to: "Leave school activities out entirely once you have work experience. Keep only recent, relevant volunteering or professional activity",
      },
      {
        from: "A closing declaration that the information is true, with date and signature",
        to: "Remove it. UK CVs do not carry declarations or signatures",
      },
      {
        from: "Duties copied from a job description, often across three or four pages",
        to: "Two pages, achievements with scope and outcomes, and one line of context about each Sri Lankan employer",
      },
      {
        from: "Language skills listed as Sinhala, Tamil and English with proficiency levels",
        to: "Keep languages in a short additional information line; English ability is shown by the CV itself, and formal tests belong to visa or registration processes",
      },
    ],
    qualificationsNote:
      "Many Sri Lankan professionals hold qualifications UK employers already recognise without translation. CIMA and ACCA are UK-based professional bodies and are widely taken by Sri Lankan accountants, so state your membership status exactly (student, affiliate, member, fellow) and the year. CA Sri Lanka membership should be written in full as The Institute of Chartered Accountants of Sri Lanka, since it is less familiar to UK readers. A UK university degree delivered through a Sri Lankan partner institution should name the awarding UK university first and the delivery centre second. For Sri Lankan state university degrees, UK ENIC, the official UK body for comparing international qualifications, can issue a Statement of Comparability. Nurses need Nursing and Midwifery Council (NMC) registration to practise in the UK, and engineers can look at the Engineering Council's guidance for internationally qualified engineers; Sri Lanka's engineering degree accreditation through IESL is part of the Washington Accord.",
    sectorsWhereCandidatesCompete: [
      "Accounting and finance, especially management accounting with CIMA",
      "Software engineering, QA and data, often with experience delivering for UK or European clients",
      "Nursing and adult social care",
      "Civil and structural engineering",
      "Hospitality and specialist culinary roles",
      "Business analysis and IT project management",
    ],
    practicalSteps: [
      {
        title: "Strip the Sri Lankan format first",
        body: "Before you touch the wording, remove the photo, the personal details block, school results, referees and the declaration. You will usually recover close to a page, which is the space you need for evidence.",
      },
      {
        title: "Explain employers a UK reader will not know",
        body: "A reader in Manchester does not know a Colombo conglomerate, a regional bank or a local software house by name. Add one line under each: sector, size, and whether it serves UK, European or global clients, which is often the case for Sri Lankan IT firms.",
      },
      {
        title: "Lead with British-recognised credentials",
        body: "If you are CIMA or ACCA qualified, or hold a UK university degree earned in Sri Lanka, make it visible in your profile. It answers the recognition question before the reader asks it.",
      },
      {
        title: "Sort registration before you apply in regulated fields",
        body: "Nurses should read the NMC guidance for internationally trained applicants early, because registration steps take time and employers often ask where you are in the process.",
      },
      {
        title: "Work with the time difference",
        body: "Sri Lanka is five and a half hours ahead of UK winter time and four and a half ahead of UK summer time. UK morning calls land in your afternoon, which is convenient; confirm every interview time in UK time and keep your phone on for calls from +44 numbers during UK office hours.",
      },
    ],
    commonMistakes: [
      "Keeping the NIC number and personal details block on a CV that will be forwarded between agencies and clients",
      "Listing O/L results years into a professional career",
      "Including two non-related referees with full contact details on the CV",
      "Writing CIMA or ACCA status loosely, such as ‘CIMA qualified’ when only some levels are complete",
      "Assuming a UK reader knows Sri Lankan employers, universities or grading",
      "Using Sri Lankan salary figures in rupees as achievements without context",
    ],
    visaContext:
      "Sri Lankan nationals generally need a visa to work in the UK. For most professional roles that means a route such as the Skilled Worker visa, which generally requires a job offer from a Home Office licensed sponsor, or the Health and Care Worker visa for eligible health and care roles. Check your own situation on GOV.UK, and use a regulated immigration adviser for anything complex. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I include my NIC number on a CV for UK jobs?",
        a: "No, never include your NIC number on a UK CV. UK employers do not use it, and it is a security risk on a document that may pass through several agencies and inboxes. Identity and right-to-work documents are checked separately, later in the process, through the employer's own checks.",
      },
      {
        q: "Are CIMA and ACCA recognised by UK employers?",
        a: "Yes, CIMA and ACCA are UK-based professional bodies and UK employers recognise both. State your exact status, such as passed finalist, member or fellow, with the year, because UK employers treat part-qualified and fully qualified very differently. Pair the credential with evidence of the work you did, such as reporting, budgeting or audit scope.",
      },
      {
        q: "Should I list my O/L and A/L results on a UK CV?",
        a: "Only if you are a recent graduate, and then in a single summary line rather than subject by subject. Once you have a degree and professional experience, remove them. UK employers read school results only for early-career applicants, and Sri Lankan exam grading is unfamiliar to most UK recruiters, so it uses space without adding weight.",
      },
      {
        q: "How do I present a UK degree I studied for in Sri Lanka?",
        a: "Name the awarding UK university first, then the institution where you studied, for example ‘BSc (Hons) Computer Science, University of Westminster, delivered at a partner institute in Colombo’, with your classification. The award is a UK degree, so present it as one. Be accurate about where you studied, because employers may verify it.",
      },
      {
        q: "Can Sri Lankan nurses work in the UK?",
        a: "Yes, Sri Lankan nurses can work in the UK once they meet the Nursing and Midwifery Council's registration requirements for internationally trained applicants and hold the right visa. The NMC sets the registration steps, including English language and competence requirements, so read its guidance first. Your CV should show your clinical areas, settings and registration progress clearly.",
      },
    ],
    sources: [
      {
        label: "UK ENIC: Statement of Comparability",
        url: "https://www.enic.org.uk/individuals/statement-of-comparability",
      },
      {
        label: "NMC: Register if you trained outside the UK",
        url: "https://www.nmc.org.uk/registration/joining-the-register/register-nurse-midwife/trained-outside-uk/",
      },
      {
        label: "Engineering Council: Recognition for international engineers in the UK",
        url: "https://www.engc.org.uk/international-recognition/recognition-in-the-uk",
      },
      { label: "GOV.UK: Check if you need a UK visa", url: "https://www.gov.uk/check-uk-visa" },
      { label: "GOV.UK: Skilled Worker visa", url: "https://www.gov.uk/skilled-worker-visa" },
    ],
  },
  {
    country: "uk",
    origin: "india",
    originName: "India",
    metaTitle: "UK CV for Indian Professionals: Applying From India",
    metaDescription:
      "How to convert an Indian CV for UK employers: drop CTC, declaration and father's name, restructure project-style IT CVs, and present CGPA, ICAI or NMC status.",
    h1: "Applying for UK Jobs From India",
    lead:
      "Indian CVs are written for Indian job portals and IT services recruiters: CTC and notice period up top, projects listed client by client, a personal profile with father's name, and a signed declaration. A UK reader wants a different document.",
    quickAnswer:
      "To apply for UK jobs from India, rebuild your CV to UK conventions: remove CTC, expected salary, father's name, date of birth, photo and the declaration; turn project-by-project IT listings into role-based achievements; state CGPA and degrees as awarded; and cut to two pages. Present ICAI, ACCA, NMC or GMC status accurately, and check visa routes and schemes on GOV.UK.",
    overview:
      "Indian professionals compete strongly for UK roles, above all in technology, healthcare, finance and engineering, and many already work for UK clients through global delivery models. The challenge is that Indian CV habits come from a different hiring system: portal keyword stuffing, CTC-based negotiation, long notice periods, and IT services CVs organised around client projects rather than employers. UK readers find those CVs long, repetitive and hard to scan for impact. The conversion is about reorganising around your own contribution and removing the details that belong to the Indian process.",
    whatToChange: [
      {
        from: "‘Current CTC’, ‘Expected CTC’ in lakhs and ‘Notice period’ at the top of the CV",
        to: "Remove salary figures entirely. Mention notice period, if useful, in the cover letter or application form rather than the CV header",
      },
      {
        from: "A ‘Personal Profile’ with father's name, date of birth, gender, marital status, nationality and languages known",
        to: "Name, city and country, phone with +91, email and LinkedIn only. Languages go in a short additional information line",
      },
      {
        from: "IT services format: Project 1, Project 2, each with client, duration, team size, environment and ‘roles and responsibilities’",
        to: "Organise by employer and role. Summarise the technology stack once, and write achievements that show what you built, improved or led across projects",
      },
      {
        from: "Class 10 and Class 12 board percentages alongside the degree",
        to: "Remove school results once you have a degree and experience. State the degree with institution and CGPA or class as awarded",
      },
      {
        from: "A ‘Career Objective’ and a long ‘Strengths’ list of personal qualities",
        to: "A three to five line personal profile with your level, specialism, evidence and target UK role",
      },
      {
        from: "‘I hereby declare that the above information is true to the best of my knowledge’, with place, date and signature",
        to: "Remove it. UK CVs have no declaration, place, date or signature",
      },
      {
        from: "A skills block listing every tool ever touched, written for job-portal keyword searches",
        to: "A grouped list of the skills relevant to the UK role, each important one proven inside your experience",
      },
      {
        from: "Indian job titles and levels such as ‘Associate Consultant’, ‘Technical Lead’ or ‘Senior Executive’ without context",
        to: "Keep the real title, and add scope so a UK reader understands the level: team size, reporting line, responsibilities",
      },
    ],
    qualificationsNote:
      "Indian degrees are familiar to many UK employers, particularly in technology, but grading and institution names still need clarity. State the degree as awarded, such as B.Tech or BE, with the institution and CGPA out of 10 or the class awarded, rather than converting to a UK classification yourself. UK ENIC, the official UK body for comparing international qualifications, can issue a Statement of Comparability if an employer needs one. Indian engineering degrees accredited by the National Board of Accreditation fall within the Washington Accord, and the Engineering Council publishes guidance for internationally qualified engineers seeking UK recognition. Chartered accountants should write their ICAI membership in full and check ICAEW's current arrangements for ICAI members directly with ICAEW; ACCA is also widely held in India and is recognised in the UK. Nurses need Nursing and Midwifery Council (NMC) registration, and doctors need General Medical Council (GMC) registration, usually through PLAB or another recognised route.",
    sectorsWhereCandidatesCompete: [
      "Software engineering, cloud, data and cybersecurity",
      "IT consulting and business analysis, often with UK client experience",
      "Doctors and nurses in the NHS",
      "Finance, audit and accounting",
      "Engineering and infrastructure",
      "Pharmaceuticals and life sciences",
    ],
    practicalSteps: [
      {
        title: "Reorganise around roles, not projects",
        body: "If you have spent years on client projects at an IT services firm, group them under your employer and title, then pick the four to six outcomes that show the most responsibility. The UK reader wants your trajectory, not every engagement.",
      },
      {
        title: "Make UK client experience visible",
        body: "If you worked for UK clients, onsite or offshore, say so in the relevant role with the sector and your scope. It shows familiarity with UK ways of working without naming confidential clients.",
      },
      {
        title: "Remove the Indian process details",
        body: "CTC, expected salary, notice period, father's name, declaration and signature all belong to Indian hiring processes. Removing them usually saves close to a page.",
      },
      {
        title: "Plan around your notice period",
        body: "Indian notice periods are often long compared with UK norms. Do not put this on the CV, but be ready to explain your realistic start date clearly in the cover letter and first call, because UK employers plan hiring around it.",
      },
      {
        title: "Check the right route early",
        body: "Read the GOV.UK visa checker and route pages before you apply. Some routes are employer-sponsored and some, like the India Young Professionals Scheme, are ballot-based with their own eligibility, so the right one depends on your age, role and situation.",
      },
      {
        title: "Schedule for UK hours",
        body: "India is four and a half to five and a half hours ahead of the UK depending on the season. Offer interview windows in UK time, and avoid clashing with your current employer's core hours by suggesting UK mornings.",
      },
    ],
    commonMistakes: [
      "Leaving CTC and expected CTC on the CV, which UK employers find unusual and which anchors negotiation badly",
      "Keeping the project-by-project IT services layout that runs to four or five pages",
      "Listing Class 10 and 12 percentages years into a career",
      "Including father's name, date of birth and a signed declaration",
      "Converting CGPA into a guessed UK classification",
      "Keyword-stuffed skills sections copied from job-portal profiles",
    ],
    visaContext:
      "Indian nationals generally need a visa to work in the UK. Employer-led routes include the Skilled Worker visa, which generally requires a job offer from a Home Office licensed sponsor, and the Health and Care Worker visa for eligible health and care roles. The India Young Professionals Scheme is a separate, ballot-based route with its own eligibility. Criteria change, so check GOV.UK and use a regulated immigration adviser for anything complex. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I mention my CTC on a CV for UK jobs?",
        a: "No, do not put your current or expected CTC on a UK CV. UK employers do not expect salary on the CV, and figures in lakhs mean little to them without context. Salary comes up in the application form or conversation, usually against the UK salary range for the role. Use the space for evidence of your impact instead.",
      },
      {
        q: "How do I convert an Indian IT CV into a UK CV?",
        a: "Reorganise it by employer and role rather than by client project, summarise the technology stack once, and write four to six achievements per recent role that show what you built, improved or led. Remove CTC, notice period, the personal profile block and declaration, then cut to two pages. UK readers want your trajectory, not every engagement.",
      },
      {
        q: "Should I convert my CGPA to a UK degree classification?",
        a: "No, state your CGPA as awarded, for example ‘CGPA 8.4/10’, with the degree and institution. Converting it yourself into a First or 2:1 can look like an overclaim. If an employer needs a formal comparison, UK ENIC, the official UK body for international qualifications, can issue a Statement of Comparability.",
      },
      {
        q: "Is the India Young Professionals Scheme a way to work in the UK?",
        a: "Yes, it is a GOV.UK visa route for eligible young Indian nationals, allocated through a ballot and with its own eligibility requirements. It is not employer-sponsored, which changes how you can approach UK employers. Check the current eligibility, ballot dates and conditions on GOV.UK directly, because they can change between rounds.",
      },
    ],
    sources: [
      {
        label: "UK ENIC: Statement of Comparability",
        url: "https://www.enic.org.uk/individuals/statement-of-comparability",
      },
      {
        label: "NMC: Register if you trained outside the UK",
        url: "https://www.nmc.org.uk/registration/joining-the-register/register-nurse-midwife/trained-outside-uk/",
      },
      { label: "GMC: PLAB", url: "https://www.gmc-uk.org/registration-and-licensing/join-our-registers/plab" },
      {
        label: "Engineering Council: Recognition for international engineers in the UK",
        url: "https://www.engc.org.uk/international-recognition/recognition-in-the-uk",
      },
      {
        label: "GOV.UK: India Young Professionals Scheme visa",
        url: "https://www.gov.uk/india-young-professionals-scheme-visa",
      },
      { label: "GOV.UK: Skilled Worker visa", url: "https://www.gov.uk/skilled-worker-visa" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /uk/career-advice : hub intro                                       */
/* ------------------------------------------------------------------ */

const adviceHubIntro =
  "UK hiring has its own habits. The CV is two pages with no photo, the tone is understated, recruitment agencies often read your application before the employer does, and public sector roles are scored against a person specification. These guides cover the conventions that are specific to Britain: the UK CV format, whether a photo belongs on your CV, and how to write the short personal statement that opens it. For universal advice on length, structure and ATS, the global career advice library goes deeper. If you are applying from abroad, start with the international job seekers guide.";

export const ukBundle: CountryBundleFull = {
  country: "uk",
  market,
  adviceHubIntro,
  services,
  articles,
  ijsHub,
  origins,
};
