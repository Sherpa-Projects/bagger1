import { locationData } from "@/lib/content/locationData";

export const validLocations = [
  "mannheim",
  "hennef",
  "bruchsal",
  "stockstadt",
] as const;

export type Location = (typeof validLocations)[number];

export type LocationDataProps = {
  name: string;
  slug: Location;
  adress: string;
  contact: {
    telephone?: string;
    email: string;
  };
  image: {
    url: string;
    alt: string;
  };
  map: string;
};

export type LocationSlug = (typeof locationData)[number]["slug"];
