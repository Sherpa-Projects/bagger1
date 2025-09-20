import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { b2bPageData } from "@/lib/content/pages/agb/b2bPageData";

export const metadata: Metadata = {
  title: `${b2bPageData.metaTitle}`,
  description: `${b2bPageData.metaDescription.google}`,
  openGraph: {
    title: `${b2bPageData.metaTitle} | Bagger1`,
    description: `${b2bPageData.metaDescription.openGraph}`,
    url: "https://bagger1.de/impressum",
    siteName: "Bagger1",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Bagger1 allgemeine Geschäftsbedingungen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${b2bPageData.metaTitle} | Bagger1`,
    description: `${b2bPageData.metaDescription.twitter}`,
    images: ["/images/meta.png"],
  },
  robots: "noindex, follow",
};

export default function Page() {
  const { Body } = b2bPageData;
  return (
    <>
      <Navigation />
      <Body />
      <Footer />
    </>
  );
}
