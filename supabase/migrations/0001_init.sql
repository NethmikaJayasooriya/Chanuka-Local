-- ============================================================
-- Chanuka Jeewantha — admin backend schema (Phase 1)
-- Orders, intake submissions (+ CV files), pricing, blog, admins
-- ============================================================

create extension if not exists "pgcrypto";

-- ---------- helper: updated_at trigger ----------
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

-- ---------- admins (who may use /admin) ----------
create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  email text not null,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.admins a where a.user_id = auth.uid());
$$;

-- ---------- pricing (editable from admin) ----------
create table if not exists public.service_prices (
  service_id text not null,          -- cv | cover-letter | linkedin
  level_id   text not null,          -- under-2 | 3-to-9 | over-10
  price_usd  integer not null check (price_usd >= 0),
  primary key (service_id, level_id)
);

create table if not exists public.delivery_options (
  id           text primary key,     -- normal | fast | ultra
  name         text not null,
  window_label text not null,
  surcharge_pct numeric not null default 0 check (surcharge_pct >= 0),
  sort         integer not null default 0
);

create table if not exists public.bundle_discounts (
  service_count integer primary key check (service_count >= 1),
  discount_pct  numeric not null default 0 check (discount_pct >= 0)
);

-- ---------- orders ----------
do $$ begin
  create type public.order_status as enum
    ('new','in_progress','draft_delivered','revision','completed','cancelled');
exception when duplicate_object then null; end $$;

create table if not exists public.orders (
  id             uuid primary key default gen_random_uuid(),
  ref            text unique not null default ('CJ-' || upper(substr(replace(gen_random_uuid()::text,'-',''),1,8))),
  package_id     text,
  package_name   text,
  level_id       text,
  level_name     text,
  delivery_id    text,
  delivery_window text,
  total_usd      integer,
  status         public.order_status not null default 'new',
  customer_name  text,
  customer_email text,
  customer_phone text,
  admin_notes    text,
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);
drop trigger if exists trg_orders_updated on public.orders;
create trigger trg_orders_updated before update on public.orders
  for each row execute function public.set_updated_at();

-- ---------- intake / brief submissions (+ CV in storage) ----------
create table if not exists public.intake_submissions (
  id             uuid primary key default gen_random_uuid(),
  order_id       uuid references public.orders (id) on delete set null,
  order_summary  text,
  name           text,
  email          text,
  phone          text,
  whatsapp       text,
  address        text,
  linkedin       text,
  target_role    text,
  education      text,
  professional   text,
  experience     text,
  skills         text,
  projects       text,
  achievements   text,
  certifications text,
  additional     text,
  cv_path        text,               -- storage object path in bucket 'cvs'
  cv_filename    text,
  handled        boolean not null default false,
  created_at     timestamptz not null default now()
);

-- ---------- blog posts ----------
do $$ begin
  create type public.post_status as enum ('draft','published');
exception when duplicate_object then null; end $$;

create table if not exists public.blog_posts (
  id               uuid primary key default gen_random_uuid(),
  slug             text unique not null,
  title            text not null,
  excerpt          text,
  body             text,             -- markdown
  cover_image_path text,             -- storage object path in bucket 'blog'
  category         text,
  read_minutes     integer default 5,
  meta_title       text,
  meta_description text,
  status           public.post_status not null default 'draft',
  published_at     timestamptz,
  created_at       timestamptz not null default now(),
  updated_at       timestamptz not null default now()
);
drop trigger if exists trg_blog_updated on public.blog_posts;
create trigger trg_blog_updated before update on public.blog_posts
  for each row execute function public.set_updated_at();

create index if not exists blog_posts_status_pub_idx
  on public.blog_posts (status, published_at desc);

-- ============================================================
-- Row Level Security
-- Public site uses the anon key; admin pages use the service role
-- key server-side (which bypasses RLS), so policies here only need
-- to cover what the public browser is allowed to do.
-- ============================================================
alter table public.admins            enable row level security;
alter table public.service_prices    enable row level security;
alter table public.delivery_options  enable row level security;
alter table public.bundle_discounts  enable row level security;
alter table public.orders            enable row level security;
alter table public.intake_submissions enable row level security;
alter table public.blog_posts        enable row level security;

-- pricing: world-readable (needed to render prices)
create policy "prices read"   on public.service_prices   for select using (true);
create policy "delivery read" on public.delivery_options for select using (true);
create policy "bundles read"  on public.bundle_discounts for select using (true);

-- blog: only published posts are world-readable
create policy "published posts read" on public.blog_posts
  for select using (status = 'published');

-- orders: anyone may create one (checkout); nobody reads via anon
create policy "orders insert" on public.orders
  for insert with check (true);

-- intake: anyone may submit; nobody reads via anon
create policy "intake insert" on public.intake_submissions
  for insert with check (true);

-- admins table: a signed-in admin may read their own membership
create policy "admin self read" on public.admins
  for select using (auth.uid() = user_id);

-- ============================================================
-- Storage buckets
-- ============================================================
insert into storage.buckets (id, name, public)
values ('cvs', 'cvs', false)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('blog', 'blog', true)
on conflict (id) do nothing;

-- customers may upload their CV into the private 'cvs' bucket
create policy "cv upload" on storage.objects
  for insert to anon, authenticated
  with check (bucket_id = 'cvs');

-- blog images are world-readable
create policy "blog images read" on storage.objects
  for select using (bucket_id = 'blog');
