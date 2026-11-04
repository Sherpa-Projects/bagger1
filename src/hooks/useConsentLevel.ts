"use client";

import { useEffect, useState } from "react";
import { CONSENT_KEY, ConsentLevel, readConsent } from "@/lib/consent";

// Liefert die Cookie-Einwilligung; null, solange sie noch nicht gelesen wurde
export function useConsentLevel() {
  const [level, setLevel] = useState<ConsentLevel | null>(null);

  useEffect(() => {
    setLevel(readConsent());
    // Reagiere live, wenn sich Consent in einem anderen Tab ändert
    const onStorage = (e: StorageEvent) => {
      if (e.key === CONSENT_KEY) setLevel(readConsent());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  return level;
}
