import { LocationDataProps } from "@/app/types/locationDataProps";

export const locationData: LocationDataProps[] = [
  {
    name: "Mannheim",
    slug: "mannheim",
    adress: "Wittenberger Weg 2, 68309 Mannheim",
    contact: {
      telephone: "123",
      email: "test@bagger1.de",
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
      telephone: "123",
      email: "test@bagger1.de",
    },
    image: {
      url: "/images/locations/hennef.jpg",
      alt: "Luftaufnahme von Hennef",
    },
  },
  {
    name: "Bruchsal",
    slug: "bruchsal",
    adress: "teststraße 15, 76694 Forst",
    contact: {
      telephone: "123",
      email: "test@bagger1.de",
    },
    image: {
      url: "/images/locations/bruchsal.jpg",
      alt: "Bruchsaler Schloss",
    },
  },
];
