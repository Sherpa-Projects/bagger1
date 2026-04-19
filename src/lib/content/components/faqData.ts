import { FaqItemProps, FaqProps } from "@/app/types/components/Faq";

const bucketFaq: FaqItemProps[] = [
  {
    question: "Welcher Baggerlöffel ist der richtige für mein Projekt?",
    answer:
      "Damit Ihre Arbeiten effizient und sauber ablaufen, ist die Wahl des richtigen Löffels entscheidend. Grundsätzlich gilt: Ein Löffel mit Zähnen eignet sich für harten, verdichteten, steinigen oder stark verwurzelten Boden. Ein glatter Löffel ohne Zähne ist die bessere Wahl bei weichem Boden oder wenn eine saubere, ebene Oberfläche benötigt wird.",
  },
  {
    question: "Wann sollte ich einen Löffel mit Zähnen verwenden?",
    answer:
      "Ein Löffel mit Zähnen ist das Arbeitstier für anspruchsvolle Einsätze. Die Zähne wirken wie kleine Meißel, brechen den Boden auf und erleichtern das Eindringen in kompakte Schichten deutlich.",
    list: [
      "Bei hartem und verdichtetem Boden",
      "Bei steinigen Untergründen",
      "Bei stark verwurzelten Flächen",
      "Für Fundamente",
      "Für Rodungsarbeiten und das Entfernen von Wurzeln",
    ],
  },
  {
    question: "Wann ist ein glatter Löffel ohne Zähne sinnvoll?",
    answer:
      "Ein glatter Löffel ohne Zähne eignet sich besonders dann, wenn Material sauber abgezogen oder der Untergrund möglichst wenig beschädigt werden soll. Er arbeitet gleichmäßiger und reduziert das Risiko, empfindliche Bereiche zu beschädigen.",
    list: [
      "Bei weichem Boden",
      "Zum Planieren von Flächen",
      "Für Gräben von Kabeln und Rohren",
      "Auf empfindlichen Untergründen wie Rasen, Pflaster oder Asphalt",
    ],
  },
  {
    question: "Welcher Löffel ist besser bei unterirdischen Leitungen?",
    answer:
      "In Bereichen mit vermuteten oder bekannten Leitungen sollten Sie besonders vorsichtig arbeiten. Unterirdische Leitungen werden häufig mit Sand verfüllt. Deshalb empfiehlt sich hier ein glatter Löffel, mit dem Schicht für Schicht vorsichtig abgezogen werden kann. Sobald eine Sandschicht sichtbar wird, sollte die Arbeit sofort gestoppt und der Bereich manuell freigelegt werden. Erst danach sollte wieder mit dem Bagger gearbeitet werden.",
  },
  {
    question:
      "Kann ich mit einem glatten Löffel auf Pflaster oder Asphalt arbeiten?",
    answer:
      "Ja, auf glatten Oberflächen wie Betonpflaster oder Asphalt kann Material mit einem glatten Löffel aufgenommen werden, ohne den Untergrund unnötig zu beschädigen. Voraussetzung ist allerdings, dass die Maschine kontrolliert und sauber geführt wird.",
  },
  {
    question: "Sollte ich bei hartem Boden oder Wurzeln den Löffel wechseln?",
    answer:
      "Ja, bei Wurzeln oder sehr hartem Boden ist ein Löffel mit Zähnen meist deutlich effektiver. In der Praxis lohnt es sich oft, je nach Untergrund zwischen glattem Löffel und Zahnlöffel zu wechseln, um schneller und sauberer zu arbeiten.",
  },
  {
    question:
      "Was gilt als einfache Faustregel bei der Wahl des Baggerlöffels?",
    answer:
      "Die einfache Praxisregel lautet: Für harten, steinigen oder verwurzelten Boden einen Löffel mit Zähnen verwenden. Für weichen Boden, saubere Flächen und empfindliche Untergründe einen glatten Löffel ohne Zähne einsetzen. Wenn Sie unsicher sind, welcher Löffel für Ihr Projekt optimal ist, beraten wir Sie gerne.",
  },
];

