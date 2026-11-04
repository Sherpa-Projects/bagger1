import type { ReactNode } from "react";
import { MapPinned } from "lucide-react";
import Section from "@/components/shared/Section";
import BlueprintGrid from "@/components/shared/BlueprintGrid";
import Glow from "@/components/shared/Glow";

type BookingContextProps = {
  data: ReactNode;
};

export default function BookingContext({ data }: BookingContextProps) {
  return (
    <Section spacing="compact">
      <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-white to-orange-50/70 shadow-sm">
        {/* Bauplan-Raster und Schimmer als Hintergrund, wie in der Intro */}
        <BlueprintGrid className="bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_top_right,black_10%,transparent_65%)]" />
        <Glow className="-top-24 -right-24 h-64 w-64 bg-primary/15" />

        <div className="relative flex items-start gap-4 p-6 md:items-center md:gap-8 md:p-10">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 md:h-14 md:w-14 md:rounded-2xl">
            <MapPinned
              className="h-5 w-5 text-primary md:h-7 md:w-7"
              aria-hidden="true"
            />
          </span>
          <p className="max-w-4xl text-base leading-relaxed text-gray-700 lg:text-lg">
            {data}
          </p>
        </div>
      </div>
    </Section>
  );
}
