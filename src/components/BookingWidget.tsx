"use client";

import { useConsentLevel } from "@/hooks/useConsentLevel";

type BookingWidgetProps = {
  articleId: string;
};

export default function BookingWidget({ articleId }: BookingWidgetProps) {
  const level = useConsentLevel();

  // Ohne Consent nichts rendern, damit umgebende Karten leer bleiben können
  if (level !== "all" && level !== "essential") return null;

  return (
    <div>
      <rtr-article-booking article-id={articleId} view="calendar" />
    </div>
  );
}
