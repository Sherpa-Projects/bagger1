"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationData } from "@/lib/content/navigationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Handshake } from "lucide-react";

export default function NavigationDataNavigationData() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

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
          Offizielles Mitglied im Bundesverband der Baumaschinen-, Baugeräte-
          und Industriemaschinen-Firmen e.V.
        </div>
        <div className="container max-w-8xl mx-auto px-6 lg:px-8 py-1">
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link href="/">
                <div className="flex items-center lg:transform lg:transition-transform lg:duration-300 ease-in-out lg:hover:scale-110">
                  <Image
                    src={`/images/logo_neu.png`}
                    alt="Bagger1 Logo"
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                  <span className="font-oswald ml-2 text-lg">
                    Bagger<span className="text-primary">1</span>
                    <br />
                  </span>
                </div>
              </Link>
              <div className="border-l border-gray-300 h-6" />
              <Link
                className="flex items-center text-gray-800 hover:text-primary transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer"
                href="/"
              >
                <Handshake className="w-5 h-5 text-primary mr-2" />
                Partner werden
              </Link>
            </div>

            <div className="relative flex items-center space-x-12">
              {navigationData.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-center space-x-12"
                >
                  {item.subData?.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      href={subItem.url}
                      className="text-gray-800 hover:text-primary transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer"
                    >
                      <div className="flex items-center justify-center">
                        <span>Mieten in {subItem.name}</span>
                        <span className="ml-2 text-primary inline-block transition-transform duration-300 group-hover:translate-x-1">
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden justify-between items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={`/images/logo_neu.png`}
                  alt="Bagger1 Logo"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
                <span className="font-oswald ml-2 text-xl">
                  Bagger<span className="text-primary">1</span>
                </span>
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
              <div className="container mx-auto flex items-center justify-between px-6 lg:px-8 py-1">
                <div className="flex items-center">
                  <Image
                    src={`/images/logo_neu.png`}
                    alt="Bagger1 Logo"
                    width={60}
                    height={60}
                    className="mx-auto"
                  />
                  <span className="font-oswald ml-2 text-xl">
                    Bagger<span className="text-primary">1</span>
                  </span>
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
                  {navigationData.map((item, index) => (
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
                          <div className="text-xl mb-8">Mieten in:</div>
                          <div className="pl-4 space-y-6 text-3xl flex flex-col">
                            {item.subData?.map((subItem, subIndex) => (
                              <Link
                                href={subItem.url}
                                key={subIndex}
                                className="text-gray-800 cursor-pointer"
                              >
                                <span>{subItem.name}</span>
                                <span className="ml-2 text-primary inline-block">
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                              </Link>
                            ))}
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
