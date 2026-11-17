"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { AdminSite } from "@/lib/supabase/guard";

const WORKSPACE_DATA: Record<
  AdminSite,
  {
    name: string;
    badge: string;
    badgeBg: string;
    badgeText: string;
    subtitle: string;
    icon: React.ReactNode;
  }
> = {
  com: {
    name: "Global Hub",
    badge: ".com",
    badgeBg: "bg-blue-50 border-blue-200/60",
    badgeText: "text-blue-700",
    subtitle: "International · USD",
    icon: (
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-[#eff6ff] text-[#2563eb]">
        <svg
          className="h-4 w-4"
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
    ),
  },
  uk: {
    name: "United Kingdom",
    badge: ".uk",
    badgeBg: "bg-indigo-50 border-indigo-200/60",
    badgeText: "text-indigo-700",
    subtitle: "British Market · GBP",
    icon: (
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-indigo-100 bg-[#eef2ff] overflow-hidden">
        <Image
          src="/images/uk-flag.png"
          alt="United Kingdom flag"
          width={20}
          height={14}
          className="h-3.5 w-5 rounded-[2px] object-cover shadow-2xs"
        />
      </div>
    ),
  },
  lk: {
    name: "Sri Lanka",
    badge: ".lk",
    badgeBg: "bg-emerald-50 border-emerald-200/60",
    badgeText: "text-emerald-700",
    subtitle: "Local Market · LKR",
    icon: (
      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#6b001a] bg-[#800020] p-0.5 overflow-hidden shadow-2xs">
        <Image
          src="/images/sl-lion.svg"
          alt="Sri Lanka lion"
          width={24}
          height={24}
          className="h-full w-full object-contain"
        />
      </div>
    ),
  },
};

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
  const [currentSite, setCurrentSite] = useState<AdminSite>(sites[0] || "lk");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const s = params.get("site") as AdminSite | null;
      if (s && sites.includes(s)) {
        setCurrentSite(s);
      }
    }
  }, [pathname, sites]);

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
            {/* Static Workspace Containers */}
            <div className="mt-3">
              <div className="flex items-center justify-between px-1 pb-1.5">
                <span className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-slate-400">
                  Workspaces
                </span>
                <span className="rounded-full bg-slate-200/70 px-2 py-0.5 text-[9.5px] font-semibold text-slate-600">
                  {sites.length} Active
                </span>
              </div>

              <div className="space-y-1.5">
                {/* Global Hub (.com) */}
                {sites.includes("com") && (
                  <Link
                    href="/admin?site=com"
                    onClick={() => {
                      setCurrentSite("com");
                      setOpen(false);
                    }}
                    className={`group flex w-full items-center justify-between gap-2 rounded-xl border px-2.5 py-2 transition-all ${
                      currentSite === "com"
                        ? "border-slate-300 bg-white shadow-2xs ring-1 ring-black/5"
                        : "border-line/90 bg-[#f8fafc] text-slate-700 hover:border-slate-300 hover:bg-white hover:shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-blue-100 bg-[#eff6ff] text-[#2563eb]">
                        <svg
                          className="h-4 w-4"
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
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="truncate text-[13px] font-bold text-slate-900 group-hover:text-brand transition-colors">
                          Global Hub
                        </span>
                        <span className="rounded border border-blue-200/60 bg-blue-50 px-1.5 py-0.2 text-[9.5px] font-bold text-blue-700 shrink-0">
                          .com
                        </span>
                      </div>
                    </div>
                    {currentSite === "com" ? (
                      <span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 shrink-0" />
                    ) : (
                      <span className="text-slate-300 text-xs shrink-0 transition-colors group-hover:text-slate-500">
                        →
                      </span>
                    )}
                  </Link>
                )}

                {/* United Kingdom (.uk) */}
                {sites.includes("uk") && (
                  <Link
                    href="/admin?site=uk"
                    onClick={() => {
                      setCurrentSite("uk");
                      setOpen(false);
                    }}
                    className={`group flex w-full items-center justify-between gap-2 rounded-xl border px-2.5 py-2 transition-all ${
                      currentSite === "uk"
                        ? "border-slate-300 bg-white shadow-2xs ring-1 ring-black/5"
                        : "border-line/90 bg-[#f8fafc] text-slate-700 hover:border-slate-300 hover:bg-white hover:shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-indigo-100 bg-[#eef2ff] overflow-hidden">
                        <Image
                          src="/images/uk-flag.png"
                          alt="United Kingdom flag"
                          width={20}
                          height={14}
                          className="h-3.5 w-5 rounded-[2px] object-cover shadow-2xs"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="truncate text-[13px] font-bold text-slate-900 group-hover:text-brand transition-colors">
                          United Kingdom
                        </span>
                        <span className="rounded border border-indigo-200/60 bg-indigo-50 px-1.5 py-0.2 text-[9.5px] font-bold text-indigo-700 shrink-0">
                          .uk
                        </span>
                      </div>
                    </div>
                    {currentSite === "uk" ? (
                      <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0" />
                    ) : (
                      <span className="text-slate-300 text-xs shrink-0 transition-colors group-hover:text-slate-500">
                        →
                      </span>
                    )}
                  </Link>
                )}

                {/* Sri Lanka (.lk) */}
                {sites.includes("lk") && (
                  <Link
                    href="/admin?site=lk"
                    onClick={() => {
                      setCurrentSite("lk");
                      setOpen(false);
                    }}
                    className={`group flex w-full items-center justify-between gap-2 rounded-xl border px-2.5 py-2 transition-all ${
                      currentSite === "lk"
                        ? "border-slate-300 bg-white shadow-2xs ring-1 ring-black/5"
                        : "border-line/90 bg-[#f8fafc] text-slate-700 hover:border-slate-300 hover:bg-white hover:shadow-2xs"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[#6b001a] bg-[#800020] p-0.5 overflow-hidden shadow-2xs">
                        <Image
                          src="/images/sl-lion.svg"
                          alt="Sri Lanka lion"
                          width={24}
                          height={24}
                          className="h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className="truncate text-[13px] font-bold text-slate-900 group-hover:text-brand transition-colors">
                          Sri Lanka
                        </span>
                        <span className="rounded border border-emerald-200/60 bg-emerald-50 px-1.5 py-0.2 text-[9.5px] font-bold text-emerald-700 shrink-0">
                          .lk
                        </span>
                      </div>
                    </div>
                    {currentSite === "lk" ? (
                      <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    ) : (
                      <span className="text-slate-300 text-xs shrink-0 transition-colors group-hover:text-slate-500">
                        →
                      </span>
                    )}
                  </Link>
                )}

                {/* Live Admin Shortcut Container */}
                <a
                  href="https://chanukajeewantha.com/admin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex w-full items-center justify-between gap-2 rounded-xl border border-line/90 bg-[#f8fafc] px-2.5 py-2 transition-all hover:border-slate-300 hover:bg-white hover:shadow-2xs"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 shadow-2xs group-hover:border-slate-300">
                      <svg
                        className="h-3.5 w-3.5"
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
                    <span className="truncate text-[12.5px] font-bold text-slate-800 group-hover:text-brand transition-colors">
                      Open .com Global Admin
                    </span>
                  </div>
                  <span className="shrink-0 rounded bg-slate-200/70 px-1.5 py-0.2 text-[9px] font-bold text-slate-600 transition-colors group-hover:bg-brand group-hover:text-white">
                    LIVE ↗
                  </span>
                </a>
              </div>
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
