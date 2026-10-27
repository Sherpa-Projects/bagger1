import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import BranchCard from "@/components/BranchCard";
import BookingSteps from "@/components/BookingSteps";
import PromoBanner from "@/components/PromoBanner";
import Testimonials from "@/components/Testimonials";
import JsonLd from "@/components/shared/JsonLd";
import { homePageData } from "@/lib/content/pages/home/homePageData";
import {
  getHomeSeoTexts,
  homeLocalBusinessJsonLd,
} from "@/lib/content/seo/homeSeo";
import { pageMetadata } from "@/lib/metadata";

export const generateMetadata = (): Metadata => {
  const {
    title,
    googleDescription,
    openGraphDescription,
    twitterDescription,
    alt,
  } = getHomeSeoTexts();

  return pageMetadata({
    title,
    description: googleDescription,
    openGraphDescription,
    twitterDescription,
    path: "/",
    imageAlt: alt,
  });
};

export default function Home() {
  const { hero, intro, usp, career } = homePageData;

  return (
    <>
      <JsonLd data={homeLocalBusinessJsonLd} />
      <Navigation />
      <main>
        <Hero
          image={hero.image}
          title={hero.title}
          subtitle={hero.subtitle}
          badges={usp.uspBadges}
        />
        <Intro {...intro} />
        <BranchCard />
        <Testimonials />
        <BookingSteps />
        <PromoBanner {...career} />
      </main>
      <Footer />
    </>
  );
}
