import type { Resource, FaqItem, LabelValue } from "@/lib/content/types";
import type { LegalDoc } from "@/lib/legal";
import { site } from "@/lib/site";

/* ------------------------------------------------------------------
 * RESOURCES: /resources/{slug}
 * Practical, informational checklists and guides. No sign-up.
 * ------------------------------------------------------------------ */

export const resources: Resource[] = [
  /* ---------------------------------------------------------------- */
  {
    slug: "cv-checklist",
    title: "CV checklist: what to check before you apply",
    metaTitle: "CV Checklist: What to Check Before You Apply",
    metaDescription:
      "A full CV checklist in the order a recruiter reads: targeting, profile, achievements, skills, format and proofreading. Free, practical, no sign-up needed.",
    lead: "The checks to run on any CV before it goes out, in the order a recruiter actually reads the page.",
    quickAnswer:
      "Before you send a CV, check five things: it is aimed at one specific role, the top third makes the case on its own, every bullet shows a result rather than a duty, the format suits the market and survives an ATS, and dates, spelling and contact details are error free. Run the full list once per application, not once per CV.",
    intro:
      "This is the full pass, split into the stages a reader moves through: whether the CV is aimed at anything, whether the first screen earns the rest, whether the experience proves anything, and whether small errors undermine it. Run it with the job advert open next to your CV, because several of these checks only make sense against a specific role.",
    groups: [
      {
        heading: "Targeting",
        items: [
          "You can name the one job title this CV is aimed at, and it appears near the top",
          "The CV has been compared line by line with this specific job advert",
          "The three or four requirements the advert repeats most are visibly covered",
          "Anything that does not support this application has been cut or shortened",
          "The level of the language matches the seniority of the role you are applying for",
          "The file name is professional, for example Firstname-Lastname-CV.pdf",
        ],
      },
      {
        heading: "The top third",
        items: [
          "Name, phone, email, city and country, and LinkedIn URL are in the main body of the page",
          "A two to four line profile says what you do, at what level, and with what result",
          "The profile has no unsupported adjectives such as dynamic, passionate or results-driven",
          "Your strongest piece of evidence is visible without scrolling or turning the page",
          "A reader who skims only the top third could say what job you want",
        ],
      },
      {
        heading: "Experience and achievements",
        items: [
          "Roles run in reverse chronological order with month and year dates",
          "Each role opens with one line of context: team size, budget, market or product",
          "Bullets start with a strong verb and describe what changed, not what you were responsible for",
          "Numbers appear wherever you can honestly support them: money, time, volume, percentage or people",
          "The most recent and most relevant role has the most bullets",
          "Older or less relevant roles are condensed to a line or two rather than deleted",
          "No achievement is claimed twice in different words",
          "Gaps longer than a few months are explained in a line, not hidden",
        ],
      },
      {
        heading: "Skills, education and extras",
        items: [
          "Skills are specific (named tools, methods, languages) rather than soft-skill labels",
          "Every skill listed is backed up somewhere in the experience section",
          "Education shows qualification, institution and year, with grades only if they help",
          "Certifications are current and named exactly as the issuing body names them",
          "Interests appear only if they add something relevant to this role",
          "“References available on request” is removed unless the market expects referees on the CV",
        ],
      },
      {
        heading: "Format and readability",
        items: [
          "Length suits the market you are applying into and the seniority of the role",
          "One readable font at 10 to 12 points, with consistent heading sizes",
          "White space lets each section breathe; nothing has been squeezed to fit",
          "Job titles, employers, dates and locations are laid out the same way in every role",
          "No photo, date of birth or marital status unless the target market expects them",
          "Saved as PDF unless the advert or application system asks for Word",
        ],
      },
      {
        heading: "Final proofread",
        items: [
          "Spell-checked in the right variant of English for the market",
          "Read aloud once, slowly, from start to finish",
          "Tense is consistent: present for your current role, past for previous ones",
          "Company names, products and acronyms are spelled exactly as the organisations spell them",
          "Every date matches your LinkedIn profile",
          "Opened on a phone to confirm it still reads cleanly",
          "Someone else has read it, ideally someone who does not know your job",
        ],
      },
    ],
    tips: [
      "Keep a master CV with everything in it, then cut a targeted version for each application. Editing down is faster and safer than rewriting from scratch.",
      "If a bullet would fit on a colleague's CV unchanged, it is describing the job, not you.",
      "When you cannot get a number, use scale or context instead: how many users, which markets, how senior the stakeholders were.",
      "Do the checks in order. There is no point proofreading a CV that is aimed at the wrong role.",
    ],
    faqs: [
      {
        q: "What should I check before sending my CV?",
        a: "Check that the CV targets one specific role, that the top third makes your case without the rest of the page, that bullets show results rather than duties, that the format suits the market and parses in an ATS, and that dates, spelling and contact details are error free. Compare it against the actual job advert, not a general idea of the role.",
      },
      {
        q: "How many times should I proofread my CV?",
        a: "At least twice, in two different ways: once reading aloud from start to finish, and once checking only dates, names and numbers. Then ask someone else to read it. You tend to skip errors in text you wrote yourself, because you read what you meant rather than what is on the page. Changing the font size temporarily helps you see it fresh.",
      },
      {
        q: "Should I change my CV for every job application?",
        a: "Yes, but usually only the top third and the order of your bullets. Rewrite the profile to match the role, move the most relevant achievements up, and use the advert's key terms where they are true for you. A full rewrite for each application is rarely needed if your master CV is strong to begin with.",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/career-advice/how-to-tailor-a-cv-to-a-job-description", label: "Tailoring a CV to a job description" },
      { href: "/resources/ats-check", label: "ATS check" },
      { href: "/cv-review", label: "CV review" },
    ],
    updated: "2026-09-27",
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "ats-check",
    title: "ATS check: will your CV parse?",
    metaTitle: "ATS CV Check: A Free Checklist to Test Your CV",
    metaDescription:
      "Check whether your CV will parse in an applicant tracking system: file, layout, headings and keywords, plus a two-minute plain text test you can run yourself.",
    lead: "A checklist for the two things an applicant tracking system does with your CV: read it, and let a recruiter search it.",
    quickAnswer:
      "To check whether your CV is ATS-friendly, confirm it uses a single-column layout, standard section headings, real selectable text, no tables or text boxes holding key details, and contact information in the main body. Then test it: paste the whole CV into a plain text file. If text comes out jumbled or missing, a parser may struggle too.",
    intro:
      "An applicant tracking system does two separate jobs. It turns your file into structured data, and it lets a recruiter search and filter that data. Most ATS problems are the first kind: a layout the parser cannot read in the right order. The second kind is missing the terms a recruiter searches for. This checklist covers both, and ends with tests you can run in a few minutes without paying for a scanner.",
    groups: [
      {
        heading: "The file",
        items: [
          "Saved as .docx or a text-based PDF, whichever the posting asks for",
          "The PDF was exported from a word processor, not scanned or saved as an image",
          "You can highlight and copy every word in the file",
          "The file name contains your name, not ‘final-v3’ or ‘CV new’",
          "No large embedded images that inflate the file size",
        ],
      },
      {
        heading: "Layout",
        items: [
          "One column for the main content, reading from top to bottom",
          "No tables, text boxes or side columns holding job titles, dates or skills",
          "No icons standing in for words such as phone, email or location",
          "No skill bars, rating dots or charts; they carry no readable information",
          "Contact details in the body of the page, not in the header or footer",
          "Simple round bullets rather than custom symbols or emoji",
        ],
      },
      {
        heading: "Headings and structure",
        items: [
          "Section headings use standard names: Profile, Work Experience, Education, Skills, Certifications",
          "Creative headings such as ‘Where I’ve made an impact’ have been replaced",
          "Every role follows the same order: job title, employer, location, dates",
          "Dates use one consistent format, such as Mar 2022 or 03/2022",
          "Internal or unusual job titles have the common market equivalent alongside them",
        ],
      },
      {
        heading: "Keywords",
        items: [
          "The hard skills, tools and qualifications named in the advert appear in your CV where they are true",
          "Key terms appear in context in your experience, not only in a skills list",
          "Important acronyms are also written out once, for example SEO and search engine optimisation",
          "Tool and product names are spelled exactly as the vendor spells them",
          "The target job title appears in your profile",
          "No keyword stuffing, white text or hidden lists; a person reads the result",
        ],
      },
      {
        heading: "Test it yourself",
        items: [
          "Copy all the text into a plain text editor and check the order still makes sense",
          "Check that your name, email and phone number survived the paste intact",
          "Open the file on a phone and a second computer to confirm fonts and layout hold",
          "When an application form offers to fill itself from your CV, note what it gets wrong; that is a parser's reading",
          "Search your CV for the advert's top five terms and confirm each one appears",
          "Fix anything that fails, then repeat the plain text test",
        ],
      },
    ],
    tips: [
      "No one outside a vendor can tell you exactly how a specific system handles a CV, and many systems do not score CVs at all; recruiters search and filter. Treat any online ‘ATS score’ as a prompt, not a verdict.",
      "A plain design is not a weak design. Hierarchy built from spacing, bold and font size parses cleanly and still looks sharp to a human reader.",
      "If you are using a downloaded template, run it through this list before you fill it in. Many attractive templates are built on tables.",
      "Keywords get you found; achievements get you shortlisted. Do not let the first push out the second.",
    ],
    faqs: [
      {
        q: "How do I know if my CV is ATS-friendly?",
        a: "Copy the whole CV and paste it into a plain text editor. If your name, job titles, dates and bullets come through in a sensible order with nothing missing, most parsers will read it too. Then check the structure: single column, standard headings, no tables or text boxes holding key details, and contact information in the main body rather than the header.",
      },
      {
        q: "Is a PDF or Word CV better for ATS?",
        a: "Either works in most modern systems, as long as the file contains real, selectable text. Follow the posting first: if it asks for Word, send Word. A PDF exported from a word processor is generally fine. A scanned PDF, or one built from images, is not, because there is no text in it for the system to read.",
      },
      {
        q: "Do online ATS score checkers work?",
        a: "They are useful for spotting missing keywords and obvious formatting problems, but the score is not what an employer's system produces. Each checker uses its own method, and many employer systems do not score CVs at all; recruiters search and filter them. Use a checker as a prompt to review your CV, not as a pass or fail result.",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-ats-reads-your-cv", label: "How an ATS reads your CV" },
      { href: "/career-advice/ats-friendly-cv-format", label: "ATS-friendly CV format" },
      { href: "/career-advice/how-to-find-ats-keywords", label: "How to find ATS keywords" },
      { href: "/cv-samples/ats-cv", label: "ATS CV structure" },
    ],
    updated: "2026-09-27",
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "linkedin-checklist",
    title: "LinkedIn profile checklist",
    metaTitle: "LinkedIn Profile Checklist for Job Seekers",
    metaDescription:
      "A LinkedIn profile checklist covering headline, About, experience, skills, Open to Work settings and CV consistency, in the order a recruiter sees your profile.",
    lead: "Recruiters search LinkedIn to find people, then open profiles to check them. This checklist covers both moments.",
    quickAnswer:
      "A strong LinkedIn profile has a headline that says what you do and for whom, a clear recent photo, an About section in the first person with specific evidence, experience that matches your CV, skills chosen for how recruiters search, and Open to Work settings that name the roles you actually want. Check all six areas before you start applying.",
    intro:
      "Recruiters use LinkedIn in two ways: they search it to find people, and they open it to check people who reached them through an application. The first use depends on your headline, job titles, location and skills. The second depends on whether the profile agrees with your CV and adds something to it. This checklist covers both, in the order a visitor sees your profile.",
    groups: [
      {
        heading: "First screen",
        items: [
          "Headline states your role, your specialism and one proof point, not only your current job title",
          "The headline includes the job title a recruiter would type to find someone like you",
          "Photo shows your face clearly, is recent, and has a plain background",
          "Banner shows something useful about your field rather than the default image",
          "Location is accurate; if you are relocating, you say so in the headline or About section",
          "Custom URL is set, for example linkedin.com/in/firstname-lastname",
        ],
      },
      {
        heading: "About section",
        items: [
          "Written in the first person, the way you would speak to a peer",
          "The first two lines make sense on their own, since that is what shows before ‘see more’",
          "Says what you do, the problems you solve, and the evidence that you solve them",
          "Uses the key terms of your field naturally, not as a stuffed list",
          "Ends with what you are looking for, or how to get in touch",
          "Contains none of: passionate, driven, go-getter, out-of-the-box thinker",
        ],
      },
      {
        heading: "Experience",
        items: [
          "Job titles, employers and dates match your CV exactly",
          "Current and recent roles have two to five achievement lines, not a pasted job description",
          "Older roles are kept short but not deleted, so the timeline has no unexplained gaps",
          "Media, links or projects are attached where they prove something",
          "A career break is added as a career break entry rather than left as a silent gap",
        ],
      },
      {
        heading: "Skills and recommendations",
        items: [
          "Skills lead with what you want to be hired for, not what you used most in the past",
          "Your most important skills are the ones featured at the top",
          "Every listed skill is backed by an experience entry that mentions it",
          "Two or three recommendations from managers, clients or senior colleagues, ideally recent",
          "Certifications show the issuing body and date",
        ],
      },
      {
        heading: "Settings",
        items: [
          "Open to Work lists the right job titles, locations and workplace types",
          "You have chosen deliberately between recruiter-only visibility and the public photo frame",
          "Public profile visibility is on, so the page can be found from a search engine",
          "Contact info shows an email address you actually check",
          "Sharing profile updates with your network is switched off while you make large edits",
        ],
      },
      {
        heading: "Consistency and activity",
        items: [
          "Nothing on the profile contradicts the CV you are sending",
          "The profile adds what the CV has no room for: projects, media, recommendations",
          "Some recent activity, even a few thoughtful comments, shows the account is in use",
          "Your LinkedIn URL is on your CV and in your email signature",
          "Spelling and terminology match the market you are targeting",
        ],
      },
    ],
    tips: [
      "Write the headline last. It is easier once the About section has forced you to decide what you are actually offering.",
      "Search LinkedIn for the job title you want and read the first profiles that appear. Note the terms they share, then check whether yours uses them where they are true.",
      "A profile does not need to be long. It needs to be specific, current and consistent with your CV.",
      "Treat the CV as the targeted version and LinkedIn as the fuller public record. They should agree on facts and can differ in tone.",
    ],
    faqs: [
      {
        q: "What should a LinkedIn headline say for job seekers?",
        a: "Your headline should state the role you want to be found for, your specialism and one piece of proof, in words a recruiter would search. For example: Financial Analyst | FP&A and forecasting for retail groups | Built a rolling forecast used across 40 stores. Avoid headlines that only say ‘Seeking new opportunities’, because nobody searches for that phrase.",
      },
      {
        q: "Should my LinkedIn profile match my CV exactly?",
        a: "Your dates, job titles and employers should match exactly, because recruiters compare them and a mismatch raises questions. The wording does not need to match. LinkedIn can be more conversational, written in the first person, and can include projects, media and recommendations that a CV has no room for. The facts should agree even where the tone differs.",
      },
      {
        q: "Does Open to Work hurt your chances?",
        a: "Not in general. The recruiter-only setting signals that you are available without adding a frame to your photo, which suits most people who are currently employed. The public frame is more visible, and some candidates prefer to avoid it. What matters more is entering accurate job titles and locations, so that the right recruiter searches actually find you.",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/linkedin-headline-guide", label: "LinkedIn headline guide" },
      { href: "/career-advice/linkedin-about-section-guide", label: "LinkedIn About section guide" },
      { href: "/linkedin-optimisation", label: "LinkedIn optimisation" },
    ],
    updated: "2026-09-27",
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "cover-letter-checklist",
    title: "Cover letter checklist",
    metaTitle: "Cover Letter Checklist: What to Check Before Sending",
    metaDescription:
      "A cover letter checklist from research to sign-off: opening line, evidence, why this employer, closing and format. Catch the mistakes hiring managers notice.",
    lead: "From the research you do before writing to the checks you run before attaching it.",
    quickAnswer:
      "A good cover letter is addressed to a named person where possible, opens with the specific role and why you fit it, gives two or three pieces of evidence that match the employer's main needs, shows why you chose this organisation, and closes with a clear next step. It should fit on one page and never repeat the CV line by line.",
    intro:
      "A cover letter is read by someone deciding whether you understand the role and can make a clear case in writing. Its job is narrow: connect your strongest evidence to this employer's most pressing needs, in under a page. Most weak letters fail before the writing starts, because the research was skipped, so this checklist begins there.",
    groups: [
      {
        heading: "Before you write",
        items: [
          "You have read the full advert and marked the three needs it stresses most",
          "You know what the organisation does, who it serves, and something current about it",
          "You have looked for the hiring manager's name, or settled on a specific neutral greeting",
          "You have chosen two or three achievements that answer the marked needs",
          "You have checked whether the posting asks for anything specific, such as availability or salary expectations",
        ],
      },
      {
        heading: "Opening",
        items: [
          "The first sentence names the role and gives a reason you fit it",
          "It does not open with ‘I am writing to apply for…’ followed by nothing specific",
          "The greeting uses the person's name correctly where you know it",
          "The opening would not work if you sent it to a different employer",
          "If someone referred you, their name appears in the first paragraph",
        ],
      },
      {
        heading: "The middle",
        items: [
          "Each paragraph links one of their needs to one piece of your evidence",
          "Evidence uses numbers, scale or outcomes rather than adjectives",
          "At least one line shows why this organisation, not just any employer in the sector",
          "A career change, gap or relocation is addressed briefly and plainly if it is relevant",
          "Nothing repeats a CV bullet word for word; the letter explains, the CV lists",
          "The letter is more about what you offer them than what you want from them",
        ],
      },
      {
        heading: "Close",
        items: [
          "The final paragraph restates your fit in one sentence",
          "It says what you would like to happen next, such as a conversation",
          "In British English, ‘Yours sincerely’ follows a named greeting and ‘Yours faithfully’ follows ‘Dear Sir or Madam’",
          "Your name, phone number and email appear below the sign-off",
          "No apologising, pleading or overselling in the last lines",
        ],
      },
      {
        heading: "Format and final check",
        items: [
          "Fits on one page, typically three to five short paragraphs",
          "Uses the same font and header as your CV so the two read as a set",
          "Saved as PDF with a clear file name, unless it is pasted into a form",
          "If pasted into a text box, the formatting has been checked after pasting",
          "The company name, role title and person's name are correct everywhere, including the file name",
          "Spelling matches the market you are applying into",
        ],
      },
    ],
    tips: [
      "Write the middle first. The opening is easier once you know which piece of evidence you are leading with.",
      "If you reuse a letter, rewrite the opening and the ‘why this organisation’ line every time. Those are the lines a reader checks for effort.",
      "A focused letter of around 250 words usually says more than a general one twice that length.",
      "When an application form has a ‘why do you want this role’ box instead of a letter upload, treat the box as your cover letter and apply the same checks.",
    ],
    faqs: [
      {
        q: "How long should a cover letter be?",
        a: "A cover letter should normally fit on one page, usually three to five short paragraphs and roughly 250 to 400 words. The reader wants to see whether you understand the role and can make a clear case, and a longer letter rarely adds more evidence. Where an employer asks for detailed selection criteria responses, treat those as a separate document.",
      },
      {
        q: "Who do I address a cover letter to if there is no name?",
        a: "Try to find a name first: the advert, the organisation's website and LinkedIn often show the hiring manager or team lead. If you cannot find one, use a specific greeting such as ‘Dear Hiring Manager’ or ‘Dear Finance Recruitment Team’. Avoid ‘To whom it may concern’, which reads as dated and suggests you did not look.",
      },
      {
        q: "Should a cover letter repeat my CV?",
        a: "No. A cover letter should select and explain, not repeat. Pick the two or three achievements from your CV that best match the employer's needs and say why they matter for this role, adding context the CV has no room for. If a reader could skip the letter and lose nothing, it is repeating the CV.",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/how-to-write-a-cover-letter", label: "How to write a cover letter" },
      { href: "/career-advice/do-you-still-need-a-cover-letter", label: "Do you still need a cover letter?" },
      { href: "/cover-letter-writing", label: "Cover letter writing" },
    ],
    updated: "2026-09-27",
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "interview-checklist",
    title: "Interview preparation checklist",
    metaTitle: "Interview Preparation Checklist: What to Prepare",
    metaDescription:
      "An interview preparation checklist: research, a STAR story bank, likely questions, questions to ask, video and in-person logistics, and the follow-up email.",
    lead: "Less guessing at questions, more preparing the stories that answer them.",
    quickAnswer:
      "To prepare for a job interview, research the role and organisation, re-read the job advert and your own CV, prepare five or six achievement stories in the STAR format, rehearse answers to the questions you are most likely to get, write down three or four questions to ask, and confirm the logistics a day ahead. Send a short thank-you within one working day.",
    intro:
      "Most interview preparation goes into guessing questions. Better preparation goes into stories: a small set of well-rehearsed examples you can adapt to almost any competency question. This checklist starts with research, builds the story bank, then covers the questions you will face and ask, the logistics for video and in-person interviews, and the follow-up. Your CV is the interviewer's script, so read it the way they will.",
    groups: [
      {
        heading: "Research",
        items: [
          "Re-read the job advert and list every skill and behaviour it names",
          "Read the organisation's website, recent news, and its annual report or product pages",
          "Look up your interviewers on LinkedIn to understand their roles",
          "Confirm the interview format: panel, competency, technical, case study or presentation",
          "If the role is in another country, check local norms such as formality and how salary is raised",
          "Re-read your own CV and cover letter, because every line on them is fair game",
        ],
      },
      {
        heading: "Your story bank",
        items: [
          "Five or six stories covering a result, a conflict, a mistake, leadership, change and pressure",
          "Each story follows STAR: situation, task, action, result",
          "Actions use ‘I’ rather than ‘we’, so your own contribution is clear",
          "Results include a number, an outcome, or what changed afterwards",
          "Each story takes about one to two minutes when told aloud",
          "You know which story answers which competency in the advert",
        ],
      },
      {
        heading: "Questions you will be asked",
        items: [
          "‘Tell me about yourself’ answered in under two minutes: present, past, why this role",
          "‘Why do you want this job?’ answered with specifics about this role and organisation",
          "‘Why are you leaving?’ answered honestly and without criticising your employer",
          "A real weakness, with what you are doing about it",
          "A salary range researched for this role, level and location",
          "Any gap, career change or relocation explained in two or three calm sentences",
        ],
      },
      {
        heading: "Questions you will ask",
        items: [
          "Three or four questions written down in advance",
          "One about what success looks like in the first six to twelve months",
          "One about the team you would join and how it works",
          "One about next steps and timing, saved for the end",
          "None whose answers are already on the organisation's website",
        ],
      },
      {
        heading: "Logistics",
        items: [
          "Date, time and time zone confirmed in writing, especially across borders",
          "For video: camera at eye level, light facing you, a quiet room and a tested connection",
          "The meeting link or platform tested the day before",
          "For in person: route, travel time and who to ask for on arrival",
          "Your CV, the job advert and your notes within reach",
          "Clothing matched to the organisation's norms, one level smarter",
        ],
      },
      {
        heading: "After the interview",
        items: [
          "A short thank-you email sent within one working day",
          "Notes written straight away on what was asked and what you would answer differently",
          "Anything you promised to send, sent promptly",
          "A follow-up date noted if they gave a decision timeline",
          "Your referees told that they may be contacted",
        ],
      },
    ],
    tips: [
      "Rehearse aloud, not in your head. Stories that feel complete in your head usually run long or lose the result when spoken.",
      "Record one practice answer on your phone and watch it back once. It is uncomfortable, and it shows you exactly what to fix.",
      "When a question does not match any story, pick the closest one and say how it applies. A relevant real example beats a polished invented one.",
      "When interviewing across time zones, put both local times in the calendar invite and set your alarm by your own.",
    ],
    faqs: [
      {
        q: "How do I prepare for a job interview in one day?",
        a: "Focus on three things: re-read the job advert and your CV, prepare four or five STAR stories that match the skills the advert names, and practise your answer to ‘tell me about yourself’ aloud. Then read the organisation's recent news, write two questions to ask, and confirm the time and location or link. Rehearse stories rather than memorising scripts.",
      },
      {
        q: "How many STAR examples should I prepare?",
        a: "Prepare five or six strong STAR stories, each flexible enough to answer several questions. Cover a clear result, working with a difficult person, a mistake, leading or influencing, handling change, and working under pressure. Most competency questions can be answered by adapting one of these to the wording asked, so depth matters more than the number of stories.",
      },
      {
        q: "Should I send a thank-you email after an interview?",
        a: "Yes, send a short thank-you email within one working day. Thank the interviewer for their time, mention one specific point from the conversation, restate your interest in a line, and include anything you promised to send. Keep it to a few sentences. It rarely decides the outcome on its own, but it is a simple professional courtesy.",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/star-method-interview-answers", label: "STAR method interview answers" },
      { href: "/career-advice/how-to-answer-tell-me-about-yourself", label: "Answering ‘tell me about yourself’" },
      { href: "/career-advice/how-to-follow-up-after-a-job-application", label: "Following up after an application" },
      { href: "/career-strategy", label: "Career strategy" },
    ],
    updated: "2026-09-27",
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "international-application-checklist",
    title: "International job application checklist",
    metaTitle: "Applying for Jobs Abroad: Application Checklist",
    metaDescription:
      "Applying for a job in another country? Check market CV conventions, work-rights wording, qualifications, LinkedIn and time zones before you send anything.",
    lead: "What to change, what to explain, and what to check officially before you apply across a border.",
    quickAnswer:
      "Before applying for a job in another country, rewrite your CV to that market's conventions on length, photo, personal details and spelling, state your work-rights position accurately, make your qualifications and employers easy for a foreign reader to understand, align LinkedIn with the target market, and plan for time zones. Check work-rights requirements only on the destination government's official website.",
    intro:
      "An application that crosses a border is read by someone who may not know your employers, your university or your country's job titles, and who expects a CV built to local norms. That does not make you a weaker candidate, but it does mean a document that works at home can fail abroad for reasons unrelated to your ability. This checklist covers the document, the context a foreign reader needs, and the practical side of applying remotely. It is orientation only, not immigration advice.",
    groups: [
      {
        heading: "Market conventions",
        items: [
          "You have checked the destination's norms on CV length, photo, date of birth and marital status",
          "Personal details that market does not expect have been removed",
          "Spelling and vocabulary match the market, including CV or resume",
          "Dates are unambiguous, for example Mar 2023 rather than 03/04/2023",
          "Your phone number includes the international dialling code",
          "The location line says where you are now and, if true, when you can relocate",
        ],
      },
      {
        heading: "Work rights (orientation only)",
        items: [
          "If you already hold the right to work in the destination, it is stated plainly near your contact details",
          "If you would need sponsorship, you are ready to say so honestly when asked",
          "You have read the destination government's official immigration website, not forum posts or agents' summaries",
          "Any visa or permit named on your CV uses its official name and is current",
          "You recheck the official source before relying on anything, because rules change",
          "Where you are unsure about your own situation, you plan to speak to a qualified, registered adviser in that country",
        ],
      },
      {
        heading: "Qualifications and experience",
        items: [
          "Degrees are named in full, with the institution and country",
          "Any recognition or equivalency assessment you already hold is noted",
          "Each employer has a one-line description: sector, size, or what it does",
          "Local job titles are given their common international equivalent",
          "Money figures are labelled with a currency, or converted, so scale is clear",
          "Achievements are framed in outcomes any market understands: revenue, cost, time, customers, quality",
          "Professional licences state whether they are recognised in the destination or in progress",
        ],
      },
      {
        heading: "LinkedIn and presence",
        items: [
          "Open to Work locations include the destination if you are genuinely relocating",
          "Your headline or About section mentions the target market and your relocation plans",
          "Spelling on the profile matches the target market",
          "You follow target employers and recruiters in that market",
          "Dates and titles agree across LinkedIn, your CV and every application",
        ],
      },
      {
        heading: "Applying remotely",
        items: [
          "Application deadlines converted into your own time zone",
          "Interview availability offered in the employer's time zone, not yours",
          "A professional email address and a phone number reachable from abroad",
          "Your video setup tested at the hours an interview is likely to fall",
          "Referees are reachable across time zones and know you are applying abroad",
          "A tracker listing each application, the version of the CV sent, and follow-up dates",
        ],
      },
    ],
    tips: [
      "Build one CV per target market, not one CV for the world. The differences between markets are small in words and large in effect.",
      "Never describe visa eligibility as fact on a CV unless you have confirmed it on the official government source. A wrong claim costs more than an honest ‘requires sponsorship’.",
      "A foreign reader cannot look up every employer on your CV. One line of context per company is the cheapest credibility you can add.",
      "Keep the achievements the same across markets and change the packaging. If you find yourself changing the facts, stop.",
    ],
    faqs: [
      {
        q: "How do I apply for jobs in another country?",
        a: "Start with the destination's official immigration website so you understand which work-rights routes may apply to you. Then rewrite your CV for that market's conventions, add the context a foreign reader needs about your employers and qualifications, update LinkedIn with your target location, and apply to employers that hire internationally in your field. Plan for interviews across time zones.",
      },
      {
        q: "Should I mention my visa status on my CV?",
        a: "Yes, if you already hold the right to work in that country, state it plainly near your contact details, because it removes a common doubt. If you would need sponsorship, you do not have to lead with it on the CV, but be honest when asked. Always check your position on the destination government's official website; this is not immigration advice.",
      },
      {
        q: "Do I need a different CV for each country?",
        a: "Usually, yes. Markets differ on length, whether to include a photo or date of birth, spelling, terms such as CV or resume, and how much personal detail is expected. Your achievements stay the same, but the packaging changes. A CV that is right for one market can look unusual or incomplete in another, even when the candidate is strong.",
      },
    ],
    relatedLinks: [
      { href: "/international-job-seekers", label: "CV conventions by country" },
      { href: "/career-advice/cv-for-a-new-market", label: "Writing a CV for a new market" },
      { href: "/career-advice/linkedin-for-international-job-search", label: "LinkedIn for an international job search" },
      { href: "/career-situations/relocating-abroad", label: "Relocating abroad" },
    ],
    updated: "2026-09-27",
  },

  /* ---------------------------------------------------------------- */
  {
    slug: "action-verbs",
    title: "Action verbs for your CV",
    metaTitle: "CV Action Verbs: Strong Verbs by Theme, With Tips",
    metaDescription:
      "Over 100 CV action verbs grouped by what you actually did: leadership, delivery, growth, analysis and more, plus tips on choosing verbs that stay credible.",
    lead: "Grouped by the kind of contribution they describe, so you find the accurate word rather than the biggest one.",
    quickAnswer:
      "Action verbs are the words that open CV bullets and show what you did, such as led, reduced, built or negotiated. Choose the verb that describes your actual contribution, then follow it with a result. A precise, modest verb with evidence reads stronger than an impressive verb without it. Vary your verbs, but never inflate your role to find a new one.",
    intro:
      "A verb list is only useful if it helps you describe what you really did more precisely. Use this one on a finished draft: mark every weak opener such as ‘responsible for’, ‘helped with’ or ‘worked on’, decide what you actually did in that situation, then find the verb that says it. The themes below are there to point you to the right family of words, not to make a bullet sound bigger than the work behind it.",
    groups: [
      {
        heading: "Leadership: you set direction or were accountable for people",
        items: [
          "Led",
          "Directed",
          "Headed",
          "Managed",
          "Oversaw",
          "Supervised",
          "Mentored",
          "Coached",
          "Recruited",
          "Delegated",
          "Mobilised",
          "Chaired",
          "Steered",
          "Championed",
        ],
      },
      {
        heading: "Delivery: you got something finished",
        items: [
          "Delivered",
          "Launched",
          "Completed",
          "Executed",
          "Implemented",
          "Shipped",
          "Rolled out",
          "Coordinated",
          "Scheduled",
          "Organised",
          "Produced",
          "Achieved",
          "Met",
          "Closed",
          "Secured",
        ],
      },
      {
        heading: "Growth: you increased revenue, customers or reach",
        items: [
          "Grew",
          "Increased",
          "Expanded",
          "Generated",
          "Won",
          "Acquired",
          "Opened",
          "Scaled",
          "Negotiated",
          "Converted",
          "Retained",
          "Upsold",
          "Diversified",
          "Doubled",
        ],
      },
      {
        heading: "Analysis: you found out what was true",
        items: [
          "Analysed",
          "Assessed",
          "Evaluated",
          "Investigated",
          "Forecast",
          "Modelled",
          "Measured",
          "Audited",
          "Researched",
          "Identified",
          "Diagnosed",
          "Quantified",
          "Mapped",
          "Tested",
          "Reviewed",
        ],
      },
      {
        heading: "Improvement: you made something faster, cheaper or better",
        items: [
          "Improved",
          "Reduced",
          "Streamlined",
          "Simplified",
          "Automated",
          "Standardised",
          "Redesigned",
          "Restructured",
          "Consolidated",
          "Cut",
          "Resolved",
          "Upgraded",
          "Modernised",
          "Optimised",
          "Accelerated",
        ],
      },
      {
        heading: "Communication: you informed, persuaded or taught",
        items: [
          "Presented",
          "Wrote",
          "Authored",
          "Briefed",
          "Trained",
          "Advised",
          "Influenced",
          "Persuaded",
          "Facilitated",
          "Mediated",
          "Reported",
          "Published",
          "Pitched",
          "Edited",
          "Translated",
        ],
      },
      {
        heading: "Technical: you built or ran the system",
        items: [
          "Built",
          "Developed",
          "Designed",
          "Engineered",
          "Architected",
          "Configured",
          "Programmed",
          "Integrated",
          "Migrated",
          "Deployed",
          "Debugged",
          "Maintained",
          "Prototyped",
          "Documented",
          "Installed",
        ],
      },
    ],
    tips: [
      "Match the verb to your real role. ‘Led’ means you were accountable for the outcome. ‘Contributed to’ or ‘supported’ is honest when you were part of a larger team, and an interviewer will ask.",
      "Put the weight in the result, not the verb. ‘Reduced invoice errors by a third’ needs no adjective; ‘spearheaded a transformational initiative’ says nothing a reader can check.",
      "Words such as spearheaded, orchestrated and revolutionised tend to read as inflation. Use them only when a plainer verb would genuinely undersell what happened.",
      "Avoid starting two bullets in a row with the same verb, but do not reach for an obscure synonym either. Mild repetition is a smaller problem than a word that sounds unlike you.",
      "Use past tense for previous roles, and present tense for ongoing work in your current role.",
      "Replace ‘responsible for’ with the verb for what you did with that responsibility: ‘responsible for onboarding’ becomes ‘trained’, ‘redesigned’ or ‘ran’ depending on the truth.",
      "Test each verb against the interview question ‘what exactly did you do?’. If the honest answer is smaller than the verb, change the verb.",
    ],
    faqs: [
      {
        q: "What are good action verbs for a CV?",
        a: "Good CV action verbs are specific and accurate: led, delivered, reduced, built, negotiated, analysed and improved each describe a clear contribution. The best verb is the one that matches what you actually did, followed by a result. Weak openers such as ‘responsible for’, ‘helped with’ and ‘worked on’ describe a job rather than your contribution to it.",
      },
      {
        q: "Is ‘spearheaded’ a good word for a CV?",
        a: "It can be accurate, but it is so widely used that it often reads as filler. If you started and led an initiative, ‘launched’ or ‘led’ followed by a clear result usually sounds more credible. Whatever verb you choose should never claim more than you did, because an interviewer will ask you to describe your role in detail.",
      },
      {
        q: "Should every bullet on a CV start with an action verb?",
        a: "Most should, because a verb-first bullet makes your contribution clear in the first word a recruiter reads. Occasionally a bullet reads better starting with the scope or result, such as a named project or a figure. Consistency matters more than a rigid rule, so keep the same grammatical pattern within each role.",
      },
    ],
    relatedLinks: [
      { href: "/career-advice/responsibilities-into-achievements", label: "Turning duties into achievements" },
      { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
      { href: "/resources/cv-checklist", label: "CV checklist" },
    ],
    updated: "2026-09-27",
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

/* ------------------------------------------------------------------
 * AUTHOR ENTITY: /about/chanuka-jeewantha
 * The person page (E-E-A-T). /about is the business page.
 * Only facts stated on /about and in the content brief.
 * ------------------------------------------------------------------ */

export type AuthorProfile = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  quickAnswer: string;
  bio: string[];
  expertise: string[];
  howIWork: Array<{ title: string; body: string }>;
  facts: LabelValue[];
  faqs: FaqItem[];
};

export const authorProfile: AuthorProfile = {
  metaTitle: "Chanuka Jeewantha: CV Writer and Career Branding Expert",
  metaDescription:
    "Chanuka Jeewantha personally writes every CV, cover letter and LinkedIn profile. 8+ years and 1,700+ professionals in 40+ countries. His expertise and method.",
  h1: "Chanuka Jeewantha",
  lead: "Career branding specialist and CV writer. For more than eight years I have written CVs, cover letters and LinkedIn profiles for professionals applying into markets around the world, and I write every one of them myself.",
  quickAnswer:
    "Chanuka Jeewantha is a career branding specialist who has written CVs, cover letters and LinkedIn profiles for more than eight years. He has worked with 1,700+ professionals in 40+ countries, from graduates to C-suite, is rated 4.9 from 107 Google reviews, and personally writes every client document and the guides on this site.",
  bio: [
    "I write CVs, cover letters and LinkedIn profiles, and I have done it for more than eight years. In that time I have worked with more than 1,700 professionals in more than 40 countries, from graduates writing a first professional CV to senior leaders and C-suite executives.",
    "The work sits where a strong career meets a weak document. Most of the people I work with are good at what they do. What they struggle with is translation: turning years of responsibility into evidence a stranger can judge in seconds, in the conventions of the market they are applying into.",
    "That cross-border part is where much of my attention goes. A CV that is correct in one country can read as too long, oddly personal or understated in another. Working with clients across so many markets has made me careful about separating conventions that are genuinely local from ones that are simply habit.",
    "I also write on LinkedIn, where more than 30,000 people follow what I publish about CVs and job search. It is the same platform I optimise profiles for, so I see first-hand how headlines, About sections and activity are read there.",
    "Everything on this site carries my name because I am responsible for it. Client documents are written by me personally, with no team and no outsourced writers, and every guide and resource is written or reviewed and edited by me before it is published.",
  ],
  expertise: [
    "CV and resume writing, from graduate to C-suite level",
    "LinkedIn profile optimisation, including headlines and About sections",
    "Cover letters and written application statements",
    "ATS-compatible structure and keyword research from live job descriptions",
    "Turning responsibilities into measurable, evidence-based achievements",
    "Market-specific CV conventions for international applications",
    "Positioning for career changes, career breaks and relocation abroad",
    "Senior leadership and executive positioning",
  ],
  howIWork: [
    {
      title: "I start from real job descriptions",
      body: "Before I write for a role or a market, I read current job advertisements for that role in that market. They show which terms employers actually use, which qualifications they ask for, and how they describe seniority. The keywords in my documents and my guides come from that reading, not from generic lists.",
    },
    {
      title: "Rules are checked at the source",
      body: "Anything that depends on rules rather than convention, such as work rights or professional recognition, is pointed to the official government or recognition body instead of being repeated from memory. Rules change, and a CV writer is not an immigration adviser, so I do not present them as settled fact.",
    },
    {
      title: "Advice comes from the work",
      body: "The guides on this site are drawn from hands-on CV, cover letter and LinkedIn work across different markets. If a piece of advice has not held up in real client documents, it does not go on the site, however often it is repeated elsewhere.",
    },
    {
      title: "Honest about the limits",
      body: "Nobody outside a software vendor can say exactly how a particular applicant tracking system handles a file, and nobody can promise an interview. Where those limits matter, my guides say so plainly rather than hiding them behind confident claims.",
    },
    {
      title: "Dated and kept current",
      body: "Every guide shows the date it was last updated. When a convention shifts, a platform changes a feature or a reader points out an error, the page is revised and the date moves with it. The editorial policy sets out how that works.",
    },
  ],
  facts: [
    { label: "Role", value: "Founder and writer of a founder-led career branding practice" },
    { label: "Experience", value: "8+ years in CV writing and career branding" },
    { label: "Professionals served", value: "1,700+" },
    { label: "Reach", value: "Clients in 40+ countries, working remotely across time zones" },
    { label: "Rating", value: `${site.rating.score} from ${site.rating.count} ${site.rating.label}` },
    { label: "LinkedIn", value: "30,000+ followers" },
    { label: "Writes", value: "CVs, resumes, cover letters, LinkedIn profiles and career guides" },
  ],
  faqs: [
    {
      q: "Who is Chanuka Jeewantha?",
      a: "Chanuka Jeewantha is a career branding specialist who writes CVs, resumes, cover letters and LinkedIn profiles for professionals worldwide. He has more than eight years of experience, has worked with 1,700+ professionals in 40+ countries, and runs a founder-led practice in which he writes every client document personally.",
    },
    {
      q: "Does Chanuka Jeewantha write the CVs himself?",
      a: "Yes. Every CV, cover letter and LinkedIn profile is written personally by Chanuka. Nothing is outsourced or passed to a team of writers, and no template library is used with your name dropped in. That limits how many orders can run at once, which is why the faster delivery options carry a fee.",
    },
    {
      q: "Who writes the career advice on this site?",
      a: "The career advice articles and resources are written by Chanuka, based on hands-on CV work for professionals applying into many different markets. Writing tools may assist with drafts, but every page is reviewed and edited by him before it is published, and each one shows the date it was last updated.",
    },
    {
      q: "Can Chanuka Jeewantha give visa or immigration advice?",
      a: "No. Chanuka is a CV and career branding specialist, not an immigration adviser. Guides on this site that mention work rights are orientation only and point to the destination government's official website. For advice on your own situation, check that official source and, where needed, speak to a qualified, registered adviser in that country.",
    },
  ],
};

/* ------------------------------------------------------------------
 * POLICIES: /editorial-policy and /cookie-policy
 * ------------------------------------------------------------------ */

export const editorialPolicy: LegalDoc = {
  slug: "editorial-policy",
  title: "Editorial policy",
  lead: "Who writes the guides on this site, how they are checked and kept current, and how to report a mistake.",
  updated: "September 2026",
  sections: [
    {
      heading: "Who writes the content",
      body: [
        "The career advice articles, resources and guides on this site are written by Chanuka Jeewantha, who also writes every client document. There are no guest authors and no content agency.",
        "Each page is based on hands-on CV, cover letter and LinkedIn work for professionals applying into different markets, not on rewritten summaries of other websites.",
      ],
    },
    {
      heading: "How pages are reviewed",
      body: [
        "Before a page is published, it is checked for accuracy, for clarity, and against the conventions of the market it covers.",
        "Anything that depends on official rules, such as work rights, visa categories or professional recognition, is checked against the official source. Pages link to that source rather than restating details that may change.",
      ],
    },
    {
      heading: "Dates and updates",
      body: [
        "Every article and resource shows the date it was last updated. Pages are reviewed when a market convention, a platform feature or an official rule changes.",
        "An updated date means the content was actually revised, not simply re-saved.",
      ],
    },
    {
      heading: "Sources",
      body: [
        "Where a page relies on outside information, it cites official or highly authoritative sources, such as government websites and recognised professional bodies.",
        "No statistics, survey figures, case studies or testimonials are invented. Example CV bullets are illustrations of how to write a line, not claims about real people.",
      ],
    },
    {
      heading: "Independence",
      body: [
        "There are no paid placements, sponsored articles or advertisers on this site. No company pays to be mentioned or recommended.",
        "This site sells CV, cover letter and LinkedIn writing services, and guides link to them where they are relevant. The advice is written to be useful whether or not you buy anything.",
      ],
    },
    {
      heading: "Use of AI and writing tools",
      body: [
        "Drafts and research notes for articles and resources may be assisted by writing tools, including AI tools. That is stated here plainly rather than hidden.",
        "No page is published as a tool produced it. Every page is reviewed, edited and checked by Chanuka, who is responsible for what it says. Client documents are covered separately: each one is written personally by Chanuka.",
      ],
    },
    {
      heading: "Corrections",
      body: [
        "If you find an error, email the contact address on this site with the page address and what is wrong. Every report is read.",
        "Confirmed errors are corrected promptly, and the page's updated date changes to reflect the correction.",
      ],
    },
    {
      heading: "Not legal or immigration advice",
      body: [
        "Content about work rights, visas or relocation is general orientation only. It is not legal or immigration advice and may not reflect the latest rules.",
        "Always check the destination government's official website, and for decisions about your own situation, speak to a qualified, registered adviser.",
      ],
    },
  ],
};

export const cookiePolicy: LegalDoc = {
  slug: "cookie-policy",
  title: "Cookie policy",
  lead: "Which cookies this site uses, and which it does not.",
  updated: "September 2026",
  sections: [
    {
      heading: "The short version",
      body: [
        "The public site does not currently set advertising or analytics cookies. You can read every page without a tracking cookie being placed on your device.",
        "The only cookies used are strictly necessary ones, described below.",
      ],
    },
    {
      heading: "Strictly necessary cookies",
      body: [
        "A secure sign-in cookie is set when an administrator signs in to manage the site. It keeps that session authenticated and protected. Visitors who do not sign in do not receive it.",
        "These cookies are not used for advertising, and they are not used to follow you across other websites.",
      ],
    },
    {
      heading: "Payment provider",
      body: [
        "When you pay for an order, the payment is handled by a third-party payment provider. Its checkout pages may set their own cookies, for example to complete the payment and prevent fraud, under that provider's own policies.",
        "Those cookies are controlled by the provider, not by this site.",
      ],
    },
    {
      heading: "Managing cookies",
      body: [
        "You can block or delete cookies in your browser settings at any time. Blocking them will not affect reading the public site, though it may stop a payment page from working.",
      ],
    },
    {
      heading: "Changes to this policy",
      body: [
        "If analytics or any other non-essential cookies are added in future, this policy will be updated before they are introduced, and you will be asked for consent where the law requires it.",
        "Questions about cookies can be sent to the contact address on this site.",
      ],
    },
  ],
};
