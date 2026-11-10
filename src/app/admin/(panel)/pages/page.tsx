import Link from "next/link";
import { Badge, EmptyState, PageTitle } from "@/components/admin/ui";
import { SiteFilter, SiteBadge } from "@/components/admin/SiteFilter";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin, resolveAdminSite, supabaseConfigured } from "@/lib/supabase/guard";
import { LANDING_SECTIONS, landingPath } from "@/lib/landing";

export const dynamic = "force-dynamic";

const labelOf = (v: string) => LANDING_SECTIONS.find((s) => s.value === v)?.label ?? v;

export default async function PagesAdmin({ searchParams }: { searchParams: Promise<{ site?: string }> }) {
  if (!supabaseConfigured()) return null;
  const { site = "" } = await searchParams;
  const access = await requireAdmin();
  const scopedSite = resolveAdminSite(site, access);
  const db = createAdminClient();
  let q = db.from("landing_pages").select("id,site,section,slug,title,status,updated_at");
  if (scopedSite) q = q.eq("site", scopedSite); else q = q.in("site", access.sites);
  const { data: rows } = await q.order("section").order("updated_at", { ascending: false });

  return (
    <>
      <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
        <PageTitle title="SEO Pages" sub="Upload a designed HTML page for either site. Published pages go live at their URL on that site." />
        <Link href="/admin/pages/new" className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-brand-deep">New page</Link>
      </div>
      <SiteFilter active={scopedSite ?? ""} base="/admin/pages" allowed={access.sites} />

      {(rows ?? []).length === 0 ? (
        <EmptyState>No SEO pages yet. Create one and upload its HTML.</EmptyState>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-line bg-white md:overflow-x-auto">
          <table className="admin-responsive-table w-full text-left text-[13.5px]">
            <thead className="border-b border-line bg-[#f7f9fc] text-[12px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Site</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">URL</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {(rows ?? []).map((p) => (
                <tr key={p.id} className="hover:bg-[#f7f9fc]">
                  <td data-label="Title" className="px-4 py-3"><Link href={`/admin/pages/${p.id}`} className="font-semibold text-brand">{p.title}</Link></td>
                  <td data-label="Site" className="px-4 py-3"><SiteBadge site={p.site} /></td>
                  <td data-label="Type" className="px-4 py-3 text-ink-soft">{labelOf(p.section)}</td>
                  <td data-label="URL" className="break-all px-4 py-3 text-[12.5px] text-muted">{landingPath(p.section, p.slug)}</td>
                  <td data-label="Status" className="px-4 py-3"><Badge status={p.status} /></td>
                  <td data-label="Updated" className="px-4 py-3 text-[12.5px] text-muted">{new Date(p.updated_at).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
