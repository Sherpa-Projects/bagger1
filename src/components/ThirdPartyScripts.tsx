"use client";

import Script from "next/script";
import { useConsentLevel } from "@/hooks/useConsentLevel";

export default function ThirdPartyScripts() {
  const level = useConsentLevel();

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
