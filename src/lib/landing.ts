import "server-only";
import { createClient } from "@supabase/supabase-js";
import { supabaseConfigured } from "@/lib/supabase/guard";
import { SITE_KEY } from "@/lib/site";

/**
 * SEO landing pages authored in the admin panel. Each targets one
 * (section, slug) and, when published, overrides / fills the matching
 * public route with a designed HTML page. Existing code-built pages stay
 * as the fallback when no published landing exists.
 */

export type LandingSection = string;

export type LandingSectionMeta = {
  value: LandingSection;
  label: string;
  basePath: string; // "" for country (root-level /uk)
  crumbLabel: string;
  crumbHref: string;
};

export const LANDING_SECTIONS: LandingSectionMeta[] = [
  { value: "country", label: "Country", basePath: "", crumbLabel: "Countries", crumbHref: "/countries" },
  { value: "job-role", label: "Job role", basePath: "/job-roles", crumbLabel: "Guidance by role", crumbHref: "/job-roles" },
  { value: "industry", label: "Industry", basePath: "/industries", crumbLabel: "Industries", crumbHref: "/industries" },
  { value: "career-level", label: "Career level", basePath: "/career-levels", crumbLabel: "Career levels", crumbHref: "/career-levels" },
  { value: "career-situation", label: "Career situation", basePath: "/career-situations", crumbLabel: "Career situations", crumbHref: "/career-situations" },
  { value: "cv-sample", label: "CV sample", basePath: "/cv-samples", crumbLabel: "CV samples", crumbHref: "/cv-samples" },
  { value: "corridor", label: "Corridor (abroad)", basePath: "/international-job-seekers", crumbLabel: "Applying abroad", crumbHref: "/international-job-seekers" },
  // Country career-advice articles: /{country}/career-advice/{slug}
  ...(
    [
      ["uk", "UK"],
      ["usa", "USA"],
      ["australia", "Australia"],
      ["canada", "Canada"],
      ["new-zealand", "New Zealand"],
      ["uae", "UAE"],
      ["singapore", "Singapore"],
    ] as const
  ).map(([c, n]) => ({
    value: `${c}-advice`,
    label: `${n} career advice article`,
    basePath: `/${c}/career-advice`,
    crumbLabel: `${n} career advice`,
    crumbHref: `/${c}/career-advice`,
  })),
];

export function sectionMeta(section: string): LandingSectionMeta | undefined {
  return LANDING_SECTIONS.find((s) => s.value === section);
}

export function landingPath(section: string, slug: string): string {
  const base = sectionMeta(section)?.basePath ?? "";
  return `${base}/${slug}`;
}

export type LandingPage = {
  id: string;
  section: LandingSection;
  slug: string;
  title: string;
  body_html: string | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_image_path: string | null;
  status: string;
  published_at: string | null;
  updated_at: string;
  quick_answer: string | null;
  faqs: Array<{ q: string; a: string }> | null;
  primary_keyword: string | null;
  noindex: boolean | null;
};

const COLS =
  "id,section,slug,title,body_html,meta_title,meta_description,cover_image_path,status,published_at,updated_at,quick_answer,faqs,primary_keyword,noindex";

function anon() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

/** Public: the published landing page for a route, or null (use the built page). */
export async function getPublishedLanding(
  section: LandingSection,
  slug: string,
): Promise<LandingPage | null> {
  if (!supabaseConfigured()) return null;
  const { data } = await anon()
    .from("landing_pages")
    .select(COLS)
    .eq("section", section)
    .eq("slug", slug)
    .eq("status", "published")
    .eq("site", SITE_KEY)
    .maybeSingle();
  return (data as LandingPage | null) ?? null;
}

export function landingCoverUrl(path: string | null): string | null {
  if (!path) return null;
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return null;
  return `${base}/storage/v1/object/public/blog/${path}`;
}

/** Public: all published landing pages (for sitemaps). */
export async function getPublishedLandings(): Promise<Array<Pick<LandingPage, "section" | "slug" | "updated_at">>> {
  if (!supabaseConfigured()) return [];
  const { data } = await anon().from("landing_pages").select("section,slug,updated_at").eq("status", "published").eq("site", SITE_KEY).eq("noindex", false);
  return (data as Array<Pick<LandingPage, "section" | "slug" | "updated_at">> | null) ?? [];
}
