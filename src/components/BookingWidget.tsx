"use client";

import { useEffect, useState } from "react";
import { ConsentLevel, readConsent } from "@/lib/consent";

type BookingWidgetProps = {
  articleId: string;
};

export default function BookingWidget({ articleId }: BookingWidgetProps) {
  const [level, setLevel] = useState<ConsentLevel>("unset");

  useEffect(() => {
    setLevel(readConsent());
    // Reagiere live, wenn sich Consent in einem anderen Tab ändert
    const onStorage = (e: StorageEvent) => {
      if (e.key === "consentLevel") setLevel(readConsent());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return (
    <div>
      {(level === "all" || level === "essential") && (
        <rtr-article-booking article-id={articleId} view="calendar" />
      )}
    </div>
  );
}
