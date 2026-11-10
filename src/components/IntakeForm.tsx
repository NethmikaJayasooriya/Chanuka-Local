"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { emailLink } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
  linkedin: string;
  targetRole: string;
  education: string;
  professional: string;
  experience: string;
  skills: string;
  projects: string;
  achievements: string;
  certifications: string;
  additional: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  whatsapp: "",
  address: "",
  linkedin: "",
  targetRole: "",
  education: "",
  professional: "",
  experience: "",
  skills: "",
  projects: "",
  achievements: "",
  certifications: "",
  additional: "",
};

export type OrderInfo = {
  package_id?: string;
  package_name?: string;
  level_id?: string;
  level_name?: string;
  delivery_id?: string;
  delivery_window?: string;
  total_usd?: number;
};

// Supabase is wired only when the public env vars are present at build time.
// When it is off, the form keeps its original email-based flow untouched.
const DB_ON = !!process.env.NEXT_PUBLIC_SUPABASE_URL;

const inputCls =
  "mt-1.5 w-full rounded-[10px] border border-line-strong bg-paper px-3.5 sm:px-4 py-2.5 sm:py-3 text-[16px] sm:text-[14.5px] text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-brand";

function Field({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: keyof Fields;
  value: string;
  onChange: (k: keyof Fields, v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[12.5px] sm:text-[13px] font-semibold text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      <input
        id={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className={inputCls}
      />
    </div>
  );
}

function Area({
  label,
  name,
  value,
  onChange,
  placeholder,
  hint,
  rows = 3,
  required,
}: {
  label: string;
  name: keyof Fields;
  value: string;
  onChange: (k: keyof Fields, v: string) => void;
  placeholder?: string;
  hint?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[12.5px] sm:text-[13px] font-semibold text-ink">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {hint && <p className="mt-0.5 text-[11.5px] sm:text-[12px] leading-relaxed text-muted">{hint}</p>}
      <textarea
        id={name}
        rows={rows}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        className={`${inputCls} resize-y leading-relaxed`}
      />
    </div>
  );
}

export function IntakeForm({
  orderSummary,
  order,
  orderId,
}: {
  orderSummary?: string;
  order?: OrderInfo;
  orderId?: string;
}) {
  const router = useRouter();
  const [f, setF] = useState<Fields>(EMPTY);
  const [cvName, setCvName] = useState<string>("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [busy, setBusy] = useState(false);

  const set = (k: keyof Fields, v: string) => setF((prev) => ({ ...prev, [k]: v }));

  const message = useMemo(() => {
    const line = (label: string, v: string) => (v.trim() ? `${label}: ${v.trim()}` : "");
    const parts = [
      "Hi Chanuka, here is my brief for the order.",
      orderSummary ? `\nOrder: ${orderSummary}` : "",
      "\nContact:",
      line("Name", f.name),
      line("Email", f.email),
      line("Phone", f.phone),
      line("Alternative phone", f.whatsapp),
      line("Address", f.address),
      line("LinkedIn", f.linkedin),
      "\nTarget:",
      line("Target job position", f.targetRole),
      "\nBackground:",
      line("Education", f.education),
      line("Professional qualifications", f.professional),
      line("Work experience", f.experience),
      line("Skills (technical & soft)", f.skills),
      line("Projects", f.projects),
      line("Achievements", f.achievements),
      line("Certifications", f.certifications),
      cvName ? `\nCurrent CV: ${cvName} (I will attach it to the email)` : "\nCurrent CV: I will attach it to the email",
      f.additional.trim() ? `\nAdditional details: ${f.additional.trim()}` : "",
    ];
    return parts.filter(Boolean).join("\n");
  }, [f, cvName, orderSummary]);

  const emailFallback = () => {
    const subject = `Client Intake Brief: ${f.name || "New Client"} - ${f.targetRole || "Career Branding"}`;
    window.location.href = emailLink(subject, message);
    router.push("/order/confirmation");
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy) return;

    // No backend configured: keep the original email-based flow.
    if (!DB_ON) {
      emailFallback();
      return;
    }

    setBusy(true);
    try {
      const fd = new FormData();
      fd.set("order_summary", orderSummary ?? "");
      if (orderId) fd.set("order_id", orderId);
      if (order) fd.set("order", JSON.stringify(order));
      (Object.keys(f) as Array<keyof Fields>).forEach((k) => fd.set(k, f[k]));
      if (cvFile) fd.set("cv", cvFile);

      const res = await fetch("/api/intake", { method: "POST", body: fd });
      if (res.ok) {
        router.push(orderId ? `/order/confirmation?order=${orderId}` : "/order/confirmation");
        return;
      }
    } catch {
      /* fall through to email */
    }
    // Something went wrong (or backend unavailable): don't lose the brief.
    setBusy(false);
    emailFallback();
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Contact */}
      <fieldset className="card p-4 sm:p-6 sm:p-8 shadow-xs">
        <legend className="eyebrow px-1">Your details</legend>
        <div className="mt-4 grid gap-4 sm:gap-5 sm:grid-cols-2">
          <Field label="Full name" name="name" value={f.name} onChange={set} required autoComplete="name" placeholder="As it should appear on the CV" />
          <Field label="Email" name="email" type="email" value={f.email} onChange={set} required autoComplete="email" placeholder="you@example.com" />
          <Field label="Phone number" name="phone" type="tel" value={f.phone} onChange={set} required autoComplete="tel" placeholder="+1 ..." />
          <Field label="Alternative phone" name="whatsapp" type="tel" value={f.whatsapp} onChange={set} placeholder="Optional second number" />
          <Field label="LinkedIn profile link" name="linkedin" type="url" value={f.linkedin} onChange={set} placeholder="https://linkedin.com/in/..." />
          <Field label="Address" name="address" value={f.address} onChange={set} placeholder="City, country" />
        </div>
      </fieldset>

      {/* Target */}
      <fieldset className="card p-4 sm:p-6 sm:p-8 shadow-xs">
        <legend className="eyebrow px-1">Your target</legend>
        <div className="mt-4">
          <Field
            label="Target job position"
            name="targetRole"
            value={f.targetRole}
            onChange={set}
            required
            placeholder="The role and, if relevant, the market you are applying into"
          />
        </div>
      </fieldset>

      {/* Background */}
      <fieldset className="card p-4 sm:p-6 sm:p-8 shadow-xs">
        <legend className="eyebrow px-1">Your background</legend>
        <p className="mt-2 px-1 text-[13px] leading-relaxed text-muted">
          Give as much as you can. Rough notes are fine, this is turned into finished copy for
          you.
        </p>
        <div className="mt-5 space-y-4 sm:space-y-5">
          <Area label="Educational qualifications" name="education" value={f.education} onChange={set} placeholder="Degrees, institutions, years, relevant results" />
          <Area label="Professional qualifications" name="professional" value={f.professional} onChange={set} placeholder="Memberships, licences, professional bodies" />
          <Area label="Work experience" name="experience" value={f.experience} onChange={set} rows={5} placeholder="Roles, employers, dates, and what you actually did" hint="Most recent first. Include anything you are proud of, even briefly." />
          <Area label="Skills (technical and soft)" name="skills" value={f.skills} onChange={set} placeholder="Tools, technologies, languages, and the softer strengths" />
          <Area label="Projects" name="projects" value={f.projects} onChange={set} placeholder="Notable projects, your role, and the outcome" />
          <Area label="Achievements" name="achievements" value={f.achievements} onChange={set} placeholder="Awards, results, numbers, anything that stands out" />
          <Area label="Certifications" name="certifications" value={f.certifications} onChange={set} placeholder="Certificates, courses, issuing body and year" />
        </div>
      </fieldset>

      {/* CV + extra */}
      <fieldset className="card p-4 sm:p-6 sm:p-8 shadow-xs">
        <legend className="eyebrow px-1">Current CV and anything else</legend>
        <div className="mt-4 space-y-5">
          <div>
            <label htmlFor="cv" className="text-[13px] font-semibold text-ink">
              Current CV
            </label>
            <p className="mt-0.5 text-[12px] leading-relaxed text-muted">
              {DB_ON
                ? "Optional but helpful. Your file is sent securely with your brief."
                : "Optional but helpful. Pick your file here, then attach it to the email that opens when you submit."}
            </p>
            <input
              id="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => {
                const file = e.target.files?.[0] ?? null;
                setCvFile(file);
                setCvName(file?.name ?? "");
              }}
              className="mt-2 block w-full max-w-full text-[13px] text-ink-soft file:mr-3 sm:file:mr-4 file:rounded-full file:border-0 file:bg-brand-soft file:px-3.5 file:py-2 file:text-[12.5px] sm:file:text-[13px] file:font-semibold file:text-brand hover:file:bg-brand-soft/70"
            />
            {cvName && (
              <p className="mt-2 text-[12.5px] text-accent-deep break-all">Selected: {cvName}</p>
            )}
          </div>

          <Area label="Additional details" name="additional" value={f.additional} onChange={set} placeholder="Deadlines, target companies, anything you want reflected" />
        </div>
      </fieldset>

      <div className="flex flex-col gap-3.5 rounded-[14px] border border-line bg-sand/40 p-4 sm:p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-[13px] leading-relaxed text-muted">
          {DB_ON
            ? "Submitting sends your completed brief and CV securely to Chanuka, then takes you to a confirmation page."
            : "Submitting opens your email client with your completed brief ready to send directly to Chanuka. Attach your CV if you have one."}
        </p>
        <button
          type="submit"
          disabled={busy}
          className="w-full sm:w-auto shrink-0 rounded-full bg-brand px-7 py-3.5 text-center text-[14.5px] sm:text-[15px] font-semibold text-paper shadow-[0_10px_26px_-14px_rgb(23_53_92/0.9)] transition-all hover:bg-brand-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? "Submitting…" : "Submit my brief"}
        </button>
      </div>
    </form>
  );
}
