/**
 * USA COUNTRY BUNDLE
 * ------------------------------------------------------------------
 * Powers the whole US mini-site: the /usa hub, the three localised
 * service pages, three US-specific articles, the international job
 * seekers hub and the Sri Lanka and India origin corridors.
 *
 * American English and "resume" throughout (URLs stay /usa/cv-writing
 * for consistency across the mini-sites). Prices in USD only.
 * Work-authorization content is orientation only and always points to
 * USCIS or travel.state.gov. No testimonials, no invented statistics.
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
/* /usa : country hub                                                  */
/* ------------------------------------------------------------------ */

const market: CountryMarket = {
  slug: "usa",
  name: "United States",
  adjective: "US",
  flag: "🇺🇸",
  code: "US",
  locale: "en-US",
  quickAnswer:
    "A US resume is a one to two page, reverse-chronological document in American English built around achievement bullets with numbers, not duties. It leaves out a photo, date of birth and marital status. Chanuka Jeewantha writes US resumes, LinkedIn profiles and cover letters personally, for professionals already in the US and those applying from abroad, from $129 USD.",
  metaTitle: "US Resume, LinkedIn and Cover Letter Writing Services",
  metaDescription:
    "Resumes, LinkedIn profiles and cover letters for US employers: one to two pages, ATS-ready formatting, no photo, achievement bullets with numbers. Priced in USD",
  heroHeading: "Resume, LinkedIn and Cover Letter Writing for the US Job Market",
  heroLead:
    "A US resume works differently from a CV built for almost anywhere else: shorter, faster to scan, and built entirely around what you accomplished rather than what your job description said. Get that shape right and a recruiter can find your value in the first pass.",
  docType: "Resume",
  standardLength:
    "One page for most professionals under about ten years of experience. Two pages once your career justifies it. Longer, structured formats apply only to academic CVs and to federal resumes submitted through USAJOBS, which are their own category.",
  photoRule:
    "Leave it off. No federal law bans a photo on a resume, but EEOC guidance tells employers not to request one before an offer, and most hiring teams avoid a headshot, date of birth or marital status on a resume because acting on that information during screening could support a discrimination claim.",
  spellingStyle: "American English",
  overview:
    "US hiring runs at volume, and most resumes pass through an applicant tracking system such as Workday, Greenhouse, Lever or iCIMS before a person ever opens them. That reality shapes the whole document: a clean, single-column layout the software can parse, keywords pulled from the job posting, and bullets that lead with results rather than responsibilities. A US resume is also a sales document in a way a CV rarely is. Recruiters expect you to state your impact in numbers, dollars, percentages or scale, and a resume that only lists duties reads as unfinished. For applicants outside the US, the underlying question is almost always the same one an employer cannot ask directly: can this person legally work here, and does the company want to sponsor that. A resume that is honest and quiet about it, and a cover letter or application form that addresses it properly, removes the most common reason a strong candidate gets passed over.",
  marketRules: [
    {
      label: "Length",
      value:
        "One page is standard for most professionals with under about ten years of experience. Two pages is normal and expected for senior, technical or executive candidates with more to show. Three pages is rare outside academia. Federal resumes on USAJOBS run longer because the format asks for different information; treat them as a separate document, not a longer version of the same resume.",
      importance: "critical",
    },
    {
      label: "Photo and personal details",
      value:
        "No photo, date of birth, marital status, nationality or Social Security number. This is not a specific statute banning a resume photo, but EEOC guidance advises employers not to request one, and most companies avoid this information at the resume stage to limit exposure under discrimination law. A resume with a photo reads as unfamiliar with US norms.",
      importance: "critical",
    },
    {
      label: "Document type and name",
      value:
        "Call it a resume, not a CV. In the US, 'CV' usually means the longer academic or medical document used for faculty, research and clinical appointments; using that word for a standard job application resume can confuse an ATS keyword match and a human reader.",
      importance: "recommended",
    },
    {
      label: "Achievement bullets",
      value:
        "Bullets open with a strong verb and end with a result: a number, a dollar figure, a percentage, a timeframe or a scale. 'Managed a team' says less than 'Managed a 6-person support team and cut average ticket resolution time from 48 to 19 hours.' Duty-only bullets are the most common reason a strong background reads as flat.",
      importance: "critical",
    },
    {
      label: "ATS formatting",
      value:
        "A single column, standard section headings, no text boxes, tables or graphics that an ATS can misread, and a file name and format that matches what the posting asks for. Workday, Greenhouse, Lever and iCIMS are common platforms among US employers, and each parses cleanly built resumes more reliably than templates with columns or icons.",
      importance: "critical",
    },
    {
      label: "American English and format",
      value:
        "American spelling (optimize, organize, analyze, program), US Letter page size, and dates written as Month Year, such as 'March 2022 to Present'. Phone numbers use the US format with area code, and city and state are usually written as 'Austin, TX' rather than a full street address.",
      importance: "recommended",
    },
    {
      label: "Work authorization",
      value:
        "US employers cannot ask about immigration status on a resume, and a resume should not state it either. If you already hold unrestricted work authorization, a short line can say so. If sponsorship is required, that is better handled through the application form or a direct conversation, not buried or hidden on the resume itself.",
      importance: "recommended",
    },
  ],
  whatRecruitersLookFor: [
    "Quantified impact stated plainly: revenue, cost savings, percentages, headcount, timelines",
    "The exact tools, platforms and methods you use, named rather than implied",
    "Scope of responsibility: budget size, team size, stakeholders, geography",
    "A resume tailored to the specific role, using language close to the job posting",
    "US-relevant credentials and licenses where they apply, such as PMP, CPA, RN licensure or a relevant security clearance",
    "A work authorization position that is clear enough not to raise a question, without overstating it",
  ],
  inDemandSectors: [
    "Software engineering, cloud and data",
    "Healthcare, nursing and allied health",
    "Finance, accounting and financial services",
    "Sales, marketing and customer success",
    "Project and program management across industries",
    "Manufacturing, logistics and supply chain",
  ],
  keyRoles: [
    "Software Engineer",
    "Data Analyst",
    "Product Manager",
    "Financial Analyst",
    "Project Manager",
    "Nurse",
  ],
  faqs: [
    {
      q: "How long should a resume be in the US?",
      a: "One page is standard for most professionals with under about ten years of experience, and two pages is normal and expected for senior, technical or executive candidates with a longer track record to show. Three pages is unusual outside academia. Federal resumes submitted through USAJOBS are longer because the format asks for different information, and that is a separate document, not a stretched version of a standard resume.",
    },
    {
      q: "Should I put a photo on my resume in the US?",
      a: "No, leave the photo off. There is no specific law that bans a resume photo, but EEOC guidance tells employers not to request one before an offer, and most US companies avoid photos, birth dates and marital status on resumes because using that information during screening could support a discrimination claim. Put your photo on LinkedIn instead, where it is expected.",
    },
    {
      q: "What is the difference between a resume and a CV in the US?",
      a: "In the US, a resume is the standard one to two page document used for almost every job application, focused on achievements relevant to the role you want. A CV, short for curriculum vitae, is a longer, comprehensive document used mainly in academia, research and some medical and scientific roles, listing publications, grants, teaching and presentations. Calling a job-application resume a CV in the US is a common, avoidable mismatch.",
    },
    {
      q: "Can you help if I am applying for US jobs from abroad?",
      a: "Yes. A large part of this work is converting resumes from Sri Lanka, India, the Gulf and elsewhere into US conventions: cutting length, removing personal details, rewriting duties as quantified achievements, and framing work authorization honestly and briefly. Immigration and visa questions themselves belong with USCIS, the US Department of State or a qualified immigration attorney; the documents are what Chanuka writes.",
    },
    {
      q: "How much does a US resume cost and what currency do you charge in?",
      a: "US resume writing costs $129, $189 or $279 USD depending on experience: under two years, three to nine years, or ten years and executive. All payments are taken in USD. Combining any two services saves 20 percent, and all three save 30 percent.",
    },
    {
      q: "How does the process work if I am not in the United States?",
      a: "The whole process runs by email, so your location does not matter. You choose a package and pay, complete a written brief and upload your current resume, and Chanuka writes the document personally. You receive a draft, have one revision round, and get final files in editable Word and PDF, usually within 5 to 7 days.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* /usa/{service} : localised commercial pages                         */
/* ------------------------------------------------------------------ */

const services: CountryService[] = [
  {
    country: "usa",
    service: "cv-writing",
    primaryKeyword: "resume writing service USA",
    secondaryKeywords: [
      "professional resume writer USA",
      "ATS resume writing service",
      "executive resume writing USA",
      "US resume writer for international applicants",
      "resume writer for H-1B and green card holders",
    ],
    metaTitle: "Resume Writing Service USA: ATS-Ready Resumes",
    metaDescription:
      "US resume writing by one expert, not a team: achievement bullets with real numbers and ATS-ready formatting US employers expect. From $129 USD.",
    eyebrow: "US resume writing",
    h1: "Resume Writing Service for US Jobs",
    lead:
      "A US resume written personally by Chanuka Jeewantha: one or two pages, American English, and every line rewritten from a duty into a measurable accomplishment.",
    quickAnswer:
      "This US resume writing service rewrites your resume to American conventions: one to two pages, reverse chronological, achievement bullets built around numbers, and ATS-ready formatting for platforms like Workday, Greenhouse, Lever and iCIMS. Every resume is written personally by Chanuka Jeewantha, delivered in Word and PDF within 5 to 7 days as standard, from $129 USD.",
    keyFacts: [
      { label: "Length", value: "One page under about 10 years of experience, two pages beyond that" },
      { label: "Bullets", value: "Accomplishment-led, each one ending in a measurable result" },
      { label: "Personal details", value: "Name, city and state, phone, email, LinkedIn" },
      { label: "Format", value: "Single column, ATS-ready, no photo or graphics" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
      { label: "Standard delivery", value: "5 to 7 days, faster options available" },
    ],
    whyDifferent: {
      heading: "Why a US resume is not a CV with the spelling changed",
      paragraphs: [
        "US employers use the word resume, not CV, for a standard job application, and the two documents are not interchangeable. In the US, a CV usually refers to the longer, comprehensive document used in academia, research, medicine and some scientific roles, listing publications, grants, teaching and presentations, often running to several pages. A resume is shorter and purpose-built for one goal: getting you an interview for one type of role. Sending a CV-style document, or a long international CV with a personal details block and duty lists, to a corporate US employer reads as unfamiliar with how American hiring works.",
        "Most mid-size and large US employers also route applications through an applicant tracking system before anyone reads them by eye. Workday, Greenhouse, Lever and iCIMS are common platforms across US companies of very different sizes and industries. They parse resumes for structure and keywords, so a clean single-column layout with standard section headings matters as much as the writing itself.",
        "The writing style is different too. US resumes are built on accomplishment bullets rather than duty lists: what you changed, built or improved, and how you know it worked. 'Responsible for customer accounts' says nothing an ATS or a recruiter can act on. 'Grew a book of 40 enterprise accounts to $2.1M in annual recurring revenue, a 34 percent increase in 18 months' does the work a US resume is supposed to do.",
      ],
    },
    whatYouGet: [
      "A one or two page US resume (by experience level) written from scratch around your target role",
      "Every bullet rewritten as a measurable accomplishment: numbers, dollars, percentages or scale where you can evidence them",
      "ATS-ready formatting that Workday, Greenhouse, Lever, iCIMS and similar systems parse cleanly",
      "Overseas job titles, employers and qualifications explained in terms a US reader recognizes",
      "Keyword alignment with your target job postings, without keyword stuffing",
      "American English and US Letter formatting throughout",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Section order", value: "Contact info, a short summary or headline, core skills, professional experience, education, then certifications" },
      { label: "Dates", value: "Month and year for every role, most recent first" },
      { label: "Bullet formula", value: "Strong verb, what you did, and the measurable result, in that order" },
      { label: "Leave out", value: "Photo, date of birth, marital status, nationality, Social Security number, references" },
      { label: "Older roles", value: "Roles older than about 10 to 15 years shrink to one line or move to a brief 'Earlier experience' section" },
      { label: "Paper size", value: "US Letter (8.5 x 11 inches), not A4" },
    ],
    sectors: [
      "Software engineering, cloud and data",
      "Healthcare, nursing and allied health",
      "Finance, accounting and financial services",
      "Sales, marketing and customer success",
      "Project and program management",
      "Manufacturing, logistics and supply chain",
    ],
    process: [
      {
        title: "Choose your tier and pay in USD",
        body: "Pick the tier that matches your experience. Payment is in USD, so there is nothing to convert at checkout beyond your card provider's own rate.",
      },
      {
        title: "Complete the brief",
        body: "Upload your current resume or CV and answer a written brief about your target US roles, your results, and your work authorization situation. Links to two or three job postings help with keyword alignment.",
      },
      {
        title: "Chanuka writes your resume",
        body: "Your resume is written personally, never outsourced. Questions come by email, so time zones do not slow anything down.",
      },
      {
        title: "Review, revise and apply",
        body: "You receive the draft, request changes in one revision round, and get final Word and PDF files ready to submit through job boards and company portals.",
      },
    ],
    faqs: [
      {
        q: "What makes a resume writing service USA specific?",
        a: "A US-specific resume service writes to American conventions rather than a generic international template: one or two pages, accomplishment-led bullets with numbers, American spelling, US Letter size, no photo or personal details, and formatting built to survive an applicant tracking system. It also knows how to frame overseas experience and qualifications so a US hiring manager can place them quickly.",
      },
      {
        q: "Is a professional resume writer worth it for US jobs?",
        a: "A professional resume writer is worth it when your resume is not getting responses despite relevant experience, when your bullets read as duties rather than results, or when you are moving into the US market from a country with different resume conventions. It matters less if you are already getting interviews and the gap is later in the process, where interview preparation is the better investment.",
      },
      {
        q: "Will my resume pass through Workday, Greenhouse, Lever and iCIMS?",
        a: "The resume is built to parse cleanly in common applicant tracking systems: a single column, standard section headings, no text boxes, tables or icons that confuse parsing, and keywords drawn from your target job postings. No writer can guarantee how any specific employer's system scores a match, since that depends on the posting and the employer's own settings, but clean formatting and honest keyword alignment give you the best chance.",
      },
      {
        q: "Can you write a resume for H-1B, green card or other visa-related applications?",
        a: "Yes, the resume itself is written the same way regardless of your visa situation, focused on your experience and results. Chanuka can word a brief, accurate line about your current work authorization where it helps, but questions about visa categories, petitions or eligibility are immigration matters that belong with USCIS or a qualified immigration attorney, not a resume writer.",
      },
      {
        q: "Should my US resume be one page or two?",
        a: "One page suits most professionals with under about 10 years of experience, since it forces a focus on your strongest, most recent results. Two pages is normal and expected once you have a longer track record, more scope, or a technical or executive background that needs the space. Going beyond two pages is unusual outside academic or federal formats.",
      },
      {
        q: "How long does US resume writing take?",
        a: "Standard delivery is 5 to 7 days from receiving your completed brief. Fast delivery in 2 to 3 days adds 20 percent, and ultra delivery within 24 hours adds 50 percent. After the draft, one revision round is included, and the final Word and PDF files follow once changes are agreed.",
      },
    ],
  },
  {
    country: "usa",
    service: "linkedin-optimisation",
    primaryKeyword: "LinkedIn profile writing service USA",
    secondaryKeywords: [
      "LinkedIn optimization USA",
      "LinkedIn profile writer USA",
      "LinkedIn for US recruiters",
      "LinkedIn profile for relocating to the US",
    ],
    metaTitle: "LinkedIn Profile Writing Service USA",
    metaDescription:
      "LinkedIn profile writing for the US market: a headline recruiters search for, an About section with real results, and a location that matches your resume.",
    eyebrow: "US LinkedIn optimization",
    h1: "LinkedIn Profile Writing for the US Market",
    lead:
      "Your LinkedIn profile rewritten for how US recruiters actually search: the right job titles and keywords, a headline built to be found, and an About section that reads like a professional, not a slogan.",
    quickAnswer:
      "A US LinkedIn profile writing service rewrites your headline, About section, experience and skills so US recruiters find you under the job titles and keywords they search. Chanuka Jeewantha writes each profile personally in American English, handles location and work-authorization wording, and delivers within 5 to 7 days from $129 USD.",
    keyFacts: [
      { label: "Headline", value: "Target job title and keywords first, not a slogan" },
      { label: "About section", value: "First person, results-focused, US spelling" },
      { label: "Location", value: "Your real location, with US relocation stated where true" },
      { label: "Deliverable", value: "Ready-to-paste text for every section" },
      { label: "Price", value: "$129, $189 or $279 USD by experience" },
    ],
    whyDifferent: {
      heading: "How US recruiters use LinkedIn, and what that means for your profile",
      paragraphs: [
        "LinkedIn is heavily used by US recruiters and in-house talent teams, often as the first place they search once a role opens, and sometimes before it is advertised at all. They search by job title, skill and location. A headline that reads 'Passionate about people and technology' instead of 'Senior Product Manager, B2B SaaS' simply does not surface in the searches that matter, however strong the resume behind it.",
        "Consistency between LinkedIn and your resume matters more in the US than in most markets, because US recruiters commonly check both before reaching out, and a mismatch in titles or dates reads as careless at best. Location is the quiet filter for candidates outside the US: setting it to a US city you do not live in misleads recruiters and tends to unravel on the first call. The steadier approach is your real location plus a clear line about relocation and work authorization in the headline or About section, so recruiters who hire internationally can still find you.",
        "US LinkedIn culture also rewards a more direct, first-person voice than a resume's clipped fragments. The About section is written in full sentences, in your own voice, with specific results, not a list of adjectives.",
      ],
    },
    whatYouGet: [
      "A search-focused headline built on the US job titles and keywords recruiters actually type",
      "An About section in first person and American English, with specific results and a clear next step",
      "Experience entries rewritten from your resume, more conversational than the resume itself",
      "A curated skills list ordered so the most relevant skills show first",
      "Location and work-authorization wording that is accurate and searchable",
      "Guidance on Open to Work settings, custom URL and featured content",
      "One revision round on all text",
    ],
    marketConventions: [
      { label: "Spelling", value: "American English: optimize, organize, program" },
      { label: "Headline format", value: "Job title | specialty | industry or credential" },
      { label: "Photo", value: "Yes on LinkedIn, even though a US resume has none" },
      { label: "Voice", value: "First person throughout, direct and specific" },
      { label: "Credentials", value: "US-recognized certifications named in full once, then abbreviated" },
      { label: "Consistency", value: "Titles and dates match the resume, because recruiters check both" },
    ],
    sectors: [
      "Technology, data and software engineering",
      "Finance and financial services",
      "Sales, marketing and business development",
      "Consulting and professional services",
      "Healthcare professionals relocating to the US",
      "Project and program management",
    ],
    process: [
      {
        title: "Choose your tier",
        body: "LinkedIn optimization uses the same experience tiers as resume writing. Bundling it with a US resume saves 20 percent.",
      },
      {
        title: "Share your profile and targets",
        body: "Send your LinkedIn URL, current resume and the US roles you want to be found for, plus your location and work-authorization situation.",
      },
      {
        title: "Chanuka rewrites every section",
        body: "Headline, About, experience and skills are written personally, in American English, as ready-to-paste text.",
      },
      {
        title: "Revise and publish",
        body: "Review the draft, request changes in one revision round, then paste the final text into your profile.",
      },
    ],
    faqs: [
      {
        q: "Do US recruiters really use LinkedIn to find candidates?",
        a: "Yes, LinkedIn is a routine sourcing tool for US recruiters and in-house talent teams, especially for professional, technology, finance and healthcare roles. They search by title, skill and location to build shortlists, often before a role is formally posted. A profile with a vague headline or the wrong job titles does not appear in those searches, however strong the underlying experience is.",
      },
      {
        q: "Should I change my LinkedIn location to a US city before I move?",
        a: "No, keep your real location and state your US plans honestly instead. A false US location usually surfaces on the first recruiter call and damages trust. Say in the headline or About section that you are relocating to a named city or region, and note your work-authorization position if it is settled, so recruiters who hire internationally can still find and contact you.",
      },
      {
        q: "Should my LinkedIn profile match my resume exactly?",
        a: "Job titles, employers and dates should match closely, because US recruiters commonly cross-check both, and a mismatch reads as inconsistent or careless. The wording does not need to be identical. LinkedIn's About section can be more conversational and first person than a resume's clipped bullets, while still telling the same factual story.",
      },
      {
        q: "Is LinkedIn optimization worth it if I already have a good resume?",
        a: "It is worth it when recruiters are not reaching out to you or when your profile and resume tell different stories. A resume only works once you send it; LinkedIn works while you are not actively applying, through search and recruiter outreach. If most of your target roles come through direct referrals rather than recruiters, LinkedIn matters less, and the resume is the better first spend.",
      },
      {
        q: "What does LinkedIn optimization cost for the US market?",
        a: "LinkedIn optimization costs $129, $189 or $279 USD depending on experience level, matching the resume writing tiers. Adding it to a US resume saves 20 percent on both, and taking resume, LinkedIn and cover letter together saves 30 percent. Payment is in USD and delivery is 5 to 7 days as standard.",
      },
    ],
  },
  {
    country: "usa",
    service: "cover-letter-writing",
    primaryKeyword: "cover letter writing service USA",
    secondaryKeywords: [
      "US cover letter writer",
      "cover letter for US jobs from abroad",
      "American cover letter format",
      "cover letter for H-1B applicants",
    ],
    metaTitle: "Cover Letter Writing Service USA",
    metaDescription:
      "US cover letters written to American conventions: one page, a direct opening and a clear case for this role. Letters from $79 USD, delivered by email.",
    eyebrow: "US cover letter writing",
    h1: "Cover Letter Writing for US Applications",
    lead:
      "A one-page US cover letter that makes the case for one specific role in direct, confident American English, and handles questions like relocation and work authorization before the reader has to ask.",
    quickAnswer:
      "A US cover letter writing service produces a one-page letter, usually three or four short paragraphs, that connects your strongest results to the requirements of one role, in American English with US business-letter conventions. Chanuka Jeewantha writes each letter personally, including how to frame relocation or work authorization, with prices from $79 USD and standard delivery in 5 to 7 days.",
    keyFacts: [
      { label: "Length", value: "One page, three to four short paragraphs" },
      { label: "Greeting", value: "A named hiring manager where possible, otherwise 'Dear Hiring Manager'" },
      { label: "Sign-off", value: "'Sincerely' followed by your name" },
      { label: "Price", value: "$79, $119 or $159 USD by experience" },
      { label: "Bundle", value: "Save 20 percent with a US resume" },
    ],
    whyDifferent: {
      heading: "What a US cover letter has to do that a generic one does not",
      paragraphs: [
        "US cover letters are direct and specific, and they get to the point fast. They open by naming the role and giving the reader one strong reason to keep going, spend two or three paragraphs proving fit with real evidence, and close without ceremony. Letters that open with 'I am writing to apply for the position of' or spend a paragraph on personal qualities before mentioning a single result read as generic, and generic is the fastest way a letter gets skimmed and set aside.",
        "American business-letter convention is simpler than some markets: 'Dear Mr. Chen' or 'Dear Hiring Manager' when no name is available, and 'Sincerely' as the sign-off in almost every case. There is no equivalent to the formal split some countries use between a named and unnamed greeting. What matters more than the salutation is whether the letter says something a form-filled application cannot: why this company, why this role, and what you would bring on day one.",
        "For candidates outside the US, the cover letter is also the natural place to address what the resume should not carry: your timeline, your interest in relocating, and your work authorization position, stated factually and without apology, so it reads as a plan rather than an obstacle.",
      ],
    },
    whatYouGet: [
      "A one-page letter written for a specific US role and employer",
      "An opening that names the role and gives the reader a reason to keep reading",
      "Two or three paragraphs connecting your strongest results to the role's main requirements",
      "Relocation, availability and work-authorization wording framed factually where relevant",
      "Correct US greeting, sign-off and formatting conventions",
      "Editable Word and PDF files, plus one revision round",
    ],
    marketConventions: [
      { label: "Opening", value: "Name the role and give a direct reason to keep reading in the first sentence or two" },
      { label: "Evidence", value: "Two or three specific results matched to the role's main requirements" },
      { label: "Tone", value: "Direct, confident, specific, no filler phrases" },
      { label: "Date format", value: "Month Day, Year, for example September 27, 2026" },
      { label: "Length", value: "One page, roughly 250 to 350 words, shorter than many international letters" },
      { label: "When it is optional", value: "Some job portals mark the letter optional; write one anyway when the role matters to you" },
    ],
    sectors: [
      "Corporate roles applied for directly through a company site",
      "Startups and scaleups that read letters closely",
      "Nonprofit and mission-driven organizations",
      "Healthcare roles alongside a resume",
      "Academic-adjacent and research-support roles",
      "Overseas applicants explaining relocation and availability",
    ],
    process: [
      {
        title: "Choose your tier and share the role",
        body: "Pick your experience tier and send the job posting with your current resume.",
      },
      {
        title: "Answer a short brief",
        body: "Tell Chanuka why this role and company, your availability, and your relocation or work-authorization position if you are outside the US.",
      },
      {
        title: "Receive, revise, send",
        body: "You get a draft letter, one revision round and final Word and PDF files, ready to adapt for similar roles.",
      },
    ],
    faqs: [
      {
        q: "Do US employers still read cover letters?",
        a: "Many do, especially for direct applications to smaller companies, startups, nonprofits and roles where the posting specifically asks for one. Large-volume corporate hiring through an ATS sometimes skips the letter entirely. When a letter is requested or clearly welcomed, a generic one costs you little upside and a strong one gives you a real edge, so it is worth writing well when it counts.",
      },
      {
        q: "How long should a cover letter be in the US?",
        a: "A US cover letter should fit on one page, usually three or four short paragraphs and roughly 250 to 350 words. The reader wants the role, your fit and your availability, not a second resume. If an online application form sets a character or word limit, write to that limit instead of the general guideline.",
      },
      {
        q: "What is the correct greeting and sign-off for a US cover letter?",
        a: "Use 'Dear' followed by the hiring manager's name when you can find it, such as 'Dear Ms. Alvarez', and 'Dear Hiring Manager' when you cannot. Close with 'Sincerely' followed by your name in almost every case. Finding a name takes a few minutes on LinkedIn or the company site and makes the letter read as more deliberate.",
      },
      {
        q: "Do I need a cover letter if the application marks it optional?",
        a: "Not always, but it usually helps when the role matters to you or when your background needs a sentence of context, such as a career change or relocation. Skipping it costs nothing when the posting is truly indifferent. Writing a strong, specific letter rather than a generic one is what makes the difference either way.",
      },
      {
        q: "Should my cover letter mention that I need visa sponsorship?",
        a: "Usually yes, briefly and factually, when the employer's posting mentions sponsorship or welcomes international applicants. State your current work-authorization position in one sentence near the end and keep the rest of the letter focused on the value you bring. Leaving it out rarely helps, since it comes up during hiring anyway, and a plainly stated position reads as more confident than an evasive one.",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /usa/career-advice/{slug} : US-specific articles                    */
/* ------------------------------------------------------------------ */

const articles: CountryArticle[] = [
  {
    country: "usa",
    slug: "us-resume-format",
    title: "US resume format: the layout American employers expect",
    metaTitle: "US Resume Format: Sections, Layout and Conventions",
    metaDescription:
      "The US resume format section by section: the header, ATS-ready layout, accomplishment bullets and the details that mark a resume as built for another market.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "A US resume follows a shape American recruiters and applicant tracking systems both expect. Here is that shape, section by section, and the details that quietly mark a resume as written for somewhere else.",
    quickAnswer:
      "The standard US resume format is reverse chronological on US Letter paper: name and contact details, an optional short summary, core skills, professional experience with accomplishment bullets, education, then certifications. It uses American English, a single-column ATS-friendly layout, and leaves out a photo, date of birth and marital status. Most professionals fit it on one to two pages.",
    intro:
      "American recruiters and the software that screens resumes before them are both looking for the same thing: familiar information in a familiar place, formatted so it can be found in seconds. That makes the US resume format less a design choice than a set of conventions most successful applicants follow without thinking about it. This guide goes through those conventions section by section, with the details that differ most from CVs common in South Asia, the Gulf, Europe and much of the rest of the world. For the difference between a resume and a CV as words, see the separate guide on CV vs resume; for a step-by-step writing method, see how to write a professional CV. This page is specifically about the American shape.",
    sections: [
      {
        heading: "The standard order of a US resume",
        paragraphs: [
          "Almost every US resume that gets read follows a similar order, because both human reviewers and applicant tracking systems expect it. Deviating is allowed when it earns its place, such as putting a projects section above experience for a recent graduate with a strong portfolio and little paid work.",
        ],
        bullets: [
          "Contact information: name, city and state, phone, email, LinkedIn URL, one or two lines",
          "Summary or headline: two to three lines on your level, specialty and strongest value, optional but common for experienced candidates",
          "Core skills or competencies: a short, scannable list of the specific tools, methods or areas you work in",
          "Professional experience: most recent role first, with accomplishment bullets under each",
          "Education: degree, school and graduation year, briefer as your career grows longer",
          "Certifications and licenses: PMP, CPA, RN licensure, security clearances and similar, where relevant",
        ],
      },
      {
        heading: "The header: what goes in and what stays out",
        paragraphs: [
          "A US header is compact. Your full name, a phone number in standard US format, a professional email address, your city and state, and your LinkedIn URL. A full street address is not expected and rarely helps; 'Austin, TX' or 'Remote, open to relocation' is enough. If you live outside the US, state your real location and your plans plainly, such as 'Colombo, Sri Lanka. Relocating to Austin, TX, January 2027.'",
          "What stays out is the personal information common on resumes built for other markets: a photo, date of birth, gender, marital status, nationality, religion, and a Social Security or national ID number. No federal statute bans a resume photo specifically, but EEOC guidance advises employers not to request one before an offer, and most hiring teams avoid this information at screening to limit exposure under anti-discrimination law.",
          "Work authorization is the one personal detail that can occasionally earn a place, and only briefly. If you already hold unrestricted work authorization in the US, a short line can say so. If you will need sponsorship, that is usually better handled through the application form or the cover letter, since employers cannot ask about immigration status on a resume and a resume is not the place to raise it unprompted either.",
        ],
      },
      {
        heading: "Writing experience the accomplishment-led way",
        paragraphs: [
          "Each role opens with a consistent line: job title, company, location and dates. US convention is month and year, written as 'June 2021 to Present'. Bold or otherwise emphasize the job title or the company, whichever carries more weight for the reader, and keep the format identical across every role so the resume scans quickly.",
          "One short line of context under an unfamiliar employer helps a US reader who does not know a regional bank in Colombo or a mid-size IT services firm in Bangalore: what the company does, its size, and the market it serves. This is optional for well-known employers and useful for almost everyone else.",
          "The bullets are where most resumes succeed or fail. A US resume is built on accomplishments, not duties: what you did, and what happened as a result, ideally with a number attached. 'Responsible for the customer support team' describes a job description. 'Rebuilt the customer support workflow and cut average response time from 6 hours to 90 minutes across a 12-person team' describes a result an employer can picture and compare against other candidates. Recent, relevant roles earn four to six bullets. Roles older than about ten to fifteen years shrink to one or two lines, or move into a brief 'Earlier experience' section.",
        ],
      },
      {
        heading: "Education, certifications and the summary section",
        paragraphs: [
          "List your degree, institution and graduation year, without GPA once you have a few years of professional experience, unless a specific employer or academic-adjacent role asks for it. Overseas degrees are stated as awarded, with the institution and country; there is no need to convert a grade into a US equivalent yourself.",
          "A short summary or headline at the top, two to three lines, helps an ATS and a recruiter place you quickly: your level, your specialty and one strong piece of evidence. It is optional, more useful for experienced candidates than for recent graduates, and should never repeat the generic language of an outdated 'objective statement' about what you hope to gain from the role.",
          "Certifications and licenses deserve their own short section when they matter to the role: PMP for project managers, CPA for accountants, an RN license and state for nurses, AWS or other cloud certifications for engineers, or a relevant security clearance. Name each one in full once, in the form employers search for.",
        ],
      },
      {
        heading: "Page, font and file conventions",
        paragraphs: [
          "US resumes use US Letter paper, 8.5 by 11 inches, not A4. Use a clean single-column layout with standard section headings such as 'Professional Experience' and 'Education', a readable font around 10 to 11 point for body text, and consistent spacing. Avoid text boxes, tables, columns, icons and headshots. They look modern to a human eye and are a common way for an applicant tracking system to lose or scramble your information.",
          "Save the file as a text-based PDF or Word document, matching whatever the job posting requests; PDF is the safer default when no format is specified. Name the file clearly, such as 'Firstname-Lastname-Resume.pdf'. The article on ATS-friendly formatting goes further into how parsing actually works.",
          "Keep the resume to one page if you can do your experience justice in that space, and two pages once you genuinely need it; see the companion guide on one-page versus two-page resumes for exactly where that line sits. A federal resume submitted through USAJOBS is a different, longer document with its own required fields, not a stretched version of a standard resume.",
        ],
      },
      {
        heading: "American English and the small tells",
        paragraphs: [
          "Spelling is one of the fastest ways a US reader notices a resume built for another market. Use organize, analyze, program (for a planned set of activities), license as both noun and verb, center, and behavior. Keep official job titles and product names exactly as written, even when they carry non-US spelling.",
          "Vocabulary shifts too. The US says 'resume', not 'CV', for a standard job application, 'college' as commonly as 'university' for a degree, and 'high school' rather than 'secondary school'. Currency figures from outside the US are best described relative to the business, such as scale or proportion of budget, rather than converted at a rate that will have moved by the time someone reads it.",
        ],
      },
    ],
    takeaways: [
      "Follow the standard order: contact info, summary, skills, experience, education, certifications.",
      "Keep the header compact and leave out photo, date of birth, marital status, nationality and ID numbers.",
      "Write bullets as accomplishments with a measurable result, not as duty lists.",
      "Use US Letter paper, a single ATS-friendly column, and American spelling throughout.",
      "Treat a federal resume on USAJOBS as a separate, longer document, not a stretched standard resume.",
    ],
    faqs: [
      {
        q: "What is the correct resume format for the US?",
        a: "The correct US resume format is reverse chronological on US Letter paper: contact information, an optional short summary, core skills, professional experience with accomplishment-led bullets, education, and certifications where relevant. It uses American spelling, leaves out a photo and personal details, and stays to one or two pages for most professionals.",
      },
      {
        q: "Should a US resume include my full street address?",
        a: "No, a full street address is not expected on a US resume. Your city and state are enough, since employers use that mainly to judge commuting distance or relocation. If you are applying from outside the US, give your real city and country and add a short line about your relocation plans and timing.",
      },
      {
        q: "Is it better to send a resume as Word or PDF in the US?",
        a: "Both are common, so follow the job posting first. A text-based PDF keeps your layout intact and is the safer default when no format is specified. Some applicant tracking systems and company portals request Word specifically for easier internal editing. What matters most is a simple, single-column document that parses cleanly either way.",
      },
      {
        q: "Do I need a summary section at the top of my resume?",
        a: "A short summary or headline is optional but useful, especially for experienced professionals whose title alone does not explain their value. Keep it to two or three lines, specific to your field, and skip generic language about seeking a challenging opportunity. Recent graduates with a strong skills or projects section can often do without one.",
      },
    ],
    sources: [
      {
        label: "EEOC: Prohibited Employment Policies/Practices",
        url: "https://www.eeoc.gov/prohibited-employment-policiespractices",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/cv-vs-resume", label: "CV vs resume: what is the difference?" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/career-advice/ats-friendly-cv-format", label: "ATS-friendly CV format" },
      { href: "/usa/career-advice/one-page-vs-two-page-resume", label: "One page vs two page resume" },
      { href: "/usa/cv-writing", label: "US resume writing service" },
    ],
  },
  {
    country: "usa",
    slug: "one-page-vs-two-page-resume",
    title: "One page vs two page resume: which length is right for you",
    metaTitle: "One Page vs Two Page Resume: How to Decide",
    metaDescription:
      "One page or two page resume: the real US rule by experience level, the exceptions that call for more length, and how federal and academic formats differ.",
    category: "CV writing",
    readMinutes: 7,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "The one-page rule gets repeated as if it applies to everyone. It does not. Here is how US recruiters actually think about resume length, and where the real exceptions sit.",
    quickAnswer:
      "A one-page resume suits most US professionals with under about 10 years of experience, since it forces a focus on the strongest, most recent results. A two-page resume is normal and expected for senior, technical or executive candidates once they genuinely need the space. Three pages is rare outside academic CVs and federal resumes, which follow their own separate conventions.",
    intro:
      "Few resume questions generate as much confident, conflicting advice as length. Some guides insist on one page no matter what. Others say two pages is always safer. Neither is quite right, because US recruiters do not count pages, they judge whether every line earns its place. This guide sets out how experience level actually maps to length, why padding a one-page resume to two pages backfires, why cutting a genuinely full two-page resume down to one can lose real signal, and where the true exceptions sit: academic CVs and federal resumes submitted through USAJOBS.",
    sections: [
      {
        heading: "The rule that actually holds: match length to experience, not habit",
        paragraphs: [
          "The closest thing to a real rule in US hiring is this: one page for roughly zero to ten years of experience, two pages once you have more than that, and the switch happens naturally rather than on a fixed anniversary. A recent graduate with an internship and a capstone project has no legitimate way to fill two pages without padding, and padding is exactly what a recruiter notices first. A director with fifteen years across three companies, each with real scope and results, cannot honestly compress that into one page without losing the evidence that makes them a director in the first place.",
          "The test is not 'how many pages do I have' but 'is every line on this page doing work'. A one-page resume with six generic bullets is worse than a one-page resume with four sharp, quantified ones. A two-page resume where the second page repeats or pads the first is worse than a tight one-page version of the same career. Length follows content, not the other way around.",
        ],
      },
      {
        heading: "Why padding a short resume to two pages backfires",
        paragraphs: [
          "Early-career candidates sometimes stretch a resume to two pages by widening margins, enlarging fonts, adding a lengthy 'Objective' paragraph, or listing every course taken in a degree program. Recruiters read this pattern quickly and correctly: it signals a candidate trying to look more experienced than they are, which undercuts trust in the rest of the document.",
          "A tighter alternative almost always reads better. Cut roles or projects with no real relevance to the target job, remove a course list in favor of two or three specific, applied skills, and let a strong one-page resume make a confident, complete case instead of a thin two-page one stretching to fill space.",
        ],
      },
      {
        heading: "Why cutting a full career down to one page loses signal",
        paragraphs: [
          "The opposite failure shows up among experienced professionals who were told, somewhere early in their career, that one page is always correct, and never revisited the rule. A candidate with twelve years across three roles, each with real scope, often ends up compressing valuable evidence into a single dense page, or removing an entire role that would have shown career progression.",
          "Two pages is not a failure of editing when the content genuinely supports it. It is the honest length for a career with more to show. The discipline still matters: two pages should read as two pages of signal, not one page of substance stretched with white space or duty lists. Older, less relevant roles still shrink to one or two lines each, freeing space for the recent roles that matter most to the job you want next.",
        ],
      },
      {
        heading: "Executive and highly technical resumes",
        paragraphs: [
          "Senior executives, technical leads with deep, specialized scope, and candidates with unusually long, relevant careers sometimes justify a resume that pushes toward the edge of two pages or, in rare cases, a tightly edited third page, most often for a board-level or C-suite audience reviewing alongside a full biography. This is the exception, not the norm, and it works only when every additional line is still evidence rather than narrative. When in doubt, two disciplined pages beat three loose ones for almost every audience.",
        ],
      },
      {
        heading: "Academic CVs: a different document, not a longer resume",
        paragraphs: [
          "Academic, research, medical and some scientific roles use a CV rather than a resume, and a CV in the US follows different rules entirely. It lists publications, grants, conference presentations, teaching experience and academic service, and it can legitimately run to many pages depending on career stage. If you are applying for a faculty position, a postdoctoral role, or a research-heavy scientific role, you likely need a CV, not a resume, and the two documents are not different lengths of the same thing. See the guide to CV vs resume for how to tell which one a posting actually wants.",
        ],
      },
      {
        heading: "Federal resumes: longer by design, not by choice",
        paragraphs: [
          "Federal resumes submitted through USAJOBS are a genuine exception to the one or two page guideline, and for a structural reason rather than a stylistic one. Federal hiring commonly asks for information a private-sector resume omits entirely: the average number of hours worked per week for each role, the occupational series and starting and ending grade for federal positions, and a supervisor's name and contact information. The US Department of Labor's guidance on writing a federal resume notes plainly that federal resumes tend to run longer than private-sector ones, because leaving out that detail can cost you the qualification review rather than just reading as less polished.",
          "Treat a federal resume as a distinct document built for USAJOBS, not a padded version of your private-sector resume. If you plan to apply to both federal and private employers, keep two separate files rather than trying to make one document serve both audiences.",
        ],
      },
    ],
    takeaways: [
      "One page suits roughly zero to ten years of experience; two pages becomes normal beyond that.",
      "Let content set the length. Padding a short resume and over-compressing a long career both backfire.",
      "A tightly edited third page is a rare exception, mostly for senior executive or highly technical audiences.",
      "Academic and research roles use a CV, a different document with its own, often longer, conventions.",
      "Federal resumes on USAJOBS are longer by design because they require hours per week, series and grade, and supervisor details.",
    ],
    faqs: [
      {
        q: "Is a one-page resume always better in the US?",
        a: "No, a one-page resume is better only when your experience genuinely fits in that space without padding. It suits most candidates with under about 10 years of experience. Beyond that, a well-edited two-page resume that shows real scope and progression usually serves a candidate better than a compressed one-page version that leaves out evidence.",
      },
      {
        q: "Will recruiters reject a two-page resume?",
        a: "No, a two-page resume is standard and expected for experienced, technical or senior candidates. What recruiters react against is a two-page resume that reads as padded, repetitive, or no denser in evidence than a one-page resume would be. If both pages carry real, relevant content, length is not a problem.",
      },
      {
        q: "How long can a resume be for a senior executive role?",
        a: "Two pages is the norm even at senior levels, and it comfortably fits most executive careers when older or less relevant roles are compressed. A tightly edited third page is a rare exception, usually reserved for board-level or C-suite candidates whose reviewers expect more detail. Three loose pages of duty lists are worse than two disciplined pages almost every time.",
      },
      {
        q: "Why is my federal resume so much longer than my regular resume?",
        a: "Federal resumes submitted through USAJOBS ask for information private-sector resumes do not, including hours worked per week for each role, occupational series and grade, and supervisor contact details. The US Department of Labor's own guidance notes that federal resumes tend to run longer for this reason, so treat it as a separate document built for that system rather than a stretched version of your standard resume.",
      },
    ],
    sources: [
      {
        label: "US Department of Labor: Tips for Writing a Federal Resume",
        url: "https://www.dol.gov/general/jobs/tips-for-writing-a-federal-resume",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-long-should-a-cv-be", label: "How long should a CV be?" },
      { href: "/career-advice/cv-vs-resume", label: "CV vs resume: what is the difference?" },
      { href: "/usa/career-advice/us-resume-format", label: "US resume format" },
      { href: "/career-levels/executive", label: "Executive career resources" },
      { href: "/usa/cv-writing", label: "US resume writing service" },
    ],
  },
  {
    country: "usa",
    slug: "applying-for-us-jobs-from-abroad",
    title: "Applying for US jobs from abroad: a practical guide",
    metaTitle: "Applying for US Jobs From Abroad: Practical Guide",
    metaDescription:
      "How to apply for US jobs from overseas: converting your resume, presenting work authorization honestly, credential evaluation, and where to check visa rules.",
    category: "International careers",
    readMinutes: 8,
    published: UPDATED,
    updated: UPDATED,
    excerpt:
      "Applying for US roles from outside the country is mostly a document and research problem, not a mystery. Here is what to change, what to check, and where the official rules actually live.",
    quickAnswer:
      "To apply for US jobs from abroad, convert your resume to American conventions, present your work-authorization situation honestly rather than hiding it, get overseas credentials evaluated if your field expects it, and target employers realistically able to hire internationally. Visa categories, eligibility and fees change, so verify current rules on USCIS.gov or travel.state.gov, or with a qualified immigration attorney, never from a resume-writing service.",
    intro:
      "Most international candidates who struggle with US applications are not short on relevant experience. They are usually sending a resume shaped by another country's conventions into a hiring process that screens fast and treats unfamiliar signals as risk: a resume that runs to four pages, a personal details block, duty lists instead of results, or no clear sense of whether the candidate can legally start work. Fix the document and be upfront about the rest, and your experience gets judged on its merits. This guide covers what to change in the resume itself, how credential evaluation works, which sectors hire internationally most often, and where to find the actual, current visa information, since that part is never a resume writer's call to make.",
    sections: [
      {
        heading: "Convert the resume before you touch anything else",
        paragraphs: [
          "Start with format, not wording. Cut to one or two pages, drop the personal details block entirely (photo, date of birth, marital status, nationality, national ID number), replace an objective statement with a short summary or drop it, and rewrite duty lists as accomplishment bullets with numbers. The US resume format guide covers this section by section, and it is worth doing properly before you touch a single job application, because every other step in this guide assumes the resume is already in US shape.",
          "Translate job titles and employer descriptions for a reader who has never heard of your company. A US hiring manager does not know a mid-size bank in Nairobi, a regional conglomerate in Colombo or an IT services firm in Pune by name, so one short line under each unfamiliar employer, naming the sector, size and client base, does real work.",
        ],
      },
      {
        heading: "Work authorization: say enough, and no more",
        paragraphs: [
          "US employers are legally barred from asking about your citizenship or immigration status on a job application before extending an offer, and a resume should not volunteer detailed visa information either. What helps is a short, accurate line if you already hold unrestricted authorization to work in the US, and, if you do not, a brief, factual note in the cover letter or an application-form field designed for it, rather than silence that reads as evasive or a resume cluttered with visa acronyms that reads as presumptuous.",
          "This is also where a resume writer's job ends and an immigration professional's begins. Visa categories, salary thresholds, sponsorship requirements and processing timelines change and vary by individual situation, and stating them incorrectly can cost a candidate real time and money. Treat this guide, and any resume-writing service, as help with the document, and treat USCIS.gov and travel.state.gov, or a licensed immigration attorney, as the source for anything about eligibility or process.",
        ],
      },
      {
        heading: "Getting overseas credentials read correctly",
        paragraphs: [
          "US employers vary widely in how closely they scrutinize a foreign degree. Many roles, especially in technology, accept an overseas degree as stated, with the institution and country named plainly. Others, particularly in regulated or credential-sensitive fields, and many university admissions and licensing bodies, ask for a formal credential evaluation showing how a foreign qualification compares to a US degree.",
          "The National Association of Credential Evaluation Services (NACES) lists member organizations that perform these evaluations to a shared standard, and its members' page is the practical starting point if an employer, licensing board or immigration process asks for one. State the qualification as awarded on your resume regardless, since converting a grade or classification yourself can read as an overclaim; let a formal evaluation, when one is actually required, do that translation.",
          "Licensed professions add a further layer. Nurses, for example, generally need to go through state board licensure and often a credentials review specific to nursing before they can practice, and accountants moving toward the US CPA credential go through jurisdiction-specific requirements coordinated through NASBA. These processes run separately from, and usually alongside, any job search, so starting them early matters more than getting the resume perfect.",
        ],
      },
      {
        heading: "Where international candidates compete most often",
        paragraphs: [
          "Technology roles, particularly software engineering, data and cloud infrastructure, hire internationally more often than most sectors, partly because the skills gap is real and partly because many employers already have experience sponsoring visas. Healthcare, especially nursing, also has a track record of international hiring, though licensure timelines there are longer and worth planning around. Finance, academic and research roles, and some engineering disciplines round out the sectors where a resume with clearly stated international experience is an asset rather than a question mark.",
          "Smaller companies and roles with no history of sponsoring are, realistically, a harder path regardless of how strong the resume is. Spending research time up front on which employers have sponsored before, which the job posting sometimes states directly, saves far more time than applying broadly and hoping.",
        ],
      },
      {
        heading: "Practical steps: LinkedIn, time zones and interviews",
        paragraphs: [
          "Rebuild your LinkedIn profile alongside your resume: same titles, same dates, US spelling, and a real location rather than a US city you do not live in. State your relocation plans and work-authorization position in the headline or About section so recruiters searching internationally can still find you, since a false location tends to unravel on the first call anyway.",
          "Early interviews are almost always by video. Confirm every time in US time zones explicitly, since a scheduling mistake reads worse from an overseas candidate than a domestic one, even though it is an easy error either way. Have your documents organized and ready, because every US employer runs a work-authorization check, typically Form I-9, before a new hire can start, and being prepared for that conversation signals seriousness rather than uncertainty.",
        ],
      },
      {
        heading: "Common mistakes that are easy to avoid",
        paragraphs: [
          "The recurring pattern among strong candidates who get passed over is small, fixable things stacking up: a resume that is still three or four pages, a personal details block left in from another market's template, vague or missing work-authorization signaling, applying broadly to companies with no realistic sponsorship path, and a LinkedIn profile that contradicts the resume in dates or titles. None of these reflect ability. All of them are quick to fix once you know to look for them.",
        ],
      },
    ],
    takeaways: [
      "Convert the resume to US format first: one or two pages, no personal details block, accomplishment bullets.",
      "State work authorization briefly and honestly; never guess at visa rules on the resume itself.",
      "Use a NACES member evaluator when a US employer, board or process actually requires credential evaluation.",
      "Target sectors and employers with a realistic track record of hiring internationally.",
      "Verify every visa or work-authorization detail on USCIS.gov or travel.state.gov, or with a licensed immigration attorney.",
    ],
    faqs: [
      {
        q: "Can I apply for US jobs from outside the United States?",
        a: "Yes, you can apply for US jobs from abroad, and many US employers interview overseas candidates by video before any relocation discussion. What matters most is whether you already have work authorization or need an employer willing to sponsor one. Focus your search on sectors and companies with a track record of hiring internationally, and make sure your resume follows US conventions so it is judged on your experience.",
      },
      {
        q: "Should I mention I need visa sponsorship on my resume?",
        a: "Not usually on the resume itself. If you already hold unrestricted work authorization, a short line near the top can say so. If you need sponsorship, address it briefly and factually in the cover letter or wherever the application asks directly, since many US application forms include a specific field for this. Employers cannot ask about immigration status on the resume, so it is not the place to volunteer detailed visa information either.",
      },
      {
        q: "Do US employers accept overseas degrees without evaluation?",
        a: "Often yes, especially in technology and other skills-driven fields, where the degree is stated as awarded with the institution and country named. Some employers, licensing boards and university or immigration processes specifically require a formal credential evaluation. The National Association of Credential Evaluation Services (NACES) lists member organizations that perform these to a shared standard when one is actually required.",
      },
      {
        q: "Where can I find accurate information about US work visas?",
        a: "Use official US government sources: USCIS.gov for employment authorization and immigration benefit processes, and travel.state.gov for visa categories handled through US embassies and consulates abroad. A resume-writing service can help with your documents, but visa eligibility, requirements and timelines change and depend on individual circumstances, so verify anything specific on those official sites or with a licensed immigration attorney.",
      },
      {
        q: "How is a US job search different from applying in the UK or Australia?",
        a: "The core skills transfer, but the document conventions differ in small, specific ways: the US uses 'resume' rather than 'CV', tends toward slightly shorter documents at the same experience level, and relies more heavily on applicant tracking systems like Workday, Greenhouse, Lever and iCIMS across companies of every size. Work-authorization norms and sponsor availability also vary by country, so treat each market's rules as its own, not a variation on one you already know.",
      },
    ],
    sources: [
      { label: "USCIS: Application for Employment Authorization (Form I-765)", url: "https://www.uscis.gov/i-765" },
      {
        label: "US Department of State: Employment Visas",
        url: "https://travel.state.gov/content/travel/en/us-visas/employment.html",
      },
      { label: "NACES: Member organizations", url: "https://www.naces.org/members" },
    ],
    relatedLinks: [
      { href: "/usa/career-advice/us-resume-format", label: "US resume format" },
      { href: "/career-advice/cv-for-a-new-market", label: "Adapting a CV for a new market" },
      { href: "/usa/international-job-seekers", label: "Applying for US jobs from abroad hub" },
      { href: "/cv-samples/international-cv", label: "International resume sample" },
      { href: "/usa/cv-writing", label: "US resume writing service" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /usa/international-job-seekers : destination hub                    */
/* ------------------------------------------------------------------ */

const ijsHub: IjsHub = {
  country: "usa",
  metaTitle: "Applying for US Jobs From Abroad: Resume Guide",
  metaDescription:
    "How to apply for US jobs from overseas: converting your resume, work authorization framing, credential evaluation and official sources to check.",
  h1: "Applying for US Jobs From Abroad",
  lead:
    "A resume built for Colombo, Mumbai, Lagos or London reads in the US as a document built for somewhere else. The format is specific, the tone is more direct, and the work-authorization question sits under every application from outside the country.",
  quickAnswer:
    "To apply for US jobs from abroad, convert your resume to American conventions (one to two pages, no photo or personal details, accomplishment bullets), state your work-authorization position honestly, and target sectors and employers with a real track record of hiring internationally. Verify visa categories and eligibility on USCIS.gov or travel.state.gov, and use a NACES member evaluator if a credential evaluation is required.",
  overview:
    "Most international applicants who do not get traction in the US are not short on relevant experience. They are sending a resume that follows another market's rules into a process that screens fast, often through software before a person ever reads it, and treats unfamiliar signals as risk rather than as difference. A photo, a four-page document, duty lists instead of results, or no clear signal about whether you can legally start work all add friction a recruiter has no time to resolve. Fix the resume and be plain about the rest, and your background gets judged on what it actually is. This page covers the resume conventions specific to a US application, what changes from a typical overseas resume, the practical steps of applying from outside the country, and where the real, current work-authorization information lives, since that part is never a resume writer's call to make.",
  cvConventions: [
    { label: "Length", value: "One page under about 10 years of experience, two pages beyond that. Academic and federal formats are longer by their own separate rules." },
    { label: "Photo", value: "None. Not a specific legal ban, but EEOC guidance tells employers not to request one, and most hiring teams avoid it to limit discrimination exposure." },
    { label: "Personal details", value: "Name, city and state or country, phone with country code, email, LinkedIn. No date of birth, marital status, religion, nationality or ID numbers." },
    { label: "Opening", value: "An optional two to three line summary aimed at the target role, not an objective statement about what you hope to gain." },
    { label: "Experience", value: "Reverse chronological, month and year dates, accomplishment bullets with measurable results." },
    { label: "Terminology and paper", value: "American English on US Letter paper. 'Resume', not 'CV', for a standard job application." },
    { label: "References", value: "Not listed, and no 'references available on request' line; employers ask for them later if needed." },
  ],
  whatChanges: [
    "Cut to one or two pages by shrinking roles older than about ten to fifteen years and removing duties any reader would assume",
    "Remove the photo and the whole personal details block, including date of birth, marital status, religion and ID numbers",
    "Replace an objective statement with a short summary, or drop it and let a strong skills section open the resume instead",
    "Add one line of context under unfamiliar employers: sector, size and the markets they serve",
    "Rewrite duty-based bullets as accomplishment bullets that end in a measurable result",
    "State overseas qualifications as awarded, and get a NACES member evaluation only when an employer, board or process actually asks for one",
    "Switch to American spelling, US Letter formatting, and a more direct, results-first tone",
  ],
  applyingFromAbroad: [
    {
      title: "Understand your likely path before you apply broadly",
      body: "Whether you already have work authorization, will need employer sponsorship, or qualify for a specific visa category shapes which employers are realistic targets. Check the current visa categories and requirements on USCIS.gov and travel.state.gov before you invest significant time, and get a licensed immigration attorney involved if your situation is not straightforward.",
    },
    {
      title: "Target sectors and employers with a track record",
      body: "Technology and healthcare, in particular, have a longer history of hiring internationally than most sectors. Some job postings state directly whether an employer sponsors visas; take that at face value and prioritize accordingly rather than applying broadly and hoping.",
    },
    {
      title: "Sort credential evaluation and licensure early",
      body: "If your field requires it, such as nursing licensure or a formal degree evaluation, start that process in parallel with your job search rather than after an offer, since these steps often take longer than the hiring process itself.",
    },
    {
      title: "Rebuild the resume and LinkedIn together",
      body: "Convert your resume to US format and make LinkedIn match it: same titles, same dates, American spelling. Keep your LinkedIn location real and state your US plans in the headline or About section.",
    },
    {
      title: "Use the cover letter or application form to address work authorization",
      body: "State your situation briefly and factually where the application actually asks for it, rather than leaving it vague or burying visa details in the resume itself, which is not the right place for either extreme.",
    },
    {
      title: "Prepare for remote interviews and the I-9 check",
      body: "Early interviews are almost always by video. Confirm every time in US time zones, and have your documents ready, because every US employer must verify a new hire's work authorization, typically through Form I-9, before the person starts.",
    },
  ],
  keySectors: [
    "Technology, software engineering and data",
    "Healthcare, especially nursing and allied health",
    "Finance and accounting",
    "Engineering, where NCEES licensure applies",
    "Academic, research and scientific roles",
    "Hospitality and specialist culinary roles",
  ],
  visaContext:
    "Unless you already have permission to work in the US, you generally need a visa category that allows employment, and most employer-led hires depend on a specific job offer and, often, employer sponsorship. Categories include various temporary employment visas administered through US embassies and consulates, and separate immigrant (permanent) pathways. Eligibility, required forms such as Form I-765 for an Employment Authorization Document, fees and processing times change and depend on individual circumstances, so rely on USCIS.gov and travel.state.gov, or a licensed immigration attorney, never on a resume-writing service. This is orientation only, not immigration advice.",
  commonMistakes: [
    "Sending a three or four page resume built for a market with different length norms",
    "Keeping the photo, date of birth and personal details block from a home-market resume or CV",
    "Leaving work-authorization status vague on an application form that specifically asks for it",
    "Applying broadly to employers with no visible history of hiring internationally",
    "Writing bullets as duties instead of accomplishments with measurable results",
    "Skipping a required credential evaluation until an employer asks, instead of starting it early",
    "Setting a false US location on LinkedIn, which tends to unravel on the first call",
  ],
  faqs: [
    {
      q: "Can I apply for US jobs from outside the United States?",
      a: "Yes, you can apply for US jobs from abroad, and many employers interview overseas candidates by video before relocation comes up. What matters most is whether you already have or can obtain work authorization. Target sectors and employers with a real track record of international hiring, and make sure your resume follows US conventions so it is judged on your experience.",
    },
    {
      q: "Should I state that I need visa sponsorship on my resume?",
      a: "Usually not directly on the resume. If you already hold unrestricted work authorization, a short line can say so. If you need sponsorship, address it briefly in the cover letter or wherever the application specifically asks, since many US application forms include a dedicated field for this. Employers cannot ask about immigration status on the resume itself.",
    },
    {
      q: "How do I find US companies that sponsor work visas?",
      a: "Start with the job posting itself, since many explicitly state whether sponsorship is available. Beyond that, sectors like technology and healthcare have a longer track record of sponsoring internationally than most, and some larger employers publish their sponsorship history in annual government filings. Recruiters who specialize in your field can also tell you quickly whether a given employer sponsors.",
    },
    {
      q: "Do US employers accept overseas degrees?",
      a: "Often yes, especially in skills-driven fields like technology, where the degree is stated as awarded. Some employers, licensing boards or immigration processes require a formal credential evaluation. The National Association of Credential Evaluation Services (NACES) lists member organizations that perform these to a shared standard, and that is the practical place to start when one is actually required.",
    },
    {
      q: "Is a US resume different from a CV used elsewhere?",
      a: "Yes. In the US the document is usually called a resume, is one to two pages for most professionals, and is built around accomplishment bullets with measurable results rather than duty lists. A longer international CV, or a CV in the US academic sense, follows different rules entirely. Sending a long, duty-focused CV to a corporate US employer is a common, avoidable mismatch.",
    },
    {
      q: "Do I need a US phone number or address to apply?",
      a: "No, you do not need a US phone number or address to apply. Give your real city and country, a phone number with the international code, a professional email and your LinkedIn URL, and add a line about your relocation timing if it is settled. Presenting a US location you do not live in usually causes more problems than it solves once a recruiter follows up.",
    },
  ],
  sources: [
    { label: "USCIS: Application for Employment Authorization (Form I-765)", url: "https://www.uscis.gov/i-765" },
    {
      label: "US Department of State: Employment Visas",
      url: "https://travel.state.gov/content/travel/en/us-visas/employment.html",
    },
    { label: "NACES: Member organizations", url: "https://www.naces.org/members" },
    { label: "EEOC: Prohibited Employment Policies/Practices", url: "https://www.eeoc.gov/prohibited-employment-policiespractices" },
  ],
};

/* ------------------------------------------------------------------ */
/* /usa/international-job-seekers/from-{origin}                        */
/* ------------------------------------------------------------------ */

const origins: OriginCorridor[] = [
  {
    country: "usa",
    origin: "sri-lanka",
    originName: "Sri Lanka",
    metaTitle: "US Resume for Sri Lankans: Applying From Sri Lanka",
    metaDescription:
      "How to turn a Sri Lankan CV into a US resume: remove the NIC and personal details, cut O/L and A/L results, drop referees, and present CIMA credentials well.",
    h1: "Applying for US Jobs From Sri Lanka",
    lead:
      "A Sri Lankan CV is built for a hiring culture that expects a photo, exam results and two named referees. A US resume expects almost none of that, and much of the conversion is about what to remove.",
    quickAnswer:
      "To apply for US jobs from Sri Lanka, rewrite your CV as a US resume: remove the photo, NIC number, date of birth, religion, marital status and referees, cut O/L and A/L results once you have work experience, and replace duty lists with accomplishment bullets. Present CA Sri Lanka, CIMA or nursing credentials accurately, and verify US work-authorization routes on USCIS.gov or travel.state.gov.",
    overview:
      "Sri Lanka sends capable candidates into US technology, healthcare and finance roles, and many already work for US clients through IT services and business process firms, or hold internationally recognized accounting qualifications. The obstacle is rarely ability. It is a CV format shaped by Sri Lankan hiring norms: a personal details block with an NIC number, subject-by-subject exam results, two non-related referees with full contact details, and a signed declaration at the end. None of that is familiar to a US reader, and a US resume has to be reorganized around evidence rather than trimmed at the edges.",
    whatToChange: [
      {
        from: "Photo and a 'Personal Details' section with NIC number, date of birth, gender, religion, nationality and marital status",
        to: "Name, city and country, phone with +94, email and LinkedIn only. No ID numbers on a document that may be forwarded by email or uploaded to a job portal",
      },
      {
        from: "G.C.E. O/L and A/L results listed subject by subject with grades",
        to: "Remove once you have a degree and a few years of experience. Recent graduates can keep one summary line on stream and results",
      },
      {
        from: "Two 'non-related referees' with names, designations, phone numbers and addresses",
        to: "No referees on the resume. US employers request them later, usually after an interview, and typically want two or three professional references provided separately",
      },
      {
        from: "An 'Objective' about seeking a challenging position in a reputed organization",
        to: "A short summary, or none at all, stating your level, specialty and target US role",
      },
      {
        from: "A closing declaration that the information is true, with date and signature",
        to: "Remove it entirely. US resumes carry no declaration or signature",
      },
      {
        from: "Long, duty-based bullet points describing responsibilities client by client or project by project",
        to: "One or two pages, accomplishment bullets with measurable results, and one line of context under each Sri Lankan employer",
      },
      {
        from: "School prefect roles, sports colours and extracurricular activities from secondary school",
        to: "Leave school activities out once you have professional experience. Keep only recent, role-relevant volunteering",
      },
      {
        from: "Language skills listed as Sinhala, Tamil and English with self-rated proficiency levels",
        to: "A brief additional-information line if relevant; English ability is already shown by the resume itself",
      },
    ],
    qualificationsNote:
      "Sri Lankan qualifications are not automatically equivalent to US credentials, and how they are read depends on the field. CA Sri Lanka, formally the Institute of Chartered Accountants of Sri Lanka, and CIMA membership are both real, verifiable qualifications, but the US CPA license is a separate, state-issued credential administered through NASBA and individual state boards; state your CA Sri Lanka or CIMA status accurately, with the year, and treat the US CPA pathway as its own process if you plan to pursue it, checking NASBA directly for current requirements. For general degree evaluation, a NACES member organization can issue a formal comparison when a US employer, university or licensing process asks for one; state your degree as awarded on the resume itself rather than guessing a US equivalent. Nurses need to go through CGFNS credential evaluation and the NCLEX exam, plus the specific state board's licensure requirements, before practicing in the US. Engineers can look at the NCEES international credentials evaluation process; Sri Lanka's engineering degree accreditation through IESL sits within the Washington Accord framework, which is a useful starting reference but not a substitute for the state-by-state US licensure process.",
    sectorsWhereCandidatesCompete: [
      "Software engineering, QA and data, often already delivering for US clients",
      "Nursing and allied health, through CGFNS and NCLEX pathways",
      "Accounting and finance, particularly candidates with CIMA or CA Sri Lanka",
      "Civil and structural engineering",
      "Business process outsourcing and IT-enabled services with US-facing experience",
      "Hospitality and specialist culinary roles",
    ],
    practicalSteps: [
      {
        title: "Strip the Sri Lankan format first",
        body: "Before touching the wording, remove the photo, personal details block, school results, referees and declaration. This alone usually recovers close to a page, which is the space you need for accomplishment evidence.",
      },
      {
        title: "Explain employers a US reader will not know",
        body: "A hiring manager in Ohio or Texas does not know a Colombo conglomerate or a regional bank by name. One line under each employer, naming sector, size and client base, especially US or European clients, fills that gap quickly.",
      },
      {
        title: "Lead with internationally verifiable credentials",
        body: "If you hold CIMA, are CA Sri Lanka qualified, or have a degree from a university a US reader would recognize, make it visible in your summary. It answers a legitimacy question before the reader has to ask it themselves.",
      },
      {
        title: "Start licensure or evaluation processes early",
        body: "Nurses should read CGFNS guidance and the relevant state board's requirements as early as possible, since these steps run on their own timeline and often take longer than the job search itself.",
      },
      {
        title: "Plan interviews around US time zones",
        body: "Sri Lanka is roughly 9.5 to 10.5 hours ahead of the US East Coast, and 12.5 to 13.5 hours ahead of the US West Coast, depending on US daylight saving time. State proposed interview times in US time explicitly and keep your phone reachable during US morning hours, which fall in your evening.",
      },
    ],
    commonMistakes: [
      "Keeping the NIC number and personal details block on a resume forwarded through email or a job portal",
      "Listing O/L results years into a professional career",
      "Including two named referees with full contact details directly on the resume",
      "Stating CIMA or CA Sri Lanka status loosely when only part of the qualification is complete",
      "Assuming a US reader recognizes Sri Lankan employers, universities or grading without explanation",
      "Treating CA Sri Lanka or CIMA as interchangeable with a US CPA license without checking the actual pathway",
    ],
    visaContext:
      "Sri Lankan nationals generally need a visa or other work authorization to work in the US. Most employer-led hires depend on a specific job offer and, often, sponsorship through a temporary employment visa category, with separate immigrant pathways for longer-term relocation. Nurses and other licensed professionals also need to satisfy the relevant licensing board separately from any visa process. Check current categories, eligibility and required forms such as Form I-765 on USCIS.gov and travel.state.gov, and use a licensed immigration attorney for anything beyond general orientation. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I include my NIC number on a resume for US jobs?",
        a: "No, never include your NIC number on a US resume. US employers do not use it, and it is unnecessary personal information on a document that may pass through several inboxes and job portals. Identity and work-authorization documents are checked separately, later in the process, through the employer's own verification.",
      },
      {
        q: "Are CIMA and CA Sri Lanka recognized by US employers?",
        a: "US employers generally recognize CIMA and CA Sri Lanka as real, credible accounting qualifications, but neither is automatically the same as a US CPA license, which is issued state by state and administered through NASBA. State your exact status and the year clearly, and treat the CPA pathway, if you want it, as its own separate process rather than an automatic conversion.",
      },
      {
        q: "Should I list my O/L and A/L results on a US resume?",
        a: "Only if you are a recent graduate, and then as a single summary line rather than subject by subject. Once you have a degree and professional experience, remove them entirely. US employers read school-leaving results only for very early-career applicants, and Sri Lankan exam grading is unfamiliar to most US recruiters, so it uses space without adding weight.",
      },
      {
        q: "Can Sri Lankan nurses work in the United States?",
        a: "Yes, Sri Lankan nurses can pursue US practice through CGFNS credential evaluation, the NCLEX licensing exam, and the specific requirements of the state board where they intend to work, alongside the relevant visa process. These steps run on their own timeline, often longer than a typical job search, so starting early matters more than a polished resume alone.",
      },
      {
        q: "How do I present US client experience gained while based in Sri Lanka?",
        a: "State it plainly in the relevant role: the sector you served, your scope of work, and that the engagement was for a US-based client, without naming confidential clients if your contract restricts that. This experience is a genuine asset for a US application and often the clearest signal that you already understand US business context.",
      },
    ],
    sources: [
      { label: "CGFNS International", url: "https://www.cgfns.org/" },
      { label: "NCLEX: Nursing licensure examination", url: "https://www.nclex.com/" },
      { label: "NCEES: International credentials evaluation", url: "https://ncees.org/" },
      { label: "NACES: Member organizations", url: "https://www.naces.org/members" },
      { label: "USCIS: Application for Employment Authorization (Form I-765)", url: "https://www.uscis.gov/i-765" },
    ],
  },
  {
    country: "usa",
    origin: "india",
    originName: "India",
    metaTitle: "US Resume for Indian Professionals: Applying From India",
    metaDescription:
      "How to convert an Indian CV for US employers: drop CTC and father's name, restructure project-style IT resumes, and present ICAI, NCEES or nursing status well.",
    h1: "Applying for US Jobs From India",
    lead:
      "Indian CVs are built for Indian job portals and IT services recruiters: CTC and notice period up top, projects listed client by client, and a personal profile with father's name. A US resume asks for a different document entirely.",
    quickAnswer:
      "To apply for US jobs from India, rebuild your CV as a US resume: remove CTC, expected salary, father's name, date of birth and the declaration; turn project-by-project IT listings into role-based accomplishment bullets; state your degree and CGPA as awarded; and cut to one or two pages. Present ICAI, NCEES or nursing status accurately, and verify US work-authorization routes on USCIS.gov or travel.state.gov.",
    overview:
      "Indian professionals compete strongly for US roles, above all in technology, healthcare, engineering and finance, and a large share already work with US clients through global delivery and IT services models. The friction is less about ability and more about format: Indian CV habits come from job portals built around CTC-based filtering, long notice periods, and IT services documents organized around client projects rather than personal contribution. A US reader finds these long, repetitive and hard to scan for impact. The fix is structural: reorganize around what you personally built or led, and remove the details that belong to the Indian hiring process rather than the US one.",
    whatToChange: [
      {
        from: "'Current CTC', 'Expected CTC' in lakhs, and 'Notice period' listed at the top of the resume",
        to: "Remove salary figures entirely. Mention notice period, if it comes up, in the cover letter or an application-form field rather than the resume header",
      },
      {
        from: "A 'Personal Details' section with father's name, date of birth, gender, marital status, nationality and languages known",
        to: "Name, city and country, phone with +91, email and LinkedIn only. Languages go in a brief additional-information line if relevant",
      },
      {
        from: "IT services format: Project 1, Project 2, each with client, duration, team size, environment and 'roles and responsibilities'",
        to: "Organize by employer and role. Summarize the technology stack once, and write accomplishment bullets that show what you personally built, improved or led across projects",
      },
      {
        from: "Class 10 and Class 12 board percentages listed alongside the degree",
        to: "Remove once you have a degree and professional experience. State the degree with institution and CGPA or percentage as awarded",
      },
      {
        from: "A 'Career Objective' and a long list of personal 'Strengths'",
        to: "A short, optional summary with your level, specialty and target US role, or none at all if your experience section carries the weight",
      },
      {
        from: "'I hereby declare that the above information is true to the best of my knowledge', with place, date and signature",
        to: "Remove it entirely. US resumes have no declaration, place, date or signature",
      },
      {
        from: "A skills block listing every tool ever touched, written for job-portal keyword filters",
        to: "A grouped, relevant skills list, with each important item proven inside your experience section",
      },
      {
        from: "Indian job titles such as 'Associate Consultant', 'Technical Lead' or 'Senior Executive' presented without context",
        to: "Keep the real title, and add scope, such as team size and reporting line, so a US reader understands the actual level",
      },
    ],
    qualificationsNote:
      "Indian degrees are familiar to many US employers, particularly in technology, but grading conventions and institution names still need clarity. State the degree as awarded, such as B.Tech or B.E., with the institution and CGPA out of 10 or the percentage awarded, rather than converting it yourself. A NACES member organization can issue a formal credential evaluation when a US employer, university or licensing process actually requires one. Chartered accountants should state ICAI membership in full and treat the US CPA license, which is issued state by state through NASBA and individual boards, as a separate qualification rather than an automatic equivalent; some professional bodies hold mutual recognition arrangements enabling pathways such as NASBA's International Qualification Examination, so check NASBA directly for which bodies currently qualify. Engineers can use the NCEES international credentials evaluation process for US licensure; Indian engineering programs accredited by the National Board of Accreditation fall within the Washington Accord framework, a useful reference point rather than a substitute for state licensure. Nurses generally need CGFNS credential evaluation and the NCLEX exam, alongside the specific state board's requirements.",
    sectorsWhereCandidatesCompete: [
      "Software engineering, cloud, data and cybersecurity",
      "IT consulting and business analysis, often with direct US client experience",
      "Nursing and allied health, through CGFNS and NCLEX pathways",
      "Finance, audit and accounting",
      "Engineering, where NCEES licensure applies",
      "Pharmaceuticals and life sciences",
    ],
    practicalSteps: [
      {
        title: "Reorganize around roles, not projects",
        body: "If you have spent years on client projects at an IT services firm, group them under your employer and title, then choose the four to six accomplishments that show the most personal responsibility. A US reader wants your trajectory, not a list of every engagement.",
      },
      {
        title: "Make US client experience visible",
        body: "If you worked for US clients, onsite or offshore, say so in the relevant role, with the sector and your scope, without naming confidential clients if your contract restricts that. It signals familiarity with US working norms directly.",
      },
      {
        title: "Remove the Indian process details",
        body: "CTC, expected salary, notice period, father's name, declaration and signature all belong to Indian hiring processes and have no place on a US resume. Removing them usually saves close to a page.",
      },
      {
        title: "Plan around your notice period honestly",
        body: "Indian notice periods often run longer than US norms. Do not put this on the resume, but be ready to state a realistic start date clearly in the cover letter and first conversation, since US employers plan hiring timelines around it.",
      },
      {
        title: "Check the applicable route early",
        body: "Read the current visa categories and eligibility on USCIS.gov and travel.state.gov before you apply broadly, since the right route depends heavily on your role, employer and individual circumstances.",
      },
      {
        title: "Schedule around the time difference",
        body: "India is roughly 9.5 to 10.5 hours ahead of the US East Coast, and 12.5 to 13.5 hours ahead of the US West Coast, depending on US daylight saving time. Offer interview windows in US time explicitly, and suggest US morning slots, which land in your evening.",
      },
    ],
    commonMistakes: [
      "Leaving CTC and expected CTC on the resume, which US employers find unusual and which can anchor a salary conversation badly",
      "Keeping the project-by-project IT services layout that runs to four or five pages",
      "Listing Class 10 and 12 percentages years into a professional career",
      "Including father's name, date of birth and a signed declaration",
      "Converting CGPA into a guessed US grade equivalent instead of stating it as awarded",
      "Keyword-stuffed skills sections copied directly from a job-portal profile",
    ],
    visaContext:
      "Indian nationals generally need a visa or other work authorization to work in the US. Most employer-led hires depend on a specific job offer and, often, sponsorship through a temporary employment visa category, with separate immigrant pathways for longer-term relocation. Requirements, eligibility and forms such as Form I-765 change and depend on individual circumstances, so check USCIS.gov and travel.state.gov directly and use a licensed immigration attorney for anything beyond general orientation. This is orientation only, not immigration advice.",
    faqs: [
      {
        q: "Should I mention my CTC on a resume for US jobs?",
        a: "No, do not put your current or expected CTC on a US resume. US employers do not expect salary on the resume, and figures in lakhs mean little to them without conversion and context. Compensation comes up later, in the application form or a conversation, usually against the relevant US salary range. Use the space for accomplishment evidence instead.",
      },
      {
        q: "How do I convert an Indian IT resume into a US resume?",
        a: "Reorganize it by employer and role rather than by client project, summarize the technology stack once, and write four to six accomplishment bullets per recent role showing what you personally built, improved or led. Remove CTC, notice period, the personal details block and declaration, then cut to one or two pages. A US reader wants your trajectory, not every engagement listed separately.",
      },
      {
        q: "Should I convert my CGPA to a US grade equivalent?",
        a: "No, state your CGPA as awarded, for example 'CGPA 8.4/10', alongside the degree and institution. Converting it yourself can read as an overclaim. If a US employer, university or licensing process needs a formal comparison, a NACES member organization can issue one to a recognized standard.",
      },
      {
        q: "Is ICAI membership the same as a US CPA license?",
        a: "No, they are separate credentials. ICAI, the Institute of Chartered Accountants of India, is India's statutory accounting body, while the US CPA license is issued state by state through NASBA and individual state boards. State your ICAI status accurately and check NASBA directly if you plan to pursue a US CPA license, since requirements and any mutual recognition pathways can change.",
      },
      {
        q: "Can Indian nurses work in the United States?",
        a: "Yes, Indian nurses can pursue US practice through CGFNS credential evaluation, the NCLEX licensing exam, and the specific requirements of the state board where they intend to work, alongside the relevant visa process. These steps run on their own timeline and are worth starting well before a job offer is in hand.",
      },
    ],
    sources: [
      { label: "CGFNS International", url: "https://www.cgfns.org/" },
      { label: "NCLEX: Nursing licensure examination", url: "https://www.nclex.com/" },
      { label: "NCEES: International credentials evaluation", url: "https://ncees.org/" },
      { label: "NASBA: CPA Exam", url: "https://nasba.org/exams/cpaexam/" },
      { label: "NACES: Member organizations", url: "https://www.naces.org/members" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* /usa/career-advice : hub intro                                      */
/* ------------------------------------------------------------------ */

const adviceHubIntro =
  "US hiring runs on speed and evidence. The resume is one or two pages built around accomplishment bullets, most applications pass through an applicant tracking system before a person reads them, and the word is 'resume', not 'CV', unless you are in academia or medicine. These guides cover the conventions specific to the United States: the standard resume format, how to decide between one page and two, and what changes when you are applying from outside the country. For universal advice on structure, ATS and interviews, the global career advice library goes deeper. If you are relocating from abroad, start with the international job seekers guide.";

export const usaBundle: CountryBundleFull = {
  country: "usa",
  market,
  adviceHubIntro,
  services,
  articles,
  ijsHub,
  origins,
};
