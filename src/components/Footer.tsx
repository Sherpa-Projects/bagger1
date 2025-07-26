import { footerData } from "@/lib/content/footer";
import { navigationData } from "@/lib/content/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white">
        <div className="h-12 w-full bg-[repeating-linear-gradient(45deg,_black_0px,_black_10px,_#facc15_10px,_#facc15_20px)]"></div>
        <div className="container py-18 mx-auto max-w-8xl px-6 lg:px-8  md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-0 lg:gap-x-32 gap-y-12 lg:gap-y-0">
            <div className="space-y-3 text-center lg:text-left flex items-center lg:items-start flex-col">
              <p className="text-lg text-yellow-400">
                {footerData.contact.companyName}
              </p>
              <div className="flex items-center text-center">
                <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                <p>{footerData.contact.companyAddress}</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                <p>
                  <a
                    href={`tel:${footerData.contact.telephoneNumber}`}
                    className="hover:text-underline"
                  >
                    {footerData.contact.telephoneNumber}
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <p>
                  <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                  <a
                    href={`mailto:${footerData.contact.email}`}
                    className="hover:text-underline"
                  >
                    {footerData.contact.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-3 md:text-right text-center lg:text-left">
              <p className="text-lg text-yellow-400">Standorte</p>
              <ul className="space-y-3">
                {navigationData.map((location, index) => (
                  <li key={index}>
                    <a href={location.url} className="hover:underline">
                      {location.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 md:text-right text-center lg:text-left">
              <p className="text-lg text-yellow-400">
                {footerData.openingHours.title}
              </p>
              <ul className="space-y-3">
                <li>{footerData.openingHours.weekday}</li>
                <li>{footerData.openingHours.saturday}</li>
                <li>{footerData.openingHours.sunday}</li>
              </ul>
            </div>

            <div className="md:text-right text-center lg:text-left">
              <ul className="space-y-3">
                {footerData.legalInformation.map((information, index) => (
                  <li key={index}>
                    <a href={information.url} className="hover:underline">
                      {information.name}
                    </a>
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
