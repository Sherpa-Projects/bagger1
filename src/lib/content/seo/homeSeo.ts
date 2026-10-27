import { company } from "@/lib/content/company";
import {
  navigationInstagramData,
  navigationKleinanzeigenData,
} from "@/lib/content/components/navigationData";
import { BASE_URL, LOGO_URL, OG_IMAGE_URL, SITE_NAME } from "@/lib/site";

export function getHomeSeoTexts() {
  const title = "Ihre Nummer 1 für Bagger und Maschinen | BAGGER1";
  const googleDescription =
    "Verfügbare Bagger & Maschinen in Ihrer Nähe finden – flexibel mieten, transparent buchen und direkt online reservieren bei BAGGER1.";
  const openGraphDescription =
    "Finden Sie jetzt verfügbare Bagger und Maschinen an Ihrem Standort. Mit flexiblen Zeiträumen, transparenten Preisen und direkter Online-Buchung bei BAGGER1.";
  const twitterDescription =
    "Bagger & Maschinen in Ihrer Nähe – flexibel mieten & direkt online buchen bei BAGGER1.";
  const alt = "Startseite | BAGGER1";

  return {
    title,
    googleDescription,
    openGraphDescription,
    twitterDescription,
    alt,
  };
}

export const homeLocalBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#localbusiness`,

  name: SITE_NAME,
  legalName: SITE_NAME,

  url: BASE_URL,
  image: OG_IMAGE_URL,
  logo: LOGO_URL,

  description:
    "BAGGER1 vermietet Bagger und Baumaschinen mit transparenten Preisen, flexiblen Mietzeiträumen und direkter Online-Buchung.",

  email: company.contact.email,
  telephone: company.contact.telephone,

  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
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
