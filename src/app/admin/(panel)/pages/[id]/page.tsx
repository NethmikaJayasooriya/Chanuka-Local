import Link from "next/link";
import { notFound } from "next/navigation";
import { PageTitle } from "@/components/admin/ui";
import { LandingEditor } from "@/components/admin/LandingEditor";
import { LANDING_SECTIONS } from "@/lib/landing";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function EditLanding({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!supabaseConfigured()) return null;
  const db = createAdminClient();
  const { data: page } = await db.from("landing_pages").select("*").eq("id", id).maybeSingle();
  if (!page) notFound();

  let coverUrl: string | null = null;
  if (page.cover_image_path) {
    const { data } = db.storage.from("blog").getPublicUrl(page.cover_image_path);
    coverUrl = data.publicUrl;
  }

  const sections = LANDING_SECTIONS.map((s) => ({ value: s.value, label: s.label, basePath: s.basePath }));
  return (
    <>
      <Link href="/admin/pages" className="text-[13px] font-semibold text-brand">← SEO Pages</Link>
      <div className="mt-3"><PageTitle title="Edit SEO page" /></div>
      <LandingEditor sections={sections} page={page} coverUrl={coverUrl} />
    </>
  );
}
