import type { ComponentType } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Rahmen für Rechtstexte; der Inhalt bringt sein eigenes <main> mit
export default function LegalPage({ Body }: { Body: ComponentType }) {
  return (
    <>
      <Navigation />
      <Body />
      <Footer />
    </>
  );
}
