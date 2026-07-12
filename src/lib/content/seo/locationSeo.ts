import { getCityName } from "@/lib/utils";
import { LocationDataProps } from "@/app/types/Location";

export function getLocationSeoTexts(location: string) {
  const cityName = getCityName(location);

  const title = `Bagger & Baumaschinen mieten in ${cityName}`;
  const googleDescription = `Bagger & Baumaschinen in ${cityName} mieten – zu fairen Tagespreisen und mit schneller Verfügbarkeit. Jetzt passende Maschinen in ${cityName} entdecken bei BAGGER1.`;
  const openGraphDescription = `Bagger & Baumaschinen in ${cityName} mieten: Verfügbare Maschinen, faire Preise und direkte Anfrage online bei BAGGER1.`;
  const twitterDescription = `Bagger & Baumaschinen in ${cityName} mieten – Preise, Verfügbarkeit und passende Bagger direkt online bei BAGGER1 entdecken.`;
  const alt = `BAGGER1 – Bagger & Baumaschinen mieten in ${cityName}`;

  return {
    cityName,
    title,
    googleDescription,
    openGraphDescription,
    twitterDescription,
    alt,
  };
}

export function getLocationServiceJsonLd(location: LocationDataProps) {
  const baseUrl = "https://bagger1.de";

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${baseUrl}/${location.slug}/#rental-service`,

    name: location.seo.title,
    url: `${baseUrl}/${location.slug}`,
    description: location.seo.description,

    serviceType: "Vermietung von Baggern und Baumaschinen",

    provider: {
      "@id": `${baseUrl}/#organization`,
    },

    areaServed: location.deliveryAreas.map((area) => ({
      "@type": "City",
      name: area.city,
      address: {
        "@type": "PostalAddress",
        postalCode: area.postalCode,
        addressLocality: area.city,
        addressCountry: "DE",
      },
    })),

    ...(location.contact.telephone && {
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: `${baseUrl}/${location.slug}`,
        servicePhone: {
          "@type": "ContactPoint",
          telephone: location.contact.telephone,
          email: location.contact.email,
          contactType: "customer service",
          availableLanguage: ["de"],
        },
      },
    }),
  };
}
