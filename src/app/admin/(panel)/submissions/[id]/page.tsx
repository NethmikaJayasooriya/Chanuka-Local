import Link from "next/link";
import { notFound } from "next/navigation";
import { BriefControls } from "./BriefControls";
import { Card } from "@/components/admin/ui";
import { createAdminClient } from "@/lib/supabase/admin";
import { supabaseConfigured } from "@/lib/supabase/guard";

export const dynamic = "force-dynamic";

export default async function BriefDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!supabaseConfigured()) return null;
  const db = createAdminClient();
  const { data: s } = await db.from("intake_submissions").select("*").eq("id", id).maybeSingle();
  if (!s) notFound();

  let cvUrl: string | null = null;
  if (s.cv_path) {
    const { data } = await db.storage.from("cvs").createSignedUrl(s.cv_path, 60 * 30);
    cvUrl = data?.signedUrl ?? null;
  }

  const contact: Array<[string, string]> = [
    ["Name", s.name], ["Email", s.email], ["Phone", s.phone], ["WhatsApp", s.whatsapp],
    ["Address", s.address], ["LinkedIn", s.linkedin], ["Target role", s.target_role],
  ];
  const bg: Array<[string, string]> = [
    ["Education", s.education], ["Professional qualifications", s.professional],
    ["Work experience", s.experience], ["Skills", s.skills], ["Projects", s.projects],
    ["Achievements", s.achievements], ["Certifications", s.certifications],
    ["Additional details", s.additional],
  ];

  return (
    <>
      <Link href="/admin/submissions" className="text-[13px] font-semibold text-brand">← CV briefs</Link>
      <h1 className="mt-3 text-[22px] font-bold text-ink">{s.name ?? "Brief"}</h1>
      {s.order_summary && <p className="mt-1 text-[13.5px] text-muted">Order: {s.order_summary}</p>}

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_300px]">
        <div className="space-y-5">
          <Card>
            <h2 className="mb-2 text-[14px] font-bold text-ink">Contact & target</h2>
            <dl className="grid gap-x-8 sm:grid-cols-2">
              {contact.map(([k, v]) => (
                <div key={k} className="border-b border-line py-2.5">
                  <dt className="text-[11.5px] font-semibold uppercase tracking-wide text-muted">{k}</dt>
                  <dd className="mt-0.5 text-[14px] text-ink break-words">{v || "-"}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <Card>
            <h2 className="mb-2 text-[14px] font-bold text-ink">Background</h2>
            <div className="space-y-4">
              {bg.map(([k, v]) => (
                <div key={k}>
                  <p className="text-[11.5px] font-semibold uppercase tracking-wide text-muted">{k}</p>
                  <p className="mt-1 whitespace-pre-wrap break-words text-[13.5px] leading-relaxed text-ink-soft">{v || "-"}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-5">
          <Card className="h-fit">
            <h2 className="text-[14px] font-bold text-ink">Current CV</h2>
            {s.cv_path ? (
              cvUrl ? (
                <a href={cvUrl} target="_blank" rel="noopener noreferrer"
                  className="mt-3 block rounded-full bg-brand px-4 py-2.5 text-center text-[13.5px] font-semibold text-white hover:bg-brand-deep">
                  Download CV
                </a>
              ) : <p className="mt-2 text-[13px] text-muted">File link unavailable.</p>
            ) : (
              <p className="mt-2 text-[13px] text-muted">No CV was uploaded with this brief.</p>
            )}
            {s.cv_filename && <p className="mt-2 truncate text-[12px] text-muted">{s.cv_filename}</p>}
          </Card>

          <BriefControls id={s.id} handled={s.handled} email={s.email} />
        </div>
      </div>
    </>
  );
}
