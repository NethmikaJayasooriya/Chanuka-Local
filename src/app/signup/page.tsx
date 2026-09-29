import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { redirect } from "next/navigation";
import { AuthForm } from "@/components/account/AuthForm";
import { getSessionUser, supabaseConfigured } from "@/lib/supabase/guard";

export const metadata: Metadata = {
  title: "Create your account",
  description: "Create an account to place an order, upload your CV and track your documents.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/signup" },
};

export default async function SignupPage() {
  if (supabaseConfigured() && (await getSessionUser())) redirect("/dashboard");

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sand/70 to-paper" />
      <div className="container-page relative flex min-h-[calc(100svh-64px)] items-center justify-center py-14">
        <div className="w-full max-w-md">
          <div className="rounded-[18px] border border-line bg-surface p-8 shadow-sm lg:p-10">
            <h1 className="display text-[24px] text-ink">Create your account</h1>
            <p className="mt-2 text-[14.5px] leading-relaxed text-muted">
              One account to place orders, upload your CV and download your documents. You can also{" "}
              <Link href="/order" className="font-semibold text-brand">start an order</Link> and your account is created as you go.
            </p>
            <Suspense fallback={null}>
              <AuthForm mode="signup" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
