import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { imprintPageData } from "@/lib/content/pages/impressum/imprintPageData";

export const metadata: Metadata = {
  title: imprintPageData.metaTitle,
  description: imprintPageData.metaDescription.google,
  openGraph: {
    title: imprintPageData.metaTitle,
    description: imprintPageData.metaDescription.openGraph,
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
    title: imprintPageData.metaTitle,
    description: imprintPageData.metaDescription.twitter,
    images: ["/images/og-image.png"],
  },
  robots: "noindex, follow",
};

export default function Page() {
  const { Body } = imprintPageData;

  return (
    <>
      <Navigation />
      <Body />
      <Footer />
    </>
  );
}
