"use client";

import React, { useState } from "react";
import { useEffect } from "react";
import HostingPricing from "./HostingPrice";
import Navbar from "./Navbar";
import WebsitePflege from "./websitepflege";
import FooterLegal from "./FooterLegal";

const pricingData = [
    
  {
    title: "Landingpage",
    categories: [
      {
        name: "Basic",
        price: "ab 350€",
        features: [
          "Modernes Design",
          "Responsiv für alle Geräte",
          "Kontaktformular",
          "Eigene Domain",
          "DSGVO-konform"
        ]
      },
      {
        name: "Standard",
        price: "ab 800€",
        features: [
          "Alles aus Basic",
          "Erweiterte Animationen",
          "SEO-Basisoptimierung",
          "Google Maps Integration",
          "Eigene Domain + Emailpostfach"
        ]
      },
      {
        name: "Premium",
        price: "ab 1.800€",
        features: [
          "Alles aus Standard",
          "Blog/News-Bereich",
          "Individuelle Features",
          "Performance-Optimierung",
          "SEO-Komplettpaket",
          
        ]
      }
    ]
  },
  {
    title: "Website",
    categories: [
      {
        name: "Basic",
        price: "ab 1.200€",
        features: [
          "Modernes Design",
          "Responsiv für alle Geräte",
          "Kontaktformular",
          "Bis zu 3-Seiten",
          "Eigene Domain",
          "DSGVO-konform"
        ]
      },
      {
        name: "Standard",
        price: "ab 2.500€",
        features: [
          "Alles aus Basic",
          "Erweiterte Animationen",
          "SEO-Basisoptimierung",
          "Google Maps Integration",
          "Bis zu 5-Seiten",
          "Eigene Domain + Emailpostfach"
        ]
      },
      {
        name: "Premium",
        price: "ab 4.500€",
        features: [
          "Alles aus Standard",
          "Blog/News-Bereich",
          "Individuelle Features",
          "Performance-Optimierung",
          "SEO-Komplettpaket",
          "Erweiterung auf bis zu 10+ Seiten"
        ]
      }
    ]
  },
  {
    title: "Online-Shop",
    categories: [
      {
        name: "Basic",
        price: "ab 3.500€",
        features: [
          "Startseite & Produktseiten",
          "Warenkorb & Checkout",
          "Zahlungsintegration",
          "SEO-Basisoptimierung",
          "Eigene Domain",
          "DSGVO-konform"
        ]
      },
      {
        name: "Standard",
        price: "ab 5.000€",
        features: [
          "Alles aus Basic",
          "Kundenkonto",
          "Admin-Bereich",
          "Erweiterte Produktfilter",
          "Eigene Domain + Emailpostfach"
        ]
      },
      {
        name: "Premium",
        price: "ab 7.500€",
        features: [
          "Alles aus Standard",
          "Individuelle Features",
          "Performance-Optimierung",
          "SEO-Komplettpaket"
        ]
      }
    ]
  },
  {
    title: "Custom Software",
    categories: [
      {
        name: "Individuell",
        price: "Preis nach Absprache",
        features: [
          "Maßgeschneiderte Entwicklung",
          "Beratung & Konzeption",
          "Agile Umsetzung",
          "Langfristige Betreuung",
          "Kostenlose Erstberatung",
          "DSGVO-konform"
        ]
      }
    ]
  }
];

const tabTitles = pricingData.map(section => section.title);

const PricingComponent = () => {
     useEffect(() => {
            // Warte bis die Komponente vollständig gerendert ist
            requestAnimationFrame(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            });
        }, []);

  const [activeTab, setActiveTab] = useState(tabTitles[0]);

  const activeSection = pricingData.find(section => section.title === activeTab);

  return (
    <>
      <Navbar />
      <section id ="price" className="min-h-[60vh] bg-gradient-to-b from-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-20 px-4">
        <div className="w-full max-w-7xl mx-auto mt-16">
          <div className="text-center mb-16">
              <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
              Preise & Pakete
              </h1>
            <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
              Transparente Preise für Landingpages, Online-Shops und individuelle Software-Lösungen.<br />
              Jedes Projekt ist einzigartig – hier findest du unsere Richtwerte.
            </p>
          </div>

          {/* Tab-Auswahl */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {tabTitles.map(title => (
              <button
                key={title}
                onClick={() => setActiveTab(title)}
                className={`font-bebas text-lg px-6 py-3 rounded-full transition-all duration-200 tracking-wide
                  ${activeTab === title
                    ? "bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] shadow-xl scale-105"
                    : "bg-[#3e5c76]/20 text-[#748cab] hover:bg-[#748cab]/30 hover:text-[#f0ebd8]"}
                `}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Aktive Section */}
          <div>
            <h3 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-8 tracking-wide text-center">
              {activeSection.title}
            </h3>
            <div className={`grid ${activeSection.categories.length > 1 ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1"} gap-10`}>
              {activeSection.categories.map((cat) => (
                <div key={cat.name} className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 p-8 flex flex-col items-center">
                  <div className="flex items-center justify-between mb-2 w-full">
                    <span className="px-3 py-1 bg-[#748cab]/20 text-[#748cab] text-xs rounded-full font-bebas tracking-wide">
                      {cat.name}
                    </span>
                    <span className="font-bebas text-lg text-[#f0ebd8]">
                      {cat.price}
                    </span>
                  </div>
                  <ul className="text-[#748cab] text-sm leading-relaxed space-y-2 pl-2 mt-2 w-full">
                    {cat.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="text-[#f0ebd8]">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {activeSection.title === "Custom Software" && (
                    <div className="mt-8 text-center w-full">
                      <a
                        href="/kontakt"
                        className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-base px-8 py-4 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                      >
                        Unverbindlich anfragen
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <HostingPricing />
      <WebsitePflege />
      <FooterLegal />
    </>
  );
};

export default PricingComponent;