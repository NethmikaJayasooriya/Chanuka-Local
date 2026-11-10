/**
 * UAE COUNTRY BUNDLE
 * ------------------------------------------------------------------
 * Powers the whole UAE mini-site: the /uae hub, the three localised
 * service pages, three UAE-specific articles, the international job
 * seekers hub and the Sri Lanka and India origin corridors.
 *
 * British English and "CV" throughout. Prices in USD only.
 * Visa and residency content is orientation only and always points to
 * u.ae, MOHRE, ICP or GDRFA Dubai. No testimonials, no invented statistics.
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
/* /uae : country hub                                                  */
/* ------------------------------------------------------------------ */

const market: CountryMarket = {
  slug: "uae",
  name: "United Arab Emirates",
  adjective: "UAE",
  flag: "🇦🇪",
  code: "AE",
  locale: "en-AE",
  quickAnswer:
    "A UAE CV is a two-page document that, unlike a UK or US CV, commonly carries a professional photo and states nationality and visa status near the top, because Gulf employers screen on sponsorship logistics first. Chanuka Jeewantha writes UAE CVs, LinkedIn profiles and cover letters personally, for professionals in Dubai, Abu Dhabi and applicants abroad, from $129 USD.",
  metaTitle: "UAE CV, LinkedIn and Cover Letter Writing Services",
  metaDescription:
    "CVs, LinkedIn profiles and cover letters for Dubai and Abu Dhabi employers and agencies: two pages, a professional photo, clear visa status. Priced in USD.",
  heroHeading: "CV, LinkedIn and Cover Letter Writing for the UAE Job Market",
  heroLead:
    "A UAE CV runs on a different logic to a UK or US document: a professional photo is expected, nationality and visa status sit near the top, and the reader is usually judging, within seconds, whether you can start and how. Get that logic right and your experience gets read on its merits.",
  docType: "CV",
  standardLength: "Two pages for most professionals. Senior technical and executive CVs can extend to three.",
  photoRule:
    "Include one. A recent, professional headshot in business dress is UAE convention, expected by recruitment agencies and most regional employers, though not a legal requirement.",
  spellingStyle: "British English",
  overview:
    "UAE hiring runs at speed and volume. A single advertised role in Dubai or Abu Dhabi can draw hundreds of applications within days, screened first by a recruitment consultant or an in-house talent team working through a job portal or an agency database before a hiring manager sees anything. The UAE also reverses several conventions the UK and Australia insist on: a professional photo is normal, and nationality and visa status are read as practical logistics rather than personal information. For the large South Asian, Filipino, Arab and international workforce that makes up most of the country's private sector, the CV question is less about hiding personal details and more about stating them clearly enough that an employer can judge, in seconds, whether you can start and how.",
  marketRules: [
    {
      label: "Length",
      value:
        "Two pages is standard for most professionals. Senior technical, engineering and executive profiles can run to three pages when project history genuinely needs it.",
      importance: "critical",
    },
    {
      label: "Photo",
      value:
        "A recent, professional headshot in business dress is commonly included and expected by recruitment agencies and many regional employers. It is not a legal requirement, and some multinational corporates hiring through global systems read CVs without one perfectly well, but leaving it off a CV aimed at a UAE or wider Gulf audience is unusual.",
      importance: "recommended",
    },
    {
      label: "Nationality and visa status",
      value:
        "State your nationality and current visa or residency status, such as an employment visa, visit visa, Golden Visa, Green Visa or dependant visa, near the top. Employers and agencies use this to judge how quickly you could start and whether sponsorship is needed.",
      importance: "critical",
    },
    {
      label: "Notice period and availability",
      value:
        "State your notice period and, if you are outside the UAE, how soon you could travel for interview and relocate. Gulf hiring often moves in days, and a CV that answers this gets read first.",
      importance: "recommended",
    },
    {
      label: "Languages and driving licence",
      value:
        "List your language proficiency. English is the working language of UAE business, and Arabic is a genuine advantage for government-adjacent, sales and client-facing roles. Mention whether you hold a valid UAE driving licence when the role involves site visits, client meetings or travel between emirates.",
      importance: "recommended",
    },
    {
      label: "Other personal details",
      value:
        "Date of birth is commonly included but optional, and increasingly left off by candidates who prefer not to state it. Leave out religion, a National ID or Emirates ID number, and any photograph that is not a proper business headshot.",
      importance: "recommended",
    },
    {
      label: "British English and format",
      value:
        "Use British spelling and a clean two-page layout. Recruitment agencies and profiles on Bayt, LinkedIn, GulfTalent and Naukrigulf all draw from the same CV, so consistency across the document and your online profiles matters as much as the CV itself.",
      importance: "recommended",
    },
  ],
  whatRecruitersLookFor: [
    "Nationality, current visa or residency status and how soon you can start, stated near the top",
    "Regional or Gulf experience, with recognisable regional or multinational employers and project names",
    "The exact tools, systems, certifications and scope of a role: budgets, site size, team, client base",
    "Notice period and whether you are already inside the UAE or applying from abroad",
    "English fluency as standard, with Arabic noted as a genuine advantage for client-facing and government-linked roles",
    "Sector-specific registrations where they apply, such as DHA or MOH licensing for healthcare, or RERA registration for real estate",
  ],
  inDemandSectors: [
    "Construction, real estate and infrastructure",
    "Hospitality, tourism and aviation",
    "Banking, financial services and fintech",
    "Healthcare and life sciences",
    "Technology and e-commerce",
    "Logistics, trade and supply chain",
  ],
  keyRoles: [
    "Civil Engineer",
    "Accountant",
    "Project Manager",
    "Sales Manager",
    "Hotel Manager",
    "Nurse",
  ],
  faqs: [
    {
      q: "How long should a CV be for UAE jobs?",
      a: "Two pages is the standard length for a UAE CV, whatever your experience level. Senior engineering, construction and executive profiles can extend to three pages when project history genuinely supports it, but padding a CV to look more senior rarely helps. Recruiters and agencies in Dubai and Abu Dhabi see very high applicant volumes, so a CV that states its case in two clear pages gets read faster than a long one.",
    },
    {
      q: "Should I put a photo on my UAE CV?",
      a: "Yes, a recent, professional headshot in business dress is standard on a UAE CV and expected by most recruitment agencies and regional employers. It is a market convention rather than a legal requirement, so some multinational corporates recruiting through global systems will read a CV without one perfectly well. If you are unsure, include a plain, well-lit headshot; it costs you nothing and matches what most readers expect.",
    },
    {
      q: "Do I need to state my visa status on my CV in the UAE?",
      a: "Yes, state your nationality and current visa or residency status clearly, near your contact details. Whether you already hold an employment, Golden, Green or dependant visa, or would need employer sponsorship, changes how quickly you could start and who can hire you. Leaving it out does not avoid the question, it just means the reader has to guess, and Gulf recruiters usually move on rather than ask.",
    },
    {
      q: "Can you help if I am applying for UAE jobs from Sri Lanka or India?",
      a: "Yes. Converting a CV built for Sri Lanka or India into one a UAE employer reads confidently is a large part of this work: reorganising Indian project-style IT CVs, cutting non-related referees and long declarations, and stating nationality, visa status and notice period the way UAE recruiters expect. Visa questions themselves belong with u.ae, MOHRE, ICP or GDRFA Dubai; the documents are what Chanuka writes.",
    },
    {
      q: "How much does a UAE CV cost and what currency do you charge in?",
      a: "UAE CV writing costs $129, $189 or $279 USD depending on experience: under two years, three to nine years, or ten years and executive. All payments are taken in USD, and your bank or card provider converts at its own rate. Combining any two services saves 20 percent, and all three, CV, LinkedIn and cover letter, save 30 percent.",
    },
    {
      q: "Is a UAE job always tied to an employer visa?",
      a: "No. Most jobs in the UAE are still tied to an employer-sponsored work permit, but it is not the only route. The Golden Visa and Green Visa both allow long-term residency without an employer sponsor, and some free zones offer freelance permits for independent professionals. Check current eligibility on u.ae before assuming a job offer has to come first.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /uae/{service} : localised commercial pages                         */
/* ------------------------------------------------------------------ */

const services: CountryService[] = [
  {
    country: "uae",
    service: "cv-writing",
    primaryKeyword: "CV writing service Dubai",
    secondaryKeywords: [
      "professional CV writer UAE",
      "CV writing service Abu Dhabi",
      "executive CV writer Dubai",
      "CV writer for Gulf jobs",
      "CV for UAE job market",
    ],
    metaTitle: "CV Writing Service Dubai: UAE CV Format",
    metaDescription:
      "CV writing for Dubai and Abu Dhabi employers and agencies: two pages, a professional photo, clear visa status and evidence-led achievements. From $129 USD.",
    eyebrow: "UAE CV writing",
    h1: "CV Writing Service for Dubai and the UAE",
    lead:
      "A UAE CV written personally by Chanuka Jeewantha: two pages, a professional photo, your nationality and visa status stated plainly, and experience written as evidence a Gulf recruiter can act on fast.",
    quickAnswer:
      "This UAE CV writing service builds your CV to Dubai and Abu Dhabi conventions: two pages, a professional headshot, nationality and visa status near the top, notice period stated, and achievement-led bullets rather than duties. Every CV is written personally by Chanuka Jeewantha, delivered in Word and PDF within 5 to 7 days as standard, from $129 USD.",
    keyFacts: [
      { label: "Length", value: "Two pages for most professionals, three for senior technical roles" },
      { label: "Photo", value: "A professional headshot, business dress, included as standard" },
      { label: "Personal details", value: "Nationality and visa status stated; date of birth optional" },
      { label: "Notice period", value: "Stated clearly, because UAE hiring moves fast" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
      { label: "Standard delivery", value: "5 to 7 days, faster options available" },
    ],
    whyDifferent: {
      heading: "Why a UAE CV is not a UK CV with a different address",
      paragraphs: [
        "A UAE CV is read by two very different audiences that both move fast: a recruitment agency consultant matching you against a live brief, often inside a candidate database holding thousands of profiles, and an internal talent team screening a portal like Bayt or LinkedIn against dozens of applicants for the same role. Both expect the practical details up front: nationality, current location, visa status and notice period. A CV built for the UK, stripped of that information because a different market taught you to remove it, reads as incomplete rather than discreet.",
        "The tone differs too. UAE hiring rewards specificity about scope: project value, team size, portfolio, client base, region covered. A management title alone means little across a market where the same job title can span very different levels of responsibility depending on the employer's origin and size. Numbers, named systems and named regional clients or projects do the work that adjectives cannot.",
        "For the large share of applicants who are Sri Lankan, Indian, Filipino, Pakistani or from elsewhere in South Asia, the conversion usually runs the opposite way from a UK one: it is less about removing detail and more about reorganising it. A CV built for an Indian IT services portal, listing every project ever touched, needs consolidating around outcomes. A CV built for a Sri Lankan employer, carrying a long declaration and two non-related referees, needs those specific items removed while the photo and nationality line, unusually, can often stay.",
      ],
    },
    whatYouGet: [
      "A two-page UAE CV (three for senior technical or executive profiles) written from scratch around your target role",
      "Guidance on using a recent, professional headshot correctly, or cropping and formatting one you already have",
      "Nationality, visa status and notice period stated accurately and in the place a UAE recruiter expects to find them",
      "Experience rewritten as achievements, with scope, numbers and named systems or projects where you can evidence them",
      "Regional and international employers explained in one line where a UAE reader would not otherwise place them",
      "A clean layout that agency databases, portal uploads and ATS parse reliably",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Section order", value: "Contact details and photo, profile, key skills, experience, education and certifications, then languages, driving licence and additional information" },
      { label: "Personal details", value: "Name, city or country, phone with country code, email, LinkedIn, nationality, visa status; date of birth optional" },
      { label: "Photo", value: "A recent headshot in business dress, professionally lit, never a casual or cropped social photo" },
      { label: "Dates", value: "Month and year for every role, most recent first" },
      { label: "Languages and licence", value: "English fluency assumed; Arabic and other languages listed with level; UAE driving licence noted when relevant" },
      { label: "References", value: "Not listed on the CV; provided later if an employer asks" },
    ],
    sectors: [
      "Construction, real estate and infrastructure",
      "Hospitality, tourism and aviation",
      "Banking, financial services and fintech",
      "Healthcare and life sciences",
      "Technology and e-commerce",
      "Logistics and supply chain",
    ],
    process: [
      {
        title: "Choose your tier and pay in USD",
        body: "Pick the tier that matches your experience. Payment is in USD, so there is nothing to convert at checkout beyond your bank or card provider's own rate.",
      },
      {
        title: "Complete the brief",
        body: "Upload your current CV and answer a written brief about your target UAE roles, your current location and visa status, and your notice period. Links to two or three job adverts help.",
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
        q: "What makes a CV writing service specific to Dubai and the UAE?",
        a: "A UAE-specific CV service writes to Gulf conventions rather than a generic international template: a professional photo, nationality and visa status stated plainly, notice period included, and a two-page length agencies can scan fast. It also understands how Dubai and Abu Dhabi agencies and portals like Bayt and GulfTalent actually screen, and shapes the CV so it survives that first pass.",
      },
      {
        q: "Is a professional CV writer worth it for UAE jobs?",
        a: "It is worth it when applications are going unanswered despite relevant experience, or when your CV still carries the format of a different market. UAE recruiters move fast and read hundreds of CVs a week, so a document that states nationality, visa status, notice period and scope clearly gets through the first sort far more often than one that leaves the reader to guess.",
      },
      {
        q: "Can you write a CV for construction, engineering or project roles in the UAE?",
        a: "Yes. These CVs are written around project value, scope, site size, team and named developments where you can name them, which is what UAE construction and engineering employers actually screen on. If you hold sector certifications or registrations, such as an engineering council membership, they are placed where a hiring manager expects to see them.",
      },
      {
        q: "Will my CV work with UAE recruitment agencies and Bayt?",
        a: "Yes. Agency consultants and portal databases search by title, skill, nationality and visa status, so the CV uses standard headings, a clean single-column layout and the exact terms your target roles use. That makes it easy to upload to Bayt, LinkedIn or GulfTalent and easy for a consultant to pitch you to a client quickly.",
      },
      {
        q: "Should my UAE CV mention my visa status?",
        a: "Yes, always. State your nationality and current visa or residency status, such as an employment visa, visit visa, Golden Visa or dependant visa, near your contact details. It is one of the first things a UAE recruiter checks, and a CV that answers it plainly moves faster through screening than one that leaves it out.",
      },
      {
        q: "How long does UAE CV writing take?",
        a: "Standard delivery is 5 to 7 days from receiving your completed brief. Fast delivery in 2 to 3 days adds 20 percent, and ultra delivery within 24 hours adds 50 percent. After the draft, one revision round is included, and the final Word and PDF files follow once changes are agreed.",
      },
    ],
  },
  {
    country: "uae",
    service: "linkedin-optimisation",
    primaryKeyword: "LinkedIn profile writing UAE",
    secondaryKeywords: [
      "LinkedIn optimisation Dubai",
      "LinkedIn profile writer UAE",
      "LinkedIn for Gulf recruiters",
      "LinkedIn profile for relocating to Dubai",
    ],
    metaTitle: "LinkedIn Profile Writing Service UAE",
    metaDescription:
      "LinkedIn profile writing for Dubai and the UAE: a headline recruiters search for, clear location and visa status, and an About section that reads credible.",
    eyebrow: "UAE LinkedIn optimisation",
    h1: "LinkedIn Profile Writing for Dubai and the UAE",
    lead:
      "Your LinkedIn profile rewritten for how UAE recruiters and agency consultants actually search: the right job titles, a clear location and visa status, and an About section that reads like a professional, not a sales page.",
    quickAnswer:
      "A UAE LinkedIn profile writing service rewrites your headline, About section, experience and skills so Dubai and Abu Dhabi recruiters find you under the job titles they search and trust what they read. Chanuka Jeewantha writes each profile personally in British English, handles location and visa signalling, and delivers within 5 to 7 days from $129 USD.",
    keyFacts: [
      { label: "Headline", value: "Target job title and specialism first, not a slogan" },
      { label: "About section", value: "First person, British English, evidence over adjectives" },
      { label: "Location and visa", value: "Real location, with UAE relocation and visa status stated where true" },
      { label: "Deliverable", value: "Ready-to-paste text for every section" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
    ],
    whyDifferent: {
      heading: "How UAE recruiters use LinkedIn, and what that means for your profile",
      paragraphs: [
        "Recruitment consultants across Dubai and Abu Dhabi, and in-house talent teams at UAE and multinational employers, run LinkedIn search constantly to build shortlists, often before a role is even advertised on Bayt. They search by job title, skill, location and, frequently, nationality and visa status, because those factors decide how fast a candidate can start. A headline that reads 'Passionate professional' instead of 'Quantity Surveyor, RICS Chartered' simply misses the search that mattered.",
        "Location and visa status work as filters here in a way most markets do not use them. Setting your location to Dubai when you have never worked there misleads recruiters, but so does hiding a genuine relocation plan. The better approach is your real location, a clear line about your target UAE visa or sponsorship situation, and, if you already hold a transferable visa or residency, saying so, because it can move you ahead of candidates who still need full sponsorship.",
        "The profile photo also matters more here than in some Western markets: it should match the CV photo in style, a recent, professional headshot in business dress, since UAE readers expect the two documents to present the same person consistently.",
      ],
    },
    whatYouGet: [
      "A search-focused headline built on the UAE job titles and skills recruiters actually type",
      "An About section in first person and British English, with specific evidence and a clear next step",
      "Experience entries rewritten from your CV, shorter and more conversational than the CV itself",
      "A curated skills list ordered so the most relevant Gulf-market skills show first",
      "Location, visa status and relocation wording that is accurate, honest and searchable",
      "Guidance on Open to Work settings, custom URL and photo consistency with your CV",
      "One revision round on all text",
    ],
    marketConventions: [
      { label: "Spelling", value: "British English: optimisation, organisation, programme" },
      { label: "Headline format", value: "Job title | specialism | sector or region" },
      { label: "Photo", value: "A professional headshot in business dress, matching the CV photo in tone" },
      { label: "Voice", value: "First person in the About section, never third person" },
      { label: "Nationality and visa", value: "Stated where it helps searchability and screening, worded to the individual's situation" },
      { label: "Consistency", value: "Titles, dates and photo match the CV, because recruiters check both" },
    ],
    sectors: [
      "Construction, real estate and infrastructure",
      "Banking, finance and professional services",
      "Hospitality, tourism and aviation",
      "Technology and e-commerce",
      "Sales, marketing and business development",
      "Healthcare professionals relocating to the UAE",
    ],
    process: [
      {
        title: "Choose your tier",
        body: "LinkedIn optimisation uses the same experience tiers as CV writing. Bundling it with a UAE CV saves 20 percent.",
      },
      {
        title: "Share your profile and targets",
        body: "Send your LinkedIn URL, current CV and the UAE roles you want to be found for, plus your location and visa situation.",
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
        q: "Do UAE recruiters really use LinkedIn to find candidates?",
        a: "Yes, LinkedIn is a routine sourcing tool for UAE recruitment agencies and in-house talent teams, alongside Bayt and GulfTalent, especially for professional, technical and finance roles. They search by title, skill, location, nationality and visa status to build shortlists. A profile using the wrong job titles or a vague headline does not appear in those searches, however strong the underlying experience is.",
      },
      {
        q: "Should I state my visa status on LinkedIn as well as my CV?",
        a: "Yes, a short, honest line helps. Recruiters filter by visa status alongside skills, so mentioning that you hold a transferable visa, are on a visit visa, or are applying from abroad and open to relocation, gives them the practical information they screen on. Vague profiles that hide this get passed over for candidates who state their situation clearly.",
      },
      {
        q: "Should my LinkedIn profile use British or American spelling?",
        a: "Use British spelling if the UAE and wider Gulf are your main target market, since it is the norm across regional business writing and matches your UAE CV. Recruiters notice a mismatch between 'optimization' on LinkedIn and British spelling on the CV. Keep job titles and product names exactly as officially written, even where they use American spelling.",
      },
      {
        q: "Is LinkedIn optimisation worth it if I already have a good CV?",
        a: "It is worth it when recruiters are not approaching you, or when your CV and LinkedIn profile tell inconsistent stories about your titles, dates or scope. The CV works when you send it; LinkedIn works continuously through search, which matters in a market where agencies proactively source candidates for roles that never get publicly advertised.",
      },
      {
        q: "What does LinkedIn optimisation cost for the UAE market?",
        a: "LinkedIn optimisation costs $129, $189 or $279 USD depending on experience level, matching the CV writing tiers. Adding it to a UAE CV saves 20 percent on both, and taking CV, LinkedIn and cover letter together saves 30 percent. Payment is in USD and delivery is 5 to 7 days as standard.",
      },
    ],
  },
  {
    country: "uae",
    service: "cover-letter-writing",
    primaryKeyword: "cover letter writing service UAE",
    secondaryKeywords: [
      "UAE cover letter writer",
      "cover letter for Dubai jobs from abroad",
      "Gulf cover letter format",
      "cover letter for UAE visa sponsorship",
    ],
    metaTitle: "Cover Letter Writing Service UAE",
    metaDescription:
      "UAE cover letters written to Gulf hiring conventions: one page, a direct case for the role, and clear notice period and visa framing. From $79 USD, by email.",
    eyebrow: "UAE cover letter writing",
    h1: "Cover Letter Writing for Dubai and the UAE",
    lead:
      "A one-page UAE cover letter that makes the case for one specific role in clear, confident British English, and states your visa status, notice period and availability before the reader has to ask.",
    quickAnswer:
      "A UAE cover letter writing service produces a one-page letter, usually three or four short paragraphs, that links your strongest evidence to one role's requirements and states your visa status and notice period plainly. Chanuka Jeewantha writes each letter personally, including how to frame relocation or sponsorship, with prices from $79 USD and standard delivery in 5 to 7 days.",
    keyFacts: [
      { label: "Length", value: "One page, three to four short paragraphs" },
      { label: "Salutation", value: "A named person where possible, otherwise Dear Hiring Manager" },
      { label: "Notice period", value: "Stated plainly, since Gulf hiring moves fast" },
      { label: "Price", value: "$79, $119 or $159 USD by experience" },
      { label: "Bundle", value: "Save 20 percent with a UAE CV" },
    ],
    whyDifferent: {
      heading: "What a UAE cover letter has to do that a generic one does not",
      paragraphs: [
        "UAE cover letters carry more practical weight than a UK equivalent, because they often sit alongside a visa and availability question a UK letter never has to answer. A strong letter names the role, gives two or three pieces of specific evidence, and states clearly whether you already have the right to work in the UAE or would need sponsorship, and how soon you could start.",
        "Recruitment agencies dominate a large share of UAE hiring, and many roles are filled through direct portal applications on Bayt or LinkedIn rather than a formal letter, so a cover letter matters most for direct corporate applications, executive roles and government-linked or semi-government employers who expect one. Where it is asked for, a generic letter stands out for the wrong reasons in a market that reads hundreds of applications a week.",
        "For overseas applicants the letter is also the natural place to handle relocation and timing plainly: current location, notice period, and how quickly you could travel for interview or relocate if offered the role, stated as a plan rather than a complication.",
      ],
    },
    whatYouGet: [
      "A one-page letter written for a specific UAE role and employer",
      "An opening that names the role and gives the reader a reason to keep going",
      "Two or three paragraphs linking your evidence to the advert's main requirements",
      "Visa status, notice period and relocation timing framed factually where relevant",
      "British English throughout, with a tone confident but not overstated",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Opening", value: "Name the role and where you saw it in the first sentence or two" },
      { label: "Evidence", value: "Two or three specific examples matched to the role's main requirements" },
      { label: "Visa and notice period", value: "Stated briefly and factually, usually near the close" },
      { label: "Tone", value: "Confident and direct, without superlatives" },
      { label: "Agencies", value: "Often not required when applying through a recruiter; a short covering email usually does the job" },
      { label: "Government-linked employers", value: "Some semi-government and large corporates expect a formal letter alongside the CV" },
    ],
    sectors: [
      "Corporate roles applied for directly with multinationals",
      "Government-linked and semi-government employers",
      "Executive and senior management roles",
      "Construction, real estate and infrastructure",
      "Banking and financial services",
      "Overseas applicants explaining relocation and visa status",
    ],
    process: [
      {
        title: "Choose your tier and share the role",
        body: "Pick your experience tier and send the job advert with your current CV.",
      },
      {
        title: "Answer a short brief",
        body: "Tell Chanuka why this role and employer, your notice period, and your current visa or relocation situation.",
      },
      {
        title: "Receive, revise, send",
        body: "You get a draft letter, one revision round and final Word and PDF files, ready to adapt for similar roles.",
      },
    ],
    faqs: [
      {
        q: "Do UAE employers still expect cover letters?",
        a: "Many direct applications, executive roles and government-linked or semi-government employers still expect one. Recruitment agencies often need only a short covering email rather than a formal letter, since most of the case is made through the CV and a phone screen. When a letter is requested, a generic one is a weak signal in a market that reads hundreds of applications a week.",
      },
      {
        q: "How long should a UAE cover letter be?",
        a: "A UAE cover letter should fit on one page, usually three or four short paragraphs and roughly 250 to 400 words. Employers and agencies want the role, your fit and your availability, not a second CV. If an online application form sets a word limit, write to that limit instead of your usual letter length.",
      },
      {
        q: "Should my cover letter mention my visa or sponsorship situation?",
        a: "Yes, briefly and near the end. State whether you already hold the right to work in the UAE, would need employer sponsorship, or hold a visa that allows independent job search, and how soon you could start. It answers a practical question the employer has to resolve anyway, and hiding it rarely helps, since it surfaces at the offer stage regardless.",
      },
      {
        q: "Is a cover letter needed when applying through a recruitment agency?",
        a: "Usually not a full formal letter. A short email introducing yourself, the role you are applying for, your notice period and visa status is normally enough when a consultant is putting your CV forward. Save the full cover letter for direct applications to employers, executive roles, or adverts that specifically ask for one.",
      },
      {
        q: "Can you write a cover letter that explains relocating from Sri Lanka or India?",
        a: "Yes. The letter states your current location, your notice period with your existing employer, and how soon you could travel for interview or relocate if offered the role, framed as a practical plan rather than an obstacle. It is written alongside your CV so both documents present the same timeline consistently.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /uae/career-advice/{slug} : UAE-specific articles                    */
/* ------------------------------------------------------------------ */

const articles: CountryArticle[] = [
  {
    country: "uae",
    slug: "uae-cv-format",
    title: "UAE CV format: the layout Dubai and Abu Dhabi employers expect",
    metaTitle: "UAE CV Format: Sections, Photo and Layout",
    metaDescription:
      "The UAE CV format section by section: the photo, the personal details line, project-led experience, and the file choices agencies and portals expect.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "A UAE CV follows a shape recruiters in Dubai and Abu Dhabi read at speed. Here is that shape, section by section, and where it deliberately breaks from UK or US convention.",
    quickAnswer:
      "The standard UAE CV format is two pages: a header with a professional photo, nationality and visa status, a short personal profile, key skills, work experience with month and year dates, education and certifications, then languages, driving licence and notice period. It uses British English and, unlike a UK CV, commonly includes a photo and personal logistics an employer needs to plan around.",
    intro:
      "Recruiters in Dubai and Abu Dhabi read enormous volumes of CVs, often hundreds for a single advertised role, arriving through a mix of Bayt, LinkedIn, GulfTalent, Naukrigulf and recruitment agency databases. They are not looking for a creative layout. They are looking for the practical information they need, in the place they expect it, so they can sort quickly between candidates who can start soon and those who cannot. That makes the UAE CV format less a matter of taste than a set of conventions, several of which run opposite to what a UK or US guide would tell you. This article goes through the format section by section. For the specific reasoning behind the photo and personal details, see the separate article on that topic; for converting a CV from abroad, see the guide to applying for jobs in Dubai from abroad.",
    sections: [
      {
        heading: "The standard order of a UAE CV",
        paragraphs: [
          "Most UAE CVs that get read follow a consistent order, and departing from it without a good reason slows the reader down rather than making you stand out.",
        ],
        bullets: [
          "Header: name, photo, contact details, nationality, current location and visa status",
          "Personal profile: three to five lines on your level, specialism and what you are targeting",
          "Key skills: a short, grouped list of specific skills and tools",
          "Work experience: most recent role first, with dates, employer, location and achievements",
          "Education and professional certifications: degree, institution, dates, plus certifications such as PMP, CFA or engineering registration",
          "Languages, driving licence and notice period: a short additional information block",
        ],
      },
      {
        heading: "The header: photo, contact details and logistics",
        paragraphs: [
          "The header is where a UAE CV diverges most sharply from British or American convention. Alongside your name and contact line, it carries a recent, professional headshot in business dress, positioned top left or top right depending on the template. It also states your nationality, your current location or emirate, and your visa or residency status, such as an employment visa with a named sponsor, a visit visa, a Golden Visa, Green Visa or a dependant visa.",
          "This is not personal disclosure for its own sake. A UAE employer or agency consultant uses this information to work out, in the first few seconds, whether hiring you involves sponsoring a new work permit, transferring an existing one, or nothing at all if you already hold independent residency. Leaving it out does not make you harder to discriminate against here; it just means the reader has to email and ask, and in a high-volume market many will simply move to the next CV instead.",
          "A UAE phone number, if you have one, goes in the header alongside your home-country number if you are still abroad. If you live outside the UAE, state your city and country plainly, such as 'Colombo, Sri Lanka, open to relocation', so the reader is not left guessing whether you are already in the country.",
        ],
      },
      {
        heading: "Personal profile and key skills",
        paragraphs: [
          "The profile is three to five lines stating your level, specialism and the sector or role you are targeting, similar in length to a UK CV's personal statement but pitched toward the scope and regional experience UAE readers look for first. 'Civil Engineer with nine years delivering commercial and residential developments across the GCC, currently managing a 40 million dirham fit-out programme in Dubai' tells a Gulf recruiter far more than a line about being hard-working and dedicated.",
          "A key skills section works well directly underneath, grouped by type, such as technical systems, certifications and languages. Keep it specific: a UAE reader wants to see AutoCAD, Primavera P6 or SAP named directly rather than implied through a paragraph of prose.",
        ],
      },
      {
        heading: "Work experience: scope, projects and outcomes",
        paragraphs: [
          "Each role opens with job title, employer, location and dates, written as month and year, most recent first. Under the title, a short line of context helps where the employer is not internationally known: sector, size, and whether the business operates across the Gulf or beyond, since a reader in Dubai will not automatically place a regional bank or a mid-size contractor from another market.",
          "Bullets should lead with scope and outcomes rather than duties: budget size, project value, team managed, portfolio handled, number of properties, transaction volume, or client base. In construction, real estate and engineering CVs specifically, naming projects, developments or clients (where confidentiality allows) carries real weight, because UAE hiring managers often recognise landmark developments and want to see a candidate's fingerprints on recognisable work.",
          "Recent roles typically carry four to six bullets. Roles from more than ten years ago can shrink to one or two lines, or move into a brief earlier-career summary, keeping the two-page limit intact.",
        ],
      },
      {
        heading: "Education, certifications and professional registration",
        paragraphs: [
          "List your degree with institution, country and classification or grade as awarded. For degrees earned outside the UAE, do not convert the grade yourself; state it as your home institution issued it. Where a role requires it, such as some healthcare, education, legal and engineering positions, mention any UAE equivalency or attestation status, since employers in regulated fields will ask about it regardless.",
          "Professional certifications carry real weight in the UAE and deserve their own line or short section: PMP for project managers, CFA or ACCA for finance roles, RICS for surveyors, or a relevant engineering council membership. State the certifying body in full once, your status, and the year, exactly as you would for a UK CV's professional memberships.",
        ],
      },
      {
        heading: "Languages, driving licence, notice period and file format",
        paragraphs: [
          "Close the CV with a short block covering languages beyond English, whether you hold a valid UAE driving licence (relevant for roles involving site visits, client meetings or multi-emirate travel), and your notice period. Stating notice period plainly, such as 'Immediately available' or 'One month notice period with current employer', answers one of the first questions a UAE recruiter has.",
          "Send the CV as a text-based PDF or Word document, whichever the advert or portal specifies; recruitment agencies frequently prefer Word so they can reformat onto their own branded template before sending it to a client. Keep the layout to a single, clean column with standard headings, since agency databases and portal uploads parse simple layouts far more reliably than heavily designed templates with text boxes around the photo.",
        ],
      },
    ],
    takeaways: [
      "Keep to two pages for most roles, three for senior technical or executive profiles.",
      "Include a professional photo and state nationality, location and visa status in the header.",
      "Write experience as scope and outcomes: budgets, team size, projects, portfolio, named clients where possible.",
      "State professional certifications and registrations with the certifying body and year.",
      "Close with languages, UAE driving licence status and notice period, and send as a simple, single-column Word or PDF file.",
    ],
    faqs: [
      {
        q: "What is the correct CV format for the UAE?",
        a: "The correct UAE CV format is two pages with a header carrying a professional photo, nationality, location and visa status, followed by a personal profile, key skills, work experience with month and year dates, education and certifications, and a closing block of languages, driving licence and notice period. It uses British English and, unlike a UK CV, generally includes both a photo and clear personal logistics.",
      },
      {
        q: "Do I need a UAE phone number on my CV?",
        a: "Not necessarily. If you already have a UAE mobile number, include it alongside your home-country number. If you are applying from abroad, your home-country number with the international code is fine; state your city and country plainly and add a line about your relocation timing so the reader is not left guessing whether you are already in the UAE.",
      },
      {
        q: "Should I list every certification I have ever earned?",
        a: "No, list the certifications relevant to your target role and sector, such as PMP, CFA, ACCA, RICS or an engineering registration, with the certifying body and year. A long list of unrelated courses and short workshops dilutes the ones that actually matter to a UAE employer screening for specific, recognised credentials.",
      },
      {
        q: "Is Word or PDF better for a UAE CV?",
        a: "Follow the advert or portal first. Many UAE recruitment agencies prefer Word because they reformat CVs onto their own branded template before sending them to a client, while direct applications often accept either. A simple, single-column document without text boxes or heavy graphics parses reliably in both formats.",
      },
    ],
    sources: [
      {
        label: "MOHRE: Ministry of Human Resources and Emiratisation",
        url: "https://www.mohre.gov.ae",
      },
    ],
    relatedLinks: [
      { href: "/uae/career-advice/photo-and-personal-details-on-a-uae-cv", label: "Photo and personal details on a UAE CV" },
      { href: "/uae/career-advice/applying-for-jobs-in-dubai-from-abroad", label: "Applying for jobs in Dubai from abroad" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/career-advice/ats-friendly-cv-format", label: "ATS-friendly CV format" },
      { href: "/uae/cv-writing", label: "UAE CV writing service" },
    ],
  },
  {
    country: "uae",
    slug: "photo-and-personal-details-on-a-uae-cv",
    title: "Photo and personal details on a UAE CV: what to include",
    metaTitle: "Photo and Personal Details on a UAE CV",
    metaDescription:
      "What actually belongs on a UAE CV: the photo, nationality, visa status and notice period, and the personal details other markets expect that the UAE does not.",
    category: "CV writing",
    readMinutes: 6,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "The UAE asks for a photo and personal logistics that a UK CV deliberately omits, and drops several details that a South Asian or Gulf-neighbour CV traditionally carries. Here is exactly where the line sits.",
    quickAnswer:
      "A UAE CV should include a recent, professional photo, your nationality, current location and visa status, and your notice period. Date of birth is optional. Leave out religion, a National ID or Emirates ID number, non-related referees and a signed declaration. The mix differs from both UK CVs, which omit the photo entirely, and some South Asian CVs, which include more personal detail than a UAE reader needs.",
    intro:
      "If your career started in the UK, you have likely been told never to put a photo on a CV. If it started in Sri Lanka or India, you may be used to a CV carrying a photo, a full personal details block, referees and a signed declaration. Neither habit maps cleanly onto the UAE. The Gulf convention sits in its own place: a photo is expected, but a UAE CV is not the maximalist personal-details document some South Asian formats produce either. This article sets out exactly what belongs, what is optional, and what to remove, whichever direction you are converting from.",
    sections: [
      {
        heading: "Why a photo is expected, and where that convention comes from",
        paragraphs: [
          "There is no UAE law requiring a photo on a CV, and no rule against a photo-free one either. The convention is cultural and practical rather than legal: recruitment across the Gulf has long included a photo as standard, partly because a large share of hiring flows through agencies and portals that display a candidate's photo alongside their listing, and partly because many client-facing, hospitality, aviation and sales roles genuinely consider presentation part of the job.",
          "For roles where appearance has no bearing on the work, such as most technical, finance and back-office positions, the photo still functions mainly as a completeness signal. A CV without one can look unfinished to a reader used to seeing one on every profile that crosses their desk, in the same way an empty LinkedIn photo looks incomplete to a UK recruiter. It is worth including for that reason alone, even where it carries no practical weight.",
        ],
      },
      {
        heading: "What kind of photo actually works",
        paragraphs: [
          "The expectation is a recent, plain, well-lit headshot in business dress against a neutral background, similar to a passport or visa photo but less formal in expression. It is not a cropped social media picture, a group photo, or an image with a busy or branded background. Poor-quality or overly casual photos do more harm than including no photo at all, so if you do not have a suitable one, a simple photo taken against a plain wall in good light is enough; there is no need for a professional studio session.",
        ],
      },
      {
        heading: "Nationality, location and visa status: state them clearly",
        paragraphs: [
          "State your nationality, your current city or country, and your visa or residency status near the top of the CV, close to your contact details. If you already hold a valid UAE employment visa, visit visa, Golden Visa, Green Visa or dependant visa, name it. If you are applying from abroad and would need sponsorship, say so plainly rather than leaving the reader to work it out.",
          "This is the single detail overseas applicants most often get wrong, usually by omitting it out of habit from a UK-style CV. In the UAE it is not optional information you are protecting the reader from; it is the fact that determines whether an employer can move forward with you at all, and how quickly.",
        ],
        bullets: [
          "Nationality: state it plainly, it is not treated as sensitive information here",
          "Current location: city and country, or emirate if you are already in the UAE",
          "Visa or residency status: named specifically, not left vague",
          "Notice period: how soon you could start, or how soon you could travel for interview",
        ],
      },
      {
        heading: "What is optional: date of birth and marital status",
        paragraphs: [
          "Date of birth is commonly included on Gulf CVs but is genuinely optional, and an increasing number of candidates, particularly those with UK or international corporate experience, leave it off. Neither choice is wrong; if you include it, keep it to a single line rather than a full age calculation. Marital status appears on some Gulf CVs, mainly because it is relevant to family or dependant visa planning, but it adds nothing to most applications and can reasonably be left out.",
          "If your CV was built for a market where these fields are standard and detailed, such as some South Asian formats that list marital status, spouse's name and number of children, trim this down to at most one optional line rather than a block.",
        ],
      },
      {
        heading: "What to leave out entirely",
        paragraphs: [
          "Several details that appear on CVs from some markets have no place on a UAE CV and should come out regardless of which market you are converting from.",
        ],
        bullets: [
          "Religion: never included; it plays no role in UAE private-sector hiring decisions and does not belong on the document",
          "National ID, passport or Emirates ID numbers: a security risk on a document that circulates through agencies and inboxes; these are checked later, directly, when required",
          "Non-related referees with full contact details: not expected on the CV itself; referees are provided later if requested",
          "A signed declaration that the information is true: not a UAE convention, and it adds nothing a UAE employer needs from a CV",
          "Father's or spouse's name: a convention on some South Asian CVs with no UAE equivalent",
        ],
      },
      {
        heading: "One CV, two very different starting points",
        paragraphs: [
          "If you are converting a UK CV, the main change is addition: bring the photo back, and add nationality, visa status and notice period where a UK CV deliberately left them out. If you are converting a Sri Lankan or Indian CV, the change is closer to subtraction: keep the photo and nationality line, which can usually stay, but remove the ID numbers, the referees, the declaration and any school-level detail that has no bearing on a professional application in the UAE.",
          "Either way, the test is the same. Include what a UAE recruiter needs to judge fit and logistics quickly: photo, nationality, location, visa status, notice period. Leave out what serves no practical purpose here, whichever market taught you to include it.",
        ],
      },
    ],
    takeaways: [
      "Include a recent, professional headshot; it is UAE convention even for roles where appearance is irrelevant to the work.",
      "State nationality, current location, visa status and notice period clearly near the top.",
      "Date of birth and marital status are optional, not required.",
      "Leave out religion, ID numbers, non-related referees and a signed declaration entirely.",
      "Adjust in the direction your original CV needs: UK CVs generally add detail, some South Asian CVs generally remove it.",
    ],
    faqs: [
      {
        q: "Is it compulsory to include a photo on a UAE CV?",
        a: "No, it is not a legal requirement, but it is strong convention. Most recruitment agencies and regional employers expect a photo, and its absence can read as an incomplete CV rather than a deliberate choice. Some multinational corporates recruiting through global systems will read a photo-free CV without issue, but including a plain, professional headshot is the safer default for the UAE market.",
      },
      {
        q: "Should I state my religion or marital status on a UAE CV?",
        a: "Leave religion off entirely; it has no place on a UAE CV and plays no role in private-sector hiring. Marital status is optional and mainly relevant if you are also discussing a dependant visa; most professional UAE CVs leave it out, and doing so is perfectly normal.",
      },
      {
        q: "Do I need to include my Emirates ID or passport number?",
        a: "No, never include a National ID, Emirates ID or passport number on your CV. It is a security risk on a document that gets forwarded between agencies and inboxes, and no UAE employer expects it at the application stage. Identity documents are checked later, directly, as part of the formal hiring and visa process.",
      },
      {
        q: "I have a UK CV with no photo. What do I add for the UAE?",
        a: "Add a recent, professional headshot, your nationality, your current location, your visa or sponsorship status, and your notice period. These are the details a UK CV is trained to omit and a UAE recruiter expects to see immediately, since they determine how quickly an employer could actually hire you.",
      },
    ],
    sources: [
      {
        label: "MOHRE: Ministry of Human Resources and Emiratisation",
        url: "https://www.mohre.gov.ae",
      },
    ],
    relatedLinks: [
      { href: "/uae/career-advice/uae-cv-format", label: "UAE CV format" },
      { href: "/career-advice/cv-for-a-new-market", label: "Adapting a CV for a new market" },
      { href: "/uae/international-job-seekers", label: "Applying for UAE jobs from abroad" },
      { href: "/cv-samples/international-cv", label: "International CV sample" },
      { href: "/uae/cv-writing", label: "UAE CV writing service" },
    ],
  },
  {
    country: "uae",
    slug: "applying-for-jobs-in-dubai-from-abroad",
    title: "Applying for jobs in Dubai from abroad: a practical guide",
    metaTitle: "Applying for Jobs in Dubai From Abroad",
    metaDescription:
      "How to apply for Dubai and UAE jobs from overseas: job portals, agencies, remote interviews, avoiding recruitment scams, and what changes after an offer.",
    category: "International careers",
    readMinutes: 8,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Applying for a Dubai job from Colombo, Chennai or Manila is a routine, well-worn process, but it has its own sequence and its own scams. Here is how it actually runs, step by step.",
    quickAnswer:
      "To apply for jobs in Dubai from abroad, build a UAE-format CV and LinkedIn profile, search Bayt, LinkedIn, GulfTalent and Naukrigulf alongside licensed agencies, and state your visa status and notice period plainly. Interviews are usually by video; only later stages need travel. Never pay a recruiter for a job offer, and verify agencies through MOHRE. This is general orientation, not immigration advice; confirm current visa routes on u.ae.",
    intro:
      "Dubai and the wider UAE hire internationally at a scale few other markets match, and applying from Sri Lanka, India or elsewhere while still employed at home is entirely normal practice, not an edge case. It is also a process with well-documented scams targeting exactly this group of applicants: people applying from a distance, eager to move, and less able to verify an employer or agency in person. This guide covers the practical sequence, from search to offer, and the specific points where applicants from abroad most often lose money or time.",
    sections: [
      {
        heading: "Work out which route you are actually on",
        paragraphs: [
          "Most people applying for a UAE job from abroad are pursuing an employer-sponsored work visa, where a UAE company hires you, applies for your work permit and residency, and becomes your sponsor. This remains the most common route for a first move to the UAE and is what most job adverts and agency roles assume.",
          "It is not the only route. The Golden Visa offers long-term residency, without an employer sponsor, to eligible investors, specialised talent and some skilled professionals. The Green Visa similarly allows skilled employees, freelancers and business owners to hold residency independent of a single employer. Free zones such as those in Dubai also issue freelance permits for independent professionals in specific fields. None of these change how you search for work, but they change what you need from an employer, and it is worth knowing which category you would realistically fall into before you start applying. Check current eligibility for each route directly on u.ae rather than relying on a recruiter's description of it.",
        ],
      },
      {
        heading: "Build the CV and LinkedIn profile first",
        paragraphs: [
          "Before searching, convert your CV to UAE format: two pages, a professional photo, your nationality, current location and visa status stated plainly, and your notice period included. Update LinkedIn to match, with the same titles, dates and photo, since agencies and employers routinely check both. The separate guides to UAE CV format and to photo and personal details on a UAE CV cover this in full; skipping this step and sending a CV built for a different market is the single most common reason strong candidates get overlooked.",
        ],
      },
      {
        heading: "Search across portals, agencies and direct applications",
        paragraphs: [
          "Bayt is the largest general job portal across the Gulf and a reasonable starting point for most sectors. LinkedIn is heavily used by both in-house recruiters and agency consultants for professional and technical roles, and a complete, keyword-matched profile matters as much here as the CV itself. GulfTalent skews toward mid-to-senior professional roles, and Naukrigulf is widely used by South Asian applicants specifically, with strong coverage of IT, engineering and finance roles.",
          "Recruitment agencies fill a large share of UAE professional hiring, and approaching a handful that specialise in your sector directly, alongside applying to portal listings, is worth the effort. Ask any agency plainly which employers they represent, whether the specific roles they are discussing are live, and whether the employer sponsors. A reputable agency answers all three without hesitation.",
        ],
      },
      {
        heading: "Interviews, references and remote screening",
        paragraphs: [
          "Early interviews are almost always by video call, so confirm times in UAE time (GST, four hours ahead of UTC), test your connection beforehand, and treat a video interview with the same preparation as an in-person one. Employers typically run one to three rounds before an offer, sometimes including a technical assessment for engineering, finance or IT roles.",
          "References are usually checked after a verbal or written offer rather than before, similar to UK practice. Keep two professional referees informed that they may be contacted, and make sure their titles and your reporting relationship match what your CV states.",
        ],
      },
      {
        heading: "Recruitment scams: what to watch for and never do",
        paragraphs: [
          "The single most important rule for applicants abroad is this: never pay a recruiter, agent or 'visa processing' contact for a job offer, an interview, or a promise of employment. Legitimate UAE employers and licensed agencies do not charge candidates fees to be placed in a role. Requests for upfront payment, whether framed as a processing fee, a deposit, or a fee to 'secure' a visa, are the clearest warning sign of a scam targeting overseas applicants.",
          "Before working with any agency, verify that it is licensed. In the UAE, MOHRE regulates and licenses employment and recruitment agencies; ask the agency for its licence details and, where your home country's own authority applies, such as Sri Lanka's SLBFE or India's Ministry of External Affairs recruiting-agent register, check that the same intermediary is registered there too if it is also operating as an overseas recruitment agent from your home country. A genuine offer letter names the actual employer and role, is not vague about salary or start date, and does not pressure you to pay anything before you have signed a contract.",
        ],
      },
      {
        heading: "Degree attestation and qualification checks",
        paragraphs: [
          "Some roles and visa categories require your degree certificate to be attested or formally recognised before you start work, particularly in regulated fields such as healthcare, education, law and engineering. The UAE's Ministry of Education runs a recognition system for foreign university certificates, and the process typically involves verifying the degree with the ministry's trusted partners before applying for recognition. Requirements and the exact process can change, so check the current system on u.ae or with your specific regulator rather than relying on a generic guide, and start the process early since it can take real time to complete.",
        ],
      },
      {
        heading: "What happens once you have an offer",
        paragraphs: [
          "After accepting an offer, your employer typically sponsors your entry permit and residency visa, and you will generally need to complete a medical fitness test and biometric enrolment for your Emirates ID inside the UAE. Timelines vary by role, emirate and free zone versus mainland employment, so treat any specific timeline an agency quotes as indicative rather than guaranteed, and confirm the current process with your employer's HR team or on u.ae.",
        ],
      },
    ],
    takeaways: [
      "Understand your likely route: employer-sponsored is most common, but Golden Visa, Green Visa and freelance permits exist outside it.",
      "Convert your CV and LinkedIn to UAE format before you start applying, not after.",
      "Search Bayt, LinkedIn, GulfTalent and Naukrigulf, and approach specialist agencies directly.",
      "Never pay a recruiter for a job offer; verify agencies through MOHRE and, where relevant, your home country's overseas employment authority.",
      "Start any degree attestation or recognition process early, since regulated roles often require it before you can begin work.",
    ],
    faqs: [
      {
        q: "Can I apply for Dubai jobs while still working in Sri Lanka or India?",
        a: "Yes, this is the normal way most professionals move to the UAE. Interviews are almost always conducted by video in the early stages, so you rarely need to travel before an offer is close. Keep your notice period and current location stated clearly on your CV so employers can plan around it realistically.",
      },
      {
        q: "Is it safe to pay a recruitment agent a fee to get a UAE job?",
        a: "No, do not pay any agent, recruiter or 'visa processing' contact for a job offer, interview or placement promise. Legitimate UAE employers and licensed agencies do not charge candidates for this. Requests for upfront payment are one of the clearest signs of a scam targeting overseas applicants, and you should walk away and verify the agency through MOHRE instead.",
      },
      {
        q: "How do I check if a UAE recruitment agency is legitimate?",
        a: "Ask the agency for its licence details, since MOHRE regulates and licenses employment agencies operating in the UAE. If the agency also operates as an overseas recruitment agent from your home country, check it against your own country's register too, such as Sri Lanka's SLBFE licensed agency list or India's Ministry of External Affairs recruiting-agent register.",
      },
      {
        q: "Do I need a job offer before I can move to the UAE?",
        a: "Not necessarily. Most people do move on an employer-sponsored work visa arranged after accepting a job offer, but routes such as the Golden Visa, Green Visa and certain free-zone freelance permits allow residency without a single sponsoring employer for those who qualify. Check current eligibility for each on u.ae, since criteria and categories can change.",
      },
      {
        q: "How long does it take to get a job in Dubai from abroad?",
        a: "It varies widely by sector, seniority and how targeted your search is, and there is no fixed timeline worth quoting as typical. A realistic approach combines portal applications, direct outreach to specialist agencies and a UAE-ready CV and LinkedIn profile, since the process moves faster once your documents are already in the format a UAE recruiter expects.",
      },
    ],
    sources: [
      { label: "U.AE: Golden visa", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/golden-visa" },
      { label: "U.AE: Green visa", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Investor-visa/Green-visa" },
      { label: "U.AE: Recognition system for university certificates", url: "https://u.ae/en/information-and-services/education/higher-education/recognition-system-for-university-certificates" },
      { label: "MOHRE: Ministry of Human Resources and Emiratisation", url: "https://www.mohre.gov.ae" },
      { label: "SLBFE: Licensed foreign employment agencies in Sri Lanka", url: "https://www.slbfe.lk/licensed-foreign-employment-agencies-in-sri-lanka/" },
      { label: "MEA: Registered Recruiting Agents, Government of India", url: "https://www.mea.gov.in/ras" },
    ],
    relatedLinks: [
      { href: "/uae/international-job-seekers", label: "Applying for UAE jobs from abroad" },
      { href: "/uae/international-job-seekers/from-sri-lanka", label: "Applying for UAE jobs from Sri Lanka" },
      { href: "/uae/international-job-seekers/from-india", label: "Applying for UAE jobs from India" },
      { href: "/uae/career-advice/uae-cv-format", label: "UAE CV format" },
      { href: "/uae/cv-writing", label: "UAE CV writing service" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /uae/international-job-seekers : destination hub                    */
/* ------------------------------------------------------------------ */

const ijsHub: IjsHub = {
  country: "uae",
  metaTitle: "Applying for UAE Jobs From Abroad: CV Guide",
  metaDescription:
    "How to apply for UAE jobs from overseas: the UAE CV format, visa routes including Golden and Green Visa, agencies, portals and mistakes to avoid.",
  h1: "Applying for UAE Jobs From Abroad",
  lead:
    "A CV built for London, Toronto or Colombo needs real adjustment before it lands well in Dubai or Abu Dhabi. The photo goes on, the personal logistics come to the front, and the reader is judging speed to start as much as capability.",
  quickAnswer:
    "To apply for UAE jobs from abroad, build your CV and LinkedIn to UAE conventions (two pages, professional photo, nationality and visa status stated, notice period included), search Bayt, LinkedIn, GulfTalent and Naukrigulf alongside licensed agencies, and confirm your likely visa route on u.ae. Most roles are employer-sponsored, but the Golden Visa, Green Visa and some free-zone freelance permits allow residency without a single sponsoring employer.",
  overview:
    "Most international applicants who struggle to get traction in the UAE are not short of relevant experience. They are sending a CV shaped by a different market's rules into a process where an agency consultant or an in-house recruiter, working through very high applicant volumes, is deciding quickly who looks ready to move. A missing photo, a vague or absent visa line, no stated notice period, or a four-page CV with none of the scope and numbers a Gulf reader wants, all cost you time you do not need to lose. This page covers the CV conventions, the practical steps to apply from outside the UAE, the visa picture in outline, and where to check the details officially.",
  cvConventions: [
    { label: "Length", value: "Two pages for most professionals, three for senior technical or executive profiles." },
    { label: "Photo", value: "A recent, professional headshot in business dress is standard, unlike a UK or Canadian CV." },
    { label: "Personal details", value: "Nationality, current location and visa status stated near the top. Date of birth optional." },
    { label: "Opening", value: "A three to five line personal profile naming your specialism, scope and target role." },
    { label: "Experience", value: "Reverse chronological, month and year dates, achievements with scope, numbers and named projects." },
    { label: "Notice period", value: "Stated plainly, because UAE hiring often moves in days rather than weeks." },
    { label: "Spelling", value: "British English throughout. 'CV', not 'resume'." },
  ],
  whatChanges: [
    "Add a professional photo and state nationality, location and visa status, if your CV came from a market that omits them",
    "Cut a long CV to two pages by shrinking roles older than about ten years and removing generic duties",
    "Replace an objective statement with a personal profile that states your level, evidence and target role",
    "Add one line of context under unfamiliar employers, and name projects or clients where confidentiality allows",
    "State your notice period and, if applicable, how soon you could travel for interview or relocate",
    "Remove non-related referees, ID numbers, religion and any signed declaration",
    "Switch to British spelling and a clean, agency-friendly single-column layout",
  ],
  applyingFromAbroad: [
    {
      title: "Work out your likely route before you write",
      body: "Most first moves to the UAE run through an employer-sponsored work visa, but the Golden Visa, Green Visa and some free-zone freelance permits allow long-term residency without a single sponsoring employer for those who qualify. Check current eligibility for each route directly on u.ae before assuming a job offer has to come first.",
    },
    {
      title: "Build the CV and LinkedIn profile to UAE conventions",
      body: "Convert your CV to UAE format and make LinkedIn match it: same titles, dates and photo, with nationality, location and visa status stated on both. A CV that still looks built for a different market is the most common reason experienced candidates get overlooked here.",
    },
    {
      title: "Search across portals and specialist agencies",
      body: "Bayt, LinkedIn, GulfTalent and Naukrigulf between them cover most professional UAE hiring. Approach agencies that specialise in your sector directly as well, and ask plainly which employers they represent and whether roles they raise are genuinely live.",
    },
    {
      title: "Never pay for a job offer, and verify agencies",
      body: "Legitimate UAE employers and licensed agencies do not charge candidates fees to be placed. Verify an agency's licence through MOHRE, and check any overseas recruitment agent against your own country's register too, such as SLBFE in Sri Lanka or the Ministry of External Affairs recruiting-agent register in India.",
    },
    {
      title: "Sort qualification recognition early where it applies",
      body: "Regulated professions such as healthcare, education, law and some engineering roles may require your degree to be recognised or attested before you can start work. The UAE's Ministry of Education runs a recognition system for foreign certificates; start it early since it can take genuine time.",
    },
    {
      title: "Prepare for remote interviews and a fast process",
      body: "Early interviews are usually by video. Confirm times in UAE time (GST, four hours ahead of UTC), and be ready to move quickly once talks turn serious, since UAE hiring timelines are often shorter than in the UK or North America.",
    },
  ],
  keySectors: [
    "Construction, real estate and infrastructure",
    "Hospitality, tourism and aviation",
    "Banking, financial services and fintech",
    "Healthcare and life sciences",
    "Technology and e-commerce",
    "Logistics, trade and supply chain",
  ],
  visaContext:
    "Most people moving to the UAE for a first role do so on an employer-sponsored work permit and residency visa, arranged once an employer confirms an offer. That is not the only route: the Golden Visa gives eligible investors, specialised talent and some skilled professionals long-term residency without an employer sponsor, the Green Visa extends a similar sponsor-free option to eligible skilled employees, freelancers and business owners, and some free zones issue freelance permits for independent professionals in specific fields. Eligibility, categories and fees change, so rely on u.ae, MOHRE, or the Federal Authority for Identity, Citizenship, Customs and Port Security (ICP) and, for Dubai specifically, the General Directorate of Residency and Foreigners Affairs (GDRFA), rather than a CV writer or a recruitment agency. This is orientation only, not immigration advice.",
  commonMistakes: [
    "Sending a photo-free CV built for a UK or Canadian audience into a market that expects one",
    "Leaving nationality, location and visa status vague, so the employer has to ask or moves on",
    "No stated notice period, in a market that often hires within days",
    "Assuming employer sponsorship is the only route, and ruling yourself out of Golden Visa, Green Visa or freelance options you may actually qualify for",
    "Paying an agent or recruiter any fee for a job offer or visa processing promise",
    "Leaving degree attestation or recognition until after accepting an offer, when a regulated role required it from the start",
  ],
  faqs: [
    {
      q: "Can I apply for UAE jobs from outside the country?",
      a: "Yes, this is the normal route for most professionals moving to the UAE. Employers and agencies routinely interview overseas candidates by video, and you generally only need to travel once an offer is close or confirmed. Keep your CV's location and visa status accurate and your notice period clearly stated so employers can plan around it.",
    },
    {
      q: "Do I always need a job offer before I can move to the UAE?",
      a: "No. Most first-time movers do arrive on an employer-sponsored work visa, but the Golden Visa, Green Visa and some free-zone freelance permits allow residency without a single sponsoring employer for those who qualify. Eligibility varies and changes, so check the current categories on u.ae rather than assuming you need an offer first.",
    },
    {
      q: "How do I know if a UAE recruitment agency is genuine?",
      a: "Ask for its licence details; MOHRE regulates and licenses employment and recruitment agencies operating in the UAE. If the same agent also recruits from your home country, check it against your own country's overseas employment register too, such as Sri Lanka's SLBFE licensed agency list or India's Ministry of External Affairs recruiting-agent register, and never pay an agent for a job offer.",
    },
    {
      q: "Do UAE employers accept overseas degrees?",
      a: "Most do, though some regulated roles require formal recognition first. The UAE's Ministry of Education runs a recognition system for foreign university certificates, replacing the older equivalency process, and some professions such as healthcare and engineering have their own registration requirements on top of it. Start the process early if your target role or visa route requires it.",
    },
    {
      q: "Is a UAE CV different from a UK CV?",
      a: "Yes, in several specific ways. A UAE CV commonly includes a professional photo and states nationality, location and visa status near the top, all of which a UK CV deliberately omits. Both use British English and a broadly similar structure otherwise, but sending a UK-format CV unchanged into the UAE market usually means leaving out information a Gulf recruiter needs to screen you at all.",
    },
    {
      q: "How fast does UAE hiring usually move?",
      a: "Often faster than UK or North American hiring, particularly once an employer has decided to move forward, though timelines still vary by sector and seniority. Recruiters and agencies handle very high applicant volumes and tend to screen quickly on the practical details, nationality, visa status and notice period, which is exactly why stating them clearly on your CV helps rather than hurts.",
    },
  ],
  sources: [
    { label: "U.AE: Golden visa", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/golden-visa" },
    { label: "U.AE: Green visa", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Investor-visa/Green-visa" },
    { label: "U.AE: Recognition system for university certificates", url: "https://u.ae/en/information-and-services/education/higher-education/recognition-system-for-university-certificates" },
    { label: "U.AE: Emiratisation", url: "https://u.ae/en/information-and-services/jobs/training-and-development/emiratisation" },
    { label: "MOHRE: Ministry of Human Resources and Emiratisation", url: "https://www.mohre.gov.ae" },
    { label: "ICP: Federal Authority for Identity, Citizenship, Customs and Port Security", url: "https://icp.gov.ae/en/" },
    { label: "GDRFA Dubai: General Directorate of Residency and Foreigners Affairs", url: "https://www.gdrfad.gov.ae/en" },
  ],
};

/* ------------------------------------------------------------------ */
/* /uae/international-job-seekers/from-{origin}                        */
/* ------------------------------------------------------------------ */

const origins: OriginCorridor[] = [
  {
    country: "uae",
    origin: "sri-lanka",
    originName: "Sri Lanka",
    metaTitle: "UAE CV for Sri Lankans: Applying From Sri Lanka",
    metaDescription:
      "How to adapt a Sri Lankan CV for UAE employers: keep the photo, drop the NIC and declaration, present CIMA or ACCA clearly, and check attestation early.",
    h1: "Applying for UAE Jobs From Sri Lanka",
    lead:
      "A Sri Lankan CV starts closer to UAE convention than a UK one does: the photo can stay. The work is removing the parts of the Sri Lankan format a UAE reader does not need and adding the visa logistics one always expects.",
    quickAnswer:
      "To apply for UAE jobs from Sri Lanka, keep your CV photo but remove the NIC number, religion, referees and the signed declaration Sri Lankan CVs traditionally carry. Add nationality, current location, visa status and notice period, cut the CV to two pages, and present CIMA, ACCA or CA Sri Lanka status clearly. Start attestation early, and never pay a recruiter for a job offer.",
    overview:
      "Sri Lanka sends a steady stream of candidates to the UAE, particularly in construction, hospitality, accounting, healthcare and IT, and many already hold internationally recognised qualifications through CIMA, ACCA or a UK-affiliated degree studied locally. The conversion from a Sri Lankan CV to a UAE one is lighter than a UK conversion in one respect: the photo, which a UK CV removes entirely, can generally stay, since it matches UAE convention anyway. The real work is elsewhere: stripping out the NIC number, the long personal declaration, the non-related referees and the school-level detail that a Sri Lankan CV traditionally carries, while adding the nationality, visa status and notice period a UAE recruiter specifically looks for and a Sri Lankan CV usually omits.",
    whatToChange: [
      {
        from: "Photo in the top corner of the CV",
        to: "Keep it. A recent, professional headshot in business dress is expected in the UAE too; just make sure it looks corporate, not casual",
      },
      {
        from: "A 'Personal Details' block with NIC number, date of birth, religion, gender and marital status",
        to: "Remove the NIC number and religion entirely. Keep nationality (state it as Sri Lankan), and add your visa or residency status and current location, which a Sri Lankan CV usually leaves out",
      },
      {
        from: "G.C.E. O/L and A/L results listed subject by subject",
        to: "Remove once you have a degree and a few years of experience; graduates can keep one summary line",
      },
      {
        from: "Two 'non-related referees' with names, designations and phone numbers",
        to: "Remove from the CV. UAE employers and agencies ask for referees later if they need them",
      },
      {
        from: "A closing declaration that the information is true, with date and signature",
        to: "Remove it. UAE CVs, like UK ones, do not carry a signed declaration",
      },
      {
        from: "Duties listed role by role, often across three or four pages",
        to: "Two pages of achievements with scope, numbers and named projects or clients where you can name them",
      },
      {
        from: "An 'Objective' about seeking a challenging position in a reputed organisation",
        to: "A three to five line personal profile stating your level, evidence, target UAE role and notice period",
      },
      {
        from: "Languages listed as Sinhala, Tamil and English with proficiency levels",
        to: "Keep this. Add Arabic if you have any proficiency, since it is a genuine advantage for client-facing and government-linked roles",
      },
    ],
    qualificationsNote:
      "Many Sri Lankan professionals hold qualifications UAE employers already recognise. CIMA and ACCA are widely held by Sri Lankan accountants and are well understood across UAE finance and audit roles; state your exact status (student, affiliate, member, fellow) and the year, since UAE employers treat part-qualified and fully qualified candidates differently. CA Sri Lanka membership should be written in full, as The Institute of Chartered Accountants of Sri Lanka, since the abbreviation alone is less familiar to a UAE reader. For nurses, registration with the relevant UAE health authority, such as the Dubai Health Authority, the Department of Health Abu Dhabi, or the Ministry of Health and Prevention for other emirates, is required before practising, and each authority sets its own licensing exam and process. Some roles and visa categories also require your degree certificate to be attested: this typically starts with authentication in Sri Lanka, followed by attestation through the UAE Ministry of Foreign Affairs' 'Attestation through UAE Missions Abroad' service, and, for the degree itself, recognition through the UAE Ministry of Education's certificate recognition system where an employer or regulator requires it. Confirm the current steps directly with these authorities rather than a general guide, since requirements can change and vary by document.",
    sectorsWhereCandidatesCompete: [
      "Construction, real estate and infrastructure",
      "Hospitality, tourism and aviation",
      "Accounting and finance, especially with CIMA or ACCA",
      "Healthcare and nursing",
      "Information technology and business process outsourcing",
      "Retail and customer service",
    ],
    practicalSteps: [
      {
        title: "Keep the photo, strip the rest of the Sri Lankan format",
        body: "Leave the photo in place, but remove the NIC number, religion, school results, referees and declaration. You will usually recover close to a page, which is the space you need for evidence and UAE-specific logistics.",
      },
      {
        title: "Add the visa and location line a Sri Lankan CV usually misses",
        body: "State your nationality, current location and visa status, and your notice period, near the top of the CV. This is the single detail most Sri Lankan applicants leave out, and it is the first thing a UAE recruiter looks for.",
      },
      {
        title: "Start attestation early if your role needs it",
        body: "If you are moving into a regulated field, or your employer or visa category requires it, begin the attestation process for your degree well before you expect to need it, since it can take real time to complete.",
      },
      {
        title: "Verify any agency before you engage with it",
        body: "Check that a recruitment agency is licensed with MOHRE, and if it also recruits from Sri Lanka directly, check it against the Sri Lanka Bureau of Foreign Employment's list of licensed agencies too. Never pay an agent for a job offer, an interview, or to 'secure' a visa.",
      },
      {
        title: "Searching in the UAE on a visit visa",
        body: "Travelling to the UAE on a visit visa to attend interviews and meet employers in person is common practice and not unusual in itself, but you need the correct work permit and status before you begin working. Confirm current visa rules on u.ae or with ICP or GDRFA Dubai before making any commitments; this is general orientation, not immigration advice.",
      },
      {
        title: "Plan around the time difference",
        body: "Sri Lanka is one and a half hours ahead of the UAE. UAE morning calls land in your afternoon, which is workable; confirm every interview time in UAE time (GST) to avoid confusion.",
      },
    ],
    commonMistakes: [
      "Removing the photo out of habit from generic 'Western CV' advice, when the UAE expects one",
      "Keeping the NIC number and full personal details block on a CV that circulates between agencies and employers",
      "Leaving out nationality, visa status and notice period, so the employer has to guess",
      "Listing O/L results years into a professional career",
      "Paying an agent or recruiter any fee for a job offer or visa promise",
      "Assuming a visit visa allows you to start working before your permit and status are formally in place",
    ],
    visaContext:
      "Most Sri Lankans moving to the UAE for work do so on an employer-sponsored work permit and residency visa, arranged once an employer confirms an offer. The Golden Visa and Green Visa can offer longer-term residency without a single sponsoring employer for those who qualify, and some free zones issue freelance permits for specific professions. Check current routes and eligibility on u.ae, and verify any recruitment agency through MOHRE and, for agencies operating from Sri Lanka, the Sri Lanka Bureau of Foreign Employment. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I keep the photo on my CV when applying for UAE jobs?",
        a: "Yes, keep it. Unlike a UK CV, a UAE CV commonly includes a recent, professional headshot in business dress, so a Sri Lankan CV's photo does not need removing. Just make sure it looks corporate rather than casual, matching the tone of the rest of the document.",
      },
      {
        q: "Should I remove my NIC number for a UAE application?",
        a: "Yes, always remove your NIC number. UAE employers do not need it on a CV, and it is a security risk on a document that may pass through several agencies and inboxes. Identity is checked separately and later, through the formal hiring and visa process.",
      },
      {
        q: "Are CIMA and ACCA recognised by UAE employers?",
        a: "Yes, both are widely recognised across UAE finance, audit and accounting roles, particularly given how many Sri Lankan and South Asian accountants hold them. State your exact status, such as passed finalist, member or fellow, with the year, since UAE employers read part-qualified and fully qualified status differently.",
      },
      {
        q: "Do I need my degree attested to work in the UAE?",
        a: "It depends on the role and the visa category. Some regulated professions and certain employers require formal attestation and recognition of your degree, while others do not ask for it at the CV stage. If your target role is regulated, such as healthcare or education, start the process early through the UAE Ministry of Foreign Affairs and Ministry of Education channels, since it can take genuine time.",
      },
      {
        q: "Is it normal to travel to Dubai on a visit visa to look for work?",
        a: "Yes, many candidates travel on a visit visa to attend interviews and meet employers in person, and this is common practice. You still need the correct work permit and residency status in place before you begin working, so confirm current rules on u.ae or with ICP or GDRFA Dubai; this is general orientation, not immigration advice.",
      },
    ],
    sources: [
      {
        label: "MOFA UAE: Attestation of official documents and certificates",
        url: "https://www.mofa.gov.ae/en/services/attestation",
      },
      {
        label: "U.AE: Recognition system for university certificates",
        url: "https://u.ae/en/information-and-services/education/higher-education/recognition-system-for-university-certificates",
      },
      {
        label: "SLBFE: Licensed foreign employment agencies in Sri Lanka",
        url: "https://www.slbfe.lk/licensed-foreign-employment-agencies-in-sri-lanka/",
      },
      { label: "MOHRE: Ministry of Human Resources and Emiratisation", url: "https://www.mohre.gov.ae" },
      { label: "U.AE: Golden visa", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/golden-visa" },
    ],
  },
  {
    country: "uae",
    origin: "india",
    originName: "India",
    metaTitle: "UAE CV for Indian Professionals: Applying From India",
    metaDescription:
      "How to convert an Indian CV for UAE employers: drop CTC and father's name, keep the photo, restructure IT project CVs, and check attestation early.",
    h1: "Applying for UAE Jobs From India",
    lead:
      "Indian CVs are written for Indian job portals: CTC and notice period up top, projects listed client by client, a personal profile with father's name. A UAE reader wants notice period and visa logistics too, but organised very differently.",
    quickAnswer:
      "To apply for UAE jobs from India, remove CTC, expected salary, father's name and the signed declaration your Indian CV likely carries; keep the photo, which UAE convention expects too. Reorganise project-by-project IT listings into role-based achievements, state your nationality, visa status and notice period clearly, and check any degree attestation requirement early. Never pay a recruiter for a job offer.",
    overview:
      "Indian professionals compete strongly for UAE roles across technology, finance, construction, hospitality and healthcare, and a large number already work for UAE or Gulf clients through global delivery and shared-services models. The starting point for the conversion is closer to UAE convention than a UK conversion would be: the photo most Indian CVs already carry can generally stay. What needs to change is the content built around Indian hiring habits, salary-led CTC framing, project-by-project IT services structure, and personal details like father's name, while adding the nationality, visa status and notice period a UAE recruiter expects and an Indian CV usually does not include.",
    whatToChange: [
      {
        from: "'Current CTC', 'Expected CTC' in lakhs and 'Notice period' at the top of the CV",
        to: "Remove salary figures entirely from the CV. Keep notice period, but move it to a short additional-information line alongside your visa status rather than the header",
      },
      {
        from: "A 'Personal Profile' with father's name, date of birth, gender, marital status and languages known",
        to: "Remove father's name and marital status. Keep the photo, and add nationality, current location and visa or residency status, which a domestic Indian CV does not usually include",
      },
      {
        from: "IT services format: Project 1, Project 2, each with client, duration, team size, environment and 'roles and responsibilities'",
        to: "Organise by employer and role. Summarise the technology stack once, and write achievements that show what you built, improved or led across projects",
      },
      {
        from: "Class 10 and Class 12 board percentages alongside the degree",
        to: "Remove once you have a degree and experience. State the degree with institution and CGPA or class as awarded",
      },
      {
        from: "A 'Career Objective' and a long 'Strengths' list of personal qualities",
        to: "A three to five line personal profile with your level, specialism, evidence and target UAE role",
      },
      {
        from: "'I hereby declare that the above information is true to the best of my knowledge', with place, date and signature",
        to: "Remove it. UAE CVs carry no declaration, place, date or signature",
      },
      {
        from: "A skills block listing every tool ever touched, written for job-portal keyword searches",
        to: "A grouped list of the skills relevant to the UAE role, each important one proven inside your experience",
      },
      {
        from: "Indian job titles and levels such as 'Associate Consultant' or 'Senior Executive' without context",
        to: "Keep the real title, and add scope so a UAE reader understands the level: team size, reporting line, budget or project value",
      },
    ],
    qualificationsNote:
      "Indian degrees are broadly familiar to UAE employers, particularly in technology and engineering, but state them as awarded rather than converting the grade yourself: for example 'B.Tech, CGPA 8.4/10' rather than a guessed classification. ICAI and ACCA qualifications are widely held by Indian finance professionals and generally recognised across UAE audit, finance and shared-services roles; state your exact status and year. Doctors and nurses need to register with the relevant UAE health authority, such as the Dubai Health Authority, the Department of Health Abu Dhabi, or the Ministry of Health and Prevention for other emirates, before they can practise, and each authority runs its own licensing exam and process. Some roles and visa categories also require formal attestation of your degree certificate, which typically starts with authentication in India, followed by attestation through the UAE Ministry of Foreign Affairs' 'Attestation through UAE Missions Abroad' service, and recognition through the UAE Ministry of Education's certificate system where a regulator or employer requires it. Confirm current requirements directly with these authorities, since processes and document requirements vary and change.",
    sectorsWhereCandidatesCompete: [
      "Information technology, software and shared services",
      "Construction, real estate and infrastructure",
      "Banking, finance and audit",
      "Healthcare and life sciences",
      "Hospitality, retail and aviation",
      "Logistics and supply chain",
    ],
    practicalSteps: [
      {
        title: "Reorganise around roles, not projects",
        body: "If you have spent years on client projects at an IT services firm, group them under your employer and title, then pick the four to six outcomes that show the most responsibility. A UAE reader wants your trajectory and scope, not every engagement listed separately.",
      },
      {
        title: "Remove the Indian process details, keep the photo",
        body: "CTC, expected salary, father's name, declaration and signature all belong to Indian hiring processes and should come out. The photo, unusually, can stay, since UAE convention expects one too; just check it reads as professional rather than a casual or ID-style photo.",
      },
      {
        title: "Add nationality, visa status and notice period",
        body: "State these clearly, since a domestic Indian CV rarely includes them and a UAE recruiter looks for them first. If you are already outside India on a visa elsewhere, or hold any transferable status, mention it.",
      },
      {
        title: "Start attestation and any licensing process early",
        body: "If your target role is regulated, such as healthcare, education or engineering, or your visa category requires it, begin degree attestation and any professional licensing steps well ahead of when you expect to need them.",
      },
      {
        title: "Verify any recruitment agency before engaging",
        body: "Check that a UAE agency is licensed with MOHRE, and if the same agent also recruits from India, check it against the Ministry of External Affairs' register of recruiting agents. Never pay an agent for a job offer, an interview, or to 'secure' a visa.",
      },
      {
        title: "Schedule for UAE hours",
        body: "India is one and a half hours ahead of the UAE. Offer interview windows in UAE time (GST), and confirm every scheduled call in that time zone to avoid confusion.",
      },
    ],
    commonMistakes: [
      "Leaving CTC and expected CTC on the CV, which UAE employers do not expect to see there",
      "Keeping the project-by-project IT services layout that runs to four or five pages",
      "Removing the photo by mistake, when UAE convention expects one",
      "Including father's name, date of birth and a signed declaration",
      "Leaving out nationality, visa status and notice period",
      "Paying an agent or recruiter any fee for a job offer or visa processing promise",
    ],
    visaContext:
      "Most Indians moving to the UAE for work do so on an employer-sponsored work permit and residency visa, arranged once an employer confirms an offer. The Golden Visa and Green Visa can offer longer-term residency without a single sponsoring employer for those who qualify, and some free zones issue freelance permits for specific professions. Check current routes and eligibility on u.ae, and verify any recruitment agency through MOHRE and, for agents operating from India, the Ministry of External Affairs' register of recruiting agents. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I mention my CTC on a CV for UAE jobs?",
        a: "No, remove current and expected CTC from your UAE CV. UAE employers do not expect salary figures on the CV, and lakh-denominated numbers mean little without context. Salary comes up in conversation or an application form later, usually against the UAE range for the role; use the CV space for evidence of your impact instead.",
      },
      {
        q: "Can I keep the photo on my CV when applying to the UAE?",
        a: "Yes, keep it. Indian CVs commonly include a photo already, and UAE convention expects one too, so this is one detail that does not need changing. Make sure it is a recent, professional headshot in business dress rather than a casual photo.",
      },
      {
        q: "How do I convert an Indian IT CV into a UAE CV?",
        a: "Reorganise it by employer and role rather than by client project, summarise the technology stack once, and write four to six achievements per recent role showing what you built, improved or led. Remove CTC, father's name and the declaration, add nationality and visa status, then cut to two pages.",
      },
      {
        q: "Do I need my degree attested to work in the UAE?",
        a: "It depends on the role and visa category. Regulated professions such as healthcare, education and some engineering roles typically require it, while many other roles do not ask for it at the CV stage. If your target role is regulated, start attestation through the UAE Ministry of Foreign Affairs and recognition through the Ministry of Education early, since it can take real time.",
      },
      {
        q: "Should I convert my CGPA to a UAE or UK degree classification?",
        a: "No, state your CGPA as awarded, for example 'CGPA 8.4/10', with the degree and institution. Converting it yourself into a different classification can look like an overclaim. If an employer or regulator needs a formal comparison, use the UAE's official recognition process rather than converting it on the CV.",
      },
    ],
    sources: [
      {
        label: "MOFA UAE: Attestation of official documents and certificates",
        url: "https://www.mofa.gov.ae/en/services/attestation",
      },
      {
        label: "U.AE: Recognition system for university certificates",
        url: "https://u.ae/en/information-and-services/education/higher-education/recognition-system-for-university-certificates",
      },
      { label: "MEA: Registered Recruiting Agents, Government of India", url: "https://www.mea.gov.in/ras" },
      { label: "MOHRE: Ministry of Human Resources and Emiratisation", url: "https://www.mohre.gov.ae" },
      { label: "U.AE: Green visa", url: "https://u.ae/en/information-and-services/visa-and-emirates-id/Types-of-visas/Investor-visa/Green-visa" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /uae/career-advice : hub intro                                      */
/* ------------------------------------------------------------------ */

const adviceHubIntro =
  "UAE hiring has its own logic. A professional photo is standard, nationality and visa status sit near the top of the CV, and Dubai and Abu Dhabi recruiters read very high volumes of applications fast, often through Bayt, LinkedIn, GulfTalent or a recruitment agency database. These guides cover the conventions specific to the Gulf: the UAE CV format, exactly what personal detail to include or leave out, and how to run a job search from abroad without falling for a recruitment scam. For universal advice on structure and achievements, the global career advice library goes deeper. If you are applying from Sri Lanka or India specifically, start with the international job seekers guide.";

export const uaeBundle: CountryBundleFull = {
  country: "uae",
  market,
  adviceHubIntro,
  services,
  articles,
  ijsHub,
  origins,
};
