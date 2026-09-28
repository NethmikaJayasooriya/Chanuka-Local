import { site } from "@/lib/site";
import { FAQS } from "@/lib/faqs";

export function SiteStructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/images/hero-chanuka.jpg`,
        image: `${site.url}/images/hero-chanuka.jpg`,
        description: site.description,
        areaServed: [
          {
            "@type": "Country",
            name: "Sri Lanka",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        telephone: site.phone,
        email: site.email,
        priceRange: "LKR 1,490 - LKR 35,000",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Colombo",
          addressCountry: "LK",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.score,
          reviewCount: "450",
          bestRating: "5",
          worstRating: "1",
        },
        sameAs: [
          site.social.linkedin,
          site.social.facebook,
          site.social.youtube,
          site.social.instagram,
          site.social.tiktok,
          site.fiverrUrl,
        ],
      },
      {
        "@type": "Person",
        "@id": `${site.url}#person`,
        name: site.name,
        jobTitle: "Certified Professional Resume Writer (CPRW) & Career Coach (CPCC)",
        url: site.url,
        image: `${site.url}/images/hero-chanuka.jpg`,
        description: "Sri Lanka's premier CPRW and CPCC credentialed professional CV writer and career strategist.",
        worksFor: {
          "@id": `${site.url}#organization`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${site.url}#faq`,
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
