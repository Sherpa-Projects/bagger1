import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { b2cPageData } from "@/lib/content/pages/agb/b2cPageData";

export const metadata: Metadata = {
  title: `${b2cPageData.metaTitle}`,
  description: `${b2cPageData.metaDescription.google}`,
  openGraph: {
    title: `${b2cPageData.metaTitle} | Bagger1`,
    description: `${b2cPageData.metaDescription.openGraph}`,
    url: "https://bagger1.de/impressum",
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
    title: `${b2cPageData.metaTitle} | Bagger1`,
    description: `${b2cPageData.metaDescription.twitter}`,
    images: ["/images/og-image.png"],
  },
  robots: "noindex, follow",
};

export default function Page() {
  const { Body } = b2cPageData;
  return (
    <>
      <Navigation />
      <Body />
      <Footer />
    </>
  );
}
