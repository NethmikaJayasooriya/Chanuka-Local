/**
 * CAREER ADVICE ARTICLES, BATCH B
 * ------------------------------------------------------------------
 * Long-form informational posts for /career-advice/{slug}: cover
 * letters, job search, interviews, career change, executive CVs,
 * choosing a writer, graduate CVs and using AI tools.
 */

import type { Article } from "@/lib/articles";

export const articlesB: Article[] = [
  {
    slug: "do-you-still-need-a-cover-letter",
    title: "Do you still need a cover letter?",
    metaTitle: "Do You Still Need a Cover Letter? An Honest Answer",
    metaDescription:
      "When a cover letter still decides an application, when almost nobody reads it, and a three-question test for whether to write one for the role in front of you.",
    category: "Cover letters",
    readMinutes: 8,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "Some recruiters never open them. Some hiring managers shortlist because of them. Both are true, and the difference tells you exactly when a cover letter is worth writing.",
    quickAnswer:
      "Sometimes. You still need a cover letter when the employer asks for one, when your CV raises a question it cannot answer alone, such as a career change, relocation or gap, and when a person is likely to read the whole application. For high-volume, one-click or agency applications, a well-tailored CV matters far more than a letter.",
    intro:
      "The question keeps coming up because the evidence is mixed. Plenty of recruiters admit they skip cover letters entirely, and plenty of hiring managers say a good one is the reason they shortlisted someone. Both are telling the truth. Whether a cover letter matters depends on who reads your application, how many they are reading, and what your CV cannot explain on its own. That makes it a decision you take application by application, not a rule you follow once.",
    sections: [
      {
        heading: "Why the advice contradicts itself",
        paragraphs: [
          "Ask ten recruiters and you will hear both answers delivered with total confidence. The disagreement is not really about cover letters. It is about workflow. An in-house recruiter screening several hundred applications for a volume role reads CVs first and opens a letter only if something needs explaining. A hiring manager at a twenty-person company, choosing between eight candidates for a role that will shape their team, often reads everything you send.",
          "So the useful question is not whether cover letters are dead. It is whether the particular person reading this particular application is likely to read it, and whether it would change their mind if they did. Once you frame it that way, most applications fall clearly on one side of the line, and the ones in the middle become easy to judge.",
          "There is also a difference between reading a letter and weighing it. Some reviewers open every letter, but only to check for red flags: a letter addressed to the wrong company, a mismatched job title, obvious errors. For them the letter is a filter, not a persuader. That still matters, because a careless letter can sink an application that the CV alone would have carried.",
        ],
      },
      {
        heading: "When a cover letter carries real weight",
        paragraphs: [
          "A letter earns its time when your CV leaves a question that a reader would otherwise answer for you, usually unfavourably. These are the situations where it most often makes the difference:",
        ],
        bullets: [
          "You are changing careers, and the CV alone reads like someone from the wrong field applying to the right one.",
          "You are relocating, and the employer needs to know why you are moving, when you can start and whether you already hold the right to work.",
          "You have a gap, a step down in seniority or a short tenure that deserves one calm sentence of context.",
          "The employer is small or founder-led, where the person hiring is also the person reading, and cares about why you chose them.",
          "The posting explicitly asks for one, or asks you to address specific criteria. Skipping it here reads as not following instructions.",
          "You were referred by someone, and the letter is where you name them and connect the referral to the role.",
          "You are applying speculatively, with no advertised role, so there is no job description for your CV to match.",
        ],
      },
      {
        heading: "When it barely matters",
        paragraphs: [
          "In each of the cases above, the letter is not decoration. It is the only part of the application where you can explain something in full sentences before the reader fills the silence with their own assumptions. The opposite cases are just as clear.",
          "One-click applications on large job boards, high-volume graduate or retail hiring with structured screening questions, and roles handled by agency recruiters all sit at the low-value end. The agency case is worth understanding. The recruiter often writes their own summary of you for the client, and your letter may never travel with the CV at all. What helps an agency recruiter is a short note covering motivation, notice period and anything they need to sell you, not a formal letter.",
          "Even at this end, a letter rarely hurts unless it is poor. The real cost is your time. If you are sending many applications into systems where letters are optional and seldom opened, that time is usually better spent tailoring the CV, because the CV is the document that gets read first everywhere.",
        ],
      },
      {
        heading: "\"Optional\" is not a neutral word",
        paragraphs: [
          "When an application form marks the cover letter as optional, it means the system will accept the application without one. It tells you nothing about how the reader will feel when the field is empty. For a competitive role at an organisation that clearly cares about motivation and fit, an empty field can look like lower effort than the candidates who wrote something. For a volume role, nobody will notice.",
          "A reasonable rule: if the role is one you genuinely want, and the organisation is small enough that a human will look at the whole application, fill the optional field. If you are applying broadly into large systems, leave it and put the effort into the CV.",
          "Local habits matter as well. Many UK public sector roles ask for a supporting or personal statement instead of a traditional letter, and Australian government roles often ask for responses to selection criteria. These are not optional extras. They are frequently the main assessed document, and a strong CV cannot rescue a weak or missing statement.",
        ],
      },
      {
        heading: "What a letter does that a CV cannot",
        paragraphs: [
          "A CV is a record. It is built from facts, dates and evidence, and by convention it contains very little argument. It cannot comfortably say why you want this role, why now, or why a move that looks sideways on paper is a deliberate step. It cannot tell the story that connects three jobs in different sectors into one direction.",
          "A cover letter can. Its job is to make the argument the CV cannot make: here is what you need, here is the evidence I have it, and here is why this role at this organisation is the logical next move for me. When a letter repeats the CV in paragraph form, it fails because it adds nothing new. When it answers the questions the CV raises, it often becomes the most persuasive page in the application.",
          "Think about what the reader is wondering after reading the CV. A retail manager applying for a logistics coordinator role leaves them asking whether this is a real move or a scattergun application. A candidate in Colombo applying to a Melbourne firm leaves them asking about timing and work rights. A strong letter names those questions before the reader has to, and answers each in a sentence or two. That is often enough to move an application from \"interesting but risky\" to \"worth a call\".",
        ],
      },
      {
        heading: "If you write one, keep it short and specific",
        paragraphs: [
          "Most letters are too long and too general. Three to four short paragraphs, comfortably under one page, is enough for almost every role. A structure that works:",
          "Address it to a named person if you can find one; \"Dear Hiring Manager\" is acceptable when you cannot. Match the tone to the organisation, slightly more formal for a bank or government body, a little warmer for a start-up, but never casual. Send it in the format requested, whether that is a separate PDF, the body of an email or a form field that strips formatting, in which case keep it plain.",
        ],
        bullets: [
          "An opening that names the role and gives one concrete reason you fit it, rather than a sentence about how excited you are to apply.",
          "One or two paragraphs of evidence, each linking a specific requirement in the posting to something you have actually done.",
          "A short paragraph on why this organisation, based on something real you know about it rather than its own mission statement read back to it.",
          "Any necessary context, such as relocation timing or work rights, stated plainly in a line or two.",
          "A brief close saying you would welcome a conversation. Nothing more is needed.",
        ],
      },
      {
        heading: "A quick test, application by application",
        paragraphs: [
          "The test for every sentence in a letter is whether it could appear in anyone else's. \"I am a hard-working team player with strong communication skills\" could. \"I rebuilt the month-end close so the team stopped working weekends, and your posting describes the same pressure\" could not. Specific letters get read to the end; generic ones get skimmed and forgotten.",
          "Before you start writing, ask three questions. Is a letter requested or strongly implied? Does my CV leave a question that a reader will answer badly without context? Is a person likely to read the whole application? If the answer to any of these is yes, write one. If all three are no, you can skip it with little risk.",
          "To keep the effort proportionate, maintain one strong base letter and rewrite only the evidence and motivation paragraphs for each role. That way, when a letter does matter, the one you send is already good, and you are not starting from a blank page at eleven at night before a closing date.",
        ],
      },
    ],
    takeaways: [
      "Whether a cover letter matters depends on who reads it and how many applications they are handling.",
      "Write one when it is requested, when your CV raises a question, or when a person will read the whole application.",
      "\"Optional\" means the system accepts an application without one, not that the reader will not notice.",
      "A good letter makes the argument a CV cannot: why you, why this role, why now.",
      "Keep it to three or four short paragraphs, with evidence tied to the posting.",
    ],
    faqs: [
      {
        q: "Do recruiters actually read cover letters?",
        a: "Some do and some do not, and it depends mainly on volume. Recruiters screening hundreds of applications usually read the CV first and open the letter only if something needs explaining. Hiring managers at smaller organisations, or anyone choosing between a short list, are much more likely to read it in full. Write the letter assuming it will be read closely, because when it is read, it counts.",
      },
      {
        q: "Is it bad to skip an optional cover letter?",
        a: "Not always, but it can cost you on competitive roles. \"Optional\" means the system will accept your application without one. For a role you genuinely want at an organisation where a person reviews each application, an empty field can look like less effort than other candidates made. For high-volume applications through large job boards, skipping it rarely makes a noticeable difference.",
      },
      {
        q: "How long should a cover letter be?",
        a: "A cover letter should be three to four short paragraphs, comfortably under one page. That is enough to name the role, connect two or three requirements to real evidence, explain why this organisation, and add any necessary context such as relocation timing. Longer letters tend to repeat the CV, which is the main reason readers stop reading them.",
      },
      {
        q: "Do I need a cover letter when applying through a recruitment agency?",
        a: "Usually a short note is enough. Agency recruiters often present candidates to their client with their own written summary, so a full letter may never reach the employer. Give the recruiter what helps them represent you: your motivation for the role, notice period, expectations and any context such as relocation. Save the fully tailored letter for direct applications.",
      },
    ],
    relatedArticles: [
      "how-to-write-a-cover-letter",
      "how-to-tailor-a-cv-to-a-job-description",
      "career-change-cv-transferable-skills",
    ],
    relatedLinks: [
      { href: "/cover-letter-writing", label: "Cover letter writing service" },
      { href: "/resources/cover-letter-checklist", label: "Cover letter checklist" },
      { href: "/career-advice/cover-letters", label: "More cover letter advice" },
    ],
  },
  {
    slug: "how-to-tailor-a-cv-to-a-job-description",
    title: "How to tailor a CV to a job description",
    metaTitle: "How to Tailor a CV to a Job Description (Step by Step)",
    metaDescription:
      "A method for tailoring your CV to each job description in about thirty minutes: what to change, what to leave alone, and how to mirror keywords honestly.",
    category: "Job search",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "Tailoring does not mean rewriting your CV for every application. It means changing a few high-impact places so the reader sees the match in seconds. Here is exactly where.",
    quickAnswer:
      "To tailor a CV to a job description, identify the posting's must-have requirements and the exact terms it uses, then adjust your profile, skills section and the order of your bullets so the strongest matching evidence appears first. Mirror the employer's language where it is true of you. Never change job titles, dates or facts to fit.",
    intro:
      "Most people know they should tailor their CV and most people do not, because they imagine it means rewriting the whole document for every application. It does not. A well-built CV has a stable core that stays the same and a small number of places that flex. Tailoring is the discipline of changing those places, quickly and honestly, so that a reader who has never met you sees the match between you and their role within the first few seconds.",
    sections: [
      {
        heading: "Start with a strong base CV, not a blank page",
        paragraphs: [
          "Tailoring only works if the thing you are tailoring is already good. Your base CV should contain every relevant achievement you might want to use, written as evidenced bullets, plus a full list of your genuine skills and tools. Think of it as the master copy. It will usually be longer than any version you send, and that is fine, because nobody else sees it.",
          "Each tailored version is then a selection from the master, with light edits. You are not inventing anything new for each role. You are choosing what to put forward and in what order. This is what keeps tailoring to around half an hour rather than half a day, and it also keeps every version consistent with the others and with your LinkedIn profile.",
          "If you apply for more than one type of role, for example both project management and operations positions, keep two master versions rather than one. The underlying facts are identical, but the emphasis and the profile differ enough that starting from the nearer master saves time and keeps each version coherent.",
        ],
      },
      {
        heading: "Read the job description like a recruiter",
        paragraphs: [
          "A job description is not a wish list of equal items. It usually contains a few genuine requirements, a few preferences, and a fair amount of boilerplate about the company. Your first job is to separate them. Print it or paste it somewhere you can mark up, and go through it with three questions in mind.",
          "Also notice what the posting does not say. A description that lists ten tools but never mentions people management is probably an individual contributor role, whatever the title suggests. One that spends a paragraph on pace and resilience is telling you the team is stretched. Reading between the lines helps you choose which stories to lead with.",
        ],
        bullets: [
          "What are the non-negotiables? Look for words like \"essential\", \"required\", \"must have\", and for requirements listed first or repeated in more than one section.",
          "What exact terms do they use? Note specific tools, methods, qualifications and phrases, such as \"stakeholder management\" or \"month-end close\", in the posting's own wording.",
          "What problem is this hire meant to solve? A sentence like \"you will build the function from scratch\" or \"support a period of rapid growth\" tells you which of your stories matter most.",
        ],
      },
      {
        heading: "Map each requirement to your evidence",
        paragraphs: [
          "Take the five to eight most important requirements and, for each one, write down the single strongest piece of evidence you have from your master CV. This is a quick private exercise, not something you send. It forces you to see where you match strongly, where you match partly, and where you genuinely do not.",
          "Strong matches should be impossible to miss in the tailored version. Partial matches need framing: if the role wants experience leading a team and you have led projects with people who did not report to you, say exactly that rather than claiming line management. Genuine gaps should not be papered over. If a requirement is essential and you have nothing close to it, that is useful information about whether to apply at all.",
          "Writing the mapping as a simple two-column list, requirement on the left and evidence on the right, takes about five minutes. It protects you from the most common tailoring error: polishing sections that do not matter while the one requirement the recruiter cares most about sits unaddressed on page two.",
        ],
      },
      {
        heading: "The five places to make changes",
        paragraphs: [
          "Once you know what matters, the edits themselves are small and concentrated. Almost all the effect comes from these areas:",
          "Notice what is not on the list: design, fonts and overall section order. Rearranging the whole structure for each application rarely helps and often introduces errors. Keep the format stable and let the content do the tailoring.",
        ],
        bullets: [
          "The profile. Rewrite the two to four lines at the top so they describe you in terms of this role's core need, using its key terms. This is the most read part of the CV and the one most worth changing.",
          "The skills section. Reorder it so the skills the posting emphasises come first, and use the posting's names for them where yours are equivalent.",
          "Bullet order within each role. Move the achievements that match this job to the top of each position. Recruiters often read only the first two or three bullets.",
          "Bullet selection. Swap in achievements from your master CV that fit this role and drop ones that are irrelevant to it, especially in older positions.",
          "Supporting sections. Bring forward a certification, course or project that the posting specifically values, rather than leaving it at the bottom of page two.",
        ],
      },
      {
        heading: "Mirror the language without copying it",
        paragraphs: [
          "Recruiters search applicant tracking systems using the language of the job description, and they scan CVs looking for the same terms. If the posting says \"financial forecasting\" and your CV says \"planning the numbers for next year\", you are describing the same work in words that will not be found. Using their terminology, where it accurately describes what you did, is the single most practical tailoring change.",
          "There are limits. Copying whole sentences from the posting reads as lazy to a human and adds nothing. Include both the full term and the acronym for important skills, such as \"search engine optimisation (SEO)\", because recruiters search for either. And only mirror terms that are genuinely true of you. A keyword with no evidence behind it may get you surfaced, but it will not survive the conversation that follows.",
          "Watch for regional and industry variations as well. One company talks about clients, another about customers, another about accounts. A UK posting writes \"organisation\", a US one \"organization\". Matching these small choices makes the CV feel as if it was written for that employer, which, once tailored, it was.",
        ],
      },
      {
        heading: "What you should never change",
        paragraphs: [
          "Tailoring has firm boundaries, and crossing them causes far more damage than an untailored CV ever would. Job titles, employers and dates stay exactly as they were. If your official title was unusual or internal, you can add a short clarification in brackets, such as \"Associate II (Financial Analyst)\", but you cannot replace it with a title you did not hold. Background checks and reference calls verify these details.",
          "The same goes for numbers and scope. Do not inflate a team size, a budget or a result to fit a requirement. Do not claim a qualification you are still studying for as completed. The aim of tailoring is emphasis, not alteration. Everything in every version should be something you could defend line by line in an interview.",
        ],
      },
      {
        heading: "A thirty-minute tailoring routine",
        paragraphs: [
          "With a strong master CV in place, the process for each application becomes predictable. Spend ten minutes marking up the job description and mapping the top requirements to evidence. Spend ten minutes rewriting the profile and reordering skills. Spend the last ten reordering and swapping bullets, then reading the first page as if you were the recruiter with this posting open beside you.",
          "Two final checks are worth the extra minute. Save each version with the employer's name in the file name, so you know exactly what you sent when they call. And read the tailored CV against the posting one last time, asking whether the three most important requirements are visible in the top half of page one. If they are, the CV has done its job. If a reader would need to hunt for them, move them up.",
          "Tailoring every CV fully is not always realistic, especially if you are applying widely. A sensible compromise is light tailoring, mainly the profile and skills order, for broad applications, and full tailoring for the roles you most want. The applications that matter most deserve the most attention.",
        ],
      },
    ],
    takeaways: [
      "Build a master CV first; each tailored version is a selection from it.",
      "Identify the posting's non-negotiables, its exact terms and the problem the hire solves.",
      "Concentrate edits on the profile, skills order and the first bullets under each role.",
      "Mirror the employer's language only where it accurately describes your work.",
      "Never change titles, employers, dates or numbers to fit a posting.",
    ],
    faqs: [
      {
        q: "Should I tailor my CV for every job application?",
        a: "Yes, at least lightly. Even a few minutes spent rewriting the profile and reordering your skills for each posting makes the match clearer to recruiters and to applicant tracking system searches. For roles you particularly want, do a fuller tailoring pass that reorders and swaps achievement bullets. Sending one identical CV everywhere is the most common reason capable candidates go unnoticed.",
      },
      {
        q: "Is it OK to copy words from the job description into my CV?",
        a: "Using the job description's key terms is sensible; copying its sentences is not. Recruiters search for the posting's language, so describing your real experience with the same terminology helps you get found. Pasting whole phrases or requirement lists reads as lazy to a human reviewer, and adding terms that are not true of you will be exposed in the interview.",
      },
      {
        q: "Can I change my job title on my CV to match the job I want?",
        a: "No. Your job titles should match what your employer called the role, because reference and background checks verify them. If your official title is internal or unclear, you can add a short clarifying descriptor in brackets that reflects the actual work, such as a recognised industry title, but you should not replace the real title with one you never held.",
      },
      {
        q: "How long should it take to tailor a CV?",
        a: "With a strong master CV already written, tailoring usually takes around thirty minutes per application. Roughly a third of that goes on reading and marking up the job description, a third on rewriting the profile and reordering skills, and a third on selecting and reordering achievement bullets. Without a master CV, it takes far longer because you are writing rather than selecting.",
      },
    ],
    relatedArticles: [
      "how-to-find-ats-keywords",
      "responsibilities-into-achievements",
      "how-ats-reads-your-cv",
    ],
    relatedLinks: [
      { href: "/cv-writing", label: "CV writing service" },
      { href: "/resources/ats-check", label: "ATS check" },
      { href: "/career-advice/job-search", label: "More job search advice" },
    ],
  },
  {
    slug: "how-to-follow-up-after-a-job-application",
    title: "How to follow up after a job application",
    metaTitle: "How to Follow Up After a Job Application (With Examples)",
    metaDescription:
      "When to follow up on a job application or interview, who to contact, what to write and when to stop. Includes short example messages you can adapt.",
    category: "Job search",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "A good follow-up is short, well timed and sent to the right person. A bad one is sent too soon, too often, to an inbox that cannot help. Here is how to do the first.",
    quickAnswer:
      "Follow up on a job application about one to two weeks after the closing date, or after applying if there is no closing date, with a short, polite email to the recruiter or hiring manager. Restate the role, add one relevant point, and ask about the timeline. After an interview, send a brief thank-you within a day, then follow up once if the stated decision date passes.",
    intro:
      "Silence after an application is normal, and it is rarely personal. Hiring processes stall for reasons that have nothing to do with you: budgets get reviewed, managers go on leave, internal candidates appear. A well-judged follow-up will not reverse a decision already made, but it can bring a stalled application back to the top of someone's inbox, answer a question they had not got round to asking, and show the kind of professional you are. The key is timing, the right recipient and restraint.",
    sections: [
      {
        heading: "What a follow-up can and cannot do",
        paragraphs: [
          "Be realistic about the purpose. A follow-up cannot persuade a recruiter to shortlist a CV that does not match the role, and it cannot speed up a process that is waiting on budget sign-off. What it can do is remind a busy person that you exist, confirm that your application arrived, and give them an easy reason to reply with an update.",
          "It also gives you information. A reply saying the role is on hold, or that shortlisting finishes next week, lets you plan instead of waiting indefinitely. Even a polite \"we have moved forward with other candidates\" is more useful than silence, because it frees you to put your energy elsewhere.",
          "A follow-up is also a small sample of how you communicate. The recruiter reading it is judging, consciously or not, whether you are clear, concise and easy to deal with. Give it the same care as the application itself: correct names, the right job title, no typos, and a tone that is warm without being overfamiliar.",
        ],
      },
      {
        heading: "When to follow up",
        paragraphs: [
          "Timing matters more than wording. Following up two days after applying looks impatient and is unlikely to get a meaningful answer, because screening may not have started. Leaving it two months means the decision has almost certainly been made. These are sensible defaults:",
        ],
        bullets: [
          "After an application with a closing date: wait until the closing date has passed, then allow roughly one to two weeks before following up.",
          "After an application with no closing date: allow about one to two weeks from the date you applied.",
          "After an interview: send a short thank-you within a day, then follow up once if the decision date they gave you passes without news.",
          "After an interview with no timeline given: wait about a week before asking for an update.",
          "If the posting says \"no calls or emails\": respect it. Following up against an explicit instruction does more harm than good.",
        ],
      },
      {
        heading: "Who to contact",
        paragraphs: [
          "A follow-up sent to a generic careers inbox often disappears. Where you can, write to a named person. If the posting lists a recruiter or contact, use them. If you applied through an agency, your follow-up goes to the agency recruiter, not the employer, and contacting the employer directly can damage your relationship with the agency.",
          "If no contact is listed, the company's careers page or LinkedIn may show who recruits for that team. A short, professional message to an in-house recruiter is reasonable. Going over their head to the hiring manager at the first sign of silence is usually not, unless you already have a genuine connection with that manager. After an interview, you will normally have the names and emails of the people you met, and the thank-you can go to them directly.",
          "On LinkedIn, a short message beats a long pitch. Say which role you applied for and ask whether they are the right person to speak to about it. The goal is to be easy to help. If they are not the right person, many will point you to whoever is.",
        ],
      },
      {
        heading: "What to write",
        paragraphs: [
          "Keep it to four or five sentences. The reader should understand who you are, which role you mean and what you are asking for without opening an attachment or scrolling. Use a clear subject line that includes the job title and, if there is one, the reference number.",
          "A simple structure works. Name the role and when you applied. Restate your interest in one sentence. Add one relevant point that strengthens your application, such as a recent certification, a finished project or confirmation of your availability. Ask politely whether there is an update on the timeline. Thank them and sign off.",
          "For example: \"I applied for the Senior Data Analyst role (ref. 4471) on 3 March and wanted to confirm my continued interest. Since applying I have completed the advanced SQL certification mentioned in the posting. I would be grateful for any update on the timeline for shortlisting. Thank you for your time.\" That is the whole message. It is specific, it adds something, and it is easy to reply to.",
          "Avoid three things. Do not reattach your CV unless asked, because they already have it. Do not send \"just checking in\" as the entire message, which gives the reader nothing to respond to. And do not signal frustration about the wait, however long it has been. A follow-up that sounds irritated almost never helps.",
        ],
      },
      {
        heading: "Following up after an interview",
        paragraphs: [
          "A thank-you message after an interview is expected more in some markets, such as the US, than in others, but it is rarely out of place anywhere when kept short. Send it within a day. Thank the interviewer for their time, mention one specific thing from the conversation that reinforced your interest, and, if there was a question you answered weakly, you can add one sentence that completes the answer. Do not use it to re-argue the entire interview.",
          "If the date they gave for a decision passes, one polite follow-up is appropriate. Reference the interview date and the role, restate your interest in a sentence and ask whether there is an update. Processes after interviews often slow down because of reference checks, approvals or other candidates' schedules. A delay is not a rejection, and a calm tone keeps you in good standing either way.",
          "If another employer makes you an offer while you are still waiting, that is a legitimate reason to get in touch sooner. Tell the organisation you would prefer, briefly and without pressure, that you have an offer with a response deadline, and ask whether they can share where they are in their process. Only do this when the offer is real.",
        ],
      },
      {
        heading: "How many times, and when to stop",
        paragraphs: [
          "One follow-up after an application and one after each interview stage is the right number in most cases. A second nudge, a week or so after the first, is acceptable if the process had a clear deadline that has long passed. Beyond that, further messages start to work against you, because they signal that you are waiting on this role rather than pursuing others.",
          "If there is still no reply after a reasonable follow-up, treat the application as closed in your own planning. That does not mean you cannot be surprised later; roles sometimes reopen months afterwards. It means you stop investing attention in it. Keep a simple log of each application, the date, the contact and when you followed up, so you never send a duplicate chaser or forget one you intended to send.",
        ],
      },
      {
        heading: "Following up from another country",
        paragraphs: [
          "If you are applying across borders, a few extra considerations apply. Email is almost always better than a phone call, because you avoid calling at the wrong hour and give the recruiter something they can forward. Write in the market's conventions, including date formats, and schedule the message to arrive during the recipient's working morning rather than yours.",
          "A follow-up is also a good place to clarify the practical questions an overseas applicant raises: your earliest start date, whether you already hold the right to work, and your availability for interviews in their time zone. Answering those before they are asked removes friction, and friction is often the real reason overseas applications stall.",
          "If you are relocating on a fixed date, say so. \"I arrive in Toronto on 1 June and can start from mid-June\" gives the employer something concrete to plan around, and it quietly reframes you from an overseas applicant into a candidate with a clear arrival date.",
        ],
      },
    ],
    takeaways: [
      "Wait one to two weeks after the closing date, or after applying if there is none.",
      "Write to a named person where possible; with agencies, follow up through the agency.",
      "Keep it to four or five sentences and add one genuinely new, relevant point.",
      "Send a short thank-you within a day of an interview, then follow up once if the decision date passes.",
      "Stop after one or two follow-ups and keep a log so you never double-chase.",
    ],
    faqs: [
      {
        q: "How long should I wait to follow up on a job application?",
        a: "Wait about one to two weeks after the closing date, or one to two weeks after applying if no closing date was given. Following up sooner is unlikely to get a useful answer because screening may not have started. If the posting explicitly asks candidates not to call or email, respect that instruction and wait to hear back instead.",
      },
      {
        q: "Is it OK to follow up on a job application by email?",
        a: "Yes, email is usually the best way to follow up. It lets the recruiter reply when convenient, forward your message to the hiring manager and see your details in writing. Keep it to four or five sentences with the job title and any reference number in the subject line. Phone follow-ups suit smaller local employers better, and rarely suit applications from abroad.",
      },
      {
        q: "Should I send a thank-you email after an interview?",
        a: "Yes, a brief thank-you email within a day of the interview is a good habit in most markets and expected in some, such as the US. Thank the interviewer, mention one specific point from the conversation that reinforced your interest, and keep it short. It will not rescue a weak interview, but it reinforces a good one and keeps you front of mind.",
      },
      {
        q: "How many times should you follow up on a job application?",
        a: "Usually once, and at most twice. Send one follow-up after a sensible wait, and a second only if a clear deadline has long passed without any news. More than that tends to count against you. If there is still no reply, treat the application as closed in your planning and put your energy into other opportunities.",
      },
    ],
    relatedArticles: [
      "how-to-tailor-a-cv-to-a-job-description",
      "linkedin-for-international-job-search",
      "how-to-answer-tell-me-about-yourself",
    ],
    relatedLinks: [
      { href: "/career-strategy", label: "Career strategy support" },
      { href: "/resources/interview-checklist", label: "Interview checklist" },
      { href: "/career-advice/job-search", label: "More job search advice" },
    ],
  },
  {
    slug: "star-method-interview-answers",
    title: "The STAR method: how to structure interview answers",
    metaTitle: "STAR Method Interview Answers: Structure and Examples",
    metaDescription:
      "How to use the STAR method for behavioural interview questions: how long each part should be, a worked example, common mistakes and building a story bank.",
    category: "Interviews",
    readMinutes: 8,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "STAR is simple to describe and surprisingly easy to get wrong. Most weak answers spend too long on the situation and too little on what you actually did. Here is the fix.",
    quickAnswer:
      "The STAR method structures interview answers in four parts: Situation (brief context), Task (what you were responsible for), Action (the specific steps you personally took) and Result (the outcome, ideally measurable). Use it for behavioural questions such as \"tell me about a time when\". Keep the situation short, give the action most of your time, and always finish with a clear result.",
    intro:
      "If an interviewer asks \"tell me about a time when\", they are running a behavioural interview, and they are assessing evidence rather than opinion. The idea behind the format is that the best predictor of how you will handle something is how you have handled it before. The STAR method is the most widely taught way to answer these questions, and for good reason: it forces a rambling story into a shape an interviewer can score. But the framework only helps if you use it with the right proportions, and most candidates do not.",
    sections: [
      {
        heading: "Why interviewers ask behavioural questions",
        paragraphs: [
          "Hypothetical questions, such as \"how would you handle a difficult client?\", invite ideal answers. Almost everyone knows the right thing to say. Behavioural questions, such as \"tell me about a time you handled a difficult client\", ask for something harder to fake: a real event, your real actions, a real outcome. Follow-up questions then test whether the story holds together.",
          "Many organisations use structured or competency-based interviews, where each question maps to a skill in the job specification and every candidate is scored against the same criteria. In that setting, an answer that is interesting but unstructured can score poorly because the interviewer cannot find the evidence they are listening for. STAR helps you put that evidence exactly where they expect it.",
          "Behavioural questions also arrive in disguise. \"Give me an example of\", \"describe a situation where\" and \"have you ever had to\" are all asking for the same thing, even without the words \"tell me about a time\". Recognise them and the same structure applies. It works equally well for written application questions that ask you to evidence a competency in a few hundred words.",
        ],
      },
      {
        heading: "The four parts, and how much time each deserves",
        paragraphs: [
          "The letters are easy to remember. The proportions are what separate strong answers from average ones. A good answer to a behavioural question usually lasts around two minutes, and the time should be distributed roughly like this:",
          "Some candidates merge situation and task into a single sentence, which is fine. What matters is that the listener understands the context and your responsibility within about thirty seconds, so the rest of the answer can focus on what you did and what it achieved.",
        ],
        bullets: [
          "Situation: two or three sentences of context. Where were you, what was happening, why did it matter? Enough for the interviewer to follow, and no more.",
          "Task: one or two sentences on what you specifically were responsible for, or the goal you were set. This separates your role from the team's.",
          "Action: the heart of the answer, and most of your time. The specific steps you took, the choices you made and why you made them.",
          "Result: what happened because of your actions, with a number where you can give one, plus a sentence on what you learned if it is relevant.",
        ],
      },
      {
        heading: "A worked example, weak and strong",
        paragraphs: [
          "Take the question: \"Tell me about a time you had to meet a tight deadline.\" A weak answer sounds like this: \"We had a big client report due and the team was really stretched. There was a lot going on, the client kept changing things, and it was a stressful few weeks. We all pulled together, worked some late nights and got it done on time. The client was happy.\" It has a situation and a vague result, but no clear task, no individual action and nothing an interviewer can score.",
          "A stronger version: \"Two weeks before a quarterly client report was due, our lead analyst went on unexpected leave, and I was asked to take over the delivery. My task was to produce the report on time without dropping my own work. I split the report into sections and mapped which data was ready and which was not. I negotiated with the client to move one lower-priority section into a follow-up note, automated the data pull that had previously been done by hand, and set up a fifteen-minute daily check-in with the two people contributing. We delivered the full core report a day early, the client accepted the follow-up approach, and the automation now saves the team several hours each quarter.\"",
          "The second answer is not longer because it is padded. It is longer because the action section is doing its job: specific choices, in order, with reasons. That is what the interviewer is scoring.",
        ],
      },
      {
        heading: "Build a story bank before the interview",
        paragraphs: [
          "You cannot predict every question, but you can predict the competencies. Read the job description and list the five or six skills it emphasises, then prepare one or two stories for each. Many stories can be adapted to several questions, so six to eight well-prepared examples usually cover most of what a behavioural interview will ask.",
          "Aim for a spread that covers the themes that come up most often:",
        ],
        bullets: [
          "Delivering under pressure or against a tight deadline.",
          "Handling conflict or disagreement with a colleague, manager or client.",
          "Leading or influencing others, including people who did not report to you.",
          "Solving a problem that had no obvious answer.",
          "A mistake or failure, and what you changed afterwards.",
          "Improving a process, saving time or money, or raising quality.",
          "Adapting to significant change or learning something quickly.",
        ],
      },
      {
        heading: "The mistakes that weaken STAR answers",
        paragraphs: [
          "The most common mistake is saying \"we\" throughout. Teamwork is real and worth acknowledging, but the interviewer is hiring you, not your former team. If they cannot tell which actions were yours, they cannot score them. Use \"we\" for context and \"I\" for the actions you personally took.",
          "The second is spending half the answer on the situation. Candidates often feel they need to explain the whole organisation, the history of the project and every stakeholder before the story makes sense. It rarely needs that. If the interviewer wants more context, they will ask.",
          "The third is ending without a result, or with a vague one such as \"it went well\". Every story needs an ending, and the stronger the evidence, the better: a deadline met, a figure improved, a client retained, a process still in use. If the outcome was mixed, say so honestly and explain what you learned. Interviewers generally trust a candid mixed result more than a suspiciously perfect one.",
          "Finally, avoid choosing stories with no real difficulty in them. \"Tell me about a challenge\" answered with a routine task done competently shows little. Pick examples where something was genuinely at stake and where your choices made a difference.",
        ],
      },
      {
        heading: "Adapting STAR for failure and conflict questions",
        paragraphs: [
          "Questions about failures, weaknesses and conflict need a slight adjustment. Many interviewers expect you to add a reflection at the end, sometimes called STARR, where the final R stands for what you learned or would do differently. For these questions, the reflection is often what is actually being assessed. They want evidence of self-awareness, not a story in which you were secretly right all along.",
          "For a failure question, choose a real mistake with manageable consequences, own your part of it plainly, describe what you did to recover the situation, and spend a sentence or two on what you changed afterwards. For a conflict question, describe the disagreement fairly, including the other person's reasonable point of view, and focus on how you reached a working resolution rather than on who won. Speaking negatively about former colleagues rarely lands well, however justified it felt at the time.",
        ],
      },
      {
        heading: "Practise the stories, not the script",
        paragraphs: [
          "Once you have your story bank, practise telling each story aloud, ideally to another person or on a recording. Timing yourself helps; many first attempts run twice as long as they should. What you want to memorise is the structure and the key facts, particularly the numbers and the sequence of actions, not the exact wording. A memorised script sounds recited, and it collapses the moment an interviewer interrupts with a follow-up.",
          "Expect those follow-ups. \"What would you do differently?\", \"How did your manager react?\" and \"What was the hardest part?\" are all ways of testing whether the story is real and whether you understand it. If you know the event well, these questions are an opportunity rather than a threat, because they let you show depth that no prepared answer can.",
          "It also helps to link your stories to your CV. The achievements on your CV are, in effect, the results sections of your STAR stories. If a bullet says you reduced processing time or retained a key client, be ready to tell the full story behind it, because interviewers often pick a line from your CV and ask you to walk them through it.",
        ],
      },
    ],
    takeaways: [
      "STAR stands for Situation, Task, Action, Result, and suits any \"tell me about a time\" question.",
      "Keep the situation brief and give the action most of your answer.",
      "Say \"I\" for your own actions; the interviewer is scoring you, not your team.",
      "Always end with a concrete result, and add a reflection for failure and conflict questions.",
      "Prepare six to eight stories mapped to the job's key competencies, and practise the structure rather than a script.",
    ],
    faqs: [
      {
        q: "What does STAR stand for in an interview?",
        a: "STAR stands for Situation, Task, Action and Result. It is a structure for answering behavioural interview questions: briefly set the scene, explain what you were responsible for, describe the specific actions you personally took, and finish with the outcome. Interviewers use it because it produces evidence of how you have actually behaved, which they can compare fairly across candidates.",
      },
      {
        q: "How long should a STAR answer be?",
        a: "Most STAR answers should last around two minutes. Spend a few sentences on the situation and task, give the majority of the time to the actions you took, and close with a clear result. If an answer regularly runs past three minutes, the situation section is usually too long. Interviewers will ask follow-up questions if they want more detail.",
      },
      {
        q: "Can I use the same STAR example for different questions?",
        a: "Yes, a strong story can often answer several questions if you shift the emphasis. A project rescue might demonstrate problem solving, leadership or working under pressure depending on which actions you highlight. Avoid using the same example twice in one interview, though, because it suggests you have a narrow range of experience. Six to eight prepared stories usually give enough variety.",
      },
      {
        q: "What if I do not have a good example for a STAR question?",
        a: "Use the closest genuine example you have, even from education, volunteering or a part-time job, and be honest about the context. A smaller, real story told clearly scores better than an invented or generic one. If you truly have no relevant experience, say so briefly and explain how you would approach it, drawing on a related situation you have handled.",
      },
    ],
    relatedArticles: [
      "how-to-answer-tell-me-about-yourself",
      "responsibilities-into-achievements",
      "how-to-follow-up-after-a-job-application",
    ],
    relatedLinks: [
      { href: "/resources/interview-checklist", label: "Interview checklist" },
      { href: "/career-strategy", label: "Career strategy support" },
      { href: "/career-advice/interviews", label: "More interview advice" },
    ],
  },
  {
    slug: "how-to-answer-tell-me-about-yourself",
    title: "How to answer \"tell me about yourself\"",
    metaTitle: "How to Answer \"Tell Me About Yourself\" in an Interview",
    metaDescription:
      "A simple structure for answering \"tell me about yourself\" in 60 to 90 seconds, with example answers for experienced hires, graduates and career changers.",
    category: "Interviews",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "It sounds like small talk, but it is the question that frames the rest of the interview. Here is a structure that keeps it short, relevant and genuinely yours.",
    quickAnswer:
      "Answer \"tell me about yourself\" with a 60 to 90 second professional summary in three parts: what you do now and at what level, the past experience that makes you relevant to this role, and why this particular role is your logical next step. Keep it focused on work, choose details that match the job, and end in a way that invites the next question.",
    intro:
      "\"So, tell me about yourself\" is often the first question in an interview, and it is deceptively open. Candidates who treat it as small talk tend to recite their CV from the beginning, or drift into personal history that the interviewer did not need. Candidates who prepare it properly use it to set the agenda for the whole conversation. It is the one question you can be almost certain will come up in some form, which makes it the most worthwhile two minutes of preparation you can do.",
    sections: [
      {
        heading: "What the question is really asking",
        paragraphs: [
          "The interviewer is not asking for your life story, and they are usually not testing whether you remember your own CV. They are asking you to explain, in your own words, who you are professionally and why you are sitting in front of them. They are also listening to how you communicate: whether you can summarise, prioritise and speak with some confidence about your own work.",
          "There is a practical purpose too. Your answer gives the interviewer threads to pull on. Whatever you mention first, and with the most energy, is often what they ask about next. That means a well-planned answer does more than make a good first impression. It steers the next part of the interview towards your strongest ground.",
          "It is also the moment the interviewer settles into the conversation. They may still be glancing at your CV or finishing notes from the previous candidate. A clear, well-paced opening helps them tune in, and a strong first minute tends to colour how the rest of the interview is heard.",
        ],
      },
      {
        heading: "A structure that works: present, past, future",
        paragraphs: [
          "The simplest reliable structure has three parts, delivered in about 60 to 90 seconds. Longer than two minutes and most interviewers start to lose the thread.",
          "Some people prefer to start with a brief past and then move to the present and future. That works too, especially for shorter careers. What matters is that the answer moves in one direction and finishes on why you are in this room, rather than trailing off after a description of your current job.",
        ],
        bullets: [
          "Present: what you do now, at what level and in what kind of organisation. One or two sentences, ideally with a concrete detail about scope or focus.",
          "Past: the experience that led you here and that is most relevant to this role. Choose two or three highlights, not every job, and include one achievement with a result.",
          "Future: why this role, at this organisation, is the logical next step. Connect what you have done to what they need, so the answer ends on the job rather than on you.",
        ],
      },
      {
        heading: "Example answers for different situations",
        paragraphs: [
          "An experienced professional might say: \"I am a finance manager at a mid-sized logistics company, where I run the monthly close and the budgeting process for four business units. Before that I spent five years in audit, which is where I learned to find problems in numbers quickly. In my current role, the change I am proudest of is rebuilding the close process, which brought our reporting forward by several days. What draws me to this role is the chance to do that kind of work at a larger scale, with the systems migration you mentioned in the posting.\"",
          "A graduate might say: \"I have just finished a degree in computer science, where I focused on data and backend development. My final-year project was a booking system for a local sports club that is still in use, and last summer I interned at a software consultancy, mainly writing and testing APIs. I enjoy the part of the work where you make something reliable for real users, which is why a junior backend role on a product team like yours appeals to me.\"",
          "A career changer might say: \"For the past eight years I have been a secondary school teacher, and for the last three I also led training for new staff across the school. That part of the job, designing programmes and seeing adults build skills, turned out to be what I enjoyed most. I completed a certificate in learning design this year and have built two e-learning modules for a charity as a volunteer. I am applying for this learning and development role because it is the work I have been moving towards deliberately, not a leap away from teaching.\"",
          "Each of these is short, each contains at least one concrete detail, and each ends on the role. None of them starts with where the person was born or went to school.",
        ],
      },
      {
        heading: "What to leave out",
        paragraphs: [
          "The fastest way to improve most answers is to remove things. These are the elements that most often weaken an otherwise sound answer:",
          "Removing filler also makes room for one thing many candidates avoid: naming what you are good at. A sentence such as \"my strength is turning messy data into reporting that managers actually use\" is not boasting if the rest of the answer backs it up. It gives the interviewer a clear idea to remember you by.",
        ],
        bullets: [
          "A chronological walk through your entire CV, starting with your first job.",
          "Personal details such as family, age, hometown or hobbies, unless they genuinely connect to the role and you choose to share them.",
          "Generic self-descriptions like \"hard-working, passionate and a great team player\", which every candidate uses and nobody remembers.",
          "Complaints about your current employer or reasons you are unhappy there.",
          "Salary, benefits or flexibility. These are legitimate topics, but not in your opening answer.",
          "Anything you would not be comfortable being asked about in detail, because the interviewer may well follow up on it.",
        ],
      },
      {
        heading: "Adjusting for the interviewer and the format",
        paragraphs: [
          "The same core answer should flex depending on who is asking. A recruiter or HR screen is often checking basic fit: level, motivation, salary range and notice period in later questions. Keep your answer clear and slightly broader. A hiring manager wants to know whether you can do the job, so lean further into relevant results and the specific problems you have solved. A panel may include people from different functions; a line that shows you understand how your work affects other teams tends to land well there.",
          "Video interviews reward brevity even more than face-to-face ones, because it is harder to read the interviewer's reactions and easier to talk past the point where they have heard enough. Aim for the shorter end of the range and look at the camera rather than your own image. If you are interviewing in a second language, keep your sentences short and prepare the key phrases carefully; clarity matters far more than sophisticated vocabulary.",
          "Variants of the question need the same treatment. \"Walk me through your CV\" invites a slightly more chronological answer, but still with emphasis on the relevant parts. \"Why are you interested in this role?\" is essentially the future section expanded. Prepare the core once and you can adapt it to all of them.",
        ],
      },
      {
        heading: "Practising without sounding rehearsed",
        paragraphs: [
          "Write your answer out once, in full, to get the content right. Then reduce it to a few bullet points: the present sentence, two or three past highlights and the link to this role. Practise speaking from those notes rather than from the full text. The aim is to know what you will say without knowing exactly how you will phrase it, which keeps it natural.",
          "Record yourself once and listen back. Most people find their first version is longer than they thought, and that they bury the most interesting point in the middle. Move the strongest detail earlier. Cut any sentence that does not help the interviewer understand why you fit this role. If nerves tend to make you speed up, plan a natural pause after the present section. It gives the interviewer a moment to absorb who you are before you explain how you got there.",
          "Finally, make sure your answer and your CV tell the same story. If your CV profile describes you as a data analyst focused on commercial reporting and your spoken answer describes you as a general IT professional, the interviewer notices the mismatch. The best answers sound like a spoken, more personal version of the top third of your CV, which is exactly what they should be.",
        ],
      },
    ],
    takeaways: [
      "Treat \"tell me about yourself\" as a 60 to 90 second professional summary, not a life story.",
      "Use present, past, future: what you do now, what makes you relevant, why this role is next.",
      "Include at least one concrete achievement and end the answer on the role.",
      "Leave out personal details, generic adjectives and complaints about your employer.",
      "Practise from notes, not a script, and keep the answer consistent with your CV.",
    ],
    faqs: [
      {
        q: "How long should my answer to \"tell me about yourself\" be?",
        a: "Aim for 60 to 90 seconds, and no more than two minutes. That is long enough to cover what you do now, the most relevant parts of your background and why you want this role. Longer answers tend to drift into a full CV recital, and interviewers often stop listening closely once they have the main picture.",
      },
      {
        q: "Should I talk about personal life when asked to tell me about yourself?",
        a: "Usually no, or only briefly. The question is about you professionally, so focus on your work, your relevant experience and why you are applying. A short personal detail can work if it connects to the role or you are comfortable sharing it, but family, age and hometown are generally better left out of an opening interview answer.",
      },
      {
        q: "How do I answer \"tell me about yourself\" as a graduate with no experience?",
        a: "Use the same present, past, future structure with the experience you do have. Start with your degree and focus, highlight one or two projects, internships, part-time jobs or society roles with a concrete outcome, and finish by explaining why this role is the natural next step. Specific academic or project work is more convincing than general enthusiasm.",
      },
      {
        q: "Is \"walk me through your CV\" the same as \"tell me about yourself\"?",
        a: "They are closely related. \"Walk me through your CV\" invites a slightly more chronological answer, but you should still emphasise the roles and achievements most relevant to the job and move quickly through the rest. Use the same prepared core, keep it to around two minutes, and finish by explaining why this position is your logical next step.",
      },
    ],
    relatedArticles: [
      "star-method-interview-answers",
      "recruiter-first-read",
      "graduate-cv-no-experience",
    ],
    relatedLinks: [
      { href: "/resources/interview-checklist", label: "Interview checklist" },
      { href: "/career-strategy", label: "Career strategy support" },
      { href: "/career-advice/interviews", label: "More interview advice" },
    ],
  },
  {
    slug: "career-change-cv-transferable-skills",
    title: "Writing a career change CV around transferable skills",
    metaTitle: "Career Change CV: How to Show Transferable Skills",
    metaDescription:
      "How to write a career change CV that makes transferable skills obvious: translating your experience, choosing a structure and bridging gaps with real evidence.",
    category: "Career change",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "A career change CV fails when it tells the reader where you have been before it tells them where you are going. Here is how to reverse that, with evidence rather than claims.",
    quickAnswer:
      "A career change CV should state your target role in the profile, then prove specific transferable skills with evidence from your past work, translated into the new field's language. Use a hybrid structure with a relevant skills or achievements section above your work history, and add bridging evidence such as courses, projects or volunteering. Avoid listing vague skills like \"communication\" without proof.",
    intro:
      "Changing careers is not unusual, but the standard CV format works against you. A reverse-chronological CV puts your most recent job title at the top, and if that title belongs to your old field, the reader has already categorised you before reading a word about why you fit. A career change CV has to do something harder than a normal one: persuade a reader that experience gained somewhere else will work in their world. That takes translation, structure and evidence, not a longer list of soft skills.",
    sections: [
      {
        heading: "Why most career change CVs fail",
        paragraphs: [
          "The typical career change CV is the old CV with a new profile paragraph bolted on top. The profile says \"seeking to transition into project management\", and everything underneath describes a hospitality career in hospitality language. The reader sees a hotel manager who wants to be a project manager, not a person who has already been managing projects in a hotel.",
          "The second common failure is the vague skills list. \"Communication, leadership, problem solving, teamwork\" appear on almost every career change CV, and they do nothing, because every candidate claims them and none of them are evidenced. The reader's real question is narrower: can this person do the specific things this job requires, starting fairly soon? Your CV has to answer that question directly.",
          "A third, quieter failure is apology. Phrases like \"despite my lack of experience\" or \"although I come from a different background\" invite the reader to focus on exactly what you want them to look past. Confidence does not mean overclaiming. It means stating what you bring and letting the evidence carry it.",
        ],
      },
      {
        heading: "Find the skills that actually transfer",
        paragraphs: [
          "Start from the destination, not from your current job. Collect five to ten job postings for the role you want and list the skills and tasks that appear repeatedly. Then, for each one, look for places in your past work where you have genuinely done that thing, even if it was called something else or was only part of your role.",
          "Be specific. \"Leadership\" is not a transferable skill in any useful sense; \"planning shift rotas for a team of twelve and handling performance conversations\" is. \"Organisation\" is not; \"coordinating a supplier changeover across three sites without a service interruption\" is. The more concrete the skill, the more believable it becomes, and the easier it is for the reader to picture you doing the new job.",
          "Also be honest about what does not transfer. If the role requires a specific technical tool or qualification that you do not have, the CV cannot make that gap disappear. Knowing which gaps are real tells you where you need bridging evidence and which roles are realistic targets now versus in a year.",
        ],
      },
      {
        heading: "Translate your experience into the new field's language",
        paragraphs: [
          "Every field has its own vocabulary, and recruiters in your target field search and scan for theirs. Translating is not exaggerating. It is describing the same work in terms the new reader recognises. A few examples of how the same experience reads in different language:",
          "Notice that each translation adds scale, outcome or method that was true all along but never written down. That is the real work. The underlying job does not change; what changes is that the new reader can finally see the parts of it that matter to them.",
        ],
        bullets: [
          "Teacher moving into learning and development: \"planned lessons\" becomes \"designed and delivered structured learning programmes for groups of up to 30, assessed against defined outcomes\".",
          "Hospitality manager moving into operations: \"ran the restaurant floor\" becomes \"managed daily operations, staffing and supplier relationships for a site with a team of 25\".",
          "Retail supervisor moving into customer success: \"dealt with customer complaints\" becomes \"resolved escalated customer issues and identified recurring causes, feeding changes back to management\".",
          "Nurse moving into healthcare technology: \"used the ward's patient records system\" becomes \"acted as ward lead user for an electronic patient record system, training colleagues and reporting issues to the vendor\".",
          "Engineer moving into project management: \"worked on plant upgrades\" becomes \"planned and coordinated upgrade work packages, managing schedules, contractors and budget against milestones\".",
        ],
      },
      {
        heading: "Choose a structure that leads with relevance",
        paragraphs: [
          "Pure functional CVs, which list skills with no dates or employers, are widely distrusted by recruiters because they can hide gaps and make experience hard to verify. A hybrid structure works better for most career changers. It keeps a normal, dated work history, but adds a section above it that brings the relevant evidence to the top.",
          "A sensible order is: a profile that names your target role and the two or three strengths that make you credible for it; a section headed something like \"Relevant experience\" or \"Key achievements\" with four to six evidenced bullets drawn from across your career; any bridging qualifications or projects if they are strong; then your work history, with each role's bullets reordered so the most transferable achievements appear first.",
          "The profile matters more than usual. It should state the destination plainly, for example \"Operations professional moving into supply chain analysis, with eight years of inventory, supplier and cost control experience in multi-site retail\", so the reader starts with the right frame. Avoid apologetic phrasing like \"although I have no direct experience\". Lead with what you bring.",
        ],
      },
      {
        heading: "Bridge the gap with real evidence",
        paragraphs: [
          "Transferable skills get you most of the way. Bridging evidence closes the remaining distance by showing you have already started working in the new field. It does not need to be extensive, but it needs to be real and relevant to the roles you are targeting.",
          "Useful bridging evidence includes a recognised course or certification relevant to the target role, a project you built or delivered using the new field's tools, volunteering or freelance work that involved the new type of task, and internal secondments or side responsibilities in your current job that overlap with the new career. A project with a visible outcome often carries more weight than a certificate alone, because it shows application rather than study.",
          "Put this evidence where it will be seen. If a course is central to your credibility, it can sit near the top rather than at the bottom under education. If you have a portfolio or project link, include it in the header or profile so the reader can check it quickly.",
        ],
      },
      {
        heading: "Handle seniority and old detail carefully",
        paragraphs: [
          "Many career changers are experienced professionals entering a field at a more junior level, at least initially. Your CV should neither hide your seniority nor overwhelm the reader with it. Describe your level honestly, but emphasise the parts of your senior experience that matter in the new role, such as managing budgets, leading teams or dealing with senior stakeholders, rather than the parts that belong only to your old field.",
          "Detail that is specific to your old field and has no relevance to the new one can be condensed heavily. A decade of technical specialism in one industry may shrink to a line per role, with the space given instead to the transferable achievements. This is not hiding anything. The roles, employers and dates remain. You are simply choosing what to explain in depth.",
          "Expect questions about level and pay as well. Some employers worry that an experienced career changer will be unhappy at a lower grade or leave quickly. The CV cannot resolve that alone, but a clear profile and a coherent story of deliberate change reduce the worry considerably, and a cover letter can address it directly.",
        ],
      },
      {
        heading: "Test it with a stranger's eyes",
        paragraphs: [
          "Before you send it, give the CV to someone who works in your target field, or at least someone who does not know your background, and ask them one question after thirty seconds: what job is this person going for? If they name your old field, the top third of the CV is still telling the wrong story. If they name your target field and can point to the evidence, it is working.",
          "Pair the CV with a cover letter wherever possible. A career change is exactly the situation where a letter adds most value, because it lets you explain the move as a deliberate decision rather than leaving the reader to wonder. Keep the CV for evidence and the letter for the reasoning, and together they answer both the \"can you\" and the \"why\" questions a recruiter will have.",
        ],
      },
    ],
    takeaways: [
      "State your target role in the profile so the reader starts with the right frame.",
      "Identify transferable skills from real job postings, and make each one specific.",
      "Translate your past work into the new field's vocabulary without exaggerating it.",
      "Use a hybrid structure: relevant achievements first, dated work history below.",
      "Add bridging evidence such as courses, projects or volunteering, and put it where it will be seen.",
    ],
    faqs: [
      {
        q: "What is the best CV format for a career change?",
        a: "A hybrid format is usually best for a career change. It keeps a standard dated work history, which recruiters trust, but adds a profile naming your target role and a relevant achievements or skills section above the work history. That brings your transferable evidence to the top. Purely functional CVs without dates are often viewed with suspicion and are best avoided.",
      },
      {
        q: "How do I show transferable skills on a CV?",
        a: "Show transferable skills through specific evidence rather than a list of labels. Instead of writing \"leadership\", describe what you led, how many people, and what changed as a result, using the vocabulary of your target field. Place the most relevant examples in a section near the top of the CV and reorder bullets in each role so transferable achievements come first.",
      },
      {
        q: "Should I mention that I am changing careers on my CV?",
        a: "Yes, but positively and briefly. Your profile should name the role you are targeting and the strengths you bring to it, so the reader immediately understands the direction. Avoid apologetic phrases such as \"despite having no experience\". The fuller explanation of why you are changing careers belongs in your cover letter, where you have room to make the case.",
      },
      {
        q: "Do I need a qualification to change careers?",
        a: "It depends on the field. Regulated professions and some technical roles require specific qualifications or licences, and no CV can substitute for them. Many other fields value demonstrated ability more than formal credentials, so a relevant short course combined with a real project or volunteer work can be enough to make your application credible. Check typical job postings in your target field.",
      },
    ],
    relatedArticles: [
      "how-to-list-skills-on-a-cv",
      "do-you-still-need-a-cover-letter",
      "how-to-tailor-a-cv-to-a-job-description",
    ],
    relatedLinks: [
      { href: "/career-situations/career-change", label: "Career change CV service" },
      { href: "/cv-samples/career-change-cv", label: "Career change CV sample" },
      { href: "/career-advice/career-change", label: "More career change advice" },
    ],
  },
  {
    slug: "executive-cv-guide",
    title: "The executive CV: a guide for senior leaders",
    metaTitle: "Executive CV Guide: Positioning, Scope and Board Readiness",
    metaDescription:
      "How to write an executive CV that works for boards and search firms: leadership positioning, P&L and scope, strategic achievements, board CVs and ideal length.",
    category: "Executive careers",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "At executive level the CV stops being a record of jobs and becomes a statement of the value you create at scale. Here is how to position it for boards, chairs and search firms.",
    quickAnswer:
      "An executive CV should position you as a leader who creates value at scale. Open with a sharp executive profile, make scope explicit (P&L, budget, headcount, geography), and lead each role with strategic outcomes such as growth, turnaround or transformation. Two to three pages is normal. Write it for search consultants and boards, and keep it consistent with your LinkedIn profile.",
    intro:
      "Most CV advice is written for people applying to advertised roles through a job board. Executive hiring rarely works that way. Many senior roles are filled through executive search firms, networks and board introductions, and the people reading your CV are search consultants, chief executives, chairs and non-executive directors. They are not screening for keywords. They are asking whether you can be trusted with a business, a function or a significant budget, and whether you have done something comparable before. The executive CV has to answer that question on page one.",
    sections: [
      {
        heading: "What changes at executive level",
        paragraphs: [
          "At earlier career stages, a CV proves competence: can this person do the job? At executive level, competence is assumed. The question becomes judgement and impact: what happens to an organisation when this person runs part of it? That shifts the whole emphasis of the document away from tasks and towards outcomes, decisions and scale.",
          "It also changes who reads it and how. A search consultant may read your CV closely because they need to present you convincingly to their client. A chair or chief executive may read only the first page before deciding whether to meet you. Board members may read it alongside a written candidate report prepared by the search firm. Your CV needs to work at both speeds: a first page that makes the case in a couple of minutes, and supporting detail that survives careful scrutiny.",
          "Finally, the risk of error is higher. At senior level, claims are checked through references, due diligence and people who know people. An exaggerated revenue figure or a blurred job title that would pass unnoticed at junior level can end a senior candidacy. Precision is part of credibility.",
        ],
      },
      {
        heading: "Positioning: the executive profile",
        paragraphs: [
          "The profile at the top of an executive CV is the most important paragraph you will write. In four to six lines, it should tell the reader what kind of leader you are, at what scale you operate, and the kind of value you reliably create. Generic executive language, such as \"visionary, results-driven leader with a proven track record\", tells the reader nothing and appears on thousands of CVs.",
          "Compare it with something specific: \"Chief operating officer with a background in consumer goods manufacturing, leading multi-site operations across three countries. Known for turning around underperforming plants and building the operating disciplines that let fast-growing businesses scale without losing margin.\" The reader now knows the sector, the scale, the typical situation you are brought into and what you do there. That is positioning.",
          "Your profile should also match your target. If you are aiming for a chief executive role, the profile should emphasise enterprise-wide leadership, not functional expertise alone. If you are moving towards non-executive roles, it should foreground governance and strategic oversight. One CV rarely serves all three aims equally well.",
        ],
      },
      {
        heading: "Make scope and scale explicit",
        paragraphs: [
          "Scope is how a senior reader calibrates you. The same title can mean very different things in different organisations, so state the facts that define the size of your role clearly, usually in a short line directly beneath each job title. Useful scope details include:",
        ],
        bullets: [
          "P&L responsibility: whether you held full profit and loss accountability, and its size.",
          "Budget: operating or capital budgets you controlled or significantly influenced.",
          "People: total headcount in your organisation and the number of direct reports, especially senior ones.",
          "Geography: countries, regions or sites under your leadership.",
          "Reporting line: who you reported to, such as the chief executive, the board or a regional president.",
          "Organisational context: the company's size, ownership (listed, private equity backed, family owned, public sector) and stage.",
        ],
      },
      {
        heading: "Write strategic achievements, not operational duties",
        paragraphs: [
          "Senior CVs often slide back into describing responsibilities, simply because executive roles are broad. \"Responsible for all commercial activity across EMEA\" is scope, not achievement. What the reader wants to know is what changed because you held that responsibility.",
          "A useful pattern for executive achievements is context, action and outcome, with the emphasis on the decision you made. For example: \"Inherited a division with three consecutive years of declining margin; exited two unprofitable product lines, renegotiated key supplier contracts and restructured the sales organisation, returning the division to profitable growth within two years.\" The reader sees the situation, the judgement and the result.",
          "Choose achievements that reflect the themes boards care about: revenue and profit growth, turnaround and cost transformation, market entry or expansion, mergers, acquisitions and integration, digital or operating model change, risk, regulation and governance, and building leadership teams. Four to six strong achievements for your most recent role usually say more than a dozen smaller ones. Where confidentiality prevents you from quoting exact figures, use percentages, ranges or relative descriptions rather than inventing precision.",
        ],
      },
      {
        heading: "Working with headhunters and search firms",
        paragraphs: [
          "Executive search consultants are usually retained and paid by the hiring organisation, not by candidates. Their job is to find, assess and present a small number of strong people for a specific brief. Understanding that changes how you approach them. You are not their client, but you can make yourself an easy candidate to present, which is what they need.",
          "Make their job easy. Keep a current, well-structured CV ready to send, because a consultant who calls about a live search often needs it quickly. Make sure your LinkedIn profile tells the same story with the same titles and dates, because consultants research candidates there and inconsistencies raise questions. Be clear and realistic about the kinds of roles, sectors and locations you would consider, and about your current package in general terms when they ask, so they only approach you with relevant opportunities.",
          "Search firms often reformat your CV into their own house style or write a separate candidate report for the client. That is another reason clarity matters more than design: a consultant needs to lift your profile, scope and achievements out of your document accurately. If you are exploring the market confidentially, say so explicitly, and ask how and when your details will be shared before they go to any client.",
        ],
      },
      {
        heading: "Board and non-executive positioning",
        paragraphs: [
          "If you are pursuing non-executive or board roles, whether alongside an executive career or as the next stage of it, you will usually need a separate board CV. It is typically shorter than an executive CV, often two pages, and it reframes your experience around governance rather than operational delivery.",
          "A board CV foregrounds the experience a board needs from its members: strategic oversight, risk and audit exposure, experience of working with or reporting to boards, committee work such as audit, remuneration or nominations, regulatory knowledge, and sector or functional expertise the board lacks. Existing board, trustee or advisory roles, including unpaid and charity positions, belong near the top because they show you already operate in that setting.",
          "Operational detail should shrink. A board does not need to know how you ran a weekly performance review; it needs to know that you have seen organisations through major decisions and can challenge an executive team constructively. Describe your executive roles briefly and let the governance experience lead.",
        ],
      },
      {
        heading: "Length, format and the details that signal seniority",
        paragraphs: [
          "Two to three pages is normal for an executive CV. The first page should contain your profile, a short set of career highlights or key achievements, and at least the start of your most recent role, so that a reader who stops after one page has still seen the essential case. The most recent ten to fifteen years deserve detail. Earlier roles can be condensed into a short \"earlier career\" section with titles, employers and dates, and perhaps one line of note.",
          "Design should be restrained and professional: a clean single-column layout, clear headings, generous spacing and no decorative graphics, charts or skill ratings. Seniority is signalled by clarity and restraint, not by visual flourish. In most English-speaking markets a photo is not expected; follow the conventions of the market you are targeting.",
          "Education and qualifications move lower on the page than at earlier stages, unless a specific qualification is central to the role, such as a professional accounting designation for a chief financial officer. Include significant executive education, board qualifications and relevant memberships, but skip minor training courses. And proofread with particular care. At this level, a single careless error undermines exactly the attention to detail your CV is claiming.",
        ],
      },
    ],
    takeaways: [
      "Executive CVs are read for judgement and impact at scale, not task competence.",
      "Open with a specific executive profile that states your sector, scale and the value you create.",
      "State scope clearly under each role: P&L, budget, headcount, geography and reporting line.",
      "Lead with strategic achievements such as growth, turnaround and transformation, framed around your decisions.",
      "Keep your CV and LinkedIn aligned for search firms, and use a separate, governance-led CV for board roles.",
      "Two to three pages, restrained design, with the whole case visible on page one.",
    ],
    faqs: [
      {
        q: "How long should an executive CV be?",
        a: "An executive CV is usually two to three pages. The first page should carry the essential case: a specific executive profile, key career highlights and the start of your most recent role. The last ten to fifteen years deserve detail, while earlier roles can be condensed into a brief earlier career section. Length should come from relevant evidence, never from padding.",
      },
      {
        q: "What should an executive CV include?",
        a: "An executive CV should include a targeted executive profile, a short set of career highlights, and for each senior role a clear line of scope covering P&L, budget, headcount, geography and reporting line. Each role should then list strategic achievements with outcomes. Board roles, significant executive education and relevant memberships should also appear, with minor training left out.",
      },
      {
        q: "How do I get noticed by executive headhunters?",
        a: "Make yourself easy to find and easy to present. Keep your LinkedIn profile complete and consistent with your CV, build relationships with consultants who specialise in your sector or function, and be clear about the roles you would consider. Search firms work for the hiring organisation, so a well-structured CV with explicit scope and outcomes helps them represent you accurately to their client.",
      },
      {
        q: "What is the difference between an executive CV and a board CV?",
        a: "An executive CV focuses on leading and delivering: scope, operational leadership and results. A board CV focuses on governance: strategic oversight, risk, committee experience, working with boards and the expertise you would bring to one. Board CVs are usually shorter, often two pages, and put existing board, trustee or advisory roles near the top, with executive roles described more briefly.",
      },
    ],
    relatedArticles: [
      "linkedin-headline-guide",
      "responsibilities-into-achievements",
      "how-long-should-a-cv-be",
    ],
    relatedLinks: [
      { href: "/career-levels/executive", label: "Executive CV writing" },
      { href: "/cv-samples/executive-cv", label: "Executive CV sample" },
      { href: "/linkedin-optimisation", label: "LinkedIn optimisation" },
      { href: "/career-advice/executive-careers", label: "More executive career advice" },
    ],
  },
  {
    slug: "how-to-choose-a-cv-writer",
    title: "How to choose a CV writer",
    metaTitle: "How to Choose a CV Writer: Red Flags and Questions to Ask",
    metaDescription:
      "An honest buyer's guide to hiring a CV writer: the red flags to avoid, the questions to ask before paying, and what different price levels typically get you.",
    category: "CV writing",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "CV writing is an unregulated market, and quality ranges from excellent to template filling. Here is how to tell the difference before you pay, not after.",
    quickAnswer:
      "Choose a CV writer by checking who will actually write your CV, how they gather information from you, and what the price includes. Avoid anyone offering interview guarantees, suspiciously fast turnaround at a low price, or no questions about your career. Ask to see how their process works, confirm revisions and file formats, and look for verifiable reviews rather than testimonials alone.",
    intro:
      "Anyone can call themselves a CV writer. There is no licence, no mandatory qualification and no regulator, which means the market contains experienced specialists, capable generalists, and businesses that pour your details into a template and call it a rewrite. From the outside, their websites can look remarkably similar. The good news is that the differences show up quickly once you know what to ask. This guide is written from inside the industry, and it tries to be fair about the trade-offs at every price level.",
    sections: [
      {
        heading: "What you are actually paying for",
        paragraphs: [
          "A professional CV is not mainly a formatting job. The formatting is the easy part, and templates do it well. What you are paying for is judgement: someone who can extract the right information from you, decide what matters to your target reader, turn vague duties into evidenced achievements, and position you at the right level for the right roles. That work depends on the skill and time of the person doing it.",
          "Seen that way, the questions that matter become obvious. Who is doing the thinking? How much time will they actually spend understanding your career? What do they know about the roles, sectors and markets you are targeting? A beautifully designed CV that misunderstands what you do is worse than a plain one that gets it right.",
          "It also helps to decide what problem you are solving before you shop. If your CV is getting interviews but looks dated, you mainly need design and polish. If it is getting no responses at all, you probably need content and targeting, which is a different and more demanding service. If you are changing country or career, you need someone who understands the destination. Knowing which applies tells you which providers are even relevant.",
        ],
      },
      {
        heading: "Red flags to watch for",
        paragraphs: [
          "Most poor experiences with CV services could have been predicted from warning signs visible before payment. Be cautious if you see any of the following:",
          "Credentials deserve a sensible weighting too. Some writers hold certifications from professional resume writing associations. These show a commitment to training, but they are not required to practise and do not guarantee quality on their own, so weigh them alongside the writer's process, experience and independent reviews.",
        ],
        bullets: [
          "Interview or job guarantees. Nobody controls hiring decisions, the job market or how you perform in interviews. A guarantee usually comes with conditions that make it hard to claim, or it signals that the seller is promising what they cannot deliver.",
          "No real questions about your career. If the process is simply uploading your old CV and waiting, the writer is working only from what you already wrote, which is usually the problem in the first place.",
          "You cannot find out who will write it. Some services pass work to a changing pool of freelancers. That can work, but you should know it before you pay.",
          "Very fast turnaround at a very low price as the default. Good writing takes thinking time. Fast delivery is fine as a paid option; as the only model at a bargain price, it usually means templates.",
          "\"ATS score\" gimmicks. Tools that give your CV a number out of 100 can be useful for spotting obvious problems, but a sales pitch built around beating a score often misunderstands how recruiters actually use applicant tracking systems.",
          "Aggressive upselling. Pressure to buy bundles, add-ons or rush fees before you have seen any work is a sign the business is optimised for order value rather than outcome.",
          "Reviews you cannot verify. Testimonials on a company's own site are not independent. Look for reviews on third-party platforms where the business cannot edit or remove them.",
        ],
      },
      {
        heading: "Questions to ask before you pay",
        paragraphs: [
          "A good writer will be glad to answer these clearly. Vague or evasive answers are themselves useful information.",
        ],
        bullets: [
          "Who will write my CV, and can I speak or correspond with them directly?",
          "How do you gather information: a questionnaire, a call, written follow-up questions, or only my existing CV?",
          "What experience do you have with my level, sector and target market?",
          "What exactly is included: how many revisions, which file formats, and is a cover letter or LinkedIn profile part of it or separate?",
          "What is the realistic timeline, and what happens if I need changes after delivery?",
          "Will the CV be written for applicant tracking systems and for human readers, and how do you handle both?",
          "What is your policy if I am not happy with the first draft?",
        ],
      },
      {
        heading: "What different price levels typically buy",
        paragraphs: [
          "Prices vary widely between markets and providers, so exact figures are less useful than understanding what usually changes as you pay more. Broadly, the market falls into three levels.",
          "At the budget end, you typically get a reformatted version of your existing CV with some wording improvements, often produced quickly and with limited or no back-and-forth. This can be reasonable if your content is already strong and you mainly need a cleaner, more modern layout. It rarely fixes weak content, because nobody is spending time finding the achievements you left out.",
          "In the middle, you should expect a dedicated writer, a structured brief or questionnaire, follow-up questions, a full rewrite focused on achievements and targeting, and at least one round of revisions. For most professionals, this is where the value is: enough time and expertise to change what the CV says, not just how it looks.",
          "At the premium end, you are usually paying for more time, more seniority of the writer, and more depth: longer consultations, executive or board positioning, multiple documents written as a coherent set, and more revision rounds. For senior and executive candidates, that extra time often matters. For an early-career CV, it is rarely necessary. Paying more only makes sense if the extra money buys extra thinking, not just a higher label.",
        ],
      },
      {
        heading: "Founder-written services versus volume operations",
        paragraphs: [
          "Broadly, CV services are organised in one of two ways. Some are volume operations: a brand, a sales team and a pool of writers, with orders allocated to whoever is available. Others are founder-written or small practices, where the person whose name is on the business writes the documents. Both can produce good work, and both have genuine trade-offs.",
          "Volume operations can offer faster turnaround and more capacity. The risk is inconsistency: quality depends on which writer you get, and the person who answers your questions may not be the person writing. Founder-written services offer consistency and accountability, because the same person who built the reputation does the work and has every reason to protect it. The trade-off is capacity: a single writer can only take on so much, so timelines may be less flexible at busy periods.",
          "Whichever you choose, the underlying question is the same: will a skilled person spend real time understanding your career? The structure of the business matters mainly because it affects the answer.",
        ],
      },
      {
        heading: "How Chanuka works",
        paragraphs: [
          "For transparency, since this guide appears on his site: every CV, cover letter and LinkedIn profile here is written personally by Chanuka Jeewantha, never outsourced. You choose a package and pay, complete a brief and upload your current CV, and Chanuka writes the documents. You receive a draft, have one revision round included, and get final files in editable Word and PDF formats.",
          "CV writing is priced by experience level: $129 for under two years, $189 for three to nine years, and $279 for ten or more years and executive roles. Standard delivery is five to seven days, with faster options available at an additional charge. That is the full model. Use the questions above to compare it fairly with any other option you are considering.",
        ],
      },
      {
        heading: "Getting the most from any writer",
        paragraphs: [
          "Whoever you hire, the result depends partly on what you give them. Complete the brief thoroughly, even the questions that feel tedious. Dig out figures, project outcomes, performance reviews and old job descriptions before you start. Share two or three job postings that represent what you are targeting, because a writer can only tailor to what they can see.",
          "When the draft arrives, check it carefully for accuracy. You are the only person who knows whether every claim is true, every date correct and every number defensible in an interview. Use the revision round for substantive feedback, and group your comments rather than sending them one at a time. A good writer will explain their choices, but they should also listen when you know something about your field that they do not.",
        ],
      },
    ],
    takeaways: [
      "You are paying for judgement and time, not formatting; find out who is actually doing the thinking.",
      "Avoid interview guarantees, processes with no questions, and cheap default rush delivery.",
      "Ask who writes it, how they gather information, what is included and how revisions work.",
      "Higher prices only make sense when they buy more time and expertise, not just a label.",
      "Prepare your evidence and check every draft for accuracy, whoever you hire.",
    ],
    faqs: [
      {
        q: "Is it worth paying for a professional CV writer?",
        a: "It can be, particularly if your CV is not getting responses, you are changing careers or markets, or you are moving into a senior role. A good writer adds value by finding and presenting achievements you have undersold. It is less worthwhile if your CV already performs well or the service simply reformats what you wrote. Judge the process, not just the price.",
      },
      {
        q: "How can I tell if a CV writing service is legitimate?",
        a: "Check whether you can identify who will write your CV, whether the process involves real questions about your career, and whether reviews appear on independent platforms rather than only on the company's own website. Be wary of interview guarantees and pressure to buy add-ons before any work is delivered. Clear answers about revisions, formats and timelines are a good sign.",
      },
      {
        q: "What should I ask a CV writer before hiring them?",
        a: "Ask who will write your CV, how they gather information from you, what experience they have with your level and target market, and exactly what is included, such as revisions, file formats and any cover letter or LinkedIn work. Also ask about timelines and what happens if you are not satisfied with the first draft. Vague answers are a warning sign.",
      },
      {
        q: "Do CV writing services guarantee interviews?",
        a: "Some advertise guarantees, but no writer can genuinely control whether you are invited to interview. Hiring decisions depend on the employer, the competition, the market and factors outside any document. Guarantees usually carry conditions that make them difficult to claim. A better indicator of quality is a clear process, verifiable reviews and a writer who asks detailed questions about your career.",
      },
    ],
    relatedArticles: [
      "how-to-write-a-professional-cv",
      "using-ai-to-write-your-cv",
      "recruiter-first-read",
    ],
    relatedLinks: [
      { href: "/how-it-works", label: "How the process works" },
      { href: "/packages", label: "Packages and pricing" },
      { href: "/reviews", label: "Client reviews" },
      { href: "/about/chanuka-jeewantha", label: "About Chanuka Jeewantha" },
    ],
  },
  {
    slug: "graduate-cv-no-experience",
    title: "How to write a graduate CV with no experience",
    metaTitle: "Graduate CV With No Experience: What to Include",
    metaDescription:
      "How to write a strong graduate CV when you have little or no work experience: the right structure, making your degree and projects count, and mistakes to avoid.",
    category: "Graduates",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "\"No experience\" usually means no full-time job in the field. It rarely means nothing to show. Here is how to find your evidence and build a graduate CV around it.",
    quickAnswer:
      "A graduate CV with no experience should lead with a short targeted profile and your education, then use projects, internships, part-time work, volunteering and society roles as evidence of real skills. Describe each with specific actions and outcomes, not duties. Keep it to one page in most markets, include a believable skills section, and tailor it to each graduate role or scheme.",
    intro:
      "Almost every graduate feels they have nothing to put on a CV, and almost none of them are right. Employers hiring graduates know you have not held a professional job yet. They are not comparing you with someone who has five years of experience. They are comparing you with other graduates, and the ones who stand out are rarely the ones with the most impressive internships. They are the ones who can show, specifically, what they did with the opportunities they had.",
    sections: [
      {
        heading: "You have more experience than you think",
        paragraphs: [
          "\"Experience\" on a graduate CV is broader than paid work in your field. Graduate recruiters are looking for evidence of the skills that predict success in an entry-level role: learning quickly, working with others, managing time, solving problems, taking responsibility and communicating clearly. All of these can be shown through things you have already done.",
          "Before you write anything, make a list of everything you have done in the last three or four years, without judging whether it counts. Include:",
        ],
        bullets: [
          "Your degree, including major projects, a dissertation, group assignments and any modules directly relevant to the role.",
          "Internships, placements, work shadowing and summer programmes, however short.",
          "Part-time and casual jobs, including retail, hospitality, tutoring and delivery work.",
          "Volunteering, charity work and community roles.",
          "Society, club and sports positions, especially roles with responsibility such as treasurer, organiser or captain.",
          "Personal projects: things you built, wrote, organised, designed or ran on your own initiative.",
          "Competitions, hackathons, case challenges and awards.",
        ],
      },
      {
        heading: "The right structure for a graduate CV",
        paragraphs: [
          "For most graduates, the strongest order is: contact details, a short profile, education, relevant experience or projects, other work experience, and a skills section. Education comes near the top because, at this stage, it is your most substantial and most relevant credential. As you gain professional experience over the next few years, it will move down.",
          "One page is right for most graduates in most markets, including the UK, the US and Singapore. Two pages can be justified if you have genuinely substantial relevant content, such as a long placement plus significant project work, or if you are applying in markets that expect more detail. Do not stretch thin content to fill a second page; a tight single page reads as confident, and a padded two pages reads as the opposite.",
          "The profile should be two or three lines, specific to the kind of role you want. \"Recent economics graduate with strong data skills, seeking a graduate analyst role\" followed by one concrete strength is enough. Avoid the generic ambitions that appear on every graduate CV, such as \"seeking a challenging role in a dynamic organisation where I can grow\". They waste the most valuable lines on the page.",
          "If you are applying to a structured graduate scheme, the application form may ask for much of this information separately, and some schemes do not accept CVs at all. Where a CV is requested, it is often read alongside online test results or form answers, so keep the details consistent across every part of the application.",
        ],
      },
      {
        heading: "Make your degree work harder",
        paragraphs: [
          "Most graduates list their degree as a single line: the name, the university, the dates and the grade. That wastes your strongest material. Under your degree, add a few lines that show what you actually did and learned, chosen to match the roles you are applying for.",
          "Relevant modules are worth listing if they map directly onto the job, for example statistics and econometrics for an analyst role. A dissertation or final-year project deserves a line or two describing the question, the method and the finding, written so that a non-specialist can follow it. Group projects are valuable evidence of teamwork if you describe your specific role: \"led the data analysis for a four-person consultancy project for a local business, presenting recommendations to the owner\" says far more than \"completed group projects\".",
          "Include your grade if it is good or expected in your market, and be accurate about it. If you are still awaiting results, state your predicted or current grade clearly as such. Schools and pre-university results matter less once you have a degree, although some graduate employers and schemes still ask for them, so check the application requirements.",
        ],
      },
      {
        heading: "Turn part-time work and activities into evidence",
        paragraphs: [
          "A part-time job in a café or shop may seem irrelevant to a graduate role in finance or marketing, but it demonstrates reliability, working under pressure, handling customers and, often, responsibility beyond the job description. The trick is to describe it in terms of what you did and what it showed, not what the job was.",
          "\"Served customers and operated the till\" is a duty. \"Trained four new starters on opening procedures and was trusted to lock up and cash up alone within three months\" is evidence of reliability and responsibility. \"Worked weekends throughout my final year while maintaining my grades\" shows time management without needing to claim it. The same applies to society roles: a treasurer who managed a budget and organised events has practical experience that many graduates lack.",
          "Keep these descriptions short, usually two or three bullets per role, and put the most transferable point first. If you have several minor jobs, you can group them under one heading such as \"Part-time work alongside study\" to save space.",
        ],
      },
      {
        heading: "Projects and portfolios",
        paragraphs: [
          "In many fields, especially technology, data, design, marketing and writing, a well-chosen project can outweigh a short internship because it shows what you can produce on your own. A small web application that people use, an analysis of a public data set with a clear finding, a campaign you ran for a student society, a design portfolio, or a blog with consistent, well-written posts are all real evidence.",
          "Give significant projects their own section and describe each like a job: what it was, what you did, what tools you used and what the result was. Include a link where the work can be seen, such as a portfolio site or a code repository, and make sure what is behind the link is tidy, because recruiters in technical fields often click. A project that is unfinished or undocumented can do more harm than good, so select only the ones you are happy to discuss in detail.",
          "If you have no project yet and a few weeks before applications close, starting one is often the most useful thing you can do. Choose something small enough to finish, relevant to the roles you want and visible to others. A completed modest project beats an ambitious one abandoned halfway.",
        ],
      },
      {
        heading: "A skills section recruiters will believe",
        paragraphs: [
          "Graduate skills sections often list abilities with no evidence and vague ratings, such as five stars for \"communication\" or 80 per cent for \"Excel\". These add nothing, because the reader cannot tell what they mean, and they can confuse applicant tracking systems. Instead, list concrete, checkable skills: specific software, programming languages, analytical methods, languages you speak and the level, and any relevant certifications.",
          "Only list what you could demonstrate in an interview or a test. Graduate recruitment often includes practical assessments, and claiming advanced spreadsheet skills that you cannot use under test conditions will be exposed quickly. Soft skills such as teamwork and leadership are better shown through the bullets in your experience and project sections than claimed in a list.",
          "Languages deserve a precise description. \"Fluent\" or \"conversational\" means more than a star rating, and if you hold a recognised language certificate, name it. For international employers, a second or third language can be a genuine differentiator.",
        ],
      },
      {
        heading: "Common graduate CV mistakes",
        paragraphs: [
          "Graduate CVs tend to fail in predictable ways. Checking for these before you apply takes ten minutes and removes most of the easy reasons to reject you:",
        ],
        bullets: [
          "Sending one generic CV to every graduate scheme instead of tailoring the profile and the order of evidence to each role.",
          "Describing duties rather than what you achieved or learned in each role.",
          "An unprofessional email address; create a simple one based on your name.",
          "Listing school-level detail at length when degree-level detail would be more relevant.",
          "Including a photo, date of birth or other personal details in markets where they are not expected.",
          "Spelling and grammar errors, which graduate recruiters often treat as a signal of carelessness.",
          "Claiming skills you could not demonstrate if tested.",
        ],
      },
    ],
    takeaways: [
      "Graduate employers compare you with other graduates; evidence matters more than job titles.",
      "List everything you have done first, then choose what best matches each role.",
      "Put education near the top and add detail on projects, dissertation and relevant modules.",
      "Describe part-time jobs and societies by what you did and what it showed, not the duties.",
      "Keep it to one page in most markets, with concrete skills you could demonstrate if tested.",
    ],
    faqs: [
      {
        q: "What do I put on my CV if I have no work experience?",
        a: "Put your education first, with detail on relevant modules, projects and your dissertation, then add internships, part-time jobs, volunteering, society roles and personal projects. Describe each in terms of what you did and the result, not just the duties. Employers hiring graduates expect limited work experience and look for evidence of skills such as responsibility, teamwork and problem solving.",
      },
      {
        q: "How long should a graduate CV be?",
        a: "A graduate CV should usually be one page. That is the norm in the UK, the US, Singapore and many other markets for candidates at the start of their careers. Two pages can be acceptable if you have substantial relevant content, such as a long placement and significant projects, but padding thin material to fill space weakens the CV rather than strengthening it.",
      },
      {
        q: "Should I include part-time jobs on a graduate CV?",
        a: "Yes, include part-time jobs, even if they are unrelated to the role you want. They show reliability, time management and experience of dealing with customers or colleagues. Keep each one short, focus on responsibilities beyond the basic job and any achievements, and group several minor jobs under one heading if you need to save space for more relevant material.",
      },
      {
        q: "Should my education go before experience on a graduate CV?",
        a: "Usually yes. For recent graduates, the degree is normally the most relevant and substantial credential, so it should appear near the top, just after a short profile. The exception is when you already have significant relevant work experience, such as a long industry placement, in which case that experience can come first. Education moves lower as your career develops.",
      },
    ],
    relatedArticles: [
      "how-to-list-skills-on-a-cv",
      "how-long-should-a-cv-be",
      "how-to-answer-tell-me-about-yourself",
    ],
    relatedLinks: [
      { href: "/career-levels/graduate", label: "Graduate CV writing" },
      { href: "/cv-samples/graduate-cv", label: "Graduate CV sample" },
      { href: "/career-situations/first-job", label: "Help with your first job search" },
      { href: "/career-advice/graduates", label: "More graduate career advice" },
    ],
  },
  {
    slug: "using-ai-to-write-your-cv",
    title: "Using AI to write your CV: what works and what does not",
    metaTitle: "Using AI to Write Your CV: What Works and What to Avoid",
    metaDescription:
      "How to use ChatGPT and other AI tools on your CV: what they do well, where they fail, what recruiters notice, and how to protect your personal data.",
    category: "CV writing",
    readMinutes: 7,
    published: "2026-09-27",
    updated: "2026-09-27",
    excerpt:
      "AI tools are genuinely useful for parts of CV writing and genuinely risky for others. The difference is whether you treat them as an editor or as the author.",
    quickAnswer:
      "AI tools such as ChatGPT can help you write a CV by restructuring content, tightening wording, suggesting stronger verbs and checking a CV against a job description. They cannot supply your real achievements, and they sometimes invent details or produce generic phrasing recruiters recognise. Give them accurate facts, remove personal identifiers before uploading, and fact-check every line before you send it.",
    intro:
      "AI writing tools have become part of how many people approach job applications, and it would be odd to pretend otherwise. Used well, they save time and improve clarity. Used carelessly, they produce CVs that sound polished but say very little, sometimes contain claims that are not true, and look strikingly similar to everyone else's. This guide is deliberately balanced. It covers where AI genuinely helps, where it reliably fails, what employers tend to notice, and a workflow that gets the benefit without the risk.",
    sections: [
      {
        heading: "What AI tools do well",
        paragraphs: [
          "Large language models are strong at language tasks with clear inputs. On a CV, that makes them useful as an editor, a sparring partner and a checker, rather than as an author. The tasks where they tend to add real value include:",
          "They are also patient. You can ask for five alternative versions of a profile, compare them and keep the best phrase from each, which is a quick way to get unstuck when you are staring at a blank page. In every case, though, the underlying facts have to come from you.",
        ],
        bullets: [
          "Tightening wordy bullets, removing repetition and cutting filler phrases.",
          "Suggesting stronger, more specific verbs to replace weak openings such as \"responsible for\" or \"helped with\".",
          "Restructuring a messy draft into a clear order, or turning a paragraph of notes into bullets.",
          "Comparing your CV with a job description and pointing out requirements you have not addressed.",
          "Generating questions that prompt you to remember achievements, figures and outcomes.",
          "Adjusting spelling and terminology for a different market, such as British or American English.",
          "Checking grammar, consistency of tense and formatting of dates.",
        ],
      },
      {
        heading: "Where AI fails, and why",
        paragraphs: [
          "The core limitation is simple: an AI tool knows nothing about your career beyond what you tell it. If you give it vague input, it fills the gaps with plausible-sounding language, and plausible is the problem. A bullet like \"spearheaded cross-functional initiatives that drove significant operational efficiencies\" sounds impressive and says nothing a recruiter can use. It could describe almost anyone.",
          "Worse, AI tools can invent specifics. Ask one to \"make this bullet stronger\" and it may add a percentage improvement, a team size or a budget figure that you never mentioned. These fabrications can be subtle, and they are easy to miss when you are reading quickly. A CV that contains an invented number is a liability: it can be exposed in an interview, in a reference check, or by a hiring manager who knows the real scale of the work in your sector.",
          "AI also tends towards a recognisable house style. Certain words and structures recur: inflated verbs, triple lists of abstract nouns, and profiles that open with the same few adjectives. When many applicants use the same tools with similar prompts, their CVs start to converge. That makes it harder, not easier, to stand out.",
          "Finally, AI tools do not know your target market as well as they sound. They may apply one country's conventions to another, recommend including personal details that a market does not expect, or confidently state rules about CV length or format that are not true everywhere. Treat any advice about conventions as a starting point to check, not as fact.",
        ],
      },
      {
        heading: "What recruiters tend to notice",
        paragraphs: [
          "Recruiters are not usually running your CV through detection software and rejecting it for AI use, and detection tools are not reliable enough to justify that anyway. What they notice is the effect of unedited AI output: a CV full of confident claims with no concrete evidence behind them, language that sounds more like marketing copy than a person describing their work, and bullet points that could be swapped between candidates without anyone noticing.",
          "They also notice mismatches. If the CV reads as highly polished and strategic but the candidate cannot explain their achievements in the same terms at interview, the gap is obvious. The same applies to cover letters that sound nothing like the person on the video call. Your CV should be something you can talk through comfortably, line by line, in your own words.",
          "Some employers now state their own position on AI use in applications or assessments, particularly for written tasks and tests. If an employer gives guidance, read it and follow it. Using AI to polish a CV is broadly accepted; using it to complete an assessment designed to test your own ability may breach the rules of that process.",
        ],
      },
      {
        heading: "Privacy: think before you upload your CV",
        paragraphs: [
          "A CV contains a concentrated set of personal information: your name, contact details, employment history and sometimes your address or date of birth. Before pasting it into any AI tool, check how that tool handles your data. Many services let you control whether your conversations are used to improve their models, and business or enterprise accounts often have different terms from free consumer accounts. Read the settings and the privacy information for the specific tool you use.",
          "The safest approach is to remove what the tool does not need. It does not need your phone number, email, home address, date of birth or any identity numbers to improve your bullets. Replace your name with a placeholder if you like. The content that matters for editing, your roles and achievements, works just as well without identifiers.",
          "Take particular care with your employer's information. Client names, unreleased financial results, internal project names and confidential figures may be covered by your employment contract or a confidentiality agreement. Describe them in general terms before sharing them with any external tool, just as you would on the final CV itself.",
          "Remember that you may be sharing more than your own data. Referees' names and contact details, colleagues mentioned in your achievements and client information all belong to other people. Leave them out of anything you paste into an external tool.",
        ],
      },
      {
        heading: "Fact-check every line",
        paragraphs: [
          "Whatever an AI tool produces, you are the one sending it and the one who will be asked about it. Before any AI-edited CV goes out, read it slowly with your original notes beside you and check each of the following:",
        ],
        bullets: [
          "Every number, percentage, team size and budget matches something you actually know to be true.",
          "Job titles, employers and dates are exactly as they were, with nothing renamed or adjusted.",
          "No skills, tools or qualifications have been added that you do not have.",
          "Claims of leadership or ownership reflect your real role, not an upgraded version of it.",
          "The language sounds like you, and you could explain each bullet in an interview without notes.",
          "Market conventions, such as length, photo and personal details, suit the country you are applying to.",
        ],
      },
      {
        heading: "A workflow that gets the benefit without the risk",
        paragraphs: [
          "The most reliable approach reverses the usual order. Instead of asking an AI to write your CV and then editing its output, start by writing down the facts yourself: for each role, what you were responsible for, what you changed, what the results were and any figures you can stand behind. This is the part only you can do, and it is where the value of a CV lives.",
          "Then use the tool on that material with specific instructions: tighten these bullets without adding any new information; suggest a clearer structure for this section; list the requirements in this job description that my CV does not yet address. Constraining the task reduces the chance of invented detail and keeps the output grounded in your experience.",
          "Finally, edit the result as the author, not as a proofreader. Remove any phrase you would not say out loud. Restore specifics the tool smoothed away. Check the whole document against the job you are applying for, and against the fact-checking list above. The finished CV should read as if a clear, capable person wrote it about their own work, because one did.",
          "AI tools are a reasonable choice when your main need is editing and polish. They are a weaker choice when the real problem is strategic: when you are changing careers, entering a new market, stepping up to executive level, or unsure what your strongest story is. Those situations call for judgement about positioning, which comes from understanding your career and your target readers. That is where an experienced human reviewer or writer adds what a language model cannot.",
        ],
      },
    ],
    takeaways: [
      "Use AI as an editor and checker, not as the author of your achievements.",
      "AI can invent numbers and details; verify every claim against your own records.",
      "Unedited AI output tends to sound generic, and recruiters notice claims without evidence.",
      "Strip personal identifiers and confidential employer details before uploading a CV to any tool.",
      "Write the facts yourself first, then give the tool narrow, specific editing instructions.",
    ],
    faqs: [
      {
        q: "Is it OK to use ChatGPT to write my CV?",
        a: "Yes, using ChatGPT or similar tools to help with your CV is broadly acceptable, especially for editing, restructuring and checking your CV against a job description. The risk lies in letting it write unchecked. AI tools can produce generic wording and sometimes invent figures or details, so supply accurate facts yourself and fact-check every line before you send the CV to an employer.",
      },
      {
        q: "Can recruiters tell if a CV was written by AI?",
        a: "Recruiters often notice the signs of unedited AI output rather than AI use itself: vague but confident claims, inflated language, generic profiles and bullets that could belong to anyone. Detection tools are not reliable enough to be decisive. A CV that you have edited into your own voice, with specific and verifiable achievements, is very hard to distinguish from one written without AI help.",
      },
      {
        q: "Is it safe to upload my CV to an AI tool?",
        a: "It can be, if you take precautions. Check the tool's privacy settings and whether your conversations may be used to train its models. Before uploading, remove your phone number, email, address, date of birth and any identity numbers, which the tool does not need for editing. Also generalise confidential employer information such as client names or unpublished figures.",
      },
      {
        q: "What is the best way to use AI for CV writing?",
        a: "Write down your real responsibilities, achievements and figures first, then give the AI narrow instructions, such as tightening bullets without adding new information or identifying job requirements your CV does not address. Edit the output so it sounds like you, and check every number, title and date against your records. This keeps the content accurate while saving time on structure and wording.",
      },
    ],
    relatedArticles: [
      "how-to-choose-a-cv-writer",
      "responsibilities-into-achievements",
      "how-to-tailor-a-cv-to-a-job-description",
    ],
    relatedLinks: [
      { href: "/cv-review", label: "Human CV review" },
      { href: "/cv-writing", label: "CV writing service" },
      { href: "/resources/cv-checklist", label: "CV checklist" },
    ],
  },
];
