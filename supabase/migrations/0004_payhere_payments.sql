-- PayHere payment audit trail and idempotent status processing.

alter type public.payment_status add value if not exists 'failed';
alter type public.payment_status add value if not exists 'charged_back';

alter table public.orders
  add column if not exists billing_address text,
  add column if not exists billing_city text,
  add column if not exists billing_country text;

create table if not exists public.payment_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  gateway text not null default 'payhere',
  notification_key text not null unique,
  gateway_payment_id text not null,
  status_code integer not null,
  amount numeric(12,2) not null,
  currency text not null,
  method text,
  status_message text,
  received_at timestamptz not null default now()
);

create index if not exists payment_events_order_idx
  on public.payment_events(order_id, received_at desc);

alter table public.payment_events enable row level security;

create or replace function public.record_payhere_notification(
  p_order_id uuid,
  p_notification_key text,
  p_payment_id text,
  p_status_code integer,
  p_amount numeric,
  p_currency text,
  p_method text,
  p_status_message text
) returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_rows integer;
begin
  insert into public.payment_events (
    order_id, notification_key, gateway_payment_id, status_code,
    amount, currency, method, status_message
  ) values (
    p_order_id, p_notification_key, p_payment_id, p_status_code,
    p_amount, p_currency, p_method, p_status_message
  ) on conflict (notification_key) do nothing;

  get diagnostics v_rows = row_count;
  if v_rows = 0 then return false; end if;

  if p_status_code = 2 then
    update public.orders set
      payment_status = 'paid',
      payment_method = coalesce(nullif(p_method, ''), payment_method),
      payment_ref = p_payment_id
    where id = p_order_id and payment_status not in ('refunded', 'charged_back');
  elsif p_status_code = -3 then
    update public.orders set
      payment_status = 'charged_back',
      payment_method = coalesce(nullif(p_method, ''), payment_method),
      payment_ref = p_payment_id
    where id = p_order_id;
  elsif p_status_code = -2 then
    update public.orders set payment_status = 'failed', payment_ref = p_payment_id
    where id = p_order_id and payment_status in ('pending', 'cancelled', 'failed');
  elsif p_status_code = -1 then
    update public.orders set payment_status = 'cancelled', payment_ref = p_payment_id
    where id = p_order_id and payment_status in ('pending', 'cancelled', 'failed');
  end if;

  return true;
end;
$$;

revoke all on function public.record_payhere_notification(uuid,text,text,integer,numeric,text,text,text) from public, anon, authenticated;
grant execute on function public.record_payhere_notification(uuid,text,text,integer,numeric,text,text,text) to service_role;
