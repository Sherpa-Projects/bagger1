import { cn } from "@/lib/cn";

const lines = {
  light:
    "bg-[linear-gradient(to_right,rgb(26_29_42/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(26_29_42/0.05)_1px,transparent_1px)]",
  dark: "bg-[linear-gradient(to_right,rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.06)_1px,transparent_1px)]",
} as const;

// Standard für Karten: feines Raster, das oben rechts ausläuft
const CARD_GRID =
  "bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_top_right,black_5%,transparent_55%)]";

type BlueprintGridProps = {
  tone?: keyof typeof lines;
  // Rastergröße und Maske; ersetzt die Karten-Vorgabe
  className?: string;
};

// Bauplan-Raster als dekorativer Hintergrund (Elternelement braucht "relative")
export default function BlueprintGrid({
  tone = "light",
  className,
}: BlueprintGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0",
        lines[tone],
        className ?? CARD_GRID,
      )}
      aria-hidden="true"
    />
  );
}
