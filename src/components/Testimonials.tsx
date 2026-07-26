"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import type { Location } from "@/app/types/Location";
import { locationData } from "@/lib/content/locationData";
import Rating from "@/components/Rating";
import IconBadge from "@/components/IconBadge";
import { testimonials } from "@/lib/content/components/testimonials";

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
  const needsToggle = text.length > maxLength;
  const previewText = isExpanded
    ? text
    : `${text.slice(0, maxLength).trimEnd()}`;

  return (
    <div className="mt-7">
      <p className="font-medium leading-relaxed text-secondary whitespace-pre-line">
        {previewText}
      </p>
      {needsToggle && (
        <button
          type="button"
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mt-2 text-sm font-semibold text-primary underline underline-offset-2"
        >
          {isExpanded ? "weniger" : "mehr"}
        </button>
      )}
    </div>
  );
}

export default function Testimonials() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  );
  const [shuffledTestimonials, setShuffledTestimonials] = React.useState(
    testimonials,
  );

  React.useEffect(() => {
    setShuffledTestimonials(shuffleArray(testimonials));
  }, []);

  const getLocationName = (location: Location) =>
    locationData.find((item) => item.slug === location)?.name ?? location;

  return (
    <section className="container max-w-7xl px-6 py-8 lg:pb-28 mx-auto">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mt-3 font-bold text-3xl md:text-4xl lg:text-3xl lg:leading-tight">
          Stimmen unserer Kunden
        </h2>
      </div>
      <Carousel
        opts={{ align: "start", loop: true }}
        className="mt-10 mx-auto w-full px-4 sm:px-10"
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
                <Card className="h-full">
                  <CardContent className="flex h-full flex-col justify-between gap-8 p-6 sm:p-7">
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <Rating
                          stars={testimonial.stars}
                          location={testimonial.location}
                        />
                        <Quote
                          aria-hidden="true"
                          className="h-12 w-12 shrink-0 text-primary/25"
                        />
                      </div>
                      <ExpandableText text={testimonial.content} />
                    </div>

                    <div className="flex justify-end text-xs items-center border-t border-gray-200 pt-5">
                      <IconBadge
                        Icon={MapPin}
                        text={`Standort ${getLocationName(testimonial.location)}`}
                        size="sm"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 z-10 text-black/50 border-black/50 bg-white/30 hover:bg-white/40 hover:text-primary hover:border-primary transition-all duration-500" />
        <CarouselNext className="right-0 z-10 text-black/50 border-black/60 bg-white/50 hover:bg-white/40 hover:text-primary hover:border-primary transition-all duration-300" />
      </Carousel>
    </section>
  );
}
