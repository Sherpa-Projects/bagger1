import type { ReactNode } from "react";
import Container from "./Container";

// Abstände der Sektionen: "default" für eigenständige Blöcke,
// "compact" für Blöcke, die direkt an die vorherige Sektion anschließen
const spacings = {
  default: "py-10 lg:py-20 px-4",
  compact: "pb-10 pt-5 lg:pb-20 lg:pt-10 px-4",
} as const;

type SectionProps = {
  id?: string;
  spacing?: keyof typeof spacings;
  // Ersetzt den Abstand komplett, falls keine Vorgabe passt
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export default function Section({
  id,
  spacing = "default",
  className,
  containerClassName,
  children,
}: SectionProps) {
  return (
    <section id={id} className={className ?? spacings[spacing]}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
