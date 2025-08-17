import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BranchCard from "../components/BranchCard";

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
      <main>
        <div
          className="mt-17 md:mt-24 relative h-48 lg:h-72 flex justify-center items-center bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero2.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50 z-0" />
          <div className="relative z-10 text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl px-4 space-y-4">
            <p className="text-5xl lg:text-7xl font-semibold leading-normal">
              Bagger1
            </p>
            <h1 className="text-2xl lg:text-5xl">
              Ihre Nummer 1 für Baggervermietung
            </h1>
          </div>
        </div>
        <BranchCard />
      </main>
      <Footer />
    </>
  );
}
