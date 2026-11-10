/**
 * NEW ZEALAND COUNTRY BUNDLE
 * ------------------------------------------------------------------
 * Powers the whole New Zealand mini-site: the /new-zealand hub, the
 * three localised service pages, three New Zealand specific articles,
 * the international job seekers hub and the Sri Lanka and India
 * origin corridors.
 *
 * British spelling and "CV" throughout. Prices in USD only.
 * Visa and Green List content is orientation only and always points
 * to Immigration New Zealand or NZQA. No testimonials, no invented
 * statistics.
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
/* /new-zealand : country hub                                          */
/* ------------------------------------------------------------------ */

const market: CountryMarket = {
  slug: "new-zealand",
  name: "New Zealand",
  adjective: "New Zealand",
  flag: "🇳🇿",
  code: "NZ",
  locale: "en-NZ",
  quickAnswer:
    "A New Zealand CV is a two to three page, reverse chronological document in British spelling that opens with a short profile, lists two referees and avoids overselling. Chanuka Jeewantha writes New Zealand CVs, LinkedIn profiles and cover letters personally, for professionals already in New Zealand and those applying from abroad, with prices from $129 USD.",
  metaTitle: "New Zealand CV, LinkedIn and Cover Letter Writing",
  metaDescription:
    "CVs, LinkedIn profiles and cover letters written for New Zealand employers: two to three pages, British spelling, referees included, priced in USD.",
  heroHeading: "CV, LinkedIn and Cover Letter Writing for the New Zealand Job Market",
  heroLead:
    "A New Zealand CV is plain-spoken by design: two to three pages, a short profile that states what you have done rather than what you are, and two referees at the end. Get the shape and the tone right and a small, connected market reads your experience on its merits.",
  docType: "CV",
  standardLength: "Two to three pages for most professionals. One page can work early in a career.",
  photoRule:
    "Leave it off. New Zealand CVs do not carry a photo, and a headshot tends to read as a habit brought over from another market rather than a local one.",
  spellingStyle: "British spelling",
  overview:
    "New Zealand's job market is small by international standards, and that shapes almost everything about how a CV is read. Many hiring managers already know several of the people who might apply for a given role, so a CV that sounds like it was written for anywhere reads as written for nowhere in particular. Employers respond better to a plain, specific account of what you did than to language that oversells it, a habit some New Zealanders call tall poppy syndrome: a wariness of anyone who appears to rate themselves above the evidence. For applicants writing from outside Aotearoa New Zealand, the CV also has to answer a quiet question early: are you genuinely able to work here, and do you actually intend to move.",
  marketRules: [
    {
      label: "Length",
      value:
        "Two to three pages is the common length for experienced professionals. One page suits graduates and people early in their careers. A single page can look thin for someone with a decade of experience, which is different from UK or US convention.",
      importance: "critical",
    },
    {
      label: "Photo and personal details",
      value:
        "No photo, date of birth or marital status. These read as imported habits rather than a New Zealand norm, and employers have no use for them at CV stage.",
      importance: "critical",
    },
    {
      label: "Referees",
      value:
        "Unlike the UK or US, many New Zealand CVs name two referees directly, with a role, organisation, phone and email, so an interested employer can call. Listing 'referees available on request' instead is also accepted, particularly if you are still employed.",
      importance: "recommended",
    },
    {
      label: "Tone",
      value:
        "Plain and specific. Scope and outcomes persuade a New Zealand reader; language like 'visionary' or 'world-class' tends to work against you rather than for you.",
      importance: "recommended",
    },
    {
      label: "British spelling and dates",
      value:
        "Use British spelling (organised, programme, analysed, licence as a noun) and Month Year dates such as 'March 2022 to present'. American spelling is a small but noticeable mismatch.",
      importance: "critical",
    },
    {
      label: "Work rights",
      value:
        "State your residency or visa position plainly if it helps your application, in the same understated register as the rest of the CV. Leaving it vague reads as something to hide.",
      importance: "critical",
    },
    {
      label: "File and platforms",
      value:
        "A single clean column, standard headings and a Word or text-based PDF file. Seek and Trade Me Jobs are the two platforms most New Zealand employers and recruiters use, and both parse simple layouts far more reliably than designed templates.",
      importance: "recommended",
    },
  ],
  whatRecruitersLookFor: [
    "Plain, specific evidence of what you did and what changed because of it",
    "The exact tools, systems and methods you use, named rather than implied",
    "Scope of responsibility: team size, budget, geography, stakeholders",
    "A readable career line, with gaps and short roles explained briefly rather than hidden",
    "New Zealand relevant registration or membership where a role needs it, such as Nursing Council or Engineering New Zealand",
    "A clear, honest statement of your work rights for anyone whose history is mostly outside New Zealand",
  ],
  inDemandSectors: [
    "Health, nursing and aged care",
    "Construction, infrastructure and trades",
    "Engineering: civil, mechanical and electrical",
    "Information technology",
    "Agriculture, horticulture and agritech",
    "Education, from early childhood through to secondary",
  ],
  keyRoles: [
    "Registered Nurse",
    "Civil Engineer",
    "Software Engineer",
    "Accountant",
    "Project Manager",
    "Electrical Engineer",
  ],
  faqs: [
    {
      q: "How long should a CV be in New Zealand?",
      a: "Two to three pages is the common length for most experienced professionals in New Zealand, which is a little longer than the UK norm of two pages. Graduates and people with under two years of experience are usually better served by one tight page. A very short, one page CV from someone with a decade of experience can look thin rather than efficient in this market.",
    },
    {
      q: "Should I put a photo on my CV in New Zealand?",
      a: "No, New Zealand CVs are not expected to carry a photo. There is no rule against one, but it is not local convention, and it tends to signal a CV built for another market. Save your professional photo for LinkedIn, where a clear headshot is expected and useful.",
    },
    {
      q: "Do I need referees listed on a New Zealand CV?",
      a: "Many New Zealand CVs do list two referees directly, with their role, organisation, phone and email, which differs from UK or US practice. It is also acceptable to write 'referees available on request' if you would rather not name people while still employed. Either way, ask your referees first and tell them what role you are applying for.",
    },
    {
      q: "Can you help if I am applying for New Zealand jobs from overseas?",
      a: "Yes. A large part of this work is converting CVs from Sri Lanka, India, the Gulf and elsewhere into New Zealand conventions: adjusting length, removing biodata, translating job titles and qualifications into terms a New Zealand reader recognises, and stating your work rights honestly. Visa and residence questions themselves belong with Immigration New Zealand or a licensed immigration adviser; the documents are what Chanuka writes.",
    },
    {
      q: "How much does a New Zealand CV cost and what currency do you charge in?",
      a: "New Zealand CV writing costs $129, $189 or $279 USD depending on experience: under two years, three to nine years, or ten years and executive. All payments are taken in USD, and your card provider converts at its own rate. Combining any two services saves 20 percent, and all three save 30 percent.",
    },
    {
      q: "How does the process work if I am not in New Zealand?",
      a: "The whole process runs by email, so your location does not matter. You choose a package and pay, complete a written brief and upload your current CV, and Chanuka writes the document personally. You receive a draft, have one revision round, and get final files in editable Word and PDF, usually within 5 to 7 days.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /new-zealand/{service} : localised commercial pages                 */
/* ------------------------------------------------------------------ */

const services: CountryService[] = [
  {
    country: "new-zealand",
    service: "cv-writing",
    primaryKeyword: "CV writing service NZ",
    secondaryKeywords: [
      "professional CV writer New Zealand",
      "New Zealand CV writing service for skilled migrants",
      "executive CV writing NZ",
      "CV writer for Auckland and Wellington jobs",
      "New Zealand CV format help",
    ],
    metaTitle: "CV Writing Service NZ: CVs for New Zealand Roles",
    metaDescription:
      "New Zealand CV writing by one expert, not a team: British spelling, a plain-spoken profile and referees handled correctly, from $129 USD, delivered fast.",
    eyebrow: "New Zealand CV writing",
    h1: "CV Writing Service for New Zealand Jobs",
    lead:
      "A New Zealand CV written personally by Chanuka Jeewantha: two to three pages, plain and specific in tone, with referees handled correctly and nothing that oversells.",
    quickAnswer:
      "This New Zealand CV writing service rewrites your CV to Kiwi conventions: two to three pages, reverse chronological, a short profile instead of an objective, plain achievement led bullets, and two referees if you choose to list them. Every CV is written personally by Chanuka Jeewantha, delivered in Word and PDF within 5 to 7 days as standard, from $129 USD.",
    keyFacts: [
      { label: "Length", value: "Two to three pages for most professionals, one for early career" },
      { label: "Opening", value: "A short profile of three to four lines, not an objective" },
      { label: "Referees", value: "Two named referees, or 'available on request' if you prefer" },
      { label: "Spelling", value: "British spelling throughout, the word 'CV'" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
      { label: "Standard delivery", value: "5 to 7 days, faster options available" },
    ],
    whyDifferent: {
      heading: "Why a New Zealand CV is not an Australian resume with a different flag",
      paragraphs: [
        "New Zealand's professional workforce is small, and in most fields a hiring manager has already worked with, trained, or at least heard of several of your likely competitors. That changes what a CV has to do. It is not read as an anonymous filter so much as one input into a decision the employer already has some feel for, which means a CV that sounds specific and genuine tends to do better here than one that sounds polished and generic.",
        "The tone follows from that. New Zealand workplace culture is wary of overclaiming, sometimes described locally as tall poppy syndrome, a discomfort with anyone who appears to rate themselves above their evidence. 'Delivered a new rostering system that cut overtime by a fixed amount' does more work than 'a results driven, world class operator'. The writing is calibrated to that register rather than to a louder, more American style of self-promotion.",
        "New Zealand CVs also do something UK and US CVs usually do not: many name two referees directly, with role, organisation, phone and email, so an interested employer can call without a separate request. Getting that section right, and getting your referees' permission first, is treated as part of the document, not an afterthought bolted on at the end.",
      ],
    },
    whatYouGet: [
      "A two to three page New Zealand CV (one page for early career) written from scratch around your target role",
      "A short profile in plain British spelling that states your level, specialism and direction without overselling",
      "Experience rewritten as achievements with scope and outcomes, in the understated register New Zealand employers expect",
      "Overseas job titles, employers and qualifications explained in terms a New Zealand reader recognises",
      "A referees section formatted correctly, with two contacts or a clear 'available on request' line",
      "A clean single-column layout that Seek, Trade Me Jobs and employer ATS parse reliably",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Section order", value: "Contact details, profile, key skills, experience, education, then referees" },
      { label: "Dates", value: "Month and year for every role, most recent first" },
      { label: "Referees", value: "Two named referees with role, organisation, phone and email, or noted as available on request" },
      { label: "Leave out", value: "Photo, date of birth, marital status, national ID numbers" },
      { label: "Work rights", value: "Stated plainly, in one line, where it helps the application" },
      { label: "Platforms", value: "Seek and Trade Me Jobs are the two main job boards most New Zealand employers use" },
    ],
    sectors: [
      "Health, nursing and aged care",
      "Construction, infrastructure and trades",
      "Engineering: civil, mechanical and electrical",
      "Information technology",
      "Agriculture, horticulture and agritech",
      "Accounting and financial services",
    ],
    process: [
      {
        title: "Choose your tier and pay in USD",
        body: "Pick the tier that matches your experience. Payment is in USD, so there is nothing to convert at checkout beyond your card provider's own rate.",
      },
      {
        title: "Complete the brief",
        body: "Upload your current CV and answer a written brief about your target New Zealand roles, your results, and your residency or visa position. Links to two or three job adverts help.",
      },
      {
        title: "Chanuka writes your CV",
        body: "Your CV is written personally, never outsourced. Questions come by email, so the time difference does not slow anything down.",
      },
      {
        title: "Review, revise and apply",
        body: "You receive the draft, request changes in one revision round, and get final Word and PDF files ready to send to employers and recruiters.",
      },
    ],
    faqs: [
      {
        q: "What makes a CV writing service NZ specific?",
        a: "A New Zealand specific CV service writes to local conventions rather than a generic international template: two to three pages, a short plain-spoken profile, British spelling, two referees or a clear line saying they are available, and an understated tone that avoids overselling. It also understands how a small, connected market reads a CV differently from a larger one like the UK or US.",
      },
      {
        q: "Is a professional CV writer worth it for New Zealand jobs?",
        a: "A professional CV writer is worth it when your CV is not getting shortlisted despite relevant experience, or when you are moving into the New Zealand market from abroad and your document follows another country's conventions, such as a photo, a personal details block or a length built for a bigger market. It matters less if you already get interviews and the gap is later in the process.",
      },
      {
        q: "Do I need referees on my New Zealand CV?",
        a: "Many New Zealand CVs list two referees directly with their role, organisation, phone and email, which is different from UK or US practice. If you would rather not name people while still employed, 'referees available on request' is also accepted. Either way, ask your referees first and let them know which role you are applying for.",
      },
      {
        q: "Will my CV work with Seek and Trade Me Jobs?",
        a: "Yes. The CV uses standard headings, a single-column layout, and the job titles and skills your target roles actually use, which is what Seek and Trade Me Jobs, the two platforms most New Zealand employers and recruiters use, parse most reliably. A cluttered, designed template tends to lose formatting or key details when it is uploaded or forwarded.",
      },
      {
        q: "Should my New Zealand CV mention my visa or residency status?",
        a: "Mention it when it helps you. If you already hold residency or an open work visa, a clear line near the top removes a common reason an employer hesitates over an overseas CV. If your position is more complex, state it factually rather than leaving it vague, and let the cover letter add context. Chanuka words the line to your situation, not to legal specifics.",
      },
      {
        q: "How long does New Zealand CV writing take?",
        a: "Standard delivery is 5 to 7 days from receiving your completed brief. Fast delivery in 2 to 3 days adds 20 percent, and ultra delivery within 24 hours adds 50 percent. After the draft, one revision round is included, and the final Word and PDF files follow once changes are agreed.",
      },
    ],
  },
  {
    country: "new-zealand",
    service: "linkedin-optimisation",
    primaryKeyword: "LinkedIn profile writing NZ",
    secondaryKeywords: [
      "LinkedIn optimisation New Zealand",
      "LinkedIn profile writer NZ",
      "LinkedIn for New Zealand recruiters",
      "LinkedIn profile for relocating to New Zealand",
    ],
    metaTitle: "LinkedIn Profile Writing Service NZ",
    metaDescription:
      "LinkedIn profile writing for the New Zealand market: a headline recruiters search for, a plain-spoken About section and honest work-rights signalling.",
    eyebrow: "New Zealand LinkedIn optimisation",
    h1: "LinkedIn Profile Writing for the New Zealand Market",
    lead:
      "Your LinkedIn profile rewritten for a small, connected market: the job titles New Zealand recruiters actually search, a clear location and work-rights position, and an About section that reads like a professional rather than a pitch.",
    quickAnswer:
      "A New Zealand LinkedIn profile writing service rewrites your headline, About section, experience and skills so New Zealand recruiters find you under the job titles they search and trust the tone once they land on your profile. Chanuka Jeewantha writes each profile personally in British spelling, handles location and work-rights signalling, and delivers within 5 to 7 days from $129 USD.",
    keyFacts: [
      { label: "Headline", value: "Target job title and specialism first, not a slogan" },
      { label: "About section", value: "First person, British spelling, evidence over adjectives" },
      { label: "Location", value: "Your real location, with New Zealand relocation stated where true" },
      { label: "Deliverable", value: "Ready-to-paste text for every section" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
    ],
    whyDifferent: {
      heading: "How New Zealand recruiters use LinkedIn, and what that means for your profile",
      paragraphs: [
        "New Zealand's market is small enough that recruiters and hiring managers often already have a mental shortlist of people in a specialism, built up through LinkedIn searches, referrals and industry events. Your profile has to appear in that search and hold up once someone clicks through. A headline that reads 'Passionate about making a difference' rather than 'Registered Nurse, Aged Care' does not appear in the search that mattered.",
        "Location is the quiet filter for anyone outside New Zealand. Setting your location to Auckland when you are still in Colombo or Chennai misleads recruiters and tends to unravel on the first call. The steadier approach is your real location plus a clear, honest line about relocation and work rights in the headline or About section, so New Zealand employers and recruiters who hire internationally can still find and contact you.",
        "The writing register on LinkedIn follows the CV: plain, specific and free of the louder self-promotion common on American LinkedIn profiles. A New Zealand reader trusts a claim more when it is followed immediately by the evidence for it.",
      ],
    },
    whatYouGet: [
      "A search-focused headline built on the New Zealand job titles and skills recruiters actually type",
      "An About section in first person and British spelling, with specific evidence and a clear next step",
      "Experience entries rewritten from your CV, shorter and more conversational than the CV itself",
      "A curated skills list ordered so the most relevant skills show first",
      "Location and relocation or work-rights wording that is accurate and searchable",
      "Guidance on Open to Work settings, custom URL and recommendations",
      "One revision round on all text",
    ],
    marketConventions: [
      { label: "Spelling", value: "British spelling: organisation, programme, optimise" },
      { label: "Headline format", value: "Job title | specialism | sector or registration" },
      { label: "Photo", value: "Yes on LinkedIn, even though a New Zealand CV has none" },
      { label: "Voice", value: "First person in the About section, plain rather than promotional" },
      { label: "Credentials", value: "New Zealand relevant bodies named in full once, such as Nursing Council or Engineering New Zealand, then abbreviated" },
      { label: "Consistency", value: "Titles and dates match the CV, because a small network of recruiters checks both" },
    ],
    sectors: [
      "Health, nursing and aged care",
      "Construction, engineering and infrastructure",
      "Information technology",
      "Agriculture and agritech",
      "Accounting and financial services",
      "Professionals relocating to New Zealand",
    ],
    process: [
      {
        title: "Choose your tier",
        body: "LinkedIn optimisation uses the same experience tiers as CV writing. Bundling it with a New Zealand CV saves 20 percent.",
      },
      {
        title: "Share your profile and targets",
        body: "Send your LinkedIn URL, current CV and the New Zealand roles you want to be found for, plus your location and work-rights situation.",
      },
      {
        title: "Chanuka rewrites every section",
        body: "Headline, About, experience and skills are written personally, in British spelling, as ready-to-paste text.",
      },
      {
        title: "Revise and publish",
        body: "Review the draft, request changes in one revision round, then paste the final text into your profile.",
      },
    ],
    faqs: [
      {
        q: "Do New Zealand recruiters really use LinkedIn to find candidates?",
        a: "Yes, LinkedIn is a routine tool for New Zealand recruiters and hiring managers, especially in professional, healthcare and technical fields where the pool of qualified people is small enough that direct search and referral matter as much as advertised roles. A profile with a vague headline or the wrong job titles simply does not surface in those searches, whatever the experience behind it.",
      },
      {
        q: "Should I change my LinkedIn location to New Zealand before I move?",
        a: "No, keep your real location and state your New Zealand plans honestly instead. A false New Zealand location usually surfaces on the first call and damages trust in a market where reputations travel quickly. Say in the headline or About section that you are relocating to a named city, and include your work-rights position if it is settled, so recruiters can still find and contact you.",
      },
      {
        q: "Should my LinkedIn profile use British or American spelling?",
        a: "Use British spelling if New Zealand is your main target market. Recruiters notice 'organization' or 'optimize' on a profile claiming New Zealand experience or ambitions, and it creates a small mismatch with your New Zealand CV. Keep job titles and product names exactly as they are officially written, even when they use American spelling.",
      },
      {
        q: "Is LinkedIn optimisation worth it if I already have a good CV?",
        a: "It is worth it when recruiters are not approaching you or when your profile and CV tell different stories, which matters in a market where word of mouth and direct search carry real weight. The CV only works when you send it; LinkedIn works while you are not looking. If most of your applications go through Seek or Trade Me Jobs directly, the CV still matters most, but a searchable profile widens who finds you.",
      },
      {
        q: "What does LinkedIn optimisation cost for the New Zealand market?",
        a: "LinkedIn optimisation costs $129, $189 or $279 USD depending on experience level, matching the CV writing tiers. Adding it to a New Zealand CV saves 20 percent on both, and taking CV, LinkedIn and cover letter together saves 30 percent. Payment is in USD and delivery is 5 to 7 days as standard.",
      },
    ],
  },
  {
    country: "new-zealand",
    service: "cover-letter-writing",
    primaryKeyword: "cover letter writing NZ",
    secondaryKeywords: [
      "New Zealand cover letter writer",
      "cover letter for New Zealand jobs from abroad",
      "Kiwi cover letter format",
      "cover letter for skilled migrant NZ jobs",
    ],
    metaTitle: "Cover Letter Writing Service NZ",
    metaDescription:
      "New Zealand cover letters written to local conventions: one page, direct tone, a specific case for the role. Letters from $79 USD, delivered by email.",
    eyebrow: "New Zealand cover letter writing",
    h1: "Cover Letter Writing for New Zealand Applications",
    lead:
      "A one-page New Zealand cover letter that makes a plain, specific case for one role, and handles relocation or work rights honestly before the reader has to ask.",
    quickAnswer:
      "A New Zealand cover letter writing service produces a one-page letter, usually three or four short paragraphs, that links your strongest evidence to one specific role, in a direct, understated New Zealand tone. Chanuka Jeewantha writes each letter personally, including how to frame relocation or work rights, with prices from $79 USD and standard delivery in 5 to 7 days.",
    keyFacts: [
      { label: "Length", value: "One page, three to four short paragraphs" },
      { label: "Salutation", value: "A named person where possible, first name acceptable once contact is established" },
      { label: "Tone", value: "Direct and specific, no hard sell" },
      { label: "Price", value: "$79, $119 or $159 USD by experience" },
      { label: "Bundle", value: "Save 20 percent with a New Zealand CV" },
    ],
    whyDifferent: {
      heading: "What a New Zealand cover letter has to do that a generic one does not",
      paragraphs: [
        "New Zealand cover letters are short and plain, and they lean slightly more informal than a UK letter once initial contact is made, without dropping the basic courtesies. They name the role, show two or three pieces of specific evidence for why you fit it, and close without pressure. A letter that opens with a bold American-style hook, or one padded with personal qualities and no evidence, reads as out of step with how New Zealand employers actually communicate.",
        "Because the market is small, a New Zealand cover letter often does more relationship work than a UK or US one. Naming a mutual contact, a specific project of the employer's you know about, or a genuine reason you want to live in that city carries real weight here, more than it would in a larger, more anonymous market.",
        "For overseas applicants the letter is also the right place to handle what the CV should not: why you are moving, when you can start, and your work-rights position, stated factually and briefly so it reads as a settled plan rather than an open question.",
      ],
    },
    whatYouGet: [
      "A one-page letter written for a specific New Zealand role and employer",
      "An opening that names the role and gives the reader a reason to keep going",
      "Two or three paragraphs linking your evidence to the role's main requirements",
      "Relocation, availability and work-rights wording framed factually where relevant",
      "A salutation and sign-off suited to New Zealand's slightly more informal but still professional register",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Opening", value: "Name the role and where you saw it in the first sentence or two" },
      { label: "Evidence", value: "Two or three specific examples matched to the role's main requirements" },
      { label: "Tone", value: "Direct, warm rather than formal once you know the reader's name, no superlatives" },
      { label: "Length", value: "One page, roughly 250 to 350 words" },
      { label: "Relocation", value: "State a genuine reason for wanting to live in New Zealand where you have one" },
      { label: "Recruiters", value: "Often not required when applying through Seek or Trade Me Jobs; a short note usually does the job" },
    ],
    sectors: [
      "Health, nursing and aged care roles applied for directly",
      "Construction and infrastructure",
      "Engineering and technical roles",
      "Information technology",
      "Agriculture and agritech",
      "Overseas applicants explaining relocation and work rights",
    ],
    process: [
      {
        title: "Choose your tier and share the role",
        body: "Pick your experience tier and send the job advert with your current CV.",
      },
      {
        title: "Answer a short brief",
        body: "Tell Chanuka why this role and employer, your availability, and your relocation or work-rights position if you are outside New Zealand.",
      },
      {
        title: "Receive, revise, send",
        body: "You get a draft letter, one revision round and final Word and PDF files, ready to adapt for similar roles.",
      },
    ],
    faqs: [
      {
        q: "Do New Zealand employers still read cover letters?",
        a: "Many do, especially for direct applications and roles where the advert specifically asks for one. Applications made through Seek or Trade Me Jobs sometimes skip a formal letter in favour of a short message, but a specific, well-written letter still stands out in a market where a generic one is easy to spot. When a letter is requested, write it for the role rather than skipping it.",
      },
      {
        q: "How long should a cover letter be in New Zealand?",
        a: "A New Zealand cover letter should fit on one page, usually three or four short paragraphs and around 250 to 350 words. The reader wants the role, your fit and your availability, stated plainly, not a second CV. If an online application sets a shorter word limit, write to that instead.",
      },
      {
        q: "Should my New Zealand cover letter be formal or casual?",
        a: "Aim for direct and warm rather than stiffly formal. New Zealand workplace communication tends to be less formal than the UK's once contact is established, so a letter that is specific and human, without dropping basic professionalism, reads better than one written in very formal, old-fashioned language.",
      },
      {
        q: "Should I mention relocating to New Zealand in my cover letter?",
        a: "Yes, if you are genuinely planning to relocate, say so and give a real reason if you have one. In a small market where employers weigh whether an overseas hire will actually move and stay, a specific, honest line about wanting to live in New Zealand does real work, more than it typically would in a larger market.",
      },
      {
        q: "Should my cover letter mention my visa or residency status?",
        a: "Usually yes, briefly and factually, especially if the employer would need to support a work visa or if you already hold residency or an open work visa. State your position in one sentence near the end and keep the rest of the letter about the value you bring. Leaving it vague tends to create more doubt than a plain, factual line would.",
      },
      {
        q: "Do I need a separate cover letter for every New Zealand job?",
        a: "Yes, at least in the specific evidence and the opening line. A generic letter is easy to spot in a small market, and reusing one wholesale across applications tends to read as exactly that. Keep the structure, but change the role, the employer detail and at least one piece of matched evidence each time.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /new-zealand/career-advice/{slug} : New Zealand specific articles   */
/* ------------------------------------------------------------------ */

const articles: CountryArticle[] = [
  {
    country: "new-zealand",
    slug: "nz-cv-format",
    title: "New Zealand CV format: the shape Kiwi employers expect",
    metaTitle: "New Zealand CV Format: Sections and Conventions",
    metaDescription:
      "The New Zealand CV format section by section: header, experience, referees and file conventions, and the details that quietly mark a CV as written elsewhere.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "A New Zealand CV is a little longer than a UK one, a little plainer in tone, and ends somewhere UK and US CVs do not: with your referees. Here is the shape, section by section.",
    quickAnswer:
      "The standard New Zealand CV format is reverse chronological across two to three pages: contact details, a short plain-spoken profile, key skills, work experience with month and year dates, education, then referees. It uses British spelling, has no photo or date of birth, and typically names two referees or states they are available on request.",
    intro:
      "New Zealand employers are not looking for a creative CV. They are looking for a familiar shape filled with specific, plain evidence, so they can judge quickly whether you can do the job and whether you sound like someone they would want to work with. The shape is close enough to the UK's that people transplant a UK CV without checking, and different enough in a few places that the transplant shows. This guide goes through the New Zealand CV section by section, with the specific local details, including the referees section most UK and US guides skip entirely. For general advice on length and structure that applies everywhere, see the guides to CV length and writing a professional CV; this page is about the New Zealand shape specifically.",
    sections: [
      {
        heading: "The standard order of a New Zealand CV",
        paragraphs: [
          "Most New Zealand CVs that get read follow a consistent order. Departing from it is fine when you have a reason, such as a recent graduate leading with education, but it should be a deliberate choice rather than an accident.",
        ],
        bullets: [
          "Name and contact details: one or two lines at the top, no heading that says 'Curriculum Vitae'",
          "Personal profile: three to four lines on who you are professionally and what you want next",
          "Key skills: a short, grouped list of specific skills, common but optional",
          "Work experience: most recent role first, with dates, employer, location and achievements",
          "Education: qualification, institution and dates",
          "Professional registration or memberships, where the role needs them",
          "Referees: two contacts, or a line noting they are available on request",
        ],
      },
      {
        heading: "The header: what to include and what to leave out",
        paragraphs: [
          "A New Zealand header is minimal. Your full name, a mobile number with the country code if you are applying from abroad, a professional email address, your town or city, and your LinkedIn URL if you keep one current. A full street address is not expected; 'Wellington' or 'Auckland, open to relocation' is enough. If you live outside New Zealand, give your real location honestly and say what you plan to do, such as 'Colombo, Sri Lanka. Relocating to Christchurch, early 2027.'",
          "What stays out is the personal detail block that some other markets expect: photo, date of birth, gender, marital status, religion, and national ID or passport numbers. None of it helps a New Zealand employer decide anything, and its presence is one of the clearest signs that a CV was written for a different market first and adjusted only lightly for New Zealand.",
          "Work rights is the one personal detail worth stating if it helps you. A line such as 'New Zealand resident, full work rights' or 'Currently on a Work to Residence visa' under your contact details answers a question the employer has to work out eventually, and answering it early tends to work in your favour rather than against you.",
        ],
      },
      {
        heading: "Writing your experience in a Kiwi register",
        paragraphs: [
          "Each role opens with a consistent line: job title, employer, location and dates. New Zealand convention is month and year, written as words, such as 'June 2021 to present'. Numeric dates like 06/2021 are harder to scan, and year-only dates can read as evasive.",
          "Under each role, a short line of context helps a New Zealand reader who has never heard of your previous employer: what the organisation does, roughly how large it is, and your scope within it. A hiring manager in Hamilton has no reference point for a mid-size bank in Colombo or an IT services firm in Bengaluru, and one sentence fixes that.",
          "The bullets themselves should read as outcomes, stated plainly. New Zealand's tone is direct and, by reputation, wary of a candidate who appears to oversell, sometimes called tall poppy syndrome locally: a discomfort with claims that outrun the evidence behind them. 'Cut monthly reconciliation time from five days to two across three sites' does more for you here than 'a dynamic finance leader with a proven track record'. Recent roles usually carry four to six bullets; roles from a decade or more ago shrink to one or two lines.",
        ],
      },
      {
        heading: "Education and how NZQA reads overseas qualifications",
        paragraphs: [
          "List your qualification, the awarding institution and the dates, with your result stated as awarded in its own system, such as a CGPA out of 10 or a classification. Guessing a New Zealand equivalent yourself can look like an overclaim; if an employer needs a formal comparison, that is what the New Zealand Qualifications Authority's International Qualification Assessment service exists for. NZQA compares an overseas qualification against the New Zealand Qualifications and Credentials Framework and issues a result an employer can rely on, and it is worth mentioning on your CV only if you have already obtained one, rather than promising to get one.",
          "For regulated professions, registration matters more than the degree comparison on its own. Nurses need registration with the Nursing Council of New Zealand, and engineers can look at Engineering New Zealand's international registers for recognition routes. State where you are in that process honestly, since employers in these fields ask about it directly.",
          "School results belong only in a graduate's CV, and even then as a brief line rather than a subject-by-subject list. Once you have a degree and some work experience, remove school qualifications entirely.",
        ],
      },
      {
        heading: "Referees: the New Zealand difference",
        paragraphs: [
          "This is the section that most surprises people arriving from the UK or the US, where referee details do not appear on the CV at all. New Zealand's own government careers guidance lists referees as one of the standard components of a CV, alongside contact details, a personal statement, key skills, work history and education, and many New Zealand employers expect to see them, or at least a clear line about how to get them.",
          "The safest approach is two referees: someone who managed you directly and, where possible, someone else who can speak to your work from a different angle, such as a senior colleague or client contact. For each, give their name, role, organisation, phone number and email. If you would rather not put names on a document that circulates before you have told your current employer you are looking, write 'Referees available on request' instead, which is also accepted. Either way, always ask permission first and tell your referees which role you are applying for, so they are not caught off guard by a call.",
        ],
      },
      {
        heading: "File, platforms and small details that matter",
        paragraphs: [
          "Use a single clean column with standard headings such as 'Work experience' and 'Education', a readable font around 10 to 11 point, and consistent spacing. Send Word or a text-based PDF unless the advert asks for a specific format; a text-based PDF keeps your layout intact, and Word can be easier for a recruiter to adjust or extract text from.",
          "Seek and Trade Me Jobs are the two platforms most New Zealand employers and recruiters actually use, and both work better with a simple, standard layout than with a heavily designed template built around graphics or columns. A CV built for a fancier template can lose formatting entirely once it is uploaded to a job board.",
          "Spelling is a fast tell. New Zealand uses British spelling: organised, programme, analysed, licence as a noun, and colour, not the American equivalents. Product names and official job titles stay as officially written, even where they use American spelling. Currency, where it appears, is best left in the original with a line of context rather than converted at a rate that will change by the time anyone reads it.",
        ],
      },
    ],
    takeaways: [
      "Use two to three pages for experienced candidates and the standard order: contact details, profile, skills, experience, education, referees.",
      "Leave out the photo, date of birth, marital status and any personal detail block.",
      "Write dates as month and year, most recent role first, in a plain, specific tone.",
      "State overseas qualifications as awarded; mention an NZQA International Qualification Assessment only once you actually have one.",
      "Include two referees with full contact details, or write 'referees available on request', and always ask them first.",
    ],
    faqs: [
      {
        q: "What is the correct CV format for New Zealand?",
        a: "The correct New Zealand CV format is reverse chronological across two to three pages: contact details, a short personal profile, key skills, work experience with month and year dates, education, and referees. It uses British spelling, leaves out the photo and personal biodata, and typically names two referees or states they are available on request.",
      },
      {
        q: "How many pages should a New Zealand CV be?",
        a: "Two to three pages is standard for an experienced professional, a little longer than the UK's two-page norm. One page suits a graduate or someone in their first couple of years of work. A very short, one-page CV from a candidate with a decade of experience can look thin rather than efficient to a New Zealand reader.",
      },
      {
        q: "Do I have to name my referees on a New Zealand CV?",
        a: "Not strictly, but it is common. New Zealand's own government careers guidance lists referees among the standard CV sections. You can name two people with their role, organisation, phone and email, or write 'referees available on request' if you would rather not while still employed. Ask them first either way.",
      },
      {
        q: "Should I get my overseas degree assessed by NZQA before applying?",
        a: "Only if a specific employer or regulated role asks for it. NZQA's International Qualification Assessment compares an overseas qualification against the New Zealand Qualifications and Credentials Framework, which is useful when an employer genuinely needs that comparison. For most roles, stating your qualification as awarded, with the institution and result, is enough on the CV itself.",
      },
    ],
    sources: [
      {
        label: "Tahatū Career Navigator (New Zealand Government): How to write a CV",
        url: "https://tahatu.govt.nz/work/applying-for-a-job/how-to-write-a-cv",
      },
      {
        label: "NZQA: International Qualification Assessment",
        url: "https://www2.nzqa.govt.nz/international/recognise-overseas-qual/iqa/",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-long-should-a-cv-be", label: "How long should a CV be?" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/career-advice/ats-friendly-cv-format", label: "ATS-friendly CV format" },
      { href: "/new-zealand/career-advice/nz-cover-letter-guide", label: "New Zealand cover letter guide" },
      { href: "/new-zealand/cv-writing", label: "New Zealand CV writing service" },
    ],
  },
  {
    country: "new-zealand",
    slug: "applying-for-nz-jobs-from-overseas",
    title: "Applying for New Zealand jobs from overseas: a practical guide",
    metaTitle: "Applying for New Zealand Jobs From Overseas",
    metaDescription:
      "A practical guide to applying for New Zealand jobs from abroad: where to search, when to get qualifications assessed, and how to handle the process.",
    category: "International careers",
    readMinutes: 8,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Applying for a New Zealand job from Colombo, Chennai or anywhere else is mostly a sequencing problem: what to sort out before you apply, what to leave until after an offer, and where to actually look.",
    quickAnswer:
      "To apply for New Zealand jobs from overseas, search on Seek and Trade Me Jobs using the exact New Zealand job titles for your field, convert your CV and LinkedIn to local conventions before you apply, start qualification recognition or professional registration early if your field needs it, and be ready to discuss your work rights plainly. Visa decisions sit with Immigration New Zealand, not a CV writer.",
    intro:
      "Most overseas applicants who struggle with New Zealand jobs are not short of relevant experience. They are applying in the wrong order: writing a generic CV, sending it to whatever comes up on a general search, and only thinking about qualification recognition or visas once an employer asks. New Zealand's market rewards the opposite sequence, because it is small enough that a well-targeted, well-prepared application stands out quickly. This guide walks through that sequence: where to actually look, what to sort out early, how to present yourself, and what changes once an offer is on the table. It is a practical guide to the process, not visa advice; for the rules themselves, this guide points to Immigration New Zealand throughout.",
    sections: [
      {
        heading: "Work out your general position before you start applying",
        paragraphs: [
          "New Zealand's immigration settings change how useful a speculative application is. If your occupation is on Immigration New Zealand's Green List, roles in that list can lead more directly toward residence, either straight away for Tier 1 occupations or after a period of work for Tier 2 occupations, which changes how confidently an employer treats an overseas application in that field. Outside the Green List, most work in New Zealand still runs through an employer offering a role and the visa process that follows from it, commonly the Accredited Employer Work Visa, which requires the employer to be an Immigration New Zealand accredited employer.",
          "None of this is something to guess at. Spend thirty minutes on Immigration New Zealand's own site before you write a single application, checking whether your occupation appears on the Green List and what the general shape of the Accredited Employer Work Visa or Skilled Migrant Category involves for someone in your field. That thirty minutes changes how you target the weeks that follow, and it is worth doing before the CV, not after.",
        ],
      },
      {
        heading: "Search where New Zealand employers actually post",
        paragraphs: [
          "Seek and Trade Me Jobs are the two platforms most New Zealand employers and recruiters actually use, far more than global job boards built for a bigger market. Set up saved searches on both using the exact New Zealand job title for your field rather than the title your current employer uses, since the two can differ more than people expect: a 'Business Analyst' in one market can map to 'Systems Analyst' or 'Product Analyst' in another.",
          "Company and agency websites matter more here than in a larger market too, because a meaningful share of roles in a small country move through direct relationships and recruiter networks before they are advertised widely. If there are two or three employers you would genuinely want to work for, follow them on LinkedIn and check their own careers pages regularly, rather than relying only on job board alerts.",
        ],
      },
      {
        heading: "Start qualification and registration steps early",
        paragraphs: [
          "If your profession is regulated, such as nursing, sort out registration well before you expect to need it. The Nursing Council of New Zealand's process for internationally qualified nurses involves document verification and, for some applicants, a competence assessment, and it takes real time. Engineers can look at Engineering New Zealand's international registers, which recognise qualifications and experience through the International Engineering Alliance's agreements. Accountants holding CA Sri Lanka, ICAI or ACCA membership have a defined pathway into Chartered Accountants Australia and New Zealand membership, worth starting before an employer asks about it.",
          "For roles that are not formally regulated but where an employer wants reassurance about an unfamiliar overseas qualification, the New Zealand Qualifications Authority's International Qualification Assessment compares your qualification against the New Zealand Qualifications and Credentials Framework. It is not something every applicant needs, but if you are asked for it, or if your field makes qualification comparison likely, starting the process before you are deep into interviews avoids a delay at the worst moment.",
        ],
      },
      {
        heading: "Convert your CV and LinkedIn before you apply, not after",
        paragraphs: [
          "A CV written for your home market, lightly edited, is the single most common reason a strong overseas candidate does not get shortlisted. Cut to two or three pages, remove the photo and personal details block, rewrite your profile in a plain New Zealand register, and add the referees section New Zealand CVs expect but UK and US ones do not. The New Zealand CV format guide covers this in full.",
          "Match your LinkedIn to the converted CV: same job titles, same dates, your real location with your relocation plans stated honestly rather than a false New Zealand address. New Zealand's market is small enough that recruiters check LinkedIn as a matter of course, and a profile that contradicts the CV, or that looks abandoned, undermines an otherwise strong application.",
        ],
      },
      {
        heading: "Handle interviews and the time difference deliberately",
        paragraphs: [
          "New Zealand runs six and a half to seven and a half hours ahead of Sri Lanka and India, depending on New Zealand's daylight saving, which runs from late September to early April. That gap is workable for video interviews, but it is on you to manage it: offer interview windows in New Zealand time explicitly, confirm the time zone in writing, and avoid suggesting a slot that lands in the small hours for the interviewer by mistake.",
          "Early interviews are almost always by video. Treat the technical setup as part of the preparation: a stable connection, a quiet background, and your documents ready to reference. Employers hiring from overseas expect the logistics to work smoothly; it is one of the few things entirely within your control before an offer is made.",
        ],
      },
      {
        heading: "What changes once you have an offer",
        paragraphs: [
          "An offer from a New Zealand employer usually triggers the visa conversation properly for the first time, and the employer, not you, carries much of the process from here if the role requires sponsorship: for the Accredited Employer Work Visa, they need to already hold, or obtain, Immigration New Zealand accreditation, and the specific job check and your visa application follow from there. If your occupation sits on the Green List, ask early whether the role and your qualifications meet the Tier 1 or Tier 2 requirements for that pathway to residence, since the details vary by occupation and change periodically.",
          "This is the point to involve a licensed immigration adviser if your situation is not straightforward, and to check the current detail on Immigration New Zealand's own site rather than relying on general guides, including this one, for anything beyond orientation. The practical work by then is mostly done: a converted CV, a matching LinkedIn profile, and an employer who has already decided they want to hire you.",
        ],
      },
    ],
    takeaways: [
      "Check Immigration New Zealand's Green List and general visa settings for your occupation before you start applying, not after.",
      "Search on Seek and Trade Me Jobs using New Zealand job titles, and follow target employers directly.",
      "Start qualification recognition or professional registration early if your field needs it; it takes longer than people expect.",
      "Convert your CV and LinkedIn to New Zealand conventions before you send a single application.",
      "Offer interview times in New Zealand time and manage the time difference yourself; visa detail comes from Immigration New Zealand, not a CV writer.",
    ],
    faqs: [
      {
        q: "Can I apply for New Zealand jobs from outside New Zealand?",
        a: "Yes, and many New Zealand employers interview overseas candidates by video, particularly for roles on the Green List or in shortage areas like nursing, engineering and construction. What matters most is a CV and LinkedIn profile that follow New Zealand conventions and a clear, honest account of your work rights, so the application is judged on your experience rather than on unfamiliar formatting.",
      },
      {
        q: "Do I need my qualifications assessed before I apply for New Zealand jobs?",
        a: "Not always. State your qualification as awarded on your CV, with the institution and result. An NZQA International Qualification Assessment becomes useful when a specific employer asks for one or when your profession requires formal registration, such as nursing through the Nursing Council of New Zealand. Starting the process only once it is actually needed usually saves time.",
      },
      {
        q: "What is the best way to find New Zealand job listings from abroad?",
        a: "Seek and Trade Me Jobs are the two platforms most New Zealand employers and recruiters use, so set up saved searches on both using the exact New Zealand job title for your field. Following two or three target employers directly is also worthwhile, since a meaningful share of New Zealand roles move through direct relationships before they reach a job board.",
      },
      {
        q: "How does the Green List affect a job application from overseas?",
        a: "Occupations on Immigration New Zealand's Green List can move more directly toward residence, either straight away for Tier 1 roles or after a period of employment for Tier 2 roles, which can make an overseas application in that occupation more straightforward for an employer to consider. The current list and its requirements sit with Immigration New Zealand and are worth checking directly before you apply, since eligibility criteria can change.",
      },
    ],
    sources: [
      {
        label: "Immigration New Zealand: Green List pathway to residence",
        url: "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/green-list-pathway-to-residence/",
      },
      {
        label: "Immigration New Zealand: Accredited Employer Work Visa",
        url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/accredited-employer-work-visa",
      },
      {
        label: "NZQA: International Qualification Assessment",
        url: "https://www2.nzqa.govt.nz/international/recognise-overseas-qual/iqa/",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/cv-for-a-new-market", label: "Adapting a CV for a new market" },
      { href: "/career-advice/linkedin-for-international-job-search", label: "LinkedIn for international job search" },
      { href: "/new-zealand/career-advice/nz-cv-format", label: "New Zealand CV format" },
      { href: "/new-zealand/international-job-seekers", label: "Applying for New Zealand jobs from abroad" },
      { href: "/new-zealand/international-job-seekers/from-sri-lanka", label: "Applying to New Zealand from Sri Lanka" },
    ],
  },
  {
    country: "new-zealand",
    slug: "nz-cover-letter-guide",
    title: "How to write a New Zealand cover letter",
    metaTitle: "New Zealand Cover Letter Guide: Structure and Tone",
    metaDescription:
      "How to write a New Zealand cover letter: the one-page structure, a direct plain-spoken tone, examples by situation, and what to leave out entirely.",
    category: "Cover letters",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "A New Zealand cover letter is short, direct and a little warmer than a UK one once you know the reader's name. Here is how to structure it, and the small local habits that make it read as genuine.",
    quickAnswer:
      "A New Zealand cover letter is one page, usually three or four short paragraphs, that names the role, gives two or three pieces of specific evidence for your fit, and closes plainly. New Zealand's official careers guidance recommends simple wording and a plain layout, and the tone leans direct once you know the reader's name, avoiding both a hard sell and an overly formal register.",
    intro:
      "A cover letter does a different job from your CV. The CV proves you can do the work; the letter explains, briefly, why this particular role and this particular employer, in your own words. New Zealand's small, connected market makes that explanation matter more than it might elsewhere, because a specific, genuine reason for applying stands out against the generic letters most employers read. This guide covers the structure, the tone, and worked examples for a few common situations, including applying from overseas.",
    sections: [
      {
        heading: "What a New Zealand cover letter actually has to do",
        paragraphs: [
          "New Zealand's own government careers guidance describes a cover letter as the document that creates a first impression before the employer even reaches your CV, built around your motivation for the role, your fit with the organisation, and the specific skills and qualities you would bring. That is a useful, concrete brief: name the role and the reason, connect two or three pieces of evidence to what the employer actually needs, and show enough understanding of the organisation to prove you did not send the same letter to twenty other companies.",
          "It is not the place to repeat your CV in prose form. A letter that restates your job history in paragraph form wastes the one advantage it has over the CV, which is the chance to explain, in your own voice, why this role specifically.",
          "Recruiters reading on behalf of a client and hiring managers reading for their own team want slightly different things from the same letter. A recruiter mostly wants to confirm you understand the brief and can start when you say you can, so keep that letter tight and practical. A hiring manager reading a direct application is also judging whether you have actually looked at their organisation, so a specific, accurate detail about what they do carries more weight there than it does in a recruiter-facing letter.",
        ],
      },
      {
        heading: "A three-part structure that holds up",
        paragraphs: [
          "Most working New Zealand cover letters follow the same underlying shape, even when the wording varies.",
        ],
        bullets: [
          "Opening: name the role, where you saw it, and one line on why it caught your attention specifically, not generically",
          "Middle, two paragraphs: two or three pieces of evidence, matched directly to what the advert asks for, stated plainly with the outcome attached",
          "Close: a short, confident line about next steps, availability, and, if relevant, your relocation or work-rights position",
        ],
      },
      {
        heading: "Tone: direct, plain, and a little warmer than the UK",
        paragraphs: [
          "New Zealand workplace communication tends to be less formal than the UK's once initial contact is made, without dropping basic professionalism. A cover letter that opens with 'Dear Sir or Madam' and closes with a string of formal courtesies can read as slightly stiff to a New Zealand reader, particularly at a small or mid-sized company. Finding the hiring manager's name and addressing them directly, sometimes by first name once you are past the first line, tends to land better than very formal address throughout.",
          "The content itself should stay specific rather than promotional. New Zealand employers respond to a plain claim followed immediately by its evidence far more than to adjectives describing your character. 'Rebuilt the onboarding process, cutting new starter ramp-up from six weeks to three' earns more trust than 'a highly motivated and dedicated professional', and that gap in New Zealand tends to be wider than in markets more tolerant of confident self-description.",
        ],
      },
      {
        heading: "Worked examples by situation",
        paragraphs: [
          "These are illustrations of tone and structure, not templates to copy directly; the specifics are what make a letter work, and yours will differ.",
          "Applying directly, mid-career: 'I saw the Operations Manager role advertised on Seek and wanted to apply directly, having followed [Company]'s expansion into the South Island over the past year. At [previous employer], I restructured our warehouse scheduling and cut late deliveries by a noticeable margin within two quarters, work that maps closely onto the scope you have described. I would welcome the chance to talk through how that experience applies to your team.'",
          "Applying from overseas: 'I am writing from Chennai to apply for the Registered Nurse role at [employer]. I hold six years of acute care experience and am currently working through Nursing Council of New Zealand registration, with my documents already submitted for verification. My partner and I are planning to relocate to Christchurch in the first half of next year regardless of this specific role, and I would be glad to discuss timing and registration progress on a call.'",
          "Career changer: 'After four years teaching secondary mathematics, I moved into data analysis eighteen months ago and have since built reporting dashboards used across our organisation's three regional offices. I am applying for the Data Analyst role because it asks for exactly the combination I now have: technical SQL and Power BI skills alongside the ability to explain findings clearly to people who are not analysts themselves.'",
          "Graduate: 'I am applying for the Graduate Civil Engineer position advertised on Seek. During my final year at the University of Auckland, I led a student project designing stormwater drainage for a small coastal subdivision, work that is close to the kind of infrastructure planning your team handles. I am available to start in February and would welcome the chance to discuss the role further.'",
        ],
      },
      {
        heading: "What to leave out entirely",
        paragraphs: [
          "A few habits from other markets consistently work against a New Zealand letter.",
        ],
        bullets: [
          "A restated job history that duplicates the CV instead of adding a specific reason for this application",
          "Personality adjectives with no evidence behind them: hardworking, passionate, driven, dynamic",
          "An opening line that could be sent to any employer in any industry",
          "Salary expectations, unless the advert specifically asks for them",
          "Excessive formality throughout, once you know the hiring manager's name",
        ],
      },
      {
        heading: "Formatting and length",
        paragraphs: [
          "Keep it to one page, around 250 to 350 words. New Zealand's official guidance is plain about presentation too: simple wording, a plain readable font, and a clean layout without decoration. Save it as a text-based PDF unless the employer's application system asks for something else, and name the file clearly with your name and the word 'cover letter' rather than a generic filename.",
          "If you are applying through Seek or Trade Me Jobs and the platform only allows a short message rather than an attached letter, adapt the same three-part structure into two or three tight sentences rather than skipping the reasoning altogether. The structure matters more than the format it arrives in.",
        ],
      },
    ],
    takeaways: [
      "Structure the letter in three parts: a specific opening, two or three pieces of matched evidence, and a plain close.",
      "Aim for direct and a little informal once you know the reader's name, not stiffly formal throughout.",
      "Back every claim with a specific outcome rather than a personality adjective.",
      "Keep it to one page, around 250 to 350 words, in a plain, undecorated layout.",
      "If applying from overseas, state your relocation plans and work-rights or registration progress factually near the close.",
    ],
    faqs: [
      {
        q: "How long should a New Zealand cover letter be?",
        a: "A New Zealand cover letter should fit on one page, usually three or four short paragraphs and around 250 to 350 words. The aim is a specific reason for applying and two or three pieces of matched evidence, not a second CV. If an online application sets a shorter word limit, write to that limit instead.",
      },
      {
        q: "Should a New Zealand cover letter be formal or informal?",
        a: "Aim for direct and moderately informal rather than stiffly formal, especially once you know the hiring manager's name. New Zealand workplace communication tends to be less formal than the UK's once contact is established, so a specific, plainly written letter usually reads better than one written in very formal, old-fashioned language.",
      },
      {
        q: "Do I need a cover letter for every New Zealand job application?",
        a: "Write one whenever the advert asks for it, and consider one even when it does not, since a specific letter stands out in a small market where generic ones are common and easy to spot. When you apply through Seek or Trade Me Jobs and only a short message field is available, use the same three-part structure in a shorter form rather than skipping the reasoning.",
      },
      {
        q: "Should I mention relocating to New Zealand in my cover letter?",
        a: "Yes, if it is genuine. State your relocation plans and, where relevant, your work-rights or professional registration progress factually, near the end of the letter. In a market where employers weigh whether an overseas hire will actually move and stay, a specific, honest line about your plans does real work.",
      },
    ],
    sources: [
      {
        label: "Tahatū Career Navigator (New Zealand Government): How to write a cover letter",
        url: "https://tahatu.govt.nz/work/applying-for-a-job/how-to-write-a-cover-letter",
      },
      {
        label: "Work and Income (New Zealand Government): CVs and cover letters",
        url: "https://www.workandincome.govt.nz/work/get-ready-to-work/cvs-and-cover-letters/index.html",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-to-write-a-cover-letter", label: "How to write a cover letter" },
      { href: "/career-advice/do-you-still-need-a-cover-letter", label: "Do you still need a cover letter?" },
      { href: "/new-zealand/career-advice/nz-cv-format", label: "New Zealand CV format" },
      { href: "/new-zealand/cover-letter-writing", label: "New Zealand cover letter writing service" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /new-zealand/international-job-seekers : destination hub            */
/* ------------------------------------------------------------------ */

const ijsHub: IjsHub = {
  country: "new-zealand",
  metaTitle: "Applying for New Zealand Jobs From Abroad: CV Guide",
  metaDescription:
    "How to apply for New Zealand jobs from overseas: CV conventions, referees, qualification recognition, the Green List and AEWV, and mistakes to avoid.",
  h1: "Applying for New Zealand Jobs From Abroad",
  lead:
    "New Zealand is a small, close-knit job market with a shape of its own: a slightly longer CV than the UK's, a plainer tone, referees named on the page, and an immigration system built around specific shortage occupations rather than a single general route.",
  quickAnswer:
    "To apply for New Zealand jobs from abroad, convert your CV to local conventions (two to three pages, no photo, a plain profile, two referees), check whether your occupation sits on Immigration New Zealand's Green List, start qualification recognition or registration early where your field needs it, and search on Seek and Trade Me Jobs. Visa questions sit with Immigration New Zealand, not with this page.",
  overview:
    "New Zealand's workforce is small enough that most professional fields are genuinely networked: hiring managers often already know several of the people who might apply for a role, through past colleagues, industry events or LinkedIn. That changes what gets an overseas applicant shortlisted. It is rarely a lack of relevant experience. It is a CV and a search approach built for a larger, more anonymous market, arriving unadjusted in a smaller one that reads plainness and specificity as more credible than polish. This page covers the CV conventions, what changes for an overseas applicant, the practical steps to apply from abroad, and where to find the official immigration information, which sits with Immigration New Zealand and the New Zealand Qualifications Authority, not here.",
  cvConventions: [
    { label: "Length", value: "Two to three pages for experienced candidates, a little longer than UK convention. One page for early career." },
    { label: "Photo", value: "None. Not a rule, but New Zealand convention, and it reads as a habit imported from another market." },
    { label: "Personal details", value: "Name, city and country, phone with country code, email, LinkedIn. No date of birth, marital status, religion, nationality or ID numbers." },
    { label: "Opening", value: "A three to four line personal profile, plain and specific rather than promotional." },
    { label: "Experience", value: "Reverse chronological, month and year dates, achievements with scope and outcomes, understated in tone." },
    { label: "Referees", value: "Two named referees with role, organisation, phone and email, or a line stating they are available on request." },
    { label: "Spelling", value: "British spelling. 'CV', not 'resume'." },
  ],
  whatChanges: [
    "Adjust length to two or three pages, which is a little longer than the UK norm many overseas CVs are already trimmed to",
    "Remove the photo and personal details block, including any declaration line and signature",
    "Replace an objective statement with a plain, specific personal profile",
    "Add one line of context under unfamiliar employers: sector, size and what they do",
    "Add a referees section if your home CV does not carry one; New Zealand expects it where the UK and US do not",
    "State overseas qualifications as awarded, and begin professional registration or NZQA assessment early if your field needs it",
    "Switch to British spelling and a plain, direct tone that avoids overselling",
  ],
  applyingFromAbroad: [
    {
      title: "Check your general immigration position before you write anything",
      body: "Look at Immigration New Zealand's Green List to see whether your occupation appears on it, and read the general shape of routes such as the Skilled Migrant Category Resident Visa and the Accredited Employer Work Visa. This shapes how you target your search and word your application, so do it before the CV, not after.",
    },
    {
      title: "Search where New Zealand employers actually post",
      body: "Seek and Trade Me Jobs are the two platforms most New Zealand employers and recruiters use. Search using the exact New Zealand job title for your field, and follow two or three target employers directly, since a meaningful share of roles move through direct relationships in a market this size.",
    },
    {
      title: "Sort qualifications and registration in good time",
      body: "Regulated professions such as nursing, medicine and some engineering roles need registration with the relevant New Zealand body before you can practise. For other roles, an NZQA International Qualification Assessment can help an employer understand an overseas degree, though it is only worth doing once it is actually needed.",
    },
    {
      title: "Rebuild the CV and LinkedIn together",
      body: "Convert your CV to New Zealand format, including the referees section, and make your LinkedIn profile match it: same titles, same dates, British spelling. Keep your LinkedIn location real and state your relocation plans in the headline or About section.",
    },
    {
      title: "Prepare for remote interviews and a real time difference",
      body: "Interviews are usually by video at first. Offer times explicitly in New Zealand time, confirm the time zone in writing, and have your documents ready, since New Zealand employers verify work rights before a new hire starts.",
    },
    {
      title: "Understand what changes once you have an offer",
      body: "An offer usually starts the formal visa process, and for a sponsored route the employer needs to hold Immigration New Zealand accreditation. From there, the specific requirements depend on the visa category and your occupation, which is a conversation for Immigration New Zealand or a licensed adviser rather than a CV writer.",
    },
  ],
  keySectors: [
    "Health, nursing and aged care",
    "Construction, infrastructure and trades",
    "Engineering: civil, mechanical and electrical",
    "Information technology",
    "Agriculture, horticulture and agritech",
    "Accounting and financial services",
  ],
  visaContext:
    "New Zealand does not run a single general work visa; the right route depends on your occupation and situation. Immigration New Zealand's Green List identifies occupations in shortage, with Tier 1 roles able to move straight to residence and Tier 2 roles moving to residence after a period of qualifying work. Outside the Green List, the Accredited Employer Work Visa is the common employer-led route, which requires the employer to hold Immigration New Zealand accreditation, and the Skilled Migrant Category Resident Visa offers a points-based path to residence for many skilled workers. Eligible occupations, points and requirements change, so rely on Immigration New Zealand or a licensed immigration adviser, not on a CV writer. This is orientation only, not immigration advice.",
  commonMistakes: [
    "Sending a UK-length, two-page CV with no referees into a market that expects two to three pages and named referees",
    "Keeping the photo, date of birth and personal details block from a home-market CV",
    "Leaving work-rights status vague, so the employer has to guess",
    "Applying broadly through international job boards instead of Seek and Trade Me Jobs, where New Zealand employers actually post",
    "Writing achievements as duties, in a tone that reads as overselling to a New Zealand employer",
    "Using American spelling on a CV aimed at New Zealand employers",
    "Setting a false New Zealand location on LinkedIn, which tends to unravel quickly in a small, connected market",
  ],
  faqs: [
    {
      q: "Can I apply for New Zealand jobs from outside New Zealand?",
      a: "Yes, you can apply for New Zealand jobs from abroad, and many employers, especially in nursing, engineering, construction and IT, interview overseas candidates by video. What matters is whether you have or can get the right to work, and whether your CV and LinkedIn follow New Zealand conventions so your application is judged on your experience rather than on unfamiliar formatting.",
    },
    {
      q: "Should I say I need a work visa on my CV?",
      a: "Usually not in detail on the CV itself. State your general position plainly, such as 'Currently based in Colombo, seeking Accredited Employer Work Visa sponsorship', and keep the rest of the CV focused on your evidence. Save the fuller explanation for the cover letter, which is a more natural place to address it.",
    },
    {
      q: "What is the Green List and does it affect my job search?",
      a: "The Green List is Immigration New Zealand's list of occupations identified as being in shortage, with Tier 1 roles able to move straight to residence and Tier 2 roles moving to residence after a period of qualifying work. If your occupation is listed, it can make employers more confident about hiring from overseas. Check the current list and requirements directly on Immigration New Zealand's site, since they are reviewed periodically.",
    },
    {
      q: "Do New Zealand employers accept overseas degrees?",
      a: "Most New Zealand employers accept overseas degrees stated clearly on the CV, with the institution and result as awarded. The New Zealand Qualifications Authority's International Qualification Assessment can formally compare a qualification against the New Zealand framework when an employer needs that. For regulated professions such as nursing or medicine, registration with the relevant New Zealand body matters more than the degree comparison alone.",
    },
    {
      q: "Is a New Zealand CV different from a UK CV?",
      a: "They are close but not identical. Both avoid a photo and personal biodata and use British spelling, but a New Zealand CV usually runs to two or three pages rather than two, and many New Zealand CVs name two referees directly, which UK CVs do not. The overall tone is also a little plainer and more wary of overselling than UK convention.",
    },
    {
      q: "Do I need a New Zealand address or phone number to apply?",
      a: "No, you do not need a New Zealand address or phone number to apply. Give your real city and country and a mobile number with the international code, plus a professional email and LinkedIn URL. Add a line about your relocation plans so employers know your timeline. A false New Zealand location on LinkedIn or your CV usually surfaces quickly in a market this connected.",
    },
  ],
  sources: [
    {
      label: "Immigration New Zealand: Green List pathway to residence",
      url: "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/green-list-pathway-to-residence/",
    },
    {
      label: "Immigration New Zealand: Accredited Employer Work Visa",
      url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/accredited-employer-work-visa",
    },
    {
      label: "Immigration New Zealand: Skilled Migrant Category Resident Visa",
      url: "https://www.immigration.govt.nz/visas/skilled-migrant-category-resident-visa/",
    },
    {
      label: "NZQA: International Qualification Assessment",
      url: "https://www2.nzqa.govt.nz/international/recognise-overseas-qual/iqa/",
    },
    {
      label: "Tahatū Career Navigator (New Zealand Government): How to write a CV",
      url: "https://tahatu.govt.nz/work/applying-for-a-job/how-to-write-a-cv",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /new-zealand/international-job-seekers/from-{origin}                */
/* ------------------------------------------------------------------ */

const origins: OriginCorridor[] = [
  {
    country: "new-zealand",
    origin: "sri-lanka",
    originName: "Sri Lanka",
    metaTitle: "New Zealand CV for Sri Lankans: Applying From Sri Lanka",
    metaDescription:
      "How to turn a Sri Lankan CV into a New Zealand one: remove NIC and personal details, keep two proper referees, and position CIMA, ACCA or CA Sri Lanka status.",
    h1: "Applying for New Zealand Jobs From Sri Lanka",
    lead:
      "A Sri Lankan CV and a New Zealand CV actually agree on one thing UK guides do not mention: both expect referees. The rest of the conversion is mostly about removing detail rather than adding it.",
    quickAnswer:
      "To apply for New Zealand jobs from Sri Lanka, rewrite your CV to local conventions: remove the photo, NIC number and marital status, cut O/L and A/L results once you have experience, and replace the objective with a short plain profile. Keep two referees, but use people who actually worked with you rather than the traditional 'non-related' pair, and check Immigration New Zealand's site for Green List status.",
    overview:
      "Sri Lanka sends steady numbers of skilled professionals to New Zealand, particularly in nursing, accounting, engineering and IT, and many already hold qualifications New Zealand bodies recognise without much friction, CA Sri Lanka and ACCA among them. The obstacle is rarely ability. It is a CV built around Sri Lankan conventions, a personal details block, subject-by-subject exam results, school achievements and a signed declaration, none of which a New Zealand employer wants or expects. New Zealand's community of Sri Lankan professionals is smaller than the UK's or Australia's, which makes direct networking, professional bodies and a genuinely well-targeted CV carry more weight than volume applications.",
    whatToChange: [
      {
        from: "Photo in the top corner and a 'Personal Details' block with NIC number, date of birth, gender, religion, nationality and marital status",
        to: "Name, city and country, phone with +94 or your New Zealand number if you have one, email and LinkedIn only. No ID numbers, which are also a security risk on a widely shared document",
      },
      {
        from: "G.C.E. O/L and A/L results listed subject by subject with grades",
        to: "Remove them once you have a degree and a few years of experience. Graduates can keep one line summarising A/L stream and results",
      },
      {
        from: "Two 'non-related referees' with names, designations, phone numbers and addresses, included mainly to satisfy a Sri Lankan formality",
        to: "Two referees who genuinely know your work, ideally a direct manager and a senior colleague or client contact, since New Zealand CVs use referees as a real check rather than a formality",
      },
      {
        from: "An 'Objective' about seeking a challenging position in a reputed organisation",
        to: "A three to four line personal profile stating your level, evidence and target New Zealand role, written plainly",
      },
      {
        from: "School prefect roles, sports colours and extracurricular activities from school",
        to: "Leave school activities out entirely once you have work experience. Keep only recent, relevant volunteering or professional activity",
      },
      {
        from: "A closing declaration that the information is true, with date and signature",
        to: "Remove it. New Zealand CVs do not carry declarations or signatures",
      },
      {
        from: "Duties copied from a job description, often across three or four pages",
        to: "Two to three pages, achievements with scope and outcomes, and one line of context about each Sri Lankan employer",
      },
      {
        from: "Language skills listed as Sinhala, Tamil and English with formal proficiency levels",
        to: "Keep languages in a short additional information line; your CV and cover letter already demonstrate English ability",
      },
    ],
    qualificationsNote:
      "Chartered Accountants Australia and New Zealand runs a defined pathway for members of recognised overseas accounting bodies, and CA Sri Lanka is named among them alongside ACCA, so state your membership status exactly, such as student, affiliate, member or fellow, and the year, since it can lead to a fast-tracked route into CA ANZ rather than starting from nothing. A UK university degree delivered through a Sri Lankan partner institution should name the awarding university first and the delivery centre second. For Sri Lankan state university degrees, the New Zealand Qualifications Authority's International Qualification Assessment can compare your qualification against the New Zealand Qualifications and Credentials Framework, though it is only worth doing once an employer or registration body actually asks for it. Nurses need registration with the Nursing Council of New Zealand, which runs a defined process for internationally qualified nurses, and engineers can look at Engineering New Zealand's international registers, since Sri Lanka's engineering accreditation through IESL sits within the Washington Accord framework those registers draw on.",
    sectorsWhereCandidatesCompete: [
      "Nursing and aged care",
      "Accounting and finance, especially through CA Sri Lanka and ACCA membership",
      "Software engineering, QA and data",
      "Civil and structural engineering",
      "Hospitality and specialist culinary roles",
      "Business analysis and IT project management",
    ],
    practicalSteps: [
      {
        title: "Strip the Sri Lankan format, but keep two real referees",
        body: "Remove the photo, personal details block, school results and declaration, which usually recovers close to a page. Unlike converting for the UK, do not remove your referees; just replace the traditional 'non-related' pair with two people who can genuinely speak to your work.",
      },
      {
        title: "Explain employers a New Zealand reader will not know",
        body: "A reader in Hamilton or Dunedin does not know a Colombo conglomerate, a regional bank or a local software house by name. Add one line under each: sector, size, and whether it serves New Zealand, Australian or global clients, which is common for Sri Lankan IT firms.",
      },
      {
        title: "Lead with New Zealand recognised credentials",
        body: "If you hold CA Sri Lanka or ACCA membership, or a UK degree earned through a Sri Lankan partner institution, make it visible in your profile. CA ANZ's pathway for overseas accounting bodies names CA Sri Lanka directly, which is worth stating plainly rather than assuming the reader knows it.",
      },
      {
        title: "Sort registration before you apply in regulated fields",
        body: "Nurses should read the Nursing Council of New Zealand's guidance for internationally qualified applicants early, since registration steps take real time and employers often ask where you are in the process before making an offer.",
      },
      {
        title: "Check whether your occupation sits on the Green List",
        body: "Nursing, some engineering roles and parts of construction and IT have appeared on Immigration New Zealand's Green List at various points. If your occupation is listed, it changes how confidently a New Zealand employer treats an overseas application, so check the current list directly before you apply.",
      },
      {
        title: "Work with the time difference",
        body: "New Zealand runs six and a half to seven and a half hours ahead of Sri Lanka, depending on New Zealand's daylight saving period from late September to early April. Confirm every interview time explicitly in New Zealand time, and keep your phone reachable during New Zealand business hours for calls from +64 numbers.",
      },
    ],
    commonMistakes: [
      "Keeping the NIC number and personal details block on a CV that will be forwarded between recruiters and employers",
      "Listing O/L results years into a professional career",
      "Removing referees entirely, assuming New Zealand follows UK practice, when most New Zealand employers expect them",
      "Writing CA Sri Lanka or ACCA status loosely, such as 'qualified' when only some levels are complete",
      "Assuming a New Zealand reader knows Sri Lankan employers, universities or grading without added context",
      "Using Sri Lankan salary figures in rupees as achievements without context a New Zealand reader can use",
    ],
    visaContext:
      "Sri Lankan nationals generally need a visa to work in New Zealand. Occupations on Immigration New Zealand's Green List can move toward residence directly or after a period of qualifying work, and outside that list the Accredited Employer Work Visa is the common employer-led route, alongside the points-based Skilled Migrant Category Resident Visa for many skilled workers. Check your own situation on Immigration New Zealand's site, and use a licensed immigration adviser for anything complex. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I include my NIC number on a CV for New Zealand jobs?",
        a: "No, never include your NIC number on a New Zealand CV. New Zealand employers do not use it, and it is a security risk on a document that may pass through several recruiters and inboxes. Identity and work-rights documents are checked separately, later in the process, through the employer's own checks.",
      },
      {
        q: "Are CA Sri Lanka and ACCA recognised by New Zealand employers?",
        a: "Yes, and Chartered Accountants Australia and New Zealand names CA Sri Lanka directly among the overseas bodies with a defined membership pathway, alongside ACCA. State your exact status, such as passed finalist, member or fellow, with the year, since New Zealand employers treat part-qualified and fully qualified status very differently. Pair the credential with evidence of the actual work you did.",
      },
      {
        q: "Do I still need referees when I convert my CV for New Zealand?",
        a: "Yes, and this is one of the clearest differences from a UK conversion. New Zealand CVs commonly name two referees directly. Keep them, but swap the traditional Sri Lankan 'non-related referees' for people who genuinely know your work, such as a direct manager and a senior colleague, and ask their permission before listing them.",
      },
      {
        q: "Can Sri Lankan nurses work in New Zealand?",
        a: "Yes, once they meet the Nursing Council of New Zealand's registration requirements for internationally qualified applicants and hold the right visa. The Nursing Council sets the registration steps, so read its guidance for internationally qualified nurses first, since the process takes time. Your CV should state your clinical areas, settings and registration progress clearly.",
      },
      {
        q: "How do I present a UK degree I studied for in Sri Lanka on a New Zealand CV?",
        a: "Name the awarding UK university first, then the institution where you studied, for example 'BSc (Hons) Computer Science, University of Westminster, delivered at a partner institute in Colombo', with your classification. The award is a UK degree, so present it as one, and be accurate about where you studied.",
      },
    ],
    sources: [
      {
        label: "CA ANZ: Pathway for members of overseas accounting bodies",
        url: "https://www.charteredaccountantsanz.com/become-a-member/memberships/pathway-for-members-of-overseas-accounting-bodies",
      },
      {
        label: "Nursing Council of New Zealand: Internationally Qualified Nurses",
        url: "https://www.nursingcouncil.org.nz/IQN",
      },
      {
        label: "Engineering New Zealand: International registers",
        url: "https://www.engineeringnz.org/join-us/international-registers/",
      },
      {
        label: "Immigration New Zealand: Green List pathway to residence",
        url: "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/green-list-pathway-to-residence/",
      },
      {
        label: "Immigration New Zealand: Accredited Employer Work Visa",
        url: "https://www.immigration.govt.nz/new-zealand-visas/visas/visa/accredited-employer-work-visa",
      },
    ],
  },
  {
    country: "new-zealand",
    origin: "india",
    originName: "India",
    metaTitle: "New Zealand CV for Indian Professionals: Applying From India",
    metaDescription:
      "How to convert an Indian CV for New Zealand employers: drop CTC and father's name, add real referees, restructure IT project CVs, present ICAI status.",
    h1: "Applying for New Zealand Jobs From India",
    lead:
      "Indian CVs are built for Indian job portals: CTC and notice period up top, IT projects listed client by client, and a personal profile with a father's name. New Zealand wants a shorter, plainer document with something most Indian CVs skip entirely: named referees.",
    quickAnswer:
      "To apply for New Zealand jobs from India, rebuild your CV to local conventions: remove CTC, father's name, date of birth, photo and the declaration; turn project-by-project IT listings into role-based achievements; state CGPA and degrees as awarded; and add two named referees, which many Indian CVs omit entirely. Present ICAI or Medical Council status accurately, and check Green List and visa routes on Immigration New Zealand's site.",
    overview:
      "Indian professionals compete strongly for New Zealand roles, particularly in technology, healthcare, engineering and finance, and a meaningful share already have exposure to international clients through global delivery work. The habits that hold an Indian CV back in New Zealand come from a different hiring system: portal keyword stuffing, CTC-based negotiation up front, and IT services CVs organised around client projects rather than employers, none of which a New Zealand reader expects or finds easy to scan. New Zealand also expects something most Indian CVs leave out entirely: two named referees. Adding that section properly, rather than treating it as an afterthought, is one of the more distinctive parts of preparing an Indian CV for this market.",
    whatToChange: [
      {
        from: "'Current CTC', 'Expected CTC' in lakhs and 'Notice period' at the top of the CV",
        to: "Remove salary figures entirely. Mention notice period, if useful, in the cover letter rather than the CV header",
      },
      {
        from: "A 'Personal Profile' with father's name, date of birth, gender, marital status, nationality and languages known",
        to: "Name, city and country, phone with +91 or a New Zealand number if you have one, email and LinkedIn only",
      },
      {
        from: "IT services format: Project 1, Project 2, each with client, duration, team size, environment and 'roles and responsibilities'",
        to: "Organise by employer and role. Summarise the technology stack once, and write achievements that show what you built, improved or led across projects",
      },
      {
        from: "No referees section at all, or 'References available upon request' with nothing behind it",
        to: "Two named referees with role, organisation, phone and email, since New Zealand employers expect this and treat it as a genuine check rather than a formality",
      },
      {
        from: "Class 10 and Class 12 board percentages alongside the degree",
        to: "Remove school results once you have a degree and experience. State the degree with institution and CGPA or class as awarded",
      },
      {
        from: "A 'Career Objective' and a long 'Strengths' list of personal qualities",
        to: "A three to four line personal profile with your level, specialism, evidence and target New Zealand role",
      },
      {
        from: "'I hereby declare that the above information is true to the best of my knowledge', with place, date and signature",
        to: "Remove it. New Zealand CVs have no declaration, place, date or signature",
      },
      {
        from: "A skills block listing every tool ever touched, written for job-portal keyword searches",
        to: "A grouped list of the skills relevant to the New Zealand role, each important one proven inside your experience",
      },
    ],
    qualificationsNote:
      "Indian degrees are broadly familiar to New Zealand employers, particularly in technology, but grading and institution names still need clarity. State the degree as awarded, such as B.Tech or BE, with the institution and CGPA out of 10 or the class awarded, rather than converting it to a New Zealand equivalent yourself. The New Zealand Qualifications Authority's International Qualification Assessment can compare it against the New Zealand framework when an employer genuinely needs that. Chartered Accountants Australia and New Zealand names ICAI directly among the overseas accounting bodies with a defined membership pathway, alongside ACCA, so state your ICAI or ACCA status exactly. Nurses need registration with the Nursing Council of New Zealand, and doctors need registration with the Medical Council of New Zealand, which sets out clear pathways for overseas-trained doctors. Engineers can look at Engineering New Zealand's international registers, which recognise qualifications and experience through international accreditation agreements that Indian degrees accredited by the National Board of Accreditation generally sit within.",
    sectorsWhereCandidatesCompete: [
      "Software engineering, cloud and data",
      "IT consulting and business analysis, often with international client experience",
      "Nursing and, for registered doctors, the public health system",
      "Accounting, audit and finance",
      "Engineering and infrastructure",
      "Agritech and food technology",
    ],
    practicalSteps: [
      {
        title: "Reorganise around roles, not projects",
        body: "If you have spent years on client projects at an IT services firm, group them under your employer and title, then pick the four to six outcomes that show the most responsibility. A New Zealand reader wants your trajectory, not every engagement listed.",
      },
      {
        title: "Add the referees section your Indian CV probably lacks",
        body: "Most Indian CVs either skip referees or use the placeholder line about references being available. New Zealand employers generally expect two named referees on the CV itself, so add them properly, with permission, rather than leaving the line as an unfulfilled promise.",
      },
      {
        title: "Remove the Indian process details",
        body: "CTC, expected salary, notice period, father's name, declaration and signature all belong to Indian hiring processes. Removing them usually saves close to a page and reads as a document written specifically for New Zealand rather than lightly adjusted.",
      },
      {
        title: "Lead with New Zealand recognised credentials",
        body: "If you hold ICAI or ACCA membership, make it visible in your profile; CA ANZ's overseas pathway names ICAI directly. If you are a nurse or doctor, state your registration progress with the Nursing Council or Medical Council plainly.",
      },
      {
        title: "Check the Green List and plan your notice period around it",
        body: "IT, engineering and some healthcare roles have appeared on Immigration New Zealand's Green List at various points, which is worth checking before you apply. Indian notice periods are often longer than New Zealand employers expect, so be ready to give a realistic start date early rather than at the offer stage.",
      },
      {
        title: "Schedule around the time difference",
        body: "New Zealand runs six and a half to seven and a half hours ahead of India, depending on New Zealand's daylight saving period. Offer interview windows explicitly in New Zealand time, and avoid clashing with your current employer's core hours by suggesting New Zealand mornings.",
      },
    ],
    commonMistakes: [
      "Leaving CTC and expected CTC on the CV, which New Zealand employers find unusual and which anchors negotiation badly",
      "Keeping the project-by-project IT services layout that runs to four or five pages",
      "Omitting referees entirely, when New Zealand employers generally expect two named ones",
      "Listing Class 10 and 12 percentages years into a career",
      "Including father's name, date of birth and a signed declaration",
      "Converting CGPA into a guessed New Zealand equivalent instead of stating it as awarded",
    ],
    visaContext:
      "Indian nationals generally need a visa to work in New Zealand. Occupations on Immigration New Zealand's Green List can move toward residence directly or after a period of qualifying work, and outside that list the Accredited Employer Work Visa is the common employer-led route, alongside the points-based Skilled Migrant Category Resident Visa for many skilled workers. Criteria change, so check Immigration New Zealand's site directly and use a licensed immigration adviser for anything complex. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I mention my CTC on a CV for New Zealand jobs?",
        a: "No, do not put your current or expected CTC on a New Zealand CV. New Zealand employers do not expect salary on the CV, and figures in lakhs mean little to them without context. Salary comes up later, in conversation, against the New Zealand range for the role. Use the space for evidence of your impact instead.",
      },
      {
        q: "Do I need referees if my Indian CV never included them?",
        a: "Yes, add two named referees with their role, organisation, phone and email. Most Indian CVs skip this section or use a placeholder line, but New Zealand employers generally expect real referees on the CV itself. Ask permission before listing anyone, and choose people who can speak specifically to your recent work.",
      },
      {
        q: "How do I convert an Indian IT CV into a New Zealand CV?",
        a: "Reorganise it by employer and role rather than by client project, summarise the technology stack once, and write four to six achievements per recent role that show what you built, improved or led. Remove CTC, notice period, the personal profile block and declaration, add referees, then cut to two or three pages.",
      },
      {
        q: "Are ICAI and ACCA recognised in New Zealand?",
        a: "Yes, Chartered Accountants Australia and New Zealand names ICAI directly among the overseas accounting bodies with a defined membership pathway, alongside ACCA. State your exact status and year of qualification, since part-qualified and fully qualified are treated very differently by New Zealand employers.",
      },
      {
        q: "Can Indian doctors work in New Zealand?",
        a: "Yes, once they meet the Medical Council of New Zealand's registration requirements, which set out specific pathways for overseas-trained doctors, and hold the right visa. Registration can take real time, so check the Medical Council's current pathways early and state your progress plainly on your CV and in applications.",
      },
    ],
    sources: [
      {
        label: "CA ANZ: Pathway for members of overseas accounting bodies",
        url: "https://www.charteredaccountantsanz.com/become-a-member/memberships/pathway-for-members-of-overseas-accounting-bodies",
      },
      {
        label: "Nursing Council of New Zealand: Internationally Qualified Nurses",
        url: "https://www.nursingcouncil.org.nz/IQN",
      },
      {
        label: "Medical Council of New Zealand: Getting registered",
        url: "https://www.mcnz.org.nz/registration/getting-registered/",
      },
      {
        label: "Engineering New Zealand: International registers",
        url: "https://www.engineeringnz.org/join-us/international-registers/",
      },
      {
        label: "Immigration New Zealand: Green List pathway to residence",
        url: "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/green-list-pathway-to-residence/",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /new-zealand/career-advice : hub intro                              */
/* ------------------------------------------------------------------ */

const adviceHubIntro =
  "New Zealand hiring has its own habits. The CV runs two to three pages, a little longer than the UK's, the tone is plain and wary of overselling, and most CVs name two referees where UK and US ones name none. These guides cover what is specific to New Zealand: the local CV format, how to write a cover letter in the right register, and how to apply from overseas when your first CV was built for a different market. For universal advice on length, structure and ATS, the global career advice library goes deeper. If you are applying from abroad, start with the international job seekers guide.";

export const newZealandBundle: CountryBundleFull = {
  country: "new-zealand",
  market,
  adviceHubIntro,
  services,
  articles,
  ijsHub,
  origins,
};
