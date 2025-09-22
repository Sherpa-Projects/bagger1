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
import BranchCard from "@/components/BranchCard";
import { locationPageData } from "@/lib/content/pages/location/locationPageData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;

  // Fallback: wenn ungültig, nimm die generischen SEO-Texte
  if (!isValidLocation(location)) {
    return {
      title: locationPageData.seo.metaTitle,
      description: locationPageData.seo.metaDescription.google,
      openGraph: {
        title: locationPageData.seo.metaTitle,
        description: locationPageData.seo.metaDescription.openGraph,
        url: "https://bagger1.de",
        siteName: "Bagger1",
        images: [
          {
            url: "/images/og-image.png",
            width: 1200,
            height: 630,
            alt: "Gelber Hintergrund mit schwarzem Text: ‚Bagger 1‘ in großer Schrift und darunter ‚Ihre Nummer 1 für Bagger und Baumaschinen‘ in kleinerer Schrift.",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: locationPageData.seo.metaTitle,
        description: locationPageData.seo.metaDescription.twitter,
        images: ["/images/og-image.png"],
      },
      robots: "index, follow",
    };
  }

  // Schönen Namen zum Slug finden (z. B. "Mannheim")
  const loc = locationData.find((l) => l.slug === location);
  const cityName =
    loc?.name ??
    location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  const title = `Baumaschinen mieten in ${cityName} | Bagger1`;

  return {
    title,
    description: locationPageData.seo.metaDescription.google,
    openGraph: {
      title,
      description: locationPageData.seo.metaDescription.openGraph,
      url: `https://bagger1.de/${location}`,
      siteName: "Bagger1",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "Gelber Hintergrund mit schwarzem Text: ‚Bagger 1‘ in großer Schrift und darunter ‚Ihre Nummer 1 für Bagger und Baumaschinen‘ in kleinerer Schrift.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: locationPageData.seo.metaDescription.twitter,
      images: ["/images/og-image.png"],
    },
    robots: "index, follow",
  };
}

export default function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { hero, machineCard } = locationPageData;
  const { location } = use(params);

  if (!isValidLocation(location)) return notFound();

  const currentLocation = locationData.find((l) => l.slug === location);
  if (!currentLocation) return notFound();

  const machines = machineData.filter(
    (m) => (m.inventory[location]?.length ?? 0) > 0
  );

  return (
    <>
      <main>
        <Navigation />
        <div
          className="mt-17 md:mt-24 relative h-48 lg:h-72 flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${currentLocation.image.url})` }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10 text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-4">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-normal">
              {hero.title} {currentLocation.name}
            </h1>
          </div>
        </div>
        <div className="py-10 lg:py-20 px-4">
          <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <ul className="grid md:grid-cols-2 gap-6">
              {machines.map((machine, index) => {
                const pricePerDay = getPricePerDayForLocation(
                  machine as Machine,
                  location
                );
                return (
                  <li key={index}>
                    <Link
                      href={`/${location}/${machine.slug}`}
                      className="group border border-gray-300 bg-white rounded-lg lg:hover:shadow-md p-6 lg:p-4 grid lg:grid-cols-2 lg:gap-8 transition-all duration-300 transform lg:hover:scale-103 decoration-2 cursor-pointer"
                    >
                      <div className="flex items-center justify-center">
                        <Image
                          className="rounded w-full mb-6 lg:mb-0"
                          src={machine.image.url}
                          alt={machine.image.alt}
                          width={0}
                          height={0}
                          sizes="100vw"
                        />
                      </div>

                      <div className="flex flex-col justify-between h-full py-2">
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
                            {machineCard.cta}
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
        </div>
        <BranchCard />
      </main>

      <Footer currentLocation={currentLocation} />
    </>
  );
}
