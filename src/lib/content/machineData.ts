import { Machine } from "@/app/types/Machine";

export const machineData: Machine[] = [
  {
    name: "2,7t Bagger",
    slug: "hitachi-zx26u-5",
    model: "Hitachi Zx26U-5",
    category: "Bagger",
    image: {
      url: "/images/machines/hitachi-Zx26U-5.jpg",
      alt: "Oranger Bagger mit Fahrerkabine steht auf Betonboden.",
    },
    price: { perDay: 120 },
    content: {
      title: "",
      description: "",
      specifications: {
        dimensions: {
          width: "1,50 m",
          weight: "ca. 2,7 t",
        },
        workingRange: {
          maxDepth: "ca. 2,73 m",
        },
      },
    },
    inventory: {
      hennef: [{ articleId: "OCVQU4" }],
      // mannheim: [{ articleId: "2AT3K3", priceOverride: { perDay: 110 } }],
    },
  },
  {
    name: "1,6t Bagger",
    slug: "kubota-kx016-4",
    model: "Kubota KX016-4",
    category: "Bagger",
    image: {
      url: "/images/machines/kubota-kx016-4.jpg",
      alt: "Oranger Bagger mit Fahrerkabine steht auf Betonboden.",
    },
    price: { perDay: 100 },
    content: {
      title: "",
      description: "",
      specifications: {
        dimensions: {
          width: "1,50 m",
          weight: "1,6 t",
        },
        power: "9,6 kW (13 PS)",
        workingRange: {
          maxDepth: "2,25 m",
        },
      },
    },
    inventory: {
      mannheim: [{ articleId: "TK9WPV" }],
      bruchsal: [{ articleId: "ZHLFH1" }],
    },
  },
  {
    name: "1,8t Bagger",
    slug: "kubota-kx019-4",
    model: "Kubota KX019-4",
    category: "Bagger",
    image: {
      url: "/images/machines/kubota-kx019-4.jpg",
      alt: "Oranger Bagger mit Fahrerkabine steht auf Betonboden.",
    },
    price: { perDay: 110 },
    content: {
      title: "",
      description: "",
      specifications: {
        dimensions: {
          width: "0,99 m bis 1,3 m",
          weight: "ca. 1,8 t",
        },
        workingRange: {
          maxDepth: "ca. 2,58 m",
        },
      },
    },
    inventory: {
      stockstadt: [{ articleId: "ACEQK6" }],
    },
  },
  {
    name: "1,1t Bagger",
    slug: "kubota-u10-5",
    model: "Kubota U10-5",
    category: "Bagger",
    image: {
      url: "/images/machines/kubota-u10-5.jpg",
      alt: "Oranger Bagger mit Fahrerkabine steht auf Betonboden.",
    },
    price: { perDay: 90, perWeek: 72, perMonth: 45 },
    content: {
      title: "Neuer Kubota U10-5 mit Schnellwechsler",
      description: "ROPS BAR - Hydraulischer Unterwagen",
      specifications: {
        dimensions: {
          width: "750–990 mm",
          weight: "1,1 t",
        },
        power: "7,4 kW (10,2 PS)",
        workingRange: {
          maxDepth: "1,8 m",
        },
      },
    },
    inventory: {
      hennef: [{ articleId: "QHP8S7" }],
    },
  },
] as const;
