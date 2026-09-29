-- ============================================================
-- Seed pricing to match the current live prices, so nothing
-- changes on the public site until an admin edits them.
-- ============================================================

insert into public.service_prices (service_id, level_id, price_usd) values
  ('cv','under-2',129),          ('cv','3-to-9',189),          ('cv','over-10',279),
  ('cover-letter','under-2',79), ('cover-letter','3-to-9',119),('cover-letter','over-10',159),
  ('linkedin','under-2',129),    ('linkedin','3-to-9',189),    ('linkedin','over-10',279)
on conflict (service_id, level_id) do update set price_usd = excluded.price_usd;

insert into public.delivery_options (id, name, window_label, surcharge_pct, sort) values
  ('normal','Standard','5 to 7 days',0,1),
  ('fast','Fast','2 to 3 days',0.2,2),
  ('ultra','Ultra fast','Within 24 hours',0.5,3)
on conflict (id) do update
  set name = excluded.name, window_label = excluded.window_label,
      surcharge_pct = excluded.surcharge_pct, sort = excluded.sort;

insert into public.bundle_discounts (service_count, discount_pct) values
  (1,0),(2,0.2),(3,0.3)
on conflict (service_count) do update set discount_pct = excluded.discount_pct;
