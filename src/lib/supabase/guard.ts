import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "./server";

export type AdminSite = "com" | "lk" | "uk";
export type AdminAccess = {
  user: User;
  email: string;
  role: "owner" | "manager";
  sites: AdminSite[];
};

export function canManageSite(access: Pick<AdminAccess, "role" | "sites">, site: string | null | undefined) {
  return (
    access.role === "owner" ||
    (site === "com" && access.sites.includes("com")) ||
    (site === "lk" && access.sites.includes("lk")) ||
    (site === "uk" && access.sites.includes("uk"))
  );
}

export function resolveAdminSite(requested: string | null | undefined, access: Pick<AdminAccess, "sites">): AdminSite | undefined {
  if (
    (requested === "com" || requested === "lk" || requested === "uk") &&
    access.sites.includes(requested as AdminSite)
  ) {
    return requested as AdminSite;
  }
  return access.sites.length === 1 ? access.sites[0] : undefined;
}

/**
 * Returns the signed-in admin, or redirects to the login page. An admin
 * is a signed-in user whose id is present in the `admins` table.
 */
export async function requireAdmin(requiredSite?: AdminSite, ownerOnly = false): Promise<AdminAccess> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: adminRow } = await supabase
    .from("admins")
    .select("user_id,role,site_access")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!adminRow) {
    // Signed in but not on the allow-list.
    await supabase.auth.signOut();
    redirect("/admin/login?denied=1");
  }

  const role = adminRow.role === "owner" ? "owner" : "manager";
  const rawSites = Array.isArray(adminRow.site_access) ? adminRow.site_access : ["com"];
  const sites = rawSites.filter((site): site is AdminSite => site === "com" || site === "lk" || site === "uk");
  const access: AdminAccess = { user, email: user.email ?? "", role, sites: role === "owner" ? ["com", "lk", "uk"] : sites };

  if (ownerOnly && role !== "owner") redirect("/admin?denied=owner");
  if (requiredSite && !canManageSite(access, requiredSite)) redirect("/admin?denied=site");
  return access;
}

/** The signed-in user, or null. For pages that adapt to auth state. */
export async function getSessionUser() {
  if (!supabaseConfigured()) return null;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/** Require any signed-in customer, else redirect to /login. */
export async function requireUser(next = "/dashboard") {
  const user = await getSessionUser();
  if (!user) redirect(`/login?next=${encodeURIComponent(next)}`);
  return user;
}

export function supabaseConfigured() {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
      process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}
