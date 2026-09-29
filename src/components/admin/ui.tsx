import Link from "next/link";

export function PageTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-5 min-w-0 sm:mb-6">
      <h1 className="break-words text-[21px] font-bold leading-tight text-ink sm:text-[22px]">{title}</h1>
      {sub && <p className="mt-1 text-[13.5px] text-muted">{sub}</p>}
    </div>
  );
}

export function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`min-w-0 rounded-2xl border border-line bg-white p-4 sm:p-5 ${className}`}>{children}</div>
  );
}

export function Stat({ label, value, href }: { label: string; value: React.ReactNode; href?: string }) {
  const inner = (
    <div className="h-full rounded-2xl border border-line bg-white p-4 transition-shadow hover:shadow-sm sm:p-5">
      <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">{label}</p>
      <p className="mt-2 text-[28px] font-bold leading-none text-ink">{value}</p>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}

const statusStyles: Record<string, string> = {
  new: "bg-blue-50 text-blue-700 border-blue-200",
  in_progress: "bg-amber-50 text-amber-700 border-amber-200",
  draft_delivered: "bg-violet-50 text-violet-700 border-violet-200",
  revision: "bg-orange-50 text-orange-700 border-orange-200",
  completed: "bg-green-50 text-green-700 border-green-200",
  cancelled: "bg-gray-100 text-gray-500 border-gray-200",
  draft: "bg-gray-100 text-gray-600 border-gray-200",
  published: "bg-green-50 text-green-700 border-green-200",
};

export function Badge({ status, label }: { status: string; label?: string }) {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-full border px-2.5 py-0.5 text-[11.5px] font-semibold ${statusStyles[status] ?? "bg-gray-100 text-gray-600 border-gray-200"}`}
    >
      {label ?? status.replace(/_/g, " ")}
    </span>
  );
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-dashed border-line-strong bg-white p-6 text-center text-[14px] text-muted sm:p-10">
      {children}
    </div>
  );
}
