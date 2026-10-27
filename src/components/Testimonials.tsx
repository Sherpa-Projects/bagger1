"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, MapPin, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { Location } from "@/types/Location";
import { getCityName } from "@/lib/locations";
import Rating from "@/components/Rating";
import { testimonials } from "@/lib/content/components/testimonials";
import Section from "@/components/shared/Section";
import Eyebrow from "@/components/shared/Eyebrow";
import Headline from "@/components/shared/Headline";
import BlueprintGrid from "@/components/shared/BlueprintGrid";

function shuffleArray<T>(items: T[]) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function ExpandableText({
  text,
  maxLength = 130,
}: {
  text: string;
  maxLength?: number;
}) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const needsToggle = text.length > maxLength;
  const previewText =
    isExpanded || !needsToggle
      ? text
      : `${text.slice(0, maxLength).trimEnd()} …`;

  const toggle = () => {
    setIsExpanded((prev) => !prev);
    scrollRef.current?.scrollTo({ top: 0 });
  };

  return (
    <div className="mt-6">
      {/* Feste Höhe: lange Texte scrollen innerhalb der Karte, statt alle Karten zu strecken */}
      <div
        ref={scrollRef}
        className={`h-36 pr-2 overscroll-contain [scrollbar-width:thin] [scrollbar-color:var(--color-primary)_transparent] ${
          isExpanded
            ? "overflow-y-auto pb-6 [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
            : "overflow-hidden"
        }`}
      >
        <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
          {previewText}
        </p>
      </div>
      {needsToggle && (
        <button
          type="button"
          onClick={toggle}
          aria-expanded={isExpanded}
          className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-secondary"
        >
          {isExpanded ? "weniger" : "mehr"}
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>
      )}
    </div>
  );
}

type TestimonialsProps = {
  // Auf Standortseiten nur die Bewertungen dieses Standorts zeigen
  location?: Location;
};

export default function Testimonials({ location }: TestimonialsProps = {}) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  const visibleTestimonials = React.useMemo(
    () =>
      location
        ? testimonials.filter((item) => item.location === location)
        : testimonials,
    [location],
  );
  const [shuffledTestimonials, setShuffledTestimonials] =
    React.useState(visibleTestimonials);

  React.useEffect(() => {
    setShuffledTestimonials(shuffleArray(visibleTestimonials));
  }, [visibleTestimonials]);

  if (visibleTestimonials.length === 0) return null;

  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow className="mx-auto mb-4">Google-Bewertungen</Eyebrow>
        <Headline>Stimmen unserer Kunden</Headline>
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="mt-8 lg:mt-10 mx-auto w-full px-4 sm:px-12"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-4 py-2">
          {shuffledTestimonials.map((testimonial, index) => (
            <CarouselItem
              key={`${testimonial.location}-${index}`}
              className="basis-full pl-4 md:basis-1/2 xl:basis-1/3"
            >
              <div className="h-full">
                <Card className="group relative h-full pb-0 bg-gradient-to-br from-white via-white to-orange-50/60 hover:bg-white hover:border-primary/60">
                  {/* Bauplan-Raster und großes Zitatzeichen als Hintergrund */}
                  <BlueprintGrid />
                  <Quote
                    className="pointer-events-none absolute -right-4 -top-3 h-32 w-32 rotate-180 fill-primary/15 transition-colors duration-500 group-hover:fill-primary/25"
                    strokeWidth={0}
                    aria-hidden="true"
                  />

                  <CardContent className="relative flex h-full flex-col justify-between gap-8 p-6 sm:p-7">
                    <div>
                      <Rating
                        stars={testimonial.stars}
                        location={testimonial.location}
                      />
                      <ExpandableText text={testimonial.content} />
                    </div>

                    <div className="flex items-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500">
                      <MapPin
                        size={16}
                        className="shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      Standort {getCityName(testimonial.location)}
                    </div>
                  </CardContent>
                  {/* Absperrband als dezenter Abschluss, wie im Hero */}
                  <div
                    className="h-1.5 w-full shrink-0 bg-[repeating-linear-gradient(-45deg,var(--color-primary)_0_10px,transparent_10px_20px)] opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-10 h-10 w-10 border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary" />
        <CarouselNext className="right-0 z-10 h-10 w-10 border-gray-200 bg-white text-gray-600 shadow-sm transition-all duration-300 hover:border-primary hover:bg-white hover:text-primary" />
      </Carousel>
    </Section>
  );
}
