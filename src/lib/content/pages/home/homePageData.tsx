import { BadgeEuro, Truck, Zap, Shapes } from "lucide-react";

export const homePageData = {
  seo: {
    metaTitle: "Ihre Nummer 1 für Bagger und Baumaschinen | Bagger1",
    metaDescription:
      "Finde verfügbare Bagger und andere Baumaschinen in deiner Nähe. Flexible Zeiträume, transparente Preise und schnelle Buchung online.",
  },
  hero: {
    title: "Bagger1",
    subtitle: "Ihre Nummer 1 für Bagger und Baumaschinen",
    image: "/images/hero2.jpg",
  },
  intro: {
    title: (
      <>
        Faire Preise.
        <br />
        Keine versteckten Kosten.
        <br />
        <span className="text-primary">Rundum-Service von Profis.</span>
      </>
    ),
    paragraphs: [
      "Ob für private Bauprojekte am Wochenende oder für professionelle Baustellen während der Woche – bei Bagger1 bekommen Sie modernste Baumaschinen schnell, zuverlässig und zum besten Preis-Leistungs-Verhältnis. Wir bieten nicht nur die Vermietung, sondern auch ein Rundum-Sorglos-Paket: Lieferung, Abholung, ausführliche Einweisung und praxisnahe Anleitungen – damit selbst Privatkunden sicher und effizient arbeiten können.",
      "Für Firmenkunden sind wir ein verlässlicher Partner, der auch kurzfristig reagiert.",
      "Auf Wunsch beschaffen wir zusätzlich Spezialmaschinen, zugeschnitten auf die Bedürfnisse Ihrer Branche – ob Landwirtschaft, Kommunalbetrieb oder sogar im Bergbau.",
    ],
    image: {
      src: "/images/claim.png",
      alt: "Freundlicher Bauarbeiter in orangefarbener Weste und Helm steht auf einer Baustelle vor einem Bagger, lächelt und zeigt Daumen hoch neben einem Arbeitstisch mit Werkzeugen und Bauplan.",
    },
  },
  usp: {
    title: "Unser Versprechen an Sie",
    uspBadges: [
      { label: "Faire Preise", Icon: BadgeEuro },
      { label: "Rundum‑Service", Icon: Truck },
      { label: "Schnell & zuverlässig", Icon: Zap },
      { label: "Breites Sortiment", Icon: Shapes },
    ],
  },
  career: {
    title: "Bagger1 wächst",
    text: "Als Teil eines jungen, dynamischen Franchise-Netzwerks sind wir ständig dabei, neue Standorte zu erschließen und noch näher bei unseren Kunden zu sein.",
    button: {
      cta: "Mehr erfahren",
      href: "/partner",
    },
    image: "/images/team.jpg",
  },
} as const;
