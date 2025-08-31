"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ConsentLevel, readConsent } from "@/lib/consent";

export default function ThirdPartyScripts() {
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
    <>
      {(level === "essential" || level === "all") && (
        <>
          <Script id="rtr-init" strategy="afterInteractive">{`
            window.RTR_ACCESS_TOKEN = '${
              process.env.NEXT_PUBLIC_RTR_ACCESS_TOKEN ?? ""
            }';
          `}</Script>
          <Script
            id="rtr-widgets"
            src="https://cdn.rtr-io.com/widgets.js"
            type="module"
            strategy="afterInteractive"
          />
        </>
      )}
    </>
  );
}
