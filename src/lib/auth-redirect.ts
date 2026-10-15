/** Keep checkout selections across login/signup without permitting off-site redirects. */
export function safeReturnPath(value: string | null | undefined): string {
  if (!value || !value.startsWith("/") || value.startsWith("//") || /[\\\u0000-\u0020\u007f]/.test(value)) return "/dashboard";
  try {
    const parsed = new URL(value, "https://www.chanukajeewantha.lk");
    if (parsed.origin !== "https://www.chanukajeewantha.lk") return "/dashboard";
    return parsed.pathname + parsed.search + parsed.hash;
  } catch { return "/dashboard"; }
}
