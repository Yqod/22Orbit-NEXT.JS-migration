"use client";

import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const Datenschutz = () => {
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
            Datenschutzerklärung
          </h1>
        </div>

        {/* Datenschutz Content */}
        <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#748cab]/30 text-[#f0ebd8] space-y-8">
          
          {/* 1. Verantwortlicher */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              1. Verantwortlicher
            </h2>
            <div className="text-[#748cab] leading-relaxed">
              <p>22Orbit Einzelunternehmen</p>
              <p>Nicolaistrße 5</p>
              <p>39124 Magdeburg Deutschland</p>
              <p>E-Mail: <a href="mailto:kontakt@22orbit.de" className="text-[#748cab] hover:text-[#f0ebd8] transition-colors">info@22orbit.de</a></p>
            </div>
          </div>

          

          {/* 3. Begriffe & Rechtsgrundlagen */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              3. Begriffe & Rechtsgrundlagen (Kurzüberblick)
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p><strong>Personenbezogene Daten:</strong> alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.</p>
              <p><strong>Verarbeitung:</strong> jeder Vorgang im Zusammenhang mit personenbezogenen Daten (z. B. Erheben, Speichern, Übermitteln, Löschen).</p>
              <p><strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. a (Einwilligung), b (Vertrag/Anbahnung), c (rechtliche Pflicht), f (berechtigtes Interesse) DSGVO; § 25 TDDDG für das Speichern/Lesen von Informationen auf Endgeräten (z. B. Cookies, Local Storage).</p>
            </div>
          </div>

          {/* 4. Hosting & Bereitstellung */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              4. Hosting & Bereitstellung der Website
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Wir hosten die Website bei Vercel (Vercel Inc., USA; Vercel GmbH, Deutschland). Beim Aufruf der Website werden technisch notwendige Daten verarbeitet, um die Auslieferung der Seiten zu ermöglichen (Server-Logs):</p>
              <p><strong>Datenarten:</strong> IP-Adresse (gekürzt/anonymisiert, sofern möglich), Datum/Zeit, angeforderte URL, Referrer, User-Agent, HTTP-Statuscode.</p>
              <p><strong>Zwecke:</strong> technische Bereitstellung, Stabilität, Sicherheit.</p>
              <p><strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung); ggf. Art. 6 Abs. 1 lit. b DSGVO, wenn erforderlich zur Vertragserfüllung.</p>
              <p><strong>Speicherdauer:</strong> Protokoll- und Runtime-Logs werden planabhängig kurzzeitig gespeichert (Hobby ca. 1 Stunde, Pro ca. 1 Tag, Enterprise ca. 3 Tage).</p>
            </div>
          </div>

          {/* 5. Cookies */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              5. Cookies & Einwilligungsmanagement
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Wir verwenden Cookies und vergleichbare Technologien. Dazu gehören 
              sowohl technisch notwendige Cookies, die für den Betrieb unserer Website 
              erforderlich sind, als auch einwilligungsbedürftige Cookies für 
              Marketing- und Analysezwecke (z. B. im Rahmen von Google Ads). 
                Wir setzen ein Einwilligungs-Management-Tool (Cookie-Banner) ein. 
              Hierüber werden Sie beim erstmaligen Besuch unserer Website informiert 
              und können entscheiden, ob Sie in die Nutzung von Marketing- und 
              Analyse-Cookies einwilligen möchten. Ihre Auswahl können Sie jederzeit 
              über die „Cookie-Einstellungen“ im Footer ändern.</p>
            <p><strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der sicheren Bereitstellung); § 25 Abs. 2 TDDDG.</p>
              <p><strong>Consent-Banner:</strong> nicht erforderlich, da keine einwilligungsbedürftigen Technologien eingesetzt werden.</p>
            </div>
          </div>

          {/* 6. Kontaktaufnahme */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              6. Kontaktaufnahme (Formular, E-Mail, Telefon)
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Wenn Sie uns kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten (z. B. Name, E-Mail, Nachricht, Telefon), um Ihr Anliegen zu bearbeiten.</p>
              <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertrag/Anbahnung) oder lit. f DSGVO (Kommunikation).</p>
              <p><strong>Speicherdauer:</strong> 12 Monate oder entsprechend gesetzlicher Aufbewahrungsfristen.</p>
            </div>
          </div>

          {/* 7-11. Nicht verwendete Dienste */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              7-11. Nicht verwendete Dienste
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-2">
              <p>• <strong>Newsletter:</strong> Wir versenden keine Newsletter.</p>
              <p>• <strong>Webanalyse:</strong> Wir setzen keine Webanalyse-Dienste ein.</p>
              <p>• <strong>Marketing-Technologien:</strong> Wir setzen keine Marketing- oder Remarketing-Technologien ein.</p>
              <p>• <strong>Einbindungen Dritter:</strong> Es erfolgen keine externen Einbindungen.</p>
              <p>• <strong>Online-Shop:</strong> Nicht vorhanden.</p>
            </div>
          </div>

          {/* 12. Datenübermittlungen */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              12. Datenübermittlungen in Drittländer
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              Wenn Anbieter außerhalb der EU/des EWR eingesetzt werden (z. B. in den USA), stellen wir geeignete Garantien sicher (z. B. EU-US Data Privacy Framework oder Standardvertragsklauseln).
            </p>
          </div>

          {/* 13. Empfänger */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              13. Empfänger & Kategorien von Empfängern
            </h2>
            <div className="text-[#748cab] leading-relaxed">
              <p>• Interne Stellen (z. B. Support, IT)</p>
              <p>• Auftragsverarbeiter (z. B. Hosting, E-Mail) – AV-Verträge geschlossen</p>
              <p>• Behörden/Steuerberater/Rechtsberatung, wenn rechtlich erforderlich</p>
            </div>
          </div>

          {/* 14. Speicherdauer */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              14. Speicherdauer
            </h2>
            <div className="text-[#748cab] leading-relaxed">
              <p>• Server-Logs: 14 Tage</p>
              <p>• Kontaktanfragen: 12 Monate</p>
              <p>• Vertrags-/Steuerunterlagen: 6 bzw. 10 Jahre nach HGB/AO</p>
            </div>
          </div>

          {/* 15. Pflicht zur Bereitstellung */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              15. Pflicht zur Bereitstellung
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              Die Bereitstellung personenbezogener Daten ist teilweise gesetzlich/vertraglich erforderlich (z. B. Rechnungsdaten). Ohne diese Daten ist eine Nutzung mancher Dienste nicht möglich.
            </p>
          </div>

       
          {/* 17. Ihre Rechte */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              17. Ihre Rechte
            </h2>
            <div className="text-[#748cab] leading-relaxed space-y-3">
              <p>Sie haben das Recht auf Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21).</p>
              <p><strong>Widerruf von Einwilligungen:</strong> jederzeit mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO).</p>
              <p><strong>Beschwerderecht:</strong> Sie können sich bei einer Datenschutzaufsichtsbehörde beschweren.</p>
              <p><strong>Kontakt für Betroffenenrechte:</strong> info@22orbit.de</p>
            </div>
          </div>

          {/* 18. Änderungen */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              18. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              Wir passen diese Erklärung an, wenn sich Rechtslage, Dienste oder Verarbeitungen ändern. Die aktuelle Fassung finden Sie stets hier.
            </p>
          </div>

          {/* 19. Cookie-/Technologie-Übersicht */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              19. Cookie-/Technologie-Übersicht
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              Derzeit setzen wir keine einwilligungsbedürftigen Cookies oder vergleichbaren Technologien ein. Entsprechend ist kein Consent-Banner erforderlich.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Datenschutz;