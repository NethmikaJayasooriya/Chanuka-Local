import Link from "next/link";
import { Badge, EmptyState, PageTitle } from "@/components/admin/ui";
import { SiteFilter, SiteBadge } from "@/components/admin/SiteFilter";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin, resolveAdminSite, supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function BlogAdmin({ searchParams }: { searchParams: Promise<{ site?: string }> }) {
  if (!supabaseConfigured()) return null;
  const { site = "" } = await searchParams;
  const access = await requireAdmin();
  const scopedSite = resolveAdminSite(site, access);
  const db = createAdminClient();
  let q = db.from("blog_posts").select("id,site,title,slug,category,status,updated_at");
  if (scopedSite) q = q.eq("site", scopedSite); else q = q.in("site", access.sites);
  const { data: posts } = await q.order("updated_at", { ascending: false });

  return (
    <>
      <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
        <PageTitle title="Blog" sub="Write and publish articles for either site. Each post belongs to one site." />
        <Link href="/admin/blog/new" className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-brand-deep">
          New post
        </Link>
      </div>
      <SiteFilter active={scopedSite ?? ""} base="/admin/blog" allowed={access.sites} />

      {(posts ?? []).length === 0 ? (
        <EmptyState>No posts yet. Create your first article.</EmptyState>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-line bg-white md:overflow-x-auto">
          <table className="admin-responsive-table w-full text-left text-[13.5px]">
            <thead className="border-b border-line bg-[#f7f9fc] text-[12px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Title</th>
                <th className="px-4 py-3 font-semibold">Site</th>
                <th className="px-4 py-3 font-semibold">Category</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Updated</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {(posts ?? []).map((p) => (
                <tr key={p.id} className="hover:bg-[#f7f9fc]">
                  <td data-label="Title" className="px-4 py-3">
                    <Link href={`/admin/blog/${p.id}`} className="font-semibold text-brand">{p.title}</Link>
                    <p className="text-[12px] text-muted">/{p.slug}</p>
                  </td>
                  <td data-label="Site" className="px-4 py-3"><SiteBadge site={p.site} /></td>
                  <td data-label="Category" className="px-4 py-3 text-ink-soft">{p.category || "-"}</td>
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
