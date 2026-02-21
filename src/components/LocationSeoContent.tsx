import { MapPin, Info } from "lucide-react";
import BranchCard from "./BranchCard";
import { locationSeoBySlug } from "@/lib/content/locationSeoData";
import { bookingInformation } from "@/lib/content/locationSeoData";

export function LocationSeoContent({
  locationSlug,
  cityName,
}: {
  locationSlug: string;
  cityName: string;
}) {
  const cfg = locationSeoBySlug[locationSlug];

  if (!cfg) return null;

  const headline = cfg.headline?.(cityName);
  const intro = cfg.intro?.(cityName, {
    regionName: cfg.regionName,
    serviceAreas: cfg.serviceAreas,
  });
  const subHeadline = cfg.subHeadline?.(cityName);
  const serviceAreas = cfg.serviceAreas;

  return (
    <section className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div>
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
            <div>
              <h2 className="font-bold text-3xl md:text-4xl pb-4 lg:pb-6 lg:leading-tight">
                {headline}
              </h2>
              {intro && <p className="text-lg">{intro}</p>}
              <div className="flex flex-col lg:flex-row items-center mt-6 border text-primary border-yellow-300 bg-yellow-50 p-6 lg:p-3 rounded-lg w-full lg:w-auto lg:min-w-lg xl:min-w-xl">
                <Info className="shrink-0 lg:mr-2 mb-2 lg:mb-0" size={24} />
                <p className="text-sm">{bookingInformation}</p>
              </div>
              <div className="mt-6">
                <h3 className="text-sm text-gray-400 mb-2">{subHeadline}</h3>
                <ul className="flex flex-wrap gap-1 text-sm max-w-full">
                  {(serviceAreas ?? []).map((place) => (
                    <li
                      key={place}
                      className="inline-flex items-center gap-1 text-primary border border-gray-300 rounded-full px-3 py-1.5 bg-white whitespace-nowrap shrink-0"
                    >
                      <MapPin size={16} aria-hidden="true" />
                      <span>{place}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex justify-center">
              <BranchCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
