import type { Metadata } from "next";
import "./globals.css";
import { AnalyticsBootstrap } from "@/components/analytics-bootstrap";
import { CookieConsent } from "@/components/cookie-consent";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} | AI Voice Agent Platform`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: `${siteConfig.name} | AI Agents & Voice Agent Platform`,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.socialImage, width: 1200, height: 630, alt: "AISimplified" }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | AI Voice Agent Platform`,
    description: siteConfig.description,
    images: [siteConfig.socialImage]
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = organizationSchema();
  const webJsonLd = websiteSchema();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-950 antialiased dark:bg-slate-950 dark:text-slate-100">
        <AnalyticsBootstrap gaId={gaId} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webJsonLd) }}
        />
        <div className="relative min-h-screen overflow-x-hidden bg-mesh">
          <Header />
          <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">{children}</main>
          <Footer />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
