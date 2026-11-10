import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/account/AuthForm";
import { site } from "@/lib/site";
import { getSessionUser, supabaseConfigured } from "@/lib/supabase/guard";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to track your order, review drafts and download your final documents.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};

export default async function LoginPage() {
  if (supabaseConfigured() && (await getSessionUser())) redirect("/dashboard");

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/70 to-paper" />
      <div className="container-page relative flex min-h-[calc(100svh-64px)] items-center justify-center py-14">
        <div className="w-full max-w-md">
          <div className="rounded-[18px] border border-line bg-surface p-8 shadow-sm lg:p-10">
            <h1 className="display text-[24px] text-ink">Sign in</h1>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
              Track your order, review drafts and download your final documents.
            </p>
            <Suspense fallback={null}>
              <AuthForm mode="signin" />
            </Suspense>
          </div>
          <p className="mt-6 text-center text-[12.5px] leading-relaxed text-muted">
            Questions before you order? Email{" "}
            <a href={`mailto:${site.email}`} className="text-ink font-semibold hover:text-brand">{site.email}</a>{" "}
            or visit the{" "}
            <Link href="/contact" className="text-ink-soft underline hover:text-brand">contact page</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
