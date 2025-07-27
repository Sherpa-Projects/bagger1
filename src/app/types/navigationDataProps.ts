import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type NavigationDataProps = {
  name: string;
  url?: string;
  icon?: IconDefinition;
  subData?: {
    name: string;
    url: string;
  }[];
}[];
