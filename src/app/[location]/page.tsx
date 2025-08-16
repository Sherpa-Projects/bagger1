import * as React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import { use } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { locationData } from "@/lib/content/locationData";
import { machineData } from "@/lib/content/machineData";
import { isValidLocation } from "@/lib/utils";
import { getPricePerDayForLocation } from "@/lib/utils";
import { Machine } from "../types/Machine";

export const metadata: Metadata = {
  title: "Baumaschinen mieten in deiner Nähe | Bagger1",
  description:
    "Jetzt Baumaschinen wie Bagger, Kipphänger oder Rüttelplatten direkt online mieten. Transparent. Flexibel. Einfach mit Bagger1.",
  openGraph: {
    title: "Baumaschinen mieten in deiner Nähe | Bagger1",
    description:
      "Jetzt Baumaschinen wie Bagger, Kipphänger oder Rüttelplatten direkt online mieten. Transparent. Flexibel. Einfach mit Bagger1.",
    url: "https://bagger1.de",
    siteName: "Bagger1",
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Bagger1 Baumaschinen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baumaschinen mieten mit Bagger1",
    description:
      "Finde verfügbare Maschinen in deiner Region und buche direkt online.",
    images: ["/images/meta.png"],
  },
  robots: "index, follow",
};

export default function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = use(params);

  if (!isValidLocation(location)) return notFound();

  const currentLocation = locationData.find((l) => l.slug === location);
  if (!currentLocation) return notFound();

  const machines = machineData.filter(
    (m) => (m.inventory[location]?.length ?? 0) > 0
  );

  return (
    <>
      <Navigation />
      <div
        className="hidden relative h-90 bg-center bg-cover lg:flex justify-center items-center"
        style={{ backgroundImage: `url(${currentLocation.image.url})` }}
      >
        <div className="absolute inset-0 bg-black/30 z-0" />
      </div>

      <main className="pb-16 pt-40 lg:pt-16 px-4">
        <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-0 lg:pb-4 lg:leading-tight text-center">
            Bagger mieten in {currentLocation.name}
          </h1>

          <ul className="mt-8 grid md:grid-cols-2 gap-10">
            {machines.map((machine, index) => {
              const pricePerDay = getPricePerDayForLocation(
                machine as Machine,
                location
              );

              return (
                <li key={index}>
                  <Link
                    href={`/${location}/${machine.slug}`}
                    className="group border border-gray-300 rounded-lg lg:hover:shadow-md p-6 lg:p-4 grid lg:grid-cols-5 lg:gap-8 transition-all duration-300 transform lg:hover:scale-105 decoration-2 cursor-pointer"
                  >
                    <Image
                      className="rounded w-full lg:w-50 mb-6 lg:mb-0 lg:col-span-2"
                      src={machine.image.url}
                      alt={machine.image.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                    />

                    <div className="flex flex-col justify-between h-full py-2 lg:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <p className="text-3xl lg:text-2xl xl:text-3xl font-semibold capitalize mb-2">
                            {machine.name}
                          </p>
                          {machine.model && (
                            <p className="lg:text-sm text-neutral-500">
                              {machine.model}
                            </p>
                          )}
                        </div>

                        <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                          {pricePerDay}€ / Tag
                        </p>
                      </div>

                      <div className="w-full flex justify-end lg:justify-start">
                        <span className="group text-xl mt-6 self-start group-hover:text-primary transition-all duration-300 transform">
                          Mehr Infos
                          <span className="ml-2 text-primary inline-block group-hover:translate-x-1 transition-transform duration-300">
                            <FontAwesomeIcon icon={faArrowRight} />
                          </span>
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </main>

      <Footer currentLocation={currentLocation} />
    </>
  );
}
