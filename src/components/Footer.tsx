import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const footerData = {
    companyName: "Bagger1 GmbH",
    companyAddress: "test adresse",
    telephoneNumber: "11111",
    email: "test@bagger1.de",
  };

  return (
    <>
      <footer className="bg-black text-white">
        <div className="h-12 w-full bg-[repeating-linear-gradient(45deg,_black_0px,_black_10px,_#facc15_10px,_#facc15_20px)]"></div>
        <div className="container py-18 mx-auto max-w-8xl px-6 lg:px-8  md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-0 lg:gap-x-32 gap-y-12 lg:gap-y-0">
            <div className="space-y-3">
              <p className="font-bold text-lg">{footerData.companyName}</p>
              <div className="flex items-center">
                <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                <p>{footerData.companyAddress}</p>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon className="mr-2" icon={faPhone} />
                <p>
                  <a
                    href={`tel:${footerData.telephoneNumber}`}
                    className="hover:text-underline"
                  >
                    {footerData.telephoneNumber}
                  </a>
                </p>
              </div>
              <div className="flex items-center">
                <p>
                  <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                  <a
                    href={`mailto:${footerData.email}`}
                    className="hover:text-underline"
                  >
                    {footerData.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="space-y-3 md:text-right text-center lg:text-left">
              <p className="font-bold text-lg">Standorte</p>
              <ul className="space-y-3">
                <li>
                  <a href="/impressum" className="hover:underline">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="hover:underline">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3 md:text-right text-center lg:text-left">
              <p className="font-bold text-lg">Geschäftszeiten</p>
              <ul className="space-y-3">
                <li>
                  <a href="/impressum" className="hover:underline">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="hover:underline">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>

            <div className="md:text-right text-center lg:text-left">
              <ul className="space-y-3">
                <li>
                  <a href="/impressum" className="hover:underline">
                    Impressum
                  </a>
                </li>
                <li>
                  <a href="/datenschutz" className="hover:underline">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
