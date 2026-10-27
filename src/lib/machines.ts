import { machineData } from "./content/machineData";
import { locationData } from "./content/locationData";
import type { Machine } from "@/types/Machine";

export function getMachineBySlug(slug: string) {
  return machineData.find((m) => m.slug === slug);
}

export function isAvailableAt(machine: Machine, location: string) {
  return (machine.inventory[location]?.length ?? 0) > 0;
}

export function getMachinesForLocation(location: string) {
  return machineData.filter((m) => isAvailableAt(m, location));
}

// Alle Kombinationen aus Standort und dort verfügbarer Maschine (Routen, Sitemap)
export function getLocationMachineRouteParams() {
  return locationData.flatMap((loc) =>
    getMachinesForLocation(loc.slug).map((machine) => ({
      location: loc.slug,
      machine: machine.slug,
    })),
  );
}

export function getMinRentalDays(machine: Machine) {
  return machine.minRentalDays ?? 1;
}
