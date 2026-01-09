"use client";

import React from "react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const Impressum = () => {
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
            Impressum
          </h1>
          <p className="text-[#748cab] text-lg">
            Angaben gemäß § 5 DDG
          </p>
        </div>

        {/* Impressum Content */}
        <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#748cab]/30 text-[#f0ebd8] space-y-8">
          
          {/* Betreiber */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              Betreiber / Unternehmen
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              22Orbit
            </p>
          </div>

          {/* Anschrift */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              Anschrift
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              Nicolaistraße 5<br />
              39124 Magdeburg<br />
              Deutschland
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              Kontakt
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              E-Mail: <a href="mailto:info@22orbit.de" className="text-[#748cab] hover:text-[#f0ebd8] transition-colors">info@22orbit.de</a>
            </p>
          </div>

       

          {/* Verantwortlich für den Inhalt */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              Name: Jan-Georg Reinicke<br />
              Anschrift: Nicolaistraße 5, 39124 Magdeburg, Deutschland
            </p>
          </div>

          {/* EU-Streitschlichtung */}
          <div>
            <h2 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              EU‑Streitschlichtung
            </h2>
            <p className="text-[#748cab] leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#748cab] hover:text-[#f0ebd8] transition-colors ml-1"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Impressum;