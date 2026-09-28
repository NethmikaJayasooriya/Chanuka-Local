export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrLocation: string;
  category: "tech" | "banking" | "engineering" | "overseas" | "grad";
  rating: number;
  highlight: string;
  quote: string;
  outcome: string;
  date: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dilan-p",
    name: "Dilan Pathirana",
    role: "Senior Software Engineer",
    companyOrLocation: "Relocated to Melbourne, Australia",
    category: "overseas",
    rating: 5,
    highlight: "Shortlisted for 4 international roles within 3 weeks",
    quote:
      "I had applied for over 60 Australian jobs with zero interview calls. Chanuka completely restructured my tech stack and metric bullet points to match Australian ATS standards. Within 3 weeks of applying with the new CV, I secured 4 interviews and finally accepted an offer in Melbourne!",
    outcome: "Melbourne Tech Relocation Offer",
    date: "January 2026",
  },
  {
    id: "sanduni-m",
    name: "Sanduni M.",
    role: "Brand & Digital Marketing Manager",
    companyOrLocation: "Leading FMCG Conglomerate, Colombo",
    category: "banking",
    rating: 5,
    highlight: "Weekly inbound recruiter inquiries on LinkedIn",
    quote:
      "Chanuka's LinkedIn optimization is gold. He rewrote my entire headline, summary, and experience sections with commercial impact numbers. Now recruiters from top agencies in Colombo reach out to me directly without me even applying. Highly recommended for any serious marketer!",
    outcome: "45% Salary Jump Promotion",
    date: "February 2026",
  },
  {
    id: "kasun-t",
    name: "Kasun Tennakoon",
    role: "Assistant Vice President - Corporate Banking",
    companyOrLocation: "Top Tier Private Commercial Bank, Colombo",
    category: "banking",
    rating: 5,
    highlight: "Executive narrative transformed my 12-year career into 2 concise pages",
    quote:
      "When you have over 10 years of banking experience, condensing it without losing executive weight is very tough. Chanuka's CPRW credentials really show — he highlighted my portfolio growth metrics and regulatory compliance leadership with absolute precision.",
    outcome: "Appointed Head of Corporate Credit",
    date: "December 2025",
  },
  {
    id: "tharindu-w",
    name: "Tharindu Wickramasinghe",
    role: "Cloud DevOps Engineer",
    companyOrLocation: "Remote US Fintech (Living in Kandy)",
    category: "tech",
    rating: 5,
    highlight: "Landed remote USD salary role",
    quote:
      "Working remotely for US/European tech companies from Sri Lanka requires an impeccable resume that passes Greenhouse and Workday ATS. Chanuka knew exactly what keywords and cloud infrastructure accomplishments global hiring managers look for.",
    outcome: "Secured $3,500/mo Remote Contract",
    date: "January 2026",
  },
  {
    id: "chathuri-s",
    name: "Chathuri Senaratne",
    role: "Fresh Graduate - B.Sc Information Systems",
    companyOrLocation: "University of Colombo School of Computing",
    category: "grad",
    rating: 5,
    highlight: "Secured trainee software analyst position within 14 days",
    quote:
      "As a fresh graduate, I didn't know how to turn academic assignments and GitHub projects into professional resume bullets. The Starter Graduate package was super affordable and Chanuka delivered within 48 hours. I had 2 interview offers within 2 weeks of sending out my new CV!",
    outcome: "Hired at Tier-1 Software Consultancy",
    date: "February 2026",
  },
  {
    id: "nuwan-k",
    name: "Dr. Nuwan Kulatunga",
    role: "Senior Project Engineering Manager",
    companyOrLocation: "Dubai, United Arab Emirates",
    category: "overseas",
    rating: 5,
    highlight: "Passed UAE Gulf recruitment portals effortlessly",
    quote:
      "Gulf job portals are notoriously strict with format parsing and credential verification. Chanuka's Gulf Relocation pack gave me an instant advantage over hundreds of other applicants. The turnaround was super fast and communication over WhatsApp was flawless.",
    outcome: "Secured Dubai Infrastructure Project Role",
    date: "November 2025",
  },
];
