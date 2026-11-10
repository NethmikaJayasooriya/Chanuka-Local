import Link from "next/link";
import { Badge, EmptyState, PageTitle } from "@/components/admin/ui";
import { SiteFilter, SiteBadge } from "@/components/admin/SiteFilter";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin, resolveAdminSite, supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function SubmissionsPage({ searchParams }: { searchParams: Promise<{ site?: string }> }) {
  if (!supabaseConfigured()) return null;
  const { site = "" } = await searchParams;
  const access = await requireAdmin();
  const scopedSite = resolveAdminSite(site, access);
  const db = createAdminClient();
  let q = db
    .from("intake_submissions")
    .select("id,site,name,email,target_role,cv_path,handled,created_at");
  if (scopedSite) q = q.eq("site", scopedSite); else q = q.in("site", access.sites);
  const { data: rows } = await q.order("created_at", { ascending: false });

  return (
    <>
      <PageTitle title="CV briefs" sub="Every brief a customer submits on either site, with their uploaded CV." />
      <SiteFilter active={scopedSite ?? ""} base="/admin/submissions" allowed={access.sites} />
      {(rows ?? []).length === 0 ? (
        <EmptyState>No briefs yet. They arrive here when a customer completes the intake form.</EmptyState>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-line bg-white md:overflow-x-auto">
          <table className="admin-responsive-table w-full text-left text-[13.5px]">
            <thead className="border-b border-line bg-[#f7f9fc] text-[12px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Site</th>
                <th className="px-4 py-3 font-semibold">Target role</th>
                <th className="px-4 py-3 font-semibold">CV</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {(rows ?? []).map((s) => (
                <tr key={s.id} className="hover:bg-[#f7f9fc]">
                  <td data-label="Name" className="px-4 py-3">
                    <Link href={`/admin/submissions/${s.id}`} className="font-semibold text-brand">{s.name ?? "-"}</Link>
                    <p className="text-[12px] text-muted">{s.email ?? ""}</p>
                  </td>
                  <td data-label="Site" className="px-4 py-3"><SiteBadge site={s.site} /></td>
                  <td data-label="Target role" className="px-4 py-3 text-ink-soft">{s.target_role ?? "-"}</td>
                  <td data-label="CV" className="px-4 py-3 text-[12.5px]">{s.cv_path ? "📎 attached" : <span className="text-muted">none</span>}</td>
                  <td data-label="Status" className="px-4 py-3">{s.handled ? <Badge status="completed" label="handled" /> : <Badge status="new" label="new" />}</td>
                  <td data-label="Date" className="px-4 py-3 text-[12.5px] text-muted">{new Date(s.created_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
