import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: "Bagger1",
  description: "Baumaschinen mieten in deiner Nähe.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <>
        <Script
          src="https://cdn.rtr-io.com/widgets.js"
          strategy="afterInteractive"
          type="module"
        />
        <Script
          id="rtr-access-token"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.RTR_ACCESS_TOKEN = 'Wd1285b3297330ea1ae4731ab48fe16fe';`,
          }}
        />
      </>

      <body>
        {children}
        <rtr-checkout></rtr-checkout>
      </body>
    </html>
  );
}
