import { LocationSlug } from "./locationDataProps";

export type MachineDataProps = {
  name: string;
  slug: string;
  model: string;
  category: string;
  image: {
    url: string;
    alt: string;
  };
  pricePerDay: number;
  pricePerWeek?: number;
  pricePerMonth?: number;
  content?: {
    title: string;
    description: string;
    dataSheet: {
      dimensions?: {
        width?: string;
        length?: string;
        height?: string;
        weight?: string;
        volume?: string;
      };
      power?: string;
      workingRange?: {
        maxDepth?: string;
        maxReach?: string;
        swingRadius?: string;
        breakoutForce?: string;
        tearOutForce?: string;
      };
      content?: string;
    };
  };
  availableAt: LocationSlug[];
  articleId: string;
};
