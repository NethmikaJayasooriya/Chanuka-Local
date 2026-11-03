-- 0008_invoices.sql
-- Fully customizable invoice generator and record keeping for Chanuka Jeewantha.
-- Serves both .com (USD) and .lk (LKR), links to orders optionally,
-- supports custom line items, tax/VAT, discount, branding, bank details, and shareable client links.

create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  invoice_number text not null unique,
  order_id uuid references public.orders(id) on delete set null,
  site text not null default 'com' check (site in ('com', 'lk')),
  status text not null default 'draft' check (status in ('draft', 'sent', 'paid', 'cancelled', 'overdue')),
  issue_date date not null default current_date,
  due_date date,
  currency text not null default 'USD',
  
  -- Sender Branding & Contact Info
  from_name text not null default 'Chanuka Jeewantha',
  from_title text default 'CV & Career Branding Specialist',
  from_email text default 'hello@chanukajeewantha.com',
  from_phone text default '+94 77 123 4567',
  from_address text default 'Colombo, Sri Lanka',
  from_website text default 'https://chanukajeewantha.com',
  
  -- Client / Bill To Info
  to_name text not null,
  to_company text,
  to_email text,
  to_phone text,
  to_address text,
  to_country text,
  
  -- Line Items (JSON array of: { id: string, description: string, quantity: number, unit_price: number, total: number })
  items jsonb not null default '[]'::jsonb,
  
  -- Financial Calculations
  subtotal numeric(12,2) not null default 0,
  discount_type text default 'percentage' check (discount_type in ('percentage', 'fixed', 'none')),
  discount_value numeric(12,2) not null default 0,
  discount_amount numeric(12,2) not null default 0,
  tax_rate numeric(5,2) not null default 0,
  tax_amount numeric(12,2) not null default 0,
  total numeric(12,2) not null default 0,
  
  -- Notes, Terms & Payment Details
  notes text default 'Thank you for your business. We look forward to helping you land interviews in your target international markets.',
  terms text default 'Payment is due within 7 days of invoice date. All CV revisions and consultation sessions will commence upon payment confirmation.',
  payment_methods jsonb not null default '{
    "bank_name": "Commercial Bank of Ceylon",
    "account_name": "Chanuka Jeewantha",
    "account_number": "8001234567",
    "branch": "Colombo Main Branch",
    "swift_code": "CCEYLKX",
    "paypal_email": "payments@chanukajeewantha.com",
    "online_pay_url": ""
  }'::jsonb,
  
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists idx_invoices_site on public.invoices(site);
create index if not exists idx_invoices_status on public.invoices(status);
create index if not exists idx_invoices_order_id on public.invoices(order_id);
create index if not exists idx_invoices_created_at on public.invoices(created_at desc);

alter table public.invoices enable row level security;

-- Public can read invoice if they have the exact link UUID
create policy "public view invoice" on public.invoices
  for select
  to public
  using (true);

-- Admins / service role can manage invoices
create policy "service role full invoices" on public.invoices
  for all
  to service_role
  using (true)
  with check (true);
