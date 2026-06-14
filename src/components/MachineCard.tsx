"use client";

import * as React from "react";
import Link from "next/link";
import { Machine } from "@/app/types/Machine";
import { Location } from "@/app/types/Location";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  getPricePerDayForLocation,
  getPricePerWeekForLocation,
  getPricePerMonthForLocation,
} from "@/lib/utils";

type MachineCardProps = {
  title: string;
  machines: Machine[];
  location: Location;
  machineCard: {
    cta: string;
  };
};

export default function MachineCard({
  title,
  machines,
  location,
  machineCard,
}: MachineCardProps) {
  return (
    <div className="pt-10 pb-10 lg:pt-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
          {title}
        </h2>
        <ul className="grid md:grid-cols-2 gap-6">
          {machines.map((machine) => {
            const pricePerDay = getPricePerDayForLocation(
              machine,
              location,
            );
            const pricePerWeek = getPricePerWeekForLocation(
              machine,
              location,
            );
            const pricePerMonth = getPricePerMonthForLocation(
              machine,
              location,
            );
            return (
              <li key={machine.name}>
                <Link
                  href={`/${location}/${machine.slug}`}
                  className="group border border-gray-300 bg-white rounded-lg lg:hover:shadow-md p-6 lg:p-4 grid lg:grid-cols-2 lg:gap-8 transition-all duration-300 transform lg:hover:scale-103 decoration-2 cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    <Image
                      className="rounded w-full mb-6 lg:mb-0"
                      src={machine.image.url}
                      alt={machine.image.alt}
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>

                  <div className="flex flex-col justify-between h-full py-2">
                    <div className="space-y-5">
                      <div>
                        <p className="text-3xl lg:text-2xl xl:text-3xl font-semibold mb-2">
                          {machine.name}
                        </p>
                        {machine.model && (
                          <p className="lg:text-sm text-neutral-500">
                            {machine.model}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                          {pricePerDay} € <span className="text-xs">/ Tag</span>
                        </p>
                        <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                          {pricePerWeek} €{" "}
                          <span className="text-xs">/ Woche</span>
                        </p>
                        <p className="text-2xl lg:text-lg xl:text-xl capitalize">
                          {pricePerMonth} €{" "}
                          <span className="text-xs">/ Monat</span>
                        </p>
                      </div>
                    </div>

                    <div className="w-full flex justify-end lg:justify-start">
                      <span className="group text-xl mt-6 self-start group-hover:text-primary transition-all duration-300 transform">
                        {machineCard.cta}
                        <span className="ml-2 text-primary inline-block group-hover:translate-x-1 transition-transform duration-300">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
