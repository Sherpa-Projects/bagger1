"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { navigationData } from "@/lib/content/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faBars,
  faTimes,
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

export default function NavigationDatanavigationData() {
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
      <nav className="bg-white fixed w-full top-0 z-50 duration-300 boder border-b border-neutral-300">
        <div className="container max-w-8xl mx-auto px-6 lg:px-8 py-3 lg:py-1">
          <div className="hidden lg:flex justify-between items-center">
            <a href="/">
              <div className="flex items-center lg:transform lg:transition-transform lg:duration-300 ease-in-out lg:hover:scale-110">
                <Image
                  src={`/images/logo_neu.png`}
                  alt="Bagger1 Logo"
                  width={60}
                  height={60}
                  className="mx-auto"
                />
                <span className="font-oswald ml-2 text-base/5">
                  Baumaschinen-
                  <br />
                  verleih
                </span>
              </div>
            </a>
            <div className="relative flex items-center space-x-12">
              {navigationData.map((item, index) => (
                <div key={index}>
                  {!item.subData && item.url ? (
                    <Link
                      href={item.url}
                      className="text-gray-800 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer"
                    >
                      {item.icon && (
                        <FontAwesomeIcon className="text-lg" icon={item.icon} />
                      )}
                      <span className="ml-2 mr-2">{item.name}</span>
                    </Link>
                  ) : (
                    <div className="relative group">
                      <div className="text-gray-800 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer">
                        {item.icon && (
                          <FontAwesomeIcon
                            className="text-lg"
                            icon={item.icon}
                          />
                        )}
                        <span className="ml-2 mr-2">{item.name}</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </div>
                      <div className="fixed top-[68px] left-0 w-full bg-white shadow-lg opacity-0 translate-y-[-10px] invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-500 ease-in-out z-40 pt-2 border-t border-gray-300">
                        <div className="max-w-7xl mx-auto px-6 py-8 grid lg:grid-cols-5 gap-6">
                          {item.subData?.map((item, subIndex) => (
                            <Link
                              key={subIndex}
                              href={item.url}
                              className="text-gray-800 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer"
                            >
                              <div className="flex items-center justify-center">
                                <span>{item.name}</span>
                                <span className="ml-2 text-yellow-500 inline-block transition-transform duration-300 group-hover:translate-x-1">
                                  <FontAwesomeIcon icon={faArrowRight} />
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex lg:hidden justify-between items-center">
            <div className="flex items-center">
              <Image
                src={`/images/logo_neu.png`}
                alt="Bagger1 Logo"
                width={60}
                height={60}
                className="mx-auto"
              />
              <span className="font-oswald ml-2 text-base/5">
                Baumaschinen-
                <br />
                verleih
              </span>
            </div>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-black text-2xl focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>

          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-full h-full bg-white z-20 overflow-scroll">
              <div className="container mx-auto flex items-center justify-between py-3 px-6 lg:px-8">
                <div className="flex items-center">
                  <Image
                    src={`/images/logo_neu.png`}
                    alt="Bagger1 Logo"
                    width={60}
                    height={60}
                    className="mx-auto"
                  />
                  <span className="font-oswald ml-2 text-base/5">
                    Baumaschinen-
                    <br />
                    verleih
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
                    <div className="border-b border-gray-300 last:border-none pb-8" key={index}>
                      {!item.subData && item.url ? (
                        <Link
                          href={item.url}
                          className="text-gray-800 cursor-pointer text-3xl flex items-center"
                        >
                          {item.icon && <FontAwesomeIcon className="mr-2 text-yellow-500 inline-block" icon={item.icon} />}
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <>
                          <div className="text-xl mb-8">{item.name}</div>
                          <div className="pl-4 space-y-6 text-3xl flex flex-col">
                            {item.subData?.map((location, subIndex) => (
                              <Link
                                href={location.url}
                                key={subIndex}
                                className="text-gray-800 cursor-pointer"
                              >
                                <span>{location.name}</span>
                                <span className="ml-2 text-yellow-500 inline-block">
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
