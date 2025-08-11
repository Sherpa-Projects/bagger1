import { Machine } from "@/app/types/Machine";

export const machineData: Machine[] = [
  {
    name: "1,8t Bagger",
    slug: "18t-bagger",
    model: "Kubota HE28",
    category: "Bagger",
    image: {
      url: "/images/machines/Kubota_HE28.jpeg",
      alt: "Gelber Bagger auf Hügel",
    },
    price: { perDay: 100, perWeek: 700, perMonth: 3000 },
    content: {
      title: "",
      description: "",
      dataSheet: {
        dimensions: {
          width: "980/1 350 mm",
          height: "2 390 mm",
          length: "3 640 mm",
          weight: "1 825 kg",
          volume: "0.04 m³",
        },
        power: "14.6 kW 2 400 U/min",
        workingRange: {
          maxDepth: "2 360 mm",
          maxReach: "4 000 mm",
          minSwingRadius: "1 705 mm",
          bucketBreakoutForceISO: "15.2 kN",
          armTearOutForceISO: "9.2 kN",
        },
      },
    },
    inventory: {
      hennef: [{ articleId: "F5596I" }],
      mannheim: [{ articleId: "2AT3K3" }],
      // mannheim: [{ articleId: "2AT3K3", priceOverride: { perDay: 110 } }],
      bruchsal: [{ articleId: "3HIBNP" }, { articleId: "XYZ123" }],
    },
  },
  // {
  //   name: "1,1t Bagger",
  //   slug: "1-1t-bagger",
  //   model: "Bobcat E10z",
  //   category: "Bagger",
  //   image: {
  //     url: "/images/machines/Bobcat_E10z.jpeg",
  //     alt: "",
  //   },
  //   pricePerDay: 75,
  //   pricePerWeek: 500,
  //   pricePerMonth: 2000,
  //   content: {
  //     title: "",
  //     description: "",
  //     dataSheet: {
  //       dimensions: {
  //         width: "",
  //         length: "",
  //         height: "",
  //         weight: "",
  //       },
  //       workingRange: {
  //         maxDepth: "",
  //       },
  //       content: "",
  //     },
  //   },
  //   availableAt: ["mannheim", "hennef"],
  //   articleId: "3HIBNP",
  // },
  // {
  //   name: "Kipphänger",
  //   slug: "kipphaenger",
  //   model: "Humbaur HTK 3500.31",
  //   category: "kipphänger",
  //   image: {
  //     url: "/images/machines/Humbaur_HTK.jpeg",
  //     alt: "",
  //   },
  //   pricePerDay: 210,
  //   pricePerWeek: 500,
  //   pricePerMonth: 2000,
  //   content: {
  //     title: "",
  //     description: "",
  //     dataSheet: {
  //       dimensions: {
  //         width: "",
  //         length: "",
  //         height: "",
  //         weight: "",
  //       },
  //       workingRange: {
  //         maxDepth: "",
  //       },
  //       content: "",
  //     },
  //   },
  //   availableAt: ["mannheim", "hennef", "bruchsal"],
  //   articleId: "3HIBNP",
  // },
  // {
  //   name: "Stampfer",
  //   slug: "stampfer",
  //   model: "Wacker Neuson BS60-2i",
  //   category: "baumaschine",
  //   image: {
  //     url: "/images/machines/Wacker_Neuson_BS60-2i.jpeg",
  //     alt: "",
  //   },
  //   pricePerDay: 45,
  //   pricePerWeek: 500,
  //   pricePerMonth: 2000,
  //   content: {
  //     title: "",
  //     description: "",
  //     dataSheet: {
  //       dimensions: {
  //         width: "",
  //         length: "",
  //         height: "",
  //         weight: "",
  //       },
  //       workingRange: {
  //         maxDepth: "",
  //       },
  //       content: "",
  //     },
  //   },
  //   availableAt: ["hennef", "bruchsal"],
  //   articleId: "3HIBNP",
  // },
  // {
  //   name: "Rüttelplatte",
  //   slug: "ruettelplatte",
  //   model: "Wacker Neuson DPU 3050",
  //   category: "baumaschine",
  //   image: {
  //     url: "/images/machines/Wacker_Neuson_DPU_3050.jpeg",
  //     alt: "",
  //   },
  //   pricePerDay: 45,
  //   pricePerWeek: 500,
  //   pricePerMonth: 2000,
  //   content: {
  //     title: "",
  //     description: "",
  //     dataSheet: {
  //       dimensions: {
  //         width: "",
  //         length: "",
  //         height: "",
  //         weight: "",
  //       },
  //       workingRange: {
  //         maxDepth: "",
  //       },
  //       content: "",
  //     },
  //   },
  //   availableAt: ["hennef", "bruchsal"],
  //   articleId: "3HIBNP",
  // },
  // {
  //   name: "Stubbenfräse",
  //   slug: "stubbenfraese",
  //   model: "FSI B20",
  //   category: "baumaschine",
  //   image: {
  //     url: "",
  //     alt: "",
  //   },
  //   pricePerDay: 45,
  //   pricePerWeek: 500,
  //   pricePerMonth: 2000,
  //   content: {
  //     title: "",
  //     description: "",
  //     dataSheet: {
  //       dimensions: {
  //         width: "",
  //         length: "",
  //         height: "",
  //         weight: "",
  //       },
  //       workingRange: {
  //         maxDepth: "",
  //       },
  //       content: "",
  //     },
  //   },
  //   availableAt: ["hennef"],
  //   articleId: "3HIBNP",
  // },
] as const;
