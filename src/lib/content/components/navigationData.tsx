import type { ReactElement } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { locationData } from "../locationData";

type NavigationDataProps = {
  name: string;
  url?: string;
  icon?: IconDefinition;
  subData?: {
    name: string;
    url: string;
  }[];
};

export const navigationLocationData: NavigationDataProps[] = [
  {
    name: "Standorte",
    icon: faLocationDot,
    subData: locationData.map((location) => ({
      name: location.name,
      url: `/${location.slug.replace(/^\/?/, "")}`,
    })),
  },
];

export const navigationPartnerData: NavigationDataProps = {
  name: "Partner werden",
  url: "/partner",
};

export const navigationKleinanzeigenData: NavigationDataProps = {
  name: "Kleinanzeigen",
  url: "https://www.instagram.com/bagger1.de?igsh=MWRuZ2J3cTd0bDJ5bg==",
};

export const navigationInstagramData: NavigationDataProps = {
  name: "Instagram",
  url: "https://www.kleinanzeigen.de/s-bestandsliste.html?userId=156249218",
};

export const navigationWhatsappData: NavigationDataProps = {
  name: "WhatsApp",
  url: "https://wa.me/4915232707284",
};

export const banner: string =
  "Offizielles Mitglied im Bundesverband der Baumaschinen-, Baugeräte- und Industriemaschinen-Firmen e.V.";

export const brandName: React.ReactElement = (
  <span className="font-oswald ml-2 text-xl">
    BAGGER<span className="text-primary">1</span>
    <br />
  </span>
);
