-- Site-scoped admin access for the shared .com / .lk backend.
-- Existing admins become owners so nobody is locked out. New team members
-- default to Sri Lanka-only manager access and can be changed in /admin/team.

alter table public.admins
  add column if not exists role text not null default 'owner'
    check (role in ('owner', 'manager')),
  add column if not exists site_access text[] not null default array['com','lk']::text[];

update public.admins
set role = 'owner', site_access = array['com','lk']::text[]
where role is null or site_access is null;

alter table public.admins alter column role set default 'manager';
alter table public.admins alter column site_access set default array['lk']::text[];

alter table public.admins drop constraint if exists admins_site_access_valid;
alter table public.admins add constraint admins_site_access_valid
  check (site_access <@ array['com','lk']::text[] and cardinality(site_access) > 0);
