import { machineData } from "./content/machineData";
import { locationData } from "./content/locationData";
import type { Machine } from "@/types/Machine";

export function getMachineBySlug(slug: string) {
  return machineData.find((m) => m.slug === slug);
}

export function isAvailableAt(machine: Machine, location: string) {
  return (machine.inventory[location]?.length ?? 0) > 0;
}

export function getDeliveryFlatRate(machine: Machine, location: string) {
  return machine.deliveryFlatRateByLocation?.[location];
}

// Maschinen mit Pauschallieferung (aus anderem Standort) kommen ans Ende
export function getMachinesForLocation(location: string) {
  const available = machineData.filter((m) => isAvailableAt(m, location));
  const hasFlatRate = (m: Machine) =>
    getDeliveryFlatRate(m, location) !== undefined;
  return [
    ...available.filter((m) => !hasFlatRate(m)),
    ...available.filter(hasFlatRate),
  ];
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

export function getMinRentalDays(machine: Machine, location: string) {
  return (
    machine.minRentalDaysByLocation?.[location] ?? machine.minRentalDays ?? 1
  );
}
