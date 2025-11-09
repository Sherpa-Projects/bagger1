"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { locationData } from "@/lib/content/locationData";
import { LocationDataProps } from "@/app/types/locationDataProps";
import Link from "next/link";
import { ConsentLevel, readConsent } from "@/lib/consent";

export default function BranchCard() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [locations, setLocations] = useState<LocationDataProps[]>([]);
  const [level, setLevel] = useState<ConsentLevel>("unset");

  const comingSoonLocations = [
    {
      name: "Leipzig",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159509.7300766179!2d12.228828673211801!3d51.34166687916191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f818200f2c73%3A0x93df80d2b9b4f552!2sLeipzig!5e0!3m2!1sde!2sde!4v1761466765071!5m2!1sde!2sde",
    },
    {
      name: "Hannover",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155871.76672528224!2d9.596665497376383!3d52.379551797928855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b00b514d494f85%3A0x425ac6d94ac4720!2sHannover!5e0!3m2!1sde!2sde!4v1761466827313!5m2!1sde!2sde",
    },
  ];

  useEffect(() => {
    setLevel(readConsent());
    // Reagiere live, wenn sich Consent in einem anderen Tab ändert
    const onStorage = (e: StorageEvent) => {
      if (e.key === "consentLevel") setLevel(readConsent());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.length > 1) {
      const filteredLocation = locationData.filter(
        (location) => location.slug === path.slice(1)
      );
      setLocations(filteredLocation);
    } else {
      setLocations(locationData);
    }
  }, []);

  return (
    <div className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        {locations.length === 1 ? (
          <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
            Unser Standort in {locations[0].name}
          </h2>
        ) : (
          <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
            Unsere Standorte
          </h2>
        )}
        <div
          className={`${
            locations.length > 1
              ? "grid lg:grid-cols-3 gap-6"
              : "flex justify-center"
          }`}
        >
          {locations.map((loc, index) => (
            <div
              key={index}
              className={`border border-gray-300 bg-white p-6 lg:p-4 rounded-lg lg:hover:shadow-md transition-all duration-300 transform lg:hover:scale-103 decoration-2 ${
                locations.length === 1 &&
                "w-full lg:w-auto lg:min-w-lg xl:min-w-xl"
              }`}
            >
              {level === "all" && (
                <iframe
                  src={loc.map}
                  className="w-full h-64 border-0 mb-4"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{loc.name}</h3>
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="mr-1.5 text-primary"
                    icon={faClock}
                  />
                  <p>Mo.-Fr.: 7.00-12.00 und 13.00-17.30 Uhr</p>
                </div>
                {locations.length > 1 && (
                  <Link href={`/${loc.slug}`} className="group">
                    <div className="w-full flex justify-end lg:justify-start">
                      <span className="group text-xl mt-6 self-start group-hover:text-primary transition-all duration-300 transform">
                        Zum Standort
                        <span className="ml-2 text-primary inline-block group-hover:translate-x-1 transition-transform duration-300">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </span>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          ))}
          {isHome && (
            <>
              {" "}
              {comingSoonLocations.map((loc, index) => (
                <div
                  key={index}
                  className={`group border border-gray-300 bg-white p-6 lg:p-4 rounded-lg lg:hover:shadow-md transition-all duration-300 transform lg:hover:scale-103 decoration-2 ${
                    locations.length === 1 &&
                    "w-full lg:w-auto lg:min-w-lg xl:min-w-xl"
                  }`}
                >
                  {level === "all" && (
                    <iframe
                      src={loc.map}
                      className="w-full h-64 border-0 mb-4"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  )}
                  <h3 className="text-xl font-semibold mb-4">{loc.name}</h3>
                  {comingSoonLocations.length > 1 && (
                    <div className="w-full flex justify-center">
                      <span className="text-xl text-gray-300 mt-6 self-start group-hover:text-primary transition-all duration-300 transform">
                        Coming Soon
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
