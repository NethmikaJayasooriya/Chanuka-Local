export const site = {
  name: "Chanuka Jeewantha",
  title: "Sri Lanka's No.1 Professional CV Writer & Career Strategist",
  domain: "chanukajeewantha.lk",
  url: "https://chanukajeewantha.lk",
  tagline: "CPRW & CPCC Certified Professional CV Writing, LinkedIn Optimization & Strategic Career Guidance in Sri Lanka",
  description:
    "Transform your career with Sri Lanka's trusted CPRW & CPCC certified CV writer. High-impact ATS friendly CVs, LinkedIn profile overhauls, and international relocation packages tailored to modern hiring algorithms.",
  phone: "+94 77 390 2230",
  phoneRaw: "94773902230",
  email: "cjwagaarachchi@gmail.com",
  location: "Colombo, Sri Lanka (Serving Islandwide & Sri Lankans Worldwide)",
  rating: {
    score: "4.9",
    count: "450+",
    label: "Google Reviews",
  },
  reviewsUrl: "https://share.google/ur2XItxcmhKNt8QL3",
  fiverrUrl: "https://www.fiverr.com/s/kLBDGAb",
  social: {
    linkedin: "https://www.linkedin.com/in/chanuka-jeewantha/",
    facebook: "https://www.facebook.com/share/15vdmdB4oE/",
    youtube: "https://www.youtube.com/@chanukajeewantha",
    instagram: "https://www.instagram.com/chanukajeewantha/",
    tiktok: "https://www.tiktok.com/@chanukajeewantha",
  },
  stats: [
    { value: "10,000+", label: "CVs & Resumes Crafted", sub: "For local and global job markets" },
    { value: "450+", label: "5-Star Google Reviews", sub: "Highest rated career specialist in SL" },
    { value: "8+ Years", label: "Professional Experience", sub: "CPRW & CPCC credentialed" },
    { value: "98%", label: "Interview Callback Rate", sub: "Measured within 30-45 days" },
  ],
  certifications: [
    {
      short: "CPRW",
      full: "Certified Professional Resume Writer",
      issuer: "Professional Association of Resume Writers & Career Coaches (PARW/CC)",
    },
    {
      short: "CPCC",
      full: "Certified Professional Career Coach",
      issuer: "International Career Coaching Association",
    },
    {
      short: "ATS Specialist",
      full: "Trained on Taleo, Workday, Greenhouse & Lever Parsing Engines",
      issuer: "Modern HR Tech Standards",
    },
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
