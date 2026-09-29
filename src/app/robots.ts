import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const PRIVATE = ["/admin", "/api/", "/order/confirmation", "/checkout", "/intake", "/login", "/dashboard"];

/**
 * AI answer engines are explicitly welcomed (GEO): being crawlable by
 * search and assistant bots is what makes the site citable in ChatGPT,
 * Claude, Perplexity, Gemini and Google AI Overviews.
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
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: PRIVATE },
      { userAgent: AI_BOTS, allow: "/", disallow: PRIVATE },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
