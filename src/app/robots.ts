import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const PRIVATE = ["/admin", "/api/", "/order/confirmation", "/checkout", "/intake", "/login", "/signup", "/dashboard"];

/**
 * Preserve public crawler access. Crawl permission is one technical
 * prerequisite, not a guarantee of indexing, citation or ranking.
 */
const AI_BOTS = [
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "meta-externalagent",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  const base = site.url.replace(/\/$/, "");
  if (process.env.VERCEL_ENV === "preview") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_BOTS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
