"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { AdminSite } from "@/lib/supabase/guard";
import { SITE_KEY } from "@/lib/site";

const nav = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/orders", label: "Orders" },
  { href: "/order-workflow?role=seller", label: "Order Workflow" },
  { href: "/admin/invoices", label: "Invoices" },
  { href: "/admin/submissions", label: "CV briefs" },
  { href: "/admin/pricing", label: "Global pricing", comOnly: true },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/pages", label: "SEO Pages" },
  { href: "/admin/team", label: "Team access", ownerOnly: true },
];

export function AdminShell({
  email,
  role,
  sites,
  children,
}: {
  email: string;
  role: "owner" | "manager";
  sites: AdminSite[];
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "/admin";
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [currentSite, setCurrentSite] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setCurrentSite(params.get("site") || "");
    }
  }, [pathname]);

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
            <Link href="/admin" className="hidden px-2 py-2 text-[16px] font-bold lg:block text-ink hover:text-brand transition-colors">
              Chanuka · Control centre
            </Link>

            {/* WORKSPACES SECTION */}
            <div className="mt-3 rounded-2xl border border-line-strong/60 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] p-2.5 shadow-2xs">
              <div className="flex items-center justify-between px-2 pt-0.5 pb-2">
                <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
                  <svg className="h-3 w-3 text-brand/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>Workspaces</span>
                </div>
                <span className="rounded-full bg-line/80 px-1.5 py-0.5 text-[9px] font-bold text-muted">
                  {sites.length} Active
                </span>
              </div>

              <div className="space-y-1">
                {/* 1. Global (.com) */}
                {sites.includes("com") && (
                  <Link
                    href="/admin?site=com"
                    onClick={() => {
                      setCurrentSite("com");
                      setOpen(false);
                    }}
                    className={`group relative flex items-center justify-between rounded-xl px-2.5 py-2 transition-all duration-200 ${
                      currentSite === "com"
                        ? "bg-white shadow-xs border border-blue-200 ring-1 ring-blue-500/25"
                        : "hover:bg-white hover:shadow-2xs hover:border-line border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105 ${
                          currentSite === "com"
                            ? "bg-blue-600 text-white border-blue-600 shadow-2xs"
                            : "bg-blue-50 text-blue-600 border-blue-200/70"
                        }`}
                      >
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="2" y1="12" x2="22" y2="12" />
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                      </div>
                      <div className="min-w-0 text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[13px] font-bold text-ink leading-tight group-hover:text-blue-700 transition-colors">
                            Global Hub
                          </span>
                          <span className="rounded bg-blue-100/90 px-1.5 py-0.5 text-[10px] font-mono font-bold text-blue-700 border border-blue-200/60 leading-none">
                            .com
                          </span>
                        </div>
                        <p className="mt-0.5 text-[10.5px] text-muted truncate leading-none">
                          International USD
                        </p>
                      </div>
                    </div>
                    {currentSite === "com" ? (
                      <span className="flex h-2 w-2 rounded-full bg-blue-600 ring-4 ring-blue-100" />
                    ) : (
                      <span className="text-[12px] text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    )}
                  </Link>
                )}

                {/* 2. Sri Lanka (.lk) */}
                {sites.includes("lk") && (
                  <Link
                    href="/admin?site=lk"
                    onClick={() => {
                      setCurrentSite("lk");
                      setOpen(false);
                    }}
                    className={`group relative flex items-center justify-between rounded-xl px-2.5 py-2 transition-all duration-200 ${
                      currentSite === "lk"
                        ? "bg-white shadow-xs border border-emerald-200 ring-1 ring-emerald-500/25"
                        : "hover:bg-white hover:shadow-2xs hover:border-line border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-transform duration-200 group-hover:scale-105 p-1 overflow-hidden ${
                          currentSite === "lk"
                            ? "bg-[#8d153a] border-[#6b0f2a] shadow-2xs ring-1 ring-[#8d153a]/40"
                            : "bg-[#8d153a] border-[#6b0f2a] shadow-2xs"
                        }`}
                      >
                        <Image
                          src="/images/sri-lanka-lion.png"
                          alt="Sri Lanka Lion"
                          width={28}
                          height={23}
                          className="h-5 w-auto object-contain"
                          priority
                        />
                      </div>
                      <div className="min-w-0 text-left">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[13px] font-bold text-ink leading-tight group-hover:text-emerald-800 transition-colors">
                            Sri Lanka
                          </span>
                          <span className="rounded bg-emerald-100/90 px-1.5 py-0.5 text-[10px] font-mono font-bold text-emerald-800 border border-emerald-200/60 leading-none">
                            .lk
                          </span>
                        </div>
                        <p className="mt-0.5 text-[10.5px] text-muted truncate leading-none">
                          Local Market LKR
                        </p>
                      </div>
                    </div>
                    {currentSite === "lk" ? (
                      <span className="flex h-2 w-2 rounded-full bg-emerald-600 ring-4 ring-emerald-100" />
                    ) : (
                      <span className="text-[12px] text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    )}
                  </Link>
                )}

                {/* 3. Open Local Admin Launcher */}
                {sites.includes("lk") && (
                  <a
                    href="https://chanukajeewantha.lk/admin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-1.5 flex items-center justify-between rounded-xl border border-line-strong/60 bg-white/70 px-2.5 py-2 text-muted transition-all duration-200 hover:border-brand/40 hover:bg-white hover:text-ink hover:shadow-2xs"
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-sand text-ink-soft transition-colors group-hover:bg-brand group-hover:text-white">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                      <div className="min-w-0 text-left">
                        <p className="text-[11.5px] font-semibold text-ink-soft group-hover:text-brand leading-none">
                          Open Local Admin
                        </p>
                        <p className="mt-0.5 text-[9.5px] text-muted font-mono leading-none truncate">
                          chanukajeewantha.lk
                        </p>
                      </div>
                    </div>
                    <span className="rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-line/60 text-muted group-hover:bg-brand/10 group-hover:text-brand transition-colors">
                      Live ↗
                    </span>
                  </a>
                )}
              </div>
            </div>

            <nav className="mt-3 space-y-1">
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
