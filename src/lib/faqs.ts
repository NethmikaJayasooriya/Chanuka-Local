export type Faq = { q: string; a: string };

export const faqGroups: Array<{ title: string; items: Faq[] }> = [
  {
    title: "Ordering and pricing",
    items: [
      {
        q: "How is the price decided?",
        a: "Three things: the package you choose, your experience level, and how fast you need it. All three are on the home page, and the total updates as you choose. Nothing is added at checkout.",
      },
      {
        q: "Why does experience level change the price?",
        a: "It changes the depth of the work. An early-career CV needs positioning and structure. A CV with fifteen years on it needs a leadership narrative, scope, budgets and evidence of impact across teams, which takes considerably longer to write properly.",
      },
      {
        q: "Do bundles actually save money?",
        a: "Yes. Any two services are 20% off the combined price and all three are 30% off. The discount is applied automatically, not on request.",
      },
      {
        q: "What payment methods do you accept?",
        a: "Card payments in USD at checkout. For clients who need an alternative, bank transfer and other methods can be arranged before the order is placed.",
      },
    ],
  },
  {
    title: "Delivery and revisions",
    items: [
      {
        q: "How fast can I get my documents?",
        a: "Standard delivery is 5 to 7 days. Fast delivery is 2 to 3 days. Ultra fast delivery is within 24 hours. The 24-hour option has limited weekly capacity, so it is worth confirming availability before ordering.",
      },
      {
        q: "How many revisions are included?",
        a: "One full revision round is included in every package. You review the first draft, send your comments in one go, and receive the revised version. Further rounds can be added if you need them.",
      },
      {
        q: "What format do I receive?",
        a: "Word and PDF. The Word file is there so you can make small edits yourself for future applications without going back to a designer.",
      },
      {
        q: "What do you need from me to start?",
        a: "Your current CV, your target role and market, and ideally one or two job adverts you would actually apply to. If you have no CV, a detailed work history is enough.",
      },
    ],
  },
  {
    title: "The work itself",
    items: [
      {
        q: "Will my CV pass ATS?",
        a: "No one can promise a specific system's result, and anyone who does is selling you something. What is guaranteed is that nothing in the document will be the reason it fails: standard headings, no text in images, no critical information trapped in tables, and a keyword strategy drawn from real job descriptions in your field.",
      },
      {
        q: "Do you write for a specific country?",
        a: "Yes. A UK CV, an Australian resume and a Gulf CV differ on length, photos, personal details and tone. You name the target market in the intake form and the document is written for it.",
      },
      {
        q: "Who writes the documents?",
        a: "Chanuka writes every document personally. Nothing is passed to a team of writers, which is also why the faster delivery options carry a fee.",
      },
      {
        q: "Is my information kept private?",
        a: "Your documents and details are used for your order and nothing else. Nothing is published, shared or used as a sample without your written permission, and the samples on this site are anonymised.",
      },
    ],
  },
  {
    title: "Results",
    items: [
      {
        q: "Can you guarantee me a job?",
        a: "No, and be careful with anyone who does. A CV gets you read and gets you interviews. What happens in the interview, and whether the role is filled internally, is outside anyone's control.",
      },
      {
        q: "How soon should I expect a response?",
        a: "Most clients start seeing replies within two to six weeks, depending on the market and how many applications they send. A better document raises your response rate; it does not remove the need to apply.",
      },
      {
        q: "What if I am not happy with the draft?",
        a: "Tell me what is wrong and it gets fixed in the revision round. If the work genuinely does not match what was agreed, the refund policy applies.",
      },
    ],
  },
];

/** The short set used on the home page. */
export const homeFaqs: Faq[] = [
  faqGroups[1].items[0],
  faqGroups[0].items[1],
  faqGroups[2].items[1],
  faqGroups[1].items[1],
  faqGroups[2].items[0],
  faqGroups[2].items[2],
];
