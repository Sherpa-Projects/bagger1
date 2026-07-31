import Link from "next/link";
import Image from "next/image";
import { footerData } from "@/lib/content/components/footerData";
import { company } from "@/lib/content/company";
import { locationData } from "@/lib/content/locationData";
import { Phone, Mail } from "lucide-react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

const Footer = () => {
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
              <h4 className="text-lg text-primary">{company.companyName}</h4>
              {company.contact.telephone && (
                <div className="flex items-center lg:text-left hover:underline">
                  <Phone size={20} className="mr-2" />
                  <p>
                    <Link
                      href={`tel:${company.contact.telephone}`}
                      className="hover:text-underline"
                    >
                      {company.contact.telephone}
                    </Link>
                  </p>
                </div>
              )}
              <div className="flex items-center lg:text-left hover:underline">
                <SiWhatsapp size={20} color="default" className="mr-2" />
                <p>
                  <Link
                    href={`https://wa.me/${company.contact.whatsapp.replace(/\D/g, "")}`}
                    className="hover:text-underline"
                  >
                    {company.contact.whatsapp}
                  </Link>
                </p>
              </div>
              <div className="flex items-center lg:text-left hover:underline">
                <Mail size={20} className="mr-2" />
                <p>
                  <Link
                    href={`mailto:${company.contact.email}`}
                    className="hover:text-underline"
                  >
                    {company.contact.email}
                  </Link>
                </p>
              </div>
            </div>

            <div className="space-y-3 text-center lg:text-left">
              <h4 className="text-lg text-primary">Standorte</h4>
              <ul className="space-y-3">
                {locationData.map((location, index) => (
                  <li key={index}>
                    <Link
                      href={`/${location.slug}`}
                      className="hover:underline"
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 text-center lg:text-left">
              <h4 className="text-lg text-primary">
                {company.openingHours.title}
              </h4>
              <ul className="space-y-3">
                <li>{company.openingHours.weekday}</li>
                <li>{company.openingHours.saturday}</li>
                <li>{company.openingHours.sunday}</li>
              </ul>
            </div>

            <div className="space-y-3 text-center lg:text-left">
              <h4 className="text-lg text-primary">
                Rechtliches
              </h4>
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
