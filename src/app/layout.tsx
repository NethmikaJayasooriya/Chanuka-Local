import type { Metadata, Viewport } from "next";
import { Poppins, Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";
import { SiteStructuredData } from "@/components/JsonLd";
import { site } from "@/lib/site";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f8fafd",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Sri Lanka's No.1 Professional CV Writer | Chanuka Jeewantha (CPRW & CPCC)",
    template: "%s | Chanuka Jeewantha",
  },
  description:
    "Sri Lanka's trusted CPRW & CPCC certified CV writer. High-impact ATS friendly CV writing, LinkedIn optimization, cover letters, and overseas job packages from LKR 1,490.",
  keywords: [
    "Chanuka Jeewantha",
    "Professional CV Writer Sri Lanka",
    "ATS Friendly CV Sri Lanka",
    "CV writing services Colombo",
    "LinkedIn optimization Sri Lanka",
    "Resume writer Sri Lanka",
    "Executive CV writing",
    "Gulf job CV writer",
    "Australia migration CV",
  ],
  authors: [{ name: "Chanuka Jeewantha", url: site.url }],
  creator: "Chanuka Jeewantha",
  publisher: "Chanuka Jeewantha",
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: site.url,
    title: "Sri Lanka's No.1 Professional CV Writer | Chanuka Jeewantha",
    description:
      "Pass recruitment filters and land 3x more interviews with certified ATS resumes and LinkedIn branding.",
    siteName: "Chanuka Jeewantha",
    images: [
      {
        url: "/images/hero-chanuka.jpg",
        width: 1200,
        height: 630,
        alt: "Chanuka Jeewantha - Professional CV Writer Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chanuka Jeewantha | Professional CV Writer Sri Lanka",
    description: "Certified Professional Resume Writer (CPRW) & Career Coach (CPCC).",
    images: ["/images/hero-chanuka.jpg"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icons/icon-192.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en-LK"
      className={`${poppins.variable} ${sans.variable} ${display.variable}`}
    >
      <head>
        <SiteStructuredData />
      </head>
      <body className="min-h-screen flex flex-col bg-[#f8fafd] text-[#0e1a2b] font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
