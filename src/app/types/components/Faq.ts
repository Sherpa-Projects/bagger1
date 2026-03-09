export type FaqProps = {
  title: string;
  subtitle: string;
  content: FaqContentProps[];
};

export type FaqContentProps = {
  location: string;
  items: FaqItemProps[];
};

export type FaqItemProps = {
  question: string;
  answer: string;
  list?: string[];
};