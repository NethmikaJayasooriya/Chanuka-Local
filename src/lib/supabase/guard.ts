import { redirect } from "next/navigation";
import { createClient } from "./server";

/**
 * Returns the signed-in admin, or redirects to the login page. An admin
 * is a signed-in user whose id is present in the `admins` table.
 */
export async function requireAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const { data: adminRow } = await supabase
    .from("admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!adminRow) {
    // Signed in but not on the allow-list.
    await supabase.auth.signOut();
    redirect("/admin/login?denied=1");
  }

  return { user, email: user.email ?? "" };
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
      process.env.SUPABASE_SERVICE_ROLE_KEY,
  );
}
