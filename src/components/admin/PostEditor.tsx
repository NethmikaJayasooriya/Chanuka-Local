"use client";

import Link from "next/link";
import { useRef, useState, useTransition } from "react";
import { deletePost, savePost } from "@/app/admin/(panel)/actions";
import { Card } from "@/components/admin/ui";
import { SeoAeoPanel } from "@/components/admin/SeoAeoPanel";

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  body: string | null;
  body_html: string | null;
  category: string | null;
  read_minutes: number | null;
  meta_title: string | null;
  meta_description: string | null;
  status: string;
  quick_answer?: string | null;
  faqs?: Array<{ q: string; a: string }> | null;
  primary_keyword?: string | null;
  noindex?: boolean | null;
  cover_image_path: string | null;
};

const inputCls =
  "mt-1.5 w-full rounded-[10px] border border-line-strong bg-white px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-brand";

export function PostEditor({ post, coverUrl }: { post?: Post; coverUrl?: string | null }) {
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [html, setHtml] = useState(post?.body_html ?? "");
  const [htmlName, setHtmlName] = useState("");
  const [showMarkdown, setShowMarkdown] = useState(false);
  const [pending, start] = useTransition();
  const fileRef = useRef<HTMLInputElement>(null);

  const autoSlug = (t: string) => {
    setTitle(t);
    if (!post) {
      setSlug(t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"));
    }
  };

  const onHtmlFile = (file: File | null) => {
    if (!file) return;
    setHtmlName(file.name);
    const reader = new FileReader();
    reader.onload = () => setHtml(String(reader.result ?? ""));
    reader.readAsText(file);
  };

  return (
    <form action={savePost} className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
      {post && <input type="hidden" name="id" value={post.id} />}

      <div className="space-y-5">
        <Card>
          <label className="block text-[12px] font-semibold uppercase tracking-wide text-muted">Title</label>
          <input name="title" required value={title} onChange={(e) => autoSlug(e.target.value)} className={inputCls} placeholder="How to write a standout CV" />

          <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Slug (URL)</label>
          <div className="mt-1.5 flex min-w-0 flex-col gap-1.5 text-[13px] text-muted sm:flex-row sm:items-center sm:gap-1">
            <span className="shrink-0">/career-advice/</span>
            <input name="slug" value={slug} onChange={(e) => setSlug(e.target.value)} className="w-full min-w-0 flex-1 rounded-[10px] border border-line-strong bg-white px-3 py-2 text-[14px] text-ink outline-none focus:border-brand" />
          </div>

          <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Excerpt</label>
          <textarea name="excerpt" rows={2} defaultValue={post?.excerpt ?? ""} className={`${inputCls} resize-y`} placeholder="One or two sentences shown in the listing." />
        </Card>

        <Card>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-[13px] font-bold text-ink">Article content</h3>
            <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand">HTML</span>
          </div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
            Upload a designed <code>.html</code> file (or paste the HTML). It renders beautifully on the
            live blog page, keeping your styles. A full document is fine, the page wrapper is stripped automatically.
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => fileRef.current?.click()}
              className="rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-white hover:bg-brand-deep">
              Upload HTML file
            </button>
            <input ref={fileRef} type="file" accept=".html,.htm,text/html" className="hidden"
              onChange={(e) => onHtmlFile(e.target.files?.[0] ?? null)} />
            {htmlName && <span className="text-[12.5px] text-accent-deep">Loaded: {htmlName}</span>}
            {html && (
              <button type="button" onClick={() => { setHtml(""); setHtmlName(""); if (fileRef.current) fileRef.current.value = ""; }}
                className="text-[12.5px] font-semibold text-red-600">Clear</button>
            )}
          </div>

          <textarea name="body_html" rows={16} value={html} onChange={(e) => setHtml(e.target.value)}
            className={`${inputCls} mt-3 resize-y font-mono text-[12.5px] leading-relaxed`}
            placeholder={"<h2>Your heading</h2>\n<p>Paste or upload your designed article HTML here…</p>"} />

          <button type="button" onClick={() => setShowMarkdown((v) => !v)}
            className="mt-4 text-[12.5px] font-semibold text-brand">
            {showMarkdown ? "Hide" : "Or write in Markdown instead"}
          </button>
          {showMarkdown && (
            <>
              <p className="mt-2 text-[12px] text-muted">Used only when the HTML above is empty.</p>
              <textarea name="body" rows={12} defaultValue={post?.body ?? ""} className={`${inputCls} mt-2 resize-y font-mono text-[13px] leading-relaxed`} placeholder={"## Heading\n\nWrite in Markdown…"} />
            </>
          )}
          {!showMarkdown && <input type="hidden" name="body" defaultValue={post?.body ?? ""} />}
        </Card>

        <SeoAeoPanel title={title} body={html} initial={post} />
      </div>

      <div className="space-y-5">
        <Card className="h-fit">
          <label className="block text-[12px] font-semibold uppercase tracking-wide text-muted">Status</label>
          <select name="status" defaultValue={post?.status ?? "draft"} className={inputCls}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>

          <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Category</label>
          <input name="category" defaultValue={post?.category ?? ""} className={inputCls} placeholder="CV tips" />

          <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Read minutes</label>
          <input name="read_minutes" type="number" min={1} defaultValue={post?.read_minutes ?? 5} className={inputCls} />

          <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Cover image</label>
          {coverUrl && <img src={coverUrl} alt="" className="mt-2 aspect-video w-full rounded-lg object-cover" />}
          <input name="cover" type="file" accept="image/*" className="mt-2 block w-full text-[12.5px] file:mr-3 file:rounded-full file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-[12px] file:font-semibold file:text-brand" />

          <button type="submit" disabled={pending} className="mt-5 w-full rounded-full bg-brand px-5 py-3 text-[14px] font-semibold text-white hover:bg-brand-deep disabled:opacity-60">
            {post ? "Save changes" : "Create post"}
          </button>
        </Card>

        {post && (
          <Card className="h-fit">
            <p className="text-[12px] text-muted">Danger zone</p>
            <button type="button" disabled={pending}
              onClick={() => { if (confirm("Delete this post permanently?")) start(() => deletePost(post.id)); }}
              className="mt-2 w-full rounded-full border border-red-200 bg-red-50 px-5 py-2.5 text-[13.5px] font-semibold text-red-600 hover:bg-red-100 disabled:opacity-60">
              Delete post
            </button>
          </Card>
        )}
      </div>
    </form>
  );
}
