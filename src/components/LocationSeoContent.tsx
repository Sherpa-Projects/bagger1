import { MapPin } from "lucide-react";
import BranchCard from "./BranchCard";
import { locationSeoBySlug } from "@/lib/content/locationSeoData";

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
  const coverageText = cfg.coverageText?.(cityName, {
    regionName: cfg.regionName,
    serviceAreas: cfg.serviceAreas,
  });
  const subHeadline = cfg.subHeadline?.(cityName);
  const serviceAreas = cfg.serviceAreas;

  return (
    <section className="py-10 lg:py-20 px-4">
      <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="order-2 lg:order-1">
            <h2 className="font-bold text-2xl md:text-3xl pb-4 lg:pb-6 lg:leading-tight">
              {headline}
            </h2>
            {intro && <p>{intro}</p>}
            <br />
            {coverageText && <p>{coverageText}</p>}
            <div className="mt-8 lg:mt-12">
              <h3 className="text-xs mb-2">{subHeadline}</h3>
              <ul className="grid grid-cols-3 lg:flex lg:flex-wrap gap-1 text-sm max-w-full">
                {(serviceAreas ?? []).map((place) => (
                  <li
                    key={place}
                    className="inline-flex items-center gap-1 text-secondary border border-gray-300 rounded-full px-3 py-1.5 bg-white whitespace-nowrap shrink-0"
                  >
                    <MapPin
                      className="text-primary"
                      size={16}
                      aria-hidden="true"
                    />
                    <span className="truncate">{place}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:flex lg:justify-center">
            <BranchCard />
          </div>
        </div>
      </div>
    </section>
  );
}
