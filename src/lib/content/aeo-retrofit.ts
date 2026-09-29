/**
 * AEO RETROFIT FOR EXISTING ENTITIES
 * ------------------------------------------------------------------
 * Answer-engine fields (quickAnswer + FAQs) for pages whose data lives
 * in older files. Keyed by the entity slug so templates can merge them
 * in without the source files being edited.
 *
 * Rules: quickAnswer 40 to 70 words, answer-first, consistent with the
 * page. FAQ answers 40 to 90 words, answer-first, adding information
 * the page does not already state. No invented statistics. Visa and
 * licensing notes are orientation only and point to official sources.
 */

import type { AeoFields } from "@/lib/content/types";

/* ------------------------------------------------------------------ */
/* Job roles: /job-roles/{slug}                                        */
/* ------------------------------------------------------------------ */

export const aeoRoles: Record<string, AeoFields> = {
  "software-engineer": {
    quickAnswer:
      "A strong Software Engineer CV names your current stack in the first screen, sizes your work with scope such as traffic, data or team, and proves judgement through bullets that state the problem, the choice you made and the measurable result. Parsers screen on the stack; engineers screen on judgement. A CV that lists every technology you have touched fails both readers.",
    faqs: [
      {
        q: "Should I put a GitHub link on my software engineer CV?",
        a: "Yes, if what is there supports the CV. Link a profile or specific repositories that show code you would be happy for a hiring engineer to read, with a clear README. An empty or abandoned profile works against you, so point to one or two strong projects instead. For senior candidates, the link matters less than the design decisions described in the experience section.",
      },
      {
        q: "How many programming languages should I list on a software engineer CV?",
        a: "List only the languages you could be interviewed on tomorrow, usually three to six. Group them by depth, for example primary and working knowledge, so the reader can see your current stack at a glance. A line of fifteen languages makes it impossible to tell what you actually use, and the interview will test whichever one you are weakest in.",
      },
      {
        q: "Do I need a different CV for frontend, backend and full-stack roles?",
        a: "Usually yes, at least a different top third. The experience stays the same, but the summary, the order of the skills block and which bullets lead each role should shift toward the target. A backend role wants latency, data and reliability evidence first; a frontend role wants performance, accessibility and user-facing outcomes. One generic version undersells you for both.",
      },
      {
        q: "How much does a software engineer CV rewrite cost?",
        a: "With Chanuka Jeewantha it costs $129, $189 or $279 in USD, depending on whether you have under 2 years, 3 to 9 years, or 10 or more years of experience. Standard delivery is 5 to 7 days, with faster options at a surcharge, and one revision round is included. Chanuka writes every CV personally, and you receive editable Word and PDF files.",
      },
    ],
  },
  "data-analyst": {
    quickAnswer:
      "A Data Analyst CV gets interviews when it shows decisions, not dashboards. Name your tools once, with SQL and one BI platform near the top, then write each bullet as the business question, what you found, and what changed because of it. Tool lists get you through keyword screening, but most applicants share the same tools, so outcomes are what separate you.",
    faqs: [
      {
        q: "Should I include a portfolio on a data analyst CV?",
        a: "Yes, a short portfolio helps most at junior level or when moving into analytics from another field. Link two or three pieces that show the full chain: a messy dataset, the cleaning, the analysis and a clear recommendation. Public dashboards on their own rarely impress. Never publish an employer's data; rebuild the work on a public dataset instead.",
      },
      {
        q: "Is Python required on a data analyst CV?",
        a: "No, but it widens the roles you qualify for. Many analyst roles are built on SQL and a BI tool and list Python or R as desirable. If you use it, say what for, such as automating a report or running a statistical test, because \"Python\" with no context reads as a course rather than a working skill.",
      },
      {
        q: "How do I show impact on a data analyst CV if I never saw the final result?",
        a: "Describe the decision your analysis fed, even if you did not see the outcome. \"Analysis used by the pricing committee to set the annual discount structure\" is honest and specific. You can also ask former colleagues what happened, or quantify the work itself: records reconciled, hours saved, reports retired. Saying nothing about impact is always the weaker option.",
      },
      {
        q: "What is the difference between a data analyst CV and a data scientist CV?",
        a: "A data analyst CV leads with business questions answered and decisions influenced; a data scientist CV leads with models built, how they were validated and what they did in production. The roles overlap, so choose the story your evidence supports. A data science claim resting on one course project is easy for a technical interviewer to expose.",
      },
    ],
  },
  "project-manager": {
    quickAnswer:
      "A Project Manager CV wins interviews by sizing you in the first third: largest budget, team size, project length and domain. After that, bullets should show judgement under pressure, such as recovering a slipping project or cutting scope with the sponsor. \"Delivered on time and within budget\" with no project named is the most common line on PM CVs, and it proves nothing.",
    faqs: [
      {
        q: "Do I need a PMP or PRINCE2 to get a project manager job?",
        a: "Not always, but many employers screen for one. PMP tends to be requested more in North America and the Gulf, while PRINCE2 is more common in the UK and in some Australian public sector roles. If you hold one, put it beside your name or in the top third. If you are studying for one, state the expected completion date.",
      },
      {
        q: "How do I write a project manager CV if a project failed or was cancelled?",
        a: "Include it, and write about what you controlled. A cancelled project where you surfaced the risk early, protected the budget or redeployed the team shows judgement that a smooth project cannot. State the outcome plainly, then your decisions. Hiring managers know projects get cancelled; what worries them is a candidate who never mentions a single problem.",
      },
      {
        q: "Should I list every project on my project manager CV?",
        a: "No. List the three to five projects per role that best show scale and relevance to the job you want, and summarise the rest in one line, such as \"plus 12 smaller internal projects under $100k\". A long project list with no numbers buries your strongest work. Contract PMs can keep a separate project appendix for employers who ask for one.",
      },
      {
        q: "Which CV package fits a senior project manager with 10 or more years?",
        a: "The $279 tier covers CV writing for 10 or more years of experience, including programme and executive-level candidates. It includes one revision round and editable Word and PDF files, with standard delivery in 5 to 7 days. Adding LinkedIn optimisation or a cover letter saves 20% on two services, or 30% if you take all three.",
      },
    ],
  },
  accountant: {
    quickAnswer:
      "An Accountant CV must show three things in the first five lines: your qualification status, the accounting systems you use, and the scope you were responsible for, such as turnover, entities and team size. Recruiters filter on those before reading anything else. After that, the bullets should prove ownership of the close and improvements to how the numbers are produced.",
    faqs: [
      {
        q: "How should I show part-qualified ACCA or CIMA status on my CV?",
        a: "State exactly how many exams or levels you have passed and when you expect to finish, for example \"ACCA: 9 of 13 exams passed, finals expected June 2027\". \"ACCA student\" alone is too vague to screen. Put it in the header line or profile, because recruiters often filter on qualification stage before they read any experience.",
      },
      {
        q: "Should an accountant CV mention IFRS or local GAAP?",
        a: "Yes, always name the standard you reported under, and name both if you have used both. An overseas employer uses it to judge how much of your experience transfers. If you prepared accounts under local standards but are applying to an IFRS market, mention any IFRS conversion, consolidation or training work, because that is the bridge they are looking for.",
      },
      {
        q: "What Excel skills should an accountant put on a CV?",
        a: "Name the specific skills, not \"advanced Excel\". Lookups, pivot tables, Power Query, three-statement or cash flow models, and macros tell a reader what you can actually build. Better still, attach one to an outcome, such as a reconciliation template that took a day out of the close. Every accountant claims Excel; only the specific claims are believed.",
      },
      {
        q: "Can I get my accountant CV and LinkedIn profile done together?",
        a: "Yes. Booking CV writing and LinkedIn optimisation together saves 20%, and adding a cover letter as well saves 30% across all three. Chanuka writes each one personally from the same brief, so your qualification, systems and scope read consistently everywhere, which matters when a recruiter checks your LinkedIn straight after reading your CV.",
      },
    ],
  },
  "business-analyst": {
    quickAnswer:
      "A Business Analyst CV must settle which kind of BA you are, whether process, systems, data or product-facing, and in which domain, within the summary. Each bullet should then follow the chain: the problem, what you investigated, what you recommended, and what the business adopted. CVs that repeat \"gathered requirements\" under every role describe a task, not a contribution.",
    faqs: [
      {
        q: "Should I list certifications like CBAP on a business analyst CV?",
        a: "List them if you have them, but they rarely outweigh domain experience. IIBA certifications such as ECBA, CCBA and CBAP, or BCS qualifications in the UK, signal method knowledge, while employers usually hire BAs for what they know about the business. Put the certification in the profile or a short credentials line, not above your experience.",
      },
      {
        q: "How technical should a business analyst CV be?",
        a: "As technical as the roles you are targeting, and no more. A systems or data BA should name SQL, APIs, data mapping and the systems they specified. A process BA should lead with modelling, workshops and operational change. Pick the side your evidence supports and let the other sit in the background, rather than splitting the CV evenly between them.",
      },
      {
        q: "Can I move into business analysis from operations or customer service?",
        a: "Yes, and your domain knowledge is the advantage. Someone who ran a claims or billing team already knows the processes a BA would map. Write the CV around the analytical work you did in that role: fixes you proposed, reports you built, system changes you tested, and the business outcome of each. Then add any BA training to show the move is deliberate.",
      },
      {
        q: "How quickly can I get a business analyst CV written?",
        a: "Standard delivery is 5 to 7 days and is included in the price. If you have an application deadline, fast delivery in 2 to 3 days adds 20%, and delivery within 24 hours adds 50%. The clock starts once your brief and current CV are in, so a complete brief that lists your artefacts and outcomes speeds everything up.",
      },
    ],
  },
  "civil-engineer": {
    quickAnswer:
      "A Civil Engineer CV is judged on your projects, the design codes you worked to, and your professional status. Lead with a project list showing type, value, your role and the standards, because an overseas employer uses the codes to judge how much re-learning your experience needs. Then show the technical decisions you owned, not just the projects you were part of.",
    faqs: [
      {
        q: "Should a civil engineer CV include a separate project list?",
        a: "Yes, for most civil engineers with more than a few years' experience. A project list or appendix gives the type, value, client, your role and the codes for each project, which keeps the main experience section free for decisions and outcomes. Keep it to relevant projects, most recent first, and make sure every entry names your actual responsibility.",
      },
      {
        q: "How do I show chartership progress on a civil engineer CV?",
        a: "Name the institution, the membership grade you hold and your stage, for example \"Working towards CEng with ICE, initial professional development underway\". If you are already chartered or registered, put the post-nominals after your name. Employers in regulated markets check this early, and \"working towards\" with no body or stage reads as an intention rather than progress.",
      },
      {
        q: "Do I need to change the design codes on my CV when applying to another country?",
        a: "No, you cannot change what you worked to, but you should name it precisely. List the codes you used, such as Eurocodes, British Standards, ACI or AASHTO, and mention any work, training or checking you have done under the target market's standards. Employers are judging transferability, so exact names help them far more than \"international standards\".",
      },
      {
        q: "Should site engineers and design engineers write different CVs?",
        a: "Yes. A design CV leads with packages, analysis software, codes and checking responsibility. A site CV leads with works supervised, programme, quality, safety and subcontractor coordination. If you have done both, separate them clearly by role or by section, because a blended block leaves the recruiter unsure which job you are actually applying for.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Industries: /industries/{slug}                                      */
/* ------------------------------------------------------------------ */

export const aeoIndustries: Record<string, AeoFields> = {
  "information-technology": {
    quickAnswer:
      "An IT CV has to pass a stack-based parser before a human judges ability, so put your current platforms and tools in the first screen, then prove scale and production ownership. Whether you work in engineering, infrastructure, data, security or support, the tools you list rarely separate candidates. What you did with them, and at what scale, is what gets you shortlisted.",
    faqs: [
      {
        q: "Are IT certifications worth putting on a CV?",
        a: "Yes, when your experience supports them. Cloud and security certifications such as AWS, Azure, CISSP or CompTIA are often used as screening filters, so list them with the year earned. A certification with no matching work, though, invites the interviewer to test the gap. Leave expired or superseded certifications off unless the role asks for them.",
      },
      {
        q: "How do I show scale on an IT CV if I work for a small company?",
        a: "Use the numbers you have: users supported, devices, servers, deployments per week, uptime, tickets resolved or data volume. Small environments often mean broader ownership, so say what you ran end to end. \"Sole administrator for 120 users across two offices\" is more persuasive than a vague claim about enterprise experience you do not have.",
      },
      {
        q: "Can I move from IT support to cloud or DevOps with the same CV?",
        a: "No. A support CV leads with tickets and service levels; a cloud or DevOps CV needs automation, infrastructure and deployment evidence first. Rewrite your support experience around scripts you wrote, systems you built or migrated, and incidents you traced to root cause, then add lab projects and certifications to close the gap honestly.",
      },
      {
        q: "How far back should an IT CV go?",
        a: "Usually ten to fifteen years in detail, with older roles cut to a line. Technology ages faster than most fields, so a decade-old stack given prominence can make you look out of date. Keep older roles if they show progression or a rare skill still in demand, but describe them briefly and let your recent platforms lead.",
      },
    ],
  },
  banking: {
    quickAnswer:
      "A banking CV is read for risk before talent, so name the products you handled, the size of your book or transaction volume, and the regulatory frameworks you worked under in the first half page. For cross-border moves, state those frameworks explicitly, because the employer is judging how much of your experience transfers and how much would need retraining.",
    faqs: [
      {
        q: "How do I describe compliance or AML experience on a banking CV?",
        a: "Describe it as risk work with outcomes, not administration. Name the typologies, systems and case volumes you handled, the escalation decisions you made, and what improved: alert backlog cleared, false positives reduced, audit findings closed. Name the regulator or framework too, because AML rules differ by jurisdiction and the employer will check the fit.",
      },
      {
        q: "Should I include client names on a relationship banking CV?",
        a: "No. Client confidentiality applies long after you leave. Describe clients by segment, sector and size instead, for example \"portfolio of 45 mid-market manufacturing clients with combined facilities of $120M\". That gives the reader the scale they need without breaching duties your former employer, and your next one, will expect you to respect.",
      },
      {
        q: "Is the CFA useful on a banking CV outside investment roles?",
        a: "It helps in credit, risk, treasury and corporate banking, where analytical depth is valued, but it is rarely required outside investment and markets roles. List the level passed and the year. In retail and operations roles, local licensing, product knowledge and regulatory experience usually carry more weight than a CFA in progress.",
      },
      {
        q: "How do I move from retail banking into corporate or risk roles?",
        a: "Rewrite your retail experience around the parts that transfer: credit decisions made, lending limits held, portfolio quality, complaints resolved and controls applied. Add any credit training or qualifications. Then target entry points such as credit analyst or business banking roles, where a retail background is common, rather than jumping straight to senior corporate positions.",
      },
    ],
  },
  engineering: {
    quickAnswer:
      "An engineering or construction CV should be built around projects: type, value, your role and the design codes applied on each. Overseas employers check standards and professional registration first, because those decide whether your experience transfers. Be explicit about your own technical decisions rather than the team's output, and keep site and design experience clearly separated.",
    faqs: [
      {
        q: "Should an engineering CV be organised by employer or by project?",
        a: "Organise it by project when your projects are the stronger asset, which is common in consulting and contracting where one employer spans many jobs. Keep a short employment history for dates and titles, then a project section showing type, value, codes and your role. If you spent years on one large project, an employer-led structure works fine.",
      },
      {
        q: "How do I show safety responsibility on a construction CV?",
        a: "Be specific about what you owned: inductions delivered, permits you issued, audits you led, and the safety record of your works over the period. Name the safety qualifications you hold and the framework you worked under. Employers treat safety as a baseline, so a clear, specific record reads as reliability rather than as a sales pitch.",
      },
      {
        q: "Do quantity surveyors and planners need a different CV from design engineers?",
        a: "Yes. A quantity surveying CV leads with contract values, forms of contract, valuations, variations and final account outcomes. A planning CV leads with programme size, software such as Primavera P6 or MS Project, and delays you forecast or recovered. Neither should be framed around design, because employers screen each discipline on its own evidence.",
      },
      {
        q: "Does professional registration from my home country count abroad?",
        a: "Sometimes, but it rarely transfers automatically. Some registrations are covered by international agreements, while others need a separate assessment by the destination's engineering body. On your CV, state your current registration and the body that holds it, plus any assessment you have started in the target country. Check the destination regulator's official website for the route that applies to you.",
      },
    ],
  },
  healthcare: {
    quickAnswer:
      "A healthcare CV must state your registration status in the target country within the first three lines: which regulator, and what stage you are at, including applications in progress. Employers check licensing before clinical skill. After that, describe your settings, specialisms, acuity and caseload in terms the destination market recognises, and show that your mandatory training is current.",
    faqs: [
      {
        q: "Can I apply for healthcare jobs abroad before my registration is approved?",
        a: "Yes, as long as your CV states the stage clearly, for example \"NMC application submitted, awaiting test of competence\". Many employers recruit candidates part way through registration, but none can employ you in a registered role until it is complete. Being precise about the stage stops your application stalling on an unanswered question.",
      },
      {
        q: "How do I describe ward experience so an overseas employer understands it?",
        a: "Translate local ward names into function: specialty, bed numbers, patient acuity and staffing ratio. \"Ward 7B\" means nothing abroad; \"28-bed acute medical ward with a high-dependency bay\" does. Include the systems and protocols you used where they are recognised internationally, such as electronic patient records or early warning scores.",
      },
      {
        q: "Should a nurse or allied health CV list mandatory training?",
        a: "Yes, briefly, with completion or expiry dates. Life support, manual handling, infection control and safeguarding are checked by most employers, and a date shows currency. Put them in a compact certifications section rather than scattering them across roles. Renew anything expired before you apply rather than leaving it off and hoping nobody asks.",
      },
      {
        q: "How long should a healthcare CV be?",
        a: "Usually two to three pages for experienced clinicians, and one to two for the newly qualified. Clinical CVs carry more detail than many fields, because settings, specialisms, competencies and training all matter to the employer. Follow the destination market's convention and the employer's instructions, and cut repetition before you cut clinical detail.",
      },
    ],
  },
  hospitality: {
    quickAnswer:
      "A hospitality CV should open with the numbers that size your experience: rooms, covers, team size, star rating and the brand you operated under. Employers use property scale and brand standards as shorthand for what you are ready for. Then show guest score, revenue and cost outcomes rather than duties, and put your languages near the top, because they are a commercial asset.",
    faqs: [
      {
        q: "Should I include guest review scores on a hospitality CV?",
        a: "Yes, if you can attribute them to your area and period. Name the platform or internal measure, the score before and after, and what you changed, for example a check-in process or a training programme. Scores are one of the few outcomes every hospitality employer understands immediately, so they carry more weight than any list of duties.",
      },
      {
        q: "How do I move from a hotel to a cruise, resort or airline hospitality role?",
        a: "Lead with the experience that matches the new setting: high-volume service, multicultural teams, long shifts and brand standards. Name the brands and property sizes, state your languages, and add any certifications the sector asks for, such as food safety or sector-specific safety training. Show you understand the lifestyle, since rotations and living on site are part of what employers screen for.",
      },
      {
        q: "Is a photo needed on a hospitality CV?",
        a: "It depends on the market, not the industry. Gulf and some Asian employers commonly expect a professional photo, while the UK, US, Canada, Australia and New Zealand generally do not, and front-of-house roles do not change that. If a job advert asks for a photo, supply a professional headshot; otherwise follow the destination market's norm.",
      },
      {
        q: "How do I show progression in hospitality when job titles differ between hotels?",
        a: "Anchor each title with scope: team size, outlets, rooms or covers, and who you reported to. \"Assistant Manager\" at a 40-room boutique and at a 600-room resort are different jobs, and the numbers make that visible. Where you were promoted internally, show each title separately with its own dates, because internal promotion is strong evidence in this industry.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Career levels: /career-levels/{slug}                                */
/* ------------------------------------------------------------------ */

export const aeoLevels: Record<string, AeoFields> = {
  graduate: {
    quickAnswer:
      "A graduate CV should lead with a clear target role, then present projects, internships, part-time work and responsibility outside study as evidence of what you can do. Employers are not expecting a track record; they want proof that you learn quickly, finish things and work well with others. One focused page usually beats two pages padded with module lists.",
    faqs: [
      {
        q: "Should I put my grades on a graduate CV?",
        a: "Yes, if they help, usually your degree classification or GPA. Many graduate schemes screen on a minimum grade, so leaving it off can look like you are hiding it. Include school results only if an employer asks for them or you have little else to show. Once you have two or three years of work experience, grades usually drop off.",
      },
      {
        q: "What should a graduate CV include if I have no internships?",
        a: "Include whatever shows you can be trusted with work. A part-time retail job where you handled cash, opened the shop or trained new starters is real evidence of reliability. So is running a society budget, tutoring, or a final-year project with a working result. Give each one a title, dates and a line on the outcome, exactly as you would a job.",
      },
      {
        q: "Which CV package is right for a recent graduate?",
        a: "The $129 tier covers anyone with under two years of experience, which includes graduates and first-time applicants. It includes a personal brief, one revision round, and editable Word and PDF files, with standard delivery in 5 to 7 days. If you are applying to schemes with close deadlines, fast delivery in 2 to 3 days adds 20%.",
      },
      {
        q: "Should a graduate CV include a personal statement?",
        a: "Yes, but keep it to three or four lines. Name your degree, the field you want to work in, and one or two strengths with evidence elsewhere on the page. Skip phrases like \"hardworking team player\" and \"seeking a challenging role\", because almost every graduate writes them and recruiters skim past them. A specific statement makes the rest of the CV easier to read.",
      },
    ],
  },
  professional: {
    quickAnswer:
      "A CV with 3 to 9 years of experience has to stop listing duties and start arguing for the next role. Show what you owned, what you improved and the numbers attached, with progression visible across roles. Readers at this level assume competence, so a CV that reads like a job description is the most common reason strong mid-career candidates get overlooked.",
    faqs: [
      {
        q: "How many bullet points per job should a mid-career CV have?",
        a: "Four to six for your current or most recent role, three to four for the one before, and one or two for anything older. The count matters less than the mix: each bullet should show a different outcome or skill. If two bullets prove the same thing, merge them, because repetition is the fastest way to lose a reader's attention.",
      },
      {
        q: "Should I include a skills section on a professional CV?",
        a: "Yes, a short core-skills block of six to ten items helps both the ATS and a recruiter scanning the page. Choose skills that match the roles you are targeting, and make sure each one appears in your experience with evidence behind it. A skills section full of tools you never mention again reads as padding.",
      },
      {
        q: "How do I show a promotion within the same company on my CV?",
        a: "List the employer once, then each title as its own sub-heading with its own dates and bullets. This makes the progression visible at a glance, which is one of the strongest signals at mid-career level. Keep the bullets under each title distinct, so the reader can see how your scope grew from one role to the next.",
      },
      {
        q: "What does a CV rewrite cost with 3 to 9 years of experience?",
        a: "CV writing for 3 to 9 years of experience is $189 in USD. That covers the brief, a first draft written personally by Chanuka, one revision round, and final editable Word and PDF files, with standard delivery in 5 to 7 days. Pairing it with LinkedIn optimisation saves 20%, and adding a cover letter as well saves 30%.",
      },
    ],
  },
  "senior-professional": {
    quickAnswer:
      "A senior CV with 8 to 15 years of experience should stay at about two pages by giving the last five years most of the space and cutting early roles to a line each. The reader is assessing scope, complexity and influence, so state budgets, teams and regions plainly, and show what changed because you were the one handling it.",
    faqs: [
      {
        q: "Should a senior CV include roles from more than 15 years ago?",
        a: "Only as a single line each, or grouped under an \"earlier career\" heading with employer and title. Older roles matter mainly to show progression or a notable employer. Detailed bullets from that period take space from recent work and can prompt assumptions about age that you have no reason to invite.",
      },
      {
        q: "How do I show leadership on a senior CV if I do not manage people?",
        a: "Show influence instead of headcount: standards you set, decisions you shaped, people you mentored, and cross-team work you led without formal authority. \"Wrote the code review standard adopted by four engineering teams\" is leadership evidence. Many senior specialists never manage a team, and employers hiring for principal or expert roles look for exactly this kind of reach.",
      },
      {
        q: "What should a senior professional CV profile say?",
        a: "State your specialism, your level and the scope you work at, then one or two results that define your recent career. For example: \"Finance transformation lead with 12 years in retail, leading teams of up to 30 across three markets.\" Avoid adjectives such as \"dynamic\" or \"results-driven\", which say nothing a reader can check.",
      },
      {
        q: "How do I avoid looking overqualified with a senior CV?",
        a: "Match the scope you describe to the role you want. If you are deliberately applying one level down, lead with the hands-on skills the job needs, compress the largest remit figures, and explain briefly in the cover letter why the role suits you. Do not hide experience; frame it so the reader sees fit rather than risk.",
      },
    ],
  },
  executive: {
    quickAnswer:
      "An executive CV is read as a business case, not a job history. Lead with your remit, meaning P&L, headcount, geography and the functions reporting to you, then show commercial results such as revenue, margin and cost, with the context each depended on. Boards and search consultants read for judgement and for the situation you are strongest in: growth, turnaround or transformation.",
    faqs: [
      {
        q: "How long should an executive CV be?",
        a: "Two to three pages is typical. Boards and search consultants read quickly, so every line has to earn its place, and early career can be compressed into a short summary. Supporting detail, such as a full list of transactions or board appointments, belongs in a separate document that you provide if a search firm asks for it.",
      },
      {
        q: "Do executives still need a cover letter?",
        a: "Often yes, though it should be shorter and more pointed than at other levels. For advertised roles and formal search processes, a one-page letter linking your track record to the organisation's current situation helps. For a headhunter's approach, a brief covering email usually does the same job. The CV sizes you; the letter explains why this role, and why now.",
      },
      {
        q: "How do I handle confidential results on an executive CV?",
        a: "Name your employers, but handle sensitive numbers carefully. Use percentages, ranges or rounded figures where exact data is confidential, for example \"grew EBITDA by 30% over three years\" instead of the absolute figure. Anything under a non-disclosure agreement or market-sensitive, especially at listed companies, should stay out. Search consultants read that discretion as a positive signal.",
      },
      {
        q: "How much does executive CV writing cost?",
        a: "Executive CV writing is $279 in USD for 10 or more years of experience, written personally by Chanuka Jeewantha. LinkedIn optimisation at the same level is also $279, and an executive cover letter is $159. Booking all three together saves 30%. Standard delivery is 5 to 7 days, with one revision round and editable Word and PDF files.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Career situations: /career-situations/{slug}                        */
/* ------------------------------------------------------------------ */

export const aeoSituations: Record<string, AeoFields> = {
  "career-change": {
    quickAnswer:
      "A career-change CV should name the move in its first three lines, translate your past work into the target field's language, and lead with the most relevant evidence even if it is not the most recent. Courses, certifications, freelance work or projects in the new field turn a claimed change into a demonstrated one, and make the switch look deliberate rather than desperate.",
    faqs: [
      {
        q: "Should I use a skills-based CV for a career change?",
        a: "Usually a hybrid works better than a purely skills-based CV. Open with a profile and a transferable skills section, then keep a clear employment history with dates below it. Fully functional CVs with no timeline make many recruiters suspect something is being hidden, which is the opposite of what a career changer needs.",
      },
      {
        q: "Will I have to take a lower title or salary when changing careers?",
        a: "A step down in title is often realistic, but not always in pay, because skills such as management, client handling or budgeting keep their market value. Target roles where your previous experience is an advantage, such as a teacher moving into training design, rather than entry roles in unrelated areas. A clear target also makes the CV far easier to write.",
      },
      {
        q: "How do I explain a career change in a cover letter?",
        a: "Give the reason in one or two sentences, focused on what drew you to the new field rather than what pushed you out of the old one. Then connect two or three specific pieces of past work to the new role's requirements. Keep it forward-looking, so the change reads as the logical next step in your career.",
      },
      {
        q: "Is there an age limit for changing careers on a CV?",
        a: "No, and your CV does not need to reveal your age. Detail the last 10 to 15 years and summarise earlier roles, which keeps the focus on recent, relevant work. Experienced changers bring judgement and professional maturity that newer candidates cannot, so present those as assets rather than apologising for the length of your first career.",
      },
    ],
  },
  "career-break": {
    quickAnswer:
      "Address a career break with one line in your CV timeline that gives the reason in a few words, without apology, then prove your skills are current through courses, freelance work, volunteering or certifications kept up. Employers rarely mind the break itself. What they worry about is whether your knowledge still matches the market, and an unexplained gap leaves them to speculate.",
    faqs: [
      {
        q: "How long a career break is too long for a CV?",
        a: "No length is automatically too long, but the longer the break, the more evidence of currency the CV needs. After a few months, a simple dated line is enough. After several years, show recent learning, a refreshed certification, or project or volunteer work in your field, and consider a returner programme if your industry runs them.",
      },
      {
        q: "What reason should I give for a career break on my CV?",
        a: "Give a short, factual label such as \"Career break: caring for family\", \"Career break: relocation\" or \"Career break: full-time study\". You do not have to disclose health details or private circumstances; \"family commitments\" or \"personal reasons\" is enough. The aim is to close the question, not to tell the story, which can wait for an interview if it is needed at all.",
      },
      {
        q: "Are returnship programmes worth applying for after a career break?",
        a: "Yes, if your field has them. Returner programmes, often called returnships, are time-limited roles designed for professionals coming back after a break, generally paid and usually with training and support built in. They are most common at larger employers in finance, technology, engineering and law. Your CV for one should still show your pre-break achievements clearly.",
      },
      {
        q: "Should I add a career break to my LinkedIn profile?",
        a: "Yes. LinkedIn lets you add a career break to your experience section with dates and a type such as caregiving, health or relocation. Using it gives the same answer as your CV and stops a recruiter wondering about the gap. Pair it with a headline that names the role you are returning to, not only your previous title.",
      },
    ],
  },
  "first-job": {
    quickAnswer:
      "A first-job CV with no formal experience should target one role and treat projects, part-time work, volunteering and anything you started or organised as evidence, written up with what you did and what resulted. Keep it to one page. Education matters, but a CV made mostly of modules and grades describes what you studied rather than what you can do.",
    faqs: [
      {
        q: "What do I put in the experience section if I have never had a job?",
        a: "Rename the section to fit what you have, such as \"Projects and Experience\" or \"Relevant Experience\", and include school or university projects, volunteering, freelance jobs, helping in a family business, and leadership in clubs or teams. Give each one a title, dates and two or three lines on what you did and what came of it.",
      },
      {
        q: "Do I need a cover letter for my first job?",
        a: "Yes, whenever the employer accepts one, because it is where you explain your interest and potential in a way a thin CV cannot. Keep it to three short paragraphs: why this role, what you bring with one or two examples, and a clear close. A tailored letter often matters more for first-time applicants than for experienced candidates.",
      },
      {
        q: "Should I include references on my first CV?",
        a: "In most markets, leave them off and skip the line \"references available on request\", which wastes space. Prepare two referees separately, such as a teacher, a lecturer, or a supervisor from volunteering or part-time work, and ask their permission first. Employers will ask for them when they need them, usually near offer stage.",
      },
      {
        q: "What skills should I put on a CV with no experience?",
        a: "List skills you can back up with an example somewhere on the CV: software you used in projects, languages, a driving licence if the job needs one, and specific abilities such as cash handling, data entry or scheduling social media posts. Leave out claims like \"excellent communicator\" unless an example elsewhere proves it, because employers ignore unsupported adjectives.",
      },
    ],
  },
  "relocating-abroad": {
    quickAnswer:
      "To apply for jobs abroad, rewrite your CV to the destination's conventions on length, photo, personal details and tone, then make your experience legible to a stranger: context for unfamiliar employers, qualification equivalence stated, and your work authorisation made clear. A strong candidate with a CV built for the wrong country is filtered out before anyone reads the experience.",
    faqs: [
      {
        q: "Should I put my visa status on my CV when applying abroad?",
        a: "Yes, in one plain line near the top. If you already have the right to work, say so, for example \"Permanent resident, no sponsorship required\". If you need sponsorship, state what you hold now, then focus on employers and sectors known to sponsor. Confirm your eligibility on the destination government's official immigration website, not on forums.",
      },
      {
        q: "Is it better to apply for jobs abroad before or after moving?",
        a: "Both can work, but applying before you move is harder in markets that prefer local candidates or where you need a sponsor. If you apply from abroad, give your relocation date, availability for video interviews and your time zone, so the employer sees fewer unknowns. Some candidates secure a job first; others move on a work-eligible visa and search locally.",
      },
      {
        q: "Should I use a local address or phone number on an overseas CV?",
        a: "Only if it is genuinely yours. A local address or number you do not actually use can backfire when an employer asks you to come in the next day. Instead, give your current city and country with a line such as \"Relocating to Sydney, available from March\", and list an international number with the country code and a messaging app you check.",
      },
      {
        q: "Do I need a different CV for each country I apply to?",
        a: "Yes, if the countries have different conventions. The experience stays the same, but length, photo, personal details, spelling and even job titles may change. Most people applying abroad target two or three markets, so keep one master CV and adapt a version for each destination rather than sending one compromise document everywhere.",
      },
    ],
  },
  redundancy: {
    quickAnswer:
      "You do not need to mention redundancy on your CV. Show the end date as it is, keep the focus on what you achieved in the role, and if context helps, explain it in one short clause in the cover letter or at interview. Redundancy is a business decision, and employers treat a recent end date as routine, especially when your record is strong.",
    faqs: [
      {
        q: "How do I explain redundancy in a job interview?",
        a: "Explain it in two or three factual sentences, then move on to what you achieved and what you want next. For example: \"The company closed its regional office and my role went with it. Before that, I led the move to the new CRM.\" Stay neutral about your former employer and do not over-justify, because interviewers hear redundancy explanations often.",
      },
      {
        q: "Should I say I was made redundant on LinkedIn?",
        a: "You do not have to. Set an end date on the role, and if you want recruiters to find you, use the Open to Work setting, which can be shown to recruiters only. Some people post openly about redundancy and get useful leads from their network; that is a personal choice, not a requirement. Either way, update your headline to your target role.",
      },
      {
        q: "Should I apply for lower-level jobs after redundancy?",
        a: "Only as a deliberate choice. Stepping down can make sense for a change of sector, location or pace, but applying below your level out of worry often leads to rejection as overqualified. Keep targeting your current level while you have options, and set a date to review the strategy if the applications are not converting.",
      },
      {
        q: "How quickly can I get my CV updated after redundancy?",
        a: "Standard CV writing takes 5 to 7 days once your brief is in, and fast delivery in 2 to 3 days costs 20% extra. If an opportunity closes almost immediately, delivery within 24 hours costs 50% extra. You receive editable Word and PDF files plus one revision round, so you can keep adapting the CV for each application.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Career advice articles: /career-advice/{slug}                       */
/* ------------------------------------------------------------------ */

export const aeoArticles: Record<string, AeoFields> = {
  "how-ats-reads-your-cv": {
    quickAnswer:
      "An ATS parses your CV into fields such as contact details, work history and skills, then lets recruiters search and filter the database. In most companies it does not decide who gets hired; a person does. What it decides is how findable you are, so a single-column layout, standard headings, real text and the posting's own terms, used truthfully, keep you visible.",
    faqs: [
      {
        q: "Can an ATS read a PDF CV?",
        a: "Yes, most modern applicant tracking systems read text-based PDFs without trouble. The risk comes from PDFs saved as images or scans, where there is no selectable text to parse. If you can highlight and copy the text in your PDF, a parser can usually read it too. When an employer asks for a Word document, send Word.",
      },
      {
        q: "Does an ATS automatically reject CVs?",
        a: "Usually not on the CV alone, but knockout questions can. Many application forms ask about work rights, location, notice period or a required licence, and an answer that fails a set criterion may filter you out before a person looks. Answer those questions accurately, and read the application form as carefully as the job description.",
      },
      {
        q: "What is a good ATS score for a CV?",
        a: "There is no universal ATS score. The percentages shown by online CV checkers are each tool's own estimate of keyword overlap with a posting, not a number any employer sees. Use them to spot missing terms that are genuinely true of you, then make sure each one appears in your work history with evidence, not only in a skills list.",
      },
      {
        q: "How do I find the right keywords for an ATS?",
        a: "Take them from the job posting itself. Highlight the skills, tools, qualifications and job titles in the requirements, especially any that repeat, and use the same wording in your CV wherever it is true of you. Compare two or three similar postings to find the terms the whole market uses, rather than one employer's phrasing.",
      },
    ],
  },
  "responsibilities-into-achievements": {
    quickAnswer:
      "To turn a responsibility into an achievement, rewrite each bullet to show the situation, the action you took and the result, with a number where you can: time saved, volume handled, cost avoided or a percentage change. A responsibility describes the job everyone with your title did. An achievement shows what happened because you did it, which is what a recruiter remembers.",
    faqs: [
      {
        q: "How do I write achievements if my job is not measured in numbers?",
        a: "Use the measures your field actually uses. Roles in administration, teaching or care are judged on quality rather than revenue, so reach for accuracy, turnaround, audit or inspection results, feedback, and being chosen to train or cover for others. \"Only coordinator asked to induct new starters across three teams\" is an achievement with no percentage in sight.",
      },
      {
        q: "Should every bullet on a CV be an achievement?",
        a: "Most should, but not every one. A line of context per role, such as team size, scope or the systems you used, helps the reader interpret the achievements that follow. What should go is the list of duties already implied by the job title. Aim for achievements to make up most of each recent role.",
      },
      {
        q: "Is it OK to estimate numbers on a CV?",
        a: "Yes, as long as the estimate is honest and you can explain how you reached it at interview. Use \"roughly\", \"about\" or a rounded figure, and base it on something real such as a report, a before-and-after comparison or your own records. Never invent precision you cannot defend, because interviewers regularly ask where a number came from.",
      },
      {
        q: "What is the STAR method, and does it work for CV bullets?",
        a: "STAR stands for Situation, Task, Action, Result, and it is mainly an interview technique. On a CV it compresses into a single line: brief context, what you did and the outcome. You rarely need all four parts spelled out. Start with a strong verb for the action and keep each bullet to one or two lines.",
      },
    ],
  },
  "how-long-should-a-cv-be": {
    quickAnswer:
      "A CV is usually two pages, but the right length depends on your market and career stage. The UK expects two, Australia and New Zealand accept two to four when the detail is relevant, the Gulf accepts two to three, and Singapore favours one to two. Graduates often need only one page, while senior candidates need two to keep the evidence behind their level.",
    faqs: [
      {
        q: "Is a one-page CV better?",
        a: "Only for early-career candidates or markets that prize brevity. A one-page CV suits students, graduates and people with a year or two of relevant work. For an experienced professional, forcing everything onto one page usually means cutting the evidence that proves your level. Even in the US, where one-page resumes are common, experienced candidates often use two.",
      },
      {
        q: "Does the cover letter count toward CV length?",
        a: "No. The cover letter is a separate document, normally one page, and does not count toward the CV. Appendices such as a project list, publications or key selection criteria responses are separate too. Keep the CV itself within the market's norm and label any supporting document clearly, so the reader knows what it is.",
      },
      {
        q: "How many years of experience should a CV cover?",
        a: "Cover roughly the last 10 to 15 years in detail and summarise anything older in a line or an \"earlier career\" section. Recruiters mostly judge you on recent roles, and older detail takes space without adding weight. The exceptions are early roles that are directly relevant, such as a rare specialism, and academic or medical CVs that list full histories.",
      },
      {
        q: "Can I use a smaller font to fit my CV on two pages?",
        a: "Only within reason. A body font of around 10 to 12 points, with sensible margins, keeps a CV readable on screen and in print. Shrinking below that or pushing margins to the edge makes the page look crowded, and a recruiter notices. If the CV will not fit at a readable size, cut content instead.",
      },
    ],
  },
  "cv-for-a-new-market": {
    quickAnswer:
      "To write a CV for a market you have never worked in, first match the destination's format on length, photo, personal details and tone, then state your work-rights status plainly and make your qualifications easy to verify. Where local experience is preferred, foreground internationally recognisable employers and standardised skills. The aim is to remove the specific doubts that market has about outside applicants.",
    faqs: [
      {
        q: "How do I find out the CV conventions for another country?",
        a: "Start with job adverts and recruiter websites in that country, which show what employers expect. Look at LinkedIn profiles of people in your target role there, and check the official government site for work-rights and licensing requirements. Where sources disagree, follow what local employers ask for in their own adverts.",
      },
      {
        q: "Should I translate my job titles when applying abroad?",
        a: "Yes, where the local title differs, but keep it honest. Use the destination's equivalent term for the same work, and keep your original title in brackets if it appears on references or official records. A \"Senior Executive\" in some markets is an early-career role elsewhere, so add team size or scope to show your real level.",
      },
      {
        q: "Do I need my degree assessed before applying for jobs abroad?",
        a: "Not always for the application itself, but often for regulated professions or immigration. Some countries use a formal credential assessment for skilled migration, and professions such as nursing, engineering and accounting may need recognition from a professional body. Check the destination government's official website, then note any assessment underway on your CV.",
      },
      {
        q: "Should I write my CV in the local language?",
        a: "Write it in the language of the job advert. In English-speaking markets, and in most professional roles in the Gulf and Singapore, English is standard. Where business runs in another language, such as Germany or Japan, a local-language CV is often expected unless the advert is in English. If you claim fluency, be ready to interview in that language.",
      },
    ],
  },
  "recruiter-first-read": {
    quickAnswer:
      "In the first few seconds, a recruiter scans your most recent job title and employer, your dates, and the top third of the page to decide whether to read on. They are matching level, type of company and trajectory against the role. A targeted profile and your strongest signals near the top are what turn that quick scan into a proper read.",
    faqs: [
      {
        q: "How long do recruiters spend looking at a CV?",
        a: "The first look usually takes seconds, not minutes. Popular figures are estimates rather than rules, and the time varies with the number of applications and the seniority of the role. What holds true is that the first pass is a scan for fit, and only CVs that survive it get a slower, full read, often later in the process.",
      },
      {
        q: "Does CV design affect how a recruiter reads it?",
        a: "Yes, but mostly through clarity rather than style. Clear headings, consistently placed dates and enough white space let a recruiter find title, employer and tenure instantly. Heavy colour, graphics and skill bars slow the scan and can confuse parsers. A clean, conventional layout helps the reader reach your content faster.",
      },
      {
        q: "Do recruiters read the cover letter before the CV?",
        a: "Usually not. Most recruiters open the CV first and read the cover letter only if the CV earns interest, or if the role needs an explanation such as a career change or relocation. That means your CV has to stand on its own in the first scan. Put anything critical, such as work rights, on the CV itself.",
      },
      {
        q: "What makes a recruiter reject a CV quickly?",
        a: "The fastest rejections come from mismatches visible at a glance: the wrong level, an unrelated recent role, unclear work rights, or a required qualification that does not appear. Unexplained gaps and a run of very short stays also prompt questions. Many of these are fixed by what you put at the top, rather than by changing your experience.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* CV samples: /cv-samples/{slug}                                      */
/* ------------------------------------------------------------------ */

export const aeoCvSamples: Record<string, AeoFields> = {
  "graduate-cv": {
    quickAnswer:
      "A graduate CV should run in this order: contact details, a short targeted profile, education, projects, work experience and skills. Education and projects move higher than on an experienced CV because they hold your strongest evidence. Treat projects like jobs, with the tools you used and the outcome, and keep the whole document to one focused page where you can.",
    faqs: [
      {
        q: "Should education or experience come first on a graduate CV?",
        a: "Education usually comes first for recent graduates, because it is your main qualification for the role. Put experience first instead if you have a directly relevant internship or job, or once you have more than about a year of professional work. The rule is simple: whichever section proves your fit fastest goes higher.",
      },
      {
        q: "How do I write a project on a graduate CV?",
        a: "Give each project a title, dates and two or three lines covering what you built or investigated, the tools or methods you used, and what came of it, such as a working product, real users, a grade or a prize. For team projects, say which part was yours. Link to the work where it is public and presentable.",
      },
      {
        q: "Should I use a CV template for a graduate CV?",
        a: "You can, but choose a plain, single-column one. Many free templates use columns, skill bars and graphics that look modern but confuse the applicant tracking systems many large graduate employers use. A simple layout with clear headings lets your projects and education do the work, and it is easier to adapt for each application.",
      },
      {
        q: "Should hobbies go on a graduate CV?",
        a: "Only if they show something relevant, such as leading a club, competing at a serious level, building things, or a skill the role uses. A line listing \"reading, travel, music\" adds nothing and takes space from evidence. When space is tight, hobbies are the first section to cut.",
      },
    ],
  },
  "professional-cv": {
    quickAnswer:
      "A mid-career CV runs contact details, a four to five line profile, a core skills block, reverse-chronological work experience, then education and optional sections. Recent roles get four to six achievement bullets, while older roles shrink to fewer or a single line. That structure keeps attention on relevant recent work instead of spreading it evenly across a decade of history.",
    faqs: [
      {
        q: "Should a professional CV be reverse chronological?",
        a: "Yes, for most mid-career professionals. Recruiters expect the most recent role first, and a clear timeline shows progression. Skills-first or functional formats can suit career changers or people with long gaps, but for someone with steady experience they only make the reader work harder to find your history.",
      },
      {
        q: "Where should certifications go on a mid-career CV?",
        a: "Put role-critical certifications near the top, in the profile or on a short line under your name, and the rest in an education and qualifications section after experience. A PMP for a project role or a CPA for a finance role works as a screening filter, so it needs to be visible in the first scan.",
      },
      {
        q: "How do I list contract or short-term roles on a professional CV?",
        a: "Group them if there are several. Put contract or interim work under one heading such as \"Contract roles, 2021 to 2023\", then list each client with a line on the outcome. That shows a coherent period of work rather than a string of short stays, which some recruiters otherwise read as instability.",
      },
      {
        q: "How do I tailor a professional CV for each application?",
        a: "Keep a full master CV, then adjust three things for each role: the profile, the order of the core skills block, and which bullets lead each recent job. Mirror the posting's language wherever it is true of you. Tailoring is quick once the master is strong, and it matters because recruiters compare you against the specific role.",
      },
    ],
  },
  "executive-cv": {
    quickAnswer:
      "An executive CV should run contact details, an executive profile, a key achievements block, leadership experience framed by scope and then results, board and governance roles, and brief education. It reads as a business case for boards, investors and search consultants, so revenue, team size, remit and transformation results must appear early enough to size you in seconds.",
    faqs: [
      {
        q: "Where do non-executive and advisory roles go on an executive CV?",
        a: "Put them in a separate board and governance section after your main leadership experience, unless a board role is what you are targeting. List the organisation, role, dates and one line on your contribution, such as chairing a committee or shaping a strategic decision. Unpaid trustee roles count when they show real governance experience.",
      },
      {
        q: "How do I show P&L responsibility on an executive CV?",
        a: "State it at the top of each role, before any bullets: the P&L size, headcount, geography and functions reporting to you. Then show what changed under you, such as margin, growth, cost base or market share, with the starting point, so the reader can judge the size of the change. A P&L figure with no outcome attached only proves you held the job.",
      },
      {
        q: "Should an executive CV have a photo?",
        a: "Not in the UK, US, Canada, Australia or New Zealand, where executive CVs are normally photo-free. In the Gulf and some Asian markets, a professional headshot is common at every level. Your LinkedIn photo matters at executive level either way, because search consultants check your profile alongside the CV.",
      },
      {
        q: "How do search consultants use an executive CV?",
        a: "They use it to build a shortlist and present you to their client, so it must be easy to summarise. A consultant often rewrites your profile into their own candidate report, which is why clear scope, results and context make their job easier. Expect them to ask for what the CV leaves out, such as compensation and notice terms.",
      },
    ],
  },
  "career-change-cv": {
    quickAnswer:
      "A career-change CV should run contact details, a profile that states the move openly, a transferable skills block, relevant new-field experience and projects, your professional history reframed, then education and retraining. This order puts the case for the switch ahead of the old job titles, so the reader sees why your experience transfers before they see where it came from.",
    faqs: [
      {
        q: "How long should a career-change CV be?",
        a: "Usually two pages, the same as any experienced CV in most markets. The space goes to transferable evidence and new-field work, while older roles unrelated to the target shrink to a line each. If your new-field evidence is thin, one strong page plus a good cover letter can work better than two padded ones.",
      },
      {
        q: "Should I keep my old job titles on a career-change CV?",
        a: "Yes, use your real titles, because they appear in references and background checks. You can add a short scope note after the title to point it at the new field, such as \"Retail Store Manager (team of 14, $2M sales)\". What changes is the bullets underneath, which should emphasise the skills the new role needs.",
      },
      {
        q: "Do I need a new qualification to change careers?",
        a: "Not always, but some evidence of investment helps your case. Regulated fields such as accounting, nursing or law require a formal qualification, while many others, such as project coordination, data analysis or marketing, accept short courses, certifications or a portfolio as proof. Check real job adverts in the new field to see what employers actually ask for.",
      },
      {
        q: "How do I describe teaching or nursing experience for a corporate role?",
        a: "Swap the sector terms for the corporate equivalents. \"Lesson planning\" becomes programme design, \"parent meetings\" becomes stakeholder communication, and \"shift handovers\" becomes structured handover documentation. Keep the evidence specific, such as class sizes, patient loads or results, so the reader can size the work. If a hiring manager has to translate it, they usually will not.",
      },
    ],
  },
  "international-cv": {
    quickAnswer:
      "An international CV has no single format. Start from the destination market's norms on length, photo and personal details, then make two things obvious: your right to work and the equivalence of your qualifications. Frame experience so a stranger can size it, with recognisable employers and standardised achievements, and add languages where the market values them. Each destination needs its own version.",
    faqs: [
      {
        q: "Is there a universal international CV format?",
        a: "No. Conventions on length, photos, personal details and spelling differ between countries and sometimes contradict each other, such as the Gulf's expected photo against the UK's photo-free norm. The closest thing to universal is a clean, single-column structure with clear headings, which you then adapt for each destination.",
      },
      {
        q: "What is a Europass CV and should I use it?",
        a: "Europass is the European Union's standard CV template, and it is accepted in many European applications, particularly public sector and academic roles. It is less common in private sector hiring and outside Europe, where it can look generic. Use it when an employer asks for it; otherwise write to the specific market's conventions.",
      },
      {
        q: "How do I explain an employer that is unknown abroad?",
        a: "Add one line of context under the employer name giving sector, size and market position, for example \"National private hospital group, 2,000 staff across six sites\". That lets an overseas reader size the role instantly. Without it, even a senior position at a major local company can read as a small job.",
      },
      {
        q: "Should I include my nationality on an international CV?",
        a: "Include it where the destination expects it, which in practice means the Gulf and some Asian markets, often alongside visa status. Leave it off in the UK, US, Canada, Australia and New Zealand, and state your right-to-work position instead. Nationality and work rights are different things, so give the one the employer actually needs.",
      },
    ],
  },
  "ats-cv": {
    quickAnswer:
      "An ATS-friendly CV uses a single-column layout, standard section headings such as Work Experience, Education and Skills, contact details in the body rather than the header, real selectable text instead of graphics, and simple consistent formatting. Keywords from the job posting should sit inside real work history, not in a detached list. Built this way, the CV parses cleanly and still reads well.",
    faqs: [
      {
        q: "Which fonts are best for an ATS-friendly CV?",
        a: "Use a standard font such as Arial, Calibri, Garamond or Georgia, at 10 to 12 points for body text. Standard fonts render consistently across systems, while custom or downloaded fonts can be substituted or misread when the file opens elsewhere. Make headings slightly larger and bold rather than switching to a decorative typeface.",
      },
      {
        q: "Should I use icons for contact details on an ATS CV?",
        a: "No. Icons for phone, email or location are images, so a parser cannot read them, and they can corrupt the text next to them. Write short text labels, or simply list the details, since a phone number and an email address are recognisable on their own.",
      },
      {
        q: "How should dates be formatted on an ATS-friendly CV?",
        a: "Use one consistent format throughout, ideally month and year, such as \"March 2022 to June 2025\" or \"03/2022 to 06/2025\". Parsers calculate tenure from these dates, and mixed formats or years alone can produce wrong totals. Put the dates on the same line as the job title or employer, not in a separate column.",
      },
      {
        q: "Should I use a free ATS checker on my CV?",
        a: "It can help, as long as you treat the result as a rough guide. A checker shows whether your text extracts cleanly and which posting terms are missing. It cannot tell you how a specific employer's system is configured, and a high score does not make the CV persuasive to the person who reads it next.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Corridors: /international-job-seekers/{slug}                        */
/* ------------------------------------------------------------------ */

export const aeoCorridors: Record<string, AeoFields> = {
  "united-kingdom": {
    quickAnswer:
      "A UK CV is two pages, reverse chronological, opened by a four to five line personal profile and written in British English. Leave out the photo, date of birth, marital status and nationality. For overseas applicants the deciding factor is often right to work: state your status plainly if you hold it, because ambiguity is the main reason UK employers quietly pass over international candidates.",
    faqs: [
      {
        q: "Should I put my visa status on a UK CV?",
        a: "Yes, if it helps you. A single line such as \"Full right to work in the UK\" or \"Graduate visa, eligible to work until 2027\" answers the employer's first question. If you need sponsorship, you do not have to announce it on the CV, but answer honestly on the application form. Check the current routes on GOV.UK, the official source.",
      },
      {
        q: "Do UK employers accept a CV longer than two pages?",
        a: "Rarely, outside academic, medical and some senior technical roles. Most UK recruiters expect two pages and read a third as a failure to prioritise. If you have long project or publication lists, keep the CV to two pages and offer the detail as a separate appendix when asked.",
      },
      {
        q: "Should I include references on a UK CV?",
        a: "No. UK CVs normally leave references off, and the line \"references available on request\" is widely seen as unnecessary. Employers ask for referee details near offer stage, often your two most recent employers. Prepare them in advance, and for overseas referees give an email address as well as a phone number.",
      },
      {
        q: "Do I need a cover letter for UK job applications?",
        a: "Often, yes. Many UK employers and agencies ask for a cover letter or a supporting statement, especially in the public sector, charities and the NHS, where the statement is assessed against the person specification. Where it is optional, a short tailored letter still helps an overseas applicant explain the move and their availability.",
      },
    ],
  },
  australia: {
    quickAnswer:
      "An Australian resume can run two to four pages, carries no photo, date of birth or marital status, and should state your visa or residency status. For government, health and many large-employer roles you also need a key selection criteria response that answers each criterion with a specific example. Overseas applicants who skip the criteria often lose to weaker candidates who answer them.",
    faqs: [
      {
        q: "How do I write key selection criteria responses?",
        a: "Answer each criterion separately under its own heading, then give one specific example using a structure such as STAR: the situation, your task, what you did and the result. Follow any word or page limit the employer sets. Use the criterion's own wording, because selection panels often score each response directly against it.",
      },
      {
        q: "Should I include referees on an Australian resume?",
        a: "Many Australian resumes list two referees at the end, with name, title, organisation and contact details, usually recent managers. Others simply say referees are available on request, and either is acceptable. Always ask permission first and brief your referees on the role, because Australian employers commonly phone referees before making an offer.",
      },
      {
        q: "Can I apply for Australian jobs from overseas?",
        a: "Yes, but your visa position shapes your chances. Candidates who already hold work rights, such as permanent residents or those on work-eligible visas, are assessed much like local applicants. If you need employer sponsorship, target employers and occupations with a history of sponsoring. Check the Department of Home Affairs website for the visa options that apply to you.",
      },
      {
        q: "Should I use Australian spelling on my resume?",
        a: "Yes. Australian English follows British spelling in most cases, such as \"organise\", \"centre\" and \"labour\", and American spelling can signal that the resume was not prepared for the market. Set your word processor to English (Australia), and check your job titles against local adverts, since some differ from other markets.",
      },
    ],
  },
  canada: {
    quickAnswer:
      "A Canadian resume is one to two pages, with no photo, date of birth, marital status or nationality, written in Canadian spelling with a summary and a core-skills block that mirrors the posting's language. The main hurdle for newcomers is the preference for Canadian experience, which a resume offsets by foregrounding recognised employers, standardised skills and any credential assessment underway.",
    faqs: [
      {
        q: "How do I get around the Canadian experience requirement?",
        a: "You cannot manufacture it, but you can reduce its weight. Volunteer work, contract roles, bridging programmes for internationally trained professionals and courses in Canada all create local references and context. On the resume, name globally recognised employers, standard tools and certifications, and any credential recognition underway, so the employer has less to guess about.",
      },
      {
        q: "What is an ECA and should I mention it on my resume?",
        a: "An ECA, or Educational Credential Assessment, shows how a foreign qualification compares with a Canadian one and is used for some immigration programmes. If you have one, add a line under education such as \"ECA: equivalent to a Canadian bachelor's degree\", so the employer does not have to guess. IRCC's official website lists the organisations that issue ECAs.",
      },
      {
        q: "Do Canadian employers expect a cover letter?",
        a: "In most applications, yes. Canadian employers commonly expect a one-page cover letter tailored to the role, even when it is listed as optional. For newcomers it is also the right place to state your work authorisation and availability briefly, and to connect your international experience to the role without cluttering the resume.",
      },
      {
        q: "Should I write my resume in French for Canadian jobs?",
        a: "Write it in the language of the job posting. Most roles outside Quebec are advertised in English, while many Quebec employers and bilingual federal roles expect French or both. If you are bilingual, say so in your summary with your level in each language, because bilingualism is a genuine advantage in many Canadian roles.",
      },
    ],
  },
  uae: {
    quickAnswer:
      "A UAE CV is typically two to three pages, includes a professional headshot, and states nationality, current location and visa status, often with date of birth. It should also give your notice period and name recognisable regional or multinational employers prominently. A minimalist, photo-free Western CV can look incomplete to a Gulf recruiter working through very high application volumes.",
    faqs: [
      {
        q: "Can I look for jobs in the UAE on a visit visa?",
        a: "Many candidates job hunt in the UAE on a visit visa, but a visit visa does not allow you to work, and your employer must arrange the proper work permit and residence visa before you start. Rules change, so check the current position on official UAE government portals before you travel. On your CV, state your status and when it expires.",
      },
      {
        q: "What kind of photo should I use on a UAE CV?",
        a: "Use a recent, professional headshot with a plain background, business attire and a neutral expression, placed at the top of the first page. Avoid cropped social media photos, casual settings or heavy filters. The photo should look like the person who will walk into the interview, because recruiters treat it as part of the first impression.",
      },
      {
        q: "Should I include salary expectations on a UAE CV?",
        a: "Not on the CV itself. Recruiters often ask for current and expected salary early, sometimes on the application form, so prepare a figure that covers the whole package: basic salary plus housing, transport and other allowances, which are common in the region. Research the range for your role in the UAE rather than converting your home salary.",
      },
      {
        q: "How important is the notice period on a UAE CV?",
        a: "Very. Many UAE employers recruit to fill a role quickly and compare candidates partly on start date. Add a single line such as \"Notice period: 30 days\" or \"Available immediately\" near your contact details. If your notice is negotiable, say so, since a long, fixed notice period can move you down a shortlist.",
      },
    ],
  },
  qatar: {
    quickAnswer:
      "A Qatar CV follows Gulf conventions: two to three pages, a professional headshot, and nationality, date of birth and visa status on the page. What sets Qatar apart is structured, credential-focused hiring by large employers in energy, infrastructure, aviation, healthcare and education, so state your qualifications and any professional licensing clearly, alongside specific, comparable achievements.",
    faqs: [
      {
        q: "Do I need to attest my degree for a job in Qatar?",
        a: "Often yes, particularly for regulated roles and residence permit processing, where certificates may need attestation in your home country and recognition in Qatar. Requirements depend on your profession and employer, so ask the employer's HR team and check official Qatari government sources. If your documents are already attested, say so on your CV, as it can speed hiring.",
      },
      {
        q: "How do healthcare professionals get licensed to work in Qatar?",
        a: "Healthcare professionals need a licence from Qatar's health regulator before practising, a process that usually involves credential verification and, for many roles, an assessment or exam. Employers often guide candidates through it after an offer. Check the Ministry of Public Health's official website for your profession, and list any licensing progress clearly on your CV.",
      },
      {
        q: "Should I use a recruitment agency for jobs in Qatar?",
        a: "Agencies can help, especially for construction, engineering and healthcare roles, but choose carefully. Legitimate recruiters are paid by the employer, so be wary of anyone asking you for a placement fee. Apply directly through the careers portals of large employers as well, since many run their own recruitment systems.",
      },
      {
        q: "Can I apply for jobs in Qatar from abroad?",
        a: "Yes, and many overseas professionals are recruited while still in their home country, with the employer arranging the work visa and residence permit after an offer. Make your CV easy to process: state your nationality, current location, availability and notice period, and have your certificates ready to share. Confirm current entry and permit rules on official Qatari government sources.",
      },
    ],
  },
  "saudi-arabia": {
    quickAnswer:
      "A Saudi Arabia CV follows the Gulf format: two to three pages, a professional headshot, and nationality, date of birth and visa or iqama status. Hiring demand is shaped by Vision 2030 sectors such as construction, energy, technology, healthcare and tourism, so foreground relevant experience and make your qualifications, equivalency and any professional licensing easy for an employer to verify.",
    faqs: [
      {
        q: "Do I need professional accreditation to work in Saudi Arabia?",
        a: "For many regulated professions, yes. Engineers, healthcare workers and some other professionals typically need registration or classification with the relevant Saudi professional body before they can practise. Employers often manage this after an offer, but a CV that lists your qualifications, registrations and years of experience clearly makes the process faster. Check official Saudi government sources for your field.",
      },
      {
        q: "What is Saudization and does it affect my application?",
        a: "Saudization is the policy of increasing Saudi nationals' share of private sector jobs, implemented through programmes such as Nitaqat, and some roles are reserved for citizens. For overseas applicants it means competition differs sharply between roles. Target positions where specialist skills are in short supply, and check the current rules on official Saudi government sources.",
      },
      {
        q: "What is an iqama and should it be on my CV?",
        a: "An iqama is the Saudi residence permit held by foreign workers living in the country. If you already hold one, state it on your CV along with whether you are able to transfer to a new employer, because that can make you quicker to hire. If you are applying from abroad, state your nationality and current location instead.",
      },
      {
        q: "Should I mention Arabic on my CV for Saudi jobs?",
        a: "Yes, if you speak it, with an honest level in your languages section, because it is a real advantage in client-facing, government-linked and operational roles. English is the working language of many professional employers, so an English CV is standard. Only prepare an Arabic version of your CV if an employer asks for one.",
      },
    ],
  },
  "new-zealand": {
    quickAnswer:
      "A New Zealand CV is two to three pages, has no photo, date of birth or marital status, and states your visa or residency status. It should read in a plain, direct tone. Because the market is small, mapping your experience to a skill-shortage occupation and showing a genuine intent to relocate make an overseas CV more credible than a generic international one.",
    faqs: [
      {
        q: "Do I need a cover letter for New Zealand jobs?",
        a: "Yes. New Zealand employers commonly expect a short, tailored cover letter, and for overseas applicants it is the natural place to explain why New Zealand, when you can start, and your work-rights position. Keep the tone as plain as the CV: specific reasons and evidence rather than enthusiasm alone.",
      },
      {
        q: "How do I show intent to relocate to New Zealand on my CV?",
        a: "State it plainly near the top, for example \"Relocating to Auckland, available from May 2027\". Add any concrete steps already taken, such as a visa application, a registration in progress or a planned visit. Specific dates and actions tell a smaller employer you are a serious candidate rather than someone applying everywhere at once.",
      },
      {
        q: "Are overseas qualifications assessed in New Zealand?",
        a: "Often, yes. New Zealand's national qualifications authority, NZQA, assesses overseas qualifications, and regulated professions such as nursing, teaching and engineering need registration with their own professional body. Check Immigration New Zealand and the relevant regulator for your field, then list any assessment or registration progress on your CV.",
      },
      {
        q: "Do New Zealand employers check references?",
        a: "Yes, reference checks are a standard part of New Zealand hiring and usually happen before an offer. Employers typically phone two or three referees, often recent managers. Many New Zealand CVs list referees at the end or note that they are available on request. For overseas referees, give the time zone and an email address as well as a phone number.",
      },
    ],
  },
  singapore: {
    quickAnswer:
      "A Singapore CV is one to two pages and metrics-led, with quantified achievements rather than responsibilities. State your nationality and current work-pass status, and make seniority and qualifications obvious, because Employment Pass and S Pass eligibility depends partly on salary and qualifications. A photo is optional. In a highly competitive professional market, a concise, focused CV beats a long, general one.",
    faqs: [
      {
        q: "Should I put my expected salary on a Singapore CV?",
        a: "Not usually on the CV itself, but many Singapore employers ask for current and expected salary on application forms or early in the process, so be ready with a researched figure. For foreign candidates, salary also affects work-pass eligibility, so check the Ministry of Manpower's official website for how it applies to your pass type.",
      },
      {
        q: "What is the difference between an Employment Pass and an S Pass?",
        a: "Broadly, the Employment Pass is for foreign professionals, managers and executives, while the S Pass is for mid-level skilled staff, and each has its own eligibility criteria. The details, including salary thresholds, change over time, so check the Ministry of Manpower's official website. On your CV, state which pass you hold, if any.",
      },
      {
        q: "Should I list my NRIC or passport number on a Singapore CV?",
        a: "No. Identity numbers such as NRIC or passport numbers do not belong on a CV, and Singapore's personal data protection guidance restricts when organisations should collect them. Nationality and work-pass type are enough for screening. Share identity documents only when an employer genuinely needs them, at offer or onboarding stage.",
      },
      {
        q: "Do Singapore employers value international experience?",
        a: "Yes, particularly in regional headquarters roles covering Asia-Pacific, although some client-facing roles favour local market knowledge. Frame your experience in regional terms: markets covered, cross-border teams, regional clients and currencies handled. That makes an overseas background read as an asset for a Singapore-based regional role rather than a gap.",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Article category correction                                         */
/* ------------------------------------------------------------------ */

/** Maps each existing article slug to one of the brief's exact category names. */
export const articleCategoryFix: Record<string, string> = {
  "how-ats-reads-your-cv": "ATS and formatting",
  "responsibilities-into-achievements": "CV writing",
  "how-long-should-a-cv-be": "CV writing",
  "cv-for-a-new-market": "International careers",
  "recruiter-first-read": "CV writing",
};
