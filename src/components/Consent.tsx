"use client";

import Link from "next/link";
import { ConsentLevel, writeConsent } from "@/lib/consent";
import { useConsentLevel } from "@/hooks/useConsentLevel";

export default function CookieBanner() {
  // null = noch nicht gelesen, dann ebenfalls nichts anzeigen
  const consent = useConsentLevel();

  if (consent !== "unset") return null;

  // writeConsent informiert per Storage-Event auch diesen Tab, das Banner schließt sich
  const allow = (level: ConsentLevel) => {
    writeConsent(level);
    location.reload();
  };

  return (
    <div className="text-white fixed bottom-0 left-0 right-0 py-4 lg:py-8 px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center z-10 mx-4 lg:w-[80%] lg:mx-auto mb-6 border border-gray-600 bg-secondary/80 backdrop-blur-xl rounded-lg shadow-lg">
      <div className="lg:max-w-6xl mx-auto">
        <p className="text-sm space-y-4">
          <span className="block">
            Für die Funktion unseres <strong>Warenkorbs und der Buchung</strong>{" "}
            setzen wir <strong>Rentware</strong> mit <strong> Stripe</strong>{" "}
            ein. Die eingesetzten Cookies und Skripte sind technisch notwendig
            und werden immer geladen, da sonst keine Buchung möglich ist (Art. 6
            Abs. 1 lit. b DSGVO). Weitere Informationen finden Sie in unserer{" "}
            <Link href="/datenschutz" className="text-primary underline">
              Datenschutzerklärung
            </Link>{" "}
            sowie in der{" "}
            <Link
              href="https://rentware.com/datenschutz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Datenschutzerklärung von Rentware
            </Link>{" "}
            und der{" "}
            <Link
              href="https://stripe.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Datenschutzerklärung von Stripe
            </Link>
            .
          </span>

          <span className="block mt-4">
            Zusätzlich nutzt diese Website <strong>Google Maps</strong>, um
            interaktive Karten anzuzeigen. Dabei können personenbezogene Daten
            (z.&nbsp;B. Ihre IP-Adresse) an Google übermittelt und in die USA
            übertragen werden. Rechtsgrundlage ist Ihre Einwilligung (Art. 6
            Abs. 1 lit. a DSGVO). Sie können diese jederzeit widerrufen. Weitere
            Informationen finden Sie ebenfalls in unserer{" "}
            <Link href="/datenschutz" className="text-primary underline">
              Datenschutzerklärung
            </Link>{" "}
            sowie in der{" "}
            <Link
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              Datenschutzerklärung von Google
            </Link>
            .
          </span>
        </p>

        <div className="mt-4 flex space-x-2">
          <button
            onClick={() => allow("essential")}
            className="text-white bg-gray-600 border border-gray-400 px-4 py-2 rounded font-semibold hover:bg-gray-700 transition cursor-pointer"
          >
            Nur Essentielle
          </button>
          <button
            onClick={() => allow("all")}
            className="text-white bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-700 transition cursor-pointer"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
}
