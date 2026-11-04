import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

// Einheitliche Inhaltsbreite aller Sektionen
export const CONTAINER_CLASS =
  "container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return <div className={cn(CONTAINER_CLASS, className)}>{children}</div>;
}
