import type { ComponentType, SVGProps } from "react";
import SurfaceCard from "@/components/shared/SurfaceCard";

type PartnerItem = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
};

// Bei "Titel: Beschreibung" den Titel hervorheben
function ItemText({ text }: { text: string }) {
  const index = text.indexOf(": ");
  if (index === -1) return <>{text}</>;
  return (
    <>
      <span className="font-semibold text-secondary">
        {text.slice(0, index)}
      </span>
      {": "}
      {text.slice(index + 2)}
    </>
  );
}

export default function PartnerList({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<PartnerItem>;
}) {
  return (
    <SurfaceCard className="h-full p-6 sm:p-8">
      <h3 className="font-bold text-2xl md:text-3xl mb-4">{title}</h3>
      <ul className="divide-y divide-gray-100">
        {items.map(({ Icon, text }) => (
          <li key={text} className="group flex items-center gap-4 py-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25">
              <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
            </span>
            <p className="text-base leading-snug text-gray-700 lg:text-lg">
              <ItemText text={text} />
            </p>
          </li>
        ))}
      </ul>
    </SurfaceCard>
  );
}
