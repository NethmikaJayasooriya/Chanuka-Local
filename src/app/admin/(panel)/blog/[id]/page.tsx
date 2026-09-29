import Link from "next/link";
import { notFound } from "next/navigation";
import { PostEditor } from "@/components/admin/PostEditor";
import { PageTitle } from "@/components/admin/ui";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function EditPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!supabaseConfigured()) return null;
  const db = createAdminClient();
  const { data: post } = await db.from("blog_posts").select("*").eq("id", id).maybeSingle();
  if (!post) notFound();

  let coverUrl: string | null = null;
  if (post.cover_image_path) {
    const { data } = db.storage.from("blog").getPublicUrl(post.cover_image_path);
    coverUrl = data.publicUrl;
  }

  return (
    <>
      <Link href="/admin/blog" className="text-[13px] font-semibold text-brand">← Blog</Link>
      <div className="mt-3">
        <PageTitle title="Edit post" />
      </div>
      <PostEditor post={post} coverUrl={coverUrl} />
    </>
  );
}
