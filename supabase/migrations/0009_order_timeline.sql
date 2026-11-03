-- 0009_order_timeline.sql
-- Standalone, non-destructive timeline engine for orders.
-- Does NOT touch or modify any existing column in 'orders', 'deliverables', or 'intake_submissions'.
-- Tracks all lifecycle events: deliveries, revision requests, reviews, and messaging.

create table if not exists public.order_timeline_events (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders(id) on delete cascade,
  event_type text not null check (event_type in (
    'order_placed',
    'requirements_submitted',
    'order_started',
    'delivery',
    'revision_requested',
    'order_completed',
    'buyer_review',
    'seller_review',
    'chat_message',
    'date_extended',
    'system_alert'
  )),
  sender_role text not null check (sender_role in ('seller', 'buyer', 'system')),
  sender_name text,
  sender_avatar text,
  message text,
  files jsonb not null default '[]'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_order_timeline_order_id on public.order_timeline_events(order_id);
create index if not exists idx_order_timeline_created_at on public.order_timeline_events(created_at asc);
create index if not exists idx_order_timeline_event_type on public.order_timeline_events(event_type);

alter table public.order_timeline_events enable row level security;

-- Public read for the timeline (matches public invoice/order security pattern)
create policy "allow read order timeline" on public.order_timeline_events
  for select
  to public
  using (true);

-- Service role has full management
create policy "service role full timeline" on public.order_timeline_events
  for all
  to service_role
  using (true)
  with check (true);

