import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-100">
        <h1 className="text-6xl font-bold text-yellow-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Seite nicht gefunden
        </h2>
        <p className="text-gray-600 mb-6">Die gesuchte Seite existiert.</p>
        <Link
          href="/"
          className="bg-white group border border-gray-300 rounded-lg hover:shadow-md px-6 py-3 text-center text-xl font-semibold text-gray-800 hover:text-yellow-500 transition-all duration-300 transform hover:scale-105 decoration-2 cursor-pointer"
        >
          Zurück zur Startseite
          <span className="ml-2 text-yellow-500 inline-block transition-transform duration-300 group-hover:translate-x-1">
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </Link>
      </main>
      <Footer />
    </>
  );
}
