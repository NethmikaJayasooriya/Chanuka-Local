-- 0006_multi_site.sql
-- One Supabase project now serves BOTH sites: chanukajeewantha.com and
-- chanukajeewantha.lk. Every row that is site-specific carries a `site` tag
-- so the single .com admin dashboard can manage and filter both. The public
-- apps read/write with SITE_KEY ("com" | "lk") from src/lib/site.ts.
-- (Pricing stays code-driven per repo: USD on .com, LKR on .lk — not here.)

do $$
declare t text;
begin
  foreach t in array array['orders','intake_submissions','deliverables','blog_posts','landing_pages']
  loop
    execute format(
      'alter table public.%I add column if not exists site text not null default ''com'' check (site in (''com'',''lk''))', t);
    execute format('create index if not exists idx_%s_site on public.%I (site)', t, t);
  end loop;
end $$;

-- Existing rows predate the split and belong to the .com site.
update public.orders set site = 'com' where site is null;
