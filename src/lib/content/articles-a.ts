import type { Article } from "@/lib/articles";

/**
 * CAREER ADVICE ARTICLES, BATCH A
 * ------------------------------------------------------------------
 * Informational, long-form guides for /career-advice/{slug}. Pillar
 * CV guides, market conventions, ATS formatting, LinkedIn and cover
 * letters. No invented statistics; illustrative examples only.
 */

export const articlesA: Article[] = [
  {
    slug: "how-to-write-a-professional-cv",
    title: "How to write a professional CV: a step-by-step guide",
    metaTitle: "How to Write a Professional CV: Step-by-Step Guide",
    metaDescription:
      "A seven-step method for writing a professional CV from scratch: pick a target, gather evidence, structure sections, write strong bullets and test the file.",
    category: "CV writing",
    readMinutes: 8,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "Most CVs are written top to bottom, in one sitting, from memory. That is why most CVs read the same. Here is the order that actually produces a strong one, step by step.",
    quickAnswer:
      "To write a professional CV, pick one target role first, gather evidence of your results, then use a reverse-chronological structure: contact details, a short profile, work experience written as achievements, skills, and education. Write the experience before the profile, match the target market's conventions on length and personal details, and test the file for readability before sending it.",
    intro:
      "A professional CV is not a record of everything you have done. It is an argument, built for one kind of reader, that you can do a specific job well. The people who struggle to write one usually start in the wrong place: they open a template, type their name, and work downwards from memory. The method below reverses that. It starts with the target and the evidence, and leaves the parts people agonise over, like the profile, until the end, when they almost write themselves.",
    sections: [
      {
        heading: "Step 1: Decide what the CV is for before you write a word",
        paragraphs: [
          "Every decision later in this process depends on one question: what job is this CV trying to win? Not \"a job in marketing\" but a level, a function and, ideally, a market. A CV aimed at a senior finance role in London and one aimed at a mid-level analyst role in Sydney share a lot of raw material but very little final wording.",
          "Collect three to five job postings that represent where you want to go next. Read them side by side and note what repeats: the responsibilities, the tools, the qualifications, the phrases. That overlap is your brief. It tells you which parts of your history deserve space and which can shrink to a line.",
          "Pay attention to the order in which postings list requirements, too. The first three or four items are usually the ones the hiring manager actually screens on; the rest are often a wish list. If the first thing every posting mentions is supplier negotiation and you have strong evidence of it, that evidence belongs near the top of your most recent role, not buried in the fourth bullet.",
          "If you are genuinely targeting two different directions, for example project management and operations, write two CVs. A single document that tries to point both ways ends up pointing at neither, and the reader cannot tell what you want.",
        ],
      },
      {
        heading: "Step 2: Gather the raw material",
        paragraphs: [
          "Before drafting anything, build a working file of facts. This is not the CV; it is the quarry you will cut the CV from. Most people discover they have far more evidence than they remembered once they go looking for it deliberately.",
        ],
        bullets: [
          "Exact job titles, employers, locations and start and end months for every role in the last ten to fifteen years.",
          "Performance reviews, appraisal notes and any feedback emails that mention outcomes.",
          "Numbers you can stand behind: budgets managed, team size, volumes handled, revenue, savings, turnaround times, before and after figures.",
          "Projects you led or shaped, with what changed as a result.",
          "Qualifications, licences and certifications with the awarding body and year.",
          "The tools, systems and methods you use competently, not ones you touched once.",
        ],
      },
      {
        heading: "Step 3: Choose a structure that suits your history",
        paragraphs: [
          "For almost everyone, the right structure is reverse chronological: most recent role first, working backwards. Recruiters expect it, applicant tracking systems parse it reliably, and it lets the reader see your trajectory at a glance. So-called functional or skills-based CVs, which group abilities and hide the timeline, tend to make readers suspicious that something is being concealed.",
          "A standard professional CV runs in this order: contact details, a short profile, work experience, key skills, education and qualifications, then anything optional such as languages, publications or professional memberships. Graduates with little work history can move education above experience. Career changers can add a short \"relevant experience\" or projects section, but the full chronological history should still be there.",
          "Length follows from the market and your stage. Two pages is the norm in the UK, Ireland and much of Europe; some markets accept more. Decide this now so you draft to a realistic size instead of cutting half the document later.",
          "Personal details follow the market as well. In the UK, US, Canada, Ireland and Australia, a CV carries your name, phone, email, city and a LinkedIn link, and nothing else: no photo, no date of birth, no marital status. In the Gulf states a photo and nationality are commonly expected. Settle this before you choose a layout, because a photo changes how the top of the page is built.",
        ],
      },
      {
        heading: "Step 4: Write the experience section first",
        paragraphs: [
          "The work experience section is where the job is actually won, so write it before anything else. For each role, give the title, employer, location and dates on one line, then one or two sentences of context: what the organisation does, the scope of your role, who you reported to or managed. That context lets a reader from outside your company understand the scale of what follows.",
          "Then write bullets that describe outcomes, not duties. \"Responsible for supplier management\" says what the job was. \"Renegotiated terms with the three largest suppliers, reducing annual packaging costs and shortening lead times on core lines\" says what you did with it. Start each bullet with a strong verb, keep most to one or two lines, and put the result where the reader will see it.",
          "Give recent and relevant roles the most space: often four to six bullets. Roles from ten or more years ago can drop to two bullets or a single line. The reader cares far more about what you are doing now than what you did at the start of your career.",
          "If you held several roles at one employer, show that progression rather than hiding it. List the employer once, then each title with its own dates and bullets underneath. A promotion is evidence in its own right: it tells the reader that people who watched you work closely chose to give you more responsibility. Collapsing three titles into one line throws that evidence away.",
        ],
      },
      {
        heading: "Step 5: Add skills, education and supporting sections",
        paragraphs: [
          "The skills section should be short, specific and grouped: technical tools, methods, languages, industry knowledge. Every skill listed there should also be visible somewhere in your experience, because a skill with no evidence behind it carries little weight with a human reader.",
          "Education goes in reverse order too: degree, institution, year, and the classification or grade if it helps you. Once you have several years of experience, drop school results entirely. Professional qualifications often matter more than the degree in fields like accounting, project management or engineering, so give them a clear heading of their own if they are central to the role. A qualification you are currently studying for can be listed with an expected completion date, which shows momentum without overclaiming.",
          "Optional sections earn their place only when they help this application. Languages matter for international and client-facing roles. Volunteering matters when it shows leadership or fills a gap. Hobbies rarely matter at all, and \"reading, travel and socialising\" matters least.",
        ],
      },
      {
        heading: "Step 6: Write the profile last",
        paragraphs: [
          "The profile, sometimes called a personal statement or summary, is the three to five lines at the top of the page. It is the hardest part to write from nothing and the easiest to write last, because by now you know exactly what the rest of the CV proves.",
          "A strong profile states what you are, the level you operate at, and the two or three things that make you a fit for the target role, with at least one concrete fact. For example: \"Chartered management accountant with eight years in manufacturing finance, leading month-end close for a multi-site group and building the forecasting model now used for board reporting.\" It names a profession, a sector, a scope and a result.",
          "Leave out adjectives the reader cannot check: hardworking, passionate, results-driven, team player. They describe everyone, so they describe no one.",
        ],
      },
      {
        heading: "Step 7: Format, proofread and test it",
        paragraphs: [
          "Formatting should serve reading, not decoration. Use a single column, a clean sans-serif or serif font at a readable size, consistent date formats, and clear section headings. Put your contact details in the body of the document, not in a header, so software reads them reliably. Avoid photos unless the target market expects one.",
          "Then check it properly. Read it aloud once, slowly; you will hear errors you cannot see. Check every date and title against your working file. Save it as a Word document and a PDF, name the file with your name and the word CV, and paste the text into a plain text editor to confirm it reads in the right order. Finally, give it to someone who does not know your job and ask what they think you do. If their answer does not match your target, the CV is not finished.",
        ],
      },
    ],
    takeaways: [
      "Pick one target role and market before drafting anything.",
      "Build a file of facts and numbers first; the CV is cut from it.",
      "Use reverse-chronological order and write the experience section first.",
      "Describe outcomes, not duties, and give recent roles the most space.",
      "Write the profile last, with a concrete fact instead of adjectives.",
      "Test the file as plain text and have an outsider read it before sending.",
    ],
    faqs: [
      {
        q: "What should a professional CV include?",
        a: "A professional CV should include your contact details, a short profile, work experience in reverse-chronological order, key skills, and education and qualifications. Optional sections such as languages, certifications or professional memberships belong only when they support the role you are applying for. Most markets no longer expect a photo, date of birth or the line \"references available on request\".",
      },
      {
        q: "How far back should a CV go?",
        a: "A CV usually covers the last ten to fifteen years in detail. Older roles can be summarised in a single line each or grouped under a heading such as \"Earlier career\" with titles and employers only. Include older experience in full only when it is directly relevant to the job you want now, such as a qualification-defining role.",
      },
      {
        q: "Should I write my CV in first person or third person?",
        a: "Neither, strictly. The standard CV style drops the pronoun altogether, so bullets start with a verb: \"Led\", \"Reduced\", \"Built\". The profile can be written the same way or in an implied first person. Avoid third person on a CV, as in \"Sarah is a skilled engineer\", because it reads as if someone else wrote it for you.",
      },
      {
        q: "Is it better to use a CV template or write from scratch?",
        a: "Write the content from scratch and use only a simple layout. Most downloadable templates prioritise visual design: columns, icons, skill bars and graphics that applicant tracking systems read poorly. A plain, single-column Word document with clear headings is easier for both software and recruiters to read, and it is far easier to edit for each application.",
      },
    ],
    relatedArticles: ["responsibilities-into-achievements", "how-long-should-a-cv-be", "ats-friendly-cv-format"],
    relatedLinks: [
      { href: "/cv-writing", label: "Professional CV writing service" },
      { href: "/resources/cv-checklist", label: "CV checklist" },
      { href: "/resources/action-verbs", label: "Action verbs for CV bullets" },
      { href: "/cv-samples/professional-cv", label: "Professional CV sample" },
    ],
  },
  {
    slug: "cv-vs-resume",
    title: "CV vs resume: what the difference really is, market by market",
    metaTitle: "CV vs Resume: The Real Difference by Country",
    metaDescription:
      "CV and resume mean different things in the UK, US, Australia, Canada and the Gulf. What each market expects, and when an academic CV is a different document.",
    category: "International careers",
    readMinutes: 8,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "In London a CV is two pages. In Boston a CV is a thirty-page academic record. The word matters less than the market, and getting the market wrong is the real mistake.",
    quickAnswer:
      "A CV and a resume are the same kind of document in most markets, a concise summary of your work history, called a CV in the UK, Ireland and New Zealand and a resume in the US and Canada. The real exception is the academic CV, a long, complete record of research and teaching. What matters is matching the target country's length and personal-detail conventions.",
    intro:
      "Search for the difference between a CV and a resume and you will find two confident answers that contradict each other. One says a CV is long and detailed while a resume is a short summary. The other says they are the same thing with different names. Both are true, in different places. The useful question is not which word is correct, but what a reader in your target country expects to receive when they ask for one.",
    sections: [
      {
        heading: "The short version: the words change meaning at the border",
        paragraphs: [
          "CV stands for curriculum vitae, Latin for \"course of life\". Resume comes from the French for summary. In British English, CV became the everyday word for a job application document. In American English, resume took that role, and CV was kept for the long academic document used in universities, research and medicine.",
          "So when a UK recruiter asks for your CV and a US recruiter asks for your resume, they are usually asking for the same thing: a focused, achievement-led summary of your career, a couple of pages long. When a US university asks for your CV, they mean something else entirely. Most of the confusion online comes from people generalising one country's usage to the whole world.",
          "The practical rule is to use the term the job posting uses, then follow that market's conventions on length, personal details and structure. Those conventions differ more than the names do.",
        ],
      },
      {
        heading: "United States and Canada: the resume",
        paragraphs: [
          "In the US, a resume is a tight, targeted document. One page is common for early-career candidates and two pages is normal for experienced professionals; going beyond that outside senior or technical roles is rare. It opens with contact details and usually a short summary, then experience, skills and education.",
          "American resumes leave out personal details that could invite discrimination: no photo, no date of birth, no marital status, no nationality. Employers generally prefer not to receive them. Canada follows much the same conventions, with its own spelling habits, and Canadian recruiters also expect the resume to be tailored closely to each posting.",
          "The old-fashioned objective statement, a line about what you hope to find in your next role, has largely given way to a professional summary that says what you offer. US readers skim fast and expect numbers early, so the first bullet under each role tends to carry the most impressive result rather than the broadest description of the job.",
        ],
        bullets: [
          "Length: one page early career, two pages for most experienced candidates.",
          "Personal details: name, city and region, phone, email, LinkedIn. Nothing else.",
          "Style: short achievement bullets with numbers, no first-person pronouns.",
          "Date format: month and year, written consistently.",
        ],
      },
      {
        heading: "UK, Ireland and New Zealand: the CV",
        paragraphs: [
          "In the UK and Ireland, CV is the standard word for the job-search document, and two pages is the working norm. A one-page CV is fine for graduates; three pages reads as a failure to prioritise for most roles. The structure mirrors the American resume closely: profile, experience, skills, education.",
          "Personal details stay minimal here too. A UK CV does not need a photo, date of birth or nationality, and including them can look out of step with local practice. What UK readers do value is a clear personal profile at the top and evidence of outcomes in each role. References are normally taken up after an offer, so there is no need to list referees or to write \"references available on request\", which every employer already assumes.",
          "Across much of continental Europe, CV is also the everyday term. The EU's Europass CV exists as a standard template and is accepted in many public and academic contexts, but plenty of private employers prefer a conventional, well-designed CV to a form-based one. Local habits vary by country, including on photos, so check the destination rather than assuming a single European standard.",
          "New Zealand also uses \"CV\" and British spelling, but tends to accept slightly longer documents, often two to three pages, with a little more role context. Referees are commonly requested at a later stage, so many candidates simply state that referees are available.",
        ],
      },
      {
        heading: "Australia: resume in name, a fuller document in practice",
        paragraphs: [
          "Australia sits between the British and American traditions. The document is usually called a resume, although CV is widely understood, and spelling follows British conventions. Length expectations are more generous than in the UK or US: two to four pages is normal for experienced professionals, provided the extra space carries relevant detail rather than padding.",
          "Two features stand out. Referees are commonly listed on the document itself or promised on request, and they matter in the hiring process. And public sector roles often ask for responses to key selection criteria, a separate written document that addresses each requirement of the role with evidence. That is not part of the resume, but it is part of the application, and many overseas candidates miss it.",
        ],
      },
      {
        heading: "The Gulf and Asia: different expectations again",
        paragraphs: [
          "In the UAE, Qatar and Saudi Arabia, \"CV\" is the common term and the conventions differ sharply from the West. A professional photo is widely expected. Nationality, visa status, and often languages and driving licence details are standard, because employers need to know quickly whether you can be hired and relocated. Two to three pages is normal.",
          "Singapore generally uses \"resume\", though CV is understood, and favours concise documents with clear dates and precise job titles. In India, CV, resume and the older term biodata are all heard, and practice varies by employer and sector. When applying from one of these markets into the UK, US or Canada, removing the photo and personal details is often the single most important change.",
          "The reverse also holds. A lean, photo-free UK-style CV sent to a Gulf employer can look incomplete, because it leaves the recruiter without the information they need to shortlist an overseas candidate: current location, nationality, visa or residency status and notice period. Adding those details is not a formality there; it is part of what makes an application usable.",
        ],
      },
      {
        heading: "The academic CV: the one real exception",
        paragraphs: [
          "Everywhere, academia runs on a different document. An academic CV is a complete record rather than a selective summary: every degree, publication, conference presentation, grant, teaching appointment, supervision and professional service role. There is no page limit, and senior academics can run to many pages.",
          "Academic CVs are used for university posts, research roles, fellowships, grant applications and some medical and scientific positions. If you are moving from academia into industry, the academic CV has to be rebuilt, not trimmed: industry readers want outcomes and transferable skills in two pages, not a full publication list.",
          "The rebuild usually means leading with a profile that translates research into business terms, turning projects into outcomes (a dataset built, a method adopted, a grant won and delivered), moving publications to a short selected list, and naming the tools and methods an employer would search for. The reverse journey, from industry into a university post, needs the opposite: more completeness, and a clear record of teaching and research output.",
        ],
      },
      {
        heading: "Applying across markets, and what never changes",
        paragraphs: [
          "Under all the differences, the core of a good CV or resume is identical everywhere. It is targeted at a specific role. It leads with the most relevant and recent experience. It describes achievements with evidence rather than listing duties. It is easy to scan in seconds and easy for software to parse. No market rewards a generic document that tries to fit every job.",
          "That is worth remembering when the terminology debate starts to feel important. A recruiter in Toronto will not reject you for calling your document a CV, and a recruiter in Manchester will not mind the word resume. They will notice a document that ignores their market's conventions, and they will notice one that proves nothing. Get those two right and the name takes care of itself.",
          "If you are applying in more than one country, keep one master document with everything in it, then produce a version for each market. The content stays the same; the packaging changes.",
        ],
        bullets: [
          "Use the word the posting uses: CV or resume.",
          "Match that market's length norm rather than your home market's.",
          "Add or remove the photo and personal details to suit the destination.",
          "Switch spelling between British and American English consistently.",
          "Check whether the application needs a separate document, such as selection criteria or a cover letter.",
        ],
      },
    ],
    takeaways: [
      "CV and resume usually mean the same thing; the country decides the name.",
      "The UK, Ireland and New Zealand say CV; the US and Canada say resume.",
      "Australia and the Gulf accept longer documents; the Gulf expects a photo and nationality.",
      "An academic CV is a genuinely different, exhaustive document.",
      "Keep one master document and adapt the packaging for each market.",
    ],
    faqs: [
      {
        q: "Is a CV the same as a resume?",
        a: "In most job searches, yes. Both are concise documents summarising your experience, skills and education for an employer. The UK, Ireland and New Zealand call it a CV; the US and Canada call it a resume. The exception is the academic CV, which in the US and elsewhere is a long, complete record used for university, research and some medical roles.",
      },
      {
        q: "Should I send a CV or a resume to a US employer?",
        a: "Send a resume to a US employer unless the role is academic, research or medical and specifically asks for a CV. A US resume is usually one to two pages, with no photo, date of birth or nationality. Sending a longer British-style CV with personal details can make an application look unfamiliar with local practice.",
      },
      {
        q: "Do Australians use a CV or a resume?",
        a: "Australians mostly say resume, though CV is widely understood and the two are used interchangeably. Australian resumes tend to be longer than British or American ones, often two to four pages for experienced candidates, and commonly mention referees. Public sector roles may also require a separate response to key selection criteria.",
      },
      {
        q: "How long is an academic CV?",
        a: "An academic CV has no fixed length. It grows with your career because it lists every publication, grant, presentation, teaching role and supervision. Early-career researchers may have a few pages; established academics can have many more. Keep it well organised with clear headings, since readers scan it for specific sections rather than reading it through.",
      },
    ],
    relatedArticles: ["cv-for-a-new-market", "how-long-should-a-cv-be", "how-to-write-a-professional-cv"],
    relatedLinks: [
      { href: "/international-job-seekers", label: "CV conventions by market" },
      { href: "/countries", label: "Country guides" },
      { href: "/cv-writing", label: "CV and resume writing service" },
      { href: "/cv-samples/international-cv", label: "International CV sample" },
    ],
  },
  {
    slug: "how-to-list-skills-on-a-cv",
    title: "How to list skills on a CV so they actually count",
    metaTitle: "How to List Skills on a CV (With Examples)",
    metaDescription:
      "Where skills belong on a CV, how to group and word them, why skill bars and ratings backfire, and how to choose the right ones for each application.",
    category: "CV writing",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "A list of twenty skills proves nothing on its own. Skills count when they are specific, grouped, and backed by the experience below them. Here is how to list them properly.",
    quickAnswer:
      "List skills on a CV in a short, grouped section of specific hard skills, such as tools, methods, languages and qualifications, taken from the language of the job description. Then prove the most important ones inside your work experience bullets. Avoid rating bars, vague soft skills and long unsorted lists, because recruiters give weight only to skills they can see evidence for.",
    intro:
      "The skills section is the part of the CV people fill fastest and think about least. It usually becomes a column of words: communication, teamwork, Microsoft Office, leadership, problem solving. None of those lines is false, and none of them helps. Skills do two jobs on a CV. They make you findable when a recruiter searches for a capability, and they tell a human reader, at a glance, what you can walk in and do. A vague list fails at both.",
    sections: [
      {
        heading: "Why most skills sections do nothing",
        paragraphs: [
          "A recruiter reading a skills section is asking one question: can I believe this? A skill is a claim, and a claim only carries weight when something in the CV supports it. \"Stakeholder management\" in a list is an assertion. \"Ran monthly steering meetings with finance, legal and three regional directors to agree release priorities\" in a work history is evidence.",
          "The second problem is specificity. \"Computer skills\" or \"IT literate\" tells the reader nothing. \"Excel: pivot tables, Power Query, XLOOKUP, financial models\" tells them exactly what level you are at. The more precisely a skill is named, the more useful it is to the reader and the more likely it is to match a search.",
          "The third problem is volume. A list of thirty skills does not look impressive; it looks unfiltered. It suggests you could not decide what matters for this role, and it dilutes the skills that genuinely set you apart. A reader who sees twelve precise, relevant skills assumes expertise. A reader who sees thirty assumes padding.",
        ],
      },
      {
        heading: "Hard skills, soft skills, and what to leave out",
        paragraphs: [
          "Hard skills are specific, teachable and checkable: software, programming languages, analytical methods, regulations, equipment, spoken languages, certifications. These belong in the skills section, because they are exactly what recruiters search for and what hiring managers screen against.",
          "Soft skills, like communication, leadership or adaptability, matter a great deal to employers, but listing them does almost nothing. They are shown, not stated. Move them into your experience bullets and your profile, where a result can prove them. Some lines should come off entirely:",
        ],
        bullets: [
          "Skills every applicant is assumed to have, such as email, internet use or basic word processing.",
          "Personality adjectives: hardworking, motivated, passionate, detail-oriented.",
          "Tools you used once or cannot discuss confidently in an interview.",
          "Outdated software that signals an old skill set rather than a current one.",
          "Generic phrases copied from job ads without any matching experience.",
        ],
      },
      {
        heading: "Where skills belong: three places, not one",
        paragraphs: [
          "Strong CVs repeat their most important skills in three places, each doing a different job. The profile names the two or three capabilities that define you for this role. The skills section lists the full, searchable set in a scannable block. The experience section proves the important ones in context, with results.",
          "This is not repetition for its own sake. A recruiter scanning the top of the page sees the headline capabilities. A search in an applicant tracking system finds the terms in the skills block. A hiring manager reading properly finds the proof in the work history. If a skill appears in the list but nowhere else, ask whether it deserves to be there.",
          "In practice, proving a skill in the experience section means naming it inside an outcome. \"Built a Power BI dashboard that replaced four weekly spreadsheet reports for the operations team\" proves Power BI, reporting automation and an understanding of what operations managers need, all in one line. That single bullet does more for the skill than any placement in a list.",
        ],
      },
      {
        heading: "How to format the skills section",
        paragraphs: [
          "Group skills into short labelled lines rather than one long column. Grouping makes the section readable in seconds and shows the shape of your expertise. Keep it to roughly six to fifteen items for most roles, more only in technical fields where tool lists are expected. Illustrative groupings look like this:",
        ],
        bullets: [
          "Finance and reporting: IFRS, month-end close, consolidation, variance analysis, budgeting and forecasting.",
          "Systems: SAP S/4HANA, Oracle NetSuite, Power BI, advanced Excel.",
          "Data and engineering: Python, SQL, dbt, Airflow, AWS (S3, Redshift, Lambda).",
          "Languages: English (fluent), Sinhala (native), Arabic (conversational).",
          "Certifications: PMP, PRINCE2 Practitioner, CIMA.",
        ],
      },
      {
        heading: "Rating bars, stars and proficiency levels",
        paragraphs: [
          "Skill bars, dots and star ratings are common in design templates and are best avoided. They are subjective, they cannot be verified, and they invite the wrong question: if Excel is four out of five, what is missing? Many applicant tracking systems cannot read graphics at all, so the skill may vanish from the parsed record entirely.",
          "When proficiency genuinely matters, say it in words. Languages are the clearest case: native, fluent, professional working proficiency, conversational. Where a framework exists, such as the CEFR levels for European languages, use it. For technical tools, specifying what you actually do with them, as in the Excel example above, communicates level better than any rating.",
          "Be careful with words like \"expert\" and \"advanced\". They are ratings in disguise and invite the same test. An interviewer who reads \"expert in SQL\" may well ask you to write a window function on the spot. If the claim is true, name the evidence instead: the size of the databases you work with, the kind of queries you write, the reports or pipelines you built. Evidence cannot be marked down; adjectives can.",
        ],
      },
      {
        heading: "Choosing skills for a specific job",
        paragraphs: [
          "Your master CV can hold every skill you have. Each application should show the ones this job asks for, in the order it seems to care about them. Read the posting and mark every skill, tool and qualification it names, then compare them against your list. Where you have the skill, use the posting's exact wording: if it says \"stakeholder engagement\", write that rather than your own synonym such as \"relationship building\".",
          "Put the skills the posting emphasises first in each group, and cut ones that are irrelevant to this role even if they are impressive. A data scientist applying for a machine learning role does not need to list event planning. Where the posting names a skill you genuinely have but have never written down, add it and add a bullet that shows it. Where it names a skill you do not have, leave it out. Interviews test skills lists, and a claimed skill you cannot discuss costs more than a missing one.",
        ],
      },
      {
        heading: "Skills when you are starting out or changing careers",
        paragraphs: [
          "Graduates and career changers lean on the skills section more heavily, because their work history does not yet speak for the target role. That is a reason to make the section stronger, not longer. Move it higher on the page, directly under the profile, and make every item something the target job actually asks for.",
          "Then find the evidence in places other than paid work. A dissertation that involved statistical analysis in R proves R. A volunteer treasurer role proves bookkeeping and budgeting. A retail job proves stock control, cash handling and dealing with difficult customers, which matter in operations, hospitality and customer success roles. Label these sources plainly, in a projects or relevant experience section, so the reader can see where each skill was used.",
          "Career changers should also translate their language. A teacher moving into learning and development does not \"plan lessons\"; they design training content, assess learning outcomes and present to groups. The skill is the same. The vocabulary has to match the field you are entering, or the reader and the search both miss it.",
        ],
      },
    ],
    takeaways: [
      "List specific, checkable hard skills; show soft skills through results.",
      "Group skills into labelled lines and keep the section short.",
      "Repeat key skills in the profile, the skills block and the experience section.",
      "Drop rating bars; describe proficiency in words or with a recognised framework.",
      "Mirror each posting's exact terms, but only for skills you genuinely have.",
    ],
    faqs: [
      {
        q: "How many skills should I put on my CV?",
        a: "Most CVs work best with roughly six to fifteen skills in the skills section, grouped into short labelled lines. Technical roles can list more tools where employers expect detail. The number matters less than relevance: every skill should relate to the job you are applying for, and the most important ones should also appear in your work experience.",
      },
      {
        q: "Should I put soft skills on my CV?",
        a: "Show soft skills rather than listing them. Words like communication, leadership or teamwork in a skills list carry little weight because anyone can write them. Instead, prove them in your experience bullets, for example by describing a team you led, a negotiation you handled or a process you got several departments to adopt.",
      },
      {
        q: "Where should the skills section go on a CV?",
        a: "The skills section usually sits after the profile or after the work experience. Place it near the top when your skills are the main qualification, as in technical roles or career changes, and after experience when your track record is the stronger selling point. Either placement is read correctly by applicant tracking systems if the heading is standard.",
      },
      {
        q: "Should I rate my skills on my CV?",
        a: "No, avoid numerical ratings, stars and skill bars. They are subjective, cannot be checked, and many applicant tracking systems cannot read graphics, so the skill may disappear from your parsed profile. Describe proficiency in words instead, using recognised levels for languages, and show what you actually do with a tool rather than scoring yourself.",
      },
    ],
    relatedArticles: ["how-to-find-ats-keywords", "responsibilities-into-achievements", "how-to-write-a-professional-cv"],
    relatedLinks: [
      { href: "/cv-writing", label: "CV writing service" },
      { href: "/resources/action-verbs", label: "Action verbs for CV bullets" },
      { href: "/job-roles", label: "Skills and examples by job role" },
    ],
  },
  {
    slug: "how-to-explain-employment-gaps-on-a-cv",
    title: "How to explain employment gaps on a CV",
    metaTitle: "How to Explain Employment Gaps on a CV",
    metaDescription:
      "How to show a gap in your work history honestly, what wording to use for caring, health, redundancy or travel, and how to handle the question at interview.",
    category: "CV writing",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "A gap on its own rarely costs an interview. An unexplained one sometimes does. Here is how to show the time honestly, briefly, and in a way that keeps the reader moving.",
    quickAnswer:
      "To explain an employment gap on a CV, list it as a short, dated entry in your work history with a plain reason, such as \"Career break: full-time family care\" or \"Relocation and job search\". Keep it to one line, add anything useful you did during the time, and do not disclose private details. Be ready to give a calm, two-sentence explanation at interview.",
    intro:
      "Most people with a gap in their CV worry about it far more than the people reading it. Recruiters see gaps constantly: redundancies, caring responsibilities, illness, relocation, study, burnout, travel, a business that did not work out. What makes them hesitate is not the gap itself but the silence around it, because an unexplained absence invites the reader to invent a reason. The goal is to fill that silence with one honest, unremarkable line, and then move the reader on to the evidence that you can do the job.",
    sections: [
      {
        heading: "What an employer is actually worried about",
        paragraphs: [
          "When a reader notices a gap, the questions in their head are practical. Are your skills still current? Are you ready to work now? Is there something about how the last job ended that they should know? A good explanation answers the question they have, not the one you fear they have.",
          "That is why the reason matters less than the signal around it. \"Career break: full-time care for a family member, now concluded\" answers all three questions in a line: there was a clear reason, it is over, and you are available. Nobody needs more than that on the page.",
          "It also helps to remember that the CV is read alongside other applications with gaps of their own. Redundancy rounds, parental leave, long-distance moves and contract work have made uneven timelines ordinary in almost every sector. You are not trying to make the gap vanish. You are trying to make it unremarkable, so the reader spends their attention on your experience instead.",
        ],
      },
      {
        heading: "Decide whether it needs explaining at all",
        paragraphs: [
          "Short gaps between jobs, a couple of months or so, are normal and usually need nothing. Job searches take time, notice periods overlap badly, people take a break between roles. Adding an explanation to a two-month gap can draw attention to something nobody would have noticed.",
          "Longer gaps, roughly six months or more, and gaps in your recent history are worth addressing directly. Gaps from many years ago matter less, especially once they sit beneath a decade of steady work.",
          "One tactic to use carefully: showing only years rather than months and years. It can legitimately tidy a CV with many short contracts, but when it is obviously being used to hide a recent gap, experienced readers notice, and some ask for exact dates anyway. Many UK and Australian employers expect month and year as standard.",
          "A pattern of several short gaps between contracts is a different case. If you work in fixed-term, project or agency roles, group them under one heading such as \"Contract roles, 2021 to 2024\" and list each engagement beneath it. The reader then sees a contractor with a steady flow of work, not a string of unexplained breaks.",
        ],
      },
      {
        heading: "How to show a gap on the CV",
        paragraphs: [
          "The cleanest method is to give the gap its own dated entry in the work history, in the same format as a job. It keeps the timeline continuous, so the reader never has to calculate anything, and it lets you control the wording.",
          "If you are also sending a cover letter, one sentence there can do the rest of the work: \"After two years caring for a family member, I am returning to finance with my CIMA qualification completed and full availability.\" That places the gap in context before the reader reaches it, and frames it as something already resolved. Do not devote a paragraph of the letter to it; one sentence is confident, three sound anxious.",
        ],
        bullets: [
          "Use a neutral heading: \"Career break\", \"Family care\", \"Relocation\", \"Study\", \"Travel\".",
          "Add the dates in the same format as your roles.",
          "Give one line of explanation, and a second line only if it adds something useful.",
          "Include relevant activity during the break: courses, certifications, freelance work, volunteering.",
          "Do not write a paragraph. Length signals that there is something to justify.",
        ],
      },
      {
        heading: "Common reasons and how to word them",
        paragraphs: [
          "The right wording is short, factual and forward-facing. Some examples of how different situations read well on a CV:",
        ],
        bullets: [
          "Caring: \"Career break: full-time care for a family member. Returning to work with full availability.\"",
          "Parental leave: \"Career break: raising young children. Completed CIPD Level 5 during this period.\"",
          "Redundancy: \"Role made redundant following restructure. Job search and completion of AWS Solutions Architect certification.\"",
          "Relocation: \"Relocated from Colombo to Toronto. Settlement and job search.\"",
          "Travel: \"Planned travel through South America, including three months of volunteer English teaching.\"",
          "Business: \"Founded and ran a small e-commerce business, handling supplier sourcing, marketing and fulfilment.\"",
        ],
      },
      {
        heading: "Health and personal reasons: what you do not have to say",
        paragraphs: [
          "You do not have to disclose medical details, mental health, bereavement or other private matters on a CV, and in most cases you should not. \"Career break for personal reasons, now fully resolved\" or \"Health-related break, now fully fit and returning to work\" is enough. Employers in many countries are restricted in what they can ask about health, and a CV is not the place to volunteer it.",
          "What you can do is make the return clear. A line such as \"now available for full-time work\" answers the practical question without inviting a personal one. If there are adjustments you will need, the right time to discuss them is later in the process, on your terms.",
          "If you have been out for several years, look at whether employers in your field run return-to-work programmes, sometimes called returnships. They are designed for people coming back after a long break, and they treat the gap as expected rather than as something to explain. Even where no formal programme exists, a recent short course, a professional membership renewed or some part-time or freelance work shows the reader that your knowledge is current.",
        ],
      },
      {
        heading: "Handling the question at interview",
        paragraphs: [
          "If the gap comes up, give a short, calm answer in two parts: what happened, and why you are ready now. \"I took eighteen months out to care for my father after a stroke. He is now settled in care, and I have spent the last few months refreshing my systems knowledge and looking for the right role.\" Then stop, and let the interviewer move on.",
          "Rehearse the answer out loud so it comes out evenly, without apology or over-explanation. Interviewers read tone as much as content. A matter-of-fact answer suggests the gap is behind you; a defensive one suggests it is not.",
          "Application forms are the other place gaps surface, because many ask for a complete employment history with no breaks. Use the same wording there as on the CV, with the same dates. Consistency matters more than the reason: a CV that says \"relocation\" and a form that says \"study\" for the same period raises a far bigger question than either explanation would alone.",
        ],
      },
      {
        heading: "When the gap is an asset",
        paragraphs: [
          "Some gaps produce things employers value: a qualification, a language, freelance clients, a project you built, leadership of a volunteer group, a business you ran. When that is true, treat the period like a role and write bullets that show outcomes, just as you would for paid work.",
          "The test is relevance. A course directly linked to your target job strengthens the application. A long list of unrelated online certificates collected to fill space can suggest the opposite. Show what was genuinely useful, and let the rest stay as a single honest line. A gap presented with confidence and one relevant achievement often reads better than a continuous history with nothing to show for it.",
        ],
      },
    ],
    takeaways: [
      "Gaps rarely cost interviews on their own; unexplained ones sometimes do.",
      "Short gaps need nothing; longer and recent ones deserve a one-line entry.",
      "Use a neutral heading, dates, and a short, forward-facing reason.",
      "Never disclose private health or personal details on the CV.",
      "Rehearse a calm two-part interview answer: what happened, why you are ready now.",
    ],
    faqs: [
      {
        q: "How do I explain a gap in my CV?",
        a: "Add a short, dated entry to your work history with a plain reason, such as \"Career break: family care\" or \"Relocation and job search\", in the same format as your jobs. Keep it to one or two lines, mention any relevant courses or projects from that time, and make it clear you are now available for work.",
      },
      {
        q: "Is a 6-month gap on a CV bad?",
        a: "No. A six-month gap is common and rarely a problem by itself, especially after a redundancy, relocation or contract ending. It is worth a one-line explanation in your work history so the reader does not have to guess, and anything you did in that time that relates to the target role is worth including.",
      },
      {
        q: "Do I have to tell an employer why I had a career break?",
        a: "You do not have to share private details. A general reason such as \"personal reasons\" or \"health-related break, now fully resolved\" is acceptable on a CV and at interview. Employers mainly want to know that the break is over and you are ready to work, so focus your explanation on your return rather than the cause.",
      },
      {
        q: "Should I leave a job off my CV to hide a gap or a short role?",
        a: "Leaving a very short role off is sometimes reasonable if it was unrelated and brief, but do not falsify dates to hide a gap. Background checks and application forms often ask for complete employment history, and a mismatch can end an offer. An honest one-line explanation is safer and usually costs nothing.",
      },
    ],
    relatedArticles: ["how-to-write-a-professional-cv", "career-change-cv-transferable-skills", "recruiter-first-read"],
    relatedLinks: [
      { href: "/career-situations/career-break", label: "Returning after a career break" },
      { href: "/career-situations/redundancy", label: "CVs after redundancy" },
      { href: "/cv-writing", label: "CV writing service" },
    ],
  },
  {
    slug: "ats-friendly-cv-format",
    title: "ATS friendly CV format: the layout rules that matter",
    metaTitle: "ATS Friendly CV Format: Layout Rules That Matter",
    metaDescription:
      "The file type, layout, headings, fonts and contact-detail placement that applicant tracking systems read reliably, plus a five-minute test for your own CV.",
    category: "ATS and formatting",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "An ATS friendly CV is not a plain, ugly CV. It is a clean one with a small number of specific layout choices made correctly. Here is the checklist, and how to test yours.",
    quickAnswer:
      "An ATS friendly CV format uses a single-column layout, standard section headings like \"Work experience\" and \"Education\", real text rather than images or icons, a common font, and contact details in the main body instead of the page header. Save it as a text-based Word file or PDF, avoid tables and text boxes, and test it by pasting the content into a plain text editor.",
    intro:
      "Applicant tracking systems read your CV by extracting its text and sorting it into fields. If the layout confuses that extraction, your experience ends up in the wrong place or disappears, and you become harder to find in a recruiter's search. How that process works is covered in our guide to how an ATS reads your CV. This article is the practical side: the specific format choices that parse cleanly, the ones that do not, and a quick way to check your own document before you send it.",
    sections: [
      {
        heading: "Format is for the parser; content is for the person",
        paragraphs: [
          "It helps to separate two jobs. Format decides whether software can read your CV accurately. Content decides whether a human, once the CV is in front of them, wants to interview you. An ATS friendly format does nothing for weak content, and strong content can be lost in a format the parser cannot handle.",
          "The good news is that the format rules are few, and none of them require a dull document. A clean, well-spaced, single-column CV with a confident typeface looks professional to people and reads reliably to software. The problems come almost entirely from decorative templates: sidebars, graphics, icons and text boxes that look distinctive in a preview and fall apart in a parser.",
          "There is a human reason to prefer the same simplicity. Recruiters increasingly open CVs on laptops and phones, often inside the applicant tracking system's own viewer rather than in Word. A sidebar that looked elegant in the template can shrink to an unreadable strip on a small screen. A single-column document reflows cleanly wherever it is opened.",
        ],
      },
      {
        heading: "File type: Word or PDF",
        paragraphs: [
          "Most modern applicant tracking systems read both .docx and text-based PDF files well. The key phrase is text-based. A PDF exported from Word or Google Docs contains real, selectable text. A scanned document, a photo of a CV, or a PDF exported from design software with text converted to shapes contains no readable text at all.",
          "Two simple rules cover almost every case. If the posting or portal asks for a specific format, use it. If it does not, a .docx is the safest choice for older or unknown systems, and a text-based PDF is fine for most others. Check your PDF by trying to select and copy a sentence from it: if you cannot, neither can the software. Avoid older formats such as .doc, and never upload an image file as a CV.",
          "Name the file plainly, for example \"Priya-Fernando-CV.pdf\". Recruiters download hundreds of documents called \"CV-final-v3\", and a clear file name keeps yours identifiable once it leaves the system. Keep the file size small by avoiding embedded images; some portals reject large uploads without telling you why.",
        ],
      },
      {
        heading: "Layout: one column, no containers",
        paragraphs: [
          "Parsers generally read a page top to bottom and left to right. Anything that breaks that simple flow risks scrambling the order of your information. These are the layout elements most likely to cause trouble:",
        ],
        bullets: [
          "Two or three columns, which can be read straight across, mixing a skills sidebar into your job history.",
          "Tables used for layout, which may collapse into jumbled strings or be skipped.",
          "Text boxes and shapes, whose content is often ignored completely.",
          "Headers and footers, which some systems do not read at all.",
          "Icons for phone, email or location, and logos, charts or skill bars, which are images with no readable text.",
          "Photos, which are unnecessary in many markets and cannot be parsed anyway.",
        ],
      },
      {
        heading: "Section headings the parser recognises",
        paragraphs: [
          "An ATS uses your headings to decide where each section starts and what it contains. Creative headings like \"Where I've made an impact\" or \"My toolkit\" may not be recognised, so your experience might not be filed as experience. The order matters less than the wording: profile, experience, skills and education in any sensible sequence will parse, provided each heading sits on its own line in plain text, styled with bold or a larger size rather than placed inside a shape or a table cell. Use conventional wording like this:",
        ],
        bullets: [
          "Profile, Professional summary or Personal statement.",
          "Work experience, Professional experience or Employment history.",
          "Skills or Key skills.",
          "Education, and Qualifications or Certifications where relevant.",
          "Languages, Publications, Volunteering or Professional memberships as optional extras.",
        ],
      },
      {
        heading: "Fonts, bullets and dates",
        paragraphs: [
          "Use a widely available font such as Calibri, Arial, Aptos, Georgia or Garamond, at a readable body size, usually 10 to 12 points. Unusual downloaded fonts can be substituted or misread, and very small text makes the document hard to read for people as well as software.",
          "Keep bullets simple: standard round bullets or hyphens, not arrows, checkmarks or custom symbols that can turn into stray characters. Write dates in one consistent format, such as \"March 2022 to present\" or \"03/2022 to 06/2024\", placed on the same line as the job title or directly below it. Parsers use dates to calculate your experience, and inconsistent formats can produce odd results.",
          "Keep each job's details in a predictable order: title, employer, location, dates, then bullets. Consistency across every role makes both parsing and human skimming easier.",
          "Colour and emphasis are safe in moderation. Bold job titles, a single accent colour for headings and generous white space all survive parsing, because the underlying text is unchanged. What does not survive is meaning carried only by design: a timeline drawn as a graphic, a skill shown as a filled circle, a heading that exists only as a coloured bar. If information matters, it has to exist as words on the page.",
          "Page margins and spacing are a human concern rather than a parsing one. Shrinking margins to squeeze in an extra role makes the page feel crowded and does nothing for the software. If the content does not fit, cut content.",
        ],
      },
      {
        heading: "Contact details and the header problem",
        paragraphs: [
          "Many templates put your name and contact details inside the document header, the area Word repeats at the top of every page. Some applicant tracking systems skip headers entirely, which means your email and phone number may not reach the candidate record. Put your name and contact details as normal text at the top of the page body instead. It looks identical to a reader.",
          "Keep the details simple: name, phone number with country code if you are applying abroad, a professional email, city and country, and a LinkedIn URL. Write them as text, not as icons, and avoid putting them in a table or a coloured sidebar.",
          "Links deserve a quick check too. Write your LinkedIn URL out in full, or at least as \"linkedin.com/in/yourname\", rather than hiding it behind the word \"LinkedIn\". A hyperlink may survive in the file, but the parsed record and any printed copy only keep the visible text. The same applies to portfolio or GitHub links in creative and technical roles.",
        ],
      },
      {
        heading: "Test your own CV in five minutes",
        paragraphs: [
          "You do not need special software to catch the most common problems. These checks reveal most formatting issues before an employer's system does:",
        ],
        bullets: [
          "Select all the text and paste it into a plain text editor. Check that it reads in the right order, with nothing missing.",
          "Confirm your name, email and phone number appear in the pasted text.",
          "Try to copy a sentence from your PDF. If you cannot select text, rebuild the file.",
          "Look for any information that exists only in an image, icon or graphic.",
          "When a portal pre-fills a form from your CV, compare the result with your document and note what went wrong.",
        ],
      },
    ],
    takeaways: [
      "Format decides whether software can read your CV; content decides the interview.",
      "Use a single column, no tables, text boxes, icons or graphics.",
      "Send a .docx or text-based PDF, following any format the posting requests.",
      "Use standard section headings and a consistent date format.",
      "Put contact details in the body, not the header, and test with a plain text paste.",
    ],
    faqs: [
      {
        q: "Is a PDF or Word CV better for ATS?",
        a: "Both work with most modern applicant tracking systems, as long as the PDF is text-based rather than scanned or exported from design software. If the posting asks for a specific format, use it. If not, a .docx is the safest option for older or unknown systems. Check a PDF by selecting and copying a sentence from it.",
      },
      {
        q: "Can an ATS read a two-column CV?",
        a: "Some systems handle two columns correctly, but many read straight across the page, mixing sidebar content into your work history or skipping it. Since you rarely know which system an employer uses, a single-column layout is the reliable choice. It also reads well on screen, where most recruiters first see your CV.",
      },
      {
        q: "Do ATS friendly CVs have to be plain and boring?",
        a: "No. An ATS friendly CV avoids a few specific elements, such as columns, tables, text boxes, icons and graphics, but can still look polished. Good typography, clear spacing, bold job titles and a single accent colour for headings are all parser-safe. The aim is a clean, well-structured document, not a stripped one.",
      },
      {
        q: "What font is best for an ATS friendly CV?",
        a: "Any widely installed font works well for an ATS, such as Calibri, Arial, Aptos, Georgia or Garamond, at 10 to 12 points for body text. Avoid unusual downloaded fonts, which can be substituted or misread, and decorative symbols used as bullets. The font matters far less than the layout, which should be a single column with standard headings.",
      },
    ],
    relatedArticles: ["how-ats-reads-your-cv", "how-to-find-ats-keywords", "how-long-should-a-cv-be"],
    relatedLinks: [
      { href: "/resources/ats-check", label: "ATS check" },
      { href: "/cv-samples/ats-cv", label: "ATS friendly CV sample" },
      { href: "/cv-writing", label: "ATS friendly CV writing service" },
    ],
  },
  {
    slug: "how-to-find-ats-keywords",
    title: "How to find the right ATS keywords for your CV",
    metaTitle: "How to Find ATS Keywords for Your CV",
    metaDescription:
      "A practical method for pulling the right keywords from job descriptions, spotting the ones that matter most, and placing them on your CV without stuffing.",
    category: "ATS and formatting",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "The keywords that matter are already written down for you, in the job posting. The skill is knowing which ones carry weight, and where on the CV to put them.",
    quickAnswer:
      "To find ATS keywords, compare three to five job postings for your target role and list the job titles, hard skills, tools, qualifications and industry terms that repeat, especially those in the requirements section. Use the posting's exact wording on your CV, in the profile, skills section and work experience bullets, but only for skills you genuinely have and can back up with evidence.",
    intro:
      "Keywords are the words a recruiter types into an applicant tracking system when they search for candidates, and the words a hiring manager scans for when they open your CV. You do not need to guess them. Employers publish them every time they write a job posting. The work is in reading those postings properly, separating the terms that decide shortlists from the ones that fill space, and then placing them on your CV where both the software and the reader will find them in context.",
    sections: [
      {
        heading: "What actually counts as a keyword",
        paragraphs: [
          "A keyword is any specific term a recruiter might search for or screen against. In practice, the ones that matter are concrete and checkable, not the adjectives that surround them in a job ad. \"Dynamic self-starter\" is not a keyword. \"Accounts payable\", \"Salesforce\" and \"ACCA\" are.",
          "Soft skills named in a posting, such as communication or leadership, are worth noting but rarely searched for on their own. Treat them as themes to prove in your bullets rather than terms to list. The categories below are where searchable keywords live:",
        ],
        bullets: [
          "Job titles: the exact title of the role and common variants of it.",
          "Hard skills and methods: financial modelling, root cause analysis, agile delivery, SEO.",
          "Tools and systems: named software, platforms, programming languages, equipment.",
          "Qualifications and licences: degrees, professional designations, certifications, registrations.",
          "Industry and domain terms: regulations, standards, product types, market sectors.",
          "Scope signals: budget ownership, team leadership, stakeholder levels, regions covered.",
        ],
      },
      {
        heading: "Read the job description three times",
        paragraphs: [
          "The first read is for understanding: what is this job, at what level, and what problem is the employer hiring to solve? The second read is for extraction. Copy every concrete term into a list, grouped by the categories above. The third read is for weighting. Mark which terms appear in the essential requirements, which appear more than once, and which appear in the job title or the opening summary.",
          "Terms that appear in the requirements section and more than once are almost certainly screening criteria. Terms that appear only in a long \"nice to have\" list are secondary. Terms in the company's marketing paragraph are usually not keywords at all. This weighting stops you treating every word in the posting as equally important, which is how CVs end up stuffed with irrelevant phrases.",
          "Pay attention to the job title itself. Recruiters often search by title first, and if your current title is internal jargon, such as \"Associate II, Client Solutions\", the reader may not connect it to the role. You cannot change your official title, but you can clarify it: \"Client Solutions Associate (Account Management)\" keeps the truth and adds the searchable term.",
        ],
      },
      {
        heading: "Build a keyword list from several postings",
        paragraphs: [
          "One posting tells you what one employer wants. Three to five postings for the same kind of role tell you what the market wants. Put your extracted lists side by side and look for overlap. The terms that appear in most of them are the core vocabulary of the role, and they belong on your master CV whether or not you are applying to a specific posting.",
          "This comparison also shows you variation. One employer says \"people management\", another \"line management\", a third \"team leadership\". If all three describe what you do, you now know which phrasings are common, and you can make sure the most frequent one appears on your CV while the others appear naturally in your bullets.",
          "Keep the list in a document you update as you apply. After a dozen applications you will have a clear picture of the language your target market uses, and tailoring each CV becomes a matter of minutes rather than hours.",
          "Note the gaps as well. If a term appears in nearly every posting and you genuinely lack it, that is useful information for your development plan, and a warning to focus your applications on roles where your strengths line up with the essentials.",
        ],
      },
      {
        heading: "Other places to find the right language",
        paragraphs: [
          "Job postings are the main source, but not the only one. When postings are thin or badly written, or when you are building a master CV for a role rather than a single application, these sources fill the gaps. Profiles of people who already hold the job are particularly useful, because they show which terms working professionals, and the recruiters who hire them, actually use day to day:",
        ],
        bullets: [
          "LinkedIn profiles of people already doing the role at your target companies: note the skills and terms they use.",
          "The employer's careers pages and annual reports, which reveal priorities, values and internal vocabulary.",
          "Professional body competency frameworks, which describe skills in the language the profession recognises.",
          "Recruitment agency role descriptions for the same title, which are often more precise than employer postings.",
          "Industry publications and conference agendas, which show which tools and methods are current.",
        ],
      },
      {
        heading: "Where to place keywords on your CV",
        paragraphs: [
          "Keywords work hardest when they appear in context. Put the two or three most important terms in your profile, where a human reader sees them first. List the searchable set, the tools, methods and qualifications, in your skills section. Then use the key terms again inside your experience bullets, attached to results.",
          "That last placement matters most. A keyword in a skills list tells an ATS you claim the skill. The same keyword in a bullet, such as \"Led the migration of month-end reporting to Power BI, cutting preparation time for the finance team\", tells a human you have used it to achieve something. Recruiters who find you through a search will read your experience next, and that is where the keyword needs to be credible.",
          "Qualifications need care in placement. If a posting lists a certification as essential, make it visible in two places: next to your name or in the profile, and in the education or certifications section. A reader scanning for a mandatory credential should not have to hunt for it on page two.",
          "Some systems also consider how recently a skill appears in your history. A skill mentioned only in a role from ten years ago may be read as out of date, so where it is true, show key skills in your current or most recent role.",
        ],
      },
      {
        heading: "Exact wording, abbreviations and variants",
        paragraphs: [
          "Use the exact form the posting uses. Many systems and many recruiters match literally, so \"project management\" and \"managing projects\" may not be treated as the same thing. Where a term has a common abbreviation, include both the first time: \"Customer Relationship Management (CRM)\", \"Certified Public Accountant (CPA)\", \"search engine optimisation (SEO)\". After that, either form is fine.",
          "Watch for spelling differences between markets too. \"Optimisation\" and \"optimization\", \"programme\" and \"program\" can both appear depending on the employer's location. Follow the spelling of the market you are applying into, and if the posting uses a particular spelling for a key term, mirror it.",
        ],
      },
      {
        heading: "What not to do with keywords",
        paragraphs: [
          "Keyword tricks tend to backfire, because a human reads the CV after the software finds it. The goal of keyword work is to describe your real experience in the words the employer uses, not to manufacture a match. These are the common ones to avoid:",
        ],
        bullets: [
          "Pasting the whole job description into the CV, visibly or in white text. Recruiters see it in the parsed text, and it reads as dishonest.",
          "Listing skills you do not have because the posting mentions them. Interviews test them.",
          "Repeating the same term many times in one section. It reads as padding and adds nothing.",
          "Replacing your real job titles with the posting's title. Titles are checked in references.",
          "Chasing every term in a long wish list instead of proving the essentials well.",
        ],
      },
    ],
    takeaways: [
      "Keywords are concrete, checkable terms: titles, skills, tools, qualifications, domain terms.",
      "Weight them: terms in the requirements and repeated terms matter most.",
      "Compare three to five postings to find the core vocabulary of your target role.",
      "Place keywords in the profile, skills section and, most importantly, in achievement bullets.",
      "Use exact wording and abbreviations, and never claim a keyword you cannot back up.",
    ],
    faqs: [
      {
        q: "How do I find keywords for my CV?",
        a: "Take three to five job postings for your target role and list the job titles, skills, tools, qualifications and industry terms that repeat, especially in the requirements section. Those repeated terms are your core keywords. Add them to your profile, skills section and experience bullets using the postings' exact wording, where they genuinely describe your experience.",
      },
      {
        q: "How many keywords should a CV have?",
        a: "There is no fixed number. Aim to include the main terms from the job's essential requirements, usually somewhere between a handful and a couple of dozen depending on the role, each appearing naturally in context. Coverage of the essential terms matters far more than volume, and repeating a keyword many times does not help a human reader.",
      },
      {
        q: "Is it OK to copy words from the job description into my CV?",
        a: "Yes, for specific skills, tools and terms that genuinely describe your experience. Mirroring the employer's wording helps both applicant tracking system searches and human readers. Do not copy whole sentences or paste the full description into your CV, and never add skills you do not have, because interviews and reference checks will expose them.",
      },
      {
        q: "Does hiding keywords in white text work?",
        a: "No. Hidden white text shows up in the parsed version of your CV that recruiters see inside the applicant tracking system, and it looks like an attempt to game the process. It can get an application discarded outright. The keywords that work are the ones visible in your experience, attached to real results.",
      },
    ],
    relatedArticles: ["how-ats-reads-your-cv", "ats-friendly-cv-format", "how-to-tailor-a-cv-to-a-job-description"],
    relatedLinks: [
      { href: "/resources/ats-check", label: "ATS check" },
      { href: "/job-roles", label: "Keywords and examples by job role" },
      { href: "/cv-writing", label: "ATS friendly CV writing service" },
    ],
  },
  {
    slug: "linkedin-headline-guide",
    title: "How to write a LinkedIn headline that gets you found",
    metaTitle: "How to Write a LinkedIn Headline (With Examples)",
    metaDescription:
      "How to use LinkedIn's 220-character headline to appear in recruiter searches and earn the click, with a simple formula and examples for every career stage.",
    category: "LinkedIn",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "Your headline travels further than any other part of your profile. It appears in search, in comments and in every invitation you send. Here is how to make it work.",
    quickAnswer:
      "A strong LinkedIn headline states the role you do or want, your specialism, and one piece of proof or value, using the words recruiters search for. LinkedIn allows up to 220 characters, but headlines are cut off in search results, comments and on mobile, so put your target role and most important keywords first.",
    intro:
      "The headline is the line of text under your name on LinkedIn. Many people never change it, so it defaults to their current job title and employer. That wastes the most visible real estate on the platform. Your headline appears next to your name in search results, in the \"people you may know\" suggestions, beside every comment you write and in every connection request you send. It is how recruiters decide whether to click on your profile at all. Writing it well is one of the highest-return changes you can make on LinkedIn.",
    sections: [
      {
        heading: "What the headline actually does",
        paragraphs: [
          "The headline does two jobs at once. First, it helps you get found. LinkedIn search considers the words in your headline, so a recruiter searching for \"supply chain analyst\" or \"Python developer\" is more likely to find profiles that use those terms. Second, it earns the click. In a list of search results, the headline is often the only thing that separates your profile from the ten above and below it.",
          "Most people write for neither job. \"Seeking new opportunities\" is not searchable and gives no reason to click. \"Manager at ABC Ltd\" is searchable only for a vague title and tells the reader nothing about what you are good at. A strong headline fixes both problems in one line.",
          "It also sets the frame for everything else a visitor reads. Someone who arrives at your profile having read \"Customer Success Lead | SaaS Onboarding and Retention\" reads your experience looking for evidence of onboarding and retention. A vague headline leaves them to work out what you are about on their own, and most will not bother.",
        ],
      },
      {
        heading: "The 220-character limit, and the part people actually see",
        paragraphs: [
          "LinkedIn currently allows up to 220 characters in the headline. That is enough for a role, a specialism, a few keywords and a short statement of value. It is not a reason to use every character.",
          "Emojis and decorative symbols deserve caution. One can add personality in a creative field, but they take up visible space, are not searched for, and can display oddly on some devices. If you use one, put it after the words that matter, never before them.",
          "Headlines are truncated in many places. In search results, in comment threads and on mobile, readers often see only the opening words before the text is cut off. The first part of your headline therefore has to work on its own. Put the role and the most important keyword at the start, and treat everything after that as a bonus for readers who open your profile.",
          "A useful test: cover everything after the first 60 characters of your headline and read what is left. If that fragment tells a recruiter what you do and at what level, the headline is well ordered. If it opens with a slogan or a string of emojis, the most visible part of your profile is doing nothing.",
        ],
      },
      {
        heading: "A simple formula that works",
        paragraphs: [
          "Most effective headlines follow the same basic structure, adjusted for the person's field and stage. Separators such as a vertical bar keep the parts readable, and plain words beat symbols. You do not need every part; a role, a specialism and two keywords already beat most headlines on the platform. Build yours from these parts, in this order:",
        ],
        bullets: [
          "Role: the job title you have or want, in the words recruiters search for.",
          "Specialism: the niche, sector or type of work that sets you apart within that role.",
          "Keywords: two or three core skills, tools or qualifications.",
          "Proof or value: a short result, credential or outcome you deliver.",
          "Optional context: location or relocation plans, if they matter to your search.",
        ],
      },
      {
        heading: "Examples by career stage",
        paragraphs: [
          "These are illustrative examples showing how the formula flexes. Use them as patterns, not copy, and replace every element with something true and specific to you. Notice that each one leads with a searchable title, and that the value statement is short and concrete rather than a slogan:",
        ],
        bullets: [
          "Graduate: \"Graduate Civil Engineer | Structural Design, AutoCAD, Revit | MEng, University of Leeds\"",
          "Mid-career: \"Financial Analyst | FP&A, Forecasting and Power BI | Building reporting that finance teams actually use\"",
          "Technical: \"Senior DevOps Engineer | AWS, Kubernetes, Terraform | Reliable platforms for fintech teams\"",
          "Senior leader: \"Supply Chain Director | Multi-site Operations and Procurement | Leading global sourcing for consumer goods\"",
          "Career changer: \"Data Analyst | SQL, Python, Tableau | Former teacher turning school data into decisions\"",
          "Relocating: \"Registered Nurse (Critical Care) | ICU and Emergency | Relocating to Auckland, 2027\"",
        ],
      },
      {
        heading: "Headline mistakes that cost you visibility",
        paragraphs: [
          "Some patterns are common enough to call out, because they quietly make a profile harder to find or less likely to be opened. Most of them come from trying to sound impressive rather than trying to be understood, and recruiters searching quickly reward the second:",
        ],
        bullets: [
          "Leaving the default \"Title at Company\", which says nothing about your strengths.",
          "Leading with \"Unemployed\" or \"Looking for work\", which wastes the most visible words.",
          "Clever titles like \"Growth Ninja\" or \"Chief Problem Solver\" that nobody searches for.",
          "Strings of buzzwords: passionate, innovative, visionary, results-driven.",
          "Keyword lists with no structure, which read as spam to people.",
          "Headlines that contradict the rest of the profile, such as claiming a level the experience does not show.",
        ],
      },
      {
        heading: "Job seeking openly versus quietly",
        paragraphs: [
          "If you are between roles, it is fine to signal that you are available, but put the signal after the value, not instead of it. \"Product Manager | B2B SaaS and Payments | Open to new roles\" keeps you searchable and makes your status clear. \"Open to work\" on its own does neither.",
          "If you are employed and searching discreetly, keep the headline focused on your expertise, which is what attracts recruiters anyway, and use LinkedIn's Open to Work settings, which can be restricted so that only recruiters see your status. A headline announcing a job search is visible to your current employer and colleagues.",
          "Either way, review the headline whenever your target changes. A headline written for your last search may be pointing recruiters at a job you no longer want. Changing it is quick, so treat it as a working tool: if the roles you are applying for shift from \"HR Business Partner\" to \"People Operations Manager\", the headline should shift with them.",
        ],
      },
      {
        heading: "Make the rest of the profile back it up",
        paragraphs: [
          "The headline makes a promise that the rest of your profile has to keep. A recruiter who clicks on \"Senior DevOps Engineer | AWS, Kubernetes\" expects to see those skills in your experience entries, your skills section and ideally your About section. If they are missing, the headline looks inflated and the recruiter moves on.",
          "So write the headline first, then check the profile against it. The same keywords should appear in your current role, your skills list and your About section, and your job titles should support the level you claim. Consistency is what turns a click into a message.",
          "Check the profile photo and banner at the same time. They sit right next to the headline in most views, and a clear, current photo makes a profile noticeably more approachable. The banner is optional, but a simple image related to your field is better than the default.",
        ],
      },
    ],
    takeaways: [
      "The headline decides whether you appear in search and whether you get the click.",
      "LinkedIn allows 220 characters, but the opening words carry the weight.",
      "Use the formula: role, specialism, keywords, proof, optional location.",
      "Avoid defaults, clever titles, buzzwords and \"unemployed\".",
      "Keep your profile consistent with the headline so the click turns into contact.",
    ],
    faqs: [
      {
        q: "What is the character limit for a LinkedIn headline?",
        a: "LinkedIn currently allows up to 220 characters in a profile headline. Only the first part is visible in many places, such as search results, comments and the mobile app, so place your job title and main keywords at the beginning. A focused headline that uses part of the limit well is better than one filled to 220 characters with buzzwords.",
      },
      {
        q: "What should I put in my LinkedIn headline if I am unemployed?",
        a: "Lead with the role you are targeting and your specialism, not your employment status. For example: \"Marketing Manager | B2B Demand Generation and HubSpot | Open to new roles\". This keeps you visible in recruiter searches for that title. Avoid headlines that say only \"Unemployed\" or \"Seeking opportunities\", because nobody searches for those words.",
      },
      {
        q: "Should my LinkedIn headline be my job title?",
        a: "Your job title should usually be part of the headline, but not all of it. A title alone does not say what you specialise in or why someone should contact you. Start with the title, or the title you are targeting, then add your specialism, two or three core skills and a short statement of value or proof.",
      },
      {
        q: "How often should I update my LinkedIn headline?",
        a: "Update your headline whenever your target role, specialism or location changes, and review it at least every few months during an active job search. Small changes, such as swapping a keyword to match the roles you are applying for, can change which searches you appear in. Keep it consistent with the rest of your profile each time.",
      },
    ],
    sources: [
      {
        label: "LinkedIn Help: Edit your headline",
        url: "https://www.linkedin.com/help/linkedin/answer/a542926/edit-your-headline",
      },
    ],
    relatedArticles: ["linkedin-about-section-guide", "linkedin-for-international-job-search", "how-to-find-ats-keywords"],
    relatedLinks: [
      { href: "/linkedin-optimisation", label: "LinkedIn profile optimisation" },
      { href: "/resources/linkedin-checklist", label: "LinkedIn profile checklist" },
      { href: "/career-advice/linkedin", label: "More LinkedIn guides" },
    ],
  },
  {
    slug: "linkedin-about-section-guide",
    title: "How to write a LinkedIn About section people read to the end",
    metaTitle: "How to Write a LinkedIn About Section That Works",
    metaDescription:
      "What to put in your LinkedIn About section, how to write the lines before \"see more\", and a structure that turns profile visitors into recruiter messages.",
    category: "LinkedIn",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "Your About section is the only part of LinkedIn written in your own voice. Most people fill it with a CV profile. Here is how to write one that sounds like a person and reads like proof.",
    quickAnswer:
      "A strong LinkedIn About section opens with two lines that say what you do and for whom, because only the start shows before \"see more\". Follow with your specialism, two or three concrete results, the skills and tools recruiters search for, and a short line on what you are looking for or how to contact you. Write in first person and keep it readable.",
    intro:
      "The About section is the summary near the top of your LinkedIn profile. It is the one place on the platform where you can explain, in your own words, what you do, how you do it and why someone should talk to you. It is also where many profiles go quiet: left blank, filled with a pasted CV profile written in the third person, or stuffed with adjectives. A good About section does three things. It hooks the reader in the opening lines, it proves the claims your headline makes, and it tells the right people what to do next.",
    sections: [
      {
        heading: "What the About section is for",
        paragraphs: [
          "Your headline gets the click. Your experience entries record what you did in each job. The About section connects them into a story: the thread that runs through your career, what you are known for, and where you are heading. It is the part of the profile that answers the question a recruiter or hiring manager has after reading your headline: \"so what is this person actually like to work with, and are they right for us?\"",
          "It also works as searchable text. LinkedIn search reads the words on your profile, so an About section that naturally includes your core skills, tools and sector terms helps you appear in the right searches. The emphasis is on naturally. A readable paragraph that mentions your key skills in context will serve you better than a block of keywords.",
          "For people with an unusual path, the About section matters even more. A career changer, a returner or someone with roles in several countries can use it to explain the logic that the experience section, listed job by job, cannot. Without that explanation, a recruiter sees a set of unconnected roles; with it, they see a direction.",
        ],
      },
      {
        heading: "The opening lines before \"see more\"",
        paragraphs: [
          "Only the first two or three lines of your About section appear on your profile before the reader has to click \"see more\", and on mobile the visible portion is shorter still. Most visitors never click. Those opening lines are therefore the real About section for the majority of people who see it.",
          "Use them to say what you do, for whom, and what makes you good at it. Avoid openings that waste the space: \"Welcome to my profile\", \"I am a passionate and dedicated professional\", or a quotation from someone famous. Compare \"I help logistics companies cut delivery costs by redesigning their route planning and warehouse operations\" with \"Experienced professional with a demonstrated history of working in the logistics industry\". The first tells the reader something specific; the second could belong to anyone.",
          "Write several versions of the opening before you settle on one. Read each as if you were a recruiter scrolling past fifty profiles, and keep the version that would make you stop. It should still make sense if the reader sees nothing else.",
        ],
      },
      {
        heading: "First person, and the voice question",
        paragraphs: [
          "Write your About section in the first person. Third-person summaries, such as \"Priya is a results-oriented leader\", read as if a marketing department wrote them, which creates distance on a platform built around individual connection. First person sounds like you are talking directly to the reader, which is the point of the section.",
          "That does not mean casual. The right tone is the one you would use when introducing yourself to a senior person at an industry event: confident, clear, specific, and free of jargon that only your current employer would understand. Short paragraphs and plain sentences read far better on screen than dense blocks of text. A line break between ideas costs nothing and makes the section much easier to scan.",
        ],
      },
      {
        heading: "A structure that works for most people",
        paragraphs: [
          "There is no single template, but most strong About sections contain the same elements in roughly this order. Adjust the balance to your field; a designer's About section will read differently from an auditor's, but both benefit from the same bones. The proof is the part most people skip, and it is the part that separates a credible profile from a confident one:",
        ],
        bullets: [
          "The hook: one or two lines on what you do, for whom, and the value you create.",
          "Your specialism: the kinds of problems, sectors or projects you know best.",
          "Proof: two or three concrete results, written briefly, with numbers where you have them.",
          "How you work: a sentence or two on your approach, the part a CV cannot show.",
          "Skills and tools: the core terms recruiters search for, in a sentence or short list.",
          "The call to action: what you are open to and how to reach you.",
        ],
      },
      {
        heading: "What to leave out",
        paragraphs: [
          "The About section is not your CV, and repeating your experience entries in paragraph form wastes it. Leave the job-by-job detail to the experience section and use the About section for the thread that ties it together.",
          "Cut the adjectives the reader cannot check: hardworking, passionate, dynamic, innovative, dedicated. Leave out anything you would not want a current employer to see, such as complaints about past roles or a detailed account of why you are leaving. Personal details that have nothing to do with work, such as your full life story or your date of birth, add length without adding reasons to contact you. A line about an interest is fine when it says something genuine about you, but keep it brief.",
          "Be careful with confidential detail as well. Client names, internal figures and unreleased projects that are fine in a private CV may not be appropriate on a public profile. Describe the scale and the outcome without the specifics your employer would not want published.",
        ],
      },
      {
        heading: "Length and the 2,600-character limit",
        paragraphs: [
          "LinkedIn allows up to 2,600 characters in the About section, which is several short paragraphs. You do not have to use it all, but a two-line About section wastes a strong opportunity to be found and to be understood. For most professionals, a few focused paragraphs that cover the structure above are enough, readable in under a minute.",
          "If you are near the limit, cut repetition before you cut substance. Summaries of jobs already described below, generic statements about teamwork and long lists of every tool you have ever used are the first things to go. What should stay is the hook, the proof and the specific skills.",
        ],
      },
      {
        heading: "The call to action, and keeping it current",
        paragraphs: [
          "End with a clear line that tells the right reader what to do. If you are job searching openly: \"I am currently open to senior analyst roles in financial services in London or remote. The best way to reach me is a message here.\" If you are employed and not openly searching, keep it general: \"Always happy to talk about data engineering, platform migrations and building analytics teams.\" A professional email address is fine to include if you want contact outside LinkedIn.",
          "Revisit the About section whenever your direction changes, and at least once a year. It is easy to forget about once written, and an About section describing the job you had two roles ago tells recruiters you are not paying attention to your own profile.",
        ],
      },
    ],
    takeaways: [
      "The opening two or three lines do most of the work; say what you do and for whom.",
      "Write in first person, in short paragraphs, in a confident professional voice.",
      "Use a structure: hook, specialism, proof, approach, skills, call to action.",
      "Do not paste your CV profile or repeat your experience entries.",
      "Use enough of the 2,600 characters to prove your claims, and keep it current.",
    ],
    faqs: [
      {
        q: "What should I write in my LinkedIn About section?",
        a: "Start with one or two lines on what you do and for whom, then describe your specialism, two or three concrete results, how you work, and the core skills recruiters search for. Finish with what you are open to and how to contact you. Write in first person, keep paragraphs short, and avoid repeating your job history.",
      },
      {
        q: "How long should a LinkedIn About section be?",
        a: "LinkedIn allows up to 2,600 characters, and most effective About sections use a few short, focused paragraphs, enough to be read in under a minute. Only the first two or three lines show before the \"see more\" link, so the opening matters more than the total length. Cut repetition and generic claims before you cut specific evidence.",
      },
      {
        q: "Should my LinkedIn About section be in first or third person?",
        a: "Use first person. LinkedIn is a platform for personal connection, and first person reads as you speaking directly to the reader. Third-person summaries sound like marketing copy written by someone else and create distance. Keep the tone professional and specific, the way you would introduce yourself to a senior contact at an industry event.",
      },
      {
        q: "Can I copy my CV profile into my LinkedIn About section?",
        a: "You can use it as a starting point, but do not paste it unchanged. A CV profile is short, formal and usually written without pronouns for a specific application. Your About section should be broader, in first person, and more personal, covering your specialism, results, working style and what you are looking for.",
      },
    ],
    relatedArticles: ["linkedin-headline-guide", "linkedin-for-international-job-search", "recruiter-first-read"],
    relatedLinks: [
      { href: "/linkedin-optimisation", label: "LinkedIn profile optimisation" },
      { href: "/resources/linkedin-checklist", label: "LinkedIn profile checklist" },
      { href: "/career-advice/linkedin", label: "More LinkedIn guides" },
    ],
  },
  {
    slug: "linkedin-for-international-job-search",
    title: "Using LinkedIn to find a job in another country",
    metaTitle: "LinkedIn for an International Job Search",
    metaDescription:
      "How to set your LinkedIn location, Open to Work preferences, headline and outreach so recruiters in another country can find you and take you seriously.",
    category: "LinkedIn",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "Recruiters abroad search LinkedIn by location, and most overseas candidates never show up. Here is how to set up your profile so the right people in your target country can find you.",
    quickAnswer:
      "To use LinkedIn for an international job search, add your target cities to your Open to Work preferences, state your relocation plans and work-rights status in your headline or About section, and write your profile in the target market's language and terminology. Keep your location truthful, then connect with recruiters and hiring managers in that country with short, specific messages.",
    intro:
      "LinkedIn is often the most useful tool an overseas job seeker has, because it lets recruiters in another country find you without you ever setting foot there. It is also where many international searches quietly fail. Recruiters filter candidates by location, a profile set to your home city rarely appears in their searches, and even when it does, a profile that leaves relocation and work rights unclear gets passed over for local candidates who look simpler to hire. The fixes are mostly settings and wording, and they take an afternoon.",
    sections: [
      {
        heading: "Why LinkedIn matters more when you are abroad",
        paragraphs: [
          "A local candidate can rely on referrals, networking events and recruiters who already know the market. An overseas candidate usually cannot. LinkedIn becomes the main place where a recruiter in Toronto, Dubai or Sydney can see your experience, check your background and decide whether to start a conversation.",
          "That means your profile is doing the job a CV and a first meeting would normally share. It needs to answer, quickly, the questions that make employers hesitate about overseas candidates: can this person legally work here, when could they start, will their experience translate, and are they serious about moving?",
          "It also works in the other direction. Recruiters who hire internationally often post openings, market updates and relocation advice on LinkedIn before those roles appear anywhere else. Following the right people in your target market gives you an early view of who is hiring and what they want, which is hard to get from another country any other way.",
        ],
      },
      {
        heading: "Your location setting, and how to handle it honestly",
        paragraphs: [
          "Location is one of the first filters recruiters apply when searching LinkedIn. If your profile says Colombo and the recruiter is searching for candidates in Melbourne, you may simply never appear. That creates a temptation to change your location to the target city. Think carefully before doing that.",
          "If you have already moved, or your move is confirmed and imminent, setting your location to the destination city is reasonable, and you should say in your About section when you will arrive. If you are still planning, keep your real location and make your target visible in other ways: your Open to Work preferences, your headline and your About section. A profile that claims to be in London when you are not will come out in the first call, and it damages trust just when you need it most.",
          "A middle path for a genuinely planned move is to state it in the headline and the first line of the About section: \"Based in Kandy, relocating to Melbourne in March 2027.\" A recruiter searching Melbourne may still find you through your Open to Work preferences and keywords, and anyone who opens the profile understands the situation immediately.",
        ],
      },
      {
        heading: "Open to Work settings that matter for an overseas search",
        paragraphs: [
          "LinkedIn's Open to Work feature lets you tell recruiters the job titles, locations and workplace types you are interested in, and choose who can see that you are looking. For an international search, these are the settings worth attention. LinkedIn notes that it takes steps to hide your status from recruiters at your current company but cannot guarantee complete privacy, so weigh that before switching it on:",
        ],
        bullets: [
          "Locations: add the specific cities or regions you are targeting abroad, not only your current city.",
          "Workplace types: include on-site, hybrid and remote as appropriate, since remote roles can be a route into a new market.",
          "Job titles: use the titles recruiters in the target country use, which may differ from your home market's.",
          "Visibility: \"Recruiters only\" keeps your status off your public profile; \"All LinkedIn members\" adds the Open to Work photo frame.",
          "Start date and job types: be realistic about notice periods and relocation time.",
        ],
      },
      {
        heading: "Headline and About section for a cross-border search",
        paragraphs: [
          "Your headline should carry your target role and, if space allows, your relocation plans: \"Mechanical Engineer | HVAC Design, Revit MEP | Relocating to Calgary\". That line tells a recruiter in the target city that you are serious, before they open your profile.",
          "Use your About section to answer the practical questions directly. State whether you already have the right to work in the target country, or what type of permission you would need. State when you can relocate and whether you are open to interviews across time zones. If your qualifications have been recognised or assessed locally, say so. Keep this factual and brief: a sentence or two at the end of the About section is enough.",
          "Visa and work-permit rules change and differ by country, occupation and personal circumstances. Describe your own status accurately, and check requirements on the destination government's official immigration website rather than relying on posts or recruiters' summaries.",
        ],
      },
      {
        heading: "Speak the target market's language",
        paragraphs: [
          "Recruiters search using their own market's vocabulary. A \"quantity surveyor\" in the UK may be a \"cost estimator\" in North America. A role titled \"executive\" in some Asian markets would be \"specialist\" or \"associate\" elsewhere. Where your title differs from the local equivalent, add clarity in your experience entries and headline, for example \"Senior Executive, Finance (Financial Analyst)\", so both versions appear.",
          "Match the spelling and conventions of the target market too: British spelling for the UK, Australia and New Zealand, American spelling for the US, and Canadian conventions for Canada. Explain employers that recruiters abroad will not recognise with a brief description of their size and sector. Convert currencies into something the reader understands, or describe scale in terms like team size and budget share rather than local currency figures.",
          "If the target market uses a different language, consider whether a second profile language is worth adding. LinkedIn lets you create your profile in additional languages, which can help in markets where recruiters search in their own language. Keep both versions equally accurate and up to date.",
        ],
      },
      {
        heading: "Finding and approaching recruiters abroad",
        paragraphs: [
          "Waiting to be found works better when you also make contact yourself. Short, specific outreach to the right people is one of the most effective things an overseas candidate can do on LinkedIn:",
        ],
        bullets: [
          "Search for agency recruiters who specialise in your field in the target city, and follow their posts.",
          "Find in-house talent acquisition staff at employers you want to join, and connect with a one-line note.",
          "Look for people from your home country already working in your field there; they know which employers hire internationally.",
          "Join and read professional groups for your sector in the target market.",
          "Keep messages to a few lines: who you are, what you do, when you are moving, and one clear question.",
        ],
      },
      {
        heading: "Look credible from a distance",
        paragraphs: [
          "An overseas recruiter cannot meet you for coffee, so your profile has to establish credibility on its own. Complete every section, use a clear, professional photo, add recommendations from managers and clients, and list certifications with the issuing body. Activity helps too: sharing or commenting on industry posts in the target market shows that you understand it.",
          "Be alert to scams aimed at international job seekers. Legitimate employers and recruiters do not ask you to pay for a job offer, a visa guarantee or an interview. If a message promises a guaranteed job abroad in exchange for a fee, treat it as a warning sign and check the recruiter and company independently.",
        ],
      },
    ],
    takeaways: [
      "Recruiters filter by location, so make your target cities visible in Open to Work.",
      "Keep your location truthful; show relocation plans in your headline and About section.",
      "State work-rights status and timing plainly, and check rules on official government sites.",
      "Use the target market's job titles, spelling and terminology.",
      "Reach out to specialist recruiters and in-house talent teams with short, specific messages.",
      "Never pay for a job offer or a visa guarantee.",
    ],
    faqs: [
      {
        q: "Should I change my LinkedIn location to the country I want to work in?",
        a: "Only if you have already moved or your move is confirmed and imminent. Otherwise, keep your real location and add your target cities to your Open to Work preferences, headline and About section. Claiming to be somewhere you are not usually comes out in the first conversation and damages trust with the recruiter.",
      },
      {
        q: "Can recruiters in other countries see my Open to Work status?",
        a: "Yes. If you add locations in other countries to your Open to Work preferences, recruiters searching for candidates open to those locations can find you. You can limit visibility to recruiters only, which keeps the green photo frame off your profile, or show it to all LinkedIn members. LinkedIn notes it cannot guarantee complete privacy from your current employer.",
      },
      {
        q: "How do I tell recruiters I am willing to relocate on LinkedIn?",
        a: "Add your target cities to your Open to Work locations, include a short relocation note in your headline such as \"Relocating to Toronto\", and state your timing and work-rights status in your About section. Being specific about where and when you are moving makes your profile far more useful to recruiters than a general \"open to relocation\".",
      },
    ],
    sources: [
      {
        label: "LinkedIn Help: Let recruiters know you're Open to Work",
        url: "https://www.linkedin.com/help/linkedin/answer/a507508/let-recruiters-know-you-re-open-to-work",
      },
    ],
    relatedArticles: ["cv-for-a-new-market", "linkedin-headline-guide", "cv-vs-resume"],
    relatedLinks: [
      { href: "/international-job-seekers", label: "Applying for jobs abroad" },
      { href: "/linkedin-optimisation", label: "LinkedIn profile optimisation" },
      { href: "/resources/international-application-checklist", label: "International application checklist" },
      { href: "/career-situations/relocating-abroad", label: "Relocating abroad" },
    ],
  },
  {
    slug: "how-to-write-a-cover-letter",
    title: "How to write a cover letter that gets read",
    metaTitle: "How to Write a Cover Letter (Structure and Examples)",
    metaDescription:
      "A clear structure for a cover letter: how to open, what to prove in the middle, how long it should be, and the mistakes that get letters skimmed or ignored.",
    category: "Cover letters",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "A cover letter is not a summary of your CV. It is the argument for why this job, this employer and you fit together. Here is how to write one in under a page.",
    quickAnswer:
      "To write a cover letter, address it to a named person if possible, open with the role and a specific reason you fit it, then give two short examples that prove you can meet the job's main requirements. Explain why this employer interests you, close with a confident line about next steps, and keep the whole letter under one page.",
    intro:
      "A cover letter does something your CV cannot. Your CV records what you have done. The letter explains why that record makes you the right person for this particular role, at this particular employer, right now. When a letter just repeats the CV in paragraphs, it adds nothing and gets skimmed. When it makes a clear, specific case, it can be the reason a borderline CV makes the shortlist. The structure below keeps the letter short, specific and hard to ignore.",
    sections: [
      {
        heading: "What a cover letter is for, and what it is not",
        paragraphs: [
          "The cover letter answers three questions: why this role, why this employer, and why you. The CV cannot answer the first two at all, and it answers the third only implicitly. The letter makes that argument explicit and connects your experience to the employer's needs in a way a list of bullets cannot.",
          "It is also a writing sample. For many roles, especially those involving communication, clients or management, the letter is the first evidence of how you write: whether you are clear, concise and able to adapt to a reader. A generic, overlong or error-strewn letter says something about your work before anyone reads your CV.",
          "What it is not: a repeat of your CV, a story of your whole career, or a place to explain every gap or reason for leaving. Include only what strengthens the case for this job.",
          "Whether a letter is read at all varies by employer and sector. Some recruiters go straight to the CV, others read the letter first, and some roles ask for one specifically so they can screen on it. You rarely know which reader you have, so when a letter is requested or optional, write a short, strong one. It costs you half an hour and can only help if it is good.",
        ],
      },
      {
        heading: "Research before you write",
        paragraphs: [
          "A good letter is built on a few specific facts about the role and the employer. Spend fifteen minutes gathering them before you draft anything. The difference between a generic letter and a strong one is almost always found here, and the same research prepares you for the interview if the letter works:",
        ],
        bullets: [
          "The two or three requirements the job posting emphasises most.",
          "The name and title of the hiring manager, from the posting, the company website or LinkedIn.",
          "Something current about the employer: a product launch, an expansion, a new contract, a stated priority.",
          "The team or department the role sits in, and what it is trying to achieve.",
          "The language the employer uses to describe itself and its work.",
        ],
      },
      {
        heading: "A structure that works",
        paragraphs: [
          "Most effective cover letters follow a simple four-part shape. Each part does one job, and none of them needs more than a short paragraph. The order matters: evidence comes before motivation, because a reader who already believes you can do the job takes your enthusiasm more seriously:",
        ],
        bullets: [
          "Opening: the role you are applying for and the single strongest reason you fit it.",
          "Proof: two short examples that show you can meet the job's main requirements, with results.",
          "Motivation: why this employer, based on something specific you learned in your research.",
          "Close: a confident line about the value you would bring and your interest in discussing it.",
        ],
      },
      {
        heading: "The opening paragraph",
        paragraphs: [
          "Address the letter to a named person wherever you can. \"Dear Ms Perera\" is better than \"Dear Hiring Manager\", which is better than \"To whom it may concern\". If you cannot find a name after reasonable effort, \"Dear Hiring Manager\" is acceptable.",
          "Then skip the throat-clearing. \"I am writing to apply for the position of...\" wastes the most-read sentence in the letter. Open with the role and your strongest point of fit together: \"I am applying for the Operations Manager role because I have spent the last five years running exactly the kind of multi-site warehouse network you are building in the north.\" In one sentence the reader knows what you want and why you might be right for it.",
          "If someone referred you, or you have spoken to someone at the company, mention it in the opening: \"Anika Rodrigo in your analytics team suggested I apply.\" A personal connection is one of the few things that reliably gets a letter read closely, so put it where it will be seen.",
        ],
      },
      {
        heading: "The middle: prove two things well",
        paragraphs: [
          "Pick the two requirements the employer cares about most and give one concrete example for each. Do not try to cover every point in the job description; a letter that proves two things well is more persuasive than one that mentions ten things in passing.",
          "Each example should show the situation, what you did and the result, briefly. \"In my current role, I took over a team with a backlog of overdue customs filings. By restructuring the workflow and training two junior staff, we cleared the backlog within a quarter and have met every filing deadline since.\" That is evidence, and it is written in a way your CV bullets usually are not: with a little context and a voice.",
          "Follow the proof with motivation. Say what specifically draws you to this employer, based on your research, and connect it to what you offer. \"Your expansion into cold-chain logistics is the area I most want to develop in, and my work on temperature-controlled routes at my current employer is directly relevant.\"",
          "Close with confidence rather than hope. \"I would welcome the chance to discuss how I could help your team reach its targets for next year\" works better than \"I hope you will consider my application\". Thank the reader briefly and sign off with your full name and phone number.",
        ],
      },
      {
        heading: "Tone, length and format",
        paragraphs: [
          "Keep the letter under one page: most strong letters run to three or four short paragraphs. Recruiters read many letters, and a long one signals that you could not decide what mattered. Match the tone to the employer: slightly more formal for banks, law firms and the public sector, slightly warmer for startups and creative agencies, but always professional and clear.",
          "Use the same font and header as your CV so the two documents look like a set. Save the letter as a PDF unless the posting asks for something else, and name the file clearly with your name and \"Cover Letter\". If you are pasting the letter into an online form or email, remove the formal address block and keep the text itself.",
          "Adapt to the market too. Some employers, such as many Australian public sector bodies, ask for a separate statement addressing selection criteria rather than a traditional letter. Always follow the application instructions over any general advice.",
        ],
      },
      {
        heading: "Mistakes that get letters skimmed",
        paragraphs: [
          "Most weak cover letters fail in predictable ways. Check your draft against these before you send it:",
        ],
        bullets: [
          "The wrong company or role name, left over from a previous letter. Check every name twice.",
          "Opening with \"I am writing to apply for\" or a description of yourself rather than the job.",
          "Repeating your CV line by line instead of making an argument.",
          "Focusing on what you want from the job rather than what you bring to it.",
          "Generic praise of the company that could apply to any employer.",
          "Apologising for gaps in your experience instead of showing what you do have.",
          "Going over one page.",
        ],
      },
    ],
    takeaways: [
      "A cover letter argues why this role, why this employer and why you.",
      "Research the employer and address a named person when you can.",
      "Open with the role and your strongest reason to fit, not a formality.",
      "Prove two key requirements with short, specific examples.",
      "Keep it under a page, match your CV's formatting, and follow application instructions.",
    ],
    faqs: [
      {
        q: "How long should a cover letter be?",
        a: "A cover letter should be under one page, usually three or four short paragraphs. That is enough to open with your fit for the role, give two specific examples of your experience, explain why you want to work for the employer, and close. Longer letters tend to be skimmed, and they suggest you could not decide what mattered most.",
      },
      {
        q: "How do I start a cover letter?",
        a: "Start with a greeting to a named person, such as \"Dear Mr Silva\", then open with the role you are applying for and your strongest reason for fitting it, in one sentence. Avoid generic openings like \"I am writing to apply for\" or \"To whom it may concern\". The first sentence is the most read, so it should say something specific.",
      },
      {
        q: "What should I not include in a cover letter?",
        a: "Do not repeat your CV line by line, explain every career gap, criticise past employers, mention salary unless asked, or include personal details unrelated to the job. Avoid generic praise of the company and any claims you cannot support. Keep the letter focused on why you fit this specific role and employer.",
      },
      {
        q: "Who should I address a cover letter to if there is no name?",
        a: "First, try to find the hiring manager's name in the job posting, on the company website or on LinkedIn. If you cannot find one, \"Dear Hiring Manager\" is acceptable and widely used. You can also address the team, such as \"Dear Finance Recruitment Team\". Avoid \"To whom it may concern\" and \"Dear Sir or Madam\", which read as dated.",
      },
    ],
    relatedArticles: ["do-you-still-need-a-cover-letter", "how-to-tailor-a-cv-to-a-job-description", "how-to-write-a-professional-cv"],
    relatedLinks: [
      { href: "/cover-letter-writing", label: "Cover letter writing service" },
      { href: "/resources/cover-letter-checklist", label: "Cover letter checklist" },
      { href: "/career-advice/cover-letters", label: "More cover letter guides" },
    ],
  },
];
