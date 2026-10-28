import {
  Building2,
  CalendarCheck,
  CreditCard,
  GraduationCap,
  Home,
  Repeat,
  ShoppingCart,
  Snowflake,
  SquareMousePointer,
  Sprout,
  Tractor,
  Truck,
  Warehouse,
} from "lucide-react";

// Variante A: ein Standort mit Schneeschild. Bietet ein weiterer Standort
// ein Schneeschild an, bekommt die Seite einen weiteren Standort-Abschnitt.
export const winterServicePageData = {
  path: "/winterdienst",
  location: "hennef",
  machineSlug: "radlader-kramer-5045",
  snowPlowPricePerDay: 25,
  seo: {
    metaTitle: "Radlader mit Schneeschild mieten – Hennef & Bonn | BAGGER1",
    metaDescription: {
      google:
        "Radlader mit Schneeschild mieten für den Winterdienst in Hennef, Bonn, Siegburg und im Rhein-Sieg-Kreis. Mit Lieferung und Einweisung, ab 80 € netto/Tag.",
      openGraph:
        "Winterdienst in Eigenregie: Kramer 5045 mit hydraulischem Schneeschild für Parkplätze, Hofflächen und Zufahrten. Geliefert, eingewiesen, einsatzbereit.",
      twitter:
        "Radlader mit Schneeschild mieten – Winterdienst in Hennef, Bonn und im Rhein-Sieg-Kreis.",
    },
    imageAlt:
      "Gelber Hintergrund mit schwarzem Text: BAGGER1 in großer Schrift und darunter Ihre Nummer 1 für Bagger und Baumaschinen in kleinerer Schrift.",
  },
  hero: {
    title: "Radlader mit Schneeschild mieten – Winterdienst in Eigenregie",
    subline:
      "Kramer 5045 mit hydraulischem Schneeschild für Parkplätze, Hofflächen und Zufahrten. Geliefert, eingewiesen, einsatzbereit – ab 80 € netto pro Tag.",
    image: "/images/locations/hennef.jpg",
    ctaLabel: "Verfügbarkeit prüfen",
    badges: [
      { label: "Lieferung & Abholung", Icon: Truck },
      { label: "Einweisung inklusive", Icon: GraduationCap },
      { label: "Schild hydraulisch schwenkbar", Icon: Snowflake },
    ],
  },
  intro: [
    "Wenn es schneit, zählt jede Stunde: Kundenparkplätze, Betriebshöfe und Zufahrten müssen frei sein, bevor der erste Mitarbeiter oder Kunde kommt. Mit einem gemieteten Radlader mit Schneeschild räumen Sie große Flächen selbst – ohne Winterdienstvertrag, ohne eigene Maschine und ohne Warten auf den Dienstleister.",
    "BAGGER1 liefert den Kramer 5045 mit angebautem Schneeschild direkt zu Ihnen, weist Sie ein und holt die Maschine nach der Saison wieder ab. Die Schaufel bleibt an Bord: Damit laden Sie Streugut, schieben Schneehaufen zusammen und nutzen den Lader an schneefreien Tagen ganz normal auf dem Hof.",
  ],
  machine: {
    title: "Die Maschine: Kramer 5045 mit Schneeschild",
    text: "Ein Radlader räumt schneller als Schneefräse oder Handgerät und bleibt dabei kompakt genug für Zufahrten und Parkreihen. Anders als ein Traktor mit Schild nimmt er den Schnee auch mit: Schaufel dran, Schneehaufen aufnehmen, an den Rand oder auf den Hänger kippen. Mit der Schaufel befüllen Sie außerdem Streuer und Salzkisten.",
    facts: [
      { value: "2 m", label: "Schildbreite, bis 30° schwenkbar" },
      { value: "1,59 m", label: "Maschinenbreite" },
      { value: "25 PS", label: "Kramer 5045, ca. 2,7 t" },
      { value: "0,45 m³", label: "Schaufel immer dabei" },
    ],
  },
  prices: {
    title: "Preise",
    text: "Alle Preise netto pro Miettag (1 Miettag = 8 Betriebsstunden), zuzüglich 10 % Maschinenbruchversicherung und 19 % MwSt. Keine versteckten Kosten. Für den Winter lohnt sich der Projektpreis: Ab 20 Miettagen kostet der Radlader 80 € netto pro Tag.",
  },
  useCases: {
    title: "Einsatzbereiche",
    items: [
      {
        title: "Kundenparkplätze",
        description:
          "Für Supermärkte, Autohäuser und Gewerbebetriebe: frei, bevor die ersten Kunden kommen.",
        icon: ShoppingCart,
      },
      {
        title: "Betriebshöfe und Logistik",
        description:
          "Betriebshöfe, Ladezonen und Logistikflächen bleiben auch bei Schnee befahrbar.",
        icon: Warehouse,
      },
      {
        title: "Wohnanlagen",
        description:
          "Tiefgaragen-Zufahrten und Gehwege für Hausverwaltungen zuverlässig räumen.",
        icon: Building2,
      },
      {
        title: "Landwirtschaft",
        description:
          "Landwirtschaftliche Höfe und Hallenvorplätze schnell wieder schneefrei.",
        icon: Tractor,
      },
      {
        title: "Kommunale Flächen",
        description:
          "Sportplätze, Vereinsgelände, Kitas und Schulen in kommunaler Trägerschaft.",
        icon: GraduationCap,
      },
      {
        title: "Garten- und Landschaftsbau",
        description:
          "Winterdienst für Ihre Kunden anbieten, ohne eine eigene Maschine zu kaufen.",
        icon: Sprout,
      },
    ],
  },
  bookingSteps: {
    title: "So läuft die Buchung ab",
    steps: [
      {
        title: "Standort & Maschine wählen",
        description:
          "Standort wählen und „Radlader mit Schneeschild“ auswählen.",
        Icon: SquareMousePointer,
        image: "/images/illustrations/choose.svg",
      },
      {
        title: "Zeitraum wählen",
        description:
          "Zeitraum festlegen – ein Tag, eine Woche oder die ganze Saison – und Verfügbarkeit online prüfen.",
        Icon: CalendarCheck,
        image: "/images/illustrations/calendar.svg",
      },
      {
        title: "Einfach online bezahlen",
        description: "Bequem online bezahlen.",
        Icon: CreditCard,
        image: "/images/illustrations/payment.svg",
      },
      {
        title: "Lieferung & Einweisung",
        description:
          "Lieferung zum Einsatzort mit Einweisung: Schild an- und abbauen, schwenken, Schürfleiste einstellen, sicher auf Schnee und Eis fahren.",
        Icon: Truck,
        image: "/images/illustrations/delivery.svg",
      },
    ],
  },
  audiences: {
    title: "Für wen sich die Miete lohnt",
    items: [
      {
        title: "Firmenkunden und Hausverwaltungen",
        text: "Wer ein Grundstück betreibt, muss Wege und Flächen bei Schnee und Glätte fristgerecht räumen und streuen. Mit eigener Maschine entscheiden Sie selbst, wann geräumt wird – nicht der Dienstleister.",
        Icon: Building2,
      },
      {
        title: "Garten- und Landschaftsbau",
        text: "Winterdienst ist das Geschäft der ruhigen Monate. Ein gemieteter Radlader bindet kein Kapital, und nach der Saison arbeitet die Schaufel ab März wieder ganz normal im Erdbau.",
        Icon: Repeat,
      },
      {
        title: "Privatkunden",
        text: "Für lange Zufahrten, Höfe und Wochenendgrundstücke mieten Sie tageweise, ganz ohne Vorkenntnisse. Wir liefern die Maschine, weisen Sie vor Ort ein und holen sie wieder ab.",
        Icon: Home,
      },
    ],
  },
  area: {
    title: "Standort und Liefergebiet",
    // Die Orte kommen als Kacheln aus dem Liefergebiet des Standorts
    text: "Der Radlader mit Schneeschild steht am Standort Hennef bereit. Wir liefern nach:",
    otherLocations:
      "Bruchsal, Aschaffenburg und Mannheim: auf Anfrage und ab 5 Miettagen.",
  },
  cta: {
    title: "Jetzt Radlader mit Schneeschild in Hennef anfragen",
    text: "Bei angekündigtem Schneefall sind Winterdienstmaschinen schnell vergriffen – reservieren Sie früh. Fragen beantworten wir Mo–Fr 8–17 Uhr und Sa 8–13 Uhr unter 0800 22 44 37 1 oder per WhatsApp an 0160 22 44 37 1.",
  },
  teaser: {
    title: "Winterdienst: Radlader mit Schneeschild mieten",
    text: "Den Kramer 5045 gibt es in Hennef auch mit hydraulischem Schneeschild – für Parkplätze, Hofflächen und Zufahrten.",
    linkLabel: "Zum Winterdienst",
  },
  faq: {
    title: "FAQ: Winterdienst mit dem Radlader",
    items: [
      {
        question: "Welche Maschine bekomme ich für den Winterdienst?",
        answer:
          "Den Radlader Kramer 5045 (2,7 t, 25 PS, 1,59 m breit) mit angebautem Schneeschild. Die Schaufel mit 0,45 m³ ist immer dabei – zum Aufnehmen von Schneehaufen, zum Beladen von Streuern und für normale Hofarbeiten an schneefreien Tagen.",
      },
      {
        question: "Kann ich das Schneeschild auch ohne Radlader mieten?",
        answer:
          "Nein, das Schneeschild wird nur zusammen mit dem Kramer 5045 vermietet. Wir bauen es bei der Lieferung an und zeigen Ihnen, wie Sie zwischen Schild und Schaufel wechseln.",
      },
      {
        question:
          "Wie breit ist das Schneeschild und wie viel Fläche schaffe ich damit?",
        answer:
          "Das Schild ist 2 m breit und lässt sich hydraulisch bis 30° schwenken, sodass der Schnee seitlich abfließt. Rechnerisch räumt ein 1,5-m-Schild bei 5 km/h rund 7.000 m² pro Stunde; in der Praxis mit Wenden, Rangieren und Abladen etwa die Hälfte. Ein Parkplatz mit 50 Stellplätzen ist damit in deutlich unter einer Stunde frei.",
      },
      {
        question: "Brauche ich einen Führerschein für den Radlader?",
        answer:
          "Auf Ihrem eigenen Betriebs- oder Privatgelände ist keine Fahrerlaubnis vorgeschrieben, Sie müssen aber eingewiesen sein – die Einweisung bei der Lieferung ist bei BAGGER1 inklusive. Im gewerblichen Einsatz verlangt die Berufsgenossenschaft zusätzlich einen Befähigungsnachweis für den Fahrer. Auf öffentlichen Straßen gilt der Kramer 5045 mit 20 km/h als selbstfahrende Arbeitsmaschine; dafür reicht die Führerscheinklasse L, die in jedem Pkw-Führerschein der Klasse B enthalten ist.",
      },
      {
        question: "Darf ich mit dem Radlader auf öffentlichen Straßen fahren?",
        answer:
          "Selbstfahrende Arbeitsmaschinen bis 20 km/h sind zulassungsfrei und brauchen kein Kennzeichen; die Betriebserlaubnis muss aber an Bord sein, die Maschine braucht Beleuchtung nach StVZO und ist über eine Haftpflichtversicherung abzusichern. Unser Kramer 5045 ist mit StVZO-Beleuchtung und Rundumleuchte ausgestattet. Für kurze Fahrten zwischen zwei Grundstücken ist das in der Regel kein Problem; längere Strecken übernehmen wir mit dem Transporter.",
      },
      {
        question: "Kann ich mit dem Radlader auch streuen?",
        answer:
          "Mit der Schaufel laden Sie Salz oder Splitt schnell in Streuwagen und Streukisten. Einen Anbaustreuer bieten wir derzeit nicht an; für Gehwege und kleinere Flächen bleibt der Handstreuwagen das richtige Gerät.",
      },
      {
        question: "Was kostet der Radlader mit Schneeschild?",
        answer:
          "Der Kramer 5045 kostet 150 € netto pro Tag, ab 5 Miettagen 120 € und ab 20 Miettagen 80 € netto pro Tag; das Schneeschild 25 € netto pro Tag. Hinzu kommen 10 % Maschinenbruchversicherung und 19 % MwSt. Ein Miettag entspricht 8 Betriebsstunden – für die Wintersaison ist der Projektpreis ab 20 Tagen die günstigste Variante.",
      },
      {
        question:
          "Wie schnell bekomme ich die Maschine, wenn Schnee angekündigt ist?",
        answer:
          "Kurzfristige Lieferung ist möglich, solange die Maschine frei ist. Bei angekündigtem Schneefall sind Winterdienstmaschinen aber innerhalb weniger Stunden vergriffen. Wer sicher sein will, reserviert den Radlader ab Anfang Dezember für die Saison und hat ihn auf dem eigenen Hof stehen, bevor die erste Flocke fällt.",
      },
      {
        question:
          "Was ist mit Schäden an Pflaster, Bordsteinen oder Fahrzeugen?",
        answer:
          "Die Schürfleiste des Schilds gleitet über Pflaster und Asphalt, ohne die Oberfläche aufzureißen; auf losem Pflaster und Rasenkanten fahren Sie mit angehobenem Schild. Für Schäden an fremdem Eigentum haftet der Mieter über seine Betriebs- oder Privathaftpflicht – prüfen Sie vorab, ob gemietete Arbeitsmaschinen darin eingeschlossen sind.",
      },
      {
        question: "Kann ich einen Fahrer dazu buchen?",
        answer:
          "Nein, BAGGER1 vermietet die Maschine zur Selbstbedienung; die Einweisung ist inklusive. Nach 15 Minuten fahren auch Einsteiger sicher. Wir können Ihnen geeignete Fahrer vermitteln.",
      },
      {
        question:
          "Bin ich als Grundstücksbesitzer überhaupt zum Räumen verpflichtet?",
        answer:
          "Die Räum- und Streupflicht liegt beim Eigentümer; für Gehwege übertragen die meisten Gemeinden sie per Satzung auf die Anlieger. Üblich sind Räumzeiten werktags von 7 bis 20 Uhr und an Sonn- und Feiertagen ab 8 oder 9 Uhr – die genauen Zeiten stehen in der Straßenreinigungs- bzw. Winterdienstsatzung Ihrer Gemeinde. Kommt jemand auf ungeräumter Fläche zu Schaden, haftet der Verpflichtete.",
      },
    ],
  },
} as const;
