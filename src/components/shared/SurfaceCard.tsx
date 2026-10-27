import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import BlueprintGrid from "./BlueprintGrid";

type SurfaceCardProps = {
  className?: string;
  children: ReactNode;
};

// Helle Karte mit Verlauf und Bauplan-Raster (Preise, Datenblatt, Partner)
export default function SurfaceCard({ className, children }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-white to-orange-50/60 shadow-sm",
        className,
      )}
    >
      <BlueprintGrid />
      <div className="relative">{children}</div>
    </div>
  );
}
