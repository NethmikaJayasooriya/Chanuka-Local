import type { Faq } from "@/lib/faqs";

export function FaqList({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-t border-line">
      {items.map((item) => (
        <details key={item.q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[15.5px] font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden
              className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line-strong text-muted transition-transform group-open:rotate-45"
            >
              <svg viewBox="0 0 12 12" className="h-3 w-3">
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  d="M6 2v8M2 6h8"
                />
              </svg>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl pr-2 sm:pr-10 text-[14.5px] leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
