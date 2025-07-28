import * as React from "react";
import { notFound } from "next/navigation";
import { use } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import {
  isValidLocation,
  isValidMachine,
  Location,
} from "@/lib/utils";

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
      <div>
        <h1>
          {machine} in {location}
        </h1>
        {/* Detailinfos oder Buchungskalender */}
      </div>
      <Footer />
    </>
  );
}