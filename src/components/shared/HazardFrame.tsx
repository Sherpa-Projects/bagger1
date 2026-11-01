import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import BlueprintGrid from "./BlueprintGrid";

type HazardFrameProps = {
  className?: string;
  children: ReactNode;
};

// Rahmen im Absperrband-Design (gelb/dunkel gestreift) mit weißer Innenfläche
export default function HazardFrame({ className, children }: HazardFrameProps) {
  return (
    <div
      className={cn(
        "rounded-3xl bg-[repeating-linear-gradient(-45deg,var(--color-primary)_0_18px,var(--color-secondary)_18px_36px)] p-2.5 shadow-lg sm:p-3",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-2xl bg-white">
        <BlueprintGrid />
        <div className="relative p-6 sm:p-10">{children}</div>
      </div>
    </div>
  );
}
