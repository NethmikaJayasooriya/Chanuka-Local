import Link from "next/link";
import { PageTitle } from "@/components/admin/ui";
import { LandingEditor } from "@/components/admin/LandingEditor";
import { LANDING_SECTIONS } from "@/lib/landing";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default function NewLanding() {
  if (!supabaseConfigured()) return null;
  const sections = LANDING_SECTIONS.map((s) => ({ value: s.value, label: s.label, basePath: s.basePath }));
  return (
    <>
      <Link href="/admin/pages" className="text-[13px] font-semibold text-brand">← SEO Pages</Link>
      <div className="mt-3"><PageTitle title="New SEO page" /></div>
      <LandingEditor sections={sections} />
    </>
  );
}
