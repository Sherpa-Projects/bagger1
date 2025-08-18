"use client";

import { useState, useEffect } from "react";
import Script from "next/script";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Consent from "@/components/Consent";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [consent, setConsent] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("userConsent");
    if (savedConsent === "true") {
      setConsent(true);
    }
  }, []);

  return (
    <html lang="de">
      <head>
        <Script
          id="rtr-init"
          type="module"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        >
          {`
            window.RTR_ACCESS_TOKEN = '${
              process.env.NEXT_PUBLIC_RTR_ACCESS_TOKEN ?? ""
            }';
            import('https://cdn.rtr-io.com/widgets.js');
          `}
        </Script>
      </head>

      <body>
        {!consent && <Consent />}
        {children}
        <rtr-checkout></rtr-checkout>
      </body>
    </html>
  );
}
