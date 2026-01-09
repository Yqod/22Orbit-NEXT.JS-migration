"use client";

import React from "react";
import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Karriere = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
    <Navbar />
    <section className="min-h-screen bg-gradient-to-b from-[#0d1321] to-[#1d2d44] flex flex-col items-center justify-center py-24 sm:py-24 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Karriere bei 22Orbit
          </h1>
          <p className="text-[#748cab] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
            Vergiss Zeugnisse und Abschlüsse – wir glauben an Leidenschaft, Neugierde und den Willen, 
            außergewöhnliche digitale Erlebnisse zu schaffen.
          </p>
        </div>

        {/* Philosophy Section */}
        <div className="bg-[#3e5c76]/20 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#748cab]/30 text-center mb-16">
          <div className="text-6xl sm:text-8xl text-[#748cab]/30 mb-6">"</div>
          <blockquote className="font-light text-xl sm:text-2xl md:text-3xl text-[#f0ebd8] mb-6 italic max-w-4xl mx-auto">
            Bei uns zählt nicht, was auf deinem Zeugnis steht. 
            Uns interessiert, wie sehr du für das brennst, was du tust.
          </blockquote>
          <cite className="text-[#748cab] font-bebas text-lg tracking-wider">
            – Unsere Philosophie
          </cite>
        </div>

        {/* What We Believe In */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 text-center">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-3 tracking-wide">
              Leidenschaft über Papier
            </h3>
            <p className="text-[#748cab] text-sm sm:text-base leading-relaxed">
              Ein brennendes Interesse für Technologie ist uns wichtiger als jeder Abschluss. 
              Zeig uns deine Projekte, nicht deine Zeugnisse.
            </p>
          </div>

          <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-3 tracking-wide">
              Lernen & Wachsen
            </h3>
            <p className="text-[#748cab] text-sm sm:text-base leading-relaxed">
              Du musst nicht alles können, aber bereit sein, alles zu lernen. 
              Wir investieren in deine Entwicklung, wenn du die Motivation mitbringst.
            </p>
          </div>

          <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 text-center">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-3 tracking-wide">
              Kreativität & Innovation
            </h3>
            <p className="text-[#748cab] text-sm sm:text-base leading-relaxed">
              Bringe frische Ideen mit und hab keine Angst vor Experimenten. 
              Die besten Lösungen entstehen oft abseits der ausgetretenen Pfade.
            </p>
          </div>
        </div>

        {/* What We're Looking For */}
        <div className="bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-[#748cab]/30 mb-16">
          <h2 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-8 tracking-wide text-center">
            Was wir in dir suchen
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bebas text-lg sm:text-xl text-[#f0ebd8] mb-4 tracking-wide">
                ✨ Deine Superpowers könnten sein:
              </h3>
              <ul className="text-[#748cab] space-y-2 text-sm sm:text-base">
                <li>• Frontend-Magie mit React, HTML, CSS</li>
                <li>• Backend-Wizardry mit Node.js, Express</li>
                <li>• Design-Skills für UX/UI</li>
                <li>• Mobile Development Erfahrung</li>
                <li>• DevOps und Performance-Optimierung</li>
                <li>• Oder ganz andere Talente, die uns überraschen</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bebas text-lg sm:text-xl text-[#f0ebd8] mb-4 tracking-wide">
                🎯 Was wirklich zählt:
              </h3>
              <ul className="text-[#748cab] space-y-2 text-sm sm:text-base">
                <li>• Echte Begeisterung für das, was du tust</li>
                <li>• Neugier und Lernbereitschaft</li>
                <li>• Teamspirit und offene Kommunikation</li>
                <li>• Mut zu eigenen Ideen und Lösungen</li>
                <li>• Qualitätsbewusstsein ohne Perfektionismus</li>
                <li>• Spaß an der Arbeit und positive Energie</li>
              </ul>
            </div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-[#1d2d44]/40 backdrop-blur-md rounded-3xl p-8 sm:p-12 border border-[#748cab]/20 mb-16">
          <h2 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-8 tracking-wide text-center">
            Was wir dir bieten
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2">Persönliche Entwicklung</h4>
              <p className="text-[#748cab] text-sm">Mentoring, Weiterbildung und Raum für Wachstum</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🏡</div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2">Flexible Arbeit</h4>
              <p className="text-[#748cab] text-sm">Remote-Work, flexible Zeiten und Work-Life-Balance</p>
            </div>
            <div>
              <div className="text-3xl mb-3">💰</div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2">Faire Bezahlung</h4>
              <p className="text-[#748cab] text-sm">Leistungsgerechte Vergütung und Erfolgsbasierte Boni</p>
            </div>
            <div>
              <div className="text-3xl mb-3">🎮</div>
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2">Coole Projekte</h4>
              <p className="text-[#748cab] text-sm">Spannende Challenges und modernste Technologien</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-[#f0ebd8] mb-6 tracking-wide">
            Bereit für das Abenteuer?
          </h2>
          <p className="text-[#748cab] text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
            Schick uns eine Initiativbewerbung! Erzähl uns von deinen Projekten, 
            deiner Leidenschaft und warum du Teil unseres Teams werden möchtest.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:karriere@22orbit.de?subject=Initiativbewerbung&body=Hallo 22Orbit Team,%0D%0A%0D%0AIch brenne für... [Erzähl uns deine Geschichte]"
              className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              Initiativbewerbung senden
            </a>
            <a
              href="mailto:hallo@22orbit.de?subject=Fragen zur Karriere"
              className="inline-block bg-[#3e5c76]/20 border-2 border-[#748cab]/50 text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full hover:bg-[#3e5c76]/40 hover:border-[#748cab]/80 transition-all duration-300"
            >
              Fragen stellen
            </a>
          </div>

          <p className="text-[#748cab] text-sm mt-6">
            📧 info@22orbit.de | Keine Anschreiben-Floskeln nötig – sei einfach du selbst!
          </p>
        </div>
      </div>
    </section>
    </>
  );
};

export default Karriere;