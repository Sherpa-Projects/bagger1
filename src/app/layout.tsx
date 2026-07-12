import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Consent from "@/components/Consent";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import Ambient from "@/components/Ambient";

const BASE_URL = "https://bagger1.de";
const OG_IMAGE_URL = "https://bagger1.de/images/og_image.png";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${BASE_URL}/#organization`,
  name: "BAGGER1",
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo_orange.svg`,
  image: OG_IMAGE_URL,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ihre Nummer 1 für Bagger und Maschinen | BAGGER1",
    template: "%s | BAGGER1",
  },
  description:
    "Finde jetzt verfügbare Bagger und Maschinen an deinem Standort. Mit flexiblen Zeiträumen, transparenten Preisen und direkter Online-Buchung bei BAGGER1.",
  openGraph: {
    type: "website",
    siteName: "Bagger1",
    title: "Ihre Nummer 1 für Bagger und Maschinen | BAGGER1",
    description:
      "Finde jetzt verfügbare Bagger und Maschinen an deinem Standort. Mit flexiblen Zeiträumen, transparenten Preisen und direkter Online-Buchung bei BAGGER1.",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "BAGGER1",
      },
    ],
  },
  twitter: {
    title: "Ihre Nummer 1 für Bagger und Maschinen | BAGGER1",
    description:
      "Miete Bagger und Maschinen direkt Online an deinem Standort mit flexiblen Zeiträumen und transparenten Preisen.",
    card: "summary_large_image",
    images: [OG_IMAGE_URL],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="antialiased">
      <body>
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Ambient />
        {children}
        <ThirdPartyScripts />
        <Consent />
        <rtr-checkout></rtr-checkout>
      </body>
    </html>
  );
}
