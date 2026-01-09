"use client";

import React from "react";
import Link from "next/link";


const LandingSection5 = () => (
  <section className="min-h-[40vh] bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-28 sm:py-20 px-4">
    <div className="w-full max-w-5xl mx-auto">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
          Für jedes Budget die passende Lösung
        </h2>
        <p className="text-[#f0ebd8] text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto px-4 mb-4">
          Egal ob Start-up, Mittelstand oder Großkonzern – wir entwickeln digitale Lösungen, die zu deinem Budget und deinen Zielen passen.
        </p>
        <p className="text-[#f0ebd8] text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto px-4">
          Unsere Kunden betreuen wir persönlich und zuverlässig – national wie international. Dein Erfolg ist unser Antrieb.
        </p>
      </div>
      <div className="text-center">
         {/* CTA */}
        <div className="text-center">
         <Link
          href="/preisliste"
          className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          Preisliste
        </Link>
        </div>
      </div>
    </div>
  </section>
);

export default LandingSection5;