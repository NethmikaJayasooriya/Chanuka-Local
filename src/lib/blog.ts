import "server-only";
import { createClient } from "@supabase/supabase-js";
import { supabaseConfigured } from "@/lib/supabase/guard";
import { SITE_KEY } from "@/lib/site";

/**
 * Public blog reads. Posts are authored in the admin panel and stored in
 * the `blog_posts` table. The public site reads only published posts with
 * the anon key (RLS allows `status = 'published'`), so drafts never leak.
 */

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string | null;
  body_html: string | null;
  category: string | null;
  read_minutes: number | null;
  meta_title: string | null;
  meta_description: string | null;
  cover_image_path: string | null;
  published_at: string | null;
  quick_answer: string | null;
  faqs: Array<{ q: string; a: string }> | null;
  noindex: boolean | null;
};

const COLS =
  "id,slug,title,excerpt,body,body_html,category,read_minutes,meta_title,meta_description,cover_image_path,published_at,quick_answer,faqs,noindex";

function anon() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  if (!supabaseConfigured()) return [];
  const { data } = await anon()
    .from("blog_posts")
    .select(COLS)
    .eq("status", "published")
    .eq("site", SITE_KEY)
    .order("published_at", { ascending: false });
  return (data as BlogPost[] | null) ?? [];
}

export async function getPublishedPost(slug: string): Promise<BlogPost | null> {
  if (!supabaseConfigured()) return null;
  const { data } = await anon()
    .from("blog_posts")
    .select(COLS)
    .eq("status", "published")
    .eq("site", SITE_KEY)
    .eq("slug", slug)
    .maybeSingle();
  return (data as BlogPost | null) ?? null;
}

/** Public URL for a cover image stored in the public `blog` bucket. */
export function blogCoverUrl(path: string | null): string | null {
  if (!path) return null;
  const base = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!base) return null;
  return `${base}/storage/v1/object/public/blog/${path}`;
}
