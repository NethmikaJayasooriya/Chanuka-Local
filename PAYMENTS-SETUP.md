# Sri Lanka accounts and PayHere

The .lk site uses the existing Supabase customer account flow: email/password or Google, an account-owned order, LKR checkout, then CV upload and a customer dashboard. Login/signup links preserve the selected Essential/Signature tier, service and experience level. Customer queries and payment endpoints are scoped to `site = lk`.

## Production settings

The user confirmed that the .lk domain is PayHere-approved and explicitly authorized live activation. Merchant ID, Merchant Secret, the canonical Site URL and `PAYHERE_SANDBOX=false` were saved in the chanuka-local Vercel project for Production and Preview as write-only variables. Vercel confirmed the updates. No real payment or production test account was created.

In the **chanuka-local** Vercel project's environment variables, configure:

| Name | Value |
| --- | --- |
| `PAYHERE_MERCHANT_ID` | The merchant ID, server-only |
| `PAYHERE_MERCHANT_SECRET` | The secret approved for the .lk domain, server-only |
| `PAYHERE_SANDBOX` | `true` for sandbox testing; `false` only for approved live payments |
| `PAYHERE_SITE_URL` | `https://www.chanukajeewantha.lk` |

Never prefix credentials with `NEXT_PUBLIC_`, commit `.env.local`, or use the .com domain's secret. Use matching sandbox credentials when testing sandbox mode. Redeploy after changing environment variables.

PayHere notification URL: `https://www.chanukajeewantha.lk/api/payhere/notify`.
Return/cancel URLs are generated server-side for the account-owned order. Supabase Google Auth must allow `https://www.chanukajeewantha.lk/auth/callback` in its redirect URL settings. Email and Google providers were confirmed enabled with a read-only settings check; the redirect allow-list still requires dashboard verification.

## Database

The shared backend already exposes the billing columns, `payment_events` and `record_payhere_notification` RPC (read-only schema checks passed). Migration `0004_payhere_payments.sql` is retained for fresh installations; do not re-run it just to test payments. The multi-site `site` columns already exist. All payment RPC writes are service-role-only. Duplicate callbacks are handled by a unique notification key in the database.

`orders.total_usd` is a legacy column name. For `site = lk`, it holds the LKR order total, not a USD value. No currency conversion is performed. Never display or charge a .com order through this checkout.

## Verification

Run `node scripts/verify-payhere.mjs`, `node scripts/verify-pricing.mjs`, `npm run typecheck`, and `npm run build`. Against a running preview, also run `node scripts/verify-accounts.mjs http://127.0.0.1:3014` and `node scripts/verify-pricing.mjs http://127.0.0.1:3014`.

The isolated tests cover signed checkout, approved/cancelled/error callback states, duplicate callbacks and account/order authorization without external writes. A full hosted-gateway end-to-end transaction with a dedicated test account has not been performed. The merchant should complete that acceptance check, including dashboard status and CV upload; use matching sandbox credentials on a dedicated sandbox deployment if testing without a real charge. Do not mix sandbox credentials with the live configuration. Real payments must be completed by the merchant/customer, not automated during implementation. A return URL or `payment=return` is never proof of payment; only a verified server callback can set Paid.

Older orders without an explicit tier or with a total that differs from the current published selection require invoice review. They are not silently repriced or charged. Existing order totals remain unchanged.

Official protocol reference: https://support.payhere.lk/api-&-mobile-sdk/checkout-api
