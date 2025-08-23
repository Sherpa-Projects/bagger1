"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { locationData } from "@/lib/content/locationData";
import { LocationDataProps } from "@/app/types/locationDataProps";
import Link from "next/link";

export default function BranchCard() {
  const [consent, setConsent] = useState(false);
  const [locations, setLocations] = useState<LocationDataProps[]>([]);

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

  useEffect(() => {
    const savedConsent = localStorage.getItem("userConsent");
    if (savedConsent === "true") {
      setConsent(true);
    }
  }, []);

  return (
    <div className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        {locations.length === 1 && (
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-4 lg:pb-6 lg:leading-tight text-center">
            Unser Standort in {locations[0].name}
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
              className={`border border-gray-300 p-6 lg:p-4 rounded-lg lg:hover:shadow-md transition-all duration-300 transform lg:hover:scale-103 decoration-2 ${
                locations.length === 1 &&
                "w-full lg:w-auto lg:min-w-lg xl:min-w-xl"
              }`}
            >
              {consent && (
                <iframe
                  src={loc.map}
                  className="w-full h-64 border-0 mb-4"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <h3 className="text-xl font-semibold mb-4">{loc.name}</h3>
              <div className="mb-4">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="mr-1.5 text-primary"
                    icon={faClock}
                  />
                  <p>Mo.-Fr.: 7.00-12.00 und 13.00-17.30 Uhr</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <FontAwesomeIcon
                    className="mr-1.5 text-primary"
                    icon={faLocationDot}
                  />
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      loc.adress
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {loc.adress}
                  </a>
                </div>
              </div>
              {/* <div>
                <div className="flex items-center">
                  <FontAwesomeIcon className="mr-1.5 text-primary" icon={faPhone} />
                  <a
                    href={`tel:${loc.contact.telephone}`}
                    className="hover:underline"
                  >
                    {loc.contact.telephone}
                  </a>
                </div>
              </div> */}
              {/* <div>
                <div className="flex items-center">
                  <FontAwesomeIcon className="mr-1.5 text-primary" icon={faEnvelope} />
                  <a
                    href={`tel:${loc.contact.email}`}
                    className="hover:underline"
                  >
                    {loc.contact.email}
                  </a>
                </div>
              </div> */}
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
          ))}
        </div>
      </div>
    </div>
  );
}
