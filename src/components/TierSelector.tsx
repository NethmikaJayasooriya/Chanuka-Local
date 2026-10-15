"use client";
import { tiers, type TierId } from "@/lib/pricing";
export function TierSelector({ value, onChange }: { value: TierId; onChange: (tier: TierId) => void }) {
  return <fieldset className="mb-5">
    <legend className="mb-2 text-sm font-semibold text-ink">Choose your service tier</legend>
    <div className="grid gap-2 sm:grid-cols-2">
      {tiers.map((tier) => <button key={tier.id} type="button" aria-pressed={value === tier.id} onClick={() => onChange(tier.id)} className={`rounded-xl border p-3 text-left transition-colors ${value === tier.id ? "border-accent bg-accent-soft ring-1 ring-accent" : "border-line bg-surface hover:border-accent"}`}>
        <span className="block font-semibold text-ink">{tier.name}</span>
        <span className="mt-1 block text-xs leading-relaxed text-muted">{tier.description}</span>
      </button>)}
    </div>
  </fieldset>;
}
