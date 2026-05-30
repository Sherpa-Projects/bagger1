import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { machineData } from "@/lib/content/machineData";
import { Location } from "@/app/types/Location";
import {
  getCityName,
  getLocationMachineRouteParams,
  humanizeSlug,
  isValidLocation,
} from "@/lib/utils";
import type { Machine } from "@/app/types/Machine";
import BookingWidget from "@/components/BookingWidget";
import { machinePageData } from "@/lib/content/pages/machine/machinePageData";
import BookingSteps from "@/components/BookingSteps";
import { getMachineSeoTexts } from "@/lib/content/seo/machineSeo";
import MachineSpecifications from "@/components/MachineSpecifications";

export function generateStaticParams() {
  return getLocationMachineRouteParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ machine: string; location: string }>;
}): Promise<Metadata> {
  const { location, machine: machineSlug } = await params;
  const selectedMachine = machineData.find(
    (m: Machine) => m.slug === machineSlug,
  );

  if (!selectedMachine) {
    return {
      title: machinePageData.seo.metaTitle,
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
    url,
    alt,
  } = getMachineSeoTexts(location, machineName, model, machineSlug);

  return {
    title,
    description: googleDescription,
    openGraph: {
      title,
      description: openGraphDescription,
      url,
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
    robots: "index, follow",
  };
}

export default async function MachinePage({
  params,
}: {
  params: Promise<{ location: string; machine: string }>;
}) {
  const { location: rawLocation, machine: machineSlug } = await params;
  const { timeTable } = machinePageData;

  if (!isValidLocation(rawLocation)) return notFound();
  const location = rawLocation as Location;

  const selectedMachine = machineData.find(
    (m: Machine) => m.slug === machineSlug,
  );
  if (!selectedMachine) return notFound();

  const inventoryAtLocation = selectedMachine.inventory[location] ?? [];
  if (inventoryAtLocation.length === 0) return notFound();

  const primaryArticle = inventoryAtLocation[0];

  const effectivePrice = {
    perDay:
      primaryArticle.priceOverride?.perDay ?? selectedMachine.price.perDay,
    perWeek:
      primaryArticle.priceOverride?.perWeek ?? selectedMachine.price.perWeek,
    perMonth:
      primaryArticle.priceOverride?.perMonth ?? selectedMachine.price.perMonth,
  };

  const currentLocation = getCityName(location);
  const content = selectedMachine.content;
  const specifications = content?.specifications;
  const hasIntroContent = Boolean(content?.title || content?.description);

  return (
    <>
      <Navigation slug={location} />
      <main className="pb-16 pt-30 md:pt-36 lg:pt-40 px-4">
        <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-0 lg:pb-4 lg:leading-tight text-center">
            {selectedMachine.name} in {currentLocation}
          </h1>

          <div className="mt-8 grid lg:grid-cols-3 gap-10 lg:gap-0 mx-auto lg:px-8">
            <div className="w-full max-w-lg mx-auto lg:mx-0 lg:p-6 lg:col-span-2 order-2 lg:order-1 flex lg:block flex-col">
              {selectedMachine.image?.url ? (
                <Image
                  className="mb-12 rounded-lg mx-auto"
                  src={selectedMachine.image.url}
                  alt={selectedMachine.image.alt || selectedMachine.name}
                  width={500}
                  height={500}
                />
              ) : null}

              {content && (
                <>
                  {hasIntroContent && (
                    <div>
                      {content.title && (
                        <h3 className="text-3xl font-bold mb-2">
                          {content.title}
                        </h3>
                      )}
                      {content.description && (
                        <p className="text-lg">{content.description}</p>
                      )}
                    </div>
                  )}

                  {specifications && (
                    <div className={hasIntroContent ? "lg:mt-12" : ""}>
                      <MachineSpecifications
                        model={selectedMachine.model}
                        specifications={specifications}
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center rounded-xl lg:p-6">
              <div className="flex flex-col space-y-12 min-w-full">
                <BookingWidget articleId={primaryArticle.articleId} />

                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Preise & Konditionen
                  </h2>
                  <ul className="border border-gray-200 text-lg mb-2">
                    <li className="bg-orange-50 flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                      <span>{timeTable.rowOne}</span>
                      <span className="font-bold">
                        {effectivePrice.perDay} € netto/Tag
                      </span>
                    </li>
                    <li className="bg-white flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                      <span>{timeTable.rowTwo}</span>
                      <span className="font-bold">
                        {effectivePrice.perWeek} € netto/Tag
                      </span>
                    </li>
                    <li className="bg-orange-50 flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                      <span>{timeTable.rowThree}</span>
                      <span className="font-bold">
                        {effectivePrice.perMonth} € netto/Tag
                      </span>
                    </li>
                  </ul>
                  <p className="text-xs mb-5 w-full flex justify-end">
                    * 1 Miettag = 8 Betriebsstunden
                  </p>
                  <div className="rounded-xl border border-gray-200 bg-white p-4">
                    <h3 className="mb-1">Zusätzlich:</h3>
                    <div className="text-sm">
                      <div className="space-y-1 mb-2">
                        <p>+10 % Maschinenbruchversicherung</p>
                        <p>+19 % MwSt.</p>
                      </div>
                      <p className="font-bold text-base">
                        Keine versteckten Kosten.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookingSteps />
      </main>
      <Footer />
    </>
  );
}
