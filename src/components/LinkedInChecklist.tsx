"use client";

import { useState } from "react";

const checks = [
  "My headline names an honest role or professional identity and relevant skills.",
  "My About section explains my work with at least one supported example.",
  "My employers, job titles and dates agree with my CV.",
  "My skills relate to roles I would genuinely apply for.",
  "My qualifications state what I have actually completed.",
  "My location and contact details are accurate.",
  "I have checked which profile details are visible publicly.",
  "I have recorded the search/view data available to me before making changes.",
];

export function LinkedInChecklist() {
  const [checked, setChecked] = useState<string[]>([]);
  return (
    <section id="profile-check" className="mt-10 scroll-mt-24 rounded-[16px] border border-brand/25 bg-brand-soft/30 p-6 sm:p-7" aria-labelledby="profile-check-title">
      <h2 id="profile-check-title" className="display text-[24px] text-ink">Check your LinkedIn profile before publishing.</h2>
      <p className="mt-3 text-[14px] leading-relaxed text-muted">Tick the checks you have completed. This is a preparation checklist, not a LinkedIn ranking score. Your selections stay on this page and are not sent anywhere.</p>
      <fieldset className="mt-5 space-y-3">
        <legend className="sr-only">Profile preparation checks</legend>
        {checks.map((check) => <label key={check} className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-paper p-4 text-[14px] leading-relaxed text-ink-soft"><input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[var(--color-brand)]" checked={checked.includes(check)} onChange={(event) => setChecked((previous) => event.target.checked ? [...previous, check] : previous.filter((item) => item !== check))} /><span>{check}</span></label>)}
      </fieldset>
      <p role="status" className="mt-5 text-[15px] font-semibold text-brand">{checked.length} of {checks.length} checks complete{checked.length === checks.length ? ". Ready for a final accuracy and privacy review." : ". Start with the unchecked items."}</p>
      <button type="button" onClick={() => setChecked([])} className="mt-3 min-h-11 text-[14px] text-brand underline underline-offset-2">Reset checklist</button>
    </section>
  );
}
