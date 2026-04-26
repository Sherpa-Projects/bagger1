import * as React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import { LocationSeoContent } from "@/components/LocationSeoContent";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { locationData } from "@/lib/content/locationData";
import { machineData } from "@/lib/content/machineData";
import { faq } from "@/lib/content/components/faqData";
import { Machine } from "@/app/types/Machine";
import { locationPageData } from "@/lib/content/pages/location/locationPageData";
import {
  getFaqContentForLocation,
  isValidLocation,
  getPricePerDayForLocation,
  getPricePerWeekForLocation,
  getPricePerMonthForLocation,
} from "@/lib/utils";
import { getLocationSeoTexts } from "@/lib/content/seo/locationSeo";
import { locationSeoBySlug } from "@/lib/content/locationSeoData";
import BookingContext from "@/components/BookingContext";
import LocalUseCases from "@/components/LocalUseCases";

export function generateStaticParams() {
  return locationData.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;

  if (!isValidLocation(location)) {
    return {
      title: locationPageData.seo.metaTitle,
      description: locationPageData.seo.metaDescription,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const {
    title,
    googleDescription,
    openGraphDescription,
    twitterDescription,
    alt,
  } = getLocationSeoTexts(location);

  return {
    title,
    description: googleDescription,
    openGraph: {
      title,
      description: openGraphDescription,
      url: `https://bagger1.de/${location}`,
      siteName: "BAGGER1",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: twitterDescription,
      images: ["/images/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://bagger1.de/${location}`,
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { hero, intro, machineCard } = locationPageData;
  const { location } = await params;

  if (!isValidLocation(location)) return notFound();

  const currentLocation = locationData.find((l) => l.slug === location);
  if (!currentLocation) return notFound();

  const items = machineData.filter(
    (m) => (m.inventory[location]?.length ?? 0) > 0,
  );

  const baggers = items.filter((m) => m.category === "bagger");
  const machines = items.filter((m) => m.category === "machine");

  const faqContentForLocation = getFaqContentForLocation(faq.content, location);

  const cfg = locationSeoBySlug[location];
  if (!cfg) return null;

  const bookingContext = cfg.bookingContext?.(currentLocation.name, {
    regionName: cfg.regionName,
    serviceAreas: cfg.serviceAreas,
  });
  const localUseCases = cfg.localUseCases;

  return (
    <>
      <main>
        <Navigation slug={location} />
        <div
          className="mt-17 md:mt-24 relative h-48 lg:h-72 flex justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: `url(${currentLocation.image.url})` }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10 text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-4">
            <h1 className="text-5xl lg:text-7xl font-semibold leading-normal tracking-wide">
              {hero.title} {currentLocation.name}
            </h1>
          </div>
        </div>
        {baggers.length > 0 && (
          <div className="pt-10 pb-10 lg:pt-20 px-4">
            <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
                {intro.baggerTitle}
              </h2>
              <ul className="grid md:grid-cols-2 gap-6">
                {baggers.map((bagger) => {
                  const pricePerDay = getPricePerDayForLocation(
                    bagger as Machine,
                    location,
                  );
                  const pricePerWeek = getPricePerWeekForLocation(
                    bagger as Machine,
                    location,
                  );
                  const pricePerMonth = getPricePerMonthForLocation(
                    bagger as Machine,
                    location,
                  );
                  return (
                    <li key={bagger.name}>
                      <Link
                        href={`/${location}/${bagger.slug}`}
                        className="group border border-gray-300 bg-white rounded-lg lg:hover:shadow-md p-6 lg:p-4 grid lg:grid-cols-2 lg:gap-8 transition-all duration-300 transform lg:hover:scale-103 decoration-2 cursor-pointer"
                      >
                        <div className="flex items-center justify-center">
                          <Image
                            className="rounded w-full mb-6 lg:mb-0"
                            src={bagger.image.url}
                            alt={bagger.image.alt}
                            width={0}
                            height={0}
                            sizes="100vw"
                          />
                        </div>

                        <div className="flex flex-col justify-between h-full py-2">
                          <div className="space-y-5">
                            <div>
                              <p className="text-3xl lg:text-2xl xl:text-3xl font-semibold capitalize mb-2">
                                {bagger.name}
                              </p>
                              {bagger.model && (
                                <p className="lg:text-sm text-neutral-500">
                                  {bagger.model}
                                </p>
                              )}
                            </div>

                            <div className="space-y-1">
                              <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                                {pricePerDay} €{" "}
                                <span className="text-xs">/ Tag</span>
                              </p>
                              <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                                {pricePerWeek} €{" "}
                                <span className="text-xs">/ Woche</span>
                              </p>
                              <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                                {pricePerMonth} €{" "}
                                <span className="text-xs">/ Monat</span>
                              </p>
                            </div>
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
        )}
        {machines.length > 0 && (
          <div className="pt-10 pb-10 lg:pt-20 px-4">
            <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
                {intro.machineTitle}
              </h2>
              <ul className="grid md:grid-cols-2 gap-6">
                {machines.map((machine) => {
                  const pricePerDay = getPricePerDayForLocation(
                    machine as Machine,
                    location,
                  );
                  const pricePerWeek = getPricePerWeekForLocation(
                    machine as Machine,
                    location,
                  );
                  const pricePerMonth = getPricePerMonthForLocation(
                    machine as Machine,
                    location,
                  );
                  return (
                    <li key={machine.name}>
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
                          <div className="space-y-5">
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

                            <div className="space-y-1">
                              <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                                {pricePerDay} €{" "}
                                <span className="text-xs">/ Tag</span>
                              </p>
                              <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                                {pricePerWeek} €{" "}
                                <span className="text-xs">/ Woche</span>
                              </p>
                              <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                                {pricePerMonth} €{" "}
                                <span className="text-xs">/ Monat</span>
                              </p>
                            </div>
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
        )}
        <BookingContext data={bookingContext} />
        <LocationSeoContent
          locationSlug={location}
          cityName={currentLocation.name}
        />
        {localUseCases && (
          <LocalUseCases
            locationName={currentLocation.name}
            useCases={localUseCases}
          />
        )}
        {faqContentForLocation && (
          <Faq
            title={faq.title}
            subtitle={faq.subtitle}
            content={faqContentForLocation}
          />
        )}
      </main>
      <Footer currentLocation={currentLocation} />
    </>
  );
}
