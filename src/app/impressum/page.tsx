import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum | Bagger1",
  description:
    "Impressum der Bagger1 Website mit Angaben gemäß § 5 TMG. Verantwortlich für Inhalte, Kontaktdaten und rechtliche Hinweise.",
  openGraph: {
    title: "Impressum | Bagger1",
    description:
      "Rechtliche Angaben gemäß § 5 TMG zur Website Bagger1 – inklusive Kontaktdaten und Verantwortlichkeiten.",
    url: "https://bagger1.de/impressum",
    siteName: "Bagger1",
    images: [
      {
        url: "/images/meta.png",
        width: 1200,
        height: 630,
        alt: "Bagger1 Impressum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impressum | Bagger1",
    description:
      "Rechtliche Informationen und Kontaktangaben zur Website von Bagger1.",
    images: ["/images/meta.png"],
  },
  robots: "noindex, follow",
};

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="px-4 md:px-8 pt-40 pb-20 max-w-4xl mx-auto space-y-10 prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-neutral">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl lg:leading-tight text-center mb-4 lg:mb-12">
          Impressum
        </h1>

        <section>
          <h2 className="text-lg lg:text-xl font-bold mb-2">
            Angaben gemäß § 5 DDG
          </h2>
          <address>
            <strong>Baumaschinenverleih Jens Wetzstein</strong>
            <br />
            Wittenberger Weg 2
            <br />
            68309 Mannheim
          </address>
        </section>

        <section>
          <h2 className="text-lg lg:text-xl font-bold mb-2">Kontakt</h2>
          <p>Telefon: +49 159 0652 5276</p>
          <p>
            E-Mail: <a href="mailto:"></a>
          </p>
        </section>

        <section>
          <h2 className="text-lg lg:text-xl font-bold mb-2">Inhaber</h2>
          <p>Jens Wetzstein </p>
        </section>

        <section>
          <h2 className="text-lg lg:text-xl font-bold mb-2">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            <br />
            DE
          </p>
        </section>

        <section>
          <p>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV: Jens Wetzstein
            Wittenberger Weg 2 68309 Mannheim
          </p>
        </section>

        <section>
          {" "}
          <h2 className="text-lg lg:text-xl font-bold mb-2">
            EU-Streitschlichtung
          </h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            .<br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
        </section>

        <section>
          {" "}
          <h2 className="text-lg lg:text-xl font-bold mb-2">
            Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section>
          {" "}
          <h2 className="text-lg lg:text-xl font-bold mb-2">
            Haftung für Inhalte
          </h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
          <p>
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
            Informationen nach den allgemeinen Gesetzen bleiben hiervon
            unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
            Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
            Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
            Inhalte umgehend entfernen.
          </p>
        </section>

        <section>
          {" "}
          <h2 className="text-lg lg:text-xl font-bold mb-2">
            Haftung für Links
          </h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
            verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
            der Seiten verantwortlich. Die verlinkten Seiten wurden zum
            Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
            Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
            erkennbar.
          </p>
          <p>
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
            jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
            zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
            derartige Links umgehend entfernen.
          </p>
        </section>

        <section>
          {" "}
          <h2 className="text-lg lg:text-xl font-bold mb-2">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht. Die
            Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
            schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet.
          </p>
          <p>
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
            wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
            werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
            trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
            wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
            Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
