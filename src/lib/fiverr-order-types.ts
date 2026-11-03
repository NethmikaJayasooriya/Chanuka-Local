export type OrderStatus =
  | "pending_requirements"
  | "in_progress"
  | "delivered"
  | "in_revision"
  | "completed"
  | "cancelled";

export type Role = "seller" | "buyer" | "admin";

export interface DeliverableFile {
  id: string;
  name: string;
  size: string;
  type: string;
  url?: string;
}

export interface QuestionnaireAnswer {
  question: string;
  isOptional?: boolean;
  answer?: string;
  file?: DeliverableFile;
}

export interface ReviewRating {
  communication: number;
  quality: number;
  value: number;
  average: number;
  comment: string;
  created_at: string;
  seller_response?: string;
  seller_response_at?: string;
}

export interface ExtensionRequest {
  id: string;
  days: number;
  reason: string;
  requested_at: string;
  status: "pending" | "accepted" | "rejected";
  responded_at?: string;
  new_delivery_date?: string;
  new_due_timestamp?: number;
}

export interface OrderChatMessage {
  id: string;
  sender: string;
  role: Role;
  text: string;
  time: string;
  timestamp?: string;
}

export interface OrderItem {
  name: string;
  quantity: number;
  duration_days: number;
  price: number;
}

export interface FiverrOrderData {
  order_id: string;
  order_number: string;
  gig_title: string;
  gig_image: string;
  package_name: string;
  buyer_name: string;
  buyer_username: string;
  buyer_avatar?: string;
  buyer_country: string;
  buyer_last_seen: string;
  seller_name: string;
  seller_avatar: string;
  seller_title: string;
  status: OrderStatus;
  order_date: string;
  delivery_date: string;
  due_timestamp: number; // epoch ms for countdown timer
  items: OrderItem[];
  total_price: number;
  currency_symbol: string;
  currency: string;
  revisions_included: number;
  revisions_used: number;
  private_notes?: string;
  requirements: QuestionnaireAnswer[];
  requirements_submitted?: boolean;
  requirements_submitted_at?: string;
  deliveries: Array<{
    id: string;
    delivery_number: number;
    delivered_at: string;
    message: string;
    files: DeliverableFile[];
  }>;
  revisions: Array<{
    id: string;
    requested_at: string;
    message: string;
  }>;
  completion?: {
    completed_at: string;
  };
  buyer_review?: ReviewRating;
  seller_review?: {
    comment: string;
    rating: number;
    created_at: string;
  };
  extension_request?: ExtensionRequest;
  chat_messages?: OrderChatMessage[];
}

