import type { CareerLevel, CareerSituation } from "@/lib/career-stages";

/**
 * Additional career levels and situations (commercial pages).
 * Levels: student, entry-level, manager, director, c-suite.
 * Situations: promotion, overqualified-candidate, freelance-to-permanent.
 */

export const levelsExtra: CareerLevel[] = [
  {
    slug: "student",
    name: "Student",
    years: "Still studying",
    metaTitle: "Student CV Writing Service",
    metaDescription:
      "Student CV writing for internships, placements and part-time roles. Projects, coursework and casual jobs turned into evidence an employer can act on.",
    lead: "A student CV is judged against other students, not against professionals. That changes what counts as strong.",
    overview:
      "Internship and placement recruiters read large numbers of CVs from people on the same course with the same modules. What separates them is rarely the grade. It is evidence of doing something with the course: a project that shipped, a part-time job held for two years, a society budget managed properly. The CV has to put that evidence in the top half of page one.",
    cvFocus: [
      "Expected graduation date stated clearly, because many internship schemes filter on it",
      "One or two projects written as the problem, your part and the result",
      "Part-time work framed around reliability, customers and responsibility",
      "Skills tied to where you used them, not a list of software you have opened once",
      "Availability: dates, hours and how the role fits around study",
    ],
    whatChanges:
      "Compared with a school-leaver CV, the document is now screened at volume, often through the same applicant tracking system used for experienced hires. A design a teacher liked can fail a parser, and achievements from age sixteen start to read as padding.",
    commonMistakes: [
      "School results given more space than university work",
      "No expected graduation date, so the reader cannot tell whether you are eligible",
      "A different visual design for every application instead of one clean, parseable format",
      "A part-time job described as \"general duties\" when it involved cash handling, training or opening up",
      "Applying for a summer internship with a CV written for a graduate scheme",
    ],
    quickAnswer:
      "A student CV should lead with your course, expected graduation date and the one or two projects or jobs that best prove you can do the work you are applying for. Keep it to one page, write part-time work as real experience, and state your availability. Chanuka writes student CVs from LKR 3,950, for internships, placements and part-time roles.",
    faqs: [
      {
        q: "How do I write a CV as a student with no experience?",
        a: "Start with what you have done rather than what you lack: projects, coursework with a real output, part-time work, volunteering and society roles. Write each one like a job, with what you did and what came of it. Put your course and expected graduation date at the top, and keep the whole document to one page.",
      },
      {
        q: "Should a student CV be one page?",
        a: "Yes, for almost every student a one-page CV is right. Recruiters screening internship applications spend little time on each one, and a second page usually holds school grades and hobbies that weaken the first. The exception is a research or academic application, where publications or lab work genuinely need the space.",
      },
      {
        q: "What should I put on a CV for an internship?",
        a: "Put the evidence that matches the internship's requirements first: projects with a clear result, relevant modules only if they produced something, and any work showing responsibility. Add your expected graduation date and availability, since many schemes are open only to penultimate or final-year students. A short profile naming the area you want to work in helps the reader place you.",
      },
      {
        q: "Is it worth paying for a CV as a student?",
        a: "It is worth it when you are applying for competitive internships or placements and your applications are not getting responses. A professionally written CV will not replace experience you do not have, but it will present what you do have properly. For casual part-time applications, a careful self-written CV is usually enough.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "entry-level",
    name: "Entry Level",
    years: "Up to 2 years in work",
    metaTitle: "Entry-Level CV Writing Service",
    metaDescription:
      "Entry-level CV writing for your first move after starting work, with or without a degree. Turn one or two years of real work into a case for the next role.",
    lead: "Once you have a year or two in work, you are no longer competing on potential. You are competing on what you did in your first job, and most people undersell it.",
    overview:
      "Entry-level candidates arrive by different routes: apprenticeships, school-leaver jobs, trainee schemes, or a degree followed by a first role. The route matters less than people fear. What an employer is checking is whether you learned the job, took on more than the minimum, and can now be trusted with the next step without being taught from scratch.",
    cvFocus: [
      "The current job at the top, written with specifics rather than the induction checklist",
      "Evidence you progressed: extra tasks, training newer starters, systems you picked up quickly",
      "Qualifications earned on the job, such as apprenticeship standards or vendor certificates",
      "A profile that names the next role rather than restating the current one",
      "Education compressed to a few lines now that real work exists",
    ],
    whatChanges:
      "Compared with a graduate or student CV, education moves down and the job moves up. A degree, if you have one, becomes a line rather than a section. If you do not have one, the CV no longer needs to compensate, because a year or two of employment is evidence a degree cannot provide.",
    commonMistakes: [
      "Keeping the student CV structure with education still on top",
      "Describing the first job in the words of the advert you applied to",
      "Presenting an apprenticeship route as if it were a weakness",
      "Leaving out responsibilities that grew after the first few months",
      "Short early roles listed with no hint of why each move happened",
    ],
    quickAnswer:
      "An entry-level CV, for someone with up to two years in work, should lead with your current or most recent job and show what you learned and took on in it, not your education. Apprenticeships and on-the-job qualifications count as real credentials. Chanuka writes entry-level CVs from LKR 3,950 for people making their first job move, with or without a degree.",
    faqs: [
      {
        q: "How do I write a CV with only one year of experience?",
        a: "Put that year at the top and describe it in detail: what you were trusted with, what you learned to do independently, and anything you did beyond your original tasks. One year of real work is stronger evidence than any amount of coursework, so education moves below it and shrinks to a few lines.",
      },
      {
        q: "Do I need a degree on my CV for entry-level jobs?",
        a: "No, many entry-level roles are open to candidates without a degree, and a CV built around work experience competes well for them. Lead with your job, apprenticeship or trainee scheme, list any recognised qualifications earned along the way, and let the evidence of work do what a degree would otherwise do. Check each advert's stated requirements before applying.",
      },
      {
        q: "How do I list an apprenticeship on my CV?",
        a: "List an apprenticeship as a job in your experience section, with the employer, your job title and the dates, and name the qualification or standard it led to. Describe the work you did rather than the training programme. Employers value apprenticeships because they combine formal learning with real output, so there is no reason to play one down.",
      },
      {
        q: "Is it bad to leave my first job after a year?",
        a: "No, leaving a first job after about a year is common and rarely counts against you if the move has a clear reason, such as broader responsibility or a better route into your chosen field. What raises questions is several very short roles in a row. On the CV, the new application should show what that first year taught you.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "manager",
    name: "Manager",
    years: "First management role to managing managers",
    metaTitle: "Manager CV Writing Service",
    metaDescription:
      "CV writing for first-line and middle managers. Show the team you ran, what it delivered and the decisions you made, not just the work you still do yourself.",
    lead: "A manager CV fails most often in one way: it describes the manager's own work and forgets the team.",
    overview:
      "People hiring for management roles want to know three things: how many people you were responsible for, what that group delivered under you, and how you handled the parts of management that never appear in a job title, such as hiring, performance problems and competing priorities. A first-time manager and someone managing other managers need different emphasis, but both need the team to be visible.",
    cvFocus: [
      "Team size, structure and whether you hired any of it",
      "What the team delivered, in the numbers the business actually tracked",
      "People outcomes: promotions, retention, performance turned around",
      "Operational ownership: rotas, budgets, targets, process changes",
      "For managers of managers, how you set direction through other leaders",
    ],
    whatChanges:
      "Compared with a professional CV, personal output stops being the headline. Strong individual contributors who become managers often keep writing about their own tasks, which tells the reader they have not made the transition yet, even when they have.",
    commonMistakes: [
      "\"Managed a team\" with no size, structure or result attached",
      "Bullets about technical work that a direct report now does",
      "No mention of hiring, development or difficult performance conversations",
      "Team results claimed as purely personal ones, which interviewers test quickly",
      "A first management role buried under an old job title at the same employer",
    ],
    quickAnswer:
      "A manager CV should show the team you were responsible for, what that team delivered, and how you developed the people in it. State team size and scope in every management role, attach results the business measured, and cut detail about your own hands-on work. Chanuka writes manager CVs for first-line and middle managers, priced by years of experience.",
    faqs: [
      {
        q: "How do I write a CV for my first management role?",
        a: "Lead with any management you have already done, even informally: supervising shifts, training new starters, running a project team or covering for your manager. Give numbers for team size and results. Then show why you are ready, through decisions you made and people you helped improve. The CV must read as a manager's, not a strong individual contributor's.",
      },
      {
        q: "How do I show leadership on a CV?",
        a: "Show leadership through results that came from other people: what your team delivered, who you hired or developed, and what improved because of decisions you made. Adjectives like \"strong leader\" add nothing. A bullet such as \"Rebuilt a team of 8 after two resignations and delivered the quarter's targets with no overtime spend\" proves it.",
      },
      {
        q: "Should a manager CV be two pages?",
        a: "Yes, two pages is the right length for most managers. It gives enough room to show scope and results in recent management roles while compressing earlier individual contributor work. Going beyond two pages usually means older roles have not been cut back, and one page is too tight for anyone with several years of management behind them.",
      },
      {
        q: "How do I show I manage managers on my CV?",
        a: "State the structure directly: how many managers reported to you and the total headcount beneath them. Then show how you ran the area through those leaders, such as setting targets, standardising process across teams, or developing a manager into a bigger role. Panels at this level test whether you delegate through people or still do the work yourself.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "director",
    name: "Director",
    years: "Head of function",
    metaTitle: "Director CV Writing Service",
    metaDescription:
      "CV writing for directors and heads of function. Show your P&L, the strategy you set and the commercial results it drove, in a CV built for senior panels.",
    lead: "A director is hired to own a function's results. The CV has to show a function that performed differently because you ran it.",
    overview:
      "At director level the question is no longer whether you can manage people. It is whether you can set a function's direction, hold its budget or P&L, and make it work with the rest of the business. Directors are usually assessed by the leadership team they would join, and that panel reads for commercial judgement, prioritisation and results sustained over a year or more, not individual project wins.",
    cvFocus: [
      "Function scope: budget or P&L, headcount, sites, markets",
      "The strategy you set for the function and the results it produced",
      "Cross-functional effect: what changed in sales, finance or operations because of your function",
      "Decisions with trade-offs: what you stopped, cut or reinvested in",
      "Your seat on the leadership team and what you contributed there",
    ],
    whatChanges:
      "Compared with a manager CV, operational detail gives way to direction and money. The reader assumes the function runs. They want to see where you took it, what you spent to get there, and how it moved the company's numbers.",
    commonMistakes: [
      "A list of teams managed with no budget or P&L figure",
      "Strategy described as a document you wrote rather than a result you delivered",
      "Every achievement framed inside the function, none at company level",
      "Project wins given more space than the function's annual performance",
      "Leaving out who you reported to and which leadership team you sat on",
    ],
    quickAnswer:
      "A director CV should show the function you owned, the budget or P&L you were accountable for, the strategy you set and the commercial results that followed. Write for the leadership team you would join: fewer operational tasks, more decisions, trade-offs and company-level outcomes. Chanuka writes director CVs at the Executive tier (LKR 19,500), for heads of function moving up or across.",
    faqs: [
      {
        q: "How do I write a CV for a director role?",
        a: "Open with a summary stating your function, scope and the kind of results you deliver, then give each director-level role a line of context and four to six outcome-led bullets. Include budget or P&L size, headcount and reporting line. Compress everything below director level. The reader is judging whether you can own a function's results, so every line should answer that.",
      },
      {
        q: "Should I include P&L on my CV?",
        a: "Yes, if you held P&L or budget accountability, state it with a figure or a clear range. It is one of the first things a senior panel looks for because it defines the weight of the role. If confidentiality prevents exact numbers, use a range or a relative measure, such as a share of group revenue.",
      },
      {
        q: "How long should a director CV be?",
        a: "Two pages is the standard for a director CV, and three is reasonable only when a long career includes several director-level roles that each need space. What matters is density: every role below director should shrink to one or two lines. Panels read director CVs carefully, but they still stop reading when the content starts to repeat.",
      },
      {
        q: "How do I move from senior manager to director on my CV?",
        a: "Rewrite your current role around function-level impact rather than team delivery: the budget you influence, decisions you shaped in leadership meetings, and results that reached the company's numbers. Show any time you acted up or deputised for a director. The panel needs evidence that you already think at function level, not a promise that you will.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "c-suite",
    name: "C-Suite",
    years: "CEO, CFO, COO, CTO and equivalent",
    metaTitle: "C-Suite CV Writing Service",
    metaDescription:
      "C-suite CV writing for CEOs, CFOs, COOs and CTOs. Built for boards, investors and search firms: enterprise results, governance and the mandate you delivered.",
    lead: "A C-suite CV is read by people deciding whether to hand you the company. The questions are about the enterprise, not the function.",
    overview:
      "Chief executive and chief officer appointments usually run through an executive search firm and end with a board or an investor group. Those readers want enterprise outcomes: value created, capital raised or allocated, a transformation completed, a crisis handled. They also want governance evidence, because a chief officer answers to a board. The CV is often read alongside a search consultant's own candidate report, so it has to be precise and consistent.",
    cvFocus: [
      "Enterprise results: valuation, revenue, EBITDA, cash, market share",
      "The mandate a board or investors gave you, and whether you delivered it",
      "Governance: board reporting, audit and risk, regulators, shareholders",
      "Capital events: fundraising, acquisitions, listings, refinancing, exits",
      "For CFO, COO or CTO roles, the enterprise effect of your function rather than its internal workings",
    ],
    whatChanges:
      "An executive CV shows senior results inside a business. A C-suite CV shows you answering for the whole business to a board. The remit becomes enterprise-wide, the audience becomes chairs, investors and search consultants, and the core question shifts from what you delivered to what the owners got for their money.",
    commonMistakes: [
      "Presenting the company's results without saying which ones you caused",
      "No mention of the board, the investors or the mandate you were hired to deliver",
      "Function-level detail that belongs on a director CV",
      "Confidential figures dropped entirely instead of expressed as ranges or multiples",
      "A CV that contradicts the LinkedIn profile the search consultant has already read",
    ],
    quickAnswer:
      "A C-suite CV should show the enterprise results you were accountable for, the mandate a board or investors gave you, and how you governed while delivering it. It is written for chairs, investors and executive search firms, so it leads with value created and major decisions, not functional detail. Chanuka writes C-suite CVs for CEOs, CFOs, COOs and CTOs at the Executive tier (LKR 19,500).",
    faqs: [
      {
        q: "How is a C-suite CV different from an executive CV?",
        a: "A C-suite CV is accountable for the whole enterprise, while an executive CV typically shows senior results within a business. A chief officer's CV has to cover board relationships, investor mandates, capital events and enterprise value. It is read by chairs and search firms deciding who runs the company, so functional achievements become supporting evidence rather than the main story.",
      },
      {
        q: "How long should a CEO CV be?",
        a: "Two to three pages is standard for a CEO CV. The first page carries the argument: a summary of the situations you lead best in and your largest enterprise results. Earlier roles compress to a line each. Search firms often prepare their own candidate report, but they build it from your CV, so length should serve precision rather than completeness.",
      },
      {
        q: "Do executive search firms want a CV?",
        a: "Yes, executive search firms almost always ask for a CV, even when they approached you first. Consultants use it to brief their client and to write the candidate report the board reads. A precise CV that states remit, results and context reduces the risk of your record being summarised inaccurately before you have met anyone.",
      },
      {
        q: "Should a CFO CV include confidential financial figures?",
        a: "No, do not disclose figures you are not entitled to share, but do not leave out scale either. Use published numbers where the company reports them, and express private figures as ranges, growth rates or multiples. A CFO CV with no sense of scale leaves the board unable to judge the role, which is worse than an approximate figure.",
      },
    ],
    updated: "2026-09-27",
  },
];

export const situationsExtra: CareerSituation[] = [
  {
    slug: "promotion",
    name: "Applying for a promotion",
    metaTitle: "CV Writing for a Promotion or Internal Role",
    metaDescription:
      "A CV for an internal promotion or a step up at another employer. Prove you already work at the next level, not just that you do your current job well.",
    lead: "A promotion CV is not a longer version of your current CV. It is evidence that you are already doing parts of the next job.",
    problem:
      "Internal panels know you, which cuts both ways: they have seen your work, but they have also filed you under your current title. External employers hiring a step up have the opposite concern and wonder whether you can do a job you have not held. In both cases, a CV that proves you are good at your present role answers the wrong question.",
    approach: [
      {
        heading: "Map the next role's requirements first",
        body: "Take the job description or the competency framework for the level above and find evidence for each item. Where you have acted up, deputised or led something above your grade, that is the content that matters most.",
      },
      {
        heading: "Write for a panel that already knows you",
        body: "Internal readers skip what they already know and look for what they do not. Lead with work they may not have seen: cross-team projects, results outside your manager's line of sight, problems you resolved before they escalated.",
      },
      {
        heading: "Show scope growing within the same role",
        body: "If you have been in one job for several years, split it by period or by responsibility so the growth is visible. A single block of bullets under one title hides progression that actually happened.",
      },
      {
        heading: "Follow the internal format when there is one",
        body: "Many organisations ask for a set template, a competency statement or a word limit. Follow it exactly. An internal process is also testing whether you can work within its rules.",
      },
    ],
    commonMistakes: [
      "Submitting the same CV you would send to an external employer",
      "Describing your current duties well and the next level's duties not at all",
      "Assuming the panel knows your achievements because they work nearby",
      "One undivided block for five years in the same role",
      "Ignoring the organisation's competency framework or template",
    ],
    quickAnswer:
      "A CV for a promotion should prove you already work at the next level, not that you do your current job well. Map the higher role's requirements, then show where you have acted up, led beyond your grade or delivered results the panel may not have seen. Chanuka writes promotion CVs and cover letters for internal applications and step-up roles at other employers.",
    faqs: [
      {
        q: "Do I need a CV for an internal promotion?",
        a: "Usually yes, and it should be written specifically for the promotion. Many organisations ask for a CV or a structured application even for internal moves, and the panel may include people from outside your team. Treat it as a formal application: map the new role's requirements and show evidence for each, rather than relying on your reputation.",
      },
      {
        q: "How do I write a CV for a promotion within the same company?",
        a: "Split your time at the company into roles or phases so progression is visible, then lead each with the work closest to the level you are applying for. Include acting-up periods, projects led across teams and results the panel may not know about. Use the organisation's own terms and competency language wherever they fit truthfully.",
      },
      {
        q: "How do I show acting up or stretch assignments on a CV?",
        a: "List an acting-up period as a sub-entry under the role, with the title you covered, the dates and what you delivered while in it. For stretch assignments, name the project, your part in it and the result. These are often the strongest evidence in a promotion application, so place them near the top of the relevant role.",
      },
      {
        q: "How do I apply for a job one level above my current role?",
        a: "Write the CV for the target role, not the current one. Use the job description to decide which parts of your present work to lead with, highlight any responsibility you already hold at the higher level, and quantify your scope. Employers hiring a step up expect some gap between your title and theirs; the CV's job is to show that gap is small.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "overqualified-candidate",
    name: "Applying below your level",
    metaTitle: "CV Writing for Overqualified Candidates",
    metaDescription:
      "Stepping down or applying below your level? A CV that answers the flight-risk worry, trims seniority signals and makes the move read as a deliberate choice.",
    lead: "When you apply below your level, the employer's worry is not whether you can do the job. It is whether you will stay.",
    problem:
      "Recruiters screening an overqualified CV tend to assume three things: you will leave when something better appears, you will expect more pay than the role offers, and you may be hard to manage. None of this is said out loud. The candidate simply does not get called, and a CV that lists every senior achievement makes each assumption more likely.",
    approach: [
      {
        heading: "Give the reason in the opening lines",
        body: "A short profile that explains the move, such as a return to hands-on work, a new location or a different balance, turns an anomaly into a decision. Without it, the reader invents a reason, and it is rarely a flattering one.",
      },
      {
        heading: "Edit for the role, not for your career",
        body: "Lead with the experience that matches the job and compress the rest. Titles stay accurate, but bullets about board reporting or leading large teams can be shortened or cut when the role will never use them.",
      },
      {
        heading: "Answer commitment with evidence",
        body: "Long tenures elsewhere, a clear link between this role and what you want next, or ties to the location all speak to staying. The CV cannot promise commitment, but it can remove the reasons to doubt it.",
      },
      {
        heading: "Handle pay in the cover letter",
        body: "If salary is the obvious unasked question, one sentence in the cover letter confirming you have seen the range and are comfortable with it removes a silent objection.",
      },
    ],
    commonMistakes: [
      "Sending the senior CV unchanged and expecting the reader to see the fit",
      "Changing or downgrading job titles, which fails any reference check",
      "No explanation for the move, leaving the reader to assume the worst",
      "Leading with leadership achievements when the role is hands-on",
      "A profile that apologises for being overqualified instead of explaining the choice",
    ],
    quickAnswer:
      "If you are overqualified, write a CV that explains why you want this role and edits your experience to fit it. State the reason for the move in the profile, lead with the most relevant work, compress senior detail the job does not need, and keep every title accurate. Chanuka writes CVs for candidates stepping down or across who keep being screened out as a flight risk.",
    faqs: [
      {
        q: "How do I write a CV if I am overqualified for the job?",
        a: "Tailor the CV to the job rather than to your whole career. Open with a short profile explaining why you want this particular role, lead with the experience that matches it, and shorten achievements the role will never use. Keep titles and dates accurate. The aim is to make the fit obvious and the move look deliberate.",
      },
      {
        q: "Should I remove experience from my CV to avoid looking overqualified?",
        a: "You can shorten older and less relevant detail, but do not remove whole roles or change titles. Cutting jobs creates unexplained gaps and misrepresents your history, which tends to surface in background checks. Trimming bullets and compressing early roles is normal editing. The line is between presenting relevant evidence and hiding the truth.",
      },
      {
        q: "How do I convince an employer I will not leave if I am overqualified?",
        a: "Give a specific, believable reason for wanting the role, and back it with evidence of staying power, such as long tenures or a real connection to the organisation or location. Put the reason in your CV profile and cover letter, and be ready to discuss it at interview. Vague enthusiasm does not answer the flight-risk concern; a concrete reason does.",
      },
      {
        q: "Is it OK to apply for a job below my level?",
        a: "Yes, applying below your level is a legitimate choice, whether for balance, a new field, relocation or a return to hands-on work. The risk is not the move itself but an application that fails to explain it. A well-edited CV and a one-line reason in the profile are usually what gets you considered fairly.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "freelance-to-permanent",
    name: "Moving from freelance to permanent",
    metaTitle: "CV for Freelancers Moving to Permanent Roles",
    metaDescription:
      "CV writing for contractors, freelancers and consultants moving into permanent roles. Group client work, show continuity and answer the question of why now.",
    lead: "A freelance career often looks weaker on a CV than it was in practice. The work was real; the format makes it look scattered.",
    problem:
      "Employers reading a contractor or freelancer CV see a long list of short engagements and wonder whether you can commit to one organisation, work inside a team you did not choose, and accept a manager. A client-by-client list also hides the depth that repeat work and long contracts actually demonstrate.",
    approach: [
      {
        heading: "Group engagements under one heading",
        body: "Present freelance or consultancy work as a single role, such as Independent Consultant or Contract Data Engineer, with the full date range. Beneath it, list the most relevant clients or projects. The reader sees continuity rather than twelve separate jobs.",
      },
      {
        heading: "Pick the three or four engagements that matter",
        body: "Choose the projects closest to the permanent role and describe them properly: the client's sector, the problem, your part and the result. Smaller or unrelated work can be summarised in a single line.",
      },
      {
        heading: "Show you worked inside teams",
        body: "Mention embedded contracts, long engagements, repeat clients and the internal teams you worked alongside. These answer the unspoken question of whether you can be a colleague rather than a supplier.",
      },
      {
        heading: "Explain the move in the profile",
        body: "One sentence on why you want a permanent role, such as owning a product long term or building a team, gives the reader a reason that is about the job rather than about a quiet contract market.",
      },
    ],
    commonMistakes: [
      "Every client listed as a separate job, turning a steady career into a patchwork",
      "Naming clients covered by a confidentiality agreement, which raises questions about discretion",
      "Describing deliverables handed over rather than outcomes achieved",
      "Day rates or business admin appearing anywhere on the CV",
      "No reason given for wanting a permanent role",
    ],
    quickAnswer:
      "A CV for moving from freelance or contract work to a permanent role should group your engagements under one continuous heading, detail the three or four most relevant projects, and show that you worked inside teams, not just for them. State in the profile why you want a permanent role. Chanuka writes CVs for contractors, freelancers and consultants making this move.",
    faqs: [
      {
        q: "How do I list freelance work on a CV?",
        a: "List freelance work as one role, with a title such as Freelance Copywriter or Independent Consultant and the full date range. Under it, describe the most relevant clients or projects in the same outcome-led format you would use for any job. Group smaller work into a single summary line so the section reads as one continuous career.",
      },
      {
        q: "How do I explain why I want to leave contracting for a permanent job?",
        a: "Give a reason that points towards the job rather than away from contracting, such as wanting long-term ownership of a product, a team to develop, or depth in one organisation. Put a short version in your CV profile and expand it in the cover letter. Employers are reassured by a forward-looking reason and wary of one that sounds like a slow market.",
      },
      {
        q: "Do employers see freelancers as a risk for permanent roles?",
        a: "Some do, mainly because they worry a freelancer will return to contracting when rates rise or will struggle with internal processes. The CV can reduce that concern by showing long or repeat engagements, work embedded in client teams and a clear reason for the move. Many employers also value the breadth and self-management that freelancing builds.",
      },
      {
        q: "Should I name my freelance clients on my CV?",
        a: "Yes, name clients when you are allowed to and when the names help, since recognised organisations add credibility. Where an agreement restricts disclosure, describe the client instead, such as \"a UK retail bank\" or \"a Series B fintech\". Never name a client you have agreed to keep confidential; employers notice, and it undermines trust.",
      },
    ],
    updated: "2026-09-27",
  },
];
