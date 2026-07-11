import Link from "next/link";
import { Star } from "lucide-react";
import Image from "next/image";

export type RatingProps = {
  stars: number;
  reviews: number;
  googleReviewLink?: string;
};

const clampStars = (value: number) => Math.min(5, Math.max(0, value));

export default function Rating({
  stars,
  reviews,
  googleReviewLink,
}: RatingProps) {
  const normalizedStars = clampStars(stars);
  const reviewLabel = `${reviews.toLocaleString("de-DE")} Bewertung${reviews === 1 ? "" : "en"}`;

  return (
    <Link
      href={googleReviewLink || "#"}
      target="_blank"
      rel="noreferrer noopener"
      className="group inline-flex w-fit items-center gap-2 rounded-full px-3 py-2 border border-gray-300 transition-all duration-300 bg-gray-50 hover:border-primary"
      aria-label={`Google Bewertung: ${normalizedStars.toFixed(1).replace(".", ",")} von 5 Sternen, ${reviewLabel}`}
    >
      <span className="flex items-center gap-1.5">
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
                  isActive ? "fill-[#fbbc04] text-[#fbbc04]" : "text-[#dadce0]"
                }
              />
            );
          })}
        </span>
        <span className="text-sm font-semibold text-[#202124]">
          {normalizedStars.toFixed(1).replace(".", ",")}
        </span>
      </span>

      <span className="text-sm font-medium text-[#5f6368] transition-colors group-hover:text-[#1a73e8]">
        ({reviewLabel})
      </span>
    </Link>
  );
}
