import { NavigationDataProps } from "@/app/types/navigationsDataProps";
import {
  faLocationDot,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

export const navigationData: NavigationDataProps = [
  {
    name: "Standorte",
    icon: faLocationDot,
    subData: [
      { name: "Mannheim", url: "/mannheim" },
      { name: "Karlsruhe", url: "karlsruhe" },
      { name: "Heidelberg", url: "/heidelberg" },
      { name: "Waghäusel", url: "waghaeusel" },
      { name: "Dortmund", url: "dortmund" },
    ],
  },
];
