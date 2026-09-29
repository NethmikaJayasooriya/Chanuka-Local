export type LegalDoc = {
  slug: string;
  title: string;
  lead: string;
  updated: string;
  sections: Array<{ heading: string; body: string[] }>;
};

/**
 * Placeholder legal copy. It is written to be reasonable and readable, but it
 * is not legal advice and has not been reviewed by a lawyer. Have these three
 * checked before launch, especially the refund terms, which affect chargebacks.
 */
export const legalDocs: LegalDoc[] = [
  {
    slug: "privacy-policy",
    title: "Privacy policy",
    lead: "What is collected, why, and what is never done with it.",
    updated: "September 2026",
    sections: [
      {
        heading: "What is collected",
        body: [
          "To deliver an order: your name, contact details, your current CV or work history, your target role and market, and anything else you choose to send.",
          "To run the site: basic server logs needed to keep the site secure and working. No advertising or analytics cookies are set; if analytics are added, this policy and the cookie policy will be updated first.",
        ],
      },
      {
        heading: "Why it is collected",
        body: [
          "Your documents and details are used to write your documents and to contact you about your order. That is the whole purpose.",
          "Payment details are handled by the payment provider and are never stored on this site.",
        ],
      },
      {
        heading: "What is never done",
        body: [
          "Your CV, your details and your order are never sold, rented or shared with third parties for marketing.",
          "Nothing of yours is published or used as a sample without your written permission. The samples on this site are anonymised and used with consent.",
        ],
      },
      {
        heading: "How long it is kept",
        body: [
          "Order files are kept for 12 months so that you can request your documents again, then deleted.",
          "You can ask for your data to be deleted sooner at any time and it will be, except where an invoice must legally be retained.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You can ask what is held about you, ask for a copy, ask for corrections, or ask for deletion. Send the request to the contact address on this site and it will be answered within 30 days.",
        ],
      },
    ],
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and conditions",
    lead: "What is being bought, what is delivered, and the limits on both sides.",
    updated: "September 2026",
    sections: [
      {
        heading: "The service",
        body: [
          "You are buying professional writing work: a CV, a cover letter, a LinkedIn profile rewrite, a review or a consultation, as described on the relevant service page and in your order.",
          "You are not buying a job, an interview, or a guaranteed outcome from any applicant tracking system. No such outcome is promised anywhere on this site.",
        ],
      },
      {
        heading: "What you provide",
        body: [
          "Accurate information about your work history and your target role. Documents are written from what you supply, and nothing is invented or exaggerated on your behalf.",
          "Delivery timelines start when your intake brief is complete, not at the moment of payment.",
        ],
      },
      {
        heading: "Revisions",
        body: [
          "One full revision round is included with every package. Send your comments in one message so they can be handled together.",
          "A revision means refining the agreed brief. A change of target role or market after the draft is a new brief and is quoted separately.",
        ],
      },
      {
        heading: "Ownership",
        body: [
          "Once your order is paid in full, the final documents are yours to use however you wish.",
          "The templates, structures and this website remain the property of Chanuka Jeewantha.",
        ],
      },
      {
        heading: "Limits",
        body: [
          "Liability is limited to the amount you paid for the order in question.",
          "The service is not legal, immigration or financial advice.",
        ],
      },
    ],
  },
  {
    slug: "refund-policy",
    title: "Refund policy",
    lead: "When a refund applies, when it does not, and how to ask.",
    updated: "September 2026",
    sections: [
      {
        heading: "Before work starts",
        body: [
          "If you cancel before the first draft has been started, you receive a full refund. Say so as early as you can.",
        ],
      },
      {
        heading: "After the first draft",
        body: [
          "Once a draft has been written, the work has been done, so a full refund no longer applies. What does apply is the revision round, which exists precisely to fix a draft that missed.",
          "If the delivered work genuinely does not match what was agreed in your brief, and the revision round does not resolve it, a partial or full refund is considered case by case and in good faith.",
        ],
      },
      {
        heading: "What is not a refund reason",
        body: [
          "Not receiving interviews or a job offer. A document affects your response rate; it cannot control hiring decisions, internal candidates or a market.",
          "Changing your mind about the target role after the document was written to the brief you approved.",
        ],
      },
      {
        heading: "Late delivery",
        body: [
          "If a confirmed delivery date is missed for reasons on my side, the delivery fee for the faster option is refunded. If the delay makes the work useless to you, the order is refunded in full.",
        ],
      },
      {
        heading: "How to request one",
        body: [
          "Message the contact address on this site with your order number and what went wrong. Requests are answered within three working days.",
        ],
      },
    ],
  },
];

export function getLegalDoc(slug: string): LegalDoc | undefined {
  return legalDocs.find((d) => d.slug === slug);
}
