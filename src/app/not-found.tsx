import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

const links = [
  { href: "/services", label: "All services" },
  { href: "/packages", label: "Packages and pricing" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="That page is not here."
        lead="The link may be old, or the page may have moved. Everything worth reading is one click away below."
        primary={{ href: "/", label: "Back to home" }}
      />

      <section className="py-14 lg:py-20">
        <div className="container-page">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
            Try one of these
          </p>
          <ul className="mt-5 flex flex-wrap gap-2.5">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-block rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] text-ink-soft transition-colors hover:border-brand hover:text-brand"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
