-- Transactional email delivery log and atomic idempotency claim.

create table if not exists public.email_events (
  id uuid primary key default gen_random_uuid(),
  event_key text not null unique,
  order_id uuid references public.orders(id) on delete set null,
  recipient text not null,
  template text not null,
  status text not null default 'pending' check (status in ('pending','sent','failed')),
  attempts integer not null default 1,
  provider_id text,
  error_message text,
  sent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists email_events_order_idx
  on public.email_events(order_id, created_at desc);

alter table public.email_events enable row level security;

create or replace function public.claim_email_event(
  p_event_key text,
  p_order_id uuid,
  p_recipient text,
  p_template text
) returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  v_id uuid;
begin
  insert into public.email_events (event_key, order_id, recipient, template)
  values (p_event_key, p_order_id, p_recipient, p_template)
  on conflict (event_key) do update set
    status = 'pending',
    attempts = public.email_events.attempts + 1,
    error_message = null,
    updated_at = now()
  where (
    public.email_events.status = 'failed'
    and public.email_events.attempts < 3
  ) or (
    public.email_events.status = 'pending'
    and public.email_events.updated_at < now() - interval '10 minutes'
    and public.email_events.attempts < 3
  )
  returning id into v_id;

  return v_id;
end;
$$;

revoke all on function public.claim_email_event(text,uuid,text,text) from public, anon, authenticated;
grant execute on function public.claim_email_event(text,uuid,text,text) to service_role;
