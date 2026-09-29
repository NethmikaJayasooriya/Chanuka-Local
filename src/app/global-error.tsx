"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="flex min-h-screen flex-col items-center justify-center p-6 font-sans bg-[#0a0f1d] text-white">
        <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-300 text-sm mb-6 max-w-md text-center">
          {error?.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-white hover:bg-emerald-600 transition-colors"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
