import { Location } from "@/lib/utils";

export type LocationDataProps = {
  name: string;
  slug: Location;
  adress: string;
  contact: {
    telephone: string;
    email: string;
  };
  image: {
    url: string;
    alt: string;
  };
};

import { locationData } from "@/lib/content/locationData";

export type LocationSlug = (typeof locationData)[number]["slug"];
