import type { Industry } from "@/lib/industries";

export const industriesA: Industry[] = [
  {
    slug: "software",
    name: "Software and SaaS",
    metaTitle: "Software CV Writing Service and CV Guidance",
    metaDescription:
      "How to write a CV for software product and SaaS companies: shipped features, product impact, engineering practice and the mistakes that sink tech CVs.",
    lead: "Software product companies hire for what you shipped and what it changed. A CV that reads like a task list from a ticketing system tells them neither.",
    overview:
      "Software here means companies whose product is the software: SaaS platforms, developer tools, consumer apps and product-led start-ups. Unlike broad IT, where the business runs on technology, here the technology is the business. Hiring managers read for product impact, engineering practice and the ability to work inside a fast release cycle.",
    careerPaths: [
      "Engineering: junior to senior to staff or principal engineer",
      "Engineering management: tech lead to engineering manager to head of engineering",
      "Product: associate product manager to product manager to group product lead",
      "Platform and developer experience: build tooling, infrastructure and internal platforms",
      "Solutions and customer engineering: technical pre-sales, onboarding and integrations",
    ],
    employersLookFor: [
      "Features and products shipped, with what changed for users or revenue",
      "Engineering practice: code review, testing, CI/CD and release cadence",
      "Ownership of something in production, including when it broke",
      "Scale in product terms: active users, requests, tenants, data volume",
      "Comfort with ambiguity and the short feedback loops of product teams",
      "Close collaboration with product, design and customer-facing teams",
    ],
    positioning:
      "Lead each role with the product and your part in it, then prove outcomes: adoption, latency, conversion, churn, cost to serve. Product companies care less about the length of your stack list and more about whether you moved a metric the business watches. Name the metric even when you cannot share the number.",
    competencies: [
      "Product-minded engineering",
      "System design for multi-tenant SaaS",
      "Automated testing and CI/CD",
      "API design and integrations",
      "Observability and on-call ownership",
      "Performance and cost optimisation",
      "Cross-functional work with product and design",
      "Mentoring and code review",
    ],
    commonMistakes: [
      "Listing tickets and tasks instead of shipped features and their effect",
      "No sense of product scale, so impact cannot be judged",
      "A stack list longer than the experience section",
      "Hiding side projects or open-source work that shows how you build",
      "Treating a start-up role as less credible instead of showing the breadth it demanded",
    ],
    relatedRoles: ["software-engineer", "devops-engineer", "product-manager", "data-scientist"],
    quickAnswer:
      "A software industry CV should lead with what you shipped and what changed because of it: users, performance, revenue or reliability. Product companies and SaaS businesses screen for a clear current stack, then read for ownership, engineering practice and measurable product impact. Task lists copied from a ticketing system rarely survive that second read.",
    faqs: [
      {
        q: "How do I write a CV for a SaaS company?",
        a: "Write it around the product, not the job description. For each role, name what you built or owned, who used it, and the outcome it moved, such as adoption, churn, latency or cost. SaaS employers also look for production ownership and release practice, so mention on-call, testing and deployment work where it was genuinely yours.",
      },
      {
        q: "Should I include side projects on a software engineer CV?",
        a: "Yes, if they show something your employment history does not, such as a language you are moving into, a shipped product or real open-source contributions. Keep them short, link to the repository or live product, and describe them like work: what it does, what you built and who uses it. Tutorial clones add very little.",
      },
      {
        q: "How is a software CV different from a general IT CV?",
        a: "A software CV is judged on product impact, while a general IT CV is often judged on the systems and services you keep running. Product companies want shipped features, user-facing outcomes and engineering practice. IT departments weigh uptime, support scope and platform administration more heavily. The stack matters in both, but the evidence behind it differs.",
      },
      {
        q: "How long should a software engineer CV be?",
        a: "Two pages is right for most experienced software professionals, and one page is often enough for those under three years in. Length should follow relevance: give your last two or three roles full detail and compress older ones to a line or two. Hiring managers in product companies skim fast, so the first half page carries most of the weight.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "cybersecurity",
    name: "Cybersecurity",
    metaTitle: "Cybersecurity CV Writing Service and CV Guidance",
    metaDescription:
      "How to write a cybersecurity CV for SOC, pentesting, GRC or security engineering roles: certifications, frameworks, incidents and what to keep confidential.",
    lead: "Security CVs are read by people trained to spot overclaiming. Certifications open the door, but the incidents, controls and environments you can name are what get you through it.",
    overview:
      "Cybersecurity spans defensive operations, offensive testing, governance and risk, cloud and application security, and security engineering. Each track screens differently: a SOC hiring manager wants detection and response evidence, a GRC lead wants frameworks and audits, and a penetration testing team wants methodology and findings. One generic security CV rarely satisfies any of them.",
    careerPaths: [
      "Security operations: SOC analyst to incident responder to SOC lead",
      "Offensive security: penetration tester to red team operator",
      "Governance, risk and compliance: analyst to GRC manager to CISO track",
      "Security engineering: cloud, application or identity security engineer",
      "Architecture: security engineer to security architect",
    ],
    employersLookFor: [
      "A clear track, not a claim to cover every area of security",
      "Tools and platforms named: SIEM, EDR, cloud security tooling, scanners",
      "Frameworks worked under, such as ISO 27001, NIST CSF, SOC 2 or PCI DSS",
      "Incident and investigation experience described with appropriate discretion",
      "Certifications that match the track, such as Security+, CISSP, CISM or OSCP",
      "Evidence you can explain risk to non-technical stakeholders",
    ],
    positioning:
      "Pick the track and write for it. Then describe the environment you protected: its size, cloud or on-premise, regulated or not, and the controls you built or tested. You can show serious incident work without breaching confidentiality by describing the type, your role and the outcome rather than the client or the vulnerability details.",
    competencies: [
      "Threat detection and SIEM use",
      "Incident response and forensics",
      "Vulnerability management",
      "Penetration testing methodology",
      "Cloud and identity security",
      "Security frameworks and audit readiness",
      "Risk assessment and reporting",
      "Security awareness and stakeholder communication",
    ],
    commonMistakes: [
      "A certification list that outweighs the experience section",
      "Claiming both red team and GRC depth early in a career",
      "Disclosing client names or vulnerability details that should stay confidential",
      "Listing tools without the environment size or what you did with them",
      "Leaving out home lab work when it is the strongest evidence a career changer has",
    ],
    relatedRoles: ["cybersecurity-specialist", "devops-engineer", "software-engineer"],
    quickAnswer:
      "A cybersecurity CV should commit to one track, such as security operations, penetration testing, GRC or security engineering, and prove it with the environments protected, frameworks applied and incidents handled. Certifications help clear screening, but security hiring managers look hardest at what you have actually detected, tested or remediated, described with discretion.",
    faqs: [
      {
        q: "What certifications should I put on a cybersecurity CV?",
        a: "Put the certifications that match the role you want near the top, with the year gained. Entry roles often screen for foundations such as Security+, testing roles value hands-on credentials such as OSCP, and management or GRC roles commonly ask for CISSP or CISM. Check job adverts in your target market, because expectations vary by country and employer.",
      },
      {
        q: "How do I get into cybersecurity with no experience on my CV?",
        a: "Show adjacent experience and hands-on practice. Systems administration, networking, service desk and development roles all carry security-relevant work, so pull that forward. Add home lab projects, capture-the-flag results and structured training with specific outcomes. A short, honest CV aimed at a SOC or junior analyst role beats one that claims senior skills without evidence.",
      },
      {
        q: "How do I describe incident response on a CV without breaching confidentiality?",
        a: "Describe the type of incident, your role, the scale and the outcome, and leave out client names and exploitable detail. For example, say you led containment of a ransomware incident across a multi-site environment and restored operations within the agreed recovery window. That tells an employer what they need to know without exposing anything sensitive.",
      },
      {
        q: "Should a cybersecurity CV be different for GRC and technical roles?",
        a: "Yes. A GRC CV leads with the frameworks, audits, policies and risk registers you have owned, written for a reader in risk or compliance. A technical CV leads with tools, environments, detections and tests. The same person can write both versions, but merging them into one usually makes each track look shallower than it really is.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "data-analytics",
    name: "Data and Analytics",
    metaTitle: "Data Analytics CV Writing Service and CV Guidance",
    metaDescription:
      "How to write a data analytics CV that proves impact: SQL, Python and BI tools shown clearly, and every dashboard or model tied to a real business decision.",
    lead: "Data hiring managers want to see a decision at the end of every bullet. Dashboards, pipelines and models only count when someone used them.",
    overview:
      "Data and analytics covers business intelligence, analytics engineering, data engineering, data science and machine learning. Employers in this space screen on tools first, typically SQL, Python and a BI platform, then look for the harder signal: whether your work changed a decision, a process or a number the business tracks.",
    careerPaths: [
      "Analysis: data analyst to senior analyst to analytics lead",
      "Business intelligence: BI developer to BI manager",
      "Analytics engineering: analyst to analytics engineer owning data models",
      "Data engineering: pipeline development to data platform ownership",
      "Data science: data scientist to senior data scientist or machine learning engineer",
    ],
    employersLookFor: [
      "SQL fluency stated plainly, plus Python or R where the role needs it",
      "The BI and warehouse tools you have used in production",
      "Business questions answered and decisions influenced",
      "Data volume and source complexity handled",
      "Data quality, testing and documentation habits",
      "Stakeholder communication: turning analysis into a recommendation",
    ],
    positioning:
      "Write every bullet as question, method, outcome. Name the tools once, clearly, then spend the CV on what the analysis changed: a pricing decision, a retained customer segment, a report that replaced hours of manual work. Analytics employers can teach a new BI tool quickly; they cannot easily teach business judgement.",
    competencies: [
      "SQL and data modelling",
      "Python or R for analysis",
      "Dashboard and report design",
      "Statistical analysis and experimentation",
      "Data pipelines and ETL or ELT",
      "Data quality and governance",
      "Translating business requirements into analysis",
      "Data storytelling for non-technical audiences",
    ],
    commonMistakes: [
      "Listing dashboards built without who used them or what changed",
      "Tool lists that include every library touched once",
      "No indication of data volume or source complexity",
      "Tutorial or competition projects presented as equivalent to production work",
      "Technical depth that buries the business outcome",
    ],
    relatedRoles: ["data-analyst", "data-scientist", "business-analyst", "software-engineer"],
    quickAnswer:
      "A data and analytics CV should show the tools clearly, usually SQL, Python and a BI platform, then prove that your work changed decisions. Hiring managers look for the business question, the method and the result in each bullet. Dashboards, models and pipelines only carry weight when the CV says who used them and what happened next.",
    faqs: [
      {
        q: "How do I show impact on a data analytics CV?",
        a: "Tie each piece of work to a decision or a measurable change. Instead of saying you built a sales dashboard, say who used it, what question it answered and what the business did differently as a result. If you cannot share figures, describe the direction and scale of the change. Impact written this way separates analysts from report producers.",
      },
      {
        q: "Which skills matter most on a data analytics CV?",
        a: "SQL matters most for almost every analytics role, followed by a BI tool such as Power BI, Tableau or Looker, and Python or R for deeper analysis. After tools, employers look for statistics, data modelling and the ability to explain findings to non-technical colleagues. List the tools once in a skills section and prove them in your experience.",
      },
      {
        q: "Should I put personal data projects on my CV?",
        a: "Yes, when you are early in your career or moving into data, and only if they are real analyses rather than tutorial exercises. Choose a project with a messy dataset, a clear question and a documented conclusion, and link to the code or write-up. Once you have production experience, personal projects should shrink to a line or disappear.",
      },
      {
        q: "Is a data science CV different from a data analytics CV?",
        a: "Yes. A data analytics CV emphasises reporting, business intelligence and decision support. A data science CV emphasises modelling, experimentation and machine learning, with evidence that models reached production or informed a real decision. Many roles blend both, so read the job advert carefully and lead with whichever side it weights more heavily.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "finance",
    name: "Corporate Finance and Investment",
    metaTitle: "Finance CV Writing Service and CV Guidance",
    metaDescription:
      "How to write a finance CV for FP&A, corporate finance, treasury and investment roles: budget and deal scale, modelling depth and the decisions you influenced.",
    lead: "Finance CVs are judged on the size of the numbers you influenced and the decisions you supported. A list of reports produced tells a finance director almost nothing.",
    overview:
      "This page covers finance outside banks and outside the audit and tax profession: FP&A, corporate finance, treasury, investment and business partnering within companies, funds and advisory firms. Employers want to see the scale of budgets or deals you worked on, the models you built, and how close you sat to the decisions made on them.",
    careerPaths: [
      "FP&A: financial analyst to FP&A manager to head of FP&A",
      "Business partnering: finance business partner to commercial finance lead",
      "Corporate finance and M&A: analyst to associate to director",
      "Treasury: treasury analyst to group treasurer",
      "Investment: analyst to portfolio manager or investment director",
    ],
    employersLookFor: [
      "Budget, revenue or deal size you worked on, stated early",
      "Modelling depth: forecasting, valuation and scenario analysis",
      "Decisions supported and your proximity to leadership",
      "ERP and planning tools used, such as SAP, Oracle or Anaplan",
      "Qualifications the role expects, such as CFA, CIMA or ACCA",
      "Commercial judgement, not only numerical accuracy",
    ],
    positioning:
      "Frame yourself by the decisions your numbers informed. State the size of the business or portfolio, the models you owned and who used them, and the outcomes: a cost programme, an acquisition, a refinancing, a pricing change. Finance leaders hire people who can challenge the business, so show where your analysis changed a plan.",
    competencies: [
      "Financial modelling and valuation",
      "Budgeting and forecasting",
      "Variance analysis and performance reporting",
      "Business partnering",
      "Cash and liquidity management",
      "Capital allocation and investment appraisal",
      "Due diligence and deal support",
      "Board and executive reporting",
    ],
    commonMistakes: [
      "Leading with month-end reporting when strategic work exists",
      "No budget, revenue or deal sizes, so scale is invisible",
      "Model complexity described without the decision it served",
      "Blending banking, accounting and corporate finance experience into one vague summary",
      "Unclear qualification status, such as part-qualified with no level stated",
    ],
    relatedRoles: ["financial-analyst", "accountant", "business-analyst"],
    quickAnswer:
      "A finance CV should state the scale of the budgets, portfolios or deals you worked on and show which decisions your analysis supported. For FP&A, treasury, corporate finance and investment roles, employers read for modelling depth, commercial judgement and proximity to leadership. Qualifications such as CFA, CIMA or ACCA matter, but evidence of influence matters more.",
    faqs: [
      {
        q: "How do I write an FP&A CV?",
        a: "Lead with the scope you supported, such as business unit revenue, cost base or number of cost centres, then show the forecasting and budgeting cycles you owned. The strongest FP&A bullets link analysis to action: a variance you explained that changed a spending decision, or a forecast model that became the planning standard. Name your planning and ERP tools clearly.",
      },
      {
        q: "Should I put CFA or CIMA progress on my CV if I haven't finished?",
        a: "Yes, show it clearly with the level passed and the expected completion date, for example CFA Level II candidate or CIMA Management level passed. Employers read part-qualified status as commitment, but vague wording such as studying CFA raises questions. Place it near the top if the role lists the qualification as required or preferred.",
      },
      {
        q: "How is a corporate finance CV different from a banking CV?",
        a: "A corporate finance CV focuses on decisions inside a business or on deals: budgets, investment cases, valuations and transactions. A banking CV focuses on products, client books and regulatory frameworks. Movement between the two is common, so if you are crossing over, translate your experience into the other side's language rather than assuming it transfers on its own.",
      },
      {
        q: "What numbers should a finance CV include?",
        a: "Include the numbers that show scale and influence: revenue or budget managed, deal or portfolio size, forecast accuracy improvements, cost savings identified and the size of the business you supported. Round figures are fine, and the currency should always be stated. If a number is confidential, give a range or a relative change rather than leaving scale out entirely.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "accounting",
    name: "Accounting and Audit",
    metaTitle: "Accounting CV Writing Service and CV Guidance",
    metaDescription:
      "How to write an accounting CV for audit, tax and industry roles: ACCA, CIMA or CPA status, practice versus industry background, standards and scope.",
    lead: "Accounting employers check two things before reading further: your qualification status and whether you trained in practice or in industry. Everything else is read through those two facts.",
    overview:
      "Accounting covers external audit, tax, advisory, and financial and management accounting inside companies. The practice versus industry split shapes almost every hiring decision: practice roles value client portfolios, audit cycles and technical standards, while industry roles value month-end ownership, systems and business support. Professional bodies such as ACCA, CIMA, ICAEW and CPA also carry different weight in different markets.",
    careerPaths: [
      "External audit: associate to senior to manager to partner",
      "Tax: compliance to advisory, in practice or in-house",
      "Financial accounting: accountant to financial controller",
      "Management accounting: management accountant to finance manager",
      "Practice to industry: audit senior to controller or group reporting",
    ],
    employersLookFor: [
      "Qualification status with body, level and expected completion",
      "Practice or industry background stated clearly",
      "Reporting standards worked under, such as IFRS, UK GAAP or US GAAP",
      "Client portfolio or entity scope: sectors, size, number of entities",
      "Systems used, from ERP platforms to consolidation tools",
      "Ownership of deadlines: month-end, year-end and filing dates",
    ],
    positioning:
      "Open with qualification and background in one line, then describe scope: the number and size of clients or entities, the standards applied and the parts of the cycle you owned. For a move from practice to industry, translate audit exposure into business terms. For a cross-border move, name the standards you know and the ones you are learning.",
    competencies: [
      "Financial statement preparation",
      "Audit planning and fieldwork",
      "Tax compliance and computations",
      "Month-end and year-end close",
      "Reconciliations and internal controls",
      "IFRS or local GAAP application",
      "Consolidation and group reporting",
      "ERP and accounting systems",
    ],
    commonMistakes: [
      "Qualification listed without body, level or completion date",
      "Audit clients described without sector, size or complexity",
      "Month-end duties listed without the deadlines or entities owned",
      "Reporting standards omitted on an international application",
      "Practice experience written in jargon an industry hiring manager skims past",
    ],
    relatedRoles: ["accountant", "financial-analyst", "business-analyst"],
    quickAnswer:
      "An accounting CV should open with your qualification status, such as ACCA, CIMA, ICAEW or CPA and the level reached, and make clear whether your experience is in practice or industry. Then show scope: clients or entities covered, reporting standards applied and the deadlines you owned. Those facts decide which roles you are credible for before anything else is read.",
    faqs: [
      {
        q: "How do I show ACCA on my CV if I'm part-qualified?",
        a: "State it precisely: the body, the level or papers completed and when you expect to finish, for example ACCA, Applied Skills complete, Strategic Professional in progress, completion expected next year. Put it in your headline or first lines if the role mentions ACCA. Precise wording reads as progress, while vague phrases such as ACCA student make employers guess.",
      },
      {
        q: "How do I move from audit to industry with my CV?",
        a: "Translate audit work into the language of the business you want to join. Instead of listing engagements, show the sectors you know, the size and complexity of the entities, and the control and reporting issues you identified. Highlight anything close to industry work, such as preparing statutory accounts or consolidations. Industry employers want to see you can own a close, not only review one.",
      },
      {
        q: "Should an accountant CV mention IFRS or GAAP?",
        a: "Yes, always name the reporting standards you have worked under, especially if you are applying in another country. Employers use them to judge how much of your technical knowledge transfers. If you have worked under local GAAP but are moving to an IFRS or US GAAP market, say so and mention any conversion training you have completed.",
      },
      {
        q: "What is the difference between an accounting CV and a finance CV?",
        a: "An accounting CV proves accuracy, compliance and control: statements prepared, audits completed, standards applied and deadlines met. A finance CV proves influence on decisions: forecasts, models, investment cases and commercial analysis. Many accountants move into finance roles, and the CV has to make that shift explicit rather than hoping the reader infers it.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "insurance",
    name: "Insurance",
    metaTitle: "Insurance CV Writing Service and CV Guidance",
    metaDescription:
      "How to write an insurance CV for underwriting, claims, broking or actuarial roles: lines of business, authority levels, book size and qualifications.",
    lead: "Insurance employers read your CV by line of business first. Property, casualty, life, health and specialty lines are different jobs, and a CV that does not say which one you know will not be read closely.",
    overview:
      "Insurance covers underwriting, claims, broking, actuarial work, product and distribution, across personal, commercial, life, health and specialty lines. Hiring is specific: employers want the classes of business you have handled, your authority levels and portfolio size, and, in many markets, the qualifications and licences that allow you to advise on or place business.",
    careerPaths: [
      "Underwriting: assistant underwriter to underwriter to senior underwriter or class lead",
      "Claims: claims handler to claims adjuster to claims manager",
      "Broking: account executive to account director",
      "Actuarial: actuarial analyst to qualified actuary",
      "Product, pricing and distribution roles",
    ],
    employersLookFor: [
      "Lines and classes of business named specifically",
      "Authority levels, limits and portfolio or book size",
      "Market context: personal lines, commercial, specialty or reinsurance",
      "Professional qualifications or licences relevant to the market",
      "Loss ratio, retention or claims outcome evidence where you own it",
      "Regulatory and conduct awareness for the jurisdiction",
    ],
    positioning:
      "Name the lines, the market segment and your authority from the top. Then show the outcomes insurance leaders track: loss ratio movement, retention, premium growth, claims leakage reduced or cycle time improved. For cross-border moves, state which regulatory regime you have worked under, because conduct rules and licensing differ by country.",
    competencies: [
      "Risk assessment and underwriting",
      "Claims investigation and settlement",
      "Policy wording and coverage analysis",
      "Broking and placement",
      "Pricing and actuarial analysis",
      "Portfolio and loss ratio management",
      "Regulatory and conduct compliance",
      "Client and broker relationship management",
    ],
    commonMistakes: [
      "Describing insurance experience without naming the lines of business",
      "Omitting authority levels, which are a direct measure of seniority",
      "No book size, premium volume or claims caseload",
      "Treating broking, underwriting and claims as interchangeable",
      "Leaving qualification or licensing status unclear",
    ],
    relatedRoles: ["financial-analyst", "data-analyst", "business-analyst", "accountant"],
    quickAnswer:
      "An insurance CV should name the lines of business you know, your market segment and your authority levels, then show outcomes such as loss ratio, retention, premium growth or claims performance. Employers hire for specific classes of risk, so underwriting, claims, broking and actuarial CVs each need different evidence. State qualifications and licences plainly for the target market.",
    faqs: [
      {
        q: "How do I write an underwriter CV?",
        a: "Start with the classes of business you underwrite, your authority limits and the size of your portfolio. Then show outcomes: loss ratio performance, new business written, renewal retention and risk selection decisions. Mention the distribution channel, such as broker, direct or delegated authority, because each builds different skills. Keep the technical terms, since insurance recruiters search for them.",
      },
      {
        q: "What qualifications help an insurance CV?",
        a: "The qualifications that help most are the ones your target market recognises for your function. In the UK, Chartered Insurance Institute qualifications are widely used; actuarial roles look for progress with a recognised actuarial body; and many markets require a licence to advise or sell. Check adverts and the local regulator's requirements, then state your status precisely.",
      },
      {
        q: "Can I move from claims to underwriting?",
        a: "Yes, and the CV should frame claims experience as risk knowledge. Show the classes you have handled, the causes of loss you understand, the coverage decisions you made and the patterns you fed back to underwriting teams. Underwriters value people who have seen how risks actually fail. Name any underwriting training or shadowing you have completed.",
      },
      {
        q: "How do I show insurance experience when applying abroad?",
        a: "Name the lines, the regulatory regime and the market structure you worked in, because an overseas employer cannot assume them. Explain local products briefly if they have no direct equivalent. State your qualification or licence status and whether you would need a local licence, checking the formal requirement with the regulator rather than guessing.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "construction",
    name: "Construction",
    metaTitle: "Construction CV Writing Service and CV Guidance",
    metaDescription:
      "How to write a construction CV for site, project, commercial and HSE roles: project values, contract forms such as NEC or FIDIC, safety and delivery record.",
    lead: "Construction employers read CVs as project histories. The value, type and stage of each job, and what you personally delivered on it, matter more than any list of duties.",
    overview:
      "Construction covers main contractors, subcontractors, developers and consultants delivering buildings and infrastructure. This page focuses on delivery and commercial roles: site and project management, quantity surveying, planning, and health and safety. Design engineering and chartered registration sit on the engineering page. Here, hiring managers want projects delivered, contracts managed and sites run safely.",
    careerPaths: [
      "Site management: site supervisor to site manager to construction manager",
      "Project management: assistant project manager to project manager to project director",
      "Commercial: trainee quantity surveyor to quantity surveyor to commercial manager",
      "Planning: planner to senior planner to planning manager",
      "Health and safety: HSE officer to HSE manager",
    ],
    employersLookFor: [
      "A project list with type, contract value, stage and your role",
      "Contract forms worked under, such as NEC, JCT or FIDIC",
      "Safety record, site cards and safety qualifications for the market",
      "Programme delivery: handovers on time and how delays were recovered",
      "Commercial control: valuations, variations and final accounts",
      "Subcontractor and workforce management at a stated scale",
    ],
    positioning:
      "Build the CV around projects: type, value, contract form, duration and your responsibility. Then show delivery: handed over on programme, variations recovered, incident-free periods where true, and the size of team or subcontractor base you managed. Keep design detail brief unless you are applying for a design and build role that asks for it.",
    competencies: [
      "Site supervision and sequencing",
      "Programme planning and control",
      "Cost control and valuations",
      "Contract administration and variations",
      "Health, safety and environmental management",
      "Subcontractor coordination",
      "Quality inspection and snagging",
      "Client and stakeholder liaison",
    ],
    commonMistakes: [
      "Duties listed with no projects, values or handover dates",
      "Contract forms omitted, which hides commercial experience",
      "Safety presented as a tick box instead of a responsibility with outcomes",
      "One project described in so much detail that the rest disappear",
      "Site cards and safety qualifications missing or expired for the target market",
    ],
    relatedRoles: ["civil-engineer", "project-manager", "mechanical-engineer", "electrical-engineer"],
    quickAnswer:
      "A construction CV should be built around projects: type, contract value, contract form, stage and your specific responsibility on each. Contractors hiring for site, project, commercial and safety roles look for programmes delivered, costs controlled and sites run safely. Name the contract forms, such as NEC, JCT or FIDIC, and the safety qualifications your target market expects.",
    faqs: [
      {
        q: "How do I list projects on a construction CV?",
        a: "List each significant project with its type, value, location, contract form, duration and your role, then add two or three bullets on what you delivered. For long careers, keep the last eight to ten years detailed and summarise earlier projects in a short table. Recruiters scan project values and types first, so keep that information consistent and easy to find.",
      },
      {
        q: "What should a quantity surveyor CV include?",
        a: "A quantity surveyor CV should include the project values you managed, the contract forms you administered and the commercial outcomes you owned, such as valuations, variations, cost reports and final accounts agreed. Say whether you worked for a contractor or a client-side consultancy, because the work differs. Name your estimating and cost software and any professional membership progress.",
      },
      {
        q: "How is a construction CV different from an engineering CV?",
        a: "A construction CV focuses on delivery: sites run, programmes met, costs controlled and people managed. An engineering CV focuses on technical design, calculations, codes applied and professional registration. Many careers cross both, so choose the emphasis the target role needs and move the other material lower rather than giving both equal weight.",
      },
      {
        q: "Do I need to list safety qualifications on a construction CV?",
        a: "Yes, list them clearly with expiry dates where they have one. Safety qualifications and site cards are often a screening requirement rather than a bonus, and recruiters check them early. Use the names your target market recognises, and if you are moving countries, note what you hold and check the local requirement with the relevant authority or industry scheme.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    metaTitle: "Manufacturing CV Writing Service and CV Guidance",
    metaDescription:
      "How to write a manufacturing CV for production, quality and CI roles: OEE, yield and scrap results, sector standards like GMP or ISO 9001, and plant scale.",
    lead: "Manufacturing CVs are read against production numbers. Output, yield, downtime, scrap and safety tell a plant manager more than any description of responsibilities.",
    overview:
      "Manufacturing covers production, process and industrial engineering, quality, maintenance and operations management across sectors such as automotive, food and beverage, pharmaceuticals, electronics and consumer goods. The sector shapes the standards: a pharmaceutical plant runs on GMP, an automotive supplier on IATF 16949, a food site on food safety certification. What employers look for everywhere is measurable improvement on the line.",
    careerPaths: [
      "Production: supervisor to production manager to plant manager",
      "Process and industrial engineering: engineer to senior engineer to engineering manager",
      "Quality: quality technician to quality engineer to quality manager",
      "Continuous improvement: CI engineer to lean or operational excellence lead",
      "Maintenance and reliability: technician to maintenance manager",
    ],
    employersLookFor: [
      "Production metrics you moved: OEE, yield, scrap, throughput, downtime",
      "Sector and standards: GMP, ISO 9001, IATF 16949 or food safety schemes",
      "Continuous improvement methods used with results, such as Lean or Six Sigma",
      "Safety leadership and incident reduction",
      "Scale: lines, shifts, headcount and output volume",
      "Systems experience: ERP, MES and maintenance management tools",
    ],
    positioning:
      "Open with the sector, the plant type and your scale: lines, shifts and team size. Then prove improvement with before and after measures on the metrics your target plant watches. Lean and Six Sigma belts carry weight only when a project result sits next to them, so pair each credential with the improvement it produced.",
    competencies: [
      "Production planning and scheduling",
      "Lean manufacturing and 5S",
      "Root cause analysis and problem solving",
      "Quality systems and audits",
      "OEE and performance tracking",
      "Preventive and predictive maintenance",
      "Health and safety leadership",
      "Shift and team management",
    ],
    commonMistakes: [
      "Responsibilities listed with no production or quality metrics",
      "Six Sigma or Lean credentials shown without a project outcome",
      "Sector standards left out, so transferability is unclear",
      "No shift pattern, line count or headcount to show scale",
      "Improvements claimed without showing your part in them",
    ],
    relatedRoles: ["mechanical-engineer", "electrical-engineer", "supply-chain-manager", "project-manager"],
    quickAnswer:
      "A manufacturing CV should show measurable improvement on the production floor: OEE, yield, scrap, downtime, throughput and safety. Name your sector and the standards you worked under, such as GMP, ISO 9001 or IATF 16949, and state your scale in lines, shifts and headcount. Lean and Six Sigma credentials count most when each is paired with a project result.",
    faqs: [
      {
        q: "What metrics should a manufacturing CV include?",
        a: "Include the metrics your target employer runs the plant by: OEE, yield, scrap or rework rates, throughput, unplanned downtime, on-time delivery and safety incidents. Show before and after values or percentage change where you can, along with the time period. If figures are confidential, give the direction and approximate scale rather than leaving the improvement undescribed.",
      },
      {
        q: "How do I show Six Sigma on my CV?",
        a: "List the belt, the certifying body and the year in your qualifications, then show at least one project in your experience with the problem, method and measured result. A Green Belt with a documented scrap reduction is stronger than a Black Belt with no project evidence. Employers check whether you have applied the method, not only trained in it.",
      },
      {
        q: "Can I move between manufacturing sectors with my CV?",
        a: "Yes, most production, quality and CI skills transfer, but the CV has to show you understand the new sector's standards. Lead with transferable results such as OEE gains or waste reduction, then name the standards you have worked to and any training toward the target sector's, such as GMP for pharmaceuticals. Regulated sectors screen hardest on this.",
      },
      {
        q: "How should a production manager CV be structured?",
        a: "Open with a short summary naming your sector, plant type and scale, then list roles in reverse order with metrics in each. For each role, give the headcount, shifts and lines managed, followed by improvements in output, quality, cost and safety. Put Lean, Six Sigma and safety qualifications in a clear section near the end of the first page.",
      },
    ],
    updated: "2026-09-27",
  },
];
