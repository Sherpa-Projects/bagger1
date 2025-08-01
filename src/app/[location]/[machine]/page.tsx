import * as React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { machineData } from "@/lib/content/machineData";
import { locationData } from "@/lib/content/locationData";
import { isValidLocation, isValidMachine, Location } from "@/lib/utils";
import { MachineDataProps } from "@/app/types/machineDataProps";

type MachinePageProps = {
  params: { location: string; machine: string };
};

export function generateMetadata({ params }: MachinePageProps): Metadata {
  const { location, machine } = params;

  if (!isValidLocation(location)) return {};

  const currentLocation = locationData.find((l) => l.slug === location);
  const currentMachine = machineData.find((m) => m.slug === machine);

  if (!currentLocation || !currentMachine) return {};

  const capitalizedLocation =
    currentLocation.name.charAt(0).toUpperCase() +
    currentLocation.name.slice(1);

  const title = `${currentMachine.name} mieten in ${capitalizedLocation} | Bagger1`;
  const description = `Jetzt ${currentMachine.name} günstig in ${capitalizedLocation} mieten. Flexible Zeiträume, transparente Preise, direkt online buchen bei Bagger1.`;

  return {
    title,
    description,
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: `https://bagger1.de/${location}/${machine}`,
      siteName: "Baumaschinenverleih in deiner Gegend | Bagger1",
      images: {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: title,
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/meta.png"],
    },
  };
}

export default function MachinePage({
  params,
}: {
  params: { location: string; machine: string };
}) {
  const { location, machine } = params;

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
      <main className="pb-16 pt-10 lgpt-30 px-4">
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

              <h2 className="text-3xl font-bold text-brown-800 mb-6">Preise</h2>
              <ul className="border border-gray-200 text-lg">
                <li className="bg-yellow-100 flex justify-between items-center p-4 rounded-md">
                  <span>2–4 Stunden</span>
                  <span className="font-bold">50 €*</span>
                </li>
                <li className="bg-white flex justify-between items-center p-4 rounded-md">
                  <span>6–8 Stunden</span>
                  <span className="font-bold">55 €*</span>
                </li>
                <li className="bg-yellow-100 flex justify-between items-center p-4 rounded-md">
                  <span>10 Stunden</span>
                  <span className="font-bold">65 €*</span>
                </li>
                <li className="bg-white flex justify-between items-center p-4 rounded-md">
                  <span>
                    1 Tag{" "}
                    <span className="ml-1 text-sm text-black bg-neutral-200 rounded-full px-2 py-0.5">
                      i
                    </span>
                  </span>
                  <span className="font-bold">70 €*</span>
                </li>
                <li className="bg-yellow-100 flex justify-between items-center p-4 rounded-md">
                  <span>
                    5 Tage{" "}
                    <span className="ml-1 text-sm text-black bg-neutral-200 rounded-full px-2 py-0.5">
                      i
                    </span>
                  </span>
                  <span className="font-bold">270 €*</span>
                </li>
                <li className="bg-white flex justify-between items-center p-4 rounded-md">
                  <span>
                    Woche{" "}
                    <span className="ml-1 text-sm text-black bg-neutral-200 rounded-full px-2 py-0.5">
                      i
                    </span>
                  </span>
                  <span className="font-bold">330 €*</span>
                </li>
                <li className="bg-yellow-100 flex justify-between items-center p-4 rounded-md">
                  <span>
                    Wochenende{" "}
                    <span className="ml-1 text-sm text-black bg-neutral-200 rounded-full px-2 py-0.5">
                      i
                    </span>
                  </span>
                  <span className="font-bold">165 €*</span>
                </li>
              </ul>
            </div>
            <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center rounded-xl p-6">
              <rtr-article-booking
                article-id="GXHBU7"
                view="calendar"
              ></rtr-article-booking>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
