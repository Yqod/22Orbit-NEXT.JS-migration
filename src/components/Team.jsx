"use client";

import React from "react";

const heart = "/assets/heart.svg";
const rocket = "/assets/rocket.svg";
const united = "/assets/united.svg";


const teamMembers = [
  {
    id: 1,
    name: "Georg Reinicke",
    role: "Entwickler & Teamleiter",
    description: "Bringt Ideen zum Leben, sorgt für reibungslose Abläufe und liebt innovative Lösungen.",
    skills: ["React", "Node.js", "Projektmanagement"],
    image: "/georgMojo1.webp"
  },
  {
    id: 2,
    name: "Kozato Kaizo",
    role: "Frontend & UX",
    description: "Gestaltet moderne, nutzerfreundliche Oberflächen und hat immer ein Auge fürs Detail.",
    skills: ["React", "TypeScript", "UX/UI"],
    image: "/kozatoMojo.webp"
  },
  {
    id: 3,
    name: "Julian Behrend",
    role: "Backend & DevOps",
    description: "Sorgt für sichere Systeme, schnelle Deployments und stabile Server.",
    skills: ["Node.js", "Security", "DevOps"],
    image: "/juliusMojo1.webp"
  },
  
];

const Team = () => {
  return (
    <section id="team-section" className="min-h-screen bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-0 sm:py-0 px-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-4">
            Das Team hinter 22Orbit
          </h2>
          <p className="text-[#f0ebd8] text-lg sm:text-xl font-light max-w-2xl mx-auto px-4">
            Wir sind ein kreatives, eingespieltes Team mit viel Herz, Know-how und Spaß an digitalen Projekten. Persönlich, direkt und immer für dich da!
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center text-center"
            >
              {/* Großes, eckiges Profilbild ohne Kasten */}
                <div className="w-80 h-80 sm:w-[280px] sm:h-[320px] overflow-hidden shadow-2xl mb-6 bg-[#1d2d44]/20 rounded-2xl  border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300 flex items-center justify-center rounded-2xl z-10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[30%_15%] sm: object-[30%_27%] "
                    onError={e => { e.target.style.display = "none"; }}
                  />
                  {!member.image && (
                    <span className="text-6xl">👤</span>
                  )}
                </div>
              <h3 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-1 tracking-wide">{member.name}</h3>
              <p className="text-[#748cab] font-medium text-base mb-2">{member.role}</p>
              <p className="text-[#748cab] text-sm leading-relaxed mb-3">{member.description}</p>
              
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#1d2d44]/80 rounded-2xl p-6 border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bebas text-[#f0ebd8] mb-2">50+</div>
            <p className="text-[#f0ebd8] text-sm">Projekte realisiert</p>
          </div>
          <div className="bg-[#1d2d44]/80 rounded-2xl p-6 border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bebas text-[#f0ebd8] mb-2">5</div>
            <p className="text-[#f0ebd8] text-sm">Jahre Erfahrung</p>
          </div>
          <div className="bg-[#1d2d44]/80 rounded-2xl p-6 border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bebas text-[#f0ebd8] mb-2">24/7</div>
            <p className="text-[#f0ebd8] text-sm">Support verfügbar</p>
          </div>
          <div className="bg-[#1d2d44]/80 rounded-2xl p-6 border border-[#748cab]/30 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-3xl sm:text-4xl font-bebas text-[#f0ebd8] mb-2">100%</div>
            <p className="text-[#f0ebd8] text-sm">Kundenzufriedenheit</p>
          </div>
        </div>

        {/* Team Werte */}
        <div className="bg-[#3e5c76]/10 rounded-3xl p-8 sm:p-12 border border-[#748cab]/20 mb-8">
          <h3 className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] mb-8 tracking-wide text-center">
            Was uns ausmacht
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform duration-300">
              <img src={heart} alt="Leidenschaft" className="w-14 h-14 mx-auto mb-3" />
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">Leidenschaft</h4>
              <p className="text-[#f0ebd8] leading-relaxed text-base">
                Wir lieben, was wir tun – und das spürst du in jedem Projekt.
              </p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <img src={rocket} alt="Innovation" className="w-14 h-14 mx-auto mb-3" />
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">Innovation</h4>
              <p className="text-[#f0ebd8] leading-relaxed text-base">
                Wir denken voraus und bringen frische Ideen in deine digitale Welt.
              </p>
            </div>
            <div className="group hover:scale-105 transition-transform duration-300">
              <img src={united} alt="Teamwork" className="w-14 h-14 mx-auto mb-3" />
              <h4 className="font-bebas text-lg text-[#f0ebd8] mb-2 tracking-wide">Teamgeist</h4>
              <p className="text-[#f0ebd8] leading-relaxed text-base">
                Wir arbeiten Hand in Hand – mit dir und miteinander.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;