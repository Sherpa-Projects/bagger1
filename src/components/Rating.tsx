import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";
import { LINKS } from "@/constants/links";
import type { Location } from "@/types/Location";
import { cn } from "@/lib/cn";
import { clampStars, formatReviewCount, formatStars } from "@/lib/rating";

export type RatingProps = {
  stars: number;
  location: Location;
  reviews?: number;
  dark?: boolean;
};

const reviewLinks = {
  bruchsal: LINKS.bruchsalTestimonials,
  hennef: LINKS.hennefTestimonials,
} satisfies Record<"bruchsal" | "hennef", string>;

function getReviewLink(location: Location) {
  return reviewLinks[location as keyof typeof reviewLinks];
}

export default function Rating({
  stars,
  reviews,
  location,
  dark = false,
}: RatingProps) {
  const normalizedStars = clampStars(stars);
  const reviewLabel = reviews ? formatReviewCount(reviews) : undefined;

  return (
    <Link
      href={getReviewLink(location)}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        "group inline-flex w-fit items-center gap-2.5 rounded-xl border px-3 py-1.5 transition-all duration-300 hover:border-primary hover:shadow-sm",
        dark ? "border-white/10 bg-white/5" : "border-gray-200 bg-white",
      )}
      aria-label={`Google Bewertung: ${formatStars(normalizedStars)} von 5 Sternen${reviewLabel ? `, ${reviewLabel}` : ""}`}
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-white">
        <Image
          src="/images/google.webp"
          alt="Google Logo"
          width={16}
          height={16}
          className="h-4 w-4"
        />
      </span>

      <span className="flex items-center gap-1.5">
        <span
          className="flex items-center gap-0.5"
          aria-label={`${normalizedStars} von 5 Sternen`}
        >
          {Array.from({ length: 5 }, (_, index) => {
            const isActive = index < Math.round(normalizedStars);

            return (
              <Star
                key={index}
                size={13}
                className={
                  isActive
                    ? "fill-primary text-primary"
                    : dark
                      ? "text-white/30"
                      : "text-gray-300"
                }
              />
            );
          })}
        </span>
        <span
          className={cn(
            "text-sm font-semibold",
            dark ? "text-white" : "text-secondary",
          )}
        >
          {formatStars(normalizedStars)}
        </span>
      </span>
      {reviews && (
        <span
          className={cn(
            "text-sm transition-colors group-hover:text-primary",
            dark ? "text-gray-400" : "text-gray-500",
          )}
          aria-label={`Anzahl der Bewertungen: ${reviewLabel}`}
        >
          {reviewLabel}
        </span>
      )}
    </Link>
  );
}
