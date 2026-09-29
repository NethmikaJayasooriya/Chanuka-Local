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

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 95],
  },
  async redirects() {
    return [
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
