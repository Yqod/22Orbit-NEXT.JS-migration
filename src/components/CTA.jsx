"use client";

import React from "react";
import Link from "next/link";

const CTA = () => (
  <section className="min-h-[70vh] bg-gradient-to-b from-[#0d1321] via-[#1d2d44]  flex flex-col items-center justify-center py-34 sm:py-30 px-4">
    <div className="w-full max-w-4xl mx-auto text-center">
      <div className="mb-12 sm:mb-16">
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
          Noch Fragen oder Zweifel?
        </h2>
        <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto px-4 mb-6">
          Solltest du dir noch nicht sicher sein, ob wir der richtige Ansprechpartner für dein Projekt sind, lass uns einfach mal unverbindlich und kostenlos telefonieren.
        </p>
        <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-3xl mx-auto px-4">
          Oder fülle unser Kontaktformular aus – wir freuen uns darauf, von deinem Projekt zu hören!
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
        <a
          href="tel:+4917664637327"
          className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          <span className="inline-block animate-bounce">📞</span> Kostenlos anrufen
        </a>
       <Link
          href="/kontakt"
          className="inline-block bg-transparent border-2 border-[#748cab] text-[#748cab] hover:bg-[#748cab] hover:text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300"
        >
          ✉️ Kontaktformular
        </Link>
      </div>
    </div>
  </section>
);

export default CTA;