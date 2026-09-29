import Link from "next/link";
import { PostEditor } from "@/components/admin/PostEditor";
import { PageTitle } from "@/components/admin/ui";

export default function NewPost() {
  return (
    <>
      <Link href="/admin/blog" className="text-[13px] font-semibold text-brand">← Blog</Link>
      <div className="mt-3">
        <PageTitle title="New post" />
      </div>
      <PostEditor />
    </>
  );
}
