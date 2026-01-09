"use client";

import React from "react";
import Link from "next/link";

const blitz = "/assets/blitz.svg";
const shoppingCart = "/assets/shoppingCart.svg";
const webdesign = "/assets/webdesign.svg";

const features = [
  {
    icon: <img src={blitz} alt="Schnell & Responsiv" className="w-9 h-9 text-white-500" />,
    title: "Schnell & Responsiv",
    desc: "Deine Website lädt blitzschnell und sieht auf jedem Gerät perfekt aus.",
  },
  {
    icon: <img src={shoppingCart} alt="Von Landingpage bis Shop" className="w-9 h-9 text-white-500" />,
    title: "Von Landingpage bis Shop",
    desc: "Von einfachen Landingpages bis zur Individuellen Software – alles aus einer Hand.",
  },
  {
    icon: <img src={webdesign} alt="Design nach Maß" className="w-9 h-9 text-white-500" />,
    title: "Design nach Maß",
    desc: "Modernes, einzigartiges Design, das zu deinem Unternehmen passt.",
  },
];

function LandingSection1() {
  return (
    <section
      id="section1"
      className="min-h-screen bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center my-0 py-24 sm:py-28 px-4"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 mb-12">
        {/* Textbereich links, auf Mobil zentriert */}
        <div className="flex-1 w-full max-w-xl mx-auto text-center md:max-w-none md:mx-0 md:text-left mb-4 md:mb-0">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Unsere Stärken
          </h2>
          <p className="text-[#f0ebd8] text-lg sm:text-xl md:text-2xl font-light mb-6 leading-relaxed">
            Wir verbinden Kreativität mit technischer Exzellenz und schaffen digitale Lösungen, 
            die nicht nur gut aussehen, sondern auch perfekt funktionieren.
          </p>
        </div>
        {/* Features rechts untereinander */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-4 sm:p-5 border border-[#748cab]/30 hover:border-[#748cab]/60 hover:bg-[#3e5c76]/30 transition-all duration-300 hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="text-2xl sm:text-3xl mb-2">{feature.icon}</div>
              <h3 className="font-bebas text-base sm:text-xl text-[#f0ebd8] mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-[#f0ebd8] text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <div className="text-center">
        <Link
          href="/services"
          className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          unsere Leistungen
        </Link>
      </div>
    </section>
  );
}

export default LandingSection1;