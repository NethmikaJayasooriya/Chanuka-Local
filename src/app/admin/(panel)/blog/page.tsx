import Link from "next/link";
import { Badge, EmptyState, PageTitle } from "@/components/admin/ui";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function BlogAdmin() {
  if (!supabaseConfigured()) return null;
  const db = createAdminClient();
  const { data: posts } = await db
    .from("blog_posts")
    .select("id,title,slug,category,status,updated_at")
    .order("updated_at", { ascending: false });

  return (
    <>
      <div className="mb-6 flex flex-col items-start gap-3 sm:flex-row sm:items-start sm:justify-between">
        <PageTitle title="Blog" sub="Write and publish articles. Published posts appear on the site." />
        <Link href="/admin/blog/new" className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-brand-deep">
          New post
        </Link>
      </div>

      {(posts ?? []).length === 0 ? (
        <EmptyState>No posts yet. Create your first article.</EmptyState>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-line bg-white md:overflow-x-auto">
          <table className="admin-responsive-table w-full text-left text-[13.5px]">
            <thead className="border-b border-line bg-[#f7f9fc] text-[12px] uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Title</th>
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
