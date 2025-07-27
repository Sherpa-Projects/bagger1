import { LocationSlug } from "./locationDataProps";

export type MachineDataProps = {
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string;
  };
  pricePerDay: number;
  availableAt: LocationSlug[];
};
