import { getCityName } from "@/lib/utils";

export function getMachineSeoTexts(
  location: string,
  machineName: string,
  model: string,
  machineSlug: string,
) {
  const cityName = getCityName(location);

  const title = `Bagger & Baumaschine mieten – ${machineName}${model} in ${cityName}`;
  const googleDescription = `${machineName}${model} in ${cityName} mieten: Alle Infos zu Modell, Tagespreis und Verfügbarkeit. Jetzt direkt online bei BAGGER1 anfragen.`;
  const openGraphDescription = `${machineName}${model} in ${cityName}: Modell, Tagespreis und Verfügbarkeit auf einen Blick. Passende Baumaschine finden und direkt online bei BAGGER1 mieten.`;
  const twitterDescription = `${machineName}${model} in ${cityName} mieten – Preis, Verfügbarkeit und Online-Anfrage bei BAGGER1.`;
  const url = `https://bagger1.de/${machineSlug}`;
  const alt = `BAGGER1 – ${machineName} mieten in ${cityName}`

  return {
    title,
    googleDescription,
    openGraphDescription,
    twitterDescription,
    url,
    alt,
  };
}
