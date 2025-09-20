import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { imprintPageData } from "@/lib/content/pages/impressum/imprintPageData";

export const metadata: Metadata = {
  title: `${imprintPageData.metaTitle} | Bagger1`,
  description: `${imprintPageData.metaDescription}`,
  openGraph: {
    title: `${imprintPageData.metaTitle} | Bagger1`,
    description: `${imprintPageData.metaDescription}`,
    url: "https://bagger1.de/impressum",
    siteName: "Bagger1",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Bagger1 Impressum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${imprintPageData.metaTitle} | Bagger1`,
    description: `${imprintPageData.metaDescription}`,
    images: ["/images/meta.png"],
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
