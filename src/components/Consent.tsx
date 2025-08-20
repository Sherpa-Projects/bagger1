import { useState, useEffect } from "react";
import Link from "next/link";

const Consent = () => {
  const [consent, setConsent] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const savedConsent = localStorage.getItem("userConsent");
      if (savedConsent) {
        setConsent(savedConsent === "true");
      }
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleConsentTrue = () => {
    localStorage.setItem("userConsent", "true");
    setConsent(true);
    window.location.reload();
  };

  const handleConsentFalse = () => {
    localStorage.setItem("userConsent", "false");
    setConsent(false);
  };

  if (isLoading || consent !== null) return null;

  return (
    <div className="text-white fixed bottom-0 left-0 right-0 py-4 lg:py-8 px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center z-10 mx-4 lg:w-[80%] lg:mx-auto mb-6 border border-gray-600 bg-secondary/80 backdrop-blur-xl rounded-lg shadow-lg">
      <div className="lg:max-w-6xl mx-auto">
        <p className="text-sm">
          Diese Website nutzt <strong>Google Maps</strong>, um interaktive
          Karten anzuzeigen. Dabei können personenbezogene Daten (z.&nbsp;B.
          Ihre IP-Adresse) an Google übermittelt und in die USA übertragen
          werden. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a
          DSGVO). Sie können diese jederzeit widerrufen. Weitere Informationen
          finden Sie in unserer{" "}
          <Link href="/datenschutz" className="text-primary underline ml-1">
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
        </p>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleConsentFalse}
            className="text-white bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-700 transition cursor-pointer"
          >
            Ablehnen
          </button>
          <button
            onClick={handleConsentTrue}
            className="text-white bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-700 transition cursor-pointer"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consent;
