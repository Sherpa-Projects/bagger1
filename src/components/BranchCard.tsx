"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faLocationDot,
  faPhone,
  faClock,
  faEnvelope,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { locationData } from "@/lib/content/locationData";
import Link from "next/link";

export default function BranchCard() {
  return (
    <div className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-4">
          {locationData.map((loc, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-md">
              {/* {consent && ( */}
              <iframe
                src={loc.map}
                className="w-full h-64 border-0 mb-4"
                allowFullScreen
                loading="lazy"
              ></iframe>
              {/* )} */}
              <h3 className="text-xl font-semibold mb-4">{loc.name}</h3>
              <div className="mb-4">
                <div className="flex items-center">
                  <FontAwesomeIcon className="mr-1.5" icon={faClock} />
                  <p>Mo.-Fr.: 7.00-12.00 und 13.00-17.30 Uhr</p>
                </div>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <FontAwesomeIcon className="mr-1.5" icon={faLocationDot} />
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
                  <FontAwesomeIcon className="mr-1.5" icon={faPhone} />
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
                  <FontAwesomeIcon className="mr-1.5" icon={faEnvelope} />
                  <a
                    href={`tel:${loc.contact.email}`}
                    className="hover:underline"
                  >
                    {loc.contact.email}
                  </a>
                </div>
              </div> */}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
