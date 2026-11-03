import { Card, PageTitle } from "@/components/admin/ui";
import { createAdminClient } from "@/lib/supabase/admin";
import { requireAdmin } from "@/lib/supabase/guard";
import { addTeamMember, removeTeamMember, updateTeamMember } from "./actions";

export const dynamic = "force-dynamic";

export default async function TeamPage() {
  await requireAdmin(undefined, true);
  const { data: members } = await createAdminClient().from("admins").select("user_id,email,role,site_access,created_at").order("created_at");

  return <>
    <PageTitle title="Team access" sub="Give each person only the site they are responsible for. Owners always retain access to both." />
    <Card>
      <h2 className="text-[15px] font-bold text-ink">Add a manager</h2>
      <p className="mt-1 text-[12.5px] text-muted">New users receive a secure Supabase invitation email. Existing users are connected immediately.</p>
      <form action={addTeamMember} className="mt-4 grid gap-3 sm:grid-cols-[minmax(0,1fr)_190px_auto]">
        <input type="email" name="email" required placeholder="manager@example.com" className="rounded-[10px] border border-line-strong bg-white px-3.5 py-2.5 text-[14px] outline-none focus:border-brand" />
        <select name="access" defaultValue="lk" className="rounded-[10px] border border-line-strong bg-white px-3.5 py-2.5 text-[14px] outline-none focus:border-brand">
          <option value="lk">Sri Lanka only</option><option value="com">Global only</option><option value="all">Both sites</option>
        </select>
        <button className="rounded-full bg-brand px-5 py-2.5 text-[13.5px] font-semibold text-white hover:bg-brand-deep">Invite manager</button>
      </form>
    </Card>
    <div className="mt-5 space-y-3">
      {(members ?? []).map((member) => {
        const sites = Array.isArray(member.site_access) ? member.site_access : [];
        const value = sites.includes("com") && sites.includes("lk") ? "all" : sites.includes("com") ? "com" : "lk";
        return <Card key={member.user_id} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-[14px] font-semibold text-ink">{member.email}</p><p className="mt-0.5 text-[11px] font-bold uppercase tracking-wide text-muted">{member.role === "owner" ? "Owner · both sites" : "Manager"}</p></div>
          {member.role === "owner" ? <span className="rounded-full bg-brand-soft px-3 py-1.5 text-[12px] font-semibold text-brand">Full access</span> : <div className="flex flex-wrap gap-2">
            <form action={updateTeamMember} className="flex gap-2"><input type="hidden" name="user_id" value={member.user_id} /><select name="access" defaultValue={value} className="rounded-lg border border-line-strong bg-white px-3 py-2 text-[12.5px]"><option value="lk">Sri Lanka only</option><option value="com">Global only</option><option value="all">Both sites</option></select><button className="rounded-full border border-line px-4 py-2 text-[12.5px] font-semibold hover:bg-[#f7f9fc]">Save</button></form>
            <form action={removeTeamMember}><input type="hidden" name="user_id" value={member.user_id} /><button className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-[12.5px] font-semibold text-red-600 hover:bg-red-100">Remove</button></form>
          </div>}
        </Card>;
      })}
    </div>
  </>;
}
