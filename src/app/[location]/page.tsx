import * as React from "react";
import { notFound } from "next/navigation";
import { use } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { isValidLocation, validMachines } from "@/lib/utils";

export default function LocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = use(params);

  if (!isValidLocation(location)) return notFound();

  const machines = validMachines[location];

  return (
    <>
      <Navigation />
      <main className="p-4">
        <h1 className="text-2xl font-bold capitalize">Standort: {location}</h1>
        <ul className="mt-4 list-disc pl-5">
          {machines.map((machine) => (
            <li key={machine}>
              <a
                href={`/${location}/${machine}`}
                className="text-blue-600 hover:underline"
              >
                {machine}
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </>
  );
}
