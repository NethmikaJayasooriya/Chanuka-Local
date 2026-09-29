# Chanuka Global (chanukajeewantha.com)

Next.js 16 + React 19 + Tailwind CSS v4. Home page only at this stage.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where things live

| What | File |
|---|---|
| Prices, packages, levels, delivery speeds | `src/lib/pricing.ts` |
| Brand details, WhatsApp number, stats, Google rating | `src/lib/site.ts` |
| Colours, fonts, spacing tokens | `src/app/globals.css` (the `@theme` block) |
| Home page section order | `src/app/page.tsx` |
| Package configurator | `src/components/Configurator.tsx` |

## Pricing

`src/lib/pricing.ts` is the single source of truth. Base prices came from the
Signature Series catalogue on the current site and are in USD:

| Service | Under 2 yrs | 3 to 9 yrs | 10+ yrs |
|---|---|---|---|
| ATS Friendly CV | 129 | 189 | 279 |
| Cover Letter | 79 | 119 | 159 |
| LinkedIn | 129 | 189 | 279 |

Bundle discounts: two services 20% off, three services 30% off.
Delivery: standard included, fast +20%, ultra fast +50%.

Change the numbers in that one file and every price on the site updates.

## Not built yet

`/order`, `/checkout`, intake form, dashboard, all inner pages. The configurator
links to `/order?package=...&level=...&delivery=...` so the order page can read
the selection straight from the query string.
