"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const faqData = [
  {
    id: 1,
    category: "Allgemein",
    question: "Was macht 22Orbit genau?",
    answer: "Wir entwickeln moderne Webseiten, Online-Shops, Web-Anwendungen und maßgeschneiderte Software-Lösungen. Von der ersten Idee bis zur finalen Umsetzung – alles aus einer Hand."
  },
  {
    id: 2,
    category: "Allgemein",
    question: "Wie lange dauert ein typisches Projekt?",
    answer: "Das hängt vom Umfang ab: Eine Landing Page ist oft in 1-2 Wochen fertig, ein Online-Shop braucht 3-6 Wochen, und komplexe Web-Anwendungen können 2-4 Monate dauern. Wir geben dir vorab eine realistische Zeitschätzung."
  },
  {
    id: 3,
    category: "Preise",
    question: "Was kostet eine Website?",
    answer: "Eine einfache Landing Page startet bei ca. 800€, Online-Shops ab 3.500€ und individuelle Web-Anwendungen ab 5.000€. Jedes Projekt ist einzigartig – daher erstellen wir dir ein maßgeschneidertes Angebot."
  },
  {
    id: 4,
    category: "Preise",
    question: "Wie funktioniert die Bezahlung?",
    answer: "In der Regel 50% Anzahlung bei Projektstart und 50% bei Fertigstellung. Bei größeren Projekten können wir auch Teilzahlungen vereinbaren. Keine versteckten Kosten – alles transparent."
  },
  {
    id: 5,
    category: "Technisch",
    question: "Welche Technologien nutzt ihr?",
    answer: "Wir setzen auf moderne, bewährte Technologien: React für Frontend, Node.js und Express für Backend, SQLite/Sequelize für Datenbanken. Bei besonderen Anforderungen auch Rust für Performance-kritische Komponenten."
  },
  {
    id: 6,
    category: "Technisch",
    question: "Sind die Websites responsive und SEO-optimiert?",
    answer: "Selbstverständlich! Alle unsere Websites sind vollständig responsive (funktionieren auf allen Geräten) und SEO-optimiert. Performance und Suchmaschinenoptimierung sind bei uns Standard."
  },
  {
    id: 7,
    category: "Service",
    question: "Bietet ihr auch Wartung und Support an?",
    answer: "Ja! Wir bieten langfristige Wartungsverträge an und sind auch nach dem Launch dein Partner. Updates, Sicherheits-Patches und kleine Änderungen gehören zu unserem Service."
  },
  {
    id: 8,
    category: "Service",
    question: "Kann ich meine Website selbst bearbeiten?",
    answer: "Auf Wunsch bauen wir ein einfaches Content-Management-System ein, mit dem du Texte und Bilder selbst ändern kannst. Oder wir übernehmen das für dich – ganz wie du möchtest."
  },
  {
    id: 9,
    category: "Prozess",
    question: "Wie läuft ein Projekt ab?",
    answer: "1. Kennenlernen & Briefing, 2. Konzept & Design-Entwurf, 3. Entwicklung mit regelmäßigen Updates, 4. Testing & Feedback, 5. Launch & Übergabe. Du bist immer im Loop!"
  },
  {
    id: 10,
    category: "Prozess",
    question: "Was muss ich als Kunde bereitstellen?",
    answer: "Hauptsächlich deine Inhalte (Texte, Bilder, Logo) und ein klares Briefing deiner Wünsche. Den Rest übernehmen wir. Falls du noch kein Logo oder professionelle Texte hast, helfen wir auch dabei."
  },
  {
    id: 11,
    category: "Sonstiges",
    question: "Arbeitet ihr nur mit großen Unternehmen?",
    answer: "Nein! Wir arbeiten genauso gern mit Startups, Freelancern und kleinen Unternehmen. Jedes Projekt ist uns wichtig, egal ob groß oder klein."
  },
  {
    id: 12,
    category: "Sonstiges",
    question: "Kann ich auch nur Teilbereiche beauftragen?",
    answer: "Absolut! Du brauchst nur ein neues Design? Oder nur die Programmierung? Oder nur Beratung? Wir bieten auch einzelne Services an und arbeiten gern mit deinen bestehenden Partnern zusammen."
  }
];

const categories = ["Alle", "Allgemein", "Preise", "Technisch", "Service", "Prozess", "Sonstiges"];

const FAQ = () => {
    useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  const [activeCategory, setActiveCategory] = useState("Alle");
  const [openFAQ, setOpenFAQ] = useState(null);

  const filteredFAQs = activeCategory === "Alle" 
    ? faqData 
    : faqData.filter(faq => faq.category === activeCategory);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-start py-24 sm:py-24 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Häufige Fragen
          </h1>
          <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
            Hier findest du Antworten auf die wichtigsten Fragen rund um unsere Services,
            Preise und den Entwicklungsprozess.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bebas text-sm sm:text-base tracking-wide transition-all duration-300 ${activeCategory === category
                  ? "bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] shadow-lg"
                  : "bg-[#3e5c76]/20 text-[#748cab] hover:bg-[#3e5c76]/40 hover:text-[#f0ebd8]"}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-16">
          {filteredFAQs.map((faq) => (
            <div
              key={faq.id}
              className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full p-6 sm:p-8 text-left flex justify-between items-center hover:bg-[#3e5c76]/30 transition-all duration-300"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-1 bg-[#748cab]/20 text-[#748cab] text-xs rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="font-bebas text-lg sm:text-xl text-[#f0ebd8] tracking-wide">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-[#748cab]/20 flex items-center justify-center transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-45' : 'rotate-0'}`}>
                    <span className="text-[#f0ebd8] text-xl font-light">+</span>
                  </div>
                </div>
              </button>

              <div className={`transition-all duration-300 ease-in-out ${openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <div className="border-t border-[#748cab]/20 pt-6">
                    <p className="text-[#748cab] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#748cab]/30 text-center">
          <h2 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-4 tracking-wide">
            Deine Frage nicht dabei?
          </h2>
          <p className="text-[#748cab] text-lg mb-6 max-w-2xl mx-auto">
            Kein Problem! Schreib uns einfach eine Nachricht und wir antworten dir
            so schnell wie möglich. Keine Frage ist zu klein oder zu groß.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:hallo@22orbit.de?subject=Frage aus FAQ"
              className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              Frage stellen
            </a>
            <a
              href="/kontakt"
              className="inline-block bg-[#3e5c76]/20 border-2 border-[#748cab]/50 text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full hover:bg-[#3e5c76]/40 hover:border-[#748cab]/80 transition-all duration-300"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FAQ;