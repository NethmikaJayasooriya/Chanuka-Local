"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const nav = [
  { href: "/admin", label: "Dashboard", exact: true },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/submissions", label: "CV briefs" },
  { href: "/admin/pricing", label: "Pricing" },
  { href: "/admin/blog", label: "Blog" },
  { href: "/admin/pages", label: "SEO Pages" },
];

export function AdminShell({
  email,
  children,
}: {
  email: string;
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
        <span className="font-bold">Chanuka · Admin</span>
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
              Chanuka · Admin
            </Link>
            <nav className="mt-2 space-y-1">
              {nav.map((n) => (
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
