import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";
import { requireAdmin, supabaseConfigured } from "@/lib/supabase/guard";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!supabaseConfigured()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f6fa] px-5">
        <div className="max-w-md rounded-2xl border border-line bg-white p-8 text-center">
          <h1 className="text-[18px] font-bold text-ink">Backend not configured</h1>
          <p className="mt-3 text-[14px] leading-relaxed text-muted">
            Add your Supabase keys to <code>.env.local</code> and restart, then this admin
            panel will connect. The public site keeps working without it.
          </p>
        </div>
      </div>
    );
  }

  const { email } = await requireAdmin();
  return <AdminShell email={email}>{children}</AdminShell>;
}
