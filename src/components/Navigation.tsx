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
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Handshake } from "lucide-react";
import { Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCityName } from "@/lib/utils";

type NavigationProps = {
  slug?: string;
};

export default function Navigation({ slug }: NavigationProps) {
  const instagramLink =
    "https://www.instagram.com/bagger1.de?igsh=MWRuZ2J3cTd0bDJ5bg==";
  const kleinanzeigenLink =
    "https://www.kleinanzeigen.de/s-bestandsliste.html?userId=156249218";

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("Standort wählen");

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOverlayOpen(false);
      }
    };

    if (isOverlayOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOverlayOpen]);

  useEffect(() => {
    if (!slug) {
      setLocation("Standort auswählen");
      return;
    }

    setLocation(getCityName(slug));
  }, [slug]);

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
        <div className="container max-w-8xl mx-auto px-6 lg:px-8 py-4 lg:py-1">
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-6">
              <Link href="/">
                <div className="flex items-center lg:transform lg:transition-transform lg:duration-300 ease-in-out lg:hover:scale-110 p-1">
                  <Image
                    src={`/images/logo.svg`}
                    alt="Bagger1 Logo"
                    width={48}
                    height={48}
                    className="mx-auto p-1"
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
                href="/partner"
              >
                <Handshake className="w-5 h-5 text-primary mr-2" />
                Partner werden
              </Link>
            </div>

            <div className="relative flex items-center space-x-6">
              <Link
                className="transition-all duration-300 transform hover:scale-105"
                href={kleinanzeigenLink}
                target="_blank"
              >
                <Image
                  src="/images/kleinanzeigen.png"
                  height={50}
                  width={120}
                  alt="Kleinanzeigen Logo"
                />
              </Link>
              <Link
                className="transition-all duration-300 transform hover:scale-105"
                href={instagramLink}
                target="_blank"
              >
                <Instagram className="w-6 h-6 text-pink-500" />
              </Link>
              <button
                onClick={() => setIsOverlayOpen(true)}
                className="py-2 px-4 rounded-full border border-gray-300 cursor-pointer group"
              >
                <div className="flex items-center">
                  <span className="mr-1 text-primary inline-block will-change-transform group-hover:animate-hop">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <span className="text-gray-600 group-hover:text-primary duration-300">
                    {location}
                  </span>
                </div>
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOverlayOpen && (
              <motion.div
                key="overlay"
                onClick={() => setIsOverlayOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
              >
                <motion.div
                  key="modal"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="bg-white rounded-lg shadow-lg p-10 w-100 max-w-[90%] relative"
                >
                  <button
                    onClick={() => setIsOverlayOpen(false)}
                    className="absolute top-3 right-3 text-gray-400 hover:text-primary cursor-pointer border border-gray-300 h-9 w-9 rounded-full"
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>

                  <h2 className="text-lg font-semibold mb-6 text-gray-800 text-center">
                    Standort auswählen
                  </h2>

                  <ul>
                    {navigationData.map((item, index) => (
                      <div key={index} className="space-y-4">
                        {item.subData?.map((subItem, subIndex) => (
                          <li key={subIndex} className="group">
                            <Link
                              onClick={() => {
                                setIsOverlayOpen(false);
                              }}
                              href={subItem.url}
                              className="text-gray-800 hover:text-primary transition-all duration-300 transform cursor-pointer"
                            >
                              <div className="flex items-center text-lg">
                                <span>{subItem.name}</span>
                                <span className="ml-2 text-primary inline-block transition-transform duration-300 group-hover:translate-x-1">
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex lg:hidden justify-between items-center">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src={`/images/logo.svg`}
                  alt="Bagger1 Logo"
                  width={50}
                  height={50}
                  className="mx-auto p-1"
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
              <div className="container mx-auto flex items-center justify-between px-6 lg:px-8 py-4">
                <div className="flex items-center">
                  <Image
                    src={`/images/logo.svg`}
                    alt="Bagger1 Logo"
                    width={50}
                    height={50}
                    className="mx-auto p-1"
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
                            <div className="border-t border-gray-400 my-4" />
                            <div className="space-y-6 pt-6">
                              <div>
                                <Link
                                  className="transition-all duration-300 transform hover:scale-105"
                                  href={kleinanzeigenLink}
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
                                  href={instagramLink}
                                  target="_blank"
                                >
                                  <Instagram className="w-8 h-8 text-pink-500 mr-2" />
                                  <p className="text-md">Instagram</p>
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
