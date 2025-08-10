export type LocationSlug = "mannheim" | "hennef" | "bruchsal";

export type Price = {
  perDay: number;
  perWeek?: number;
  perMonth?: number;
};

export type InventoryEntry = {
  articleId: string;
  qty?: number;
  priceOverride?: Partial<Price>;
};

export type InventoryByLocation = Partial<Record<string, InventoryEntry[]>>;

export type Machine = {
  name: string;
  slug: string;
  model: string;
  category: string;
  image: { url: string; alt: string };
  price: Price;
  content?: {
    title?: string;
    description?: string;
    dataSheet?: {
      dimensions?: {
        width?: string;
        height?: string;
        length?: string;
        weight?: string;
        volume?: string;
      };
      power?: string;
      workingRange?: { maxDepth?: string };
    };
  };
  inventory: InventoryByLocation;
};
