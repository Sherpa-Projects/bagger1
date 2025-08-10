import { NavigationDataProps } from "@/app/types/navigationDataProps";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { locationData } from "./locationData";

export const NavigationData: NavigationDataProps = [
  {
    name: "Standorte",
    icon: faLocationDot,
    subData: locationData.map((location) => ({
      name: location.name,
      url: `/${location.slug.replace(/^\/?/, "")}`,
    })),
  },
];
