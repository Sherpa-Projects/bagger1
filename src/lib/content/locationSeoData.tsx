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

      return (
        <>
          Sie planen ein Bau- oder Gartenprojekt in {cityName} oder {region}?
          Egal ob Firma oder Privatkunde: Bei BAGGER1 mieten Sie Baumaschinen
          für Aushub und Materialbewegung einfach online. Mit einem großen
          Sortiment – vom Minibagger über Rüttelplatte bis Dumper – finden Sie
          schnell das richtige Gerät zur Kurz- oder Langzeitmiete in {cityName}{" "}
          und Umgebung.
        </>
      );
    },
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
        Baumaschinen mieten in {cityName}.
        <br />
        <span className="text-primary">Schnell zur passenden Lösung.</span>
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Sie planen ein Bau- oder Gartenprojekt in {cityName} oder {region}?
          Egal ob Firma oder Privatkunde: Bei BAGGER1 mieten Sie Baumaschinen
          für Aushub und Materialbewegung einfach online. Mit einem großen
          Sortiment – vom Minibagger über Rüttelplatte bis Dumper – finden Sie
          schnell das richtige Gerät zur Kurz- oder Langzeitmiete in {cityName}
          und Umgebung.
        </>
      );
    },
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
      <>
        Baumaschinen mieten in {cityName}.
        <br />
        <span className="text-primary">Schnell zur passenden Lösung.</span>
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Sie planen ein Bau- oder Gartenprojekt in {cityName} oder {region}?
          Egal ob Firma oder Privatkunde: Bei BAGGER1 mieten Sie Baumaschinen
          für Aushub und Materialbewegung einfach online. Mit einem großen
          Sortiment – vom Minibagger über Rüttelplatte bis Dumper – finden Sie
          schnell das richtige Gerät zur Kurz- oder Langzeitmiete in {cityName}
          und Umgebung.
        </>
      );
    },
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
        Baumaschinen mieten in {cityName}.
        <br />
        <span className="text-primary">Schnell zur passenden Lösung.</span>
      </>
    ),
    intro: (cityName, data) => {
      const region = data.regionName ?? "der Region";

      return (
        <>
          Sie planen ein Bau- oder Gartenprojekt in {cityName} oder {region}?
          Egal ob Firma oder Privatkunde: Bei BAGGER1 mieten Sie Baumaschinen
          für Aushub und Materialbewegung einfach online. Mit einem großen
          Sortiment – vom Minibagger über Rüttelplatte bis Dumper – finden Sie
          schnell das richtige Gerät zur Kurz- oder Langzeitmiete in {cityName}
          und Umgebung.
        </>
      );
    },
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
