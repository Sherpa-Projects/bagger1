"use client";

import Image from "next/image";
import { steps, titleHtml } from "@/lib/content/bookingStepsData";

export default function BookingSteps() {
  return (
    <div className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <h2
          dangerouslySetInnerHTML={{ __html: titleHtml }}
          className="font-bold text-3xl md:text-4xl lg:text-3xl pb-6 lg:leading-tight text-center"
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {steps.map(({ title, description, image }, i) => (
            <div
              key={i}
              className="group relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:shadow-md"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary/0 via-primary/15 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />

              <div>
                <p className="text-xs md:text-sm tracking-wide text-gray-500 group-hover:text-primary mb-1 transition duration-300">
                  Schritt {i + 1}
                </p>
                <h3 className="font-bold text-xl mb-3">{title}</h3>
                <p className="text-base leading-relaxed text-gray-800">
                  {description}
                </p>
              </div>

              <div className="mt-4 flex-1" />

              <div className="mt-2 relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.01]">
                <Image
                  src={image}
                  alt=""
                  fill
                  className="object-contain p-4 transition-transform duration-500 group-hover:-translate-y-0.5"
                  sizes="(min-width:1024px) 280px, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
