import Link from "next/link";
import { LocationDataProps } from "@/types/Location";
import { openingHoursLines } from "@/lib/content/company";
import { Clock, ArrowRight, MapPin } from "lucide-react";
import { ConsentLevel } from "@/lib/consent";
import Rating from "@/components/Rating";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/cn";

type BranchContentProps = {
  locations: LocationDataProps[];
  level: ConsentLevel | null;
  dark?: boolean;
};

export default function BranchContent({
  locations,
  level,
  dark = false,
}: BranchContentProps) {
  return (
    <>
      {locations.map((loc) => (
        <div key={loc.name} className={cn(locations.length > 1 && "h-full")}>
          {locations.length > 1 ? (
            <Card className="group h-full gap-0 bg-white p-6 hover:bg-white hover:border-primary/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-bold leading-tight">{loc.name}</h3>
              </div>

              <div className="mb-5 h-10">
                {loc.rating && (
                  <Rating
                    stars={loc.rating.stars}
                    reviews={loc.rating.reviews}
                    location={loc.slug}
                  />
                )}
              </div>

              {level === "all" && (
                <iframe
                  src={loc.map}
                  className="w-full h-36 rounded-xl border-0 mb-5"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              )}

              <ul className="space-y-2 text-base text-gray-600">
                {openingHoursLines.map((line) => (
                  <li key={line} className="flex items-center gap-2">
                    <Clock
                      size={18}
                      className="shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex-1" />

              <Link
                href={`/${loc.slug}`}
                className="group/link flex items-center justify-between rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-lg font-semibold transition-all duration-300 hover:border-primary hover:shadow-sm"
              >
                Zum Standort
                <ArrowRight
                  size={20}
                  className="text-primary transition-transform duration-300 group-hover/link:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Card>
          ) : (
            <Card
              className={cn(
                "p-6 lg:p-4 w-full lg:w-auto lg:min-w-lg xl:min-w-xl",
                dark &&
                  "bg-white/5 hover:bg-white/10 border-white/10 text-white shadow-none hover:shadow-none hover:border-primary/60",
              )}
            >
              {level === "all" && (
                <iframe
                  src={loc.map}
                  className={cn(
                    "w-full h-82 border-0 mb-4",
                    dark && "rounded-xl",
                  )}
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
                      location={loc.slug}
                      dark={dark}
                    />
                  </div>
                )}
                <div className="flex items-center">
                  <ul className="space-y-1">
                    {openingHoursLines.map((line) => (
                      <li key={line} className="flex items-center">
                        <Clock size={18} className="mr-1.5 text-primary" />
                        <p>{line}</p>
                      </li>
                    ))}
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
