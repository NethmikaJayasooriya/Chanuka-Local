"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { site } from "@/lib/site";
import { MailIcon } from "./CountryFlags";

const columns = [
  {
    title: "Services",
    links: [
      { label: "ATS Friendly CV", href: "/cv-writing" },
      { label: "LinkedIn Optimization", href: "/linkedin-optimisation" },
      { label: "Cover Letter Writing", href: "/cover-letter-writing" },
      { label: "CV Review & Audit", href: "/cv-review" },
      { label: "CV Samples & Formats", href: "/cv-samples" },
    ],
  },
  {
    title: "Guidance",
    links: [
      { label: "Job roles", href: "/job-roles" },
      { label: "Industries", href: "/industries" },
      { label: "Career levels", href: "/career-levels" },
      { label: "Career situations", href: "/career-situations" },
      { label: "Career advice", href: "/career-advice" },
      { label: "Free resources", href: "/resources" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Packages & Prices", href: "/packages" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Verified Reviews", href: "/reviews" },
      { label: "About Chanuka", href: "/about" },
      { label: "Author profile", href: "/about/chanuka-jeewantha" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Terms and conditions", href: "/terms-and-conditions" },
      { label: "Refund policy", href: "/refund-policy" },
      { label: "Cookie policy", href: "/cookie-policy" },
      { label: "Editorial policy", href: "/editorial-policy" },
    ],
  },
];

export function Footer() {
  const pathname = usePathname() ?? "/";
  if (pathname.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-line bg-paper pb-28 sm:pb-24 pt-14 lg:pb-14 pb-safe">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 lg:max-w-xs">
            <Link
              href="/"
              aria-label="Chanuka Jeewantha home"
              className="group inline-flex items-center gap-2.5 tracking-tight font-display text-[21px] font-bold text-ink hover:opacity-95 transition-opacity"
            >
              <img src="/logo-mark.png" alt="" width={476} height={310} className="brand-mark shrink-0" />
              <span className="inline-flex items-baseline">
                <span className="tracking-[-0.03em] font-extrabold">Chanuka Jeewantha</span>
                <span className="text-accent text-[26px] leading-none ml-0.5 font-bold">.</span>
              </span>
            </Link>
            <p className="mt-3 text-[14px] leading-relaxed text-muted">{site.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-brand break-all sm:break-normal"
            >
              <MailIcon className="h-4 w-4 text-accent shrink-0" />
              <span>{site.email}</span>
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-muted">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-ink-soft transition-colors hover:text-brand"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[12.5px] text-muted">
            © {new Date().getFullYear()} {site.name}. All rights reserved. Prices in LKR.
          </p>
          <p className="text-[12.5px] text-muted">Personal Executive Brand · Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
