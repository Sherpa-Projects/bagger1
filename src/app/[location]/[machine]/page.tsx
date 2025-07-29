import * as React from "react";
import { notFound } from "next/navigation";
import { use } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { isValidLocation, isValidMachine, Location } from "@/lib/utils";

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

  return (
    <>
      <Navigation />
      <main className="pb-16 pt-30 px-4">
        <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-0 lg:pb-4 lg:leading-tight text-center">
            {machine} in {location}
          </h1>
          <div className="mt-8 grid grid-cols-3">
            <div className="col-span-1">
              <rtr-article-booking
                article-id="GXHBU7"
                view="calendar"
              ></rtr-article-booking>
            </div>
            <div className="max-w-md mx-auto p-6 col-span-2">
              <h2 className="text-3xl font-bold text-brown-800 mb-6">Preise</h2>
              <ul className="space-y-3 text-lg">
                <li className="bg-yellow-50 flex justify-between items-center p-4 rounded-md">
                  <span>2–4 Stunden</span>
                  <span className="font-bold">50 €*</span>
                </li>
                <li className="flex justify-between items-center p-4 rounded-md">
                  <span>6–8 Stunden</span>
                  <span className="font-bold">55 €*</span>
                </li>
                <li className="bg-yellow-50 flex justify-between items-center p-4 rounded-md">
                  <span>10 Stunden</span>
                  <span className="font-bold">65 €*</span>
                </li>
                <li className="flex justify-between items-center p-4 rounded-md">
                  <span>
                    1 Tag{" "}
                    <span className="ml-1 text-sm text-black bg-neutral-200 rounded-full px-2 py-0.5">
                      i
                    </span>
                  </span>
                  <span className="font-bold">70 €*</span>
                </li>
                <li className="bg-yellow-50 flex justify-between items-center p-4 rounded-md">
                  <span>
                    5 Tage{" "}
                    <span className="ml-1 text-sm text-black bg-neutral-200 rounded-full px-2 py-0.5">
                      i
                    </span>
                  </span>
                  <span className="font-bold">270 €*</span>
                </li>
                <li className="flex justify-between items-center p-4 rounded-md">
                  <span>
                    Woche{" "}
                    <span className="ml-1 text-sm text-black bg-neutral-200 rounded-full px-2 py-0.5">
                      i
                    </span>
                  </span>
                  <span className="font-bold">330 €*</span>
                </li>
                <li className="bg-yellow-50 flex justify-between items-center p-4 rounded-md">
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
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
