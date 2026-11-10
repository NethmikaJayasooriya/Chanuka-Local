/**
 * SINGAPORE COUNTRY BUNDLE
 * ------------------------------------------------------------------
 * Powers the whole Singapore mini-site: the /singapore hub, the three
 * localised service pages, three Singapore-specific articles, the
 * international job seekers hub and the Sri Lanka and India origin
 * corridors.
 *
 * British English throughout, with "resume" as the primary term and
 * "CV" also used and understood. Prices in USD only. Work pass and
 * Fair Consideration Framework content is orientation only and always
 * points to MOM (mom.gov.sg) or another named statutory body.
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
/* /singapore : country hub                                            */
/* ------------------------------------------------------------------ */

const market: CountryMarket = {
  slug: "singapore",
  name: "Singapore",
  adjective: "Singapore",
  flag: "🇸🇬",
  code: "SG",
  locale: "en-SG",
  quickAnswer:
    "A Singapore resume is a concise one to two page document that leads with quantified achievements, uses British English spelling, and states your nationality and work pass status plainly. A photo is optional. Chanuka Jeewantha writes Singapore resumes, LinkedIn profiles and cover letters personally, for professionals already in Singapore and those applying from abroad, with prices from $129 USD.",
  metaTitle: "Singapore Resume, LinkedIn and Cover Letter Writing",
  metaDescription:
    "Resumes, LinkedIn profiles and cover letters written for Singapore employers: concise, metrics led, British English, clear work pass status. Priced in USD.",
  heroHeading: "Resume, LinkedIn and Cover Letter Writing for Singapore",
  heroLead:
    "A Singapore resume is short and evidence led: one to two pages, a sharp summary, quantified results and a clear line on your nationality and work pass status. Get that right and the reader spends their attention on what you have delivered, not on working out whether you can take the role.",
  docType: "Resume",
  standardLength: "One to two pages for most professionals. Senior and specialist candidates rarely exceed two.",
  photoRule:
    "Optional. Not expected on a modern Singapore resume, though some regional recruiters and older-style templates still include one. A resume without a photo is completely normal, especially for MNC and finance roles.",
  spellingStyle: "British English",
  overview:
    "Singapore hiring moves quickly and draws from one of the most international talent pools in Asia. Local employers, the regional headquarters of multinationals, and a large recruitment agency market all compete for the same pool of professionals, and most source candidates through MyCareersFuture, JobStreet or LinkedIn before an interview is ever booked. The resume that gets a first look is short, quantified and specific: one to two pages, a summary that states your specialism plainly, and achievements written as outcomes rather than duties. For candidates applying from outside Singapore, nationality and work pass status sit under every read, because employers hiring for Employment Pass or S Pass roles are also working within the Ministry of Manpower's Fair Consideration Framework and, for Employment Pass roles, the COMPASS points system. A resume that states your position plainly, rather than leaving the employer to guess, moves faster through that process.",
  marketRules: [
    {
      label: "Length",
      value:
        "One to two pages for most professionals. Two pages suits candidates with five or more years of experience; one page works well for graduates and early-career applicants.",
      importance: "critical",
    },
    {
      label: "Photo",
      value:
        "Optional. Singapore convention does not expect a photo, and leaving it off is completely normal. Include one only if a specific employer, recruiter or application platform asks for it.",
      importance: "recommended",
    },
    {
      label: "NRIC and FIN numbers",
      value:
        "Never state your full NRIC or FIN number on a resume. Singapore's Personal Data Protection Commission (PDPC) advises organisations against collecting or displaying full NRIC numbers where it is not necessary, and a resume that circulates between recruiters and employers is exactly the kind of document that should not carry one.",
      importance: "critical",
    },
    {
      label: "Nationality and work pass status",
      value:
        "State your nationality and, if you are not a citizen or permanent resident, your current work pass status, for example 'Employment Pass holder' or 'Would require an Employment Pass'. Employers screening foreign applicants weigh this early, partly because of Fair Consideration Framework obligations, so stating it plainly saves a round of back and forth.",
      importance: "critical",
    },
    {
      label: "Expected salary and notice period",
      value:
        "Singapore employers and job portals often ask for both directly in the application form. Give a realistic expected salary range if asked, and state your notice period accurately, since Singapore contracts typically run one to three months.",
      importance: "recommended",
    },
    {
      label: "British English and tone",
      value:
        "Use British spelling (organise, programme, analysed) and a direct, metrics-first tone. Singapore recruiters read quickly across a large volume of applications, so a resume that leads with evidence rather than description holds attention longer.",
      importance: "recommended",
    },
    {
      label: "Format and platforms",
      value:
        "A clean single-column layout in Word or a text-based PDF works across MyCareersFuture, JobStreet, LinkedIn and agency systems. Avoid heavily designed templates with tables or text boxes, which parse poorly.",
      importance: "recommended",
    },
  ],
  whatRecruitersLookFor: [
    "Quantified results with clear scope: revenue, budget, headcount, regional coverage",
    "A stated nationality and work pass position for any candidate not already a citizen or permanent resident",
    "Sector-relevant credentials, such as ISCA membership in accounting or a Professional Engineer registration in engineering",
    "Regional or APAC exposure, since many Singapore roles sit inside a regional headquarters function",
    "A notice period stated plainly, because Singapore hiring timelines move fast",
    "Language ability beyond English where the role serves the regional market, such as Mandarin, Malay or Tamil",
  ],
  inDemandSectors: [
    "Banking, financial services and fintech",
    "Technology, software engineering and data",
    "Biomedical sciences, pharmaceuticals and healthcare",
    "Logistics, supply chain and maritime",
    "Professional services: accounting, legal and consulting",
    "Advanced manufacturing and engineering",
  ],
  keyRoles: [
    "Software Engineer",
    "Data Analyst",
    "Business Analyst",
    "Financial Analyst",
    "Supply Chain Manager",
    "Accountant",
  ],
  faqs: [
    {
      q: "How long should a resume be in Singapore?",
      a: "One to two pages is the standard for most professionals in Singapore. Two pages suits candidates with five or more years of experience, and one tight page works well for graduates and early-career applicants. Singapore recruiters read a large volume of applications quickly, so a resume that runs to three or more pages tends to get skimmed rather than read.",
    },
    {
      q: "Should I put a photo on my Singapore resume?",
      a: "A photo is optional on a Singapore resume, not expected. Many professional and MNC-facing resumes leave it off entirely, and doing so is completely normal. Some regional employers or older-style templates still include one, so add a simple headshot only if an employer, recruiter or application platform specifically asks for it.",
    },
    {
      q: "Should I include my NRIC number on my resume?",
      a: "No, never put your full NRIC or FIN number on a resume. Singapore's Personal Data Protection Commission advises organisations against collecting or displaying full NRIC numbers unless it is necessary, and a resume that is shared between recruiters and employers is not the place for one. Identity checks happen later in the process, through the employer's own verification.",
    },
    {
      q: "What is MyCareersFuture and do I need to use it?",
      a: "MyCareersFuture is Singapore's government job portal, run by Workforce Singapore and GovTech, and it is one of the main channels employers use to advertise roles, including under the Fair Consideration Framework. You do not have to apply exclusively through it, but registering a profile and applying to relevant listings there is a normal, useful part of a Singapore job search alongside JobStreet and LinkedIn.",
    },
    {
      q: "Do I need to mention my work pass status as a foreign applicant?",
      a: "Yes, it helps to state your nationality and current work pass status plainly near the top of your resume, for example 'Employment Pass holder' or 'Would require an Employment Pass'. Employers hiring foreign candidates are working within Ministry of Manpower requirements, and a clear statement lets them assess fit and process quickly rather than guessing. This is general orientation, not immigration advice; check your own situation on mom.gov.sg.",
    },
    {
      q: "How much does Singapore resume writing cost and how does the process work?",
      a: "Singapore resume writing costs $129, $189 or $279 USD depending on experience: under two years, three to nine years, or ten years and executive. The process runs entirely by email: you choose a package and pay, complete a written brief and upload your current resume, and Chanuka writes it personally. You receive a draft, get one revision round, and receive final Word and PDF files, usually within 5 to 7 days.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /singapore/{service} : localised commercial pages                   */
/* ------------------------------------------------------------------ */

const services: CountryService[] = [
  {
    country: "singapore",
    service: "cv-writing",
    primaryKeyword: "resume writing service Singapore",
    secondaryKeywords: [
      "professional resume writer Singapore",
      "Singapore resume writing service for foreigners",
      "executive resume writer Singapore",
      "Employment Pass resume Singapore",
      "ATS resume format Singapore",
    ],
    metaTitle: "Resume Writing Service Singapore: Two-Page Resumes",
    metaDescription:
      "Singapore resume writing by one expert, not a team: British English, a sharp summary, quantified results and clear work pass status. From $129 USD.",
    eyebrow: "Singapore resume writing",
    h1: "Resume Writing Service for Singapore Jobs",
    lead:
      "A Singapore resume written personally by Chanuka Jeewantha: one to two pages, British English, a summary that states your specialism plainly, and experience written as evidence rather than duties.",
    quickAnswer:
      "This Singapore resume writing service rewrites your resume to local conventions: one to two pages, a concise summary, quantified achievements, and clear nationality and work pass status where relevant. Every resume is written personally by Chanuka Jeewantha, delivered in Word and PDF within 5 to 7 days as standard, from $129 USD.",
    keyFacts: [
      { label: "Length", value: "One to two pages, rarely more" },
      { label: "Opening", value: "A concise summary of three to four lines" },
      { label: "Work pass status", value: "Stated plainly for non-citizens and non-PRs" },
      { label: "Spelling", value: "British English throughout" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
      { label: "Standard delivery", value: "5 to 7 days, faster options available" },
    ],
    whyDifferent: {
      heading: "Why a Singapore resume is not a CV with a shorter page count",
      paragraphs: [
        "Singapore hiring runs through three overlapping channels at once: local employers, the regional headquarters of multinationals, and a dense recruitment agency market, and all three read a large volume of applications against a specific brief. A resume that looks like a four-page South Asian CV with a personal details block, or a Gulf-style CV built around family information, reads as unfamiliar with how Singapore screens, whatever the experience behind it.",
        "The register is direct rather than narrative. Singapore recruiters expect the first third of the page to answer 'what have you actually delivered', with numbers doing the persuading: revenue, budget, headcount, regional coverage. 'Managed a team of twelve across three markets and grew the APAC pipeline by opening two new distributor relationships' does more work than a paragraph about being a strategic and collaborative leader.",
        "For candidates outside Singapore, the resume also has to answer a question the employer is already thinking about: your nationality and work pass position. Employers hiring foreign candidates operate within the Ministry of Manpower's Fair Consideration Framework and, for Employment Pass roles, the COMPASS points framework, so a resume that states this clearly, rather than leaving it to be inferred, moves through screening faster.",
      ],
    },
    whatYouGet: [
      "A one to two page Singapore resume written from scratch around your target role",
      "A summary that states your specialism, seniority and direction in three to four lines",
      "Experience rewritten as quantified achievements with scope: budget, team size, regional coverage",
      "Overseas job titles, employers and qualifications explained in terms a Singapore reader recognises",
      "A one-line nationality and work pass statement where it helps, worded accurately to your situation",
      "A clean single-column layout that MyCareersFuture, JobStreet, LinkedIn and agency systems parse reliably",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Section order", value: "Contact details, summary, key skills, experience, education, then certifications" },
      { label: "Dates", value: "Month and year for every role, most recent first" },
      { label: "Nationality and pass status", value: "Stated near the top for non-citizens and non-permanent residents" },
      { label: "NRIC or FIN", value: "Never included in full; left off entirely unless an application form specifically requests it" },
      { label: "Leave out", value: "Full NRIC or FIN, race, religion, marital status beyond what is asked, and a signed declaration" },
      { label: "References", value: "Not listed; provided later if the employer requests them" },
      { label: "File", value: "Word or a text-based PDF; A4 or Letter both read cleanly online" },
    ],
    sectors: [
      "Banking, financial services and fintech",
      "Technology and software engineering",
      "Biomedical sciences and healthcare",
      "Logistics, supply chain and maritime",
      "Professional services: accounting, legal and consulting",
      "Manufacturing and engineering",
    ],
    process: [
      {
        title: "Choose your tier and pay in USD",
        body: "Pick the tier that matches your experience. Payment is in USD, so there is nothing to convert at checkout beyond your card provider's own rate.",
      },
      {
        title: "Complete the brief",
        body: "Upload your current resume and answer a written brief about your target Singapore roles, your results, and your nationality and work pass position. Links to two or three job adverts help.",
      },
      {
        title: "Chanuka writes your resume",
        body: "Your resume is written personally, never outsourced. Questions come by email, so time zones do not slow anything down.",
      },
      {
        title: "Review, revise and apply",
        body: "You receive the draft, request changes in one revision round, and get final Word and PDF files ready to send to employers and agencies.",
      },
    ],
    faqs: [
      {
        q: "What makes a resume writing service Singapore specific?",
        a: "A Singapore-specific resume service writes to local conventions rather than a generic international template: one to two pages, a concise summary, British spelling, quantified achievements, and a clear nationality and work pass statement for foreign candidates. It also understands how MyCareersFuture, JobStreet, agency databases and MNC applicant tracking systems parse a document, and shapes the resume for all of them.",
      },
      {
        q: "Is a professional resume writer worth it for Singapore jobs?",
        a: "A professional resume writer is worth it when your resume is not getting shortlisted despite relevant experience, or when you are entering the Singapore market from abroad and your document follows another country's conventions. It matters less if you already get interviews and the gap is later in the process, where interview preparation carries more weight.",
      },
      {
        q: "Can you write a resume for finance or biomedical roles in Singapore?",
        a: "Yes. Finance resumes are written around scope, regulatory exposure and results in a way that fits how banks, fintechs and asset managers screen, and biomedical and healthcare resumes are built around clinical or research scope and the relevant registration body. Send your current resume and target roles through the brief so the specifics are accurate to your field.",
      },
      {
        q: "Will my resume work with MyCareersFuture and JobStreet?",
        a: "Yes. The resume uses standard headings, a single-column layout and the job titles and skills your target roles actually use, so it parses cleanly when uploaded to MyCareersFuture, JobStreet, LinkedIn or an agency's own system, and reads just as clearly if an employer opens the file directly.",
      },
      {
        q: "Should my Singapore resume mention my work pass status?",
        a: "Yes, when it is not obvious. If you are a Singapore citizen or permanent resident, a short line says so. If you would need an Employment Pass or S Pass, stating that plainly, rather than leaving the employer to guess, tends to move an application through screening faster, because it is a question every employer hiring foreign candidates has to answer anyway.",
      },
      {
        q: "How long does Singapore resume writing take?",
        a: "Standard delivery is 5 to 7 days from receiving your completed brief. Fast delivery in 2 to 3 days adds 20 percent, and ultra delivery within 24 hours adds 50 percent. After the draft, one revision round is included, and the final Word and PDF files follow once changes are agreed.",
      },
    ],
  },
  {
    country: "singapore",
    service: "linkedin-optimisation",
    primaryKeyword: "LinkedIn profile writing Singapore",
    secondaryKeywords: [
      "LinkedIn optimisation Singapore",
      "LinkedIn profile writer Singapore",
      "LinkedIn for Singapore recruiters",
      "LinkedIn profile for relocating to Singapore",
    ],
    metaTitle: "LinkedIn Profile Writing Service Singapore",
    metaDescription:
      "LinkedIn profile writing for the Singapore market: a headline recruiters search for, a summary in British English and a clear work pass position.",
    eyebrow: "Singapore LinkedIn optimisation",
    h1: "LinkedIn Profile Writing for the Singapore Market",
    lead:
      "Your LinkedIn profile rewritten for how Singapore recruiters and in-house talent teams search: the right job titles, a clear nationality and work pass position, and a summary that reads like a specialist, not a slogan.",
    quickAnswer:
      "A Singapore LinkedIn profile writing service rewrites your headline, About section, experience and skills so Singapore recruiters find you under the job titles they search and trust what they read. Chanuka Jeewantha writes each profile personally in British English, handles nationality and work pass signalling, and delivers within 5 to 7 days from $129 USD.",
    keyFacts: [
      { label: "Headline", value: "Target job title and specialism first, not a slogan" },
      { label: "About section", value: "First person, British English, evidence over adjectives" },
      { label: "Location", value: "Your real location, with Singapore relocation stated where true" },
      { label: "Work pass", value: "Nationality and pass status handled honestly in the About section" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
    ],
    whyDifferent: {
      heading: "How Singapore recruiters use LinkedIn, and what that means for your profile",
      paragraphs: [
        "Singapore is dense with regional headquarters, and in-house talent teams and agency recruiters lean heavily on LinkedIn search to build shortlists before a role is even advertised on MyCareersFuture or JobStreet. They search by job title, skill and location. A headline that reads 'Passionate about people and technology' instead of 'Business Analyst, Banking and Financial Services' simply does not surface in the search that mattered.",
        "Location is the quiet filter for anyone outside Singapore. Setting your location to Singapore when you actually live in Colombo or Chennai misleads recruiters and tends to unravel on the first call. The steadier approach is your real location plus a clear, honest line about relocation and work pass status in the headline or About section, so Singapore recruiters who hire internationally can still find and contact you.",
        "Tone matters too. Singapore readers move through a large regional talent pool quickly, and a profile that states specific evidence, such as markets covered, systems used or deals closed, holds attention far better than general enthusiasm. The profile is written to sound confident and specific without padding.",
      ],
    },
    whatYouGet: [
      "A search-focused headline built on the Singapore job titles and skills recruiters actually type",
      "An About section in first person and British English, with specific evidence and a clear next step",
      "Experience entries rewritten from your resume, shorter and more conversational than the resume itself",
      "A curated skills list ordered so the most relevant skills show first",
      "Location and nationality or work pass wording that is accurate and searchable",
      "Guidance on Open to Work settings, custom URL and recommendations",
      "One revision round on all text",
    ],
    marketConventions: [
      { label: "Spelling", value: "British English: organise, optimise, programme" },
      { label: "Headline format", value: "Job title | specialism | sector or credential" },
      { label: "Photo", value: "Yes on LinkedIn, even though a Singapore resume photo is optional" },
      { label: "Voice", value: "First person in the About section, never third person" },
      { label: "Work pass", value: "Nationality and pass status stated where relevant, especially outside Singapore" },
      { label: "Consistency", value: "Titles and dates match the resume, because recruiters check both" },
    ],
    sectors: [
      "Banking, financial services and fintech",
      "Technology, data and software engineering",
      "Biomedical sciences and healthcare",
      "Logistics, supply chain and maritime",
      "Professional services and consulting",
      "Professionals relocating to Singapore from the wider region",
    ],
    process: [
      {
        title: "Choose your tier",
        body: "LinkedIn optimisation uses the same experience tiers as resume writing. Bundling it with a Singapore resume saves 20 percent.",
      },
      {
        title: "Share your profile and targets",
        body: "Send your LinkedIn URL, current resume and the Singapore roles you want to be found for, plus your location and work pass situation.",
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
        q: "Do Singapore recruiters really use LinkedIn to find candidates?",
        a: "Yes, LinkedIn is a routine sourcing tool for Singapore-based recruiters and the in-house talent teams of regional headquarters, especially for finance, technology and professional services roles. They search by title, skill and location to build shortlists, often before a role appears on MyCareersFuture or JobStreet. A vague headline or the wrong job titles keeps a profile out of that search entirely.",
      },
      {
        q: "Should I change my LinkedIn location to Singapore before I move?",
        a: "No, keep your real location and state your Singapore plans honestly instead. A false Singapore location usually surfaces on the first recruiter call and damages trust. Say in the headline or About section that you are relocating and give your work pass position if it is settled, so recruiters who hire internationally can still find and contact you.",
      },
      {
        q: "Should my LinkedIn profile use British or American spelling?",
        a: "Use British spelling if Singapore is your main target market. Recruiters notice 'optimization' and 'program' on a profile claiming Singapore experience or ambitions, and it creates a small mismatch with your Singapore resume. Keep job titles and product names exactly as they are officially written, even when they use American spelling.",
      },
      {
        q: "Is LinkedIn optimisation worth it if I already have a good resume?",
        a: "It is worth it when recruiters are not approaching you or when your profile and resume tell different stories. The resume only works when you send it; LinkedIn works while you are not looking, through search. If you are applying mainly through one or two agencies who already know you, LinkedIn matters less, and the resume is the better spend.",
      },
      {
        q: "What does LinkedIn optimisation cost for the Singapore market?",
        a: "LinkedIn optimisation costs $129, $189 or $279 USD depending on experience level, matching the resume writing tiers. Adding it to a Singapore resume saves 20 percent on both, and taking resume, LinkedIn and cover letter together saves 30 percent. Payment is in USD and delivery is 5 to 7 days as standard.",
      },
      {
        q: "Should I state my work pass status on LinkedIn?",
        a: "It helps to, briefly, if you are applying from outside Singapore or already hold a pass you would want a new employer to be aware of. A line such as 'Currently on an Employment Pass, open to new opportunities' in the About section gives Singapore recruiters the context they need without turning your profile into a visa document.",
      },
    ],
  },
  {
    country: "singapore",
    service: "cover-letter-writing",
    primaryKeyword: "cover letter writing service Singapore",
    secondaryKeywords: [
      "Singapore cover letter writer",
      "cover letter for Singapore jobs from abroad",
      "professional cover letter format Singapore",
      "cover letter for foreign applicants Singapore",
    ],
    metaTitle: "Cover Letter Writing Service Singapore",
    metaDescription:
      "Singapore cover letters written to local conventions: one page, a direct businesslike tone, and a clear case for the role. From $79 USD, by email.",
    eyebrow: "Singapore cover letter writing",
    h1: "Cover Letter Writing for Singapore Applications",
    lead:
      "A one-page Singapore cover letter that makes the case for one specific role in plain, direct English, and handles questions like relocation and work pass status before the reader has to ask.",
    quickAnswer:
      "A Singapore cover letter writing service produces a one-page letter, usually three or four short paragraphs, that links your strongest evidence to the requirements of one role, in British English with a direct, businesslike tone. Chanuka Jeewantha writes each letter personally, including how to frame relocation or work pass status, with prices from $79 USD and standard delivery in 5 to 7 days.",
    keyFacts: [
      { label: "Length", value: "One page, three to four short paragraphs" },
      { label: "Salutation", value: "A named person where possible" },
      { label: "Tone", value: "Direct and businesslike, no flourishes" },
      { label: "Price", value: "$79, $119 or $159 USD by experience" },
      { label: "Bundle", value: "Save 20 percent with a Singapore resume" },
    ],
    whyDifferent: {
      heading: "What a Singapore cover letter has to do that a generic one does not",
      paragraphs: [
        "Singapore business writing favours brevity and directness, and cover letters follow the same habit. A letter that opens with a long personal story, or one built on South Asian conventions of naming every qualification and closing with a list of personal virtues, reads as slower than the reader expects. A Singapore letter names the role, gives two or three specific reasons you fit it, and stops.",
        "There is no strict local etiquette around salutations the way some markets have, but a named greeting and a plain, professional sign-off read as more deliberate than 'Dear Hiring Manager'. What matters more is that every sentence earns its place: Singapore readers skim, and padding costs you attention rather than earning goodwill.",
        "For applicants outside Singapore, the letter is also the natural place to state what the resume should not carry in detail: your relocation timeline, your notice period, and your work pass position, written factually and briefly so it reads as a plan rather than a complication.",
      ],
    },
    whatYouGet: [
      "A one-page letter written for a specific Singapore role and employer",
      "An opening that names the role and gives the reader a reason to keep going",
      "Two or three paragraphs linking your evidence to the job advert's main requirements",
      "Relocation, notice period and work pass wording framed factually where relevant",
      "A correct, businesslike Singapore salutation and sign-off",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Opening", value: "Name the role and where you saw it in the first sentence or two" },
      { label: "Evidence", value: "Two or three specific examples matched to the role's main requirements" },
      { label: "Tone", value: "Direct, businesslike, no superlatives" },
      { label: "Sign-off", value: "'Yours sincerely' to a named person is standard" },
      { label: "Agencies", value: "Often not required when applying through a recruiter; a short email note usually suffices" },
      { label: "Foreign applicants", value: "Notice period and work pass timing stated briefly and factually" },
    ],
    sectors: [
      "Banking and financial services roles applied for directly",
      "Technology and fintech roles at regional headquarters",
      "Professional services: accounting, legal and consulting",
      "Biomedical, pharmaceutical and healthcare roles",
      "Graduate and early-career hiring rounds",
      "Overseas applicants explaining relocation and work pass timing",
    ],
    process: [
      {
        title: "Choose your tier and share the role",
        body: "Pick your experience tier and send the job advert with your current resume.",
      },
      {
        title: "Answer a short brief",
        body: "Tell Chanuka why this role and employer, your notice period, and your nationality or work pass position if you are outside Singapore.",
      },
      {
        title: "Receive, revise, send",
        body: "You get a draft letter, one revision round and final Word and PDF files, ready to adapt for similar roles.",
      },
    ],
    faqs: [
      {
        q: "Do Singapore employers still read cover letters?",
        a: "Many do, particularly for direct applications, graduate programmes and roles where the advert specifically asks for one. Applications made through a recruitment agency often do not need a formal letter, since the consultant pitches you directly. When a letter is requested, a generic one costs you more than skipping an optional one would.",
      },
      {
        q: "How long should a cover letter be in Singapore?",
        a: "A Singapore cover letter should fit on one page, usually three or four short paragraphs and roughly 200 to 350 words. Singapore readers move quickly through applications, so the letter should state the role, your fit and your availability without repeating the resume. If an online application form sets a word limit, write to that limit instead.",
      },
      {
        q: "Should I mention my work pass status in a cover letter?",
        a: "Usually yes, briefly and factually, especially when the employer's advert invites international applicants or the role is clearly pass-eligible. State your current position in one sentence and keep the rest of the letter about the value you bring. Leaving it out rarely helps, because the question comes up at application or interview stage regardless.",
      },
      {
        q: "What tone works best in a Singapore cover letter?",
        a: "A direct, businesslike tone works best: state the role, give two or three specific reasons you fit it, and close without pressure. Singapore hiring culture does not reward a long personal narrative or a list of personality traits. Specific evidence, kept short, reads as more professional than warmth expressed at length.",
      },
      {
        q: "Should I address relocation and notice period in the letter?",
        a: "Yes, if you are applying from outside Singapore or your notice period is longer than the role suggests. One or two factual sentences, such as your planned relocation timing or your notice period, remove a common source of employer hesitation and let the rest of the letter focus on why you fit the role.",
      },
      {
        q: "What does cover letter writing cost for Singapore applications?",
        a: "Cover letter writing costs $79, $119 or $159 USD depending on experience level, matching the resume writing tiers. Adding a cover letter to a Singapore resume saves 20 percent, and taking resume, LinkedIn and cover letter together saves 30 percent. Standard delivery is 5 to 7 days.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /singapore/career-advice/{slug} : Singapore-specific articles       */
/* ------------------------------------------------------------------ */

const articles: CountryArticle[] = [
  {
    country: "singapore",
    slug: "singapore-resume-format",
    title: "Singapore resume format: the layout employers expect",
    metaTitle: "Singapore Resume Format: Sections and Layout",
    metaDescription:
      "The Singapore resume format section by section: header, work pass line, achievements, education and file conventions, and what to leave out.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "A Singapore resume follows a shape local and regional employers read quickly and confidently. Here is that shape, section by section, including the details that mark a resume as unfamiliar with the market.",
    quickAnswer:
      "The standard Singapore resume format is reverse chronological, one to two pages: contact details and a short summary, key skills, work experience with month and year dates, education, then certifications. It uses British English, an optional photo, no full NRIC or FIN number, and states nationality and work pass status for non-citizens. Most professionals fit it on one to two pages.",
    intro:
      "Singapore recruiters and hiring managers read a very high volume of applications, many of them from outside Singapore, and they are not looking for a creative layout. They are looking for the information in the place they expect it, so they can judge fit and eligibility in the first few lines. That makes the Singapore resume format less a design choice than a set of conventions shaped by a fast, international, pass-aware hiring market. This guide goes through it section by section, including the details that differ from a longer South Asian CV, a Gulf-style CV, or a US resume. For how much to write overall, see the guide to CV length; for the step-by-step writing method, see how to write a professional CV. This page is about the Singapore shape specifically.",
    sections: [
      {
        heading: "The standard order of a Singapore resume",
        paragraphs: [
          "Most Singapore resumes that get read follow the same order. Departing from it is fine when it earns its place, for example putting education first for a recent graduate with limited work experience.",
        ],
        bullets: [
          "Name and contact details: one or two lines at the top, no heading that says 'Resume' or 'Curriculum Vitae'",
          "Summary: three to four lines on your specialism, seniority and what you want next",
          "Key skills: a short, grouped list of specific tools, methods or systems, optional but common",
          "Work experience: most recent role first, with dates, employer, location and quantified achievements",
          "Education: degree, institution and dates",
          "Certifications and professional memberships: ISCA, CFA, PMP, Professional Engineer registration and similar",
          "Additional information: languages, and any relevant volunteering or professional activity",
        ],
      },
      {
        heading: "The header: what goes in and what stays out",
        paragraphs: [
          "A Singapore header is minimal and practical. Your full name, a mobile number with the country code, a professional email address, your city or country, and your LinkedIn URL. If you already live in Singapore, your neighbourhood or a general area is enough; a full block address is not needed. If you live overseas, state your real location honestly and add your relocation plans, such as 'Chennai, India. Open to relocating to Singapore, available from January 2027'.",
          "Nationality and work pass status earn a place that many other markets would not give them. If you are a Singapore citizen or permanent resident, a short line says so. If you would need an Employment Pass or S Pass, stating that plainly under your contact details removes a question every employer hiring a foreign candidate has to answer anyway, and it shows you understand how Singapore hiring works.",
          "What stays out is your full NRIC or FIN number. Singapore's Personal Data Protection Commission advises organisations against collecting or displaying full national identification numbers where it is not necessary, and a resume passed between recruiters and employers is not the place for one. Race, religion and marital status also have no place on a modern professional resume, even though older local templates sometimes still include them.",
        ],
      },
      {
        heading: "Laying out work experience the Singapore way",
        paragraphs: [
          "Each role opens with a consistent line: job title, employer, location and dates. Singapore convention is month and year, written as words or abbreviated, such as 'Jun 2021 to present'. Put the job title first if it is your strongest signal, or the employer first if the name carries more weight, which is common for well-known banks, tech firms or government-linked companies.",
          "Under each role, one line of context helps a reader unfamiliar with a smaller regional employer: what the organisation does, its size, and whether it serves the Singapore, Southeast Asian or global market. A Singapore-based hiring manager may not know a mid-size Sri Lankan bank or an Indian IT services firm by name, and one line closes that gap quickly.",
          "The bullets themselves should read as outcomes, not duties, with numbers doing the persuading: 'Reduced average claims processing time from six days to two across a regional operations team of fifteen' is exactly the register Singapore readers expect. Recent roles get four to six bullets. Roles from more than about ten years ago shrink to one or two lines, or move into a brief earlier-career line.",
        ],
      },
      {
        heading: "Education, certifications and professional bodies",
        paragraphs: [
          "State your degree, institution and graduation year, with your GPA or class of honours only if it is strong and recent, such as within the last five years. Singapore does not use the UK's classification system, so an overseas degree should be presented as awarded rather than converted into a Singapore-style grade.",
          "Professional certifications carry real weight and deserve their own section: ISCA membership for accountants working toward Singapore recognition, CFA for finance professionals, PMP for project managers, and Professional Engineer registration with the Professional Engineers Board for engineers signing off regulated work. Name the body in full once, state your status accurately, such as candidate, associate or full member, and give the year.",
          "School-level results have almost no place on a Singapore resume once you hold a degree and some work experience. Remove them, along with any school activities or achievements, and use the space for professional evidence instead.",
        ],
      },
      {
        heading: "File, platform and length conventions",
        paragraphs: [
          "Singapore resumes are commonly one to two pages, sent as Word documents or text-based PDFs. Both A4 and US Letter read fine on screen, since almost every Singapore resume is read digitally through email, MyCareersFuture, JobStreet or LinkedIn rather than printed. A clean single-column layout with clear section headings parses far more reliably in these systems than a designed template with columns, tables or a photo box.",
          "Name the file clearly, such as 'Firstname-Lastname-Resume.pdf'. Recruiters and in-house talent teams often forward resumes between colleagues or upload them directly into an applicant tracking system, and a plain, well-named file survives that process better than a heavily branded one.",
          "If your resume runs long because it was built for a market that expects more detail, cut before you polish. Shrinking roles from more than ten years ago, removing duties any reader would assume, and tightening the summary usually recovers the space needed to reach two pages without losing evidence.",
        ],
      },
      {
        heading: "British English and the small tells",
        paragraphs: [
          "Singapore follows British spelling: organise, programme, analysed, licence as a noun, and centre. Keep official product names and job titles as written, even when they use American spelling, since accuracy matters more than consistency there.",
          "Both 'resume' and 'CV' are used and understood in Singapore, so either heading is acceptable; most professional and MNC-facing documents default to 'resume'. Vocabulary that reads naturally in everyday conversation, including Singlish phrasing, has no place in a formal resume, even for candidates who use it comfortably elsewhere. The document should read as clean, formal English throughout.",
        ],
      },
    ],
    takeaways: [
      "Follow the standard order: contact details, summary, skills, experience, education, certifications.",
      "State nationality and work pass status near the top if you are not a citizen or permanent resident.",
      "Never include your full NRIC or FIN number on a resume.",
      "Write dates as month and year, most recent role first, with achievements led by numbers.",
      "Use a single-column layout in Word or a text-based PDF, in clean formal British English.",
    ],
    faqs: [
      {
        q: "What is the correct resume format for Singapore?",
        a: "The correct Singapore resume format is reverse chronological, one to two pages: contact details, a short summary, key skills, work experience with month and year dates, education and certifications. It uses British spelling, an optional photo, no full NRIC or FIN number, and states nationality and work pass status where relevant. Most professionals fit it comfortably on two pages.",
      },
      {
        q: "Is a resume the same as a CV in Singapore?",
        a: "In practice, yes. Singapore uses both terms interchangeably for the same document, unlike markets that draw a sharp distinction between the two. Most professional and MNC-facing applications default to 'resume', but a document titled 'Curriculum Vitae' following the same format is read the same way.",
      },
      {
        q: "Should I include a photo on a Singapore resume?",
        a: "A photo is optional and not expected. Many Singapore resumes, particularly for finance, technology and professional services roles, leave it off entirely, and that is completely normal. Add one only if an employer, recruiter or application platform specifically asks for it.",
      },
      {
        q: "Do I need a key skills section on a Singapore resume?",
        a: "A key skills section is optional but useful, especially for technical, finance and specialist roles, where it lets a reader confirm fit in a glance before reading the full experience section. Keep it short and specific, group related skills together, and make sure each important one also appears as evidence in your work experience.",
      },
    ],
    sources: [
      {
        label: "PDPC: Advisory Guidelines on the PDPA for NRIC and Other National Identification Numbers",
        url: "https://www.pdpc.gov.sg/guidelines-and-consultation/2020/02/advisory-guidelines-on-the-personal-data-protection-act-for-nric-and-other-national-identification-numbers",
      },
      {
        label: "MyCareersFuture: About Us",
        url: "https://www.mycareersfuture.gov.sg/about-us",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-long-should-a-cv-be", label: "How long should a CV be?" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/career-advice/ats-friendly-cv-format", label: "ATS-friendly CV format" },
      { href: "/singapore/career-advice/expected-salary-on-a-singapore-resume", label: "Expected salary on a Singapore resume" },
      { href: "/singapore/cv-writing", label: "Singapore resume writing service" },
    ],
  },
  {
    country: "singapore",
    slug: "expected-salary-on-a-singapore-resume",
    title: "Should you state expected salary on a Singapore resume?",
    metaTitle: "Expected Salary on a Singapore Resume: What to Do",
    metaDescription:
      "Whether to state expected salary on a Singapore resume, where employers actually ask for it, and how to give a realistic figure without underselling.",
    category: "Job search",
    readMinutes: 6,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Singapore employers ask for expected salary earlier and more directly than many markets. Here is where that question actually belongs, and how to answer it without weakening your position.",
    quickAnswer:
      "In most cases, leave expected salary off the resume itself and give it only when a job portal or application form asks directly. Singapore employers commonly request expected salary and notice period in the application, not on the document. Research a realistic range from the role's seniority and sector first, and give a range rather than a single figure unless the form requires one.",
    intro:
      "Singapore is unusual in how directly employers ask about money. Job portals like MyCareersFuture and JobStreet routinely include an expected salary field in the application form, and recruiters often raise it in the very first call. That directness catches some applicants off guard, especially those used to markets where salary discussion waits until an offer stage. This guide covers where expected salary actually belongs in a Singapore application, how to arrive at a realistic figure, and how notice period fits into the same conversation.",
    sections: [
      {
        heading: "Where expected salary actually belongs",
        paragraphs: [
          "Expected salary almost never belongs on the resume itself. Putting a figure in your summary or header anchors the conversation before an employer has read your evidence, and it dates the resume the moment your target changes. The resume's job is to make your value clear; the salary conversation happens in the application form, with a recruiter, or in a cover letter only when the advert specifically requests it there.",
          "Where it does belong is the application form. MyCareersFuture, JobStreet and most company career sites include a dedicated expected salary field, and leaving it blank when it is required usually blocks submission. Treat that field as part of the application, not the resume, and answer it deliberately rather than as an afterthought.",
        ],
      },
      {
        heading: "Why Singapore asks earlier than some other markets",
        paragraphs: [
          "Singapore's job market is fast and pass-aware. For roles that could involve sponsoring a foreign candidate, an employer needs to know early whether your expectations sit within what the role, and the relevant work pass framework, can support, so they ask directly rather than waiting. This is a screening efficiency, not a sign that the employer has already decided your value; a reasonable expected range does not rule you out.",
          "It also reflects a direct business culture generally. Singapore hiring managers and recruiters tend to ask practical questions early, including notice period and availability, because a fast-moving market rewards resolving logistics quickly rather than late in the process.",
        ],
      },
      {
        heading: "Working out a realistic figure",
        paragraphs: [
          "Base your expected salary on the seniority and function of the specific role, not only your current pay, especially if you are relocating from a market with a different cost of living or currency. Job listings on MyCareersFuture and JobStreet often show a salary range for comparable roles, which is a more useful anchor than a figure you have carried from a different market.",
          "Give a range rather than a single number where the form allows it, wide enough to leave room for negotiation but narrow enough to look considered, for example a spread of a few thousand dollars rather than a vague 'negotiable', which some Singapore recruiters read as unprepared rather than flexible. If a platform forces a single figure, pick the middle of your realistic range.",
          "If you genuinely do not know the market rate, say so honestly to a recruiter rather than guessing wildly in either direction. A figure that is far too low can undersell you before negotiation even starts, and a figure that is far too high can filter you out of a role you would otherwise have suited.",
        ],
      },
      {
        heading: "How notice period fits into the same conversation",
        paragraphs: [
          "Notice period is usually asked alongside expected salary, because Singapore employers plan hiring around both together. State your actual contractual notice period accurately rather than a hopeful shorter one; Singapore notice periods for professional roles commonly run one to three months, and overstating your availability creates a problem later rather than solving one now.",
          "If your notice period is unusually long, address it briefly and factually rather than leaving it to surprise the employer at offer stage. A short, honest line, such as noting a three-month notice period upfront, reads as more professional than an evasive answer once the topic comes up in interview.",
        ],
      },
      {
        heading: "Wording that works, and wording that does not",
        paragraphs: [
          "In an application form field, a range such as 'SGD 6,000 to 7,000 per month, negotiable based on the full package' is specific enough to be useful and flexible enough to leave room to talk. A single hard figure with no context, or a vague 'open to discussion' with no range at all, both give the employer less to work with.",
          "In a cover letter, only mention salary if the advert asks for it directly. If it does, keep it to one sentence near the end, stated factually, and return the rest of the letter to your fit for the role. Leading a cover letter with salary expectations, even when asked, reads as though the money matters more to you than the work.",
        ],
      },
    ],
    takeaways: [
      "Leave expected salary off the resume itself; it belongs in the application form or, when asked, the cover letter.",
      "Singapore employers ask early because it is standard screening practice, not a sign your value has already been decided.",
      "Anchor your expected figure to the role's seniority and sector, using job portal listings as a reference point.",
      "Give a range rather than a single number where the form allows it.",
      "State your real notice period accurately, and address a long one briefly and factually if it comes up early.",
    ],
    faqs: [
      {
        q: "Should I put my expected salary on my resume?",
        a: "No, keep expected salary off the resume itself. It belongs in the application form's dedicated field, in conversation with a recruiter, or in a cover letter only if the job advert specifically asks for it there. Putting a figure on the resume anchors the conversation too early and dates the document as soon as your target changes.",
      },
      {
        q: "Why do Singapore job applications ask for expected salary so directly?",
        a: "Singapore's hiring process is fast and practical, and many roles involve assessing whether a candidate's expectations fit the position, so employers ask early rather than waiting until an offer stage. It is a screening step, not a judgement on your value, and answering with a considered range keeps you in the process.",
      },
      {
        q: "Should I give a salary range or a single number?",
        a: "Give a range where the application allows it, wide enough to leave negotiating room but specific enough to look prepared, for example a spread of a few thousand dollars a month. A vague answer like 'negotiable' with no figure at all can read as unprepared rather than flexible in a market that expects a direct answer.",
      },
      {
        q: "What if I don't know the market rate for my role in Singapore?",
        a: "Check salary ranges on job listings for comparable roles on MyCareersFuture or JobStreet as a starting reference, rather than relying only on your current pay, especially if you are relocating. If you are still unsure, say so honestly to a recruiter and ask for guidance rather than guessing a figure that could undersell you or rule you out.",
      },
    ],
    sources: [
      {
        label: "MyCareersFuture: About Us",
        url: "https://www.mycareersfuture.gov.sg/about-us",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-to-tailor-a-cv-to-a-job-description", label: "Tailoring a CV to a job description" },
      { href: "/career-advice/how-to-follow-up-after-a-job-application", label: "Following up after a job application" },
      { href: "/singapore/career-advice/singapore-resume-format", label: "Singapore resume format" },
      { href: "/singapore/cover-letter-writing", label: "Singapore cover letter writing service" },
    ],
  },
  {
    country: "singapore",
    slug: "applying-for-singapore-jobs-as-a-foreigner",
    title: "Applying for Singapore jobs as a foreigner: what to know",
    metaTitle: "Applying for Singapore Jobs as a Foreigner",
    metaDescription:
      "How foreign professionals apply for Singapore jobs: resume conventions, work pass orientation, the Fair Consideration Framework, and mistakes to avoid.",
    category: "International careers",
    readMinutes: 8,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Singapore hires large numbers of foreign professionals every year, through a process that is efficient once you understand its shape. Here is what changes about your resume and your approach, and where to check the official detail.",
    quickAnswer:
      "To apply for Singapore jobs as a foreigner, convert your resume to local conventions (one to two pages, no full NRIC, quantified achievements, clear nationality and work pass status), target employers likely to sponsor a pass, and expect roles to move through the Ministry of Manpower's Fair Consideration Framework and, for Employment Pass roles, the COMPASS framework. Check current criteria on mom.gov.sg; this is orientation, not immigration advice.",
    intro:
      "Singapore's economy runs on foreign professional talent, and its hiring process is set up to move quickly once the paperwork on both sides is in order. Most foreign candidates who struggle are not short of relevant experience. They are sending a resume shaped by another market's conventions into a process where the employer is simultaneously judging fit and thinking about pass eligibility and Fair Consideration Framework obligations. This guide covers what changes about your resume, the practical steps of applying from outside Singapore, and where the official information on work passes lives, since none of what follows is legal or immigration advice.",
    sections: [
      {
        heading: "Start with the resume, not the visa question",
        paragraphs: [
          "Before anything else, convert your resume to Singapore conventions: one to two pages, a short summary, quantified achievements, British spelling, and no full NRIC or FIN number. Many overseas resumes carry a personal details block, subject-by-subject exam results, or a project-by-project IT layout that reads as unfamiliar to a Singapore employer, whatever the underlying experience.",
          "Add your nationality and current work pass status near the top. If you already hold a valid pass, such as an Employment Pass from a previous Singapore role, or if you are applying from abroad and would need one, state it plainly. It is one of the first things an employer hiring a foreign candidate has to work out, and answering it upfront moves your application faster than making the reader infer it.",
        ],
      },
      {
        heading: "How Singapore's work pass system shapes hiring, in outline",
        paragraphs: [
          "Singapore issues several categories of work pass for foreign employees, broadly split by role level: Employment Pass for professionals, managers and executives; S Pass for mid-level skilled roles; and Work Permits for other categories. Each category has its own eligibility framework, set and updated by the Ministry of Manpower, and criteria such as salary benchmarks and points requirements change from time to time.",
          "For Employment Pass roles specifically, applications are assessed through COMPASS, a points-based framework that looks at factors including salary, qualifications and workforce diversity, alongside the qualifying salary requirement. This is genuinely useful to know exists, but the specific thresholds move, so treat any number you read anywhere, including here, as something to verify directly on mom.gov.sg before you plan around it.",
          "Most employer-led hiring for Employment Pass and S Pass roles also sits inside the Fair Consideration Framework, which asks employers to advertise on MyCareersFuture and consider the local workforce fairly before hiring a foreign candidate for many roles. It does not bar foreign hiring; it is a process employers follow, and it is one reason a job advert may sit on MyCareersFuture for a period before an offer is made.",
        ],
      },
      {
        heading: "Target employers who can realistically sponsor a pass",
        paragraphs: [
          "Large multinationals with a Singapore regional headquarters, established local companies, and firms in shortage or priority sectors are generally more practised at sponsoring foreign hires than very small businesses, simply because they do it more often. That does not rule out smaller employers, but it is worth checking a company's scale and hiring history, through its own careers page or a recruiter, before investing heavily in an application.",
          "Specialist recruitment agencies operating in Singapore handle a large share of foreign professional hiring, particularly in finance, technology and biomedical sciences. Approach agencies that work in your field, be upfront about your nationality and pass situation from the first conversation, and ask directly whether their client roles are open to sponsoring a pass.",
        ],
      },
      {
        heading: "Get qualifications and registration in order early",
        paragraphs: [
          "Regulated professions need registration with the relevant Singapore body before you can practise, and that process takes time, so start it early rather than after an offer. Nurses register with the Singapore Nursing Board, and accountants working toward local recognition typically engage with the Institute of Singapore Chartered Accountants. Engineers signing off regulated work register with the Professional Engineers Board. For other roles, employers generally accept overseas degrees as stated, with the institution and result, rather than requiring formal conversion.",
          "If your profession has a Singapore regulator, read its guidance for foreign-trained applicants directly, since requirements and processing times vary significantly by field and change periodically.",
        ],
      },
      {
        heading: "Rebuild your resume and LinkedIn together",
        paragraphs: [
          "Once the resume follows Singapore conventions, bring LinkedIn into line with it: the same job titles, the same dates, and a real location with your relocation plans stated honestly in the headline or About section. Singapore recruiters, particularly at regional headquarters, search LinkedIn heavily, and a profile that contradicts the resume raises exactly the kind of question you want to avoid.",
        ],
      },
      {
        heading: "Prepare for a fast, practical process",
        paragraphs: [
          "Expect early interviews by video, and expect direct questions about expected salary and notice period, often in the very first conversation. This is standard Singapore practice, not a sign of a low offer, so have a realistic range ready rather than being caught off guard.",
          "Once an offer is made, pass applications and any registration processes take real time to complete, and timelines are set by the Ministry of Manpower and the relevant regulator, not by the employer alone. Build that into your own planning, particularly around resigning from a current role.",
        ],
      },
    ],
    takeaways: [
      "Convert your resume to Singapore conventions first: length, tone, and no full NRIC or FIN number.",
      "State your nationality and work pass status plainly near the top of the resume.",
      "Understand the outline of Employment Pass, S Pass and Work Permit categories, and verify any current criteria on mom.gov.sg.",
      "Target employers with a track record of sponsoring foreign hires, and use specialist agencies deliberately.",
      "Start professional registration early where your field requires it, and expect direct questions about salary and notice period.",
    ],
    faqs: [
      {
        q: "Can I apply for Singapore jobs from outside Singapore?",
        a: "Yes, many employers interview overseas candidates by video and hire foreign professionals routinely, especially in finance, technology and biomedical sciences. What matters is whether the role and your profile can realistically support a work pass. Convert your resume to Singapore conventions and state your nationality and pass position clearly so the application is judged on your experience.",
      },
      {
        q: "What is the Fair Consideration Framework, in simple terms?",
        a: "The Fair Consideration Framework is a Ministry of Manpower requirement that employers advertise many roles on MyCareersFuture and consider the local workforce fairly before hiring a foreign candidate. It does not stop foreign hiring; it shapes the timeline and process, which is one reason a suitable role may stay open for a period before an offer is confirmed. Check mom.gov.sg for the current scope.",
      },
      {
        q: "What is COMPASS and do I need to understand it?",
        a: "COMPASS is the points-based framework the Ministry of Manpower uses to assess Employment Pass applications, looking at factors such as salary, qualifications and workforce diversity. As an applicant, you do not need to calculate your own score, but it helps to know it exists, since it is one reason employers ask directly about salary expectations and qualifications early. Current criteria are on mom.gov.sg.",
      },
      {
        q: "Should I mention needing a work pass on my resume?",
        a: "Yes, state your nationality and pass status plainly, whether that is 'Singapore Citizen', 'Singapore Permanent Resident', 'Employment Pass holder' or 'Would require an Employment Pass'. Employers hiring foreign candidates work through pass and Fair Consideration Framework requirements regardless, so a clear statement helps them assess your application faster rather than leaving it to guesswork.",
      },
      {
        q: "Do Singapore employers accept overseas degrees?",
        a: "Most Singapore employers accept overseas degrees as stated, with the institution, qualification and result given plainly rather than converted into a local equivalent. For regulated professions such as nursing, accounting recognition or professional engineering, registration with the relevant Singapore body matters more than the degree itself, and that process should start as early as possible.",
      },
      {
        q: "How long does it take to get a Singapore work pass?",
        a: "Timelines vary by pass type, sector, and how complete the application is, and they are set by the Ministry of Manpower rather than the employer. Since criteria and processing times change, check current guidance directly on mom.gov.sg before relying on a figure from any other source, including this one.",
      },
    ],
    sources: [
      {
        label: "MOM: Employment Pass eligibility",
        url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility",
      },
      {
        label: "MOM: Complementarity Assessment Framework (COMPASS)",
        url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/upcoming-changes-to-employment-pass-eligibility/complementarity-assessment-framework-compass",
      },
      {
        label: "MOM: Fair Consideration Framework",
        url: "https://www.mom.gov.sg/employment-practices/fair-consideration-framework",
      },
      {
        label: "MOM: Passes and permits overview",
        url: "https://www.mom.gov.sg/passes-and-permits",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/cv-for-a-new-market", label: "Adapting a CV for a new market" },
      { href: "/career-advice/linkedin-for-international-job-search", label: "LinkedIn for international job search" },
      { href: "/singapore/international-job-seekers", label: "Applying for Singapore jobs from abroad" },
      { href: "/singapore/career-advice/singapore-resume-format", label: "Singapore resume format" },
      { href: "/cv-samples/international-cv", label: "International CV sample" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /singapore/international-job-seekers : destination hub              */
/* ------------------------------------------------------------------ */

const ijsHub: IjsHub = {
  country: "singapore",
  metaTitle: "Applying for Singapore Jobs From Abroad",
  metaDescription:
    "How to apply for Singapore jobs from overseas: resume conventions, work pass orientation, the Fair Consideration Framework, agencies and mistakes to avoid.",
  h1: "Applying for Singapore Jobs From Abroad",
  lead:
    "A resume built for Colombo, Chennai, Dubai or Manila will be read in Singapore as a resume built for somewhere else. The format is concise, the tone is direct, and your nationality and work pass position sit under every read.",
  quickAnswer:
    "To apply for Singapore jobs from abroad, convert your resume to local conventions (one to two pages, no full NRIC or FIN, quantified achievements, British English), state your nationality and work pass status honestly, and target employers likely to sponsor a pass. Check current work pass criteria and the Fair Consideration Framework on mom.gov.sg. This is orientation only, not immigration advice.",
  overview:
    "Most international applicants who struggle in Singapore are not short of relevant experience. They are sending a resume that follows another market's rules into a process where the employer is judging fit and pass eligibility at the same time. Every unfamiliar signal slows that down: a four-page resume, a personal details block with a full national ID number, duties written instead of results, an unclear nationality or work pass position. Fix those, and your experience gets read on its merits. This page covers the resume conventions, the practical steps of applying from outside Singapore, and where the official work pass information lives.",
  cvConventions: [
    { label: "Length", value: "One to two pages for most professionals. Longer resumes tend to be skimmed rather than read." },
    { label: "Photo", value: "Optional. Not expected, and leaving it off is normal; include one only if specifically asked for." },
    { label: "Personal details", value: "Name, city and country, phone with country code, email, LinkedIn. Never your full NRIC or FIN number." },
    { label: "Nationality and work pass", value: "Stated plainly near the top for anyone who is not a Singapore citizen or permanent resident." },
    { label: "Opening", value: "A three to four line summary aimed at the target role, not an objective statement." },
    { label: "Experience", value: "Reverse chronological, month and year dates, achievements with scope and outcomes." },
    { label: "Spelling", value: "British English. 'Resume' and 'CV' are both used and understood." },
  ],
  whatChanges: [
    "Cut to one or two pages by shrinking roles older than about ten years and removing duties any reader would assume",
    "Remove your full NRIC, FIN or other national ID number and any personal details block built for a different market",
    "Replace an objective statement with a short summary that states your specialism, evidence and target role",
    "Add one line of context under unfamiliar employers: sector, size and what they do",
    "State your nationality and current work pass status plainly, rather than leaving it to be inferred",
    "Present overseas qualifications as awarded, and add certifications a Singapore employer will recognise, such as ISCA, CFA or Professional Engineer registration",
    "Switch to British spelling and a direct, metrics-led tone",
  ],
  applyingFromAbroad: [
    {
      title: "Understand the outline of your likely pass route",
      body: "Whether you would need an Employment Pass, S Pass or another category shapes which roles and employers are realistic. Read the pass overview and eligibility pages on mom.gov.sg to understand the general category you would fall into, and treat any specific salary or points figure as something to verify directly, since criteria change.",
    },
    {
      title: "Target employers who can realistically sponsor a pass",
      body: "Regional headquarters of multinationals, established local employers and firms in shortage or priority sectors are generally more practised at sponsoring foreign hires. Checking a company's scale and hiring history before applying saves time on roles that are unlikely to go through.",
    },
    {
      title: "Get qualifications and registration moving early",
      body: "Regulated professions such as nursing, accounting recognition and professional engineering require registration with the relevant Singapore body, and that process takes time. Start it as soon as you are seriously targeting Singapore, not after an offer arrives.",
    },
    {
      title: "Rebuild your resume and LinkedIn together",
      body: "Convert your resume to Singapore format and bring LinkedIn into line: same titles, same dates, British spelling. Keep your LinkedIn location honest and state your relocation and work pass plans in the headline or About section.",
    },
    {
      title: "Use specialist recruitment agencies deliberately",
      body: "Agencies handle a large share of Singapore's foreign professional hiring, particularly in finance, technology and biomedical sciences. Approach agencies that work in your field, be upfront about your nationality and pass situation early, and ask plainly whether their client roles are open to sponsorship.",
    },
    {
      title: "Prepare for a fast, direct process",
      body: "Early interviews are usually by video, and expect direct questions about expected salary and notice period early on, often in the first conversation. Have a realistic range ready and state your actual notice period accurately.",
    },
  ],
  keySectors: [
    "Banking, financial services and fintech",
    "Technology, software engineering and data",
    "Biomedical sciences, pharmaceuticals and healthcare",
    "Logistics, supply chain and maritime",
    "Professional services: accounting, legal and consulting",
    "Advanced manufacturing and engineering",
  ],
  visaContext:
    "Foreign professionals generally need a valid work pass to work in Singapore. Employer-led professional hiring most often uses the Employment Pass, assessed against a qualifying salary and, for most applications, the points-based COMPASS framework, while mid-level skilled roles may use the S Pass. Many employer-led applications also sit within the Fair Consideration Framework, which asks employers to advertise on MyCareersFuture and consider the local workforce fairly before hiring a foreign candidate. Eligible occupations, salary benchmarks and points criteria change, so rely on mom.gov.sg or a qualified adviser, not on a resume writer. This is orientation only, not immigration advice.",
  commonMistakes: [
    "Sending a three or four page resume into a market that expects one to two",
    "Including a full NRIC, FIN or other national ID number on a document that circulates between recruiters and employers",
    "Leaving nationality and work pass status vague, so the employer has to guess",
    "Applying to very small employers unlikely to have sponsored a pass before",
    "Writing achievements as duties instead of quantified outcomes",
    "Giving a vague or unrealistic expected salary when a job portal asks for one directly",
    "Setting a false Singapore location on LinkedIn, which unravels on the first call",
  ],
  faqs: [
    {
      q: "Can I apply for Singapore jobs from outside Singapore?",
      a: "Yes, many Singapore employers interview overseas candidates by video and hire foreign professionals routinely, particularly in finance, technology and biomedical sciences. What matters is whether your role and profile can realistically support a work pass. Convert your resume to Singapore conventions and state your nationality and pass position clearly so the application is judged on your experience.",
    },
    {
      q: "Should I state that I would need a work pass on my resume?",
      a: "Yes, state your nationality and pass status plainly near the top, whether that is 'Singapore Citizen', 'Singapore Permanent Resident', 'Employment Pass holder' or 'Would require an Employment Pass'. Employers hiring foreign candidates work through pass requirements regardless, so a clear statement helps them assess your application faster rather than leaving it to guesswork.",
    },
    {
      q: "How do I find Singapore employers open to hiring foreigners?",
      a: "Look at company scale and hiring history: regional headquarters of multinationals and established local employers in shortage or priority sectors are generally more practised at sponsoring foreign hires. Specialist recruitment agencies in your field are also a practical route, since they know which client roles are realistically open to candidates who would need a pass.",
    },
    {
      q: "Do Singapore employers accept overseas degrees?",
      a: "Most Singapore employers accept overseas degrees as stated, with the institution, qualification and result given plainly rather than converted into a local grading system. For regulated professions such as nursing, accounting recognition through ISCA, or professional engineering through the Professional Engineers Board, registration matters more than the degree comparison itself.",
    },
    {
      q: "Is a Singapore resume different from a resume in my home market?",
      a: "Often, yes. A Singapore resume is typically one to two pages, direct and metrics led, with British spelling and no full national ID number, and it states nationality and work pass status where relevant. A longer CV built around personal biodata, subject-by-subject exam results, or a project-by-project IT layout usually needs restructuring before it reads well to a Singapore employer.",
    },
    {
      q: "Do I need a Singapore address or phone number to apply?",
      a: "No, you do not need a Singapore address or phone number to apply. Give your real city and country and a mobile number with the international code, plus a professional email and LinkedIn URL. Add a line about your relocation timing so employers know when you could realistically start. A false Singapore location tends to unravel at the first conversation.",
    },
  ],
  sources: [
    { label: "MOM: Passes and permits overview", url: "https://www.mom.gov.sg/passes-and-permits" },
    { label: "MOM: Employment Pass eligibility", url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility" },
    {
      label: "MOM: Complementarity Assessment Framework (COMPASS)",
      url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/upcoming-changes-to-employment-pass-eligibility/complementarity-assessment-framework-compass",
    },
    { label: "MOM: S Pass", url: "https://www.mom.gov.sg/passes-and-permits/s-pass" },
    { label: "MOM: Fair Consideration Framework", url: "https://www.mom.gov.sg/employment-practices/fair-consideration-framework" },
    {
      label: "PDPC: Advisory Guidelines on the PDPA for NRIC and Other National Identification Numbers",
      url: "https://www.pdpc.gov.sg/guidelines-and-consultation/2020/02/advisory-guidelines-on-the-personal-data-protection-act-for-nric-and-other-national-identification-numbers",
    },
    { label: "MyCareersFuture: About Us", url: "https://www.mycareersfuture.gov.sg/about-us" },
  ],
};

/* ------------------------------------------------------------------ */
/* /singapore/international-job-seekers/from-{origin}                  */
/* ------------------------------------------------------------------ */

const origins: OriginCorridor[] = [
  {
    country: "singapore",
    origin: "sri-lanka",
    originName: "Sri Lanka",
    metaTitle: "Singapore Resume for Sri Lankans: Applying From Sri Lanka",
    metaDescription:
      "How to turn a Sri Lankan CV into a Singapore resume: remove NIC and personal details, rethink O/L and A/L results, and position CIMA, ACCA or SNB routes.",
    h1: "Applying for Singapore Jobs From Sri Lanka",
    lead:
      "Sri Lankan CVs are built for a market that expects a personal details block, exam results and two non-related referees. Singapore employers expect almost none of that, and the conversion is mostly about what to take out and what to state plainly instead.",
    quickAnswer:
      "To apply for Singapore jobs from Sri Lanka, rewrite your CV to Singapore conventions: remove the NIC number, date of birth, religion, marital status and referees, cut O/L and A/L results once you have experience, and replace the objective with a short summary. State your nationality and work pass position, present CIMA, ACCA, CA Sri Lanka or nursing credentials clearly, and check current work pass routes on mom.gov.sg.",
    overview:
      "Sri Lanka sends a steady flow of professionals into Singapore, particularly in banking, technology, biomedical sciences and nursing, and many already hold British-linked qualifications through CIMA, ACCA or UK degrees delivered locally, which read well outside Sri Lanka too. The obstacle is rarely capability. It is a CV format shaped by Sri Lankan norms: a personal details section, subject-by-subject exam results, school achievements, a declaration and two referees with full contact details. To a Singapore reader these are unfamiliar signals that crowd out the evidence and slow down a fast-moving screening process. The fix is structural, and once made, a Sri Lankan candidate's internationally recognised qualifications often become a genuine advantage.",
    whatToChange: [
      {
        from: "A 'Personal Details' block with NIC number, date of birth, gender, religion, nationality and marital status",
        to: "Name, city and country, phone with +94, email and LinkedIn, plus a plain nationality and work pass line. No ID numbers of any kind",
      },
      {
        from: "G.C.E. O/L and A/L results listed subject by subject with grades",
        to: "Remove them once you have a degree and a few years of experience. Graduates can keep one line summarising A/L stream and results",
      },
      {
        from: "Two 'non-related referees' with names, designations, phone numbers and addresses",
        to: "No referees on the resume. Singapore employers request them later, usually closer to an offer",
      },
      {
        from: "An 'Objective' about seeking a challenging position in a reputed organisation",
        to: "A three to four line summary stating your specialism, evidence and target Singapore role",
      },
      {
        from: "School prefect roles, sports colours and extracurricular activities from school",
        to: "Leave school activities out entirely once you have work experience",
      },
      {
        from: "A closing declaration that the information is true, with date and signature",
        to: "Remove it. Singapore resumes do not carry declarations or signatures",
      },
      {
        from: "Duties copied from a job description, often across three or four pages",
        to: "One to two pages, achievements with scope and outcomes, and one line of context about each Sri Lankan employer",
      },
      {
        from: "No mention of nationality or right to work anywhere on the document",
        to: "A short, plain statement of nationality and current work pass status, since Singapore employers screen for this early",
      },
    ],
    qualificationsNote:
      "Many Sri Lankan professionals hold qualifications that read well in Singapore without heavy translation. CIMA and ACCA are internationally recognised professional bodies widely held by Sri Lankan accountants, so state your membership status exactly, such as student, affiliate, member or fellow, with the year; Singapore employers and the Institute of Singapore Chartered Accountants, the national accountancy body, are familiar with both. CA Sri Lanka membership should be written in full as The Institute of Chartered Accountants of Sri Lanka, since the abbreviation alone is less recognisable outside Sri Lanka. A degree from a UK or other internationally recognised university delivered through a Sri Lankan partner institution should name the awarding university first and the local delivery centre second. Nurses need registration with the Singapore Nursing Board to practise, and engineers doing regulated work register with the Professional Engineers Board; Sri Lanka's engineering degree accreditation through IESL sits within the Washington Accord, which is a useful starting reference point.",
    sectorsWhereCandidatesCompete: [
      "Banking, finance and fintech, especially with CIMA or ACCA",
      "Software engineering, QA and data, often with experience delivering for regional or global clients",
      "Nursing and healthcare",
      "Biomedical sciences and pharmaceuticals",
      "Hospitality and specialist culinary roles",
      "Business analysis and IT project management",
    ],
    practicalSteps: [
      {
        title: "Strip the Sri Lankan format first",
        body: "Before you touch the wording, remove the NIC number, the personal details block, school results, referees and the declaration. You will usually recover close to a page, which is the space you need for evidence.",
      },
      {
        title: "Add the Singapore-specific line the old CV never needed",
        body: "State your nationality and current work pass status plainly, since it is one of the first things a Singapore employer works out about any candidate who is not local.",
      },
      {
        title: "Explain employers a Singapore reader will not know",
        body: "A reader in Singapore does not know a Colombo conglomerate, a regional bank or a local software house by name. Add one line under each: sector, size, and whether it serves Singapore, regional or global clients, which is often the case for Sri Lankan IT firms.",
      },
      {
        title: "Lead with internationally recognised credentials",
        body: "If you are CIMA or ACCA qualified, or hold a UK or other internationally recognised degree earned in Sri Lanka, make it visible in your summary. It answers the recognition question before the reader asks it.",
      },
      {
        title: "Sort registration before you apply in regulated fields",
        body: "Nurses should read the Singapore Nursing Board's guidance for foreign-trained applicants early, since registration steps take time and employers often ask where you are in the process.",
      },
      {
        title: "Work with the time difference",
        body: "Singapore is two and a half hours ahead of Sri Lanka year round. That is a manageable overlap for calls; confirm every interview time in Singapore time and keep your phone reachable during Singapore business hours.",
      },
    ],
    commonMistakes: [
      "Keeping the NIC number and personal details block on a resume that will be forwarded between agencies and employers",
      "Listing O/L results years into a professional career",
      "Including two non-related referees with full contact details on the resume",
      "Writing CIMA or ACCA status loosely, such as 'CIMA qualified' when only some levels are complete",
      "Leaving nationality and work pass status off the resume entirely",
      "Assuming a Singapore reader knows Sri Lankan employers, universities or grading",
    ],
    visaContext:
      "Sri Lankan nationals generally need a work pass to work in Singapore. For most professional roles that means the Employment Pass, assessed against a qualifying salary and, for most applications, the COMPASS framework, or the S Pass for mid-level skilled roles. Many employer-led applications also sit within the Fair Consideration Framework. Check your own situation on mom.gov.sg, and treat any specific figure as something to verify directly, since criteria change. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I include my NIC number on a resume for Singapore jobs?",
        a: "No, never include your Sri Lankan NIC number, or any national ID number, on a Singapore resume. Singapore employers do not use it, and it is unnecessary personal data on a document that may pass through several recruiters and inboxes. Identity and work pass documents are checked separately, later in the process, through the employer's own verification.",
      },
      {
        q: "Are CIMA and ACCA recognised by Singapore employers?",
        a: "Yes, CIMA and ACCA are internationally recognised professional bodies and Singapore employers are familiar with both. State your exact status, such as passed finalist, member or fellow, with the year, since Singapore employers treat part-qualified and fully qualified candidates differently. Pair the credential with evidence of the work you did, such as reporting, budgeting or audit scope.",
      },
      {
        q: "Should I list my O/L and A/L results on a Singapore resume?",
        a: "Only if you are a recent graduate, and then in a single summary line rather than subject by subject. Once you have a degree and professional experience, remove them. Sri Lankan exam grading is unfamiliar to most Singapore recruiters, so it uses space without adding weight once you have stronger evidence to show.",
      },
      {
        q: "Can Sri Lankan nurses work in Singapore?",
        a: "Yes, Sri Lankan nurses can work in Singapore once they meet the Singapore Nursing Board's registration requirements for foreign-trained applicants and hold the right work pass. The registration process includes an offer of employment, eligibility checks and a licensure examination, so read the board's guidance early and show your clinical areas and settings clearly on your resume.",
      },
      {
        q: "How do I present a UK or other overseas degree I studied for in Sri Lanka?",
        a: "Name the awarding university first, then the institution where you actually studied, for example 'BSc (Hons) Computer Science, awarded by [university], delivered at a partner institute in Colombo', with your classification or grade. The award is what it is, so present it accurately. Be precise about where you studied, since employers may verify it.",
      },
    ],
    sources: [
      {
        label: "MOM: Employment Pass eligibility",
        url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility",
      },
      {
        label: "MOM: S Pass",
        url: "https://www.mom.gov.sg/passes-and-permits/s-pass",
      },
      {
        label: "Singapore Nursing Board: Foreign trained nurses and midwives",
        url: "https://www.snb.gov.sg/for-professionals/becoming-a-nurse-or-midwife/apply-for-registration-enrolment/foreign-trained-nurses-midwives/",
      },
      {
        label: "ISCA: About the Institute of Singapore Chartered Accountants",
        url: "https://isca.org.sg/about-us/about-the-institute-of-singapore-chartered-accountants",
      },
      {
        label: "Professional Engineers Board Singapore",
        url: "https://www1.peb.gov.sg/",
      },
    ],
  },
  {
    country: "singapore",
    origin: "india",
    originName: "India",
    metaTitle: "Singapore Resume for Indians: Applying From India",
    metaDescription:
      "How to convert an Indian CV for Singapore employers: drop CTC and the declaration, restructure IT project CVs, and present CGPA and ICAI status clearly.",
    h1: "Applying for Singapore Jobs From India",
    lead:
      "Indian CVs are written for Indian job portals and IT services recruiters: CTC and notice period up top, projects listed client by client, a personal profile with father's name, and a signed declaration. A Singapore reader wants a shorter, more direct document.",
    quickAnswer:
      "To apply for Singapore jobs from India, rebuild your CV to Singapore conventions: remove CTC, father's name, date of birth and the declaration; turn project-by-project IT listings into role-based achievements; state CGPA and degrees as awarded; and cut to one or two pages. State your nationality and work pass position, present ICAI, ACCA or SNB status accurately, and check current pass routes on mom.gov.sg.",
    overview:
      "Indian professionals form one of the largest groups of foreign hires in Singapore, above all in technology, finance, engineering and biomedical sciences, and many already work with regional or Singapore-based clients through global delivery models. The challenge is that Indian CV habits come from a different hiring system: portal keyword stuffing, CTC-based negotiation, long notice periods, and IT services CVs organised around client projects rather than employers. Singapore readers, who move through a large volume of applications quickly, find those CVs long, repetitive and hard to scan for actual impact. The conversion is about reorganising around your own contribution and removing details that belong to the Indian process rather than the Singapore one.",
    whatToChange: [
      {
        from: "'Current CTC', 'Expected CTC' in lakhs and 'Notice period' at the top of the resume",
        to: "Remove salary figures from the resume entirely. Give expected salary and notice period only when a Singapore job portal or application form asks for them directly",
      },
      {
        from: "A 'Personal Profile' with father's name, date of birth, gender, marital status, nationality and languages known",
        to: "Name, city and country, phone with +91, email and LinkedIn, plus a plain nationality and work pass line. Languages go in a short additional information line",
      },
      {
        from: "IT services format: Project 1, Project 2, each with client, duration, team size, environment and 'roles and responsibilities'",
        to: "Organise by employer and role. Summarise the technology stack once, and write achievements that show what you built, improved or led across projects",
      },
      {
        from: "Class 10 and Class 12 board percentages alongside the degree",
        to: "Remove school results once you have a degree and experience. State the degree with institution and CGPA or class as awarded",
      },
      {
        from: "A 'Career Objective' and a long 'Strengths' list of personal qualities",
        to: "A three to four line summary with your specialism, evidence and target Singapore role",
      },
      {
        from: "'I hereby declare that the above information is true to the best of my knowledge', with place, date and signature",
        to: "Remove it. Singapore resumes have no declaration, place, date or signature",
      },
      {
        from: "A skills block listing every tool ever touched, written for job-portal keyword searches",
        to: "A grouped list of the skills relevant to the Singapore role, each important one proven inside your experience",
      },
      {
        from: "No mention of nationality or work pass status anywhere on the document",
        to: "A short, plain statement of nationality and current work pass status, since Singapore employers screen for this early",
      },
    ],
    qualificationsNote:
      "Indian degrees are familiar to many Singapore employers, particularly in technology, but grading and institution names still benefit from clarity. State the degree as awarded, such as B.Tech or BE, with the institution and CGPA out of 10 or the class awarded, rather than converting it yourself. Chartered accountants should write their ICAI membership in full and note that Singapore's national accountancy body, the Institute of Singapore Chartered Accountants, is the relevant reference point for local recognition; ACCA, also widely held in India, is recognised in Singapore too. Nurses need Singapore Nursing Board registration, which requires an offer of employment from an eligible institution and a licensure examination. Engineers doing regulated work register with the Professional Engineers Board, and Indian degrees accredited by the National Board of Accreditation sit within the Washington Accord, which is a useful starting reference point for engineering recognition.",
    sectorsWhereCandidatesCompete: [
      "Software engineering, cloud, data and cybersecurity",
      "IT consulting and business analysis, often with regional or Singapore client experience",
      "Banking, finance and fintech",
      "Biomedical sciences and pharmaceuticals",
      "Engineering and infrastructure",
      "Logistics and supply chain",
    ],
    practicalSteps: [
      {
        title: "Reorganise around roles, not projects",
        body: "If you have spent years on client projects at an IT services firm, group them under your employer and title, then pick the four to six outcomes that show the most responsibility. The Singapore reader wants your trajectory, not every engagement.",
      },
      {
        title: "Add the Singapore-specific line the old CV never needed",
        body: "State your nationality and current work pass status plainly. It is one of the first things a Singapore employer has to work out about a foreign candidate, and stating it saves a round of back and forth.",
      },
      {
        title: "Remove the Indian process details",
        body: "CTC, expected salary figures, father's name, declaration and signature all belong to Indian hiring processes. Removing them usually saves close to a page and speeds up how quickly a Singapore reader gets to your evidence.",
      },
      {
        title: "Plan around your notice period",
        body: "Indian notice periods are often longer than what a fast-moving Singapore employer expects. Do not put this on the resume, but be ready to state your realistic start date clearly and factually when a recruiter or application form asks.",
      },
      {
        title: "Check the pass route outline early",
        body: "Read the Employment Pass and S Pass pages on mom.gov.sg before you apply in earnest, since eligibility depends on your role, salary and qualifications, and criteria change over time.",
      },
      {
        title: "Schedule for Singapore hours",
        body: "Singapore is two and a half hours ahead of India year round. Offer interview windows in Singapore time, and avoid clashing with your current employer's core hours by suggesting Singapore mornings, which usually fall in your late morning in India.",
      },
    ],
    commonMistakes: [
      "Leaving CTC and expected CTC on the resume, which Singapore employers find unusual there",
      "Keeping the project-by-project IT services layout that runs to four or five pages",
      "Listing Class 10 and 12 percentages years into a career",
      "Including father's name, date of birth and a signed declaration",
      "Leaving nationality and work pass status off the resume entirely",
      "Converting CGPA into a guessed classification instead of stating it as awarded",
    ],
    visaContext:
      "Indian nationals generally need a work pass to work in Singapore. Employer-led professional hiring most often uses the Employment Pass, assessed against a qualifying salary and, for most applications, the COMPASS framework, or the S Pass for mid-level skilled roles. Many employer-led applications also sit within the Fair Consideration Framework. Criteria change, so check mom.gov.sg directly and treat any specific figure as something to verify. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I mention my CTC on a resume for Singapore jobs?",
        a: "No, do not put your current or expected CTC on a Singapore resume. Singapore employers do not expect salary on the resume, and figures in lakhs mean little to them without context. Salary comes up directly in the application form or in conversation with a recruiter, usually against the Singapore range for the role. Use the space for evidence of your impact instead.",
      },
      {
        q: "How do I convert an Indian IT CV into a Singapore resume?",
        a: "Reorganise it by employer and role rather than by client project, summarise the technology stack once, and write four to six achievements per recent role that show what you built, improved or led. Remove CTC, the personal profile block and declaration, add a nationality and work pass line, then cut to one or two pages. Singapore readers want your trajectory, not every engagement.",
      },
      {
        q: "Should I convert my CGPA to a different grading scale?",
        a: "No, state your CGPA as awarded, for example 'CGPA 8.4/10', with the degree and institution. Converting it yourself into a different classification can look like an overclaim. Singapore employers generally read Indian CGPA figures as given rather than expecting a conversion.",
      },
      {
        q: "Is ICAI recognised in Singapore?",
        a: "ICAI qualified accountants are respected in Singapore, and the relevant local body for accountancy recognition is the Institute of Singapore Chartered Accountants, Singapore's national accountancy body. State your ICAI membership in full and pair it with the specific reporting, audit or finance work you have done, since Singapore employers weigh demonstrated scope alongside the credential.",
      },
    ],
    sources: [
      {
        label: "MOM: Employment Pass eligibility",
        url: "https://www.mom.gov.sg/passes-and-permits/employment-pass/eligibility",
      },
      {
        label: "MOM: S Pass",
        url: "https://www.mom.gov.sg/passes-and-permits/s-pass",
      },
      {
        label: "Singapore Nursing Board: Foreign trained nurses and midwives",
        url: "https://www.snb.gov.sg/for-professionals/becoming-a-nurse-or-midwife/apply-for-registration-enrolment/foreign-trained-nurses-midwives/",
      },
      {
        label: "ISCA: About the Institute of Singapore Chartered Accountants",
        url: "https://isca.org.sg/about-us/about-the-institute-of-singapore-chartered-accountants",
      },
      {
        label: "Professional Engineers Board Singapore",
        url: "https://www1.peb.gov.sg/",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /singapore/career-advice : hub intro                                */
/* ------------------------------------------------------------------ */

const adviceHubIntro =
  "Singapore hiring has its own habits. The resume is short (one to two pages), the tone is direct and metrics led, nationality and work pass status are stated plainly rather than left unsaid, and employers routinely ask about expected salary and notice period in the application itself. These guides cover what is specific to Singapore: the resume format, how to handle the expected salary question, and what changes for foreign applicants. For universal advice on structure, achievements and ATS, the global career advice library goes deeper. If you are applying from abroad, start with the international job seekers guide.";

export const singaporeBundle: CountryBundleFull = {
  country: "singapore",
  market,
  adviceHubIntro,
  services,
  articles,
  ijsHub,
  origins,
};
