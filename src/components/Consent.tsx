import { useState, useEffect } from "react";

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
    <div
      className="text-white fixed bottom-0 left-0 right-0 py-4 lg:py-8 px-4 lg:px-6 flex flex-col md:flex-row justify-between items-center z-10 mx-4 lg:w-[80%] lg:mx-auto mb-6 border border-gray-600 bg-secondary/80 backdrop-blur-xl rounded-lg shadow-lg"
    >
      <div className="lg:max-w-6xl mx-auto">
        <p className="text-sm">
          Diese Website nutzt <strong>Google Maps</strong>, um interaktive
          Karten anzuzeigen. Dabei können personenbezogene Daten an den Anbieter
          übertragen werden. Um alle Details zu erfahren, lesen Sie die
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline ml-1"
          >
            Datenschutzerklärung von Google
          </a>
          .
        </p>
        <div className="mt-4 flex space-x-2">
          <button
            onClick={handleConsentFalse}
            className="text-white bg-red-600 px-4 py-2 rounded font-semibold hover:bg-red-600 transition cursor-pointer"
          >
            Ablehnen
          </button>
          <button
            onClick={handleConsentTrue}
            className="text-white bg-green-600 px-4 py-2 rounded font-semibold hover:bg-green-600 transition cursor-pointer"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consent;
