type LocationSeoConfig = {
  headline?: (cityName: string) => React.ReactNode;
  intro?: (
    cityName: string,
    data: { regionName?: string; serviceAreas?: string[] },
  ) => React.ReactNode;
  subHeadline: (cityName: string) => React.ReactNode;
  regionName?: string;
  serviceAreas?: string[];
};

export const bookingInformation: string =
  "Oben auf der Seite sehen Sie die aktuell verfügbaren Maschinen am Standort. Nach Auswahl prüfen Sie Ihren Zeitraum und können bequem online buchen – auch für längere Mietzeiten.";

export const locationSeoBySlug: Record<string, LocationSeoConfig> = {
  mannheim: {
    regionName: "im Rhein-Neckar-Kreis",
    headline: (cityName) => (
      <>
        Baumaschinen mieten in {cityName}.
        <br />
        <span className="text-primary">Schnell zur passenden Lösung.</span>
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";
      const [a, b, c] = (data.serviceAreas ?? []).slice(0, 3);

      return (
        <>
          Sie planen ein Bau- oder Gartenprojekt in {cityName} oder {region}?
          Bei BAGGER1 mieten Sie die passenden Baumaschinen für Aushub und
          Materialbewegung – auch für Einsätze in {a}, {b} und {c}.
        </>
      );
    },
    subHeadline: (cityName) => (
      <>Wir sind in {cityName} und Umgebung für Sie tätig:</>
    ),
    serviceAreas: [
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
        Baumaschinen mieten in {cityName}.
        <br />
        <span className="text-primary">Schnell zur passenden Lösung.</span>
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";
      const [a, b, c] = (data.serviceAreas ?? []).slice(0, 3);

      return (
        <>
          Sie planen ein Bau- oder Gartenprojekt in {cityName} oder {region}?
          Bei BAGGER1 mieten Sie die passenden Baumaschinen für Aushub und
          Materialbewegung – rund um {cityName}, {b} und {c}.
        </>
      );
    },
    subHeadline: (cityName) => (
      <>Wir sind in {cityName} und Umgebung für Sie tätig:</>
    ),
    serviceAreas: [
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
      <>
        Baumaschinen mieten in {cityName}.
        <br />
        <span className="text-primary">Schnell zur passenden Lösung.</span>
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";
      const [a, b, c] = (data.serviceAreas ?? []).slice(0, 3);

      return (
        <>
          Sie planen ein Bau- oder Gartenprojekt in {cityName} oder {region}?
          Bei BAGGER1 mieten Sie die passenden Baumaschinen für Aushub und
          Materialbewegung – z. B. für Projekte in {cityName}, {a} und {b}.
        </>
      );
    },
    subHeadline: (cityName) => (
      <>Wir sind in {cityName} und Umgebung für Sie tätig:</>
    ),
    serviceAreas: [
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
        Baumaschinen mieten in {cityName}.
        <br />
        <span className="text-primary">Schnell zur passenden Lösung.</span>
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";
      const [a, b, c] = (data.serviceAreas ?? []).slice(0, 3);

      return (
        <>
          Sie planen ein Bau- oder Gartenprojekt in {cityName} oder {region}?
          Bei BAGGER1 mieten Sie die passenden Baumaschinen für Aushub und
          Materialbewegung – zum Beispiel in {cityName}, {a} und {b}.
        </>
      );
    },
    subHeadline: (cityName) => (
      <>Wir sind in {cityName} und Umgebung für Sie tätig:</>
    ),
    serviceAreas: [
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
