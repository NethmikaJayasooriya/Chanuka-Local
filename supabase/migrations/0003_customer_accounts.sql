-- ============================================================
-- Customer accounts, payment status and deliverables
-- (applied to the Supabase project on 2026-09-28)
-- ============================================================

create table if not exists public.profiles (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  full_name  text,
  phone      text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
drop trigger if exists trg_profiles_updated on public.profiles;
create trigger trg_profiles_updated before update on public.profiles
  for each row execute function public.set_updated_at();

do $$ begin
  create type public.payment_status as enum ('pending','paid','refunded','cancelled');
exception when duplicate_object then null; end $$;

alter table public.orders
  add column if not exists user_id uuid references auth.users (id) on delete set null,
  add column if not exists payment_status public.payment_status not null default 'pending',
  add column if not exists payment_method text,
  add column if not exists payment_ref text,
  add column if not exists target_role text,
  add column if not exists target_country text,
  add column if not exists deadline text,
  add column if not exists brief_notes text;
create index if not exists orders_user_idx on public.orders (user_id, created_at desc);

alter table public.intake_submissions
  add column if not exists user_id uuid references auth.users (id) on delete set null;
create index if not exists intake_user_idx on public.intake_submissions (user_id);

create table if not exists public.deliverables (
  id          uuid primary key default gen_random_uuid(),
  order_id    uuid references public.orders (id) on delete cascade,
  user_id     uuid references auth.users (id) on delete cascade,
  label       text not null,
  file_path   text not null,
  file_name   text,
  kind        text default 'draft',
  created_at  timestamptz not null default now()
);
create index if not exists deliverables_user_idx on public.deliverables (user_id, created_at desc);

alter table public.profiles     enable row level security;
alter table public.deliverables enable row level security;

create policy "profiles self read"   on public.profiles for select to authenticated using (auth.uid() = user_id);
create policy "profiles self upsert" on public.profiles for insert to authenticated with check (auth.uid() = user_id);
create policy "profiles self update" on public.profiles for update to authenticated using (auth.uid() = user_id);
create policy "orders self read" on public.orders for select to authenticated using (auth.uid() = user_id);
create policy "intake self read" on public.intake_submissions for select to authenticated using (auth.uid() = user_id);
create policy "deliverables self read" on public.deliverables for select to authenticated using (auth.uid() = user_id);

insert into storage.buckets (id, name, public)
values ('deliverables', 'deliverables', false)
on conflict (id) do nothing;
