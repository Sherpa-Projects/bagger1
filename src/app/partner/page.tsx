import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Phone } from "lucide-react";
import { partnerPageData } from "@/lib/content/pages/partner/partnerPageData";
import Hero from "@/components/Hero";
import PartnerList from "@/components/PartnerList";
import PartnerContactCard from "@/components/PartnerContactCard";
import Section from "@/components/shared/Section";
import Eyebrow from "@/components/shared/Eyebrow";
import Headline from "@/components/shared/Headline";
import { pageMetadata } from "@/lib/metadata";
import { mailHref, phoneHref } from "@/lib/contact";

export const generateMetadata = (): Metadata => {
  const { metaTitle, metaDescription } = partnerPageData.seo;

  return pageMetadata({
    title: metaTitle,
    description: metaDescription.google,
    openGraphDescription: metaDescription.openGraph,
    twitterDescription: metaDescription.twitter,
    path: "/partner",
    imageAlt:
      "Gelber Hintergrund mit schwarzem Text: BAGGER1‘ in großer Schrift und darunter ‚Ihre Nummer 1 für Bagger und Baumaschinen‘ in kleinerer Schrift.",
  });
};

export default function PartnerPage() {
  const { hero, intro, offer, requirement, contactCard } = partnerPageData;

  return (
    <>
      <Navigation />
      <main>
        <Hero image={hero.image} title={hero.title} subtitle={hero.subtitle}>
          <div className="flex flex-wrap gap-3">
            <a
              href={mailHref(contactCard.email)}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-secondary shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md"
            >
              Jetzt bewerben
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
            <a
              href={phoneHref(contactCard.phone)}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:bg-white/10"
            >
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              {contactCard.phone}
            </a>
          </div>
        </Hero>

        <Section
          className="pt-10 lg:pt-20 px-4"
          containerClassName="grid gap-8 lg:grid-cols-12 lg:gap-12 lg:items-center"
        >
          <div className="lg:col-span-7">
            <Eyebrow className="mb-4">Partner werden</Eyebrow>
            <Headline size="lg">{intro.title}</Headline>
            <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-gray-600">
              {intro.paragraphs.map((p, index) => (
                <p key={index}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <PartnerContactCard {...contactCard} />
          </div>
        </Section>

        <Section containerClassName="grid gap-6 md:grid-cols-2">
          <PartnerList title={offer.title} items={offer.list} />
          <PartnerList title={requirement.title} items={requirement.list} />
        </Section>
      </main>
      <Footer />
    </>
  );
}
