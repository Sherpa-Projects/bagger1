import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Phone, Snowflake } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PriceTable from "@/components/PriceTable";
import PriceAddition from "@/components/PriceAddition";
import BookingSteps from "@/components/BookingSteps";
import FaqAccordion from "@/components/FaqAccordion";
import FaqContactBox from "@/components/FaqContactBox";
import LocalUseCases from "@/components/LocalUseCases";
import Section from "@/components/shared/Section";
import Headline from "@/components/shared/Headline";
import SurfaceCard from "@/components/shared/SurfaceCard";
import JsonLd from "@/components/shared/JsonLd";
import { winterServicePageData } from "@/lib/content/pages/winterdienst/winterServicePageData";
import { machinePageData } from "@/lib/content/pages/machine/machinePageData";
import { locationSeoBySlug } from "@/lib/content/locationSeoData";
import { company } from "@/lib/content/company";
import { getMachineBySlug } from "@/lib/machines";
import { phoneHref, whatsappHref } from "@/lib/contact";
import { pageMetadata } from "@/lib/metadata";
import { SITE_NAME } from "@/lib/site";
import { getBreadcrumbJsonLd } from "@/lib/content/seo/breadcrumbSeo";

const { path, seo } = winterServicePageData;

export const generateMetadata = (): Metadata =>
  pageMetadata({
    title: seo.metaTitle,
    description: seo.metaDescription.google,
    openGraphDescription: seo.metaDescription.openGraph,
    twitterDescription: seo.metaDescription.twitter,
    path,
    imageAlt: seo.imageAlt,
  });

const primaryButtonClass =
  "group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-semibold text-secondary shadow-sm transition-all duration-300 hover:bg-primary/90 hover:shadow-md";
const darkButtonClass =
  "inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-primary/60 hover:bg-white/10";

export default function WinterServicePage() {
  const {
    location,
    machineSlug,
    snowPlowPricePerDay,
    hero,
    intro,
    machine,
    prices,
    useCases,
    bookingSteps,
    audiences,
    area,
    cta,
    faq,
  } = winterServicePageData;
  const radlader = getMachineBySlug(machineSlug);
  const machineHref = `/${location}/${machineSlug}`;
  const serviceAreas = locationSeoBySlug[location].serviceAreas ?? [];
  const telephone = company.contact.telephone;

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: SITE_NAME, path: "/" },
          { name: "Winterdienst", path },
        ])}
      />
      <Navigation slug={location} />
      <main>
        <Hero
          image={hero.image}
          title={hero.title}
          titleClassName="text-4xl md:text-5xl lg:text-6xl"
          badges={hero.badges}
        >
          <p className="mb-6 max-w-xl text-lg text-gray-300 md:text-xl">
            {hero.subline}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={machineHref} className={primaryButtonClass}>
              {hero.ctaLabel}
              <ArrowRight
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <a href={phoneHref(telephone)} className={darkButtonClass}>
              <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
              {telephone}
            </a>
          </div>
        </Hero>

        {/* Einleitung */}
        <Section
          className="px-4 pt-10 lg:pt-20"
          containerClassName="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10"
        >
          <div className="space-y-5 text-lg leading-relaxed text-gray-700 lg:col-span-7 lg:text-xl">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {radlader?.image.url && (
            <div className="flex justify-center lg:col-span-5">
              <Image
                // Feste Höhe, damit das Bild auf Retina-Displays nicht kleiner wird
                className="h-[320px] w-auto max-w-full object-contain lg:h-[420px]"
                src={radlader.image.url}
                alt={radlader.image.alt || radlader.name}
                width={600}
                height={800}
                sizes="(min-width: 1024px) 315px, 240px"
                priority
              />
            </div>
          )}
        </Section>

        {/* Maschine und Preise */}
        <Section containerClassName="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="min-w-0 lg:col-span-7">
            <Headline>{machine.title}</Headline>
            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              {machine.text}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {machine.facts.map(({ value, label }) => (
                <li
                  key={label}
                  className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-secondary">
                    {value}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <SurfaceCard className="p-5 sm:p-6 lg:sticky lg:top-32">
              <h2 className="mb-3 text-2xl font-bold">{prices.title}</h2>
              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {prices.text}
              </p>
              {radlader && (
                <PriceTable machine={radlader} location={location} size="lg" />
              )}
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-4">
                <Snowflake
                  className="h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-secondary">
                    Schneeschild +{snowPlowPricePerDay} €
                  </span>{" "}
                  netto pro Tag
                </p>
              </div>
              <PriceAddition info={machinePageData.timeTable} />
            </SurfaceCard>
          </div>
        </Section>

        <LocalUseCases title={useCases.title} useCases={useCases.items} />

        <BookingSteps title={bookingSteps.title} steps={bookingSteps.steps} />

        {/* Zielgruppen */}
        <Section>
          <Headline className="mb-8 text-center lg:mb-10">{audiences.title}</Headline>
          <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
            {audiences.items.map(({ title, text, Icon }) => (
              <SurfaceCard key={title} className="h-full p-6 sm:p-8">
                <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                  <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mb-2 text-xl font-bold leading-tight">
                  {title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600">
                  {text}
                </p>
              </SurfaceCard>
            ))}
          </div>
        </Section>

        {/* Standort, Liefergebiet und Abschluss-CTA */}
        <Section>
          <div className="rounded-3xl bg-secondary px-6 py-10 text-white md:px-10 lg:p-14">
            <Headline className="mb-6">{area.title}</Headline>
            <p className="max-w-3xl text-base leading-relaxed text-gray-300 lg:text-lg">
              {area.text}
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {serviceAreas.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition-colors hover:border-primary/60 hover:bg-white/10 sm:px-4"
                >
                  <MapPin
                    className="shrink-0 text-primary"
                    size={18}
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-tight sm:text-base">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-gray-400">{area.otherLocations}</p>

            <div className="mt-12 border-t border-white/10 pt-10 lg:mt-16 lg:pt-12">
              <h3 className="mb-4 text-2xl font-bold md:text-3xl">
                {cta.title}
              </h3>
              <p className="mb-8 max-w-3xl leading-relaxed text-gray-300 lg:text-lg">
                {cta.text}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href={machineHref} className={primaryButtonClass}>
                  {hero.ctaLabel}
                  <ArrowRight
                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
                <a href={phoneHref(telephone)} className={darkButtonClass}>
                  <Phone className="h-5 w-5 text-primary" aria-hidden="true" />
                  {telephone}
                </a>
                <a
                  href={whatsappHref(company.contact.whatsapp)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={darkButtonClass}
                >
                  <SiWhatsapp size={18} color="default" aria-hidden="true" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ mit FAQPage-Schema */}
        <Section id="faq">
          <div className="grid gap-5 lg:grid-cols-12 lg:gap-12">
            <div className="min-w-0 lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-32">
                <Headline>{faq.title}</Headline>
                <FaqContactBox className="hidden lg:block" />
              </div>
            </div>
            <div className="min-w-0 lg:col-span-8">
              <FaqAccordion id="faq-winterdienst" items={faq.items} />
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
