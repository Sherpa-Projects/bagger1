import type { LucideIcon } from "lucide-react";
import {
  SquareMousePointer,
  CalendarCheck,
  CreditCard,
  Truck,
} from "lucide-react";

export const titleHtml = `So läuft die Buchung bei <span class="text-primary">Bagger1</span> ab`;

type Step = {
  title: string;
  description: string;
  Icon: LucideIcon;
  image: string;
};

export const steps: Step[] = [
  {
    title: "Maschine wählen",
    description:
      "Wählen Sie genau die Maschine, die Sie brauchen – vom Minibagger bis zum Zubehör.",
    Icon: SquareMousePointer,
    image: "/images/illustrations/choose.svg",
  },
  {
    title: "Zeitraum wählen",
    description:
      "Legen Sie Ihre Mietzeitraum fest und prüfen Sie direkt online die Verfügbarkeit.",
    Icon: CalendarCheck,
    image: "/images/illustrations/calendar.svg",
  },
  {
    title: "Einfach online bezahlen",
    description:
      "Bezahlen Sie bequem online – wir akzeptieren alle gängigen Zahlungsmittel.",
    Icon: CreditCard,
    image: "/images/illustrations/payment.svg",
  },
  {
    title: "Lieferung & Einweisung",
    description:
      "Wir liefern pünktlich zu Ihnen und zeigen Ihnen kurz, wie alles funktioniert.",
    Icon: Truck,
    image: "/images/illustrations/delivery.svg",
  },
];
