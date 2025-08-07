import * as React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { machineData } from "@/lib/content/machineData";

import { isValidLocation, isValidMachine, Location } from "@/lib/utils";
import { MachineDataProps } from "@/app/types/machineDataProps";

export default function MachinePage({
  params,
}: {
  params: Promise<{ location: string; machine: string }>;
}) {
  const { location, machine } = use(params);

  if (!isValidLocation(location)) return notFound();

  const typedLocation: Location = location;
  const isMachineValid = isValidMachine(typedLocation, machine);

  if (!isMachineValid) return notFound();

  const selectedMachine = machineData.find(
    (m: MachineDataProps) => m.slug === machine
  );
  const currentLocation =
    location.charAt(0).toUpperCase() + location.slice(1).toLowerCase();

  return (
    <>
      <Navigation />
      <main className="pb-16 pt-40 px-4">
        <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-0 lg:pb-4 lg:leading-tight text-center">
            {selectedMachine?.name} in {currentLocation}
          </h1>
          <div className="mt-8 grid lg:grid-cols-3 gap-10 lg:gap-0 mx-auto lg:px-8">
            <div className="w-full max-w-lg mx-auto lg:mx-0 p-6 lg:col-span-2 order-2 lg:order-1 flex lg:block flex-col">
              {selectedMachine?.image && (
                <Image
                  className="mb-12 rounded-lg mx-auto"
                  src={selectedMachine?.image.url}
                  alt={selectedMachine?.image.alt}
                  width={500}
                  height={500}
                />
              )}
              {selectedMachine?.content && (
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
                      <div className="text-lg space-y-4">
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
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </>
              )}
              <div></div>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center rounded-xl p-6">
              <div className="flex flex-col space-y-12">
                {selectedMachine?.articleId && (
                  <rtr-article-booking
                    article-id={selectedMachine?.articleId}
                    view="calendar"
                  ></rtr-article-booking>
                )}

                <h2 className="text-3xl font-bold mb-6">Preise</h2>
                <ul className="border border-gray-200 text-lg">
                  <li className="bg-yellow-50 flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>1 Tag </span>
                    <span className="font-bold">
                      {selectedMachine?.pricePerDay} €
                    </span>
                  </li>
                  <li className="bg-white flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>Woche </span>
                    <span className="font-bold">
                      {selectedMachine?.pricePerWeek} €
                    </span>
                  </li>
                  <li className="bg-yellow-50 flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0">
                    <span>Woche </span>
                    <span className="font-bold">
                      {selectedMachine?.pricePerMonth} €
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
