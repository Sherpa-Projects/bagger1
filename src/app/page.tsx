import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BranchCard from "../components/BranchCard";
import { BadgeEuro, Truck, Zap, Shapes } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const generateMetadata = (): Metadata => {
  const title = "Ihre Nummer 1 für Bagger und Baumaschinen | Bagger1";
  const description =
    "Finde verfügbare Bagger und andere Baumaschinen in deiner Nähe. Flexible Zeiträume, transparente Preise und schnelle Buchung online.";
  const imageUrl = "/images/meta.png";

  return {
    title,
    description,
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: "https://bagger1.de",
      siteName: "Baumaschinenverleih in deiner Gegend | Bagger1",
      images: {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: "Startseite | Bagger1",
      },
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
};

export default function Home() {
  const items: {
    label: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    sr?: string;
  }[] = [
    { label: "Faire Preise", Icon: BadgeEuro },
    { label: "Rundum‑Service", Icon: Truck },
    { label: "Schnell & zuverlässig", Icon: Zap },
    { label: "Breites Sortiment", Icon: Shapes },
  ];

  return (
    <>
      <Navigation />
      <main>
        <div
          className="mt-17 md:mt-24 relative h-48 lg:h-72 flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero2.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-4">
            <p className="text-5xl lg:text-7xl font-semibold leading-normal">
              Bagger1
            </p>
            <h1 className="text-2xl lg:text-5xl">
              Ihre Nummer 1 für Bagger und Baumaschinen
            </h1>
          </div>
        </div>

        <div className="py-10 lg:py-20 px-4">
          <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="font-bold text-3xl md:text-4xl pb-4 lg:pb-6 lg:leading-tight">
                  Faire Preise.
                  <br />
                  Keine versteckten Kosten. <br />
                  <span className="text-primary">
                    Rundum-Service von Profis.
                  </span>
                </h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Ob für private Bauprojekte am Wochenende oder für
                    professionelle Baustellen während der Woche – bei Bagger1
                    bekommen Sie modernste Baumaschinen schnell, zuverlässig und
                    zum besten Preis-Leistungs-Verhältnis. Wir bieten nicht nur
                    die Vermietung, sondern auch ein Rundum-Sorglos-Paket:
                    Lieferung, Abholung, ausführliche Einweisung und praxisnahe
                    Anleitungen – damit selbst Privatkunden sicher und effizient
                    arbeiten können.
                  </p>
                  <p>
                    Für Firmenkunden sind wir ein verlässlicher Partner, der
                    auch kurzfristig reagiert.
                  </p>
                  <p>
                    Auf Wunsch beschaffen wir zusätzlich Spezialmaschinen,
                    zugeschnitten auf die Bedürfnisse Ihrer Branche – ob
                    Landwirtschaft, Kommunalbetrieb oder sogar im Bergbau.
                  </p>
                </div>
              </div>
              <div className="mx-auto">
                <Image
                  className="rounded-lg"
                  src="/images/claim.png"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-10 px-4">
          <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-3xl pb-4 lg:pb-6 lg:leading-tight text-center">
              Unser Versprechen an Sie
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {items.map(({ label, Icon }, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-2xl border border-gray-300 bg-white p-6"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-lg font-semibold leading-tight">
                        {label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <BranchCard />

        <div
          className="mt-17 md:mt-24 relative py-12 flex justify-center items-center bg-cover bg-center my-20"
          style={{
            backgroundImage: 'url("/images/team.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/70 z-0" />
          <div className="relative text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-6">
            <h2 className="text-4xl lg:text-6xl font-semibold leading-normal">
              Bagger1 wächst
            </h2>
            <p className="text-center text-xl lg:text-3xl max-w-3xl leading-normal lg:leading-snug">
              Als Teil eines jungen, dynamischen Franchise-Netzwerks sind wir
              ständig dabei, neue Standorte zu erschließen und noch näher bei
              unseren Kunden zu sein.
            </p>
            <div className="flex justify-center items-center">
              <Link href="/partner" className="group">
                <div className="w-full flex justify-end lg:justify-start py-3 px-4 bg-white/20 rounded-xl border border-white/30 backdrop-blur-md shadow-md">
                  <span className="group text-xl self-start group-hover:text-primary transition-all duration-300 transform">
                    Mehr erfahren
                    <span className="ml-2 text-primary inline-block group-hover:translate-x-1 transition-transform duration-300">
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
