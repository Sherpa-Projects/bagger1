import Link from "next/link";
import { LocationDataProps } from "@/app/types/locationDataProps";
import { constants } from "@/lib/content/constants";
import { Clock, ArrowRight } from "lucide-react";
import { ConsentLevel } from "@/lib/consent";

type BranchContentProps = {
  locations: LocationDataProps[];
  level: ConsentLevel;
};

export default function BranchContent({
  locations,
  level,
}: BranchContentProps) {
  return (
    <>
      {locations.map((loc) => (
        <div key={loc.name}>
          {locations.length > 1 ? (
            <Link href={`/${loc.slug}`} className="group">
              <div className="border border-gray-300 bg-white p-6 lg:p-4 rounded-lg lg:hover:shadow-md transition-all duration-300 transform lg:hover:scale-103 decoration-2">
                {level === "all" && (
                  <iframe
                    src={loc.map}
                    className="w-full h-64 border-0 mb-4"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                )}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{loc.name}</h3>
                  <div className="flex items-center">
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <Clock size={18} className="mr-1.5 text-primary" />
                        <p>{constants.openingHours.weekday}</p>
                      </li>
                      <li className="flex items-center">
                        <Clock size={18} className="mr-1.5 text-primary" />
                        <p>{constants.openingHours.saturday}</p>
                      </li>
                      <li className="flex items-center">
                        <Clock size={18} className="mr-1.5 text-primary" />
                        <p>{constants.openingHours.sunday}</p>
                      </li>
                    </ul>
                  </div>

                  <div className="w-full flex justify-end lg:justify-start">
                    <span className="group text-xl mt-6 self-start group-hover:text-primary transition-all duration-300 transform">
                      Zum Standort
                      <span className="ml-2 text-primary inline-block group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight />
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ) : (
            <div className="border border-gray-300 bg-white p-6 lg:p-4 rounded-lg w-full lg:w-auto lg:min-w-lg xl:min-w-xl">
              {level === "all" && (
                <iframe
                  src={loc.map}
                  className="w-full h-82 border-0 mb-4"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <div className="space-y-4">
                <div className="flex items-center">
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <Clock size={18} className="mr-1.5 text-primary" />
                      <p>{constants.openingHours.weekday}</p>
                    </li>
                    <li className="flex items-center">
                      <Clock size={18} className="mr-1.5 text-primary" />
                      <p>{constants.openingHours.saturday}</p>
                    </li>
                    <li className="flex items-center">
                      <Clock size={18} className="mr-1.5 text-primary" />
                      <p>{constants.openingHours.sunday}</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
