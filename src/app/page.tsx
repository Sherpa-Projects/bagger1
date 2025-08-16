import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { locationData } from "@/lib/content/locationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const generateMetadata = (): Metadata => {
  const title = "Baumaschinenverleih in deiner Gegend | Bagger1";
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
  return (
    <>
      <Navigation />
      <div
        className="relative h-screen bg-cover bg-center flex justify-center items-center"
        style={{
          backgroundImage: `url("/images/hero.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-secondary/50 z-0" />

        <div className="relative z-10 flex justify-center items-center mx-4 md:mx-0">
          <div className="text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
            <h1 className="text-6xl lg:text-9xl font-extrabold uppercase mb-6 lg:mb-8">
              Bagger<span className="text-primary">1</span>
            </h1>
            <p className="text-4xl lg:text-6xl font-semibold leading-normal">
              Ihre <span className="text-primary">Nummer 1</span> für Bagger & Baumaschinen
            </p>
          </div>
        </div>
      </div>

      <main className="py-10 lg:py-16 px-4 text-secondary">
        <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-0 lg:pb-4 lg:leading-tight text-center">
            Bagger mieten in
          </h2>
          <div className="flex flex-col items-center mx-auto space-y-4 py-8 lg:max-w-3xl">
            {locationData.map((location, index) => (
              <Link
                key={index}
                href={location.slug}
                className="bg-white group border border-gray-300 rounded-lg hover:shadow-md w-full py-3 text-center text-2xl font-semibold text-gray-800 hover:text-primary transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer"
              >
                {location.name}
                <span className="ml-2 text-primary inline-block transition-transform duration-300 group-hover:translate-x-1">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
