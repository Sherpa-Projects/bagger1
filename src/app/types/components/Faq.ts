export type FaqProps = {
  title: string;
  content: FaqContentProps[];
};

export type FaqContentProps = {
  location: string;
  locationItems: {
    items: FaqItemProps[];
  };
  bucketItems: {
    items: FaqItemProps[];
  };
  rentalConditionItems: {
    items: FaqItemProps[];
  };
};

export type FaqItemProps = {
  question: string;
  answer: string;
  list?: string[];
};
