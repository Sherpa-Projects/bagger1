import {
  BadgeEuro,
  BookOpen,
  Building2,
  GraduationCap,
  Home,
  PackageCheck,
  Pickaxe,
  Shapes,
  Truck,
  Zap,
} from "lucide-react";

export const homePageData = {
  hero: {
    title: "BAGGER1",
    subtitle: "Ihre Nummer 1 für Bagger und Maschinen",
    image: "/images/hero.jpg",
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
    lead: "Ob für private Bauprojekte am Wochenende oder für professionelle Baustellen während der Woche – bei BAGGER1 bekommen Sie modernste Baumaschinen schnell, zuverlässig und zum besten Preis-Leistungs-Verhältnis.",
    services: {
      title: "Nicht nur Vermietung, sondern ein Rundum-Sorglos-Paket",
      items: [
        {
          title: "Lieferung",
          text: "Wir bringen die Maschine direkt zu Ihrer Baustelle.",
          Icon: Truck,
        },
        {
          title: "Einweisung",
          text: "Ausführlich erklärt, bevor Sie loslegen.",
          Icon: GraduationCap,
        },
        {
          title: "Anleitungen",
          text: "Praxisnah und verständlich für einen sicheren Einsatz.",
          Icon: BookOpen,
        },
        {
          title: "Abholung",
          text: "Nach Ende der Miete holen wir die Maschine wieder ab.",
          Icon: PackageCheck,
        },
      ],
    },
    audiences: [
      {
        title: "Für Privatkunden",
        text: "Für private Bauprojekte am Wochenende: Dank Einweisung und Anleitungen arbeiten auch Privatkunden sicher und effizient.",
        Icon: Home,
      },
      {
        title: "Für Firmenkunden",
        text: "Ein verlässlicher Partner, der auch kurzfristig reagiert.",
        Icon: Building2,
      },
      {
        title: "Spezialmaschinen",
        text: "Auf Wunsch beschaffen wir Spezialmaschinen für Ihre Branche – ob Landwirtschaft, Kommunalbetrieb oder sogar im Bergbau.",
        Icon: Pickaxe,
      },
    ],
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
    title: "BAGGER1 wächst",
    text: "Als Teil eines jungen, dynamischen Franchise-Netzwerks sind wir ständig dabei, neue Standorte zu erschließen und noch näher bei unseren Kunden zu sein.",
    button: {
      label: "Mehr erfahren",
      link: "/partner",
    },
    image: "/images/team.jpg",
  },
} as const;
