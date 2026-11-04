import Image from "next/image";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import {
  steps as defaultSteps,
  title as defaultTitle,
  type Step,
} from "@/lib/content/components/bookingStepsData";
import { Card } from "@/components/ui/card";
import Section from "@/components/shared/Section";
import Headline from "@/components/shared/Headline";

type BookingStepsProps = {
  title?: ReactNode;
  steps?: ReadonlyArray<Step>;
};

// Standardmäßig die allgemeinen Buchungsschritte; Unterseiten können eigene Texte übergeben
export default function BookingSteps({
  title = defaultTitle,
  steps = defaultSteps,
}: BookingStepsProps) {
  return (
    <Section>
      <Headline className="pb-8 lg:pb-10 text-center">{title}</Headline>

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 items-stretch">
        {steps.map(({ title, description, image, Icon }, i) => (
          <li key={title} className="relative">
            <Card className="group relative h-full gap-0 bg-white p-6 hover:bg-white hover:border-primary/60">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>

              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                Schritt {i + 1}
              </p>
              <h3 className="font-bold text-xl leading-tight mb-2">{title}</h3>
              <p className="text-base leading-relaxed text-gray-600">
                {description}
              </p>

              <div className="mt-6 flex-1" />

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-gradient-to-br from-orange-50 via-gray-50 to-gray-50">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-contain p-5 transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(min-width:1024px) 280px, 100vw"
                />
              </div>
            </Card>

            {i < steps.length - 1 && (
              <span
                className="hidden lg:flex absolute top-1/2 -right-6 z-10 h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-primary shadow-sm"
                aria-hidden="true"
              >
                <ChevronRight size={14} />
              </span>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
