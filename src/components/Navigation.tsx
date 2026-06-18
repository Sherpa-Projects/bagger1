"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  navigationLocationData,
  navigationPartnerData,
  navigationKleinanzeigenData,
  navigationInstagramData,
  navigationWhatsappData,
  banner,
  brandName,
} from "@/lib/content/components/navigationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Handshake, Instagram } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

type NavigationProps = {
  slug?: string;
};

function getLocationSlugFromUrl(url: string) {
  return url.replace(/^\/+|\/+$/g, "");
}

export default function Navigation({ slug }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const currentLocationSlug = slug?.replace(/^\/+|\/+$/g, "");

  const isLocationActive = (url: string) =>
    currentLocationSlug === getLocationSlugFromUrl(url);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-white fixed w-full top-0 z-50 border-b border-gray-300">
        <div className="hidden px-4 text-center text-sm w-full md:flex items-center justify-center bg-gradient-to-r bg-primary animate-gradient-x py-2 lg:py-1">
          <Image
            className="mr-2"
            src={`/images/bbi_logo.png`}
            alt="BBI Logo"
            width={30}
            height={30}
          />
          {banner}
        </div>
        <div className="container max-w-8xl mx-auto px-6 lg:px-8 py-4 lg:py-1 border-b border-transparent">
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link href="/">
                <div className="flex items-center lg:transform lg:transition-transform lg:duration-300 ease-in-out lg:hover:scale-110 p-1">
                  <Image
                    src={`/images/logo.svg`}
                    alt="BAGGER1 Logo"
                    width={48}
                    height={48}
                    className="mx-auto p-1"
                  />
                  {brandName}
                </div>
              </Link>
              <div className="border-l border-gray-300 h-6" />
              <div className="flex items-center gap-2" aria-label="Standorte">
              <p className="text-lg pr-2">Mieten in:</p>
                {navigationLocationData.map((item) => (
                  <div key={item.name} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      {item.subData?.map((subItem) => {
                        const isActive = isLocationActive(subItem.url);
                        return (
                          <Link
                            key={subItem.url}
                            href={subItem.url}
                            aria-current={isActive ? "location" : undefined}
                            className={`px-2.5 py-2 font-medium text-lg transition-all duration-300 ${
                              isActive
                                ? "text-primary bg-amber-50 border-primary border rounded-lg"
                                : "text-gray-600 hover:text-primary transition duration-300"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center space-x-5">
              <Link
                className="transition-all duration-300 transform hover:scale-105"
                href={navigationKleinanzeigenData.url!}
                target="_blank"
              >
                <Image
                  src="/images/kleinanzeigen.png"
                  height={45}
                  width={110}
                  alt="Kleinanzeigen Logo"
                />
              </Link>
              <Link
                className="transition-all duration-300 transform hover:scale-105"
                href={navigationInstagramData.url!}
                target="_blank"
              >
                <Instagram className="w-5 h-5 text-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-400 rounded" />
              </Link>
              <Link
                className="transition-all duration-300 transform hover:scale-105"
                href={navigationWhatsappData.url!}
                target="_blank"
              >
                <SiWhatsapp size={20} color="default" className="mr-2" />
              </Link>
              <div className="border-l border-gray-300 h-6" />
              <Link
                className="flex items-center text-gray-600 hover:text-primary transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer text-lg"
                href={navigationPartnerData.url!}
              >
                <Handshake className="w-5 h-5 text-primary mr-2" />
                {navigationPartnerData.name}
              </Link>
            </div>
          </div>

          <div className="flex lg:hidden justify-between items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={`/images/logo.svg`}
                  alt="BAGGER1 Logo"
                  width={50}
                  height={50}
                  className="mx-auto p-1"
                />
                {brandName}
              </div>
            </Link>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-black text-2xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-white z-20 overflow-scroll">
              <div className="px-4 text-center text-sm w-full md:flex items-center justify-center animate-gradient bg-gradient-to-r from-orange-400 via-orange-500 to-primary bg-[length:200%_200%] bg-[position:0%_50%] transition-all duration-1000 ease-in-out py-2 lg:py-1 hidden">
                <Image
                  className="mr-2"
                  src={`/images/bbi_logo.png`}
                  alt="BBI Logo"
                  width={30}
                  height={30}
                />
                Offizielles Mitglied im Bundesverband der Baumaschinen-,
                Baugeräte- und Industriemaschinen-Firmen e.V.
              </div>
              <div className="container mx-auto flex items-center justify-between px-6 lg:px-8 py-4 border-b border-gray-300">
                <div className="flex items-center">
                  <Image
                    src={`/images/logo.svg`}
                    alt="BAGGER1 Logo"
                    width={50}
                    height={50}
                    className="mx-auto p-1"
                  />
                  {brandName}
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-black text-2xl focus:outline-none"
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              <div className="flex flex-col items-start px-8 py-6">
                <div className="w-full space-y-8">
                  {navigationLocationData.map((item, index) => (
                    <div
                      className="border-b border-gray-300 last:border-none pb-8"
                      key={index}
                    >
                      {!item.subData && item.url ? (
                        <Link
                          href={item.url}
                          className="text-gray-800 cursor-pointer text-3xl flex items-center"
                        >
                          {item.icon && (
                            <FontAwesomeIcon
                              className="mr-2 text-primary inline-block"
                              icon={item.icon}
                            />
                          )}
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <>
                          <div className="text-xl mb-4">Mieten in:</div>
                          <div className="pl-4 mb-16 space-y-6 text-3xl flex flex-col">
                            {item.subData?.map((subItem) => {
                              const isActive = isLocationActive(subItem.url);

                              return (
                                <Link
                                  href={subItem.url}
                                  key={subItem.url}
                                  onClick={() => setIsMenuOpen(false)}
                                  aria-current={
                                    isActive ? "location" : undefined
                                  }
                                  className={`w-fit rounded-md px-3 py-1 transition-colors duration-300 ${
                                    isActive
                                      ? "bg-orange-50 text-primary font-semibold"
                                      : "text-gray-800 hover:text-primary"
                                  }`}
                                >
                                  <span>{subItem.name}</span>
                                  <span className="ml-2 text-primary inline-block">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                          <div className="text-3xl mb-10">
                            <Link
                              href={navigationPartnerData.url!}
                              key={navigationPartnerData.name}
                              className="text-gray-800 cursor-pointer"
                            >
                              <span>{navigationPartnerData.name}</span>
                              <span className="ml-2 text-primary inline-block">
                                <FontAwesomeIcon icon={faArrowRight} />
                              </span>
                            </Link>
                          </div>
                          <div>
                            <div className="border-t border-gray-400 my-4" />
                            <div className="space-y-6 pt-6">
                              <div>
                                <Link
                                  className="transition-all duration-300 transform hover:scale-105"
                                  href={navigationKleinanzeigenData.url!}
                                  target="_blank"
                                >
                                  <Image
                                    src="/images/kleinanzeigen.png"
                                    height={50}
                                    width={200}
                                    alt="Kleinanzeigen Logo"
                                  />
                                </Link>
                              </div>
                              <div>
                                <Link
                                  className="transition-all duration-300 transform hover:scale-105 flex items-center"
                                  href={navigationInstagramData.url!}
                                  target="_blank"
                                >
                                  <Instagram className="w-8 h-8 text-pink-500 mr-3" />
                                  <p className="text-2xl">
                                    {navigationInstagramData.name}
                                  </p>
                                </Link>
                              </div>
                              <div>
                                <Link
                                  className="transition-all duration-300 transform hover:scale-105 flex items-center"
                                  href={navigationWhatsappData.url!}
                                  target="_blank"
                                >
                                  <SiWhatsapp
                                    size={32}
                                    color="default"
                                    className="mr-3"
                                  />
                                  <p className="text-2xl">
                                    {navigationWhatsappData.name}
                                  </p>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
