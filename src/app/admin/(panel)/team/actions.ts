"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/supabase/guard";
import { createAdminClient } from "@/lib/supabase/admin";

function accessFrom(form: FormData) {
  const value = String(form.get("access") ?? "lk");
  return value === "all"
    ? ["com", "lk", "uk"]
    : value === "com"
    ? ["com"]
    : value === "uk"
    ? ["uk"]
    : ["lk"];
}

async function findAuthUser(email: string) {
  const db = createAdminClient();
  for (let page = 1; page <= 10; page += 1) {
    const { data, error } = await db.auth.admin.listUsers({ page, perPage: 100 });
    if (error) throw error;
    const user = data.users.find((candidate) => candidate.email?.toLowerCase() === email);
    if (user || data.users.length < 100) return user ?? null;
  }
  return null;
}

export async function addTeamMember(form: FormData) {
  await requireAdmin(undefined, true);
  const db = createAdminClient();
  const email = String(form.get("email") ?? "").trim().toLowerCase();
  if (!email) return;

  let user = await findAuthUser(email);
  if (!user) {
    const { data, error } = await db.auth.admin.inviteUserByEmail(email);
    if (error) throw error;
    user = data.user;
  }

  await db.from("admins").upsert({
    user_id: user.id,
    email,
    role: "manager",
    site_access: accessFrom(form),
  });
  revalidatePath("/admin/team");
}

export async function updateTeamMember(form: FormData) {
  await requireAdmin(undefined, true);
  const userId = String(form.get("user_id") ?? "");
  if (!userId) return;
  await createAdminClient().from("admins").update({ site_access: accessFrom(form) }).eq("user_id", userId).eq("role", "manager");
  revalidatePath("/admin/team");
}

export async function removeTeamMember(form: FormData) {
  await requireAdmin(undefined, true);
  const userId = String(form.get("user_id") ?? "");
  if (!userId) return;
  await createAdminClient().from("admins").delete().eq("user_id", userId).eq("role", "manager");
  revalidatePath("/admin/team");
}
