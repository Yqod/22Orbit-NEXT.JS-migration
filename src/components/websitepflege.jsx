"use client";

import React from "react";

const pflegePakete = [
  {
    name: "Basic",
    price: "ab 39€/Monat",
    features: [
      "Eine Inhaltsaktualisierung / Monat",
      "Sicherheitsüberwachung",
      "Monatliches Backup",
      "Technischer Support per Telefon / Email",
      "Kleine Fehlerbehebungen"
    ]
  },
  {
    name: "Standard",
    price: "ab 99€/Monat",
    features: [
      "Alles aus Basic",
      "Wöchentliche Backups",
      "Performance-Checks",
      "2 Inhaltsaktualisierungen (Text/Bilder) / Monat",
      "Priorisierter Support"
    ]
  },
  {
    name: "Premium",
    price: "ab 250€/Monat",
    features: [
      "Alles aus Standard",
      "Tägliche Backups",
      "Wöchentliche individuelle Anpassungen",
      "SEO-Überwachung & Reporting",
      "24/7 Notfall-Support"
    ]
  }
];

const WebsitePflege = () => (
  <section className="min-h-[40vh] bg-gradient-to-b from-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-20 px-4">
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-2">
            Website-Pflege & Wartung
          </h2>
          <p className="text-[#f0ebd8] text-lg sm:text-xl font-light mb-2">
            (optional)
          </p>
        
        <p className="text-[#748cab] text-lg sm:text-xl font-light max-w-3xl mx-auto px-4">
          Bleibe sorgenfrei: Wir kümmern uns um Updates, Sicherheit und Support – wähle das passende Paket für deine Website.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {pflegePakete.map((paket) => (
          <div key={paket.name} className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 p-8 flex flex-col items-center">
            <div className="flex items-center justify-between mb-2 w-full">
              <span className="px-3 py-1 bg-[#748cab]/20 text-[#748cab] text-xs rounded-full font-bebas tracking-wide">
                {paket.name}
              </span>
              <span className="font-bebas text-lg text-[#f0ebd8]">
                {paket.price}
              </span>
            </div>
            <ul className="text-[#748cab] text-sm leading-relaxed space-y-2 pl-2 mt-2 w-full">
              {paket.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-[#f0ebd8]">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WebsitePflege;