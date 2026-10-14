import { getPublishedPosts } from "@/lib/blog";
import { getPublishedLandings, landingPath } from "@/lib/landing";
import { sitemapGroups, type IndexEntry } from "@/lib/site-index";
import { BASE_URL } from "@/lib/seo";
import { articles, ARTICLE_CATEGORIES } from "@/lib/articles";

export const revalidate = 3600;

function xml(entries: IndexEntry[]) {
  const escape = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  const rows = [...new Map(entries.map((entry) => [entry.path, entry])).values()]
    .map(
      (x) =>
        `  <url><loc>${escape(`${BASE_URL}${x.path === "/" ? "" : x.path}`)}</loc>${/^\d{4}-\d{2}-\d{2}/.test(x.lastmod) ? `<lastmod>${escape(x.lastmod.slice(0, 10))}</lastmod>` : ""}</url>`,
    )
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
}

export async function GET(_req: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const name = file.replace(/\.xml$/, "");
  let entries: IndexEntry[] | undefined = sitemapGroups()[name];

  if (name === "blog") {
    const posts = await getPublishedPosts();
    const codeSlugs = new Set([...articles.map((article) => article.slug), ...ARTICLE_CATEGORIES.map((category) => category.slug)]);
    entries = posts.filter((p) => !p.noindex && !codeSlugs.has(p.slug) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)).map((p) => ({ path: `/career-advice/${p.slug}`, lastmod: p.published_at ?? "", priority: 0.6 }));
  }
  if (name === "landing-pages") {
    const pages = await getPublishedLandings();
    const supportedSections = new Set(["job-role", "industry", "career-level", "career-situation", "cv-sample"]);
    entries = pages.filter((p) => supportedSections.has(p.section) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug)).map((p) => ({ path: landingPath(p.section, p.slug), lastmod: p.updated_at, priority: 0.7 }));
  }
  if (!entries) return new Response("Not found", { status: 404 });
  return new Response(xml(entries), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
