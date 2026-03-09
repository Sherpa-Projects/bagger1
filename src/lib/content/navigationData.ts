import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { locationData } from "./locationData";

type NavigationDataProps = {
  name: string;
  url?: string;
  icon?: IconDefinition;
  subData?: {
    name: string;
    url: string;
  }[];
}[];

export const navigationData: NavigationDataProps = [
  {
    name: "Standorte",
    icon: faLocationDot,
    subData: locationData.map((location) => ({
      name: location.name,
      url: `/${location.slug.replace(/^\/?/, "")}`,
    })),
  },
];
