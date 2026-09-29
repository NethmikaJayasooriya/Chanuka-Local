import { getPublishedPosts } from "@/lib/blog";
import { getPublishedLandings, landingPath } from "@/lib/landing";
import { sitemapGroups, type IndexEntry } from "@/lib/site-index";
import { BASE_URL } from "@/lib/seo";

export const revalidate = 3600;

function xml(entries: IndexEntry[]) {
  const rows = entries
    .map(
      (x) =>
        `  <url><loc>${BASE_URL}${x.path === "/" ? "" : x.path}</loc><lastmod>${x.lastmod.slice(0, 10)}</lastmod><priority>${x.priority.toFixed(1)}</priority></url>`,
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
    entries = posts.filter((p) => !p.noindex).map((p) => ({ path: `/career-advice/${p.slug}`, lastmod: p.published_at ?? "2026-09-27", priority: 0.6 }));
  }
  if (name === "landing-pages") {
    const pages = await getPublishedLandings();
    entries = pages.map((p) => ({ path: landingPath(p.section, p.slug), lastmod: p.updated_at, priority: 0.7 }));
  }
  if (!entries) return new Response("Not found", { status: 404 });
  return new Response(xml(entries), { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
