import * as React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import { use } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { locationData } from "@/lib/content/locationData";
import { machineData } from "@/lib/content/machineData";
import { isValidLocation, validMachines } from "@/lib/utils";

export async function generateMetadata(
  { params }: { params: { location: string } },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { location } = params;

  const currentLocation = locationData.find((l) => l.slug === location);
  if (!currentLocation) return {};

  const title = `Baumaschinenverleih in ${currentLocation.name} | Bagger1`;
  const description = `Finde verfügbare Bagger und andere Baumaschinen in ${currentLocation.name}. Flexible Zeiträume, transparente Preise und schnelle Buchung online.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://bagger1.de/${location}`,
      images: {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: `Bagger mieten in ${currentLocation.name}`,
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/meta.png"],
    },
  };
}

export default function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = use(params);

  if (!isValidLocation(location)) return notFound();

  const currentLocation = locationData.find((l) => l.slug === location);
  if (!currentLocation) return notFound();

  const machineSlugs = validMachines[location];
  const machines = machineData.filter((m) => machineSlugs.includes(m.slug));

  return (
    <>
      <Navigation />
      <div
        className="hidden relative h-100 bg-center bg-cover lg:flex justify-center items-center"
        style={{
          backgroundImage: `url(${currentLocation.image.url})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
      </div>
      <main className="pb-16 pt-10 lg:pt-30 px-4">
        <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-0 lg:pb-4 lg:leading-tight text-center">
            Bagger mieten in {currentLocation.name}
          </h1>
          <ul className="mt-8 grid md:grid-cols-2 gap-10">
            {machines.map((machine, index) => (
              <li key={index}>
                <a
                  href={`/${location}/${machine.slug}`}
                  className="border border-gray-300 rounded-lg lg:hover:shadow-md p-6 lg:p-4 grid lg:grid-cols-5 lg:gap-8 transition-all duration-300 transform lg:hover:scale-105 decoration-2 cursor-pointer"
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
                    <div className="space-y-2">
                      <p className="text-3xl lg:text-2xl xl:text-3xl font-semibold capitalize">
                        {machine.name}
                      </p>
                      <p className="text-xl lg:text-lg xl:text-xl capitalize">
                        {machine.pricePerDay}€ / Tag
                      </p>
                    </div>

                    <div className="w-full flex justify-end lg:justify-start">
                      <button className="group text-xl mt-6 cursor-pointer self-start hover:text-yellow-500 transition-all duration-300 transform">
                        Mehr Infos
                        <span className="ml-2 text-yellow-500 inline-block group-hover:translate-x-1 transition-transform duration-300">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </button>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer currentLocation={currentLocation} />
    </>
  );
}
