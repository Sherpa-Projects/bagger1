import { MachineDataProps } from "@/app/types/machineDataProps";

export const machineData: MachineDataProps[] = [
  {
    name: "Bagger 1",
    slug: "bagger1",
    image: {
      url: "/images/machines/bagger1.jpg",
      alt: "Gelber Bagger steht auf einem Hügel",
    },
    pricePerDay: 120,
    availableAt: ["mannheim", "heidelberg"],
  },
  {
    name: "Radlader 3000",
    slug: "radlader-3000",
    image: {
      url: "/images/machines/bagger1.jpg",
      alt: "Gelber Bagger steht auf einem Hügel",
    },
    pricePerDay: 95,
    availableAt: ["mannheim"],
  },
  {
    name: "Minibagger X2",
    slug: "minibagger-x2",
    image: {
      url: "",
      alt: "",
    },
    pricePerDay: 75,
    availableAt: ["karlsruhe", "waghaeusel"],
  },
  {
    name: "Kran FlexLift",
    slug: "kran-flexlift",
    image: {
      url: "",
      alt: "",
    },
    pricePerDay: 210,
    availableAt: ["heidelberg"],
  },
  {
    name: "Rüttelplatte RP-50",
    slug: "ruettelplatte-rp50",
    image: {
      url: "",
      alt: "",
    },
    pricePerDay: 45,
    availableAt: ["dortmund", "karlsruhe"],
  },
] as const;
