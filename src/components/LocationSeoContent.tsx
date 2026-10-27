import { ChevronDown, MapPin, Route, Truck } from "lucide-react";
import BranchCard from "./BranchCard";
import { locationSeoBySlug } from "@/lib/content/locationSeoData";
import { getLocationBySlug } from "@/lib/locations";
import type { DeliveryAreaProps, Location } from "@/types/Location";
import Section from "@/components/shared/Section";
import Eyebrow from "@/components/shared/Eyebrow";
import Headline from "@/components/shared/Headline";

function findDistanceKm(place: string, deliveryAreas: DeliveryAreaProps[]) {
  const baseName = place.replace(/\s*\(.*\)$/, "");
  const matches = deliveryAreas.filter(
    (area) =>
      area.city === place ||
      area.city === baseName ||
      area.city.startsWith(`${baseName} `),
  );
  if (matches.length === 0) return undefined;
  return Math.min(...matches.map((area) => area.distanceKm));
}

export function LocationSeoContent({
  locationSlug,
  cityName,
}: {
  locationSlug: Location;
  cityName: string;
}) {
  const cfg = locationSeoBySlug[locationSlug];
  const deliveryAreas = getLocationBySlug(locationSlug)?.deliveryAreas ?? [];
  const region = { regionName: cfg.regionName, serviceAreas: cfg.serviceAreas };

  const headline = cfg.headline?.(cityName);
  const intro = cfg.intro?.(cityName, region);
  const coverageText = cfg.coverageText?.(cityName, region);
  const subHeadline = cfg.subHeadline?.(cityName);

  const places = (cfg.serviceAreas ?? [])
    .map((name) => ({ name, distanceKm: findDistanceKm(name, deliveryAreas) }))
    .sort((a, b) => (a.distanceKm ?? Infinity) - (b.distanceKm ?? Infinity));

  const placeCount = new Set(deliveryAreas.map((area) => area.city)).size;
  const maxDistanceKm = Math.max(
    0,
    ...deliveryAreas.map((area) => area.distanceKm),
  );
  const radiusKm = Math.ceil(maxDistanceKm / 5) * 5;

  const facts = [
    {
      icon: Truck,
      value: "Lieferung",
      label: "direkt zur Baustelle",
    },
    ...(placeCount > 0
      ? [
          {
            icon: MapPin,
            value: `${Math.floor(placeCount / 10) * 10}+ Orte`,
            label: "im Liefergebiet",
          },
        ]
      : []),
    ...(radiusKm > 0
      ? [
          {
            icon: Route,
            value: `ca. ${radiusKm} km`,
            label: `Umkreis um ${cityName}`,
          },
        ]
      : []),
  ];

  return (
    <Section>
      <div className="rounded-3xl bg-secondary text-white px-6 py-10 md:px-10 lg:p-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Eyebrow variant="label" className="mb-4">
              Standort {cityName}
            </Eyebrow>
            <Headline className="mb-6">{headline}</Headline>
            {intro && (
              <p className="text-base lg:text-lg leading-relaxed text-gray-300">
                {intro}
              </p>
            )}
            <ul className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
              {facts.map(({ icon: Icon, value, label }) => (
                <li
                  key={value}
                  className="flex flex-col gap-2 rounded-2xl bg-white/5 border border-white/10 p-3 sm:p-4"
                >
                  <Icon
                    className="text-primary shrink-0"
                    size={24}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-base sm:text-lg font-semibold leading-tight">
                      {value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-400">{label}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 [&_[data-slot=card]]:w-full [&_[data-slot=card]]:min-w-0">
            <BranchCard dark />
          </div>
        </div>

        {places.length > 0 && (
          <div className="mt-12 lg:mt-16 pt-10 lg:pt-12 border-t border-white/10">
            <h3 className="font-bold text-2xl md:text-3xl mb-6">
              {subHeadline}
            </h3>
            <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {places.map(({ name, distanceKm }) => (
                <li
                  key={name}
                  className="flex items-center justify-between gap-2 rounded-xl bg-white/5 border border-white/10 px-3 py-3 sm:px-4 transition-colors hover:border-primary/60 hover:bg-white/10"
                >
                  <span className="flex items-center gap-2 min-w-0">
                    <MapPin
                      className="text-primary shrink-0"
                      size={18}
                      aria-hidden="true"
                    />
                    <span className="text-[15px] sm:text-base leading-tight">
                      {name}
                    </span>
                  </span>
                  {distanceKm !== undefined && (
                    <span className="hidden sm:inline text-sm text-gray-400 whitespace-nowrap">
                      {Math.round(distanceKm)} km
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {coverageText && (
          <details className="group mt-8 rounded-2xl border border-white/10 bg-white/5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold [&::-webkit-details-marker]:hidden">
              Mehr zum Einsatzgebiet rund um {cityName}
              <ChevronDown
                className="text-primary shrink-0 transition-transform group-open:rotate-180"
                size={20}
                aria-hidden="true"
              />
            </summary>
            <p className="px-5 pb-5 leading-relaxed text-gray-300">
              {coverageText}
            </p>
          </details>
        )}
      </div>
    </Section>
  );
}
