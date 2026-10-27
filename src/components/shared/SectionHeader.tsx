import type { ReactNode } from "react";
import Eyebrow from "./Eyebrow";
import Headline from "./Headline";

type SectionHeaderProps = {
  eyebrow: ReactNode;
  title: ReactNode;
};

// Zentrierter Kopf aus Eyebrow und Überschrift über Karten-Rastern
export default function SectionHeader({ eyebrow, title }: SectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-col items-center gap-4 text-center lg:mb-8">
      <Eyebrow>{eyebrow}</Eyebrow>
      <Headline>{title}</Headline>
    </div>
  );
}
