import {
  BadgeEuro,
  Cpu,
  Users,
  Rocket,
  Car,
  Handshake,
  Caravan,
  Hammer,
} from "lucide-react";

export const partnerPageData = {
  seo: {
    metaTitle: "Flexibler Nebenjob mit fairer Bezahlung | BAGGER1",
    metaDescription: {
      google:
        "Jetzt als Fahrer (m/w/d) im Minijob bei BAGGER1 starten – mit flexiblen Arbeitszeiten, fairer Bezahlung und direktem Draht zum Team.",
      openGraph:
        "Minijob als Fahrer (m/w/d) bei BAGGER1: Flexible Arbeitszeiten, faire Bezahlung, klare Prozesse und ein Team, das zusammenhält. Jetzt Teil von BAGGER1 werden!",
      twitter:
        "Minijob bei BAGGER1: Starte als Fahrer (m/w/d) – fair bezahlt & flexibel!",
    },
  },
  hero: {
    title: "Werde Teil von BAGGER1",
    subtitle: "Fahrer & Auslieferung (m/w/d)",
    image: "/images/partner.jpg",
  },
  intro: {
    title: (
      <>
        Flexibler Nebenjob.
        <br />
        <span className="text-primary">Faire Bezahlung.</span>
      </>
    ),
    paragraphs: [
      "Du suchst einen flexiblen Nebenjob mit fairer Bezahlung und möchtest Teil eines wachsenden Franchise-Netzwerks werden?",
    ],
    image: {
      src: "/images/claim.png",
      alt: "Dann bist du bei BAGGER1 genau richtig! Wir suchen zuverlässige Partner, die unsere Bagger zu Kunden bringen, vor Ort eine kurze Einweisung geben und so für zufriedene Baustellen sorgen.",
    },
  },
  offer: {
    title: "Was wir bieten",
    list: [
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
    ],
  },
  requirement: {
    title: "Was wir erwarten",
    list: [
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
    ],
  },
  contactCard: {
    title: "Standorte",
    description:
      "Wir suchen Partner in allen Regionen, in denen noch kein BAGGER1-Standort vorhanden ist.",
    subtitle: "So bewirbst du dich",
    phone: "01523 1770260",
    email: "partner@bagger1.de",
  },
} as const;
