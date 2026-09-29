/**
 * JOB ROLE ENTITIES
 * ------------------------------------------------------------------
 * Each entry generates one page at /job-roles/{slug} through the
 * shared template. Adding a role is a data change here, never a new
 * component.
 *
 * The architecture rule applies: do not add a role until there is
 * genuinely role-specific content for every field below. A role page
 * that only swaps the job title into a generic sentence is exactly the
 * thin programmatic page the plan rules out.
 */

export type JobRole = {
  slug: string;
  name: string;
  category: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  overview: string;
  /** What hiring managers in this role actually screen for. */
  employersLookFor: string[];
  /** How the CV should be positioned for this role specifically. */
  positioning: string;
  keySkills: string[];
  /** Real example bullets. This is the most useful thing on the page. */
  achievementExamples: string[];
  commonMistakes: string[];
  atsKeywords: string[];
  seniority: Array<{ level: string; note: string }>;
  relatedRoles: string[];
  relatedIndustries: string[];
  /** AEO: answer-first summary, 40-70 words. */
  quickAnswer?: string;
  /** AEO: question-led FAQs, answer-first. */
  faqs?: Array<{ q: string; a: string }>;
  /** ISO date of last substantive review. */
  updated?: string;
};

const baseRoles: JobRole[] = [
  {
    slug: "software-engineer",
    name: "Software Engineer",
    category: "Technology",
    metaTitle: "Software Engineer CV Writing and Guidance",
    metaDescription:
      "How to position a Software Engineer CV for international roles: what employers screen for, achievement examples, ATS keywords and common mistakes.",
    lead: "A Software Engineer CV is read twice: once by a parser looking for a stack, and once by an engineer looking for judgement. Most CVs are built for neither.",
    overview:
      "Software Engineer covers a wide band, from a graduate shipping features in a single service to an engineer owning the design of a system several teams depend on. Hiring managers read the CV to work out which of those you are, and most CVs make them guess.",
    employersLookFor: [
      "A clear, current technical stack, named rather than implied",
      "Scope: the size of the system, the traffic, the team, the data",
      "Ownership of something end to end, not just assigned tickets",
      "Evidence of engineering judgement, usually in how a trade-off is described",
      "Testing, deployment and operational habits, not just feature work",
      "Collaboration with product and other engineers, described concretely",
    ],
    positioning:
      "Lead with the stack and the scope, because that is what determines whether you are screened in. Then use the bullets to show judgement: what the problem was, what you chose, and what happened to the numbers. An engineer reading a CV can tell within two bullets whether you understand your own work.",
    keySkills: [
      "Languages and frameworks in current use",
      "System and API design",
      "Databases and data modelling",
      "Testing and code review",
      "CI/CD and deployment",
      "Cloud platforms and containers",
      "Observability and incident response",
      "Version control and branching strategy",
    ],
    achievementExamples: [
      "Rebuilt the order-processing service in Go, cutting p95 latency from 1.8s to 240ms and removing the nightly batch job entirely.",
      "Designed and shipped the public API used by three partner integrations, from schema to rate limiting, supporting 40k requests a day within six months.",
      "Introduced contract testing across four services, reducing production incidents caused by breaking changes from roughly one a fortnight to none in nine months.",
      "Took the deployment pipeline from a 40-minute manual release to a 6-minute automated one, enabling the team to move from weekly to daily releases.",
    ],
    commonMistakes: [
      "Listing every technology ever touched, which makes the current stack impossible to identify",
      "Describing tickets rather than outcomes: \"worked on the payments module\" says nothing",
      "No numbers anywhere, in a profession that measures everything",
      "A skills section that contradicts the experience section",
      "Burying the most recent and most relevant work under an outdated summary",
    ],
    atsKeywords: [
      "software engineer",
      "backend development",
      "API design",
      "microservices",
      "CI/CD",
      "unit testing",
      "cloud infrastructure",
      "agile development",
    ],
    seniority: [
      {
        level: "Junior",
        note: "The CV proves you can ship. Projects, internships and contributions count, and the code quality signals matter more than the scale.",
      },
      {
        level: "Mid-level",
        note: "Ownership appears. You are expected to have taken a feature from requirement to production and handled what broke afterwards.",
      },
      {
        level: "Senior",
        note: "Design decisions and their consequences. Scope moves from feature to system, and mentoring starts to matter.",
      },
      {
        level: "Lead and above",
        note: "Technical direction, cross-team impact and the business results of engineering decisions. The stack becomes context rather than the headline.",
      },
    ],
    relatedRoles: ["data-analyst", "project-manager"],
    relatedIndustries: ["information-technology", "banking"],
  },
  {
    slug: "data-analyst",
    name: "Data Analyst",
    category: "Technology",
    metaTitle: "Data Analyst CV Writing and Guidance",
    metaDescription:
      "How to position a Data Analyst CV: the tools employers screen for, achievement examples that show business impact, ATS keywords and mistakes to avoid.",
    lead: "A Data Analyst CV that lists tools gets filtered in and then filtered out. What separates candidates is whether the analysis changed a decision.",
    overview:
      "Data Analyst covers everything from building reports someone else acts on to owning the measurement of a business area. The tools are broadly the same across that range, which is precisely why a CV built on tools alone does not differentiate anyone.",
    employersLookFor: [
      "SQL depth, which is still the single most screened skill in the role",
      "A named BI or visualisation tool, used at more than dashboard-assembly level",
      "Evidence that an analysis led to a decision, not just a deliverable",
      "Comfort with messy, real data and the cleaning that implies",
      "Communication with non-technical stakeholders",
      "Domain understanding of the business being measured",
    ],
    positioning:
      "Name the tools once, clearly, then spend the rest of the CV on decisions. The strongest Data Analyst bullets follow one shape: what question the business had, what you found, and what changed because of it. Without the third part, the bullet is describing a report rather than an analyst.",
    keySkills: [
      "SQL",
      "Excel and spreadsheet modelling",
      "Power BI, Tableau or Looker",
      "Python or R for analysis",
      "Data cleaning and validation",
      "Statistical reasoning and A/B testing",
      "Dashboard and report design",
      "Stakeholder communication",
    ],
    achievementExamples: [
      "Found that 31% of failed checkouts came from a single payment provider timeout, leading to a provider switch that recovered an estimated $240k in annual revenue.",
      "Rebuilt the weekly commercial reporting pack in Power BI, cutting preparation from two days of manual work to an automated refresh and freeing roughly 80 analyst hours a quarter.",
      "Designed the measurement framework for a pricing trial across 14 stores, giving the commercial team a clear read on a change they had been arguing about for a year.",
      "Cleaned and reconciled three overlapping customer datasets into a single source, cutting duplicate records by 22% and ending a recurring dispute between sales and finance.",
    ],
    commonMistakes: [
      "A tools list with no evidence of depth in any of them",
      "Describing dashboards built rather than decisions influenced",
      "No numbers, in a role whose entire function is numbers",
      "Claiming machine learning experience that one university project does not support",
      "Writing for analysts when the hiring manager is often a commercial lead",
    ],
    atsKeywords: [
      "data analyst",
      "SQL",
      "Power BI",
      "Tableau",
      "data visualisation",
      "reporting",
      "stakeholder management",
      "data cleaning",
    ],
    seniority: [
      {
        level: "Junior",
        note: "Tool fluency and accuracy. The CV needs to prove you can be trusted with a dataset unsupervised.",
      },
      {
        level: "Mid-level",
        note: "Owning a business area's measurement and being the person stakeholders come to with questions.",
      },
      {
        level: "Senior",
        note: "Framing the question rather than answering it. Choosing what should be measured, and saying when an analysis will not settle the argument.",
      },
      {
        level: "Lead",
        note: "Data strategy, team direction and the credibility of the numbers the business runs on.",
      },
    ],
    relatedRoles: ["software-engineer", "accountant"],
    relatedIndustries: ["information-technology", "banking"],
  },
  {
    slug: "project-manager",
    name: "Project Manager",
    category: "Business",
    metaTitle: "Project Manager CV Writing and Guidance",
    metaDescription:
      "How to position a Project Manager CV: portfolio scale, delivery evidence, certifications, achievement examples and the mistakes that cost interviews.",
    lead: "Every Project Manager CV claims delivery on time and within budget. The ones that get interviews say what was delivered, how big it was, and what went wrong on the way.",
    overview:
      "Project Manager is one of the most crowded titles in any applicant pool, and one of the hardest to differentiate on paper. The differentiator is almost always scale and specificity: budget, team size, duration, domain, and what you did when the plan broke.",
    employersLookFor: [
      "Portfolio scale: budget, team size, duration and number of concurrent projects",
      "Domain, because a construction PM and a software PM are not interchangeable",
      "Methodology in practice, not just named: Agile, waterfall or a real hybrid",
      "Stakeholder management at the level the role requires",
      "Evidence of recovering something that was going wrong",
      "Certifications where the market expects them",
    ],
    positioning:
      "Put the numbers in the first third of the CV: largest budget, largest team, typical project length, domain. A hiring manager is sizing you before they read anything else. Then use bullets to show judgement under pressure, because a plan that never slipped tells them nothing about you.",
    keySkills: [
      "Project planning and scheduling",
      "Budget and resource management",
      "Risk and issue management",
      "Stakeholder and vendor management",
      "Agile and Scrum practice",
      "Change control",
      "Reporting to steering groups",
      "Project tooling such as MS Project, Jira or Asana",
    ],
    achievementExamples: [
      "Delivered a $2.4M ERP rollout across four sites and 300 users, completing two weeks early after re-sequencing the data migration.",
      "Took over a delayed integration project at 60% overspend and delivered it within the revised budget by cutting two low-value workstreams with the sponsor's agreement.",
      "Ran a portfolio of six concurrent projects worth a combined $5M with a team of 18, maintaining a 94% on-time delivery rate across two years.",
      "Introduced a weekly risk review that surfaced a vendor capacity problem three months before it would have hit the critical path.",
    ],
    commonMistakes: [
      "\"Delivered projects on time and within budget\" with no project, no time and no budget named",
      "Listing methodologies without evidence of using any of them",
      "No scale anywhere, leaving the reader unable to size the candidate",
      "Describing the project rather than your decisions inside it",
      "Hiding the domain, which is often the first filter applied",
    ],
    atsKeywords: [
      "project manager",
      "stakeholder management",
      "budget management",
      "risk management",
      "agile",
      "scrum",
      "PMP",
      "project delivery",
    ],
    seniority: [
      {
        level: "Coordinator",
        note: "Supporting delivery: tracking, reporting, scheduling. The CV shows reliability and organisation.",
      },
      {
        level: "Project Manager",
        note: "Owning delivery of a defined scope, with budget and team named.",
      },
      {
        level: "Senior Project Manager",
        note: "Larger or more complex programmes, difficult stakeholders, and recovery work.",
      },
      {
        level: "Programme Manager",
        note: "Multiple related projects, benefits realisation, and governance at executive level.",
      },
    ],
    relatedRoles: ["business-analyst", "software-engineer"],
    relatedIndustries: ["information-technology", "engineering"],
  },
  {
    slug: "accountant",
    name: "Accountant",
    category: "Finance",
    metaTitle: "Accountant CV Writing and Guidance",
    metaDescription:
      "How to position an Accountant CV for international roles: qualifications, systems, reporting scope, achievement examples and common mistakes.",
    lead: "An Accountant CV is screened on three things before anything else: your qualification, your systems, and the size of what you were responsible for.",
    overview:
      "Accountant spans bookkeeping through to financial control, and the market treats those as different professions. The qualification and the reporting scope tell a recruiter which one you are, and a CV that leaves either vague gets filtered out early.",
    employersLookFor: [
      "Qualification and status: ACCA, CIMA, CA, CPA, part-qualified or qualified by experience",
      "Accounting systems in current use, named specifically",
      "Scope: turnover managed, entities handled, team size",
      "Month-end and year-end ownership rather than assistance",
      "Statutory reporting standard: IFRS, local GAAP, or both",
      "Audit, tax and compliance exposure relevant to the target market",
    ],
    positioning:
      "The qualification and the reporting scope belong in the first five lines. After that, the CV should show ownership: closing the month rather than helping close it, and what you improved about how the numbers get produced.",
    keySkills: [
      "Financial reporting under IFRS or local GAAP",
      "Month-end and year-end close",
      "Reconciliations and controls",
      "Budgeting and forecasting",
      "Accounts payable and receivable",
      "Tax compliance",
      "ERP and accounting systems such as SAP, Oracle, Xero or QuickBooks",
      "Advanced Excel modelling",
    ],
    achievementExamples: [
      "Reduced the month-end close from 12 working days to 6 by rebuilding the reconciliation process and automating three recurring journals.",
      "Managed the full reporting cycle for three entities with combined turnover of $18M, including statutory accounts and the annual audit.",
      "Identified and recovered $96k in duplicate supplier payments over an 18-month period, and closed the control gap that allowed them.",
      "Led the migration from QuickBooks to SAP for a 40-person business, completing the cutover with no reporting gap and training the finance team of five.",
    ],
    commonMistakes: [
      "Leaving qualification status unclear, which stalls the application immediately",
      "No turnover, entity count or team size, so the scope cannot be judged",
      "Listing duties that are assumed in the role rather than achievements",
      "Not naming the reporting standard when applying to another market",
      "Generic Excel claims in a profession where modelling depth is the differentiator",
    ],
    atsKeywords: [
      "accountant",
      "financial reporting",
      "month-end close",
      "reconciliations",
      "IFRS",
      "ACCA",
      "budgeting",
      "accounts payable",
    ],
    seniority: [
      {
        level: "Assistant Accountant",
        note: "Transactional accuracy and support to the close. Part-qualification is usually the signal.",
      },
      {
        level: "Accountant",
        note: "Ownership of the close for an entity or area, with statutory exposure.",
      },
      {
        level: "Senior Accountant",
        note: "Multiple entities, audit lead, and improvement of the process itself.",
      },
      {
        level: "Financial Controller",
        note: "Team leadership, controls environment, and the numbers the board acts on.",
      },
    ],
    relatedRoles: ["data-analyst", "business-analyst"],
    relatedIndustries: ["banking", "information-technology"],
  },
  {
    slug: "business-analyst",
    name: "Business Analyst",
    category: "Business",
    metaTitle: "Business Analyst CV Writing and Guidance",
    metaDescription:
      "How to position a Business Analyst CV: requirements work, domain, stakeholder evidence, achievement examples and the mistakes that get CVs filtered.",
    lead: "Business Analyst means different things in different companies, and a CV that does not settle which one you are leaves the recruiter to guess. They usually guess wrong.",
    overview:
      "The title covers process analysis, requirements engineering, systems analysis and something close to product ownership. The strongest Business Analyst CVs name the flavour early and prove it with the artefacts they actually produced.",
    employersLookFor: [
      "The flavour of BA work: process, systems, data or product-facing",
      "Domain knowledge, which often outweighs technique",
      "Requirements artefacts actually produced, named specifically",
      "Stakeholder range: who you dealt with and at what level",
      "Evidence a recommendation was adopted and what it changed",
      "Tooling and technique: process modelling, SQL, wireframes as relevant",
    ],
    positioning:
      "State the domain and the flavour in the summary, then let the bullets show the chain: the problem, what you investigated, what you recommended, and what the business did with it. A BA CV that stops at \"gathered requirements\" describes a step, not a contribution.",
    keySkills: [
      "Requirements elicitation and documentation",
      "Process mapping and BPMN",
      "User stories and acceptance criteria",
      "Gap and impact analysis",
      "SQL and data investigation",
      "Stakeholder workshops",
      "UAT planning and support",
      "Tooling such as Jira, Confluence and Visio",
    ],
    achievementExamples: [
      "Mapped the claims intake process end to end and identified a duplicated approval step, removal of which cut average handling time by 3.5 days.",
      "Wrote the requirements for a customer portal used by 12,000 account holders, and ran UAT with the operations team through to sign-off.",
      "Investigated a recurring billing discrepancy across two systems, traced it to a rounding rule mismatch, and specified the fix adopted by both teams.",
      "Ran discovery workshops with four departments to settle scope on a stalled project, producing the agreed requirement set that unblocked delivery.",
    ],
    commonMistakes: [
      "Not naming the domain, which is often the strongest asset on the CV",
      "\"Gathered requirements from stakeholders\" repeated across every role",
      "No artefacts named, so the actual output is invisible",
      "Claiming both deep technical and deep commercial work without evidence of either",
      "Omitting what happened after the recommendation",
    ],
    atsKeywords: [
      "business analyst",
      "requirements gathering",
      "process mapping",
      "user stories",
      "stakeholder management",
      "gap analysis",
      "UAT",
      "BPMN",
    ],
    seniority: [
      {
        level: "Junior BA",
        note: "Documentation accuracy and support to senior analysts. Domain learning is the main signal.",
      },
      {
        level: "Business Analyst",
        note: "Owning requirements for a workstream and running the stakeholder relationships around it.",
      },
      {
        level: "Senior BA",
        note: "Framing the problem before requirements exist, and challenging the brief when it is wrong.",
      },
      {
        level: "Lead BA",
        note: "Practice standards, mentoring and analysis across a programme.",
      },
    ],
    relatedRoles: ["project-manager", "data-analyst"],
    relatedIndustries: ["banking", "information-technology"],
  },
  {
    slug: "civil-engineer",
    name: "Civil Engineer",
    category: "Engineering",
    metaTitle: "Civil Engineer CV Writing and Guidance",
    metaDescription:
      "How to position a Civil Engineer CV for international roles: project types, codes and standards, chartership, achievement examples and common mistakes.",
    lead: "A Civil Engineer CV is judged on the projects, the codes you worked to, and your professional status. Everything else is supporting detail.",
    overview:
      "Civil Engineer covers design, site and project roles across very different project types. Recruiters filter first on project type and standards, because a bridge designer and a residential site engineer are not substitutes, and the standards you have worked to decide whether your experience transfers to their market.",
    employersLookFor: [
      "Project types and values, listed clearly",
      "Design standards and codes worked to, which decide portability across markets",
      "Professional status: chartered, incorporated, or working towards it",
      "Design software in current use",
      "Site versus design balance, stated rather than implied",
      "Health, safety and compliance responsibility",
    ],
    positioning:
      "Lead with a project list: type, value, your role, and the standards. For international applications the codes matter enormously, because they tell the employer how much re-learning your experience requires. Then show ownership of technical decisions rather than participation in projects.",
    keySkills: [
      "Structural or geotechnical design",
      "AutoCAD, Civil 3D and Revit",
      "Analysis software such as ETABS, SAP2000 or STAAD",
      "Quantity estimation and BOQ",
      "Site supervision and quality control",
      "Contract administration such as FIDIC",
      "Health and safety compliance",
      "Codes and standards relevant to the target market",
    ],
    achievementExamples: [
      "Led the structural design of a 14-storey mixed-use building to BS EN standards, coordinating with MEP and architectural teams through to construction issue.",
      "Supervised site works on a $6M highway package covering 8km, maintaining programme through two monsoon seasons.",
      "Revised a foundation design after site investigation results changed, saving an estimated $180k in materials without extending the programme.",
      "Introduced a quality checklist at pour stage that cut rework instructions from an average of five a month to one.",
    ],
    commonMistakes: [
      "No project values or types, leaving the level of work invisible",
      "Not naming the design codes, which is the first thing an overseas employer checks",
      "Omitting chartership status or progress towards it",
      "Blending site and design experience so neither is clear",
      "Listing software without indicating depth",
    ],
    atsKeywords: [
      "civil engineer",
      "structural design",
      "AutoCAD",
      "Civil 3D",
      "site supervision",
      "quantity estimation",
      "FIDIC",
      "quality control",
    ],
    seniority: [
      {
        level: "Graduate Engineer",
        note: "Supporting design and site work while building towards professional registration.",
      },
      {
        level: "Engineer",
        note: "Owning design packages or site sections, with technical decisions attributed to you.",
      },
      {
        level: "Senior Engineer",
        note: "Leading design teams or site packages, checking others' work, and client-facing technical responsibility.",
      },
      {
        level: "Principal or Chartered",
        note: "Design authority, professional sign-off and responsibility for the technical approach.",
      },
    ],
    relatedRoles: ["project-manager"],
    relatedIndustries: ["engineering", "construction"],
  },
];

import { rolesA } from "@/lib/content/roles-a";
import { rolesB } from "@/lib/content/roles-b";
import { aeoRoles } from "@/lib/content/aeo-retrofit";

/** All published job roles: hand-built base entries (with AEO retrofit) plus expansion batches. */
export const jobRoles: JobRole[] = [
  ...baseRoles.map((r) => ({ ...aeoRoles[r.slug], ...r })),
  ...rolesA,
  ...rolesB,
];

export function getJobRole(slug: string): JobRole | undefined {
  return jobRoles.find((r) => r.slug === slug);
}

export const jobRoleCategories = Array.from(new Set(jobRoles.map((r) => r.category)));
