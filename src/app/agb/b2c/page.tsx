import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { b2cPageData } from "@/lib/content/pages/agb/b2cPageData";

export const metadata: Metadata = {
  title: `${b2cPageData.metaTitle}`,
  description: `${b2cPageData.metaDescription}`,
  openGraph: {
    title: `${b2cPageData.metaTitle} | Bagger1`,
    description: `${b2cPageData.metaDescription}`,
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
    title: `${b2cPageData.metaTitle} | Bagger1`,
    description: `${b2cPageData.metaDescription}`,
    images: ["/images/meta.png"],
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
