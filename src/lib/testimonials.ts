export interface GoogleReview {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  category: "all" | "overseas" | "tech" | "banking" | "grad" | "executive";
  rating: number;
  relativeTime: string;
  localGuide?: string;
  avatarBg: string;
  avatarLetter: string;
  highlight: string;
  reviewText: string;
  outcome: string;
  helpfulCount: number;
  ownerResponse?: {
    date: string;
    text: string;
  };
}

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: "rev-1",
    name: "Dilan Pathirana",
    role: "Senior Full-Stack Software Engineer",
    companyOrLocation: "Relocated to Melbourne, Australia",
    category: "overseas",
    rating: 5,
    relativeTime: "4 days ago",
    localGuide: "Local Guide • 18 reviews",
    avatarBg: "bg-[#1a73e8]", // Google Blue
    avatarLetter: "D",
    highlight: "Secured 4 Australian interview calls within 3 weeks",
    reviewText:
      "I had applied for over 60 jobs on Seek and LinkedIn Australia with zero interview calls. Chanuka completely restructured my tech stack keywords and metric bullet points to match Australian ATS standards. Within 3 weeks of applying with the new CV, I secured 4 interviews and finally accepted an offer in Melbourne! Outstanding CPRW expertise.",
    outcome: "Melbourne Tech Relocation Offer",
    helpfulCount: 24,
    ownerResponse: {
      date: "3 days ago",
      text: "Thank you Dilan! It was an absolute pleasure re-engineering your engineering trajectory for Australian enterprise ATS parsers. Wishing you the absolute best in Melbourne!",
    },
  },
  {
    id: "rev-2",
    name: "Kasun Tennakoon",
    role: "Assistant Vice President - Corporate Banking",
    companyOrLocation: "Leading Private Commercial Bank, Colombo",
    category: "banking",
    rating: 5,
    relativeTime: "1 week ago",
    localGuide: "Local Guide • 9 reviews",
    avatarBg: "bg-[#ea4335]", // Google Red
    avatarLetter: "K",
    highlight: "Executive narrative transformed my 12-year banking career into 2 concise pages",
    reviewText:
      "When you have over 10 years of banking leadership, condensing it without losing executive weight is very difficult. Chanuka's CPRW credentials really show — he highlighted my portfolio growth metrics, asset governance, and regulatory leadership with absolute precision. Within a month I was interviewed and promoted to Head of Corporate Credit.",
    outcome: "Promoted to Head of Credit",
    helpfulCount: 19,
    ownerResponse: {
      date: "6 days ago",
      text: "Much appreciated Kasun! Structuring high-stakes banking portfolios into crisp, boardroom-ready executive summaries is exactly why we maintain CPRW certification. Congratulations on your promotion!",
    },
  },
  {
    id: "rev-3",
    name: "Sanduni Madushani",
    role: "Brand & Digital Marketing Manager",
    companyOrLocation: "Multinational FMCG Conglomerate, Colombo",
    category: "executive",
    rating: 5,
    relativeTime: "2 weeks ago",
    avatarBg: "bg-[#34a853]", // Google Green
    avatarLetter: "S",
    highlight: "Weekly inbound recruiter inquiries on LinkedIn without applying",
    reviewText:
      "Chanuka's LinkedIn optimization is gold. He rewrote my entire headline, about story, and career achievements with commercial impact metrics. Now regional recruiters from top agencies in Colombo and Singapore reach out to me directly on LinkedIn without me even applying. Highly recommended for any serious corporate professional!",
    outcome: "45% Salary Jump Promotion",
    helpfulCount: 31,
    ownerResponse: {
      date: "12 days ago",
      text: "Thank you Sanduni! Optimizing LinkedIn for algorithmic keyword discovery is the highest ROI investment for corporate brand leaders. Delighted by your inbound recruiter response!",
    },
  },
  {
    id: "rev-4",
    name: "Tharindu Wickramasinghe",
    role: "Cloud DevOps & Platform Engineer",
    companyOrLocation: "Remote US Fintech (Based in Kandy)",
    category: "tech",
    rating: 5,
    relativeTime: "3 weeks ago",
    localGuide: "Local Guide • 12 reviews",
    avatarBg: "bg-[#fbbc04]", // Google Yellow
    avatarLetter: "T",
    highlight: "Passed US Greenhouse ATS & secured $3,500/mo remote role",
    reviewText:
      "Working remotely for US/European tech companies from Sri Lanka requires an impeccable resume that passes Greenhouse and Workday ATS parsers. Chanuka knew exactly what keywords, Terraform/Kubernetes infrastructure bullets, and cost-reduction achievements global tech recruiters demand. Worth every rupee.",
    outcome: "Secured $3,500/mo Remote Contract",
    helpfulCount: 17,
    ownerResponse: {
      date: "2 weeks ago",
      text: "Thank you Tharindu! Global US tech recruiters have zero tolerance for bloated graphics. Glad the cloud DevOps keyword mapping delivered your dream contract!",
    },
  },
  {
    id: "rev-5",
    name: "Dr. Nuwan Kulatunga",
    role: "Senior Infrastructure Project Manager",
    companyOrLocation: "Dubai, United Arab Emirates",
    category: "overseas",
    rating: 5,
    relativeTime: "1 month ago",
    avatarBg: "bg-[#9334e8]", // Google Purple
    avatarLetter: "N",
    highlight: "Passed strict UAE Gulf recruitment portals effortlessly",
    reviewText:
      "Gulf job portals like Bayt, GulfTalent, and corporate portals in Dubai are notoriously strict with parseable formatting and credential verification. Chanuka's Gulf Relocation pack gave me an immediate competitive advantage over hundreds of other applicants. Turnaround was within 48 hours and WhatsApp advisory was world class.",
    outcome: "Secured Dubai Mega-Project Role",
    helpfulCount: 22,
    ownerResponse: {
      date: "4 weeks ago",
      text: "Thank you Dr. Nuwan! Dubai and the Gulf market require specific visa status, driving license, and certified engineering project scope hierarchy. Wishing you ongoing success in the UAE!",
    },
  },
  {
    id: "rev-6",
    name: "Chathuri Senaratne",
    role: "Fresh Graduate - B.Sc Information Systems",
    companyOrLocation: "University of Colombo School of Computing (UCSC)",
    category: "grad",
    rating: 5,
    relativeTime: "1 month ago",
    avatarBg: "bg-[#e37400]", // Google Orange
    avatarLetter: "C",
    highlight: "Secured 2 software analyst interview calls within 14 days",
    reviewText:
      "As a fresh graduate, I didn't know how to convert my university capstone project and GitHub repositories into impactful professional resume bullets. The Fresh Graduate Starter pack was very budget-friendly and Chanuka delivered within 48 hours. I had 2 interview offers within 2 weeks of sending out my new CV!",
    outcome: "Hired at Tier-1 Software Consultancy",
    helpfulCount: 15,
    ownerResponse: {
      date: "1 month ago",
      text: "Thank you Chathuri! Launching your first professional role with the right CV structure sets the trajectory for your entire career. Congratulations on joining Tier-1 tech!",
    },
  },
  {
    id: "rev-7",
    name: "Roshana Alwis",
    role: "Finance & Treasury Operations Lead",
    companyOrLocation: "MAS Holdings Group, Colombo",
    category: "banking",
    rating: 5,
    relativeTime: "2 months ago",
    avatarBg: "bg-[#1a73e8]",
    avatarLetter: "R",
    highlight: "Handled executive transition with utmost confidentiality",
    reviewText:
      "100% confidential and professional service. Chanuka's understanding of Sri Lankan corporate conglomerates like MAS, Dialog, and John Keells is unmatched. He knows exactly what hiring VPs look for on both the CV and LinkedIn. Highly recommended.",
    outcome: "Promoted to Group Treasury Lead",
    helpfulCount: 11,
    ownerResponse: {
      date: "2 months ago",
      text: "Thank you Roshana! Confidentiality and executive precision are our core commitments for senior Sri Lankan corporate leadership.",
    },
  },
  {
    id: "rev-8",
    name: "Mohamed Rizwan",
    role: "Supply Chain & Procurement Specialist",
    companyOrLocation: "Doha, Qatar (Relocated from Kandy)",
    category: "overseas",
    rating: 5,
    relativeTime: "2 months ago",
    localGuide: "Local Guide • 22 reviews",
    avatarBg: "bg-[#34a853]",
    avatarLetter: "M",
    highlight: "From 0 responses to 3 interviews in Qatar within 25 days",
    reviewText:
      "I was struggling to get shortlisted for Middle Eastern logistics roles with my old Canva resume. Chanuka revamped everything into a clean single-column ATS master format. Received 3 interview calls from Doha within 25 days and relocated successfully!",
    outcome: "Doha Logistics Career Offer",
    helpfulCount: 26,
    ownerResponse: {
      date: "2 months ago",
      text: "Thank you Mohamed! Replacing Canva vector tables with parseable ATS hierarchy makes all the difference for Gulf international screenings. Safe travels in Qatar!",
    },
  },
];
