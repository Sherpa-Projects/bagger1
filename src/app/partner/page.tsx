import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  BadgeEuro,
  Cpu,
  Users,
  Rocket,
  Car,
  Handshake,
  Caravan,
  Hammer,
  Phone,
  Mail,
} from "lucide-react";

export default function PartnerPage() {
  type careerItem = {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    text: string;
  };

  const offerItems: careerItem[] = [
    {
      Icon: BadgeEuro,
      text: "Faire Bezahlung: Provisions-Basis",
    },
    {
      Icon: Cpu,
      text: "Volldigitalisiertes & automatisiertes System – einfache Abläufe, klare Prozesse",
    },
    {
      Icon: Users,
      text: "Unterstützung & direkter Draht zum Franchise-Team",
    },
    {
      Icon: Rocket,
      text: "Mitarbeit in einem wachsenden Netzwerk mit Möglichkeit zur späteren Selbstständigkeit",
    },
  ];

  const requirementItems: careerItem[] = [
    {
      Icon: Car,
      text: "Führerschein Klasse BE (für Anhängertransport)",
    },
    {
      Icon: Handshake,
      text: "Zuverlässigkeit und Verantwortungsbewusstsein",
    },
    {
      Icon: Caravan,
      text: "Platz für Bagger + Anhänger",
    },
    {
      Icon: Hammer,
      text: "Gerne Erfahrung im Bau-/Maschinenbereich – kein Muss, wichtig ist Verlässlichkeit",
    },
  ];

  return (
    <>
      <Navigation />
      <main>
        <div
          className="mt-17 md:mt-24 relative h-48 lg:h-72 flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/partner.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-4">
            <p className="text-5xl lg:text-7xl font-semibold leading-normal">
              Werde Teil von Bagger1
            </p>
            <h1 className="text-2xl lg:text-5xl">
              Fahrer & Auslieferung (m/w/d) im Minijob
            </h1>
          </div>
        </div>
        <div className="py-10 lg:py-20 px-4">
          <div className="container mx-auto md:max-w-4xl grid lg:grid-cols-6 lg:gap-20">
            <div className="lg:col-span-4">
              <h2 className="font-bold text-3xl md:text-4xl pb-4 lg:pb-6 lg:leading-tight">
                Flexibler Nebenjob.
                <br />
                <span className="text-primary">Faire Bezahlung.</span>
              </h2>
              <div className="space-y-4 text-lg pb-8">
                <p>
                  Du suchst einen flexiblen Nebenjob mit fairer Bezahlung und
                  möchtest Teil eines wachsenden Franchise-Netzwerks werden?
                </p>
                <p>
                  Dann bist du bei Bagger1 genau richtig! Wir suchen
                  zuverlässige Partner, die unsere Bagger zu Kunden bringen, vor
                  Ort eine kurze Einweisung geben und so für zufriedene
                  Baustellen sorgen.
                </p>
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-xl mb-3">Was wir bieten</h3>
                <ul className="space-y-2">
                  {offerItems.map(({ Icon, text }, offerIndex) => (
                    <li key={offerIndex} className="flex items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-base">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pb-8">
                <h3 className="font-bold text-xl mb-3">Was wir erwarten</h3>
                <ul className="space-y-2">
                  {requirementItems.map(({ Icon, text }, reqIndex) => (
                    <li key={reqIndex} className="flex items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <p className="text-base">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="border border-gray-300 p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-xl mb-2">Standorte</h3>
                <div className="space-y-4 text-lg pb-8">
                  <p className="text-base mb-6">
                    Wir suchen Partner in allen Regionen, in denen noch kein
                    Bagger1-Standort vorhanden ist.
                  </p>
                  <p className="font-bold">So bewirbst du dich</p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
                        <Phone className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <a href="tel:015231770260" className="hover:underline">
                        01523 1770260
                      </a>
                    </li>
                    <li className="flex items-center">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary mr-2">
                        <Mail className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <a
                        href="mailto:partner@bagger1.de"
                        className="hover:underline"
                      >
                        partner@bagger1.de
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
