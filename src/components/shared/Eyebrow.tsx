import type { ElementType, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  // "pill": helle Sektionen (Kapsel mit Punkt oder Icon),
  // "label": dunkle Sektionen (orange Großbuchstaben)
  variant?: "pill" | "label";
  icon?: LucideIcon;
  pulse?: boolean;
  as?: ElementType;
  className?: string;
};

export default function Eyebrow({
  children,
  variant = "pill",
  icon: Icon,
  pulse = false,
  as: Tag = "p",
  className,
}: EyebrowProps) {
  if (variant === "label") {
    return (
      <Tag
        className={cn(
          "text-sm font-semibold uppercase tracking-widest text-primary",
          Icon && "flex items-center gap-2",
          className,
        )}
      >
        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-secondary",
        className,
      )}
    >
      {Icon ? (
        <Icon className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
      ) : (
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full bg-primary",
            pulse && "animate-pulse",
          )}
        />
      )}
      {children}
    </Tag>
  );
}
