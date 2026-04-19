import { getCityName } from "@/lib/utils";

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
