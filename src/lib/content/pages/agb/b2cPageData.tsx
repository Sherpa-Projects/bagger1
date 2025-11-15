import Link from "next/link";

export const b2cPageData = {
  metaTitle: "Allgemeine Geschäftsbedingungen (B2C) | Bagger1",
  metaDescription: {
    google:
      "Hier finden Sie unsere allgemeinen Geschäftsbedingungen für Privatkunden mit allen wichtigen Regelungen zu Nutzung, Leistungen und Pflichten.",
    openGraph:
      "Allgemeine Geschäftsbedingungen (B2C) von Bagger1 – alle Regelungen zur Nutzung, unseren Leistungen und den Pflichten für Privatkunden kompakt und verständlich erklärt.",
    twitter:
      "AGB für Privatkunden bei Bagger1 – verständlich, kompakt und transparent.",
  },
  Body: () => (
    <>
      <main className="px-4 md:px-8 pt-40 pb-20 max-w-4xl mx-auto space-y-10 prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-neutral">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl lg:leading-tight text-center mb-4 lg:mb-12">
          Allgemeine Geschäftsbedingungen für Privatkunden (B2C)
        </h1>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">1. Geltungsbereich</h2>
          <p>
            Diese Mietbedingungen gelten ausschließlich für Verträge mit
            Verbrauchern im Sinne des § 13 BGB. Verbraucher ist jede natürliche
            Person, die ein Rechtsgeschäft zu Zwecken abschließt, die
            überwiegend weder ihrer gewerblichen noch ihrer selbstständigen
            beruflichen Tätigkeit zugerechnet werden können.
          </p>
          <p>
            Die vorliegenden Allgemeinen Mietvertragsbedingungen des Vermieters
            gelten für alle Angebote und Mietverträge zur Vermietung von
            Baumaschinen, Baugeräten und Industriemaschinen ausschließlich
            gegenüber Verbrauchern im Sinne des § 13 BGB. Verbraucher ist jede
            natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die
            überwiegend weder ihrer gewerblichen noch ihrer selbständigen
            beruflichen Tätigkeit zugerechnet werden können.
            Mietvertragsbedingungen des Mieters wird ausdrücklich widersprochen.
          </p>
          <p>
            Mietverträge werden nur mit volljährigen Personen mit Wohnsitz in
            der Bundesrepublik Deutschland abgeschlossen. Zur Prüfung der
            Identität des Mieters verlangt der Vermieter die Vorlage eines
            gültigen Ausweisdokuments.
          </p>
          <p>
            Im Einzelfall getroffene, individuelle Vereinbarungen mit dem Mieter
            (einschließlich Nebenabreden, Ergänzungen und Änderungen) haben in
            jedem Fall Vorrang vor den Regelungen in diesen
            Mietvertragsbedingungen.
          </p>
          <p>
            Rechtserhebliche Erklärungen und Anzeigen, die nach Vertragsschluss
            vom Mieter gegenüber dem Vermieter abzugeben sind, bedürfen zu ihrer
            Wirksamkeit der Textform. Falls nichts Abweichendes angegeben, sind
            alle Mietvertragsangebote des Vermieters freibleibend. Die vom
            Besteller/ Mieter unterzeichnete Bestellung ist ein bindendes
            Angebot. Dieses Angebot kann durch den Vermieter innerhalb von zwei
            Wochen durch Zusendung einer Auftragsbestätigung angenommen werden.
          </p>
          <p>
            Den Mietvertragsbedingungen des Mieters wird ausdrücklich
            widersprochen. Abweichende Bedingungen gelten nur, wenn sie
            schriftlich vereinbart wurden.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">2. Plichten des Mieters</h2>
          <p>
            Der Mieter ist verpflichtet, den Mietgegenstand sorgfältig zu
            behandeln und vor Überbeanspruchung in jeder Weise zu schützen. Die
            gesetzlichen Vorschriften zum Schutz von Leben, Gesundheit und
            Eigentum Dritter sind zu beachten. Das Betanken und Schmieren hat
            sachgemäß zu erfolgen. Das Gerät darf nur bestimmungsgemäß verwendet
            und nicht überbeansprucht werden.
          </p>
          <p>
            Der Vermieter verpflichtet sich, dem Mieter den Mietgegenstand für
            die vereinbarte Mietzeit in Miete zu überlassen. Der Mieter
            verpflichtet sich, den Mietgegenstand nur bestimmungsgemäß
            einzusetzen, insbesondere die einschlägigen Unfallverhütungs- und
            Arbeitsschutzbestimmungen sowie Straßenverkehrsvorschriften,
            insbesondere auch bezüglich Ladung und Transport des
            Mietgegenstandes, sorgfältig zu beachten, die Miete
            vereinbarungsgemäß zu zahlen, den Mietgegenstand ordnungsgemäß zu
            behandeln und bei Ablauf der Mietzeit gesäubert und vollgetankt
            zurückzugeben.
          </p>
          <p>
            Der Mieter ist verpflichtet, dem Vermieter unverzüglich auf Anfrage
            den jeweiligen Stand- bzw. Einsatzort des Mietgegenstandes
            mitzuteilen sowie jeden beabsichtigten Wechsel des Stand- bzw.
            Einsatzortes.
          </p>
          <p>
            Der Mietgegenstand darf nur durch geschulte und eingewiesene
            Personen verwendet werden, die die notwendige körperliche und
            geistige Eignung besitzen. Für bestimmte Maschinen ist ein gültiger
            Führerschein oder eine Bedienerlaubnis erforderlich.
          </p>
          <p>
            Die Benutzung durch unqualifiziertes Personal gilt als
            Obliegenheitsverletzung und führt zum Verlust etwaiger
            Haftungsbeschränkungen oder Versicherungsschutzes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            3. Überlassung des Mietgegenstandes, Verzug des Vermieters
          </h2>
          <p>
            Der Mietgegenstand wird in betriebsfähigem Zustand übergeben. Der
            Mieter hat den Mietgegenstand unverzüglich nach Übergabe zu prüfen
            und etwaige Mängel unverzüglich dem Vermieter anzuzeigen.
          </p>
          <p>
            Kommt der Vermieter mit der Übergabe in Verzug, so kann der Mieter
            nur dann vom Vertrag zurücktreten oder Schadenersatz verlangen, wenn
            er dem Vermieter zuvor eine angemessene Frist gesetzt hat und diese
            fruchtlos verstrichen ist.
          </p>
          <p>
            Der Vermieter hat den Mietgegenstand in einwandfreiem,
            betriebsfähigem und voll getanktem Zustand mit den erforderlichen
            Unterlagen an den Mieter zu überlassen. Kann der Vermieter ein
            Mietgerät nicht rechtzeitig bereitstellen, ist der Mieter nach
            Setzen einer angemessenen Frist berechtigt, vom Vertrag
            zurückzutreten. Ein Anspruch auf Schadensersatz besteht nur, wenn
            dem Vermieter grobe Fahrlässigkeit oder Vorsatz nachgewiesen wird.
          </p>
          <p>
            Bei leichter Fahrlässigkeit ist die vom Vermieter zu leistende
            Entschädigung für jeden Arbeitstag begrenzt auf höchstens den Betrag
            des täglichen Bruttomietpreises. Nach Setzung einer angemessenen
            Frist kann der Mieter den Vertrag kündigen, wenn der Vermieter sich
            zu diesem Zeitpunkt weiterhin in Verzug befindet.
          </p>
          <p>
            Der Vermieter ist im Falle des Verzugs auch berechtigt, zur
            Schadensbeseitigung dem Mieter einen funktionell gleichwertigen
            Mietgegenstand zur Verfügung zu stellen, falls dem Mieter dies
            zumutbar ist.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            4. Mietzeit, Berechnung und Kündigung
          </h2>
          <p>
            Die Mietzeit beginnt mit dem Tag der vereinbarten Bereitstellung und
            endet mit dem vereinbarten Rückgabetermin.
          </p>
          <p>
            Eine ordentliche Kündigung des Mietvertrages während der
            vereinbarten Mietzeit ist ausgeschlossen.
          </p>
          <div>
            <p>
              Nach Ablauf einer Mindestmietzeit kann das Mietverhältnis mit
              einer Frist gekündigt werden, die sich nach der Abrechnungseinheit
              richtet.
            </p>
            <ul className="list-disc list-inside">
              <li>
                1 - 4 Tage: Anmietung entspricht die Frist einem Tag für die
                Kündigung.
              </li>
              <li>
                5 - 30 Tage: Anmietung entspricht die Frist fünf Tage für die
                Kündigung.
              </li>
              <li>
                30 - 90 Tage: Anmietung entspricht die Frist zehn Tage für die
                Kündigung.
              </li>
              <li>
                ab 91 Tage: Anmietung entspricht die Frist 1 Kalendermonat
                kündbar zum Monatsende.
              </li>
            </ul>
          </div>
          <p>
            Abweichende Regelungen sind schriftlich festzuhalten. Eine Rückgabe
            nach Ablauf der Mietzeit gilt nicht als stillschweigende
            Vertragsverlängerung.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">5. Rückgabe des Mietgegenstandes</h2>
          <p>
            Der Mieter hat den Mietgegenstand vollständig, in ordnungsgemäßem,
            betriebsfähigem und gereinigtem Zustand zurückzugeben. Fehlteile
            werden berechnet.
          </p>
          <p>
            Der Vermieter ist berechtigt, bei Rückgabe ein Übergabeprotokoll zu
            erstellen. Offensichtliche Schäden werden dort festgehalten.
          </p>
          <p>
            Wird die Rückgabe schuldhaft verspätet vorgenommen, schuldet der
            Mieter Schadensersatz.
          </p>
          <p>
            Bei verspäteter Rückgabe verlängert sich die Mietzeit bis zur
            tatsächlichen Rückgabe. Eine stillschweigende Vertragsverlängerung
            nach § 545 BGB wird ausgeschlossen. Der Vermieter ist berechtigt,
            bei Beendigung des Mietverhältnisses das Grundstück des Mieters zu
            betreten, um die Geräte abzuholen.
          </p>
          <p>
            Der Mieter ist verpflichtet, die Verpackung, Zubehör und
            Betriebsanleitungen vollständig zurückzugeben. Fehlendes Zubehör
            wird gesondert in Rechnung gestellt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            6. Mängelanzeige und Haftung des Vermieters
          </h2>
          <p>
            Der Mieter hat erkennbare Mängel unverzüglich nach Übergabe,
            versteckte Mängel unverzüglich nach Entdeckung anzuzeigen.
          </p>
          <p>
            Ist die Tauglichkeit des Mietgegenstandes erheblich eingeschränkt,
            ist der Mieter für die Zeit der Einschränkung von der Mietzahlung
            befreit.
          </p>
          <p>
            Weitergehende Ansprüche des Mieters, insbesondere
            Schadensersatzansprüche, bestehen nur, soweit dem Vermieter Vorsatz
            oder grobe Fahrlässigkeit zur Last fällt. Der Mieter ist berechtigt,
            den Mietgegenstand rechtzeitig vor Mietbeginn zu besichtigen und
            etwaige Mängel zu rügen. Die Kosten einer Untersuchung trägt der
            Mieter.
          </p>
          <p>
            Bei Überlassung erkennbare Mängel, welche den vorgesehenen Einsatz
            nicht unerheblich beeinträchtigen, können nicht mehr gerügt werden,
            wenn sie nicht unverzüglich nach Untersuchung in Textform gegenüber
            dem Vermieter angezeigt worden sind. Sonstige bereits bei
            Überlassung vorhandene Mängel sind unverzüglich nach Entdeckung in
            Textform anzuzeigen.
          </p>
          <p>
            Der Vermieter hat rechtzeitig gerügte Mängel, die bei Überlassung
            vorhanden waren, auf eigene Kosten zu beseitigen. Nach Wahl des
            Vermieters kann er die Beseitigung auch durch den Mieter vornehmen
            lassen; dann trägt er die erforderlichen Kosten. Der Vermieter ist
            auch berechtigt, dem Mieter einen funktionell gleichwertigen
            Mietgegenstand zur Verfügung zu stellen, falls dem Mieter dies
            zumutbar ist. Die Zahlungspflicht des Mieters verschiebt sich bei
            wesentlichen Beeinträchtigungen des Mietgegenstandes um die Zeit, in
            der die Tauglichkeit zum vertragsgemäßen Gebrauch aufgehoben ist.
            Für die Zeit, während der die Tauglichkeit gemindert ist, hat der
            Mieter nur eine angemessen herabgesetzte Miete zu entrichten. Eine
            unerhebliche Minderung der Tauglichkeit bleibt außer Betracht.
          </p>
          <p>
            Lässt der Vermieter eine ihm gegenüber gesetzte angemessene
            Nachfrist für die Beseitigung eines bei der Überlassung vorhandenen
            Mangels durch sein Verschulden fruchtlos verstreichen, so hat der
            Mieter ein Kündigungsrecht. Das Kündigungsrecht des Mieters besteht
            auch in sonstigen Fällen des Fehlschlagens der Beseitigung eines bei
            der Überlassung vorhandenen Mangels durch den Vermieter.
          </p>
          <p>
            Ein Schadensersatzanspruch des Mieters wegen verspäteter
            Bereitstellung besteht nur bei grober Fahrlässigkeit oder Vorsatz.
            Folgeschäden, entgangener Gewinn oder Bauverzögerungen sind
            ausgeschlossen. Die Haftung des Vermieters ist auf den Zeitwert des
            Mietgegenstands beschränkt; weitergehende Ansprüche sind
            ausgeschlossen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">7. Obhut und Pflichten des Mieters</h2>
          <p>
            Der Mieter ist verpflichtet, den Mietgegenstand vor
            Überbeanspruchung und Witterungseinflüssen zu schützen, ihn
            ordnungsgemäß zu sichern und Betriebsstoffe sachgerecht zu
            verwenden.
          </p>
          <p>
            Der Mietgegenstand darf nur bestimmungsgemäß eingesetzt und nicht
            überbeansprucht werden.
          </p>
          <p>
            Die einschlägigen Unfallverhütungsvorschriften sind zu beachten.
          </p>
          <p>
            Reparaturen und Veränderungen dürfen nur vom Vermieter vorgenommen
            werden.
          </p>
          <div>
            <p>Der Mieter ist verpflichtet,</p>
            <ul className="list-disc list-inside">
              <li>
                den Mietgegenstand vor Überbeanspruchung in jeder Weise zu
                schützen;
              </li>
              <li>
                die sach- und fachgerechte Wartung und Pflege des
                Mietgegenstandes auf seine Kosten durchzuführen;
              </li>
              <li>
                notwendige Inspektions- und Instandsetzungsarbeiten rechtzeitig
                anzukündigen und unverzüglich durch den Vermieter ausführen zu
                lassen. Die Kosten trägt der Vermieter, wenn der Mieter und
                seine Hilfspersonen nachweislich jede gebotene Sorgfalt beachtet
                haben.
              </li>
              <li>
                alle für die Benutzung maßgeblichen Vorschriften und technischen
                Regeln zu beachten und insbesondere vor Inbetriebnahme die
                jeweilige Betriebsanleitung zu lesen und sich mit dem
                ordnungsgemäßen Umgang vertraut zu machen.
              </li>
            </ul>
          </div>
          <p>
            Der Vermieter ist berechtigt, den Mietgegenstand jederzeit zu
            besichtigen und, nach vorheriger Abstimmung mit dem Mieter, selbst
            zu untersuchen oder durch einen Beauftragten untersuchen zu lassen.
            Der Mieter ist verpflichtet, dem Vermieter bzw. dessen Beauftragten
            die Untersuchung in jeder Weise zu erleichtern. Die Kosten der
            Untersuchung trägt der Vermieter.
          </p>
          <p>
            Geräte dürfen nur im Umkreis von 50 km eingesetzt werden; ein
            Einsatz im Ausland bedarf der Zustimmung des Vermieters.
          </p>
          <p>
            Der Mieter ist verpflichtet, täglich vor Inbetriebnahme eine
            Sichtprüfung und Funktionsprüfung durchzuführen. Unterlassene
            Prüfungen führen zur vollen Haftung des Mieters für Folgeschäden.
          </p>
          <p>
            Der Mieter ist verpflichtet, dem Vermieter den Standort des
            Mietgegenstandes jederzeit mitzuteilen. Jede Ortsveränderung ist
            unverzüglich anzuzeigen.
          </p>
          <p>
            Bei Selbstabholung ist der Mieter allein verantwortlich für die
            ordnungsgemäße Ladungssicherung gem. § 22 StVO.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            8. Mietpreis, Nebenkosten und Zahlung
          </h2>
          <p>
            Der Mietpreis versteht sich einschließlich der gesetzlichen
            Umsatzsteuer.
          </p>
          <p>
            Die Abrechnung erfolgt nach der vereinbarten Abrechnungseinheit (z.
            B. Tag, Woche).
          </p>
          <p>
            Der Mietpreis ist im Voraus zu zahlen, außer es wurden schriftlich
            abweichende Regelungen getroffen.
          </p>
          <p>
            Transportkosten, Betriebsstoffe, Reinigungskosten und sonstige
            Nebenkosten sind nicht im Mietpreis enthalten und werden gesondert
            berechnet.
          </p>
          <p>
            Der Berechnung der Miete liegt eine Arbeitszeit bis zu 8 Stunden
            täglich zugrunde (kalendertägliche Tagesmiete). Die Abrechnung
            erfolgt auf der Basis der Fünf-Tage-Woche (Montag bis
            Freitagnachmittag). Wochenendarbeiten, zusätzliche Arbeitsstunden
            und erschwerte Einsätze sind dem Vermieter in Textform anzuzeigen;
            sie werden zusätzlich berechnet.
          </p>
          <p>
            Der vereinbarte Mietpreis versteht sich nur für das Gerät. Der
            Mieter hat sämtliche Nebenkosten (insbesondere die Kosten für Auf-
            und Abladen, Transport, Betriebsstoffe, Reinigung, etc.) jeweils
            gesondert zu zahlen. Alle gegenüber dem Mieter als Verbraucher
            angegebenen Preise verstehen sich einschließlich der jeweils
            geltenden Umsatzsteuer.
          </p>
          <p>
            Der Vermieter ist berechtigt, vom Mieter jederzeit eine angemessene
            Vorauszahlung des Mietpreises zu verlangen. Der Vermieter ist
            berechtigt, vom Mieter jederzeit eine angemessene unverzinsliche
            Kaution als Sicherheit zu verlangen.
          </p>
          <p>
            Alle Preisangaben sind Bruttopreise inkl. der gesetzlichen
            Umsatzsteuer.
          </p>
          <p>
            Verbrauchs- und Verschleißteile (z. B. Gummiketten, Schläuche,
            Filter) sind vom Mieter während der Mietzeit auf eigene Kosten zu
            ersetzen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">9. Kaution, Sicherheiten, Verzug</h2>
          <p>
            Der Vermieter ist berechtigt, bei Vertragsschluss eine Kaution zu
            verlangen. Die Kaution dient der Sicherung sämtlicher Ansprüche des
            Vermieters.
          </p>
          <p>
            Gerät der Mieter mit Zahlungen in Verzug, schuldet er Verzugszinsen
            in gesetzlicher Höhe.
          </p>
          <p>
            Die Kaution wird nicht verzinst. Sie wird nach Rückgabe des
            Mietgegenstandes und nach Begleichung sämtlicher Forderungen
            zurückgezahlt.
          </p>
          <p>
            Gerät der Mieter mit einer Zahlung mehr als 14 Tage in Verzug, ist
            der Vermieter berechtigt, den Mietvertrag fristlos zu kündigen und
            den Mietgegenstand sofort zurückzufordern.
          </p>
          <p>
            Kommt der Mieter seinen Zahlungsverpflichtungen nicht nach, ist der
            Vermieter berechtigt, die Geräte ohne gerichtliche Entscheidung
            wieder an sich zu nehmen. Der Mieter hat den Zutritt zu ermöglichen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            10. Schäden am Mietgegenstand und Verlust des Mietgegenstandes
          </h2>
          <p>
            Der Mieter hat Schäden und Unfälle dem Vermieter unverzüglich
            anzuzeigen.
          </p>
          <p>
            Bei Diebstahl oder Beschädigung durch Dritte ist unverzüglich
            Anzeige bei der Polizei zu erstatten.
          </p>
          <p>
            Der Mieter haftet für Schäden am Mietgegenstand, soweit sie von ihm
            zu vertreten sind.
          </p>
          <p>
            Reifen- und Glasbruchschäden gelten als Betriebsschäden und sind
            nicht versichert.
          </p>
          <p>
            Der Mieter ist verpflichtet, die beabsichtigte Rücklieferung des
            Mietgegenstandes dem Vermieter rechtzeitig vorher anzuzeigen
            (Freimeldung). Die Obhutspflicht des Mieters bleibt bis zur
            tatsächlichen Rückgabe des Mietgegenstandes bestehen.
          </p>
          <p>
            Die Mietzeit endet an dem Tag, an dem der Mietgegenstand mit allen
            zu seiner Inbetriebnahme erforderlichen Teilen in ordnungs- und
            vertragsmäßigem Zustand auf dem Lagerplatz des Vermieters oder einem
            vereinbarten anderen Bestimmungsort eintrifft, frühestens jedoch mit
            Ablauf der vereinbarten Mietzeit.
          </p>
          <p>
            Der Mieter hat den Mietgegenstand in betriebsfähigem, vollgetanktem
            und gereinigtem Zustand zurück zuliefern oder zur Abholung
            bereitzuhalten.
          </p>
          <p>
            Die Rücklieferung hat während der normalen Geschäftszeit des
            Vermieters so rechtzeitig zu erfolgen, dass der Vermieter in der
            Lage ist, den Mietgegenstand noch an diesem Tag zu prüfen.
          </p>
          <p>
            Schäden infolge von Umkippen, falscher Bedienung, unzureichender
            Versorgung oder unter Alkohol-/Drogeneinfluss sind von jeglicher
            Haftungsbeschränkung ausgenommen.
          </p>
          <p>
            Obliegenheitsverletzungen wie Bedienung durch Unbefugte,
            Manipulation von Sicherheitssystemen oder Nichtbeachtung von
            Betriebsanleitungen führen zum vollständigen Verlust des
            Versicherungsschutzes.
          </p>
          <p>
            Sollte es dem Mieter schuldhaft oder aus technisch zwingenden
            Gründen unmöglich sein, die ihm obliegende Verpflichtung zur
            Rückgabe des Mietgegenstandes einzuhalten, so ist er zum
            Schadenersatz verpflichtet.
          </p>
          <p>
            Wird der Mietgegenstand in einem Zustand zurückgeliefert, der
            ergibt, dass der Mieter seiner vorgesehenen Unterhaltspflicht nicht
            nachgekommen ist, so besteht eine Zahlungspflicht des Mieters in
            Höhe des monatlichen Mietpreises als Entschädigung bis zur
            Beendigung der vertragswidrig unterlassenen Instandsetzungsarbeiten.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">11. Weitere Pflichten des Mieters</h2>
          <p>
            Sollte ein Dritter durch Beschlagnahme, Pfändung oder dergleichen,
            Rechte an dem Mietgegenstand geltend machen, so ist der Mieter
            verpflichtet, dem Vermieter unverzüglich in Textform und vorab
            mündlich Anzeige zu erstatten und den Dritten hiervon unverzüglich
            durch nachweisbare Mitteilung in Textform zu benachrichtigen.
          </p>
          <p>
            Der Mieter hat insbesondere geeignete Maßnahmen zur Sicherung gegen
            Diebstahl, Beschädigung und unbefugter Inbetriebnahme des
            Mietgegenstandes zu treffen. Sollte die Diebstahlsicherung
            nachweislich nicht eingehalten worden sein, entsteht eine
            Selbstbeteiligung von 10% des Gerätewerts.
          </p>
          <p>
            Der Mieter hat den Vermieter bei allen Unfällen zu unterrichten,
            eine möglichst lückenlose Schadensaufnahme zur bestmöglichen
            Beweissicherung vorzunehmen und dessen Weisungen abzuwarten. Bei
            Verkehrsunfällen und beim Verdacht von Straftaten (z. B. Diebstahl,
            Sachbeschädigung) ist die Polizei hinzuzuziehen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            12. Versicherung & Haftungsbegrenzung
          </h2>
          <p>
            Der Vermieter bietet gegen gesondertes Entgelt eine
            Maschinenbruchversicherung (MBV) an.
          </p>
          <p>Reifen- und Glasbruchschäden sind ausgeschlossen.</p>
          <p>
            Die Versicherungsleistung besteht nur bei Einhaltung der
            Sicherungspflichten.
          </p>
          <div>
            <p>
              Weitergehende Schadenersatzansprüche gegen den Vermieter,
              insbesondere ein Ersatz von Schäden, die nicht am Mietgegenstand
              selbst entstanden sind, können vom Mieter nur geltend gemacht
              werden bei:
            </p>
            <ul className="list-disc list-inside">
              <li>einer vorsätzlichen Pflichtverletzung des Vermieters;</li>
              <li>
                einer grob fahrlässigen Pflichtverletzung des Vermieters oder
                bei einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung
                eines gesetzlichen Vertreters oder Erfüllungsgehilfen des
                Vermieters;
              </li>
              <li>
                der schuldhaften Verletzung wesentlicher Vertragspflichten
                soweit die Erreichung des Vertragszwecks gefährdet wird,
                hinsichtlich des vertragstypischen, voraussehbaren Schadens;
              </li>
              <li>
                Schäden aus der Verletzung des Lebens, des Körpers oder der
                Gesundheit, die auf einer fahrlässigen Pflichtverletzung des
                Vermieters oder einer vorsätzlichen oder fahrlässigen
                Pflichtverletzung eines gesetzlichen Vertreters oder
                Erfüllungsgehilfen des Vermieters beruhen;
              </li>
              <li>
                falls der Vermieter nach Produkthaftungsgesetz für
                Personenschäden oder Sachschäden an privat genutzten
                Gegenständen haftet.
              </li>
            </ul>
          </div>
          <p>
            Im Übrigen ist die Schadensersatzhaftung ausgeschlossen. Wenn durch
            das Verschulden des Vermieters der Mietgegenstand vom Mieter infolge
            unterlassener oder fehlerhafter Ausführung von vor oder nach
            Vertragsabschluss liegenden Vorschlägen und Beratungen sowie anderen
            vertraglichen Nebenverpflichtungen – insbesondere Anleitung für
            Bedienung und Wartung des Mietgegenstandes – nicht vertragsgemäß
            verwendet werden kann, so gelten unter Ausschluss weiterer Ansprüche
            des Mieters aus anderen, entsprechenden Regelungen.
          </p>
          <p>
            Im Schadenfall bestimmt der Vermieter den Gutachter; die Kosten
            trägt der Mieter.
          </p>
          <p>
            Befindet sich der Mietgegenstand im Obhutsbereich des Mieters, trägt
            dieser die volle Beweislast, dass ihn kein Verschulden trifft.
          </p>
          <p>
            Besteht eine eigene Versicherung des Mieters, geht diese der
            Vermieterversicherung vor.
          </p>
          <p>
            Besteht eine anderweitige Versicherung des Mieters, geht diese vor.
          </p>
          <p>
            Die Selbstbeteiligung richtet sich nach unserer Gerätekategorie
            (Bagger- und Radlader) und beläuft sich auf eine Summe von 1.000,00
            Euro im Schadensfall.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            14. Fristlose Kündigung durch den Vermieter
          </h2>
          <div>
            <p>Der Vermieter kann den Vertrag fristlos kündigen, wenn:</p>
            <ol className="list-decimal list-inside">
              <li>der Mieter trotz Mahnung mit Zahlungen in Verzug ist,</li>
              <li>
                der Mieter trotz Abmahnung gegen wesentliche Vertragspflichten
                verstößt,
              </li>
              <li>
                der Mieter den Mietgegenstand unbefugt an Dritte überlässt.
              </li>
            </ol>
          </div>
          <p>
            Bereits ein Zahlungsverzug von mehr als 5 Tagen nach Mahnung
            berechtigt den Vermieter zur fristlosen Kündigung. Bei groben
            Vertragsverstößen, unbefugter Ortsveränderung oder nicht angezeigten
            Schäden kann das Mietverhältnis fristlos beendet werden. Der
            Vermieter ist berechtigt, den Mietgegenstand sofort abzuholen.
          </p>
          <p>
            Bei Nichteinlösung von Lastschriften oder Zahlungsverweigerung ist
            der Vermieter berechtigt, den Vertrag sofort zu beenden und die
            Geräte ohne gerichtliche Entscheidung wieder an sich zu nehmen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">15. Anwendbares Recht</h2>
          <p>
            Es gilt ausschließlich das Recht der Bundesrepublik Deutschland.
          </p>
          <p>
            „Für diesen Vertrag gilt ausschließlich deutsches Recht.
            Gerichtsstand ist Bruchsal.“
          </p>
          <p>
            „Erfüllungsort und Gerichtsstand ist Amtsgericht Bruchsal /
            Landgericht Karlsruhe.“
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">16. Streitbeilegungsverfahren</h2>
          <p>
            Der Vermieter ist nicht verpflichtet und nicht bereit, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            17. Vorrang individueller Vereinbarungen
          </h2>
          <p>
            Individuelle Vertragsabreden haben Vorrang vor diesen
            Mietbedingungen.
          </p>
          <p>
            Individuelle Vertragsabreden haben Vorrang vor diesen Allgemeinen
            Mietbedingungen. Den Mietvertragsbedingungen des Mieters wird
            ausdrücklich widersprochen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">18. Schriftform / Textform</h2>
          <p>
            Änderungen und Ergänzungen des Vertrages sowie rechtserhebliche
            Erklärungen nach Vertragsschluss bedürfen der Textform.
            Rechtserhebliche Erklärungen müssen in Textform (z. B. E-Mail,
            Brief) erfolgen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">
            19. Eigentumsschutz / Drittzugriffe
          </h2>
          <p>
            Bei Pfändung oder sonstigen Zugriffen Dritter ist der Mieter
            verpflichtet, unverzüglich den Vermieter zu informieren, den Dritten
            auf das Eigentum des Vermieters hinzuweisen und den Vermieter von
            allen Kosten der Rechtsverteidigung freizustellen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">20. Datenschutz & Telemetrie</h2>
          <p>
            Ein Teil der Mietgeräte ist mit GPS-Ortung ausgestattet. Der Zugriff
            erfolgt durch einen eingeschränkten Personenkreis ausschließlich zu
            Sicherheits- und Dispositionszwecken. Über die Telemetrie können
            Standort, Ladezyklen, Fehlercodes und Einsatzzeiten abgerufen
            werden. Sobald die Daten mit personenbezogenen Informationen
            verknüpft werden, gilt der Mieter als Verantwortlicher i.S.d. DSGVO.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">21. Salvatorische Klausel</h2>
          <p>
            Sollte eine Bestimmung dieses Vertrages unwirksam sein, wird die
            Wirksamkeit der übrigen Bestimmungen hiervon nicht berührt. Die
            Parteien verpflichten sich, eine Regelung zu treffen, die dem
            wirtschaftlichen Zweck am nächsten kommt.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">22. Abtretungsverbot</h2>
          <p>
            Vertrag durch den Mieter bedarf der Zustimmung des Vermieters in
            Textform.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-3xl mt-20">23. Werbung auf Mietgeräten</h2>
          <p>
            Der Vermieter darf Werbung an den Mietgeräten anbringen. Der Mieter
            hat dies zu dulden, solange der Gebrauch nicht beeinträchtigt wird.
          </p>
        </section>

        <div>
          <Link
            className="text-primary hover:underline"
            href="/pdf/AGB_Privatkunden.pdf"
            target="_blank"
          >
            AGB für Privatkunden als PDF
          </Link>
        </div>
      </main>
    </>
  ),
} as const;
