import { LocationDataProps } from "@/app/types/locationDataProps";

export const locationData: LocationDataProps[] = [
  {
    name: "Mannheim",
    slug: "mannheim",
    adress: "Wittenberger Weg 2, 68309 Mannheim",
    contact: {
      email: "info@bagger1.de",
    },
    image: {
      url: "/images/locations/mannheim.jpg",
      alt: "Luftaufnahme von Mannheim",
    },
  },
  {
    name: "Hennef",
    slug: "hennef",
    adress: "Kapelenhügel 3, 53773 Hennef",
    contact: {
      email: "info@bagger1.de",
    },
    image: {
      url: "/images/locations/hennef.jpg",
      alt: "Luftaufnahme von Hennef",
    },
  },
  {
    name: "Bruchsal",
    slug: "bruchsal",
    adress: "Schlesierstr. 5, 76694 Forst",
    contact: {
      email: "info@bagger1.de",
    },
    image: {
      url: "/images/locations/bruchsal.jpg",
      alt: "Bruchsaler Schloss",
    },
  },
];
