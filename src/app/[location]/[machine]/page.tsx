import * as React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { machineData } from "@/lib/content/machineData";
import { isValidLocation, type Location } from "@/lib/utils";
import type { Machine } from "@/app/types/Machine";
import BookingWidget from "@/components/BookingWidget";
import { machinePageData } from "@/lib/content/pages/machine/machinePageData";

export const metadata: Metadata = {
  title: `${machinePageData.seo.metaTitle}`,
  description: `${machinePageData.seo.metaDescription.google}`,
  openGraph: {
    title: `${machinePageData.seo.metaTitle}`,
    description: `${machinePageData.seo.metaDescription.openGraph}`,
    url: "https://bagger1.de",
    siteName: "Bagger1",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Bagger1 Maschinenübersicht",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${machinePageData.seo.metaTitle}`,
    description: `${machinePageData.seo.metaDescription.twitter}`,
    images: ["/images/meta.png"],
  },
  robots: "index, follow",
};

export default function MachinePage({
  params,
}: {
  params: Promise<{ location: string; machine: string }>;
}) {
  const { location: rawLocation, machine: machineSlug } = use(params);
  const { timeTable } = machinePageData;

  if (!isValidLocation(rawLocation)) return notFound();
  const location = rawLocation as Location;

  const selectedMachine = machineData.find(
    (m: Machine) => m.slug === machineSlug
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

  const currentLocation =
    location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  return (
    <>
      <Navigation />
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

              {selectedMachine.content && (
                <>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {selectedMachine.content.title}
                    </h3>
                    <p className="text-lg">
                      {selectedMachine.content.description}
                    </p>
                  </div>

                  <div className="lg:mt-12">
                    <details className="group rounded-xl border border-gray-200 bg-white">
                      <summary className="flex items-center justify-between cursor-pointer select-none px-4 py-3">
                        <span className="text-xl font-semibold">
                          {machinePageData.specifications.title}
                        </span>
                        <svg
                          className="h-5 w-5 transition-transform duration-300 group-open:rotate-180"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
                        </svg>
                      </summary>

                      <div className="px-4 pb-4 pt-2 space-y-4 text-gray-800">
                        <div className="mb-4">
                          Modell: {selectedMachine.model}
                        </div>
                        {selectedMachine.content.specifications && (
                          <div className="space-y-4">
                            {selectedMachine.content.specifications
                              .dimensions && (
                              <div>
                                <h4 className="font-bold">Bemessung:</h4>
                                <ul>
                                  {selectedMachine.content.specifications
                                    .dimensions.width && (
                                    <li>
                                      {
                                        machinePageData.specifications
                                          .dimensions.width
                                      }
                                      :{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .dimensions.width
                                      }
                                    </li>
                                  )}
                                  {selectedMachine.content.specifications
                                    .dimensions.length && (
                                    <li>
                                      {
                                        machinePageData.specifications
                                          .dimensions.length
                                      }
                                      :{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .dimensions.length
                                      }
                                    </li>
                                  )}
                                  {selectedMachine.content.specifications
                                    .dimensions.height && (
                                    <li>
                                      {
                                        machinePageData.specifications
                                          .dimensions.height
                                      }
                                      :{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .dimensions.height
                                      }
                                    </li>
                                  )}
                                  {selectedMachine.content.specifications
                                    .dimensions.weight && (
                                    <li>
                                      {
                                        machinePageData.specifications
                                          .dimensions.weight
                                      }
                                      :{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .dimensions.weight
                                      }
                                    </li>
                                  )}
                                  {selectedMachine.content.specifications
                                    .dimensions.volume && (
                                    <li>
                                      {
                                        machinePageData.specifications
                                          .dimensions.volume
                                      }
                                      :{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .dimensions.volume
                                      }
                                    </li>
                                  )}
                                </ul>
                              </div>
                            )}

                            {selectedMachine.content.specifications.power && (
                              <p>
                                {machinePageData.specifications.power.title}:{" "}
                                {selectedMachine.content.specifications.power}
                              </p>
                            )}
                            {selectedMachine.content.specifications
                              .workingRange && (
                              <div>
                                <h4 className="font-bold">
                                  {
                                    machinePageData.specifications.workingRange
                                      .title
                                  }
                                  :
                                </h4>
                                <ul>
                                  {selectedMachine.content.specifications
                                    .workingRange.maxDepth && (
                                    <li>
                                      Max. Grabtiefe:{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .workingRange.maxDepth
                                      }
                                    </li>
                                  )}
                                  {selectedMachine.content.specifications
                                    .workingRange.maxReach && (
                                    <li>
                                      Max. Reichweite:{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .workingRange.maxReach
                                      }
                                    </li>
                                  )}
                                  {selectedMachine.content.specifications
                                    .workingRange.minSwingRadius && (
                                    <li>
                                      Min. Schwenkradius:{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .workingRange.minSwingRadius
                                      }
                                    </li>
                                  )}
                                  {selectedMachine.content.specifications
                                    .workingRange.bucketBreakoutForceISO && (
                                    <li>
                                      Löffellosbrechkraft ISO:{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .workingRange.bucketBreakoutForceISO
                                      }
                                    </li>
                                  )}
                                  {selectedMachine.content.specifications
                                    .workingRange.armTearOutForceISO && (
                                    <li>
                                      Stiel Reißkraft ISO:{" "}
                                      {
                                        selectedMachine.content.specifications
                                          .workingRange.armTearOutForceISO
                                      }
                                    </li>
                                  )}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </details>
                  </div>
                </>
              )}
            </div>

            <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center rounded-xl lg:p-6">
              <div className="flex flex-col space-y-12">
                <BookingWidget articleId={primaryArticle.articleId} />

                <h2 className="text-3xl font-bold mb-6">Preise</h2>
                <ul className="border border-gray-200 text-lg">
                  <li className="bg-orange-50 flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>{timeTable.rowOne}</span>
                    <span className="font-bold">{effectivePrice.perDay} €</span>
                  </li>
                  <li className="bg-white flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>{timeTable.rowTwo}</span>
                    <span className="font-bold">
                      {effectivePrice.perWeek} €
                    </span>
                  </li>
                  <li className="bg-orange-50 flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>{timeTable.rowThree}</span>
                    <span className="font-bold">
                      {effectivePrice.perMonth} €
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
