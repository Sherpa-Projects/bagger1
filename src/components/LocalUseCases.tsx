import { LocalUseCase } from "@/types/LocalUseCase";
import { localUsesCasesData } from "@/lib/content/components/localUseCasesData";
import { Card } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import BlueprintGrid from "@/components/shared/BlueprintGrid";

type LocalUseCasesProps = {
  locationName: string;
  useCases: LocalUseCase[];
};

export default function LocalUseCases({
  locationName,
  useCases,
}: LocalUseCasesProps) {
  return (
    <Section spacing="compact">
      <SectionHeader
        eyebrow="Einsatzbereiche"
        title={`${localUsesCasesData.title} ${locationName}`}
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {useCases?.map((item, index) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.title}
              className="group relative gap-0 rounded-3xl bg-gradient-to-br from-white via-white to-orange-50/60 p-6 hover:bg-white hover:border-primary/60"
            >
              {/* Bauplan-Raster als Hintergrund, wie in den anderen Cards */}
              <BlueprintGrid />
              <span
                className="absolute top-4 right-5 font-bold text-4xl text-gray-200/80 transition-colors duration-300 group-hover:text-primary/40"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25">
                  <Icon className="text-primary" size={24} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
