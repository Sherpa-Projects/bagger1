import { Location } from "@/app/types/Location";

type Testimonial = {
  stars: number;
  content: string;
  location: Location;
};

export const testimonials: Testimonial[] = [
  {
    stars: 5,
    content:
      "Ich nehme mir selten die Zeit für lange Bewertungen, aber hier mache ich wirklich gerne eine Ausnahme. Wir haben bei Bagger1 einen 1,6-t Bagger gemietet und waren rundum begeistert.\nDie Abstimmung lief komplett unkompliziert über die Webseite und telefonisch. Alles ging super schnell und auch eine kurzfristige Lieferung war problemlos möglich – genau so wünscht man sich das.\nDie Auswahl an Maschinen ist groß und übersichtlich, und man wird bei Bedarf auch sehr gut beraten, um das passende Gerät für das eigene Projekt zu finden.\nDer Bagger selbst war in einem hervorragenden Zustand und hat während der gesamten Einsatzzeit absolut zuverlässig und einwandfrei funktioniert.\nBesonders hervorzuheben ist die Flexibilität: Kurzfristig wurde uns zusätzlich noch eine Rüttelplatte organisiert und vorbeigebracht – wirklich top Service.\nAuch preislich war alles absolut fair und transparent. Dazu kommt ein sehr freundliches und hilfsbereites Team.\nFazit: Rundum zufrieden – wir würden jederzeit wieder hier mieten und können Bagger1 uneingeschränkt weiterempfehlen. 👍",
    location: "hennef",
  },
  {
    stars: 5,
    content:
      "Sehr freundlicher Kontakt -\nWir haben jetzt das zweite mal gemietet.\nMaschinen sind im 1A Zustand\nAbsolut weiter zu empfehlen.",
    location: "hennef",
  },
  {
    stars: 5,
    content:
      "Vom ersten Kontakt bis zur Rückgabe hat alles perfekt geklappt.\nDie Maschine war sauber, technisch einwandfrei und genau das Richtige für mein Projekt.\nBesonders hervorheben möchte ich die freundliche Beratung und die schnelle, unkomplizierte Abwicklung.\nVielen Dank, gerne wieder!\n\nHadis Cehic SIGI Haus-& Gartenservice",
    location: "hennef",
  },
  {
    stars: 5,
    content:
      "Top Einsatz: Lieferung super pünktlich und akkurat!\nSchade, dass man nicht öfter baggern muss...;-)",
    location: "hennef",
  },
  {
    stars: 5,
    content:
      "Habe einen 1,1 Tonnen Bagger gemietet einen super Preis erhalten einen sehr guten Bagger schneller netter Kontakt immer gerne wieder miete ich bei euch",
    location: "bruchsal",
  },
  {
    stars: 5,
    content: "Toller Bagger, super Service, gerne wieder :-)",
    location: "bruchsal",
  },
  {
    stars: 5,
    content:
      "Sehr unkomplizierte Vermietung!Angenehme Bezahlung (PayPal), freundlicher Service. Schnelle hilfe bei Problemen!\nGerne wieder.",
    location: "hennef",
  },
  {
    stars: 5,
    content:
      "Ich habe für eine Woche einen 1,6t-Bagger bei Bagger1 gemietet. Die gesamte Abwicklung war sehr persönlich, unkompliziert und zuverlässig. Alles hat reibungslos funktioniert und die Kommunikation war angenehm und direkt. Klare Empfehlung – gerne wieder!",
    location: "bruchsal",
  },
];
