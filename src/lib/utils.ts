import { machineData } from "./content/machineData";
import { Machine } from "@/app/types/Machine";
import { InventoryEntry } from "@/app/types/Machine";

export const validLocations = ["mannheim", "hennef", "bruchsal"] as const;
export type Location = (typeof validLocations)[number];

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
  {} as Record<Location, string[]>
);

export function isValidMachine(location: Location, machine: string): boolean {
  return validMachines[location]?.includes(machine);
}

export function getPricePerDayForLocation(
  machine: Machine,
  location: Location
): number {
  const base = machine.price.perDay;

  const entries = (machine.inventory?.[location] ?? []) as InventoryEntry[];

  const override = entries.find((e) => e.priceOverride?.perDay !== undefined)
    ?.priceOverride?.perDay;

  return override ?? base;
}
