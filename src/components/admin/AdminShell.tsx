"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { AdminSite } from "@/lib/supabase/guard";

const nav = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/invoices", label: "Invoices" },
  { href: "/admin/submissions", label: "CV briefs" },
  { href: "/admin/pricing", label: "Global pricing", comOnly: true },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/pages", label: "SEO Pages" },
  { href: "/admin/team", label: "Team access", ownerOnly: true },
];

export function AdminShell({
  email,
  role = "owner",
  sites = ["com", "lk", "uk"],
  children,
}: {
  email: string;
  role?: "owner" | "manager";
  sites?: AdminSite[];
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/admin";
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);

  const signOut = async () => {
    await createClient().auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-[#f4f6fa] text-ink">
      {/* Top bar (mobile) */}
      <header className="sticky top-0 z-30 flex min-h-14 items-center justify-between border-b border-line bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <span className="font-bold">Chanuka · Control centre</span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-line px-3 py-2 text-[13px] font-semibold"
          aria-controls="admin-navigation"
          aria-expanded={open}
        >
          <span aria-hidden>{open ? "✕" : "☰"}</span>
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </header>

      {open && (
        <button
          type="button"
          aria-label="Close admin menu"
          className="fixed inset-0 top-14 z-30 bg-ink/35 backdrop-blur-[1px] lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div className="lg:grid lg:min-h-screen lg:grid-cols-[240px_minmax(0,1fr)]">
        {/* Sidebar */}
        <aside
          id="admin-navigation"
          className={`${open ? "flex" : "hidden"} fixed inset-y-14 left-0 z-40 w-[min(18rem,86vw)] flex-col border-r border-line bg-white shadow-2xl lg:sticky lg:inset-auto lg:top-0 lg:flex lg:h-screen lg:w-auto lg:border-b-0 lg:shadow-none`}
        >
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-4 pb-[calc(1rem+env(safe-area-inset-bottom,0px))]">
            <Link href="/admin" className="hidden px-2 py-2 text-[16px] font-bold lg:block">
              Chanuka · Control centre
            </Link>
            {/* Rich Workspaces Card */}
            <div className="mt-3 rounded-2xl border border-line/80 bg-[#f8fafc] p-3 text-ink shadow-2xs">
              <div className="flex items-center justify-between px-1 pb-2.5">
                <div className="flex items-center gap-1.5 text-slate-500">
                  <svg
                    className="h-3.5 w-3.5 shrink-0 text-slate-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v1.069m7.5 0c-1.226-.06-2.464-.092-3.75-.092s-2.524.032-3.75.092"
                    />
                  </svg>
                  <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                    Workspaces
                  </span>
                </div>
                <span className="rounded-full bg-slate-200/80 px-2 py-0.5 text-[10.5px] font-semibold text-slate-600">
                  {sites.length} Active
                </span>
              </div>

              <div className="space-y-1">
                {sites.includes("com") && (
                  <Link
                    href="/admin?site=com"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2.5 rounded-xl p-1.5 transition-colors hover:bg-white"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-blue-100 bg-[#eff6ff] text-[#2563eb]">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px] font-bold text-slate-900 leading-tight">
                          Global Hub
                        </span>
                        <span className="rounded bg-[#dbeafe] px-1.5 py-0.5 text-[10px] font-bold text-[#1d4ed8] leading-tight">
                          .com
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-tight">
                        International USD
                      </p>
                    </div>
                  </Link>
                )}

                {sites.includes("uk") && (
                  <Link
                    href="/admin?site=uk"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2.5 rounded-xl p-1.5 transition-colors hover:bg-white"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-[#eef2ff] overflow-hidden">
                      <Image
                        src="/images/uk-flag.png"
                        alt="United Kingdom flag"
                        width={24}
                        height={16}
                        className="h-4 w-6 rounded-[2px] object-cover shadow-2xs"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px] font-bold text-slate-900 leading-tight">
                          United Kingdom
                        </span>
                        <span className="rounded bg-[#e0e7ff] px-1.5 py-0.5 text-[10px] font-bold text-[#3730a3] leading-tight">
                          .uk
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-tight">
                        British Market GBP
                      </p>
                    </div>
                  </Link>
                )}

                {sites.includes("lk") && (
                  <Link
                    href="/admin?site=lk"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2.5 rounded-xl p-1.5 transition-colors hover:bg-white"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#6b001a] bg-[#800020] p-1 overflow-hidden shadow-2xs">
                      <Image
                        src="/images/sl-lion.svg"
                        alt="Sri Lanka lion"
                        width={32}
                        height={32}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[13px] font-bold text-slate-900 leading-tight">
                          Sri Lanka
                        </span>
                        <span className="rounded bg-[#dcfce7] px-1.5 py-0.5 text-[10px] font-bold text-[#15803d] leading-tight">
                          .lk
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] font-medium text-slate-500 leading-tight">
                        Local Market LKR
                      </p>
                    </div>
                  </Link>
                )}
              </div>

              {/* Open Local Admin Live Tile */}
              <a
                href="https://chanukajeewantha.lk/admin"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 flex items-center justify-between rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-2xs transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-xs group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#f1f5f9] text-slate-600 transition-colors group-hover:bg-slate-200/80">
                    <svg
                      className="h-3.5 w-3.5 text-slate-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                  <div className="min-w-0 leading-tight">
                    <span className="block text-[12px] font-bold text-slate-900 group-hover:text-brand transition-colors">
                      Open Local Admin
                    </span>
                    <span className="block truncate font-mono text-[10px] text-slate-400 mt-0.5">
                      chanukajeewant...
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 flex-col items-center justify-center rounded-md bg-[#f1f5f9] px-2 py-1 leading-none text-center">
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-600">
                    LIVE
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 mt-0.5">↗</span>
                </div>
              </a>
            </div>
            <nav className="mt-2 space-y-1">
              {nav.filter((n) => (!("ownerOnly" in n && n.ownerOnly) || role === "owner") && (!("comOnly" in n && n.comOnly) || sites.includes("com"))).map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-[14px] font-medium transition-colors ${
                    isActive(n.href, n.exact)
                      ? "bg-brand text-white"
                      : "text-ink-soft hover:bg-[#eef1f6]"
                  }`}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto border-t border-line pt-4">
              <p className="truncate px-3 text-[12px] text-muted">{email}</p>
              <p className="px-3 pt-1 text-[11px] font-semibold uppercase tracking-wide text-brand">{role === "owner" ? "Owner · all sites" : `Manager · ${sites.map((site) => `.${site}`).join(" + ")}`}</p>
              <button
                onClick={signOut}
                className="mt-2 w-full rounded-lg px-3 py-2 text-left text-[13.5px] font-medium text-red-600 hover:bg-red-50"
              >
                Sign out
              </button>
              <Link
                href="/"
                target="_blank"
                className="mt-1 block rounded-lg px-3 py-2 text-[13px] text-muted hover:bg-[#eef1f6]"
              >
                View site ↗
              </Link>
            </div>
          </div>
        </aside>

        {/* Content */}
        <main className="min-w-0 px-3 py-5 sm:px-5 sm:py-6 lg:px-8 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
