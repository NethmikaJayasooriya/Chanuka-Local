import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { ConversionFooter } from "@/components/ConversionFooter";
import { FaqList } from "@/components/FaqList";
import { PageHeader } from "@/components/PageHeader";
import { faqGroups } from "@/lib/faqs";
import { JsonLd } from "@/components/Seo";
import { faqLd } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Frequently asked questions",
  description: "Pricing, delivery times, revisions, ATS, privacy and what to expect from a CV writing, LinkedIn or cover letter order.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqLd(faqGroups.flatMap((g) => g.items))} />
      <PageHeader
        eyebrow="FAQ"
        title="Everything people ask before they order."
        lead="If your question is not answered here, message me directly. The reply comes from me, not from a support queue."
        crumbs={[{ label: "FAQ" }]}
        primary={{ href: "/#build", label: "Build your package" }}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page space-y-14">
          {faqGroups.map((group) => (
            <div key={group.title} className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
              <h2 className="display text-[22px] leading-snug text-ink lg:sticky lg:top-24 lg:self-start">
                {group.title}
              </h2>
              <FaqList items={group.items} />
            </div>
          ))}
        </div>
      </section>

      <ConversionFooter
        heading="Still deciding?"
        body="Build a package to see the exact price, or send a question and get a straight answer."
        related={[
          { href: "/packages", label: "Packages and pricing" },
          { href: "/how-it-works", label: "How it works" },
          { href: "/refund-policy", label: "Refund policy" },
          { href: "/reviews", label: "Reviews" },
        ]}
      />
    </>
  );
}