// Authentic sample matching the user's uploaded Fiverr screenshot exactly!
export const INITIAL_FIVERR_ORDER: FiverrOrderData = {
  order_id: "fiverr-cv-sample-1",
  order_number: "FO908389601",
  gig_title: "I will be your executive CV, resume, and targeted cover letter writer",
  gig_image: "/images/chanuka-portrait.jpg",
  package_name: "Professional Resume",
  buyer_name: "Alexander Wright",
  buyer_username: "alexander_w",
  buyer_avatar: "",
  buyer_country: "United States",
  buyer_last_seen: "Seen 3 hours ago",
  seller_name: "Chanuka Jeewantha",
  seller_avatar: "/images/chanuka-portrait.jpg",
  seller_title: "Executive CV & Career Branding Specialist",
  status: "completed",
  order_date: "Apr 14, 2026, 11:45 AM",
  delivery_date: "Apr 22, 2026, 1:39 AM",
  due_timestamp: Date.now() + 2 * 24 * 60 * 60 * 1000 + 4 * 3600 * 1000,
  items: [
    {
      name: "Professional Resume & Targeted Cover Letter with ATS SEO keywords",
      quantity: 1,
      duration_days: 2,
      price: 15,
    },
  ],
  total_price: 15,
  currency_symbol: "$",
  currency: "USD",
  revisions_included: 2,
  revisions_used: 1,
  private_notes: "Client is applying for VP of Operations roles across North America. Prioritize executive leadership metrics.",
  requirements: [
    {
      question: "1. If you're ordering for a business, what is your industry? (Optional)",
      isOptional: true,
      answer: "(Not answered)",
    },
    {
      question: "2. Is this order part of a bigger project you're working on? (Optional)",
      isOptional: true,
      answer: "(Not answered)",
    },
    {
      question: "3. Do you have a new branding vendor for this project? (Optional)",
      isOptional: true,
      answer: "(Not answered)",
    },
    {
      question:
        "4. Since we are now united to create your ATS-friendly resume or CV, please provide the following details: - Your current resume (if you have one)",
      isOptional: false,
      file: {
        id: "req-file-1",
        name: "Alexander_Wright_Original_Resume.pdf",
        size: "207 KB",
        type: "pdf",
      },
    },
    {
      question:
        "5. Your target job title or position:\n• Your work experience (company name, role, responsibilities, achievements)\n• Your education and certifications\n• Key skills you want featured (Optional)",
      isOptional: false,
      answer:
        "Targeting Senior Operations Director / VP of Supply Chain.\n12+ years experience leading global logistics networks across EMEA and North America.\nKey metrics: managed $45M operational budget, improved delivery times by 34%, streamlined 140+ team personnel.",
    },
    {
      question: "6. Your LinkedIn Account (Optional)",
      isOptional: true,
      answer: "https://linkedin.com/in/alexander-wright-exec",
    },
    {
      question: "7. A job description or link for the role you want targeted (Optional)",
      isOptional: true,
      answer: "https://careers.globaltech.com/jobs/vp-operations-supply-chain-na",
    },
  ],
  deliveries: [
    {
      id: "del-1",
      delivery_number: 1,
      delivered_at: "Apr 20, 2026, 12:14 AM",
      message:
        "Hi Alexander! Here is your brand-new ATS-optimized Executive CV & Targeted Cover Letter. I have aligned your achievements with modern executive leadership standards and highlighted your $45M budget impact. Please review the attachments and let me know if you would like any adjustments!",
      files: [
        {
          id: "del-file-1",
          name: "Alexander_Wright_Executive_CV_v1.pdf",
          size: "217 KB",
          type: "pdf",
        },
      ],
    },
    {
      id: "del-2",
      delivery_number: 2,
      delivered_at: "Apr 21, 2026, 10:42 PM",
      message:
        "Hi Alexander, I updated both files with your revision requests. I clarified the scope under your regional director tenure, polished section 2 readability, and synchronized the numbering on your cover letter. Please find both the PDF and fully editable Word DOCX versions below!",
      files: [
        {
          id: "del-file-2a",
          name: "Alexander_Wright_Executive_CV_Final.docx",
          size: "88 KB",
          type: "docx",
        },
        {
          id: "del-file-2b",
          name: "Alexander_Wright_Executive_CV_Final.pdf",
          size: "132 KB",
          type: "pdf",
        },
      ],
    },
  ],
  revisions: [
    {
      id: "rev-1",
      requested_at: "Apr 20, 2026, 4:48 AM",
      message:
        "Please make revisions regarding additional job history details. I can't quite read the sentence in section 2 and also please verify my cover letter numbering so it matches the executive brief.",
    },
  ],
  completion: {
    completed_at: "Apr 22, 2026, 1:39 AM",
  },
  buyer_review: {
    communication: 5.0,
    quality: 5.0,
    value: 5.0,
    average: 5.0,
    comment: "Recommended! Professional, fast, and flexible. Outstanding understanding of executive resumes. Easy to work with.",
    created_at: "May 2, 2026, 5:47 PM",
    seller_response: "Thank you Alexander! It was an absolute pleasure working together. Best of luck with your VP application!",
    seller_response_at: "May 2, 2026, 6:15 PM",
  },
  seller_review: {
    comment: "Very friendly and decisive client with clear expectations. Would love to collaborate again!",
    rating: 5.0,
    created_at: "May 2, 2026, 6:02 PM",
  },
};
