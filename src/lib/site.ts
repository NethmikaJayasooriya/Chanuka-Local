export const site = {
  name: "Chanuka Jeewantha",
  domain: "chanukajeewantha.lk",
  url: "https://chanukajeewantha.lk",
  phone: "+94 77 390 2230",
  phoneRaw: "94773902230",
  tagline: "CV, LinkedIn and career branding for professionals competing in Sri Lanka & worldwide",
  email: "cjwagaarachchi@gmail.com",
  rating: {
    score: "4.9",
    count: "450+",
    label: "Google reviews",
  },
  reviewsUrl: "https://share.google/ur2XItxcmhKNt8QL3",
  stats: [
    { value: "10,000+", label: "CVs & Resumes Crafted" },
    { value: "450+", label: "5-Star Reviews" },
    { value: "24h", label: "Fastest delivery" },
    { value: "4.9/5", label: "Average rating" },
  ],
} as const;

export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.phoneRaw}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function emailLink(subject: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${site.email}${q ? `?${q}` : ""}`;
}

