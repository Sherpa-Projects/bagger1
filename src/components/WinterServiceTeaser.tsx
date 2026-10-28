import Link from "next/link";
import { ArrowRight, Snowflake } from "lucide-react";
import { cn } from "@/lib/cn";
import { winterServicePageData } from "@/lib/content/pages/winterdienst/winterServicePageData";

// Kurzer Hinweis mit Link auf die Winterdienst-Seite (Standortseite, Radlader-Seite)
export default function WinterServiceTeaser({
  className,
}: {
  className?: string;
}) {
  const { path, teaser } = winterServicePageData;

  return (
    <Link
      href={path}
      className={cn(
        "group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-primary hover:shadow-md sm:p-5",
        className,
      )}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 transition-colors duration-300 group-hover:bg-primary/25">
        <Snowflake className="h-5 w-5 text-primary" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-secondary">
          {teaser.title}
        </span>
        <span className="mt-0.5 block text-sm text-gray-600">
          {teaser.text}
        </span>
      </span>
      <span className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-secondary sm:inline-flex">
        {teaser.linkLabel}
        <ArrowRight
          className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </span>
    </Link>
  );
}
