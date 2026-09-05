import { RatingProps } from "@/components/Rating";
import { locationData } from "@/lib/content/locationData";

export const validLocations = [
  "mannheim",
  "hennef",
  "bruchsal",
  "aschaffenburg",
] as const;

export type DeliveryAreaProps = {
  city: string;
  postalCode: string;
  distanceKm: number;
};

export type Location = (typeof validLocations)[number];

export type LocationDataProps = {
  name: string;
  slug: Location;
  address: string;
  contact: {
    telephone?: string;
    email: string;
  };
  image: {
    url: string;
    alt: string;
  };
  map: string;
  rating?: RatingProps;
  seo: {
    title: string;
    description: string;
  };
  deliveryAreas: DeliveryAreaProps[];
};

export type LocationSlug = (typeof locationData)[number]["slug"];
