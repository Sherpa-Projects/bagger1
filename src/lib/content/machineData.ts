import { MachineDataProps } from "@/app/types/machineDataProps";

export const machineData: MachineDataProps[] = [
  {
    name: "1,8t Bagger",
    slug: "1-8t-bagger-zusatzbauten",
    model: "Kubota HE28 inkl. Zusatzanbauten",
    category: "Bagger",
    image: {
      url: "/images/machines/Kubota_HE28.jpeg",
      alt: "Gelber Bagger steht auf einem Hügel",
    },
    pricePerDay: 120,
    pricePerWeek: 500,
    pricePerMonth: 2000,
    content: {
      title: "test title",
      description: "test description",
      dataSheet: {
        dimensions: {
          width: "",
          height: "",
          weight: "",
          volume: "",
        },
        workingRange: {
          maxDepth: "",
        },
        content: "",
      },
    },
    availableAt: ["hennef"],
    articleId: "3HIBNP",
  },
  {
    name: "1,8t Bagger",
    slug: "1-8t-bagger",
    model: "Kubota HE28 (nicht Eurotrac)",
    category: "Bagger",
    image: {
      url: "/images/machines/bagger1.jpg",
      alt: "Gelber Bagger steht auf einem Hügel",
    },
    pricePerDay: 95,
    pricePerWeek: 500,
    pricePerMonth: 2000,
    content: {
      title: "test title",
      description: "test description",
      dataSheet: {
        dimensions: {
          width: "980/1 350 mm",
          length: "3 640 mm",
          height: "2 390 mm",
          weight: "1 825 kg",
          volume: "0.04 m³",
        },
        power: "14.6 kW 2 400 U/min",
        workingRange: {
          maxDepth: "1,6m",
          maxReach: "",
          swingRadius: "",
          breakoutForce: "",
          tearOutForce: "",
        },
        content: "Hinweis: Angaben können leicht abweichen.",
      },
    },
    availableAt: ["mannheim"],
    articleId: "3HIBNP",
  },
  {
    name: "1,1t Bagger",
    slug: "1-1t-bagger",
    model: "Bobcat E10z",
    category: "Bagger",
    image: {
      url: "/images/machines/Bobcat_E10z.jpeg",
      alt: "",
    },
    pricePerDay: 75,
    pricePerWeek: 500,
    pricePerMonth: 2000,
    content: {
      title: "",
      description: "",
      dataSheet: {
        dimensions: {
          width: "",
          length: "",
          height: "",
          weight: "",
        },
        workingRange: {
          maxDepth: "",
        },
        content: "",
      },
    },
    availableAt: ["mannheim", "hennef"],
    articleId: "3HIBNP",
  },
  {
    name: "Kipphänger",
    slug: "kipphaenger",
    model: "Humbaur HTK 3500.31",
    category: "kipphänger",
    image: {
      url: "/images/machines/Humbaur_HTK.jpeg",
      alt: "",
    },
    pricePerDay: 210,
    pricePerWeek: 500,
    pricePerMonth: 2000,
    content: {
      title: "",
      description: "",
      dataSheet: {
        dimensions: {
          width: "",
          length: "",
          height: "",
          weight: "",
        },
        workingRange: {
          maxDepth: "",
        },
        content: "",
      },
    },
    availableAt: ["mannheim", "hennef", "bruchsal"],
    articleId: "3HIBNP",
  },
  {
    name: "Stampfer",
    slug: "stampfer",
    model: "Wacker Neuson BS60-2i",
    category: "baumaschine",
    image: {
      url: "/images/machines/Wacker_Neuson_BS60-2i.jpeg",
      alt: "",
    },
    pricePerDay: 45,
    pricePerWeek: 500,
    pricePerMonth: 2000,
    content: {
      title: "",
      description: "",
      dataSheet: {
        dimensions: {
          width: "",
          length: "",
          height: "",
          weight: "",
        },
        workingRange: {
          maxDepth: "",
        },
        content: "",
      },
    },
    availableAt: ["hennef", "bruchsal"],
    articleId: "3HIBNP",
  },
  {
    name: "Rüttelplatte",
    slug: "ruettelplatte",
    model: "Wacker Neuson DPU 3050",
    category: "baumaschine",
    image: {
      url: "/images/machines/Wacker_Neuson_DPU_3050.jpeg",
      alt: "",
    },
    pricePerDay: 45,
    pricePerWeek: 500,
    pricePerMonth: 2000,
    content: {
      title: "",
      description: "",
      dataSheet: {
        dimensions: {
          width: "",
          length: "",
          height: "",
          weight: "",
        },
        workingRange: {
          maxDepth: "",
        },
        content: "",
      },
    },
    availableAt: ["hennef", "bruchsal"],
    articleId: "3HIBNP",
  },
  {
    name: "Stubbenfräse",
    slug: "stubbenfraese",
    model: "FSI B20",
    category: "baumaschine",
    image: {
      url: "",
      alt: "",
    },
    pricePerDay: 45,
    pricePerWeek: 500,
    pricePerMonth: 2000,
    content: {
      title: "",
      description: "",
      dataSheet: {
        dimensions: {
          width: "",
          length: "",
          height: "",
          weight: "",
        },
        workingRange: {
          maxDepth: "",
        },
        content: "",
      },
    },
    availableAt: ["hennef"],
    articleId: "3HIBNP",
  },
] as const;
