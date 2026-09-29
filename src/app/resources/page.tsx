import type { Metadata } from "next";
import Link from "next/link";
import { ConversionFooter } from "@/components/ConversionFooter";
import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/Seo";
import { resources } from "@/lib/content/resources";
import { itemListLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Free CV, LinkedIn and Interview Checklists",
  description:
    "Free, practical checklists: CV pre-submission, ATS check, LinkedIn, cover letter, interview prep, applying abroad and 100+ action verbs. No sign-up needed.",
  path: "/resources",
});

const guides = [
  { href: "/career-advice/how-to-write-a-professional-cv", label: "How to write a professional CV" },
  { href: "/career-advice/how-ats-reads-your-cv", label: "How an ATS reads your CV" },
  { href: "/career-advice/responsibilities-into-achievements", label: "Turning duties into achievements" },
  { href: "/career-advice/how-long-should-a-cv-be", label: "How long should a CV be" },
  { href: "/career-advice/cv-for-a-new-market", label: "Writing a CV for a new market" },
  { href: "/cv-samples", label: "CV structures by type" },
  { href: "/international-job-seekers", label: "CV conventions by country" },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free resources"
        title="Checklists you can use right now."
        lead="No sign-up, no email wall. These are the same checks used on real work, written out so you can run them yourself. If you would rather have it done, the service is one click away."
        crumbs={[{ label: "Resources" }]}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <JsonLd data={itemListLd("Free career resources", resources.map((r) => ({ name: r.title, path: `/resources/${r.slug}` })))} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((r) => (
              <Link
                key={r.slug}
                href={`/resources/${r.slug}`}
                className="group flex h-full flex-col rounded-[16px] border border-line bg-surface p-7 transition-colors hover:border-brand"
              >
                <h2 className="display text-[20px] text-ink">{r.title}</h2>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-muted">{r.lead}</p>
                <span className="mt-5 text-[13.5px] font-semibold text-brand transition-transform group-hover:translate-x-0.5">
                  Open the {r.groups.length}-part {r.slug === "action-verbs" ? "list" : "checklist"} →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 rounded-[16px] border border-line bg-sand/40 p-7">
            <h2 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
              Longer guides
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {guides.map((g) => (
                <li key={g.href}>
                  <Link
                    href={g.href}
                    className="inline-block rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] text-ink-soft transition-colors hover:border-brand hover:text-brand"
                  >
                    {g.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ConversionFooter
        heading="Rather have it done for you?"
        body="Build your package, choose your level and delivery speed, and see the price before you commit."
        related={[
          { href: "/cv-writing", label: "CV writing" },
          { href: "/cv-review", label: "CV review" },
          { href: "/career-advice", label: "Career advice" },
        ]}
      />
    </>
  );
}
