import type { Industry } from "@/lib/industries";

/**
 * INDUSTRY ENTITIES, batch B -> /industries/{slug}
 * logistics-and-supply-chain, tourism, retail, fmcg, marketing,
 * human-resources, education, oil-and-gas
 */

export const industriesB: Industry[] = [
  {
    slug: "logistics-and-supply-chain",
    name: "Logistics and Supply Chain",
    metaTitle: "Logistics CV Writing Service and CV Guidance",
    metaDescription:
      "How to position a logistics and supply chain CV: network scope, volumes, cost and service metrics, systems and the mistakes that hide operational impact.",
    lead: "Logistics CVs are judged on flow: how much moved, through what network, at what cost and service level. A CV without volumes reads as a job description.",
    overview:
      "Logistics and supply chain covers procurement, planning, warehousing, transport, freight forwarding and customs. Employers hire against the part of the chain you have controlled and the size of it. A planner, a warehouse manager and a freight forwarder share a vocabulary but are screened on completely different evidence, so a CV has to make clear which link in the chain you own.",
    careerPaths: [
      "Warehouse operations: supervisor to warehouse or distribution centre manager",
      "Planning: demand or supply planner to S&OP lead",
      "Procurement: buyer to category manager to head of procurement",
      "Transport and freight: coordinator to transport or freight manager",
      "Supply chain management: specialist to supply chain manager to director",
    ],
    employersLookFor: [
      "Volumes handled: units, pallets, TEUs, shipments or spend under management",
      "Network scope: sites, lanes, countries and carriers you coordinated",
      "Service metrics you were accountable for, such as OTIF, fill rate or order accuracy",
      "Cost outcomes: cost per unit, freight spend or inventory reduction",
      "Systems used in daily work, particularly the ERP and WMS modules you ran",
      "Trade and customs knowledge where the role crosses borders",
    ],
    positioning:
      "Define your link in the chain in the first lines, then give its size. A logistics hiring manager wants to know whether your network looks like theirs: the number of sites, the modes of transport, the region and the volume. After that, every bullet should connect a decision you made to a service or cost outcome, because that is how supply chain performance is reviewed internally.",
    competencies: [
      "Demand and supply planning",
      "Inventory management and optimisation",
      "Warehouse operations and layout",
      "Transport and carrier management",
      "Procurement and supplier negotiation",
      "S&OP and cross-functional planning",
      "ERP and WMS systems",
      "Import, export and customs compliance",
    ],
    commonMistakes: [
      "No volumes or network size, so the scale of the operation is invisible",
      "Listing daily tasks such as 'coordinated shipments' with no service or cost outcome",
      "Naming an ERP without saying which modules or processes you actually ran",
      "Blending procurement, planning and operations into one vague 'supply chain' role",
      "Ignoring disruption handling, which is where supply chain judgement shows most clearly",
    ],
    relatedRoles: ["supply-chain-manager", "project-manager", "data-analyst", "business-analyst"],
    quickAnswer:
      "A strong logistics and supply chain CV states which part of the chain you control, then proves its scale with volumes, sites, lanes and spend. Employers compare your network to theirs before anything else. Every achievement should link a decision you made to a service metric such as OTIF or a cost outcome such as freight spend or inventory reduction.",
    faqs: [
      {
        q: "What should a logistics CV include?",
        a: "A logistics CV should include the volumes you handled, the size of the network, the service metrics you owned and the systems you used every day. Add the modes of transport and regions you covered, because employers screen for a network that resembles their own. Cost results, such as lower freight spend or reduced stock holding, turn a list of duties into evidence of impact.",
      },
      {
        q: "Which metrics should I put on a supply chain CV?",
        a: "Use the metrics you were actually measured on in performance reviews. Common ones are OTIF, fill rate, forecast accuracy, inventory turns, days of stock, order accuracy and cost per unit shipped. Give a baseline and a result where you can, and say what you changed to move the number. A metric without your action behind it reads as a team statistic rather than your contribution.",
      },
      {
        q: "How do I move from warehouse operations into supply chain planning on my CV?",
        a: "Lead with the planning-adjacent work you already do: replenishment decisions, labour planning against forecast volumes, stock accuracy analysis and any S&OP meetings you have contributed to. Name the data and systems you used. Then keep the operational scale visible, because planners who understand the physical constraints of a warehouse are valued, and that experience is an advantage rather than something to hide.",
      },
      {
        q: "Should I list SAP or other ERP systems on a logistics CV?",
        a: "Yes, and be specific. Name the system and the modules or processes you ran, such as SAP MM for purchasing or a WMS for pick and put-away. Recruiters often filter on system names, so the keyword matters, but hiring managers want to know your depth. A single line saying 'SAP' with no context gets you through the filter and then tells the reader very little.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "tourism",
    name: "Tourism and Travel",
    metaTitle: "Tourism CV Writing Service and CV Guidance",
    metaDescription:
      "How to position a CV for tourism and travel roles: tour operators, DMCs, airlines and travel sales. Source markets, product, systems and common mistakes.",
    lead: "Tourism CVs are read for markets and product. Employers want to know which source markets you sell to, what you packaged, and which systems you booked it through.",
    overview:
      "Tourism and travel covers tour operators, destination management companies, travel agencies, online travel businesses, airlines and tourism boards. It sits next to hospitality but is hired differently: hotels hire for property operations, while travel businesses hire for product design, supplier contracting, source market knowledge and booking volume. Treating a travel CV like a hotel CV is one of the most common errors in this sector.",
    careerPaths: [
      "Tour operations: reservations or operations executive to operations manager",
      "Destination management: product or contracting executive to DMC general manager",
      "Travel sales: travel consultant to B2B sales or key account manager",
      "Airlines: customer service or ground operations to station or commercial roles",
      "Product and marketing: itinerary design to product or destination marketing manager",
    ],
    employersLookFor: [
      "Source markets you have sold to or handled, named by country or region",
      "Product type: FIT, groups, MICE, adventure, luxury or religious travel",
      "Booking volume, passenger numbers or revenue under your responsibility",
      "Supplier contracting experience with hotels, transport and ground handlers",
      "Reservation and distribution systems, such as a GDS or tour operator software",
      "Languages that match the source markets the business serves",
    ],
    positioning:
      "Open with the markets and the product: who your travellers were, where they came from and what you sold them. Then show commercial responsibility, whether that is contracting rates, growing a B2B account or running operations for a volume of passengers. For airline roles, safety and on-time performance responsibility belong near the top, because the reader is checking operational discipline before commercial skill.",
    competencies: [
      "Itinerary and package design",
      "Supplier contracting and rate negotiation",
      "Source market sales and agent relationships",
      "Reservations and GDS systems",
      "Tour and ground operations",
      "MICE and group handling",
      "Crisis handling and traveller duty of care",
      "Destination and product marketing",
    ],
    commonMistakes: [
      "Writing a hotel-style CV when the target employer is a tour operator or DMC",
      "No source markets named, which is the first thing a travel employer screens for",
      "Passenger or booking numbers missing, so the size of your book is unclear",
      "Languages hidden at the bottom when they decide which markets you can handle",
      "Describing trips you arranged instead of the revenue, margin or repeat business they produced",
    ],
    relatedRoles: ["sales-manager", "marketing-manager", "hotel-manager", "project-manager"],
    quickAnswer:
      "A tourism CV should name your source markets, your product type and your booking volume in the first section. Tour operators, DMCs, airlines and travel agencies screen for market and product fit before general experience. Show the supplier contracts you negotiated, the systems you booked through and the commercial result, such as revenue, margin or repeat agent business.",
    faqs: [
      {
        q: "How do I write a CV for a tour operator or DMC job?",
        a: "Write it around markets, product and operations. State which source markets you handled, what type of travel you packaged, and how many passengers or bookings you managed. Add supplier contracting, since DMCs rely on negotiated hotel and transport rates. Close each role with a commercial result, because operators judge candidates on margin and repeat business rather than on the number of tours arranged.",
      },
      {
        q: "What is the difference between a tourism CV and a hospitality CV?",
        a: "A hospitality CV centres on running a property: rooms, covers, brand standards and guest scores. A tourism CV centres on selling and operating travel: source markets, packages, supplier contracts and booking systems. The skills overlap, but employers screen for different evidence. If you are moving between the two, reframe your experience in the target sector's terms rather than sending the same CV.",
      },
      {
        q: "What should I put on my CV for an airline job?",
        a: "Put the operational responsibilities first: safety procedures, on-time performance, passenger handling volumes and the systems you used for check-in, reservations or load control. Name the aircraft types or stations where relevant. Airlines read for discipline and reliability before customer skills, so incidents handled calmly and procedures followed precisely are stronger evidence than general statements about excellent service.",
      },
      {
        q: "Should languages go at the top of a travel industry CV?",
        a: "Yes, if they match the markets the employer serves. In travel, a language is often the reason you are hired, because it lets you sell to and look after a specific source market. Put languages with a clear level in your profile or skills section near the top, and link them to the markets you have actually handled in your role descriptions.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "retail",
    name: "Retail",
    metaTitle: "Retail CV Writing Service and CV Guidance",
    metaDescription:
      "How to position a retail CV: store and area scale, sales and shrink results, merchandising, ecommerce and omnichannel experience, and common CV mistakes.",
    lead: "Retail is measured weekly, and retail CVs should be too. Sales against target, margin, shrink and conversion say more about a store manager than any list of duties.",
    overview:
      "Retail covers store operations, area and regional management, merchandising and buying, visual merchandising, ecommerce and omnichannel. It is one of the most numbers-driven sectors there is, and hiring managers expect candidates to know their figures. The move from store roles into head office or ecommerce is common, and it depends on showing commercial analysis rather than only people management.",
    careerPaths: [
      "Store operations: supervisor to assistant manager to store manager",
      "Multi-site: store manager to area or regional manager",
      "Buying and merchandising: allocator to merchandiser to buyer",
      "Ecommerce: trading or content executive to ecommerce manager",
      "Visual merchandising: store VM to regional or head of visual merchandising",
    ],
    employersLookFor: [
      "Store format and scale: turnover band, footfall, square footage, team size",
      "Sales performance against target and against the previous year",
      "Margin, shrink and stock loss results",
      "Conversion, average transaction value and basket size improvements",
      "Stock management and replenishment accuracy",
      "Omnichannel experience such as click and collect, returns or online trading",
    ],
    positioning:
      "Lead with the size of what you ran, then the numbers you moved. Retail hiring managers compare you with their own stores, so give turnover band, team size and format. For head office moves into merchandising or ecommerce, shift the weight towards analysis: range decisions, trading reports, promotional results and the data you used to make calls.",
    competencies: [
      "Store P&L management",
      "Sales and KPI performance management",
      "Merchandising and range planning",
      "Stock control and shrink reduction",
      "Visual merchandising standards",
      "Ecommerce trading and online conversion",
      "Customer experience and service standards",
      "Rostering and labour cost control",
    ],
    commonMistakes: [
      "No turnover, footfall or team size, so the store could be any size",
      "Sales results given without the target or prior year to compare them with",
      "Shrink and stock loss left out, even though every retail employer checks them",
      "Ecommerce or omnichannel work buried inside a store role instead of highlighted",
      "People management described at length while commercial results are missing",
    ],
    relatedRoles: ["sales-manager", "marketing-manager", "supply-chain-manager", "data-analyst"],
    quickAnswer:
      "A strong retail CV gives the scale of what you ran, such as turnover band, team size and store format, then proves results against target: sales, margin, shrink and conversion. Retail employers think in weekly numbers and expect you to know yours. For moves into merchandising or ecommerce, show the trading analysis and range decisions behind your results.",
    faqs: [
      {
        q: "What should a store manager put on their CV?",
        a: "A store manager CV should include the store format, turnover band, footfall and team size, followed by results against target: sales, margin, shrink, conversion and labour cost. Add anything that shows you improved the store rather than maintained it, such as a new rota model or a shrink reduction plan. Duties like opening and closing the store add little and can go.",
      },
      {
        q: "How do I move from store management to a head office retail role?",
        a: "Show the analytical side of your store work. Pick examples where you read trading data, changed a range, adjusted space or ran a promotion and measured the result. Name the reports and systems you used. Head office hiring managers need proof you can make commercial decisions from data, so reduce the weight on team leadership and increase the weight on trading judgement.",
      },
      {
        q: "How do I show ecommerce experience on a retail CV?",
        a: "Give ecommerce its own clear line or section rather than hiding it in a store role. State the platform, the part you owned, such as trading, content, merchandising or fulfilment, and the metric you moved, such as conversion rate, average order value or return rate. Omnichannel work like click and collect or ship from store counts and is valued by most retailers.",
      },
      {
        q: "Is retail experience useful for jobs outside retail?",
        a: "Yes, when it is described in commercial terms. Running a store involves P&L responsibility, people leadership, stock control and customer service, all of which transfer to sales, operations and account management. The CV has to translate those skills out of retail language, focusing on budgets, targets and teams rather than store routines, so a non-retail employer sees the transferable value.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "fmcg",
    name: "FMCG",
    metaTitle: "FMCG CV Writing Service and CV Guidance",
    metaDescription:
      "How to position an FMCG CV: brand and category results, trade marketing, route to market, distribution and share gains, and the mistakes that weaken FMCG CVs.",
    lead: "FMCG CVs are read for share, distribution and volume. Brands and categories are named, and so are the numbers behind them.",
    overview:
      "FMCG covers brand management, trade marketing, category management, sales and key accounts, and route to market. The sector moves quickly and hires on proven commercial results within a category. Employers look for candidates who understand both the consumer and the shelf, and who can show how a plan moved share, volume or distribution in a specific channel.",
    careerPaths: [
      "Brand management: assistant brand manager to brand manager to marketing director",
      "Trade marketing: trade marketing executive to trade marketing manager",
      "Category management: category analyst to category manager",
      "Sales: territory or sales representative to key account manager to national sales manager",
      "Route to market: distributor management to channel or RTM manager",
    ],
    employersLookFor: [
      "Brands and categories handled, named plainly",
      "Market share, volume and value growth with a timeframe",
      "Numeric and weighted distribution gains",
      "Channel and account experience: modern trade, general trade, key accounts, ecommerce",
      "Trade spend and promotional ROI responsibility",
      "Use of retail audit, shopper and consumer data to make decisions",
    ],
    positioning:
      "Name the brand, the category and the channel, then give the growth. FMCG hiring managers read CVs almost like a brand review: what was the situation, what did you do, and what happened to share, volume and distribution. Show that you work across functions, because brand, sales, supply and finance all shape an FMCG result, and employers want people who can pull them together.",
    competencies: [
      "Brand planning and positioning",
      "Trade marketing and in-store activation",
      "Category management and shelf planning",
      "Route to market and distributor management",
      "Key account planning and negotiation",
      "Trade spend and promotional ROI analysis",
      "Consumer and shopper insight",
      "New product launch management",
    ],
    commonMistakes: [
      "Brand names withheld, when they are the fastest signal of the scale you worked at",
      "Growth figures with no timeframe or no comparison to the category",
      "Campaigns described creatively with no share, volume or distribution result",
      "Confusing trade marketing with brand marketing, which are hired separately",
      "No channel detail, so a modern trade employer cannot tell if you fit their accounts",
    ],
    relatedRoles: ["marketing-manager", "sales-manager", "supply-chain-manager", "financial-analyst"],
    quickAnswer:
      "An FMCG CV should name the brands, categories and channels you worked on, then prove results in share, volume, value and distribution with a clear timeframe. Brand, trade marketing, category and sales roles are hired separately, so the CV must show which one you do. Include trade spend responsibility and the data you used, such as retail audit or shopper insight.",
    faqs: [
      {
        q: "What do FMCG recruiters look for in a CV?",
        a: "FMCG recruiters look for named brands and categories, measurable growth in share, volume or distribution, and channel experience that matches their business. They also check whether you have managed trade spend or a P&L. A CV that describes campaigns without numbers usually loses to one that says what happened to the brand in the market over a defined period.",
      },
      {
        q: "What is the difference between trade marketing and brand marketing on a CV?",
        a: "Brand marketing works on the consumer: positioning, communication, innovation and brand health. Trade marketing works on the shopper and the customer: in-store visibility, promotions, channel plans and activation. FMCG companies hire them as separate jobs, so your CV should make clear which you have done, using the right vocabulary, and show results that match that role.",
      },
      {
        q: "Should I name the brands I worked on in my FMCG CV?",
        a: "Yes, in most cases. Brand names are how FMCG hiring managers judge the size and quality of your experience quickly. If a figure is confidential, you can still name the brand and express results as percentages or ranks rather than absolute values. Only leave brands out if an agreement you signed specifically prevents you from naming them.",
      },
      {
        q: "How do I show route to market experience on a CV?",
        a: "Describe the channel structure you worked within, such as distributors, wholesalers, direct store delivery or general trade outlets, and the territory it covered. Then show what you improved: outlet coverage, distributor performance, numeric distribution or cost to serve. Route to market is a practical, results-driven discipline, so specific coverage and distribution gains are stronger than broad strategy statements.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "marketing",
    name: "Marketing and Communications",
    metaTitle: "Marketing CV Writing Service and CV Guidance",
    metaDescription:
      "How to position a marketing CV: channels, budgets, pipeline and revenue results, tools and specialism, plus the mistakes that make good marketers look generic.",
    lead: "A marketing CV is a piece of marketing. If it cannot show a clear audience, a clear offer and measurable results, the reader draws the obvious conclusion.",
    overview:
      "Marketing covers performance and digital, content, brand, product marketing, communications and marketing operations. The field has split into specialisms, and employers increasingly hire for one of them rather than for a generalist. The CVs that do well state the specialism, the channels, the budget and the business result, and connect marketing activity to pipeline or revenue rather than to activity alone.",
    careerPaths: [
      "Digital and performance: executive to performance marketing manager to head of growth",
      "Content and SEO: writer or specialist to content lead to head of content",
      "Product marketing: associate to product marketing manager",
      "Communications and PR: executive to communications manager to director",
      "Generalist: marketing executive to marketing manager to marketing director",
    ],
    employersLookFor: [
      "A clear specialism, or a clear reason to hire a generalist",
      "Channels owned and the budget managed across them",
      "Results tied to pipeline, revenue, acquisition cost or retention",
      "Audience type: B2B or B2C, and the markets you have marketed into",
      "Tools and platforms used hands-on, not only named",
      "Examples of strategy you set, not only campaigns you executed",
    ],
    positioning:
      "Choose the specialism you want to be hired for and make the first third of the CV prove it. Give channel, budget and audience, then results in the terms a commercial leader cares about: pipeline, revenue, cost per acquisition or retention. Vanity metrics such as impressions and followers can support a point but should never be the headline.",
    competencies: [
      "Marketing strategy and planning",
      "Performance and paid media",
      "SEO and content marketing",
      "Brand and positioning",
      "Product marketing and go to market",
      "Marketing analytics and attribution",
      "CRM and marketing automation",
      "Communications and PR",
    ],
    commonMistakes: [
      "Presenting as a generalist when the target role wants a specialist",
      "Headline results in impressions, reach or followers instead of pipeline or revenue",
      "No budget figure, so the scale of responsibility is unclear",
      "A long list of tools with no evidence of what you did with them",
      "A CV that is poorly structured or badly written, which undermines a marketer more than anyone",
    ],
    relatedRoles: ["marketing-manager", "product-manager", "data-analyst", "sales-manager"],
    quickAnswer:
      "A strong marketing CV states your specialism, the channels and budget you owned, and the audience you marketed to, then proves impact in business terms: pipeline, revenue, acquisition cost or retention. Employers now hire marketers for specific disciplines, so a generalist CV often loses to a focused one. Reach and follower numbers support a case but should not lead it.",
    faqs: [
      {
        q: "What results should I put on a marketing CV?",
        a: "Put results that a commercial leader values: pipeline generated, revenue influenced, cost per acquisition, conversion rate, retention or customer lifetime value. Give the budget and timeframe so the result has context. Reach, impressions and engagement can support a story, especially in brand or communications roles, but on their own they tell a hiring manager little about business impact.",
      },
      {
        q: "Should a marketing CV be creative or designed?",
        a: "Usually not. Most marketing roles are screened through an ATS and read quickly by recruiters, so a clean, well-structured CV works better than a heavily designed one. Show creativity through the work you describe and link to a portfolio if relevant. Designer roles are the exception, where a portfolio matters far more than the CV layout itself.",
      },
      {
        q: "How do I show I am a marketing specialist, not a generalist?",
        a: "State the specialism in your headline and profile, then give it the most space in your recent roles. If your current job is broad, lead each role with the specialist work and group general tasks into one short line. Tools, results and certifications should all point at the same discipline so the reader has no doubt about what you do.",
      },
      {
        q: "Do I need a portfolio as well as a marketing CV?",
        a: "It depends on the specialism. Content, design, social and brand roles often expect examples, so a short portfolio link helps. Performance, marketing operations and product marketing roles are judged more on results and systems, where the CV carries most of the weight. Where you include a portfolio, choose a few strong pieces with context rather than everything you have produced.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "human-resources",
    name: "Human Resources",
    metaTitle: "HR CV Writing Service and CV Guidance",
    metaDescription:
      "How to position an HR CV: generalist or specialist focus, employee population, HRIS, employment law exposure and people results, plus common HR CV mistakes.",
    lead: "HR professionals read CVs for a living, which makes their own CV harder to write. The standard is higher, and generic people language is spotted immediately.",
    overview:
      "Human resources covers HR generalist and business partner roles, talent acquisition, learning and development, reward, HR operations and employee relations. Employers want to know the size and type of population you supported, the jurisdictions whose employment law you have worked under, and whether you are strategic, operational or both. An HR CV that shows only process management will struggle at business partner level and above.",
    careerPaths: [
      "Generalist: HR assistant to HR officer to HR business partner",
      "Talent acquisition: recruiter to talent acquisition lead to head of talent",
      "Learning and development: L&D coordinator to L&D manager",
      "Reward: compensation and benefits analyst to reward manager",
      "Leadership: HR manager to HR director to chief people officer",
    ],
    employersLookFor: [
      "Size and type of employee population supported, and across how many sites or countries",
      "Employment law jurisdictions you have worked under",
      "Generalist breadth or specialist depth, stated clearly",
      "HRIS and people analytics tools used in practice",
      "People results: retention, time to hire, engagement or absence improvements",
      "Evidence of advising leaders, not only administering policy",
    ],
    positioning:
      "State the population and the jurisdiction early: how many employees, what kind of workforce, in which countries. Then show the change you drove rather than the processes you ran. At business partner level and above, employers want to see you influencing leadership decisions on structure, capability and cost, so select examples where your advice changed an outcome.",
    competencies: [
      "HR business partnering",
      "Employee relations and case management",
      "Talent acquisition and employer branding",
      "Learning and development",
      "Reward and compensation",
      "Organisational design and change",
      "HRIS and people analytics",
      "Employment law and policy compliance",
    ],
    commonMistakes: [
      "Using the same people-centred language as every other HR CV",
      "No employee population size, so scope is impossible to judge",
      "Employment law jurisdiction left unstated, which matters for any cross-border move",
      "Listing HR processes managed without the result they produced",
      "Presenting operational HR work when applying for strategic business partner roles",
    ],
    relatedRoles: ["hr-manager", "business-analyst", "project-manager"],
    quickAnswer:
      "A strong HR CV states the employee population you supported, the jurisdictions you worked under and whether you are a generalist or specialist, then proves impact with people results such as retention, time to hire or engagement. For business partner and senior roles, show where your advice changed leadership decisions. Generic people language weakens an HR CV more than any other.",
    faqs: [
      {
        q: "What should an HR business partner put on their CV?",
        a: "An HR business partner CV should show the business areas you partnered, the population size, the leaders you advised and the outcomes of that advice. Good examples include restructures, capability plans, retention programmes or workforce cost changes. Keep transactional HR tasks brief. Hiring managers want evidence that you influence decisions, not that you process them.",
      },
      {
        q: "How do I show HR achievements with numbers?",
        a: "Use the people metrics your organisation already tracked: retention or turnover, time to hire, cost per hire, absence rate, engagement survey movement, training completion or internal promotion rate. Give the starting point, what you changed and the result. If you lacked formal data, describe scale instead, such as the number of cases handled or employees affected by a change you led.",
      },
      {
        q: "Should I list employment law knowledge on an HR CV?",
        a: "Yes, and name the jurisdiction. Employment law differs sharply between countries, so saying which frameworks you have applied tells an employer how quickly you can operate in their market. If you are moving countries, be honest about which laws you know and show how you have learned new frameworks before, rather than implying knowledge you do not yet have.",
      },
      {
        q: "Do HR certifications like CIPD or SHRM matter on a CV?",
        a: "They matter where employers ask for them, and they are worth stating clearly with the level. CIPD is the UK professional body and SHRM is its US counterpart, so check which one your target market's job adverts mention. A certification supports your experience but does not replace it, so place it where it is visible without letting it lead the CV.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "education",
    name: "Education",
    metaTitle: "Education CV Writing Service and CV Guidance",
    metaDescription:
      "How to position an education CV: teaching qualifications, curricula, age groups, student outcomes and leadership roles, for schools and international moves.",
    lead: "Education employers check three things first: your qualification to teach, the curriculum you know, and the age group you have taught. Everything else comes after.",
    overview:
      "Education covers school teaching, international schools, higher education, early years, and education leadership and administration. International school hiring is especially curriculum-driven, with schools looking for experience in the framework they teach, such as a national curriculum, IB or Cambridge. Teaching registration and qualification recognition differ by country, so the CV must state them plainly rather than leave the school to guess.",
    careerPaths: [
      "Teaching: classroom teacher to head of department to head of year",
      "School leadership: middle leader to deputy head to head of school or principal",
      "International schools: subject teacher to curriculum coordinator",
      "Higher education: lecturer to senior lecturer to programme leader",
      "Education administration: coordinator to academic or operations manager",
    ],
    employersLookFor: [
      "Teaching qualification and registration status, including the issuing country",
      "Curricula taught, named specifically",
      "Subjects and age groups or key stages taught",
      "Student outcome evidence such as results, progress or value added",
      "Responsibilities beyond the classroom: pastoral, departmental or whole-school",
      "Safeguarding training and child protection awareness kept current",
    ],
    positioning:
      "Put your qualification, curriculum and age range in the first lines, because schools filter on these before reading anything else. Then show your impact on students with outcomes or progress, not a list of lessons delivered. For leadership roles, shift the weight to what you changed across a department or school: curriculum design, staff development, inspection preparation or results.",
    competencies: [
      "Curriculum planning and delivery",
      "Assessment and data-informed teaching",
      "Differentiation and inclusive practice",
      "Classroom and behaviour management",
      "Pastoral care and safeguarding",
      "Department and team leadership",
      "Parent and stakeholder communication",
      "Educational technology",
    ],
    commonMistakes: [
      "Teaching qualification or registration status unclear or missing",
      "Curricula not named, which blocks international school applications",
      "Describing lessons taught instead of student progress or results",
      "Extra responsibilities such as clubs or pastoral roles left off entirely",
      "Using one CV for classroom and leadership roles when they are judged differently",
    ],
    relatedRoles: ["project-manager", "hr-manager", "business-analyst"],
    quickAnswer:
      "An education CV should state your teaching qualification, registration status, curricula and age groups in the opening lines, since schools filter on these first. Then show impact through student outcomes and progress rather than duties. For leadership roles, focus on changes you led across a department or school. International schools in particular screen by curriculum experience.",
    faqs: [
      {
        q: "What should a teacher put on their CV?",
        a: "A teacher CV should include your teaching qualification and registration, the subjects, curricula and age groups you teach, and evidence of student progress or results. Add responsibilities beyond the classroom, such as pastoral duties, department roles or extracurricular leadership. Keep lesson descriptions short. Schools want to see the effect of your teaching, not a summary of the timetable.",
      },
      {
        q: "How do I write a CV for an international school?",
        a: "Name the curricula you have taught, such as IB, Cambridge or a specific national curriculum, and put them near the top. International schools often hire from overseas, so state your qualification, the country that issued it and your registration status clearly. Mention experience with multilingual classes or students new to English, because many international schools value it highly.",
      },
      {
        q: "How long should a teaching CV be?",
        a: "A teaching CV is usually two pages. That is enough for your qualifications, teaching history, responsibilities and outcomes. Senior leaders applying for headship or principal roles may need slightly more to cover whole-school achievements. Many schools also use their own application forms, in which case the CV supports the form and should match it closely.",
      },
      {
        q: "How do teachers move into jobs outside education?",
        a: "Translate classroom skills into business language. Lesson planning becomes content and programme design, managing a class becomes stakeholder management, and data tracking becomes performance analysis. Learning and development, training, instructional design and education technology are common destinations. Remove school jargon, then lead with the transferable skills and examples most relevant to the target role.",
      },
    ],
    updated: "2026-09-27",
  },
  {
    slug: "oil-and-gas",
    name: "Oil and Gas",
    metaTitle: "Oil and Gas CV Writing Service and CV Guidance",
    metaDescription:
      "How to position an oil and gas CV for Gulf and international projects: upstream or downstream scope, HSE record, asset types, standards and common mistakes.",
    lead: "Oil and gas CVs are read for asset, phase and HSE. Employers need to know what you worked on, at what stage of its life, and how safely you did it.",
    overview:
      "Oil and gas spans upstream exploration and production, midstream pipelines and storage, and downstream refining and petrochemicals. Much of the hiring runs through operators, EPC contractors and service companies on large projects in the Gulf, including the UAE, Qatar and Saudi Arabia, and in other international hubs. These employers screen for the asset type, the project phase, the standards applied and HSE performance, and they compare CVs quickly against a project's requirements.",
    careerPaths: [
      "Engineering: graduate engineer to discipline engineer to lead or principal engineer",
      "Operations: technician or operator to supervisor to operations or production manager",
      "HSE: HSE officer to HSE advisor to HSE manager",
      "Projects: planning or project engineer to project manager to project director",
      "Commissioning and maintenance: technician to commissioning or maintenance lead",
    ],
    employersLookFor: [
      "Sector segment: upstream, midstream or downstream, stated clearly",
      "Asset types worked on: offshore platforms, onshore fields, refineries, pipelines or gas plants",
      "Project phase: FEED, detailed design, construction, commissioning or operations",
      "HSE record and recognised safety training relevant to the role",
      "Standards and codes applied, such as API, ASME or company specifications",
      "Operator and contractor names, and the region the project was in",
    ],
    positioning:
      "Lead with segment, discipline and asset, then list projects with their phase, your role and the operator or contractor. Gulf employers in particular read quickly for a match with their project, so project names, clients and phases should be easy to scan. Put HSE near the top, not at the end, because in this industry safety performance is treated as a core competency rather than a compliance item.",
    competencies: [
      "Discipline engineering and design",
      "HSE management and permit to work",
      "Project planning and control",
      "Commissioning and start-up",
      "Maintenance and reliability",
      "Process safety and risk assessment",
      "Codes and standards compliance",
      "Contractor and interface management",
    ],
    commonMistakes: [
      "Upstream and downstream experience mixed together without clear labels",
      "Projects listed with no phase, so employers cannot tell design work from field work",
      "HSE mentioned only in passing when it should be a headline strength",
      "Operator and contractor names left out, which are the industry's main credibility signal",
      "Safety certificates listed without dates, when currency matters for site access",
    ],
    relatedRoles: ["mechanical-engineer", "electrical-engineer", "civil-engineer", "project-manager", "supply-chain-manager"],
    quickAnswer:
      "A strong oil and gas CV states your segment, discipline and asset types first, then lists projects with phase, role, operator and region. Gulf and international employers screen quickly for a match with their project, so FEED, construction, commissioning or operations experience must be clear. HSE performance and current safety training should sit near the top, not at the end.",
    faqs: [
      {
        q: "How do I write an oil and gas CV for jobs in the Gulf?",
        a: "Structure it around projects. For each one, give the asset, the phase, your role, the operator or EPC contractor and the country. Gulf employers in the UAE, Qatar and Saudi Arabia often shortlist quickly against project requirements, so clarity matters more than length. Put your discipline and HSE credentials near the top, and follow the local CV conventions of the country you are targeting.",
      },
      {
        q: "What HSE details should go on an oil and gas CV?",
        a: "Include your safety responsibilities, the recognised safety training you hold with dates, and your experience with permit to work, risk assessment and incident investigation. If you led safety improvements, describe what changed. HSE is judged as part of competence in this industry, so present it as evidence of how you work rather than as a short list of certificates at the end.",
      },
      {
        q: "Should I separate upstream and downstream experience on my CV?",
        a: "Yes. Upstream, midstream and downstream roles use different assets, processes and standards, and employers hire against one of them. Label each role or project with its segment, and lead with the one that matches the job. If you have both, present that as range, but make sure a recruiter can see at a glance which segment each piece of experience comes from.",
      },
      {
        q: "How do I move from oil and gas into renewables or other energy roles?",
        a: "Emphasise the transferable parts of your experience: project delivery, HSE culture, commissioning, reliability, offshore operations and complex stakeholder management. Offshore wind, hydrogen and carbon capture projects often value these skills. Reduce hydrocarbon-specific jargon, highlight any energy transition exposure, and frame your projects by scale, phase and safety outcome so a new sector recognises their value.",
      },
    ],
    updated: "2026-09-27",
  },
];
