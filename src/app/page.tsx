import { Metadata } from "next";
import Script from "next/script";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import BranchCard from "../components/BranchCard";
import BookingSteps from "@/components/BookingSteps";
import type { LucideIcon } from "lucide-react";
import { homePageData } from "@/lib/content/pages/home/homePageData";
import { getHomeSeoTexts } from "@/lib/content/seo/homeSeo";
import IconRow from "@/components/IconRow";
import PromoBanner from "@/components/PromoBanner";
import {
  navigationInstagramData,
  navigationKleinanzeigenData,
} from "@/lib/content/components/navigationData";
import { company } from "@/lib/content/company";
import Testimonials from "@/components/Testimonials";

const BASE_URL = "https://bagger1.de";
const OG_IMAGE_URL = "https://bagger1.de/images/og_image.png";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,

  name: "BAGGER1",
  legalName: "BAGGER1",

  url: BASE_URL,
  image: OG_IMAGE_URL,
  logo: `${BASE_URL}/images/logo_orange.svg`,

  description:
    "BAGGER1 vermietet Bagger und Baumaschinen mit transparenten Preisen, flexiblen Mietzeiträumen und direkter Online-Buchung.",

  email: company.contact.email,
  telephone: company.contact.telephone,

  contactPoint: {
    "@type": "ContactPoint",
    contactType: company.contact.email,
    email: company.contact.email,
    telephone: company.contact.telephone,
    availableLanguage: ["de"],
  },

  areaServed: [
    {
      "@type": "Country",
      name: "Deutschland",
    },
  ],

  priceRange: "€€",

  sameAs: [navigationInstagramData.url, navigationKleinanzeigenData.url],

  makesOffer: {
    "@type": "OfferCatalog",
    name: "Bagger und Baumaschinen mieten",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bagger mieten",
          provider: {
            "@id": `${BASE_URL}/#localbusiness`,
          },
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Baumaschinen mieten",
          provider: {
            "@id": `${BASE_URL}/#localbusiness`,
          },
        },
      },
    ],
  },

  knowsAbout: [
    "Minibagger",
    "Bagger",
    "Baumaschinen",
    "Maschinenvermietung",
    "Rüttelplatten",
    "Stampfer",
    "Dumper",
    "Radlader",
    "Bautrockner",
  ],
};

export const generateMetadata = (): Metadata => {
  const {
    title,
    googleDescription,
    openGraphDescription,
    twitterDescription,
    alt,
  } = getHomeSeoTexts();

  return {
    title: title,
    description: googleDescription,
    robots: "index, follow",
    openGraph: {
      title: title,
      description: openGraphDescription,
      url: "https://bagger1.de",
      siteName: "BAGGER1",
      images: {
        url: "/images/og_image.png",
        width: 1200,
        height: 630,
        alt: alt,
      },
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: twitterDescription,
      images: ["/images/og_image.png"],
    },
  };
};

type UspBadge = { label: string; Icon: LucideIcon; sr?: string };

export default function Home() {
  const { hero, intro, usp, career } = homePageData;
  const items: ReadonlyArray<UspBadge> = usp.uspBadges;

  return (
    <>
      <Script
        id="localbusiness-jsonld"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <Navigation />
      <main>
        <Hero image={hero.image} title={hero.title} subtitle={hero.subtitle} />
        <Intro
          title={intro.title}
          paragraphs={intro.paragraphs}
          image={intro.image}
        />
        <Testimonials />
        <IconRow title={usp.title} items={items} />
        <BranchCard />
        <BookingSteps />
        <PromoBanner
          image={career.image}
          title={career.title}
          text={career.text}
          button={career.button}
        />
      </main>
      <Footer />
    </>
  );
}
