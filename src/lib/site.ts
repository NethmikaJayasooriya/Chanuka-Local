export const site = {
  name: "Chanuka Jeewantha",
  domain: "chanukajeewantha.com",
  url: "https://chanukajeewantha.com",
  tagline: "CV, LinkedIn and career branding for professionals competing worldwide",
  email: "info@chanukajeewantha.com",
  rating: {
    score: "4.9",
    count: "107",
    label: "Google reviews",
  },
  reviewsUrl: "https://share.google/ur2XItxcmhKNt8QL3",
  stats: [
    { value: "1,700+", label: "Professionals served" },
    { value: "40+", label: "Countries served" },
    { value: "24h", label: "Fastest delivery" },
    { value: "4.9/5", label: "Average rating" },
  ],
} as const;

export function emailLink(subject: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const q = params.toString();
  return `mailto:${site.email}${q ? `?${q}` : ""}`;
}
