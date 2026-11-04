import type { Metadata } from "next";
import { BASE_URL, OG_IMAGE_PATH, SITE_NAME } from "@/lib/site";

// "/" -> "https://bagger1.de", "/hennef" -> "https://bagger1.de/hennef"
export function absoluteUrl(path: string) {
  return path === "/" ? BASE_URL : `${BASE_URL}${path}`;
}

type PageSeo = {
  // Titel, der schon auf "| BAGGER1" endet, wird nicht noch einmal ergänzt
  title: string;
  description: string;
  openGraphDescription: string;
  twitterDescription: string;
  path: string;
  imageAlt: string;
  index?: boolean;
};

// Gemeinsame Metadaten aller Seiten: Canonical, Open Graph und Twitter
export function pageMetadata({
  title,
  description,
  openGraphDescription,
  twitterDescription,
  path,
  imageAlt,
  index = true,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);

  return {
    title: title.endsWith(`| ${SITE_NAME}`) ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url,
      siteName: SITE_NAME,
      title,
      description: openGraphDescription,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: twitterDescription,
      images: [OG_IMAGE_PATH],
    },
    robots: { index, follow: true },
  };
}

type LegalPageSeo = {
  metaTitle: string;
  metaDescription: { google: string; openGraph: string; twitter: string };
};

const LEGAL_OG_ALT =
  "Gelber Hintergrund mit schwarzem Text: ‚Bagger 1‘ in großer Schrift und darunter ‚Ihre Nummer 1 für Bagger und Baumaschinen‘ in kleinerer Schrift.";

// Metadaten der Rechtstexte (Impressum, Datenschutz, AGB), nicht indexiert
export function legalPageMetadata(
  { metaTitle, metaDescription }: LegalPageSeo,
  path: string,
): Metadata {
  return pageMetadata({
    title: metaTitle,
    description: metaDescription.google,
    openGraphDescription: metaDescription.openGraph,
    twitterDescription: metaDescription.twitter,
    path,
    imageAlt: LEGAL_OG_ALT,
    index: false,
  });
}
