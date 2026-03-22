import { machineData } from "./content/machineData";
import { Machine } from "@/app/types/Machine";
import { InventoryEntry } from "@/app/types/Machine";
import { locationData } from "./content/locationData";
import { validLocations, Location } from "@/app/types/Location";
import { FaqContentProps } from "@/app/types/components/Faq";

export function isValidLocation(loc: string): loc is Location {
  return (validLocations as readonly string[]).includes(loc);
}

export const validMachines: Record<Location, string[]> = validLocations.reduce(
  (acc, loc) => {
    acc[loc] = machineData
      .filter((m) => (m.inventory[loc]?.length ?? 0) > 0)
      .map((m) => m.slug);
    return acc;
  },
  {} as Record<Location, string[]>,
);

export function isValidMachine(location: Location, machine: string): boolean {
  return validMachines[location]?.includes(machine);
}

export function getPricePerDayForLocation(
  machine: Machine,
  location: Location,
): number {
  const base = machine.price.perDay;

  const entries = (machine.inventory?.[location] ?? []) as InventoryEntry[];

  const override = entries.find((e) => e.priceOverride?.perDay !== undefined)
    ?.priceOverride?.perDay;

  return override ?? base;
}

const capitalize = (s: string) =>
  s ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s;

export function getCityName(slug: string): string {
  const match = locationData.find((l) => l.slug === slug);
  if (match?.name) return match.name;

  return slug
    .replace(/[_]/g, "-")
    .split("-")
    .filter(Boolean)
    .map(capitalize)
    .join(" ");
}

export function getFaqContentForLocation(
  faqContent: FaqContentProps[],
  location: Location,
): FaqContentProps | undefined {
  return faqContent.find((content) => content.location === location);
}

export function getLocationMachineRouteParams() {
  return locationData.flatMap((loc) =>
    machineData
      .filter((machine) => (machine.inventory[loc.slug]?.length ?? 0) > 0)
      .map((machine) => ({
        location: loc.slug,
        machine: machine.slug,
      })),
  );
}

export function humanizeSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(" ");
}
