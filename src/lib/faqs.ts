export interface FaqItem {
  id: string;
  category: "ats" | "process" | "pricing" | "delivery" | "international";
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "what-is-ats",
    category: "ats",
    question: "What is an ATS (Applicant Tracking System), and does it matter in Sri Lanka?",
    answer:
      "An Applicant Tracking System (ATS) is automated software that scans, filters, and ranks job applications before a human recruiter ever sees them. In Sri Lanka, leading employers such as Dialog, MAS Holdings, John Keells, Hayleys, Hemas, standard chartered banks, and multinational IT companies (IFS, Virtusa, LSEG, WSO2) use systems like Workday, Taleo, SAP SuccessFactors, and Greenhouse. If your CV uses complex multi-column graphics, text boxes, tables, or lacks targeted keywords, ATS algorithms will parse it as gibberish and automatically reject it.",
  },
  {
    id: "why-chanuka",
    category: "process",
    question: "Why choose Chanuka Jeewantha over cheap CV template makers?",
    answer:
      "Chanuka is CPRW (Certified Professional Resume Writer) and CPCC (Certified Professional Career Coach) credentialed with over 8 years of specialized experience and 10,000+ resumes crafted. Cheap graphic templates on Canva look pretty to an untrained eye but are 100% unreadable by recruitment algorithms. Chanuka personally conducts an in-depth career audit, writes compelling metric-driven accomplishments (e.g. revenue, cost savings, efficiency %), and delivers an editable Word doc alongside a recruiter-ready PDF.",
  },
  {
    id: "how-to-order",
    category: "process",
    question: "How does the ordering and writing process work?",
    answer:
      "Step 1: Choose your package or take our 60-second quiz to get matched. Step 2: Message us on WhatsApp (+94 77 390 2230) or book directly. Step 3: Send your current CV (or bullet points if starting fresh) and 1-2 sample target job descriptions. Step 4: Chanuka analyzes your background, writes your new drafts, and sends them within 48-72 hours. Step 5: You review the draft, request any adjustments (14-30 days free revisions), and receive final files.",
  },
  {
    id: "turnaround-express",
    category: "delivery",
    question: "What is the delivery time? Is there an urgent express option?",
    answer:
      "Standard delivery is 48 to 72 business hours. If you have an impending application deadline, we offer a 24-Hour VIP Express Delivery add-on for LKR 3,500 where your order is prioritized at the top of Chanuka's schedule.",
  },
  {
    id: "payment-methods",
    category: "pricing",
    question: "What payment methods are accepted in Sri Lanka?",
    answer:
      "We offer hassle-free Sri Lankan payment options: Direct Bank Transfer (Commercial Bank, Sampath Bank, HNB, Bank of Ceylon), FriMi, Koko Pay (Split in 3 installments), and Online Card payments. We also accept international payments in USD/GBP/AUD via Stripe and PayPal for Sri Lankan clients overseas.",
  },
  {
    id: "revisions",
    category: "process",
    question: "What if I need changes after receiving my CV?",
    answer:
      "Every package includes free revision support (14 days for Fresh Graduates, 30 days for Mid-Level, and 45 days for Executives). You can request updates to wording, formatting, or newly added certifications until you are 100% satisfied.",
  },
  {
    id: "international-difference",
    category: "international",
    question: "How does a Foreign Job CV differ from a Sri Lankan local CV?",
    answer:
      "Foreign recruiters expect concise 1-2 page documents that eliminate personal data often found in outdated Sri Lankan CVs (e.g. NIC number, marital status, religion, school sports colors) and focus strictly on professional achievements, technical competencies, and quantifiable impact. Middle East (Gulf) recruiters require specific credential formatting, while European and Australian recruiters require strict ATS compliance and visa readiness disclosures.",
  },
  {
    id: "passwords",
    category: "process",
    question: "Do you need my LinkedIn password to optimize my profile?",
    answer:
      "Never! We protect your privacy and security. We provide a comprehensive, step-by-step master guide with exact copy-paste text, optimized search keywords, and visual instructions so you can update your LinkedIn profile yourself in less than 10 minutes without sharing your credentials.",
  },
];
