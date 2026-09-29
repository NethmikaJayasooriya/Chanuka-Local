import Link from "next/link";
import { FaqList } from "./FaqList";
import { homeFaqs } from "@/lib/faqs";
import { JsonLd } from "./Seo";
import { faqLd } from "@/lib/seo";

export function Faq() {
  return (
    <section id="faq" className="relative isolate scroll-mt-20 overflow-hidden border-y border-line bg-surface py-14 lg:py-24">
      <JsonLd data={faqLd(homeFaqs)} />
      <div aria-hidden className="pointer-events-none absolute -left-28 -top-28 -z-10 h-96 w-96 rounded-full bg-brand-soft/80 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 right-0 -z-10 h-80 w-80 rounded-full bg-sand/80 blur-3xl" />
      <div className="container-page relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="reveal lg:sticky lg:top-24 lg:self-start">
          <p className="eyebrow">Questions</p>
          <h2 className="display mt-3 text-[clamp(1.75rem,3.6vw,2.5rem)] text-ink">
            Before you order.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-muted">
            Anything not covered here, message me directly. You will get a reply from me,
            not from a bot.
          </p>
          <Link
            href="/faq"
            className="mt-5 inline-block text-[14px] font-semibold text-brand transition-transform hover:translate-x-0.5"
          >
            Read all questions →
          </Link>
        </div>

        <div className="reveal d1">
          <FaqList items={homeFaqs} />
        </div>
      </div>
    </section>
  );
}
