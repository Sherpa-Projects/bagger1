import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import PriceTable from "./PriceTable";
import { Machine } from "@/types/Machine";
import { Location } from "@/types/Location";
import { Card } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import BlueprintGrid from "@/components/shared/BlueprintGrid";

type MachineCardProps = {
  title: string;
  machines: Machine[];
  location: Location;
  machineCard: {
    cta: string;
  };
};

export default function MachineCard({
  title,
  machines,
  location,
  machineCard,
}: MachineCardProps) {
  return (
    <Section className="pt-10 pb-10 lg:pt-20 px-4">
      <SectionHeader
        eyebrow={`${machines.length} ${machines.length === 1 ? "Modell" : "Modelle"} verfügbar`}
        title={title}
      />
      <ul className="grid md:grid-cols-2 gap-6">
        {machines.map((machine) => (
          <li key={machine.name}>
            <Card className="group relative h-full rounded-3xl bg-gradient-to-br from-white via-white to-orange-50/60 py-0 hover:bg-white hover:border-primary/60">
              {/* Bauplan-Raster als Hintergrund, wie in Intro und Testimonials */}
              <BlueprintGrid />
              <Link
                href={`/${location}/${machine.slug}`}
                className="relative grid h-full gap-6 p-5 sm:p-6 lg:grid-cols-2 lg:gap-6"
              >
                <div className="flex items-center justify-center overflow-hidden">
                  <Image
                    className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
                    src={machine.image.url}
                    alt={machine.image.alt}
                    width={0}
                    height={0}
                    sizes="(min-width: 768px) 25vw, 100vw"
                  />
                </div>

                <div className="flex h-full flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div>
                      <p className="font-bold text-3xl lg:text-2xl xl:text-3xl leading-tight">
                        {machine.name}
                      </p>
                      {machine.model && (
                        <p className="mt-1 text-sm text-gray-500">
                          {machine.model}
                        </p>
                      )}
                    </div>
                    <PriceTable machine={machine} size="sm" />
                  </div>

                  <span className="inline-flex w-full items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-base font-semibold text-secondary transition-all duration-300 group-hover:border-primary group-hover:shadow-sm">
                    {machineCard.cta}
                    <ArrowRight
                      className="h-5 w-5 text-primary transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
