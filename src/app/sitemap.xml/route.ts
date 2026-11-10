import { sitemapGroups, SITE_UPDATED } from "@/lib/site-index";
import { BASE_URL } from "@/lib/seo";

export const revalidate = 3600;

/** Sitemap index: one child sitemap per silo and per country. */
export function GET() {
  const names = [...Object.keys(sitemapGroups()), "blog", "landing-pages"];
  const body =
    `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    names.map((n) => `  <sitemap><loc>${BASE_URL}/sitemaps/${n}.xml</loc><lastmod>${SITE_UPDATED}</lastmod></sitemap>`).join("\n") +
    `\n</sitemapindex>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
