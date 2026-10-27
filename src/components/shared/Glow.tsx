import { cn } from "@/lib/cn";

// Weicher oranger Lichtschein; Position, Größe und Stärke kommen per className
export default function Glow({ className }: { className: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute rounded-full blur-3xl",
        className,
      )}
      aria-hidden="true"
    />
  );
}
