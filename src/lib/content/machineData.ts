import { Machine } from "@/app/types/Machine";

export const machineData: Machine[] = [
  {
    name: "2,7t Bagger",
    slug: "hitachi-zx26u-5",
    model: "Hitachi Zx26U-5",
    category: "bagger",
    image: {
      url: "/images/machines/hitachi-Zx26U-5.png",
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
    category: "bagger",
    image: {
      url: "/images/machines/kubota-kx016-4.png",
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
    category: "bagger",
    image: {
      url: "/images/machines/kubota-kx019-4.png",
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
    category: "bagger",
    image: {
      url: "/images/machines/kubota-u10-5.png",
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
      bruchsal: [{ articleId: "H6QGO8" }],
    },
  },
  {
    name: "Verputzmaschine",
    slug: "pft-g4",
    model: "PFT G4",
    category: "machine",
    image: {
      url: "/images/machines/pft-g4.png",
      alt: "Orangene Verputzmaschine.",
    },
    price: { perDay: 70, perWeek: 56, perMonth: 35 },
    content: {
      title: "PFT G4 Verputzmaschine",
      description:
        "Die PFT G4 ist eine robuste, transportfreundliche Mischpumpe zur zuverlässigen Verarbeitung maschinengängiger Mörtel und ideal für den flexiblen Baustelleneinsatz.",
    },
    inventory: {
      bruchsal: [{ articleId: "VXNK8E" }],
    },
  },
  {
    name: "Rüttelplatte 100 kg",
    slug: "bomag-100",
    model: "Bomag 100 kg",
    category: "machine",
    image: {
      url: "/images/machines/bomag-100.png",
      alt: "Schwarzgelbe Rüttelplatte.",
    },
    price: { perDay: 30, perWeek: 24, perMonth: 15 },
    content: {
      title: "Bomag Rüttelplatte 100 kg",
      description:
        "Bomag Rüttelplatte 100 kg zur zuverlässigen Verdichtung von Schotter, Sand und Pflasterflächen.",
    },
    inventory: {
      bruchsal: [{ articleId: "AEED4F" }],
      stockstadt: [{ articleId: "4X636F" }],
    },
  },
  {
    name: "Rüttelplatte 150 kg",
    slug: "bomag-150",
    model: "Bomag 150 kg",
    category: "machine",
    image: {
      url: "/images/machines/bomag-150.png",
      alt: "Schwarzgelbe Rüttelplatte.",
    },
    price: { perDay: 30, perWeek: 24, perMonth: 15 },
    content: {
      title: "Bomag Rüttelplatte 150 kg",
      description:
        "Bomag Rüttelplatte 150 kg zur zuverlässigen Verdichtung von Schotter, Sand und Pflasterflächen.",
    },
    inventory: {
      hennef: [{ articleId: "L1P1YF" }],
    },
  },
  {
    name: "Stampfer",
    slug: "ammann-60-68",
    model: "Ammann 60 / 68",
    category: "machine",
    image: {
      url: "/images/machines/ammann-60-68.png",
      alt: "Schwarzgelber Stampfer.",
    },
    price: { perDay: 25, perWeek: 20, perMonth: 12 },
    content: {
      title: "Ammann 60/68 Rüttelplatte",
      description:
        "Ammann 60/68 Rüttelplatte für kraftvolle Bodenverdichtung im Erd- und Pflasterbau.",
    },
    inventory: {
      hennef: [{ articleId: "I9KAW8" }],
      bruchsal: [{ articleId: "P5DPKR" }],
      stockstadt: [{ articleId: "YYTU19" }],
    },
  },
  {
    name: "Dumper",
    slug: "muck-truck-maxi-2",
    model: "Muck Truck MAXI II",
    category: "machine",
    image: {
      url: "/images/machines/muck-truck-maxi-2.png",
      alt: "Silberner Dumper mit MAX II Schriftzug.",
    },
    price: { perDay: 50, perWeek: 40, perMonth: 25 },
    content: {
      title: "Muck Truck MAXI II Dumper",
      description:
        "Muck Truck MAXI II Dumper mit einer Tragfähigkeit von bis zu 365 kg – robuster und wendiger Baustellen-Transporter für Materialbewegung.",
    },
    inventory: {
      hennef: [{ articleId: "CRFM16" }],
      bruchsal: [{ articleId: "F4P7SJ" }],
      stockstadt: [{ articleId: "IW2G8Y" }],
    },
  },
  {
    name: "Bautrockner",
    slug: "trotec-bautrockner",
    model: "Trotec Bautrockner",
    category: "machine",
    image: {
      url: "/images/machines/trotec-bautrockner.png",
      alt: "Schwarzweißer Bautrockner mit Räder.",
    },
    price: { perDay: 10, perWeek: 8, perMonth: 5 },
    content: {
      title: "Trotec Bautrockner",
    },
    inventory: {
      hennef: [{ articleId: "U8UMST" }],
      bruchsal: [{ articleId: "3UYOOP" }],
    },
  },
] as const;
