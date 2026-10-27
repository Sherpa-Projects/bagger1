"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import BranchContent from "./BranchContent";
import { locationData } from "@/lib/content/locationData";
import { LocationDataProps } from "@/types/Location";
import { useConsentLevel } from "@/hooks/useConsentLevel";
import { branchCardData } from "@/lib/content/components/branchCardData";
import { cn } from "@/lib/cn";
import Container from "@/components/shared/Container";
import Headline from "@/components/shared/Headline";

type BranchCardProps = {
  dark?: boolean;
};

export default function BranchCard({ dark = false }: BranchCardProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [locations, setLocations] = useState<LocationDataProps[]>([]);
  const level = useConsentLevel();
  const { comingSoonLocations } = branchCardData;

  useEffect(() => {
    const path = window.location.pathname;
    if (path.length > 1) {
      const filteredLocation = locationData.filter(
        (location) => location.slug === path.slice(1),
      );
      setLocations(filteredLocation);
    } else {
      setLocations(locationData);
    }
  }, []);

  return (
    <div className={cn(locations.length > 1 && "px-4 py-10 lg:py-20")}>
      <Container>
        {locations.length > 1 && (
          <Headline className="pb-8 lg:pb-10 text-center">
            {branchCardData.title}
          </Headline>
        )}
        <div
          className={cn(
            locations.length > 1 &&
              "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-stretch",
          )}
        >
          <BranchContent locations={locations} level={level} dark={dark} />
          {isHome &&
            comingSoonLocations.map(({ name }) => (
              <div
                key={name}
                className="flex min-h-48 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50/60 p-6 text-center"
              >
                <h3 className="text-2xl font-bold text-gray-400">{name}</h3>
                <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  Coming Soon
                </span>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
}
