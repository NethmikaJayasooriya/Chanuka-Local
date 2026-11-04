-- 0010_multi_site_uk.sql
-- Expand multi-site architecture to include the UK site ('uk').
-- Now three sites share the same Supabase backend:
-- 1. 'com' (Global / International USD)
-- 2. 'lk'  (Sri Lanka domestic LKR)
-- 3. 'uk'  (United Kingdom GBP)

-- Update table site check constraints
do $$
declare t text;
begin
  foreach t in array array['orders','intake_submissions','deliverables','blog_posts','landing_pages']
  loop
    execute format('alter table public.%I drop constraint if exists %s_site_check', t, t);
    execute format('alter table public.%I add constraint %s_site_check check (site in (''com'',''lk'',''uk''))', t, t);
  end loop;
end $$;

-- Update admin site access constraint
alter table public.admins drop constraint if exists admins_site_access_valid;
alter table public.admins add constraint admins_site_access_valid
  check (site_access <@ array['com','lk','uk']::text[] and cardinality(site_access) > 0);
