import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";
import { MailIcon } from "@/components/CountryFlags";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description: "Ask a question about CV writing, LinkedIn optimisation or cover letters. Replies come from Chanuka directly, usually within 12 hours.",
  path: "/contact",
});

const channels = [
  {
    label: "Official Client Email",
    value: site.email,
    note: "Primary channel for CV reviews, package advice, and consultation requests. Answered directly by Chanuka.",
    href: `mailto:${site.email}?subject=${encodeURIComponent("Client Inquiry - International Career Branding")}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Ask before you order. That is what it is for."
        lead="Questions about which package fits, whether your deadline is possible, or whether you need a rewrite at all. The reply comes from me, usually within 12 hours."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="py-10 sm:py-14 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <h2 className="display text-[22px] text-ink">Direct channels</h2>
            <ul className="mt-6 space-y-4">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="flex items-start gap-4 rounded-[14px] border border-line bg-surface p-5 sm:p-6 transition-all hover:border-brand hover:shadow-xs"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-full bg-accent-soft border border-accent/25 flex items-center justify-center text-accent-deep mt-0.5">
                      <MailIcon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                        {c.label}
                      </p>
                      <p className="font-sans font-bold mt-1 text-[16px] sm:text-[19px] text-ink break-all sm:break-normal">{c.value}</p>
                      <p className="mt-1.5 text-[13.5px] text-muted">{c.note}</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[14px] border border-line bg-sand/50 p-5 sm:p-6">
              <h3 className="text-[14.5px] font-semibold text-ink">
                Already know what you need?
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted">
                You do not need to contact me first. Build your package, see the price and
                order. The brief is collected after checkout.
              </p>
              <Link
                href="/#build"
                className="mt-4 block sm:inline-block w-full sm:w-auto text-center rounded-full bg-brand px-6 py-3 text-[14px] font-semibold text-paper transition-colors hover:bg-brand-deep"
              >
                Build your package
              </Link>
            </div>
          </div>

          <div>
            <h2 className="display text-[22px] text-ink">What to include</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              A useful first message answers these four things. With them, you get a real
              answer instead of a request for more information.
            </p>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {[
                ["Your target role", "The job title you are actually applying to."],
                ["Your target market", "The country you are applying into, wherever it is."],
                ["Your experience", "Roughly how many years, and at what level."],
                ["Your deadline", "If an advert closes soon, say so in the first message."],
              ].map(([title, body], i) => (
                <li key={title} className="flex gap-4 py-4">
                  <span className="num-badge h-6 px-2 rounded-md bg-accent-soft border border-accent/25 text-[11px] text-accent-deep shrink-0 mt-0.5">
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-[14.5px] font-semibold text-ink">{title}</p>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-muted">{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-6 text-[13px] leading-relaxed text-muted">
              Online service across Sri Lanka and for Sri Lankans overseas. Messages are answered in order, and
              a reply within 12 hours is the standard, not a promise made per message.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
