import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/lib/content/footerData";
import { locationData } from "@/lib/content/locationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FooterPageProps } from "@/app/types/FooterPageProps";

const Footer = ({ currentLocation }: FooterPageProps) => {
  return (
    <>
      <div className="bg-white border-t border-gray-300 py-2">
        <Link href="https://www.bbi-online.org/" target="_blank">
          <Image
            src={`/images/bbi.jpg`}
            alt="BBI Logo"
            width={300}
            height={300}
            className="mx-auto"
          />
        </Link>
      </div>
      <footer className="bg-secondary text-white">
        <div className="h-12 w-full bg-[repeating-linear-gradient(45deg,_#1a1d2a_0px,_#1a1d2a_10px,_#ffa421_10px,_#ffa421_20px)]"></div>
        <div className="container py-18 mx-auto max-w-8xl px-6 lg:px-8  md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-0 lg:gap-x-32 gap-y-12 lg:gap-y-0">
            <div className="space-y-3 text-center lg:text-left flex items-center lg:items-start flex-col">
              <p className="text-lg text-primary">
                {footerData.companyName}
              </p>
              {currentLocation && currentLocation.adress ? (
                <div className="flex items-center text-center lg:text-left">
                  <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                  <p>{currentLocation.adress}</p>
                </div>
              ) : (
                <div className="flex items-center text-center lg:text-left">
                  <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                  <p>{footerData.adress}</p>
                </div>
              )}
              {currentLocation && currentLocation.contact ? (
                <>
                  {currentLocation.contact.telephone && (
                    <div className="flex items-center lg:text-left">
                      <FontAwesomeIcon className="mr-2" icon={faPhone} />
                      <p>
                        <Link
                          href={`tel:${currentLocation.contact.telephone}`}
                          className="hover:text-underline"
                        >
                          {currentLocation.contact.telephone}
                        </Link>
                      </p>
                    </div>
                  )}
                  <div className="flex items-center lg:text-left">
                    <p>
                      <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                      <Link
                        href={`mailto:${currentLocation.contact.email}`}
                        className="hover:text-underline"
                      >
                        {currentLocation.contact.email}
                      </Link>
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center lg:text-left">
                    <p>
                      <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                      <Link
                        href={`mailto:${footerData.contact.email}`}
                        className="hover:text-underline"
                      >
                        {footerData.contact.email}
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </div>

            <div className="space-y-3 text-center lg:text-left">
              <p className="text-lg text-primary">Standorte</p>
              <ul className="space-y-3">
                {locationData.map((location, index) => (
                  <li key={index}>
                    <Link href={location.slug} className="hover:underline">
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 text-center lg:text-left">
              <p className="text-lg text-primary">
                {footerData.openingHours.title}
              </p>
              <ul className="space-y-3">
                <li>{footerData.openingHours.weekday}</li>
                <li>{footerData.openingHours.saturday}</li>
                <li>{footerData.openingHours.sunday}</li>
              </ul>
            </div>

            <div className="text-center lg:text-left">
              <ul className="space-y-3">
                {footerData.legalInformation.map((information, index) => (
                  <li key={index}>
                    <Link href={information.url} className="hover:underline">
                      {information.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
