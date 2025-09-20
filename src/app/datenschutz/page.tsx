import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { privacyPageData } from "@/lib/content/pages/datenschutz/privacyPageData";

export const metadata: Metadata = {
  title: `${privacyPageData.metaTitle} | Bagger1`,
  description: `${privacyPageData.metaDescription}`,
  openGraph: {
    title: `${privacyPageData.metaTitle} | Bagger1`,
    description: `${privacyPageData.metaDescription}`,
    url: "https://bagger1.de/datenschutz",
    siteName: "Bagger1",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Bagger1 Datenschutzerklärung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${privacyPageData.metaTitle} | Bagger1`,
    description: `${privacyPageData.metaDescription}`,
    images: ["/images/meta.png"],
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