export const faq: FaqProps = {
  title: "Häufig gestellte Fragen",
  subtitle: "Frequently Asked Questions",
  content: [
    {
      location: "mannheim",
      items: [
        {
          question:
            "Welche Baumaschinen kann ich bei BAGGER1 in Mannheim und im Rhein-Neckar-Kreis mieten?",
          answer:
            "Bei BAGGER1 können Sie in Mannheim und im Rhein-Neckar-Kreis u. a. Minibagger, Rüttelplatten und Dumper mieten. Wählen Sie einfach die passende Maschine aus dem aktuellen Sortiment am Standort, prüfen Sie den gewünschten Zeitraum im Kalender und buchen Sie direkt online – zur Kurz- oder Langzeitmiete.",
        },
        {
          question:
            "Wie funktioniert die Online-Buchung bei BAGGER1 – und wie sehe ich die Verfügbarkeit?",
          answer:
            "Oben auf der Standortseite sehen Sie die aktuell verfügbaren Maschinen. Nach Ihrer Auswahl prüfen Sie im Kalender die Verfügbarkeit für Ihren Zeitraum und können die Miete sofort online abschließen. So sichern Sie sich schnell die passende Baumaschine – auch für längere Mietzeiten.",
        },
        {
          question:
            "Gibt es bei BAGGER1 Kurzzeit- und Langzeitmiete – und was lohnt sich wann?",
          answer:
            "Ja, bei BAGGER1 ist sowohl Kurzzeit- als auch Langzeitmiete möglich. Für Tages- oder Wochenprojekte eignet sich meist die Kurzzeitmiete, für längere Baustellen und wiederkehrende Einsätze die Langzeitmiete. Wählen Sie Ihren Zeitraum im Kalender – die Verfügbarkeit wird nach Auswahl der Maschine angezeigt.",
        },
        {
          question:
            "Kann ich bei BAGGER1 auch als Privatkunde Baumaschinen mieten?",
          answer:
            "Ja. BAGGER1 vermietet Baumaschinen sowohl an Privatkunden als auch an Firmen. Egal ob Gartenprojekt oder Baustelle: Sie wählen die Maschine, prüfen die Verfügbarkeit und buchen bequem online – schnell und unkompliziert in Mannheim und Umgebung.",
        },
        ...bucketFaq,
      ],
    },
    {
      location: "stockstadt",
      items: [
        {
          question:
            "Welche Baumaschinen kann ich bei BAGGER1 in Stockstadt mieten?",
          answer:
            "Bei BAGGER1 in Stockstadt können Sie je nach aktuellem Sortiment am Standort z. B. Minibagger, Rüttelplatten und Dumper mieten. Wählen Sie die passende Maschine online aus, prüfen Sie den gewünschten Zeitraum im Kalender und buchen Sie direkt – für Kurzzeit- oder Langzeitmiete.",
        },
        {
          question:
            "Wie läuft die Online-Buchung bei BAGGER1 in Stockstadt ab?",
          answer:
            "Auf der Standortseite Stockstadt sehen Sie die verfügbaren Mietgeräte. Nach Auswahl der Maschine prüfen Sie im Kalender die Verfügbarkeit, wählen Start- und Enddatum und schließen die Buchung online ab. So sichern Sie sich schnell das passende Gerät für Ihr Projekt.",
        },
        {
          question:
            "Vermietet BAGGER1 in Stockstadt auch an Privatkunden und Hobby-Handwerker?",
          answer:
            "Ja, bei BAGGER1 in Stockstadt können sowohl Privatkunden als auch Gewerbekunden mieten. Ob Garten- und Landschaftsbau, Einfahrt, Zaunfundament oder kleinere Baustelle: Sie buchen die benötigte Maschine einfach online und planen Ihren Einsatz zuverlässig.",
        },
        {
          question:
            "Welche Mietdauer ist in Stockstadt möglich – Tagesmiete, Wochenmiete oder Langzeitmiete?",
          answer:
            "In Stockstadt sind je nach Maschine flexible Mietzeiträume möglich – von kurzer Miete für einzelne Arbeitstage bis zur Langzeitmiete für längere Vorhaben. Die Verfügbarkeit sehen Sie direkt nach Auswahl der Maschine im Kalender.",
        },
        {
          question:
            "Für welche Arbeiten eignet sich ein Minibagger in Stockstadt besonders?",
          answer:
            "Ein Minibagger eignet sich ideal für Aushubarbeiten wie Gräben, Fundamente, Leitungen oder Gartenumbauten. Gerade bei engen Platzverhältnissen ist er eine praktische Lösung – und bei BAGGER1 in Stockstadt schnell online verfügbar, sofern im Kalender frei.",
        },
        ...bucketFaq,
      ],
    },

    {
      location: "bruchsal",
      items: [
        {
          question:
            "Welche Baumaschinen kann ich bei BAGGER1 in Bruchsal mieten?",
          answer:
            "Bei BAGGER1 in Bruchsal können Sie – abhängig vom aktuellen Bestand am Standort – u. a. Minibagger, Rüttelplatten und Dumper mieten. Sie wählen das Gerät online aus, prüfen die Verfügbarkeit im Kalender und buchen direkt für Ihren gewünschten Zeitraum.",
        },
        {
          question:
            "Wie erkenne ich die Verfügbarkeit von Mietgeräten in Bruchsal?",
          answer:
            "Die Verfügbarkeit wird bei BAGGER1 in Bruchsal direkt im Kalender angezeigt. Sobald Sie eine Maschine auswählen, sehen Sie freie Zeiträume und können Start- und Enddatum festlegen. Danach schließen Sie die Buchung bequem online ab.",
        },
        {
          question:
            "Gibt es in Bruchsal Kurzzeit- und Langzeitmiete bei BAGGER1?",
          answer:
            "Ja. In Bruchsal ist sowohl Kurzzeitmiete (z. B. für ein Wochenende oder einzelne Tage) als auch Langzeitmiete möglich. Wählen Sie Ihren Zeitraum online – die Verfügbarkeit und Planungssicherheit sehen Sie direkt im Kalender.",
        },
        {
          question:
            "Kann ich als Firma im GaLaBau oder Baugewerbe in Bruchsal unkompliziert mieten?",
          answer:
            "Ja, BAGGER1 in Bruchsal ist auf unkomplizierte Miete für Gewerbekunden ausgelegt – z. B. für Bau, GaLaBau und Handwerk. Sie buchen die Maschine online, planen den Einsatz im Kalender und reduzieren Abstimmung und Wartezeiten.",
        },
        {
          question:
            "Welche Maschine brauche ich in Bruchsal für Verdichtung und Transport?",
          answer:
            "Für Verdichtungsarbeiten (Unterbau, Schotter, Pflaster) ist eine Rüttelplatte die richtige Wahl. Für Materialtransport auf der Baustelle, z. B. Erde oder Schutt, eignet sich ein Dumper. Bei BAGGER1 in Bruchsal können Sie passende Geräte online auswählen und die Verfügbarkeit im Kalender prüfen.",
        },
        ...bucketFaq,
      ],
    },

    {
      location: "hennef",
      items: [
        {
          question:
            "Welche Baumaschinen kann ich bei BAGGER1 in Hennef mieten?",
          answer:
            "Bei BAGGER1 in Hennef können Sie – je nach aktuellem Sortiment am Standort – z. B. Minibagger, Rüttelplatten und Dumper mieten. Wählen Sie online die passende Maschine, prüfen Sie den Zeitraum im Kalender und buchen Sie direkt für Ihr Projekt in Hennef und Umgebung.",
        },
        {
          question:
            "Wie funktioniert die Buchung von Baumaschinen in Hennef bei BAGGER1?",
          answer:
            "Auf der Standortseite Hennef wählen Sie das gewünschte Mietgerät aus. Danach zeigt Ihnen der Kalender die freien Zeiträume. Anschließend legen Sie Start- und Enddatum fest und schließen die Miete online ab – schnell und übersichtlich.",
        },
        {
          question:
            "Kann ich bei BAGGER1 in Hennef auch als Privatkunde einen Minibagger mieten?",
          answer:
            "Ja. BAGGER1 in Hennef vermietet sowohl an Privatkunden als auch an Firmen. Für Gartenprojekte, Einfahrten oder kleinere Erdarbeiten können Sie den passenden Minibagger online auswählen, Verfügbarkeit prüfen und sofort buchen.",
        },
        {
          question:
            "Welche Mietdauer ist in Hennef möglich – kurz oder langfristig?",
          answer:
            "In Hennef sind flexible Mietzeiträume möglich: kurze Einsätze für einzelne Tage oder Wochen sowie Langzeitmieten für längere Bauvorhaben. Die Verfügbarkeit und Planung sehen Sie direkt im Kalender nach Auswahl der Maschine.",
        },
        {
          question:
            "Welche Geräte sind in Hennef sinnvoll für GaLaBau, Handwerk und Bau?",
          answer:
            "Für GaLaBau und Handwerk sind Minibagger (Aushub), Rüttelplatten (Verdichtung) und Dumper (Transport) besonders praktisch. Bei BAGGER1 in Hennef finden Sie passende Mietgeräte – online auswählbar und mit Kalender-Verfügbarkeitscheck für eine zuverlässige Einsatzplanung.",
        },
        ...bucketFaq,
      ],
    },
  ],
};
