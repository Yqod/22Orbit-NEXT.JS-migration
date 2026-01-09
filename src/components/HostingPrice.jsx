"use client";

import React from "react";

const hostingPlans = [
  {
    name: "Basic",
    price: "ab 8€/Monat",
    features: [
      "1 Domain inklusive (.de)",
      "SSL-Zertifikat",
      "E-Mail-Weiterleitung",
      "bis zu 2 GB Speicher",
      "Monatliche Backups"
    ]
  },
  {
    name: "Standard",
    price: "ab 16€/Monat",
    features: [
      "Alles aus Basic",
      "Eigene E-Mail-Postfächer",
      "bis zu 5 GB Speicher",
      "Performance-Optimierung",
      "Premium-Support",
      "Wöchentliche Backups"
    ]
  },
  {
    name: "Premium",
    price: "ab 24€/Monat",
    features: [
      "Alles aus Standard",
      "Unbegrenzte Domains",
      "Unbegrenzter Speicher",
      "24/7 Support & Monitoring",
      "Tägliche Backups"
    ]
  }
];

const HostingPricing = () => (
  <section className="min-h-[40vh] bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-20 px-4">
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
          Laufende Kosten: Domain & Hosting
        </h2>
        <p className="text-[#748cab] text-lg sm:text-xl font-light max-w-3xl mx-auto px-4">
          Zu jeder Website bieten wir passende Hosting-Pakete – sicher, schnell und zuverlässig.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {hostingPlans.map((plan) => (
          <div key={plan.name} className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 p-8 flex flex-col items-center">
            <div className="flex items-center justify-between mb-2 w-full">
              <span className="px-3 py-1 bg-[#748cab]/20 text-[#748cab] text-xs rounded-full font-bebas tracking-wide">
                {plan.name}
              </span>
              <span className="font-bebas text-lg text-[#f0ebd8]">
                {plan.price}
              </span>
            </div>
            <ul className="text-[#748cab] text-sm leading-relaxed space-y-2 pl-2 mt-2 w-full">
              {plan.features.map((feature, idx) => (
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

export default HostingPricing;