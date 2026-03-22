import { getCityName } from "@/lib/utils";

export function getLocationSeoTexts(location: string) {
  const cityName = getCityName(location);

  const title = `Baumaschinen mieten in ${cityName}`;
  const googleDescription = `Baumaschinen und Bagger in ${cityName} mieten – zu fairen Tagespreisen und mit schneller Verfügbarkeit. Jetzt passende Maschinen in ${cityName} entdecken bei BAGGER1.`;
  const openGraphDescription = `Bagger und Baumaschinen in ${cityName} mieten: Verfügbare Maschinen, faire Preise und direkte Anfrage online bei BAGGER1.`;
  const twitterDescription = `Baumaschinen in ${cityName} mieten – Preise, Verfügbarkeit und passende Bagger direkt online bei BAGGER1 entdecken.`;
  const alt = `BAGGER1 – Baumaschinen mieten in ${cityName}`;

  return {
    cityName,
    title,
    googleDescription,
    openGraphDescription,
    twitterDescription,
    alt,
  };
}
