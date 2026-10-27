import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

// "md": Sektionsüberschrift, "lg": große Überschrift (Intro, Footer, Detailseiten)
const sizes = {
  md: "font-bold text-3xl md:text-4xl leading-tight",
  lg: "font-bold text-4xl md:text-5xl leading-[1.05]",
} as const;

type HeadlineProps = {
  children: ReactNode;
  as?: ElementType;
  size?: keyof typeof sizes;
  className?: string;
};

export default function Headline({
  children,
  as: Tag = "h2",
  size = "md",
  className,
}: HeadlineProps) {
  return <Tag className={cn(sizes[size], className)}>{children}</Tag>;
}
