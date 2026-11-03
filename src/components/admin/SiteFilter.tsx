import Link from "next/link";

/**
 * Both sites (chanukajeewantha.com and .lk) share one database. Rows carry a
 * `site` tag. This bar filters any admin list to one site or shows all, and
 * SiteBadge marks which site a row belongs to.
 */

const TABS = [
  { v: "", label: "All sites" },
  { v: "com", label: ".com" },
  { v: "lk", label: ".lk" },
] as const;

export function SiteFilter({ active, base, allowed = ["com", "lk"] }: { active: string; base: string; allowed?: Array<"com" | "lk"> }) {
  const cur = active === "com" || active === "lk" ? active : "";
  const tabs = allowed.length > 1 ? TABS : TABS.filter((tab) => tab.v === allowed[0]);
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
  const lk = site === "lk";
  return (
    <span
      className={`inline-block rounded-full px-2.5 py-1 text-[11px] font-semibold ${
        lk ? "bg-emerald-100 text-emerald-700" : "bg-indigo-100 text-indigo-700"
      }`}
    >
      {lk ? ".lk" : ".com"}
    </span>
  );
}
