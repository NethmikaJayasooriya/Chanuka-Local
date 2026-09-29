import type { JobRole } from "@/lib/job-roles";

export const rolesA: JobRole[] = [
  {
    slug: "data-scientist",
    name: "Data Scientist",
    category: "Technology",
    metaTitle: "Data Scientist CV Writing Service and CV Guidance",
    metaDescription:
      "Data Scientist CV writing and guidance: show models that reached production and the business metric they moved, with example bullets and ATS keywords.",
    lead: "A Data Scientist CV full of model names reads like a course syllabus. Hiring managers want to know which model shipped, what it replaced, and what the business measured afterwards.",
    overview:
      "Data Scientist is used for research-heavy modelling roles, product analytics roles with a statistics edge, and machine learning roles that sit close to engineering. The same CV cannot win all three. Recruiters read for which one you are, and a CV that lists every algorithm without a deployed result leaves them assuming the least production-ready version.",
    employersLookFor: [
      "Models that reached production or a real decision, not only notebooks",
      "Python and SQL depth, with the libraries you actually use named",
      "Sound experimental design: baselines, validation strategy and how you avoided leakage",
      "The business metric a model moved, stated alongside the model metric",
      "Enough engineering to hand work over: version control, pipelines, reproducibility",
      "The ability to explain uncertainty and limits to non-technical decision makers",
    ],
    positioning:
      "Decide which kind of data scientist you are applying as and say it in the summary: experimentation and inference, applied machine learning, or machine learning close to production. Then write each bullet as problem, approach, validation and outcome. AUC or RMSE on its own tells a hiring manager you can train a model. The business result next to it tells them you understand why it was built.",
    keySkills: [
      "Python with pandas, scikit-learn and a deep learning framework where relevant",
      "SQL and working with large datasets",
      "Statistical inference and experiment design",
      "Feature engineering and model validation",
      "Model deployment and MLOps fundamentals",
      "Cloud ML platforms such as SageMaker, Vertex AI or Databricks",
      "Model monitoring and drift detection",
      "Communicating results to non-technical stakeholders",
    ],
    achievementExamples: [
      "Built a churn propensity model in XGBoost that replaced a rules-based contact list, lifting retention campaign conversion from 4% to 7.5% on the same contact volume.",
      "Designed and analysed a pricing experiment across 60,000 users, applying CUPED variance reduction to cut the required test duration from six weeks to three.",
      "Moved a demand forecasting model from a monthly notebook run to a scheduled Databricks pipeline with drift alerts, reducing forecast error (MAPE) from 18% to 11%.",
      "Stopped the launch of a recommendation model after finding target leakage in the training data, then rebuilt the feature set and delivered a validated version four weeks later.",
    ],
    commonMistakes: [
      "Listing every algorithm studied, which hides the few you have used on real problems",
      "Quoting model accuracy with no baseline and no business outcome",
      "Presenting Kaggle or coursework projects as if they were production experience",
      "No mention of how models were validated, deployed or monitored",
      "Writing for other data scientists when the first reader is often a recruiter or product lead",
    ],
    atsKeywords: [
      "data scientist",
      "machine learning",
      "Python",
      "SQL",
      "statistical modelling",
      "A/B testing",
      "scikit-learn",
      "model deployment",
    ],
    seniority: [
      {
        level: "Junior",
        note: "Clean, correct analysis and sound validation. Projects count if the method is rigorous and the write-up is honest about limits.",
      },
      {
        level: "Data Scientist",
        note: "Owning a modelling problem from framing to handover, with a measured result attributed to you.",
      },
      {
        level: "Senior",
        note: "Choosing which problems are worth modelling, setting validation standards, and getting models into production alongside engineering.",
      },
      {
        level: "Lead or Principal",
        note: "Data science direction, prioritisation across the business, and the trust leadership places in model-driven decisions.",
      },
    ],
    relatedRoles: ["data-analyst", "software-engineer", "devops-engineer"],
    relatedIndustries: ["data-analytics", "software", "finance"],
    quickAnswer:
      "A strong data scientist CV shows models or analyses that changed a business decision, not just the algorithms you know. State your type of data science work in the summary, name Python, SQL and your core libraries, and write each bullet as problem, method, validation and measured outcome, with the business metric beside the model metric.",
    faqs: [
      {
        q: "What should a data scientist CV include?",
        a: "A data scientist CV should include a short summary stating your specialism, a skills section naming your languages, libraries and platforms, and experience bullets that show the problem, the method, how you validated it and the measured result. Add education where it carries weight, such as a quantitative degree, and link to a portfolio or GitHub only if the work there is clean and current.",
      },
      {
        q: "How long should a data scientist CV be?",
        a: "Two pages is right for most data scientists with a few years of experience, and one page is enough for graduates. Research-heavy candidates sometimes add a publications section, which can justify a third page for academic or research lab roles. For industry roles, cut older projects rather than shrinking the font. Recruiters would rather read four strong bullets than ten thin ones.",
      },
      {
        q: "Should I put Kaggle projects on a data scientist CV?",
        a: "Yes, if you are early in your career and the project shows rigour, but label it clearly as a personal or competition project. A strong ranking or a well-documented approach to validation helps. Once you have paid experience with deployed models or real decisions, move Kaggle work down or remove it, because hiring managers weigh production evidence far more heavily.",
      },
      {
        q: "How do I show impact on a data scientist CV without revenue figures?",
        a: "Use the closest honest measure of change: time saved, error reduced, decisions made faster, or a manual process the model replaced. If the model metric is all you have, give it a baseline, such as \"reduced forecast error by a third against the previous method\". Where figures are confidential, describe scale and use instead, for example \"used in weekly pricing decisions across 40 stores\".",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "cybersecurity-specialist",
    name: "Cybersecurity Specialist",
    category: "Technology",
    metaTitle: "Cybersecurity Specialist CV Writing Service and CV Guidance",
    metaDescription:
      "Cybersecurity CV writing and guidance: show your track, certifications and real incident or risk outcomes, with example bullets, ATS keywords and pitfalls.",
    lead: "Cybersecurity CVs tend to read as a wall of certifications and acronyms. The candidates who get shortlisted show what they found, what they fixed, and how much risk went down as a result.",
    overview:
      "Cybersecurity Specialist covers security operations, incident response, penetration testing, cloud security, and governance, risk and compliance. These are separate hiring tracks with different screening criteria. A SOC hiring manager and a GRC lead want different evidence, and a CV that tries to be both usually convinces neither.",
    employersLookFor: [
      "A clear track: defensive operations, offensive testing, cloud security or GRC",
      "Certifications that match the level and track, such as Security+, OSCP, CISSP or CISM",
      "Tools actually operated: SIEM, EDR, vulnerability scanners, cloud security services",
      "Frameworks worked to, such as ISO 27001, NIST CSF, SOC 2 or PCI DSS",
      "Incidents handled or findings raised, with severity and outcome",
      "The ability to explain risk to people who do not work in security",
    ],
    positioning:
      "Name your track in the headline and summary, then list certifications and frameworks early, because they are the first filter in this field. The experience section should read as evidence of reduced risk: what was exposed, what you did, how quickly, and what changed in the control environment. Describe incidents at the level of detail a former employer would accept, and never include anything that exposes a client's systems.",
    keySkills: [
      "Security monitoring and SIEM such as Splunk, Microsoft Sentinel or QRadar",
      "Incident response and digital forensics",
      "Vulnerability management and remediation tracking",
      "Penetration testing and threat modelling",
      "Cloud security across AWS, Azure or GCP",
      "Identity and access management",
      "Security frameworks and audit: ISO 27001, NIST, SOC 2",
      "Scripting for automation in Python or PowerShell",
    ],
    achievementExamples: [
      "Tuned detection rules in Microsoft Sentinel, cutting false positive alerts by 60% and bringing mean time to triage from 45 minutes to under 15.",
      "Led the response to a business email compromise affecting 12 mailboxes, containing it within four hours and introducing conditional access policies that closed the entry route.",
      "Ran the vulnerability management programme for 2,300 endpoints, reducing critical findings older than 30 days from 180 to 12 over two quarters.",
      "Owned control mapping and policy writing for a first ISO 27001 certification, closing every gap raised in the pre-audit and passing with no major nonconformities.",
    ],
    commonMistakes: [
      "An acronym wall of certifications and tools with no evidence of using them",
      "Not stating a track, which forces the recruiter to guess between SOC, pentest and GRC",
      "Including sensitive detail about an employer's systems or unpatched weaknesses",
      "Describing monitoring duties rather than incidents handled and risk reduced",
      "Presenting certifications in progress as if they were already held",
    ],
    atsKeywords: [
      "cybersecurity",
      "incident response",
      "SIEM",
      "vulnerability management",
      "ISO 27001",
      "NIST",
      "threat detection",
      "penetration testing",
    ],
    seniority: [
      {
        level: "Analyst",
        note: "Monitoring, triage and escalation. Certifications, home labs and capture-the-flag work show commitment before experience does.",
      },
      {
        level: "Specialist or Engineer",
        note: "Owning a security domain, such as detection, vulnerability management or cloud controls, with measurable changes to risk.",
      },
      {
        level: "Senior or Lead",
        note: "Designing controls, leading incidents, and advising engineering and leadership on security trade-offs.",
      },
      {
        level: "Security Manager and CISO track",
        note: "Security strategy, budget, board reporting and accountability for the organisation's overall risk posture.",
      },
    ],
    relatedRoles: ["devops-engineer", "software-engineer"],
    relatedIndustries: ["cybersecurity", "information-technology", "banking"],
    quickAnswer:
      "A strong cybersecurity CV names your track first, whether security operations, penetration testing, cloud security or governance and risk, then proves it. List current certifications and frameworks near the top, name the tools you operate, and write bullets showing incidents contained, vulnerabilities closed or audits passed, with timescales and scale, without exposing anything sensitive about past employers.",
    faqs: [
      {
        q: "What should a cybersecurity CV include?",
        a: "A cybersecurity CV should include a headline stating your specialism, a certifications section near the top, the tools and frameworks you have worked with, and experience bullets that show measurable risk reduction. Good bullets cover incidents handled, detection improvements, vulnerabilities remediated or audits supported, with numbers for scale and speed. Home labs and capture-the-flag work belong on early-career CVs.",
      },
      {
        q: "How long should a cybersecurity CV be?",
        a: "Two pages suits most cybersecurity professionals, and one page is enough for graduates and career changers entering the field. Senior candidates with consulting or incident response history can go to three pages only if every page carries evidence. Keep the certifications and tools sections concise so the experience section, where the real differentiation happens, gets the space.",
      },
      {
        q: "Which certifications should I put on a cybersecurity CV?",
        a: "Put every current certification relevant to the role you are applying for, with the awarding body and year. Match them to the track: an entry-level certification such as Security+ for junior roles, OSCP for offensive work, cloud provider security certifications for cloud roles, and CISSP or CISM for senior and management roles. Mark anything in progress clearly and drop certifications that have lapsed.",
      },
      {
        q: "How do I describe security incidents on my CV without breaching confidentiality?",
        a: "Describe the type, scale and outcome of the incident without naming systems, vulnerabilities or clients. \"Contained a ransomware attempt on a 400-user network within three hours\" shows capability without exposing anything. Leave out IP ranges, internal tool names you were asked to keep private, and weaknesses that may still be open. Hiring managers read discretion on the CV as evidence of judgement.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "devops-engineer",
    name: "DevOps Engineer",
    category: "Technology",
    metaTitle: "DevOps Engineer CV Writing Service and CV Guidance",
    metaDescription:
      "DevOps Engineer CV writing and guidance: show pipelines, infrastructure as code and reliability gains, with example bullets, ATS keywords and pitfalls.",
    lead: "A DevOps Engineer CV is often a list of logos: Kubernetes, Terraform, Jenkins, AWS. Every applicant has the same list. The shortlist goes to the ones who show what got faster, cheaper or more reliable.",
    overview:
      "DevOps Engineer overlaps with platform engineering, site reliability engineering and cloud engineering, and employers use the titles loosely. What they screen for is consistent: the environment you ran, how much of it was automated, and the operational results. A CV that states the scale of the estate and the before and after of your work answers their questions directly.",
    employersLookFor: [
      "Cloud platform depth in AWS, Azure or GCP, with the services you actually ran",
      "Infrastructure as code with Terraform, Pulumi or CloudFormation at real scale",
      "CI/CD pipelines built or owned, not just used",
      "Containers and orchestration, usually Docker and Kubernetes",
      "Reliability and observability: monitoring, alerting, on-call and incident reviews",
      "Measurable outcomes in deployment frequency, lead time, recovery time or cloud cost",
    ],
    positioning:
      "State the estate first: cloud provider, number of services or clusters, traffic or environments, team size. Then write bullets as before and after: release time, change failure rate, recovery time, monthly spend. Those delivery measures are a useful shape because many hiring managers already think in them. Tools should appear inside the bullets that prove them, not only in a skills block.",
    keySkills: [
      "AWS, Azure or GCP",
      "Terraform and infrastructure as code",
      "Docker and Kubernetes",
      "CI/CD with GitHub Actions, GitLab CI, Jenkins or Azure DevOps",
      "Linux administration and shell scripting",
      "Monitoring and observability with Prometheus, Grafana or Datadog",
      "Configuration management such as Ansible",
      "Cloud cost management and security hardening",
    ],
    achievementExamples: [
      "Migrated 35 services from EC2 instances to Amazon EKS using reusable Terraform modules, cutting monthly compute spend by $14k and deployment time from 25 minutes to 7.",
      "Rebuilt the CI/CD pipeline in GitHub Actions with parallel test stages and automated rollbacks, moving the team from fortnightly releases to several deploys a day.",
      "Introduced Prometheus and Grafana alerting with defined SLOs for the checkout service, reducing mean time to recovery from 90 minutes to 20 over six months.",
      "Replaced hand-configured staging and production environments with version-controlled Terraform, ending configuration drift and cutting new environment setup from three days to one hour.",
    ],
    commonMistakes: [
      "A skills section of 40 tools with no indication of which you run in production",
      "No sense of scale: how many services, clusters, users or environments",
      "Describing tasks such as \"maintained pipelines\" instead of what improved",
      "Leaving out on-call and incident experience, which many employers weigh heavily",
      "Ignoring cost, even though cloud spend is often part of why the role exists",
    ],
    atsKeywords: [
      "DevOps engineer",
      "CI/CD",
      "Kubernetes",
      "Terraform",
      "AWS",
      "Docker",
      "infrastructure as code",
      "site reliability",
    ],
    seniority: [
      {
        level: "Junior",
        note: "Scripting, pipeline maintenance and supervised infrastructure changes. Home labs and cloud certifications help prove hands-on skill.",
      },
      {
        level: "DevOps Engineer",
        note: "Owning pipelines and environments for a product or team, with on-call responsibility and measurable improvements.",
      },
      {
        level: "Senior",
        note: "Designing the platform others build on, setting infrastructure as code standards and leading incident reviews.",
      },
      {
        level: "Lead or Platform Lead",
        note: "Platform strategy, developer experience across teams, reliability targets and accountability for the cloud budget.",
      },
    ],
    relatedRoles: ["software-engineer", "cybersecurity-specialist", "data-scientist"],
    relatedIndustries: ["software", "information-technology", "cybersecurity"],
    quickAnswer:
      "A strong DevOps Engineer CV shows the environment you ran and what improved because of you. Name your cloud platform, infrastructure as code tool, CI/CD system and orchestration stack early, state the scale of the estate, and write bullets with before and after figures for deployment time, release frequency, recovery time, uptime or cloud cost.",
    faqs: [
      {
        q: "What should a DevOps engineer CV include?",
        a: "A DevOps engineer CV should include a summary stating your cloud platform and specialism, a grouped technical skills section, and experience bullets with measurable before and after results. Cover pipelines built, infrastructure automated, incidents handled and costs reduced. Include cloud provider or Kubernetes certifications if you hold them, and a GitHub link only if it shows real infrastructure code.",
      },
      {
        q: "How long should a DevOps CV be?",
        a: "Two pages is the right length for most DevOps engineers. Graduates and people moving in from system administration or development can usually fit on one page. Do not extend the CV with long tool lists. Group tools by category on a few lines and use the space for evidence of what those tools achieved in your hands.",
      },
      {
        q: "How do I move from system administrator to DevOps engineer on my CV?",
        a: "Lead with the automation you already do, not the tickets you close. Scripts that replaced manual work, configuration managed through Ansible or similar, and any pipeline or cloud work are the bridge. Add a short projects section for infrastructure as code or Kubernetes work built outside your job, and frame your summary around DevOps practice while keeping your actual job titles accurate.",
      },
      {
        q: "Which DevOps skills do recruiters search for?",
        a: "Recruiters usually search for a cloud platform such as AWS, Azure or GCP, plus Kubernetes, Terraform, Docker and a named CI/CD tool. Linux, scripting in Python or Bash, and monitoring tools come next. Use the exact names from the job advert where they match your real experience, and place them in both the skills section and your experience bullets.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "product-manager",
    name: "Product Manager",
    category: "Business",
    metaTitle: "Product Manager CV Writing Service and CV Guidance",
    metaDescription:
      "Product Manager CV writing and guidance: show outcomes rather than features shipped, with example bullets, ATS keywords, seniority signals and mistakes.",
    lead: "Most Product Manager CVs list features shipped. Hiring managers want to know which of those features moved a metric, which ones you killed, and how you decided.",
    overview:
      "Product Manager roles range from feature ownership inside one squad to setting direction for a whole product line, and they sit in very different contexts: B2B SaaS, consumer apps, platforms and internal tools. Recruiters read for product type, the metrics you owned and the size of the decisions you made. A CV that reads as a delivery log looks like project management with a different title.",
    employersLookFor: [
      "Outcomes owned: activation, retention, conversion, revenue or efficiency, with numbers",
      "Product context: B2B or consumer, platform or feature, stage of company",
      "Evidence of discovery: research, experiments and how problems were chosen",
      "Prioritisation under constraint, including what you decided not to build",
      "Working relationships with engineering, design, sales and leadership",
      "Technical fluency sufficient for the product, stated honestly",
    ],
    positioning:
      "Open with product context: what you managed, for whom, and at what stage. Then write every bullet around a decision and its outcome, not a release. The strongest Product Manager bullets show the insight that led to the work and the metric it moved. Keep delivery detail light. A hiring manager assumes you shipped things and is reading to find out whether they mattered.",
    keySkills: [
      "Product discovery and user research",
      "Roadmapping and prioritisation",
      "Experimentation and A/B testing",
      "Product analytics with Amplitude, Mixpanel or GA4",
      "Writing product requirements and user stories",
      "Go-to-market planning with marketing and sales",
      "Stakeholder alignment and communication",
      "Working knowledge of APIs, data and technical trade-offs",
    ],
    achievementExamples: [
      "Redesigned onboarding for a B2B analytics product after interviewing 20 churned accounts, lifting 30-day activation from 38% to 55% within two quarters.",
      "Killed a planned reporting module after a fake-door test showed under 2% interest, redirecting two engineers to billing fixes that cut involuntary churn by a third.",
      "Launched a self-serve upgrade path that moved 400 accounts from the free to the paid tier in its first six months, adding $210k in annual recurring revenue.",
      "Introduced a quarterly prioritisation process scored on customer impact and effort, reducing mid-quarter roadmap changes from nine to two and rebuilding trust with the sales team.",
    ],
    commonMistakes: [
      "Listing features shipped with no metric attached to any of them",
      "Hiding the product context, so the reader cannot tell B2B from consumer or startup from enterprise",
      "Claiming credit for the whole team's work rather than your decisions within it",
      "Naming prioritisation frameworks as skills instead of showing prioritisation in action",
      "Overstating technical depth that an engineering interviewer will test",
    ],
    atsKeywords: [
      "product manager",
      "product roadmap",
      "product discovery",
      "A/B testing",
      "user research",
      "agile",
      "go-to-market",
      "product analytics",
    ],
    seniority: [
      {
        level: "Associate Product Manager",
        note: "Owning a scoped area under guidance. Research, analysis and clear requirements are the evidence.",
      },
      {
        level: "Product Manager",
        note: "Owning a product area and its metrics, with decisions and trade-offs attributed to you.",
      },
      {
        level: "Senior Product Manager",
        note: "Setting strategy for a product line, handling ambiguous problems and influencing without authority across teams.",
      },
      {
        level: "Group PM or Head of Product",
        note: "Portfolio strategy, building and coaching the PM team, and product's contribution to company results.",
      },
    ],
    relatedRoles: ["project-manager", "business-analyst", "data-analyst"],
    relatedIndustries: ["software", "information-technology", "retail"],
    quickAnswer:
      "A strong Product Manager CV shows decisions and outcomes, not a list of features shipped. Open with your product context, B2B or consumer and company stage, then write bullets that connect an insight to a decision and a measured result such as activation, retention, conversion or revenue. Include what you chose not to build, because prioritisation is the job.",
    faqs: [
      {
        q: "What should a product manager CV include?",
        a: "A product manager CV should include a summary with your product type and domain, experience bullets built on outcomes, and a short skills section covering discovery, analytics and delivery tools. Each role needs the product context and the metrics you owned. Education and certifications matter less than evidence of decisions, so keep them brief unless you are early in your career.",
      },
      {
        q: "How long should a product manager CV be?",
        a: "Two pages is standard for product managers with several years of experience, and one page works for associate and junior roles. Senior product leaders can stay within two pages by summarising earlier roles in one or two lines each. Spend the space on your last two or three roles, where the decisions are most relevant to the job you want.",
      },
      {
        q: "How do I show product impact on a CV if I cannot share numbers?",
        a: "Use relative figures, ranges or scale instead of confidential absolutes. \"Increased activation by a third\" or \"product used by 150 enterprise accounts\" gives the reader something concrete without breaching confidentiality. Where no metric exists, describe the decision and its consequence, such as a feature retired or a team redirected, because that still shows judgement.",
      },
      {
        q: "How do I move into product management on my CV?",
        a: "Lead with the product-adjacent work you have already done: research, requirements, prioritisation, experiments or launches in your current role. Business analysts, engineers, designers and customer success staff often have more of this than they realise. Rewrite bullets to show the decision and the outcome, and use a summary that states the move plainly rather than hiding it.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "financial-analyst",
    name: "Financial Analyst",
    category: "Finance",
    metaTitle: "Financial Analyst CV Writing Service and CV Guidance",
    metaDescription:
      "Financial Analyst CV writing and guidance: show modelling depth, forecast accuracy and decisions supported, with example bullets and ATS keywords.",
    lead: "A Financial Analyst CV that says \"prepared monthly reports\" describes the job advert, not the candidate. Hiring managers are looking for the model, the forecast and the decision it informed.",
    overview:
      "Financial Analyst covers FP&A inside a business, investment and equity research, corporate finance, and credit analysis. The skill base overlaps, but the audiences and screening criteria do not. An FP&A manager wants budgeting cycles and business partnering. An investment team wants valuation and sector depth. The CV has to name the track before a recruiter decides for you.",
    employersLookFor: [
      "The track: FP&A, investment analysis, corporate finance or credit",
      "Financial modelling depth, with the model types named",
      "Forecasting and budgeting ownership, including accuracy where you can show it",
      "Qualifications or progress: CFA, ACCA, CIMA or a relevant degree",
      "Systems: Excel at modelling level, plus ERP, BI or planning tools",
      "Evidence that analysis changed a commercial or investment decision",
    ],
    positioning:
      "Name the track and your qualification status in the first lines. Then show three things in the bullets: the models you built, the scale of what they covered, and the decision they supported. Variance commentary and reporting are expected. They only become achievements when they led somewhere, such as a cost removed, a price changed, or an investment approved or declined.",
    keySkills: [
      "Financial modelling in Excel: three-statement, DCF and scenario models",
      "Budgeting, forecasting and variance analysis",
      "Business partnering with commercial and operational teams",
      "Valuation methods and investment appraisal",
      "Management reporting and KPI design",
      "Planning and BI tools such as Anaplan, Adaptive Planning, Power BI or Tableau",
      "ERP systems such as SAP or Oracle",
      "Presenting financial insight to senior leadership",
    ],
    achievementExamples: [
      "Built a driver-based forecast model for a $60M business unit, tightening quarterly forecast accuracy from within 9% of actuals to within 3%.",
      "Analysed customer-level profitability across 1,200 accounts, identifying a loss-making segment whose repricing added $1.1M to annual gross margin.",
      "Prepared the investment case for a $4M automation project, including sensitivity analysis that led the board to approve a phased rollout instead of a single commitment.",
      "Cut monthly management pack preparation from five days to two by moving source data into Power BI and standardising variance commentary across eight cost centres.",
    ],
    commonMistakes: [
      "Describing reporting duties with no model, decision or outcome attached",
      "Claiming advanced Excel without naming the models you build",
      "Leaving the track unclear, so FP&A and investment recruiters both pass",
      "No scale: revenue, budget, portfolio size or number of cost centres",
      "Omitting qualification status, or listing exams without the levels passed",
    ],
    atsKeywords: [
      "financial analyst",
      "financial modelling",
      "FP&A",
      "forecasting",
      "variance analysis",
      "budgeting",
      "DCF",
      "Excel",
    ],
    seniority: [
      {
        level: "Junior Analyst",
        note: "Accurate reporting, reconciliations and model support. Qualification progress is a key signal.",
      },
      {
        level: "Financial Analyst",
        note: "Owning forecasts, models or a business area's reporting, and presenting to budget holders.",
      },
      {
        level: "Senior Financial Analyst",
        note: "Business partnering with senior managers, building the core models and leading the budget cycle for an area.",
      },
      {
        level: "FP&A Manager or Finance Business Partner",
        note: "Leading the planning process, managing analysts and shaping decisions at leadership level.",
      },
    ],
    relatedRoles: ["accountant", "data-analyst", "business-analyst"],
    relatedIndustries: ["finance", "banking", "insurance"],
    quickAnswer:
      "A strong Financial Analyst CV shows the models you build and the decisions they supported. Name your track, whether FP&A, investment, corporate finance or credit, and your qualification status at the top. Then write bullets that state the model, its scale and the outcome, such as forecast accuracy improved, margin recovered or an investment approved on your analysis.",
    faqs: [
      {
        q: "What should a financial analyst CV include?",
        a: "A financial analyst CV should include your track and qualification status in the summary, a skills section naming modelling types and systems, and experience bullets that link analysis to decisions. Give scale for every role: revenue, budget or portfolio size. Include CFA, ACCA or CIMA progress with the levels passed, and a relevant degree if you are early in your career.",
      },
      {
        q: "How long should a financial analyst CV be?",
        a: "One to two pages. Graduates and analysts with under three years of experience should aim for one page, especially for investment roles, where a single page is the norm. Experienced FP&A professionals can use two pages if the second carries real achievements. Cut routine reporting duties first, because they are assumed in the role.",
      },
      {
        q: "Should I list CFA progress on my CV?",
        a: "Yes, list CFA progress clearly, stating the level passed and the year, for example \"Passed Level I of the CFA Program, 2025\". Investment recruiters often screen for it. Never imply a charter you do not hold. The same applies to ACCA and CIMA: state the papers or levels completed rather than a vague \"currently studying\".",
      },
      {
        q: "What is the difference between a financial analyst CV and an accountant CV?",
        a: "An accountant CV leads with qualification, reporting standards and ownership of the close, while a financial analyst CV leads with modelling, forecasting and decisions supported. Accountants prove the numbers are right. Analysts prove the numbers were used. If you are moving from accounting into analysis, shift your bullets from producing figures to interpreting them.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "hr-manager",
    name: "HR Manager",
    category: "People",
    metaTitle: "HR Manager CV Writing Service and CV Guidance",
    metaDescription:
      "HR Manager CV writing and guidance: show workforce scale, employee relations and measurable people outcomes, with example bullets and ATS keywords.",
    lead: "HR Manager CVs are often written in the language of policy: \"responsible for recruitment, onboarding and employee relations\". Hiring directors want the headcount you supported and what changed for the business because of your work.",
    overview:
      "HR Manager can mean a generalist running the whole people function for a 150-person company, or a manager inside a large HR team with a narrow remit. The difference in scope is large, and so is the difference in what employers expect. The CV has to show workforce size, remit and legal context first, then the people outcomes you owned.",
    employersLookFor: [
      "Workforce scale: headcount supported, sites, countries and unions where relevant",
      "Remit: generalist, business partner, or specialist in talent, reward or employee relations",
      "Employment law knowledge for the jurisdiction, applied rather than claimed",
      "People outcomes such as retention, time to hire, engagement or absence, with numbers",
      "HRIS and payroll systems used",
      "Professional qualifications such as CIPD, SHRM or a local equivalent",
    ],
    positioning:
      "Put headcount, remit and jurisdiction in the summary, because they decide which HR roles you fit. Then show outcomes: attrition reduced, hiring time cut, a restructure handled without claims, a policy that changed behaviour. Keep casework confidential and aggregated, and show that you understand the business you supported, not only HR process.",
    keySkills: [
      "Employee relations and casework",
      "Employment law and policy development",
      "Talent acquisition and onboarding",
      "Performance management and development",
      "Reward, benefits and job evaluation",
      "Organisational change and restructuring",
      "HRIS such as Workday, SAP SuccessFactors or BambooHR",
      "HR analytics and workforce reporting",
    ],
    achievementExamples: [
      "Reduced first-year attrition from 34% to 19% across a 600-person contact centre by redesigning onboarding and introducing structured 30, 60 and 90 day reviews with line managers.",
      "Led the consultation for a restructure affecting 85 roles across three sites, completing it on schedule with no employment tribunal claims.",
      "Implemented Workday for 1,200 employees across four countries, replacing three spreadsheet-based processes and cutting monthly HR reporting from four days to one.",
      "Cut average time to hire for technical roles from 52 days to 31 by introducing structured interviews and a shared hiring scorecard with engineering managers.",
    ],
    commonMistakes: [
      "Listing HR functions covered instead of outcomes achieved",
      "No headcount, sites or countries, so the scope cannot be judged",
      "Including identifiable detail from disciplinary or grievance cases",
      "Omitting the employment law jurisdiction when applying to a new market",
      "Writing for HR peers instead of the business leaders who often make the hire",
    ],
    atsKeywords: [
      "HR manager",
      "employee relations",
      "talent acquisition",
      "performance management",
      "HR business partner",
      "employment law",
      "HRIS",
      "CIPD",
    ],
    seniority: [
      {
        level: "HR Officer or Advisor",
        note: "Accurate administration, policy guidance and supported casework. Qualification progress signals intent.",
      },
      {
        level: "HR Manager",
        note: "Owning the people function for a business area or site, with casework, recruitment and policy under your remit.",
      },
      {
        level: "Senior HR Manager or HRBP",
        note: "Partnering with senior leaders on workforce planning, change and organisational design.",
      },
      {
        level: "HR Director",
        note: "People strategy, culture, board-level reporting and accountability for the organisation's workforce risk.",
      },
    ],
    relatedRoles: ["project-manager", "business-analyst"],
    relatedIndustries: ["human-resources", "manufacturing", "hospitality"],
    quickAnswer:
      "A strong HR Manager CV shows the size of the workforce you supported, your remit and jurisdiction, and the people outcomes you delivered. State headcount, sites and countries in the summary, name your HR systems and qualifications, and write bullets with measured results such as lower attrition, faster hiring or a restructure completed on time, keeping all casework anonymous.",
    faqs: [
      {
        q: "What should an HR manager CV include?",
        a: "An HR manager CV should include a summary with headcount, remit and jurisdiction, a skills section covering employee relations, recruitment, performance and systems, and experience bullets showing measured people outcomes. Add professional qualifications such as CIPD or SHRM with their level. Include change or restructuring work if you have done it, because it is one of the clearest signals of seniority.",
      },
      {
        q: "How long should an HR manager CV be?",
        a: "Two pages is the right length for most HR managers. HR directors with long careers can stay within two pages by condensing roles older than ten years. Avoid long lists of policies written or HR areas covered. One line on remit per role, followed by three to five outcome bullets, reads far better than a full inventory of duties.",
      },
      {
        q: "How do I show achievements on an HR CV?",
        a: "Show achievements by attaching a number or a consequence to your people work. Attrition, time to hire, absence rates, engagement scores, grievance volumes and training completion all work. If you lack figures, describe the outcome concretely: a restructure completed with no claims, a policy adopted across four sites, or a manager development programme that became standard.",
      },
      {
        q: "Should I put HR qualifications at the top of my CV?",
        a: "Put HR qualifications near the top if the roles you want list them as a requirement, which many UK job adverts do. A short line in the summary naming your CIPD level, or SHRM certification in US-facing roles, gets you past the first filter. Otherwise, a qualifications section after experience is enough. Always state the level, not just the awarding body.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "marketing-manager",
    name: "Marketing Manager",
    category: "Marketing",
    metaTitle: "Marketing Manager CV Writing Service and CV Guidance",
    metaDescription:
      "Marketing Manager CV writing and guidance: show budget, channels and pipeline or revenue impact, with example bullets, ATS keywords and common mistakes.",
    lead: "A Marketing Manager CV is a piece of marketing, and hiring managers judge it that way. If it cannot show clear results in a small space, they assume your campaigns could not either.",
    overview:
      "Marketing Manager covers brand, product marketing, performance and digital, content and integrated roles across B2B and consumer businesses. The skills overlap, but what counts as a result does not: pipeline for B2B, sales and share for FMCG, cost per acquisition for performance. The CV has to use the right measure for the role you want.",
    employersLookFor: [
      "Budget managed and the channels it was spent on",
      "Results in the measure that matters to them: pipeline, revenue, CAC, ROAS or share",
      "B2B or consumer context, and the sector",
      "Campaigns you led, not only contributed to",
      "Martech and analytics: CRM, marketing automation, GA4, ad platforms",
      "Team, agency and cross-functional leadership, especially with sales",
    ],
    positioning:
      "Lead with budget, channels, sector and the metric you are accountable for. Then write bullets as campaign, spend and result. Impressions and followers only belong on the CV when they are linked to something the business paid for. Show the thinking too: a hiring manager wants to see why you chose a channel or audience, not just that the numbers went up.",
    keySkills: [
      "Marketing strategy and planning",
      "Campaign management across paid, owned and earned channels",
      "Performance marketing on Google Ads, Meta and LinkedIn",
      "Marketing automation and CRM such as HubSpot, Marketo or Salesforce",
      "Analytics and attribution with GA4",
      "Brand positioning and messaging",
      "Content and SEO strategy",
      "Budget management and agency leadership",
    ],
    achievementExamples: [
      "Rebuilt the paid search account structure and bidding strategy on a $40k monthly budget, reducing cost per qualified lead from $180 to $95 in four months.",
      "Launched an account-based marketing programme for 50 target enterprise accounts with the sales team, generating $2.3M in qualified pipeline in its first year.",
      "Led the repositioning of a household cleaning brand across TV, digital and retail, lifting unit sales by 14% in the six months after launch.",
      "Built a lifecycle email programme in HubSpot, increasing trial-to-paid conversion from 11% to 16% without additional acquisition spend.",
    ],
    commonMistakes: [
      "Leading with impressions, reach and followers with no link to revenue or pipeline",
      "No budget figure, so the scale of responsibility is unclear",
      "Listing every channel as a strength instead of showing depth in a few",
      "Taking credit for a whole team's campaign without saying what you led",
      "A cluttered, hard-to-scan CV for a role judged on clear communication",
    ],
    atsKeywords: [
      "marketing manager",
      "digital marketing",
      "campaign management",
      "marketing strategy",
      "lead generation",
      "Google Ads",
      "HubSpot",
      "brand management",
    ],
    seniority: [
      {
        level: "Marketing Executive",
        note: "Channel execution and reporting. The CV proves you can run campaigns accurately and read the data.",
      },
      {
        level: "Marketing Manager",
        note: "Owning a channel, product or campaign plan with a budget and a target.",
      },
      {
        level: "Senior Marketing Manager",
        note: "Setting strategy across channels, managing a team or agencies, and answering to revenue leadership.",
      },
      {
        level: "Head of Marketing or Marketing Director",
        note: "Marketing strategy, brand, team and budget, with accountability for growth at board level.",
      },
    ],
    relatedRoles: ["product-manager", "sales-manager", "data-analyst"],
    relatedIndustries: ["marketing", "fmcg", "retail"],
    quickAnswer:
      "A strong Marketing Manager CV shows the budget you managed, the channels you used and the business results you drove. State your sector, B2B or consumer focus and the metric you own in the summary, then write bullets as campaign, spend and outcome, measured in pipeline, revenue, cost per acquisition or market share rather than reach and followers alone.",
    faqs: [
      {
        q: "What should a marketing manager CV include?",
        a: "A marketing manager CV should include a summary with sector, focus and budget, a skills section naming channels and martech, and experience bullets tying campaigns to revenue, pipeline or acquisition cost. Show team and agency leadership where you have it. A link to a portfolio or campaign case study helps for brand and content roles, and matters less for performance marketing.",
      },
      {
        q: "How long should a marketing manager CV be?",
        a: "Two pages suits most marketing managers, and one page is enough for marketing executives and coordinators early in their careers. Marketing hiring managers notice padding quickly, so treat the CV like a campaign: every line has to earn its space. Condense older roles and put the strongest measured results in the top half of page one.",
      },
      {
        q: "What metrics should I put on a marketing CV?",
        a: "Put the metrics the hiring business will measure you on. For B2B roles, that is usually pipeline, qualified leads and cost per lead. For consumer and e-commerce, it is revenue, ROAS, conversion rate and customer acquisition cost. For brand roles, it is share, sales uplift and research-based awareness. Always show a before and after or a comparison, not a standalone figure.",
      },
      {
        q: "Should a marketing manager CV be creative?",
        a: "A marketing manager CV should be clean and well designed, but not built as a graphic layout. Many applications pass through an applicant tracking system, which can misread columns, text boxes and graphics. Show creativity in the writing and the results, and keep the format simple. Designers and creative directors are the exception, and they should add a portfolio link.",
      },
    ],
    updated: "2026-09-27",
  },
];
