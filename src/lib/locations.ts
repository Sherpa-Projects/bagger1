import { locationData } from "./content/locationData";
import { validLocations, Location } from "@/types/Location";

export function isValidLocation(loc: string): loc is Location {
  return (validLocations as readonly string[]).includes(loc);
}

export function getLocationBySlug(slug: string) {
  return locationData.find((l) => l.slug === slug);
}

// "kubota-kx016-4" -> "Kubota Kx016 4"
export function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export function getCityName(slug: string): string {
  return getLocationBySlug(slug)?.name ?? humanizeSlug(slug.replace(/_/g, "-"));
}
