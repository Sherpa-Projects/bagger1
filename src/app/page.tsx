import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { locationData } from "@/lib/content/locationData";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="absolute inset-0 bg-black/50 z-0" />

        <div className="relative z-10 flex justify-center items-center mx-4 md:mx-0">
          <div className="text-white text-center md:max-w-4xl lg:max-w-5xl xl:max-w-7xl">
            <h1 className="text-6xl lg:text-9xl font-extrabold uppercase mb-6 lg:mb-8">
              Bagger1
            </h1>
            <p className="text-4xl lg:text-6xl font-semibold leading-normal">
              Die Nummer 1 für Baggervermietung
            </p>
          </div>
        </div>
      </div>

      <main className="py-10 lg:py-16 px-4">
        <div className="container mx-auto md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl pb-0 lg:pb-4 lg:leading-tight text-center">
            Bagger mieten in
          </h2>
          <div className="flex flex-col items-center mx-auto space-y-4 py-8 lg:max-w-3xl">
            {locationData.map((location, index) => (
              <a
                key={index}
                href={location.slug}
                className="bg-white group border border-gray-300 rounded-lg hover:shadow-md w-full py-3 text-center text-2xl font-semibold text-gray-800 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer"
              >
                {location.name}
                <span className="ml-2 text-yellow-500 inline-block transition-transform duration-300 group-hover:translate-x-1">
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
