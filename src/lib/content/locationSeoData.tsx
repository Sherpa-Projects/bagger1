import { LucideIcon } from "lucide-react";
import {
  Shovel,
  Trees,
  Truck,
  Construction,
  Hammer,
  CalendarClock,
} from "lucide-react";

type LocalUseCase = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type LocationSeoConfig = {
  headline?: (cityName: string) => React.ReactNode;
  intro?: (
    cityName: string,
    data: { regionName?: string; serviceAreas?: string[] },
  ) => React.ReactNode;
  bookingContext?: (
    cityName: string,
    data: { regionName?: string; serviceAreas?: string[] },
  ) => React.ReactNode;
  coverageText?: (
    cityName: string,
    data: { regionName?: string; serviceAreas?: string[] },
  ) => React.ReactNode;
  localUseCases?: LocalUseCase[];
  subHeadline: (cityName: string) => React.ReactNode;
  regionName?: string;
  serviceAreas?: string[];
};

export const locationSeoBySlug: Record<string, LocationSeoConfig> = {
  mannheim: {
    regionName: "im Rhein-Neckar-Kreis",
    headline: (cityName) => (
      <>
        Verfügbarkeit für Mannheim und die Rhein-Neckar-Region direkt online
        prüfen.
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Über unsere Standortseite für {cityName} mieten Sie Baumaschinen für
          Einsätze in {cityName} und {region}. Die auf dieser Seite angezeigten
          Maschinen, Preise und Verfügbarkeiten beziehen sich auf den regionalen
          Bestand für den Raum {cityName}. So sehen Sie direkt, welche Geräte
          für Projekte in der Rhein-Neckar-Region verfügbar sind und können die
          passende Maschine online für Ihren Einsatz buchen.
        </>
      );
    },
    bookingContext: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Diese Seite richtet sich an Kunden, die Baumaschinen speziell für
          Baustellen, Garten- und Erdarbeiten in {cityName} und {region} suchen.
          Buchungen über diese Standortseite werden dem Bestand für den Raum{" "}
          {cityName} zugeordnet. Auch wenn einzelne Maschinentypen an mehreren
          BAGGER1 Standorten verfügbar sein können, bildet diese Seite den
          regionalen Buchungskontext für Einsätze rund um {cityName} ab.
        </>
      );
    },
    coverageText: (cityName, data) => {
      const areas = data.serviceAreas ?? [];

      return (
        <>
          Unser Einsatzgebiet rund um {cityName} umfasst neben dem Stadtgebiet
          auch wichtige Orte im Umland. Dazu gehören unter anderem{" "}
          {areas.slice(1, 6).join(", ")} sowie weitere Einsatzorte in der
          Metropolregion Rhein-Neckar. Damit ist diese Standortseite der
          passende Einstieg, wenn Sie eine Baumaschine für Projekte im Raum{" "}
          {cityName}, Ludwigshafen, Heidelberg oder dem direkten Umland
          benötigen.
        </>
      );
    },
    localUseCases: [
      {
        title: "Aushubarbeiten",
        description:
          "Für Erdarbeiten auf Privatgrundstücken, bei Neubauten oder auf kleineren bis mittleren Baustellen im Raum Mannheim.",
        icon: Shovel,
      },
      {
        title: "Garten- und Landschaftsbau",
        description:
          "Geeignet für Projekte im Garten- und Außenanlagenbau, z. B. bei Geländeanpassungen, Fundamentvorbereitung oder dem Setzen von Kanten und Flächen.",
        icon: Trees,
      },
      {
        title: "Materialbewegung",
        description:
          "Für das Bewegen, Verladen und Umsetzen von Boden, Schüttgut, Kies oder Baumaterial bei Umbau- und Bauprojekten.",
        icon: Truck,
      },
      {
        title: "Verdichtungsarbeiten",
        description:
          "Passend für die Vorbereitung und Verdichtung von Untergründen bei Hof-, Wege-, Terrassen- und Pflasterarbeiten.",
        icon: Construction,
      },
      {
        title: "Umbau und Sanierung",
        description:
          "Sinnvoll für Abbruchvorbereitung, Freilegung, kleinere Erdbewegungen und unterstützende Arbeiten bei Sanierungsmaßnahmen.",
        icon: Hammer,
      },
      {
        title: "Kurzfristige Maschinenmiete",
        description:
          "Ideal für zeitnahe Einsätze in Mannheim und Umgebung, wenn Maschinen flexibel für einzelne Tage oder längere Projektphasen benötigt werden.",
        icon: CalendarClock,
      },
    ],
    subHeadline: (cityName) => (
      <>Wir sind in {cityName} und Umgebung für Sie tätig:</>
    ),
    serviceAreas: [
      "Mannheim",
      "Ludwigshafen am Rhein",
      "Heidelberg",
      "Viernheim",
      "Weinheim",
      "Ladenburg",
      "Ilvesheim",
      "Schwetzingen",
      "Brühl",
      "Hockenheim",
      "Speyer",
      "Frankenthal (Pfalz)",
      "Ketsch",
    ],
  },

  hennef: {
    regionName: "im Rhein-Sieg-Kreis",
    headline: (cityName) => (
      <>
        Passende Maschinen für Einsätze in Hennef und im Rhein-Sieg-Kreis online
        auswählen.
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Wenn Sie für ein Vorhaben in {cityName} oder {region} eine Baumaschine
          benötigen, finden Sie über diese Standortseite das passende
          Mietangebot für Ihren Einsatzort. BAGGER1 bündelt hier das Angebot für
          den Raum {cityName}, sodass Sie Maschinen für Erdarbeiten,
          Materialtransport und Verdichtung direkt für Projekte in der Region
          auswählen können.
        </>
      );
    },
    bookingContext: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Die hier dargestellten Maschinen stehen für Anfragen aus {cityName}{" "}
          und dem umliegenden {region} bereit. Diese Seite bildet damit den
          regionalen Einstieg für Buchungen im Raum {cityName}. Auch wenn
          identische Maschinentypen an anderen BAGGER1 Standorten vorkommen
          können, erfolgt die Zuordnung Ihrer Anfrage über den Bestand für diese
          Region.
        </>
      );
    },
    coverageText: (cityName, data) => {
      const areas = data.serviceAreas ?? [];

      return (
        <>
          Zum Einzugsgebiet rund um {cityName} zählen neben dem direkten
          Stadtgebiet unter anderem {areas.slice(1, 7).join(", ")}. Dadurch ist
          diese Standortseite besonders relevant für Kunden, die eine
          Baumaschine im südlichen Nordrhein-Westfalen und speziell im
          Rhein-Sieg-Kreis einsetzen möchten.
        </>
      );
    },
    localUseCases: [
      {
        title: "Aushubarbeiten",
        description:
          "Geeignet für Erdarbeiten rund um Haus, Garten, Einfahrt und kleinere Bauvorhaben im Raum Hennef.",
        icon: Shovel,
      },
      {
        title: "Bau- und Umbauprojekte",
        description:
          "Passend für Bau-, Umbau- und Sanierungsmaßnahmen im Rhein-Sieg-Kreis, wenn Maschinen flexibel zur Miete benötigt werden.",
        icon: Trees,
      },
      {
        title: "Materialtransport",
        description:
          "Für das Bewegen und Umsetzen von Erde, Kies, Schüttgut und weiterem Baumaterial auf kleineren und mittleren Baustellen.",
        icon: Truck,
      },
      {
        title: "Verdichtungsarbeiten",
        description:
          "Sinnvoll für die Verdichtung von Untergründen bei Pflaster-, Wege-, Terrassen- und Hofflächenprojekten.",
        icon: Construction,
      },
      {
        title: "Garten- und Außenanlagen",
        description:
          "Unterstützt Arbeiten im Garten- und Landschaftsbau, etwa bei Geländeanpassungen, Vorbereitungen und kleineren Erdbewegungen.",
        icon: Hammer,
      },
      {
        title: "Kurzfristige Anmietung",
        description:
          "Ideal für zeitnahe Einsätze in Hennef, Bonn und dem umliegenden Rhein-Sieg-Kreis bei kurzer oder projektbezogener Mietdauer.",
        icon: CalendarClock,
      },
    ],
    subHeadline: (cityName) => (
      <>Wir sind in {cityName} und Umgebung für Sie tätig:</>
    ),
    serviceAreas: [
      "Hennef",
      "Siegburg",
      "Sankt Augustin",
      "Troisdorf",
      "Lohmar",
      "Königswinter",
      "Bad Honnef",
      "Bonn",
      "Niederkassel",
      "Ruppichteroth",
      "Neunkirchen-Seelscheid",
      "Much",
      "Rösrath",
    ],
  },

  bruchsal: {
    regionName: "im Landkreis Karlsruhe",
    headline: (cityName) => (
      <>Regionales Mietangebot für Bruchsal und den Raum Karlsruhe.</>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Auf dieser Standortseite finden Sie Baumaschinen für Vorhaben in{" "}
          {cityName} und {region}. Das Angebot richtet sich an Kunden, die für
          Erdarbeiten, Aushub, Transport- oder Verdichtungsaufgaben eine
          passende Maschine im Raum {cityName} suchen. So können Sie direkt
          prüfen, welche Geräte für Projekte in Bruchsal und dem umliegenden
          Einsatzgebiet zur Verfügung stehen.
        </>
      );
    },
    bookingContext: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Diese Seite bildet den Miet- und Buchungskontext für Einsätze in{" "}
          {cityName} und {region} ab. Anfragen, die über diese Standortseite
          gestellt werden, beziehen sich auf den regionalen Bestand für den Raum{" "}
          {cityName}. Dadurch ist klar erkennbar, dass es sich nicht um eine
          allgemeine Übersichtsseite, sondern um das passende Angebot für diese
          Region handelt.
        </>
      );
    },
    coverageText: (cityName, data) => {
      const areas = data.serviceAreas ?? [];

      return (
        <>
          Zum Einsatzgebiet rund um {cityName} gehören neben Bruchsal selbst
          auch {areas.slice(1, 7).join(", ")} sowie weitere Orte im nördlichen
          Raum Karlsruhe. Diese Standortseite ist damit der richtige Einstieg
          für Kunden, die Baumaschinen für Projekte zwischen Bruchsal, Karlsruhe
          und dem umliegenden Landkreis mieten möchten.
        </>
      );
    },
    localUseCases: [
      {
        title: "Erd- und Aushubarbeiten",
        description:
          "Geeignet für Erdarbeiten, Baugrubenvorbereitung und Aushubprojekte im Raum Bruchsal und den umliegenden Einsatzgebieten.",
        icon: Shovel,
      },
      {
        title: "Garten- und Landschaftsbau",
        description:
          "Unterstützt Arbeiten im Garten- und Landschaftsbau, etwa bei Geländeanpassungen, Flächenvorbereitung und kleineren Erdbewegungen.",
        icon: Trees,
      },
      {
        title: "Materialbewegung",
        description:
          "Für das Verladen, Umsetzen und Bewegen von Erde, Kies, Schüttgut und Baumaterial auf Baustellen in Bruchsal und Umgebung.",
        icon: Truck,
      },
      {
        title: "Verdichtungsarbeiten",
        description:
          "Passend für die Vorbereitung und Verdichtung von Untergründen bei Einfahrten, Wegen, Terrassen und Außenanlagen.",
        icon: Construction,
      },
      {
        title: "Bau- und Projektunterstützung",
        description:
          "Sinnvoll für private und gewerbliche Bauvorhaben, bei denen Maschinen für einzelne Bauabschnitte flexibel eingesetzt werden sollen.",
        icon: Hammer,
      },
      {
        title: "Kurz- und Langzeitmiete",
        description:
          "Ideal für Einsätze im Landkreis Karlsruhe, wenn Baumaschinen für kurze Projekte oder längere Bauphasen gemietet werden sollen.",
        icon: CalendarClock,
      },
    ],
    subHeadline: (cityName) => (
      <>Wir sind in {cityName} und Umgebung für Sie tätig:</>
    ),
    serviceAreas: [
      "Bruchsal",
      "Karlsruhe",
      "Bretten",
      "Stutensee",
      "Ubstadt-Weiher",
      "Waghäusel",
      "Philippsburg",
      "Graben-Neudorf",
      "Karlsdorf-Neuthard",
      "Weingarten (Baden)",
      "Forst (Baden)",
      "Hambrücken",
      "Gondelsheim",
    ],
  },

  stockstadt: {
    regionName: "im Landkreis Aschaffenburg",
    headline: (cityName) => (
      <>
        Bagger und Baumaschinen für Stockstadt und den Raum Aschaffenburg
        gezielt auswählen.
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Diese Standortseite bündelt das BAGGER1 Mietangebot für {cityName} und
          Einsätze in {region}. Wenn Sie für Erdarbeiten, Aushub, Transport oder
          Verdichtung eine passende Baumaschine benötigen, können Sie hier
          direkt das Angebot für den Raum {cityName} prüfen. So gelangen Sie
          ohne Umweg zu den Maschinen, die für Projekte in Stockstadt und dem
          umliegenden Einsatzgebiet vorgesehen sind.
        </>
      );
    },
    bookingContext: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Buchungen über diese Seite beziehen sich auf den regionalen
          Verfügbarkeits- und Bestandskontext für {cityName} und {region}. Damit
          dient die Seite als eigenständiger Einstieg für Kunden aus dem Raum
          Stockstadt. Auch wenn einzelne Maschinentypen BAGGER1-weit an mehreren
          Standorten vertreten sein können, ist diese URL auf Anfragen aus
          dieser Region ausgerichtet.
        </>
      );
    },
    coverageText: (cityName, data) => {
      const areas = data.serviceAreas ?? [];

      return (
        <>
          Das bediente Gebiet rund um {cityName} reicht über den Ort selbst
          hinaus und umfasst unter anderem {areas.slice(1, 7).join(", ")}. Damit
          eignet sich diese Standortseite für Vorhaben im Raum Aschaffenburg
          ebenso wie für Einsätze in angrenzenden Orten zwischen Unterfranken
          und dem bayerisch-hessischen Umland.
        </>
      );
    },
    localUseCases: [
      {
        title: "Aushub- und Erdarbeiten",
        description:
          "Geeignet für Erdarbeiten auf privaten und gewerblichen Flächen im Raum Stockstadt und dem Landkreis Aschaffenburg.",
        icon: Shovel,
      },
      {
        title: "Garten- und Außenanlagen",
        description:
          "Passend für Projekte im Garten- und Außenanlagenbau, etwa bei Geländeanpassungen, Flächenvorbereitung und kleineren Bauvorhaben.",
        icon: Trees,
      },
      {
        title: "Materialtransport",
        description:
          "Für das Bewegen, Verladen und Umsetzen von Erde, Kies, Schüttgut und weiterem Material auf kleineren Baustellen.",
        icon: Truck,
      },
      {
        title: "Verdichtungsarbeiten",
        description:
          "Sinnvoll für Verdichtungsarbeiten bei Pflaster-, Hof-, Wege- und Terrassenprojekten im privaten und gewerblichen Bereich.",
        icon: Construction,
      },
      {
        title: "Bau- und Flächenvorbereitung",
        description:
          "Unterstützt Vorbereitungsarbeiten auf Baustellen und Grundstücken, wenn Maschinen für einzelne Bauabschnitte flexibel benötigt werden.",
        icon: Hammer,
      },
      {
        title: "Flexible Maschinenmiete",
        description:
          "Ideal für Kurz- oder Langzeiteinsätze im Landkreis Aschaffenburg, wenn Baumaschinen projektbezogen gemietet werden sollen.",
        icon: CalendarClock,
      },
    ],
    subHeadline: (cityName) => (
      <>Wir sind in {cityName} und Umgebung für Sie tätig:</>
    ),
    serviceAreas: [
      "Stockstadt",
      "Aschaffenburg",
      "Mainaschaff",
      "Kleinostheim",
      "Großostheim",
      "Goldbach",
      "Hösbach",
      "Sulzbach am Main",
      "Niedernberg",
      "Glattbach",
      "Johannesberg",
      "Babenhausen",
      "Seligenstadt",
    ],
  },
};
