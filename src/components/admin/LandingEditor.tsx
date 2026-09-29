"use client";

import { useRef, useState, useTransition } from "react";
import { deleteLanding, saveLanding } from "@/app/admin/(panel)/actions";
import { Card } from "@/components/admin/ui";
import { SeoAeoPanel } from "@/components/admin/SeoAeoPanel";

type Landing = {
  id: string;
  section: string;
  slug: string;
  title: string;
  body_html: string | null;
  meta_title: string | null;
  meta_description: string | null;
  status: string;
  quick_answer?: string | null;
  faqs?: Array<{ q: string; a: string }> | null;
  primary_keyword?: string | null;
  noindex?: boolean | null;
  cover_image_path: string | null;
};

type SectionOpt = { value: string; label: string; basePath: string };

const inputCls =
  "mt-1.5 w-full rounded-[10px] border border-line-strong bg-white px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-brand";

export function LandingEditor({
  sections,
  page,
  coverUrl,
}: {
  sections: SectionOpt[];
  page?: Landing;
  coverUrl?: string | null;
}) {
  const [section, setSection] = useState(page?.section ?? sections[0]?.value ?? "");
  const [slug, setSlug] = useState(page?.slug ?? "");
  const [title, setTitle] = useState(page?.title ?? "");
  const [html, setHtml] = useState(page?.body_html ?? "");
  const [htmlName, setHtmlName] = useState("");
  const [pending, start] = useTransition();
  const fileRef = useRef<HTMLInputElement>(null);

  const base = sections.find((s) => s.value === section)?.basePath ?? "";

  const autoSlug = (t: string) => {
    setTitle(t);
    if (!page) setSlug(t.toLowerCase().trim().replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"));
  };

  const onHtmlFile = (file: File | null) => {
    if (!file) return;
    setHtmlName(file.name);
    const reader = new FileReader();
    reader.onload = () => setHtml(String(reader.result ?? ""));
    reader.readAsText(file);
  };

  return (
    <form action={saveLanding} className="grid min-w-0 gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
      {page && <input type="hidden" name="id" value={page.id} />}

      <div className="space-y-5">
        <Card>
          <label className="block text-[12px] font-semibold uppercase tracking-wide text-muted">Title</label>
          <input name="title" required value={title} onChange={(e) => autoSlug(e.target.value)} className={inputCls} placeholder="CV Writing Services in the UK" />

          <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Page type</label>
          <select name="section" value={section} onChange={(e) => setSection(e.target.value)} className={inputCls} disabled={!!page}>
            {sections.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
          </select>

          <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Slug (URL)</label>
          <div className="mt-1.5 flex min-w-0 flex-col gap-1.5 text-[13px] text-muted sm:flex-row sm:items-center sm:gap-1">
            <span className="shrink-0 break-all">{base}/</span>
            <input name="slug" value={slug} onChange={(e) => setSlug(e.target.value)} required className="w-full min-w-0 flex-1 rounded-[10px] border border-line-strong bg-white px-3 py-2 text-[14px] text-ink outline-none focus:border-brand" placeholder="uk" />
          </div>
          <p className="mt-1.5 break-all text-[12px] text-muted">Live at <span className="font-medium text-ink">{base}/{slug || "…"}</span></p>
        </Card>

        <Card>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-[13px] font-bold text-ink">Page content</h3>
            <span className="rounded-full bg-brand-soft px-2.5 py-1 text-[11px] font-semibold text-brand">HTML</span>
          </div>
          <p className="mt-1 text-[12.5px] leading-relaxed text-muted">
            Upload a designed <code>.html</code> file (or paste it). It renders at the URL above in the site
            layout. A full document is fine, the wrapper is stripped and your styles kept.
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <button type="button" onClick={() => fileRef.current?.click()} className="rounded-full bg-brand px-4 py-2 text-[13px] font-semibold text-white hover:bg-brand-deep">Upload HTML file</button>
            <input ref={fileRef} type="file" accept=".html,.htm,text/html" className="hidden" onChange={(e) => onHtmlFile(e.target.files?.[0] ?? null)} />
            {htmlName && <span className="text-[12.5px] text-accent-deep">Loaded: {htmlName}</span>}
            {html && <button type="button" onClick={() => { setHtml(""); setHtmlName(""); if (fileRef.current) fileRef.current.value=""; }} className="text-[12.5px] font-semibold text-red-600">Clear</button>}
          </div>
          <textarea name="body_html" rows={16} value={html} onChange={(e) => setHtml(e.target.value)} className={`${inputCls} mt-3 resize-y font-mono text-[12.5px] leading-relaxed`} placeholder={"<h1>CV Writing in the UK</h1>\n<p>Paste or upload your designed page HTML…</p>"} />
        </Card>

        <SeoAeoPanel title={title} body={html} initial={page} />
      </div>

      <div className="space-y-5">
        <Card className="h-fit">
          <label className="block text-[12px] font-semibold uppercase tracking-wide text-muted">Status</label>
          <select name="status" defaultValue={page?.status ?? "draft"} className={inputCls}>
            <option value="draft">Draft</option>
            <option value="published">Published (goes live)</option>
          </select>

          <label className="mt-4 block text-[12px] font-semibold uppercase tracking-wide text-muted">Cover image (optional)</label>
          {coverUrl && <img src={coverUrl} alt="" className="mt-2 aspect-video w-full rounded-lg object-cover" />}
          <input name="cover" type="file" accept="image/*" className="mt-2 block w-full text-[12.5px] file:mr-3 file:rounded-full file:border-0 file:bg-brand-soft file:px-3 file:py-1.5 file:text-[12px] file:font-semibold file:text-brand" />

          <button type="submit" disabled={pending} className="mt-5 w-full rounded-full bg-brand px-5 py-3 text-[14px] font-semibold text-white hover:bg-brand-deep disabled:opacity-60">
            {page ? "Save changes" : "Create page"}
          </button>
        </Card>

        {page && (
          <Card className="h-fit">
            <p className="text-[12px] text-muted">Danger zone</p>
            <button type="button" disabled={pending}
              onClick={() => { if (confirm("Delete this page permanently? The built-in page (if any) will show again.")) start(() => deleteLanding(page.id)); }}
              className="mt-2 w-full rounded-full border border-red-200 bg-red-50 px-5 py-2.5 text-[13.5px] font-semibold text-red-600 hover:bg-red-100 disabled:opacity-60">
              Delete page
            </button>
          </Card>
        )}
      </div>
    </form>
  );
}
