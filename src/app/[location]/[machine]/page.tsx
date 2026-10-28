import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Truck } from "lucide-react";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PriceTable from "@/components/PriceTable";
import BookingWidget from "@/components/BookingWidget";
import BookingSteps from "@/components/BookingSteps";
import MachineSpecifications from "@/components/MachineSpecifications";
import PriceAddition from "@/components/PriceAddition";
import WinterServiceTeaser from "@/components/WinterServiceTeaser";
import Container from "@/components/shared/Container";
import Headline from "@/components/shared/Headline";
import SurfaceCard from "@/components/shared/SurfaceCard";
import { machinePageData } from "@/lib/content/pages/machine/machinePageData";
import { winterServicePageData } from "@/lib/content/pages/winterdienst/winterServicePageData";
import { getMachineSeoTexts } from "@/lib/content/seo/machineSeo";
import { getCityName, humanizeSlug, isValidLocation } from "@/lib/locations";
import {
  getLocationMachineRouteParams,
  getDeliveryFlatRate,
  getMachineBySlug,
} from "@/lib/machines";
import { SITE_NAME } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/shared/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/content/seo/breadcrumbSeo";

type MachinePageProps = {
  params: Promise<{ location: string; machine: string }>;
};

export function generateStaticParams() {
  return getLocationMachineRouteParams();
}

export async function generateMetadata({
  params,
}: MachinePageProps): Promise<Metadata> {
  const { location, machine: machineSlug } = await params;
  const selectedMachine = getMachineBySlug(machineSlug);

  if (!selectedMachine) {
    return {
      title: { absolute: machinePageData.seo.metaTitle },
      description: machinePageData.seo.metaDescription,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const machineName = selectedMachine.name ?? humanizeSlug(machineSlug);
  const model = selectedMachine.model ? ` ${selectedMachine.model}` : "";

  const {
    title,
    googleDescription,
    openGraphDescription,
    twitterDescription,
    path,
    alt,
  } = getMachineSeoTexts(location, machineName, model, machineSlug);

  return pageMetadata({
    title,
    description: googleDescription,
    openGraphDescription,
    twitterDescription,
    path,
    imageAlt: alt,
  });
}

export default async function MachinePage({ params }: MachinePageProps) {
  const { location, machine: machineSlug } = await params;
  const { timeTable } = machinePageData;

  if (!isValidLocation(location)) return notFound();

  const selectedMachine = getMachineBySlug(machineSlug);
  if (!selectedMachine) return notFound();

  const inventoryAtLocation = selectedMachine.inventory[location] ?? [];
  if (inventoryAtLocation.length === 0) return notFound();

  const primaryArticle = inventoryAtLocation[0];
  const currentLocation = getCityName(location);
  const content = selectedMachine.content;
  const specifications = content?.specifications;
  const deliveryFlatRate = getDeliveryFlatRate(selectedMachine, location);
  const showWinterServiceTeaser =
    location === winterServicePageData.location &&
    machineSlug === winterServicePageData.machineSlug;
  const hasIntroContent = Boolean(content?.title || content?.description);

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: SITE_NAME, path: "/" },
          { name: currentLocation, path: `/${location}` },
          {
            name: selectedMachine.name,
            path: `/${location}/${machineSlug}`,
          },
        ])}
      />
      <Navigation slug={location} />
      <main className="pb-16 pt-28 md:pt-36 lg:pt-40 px-4">
        <Container>
          <Link
            href={`/${location}`}
            className="group mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-primary"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Alle Maschinen in {currentLocation}
          </Link>

          <div className="mb-8">
            <Headline as="h1" size="lg">
              {selectedMachine.name}{" "}
              <span className="text-primary">in {currentLocation}</span>
            </Headline>
            {selectedMachine.model && (
              <p className="mt-2 text-lg text-gray-500">
                {selectedMachine.model}
              </p>
            )}
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="min-w-0 lg:col-span-7 space-y-8">
              {selectedMachine.image?.url ? (
                <div className="flex justify-center">
                  <Image
                    // Feste Höhe, damit das Bild auf Retina-Displays nicht kleiner wird
                    className="h-[420px] w-auto max-w-full object-contain lg:h-[600px]"
                    src={selectedMachine.image.url}
                    alt={selectedMachine.image.alt || selectedMachine.name}
                    width={600}
                    height={800}
                    sizes="(min-width: 1024px) 450px, 315px"
                    priority
                  />
                </div>
              ) : null}

              {hasIntroContent && (
                <div>
                  {content?.title && (
                    <h2 className="font-bold text-2xl md:text-3xl mb-3">
                      {content.title}
                    </h2>
                  )}
                  {content?.description && (
                    <p className="text-lg leading-relaxed text-gray-600">
                      {content.description}
                    </p>
                  )}
                </div>
              )}

              {showWinterServiceTeaser && <WinterServiceTeaser />}

              {specifications && (
                <MachineSpecifications
                  model={selectedMachine.model}
                  specifications={specifications}
                />
              )}
            </div>

            {/* Rechte Spalte: Buchung und Preise, auf dem Desktop mitlaufend */}
            <div className="min-w-0 lg:col-span-5 order-first lg:order-none">
              <div className="lg:sticky lg:top-32 space-y-6">
                <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-sm sm:p-6 empty:hidden">
                  <BookingWidget articleId={primaryArticle.articleId} />
                </div>

                <SurfaceCard className="p-5 sm:p-6">
                  <h2 className="font-bold text-2xl mb-4">
                    Preise & Konditionen
                  </h2>
                  <PriceTable
                    machine={selectedMachine}
                    location={location}
                    size="lg"
                  />
                  {deliveryFlatRate !== undefined && (
                    <div className="mt-4 flex items-center gap-3 rounded-2xl border border-primary/40 bg-primary/10 p-4">
                      <Truck
                        className="h-5 w-5 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-gray-700">
                        <span className="font-semibold text-secondary">
                          Pauschallieferung {deliveryFlatRate} €
                        </span>{" "}
                        netto, standortübergreifend zum Festpreis
                      </p>
                    </div>
                  )}
                  <PriceAddition info={timeTable} />
                </SurfaceCard>
              </div>
            </div>
          </div>
        </Container>
        <BookingSteps />
      </main>
      <Footer />
    </>
  );
}
