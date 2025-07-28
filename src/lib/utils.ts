import { locationData } from "./content/locationData";
import { machineData } from "./content/machineData";

export const validLocations = locationData.map((loc) => loc.slug) as string[];
export type Location = (typeof validLocations)[number];

export const validMachines: Record<Location, string[]> = validLocations.reduce(
  (acc, location) => {
    acc[location] = machineData
      .filter((machine) => machine.availableAt.includes(location))
      .map((machine) => machine.slug);
    return acc;
  },
  {} as Record<Location, string[]>
);

export function isValidLocation(loc: string): loc is Location {
  return validLocations.includes(loc as Location);
}

export function isValidMachine(location: Location, machine: string): boolean {
  return validMachines[location]?.includes(machine);
}
