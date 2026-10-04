import type { NextConfig } from "next";

/** Old global corridor URLs now served by each country mini-site. */
const MIGRATED: Record<string, string> = {
  "united-kingdom": "uk",
  australia: "australia",
  canada: "canada",
  uae: "uae",
  "new-zealand": "new-zealand",
  singapore: "singapore",
};

/**
 * URLs from the previous chanukajeewantha.lk site, mapped to their closest
 * new page with 301s so the rankings and links they earned carry over.
 * Specific rules first; the generic /blog rule is last.
 */
const LEGACY_LK: Array<[string, string]> = [
  ["/catalogue", "/packages"],
  ["/portfolio", "/cv-samples"],
  ["/businesses", "/services"],
  ["/testimonials", "/reviews"],
  ["/help", "/faq"],
  ["/affiliate", "/contact"],
  ["/fiverr-orders", "/order"],
  ["/auth/signin", "/login"],
  ["/auth/signup", "/signup"],
  ["/ebooks", "/resources"],
  ["/ebooks/:slug*", "/resources"],
  ["/cv-writing-guides", "/cv-format-sri-lanka"],
  ["/free-ats-cv-template", "/cv-format-sri-lanka"],
  ["/free-ats-cv-checklist", "/cv-format-sri-lanka"],
  ["/resources/ats-friendly-cv-template-free", "/cv-format-sri-lanka"],
  ["/free-linkedin-headline-formula", "/linkedin-optimisation"],
  ["/services/packages/cv-writing", "/cv-writing"],
  ["/services/packages/cover-letter-writing", "/cover-letter-writing"],
  ["/services/packages/linkedin-optimization", "/linkedin-optimisation"],
  ["/services/packages/:slug*", "/packages"],
  ["/blog", "/career-advice"],
  ["/blog/cv-writing-service-in-sri-lanka-what-a-professional-cv-should-actually-do-for-you", "/cv-writing"],
  ["/blog/how-to-choose-a-professional-cv-writer-in-sri-lanka-without-wasting-your-money", "/how-to-choose-a-cv-writer-sri-lanka"],
  ["/blog/professional-cv-writing-in-sri-lanka-the-complete-guide-for-job-seekers", "/cv-format-sri-lanka"],
  ["/blog/the-perfect-cv-structure-for-sri-lankan-job-seekers", "/cv-format-sri-lanka"],
  ["/blog/best-cv-structure-for-job-applications", "/cv-format-sri-lanka"],
  // Sinhala posts that already rank (cv / resume meaning in Sinhala, work experience).
  ["/blog/:slug(.*-sinhala)", "/cv-format-sinhala"],
  // Any other old post keeps its slug under the new blog path.
  ["/blog/:slug", "/career-advice/:slug"],
];

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 95],
  },
  async redirects() {
    return [
      ...LEGACY_LK.map(([source, destination]) => ({ source, destination, permanent: true })),
      ...Object.entries(MIGRATED).map(([from, to]) => ({
        source: `/international-job-seekers/${from}`,
        destination: `/${to}/international-job-seekers`,
        permanent: true,
      })),
      { source: "/countries/united-kingdom", destination: "/uk", permanent: true },
      { source: "/countries/united-states", destination: "/usa", permanent: true },
      { source: "/countries/:slug(australia|canada|new-zealand|uae|singapore)", destination: "/:slug", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Force HTTPS for two years, including subdomains (Vercel serves TLS).
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          // Block clickjacking by disallowing the site being framed elsewhere.
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          // Lock down powerful browser features the site does not use.
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
        ],
      },
      { source: "/admin/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] },
      { source: "/:file(llms.txt|llms-full.txt)", headers: [{ key: "X-Robots-Tag", value: "noindex" }] },
    ];
  },
};

export default nextConfig;
