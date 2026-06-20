export const machinePageData = {
  seo: {
    metaTitle: "Baumaschine mieten – Modelle & Preise | BAGGER1",
    metaDescription:
      "Alle Infos zur Baumaschine: Modell, Tagespreis und Verfügbarkeit an deinem Standort. Jetzt direkt online mieten bei BAGGER1.",
  },
  timeTable: {
    rowOne: "1 Tag",
    rowTwo: "ab 5 Tage",
    rowThree: "ab 20 Tage",
    priceInformation: "Netto / Tag",
    rentInformation: "* 1 Miettag = 8 Betriebsstunden",
    insuranceInformation: "+10 % Maschinenbruchversicherung",
    taxInformation: "+19 % MwSt.",
  },
  specifications: {
    title: "Datenblatt",
    dimensions: {
      title: "Bemessung",
      width: "Gesamtbreite",
      length: "Gesamtlänge",
      height: "Gesamthöhe",
      weight: "Betriebsgewicht",
      volume: "Löffelvolumen",
    },
    power: {
      title: "Leistung",
    },
    workingRange: {
      title: "Arbeitsbereich",
      maxDepth: "Max. Grabtiefe",
      maxReach: "Max. Reichweite",
      minSwingRadius: "Min. Schwenkradius",
      bucketBreakoutForceISO: "Löffellosbrechkraft ISO",
      armTearOutForceISO: "Stiel Reißkraft ISO",
      bucketCapacity: "Schaufelinhalt",
      payloadS125: "Nutzlast (S=1,25)",
      tippingLoadBucket: "Kipplast (Schaufel)",
      tippingLoadPalletFork: "Kipplast (Palettengabel)",
    },
  },
} as const;
