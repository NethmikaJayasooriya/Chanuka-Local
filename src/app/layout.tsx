import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/Seo";
import { siteGraphLd } from "@/lib/seo";
import { RevealInit } from "@/components/RevealInit";
import { StickyBar } from "@/components/StickyBar";
import { ConsentAnalytics } from "@/components/ConsentAnalytics";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Professional CV Writing for International Careers | Chanuka Jeewantha",
    template: "%s | Chanuka Jeewantha",
  },
  description:
    "ATS-optimised CV writing, cover letters and LinkedIn optimisation for professionals competing internationally. Written for the market you are applying into. Delivery from 24 hours.",
  applicationName: site.name,
  authors: [{ name: site.name, url: `${site.url}/about/chanuka-jeewantha` }],
  creator: site.name,
  publisher: site.name,
  category: "Career services",
  formatDetection: { email: false, telephone: false, address: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_GB",
    title: "Professional CV Writing for International Careers",
    description:
      "ATS-optimised CV writing, cover letters and LinkedIn optimisation for professionals competing internationally.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Chanuka Jeewantha — CV, LinkedIn and career branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional CV Writing for International Careers",
    description:
      "ATS-optimised CV writing, cover letters and LinkedIn optimisation for professionals competing internationally.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  verification: {
    // Bing Webmaster Tools site verification (renders <meta name="msvalidate.01" ...>)
    other: { "msvalidate.01": "7B0FD319711D2F6A1E4649C72DC92F65" },
  },
  // Canonical + hreflang are set per page (never inherited from here),
  // so no page silently canonicalises to the home page.
};

/**
 * Sets data-js before first paint so the scroll-reveal hidden state
 * only ever applies when JavaScript is running. With JS off, and for
 * any crawler that does not execute scripts, every section renders
 * visible.
 */
const jsFlag = `document.documentElement.setAttribute("data-js","1");window.__revealFallback=setTimeout(function(){document.documentElement.removeAttribute("data-js")},2500)`;

// Google Analytics 4. Override the property with NEXT_PUBLIC_GA_ID if needed.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-JBG5EY2YXW";
const gaEnabled = process.env.NODE_ENV === "production" && !!GA_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
        <JsonLd data={siteGraphLd()} />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyBar />
        <RevealInit />
        {gaEnabled && <ConsentAnalytics gaId={GA_ID} />}
      </body>
    </html>
  );
}
