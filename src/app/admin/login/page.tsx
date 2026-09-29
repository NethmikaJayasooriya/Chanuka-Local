import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginForm } from "./LoginForm";

export const metadata: Metadata = {
  title: "Admin sign in",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-4 py-8 sm:px-5">
      <div className="w-full max-w-sm">
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-accent-deep">
          Chanuka Jeewantha
        </p>
        <h1 className="mt-2 text-center text-[22px] font-bold text-ink">Admin sign in</h1>
        <div className="mt-6 rounded-[16px] border border-line bg-surface p-5 shadow-sm sm:p-7">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
        <p className="mt-5 text-center text-[12px] text-muted">
          Access is restricted. Contact the site owner if you need an account.
        </p>
      </div>
    </div>
  );
}
