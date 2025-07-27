export type LocationDataProps = {
  name: string;
  slug: string;
  adress: {
    street: string;
    city: string;
  };
  contact: {
    telephone: string;
    email: string;
  };
};

import { locationData } from "@/lib/content/locationData";

export type LocationSlug = (typeof locationData)[number]["slug"];
