import Link from "next/link";
import type { AdminSite } from "@/lib/supabase/guard";

/**
 * Three sites (chanukajeewantha.com, .uk, and .lk) share one database.
 * Rows carry a `site` tag. This bar filters any admin list to one site or shows all,
 * and SiteBadge marks which site a row belongs to.
 */

const TABS = [
  { v: "", label: "All sites" },
  { v: "com", label: ".com" },
  { v: "uk", label: ".uk" },
  { v: "lk", label: ".lk" },
] as const;

export function SiteFilter({
  active,
  base,
  allowed = ["com", "uk", "lk"],
}: {
  active: string;
  base: string;
  allowed?: AdminSite[];
}) {
  const cur = active === "com" || active === "lk" || active === "uk" ? active : "";
  const tabs =
    allowed.length > 1
      ? TABS.filter((t) => !t.v || allowed.includes(t.v as AdminSite))
      : TABS.filter((tab) => tab.v === allowed[0]);

  return (
    <div className="mb-4 flex flex-wrap gap-1.5">
      {tabs.map((t) => {
        const on = cur === t.v;
        const href = t.v ? `${base}?site=${t.v}` : base;
        return (
          <Link
            key={t.v}
            href={href}
            className={`rounded-full px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors ${
              on ? "bg-brand text-white" : "bg-[#eef2f7] text-ink-soft hover:bg-[#e2e8f1]"
            }`}
          >
            {t.label}
          </Link>
        );
      })}
    </div>
  );
}

export function SiteBadge({ site }: { site: string | null | undefined }) {
  if (site === "lk") {
    return (
      <span className="inline-block rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
        .lk
      </span>
    );
  }
  if (site === "uk") {
    return (
      <span className="inline-block rounded-full bg-blue-100 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
        .uk
      </span>
    );
  }
  return (
    <span className="inline-block rounded-full bg-indigo-100 px-2.5 py-1 text-[11px] font-semibold text-indigo-700">
      .com
    </span>
  );
}
