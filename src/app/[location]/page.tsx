import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import { LocationSeoContent } from "@/components/LocationSeoContent";
import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import BookingContext from "@/components/BookingContext";
import LocalUseCases from "@/components/LocalUseCases";
import MachineCard from "@/components/MachineCard";
import CrossLocationDeliveryNote from "@/components/CrossLocationDeliveryNote";
import Hero from "@/components/Hero";
import GoogleReviewButton, {
  getGoogleReviewLink,
} from "@/components/GoogleReviewButton";
import JsonLd from "@/components/shared/JsonLd";
import { locationData } from "@/lib/content/locationData";
import { faq } from "@/lib/content/components/faqData";
import { locationPageData } from "@/lib/content/pages/location/locationPageData";
import { homePageData } from "@/lib/content/pages/home/homePageData";
import { locationSeoBySlug } from "@/lib/content/locationSeoData";
import {
  getLocationSeoTexts,
  getLocationServiceJsonLd,
} from "@/lib/content/seo/locationSeo";
import { getLocationBySlug, isValidLocation } from "@/lib/locations";
import { getMachinesForLocation } from "@/lib/machines";
import { SITE_NAME } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import { getBreadcrumbJsonLd } from "@/lib/content/seo/breadcrumbSeo";

type LocationPageProps = {
  params: Promise<{ location: string }>;
};

export function generateStaticParams() {
  return locationData.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { location } = await params;

  if (!isValidLocation(location)) {
    return {
      title: { absolute: locationPageData.seo.metaTitle },
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

  return pageMetadata({
    title,
    description: googleDescription,
    openGraphDescription,
    twitterDescription,
    path: `/${location}`,
    imageAlt: alt,
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { hero, intro, machineCard, crossLocationDelivery } = locationPageData;
  const { location } = await params;

  if (!isValidLocation(location)) return notFound();

  const currentLocation = getLocationBySlug(location);
  const cfg = locationSeoBySlug[location];
  if (!currentLocation || !cfg) return notFound();

  const googleReviewLink = getGoogleReviewLink(location);

  const items = getMachinesForLocation(location);
  const machineGroups = [
    {
      title: intro.baggerTitle,
      machines: items.filter((m) => m.category === "bagger"),
    },
    {
      title: intro.machineTitle,
      machines: items.filter((m) => m.category === "machine"),
    },
  ];

  const faqContentForLocation = faq.content.find(
    (content) => content.location === location,
  );

  const bookingContext = cfg.bookingContext?.(currentLocation.name, {
    regionName: cfg.regionName,
    serviceAreas: cfg.serviceAreas,
  });
  const showCrossLocationDelivery = !(
    crossLocationDelivery.excludedLocations as readonly string[]
  ).includes(location);

  return (
    <>
      <JsonLd data={getLocationServiceJsonLd(currentLocation)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: SITE_NAME, path: "/" },
          { name: currentLocation.name, path: `/${location}` },
        ])}
      />

      <main>
        <Navigation slug={location} />
        <Hero
          image={currentLocation.image.url}
          title={`${hero.title} ${currentLocation.name}`}
          badges={homePageData.usp.uspBadges}
        >
          {googleReviewLink && (
            <GoogleReviewButton
              href={googleReviewLink}
              stars={currentLocation.rating?.stars}
              reviews={currentLocation.rating?.reviews}
            />
          )}
        </Hero>
        {machineGroups.map(
          ({ title, machines }) =>
            machines.length > 0 && (
              <MachineCard
                key={title}
                title={title}
                machines={machines}
                location={location}
                machineCard={machineCard}
              />
            ),
        )}
        {showCrossLocationDelivery && (
          <CrossLocationDeliveryNote
            text={crossLocationDelivery.text}
            linkLabel={crossLocationDelivery.linkLabel}
          />
        )}
        <BookingContext data={bookingContext} />
        <LocationSeoContent
          locationSlug={location}
          cityName={currentLocation.name}
        />
        {cfg.localUseCases && (
          <LocalUseCases
            locationName={currentLocation.name}
            useCases={cfg.localUseCases}
          />
        )}
        <Testimonials location={location} />
        {faqContentForLocation && (
          <Faq title={faq.title} content={faqContentForLocation} />
        )}
      </main>
      <Footer />
    </>
  );
}
