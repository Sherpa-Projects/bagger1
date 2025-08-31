"use client";

import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import Consent from "@/components/Consent";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        {children}
        <ThirdPartyScripts />
        <Consent />
        <rtr-checkout></rtr-checkout>
      </body>
    </html>
  );
}
