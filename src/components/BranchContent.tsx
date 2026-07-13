import Link from "next/link";
import { LocationDataProps } from "@/app/types/Location";
import { constants } from "@/lib/content/constants";
import { Clock, ArrowRight } from "lucide-react";
import { ConsentLevel } from "@/lib/consent";
import Rating from "@/components/Rating";
import { Card } from "@/components/ui/card";

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
            <Card className="group p-6 lg:p-4">
              <div className="space-y-4">
                <h3 className="text-center text-2xl font-semibold mb-3">
                  {loc.name}
                </h3>

                {loc.rating ? (
                  <div className="flex justify-center mb-3 h-10">
                    <Rating
                      stars={loc.rating.stars}
                      reviews={loc.rating.reviews}
                      googleReviewLink={loc.rating.googleReviewLink}
                    />
                  </div>
                ) : (
                  <div className="flex justify-center mb-3 h-10" />
                )}

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

                <div className="w-full flex justify-center">
                  <Link
                    href={`/${loc.slug}`}
                    className="group mt-6 inline-flex items-center text-xl group-hover:text-primary transition-all duration-300 transform"
                  >
                    Zum Standort
                    <span className="ml-1 inline-flex text-primary group-hover:translate-x-1 transition-transform duration-300">
                      <ArrowRight />
                    </span>
                  </Link>
                </div>

                {level === "all" && (
                  <iframe
                    src={loc.map}
                    className="w-full h-32 border-0 mb-4"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                )}
              </div>
            </Card>
          ) : (
            <Card className="p-6 lg:p-4 w-full lg:w-auto lg:min-w-lg xl:min-w-xl">
              {level === "all" && (
                <iframe
                  src={loc.map}
                  className="w-full h-82 border-0 mb-4"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}
              <div className="space-y-4">
                {loc.rating && (
                  <div className="flex justify-center">
                    <Rating
                      stars={loc.rating.stars}
                      reviews={loc.rating.reviews}
                      googleReviewLink={loc.rating.googleReviewLink}
                    />
                  </div>
                )}
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
            </Card>
          )}
        </div>
      ))}
    </>
  );
}
