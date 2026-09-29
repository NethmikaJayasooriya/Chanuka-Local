import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { AnswerBox, FaqSection, JsonLd, KeyFacts } from "@/components/Seo";
import { articles } from "@/lib/articles";
import { authorProfile } from "@/lib/content/resources";
import { AUTHOR_PATH, PERSON_ID, abs, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: authorProfile.metaTitle,
  description: authorProfile.metaDescription,
  path: AUTHOR_PATH,
});

export default function AuthorPage() {
  const latest = [...articles].sort((a, b) => (b.updated ?? "").localeCompare(a.updated ?? "")).slice(0, 6);
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: abs(AUTHOR_PATH),
          mainEntity: { "@id": PERSON_ID },
        }}
      />
      <PageHeader
        eyebrow="Author"
        title={authorProfile.h1}
        lead={authorProfile.lead}
        crumbs={[{ label: "About", href: "/about" }, { label: "Chanuka Jeewantha" }]}
      />
      <AnswerBox answer={authorProfile.quickAnswer} label="Who is Chanuka Jeewantha?" />
      <section className="py-12 lg:py-16">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="space-y-5">
            {authorProfile.bio.map((p, i) => (
              <p key={i} className="text-[16.5px] leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
          </div>
          <KeyFacts items={authorProfile.facts} title="At a glance" />
        </div>
      </section>
      <section className="border-y border-line bg-surface py-12 lg:py-16">
        <div className="container-page">
          <p className="eyebrow">Expertise</p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {authorProfile.expertise.map((e) => (
              <li key={e} className="rounded-full border border-line bg-paper px-4 py-2 text-[13.5px] text-ink-soft">
                {e}
              </li>
            ))}
          </ul>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {authorProfile.howIWork.map((h) => (
              <div key={h.title} className="rounded-[14px] border border-line bg-paper p-6">
                <h2 className="display text-[17px] text-ink">{h.title}</h2>
                <p className="mt-2.5 text-[14px] leading-relaxed text-muted">{h.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-[14px] text-muted">
            How content on this site is researched and kept current:{" "}
            <Link href="/editorial-policy" className="font-semibold text-brand">
              editorial policy
            </Link>
            .
          </p>
        </div>
      </section>
      <section className="py-12 lg:py-16">
        <div className="container-page">
          <p className="eyebrow">Latest writing</p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {latest.map((a) => (
              <Link key={a.slug} href={`/career-advice/${a.slug}`} className="group rounded-[14px] border border-line bg-surface p-5 transition-colors hover:border-brand">
                <p className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-accent-deep">{a.category}</p>
                <h3 className="display mt-2 text-[16px] leading-snug text-ink">{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FaqSection faqs={authorProfile.faqs} tone="surface" />
      <ConversionFooter heading="Work with Chanuka directly." />
    </>
  );
}
