"use client";

import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const AGB = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-start py-24 sm:py-24 px-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>

        {/* AGB Content */}
        <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#748cab]/30 text-[#f0ebd8] space-y-8">
          
          {/* 1. Geltungsbereich */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              1. Geltungsbereich
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen</p>
              <p>22Orbit Einzelunternehmen<br/>
              Nicolaistraße 5<br/>
              39124 Magdeburg, Deutschland<br/>
              E-Mail: <a href="mailto:info@22orbit.de" className="text-[#748cab] hover:text-[#f0ebd8] transition-colors">info@22orbit.de</a></p>
              <p>22Orbit und dem Kunden über die Erbringung von Dienstleistungen im Bereich Webentwicklung, Software-Entwicklung und verwandter IT-Dienstleistungen.</p>
              <p>Abweichende, entgegenstehende oder ergänzende AGB des Kunden werden nicht Vertragsbestandteil, es sei denn, der Anbieter stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
            </div>
          </div>

          {/* 2. Vertragsschluss */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              2. Vertragsschluss
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Angebote des Anbieters sind freibleibend und unverbindlich, sofern nicht ausdrücklich als verbindlich bezeichnet.</p>
              <p>Der Vertrag kommt durch die schriftliche Auftragsbestätigung des Anbieters oder durch Beginn der Arbeiten zustande.</p>
              <p>Änderungen und Ergänzungen des Vertrages bedürfen der Schriftform.</p>
            </div>
          </div>

          {/* 3. Leistungen */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              3. Leistungen
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Der Anbieter erbringt Dienstleistungen im Bereich:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Webdesign und Webentwicklung</li>
                <li>E-Commerce Lösungen und Online-Shops</li>
                <li>Software-Entwicklung und Programmierung</li>
                <li>Hosting und Wartung</li>
                <li>Beratung und Projektmanagement</li>
              </ul>
              <p>Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Auftragsbestätigung oder dem Projektvertrag.</p>
            </div>
          </div>

          {/* 4. Mitwirkungspflichten des Kunden */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              4. Mitwirkungspflichten des Kunden
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Der Kunde verpflichtet sich zur ordnungsgemäßen Mitwirkung, insbesondere zur:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Rechtzeitigen Bereitstellung aller erforderlichen Inhalte, Daten und Informationen</li>
                <li>Benennung eines fachlich qualifizierten Ansprechpartners</li>
                <li>Zeitnahen Freigabe von Entwürfen und Zwischenergebnissen</li>
                <li>Bereitstellung der erforderlichen technischen Voraussetzungen</li>
              </ul>
              <p>Verzögerungen aufgrund mangelnder Mitwirkung des Kunden berechtigen den Anbieter zur entsprechenden Verlängerung der Lieferzeiten und zur Berechnung der dadurch entstehenden Mehrkosten.</p>
            </div>
          </div>

          {/* 5. Preise und Zahlungsbedingungen */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              5. Preise und Zahlungsbedingungen
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Die Preise verstehen sich netto zzgl. der gesetzlichen Umsatzsteuer zum Zeitpunkt der Leistungserbringung.</p>
              <p>Bei Projekten wird in der Regel eine Anzahlung von 50% bei Auftragserteilung fällig, der Restbetrag bei Projektabschluss.</p>
              <p>Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig.</p>
              <p>Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.</p>
              <p>Der Kunde kann nur mit unbestrittenen oder rechtskräftig festgestellten Forderungen aufrechnen.</p>
            </div>
          </div>

          {/* 6. Lieferzeiten und Leistungsfristen */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              6. Lieferzeiten und Leistungsfristen
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Lieferzeiten und Leistungsfristen sind nur dann verbindlich, wenn sie ausdrücklich als verbindlich vereinbart wurden.</p>
              <p>Lieferzeiten verlängern sich angemessen bei:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Höherer Gewalt</li>
                <li>Unvorhersehbaren Hindernissen</li>
                <li>Fehlender Mitwirkung des Kunden</li>
                <li>Nachträglichen Änderungswünschen</li>
              </ul>
            </div>
          </div>

          {/* 7. Urheberrecht und Nutzungsrechte */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              7. Urheberrecht und Nutzungsrechte
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Alle Arbeiten des Anbieters sind urheberrechtlich geschützt.</p>
              <p>Der Kunde erhält nach vollständiger Bezahlung ein einfaches, nicht übertragbares Nutzungsrecht für den vereinbarten Zweck.</p>
              <p>Änderungen an den Arbeiten durch Dritte sind nur mit schriftlicher Zustimmung des Anbieters gestattet.</p>
              <p>Der Kunde stellt sicher, dass alle von ihm bereitgestellten Inhalte frei von Rechten Dritter sind.</p>
            </div>
          </div>

          {/* 8. Gewährleistung */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              8. Gewährleistung
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Der Anbieter gewährleistet die Erbringung der Leistungen nach dem Stand der Technik.</p>
              <p>Mängel sind unverzüglich schriftlich zu rügen. Die Gewährleistungsfrist beträgt 12 Monate ab Abnahme.</p>
              <p>Bei berechtigten Mängelrügen wird der Anbieter nach seiner Wahl nachbessern oder die Leistung erneut erbringen.</p>
              <p>Schlägt die Nacherfüllung fehl, kann der Kunde nach seiner Wahl Minderung verlangen oder vom Vertrag zurücktreten.</p>
            </div>
          </div>

          {/* 9. Haftung */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              9. Haftung
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Der Anbieter haftet unbeschränkt für Vorsatz und grobe Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit.</p>
              <p>Für sonstige Schäden haftet der Anbieter nur bei Verletzung wesentlicher Vertragspflichten und beschränkt auf den vertragstypischen, vorhersehbaren Schaden.</p>
              <p>Die Haftung für mittelbare Schäden, Folgeschäden und entgangenen Gewinn ist ausgeschlossen.</p>
              <p>Die vorstehenden Haftungsbeschränkungen gelten nicht für Ansprüche nach dem Produkthaftungsgesetz.</p>
            </div>
          </div>

          {/* 10. Vertraulichkeit */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              10. Vertraulichkeit
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Beide Vertragsparteien verpflichten sich, alle im Rahmen der Zusammenarbeit erlangten vertraulichen Informationen geheim zu halten.</p>
              <p>Diese Verpflichtung besteht auch nach Beendigung des Vertragsverhältnisses fort.</p>
              <p>Ausgenommen sind Informationen, die allgemein bekannt sind oder werden.</p>
            </div>
          </div>

          {/* 11. Kündigung */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              11. Kündigung
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Dauerverträge können von beiden Seiten mit einer Frist von 4 Wochen zum Monatsende gekündigt werden.</p>
              <p>Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.</p>
              <p>Bei Kündigung durch den Kunden sind bereits erbrachte Leistungen zu vergüten.</p>
            </div>
          </div>

          {/* 12. Datenschutz */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              12. Datenschutz
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Der Anbieter beachtet die gesetzlichen Bestimmungen zum Datenschutz.</p>
              <p>Details zur Datenverarbeitung finden sich in der <a href="/datenschutz" className="text-[#748cab] hover:text-[#f0ebd8] transition-colors underline">Datenschutzerklärung</a>.</p>
              <p>Bei der Verarbeitung personenbezogener Daten im Auftrag wird ein separater Auftragsverarbeitungsvertrag geschlossen.</p>
            </div>
          </div>

          {/* 13. Schlussbestimmungen */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              13. Schlussbestimmungen
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.</p>
              <p>Gerichtsstand für alle Streitigkeiten ist Magdeburg, sofern der Kunde Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.</p>
              <p>Sollten einzelne Bestimmungen unwirksam sein, wird die Wirksamkeit der übrigen Bestimmungen nicht berührt.</p>
              <p>Änderungen dieser AGB werden dem Kunden rechtzeitig mitgeteilt und gelten als genehmigt, wenn nicht innerhalb von 6 Wochen widersprochen wird.</p>
            </div>
          </div>

          {/* Stand */}
          <div className="border-t border-[#748cab]/20 pt-8">
            <p className="text-[#748cab] text-sm text-center">
              Stand: 16.04.2025 | 22Orbit Einzelunternehmen
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default AGB;