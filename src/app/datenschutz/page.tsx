import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { privacyPageData } from "@/lib/content/pages/datenschutz/privacyPageData";

export const metadata: Metadata = {
  title: `${privacyPageData.metaTitle} | Bagger1`,
  description: `${privacyPageData.metaDescription.google}`,
  openGraph: {
    title: `${privacyPageData.metaTitle} | Bagger1`,
    description: `${privacyPageData.metaDescription.openGraph}`,
    url: "https://bagger1.de/datenschutz",
    siteName: "Bagger1",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gelber Hintergrund mit schwarzem Text: ‚Bagger 1‘ in großer Schrift und darunter ‚Ihre Nummer 1 für Bagger und Baumaschinen‘ in kleinerer Schrift.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${privacyPageData.metaTitle} | Bagger1`,
    description: `${privacyPageData.metaDescription.twitter}`,
    images: ["/images/og-image.png"],
  },
  robots: "noindex, follow",
};

export default function Page() {
  const { Body } = privacyPageData;

  return (
    <>
      <Navigation />
      <Body />
      <Footer />
    </>
  );
}
