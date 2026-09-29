"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-page py-20 text-center">
      <h2 className="display text-2xl font-bold text-ink mb-4">Something went wrong</h2>
      <p className="text-muted text-sm mb-6 max-w-md mx-auto">
        {error?.message || "An unexpected error occurred while rendering this page."}
      </p>
      <button
        onClick={() => reset()}
        className="rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-paper hover:bg-brand-deep transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
