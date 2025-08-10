import { machineData } from "./content/machineData";

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
  machine: {
    price: { perDay: number };
    inventory: Record<string, { priceOverride?: { perDay?: number } }[]>;
  },
  location: string
) {
  const entries = machine.inventory[location];
  const first = entries?.[0];
  return first?.priceOverride?.perDay ?? machine.price.perDay;
}
