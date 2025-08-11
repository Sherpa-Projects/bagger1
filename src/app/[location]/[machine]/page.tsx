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

export const metadata: Metadata = {
  title: "Baumaschine mieten – Modelle & Preise | Bagger1",
  description:
    "Alle Infos zur ausgewählten Baumaschine: Modell, Tagespreis und Verfügbarkeit an deinem Standort. Jetzt direkt online mieten bei Bagger1.",
  openGraph: {
    title: "Baumaschine mieten – Modelle & Preise | Bagger1",
    description:
      "Alle Details zu dieser Baumaschine findest du hier: Technische Daten, Preise und Verfügbarkeit. Jetzt unverbindlich online anfragen.",
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
    title: "Baumaschine mieten bei Bagger1",
    description:
      "Finde Preise und Infos zu deiner Wunschmaschine – schnell & einfach.",
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
      <main className="pb-16 pt-40 px-4">
        <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-0 lg:pb-4 lg:leading-tight text-center">
            {selectedMachine.name} in {currentLocation}
          </h1>

          <div className="mt-8 grid lg:grid-cols-3 gap-10 lg:gap-0 mx-auto lg:px-8">
            {/* Linke Spalte: Bild + Inhalte */}
            <div className="w-full max-w-lg mx-auto lg:mx-0 p-6 lg:col-span-2 order-2 lg:order-1 flex lg:block flex-col">
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

                  <div className="mt-12">
                    {selectedMachine.content.dataSheet && (
                      <div className="space-y-4">
                        {selectedMachine.content.dataSheet.dimensions && (
                          <div>
                            <h4 className="font-bold">Bemessung:</h4>
                            <ul>
                              {selectedMachine.content.dataSheet.dimensions
                                .width && (
                                <li>
                                  Gesamtbreite:{" "}
                                  {
                                    selectedMachine.content.dataSheet.dimensions
                                      .width
                                  }
                                </li>
                              )}
                              {selectedMachine.content.dataSheet.dimensions
                                .length && (
                                <li>
                                  Gesamtlänge:{" "}
                                  {
                                    selectedMachine.content.dataSheet.dimensions
                                      .length
                                  }
                                </li>
                              )}
                              {selectedMachine.content.dataSheet.dimensions
                                .height && (
                                <li>
                                  Gesamthöhe:{" "}
                                  {
                                    selectedMachine.content.dataSheet.dimensions
                                      .height
                                  }
                                </li>
                              )}
                              {selectedMachine.content.dataSheet.dimensions
                                .weight && (
                                <li>
                                  Betriebsgewicht:{" "}
                                  {
                                    selectedMachine.content.dataSheet.dimensions
                                      .weight
                                  }
                                </li>
                              )}
                              {selectedMachine.content.dataSheet.dimensions
                                .volume && (
                                <li>
                                  Löffelvolumen:{" "}
                                  {
                                    selectedMachine.content.dataSheet.dimensions
                                      .volume
                                  }
                                </li>
                              )}
                            </ul>
                          </div>
                        )}

                        {selectedMachine.content.dataSheet.power && (
                          <p>
                            Leistung: {selectedMachine.content.dataSheet.power}
                          </p>
                        )}
                        {selectedMachine.content.dataSheet.workingRange && (
                          <div>
                            <h4 className="font-bold">Arbeitsbereich:</h4>
                            <ul>
                              {selectedMachine.content.dataSheet.workingRange
                                .maxDepth && (
                                <li>
                                  Max. Grabtiefe:{" "}
                                  {
                                    selectedMachine.content.dataSheet
                                      .workingRange.maxDepth
                                  }
                                </li>
                              )}
                              {selectedMachine.content.dataSheet.workingRange
                                .maxReach && (
                                <li>
                                  Max. Reichweite:{" "}
                                  {
                                    selectedMachine.content.dataSheet
                                      .workingRange.maxReach
                                  }
                                </li>
                              )}
                              {selectedMachine.content.dataSheet.workingRange
                                .minSwingRadius && (
                                <li>
                                  Min. Schwenkradius:{" "}
                                  {
                                    selectedMachine.content.dataSheet
                                      .workingRange.minSwingRadius
                                  }
                                </li>
                              )}
                              {selectedMachine.content.dataSheet.workingRange
                                .bucketBreakoutForceISO && (
                                <li>
                                  Löffellosbrechkraft ISO:{" "}
                                  {
                                    selectedMachine.content.dataSheet
                                      .workingRange.bucketBreakoutForceISO
                                  }
                                </li>
                              )}
                              {selectedMachine.content.dataSheet.workingRange
                                .armTearOutForceISO && (
                                <li>
                                  Stiel Reißkraft ISO:{" "}
                                  {
                                    selectedMachine.content.dataSheet
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
                </>
              )}
            </div>

            <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center rounded-xl p-6">
              <div className="flex flex-col space-y-12">
                {primaryArticle.articleId && (
                  <rtr-article-booking
                    article-id={primaryArticle.articleId}
                    view="calendar"
                  />
                )}

                <h2 className="text-3xl font-bold mb-6">Preise</h2>
                <ul className="border border-gray-200 text-lg">
                  <li className="bg-yellow-50 flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>1 Tag</span>
                    <span className="font-bold">{effectivePrice.perDay} €</span>
                  </li>
                  <li className="bg-white flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>Woche</span>
                    <span className="font-bold">
                      {effectivePrice.perWeek} €
                    </span>
                  </li>
                  <li className="bg-yellow-50 flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>Monat</span>
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
