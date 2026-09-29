/**
 * AUSTRALIA COUNTRY BUNDLE
 * ------------------------------------------------------------------
 * Powers the whole Australia mini-site: the /australia hub, the three
 * localised service pages, three Australia-specific articles, the
 * international job seekers hub and the Sri Lanka and India origin
 * corridors.
 *
 * Australian English (British spelling) throughout, "resume" as the
 * primary term with "CV" understood. Prices in USD only. Visa and
 * skilled migration content is orientation only and always points to
 * the Department of Home Affairs or the relevant assessing authority.
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
/* /australia : country hub                                            */
/* ------------------------------------------------------------------ */

const market: CountryMarket = {
  slug: "australia",
  name: "Australia",
  adjective: "Australian",
  flag: "🇦🇺",
  code: "AU",
  locale: "en-AU",
  quickAnswer:
    "An Australian resume usually runs two to four pages, longer than a UK CV or US resume, because employers expect concrete evidence and, for government and many large-employer roles, a separate response to key selection criteria. Chanuka Jeewantha writes Australian resumes, LinkedIn profiles and cover letters personally, in Australian English, from $129 USD, with standard delivery in 5 to 7 days.",
  metaTitle: "Resume, LinkedIn and Cover Letter Writing Australia",
  metaDescription:
    "Resumes, LinkedIn profiles and cover letters written for Australian employers: two to four pages, selection criteria support, referees done right. USD pricing.",
  heroHeading: "Resume, LinkedIn and Cover Letter Writing for Australia",
  heroLead:
    "An Australian resume runs longer than a UK CV and expects more evidence: referees named directly, plain achievement statements, and, for a large share of roles, a separate response to key selection criteria. Get the shape and the evidence right and the reader spends their attention on your fit for the job.",
  docType: "Resume",
  standardLength:
    "Two to three pages for most professionals, extending to four when a role asks for a selection criteria response or for senior and government positions.",
  photoRule:
    "Leave it off for corporate, government and most professional roles. It is not banned, but it is not the norm either, and it adds nothing an Australian reader will credit.",
  spellingStyle: "Australian English (British spelling)",
  overview:
    "Most Australian professional hiring happens through SEEK and similar job boards, with an applicant tracking system doing the first pass before a person reads anything. A second, distinct hiring track runs through government, health and many large or public-facing employers, where a resume alone is not the application: a separate statement addressing stated criteria or capabilities usually is, and it is often scored on its own. Skilled migration sits underneath a good share of the market too, so an accurate work rights or visa line, and a resume that lines up with the occupation an applicant is being assessed against, both matter. None of this makes an Australian resume harder to write than a UK or US one, only different: longer where detail earns its place, direct about referees, and explicit about criteria where a role sets them.",
  marketRules: [
    {
      label: "Length",
      value:
        "Two to three pages for most experienced professionals, and up to four pages once a key selection criteria response, a technical project history, or a senior or government application is involved. A padded three-page resume with nothing new on page three still reads as padding.",
      importance: "critical",
    },
    {
      label: "Key selection criteria",
      value:
        "A large share of government, health, education and some large-employer roles ask for a separate written response to stated criteria or capabilities, usually with a STAR-style example for each. Where a role sets criteria, that response is often assessed as closely as the resume, or more closely.",
      importance: "critical",
    },
    {
      label: "Referees",
      value:
        "Australian convention leans toward naming two referees, with role and current contact details, directly on the resume, once you have their permission. \"References available on request\" is accepted but reads as a small delay to an Australian hiring manager used to contacting referees quickly.",
      importance: "recommended",
    },
    {
      label: "Work rights",
      value:
        "State your citizenship, permanent residency or visa position in one line. Job ads frequently ask directly, and leaving it out invites the reader to assume the harder case.",
      importance: "critical",
    },
    {
      label: "Spelling and dates",
      value:
        "Australian English, close to British spelling (organise, analyse, labour, centre), and day/month/year dates. American spelling on an Australian resume is a quiet but noticeable mismatch.",
      importance: "recommended",
    },
    {
      label: "Photo",
      value:
        "Not standard on a corporate or government resume. Some customer-facing and hospitality roles see one occasionally, but it is never required and adds no weight to a professional application.",
      importance: "recommended",
    },
    {
      label: "Tone",
      value:
        "Direct and collaborative rather than superlative. Australian readers respond to plain claims backed by scope, dollar figures in AUD and team size, over words like \"visionary\" or \"world-class\".",
      importance: "recommended",
    },
  ],
  whatRecruitersLookFor: [
    "Outcomes stated with scope: budgets and figures in AUD, team size, project value, volumes",
    "The specific systems, tools, licences or regulatory frameworks a role touches, named directly",
    "A resume that answers the job ad's key selection criteria or capabilities where the ad sets them, not one that ignores them",
    "A clear citizenship, residency or visa position, stated once and early",
    "Two referees, ready to be contacted, from people who directly supervised the work",
    "Consistency between resume, LinkedIn and any occupation you are being assessed against for skilled migration",
  ],
  inDemandSectors: [
    "Healthcare, aged care and community services",
    "Mining, resources and renewable energy",
    "Construction, infrastructure and civil engineering",
    "Technology, data and cybersecurity",
    "Government, education and the public sector",
    "Skilled trades and logistics",
  ],
  keyRoles: [
    "Registered Nurse",
    "Civil Engineer",
    "Project Manager",
    "Accountant",
    "Data Analyst",
    "Software Engineer",
  ],
  faqs: [
    {
      q: "How many pages should an Australian resume be?",
      a: "Two to three pages suits most experienced professionals in Australia, longer than the two-page norm in the UK. Four pages is reasonable when a role asks for a key selection criteria response, for senior and executive applications, or for technical and government roles where project history carries real weight. What matters is that every page earns its place with specific, relevant evidence rather than repetition.",
    },
    {
      q: "What are key selection criteria and do I always need to address them?",
      a: "Key selection criteria are the specific capabilities a government, health, education or large-employer role states it needs, usually assessed with a written example for each, often written in the STAR structure. Not every Australian job sets them, but where a job ad lists criteria or capabilities, treat that response as a core part of the application, not an optional extra, because it is frequently scored separately from the resume.",
    },
    {
      q: "Should I list my referees on an Australian resume?",
      a: "Yes, Australian convention leans toward naming two referees directly on the resume, with their role and current phone or email, once you have their permission to be contacted. Writing \"references available on request\" is understood, but many Australian hiring managers prefer to move straight to a call, so a resume with referees ready removes one step from their process.",
    },
    {
      q: "Do I need a photo on my Australian resume?",
      a: "No, a photo is not expected on an Australian corporate, technical or government resume, and leaving it off is the safer default. It is not against the rules the way it is treated in some markets, but it uses space an Australian reader would rather see filled with evidence, and it adds nothing to how your application is assessed.",
    },
    {
      q: "How much does resume writing cost in Australia and what currency is it billed in?",
      a: "Resume writing costs $129, $189 or $279 USD depending on experience: under two years, three to nine years, or ten years and executive or senior level. All payment on chanukajeewantha.com is in USD, and your bank or card provider converts it at its own rate. Combining resume, LinkedIn and cover letter services saves 20 percent for two services and 30 percent for all three.",
    },
    {
      q: "Can you help if I am applying for Australian jobs from overseas?",
      a: "Yes, a significant part of this work is converting resumes from Sri Lanka, India and elsewhere into Australian conventions, stating occupation and work rights clearly, and aligning wording with the occupation a skilled migration applicant is being assessed against. Skills assessments and visa decisions themselves sit with the relevant assessing authority and the Department of Home Affairs, not with a resume writer; this service covers the documents.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /australia/{service} : localised commercial pages                   */
/* ------------------------------------------------------------------ */

const services: CountryService[] = [
  {
    country: "australia",
    service: "cv-writing",
    primaryKeyword: "resume writing service Australia",
    secondaryKeywords: [
      "professional resume writer Australia",
      "key selection criteria writing service",
      "executive resume writing Australia",
      "ATS resume writer Australia",
      "resume writer for skilled migrants Australia",
    ],
    metaTitle: "Resume Writing Service Australia: ATS Resumes",
    metaDescription:
      "Resume writing for Australia by one writer, not a team: two to three pages, selection criteria support, referees handled properly. From $129 USD.",
    eyebrow: "Australian resume writing",
    h1: "Resume Writing Service for Australian Jobs",
    lead:
      "An Australian resume written personally by Chanuka Jeewantha: two to three pages, Australian English, referees named on request, and, where the role calls for it, a key selection criteria response that actually answers the criteria.",
    quickAnswer:
      "This Australian resume writing service rewrites your resume to Australian conventions: two to three pages, reverse chronological, achievement-led bullets with AUD scope, referees ready, and a separate key selection criteria response when a role needs one. Every resume is written personally by Chanuka Jeewantha, delivered in Word and PDF within 5 to 7 days as standard, from $129 USD.",
    keyFacts: [
      { label: "Length", value: "Two to three pages, four with selection criteria" },
      { label: "Spelling", value: "Australian English throughout" },
      { label: "Referees", value: "Two, named with your permission, or on request" },
      { label: "Selection criteria", value: "STAR-format responses written when a role sets them" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
      { label: "Standard delivery", value: "5 to 7 days, faster options available" },
    ],
    whyDifferent: {
      heading: "Why an Australian resume is not a longer UK CV",
      paragraphs: [
        "Most Australian corporate hiring runs through SEEK and an applicant tracking system before anyone reads a word, so a resume that parses cleanly against standard headings and the job ad's own language matters as much as the writing. That part is close to any other market. What is different is the second hiring track underneath it: government departments, health services, universities, local councils and many larger employers ask for a resume alongside a separate written response to key selection criteria or capabilities, and that response is often scored on its own, sometimes more closely than the resume.",
        "Australian readers also expect more evidence than a two-page UK CV allows for. A senior engineer's project history, a nurse's clinical settings and endorsements, or an accountant's audit and reporting scope all take real space to state properly, and Australian employers generally welcome that detail when it is relevant rather than padded in. The tone stays plain rather than boastful: a dollar figure in AUD and a clear scope line persuade more than an adjective.",
        "Referees are the other quiet difference. Where UK and US resumes leave referees off entirely, Australian convention leans toward naming two directly on the resume once you have their consent, because Australian hiring managers are used to moving straight to a reference call rather than requesting contacts after an offer.",
      ],
    },
    whatYouGet: [
      "A two to three page Australian resume (four with selection criteria) written from scratch around your target role",
      "A profile summary that states your level, specialism and direction in plain Australian English",
      "Experience rewritten as achievements, with AUD scope, team size and outcomes where you can evidence them",
      "A key selection criteria or capability response in STAR format, written for the exact wording of the role you send",
      "Two referees formatted correctly, with guidance on who to ask and what to tell them",
      "A one-line citizenship, residency or visa statement worded accurately to your situation",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Section order", value: "Contact details, profile, key skills, experience, education, then licences or memberships" },
      { label: "Dates", value: "Month and year, most recent role first, written as words" },
      { label: "Selection criteria", value: "A separate document or section, addressed point by point with a specific example for each" },
      { label: "Referees", value: "Two, named with role and current contact details, once you have their permission" },
      { label: "Work rights", value: "Citizenship, permanent residency or visa subclass stated in one line" },
      { label: "Spelling and dates", value: "Australian English, day/month/year date format throughout" },
    ],
    sectors: [
      "Healthcare, aged care and community services",
      "Mining, resources, energy and construction",
      "Government, local council and public sector roles requiring selection criteria",
      "Technology, data and cybersecurity",
      "Accounting and financial services",
      "Skilled migrants applying under an assessed occupation",
    ],
    process: [
      {
        title: "Choose your tier and pay in USD",
        body: "Pick the tier that matches your experience. Payment is in USD, so there is nothing to convert beyond your own bank's exchange rate.",
      },
      {
        title: "Complete the brief",
        body: "Upload your current resume and answer a written brief about your target Australian roles, your results, your work rights position, and any job ad or selection criteria you already have.",
      },
      {
        title: "Chanuka writes your resume",
        body: "Your resume, and selection criteria response where relevant, is written personally, never outsourced. Questions come by email, so time zones do not slow anything down.",
      },
      {
        title: "Review, revise and apply",
        body: "You receive the draft, request changes in one revision round, and get final Word and PDF files ready to send through SEEK, agencies or an employer's application system.",
      },
    ],
    faqs: [
      {
        q: "What makes a resume writing service Australia specific?",
        a: "An Australia-specific resume service writes to local conventions rather than a generic international template: two to three pages, Australian English, referees named directly, and a genuine key selection criteria response when a role sets one. It also understands the dual hiring track, SEEK and ATS-driven corporate hiring alongside government and large-employer criteria-based hiring, and writes for whichever one your target role runs on.",
      },
      {
        q: "Do I need a professional resume writer if I already get some interviews?",
        a: "A professional resume writer earns its cost most clearly when interviews are not converting despite relevant experience, when you are entering the Australian market from another country's resume format, or when a role sets key selection criteria you have never written for before. If your resume already gets you interviews consistently, the higher-value spend is usually interview preparation rather than another rewrite.",
      },
      {
        q: "Can you write my key selection criteria responses as well as my resume?",
        a: "Yes. Send the job ad with the exact criteria listed, and each one is answered with a specific STAR-format example drawn from your brief. Government, health and council roles vary in format and word limits, so send the advert early and Chanuka will confirm scope before writing, rather than guessing at a generic structure.",
      },
      {
        q: "Will my resume work with SEEK and applicant tracking systems?",
        a: "Yes. The resume uses standard Australian section headings, a clean single-column layout, and the exact job titles and skills your target roles use, which is what SEEK's own search and most ATS platforms parse reliably. Overloaded formatting, tables and graphics are avoided because they are the most common reason a resume drops out of an ATS-managed shortlist.",
      },
      {
        q: "Should I name my referees or write references available on request?",
        a: "Naming two referees directly, with their role and current contact details, is the stronger Australian default once you have their permission, because it lets a hiring manager move straight to a reference check. \"Available on request\" is understood and used, particularly when a job ad has not asked for referees yet, but it adds a small step an Australian employer would rather skip.",
      },
      {
        q: "How do you handle overseas experience and qualifications on an Australian resume?",
        a: "Overseas employers get one line of context, sector, size and location, because Australian readers rarely recognise a foreign company by name. Overseas qualifications are stated as awarded, with the institution and grade, rather than guessed into an Australian equivalent; where recognition matters for a regulated occupation, the resume points to the relevant assessing authority rather than asserting equivalence itself.",
      },
      {
        q: "How long does Australian resume writing take?",
        a: "Standard delivery is 5 to 7 days from your completed brief. Fast delivery in 2 to 3 days adds 20 percent, and ultra delivery within 24 hours adds 50 percent. A key selection criteria response is scoped and quoted as part of the same brief, and after the draft, one revision round is included before final files are sent.",
      },
    ],
  },
  {
    country: "australia",
    service: "linkedin-optimisation",
    primaryKeyword: "LinkedIn profile writing Australia",
    secondaryKeywords: [
      "LinkedIn optimisation Australia",
      "LinkedIn profile writer Sydney Melbourne",
      "LinkedIn for Australian recruiters",
      "LinkedIn profile for relocating to Australia",
    ],
    metaTitle: "LinkedIn Profile Writing Service Australia",
    metaDescription:
      "LinkedIn profile writing for Australia: a headline recruiters and SEEK Talent Search find you under, an About section in Australian English, clear location.",
    eyebrow: "Australian LinkedIn optimisation",
    h1: "LinkedIn Profile Writing for the Australian Market",
    lead:
      "Your LinkedIn profile rewritten for how Australian recruiters and SEEK Talent Search actually find candidates: the job titles they search, a clear location and work rights line, and an About section that reads like a professional, not a slogan.",
    quickAnswer:
      "An Australian LinkedIn profile writing service rewrites your headline, About section, experience and skills so recruiters find you under the job titles and locations they search. Chanuka Jeewantha writes each profile personally in Australian English, handles location and work rights wording, and delivers within 5 to 7 days from $129 USD.",
    keyFacts: [
      { label: "Headline", value: "Target job title and specialism first, not a slogan" },
      { label: "About section", value: "First person, Australian English, evidence over adjectives" },
      { label: "Location", value: "Your real city, with relocation to Australia stated where true" },
      { label: "Deliverable", value: "Ready-to-paste text for every section" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
    ],
    whyDifferent: {
      heading: "How Australian recruiters use LinkedIn, and what that means for your profile",
      paragraphs: [
        "Recruitment consultants and in-house talent teams across Sydney, Melbourne, Brisbane and Perth use LinkedIn search and SEEK Talent Search to build shortlists before a role is even advertised. Both search by job title, skill and location. A headline that reads \"Passionate about people\" instead of \"Registered Nurse, Aged Care, AHPRA Registered\" simply does not appear in the search that mattered.",
        "Location is the quiet filter for anyone outside Australia. Setting your location to Sydney when you live in Colombo or Chennai misleads recruiters and tends to unravel on the first call. The steadier approach is your real location plus a clear line about relocation and work rights in the headline or About section, so employers who sponsor or hire internationally can still find and trust the profile.",
        "Australian LinkedIn writing sits closer to the collaborative, plain-spoken register of an Australian resume than to the more reserved UK tone or the louder US style. Confident and specific reads well; a wall of exclamation marks does not.",
      ],
    },
    whatYouGet: [
      "A search-focused headline built on the Australian job titles and skills recruiters actually type",
      "An About section in first person and Australian English, with specific evidence and a clear next step",
      "Experience entries rewritten from your resume, shorter and more conversational than the resume itself",
      "A curated skills list ordered so the most relevant skills for your target roles show first",
      "Location and relocation or work rights wording that is accurate and searchable",
      "Guidance on Open to Work settings, custom URL and SEEK Talent Search visibility",
      "One revision round on all text",
    ],
    marketConventions: [
      { label: "Spelling", value: "Australian English: organise, optimise, programme, centre" },
      { label: "Headline format", value: "Job title | specialism | sector, credential or registration" },
      { label: "Photo", value: "Yes on LinkedIn, standard practice regardless of the resume convention" },
      { label: "Voice", value: "First person in the About section, plain and direct rather than formal" },
      { label: "Credentials", value: "Australian-recognised bodies and registrations named in full once, then abbreviated" },
      { label: "Consistency", value: "Titles and dates match the resume, because Australian recruiters check both" },
    ],
    sectors: [
      "Healthcare, nursing and aged care professionals relocating to Australia",
      "Mining, resources and engineering",
      "Technology, data and cybersecurity",
      "Accounting and financial services",
      "Construction and infrastructure",
      "Government and public sector, where a LinkedIn search often precedes the formal process",
    ],
    process: [
      {
        title: "Choose your tier",
        body: "LinkedIn optimisation uses the same experience tiers as resume writing. Bundling it with an Australian resume saves 20 percent.",
      },
      {
        title: "Share your profile and targets",
        body: "Send your LinkedIn URL, current resume and the Australian roles you want to be found for, plus your location and work rights situation.",
      },
      {
        title: "Chanuka rewrites every section",
        body: "Headline, About, experience and skills are written personally, in Australian English, as ready-to-paste text.",
      },
      {
        title: "Revise and publish",
        body: "Review the draft, request changes in one revision round, then paste the final text into your profile.",
      },
    ],
    faqs: [
      {
        q: "Do Australian recruiters really use LinkedIn to find candidates?",
        a: "Yes, LinkedIn and SEEK Talent Search are routine sourcing tools for Australian recruitment agencies and in-house talent teams, especially in healthcare, technology, engineering and finance. They search by title, skill and location to build shortlists, often before advertising. A profile with a vague headline or the wrong job title does not appear in those searches, however strong the underlying experience is.",
      },
      {
        q: "Should I set my LinkedIn location to Australia before I move?",
        a: "No, keep your real location and state your Australian plans honestly instead. A false Australian location usually surfaces on the first recruiter call and damages trust. Say in the headline or About section that you are relocating to a named city, and include your visa or residency position if it is settled, so employers who hire internationally can still find and contact you.",
      },
      {
        q: "Should my LinkedIn profile use Australian or American spelling?",
        a: "Use Australian English if Australia is your main target market. Recruiters notice \"optimization\" or \"program\" on a profile aimed at Australian roles, and it creates a small mismatch with an Australian resume next to it. Keep job titles, product names and any credential exactly as officially written, even when they use American spelling.",
      },
      {
        q: "Is LinkedIn optimisation worth it if I am mainly applying through SEEK?",
        a: "It still helps, because SEEK job ads convert into a LinkedIn search the moment a recruiter shortlists you, and many roles are filled by direct approach before they are advertised at all. If you are applying only to government roles with a formal, criteria-based process, LinkedIn matters less at the application stage, though a strong profile still supports later stages.",
      },
      {
        q: "What does LinkedIn optimisation cost for the Australian market?",
        a: "LinkedIn optimisation costs $129, $189 or $279 USD depending on experience level, matching the resume writing tiers. Adding it to an Australian resume saves 20 percent on both, and taking resume, LinkedIn and cover letter together saves 30 percent. Payment is in USD and delivery is 5 to 7 days as standard.",
      },
    ],
  },
  {
    country: "australia",
    service: "cover-letter-writing",
    primaryKeyword: "cover letter writing service Australia",
    secondaryKeywords: [
      "Australian cover letter writer",
      "cover letter for Australian jobs from abroad",
      "key selection criteria cover letter",
      "cover letter format Australia",
    ],
    metaTitle: "Cover Letter Writing Service Australia",
    metaDescription:
      "Australian cover letters written to local convention: one page, a direct case for the role, and criteria addressed where a job ad asks for them. From $79 USD.",
    eyebrow: "Australian cover letter writing",
    h1: "Cover Letter Writing for Australian Applications",
    lead:
      "A one-page Australian cover letter that makes a direct, evidence-led case for one specific role, and is kept clearly separate from any key selection criteria response the same application may need.",
    quickAnswer:
      "An Australian cover letter writing service produces a one-page letter, usually three or four short paragraphs, that links your strongest evidence to one role in plain Australian English. Chanuka Jeewantha writes each letter personally, keeps it distinct from any selection criteria document a role also needs, and prices start from $79 USD with standard delivery in 5 to 7 days.",
    keyFacts: [
      { label: "Length", value: "One page, three to four short paragraphs" },
      { label: "Tone", value: "Direct and collaborative, not formal or flowery" },
      { label: "Criteria", value: "Kept separate from any key selection criteria response" },
      { label: "Price", value: "$79, $119 or $159 USD by experience" },
      { label: "Bundle", value: "Save 20 percent with an Australian resume" },
    ],
    whyDifferent: {
      heading: "What an Australian cover letter has to do that a generic one does not",
      paragraphs: [
        "Australian cover letters are shorter and more direct than many overseas letters. They open by naming the role and where it was seen, make the case in two or three specific examples, and close without excess formality. Letters that open with a long, formal salutation and close with a list of personal qualities read as imported rather than local.",
        "The trap for overseas applicants is mixing the cover letter with the key selection criteria response. Where a job ad lists criteria, they usually need their own document, addressed point by point, because that response is scored separately. The cover letter still has its own job: giving a hiring manager a fast, human reason to keep reading, in a tone that is confident without being boastful.",
        "For applicants outside Australia, the letter is also the natural place to state relocation timing, notice period and work rights position factually and briefly, so it reads as a plan rather than an open question the reader has to chase.",
      ],
    },
    whatYouGet: [
      "A one-page letter written for a specific Australian role and employer",
      "An opening that names the role and gives the reader a reason to keep going",
      "Two or three paragraphs linking your evidence to the advert's stated requirements",
      "Relocation, notice period and work rights wording framed factually where relevant",
      "Clear separation from, and consistent wording with, any key selection criteria response for the same role",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Opening", value: "Name the role and where you saw it in the first sentence or two" },
      { label: "Evidence", value: "Two or three specific examples matched to the role's stated requirements" },
      { label: "Tone", value: "Direct and collaborative, plain claims backed by scope" },
      { label: "Date format", value: "Day month year, for example 27 September 2026" },
      { label: "Government and health roles", value: "Often need a separate selection criteria document as well as, not instead of, the letter" },
      { label: "Agencies", value: "Often not required when applying through a recruiter; a short note usually suffices" },
    ],
    sectors: [
      "Corporate and financial services roles applied for directly",
      "Healthcare, aged care and community services",
      "Mining, resources, construction and engineering",
      "Government and council roles alongside a selection criteria document",
      "Graduate and early-career applications",
      "Overseas applicants explaining relocation and work rights",
    ],
    process: [
      {
        title: "Choose your tier and share the role",
        body: "Pick your experience tier and send the job advert, with any selection criteria, and your current resume.",
      },
      {
        title: "Answer a short brief",
        body: "Tell Chanuka why this role and employer, your notice period, and your relocation or work rights position if you are outside Australia.",
      },
      {
        title: "Receive, revise, send",
        body: "You get a draft letter, one revision round and final Word and PDF files, ready to adapt for similar roles.",
      },
    ],
    faqs: [
      {
        q: "Do Australian employers still read cover letters?",
        a: "Many do, especially for direct applications, graduate programs and roles where the advert asks for one. Recruitment agencies often do not need a formal letter, and government or health roles that set key selection criteria usually want both a letter and a separate criteria response. A generic letter hurts more than skipping an optional one, so write it for the role or leave it out.",
      },
      {
        q: "How long should a cover letter be for an Australian job?",
        a: "An Australian cover letter should fit on one page, usually three or four short paragraphs and roughly 250 to 400 words. The reader wants the role, your fit and your availability stated plainly, not a second resume. If the application form sets a word limit, write to that limit instead of the general guideline.",
      },
      {
        q: "Is a cover letter the same as a key selection criteria response?",
        a: "No, they are different documents. A cover letter is a short, direct case for the role, while a key selection criteria response answers each stated criterion or capability with a specific example, often in STAR format. Government, health and council roles frequently ask for both, and the criteria response is usually assessed on its own, separately from the letter.",
      },
      {
        q: "Can you write my key selection criteria response as well as a cover letter?",
        a: "Yes, but send the job ad with the exact criteria before ordering, because formats and word limits vary by employer and by role level. The letter and the criteria response are written to complement each other without repeating the same examples word for word.",
      },
      {
        q: "Should my cover letter mention that I need visa sponsorship?",
        a: "Usually yes, briefly and factually, when the employer or advert signals openness to international applicants. State your current work rights position in one sentence near the end and keep the rest of the letter about the value you bring. Leaving it vague rarely helps, because Australian employers check work rights before an offer regardless.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /australia/career-advice/{slug} : Australia-specific articles        */
/* ------------------------------------------------------------------ */

const articles: CountryArticle[] = [
  {
    country: "australia",
    slug: "australian-resume-format",
    title: "Australian resume format: the layout Australian employers expect",
    metaTitle: "Australian Resume Format: Sections and Layout",
    metaDescription:
      "The Australian resume format section by section: length, referees, the profile summary, key skills and the small details that mark a resume as foreign.",
    category: "CV writing",
    readMinutes: 8,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "An Australian resume is longer than a UK CV and more direct about referees. Here is that shape, section by section, and where the format quietly differs from other markets.",
    quickAnswer:
      "The standard Australian resume format is reverse chronological, two to three pages for most professionals: contact details, a short profile summary, key skills, work experience with month and year dates, education, then licences, certifications or memberships. It uses Australian English, has no photo by default, and names two referees directly, with permission, rather than leaving references off entirely.",
    intro:
      "An Australian resume looks similar to a UK CV or a US resume at a glance and behaves differently underneath. It runs longer, it expects referees to be named rather than hidden, and for a large share of government, health and large-employer roles it is only half the application, with a separate key selection criteria response doing the other half of the work. This guide goes through the Australian format section by section, with the specific local details that differ from British, American and South Asian conventions. For the criteria response itself, see the dedicated guide to key selection criteria; for how to handle referees specifically, see the referees guide. For length and structure that apply everywhere, the global guide to CV length and the guide to writing a professional CV go deeper. This page is about the Australian shape.",
    sections: [
      {
        heading: "The standard order of an Australian resume",
        paragraphs: [
          "Most working Australian resumes follow a consistent order, and departing from it needs a reason, such as a recent graduate leading with education because it is currently their strongest evidence.",
        ],
        bullets: [
          "Contact details: name, phone with country code if overseas, email, city, LinkedIn URL",
          "Profile summary: three to five lines on your level, specialism and direction",
          "Key skills: a short, grouped list of specific skills and tools, common and expected",
          "Work experience: most recent role first, with dates, employer, location and achievements",
          "Education: qualification, institution and dates, with grade stated as awarded",
          "Licences, certifications and professional memberships: relevant to the target occupation",
          "Referees: two, named with role and current contact details, or noted as available on request",
        ],
      },
      {
        heading: "The header and what it should and should not include",
        paragraphs: [
          "An Australian header stays fairly minimal: full name, mobile number with the country code if you are outside Australia, a professional email, your city, and your LinkedIn URL. A full street address is not needed; your suburb or city, or a country and intended location if you are applying from abroad, is enough for a reader to judge distance or relocation.",
          "What stays out is a personal details block: no photo by default, no date of birth, no marital status, no religion. None of it is prohibited by law the way some markets suggest, but it does not help a corporate or government application and it slightly signals a resume built for a different market.",
          "Work rights earns a place that most personal details do not. A short line such as \"Australian citizen\" or \"Permanent resident, full work rights\" or the relevant visa subclass answers a question almost every Australian employer has to resolve before shortlisting.",
        ],
      },
      {
        heading: "Writing the profile summary and key skills",
        paragraphs: [
          "The profile summary sits directly under your contact details and should say, in three to five lines, who you are professionally, one or two pieces of evidence, and the role or direction you want next. Australian readers respond to plain, specific claims: a scope statement in AUD or a team size does more work than an adjective like \"dynamic\" or \"results-driven\".",
          "A key skills section is common and useful, particularly for technical, healthcare and trades roles where an employer or ATS is scanning for named tools, systems, licences or clinical settings. Group skills by type rather than listing them alphabetically, and make sure each skill you list is also demonstrated somewhere in your experience section, not asserted on its own.",
        ],
      },
      {
        heading: "Work experience, length and the case for detail",
        paragraphs: [
          "Each role opens with a consistent line: job title, employer, location and dates, written as month and year. Under each employer, particularly an overseas one, a single line of context helps: what the organisation does, its size or sector, and your scope within it, since an Australian reader is unlikely to recognise a regional bank or a mid-size firm from another country by name.",
          "This is where Australian convention diverges most clearly from a UK CV. Where two pages is a hard ceiling in the UK, an Australian resume can extend to three pages for an experienced professional, or four when a key selection criteria response or a longer technical project history is genuinely relevant. The test is not the page count, it is whether every section still earns its place: a three-page resume padded with duties an employer would assume anyway reads worse than a tight two-page one.",
          "Bullets should state outcomes with scope rather than duties: \"Reduced average patient wait times from 40 to 22 minutes across two clinics\" carries more weight than \"Responsible for patient flow\". Recent roles get four to six bullets; roles from a decade or more ago shrink to one or two lines.",
        ],
      },
      {
        heading: "Education, licences and professional recognition",
        paragraphs: [
          "State your qualification as awarded, with institution, country and grade, whether that is a GPA, a class of degree, or a local grading system. Do not convert an overseas result into a guessed Australian equivalent. For regulated occupations, name the Australian body that assesses or registers your profession, such as AHPRA for health practitioners, ACS for ICT, Engineers Australia for engineering, or CPA Australia and CA ANZ for accounting, and state your status with that body accurately rather than implying full registration before it exists.",
          "Licences relevant to the role, a driver's licence for a trades or logistics position, a working with children check, a white card for construction, belong in their own short section near the end, named exactly as they are issued.",
        ],
      },
      {
        heading: "Referees, spelling and the small details that mark origin",
        paragraphs: [
          "Where a UK CV drops referees entirely, an Australian resume more often names two directly, with their role and current contact details, once you have asked their permission. This is covered in full in the dedicated referees guide, but the short version is: pick people who directly supervised your work, tell them to expect a call, and list them rather than defaulting to \"available on request\" unless the job ad specifically asks you to hold that information back.",
          "Spelling is the fastest tell of an imported resume. Australian English sits close to British spelling: organise, analyse, labour, centre, program only for a computer program (Australians still write \"programme\" for a schedule of events, matching British usage). American date formats and US spelling on a resume aimed at Australian employers are a small, avoidable mismatch that a careful reader notices immediately.",
        ],
      },
    ],
    takeaways: [
      "Follow the standard order: contact details, profile, skills, experience, education, licences, referees.",
      "Two to three pages suits most professionals; four is normal with a selection criteria response.",
      "Name two referees directly, with permission, rather than defaulting to \"available on request\".",
      "State overseas qualifications as awarded and name the relevant Australian assessing or registration body.",
      "Use Australian English and day/month/year dates throughout.",
    ],
    faqs: [
      {
        q: "What is the correct resume format for Australia?",
        a: "The correct Australian resume format is reverse chronological, running two to three pages for most professionals: contact details, a profile summary, key skills, work experience with month and year dates, education, licences or memberships, and two referees. It uses Australian English, generally has no photo, and states work rights clearly near the top.",
      },
      {
        q: "Is a resume the same as a CV in Australia?",
        a: "Yes, in Australia the terms are used interchangeably for the same document, though \"resume\" is the more common word in job ads and on SEEK. There is no separate, longer CV format for general professional roles the way there is in academic or medical hiring elsewhere; an Australian resume already runs longer than a UK CV, so the distinction other markets draw largely does not apply here.",
      },
      {
        q: "How long should an Australian resume be?",
        a: "Two to three pages suits most experienced professionals, extending to four pages when a role sets key selection criteria or for senior, technical and government applications. Early-career candidates with limited experience can use one page. The right length is decided by how much relevant, specific evidence you have, not by matching a fixed page count.",
      },
      {
        q: "Should I include my overseas job titles exactly as they were, or translate them?",
        a: "Keep your real job title, and add one line of scope, team size, reporting line, or responsibilities, so an Australian reader understands the level without you having to invent a local-sounding title. Translating a title into an Australian equivalent you did not actually hold risks looking inaccurate if it is checked later in the process.",
      },
    ],
    sources: [
      {
        label: "Department of Home Affairs: Skilled occupation list",
        url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-long-should-a-cv-be", label: "How long should a CV be?" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/australia/career-advice/key-selection-criteria", label: "Key selection criteria explained" },
      { href: "/australia/career-advice/referees-on-an-australian-resume", label: "Referees on an Australian resume" },
      { href: "/australia/cv-writing", label: "Australian resume writing service" },
    ],
  },
  {
    country: "australia",
    slug: "key-selection-criteria",
    title: "Key selection criteria: how to answer them and win the shortlist",
    metaTitle: "Key Selection Criteria: How to Write Winning Answers",
    metaDescription:
      "What key selection criteria are, the STAR method for answering them, how the APS two-page pitch differs, and the mistakes that cost a shortlist place.",
    category: "CV writing",
    readMinutes: 8,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Government, health and many large Australian employers do not hire on a resume alone. They hire on how well you answer the criteria they stated, and most applicants write those answers badly.",
    quickAnswer:
      "Key selection criteria are the specific capabilities or requirements a government, health, education or large-employer job ad lists, each usually answered with a written example, often in the STAR structure of situation, task, action and result. Some employers, most notably many federal Australian Public Service roles, have moved to a combined two-page pitch instead of point-by-point answers, so always check the exact ad rather than assuming one format.",
    intro:
      "A large share of Australian roles, especially in government, health, education and local councils, are not decided on the resume alone. They are decided on how well an applicant answers the criteria the employer actually stated, whether that is a traditional list of key selection criteria, a set of capabilities, or a combined pitch. Most applicants either ignore this part of the application or answer it vaguely, restating the criterion instead of proving it. This guide explains what key selection criteria are, how to structure a strong answer, how the format differs across Australian Public Service roles and other employers, and the mistakes that lose a shortlist place before an interview is even offered. For the resume that usually sits alongside this response, see the Australian resume format guide.",
    sections: [
      {
        heading: "What key selection criteria actually are",
        paragraphs: [
          "Key selection criteria are the specific skills, knowledge, experience or behaviours an employer states are needed for a role, published in the job ad or the position description. They exist so that every applicant is judged against the same stated standard, rather than a general impression of a resume, and a selection panel usually scores each criterion, sometimes with a numeric rating, before it looks at anything else.",
          "Criteria appear most often in Australian Public Service roles, state government, local council, health services, universities and some large not-for-profits. Many private-sector employers never use them at all, so the first step for any applicant is checking whether the specific ad asks for a separate response, rather than assuming every Australian job needs one.",
        ],
      },
      {
        heading: "The STAR method, applied to a criterion",
        paragraphs: [
          "STAR stands for situation, task, action and result, and it is the most reliable way to answer a criterion with evidence instead of assertion. Situation sets the context briefly. Task states what you specifically needed to achieve. Action is the longest part: what you actually did, in enough detail that a stranger could picture it. Result closes with the outcome, stated with a number or scope wherever you can.",
          "A criterion like \"demonstrated ability to manage stakeholder relationships in a complex environment\" is not answered by restating the words back. It is answered by one real situation: which stakeholders, what made it complex, what you did to manage it, and what changed because of your action. One well-chosen example beats three thin ones, because a panel is looking for depth of evidence, not a list of claims.",
        ],
      },
      {
        heading: "The Australian Public Service two-page pitch",
        paragraphs: [
          "Federal Australian Public Service recruitment has largely moved away from a traditional point-by-point selection criteria response. In its place, most APS roles now ask for a two-page pitch, sometimes called a statement of claims, a single narrative document that addresses the role's stated capabilities together rather than criterion by criterion, alongside a resume.",
          "The pitch still needs the same underlying evidence a traditional criteria response needs, specific, scoped examples rather than general claims, but it is structured as connected prose rather than a numbered list, and it is also implicitly testing whether you can write a clear, persuasive document at the seniority level of the role. Word limits vary by classification and by department, so the position description and job ad for the specific role are the only reliable source, not a generic template.",
        ],
      },
      {
        heading: "Where the traditional format still applies",
        paragraphs: [
          "Outside the federal APS, traditional point-by-point key selection criteria responses remain common: state government departments, many local councils, health services and hospitals, universities and TAFEs, and a range of not-for-profits still ask for a separate answer to each listed criterion. These usually have their own word limit per criterion, commonly somewhere between 150 and 400 words, and are scored criterion by criterion by a panel.",
          "Because the format genuinely varies by employer, and sometimes by role level within the same employer, the only safe approach is to read the specific job ad and position description each time, and write to the format it actually asks for rather than reusing a structure from a previous application.",
        ],
      },
      {
        heading: "Choosing and preparing your examples",
        paragraphs: [
          "Before writing anything, list every criterion or capability the role states, and for each one, note two or three possible examples from your career. Pick the example that is most recent, most clearly yours rather than a team effort, and easiest to state with a concrete result. Where two criteria could be answered by the same story, use different examples for each, because a panel notices repetition and it wastes the chance to show breadth.",
          "It is fair, and common, to draw on volunteer work, study projects or earlier roles if your current job has not given you a clean example for a particular criterion, as long as the example is real and the result is honestly stated.",
        ],
      },
      {
        heading: "Common mistakes that cost a shortlist place",
        paragraphs: [
          "The most common failure is restating the criterion instead of proving it: writing \"I have strong stakeholder management skills\" is a claim, not an answer, and a panel scoring against a rubric has nothing to mark it against. The second is going over the stated word limit, which many application systems cut off automatically or which panels are instructed to stop reading at, so the ending of your best example may simply never be seen.",
          "The third is vagueness in the result: \"the project was successful\" tells a panel nothing, where \"delivered two weeks ahead of schedule and under the approved budget\" gives them something to score. The fourth is submitting the same generic response to every application; panels compare notes within a department, and a response that clearly was not written for this specific role and criteria reads as exactly that.",
        ],
      },
    ],
    takeaways: [
      "Key selection criteria are scored requirements stated in the job ad, most common in government, health and education.",
      "Use STAR, situation, task, action, result, and lead with one strong, specific example per criterion.",
      "Federal APS roles mostly use a combined two-page pitch now; many other employers still use point-by-point criteria.",
      "Always check the specific job ad and position description for the format and word limit; do not assume.",
      "Avoid restating the criterion, going over the word limit, vague results, and reused generic answers.",
    ],
    faqs: [
      {
        q: "What are key selection criteria in an Australian job application?",
        a: "Key selection criteria are the specific skills, knowledge or experience a government, health, education or large-employer job ad states as requirements, usually scored by a panel against a written example for each one. They exist to judge every applicant against the same stated standard. Not every Australian employer uses them, so always check the specific job ad first.",
      },
      {
        q: "Do all Australian Public Service jobs still use key selection criteria?",
        a: "Most federal APS roles now use a combined two-page pitch instead of a traditional point-by-point criteria response, addressing the role's capabilities together in one narrative document alongside a resume. The underlying need for specific, evidenced examples is the same either way, but always read the job ad and position description, because format and word limits still vary by classification and department.",
      },
      {
        q: "How long should each key selection criteria answer be?",
        a: "Where a traditional format is used, individual criteria are commonly answered in roughly 150 to 400 words each, but the exact limit is set by the specific employer and role, so check the job ad rather than relying on a general figure. A two-page pitch has its own overall word limit, typically stated in the position description, that covers all the capabilities together.",
      },
      {
        q: "Can I reuse the same key selection criteria answers for different jobs?",
        a: "Only as a starting draft, not as a final answer. The core example can be reused, but the wording should be adjusted to the exact criterion or capability each specific role states, and panels within a department do compare applications, so a visibly generic, unedited response reads as exactly that and weakens your case.",
      },
      {
        q: "Is the STAR method required, or just recommended?",
        a: "Most Australian employers recommend STAR, situation, task, action, result, as the clearest way to structure a criteria or pitch answer, but few mandate the exact format. What matters more than the label is that your answer contains a real situation, a specific action you took, and a stated result, rather than a general claim with no example behind it.",
      },
    ],
    sources: [
      {
        label: "Australian Public Service Commission: Applying for an APS job",
        url: "https://www.apsc.gov.au/working-aps/joining-aps/cracking-code/3-applying-aps-job-cracking-code",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/star-method-interview-answers", label: "STAR method for interview answers" },
      { href: "/career-advice/responsibilities-into-achievements", label: "Turning responsibilities into achievements" },
      { href: "/australia/career-advice/australian-resume-format", label: "Australian resume format" },
      { href: "/australia/cover-letter-writing", label: "Australian cover letter and criteria help" },
      { href: "/australia/cv-writing", label: "Australian resume writing service" },
    ],
  },
  {
    country: "australia",
    slug: "referees-on-an-australian-resume",
    title: "Referees on an Australian resume: who to list and how",
    metaTitle: "Referees on an Australian Resume: A Full Guide",
    metaDescription:
      "How many referees an Australian resume needs, whether to list contact details directly, who to choose, and how to prepare them before you apply.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "The UK drops referees entirely and the US rarely lists them either. Australia is different, and getting the convention wrong is a small, avoidable signal that a resume was not built for this market.",
    quickAnswer:
      "An Australian resume typically names two referees directly, with their role and current phone or email, once you have their permission, rather than only stating \"references available on request\". Choose people who directly supervised your recent work, tell them the roles you are applying for, and update their details if a specific job ad asks for referees to be listed.",
    intro:
      "Referees are one of the smaller sections of an Australian resume and one of the most misjudged by applicants used to other markets. A UK CV leaves referees off entirely and a US resume rarely lists them either, so a candidate who has worked mainly in those markets often defaults to omitting them, or hedges with \"available on request\". Australian hiring managers, especially outside large corporate employers, are used to a more direct convention. This guide covers how many referees to use, whether to list their details, who to choose, how to prepare them, and what changes when your referees are overseas.",
    sections: [
      {
        heading: "How many referees, and where they sit on the resume",
        paragraphs: [
          "Two referees is the standard for most professional applications, rising to three for senior or executive roles where a panel may want a broader view of your work. Referees sit in their own short section near the end of the resume, after education and any licences or memberships, formatted consistently: name, job title, organisation, relationship to you, and phone or email.",
          "If a specific job ad asks for referees' contact details to be provided as part of the application, include them, because the ad is telling you directly what the employer expects rather than leaving it to convention.",
        ],
      },
      {
        heading: "Naming referees directly versus available on request",
        paragraphs: [
          "Australian convention leans toward listing two referees with their role and current contact details directly on the resume, once you have asked their permission. This is different from the UK and US default of leaving references off the CV entirely and providing them only after an offer. Many Australian hiring managers prefer to move straight to a reference call once they have shortlisted a candidate, and a resume that already has the details ready removes a step from that process.",
          "\"Referees available on request\" is still understood and used, particularly early in a search or when a job ad has not asked for referees at all, and it is a reasonable choice if you have not yet told a potential referee they may be contacted. It is simply the more cautious option in a market where naming referees directly is common enough to be the stronger default.",
        ],
      },
      {
        heading: "Who makes a strong referee",
        paragraphs: [
          "The strongest referees are people who directly supervised your day-to-day work in a recent role, a manager, team leader or direct supervisor, because they can speak to specifics rather than a general impression. A more senior figure who barely worked with you day to day is usually a weaker choice than a supervisor who actually saw the work, even if the senior person's title looks more impressive on paper.",
          "Beyond direct managers, colleagues who worked closely with you, clients you delivered for, and for graduates, placement supervisors, lecturers or volunteer coordinators are all reasonable choices. Friends, family members and people who have not worked with you professionally are never appropriate referees on an Australian resume.",
        ],
      },
      {
        heading: "Preparing your referees before you apply",
        paragraphs: [
          "Ask each referee directly before listing them, not as a formality but because it genuinely changes how the call goes. Tell them the type of roles you are applying for, remind them of specific projects or achievements from your time working together that connect to those roles, and ask them to expect a call or email, ideally within a defined window while you are actively applying.",
          "Keep their contact details current. A former manager who has since changed jobs, phone numbers or email addresses is a small but real friction point if a hiring manager tries to reach them and cannot, and it can read as a resume that has not been updated recently.",
        ],
      },
      {
        heading: "When your referees are overseas",
        paragraphs: [
          "If you are applying for Australian roles from Sri Lanka, India or elsewhere, your referees can be overseas too, and this is normal for skilled migrants and international applicants. State the referee's role and organisation clearly, and include the country code with their phone number so an Australian hiring manager can reach them without guessing the dialling format.",
          "Where useful, one line of context about the referee's organisation, similar to the context you would add for an overseas employer in your experience section, helps an Australian reader understand who they are calling and why that person's view matters. Time zone differences mean it is worth telling your referee roughly when an Australian call is likely to land, so they are not caught off guard.",
        ],
      },
      {
        heading: "What to leave off the referees section",
        paragraphs: [
          "Do not list more than three referees; it reads as padding rather than thoroughness, and a panel will not call more than two or three regardless. Do not include referees you have not actually asked, and do not include a former manager you left on poor terms hoping they will not be contacted, because Australian employers do check, and an unprepared or negative reference undoes far more work than a strong resume can recover from.",
        ],
      },
    ],
    takeaways: [
      "List two referees for most roles, three for senior positions, in their own section near the end of the resume.",
      "Naming referees directly with current contact details is the stronger Australian default; \"available on request\" is still accepted.",
      "Choose people who directly supervised your recent work over more senior but less familiar figures.",
      "Always ask permission first, and brief your referee on the roles you are applying for.",
      "Overseas referees are normal for international applicants; include the country code and useful context.",
    ],
    faqs: [
      {
        q: "How many referees should I put on an Australian resume?",
        a: "Two referees is standard for most professional applications, and three is reasonable for senior or executive roles where a panel wants a broader picture. More than three usually reads as padding rather than added credibility, since a hiring manager will not contact more than two or three referees regardless of how many are listed.",
      },
      {
        q: "Should I list my referees' contact details or just say available on request?",
        a: "Listing two referees with their role and current phone or email is the stronger Australian default, because many hiring managers prefer to move straight to a reference call once you are shortlisted. \"Available on request\" is still accepted and reasonable if you have not yet asked a referee's permission, or if a job ad has not asked for referees at this stage.",
      },
      {
        q: "Can I use a colleague instead of a manager as a referee?",
        a: "Yes, a colleague who worked closely with you is a reasonable referee, particularly if you do not have access to a recent manager or if the colleague can speak to specific, relevant work. A direct supervisor who actually saw your day-to-day work is generally stronger than a senior figure with limited direct contact, so prioritise closeness to the work over seniority of title.",
      },
      {
        q: "What if my referees are overseas and in a different time zone?",
        a: "That is normal for international applicants and does not need to be hidden. List the referee's role, organisation and phone number with the correct country code, and let your referee know roughly when an Australian call is likely to come through. A brief line of context about an unfamiliar overseas employer can help the reader understand the referee's standing.",
      },
      {
        q: "Do I need to ask permission before listing someone as a referee?",
        a: "Yes, always ask first. Beyond basic courtesy, an unprepared referee who is caught off guard, or who gives a lukewarm response because they did not know what role you were applying for, can undo the strength of an otherwise good application. A quick heads-up conversation about the roles you are targeting makes their answers sharper and more useful.",
      },
    ],
    relatedLinks: [
      { href: "/australia/career-advice/australian-resume-format", label: "Australian resume format" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/australia/international-job-seekers", label: "Applying for Australian jobs from abroad" },
      { href: "/cv-samples/international-cv", label: "International CV sample" },
      { href: "/australia/cv-writing", label: "Australian resume writing service" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /australia/international-job-seekers : destination hub               */
/* ------------------------------------------------------------------ */

const ijsHub: IjsHub = {
  country: "australia",
  metaTitle: "Applying for Australian Jobs From Abroad: Guide",
  metaDescription:
    "How to apply for Australian jobs from overseas: resume conventions, skilled migration basics, skills assessment bodies, key selection criteria and mistakes.",
  h1: "Applying for Australian Jobs From Abroad",
  lead:
    "A resume built for Colombo, Mumbai or Dubai reads as a resume built for somewhere else once it lands on an Australian desk. The format runs longer than most, referees are named rather than hidden, and skilled migration adds a layer most other markets do not have.",
  quickAnswer:
    "To apply for Australian jobs from abroad, convert your resume to Australian conventions, two to three pages, Australian English, referees named with permission, state your visa or residency position honestly, and check whether the role needs a key selection criteria response. If you are pursuing skilled migration, confirm your occupation and required skills assessment on the Department of Home Affairs website before you apply.",
  overview:
    "Most international applicants who struggle with Australian hiring are not short of relevant experience. They are sending a resume shaped by another market's rules into a process that reads several specific signals as risk: a resume that ignores stated selection criteria, no referees ready, an unclear visa position, or wording that does not match the occupation an employer or a skills assessment would recognise. Fix those and the underlying experience gets judged on its merits. This page covers Australian resume conventions, what changes from an overseas resume, the practical steps to apply from outside Australia, and where to find the official visa and skills assessment information; it does not give visa or migration advice.",
  cvConventions: [
    { label: "Length", value: "Two to three pages for experienced candidates, up to four with a key selection criteria response. Longer than a UK CV." },
    { label: "Photo", value: "Not standard for corporate, technical or government roles. Not banned, simply not expected." },
    { label: "Personal details", value: "Name, city and country, phone with country code, email, LinkedIn. No date of birth or marital status." },
    { label: "Work rights", value: "State citizenship, permanent residency or your visa subclass in one line near the top." },
    { label: "Referees", value: "Two, named with role and current contact details once you have their permission, or noted as available on request." },
    { label: "Selection criteria", value: "A separate written response, often in STAR format, where a government, health or large-employer role sets it." },
    { label: "Spelling", value: "Australian English on standard page size. \"Resume\" is the common term; \"CV\" is understood." },
  ],
  whatChanges: [
    "Extend a two-page CV toward two to three pages where you have genuinely relevant detail to add, rather than padding",
    "Remove the photo and any personal details block carried over from a market that expects them",
    "Add a clear work rights line: citizenship, permanent residency, or the visa you hold or are applying for",
    "Write two referees onto the resume once you have their permission, rather than leaving references off entirely",
    "Add a key selection criteria or capability response for any government, health or large-employer role that lists them",
    "Add one line of context under unfamiliar overseas employers: sector, size and what they do",
    "Align job titles and occupation wording with the ANZSCO occupation you would be assessed against if you are pursuing skilled migration",
  ],
  applyingFromAbroad: [
    {
      title: "Work out your likely pathway before you write",
      body: "Whether you are applying purely as a job seeker, pursuing employer sponsorship, or pursuing points-tested skilled migration shapes the whole application. Use the Department of Home Affairs website to understand which visa category and occupation you would fall under before you invest time in tailoring a resume.",
    },
    {
      title: "Check your occupation and whether a skills assessment applies",
      body: "Skilled migration visas map to an occupation on Home Affairs' skilled occupation lists, identified by an ANZSCO code. Many occupations also require a positive skills assessment from the relevant assessing authority, such as ACS for ICT, Engineers Australia for engineering, CPA Australia or CA ANZ for accounting, or AHPRA and ANMAC for health and nursing, before you can apply for certain visas.",
    },
    {
      title: "Target employers who can sponsor, if sponsorship is the route",
      body: "If you need employer sponsorship, the Skills in Demand visa (subclass 482) is the main temporary route, and the employer generally has to be an approved sponsor. Confirm current eligibility and employer obligations on the Home Affairs website rather than a third-party summary.",
    },
    {
      title: "Rebuild the resume and LinkedIn together",
      body: "Convert your resume to Australian format and make LinkedIn match it: same titles, same dates, Australian spelling. Keep your LinkedIn location real and state your Australian plans in the headline or About section.",
    },
    {
      title: "Prepare a key selection criteria response if the role needs one",
      body: "Government, health and many large-employer roles score a separate criteria or capability response, sometimes as important as the resume itself. Read the job ad closely for the exact requirements rather than assuming a generic format.",
    },
    {
      title: "Get your referees and remote interviews ready",
      body: "Brief your referees on the roles you are targeting, including the time difference, and confirm all interview times in Australian time. Australia spans three time zones, so check the specific state or territory of the employer rather than assuming a single national time.",
    },
  ],
  keySectors: [
    "Healthcare, aged care and nursing",
    "Mining, resources, energy and construction",
    "Information technology, data and cybersecurity",
    "Accounting and financial services",
    "Engineering",
    "Government, education and the public sector",
  ],
  visaContext:
    "Unless you already have the right to work in Australia, most professional routes fall into two groups: employer-sponsored visas, most notably the Skills in Demand visa (subclass 482), and points-tested skilled migration, most notably the Skilled Independent visa (subclass 189), the Skilled Nominated visa (subclass 190) or the Skilled Work Regional visa (subclass 491). Both routes generally require your occupation to sit on a current Home Affairs skilled occupation list, and many occupations also require a positive skills assessment from the relevant assessing authority before you can apply. Occupations are currently identified by ANZSCO codes; the Australian Bureau of Statistics has introduced a newer classification called OSCA that is progressively replacing ANZSCO for statistics, but at the time of writing the Department of Home Affairs still uses ANZSCO codes for skilled occupation lists and visa nominations, so always confirm your occupation on the official Home Affairs page rather than an older third-party summary. Eligible occupations, criteria and fees change, so rely on the Department of Home Affairs or a registered migration agent, not on a resume writer. This is orientation only, not migration or immigration advice.",
  commonMistakes: [
    "Keeping a two-page CV where genuinely relevant experience is being cut just to hit a UK-style page limit",
    "Leaving referees off entirely instead of naming two with permission",
    "Ignoring a key selection criteria requirement stated in the job ad",
    "Leaving citizenship, residency or visa status vague, so the employer assumes the harder case",
    "Using an occupation title on the resume that does not match the ANZSCO occupation being assessed for skilled migration",
    "Assuming a skills assessment is optional when the target visa or occupation requires one",
    "Applying to employers who cannot sponsor when sponsorship is required for the role",
  ],
  faqs: [
    {
      q: "Can I apply for Australian jobs from outside Australia?",
      a: "Yes, you can apply for Australian jobs from abroad, and many employers, particularly in healthcare, technology and engineering, interview overseas candidates by video. What matters most is whether you already have work rights or a credible pathway to get them, so make your citizenship, residency or visa position clear and make sure your resume follows Australian conventions.",
    },
    {
      q: "Do I need a skills assessment before I can apply for Australian jobs?",
      a: "Not to apply for a job itself, but many skilled migration visas require a positive skills assessment from the relevant assessing authority, such as ACS, Engineers Australia, CPA Australia, CA ANZ, ANMAC or AHPRA, before the visa can be granted. If you are pursuing points-tested or employer-sponsored skilled migration, check the requirement for your specific occupation on the Department of Home Affairs website early, because assessments can take time.",
    },
    {
      q: "What is the difference between ANZSCO and OSCA?",
      a: "ANZSCO is the occupation classification Australia has used for years and is still the classification the Department of Home Affairs uses for skilled occupation lists and visa nominations. OSCA is a newer classification released by the Australian Bureau of Statistics that is progressively replacing ANZSCO for statistical purposes. As of this writing, skilled migration still runs on ANZSCO codes, so confirm your occupation on the current Home Affairs skilled occupation list rather than assuming OSCA already applies to visas.",
    },
    {
      q: "How do I find Australian employers who sponsor visas?",
      a: "Start by checking whether your occupation is on a current Home Affairs skilled occupation list, since that determines whether sponsorship is even possible for that role. From there, job ads for the Skills in Demand visa (subclass 482) often state sponsorship availability directly, and recruitment agencies in your field can tell you which of their clients sponsor, so ask plainly rather than guessing.",
    },
    {
      q: "Do Australian employers accept overseas degrees?",
      a: "Most Australian employers accept overseas degrees at face value for hiring purposes, stated as awarded with the institution and grade. For regulated professions such as nursing, medicine, engineering, accounting and ICT, formal recognition or a skills assessment through the relevant Australian body matters more than the degree itself, particularly for skilled migration, so check the specific body for your profession.",
    },
    {
      q: "Is an Australian resume different from a CV I would send to the UK or US?",
      a: "Yes. An Australian resume typically runs two to three pages, longer than a UK CV, names referees directly rather than omitting them, and often needs a separate key selection criteria response for government, health or large-employer roles. A resume built for the UK or US market usually needs real restructuring, not just a change of spelling, before it reads as written for Australia.",
    },
  ],
  sources: [
    { label: "Department of Home Affairs: Skilled occupation list", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" },
    { label: "Department of Home Affairs: Skilled Independent visa (subclass 189)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189" },
    { label: "Department of Home Affairs: Skilled Nominated visa (subclass 190)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-nominated-190" },
    { label: "Department of Home Affairs: Skills in Demand visa (subclass 482)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482" },
    { label: "Australian Bureau of Statistics: OSCA classification", url: "https://www.abs.gov.au/statistics/classifications/osca-occupation-standard-classification-australia/latest-release" },
    { label: "ACS: Migration skills assessment", url: "https://www.acs.org.au/migration-skills-assessment.html" },
    { label: "Engineers Australia: Migration skills assessment", url: "https://www.engineersaustralia.org.au/migrants/migration-skills-assessment" },
    { label: "CPA Australia: Migration services", url: "https://www.cpaaustralia.com.au/migration-services" },
    { label: "CA ANZ: Migration skills assessment", url: "https://www.charteredaccountantsanz.com/become-a-member/migration-assessment" },
    { label: "AHPRA: International practitioners", url: "https://www.ahpra.gov.au/Registration/International-practitioners" },
    { label: "ANMAC: Skilled migrants", url: "https://www.anmac.org.au/skilled-migrants" },
  ],
};

/* ------------------------------------------------------------------ */
/* /australia/international-job-seekers/from-{origin}                   */
/* ------------------------------------------------------------------ */

const origins: OriginCorridor[] = [
  {
    country: "australia",
    origin: "sri-lanka",
    originName: "Sri Lanka",
    metaTitle: "Australian Resume for Sri Lankans: Applying From Sri Lanka",
    metaDescription:
      "How to turn a Sri Lankan CV into an Australian resume: drop NIC and personal details, add referees and selection criteria, and cite CA Sri Lanka or CIMA.",
    h1: "Applying for Australian Jobs From Sri Lanka",
    lead:
      "Sri Lankan CVs are built for a market that expects a photo, exam results, a declaration and two general referees. Australian employers want a longer, evidence-led resume with work-related referees ready and, for many roles, a written response to selection criteria.",
    quickAnswer:
      "To apply for Australian jobs from Sri Lanka, rebuild your CV into an Australian resume: remove the photo, NIC number and declaration, cut O/L and A/L results, and list two work-related referees with permission. Present CA Sri Lanka, CIMA or engineering credentials clearly, add selection criteria where a role asks for them, and check skills assessment and visa routes on the Department of Home Affairs website.",
    overview:
      "Sri Lanka sends strong candidates to Australia, particularly in nursing, engineering, IT and accounting, and many already hold internationally recognised qualifications through CA Sri Lanka, CIMA, ACCA or IESL-accredited engineering degrees. The gap is rarely capability. It is a CV format built for Sri Lankan norms: a personal details block, subject-by-subject exam results, a declaration, and referees who are sometimes general character references rather than direct supervisors. Australian employers expect a longer, more detailed resume than a UK CV, referees who can be called quickly, and, for a large share of government, health and large-employer roles, a separate response to stated selection criteria. The fix is mostly structural, and it also brings Sri Lankan qualifications that Australian assessing bodies already recognise into clearer view.",
    whatToChange: [
      {
        from: "Photo in the top corner and a personal details block with NIC number, date of birth, gender, religion and marital status",
        to: "Name, city and country, phone with +94, email and LinkedIn only. No ID numbers, which are also a security risk on a widely circulated document",
      },
      {
        from: "G.C.E. O/L and A/L results listed subject by subject with grades",
        to: "Remove once you have a degree and a few years of experience. Graduates can keep one summary line of A/L stream and results",
      },
      {
        from: "Two referees, often general character references rather than direct supervisors, sometimes listed without asking first",
        to: "Two referees who directly supervised your recent work, named with role and current contact details once you have their permission",
      },
      {
        from: "An objective about seeking a challenging position in a reputed organisation",
        to: "A three to five line profile summary stating your level, evidence and target Australian role",
      },
      {
        from: "A closing declaration that the information is true, with date and signature",
        to: "Remove it. Australian resumes do not carry declarations or signatures",
      },
      {
        from: "A resume written only as a general document, with no response to any employer's stated requirements",
        to: "A separate key selection criteria or capability response, in STAR format, for any government, health or large-employer role that lists them",
      },
      {
        from: "Duties copied from a job description, sometimes across three or four pages with no achievement focus",
        to: "Two to three pages of achievements with AUD scope and outcomes, and one line of context about each Sri Lankan employer",
      },
      {
        from: "A CV built to a two-page ceiling, cutting relevant recent detail to fit",
        to: "Two to three pages, extending toward four where a selection criteria response or a longer technical history is genuinely relevant",
      },
    ],
    qualificationsNote:
      "Several Sri Lankan qualifications are already recognised by Australian bodies, and stating that recognition accurately strengthens a resume more than any translation would. CPA Australia has a membership pathway agreement with the Institute of Chartered Accountants of Sri Lanka (CA Sri Lanka), so state your CA Sri Lanka status precisely, student, associate, or fellow, and the year. CIMA and ACCA are also widely held by Sri Lankan accountants and are internationally recognised designations. Engineers should check Engineers Australia's migration skills assessment process directly; Sri Lankan engineering degrees accredited through IESL sit within the Washington Accord framework that Engineers Australia participates in, but a positive skills assessment is still required for most skilled migration routes, it is not automatic. IT and software professionals typically go through the ACS migration skills assessment for ICT occupations. Nurses need a skills assessment through ANMAC and then registration with AHPRA before practising in Australia; read both organisations' guidance for internationally qualified applicants early, because these processes take time.",
    sectorsWhereCandidatesCompete: [
      "Nursing, aged care and community health",
      "Software engineering, QA and IT, often with experience delivering for Australian or global clients",
      "Civil, mechanical and electrical engineering",
      "Accounting and financial services",
      "Hospitality and specialist culinary roles",
      "Construction and trades",
    ],
    practicalSteps: [
      {
        title: "Strip the Sri Lankan format first",
        body: "Remove the photo, the personal details block, school results, the declaration and any referees you have not actually asked. This alone usually reshapes the resume before you touch the wording.",
      },
      {
        title: "Explain employers an Australian reader will not know",
        body: "A reader in Melbourne or Brisbane does not know a Colombo conglomerate, a regional bank or a local software house by name. Add one line under each: sector, size, and whether it serves Australian, European or global clients.",
      },
      {
        title: "Start your skills assessment early if you are pursuing skilled migration",
        body: "If your occupation needs a skills assessment through a body like ACS, Engineers Australia, CPA Australia, CA ANZ or ANMAC, start that process well before you plan to apply, since assessments can take several weeks to months and many visa routes cannot proceed without a positive outcome.",
      },
      {
        title: "Prepare for key selection criteria if you are targeting government or health roles",
        body: "These roles are common destinations for Sri Lankan nurses, engineers and allied health professionals in Australia's public sector, and a resume alone will not carry the application; budget real time for a proper criteria response.",
      },
      {
        title: "Plan around the time difference",
        body: "Sri Lanka runs on a single fixed time, UTC+5:30. Australia spans three time zones and most of it observes daylight saving between October and April, so depending on the state, an Australian business day is roughly two and a half to five and a half hours ahead of Sri Lankan time. Confirm the specific state and current offset before agreeing to an interview time.",
      },
    ],
    commonMistakes: [
      "Keeping the NIC number and personal details block on a resume that circulates between recruiters and employers",
      "Listing O/L results years into a professional career",
      "Treating referees as a formality rather than briefing them on the roles you are targeting",
      "Ignoring a key selection criteria requirement because it is an unfamiliar format",
      "Assuming a Sri Lankan qualification is automatically recognised without checking the relevant Australian assessing authority",
      "Cutting a resume to two pages when genuinely relevant Australian-facing detail is being lost to do it",
    ],
    visaContext:
      "Sri Lankan nationals generally need a visa to work in Australia. Common professional routes include the Skills in Demand visa (subclass 482) for employer-sponsored positions, and points-tested skilled migration visas such as the Skilled Independent (subclass 189) or Skilled Nominated (subclass 190), which usually require your occupation to sit on a current Home Affairs skilled occupation list and often a positive skills assessment. Check your own situation on the Department of Home Affairs website, and use a registered migration agent for anything complex. This is orientation only, not immigration or migration advice.",
    faqs: [
      {
        q: "Should I include my NIC number on a resume for Australian jobs?",
        a: "No, never include your NIC number on an Australian resume. Australian employers do not use it for hiring, and it is a security risk on a document that may pass through multiple recruiters and systems. Identity and work rights checks happen separately, later in the process, through the employer's own verification.",
      },
      {
        q: "Is CA Sri Lanka recognised by Australian employers and CPA Australia?",
        a: "CPA Australia has a membership pathway agreement with the Institute of Chartered Accountants of Sri Lanka, so CA Sri Lanka qualifications carry real weight. State your exact membership status and year, and pair the credential with evidence of the reporting, audit or budgeting work you actually did, since Australian employers still want to see the applied experience alongside the designation.",
      },
      {
        q: "Do I need a skills assessment to work in Australia as a Sri Lankan nurse or engineer?",
        a: "For most skilled migration visas, yes. Nurses generally need a positive assessment from ANMAC before AHPRA registration, and engineers generally need a positive assessment from Engineers Australia. These are required for the relevant visa pathway, not for every job application, so check the specific requirement for your occupation and intended visa on the Department of Home Affairs website.",
      },
      {
        q: "Should I list my referees or say available on request on an Australian resume?",
        a: "Naming two referees directly, with role and current contact details, is the stronger Australian default once you have asked their permission. This is different from the UK, where referees are usually left off entirely. Choose people who supervised your day-to-day work rather than general character referees, which is common on Sri Lankan CVs but less useful to an Australian hiring manager.",
      },
      {
        q: "How long should my Australian resume be if my current Sri Lankan CV is four pages?",
        a: "Aim for two to three pages once the personal details block, school results and declaration are removed, extending to four only if you are also writing a key selection criteria response or have a genuinely long, relevant technical history. Most of the length reduction comes from cutting duties and biodata, not from cutting real evidence of your work.",
      },
    ],
    sources: [
      {
        label: "CPA Australia: Institute of Chartered Accountants of Sri Lanka pathway",
        url: "https://www.cpaaustralia.com.au/become-a-cpa/pathways/membership-pathways-and-arrangements/chartered-accountants-sri-lanka",
      },
      {
        label: "Engineers Australia: Migration skills assessment",
        url: "https://www.engineersaustralia.org.au/migrants/migration-skills-assessment",
      },
      { label: "ACS: Migration skills assessment", url: "https://www.acs.org.au/migration-skills-assessment.html" },
      { label: "ANMAC: Skilled migrants", url: "https://www.anmac.org.au/skilled-migrants" },
      { label: "AHPRA: International practitioners", url: "https://www.ahpra.gov.au/Registration/International-practitioners" },
      { label: "Department of Home Affairs: Skilled occupation list", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" },
      { label: "Department of Home Affairs: Skills in Demand visa (subclass 482)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skills-in-demand-visa-subclass-482" },
    ],
  },
  {
    country: "australia",
    origin: "india",
    originName: "India",
    metaTitle: "Australian Resume for Indian Professionals: From India",
    metaDescription:
      "How to convert an Indian CV for Australian employers: drop CTC and father's name, restructure project-style IT resumes, and present ICAI, NBA or ACS status.",
    h1: "Applying for Australian Jobs From India",
    lead:
      "Indian CVs are written for Indian job portals and IT services recruiters: CTC and notice period up top, projects listed client by client, and a personal profile with father's name and a declaration. Australian employers want a resume built around your own achievements, with referees ready and criteria answered where they are set.",
    quickAnswer:
      "To apply for Australian jobs from India, rebuild your CV to Australian conventions: remove CTC, expected salary, father's name and the declaration, turn project-by-project IT listings into role-based achievements, add two work-related referees, and write a key selection criteria response where a role sets one. Present ICAI, NBA-accredited engineering degrees or ACS status accurately, and check skills assessment and visa routes on the Department of Home Affairs website.",
    overview:
      "Indian professionals compete strongly for Australian roles, especially in technology, healthcare, engineering and accounting, and many already hold internationally recognised qualifications or degrees accredited by India's National Board of Accreditation. The obstacle is usually format, not capability. Indian CV habits come from a different hiring system: CTC-based negotiation upfront, IT services CVs organised around client projects rather than employers, board exam percentages carried for years, and a declaration at the end. Australian readers want a resume organised around what you personally built or led, referees they can call quickly, and, for government, health and many large-employer roles, a written answer to stated selection criteria. The conversion is about restructuring around your own contribution and removing the details that belong to the Indian hiring process.",
    whatToChange: [
      {
        from: "\"Current CTC\", \"Expected CTC\" in lakhs and notice period stated at the top of the resume",
        to: "Remove salary figures entirely. Mention notice period, if useful, in the cover letter rather than the resume header",
      },
      {
        from: "A personal profile with father's name, date of birth, gender, marital status and nationality",
        to: "Name, city and country, phone with +91, email and LinkedIn only",
      },
      {
        from: "IT services format: Project 1, Project 2, each with client, duration, team size, environment and roles and responsibilities",
        to: "Organise by employer and role. Summarise the technology stack once, and write achievements that show what you personally built, improved or led across projects",
      },
      {
        from: "Class 10 and Class 12 board percentages listed alongside the degree",
        to: "Remove once you have a degree and experience. State the degree with institution and CGPA or class as awarded",
      },
      {
        from: "A career objective and a long list of personal strengths",
        to: "A three to five line profile summary with your level, specialism, evidence and target Australian role",
      },
      {
        from: "\"I hereby declare that the above information is true to the best of my knowledge\", with place, date and signature",
        to: "Remove it. Australian resumes carry no declaration, place, date or signature",
      },
      {
        from: "No referees listed, or a bare \"references available on request\" by default",
        to: "Two referees who directly supervised your recent work, named with role and current contact details once you have their permission",
      },
      {
        from: "A resume with no response to any employer's stated requirements",
        to: "A separate key selection criteria or capability response, in STAR format, for any government, health or large-employer role that lists them",
      },
    ],
    qualificationsNote:
      "Indian qualifications are generally familiar to Australian employers, particularly in technology and engineering, but the recognition still has to be stated correctly rather than assumed. CPA Australia has a mutual recognition agreement with the Institute of Chartered Accountants of India (ICAI), so state your ICAI membership status and year precisely. Engineering degrees accredited by India's National Board of Accreditation sit within the Washington Accord framework Engineers Australia participates in, but a positive Engineers Australia migration skills assessment is still required for most skilled migration routes; it is not automatic from accreditation alone. IT and software professionals typically go through the ACS migration skills assessment for ICT occupations, evaluated against the Australian Qualifications Framework and relevant work experience. Nurses need a skills assessment through ANMAC and then registration with AHPRA, and doctors go through AHPRA and the Medical Board of Australia's own assessment pathways; both are separate from a general skills assessment and take real time to complete.",
    sectorsWhereCandidatesCompete: [
      "Software engineering, cloud, data and cybersecurity",
      "IT consulting and business analysis, often with experience serving Australian or global clients",
      "Nursing, aged care and allied health",
      "Accounting, audit and financial services",
      "Engineering and infrastructure",
      "Mining, resources and construction",
    ],
    practicalSteps: [
      {
        title: "Reorganise around roles, not projects",
        body: "If you have spent years on client projects at an IT services firm, group them under your employer and title, then pick the four to six outcomes that show the most responsibility. An Australian reader wants your trajectory, not every engagement.",
      },
      {
        title: "Remove the Indian process details",
        body: "CTC, expected salary, notice period, father's name, declaration and signature all belong to Indian hiring processes. Removing them usually recovers close to a page for real evidence.",
      },
      {
        title: "Start your skills assessment early if you are pursuing skilled migration",
        body: "ACS, Engineers Australia, CPA Australia, CA ANZ and ANMAC assessments can take weeks to months, and most skilled migration visas cannot proceed without a positive outcome, so start the process well ahead of when you plan to apply.",
      },
      {
        title: "Add referees and check for selection criteria",
        body: "Where Indian CVs often leave referees off entirely, name two directly once you have their permission, and check every government, health or large-employer job ad for a separate criteria or capability requirement.",
      },
      {
        title: "Plan around the time difference",
        body: "India runs on a single fixed time, UTC+5:30, the same offset as Sri Lanka. Australia spans three time zones and most of it observes daylight saving between October and April, so an Australian business day is roughly two and a half to five and a half hours ahead of Indian time depending on the state. Confirm the specific state and current offset before agreeing to an interview time.",
      },
    ],
    commonMistakes: [
      "Leaving CTC and expected CTC on the resume, which Australian employers find unusual and which anchors negotiation badly",
      "Keeping the project-by-project IT services layout that runs to four or five pages with no clear achievements",
      "Listing Class 10 and 12 percentages years into a career",
      "Including father's name, date of birth and a signed declaration",
      "Leaving referees off entirely instead of naming two with permission",
      "Assuming an NBA-accredited engineering degree alone satisfies Engineers Australia's requirements without a formal assessment",
    ],
    visaContext:
      "Indian nationals generally need a visa to work in Australia. Common professional routes include the Skills in Demand visa (subclass 482) for employer-sponsored positions, and points-tested skilled migration visas such as the Skilled Independent (subclass 189) or Skilled Nominated (subclass 190), which usually require your occupation to sit on a current Home Affairs skilled occupation list and often a positive skills assessment. Criteria and fees change, so check the Department of Home Affairs website directly and use a registered migration agent for anything complex. This is orientation only, not immigration or migration advice.",
    faqs: [
      {
        q: "Should I mention my CTC on a resume for Australian jobs?",
        a: "No, do not put your current or expected CTC on an Australian resume. Australian employers do not expect salary on the resume, and figures in lakhs mean little without context. Salary comes up in the application form or conversation, usually against the advertised Australian salary range. Use the space for evidence of your impact instead.",
      },
      {
        q: "How do I convert an Indian IT resume into an Australian resume?",
        a: "Reorganise it by employer and role rather than by client project, summarise the technology stack once, and write four to six achievements per recent role that show what you personally built, improved or led. Remove CTC, notice period, the personal profile block and declaration, add two referees, and keep the resume to two or three pages unless a selection criteria response extends it.",
      },
      {
        q: "Is my NBA-accredited engineering degree automatically recognised by Engineers Australia?",
        a: "Not automatically. Indian engineering degrees accredited by the National Board of Accreditation sit within the Washington Accord framework Engineers Australia participates in, which helps the process, but a formal Engineers Australia migration skills assessment is still required for most skilled migration routes. Check the current requirements on the Engineers Australia website for your specific engineering discipline.",
      },
      {
        q: "Is ICAI recognised by CPA Australia?",
        a: "Yes, CPA Australia has a mutual recognition agreement with the Institute of Chartered Accountants of India. State your ICAI membership status and year precisely on your resume, and pair it with specific evidence of the accounting, audit or reporting work you did, since Australian employers weigh the applied experience alongside the credential.",
      },
      {
        q: "Do I need referees on my Australian resume if my Indian CV never listed any?",
        a: "Yes, add two referees who directly supervised your recent work, named with their role and current contact details, once you have asked their permission. Indian resumes commonly leave referees off entirely or default to a generic line, but Australian hiring managers are used to moving straight to a reference call once you are shortlisted, so having them ready removes a step from the process.",
      },
    ],
    sources: [
      {
        label: "CPA Australia: Institute of Chartered Accountants of India pathway",
        url: "https://www.cpaaustralia.com.au/become-a-cpa/pathways/membership-pathways-and-arrangements/institute-of-chartered-accountants-india",
      },
      {
        label: "Engineers Australia: Migration skills assessment",
        url: "https://www.engineersaustralia.org.au/migrants/migration-skills-assessment",
      },
      { label: "ACS: Migration skills assessment", url: "https://www.acs.org.au/migration-skills-assessment.html" },
      { label: "ANMAC: Skilled migrants", url: "https://www.anmac.org.au/skilled-migrants" },
      { label: "AHPRA: International practitioners", url: "https://www.ahpra.gov.au/Registration/International-practitioners" },
      { label: "Department of Home Affairs: Skilled occupation list", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" },
      { label: "Department of Home Affairs: Skilled Independent visa (subclass 189)", url: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/skilled-independent-189" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /australia/career-advice : hub intro                                 */
/* ------------------------------------------------------------------ */

const adviceHubIntro =
  "Australian hiring runs longer and more literally than the UK or the US. The resume can stretch to three or four pages, referees are usually named rather than hidden, and a large share of government, health and large-employer roles are decided as much by a written key selection criteria response as by the resume itself. These guides cover what is specific to Australia: the resume format, how to answer selection criteria without just restating them, and how referees actually work here. For universal advice on structure and ATS, the global career advice library goes deeper. If you are applying from abroad, start with the international job seekers guide.";

export const australiaBundle: CountryBundleFull = {
  country: "australia",
  market,
  adviceHubIntro,
  services,
  articles,
  ijsHub,
  origins,
};
