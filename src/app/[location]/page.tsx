import * as React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import { LocationSeoContent } from "@/components/LocationSeoContent";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import { locationData } from "@/lib/content/locationData";
import { machineData } from "@/lib/content/machineData";
import { faq } from "@/lib/content/components/faqData";
import { locationPageData } from "@/lib/content/pages/location/locationPageData";
import { getFaqContentForLocation, isValidLocation } from "@/lib/utils";
import { getLocationSeoTexts } from "@/lib/content/seo/locationSeo";
import { locationSeoBySlug } from "@/lib/content/locationSeoData";
import BookingContext from "@/components/BookingContext";
import LocalUseCases from "@/components/LocalUseCases";
import MachineCard from "@/components/MachineCard";

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
          <MachineCard
            title={intro.baggerTitle}
            machines={baggers}
            location={location}
            machineCard={machineCard}
          />
        )}
        {machines.length > 0 && (
          <MachineCard
            title={intro.machineTitle}
            machines={machines}
            location={location}
            machineCard={machineCard}
          />
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
          <Faq title={faq.title} content={faqContentForLocation} />
        )}
      </main>
      <Footer currentLocation={currentLocation} />
    </>
  );
}
