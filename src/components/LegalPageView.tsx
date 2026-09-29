import { PageHeader } from "./PageHeader";
import type { LegalDoc } from "@/lib/legal";

export function LegalPageView({ doc }: { doc: LegalDoc }) {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title={doc.title}
        lead={doc.lead}
        crumbs={[{ label: doc.title }]}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-[13px] text-muted">Last updated: {doc.updated}</p>

          <div className="mt-10 space-y-10">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="display text-[21px] text-ink">{s.heading}</h2>
                <div className="mt-3 space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-[15.5px] leading-relaxed text-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
