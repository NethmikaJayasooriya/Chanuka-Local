"use client";

import { useState } from "react";
import { Card } from "@/components/admin/ui";

const inputCls =
  "mt-1.5 w-full rounded-[10px] border border-line-strong bg-white px-3.5 py-2.5 text-[14px] text-ink outline-none focus:border-brand";

type Faq = { q: string; a: string };

function faqsToText(faqs?: Faq[] | null) {
  return (faqs ?? []).map((f) => `Q: ${f.q}\nA: ${f.a}`).join("\n\n");
}

function countFaqs(text: string) {
  return (text.match(/^\s*q[:.)]/gim) ?? []).length;
}

const words = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);

/**
 * SEO + AEO fields for any admin-authored page, with a live quality
 * gate (the architecture's "SEO Ready: YES / NO"). Nothing blocks a
 * save; the checklist tells the editor what is still weak.
 */
export function SeoAeoPanel({
  title,
  body,
  initial,
}: {
  title: string;
  body: string;
  initial?: {
    meta_title?: string | null;
    meta_description?: string | null;
    primary_keyword?: string | null;
    quick_answer?: string | null;
    faqs?: Faq[] | null;
    noindex?: boolean | null;
  };
}) {
  const [metaTitle, setMetaTitle] = useState(initial?.meta_title ?? "");
  const [metaDesc, setMetaDesc] = useState(initial?.meta_description ?? "");
  const [keyword, setKeyword] = useState(initial?.primary_keyword ?? "");
  const [qa, setQa] = useState(initial?.quick_answer ?? "");
  const [faqs, setFaqs] = useState(faqsToText(initial?.faqs));
  const [noindex, setNoindex] = useState(!!initial?.noindex);

  const effTitle = metaTitle || title;
  const kw = keyword.trim().toLowerCase();
  const plain = body.replace(/<[^>]+>/g, " ");
  const checks: Array<[string, boolean]> = [
    ["Title set", title.trim().length > 0],
    ["SEO title 30 to 60 characters", effTitle.length >= 30 && effTitle.length <= 60],
    ["Meta description 120 to 160 characters", metaDesc.length >= 120 && metaDesc.length <= 160],
    ["Primary keyword chosen", kw.length > 0],
    ["Keyword appears in the SEO title", !!kw && effTitle.toLowerCase().includes(kw)],
    ["Page content has 300+ words", words(plain) >= 300],
    ["Quick answer 40 to 70 words (for AI answers)", words(qa) >= 40 && words(qa) <= 70],
    ["At least 3 FAQs", countFaqs(faqs) >= 3],
    ["No em dashes in content", !/[–—]/.test(body + qa + faqs + metaDesc)],
    ["Indexable", !noindex],
  ];
  const passed = checks.filter(([, ok]) => ok).length;
  const ready = passed === checks.length;

  return (
    <Card>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-[13px] font-bold text-ink">SEO and AI answers</h3>
        <span
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${ready ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}
        >
          SEO Ready: {ready ? "YES" : `${passed}/${checks.length}`}
        </span>
      </div>

      <label className="mt-3 block text-[12px] font-semibold uppercase tracking-wide text-muted">Primary keyword</label>
      <input name="primary_keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} className={inputCls} placeholder="cv writing service uk" />

      <label className="mt-3 block text-[12px] font-semibold uppercase tracking-wide text-muted">
        SEO title <span className="normal-case text-muted">({effTitle.length}/60)</span>
      </label>
      <input name="meta_title" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} className={inputCls} placeholder="Leave empty to use the page title" />

      <label className="mt-3 block text-[12px] font-semibold uppercase tracking-wide text-muted">
        Meta description <span className="normal-case text-muted">({metaDesc.length}/160)</span>
      </label>
      <textarea name="meta_description" rows={2} value={metaDesc} onChange={(e) => setMetaDesc(e.target.value)} className={`${inputCls} resize-y`} />

      <label className="mt-3 block text-[12px] font-semibold uppercase tracking-wide text-muted">
        Quick answer <span className="normal-case text-muted">({words(qa)} words, aim 40 to 70)</span>
      </label>
      <textarea
        name="quick_answer"
        rows={3}
        value={qa}
        onChange={(e) => setQa(e.target.value)}
        className={`${inputCls} resize-y`}
        placeholder="Answer the page's main question in the first sentence. Shown at the top of the page and quoted by Google AI Overviews, ChatGPT and Perplexity."
      />

      <label className="mt-3 block text-[12px] font-semibold uppercase tracking-wide text-muted">
        FAQs <span className="normal-case text-muted">({countFaqs(faqs)} found)</span>
      </label>
      <textarea
        name="faqs"
        rows={8}
        value={faqs}
        onChange={(e) => setFaqs(e.target.value)}
        className={`${inputCls} resize-y font-mono text-[12.5px]`}
        placeholder={"Q: How long should a UK CV be?\nA: Two pages for most professionals...\n\nQ: ...\nA: ..."}
      />

      <label className="mt-3 flex items-center gap-2 text-[13px] text-ink">
        <input type="checkbox" name="noindex" checked={noindex} onChange={(e) => setNoindex(e.target.checked)} />
        Hide from Google (noindex)
      </label>

      <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
        {checks.map(([label, ok]) => (
          <li key={label} className={`text-[12.5px] ${ok ? "text-green-700" : "text-amber-700"}`}>
            {ok ? "✓" : "•"} {label}
          </li>
        ))}
      </ul>
    </Card>
  );
}
