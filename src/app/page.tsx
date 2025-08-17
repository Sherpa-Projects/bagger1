import { Metadata } from "next";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { locationData } from "@/lib/content/locationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
      <div
        className="lg:mt-24 hidden relative h-72 lg:flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage: 'url("/images/hero2.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 flex justify-center items-center mx-4 md:mx-0">
          <div className="text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
            <h1 className="text-4xl lg:text-6xl font-semibold leading-normal">
              Bagger1<br></br>Ihre Nummer 1 für Baggervermietung
            </h1>
          </div>
        </div>
      </div>
      <BranchCard />
      <Footer />
    </>
  );
}
