"use client";

import React from "react";
import Link from "next/link";

const meeting = "/assets/meeting.svg";
const task = "/assets/task.svg";
const develope = "/assets/develope.svg";
const consulting = "/assets/consulting.svg";

const partnershipSteps = [
  {
    step: "1",
    title: "Kennenlernen",
    description: "Wir hören zu, verstehen deine Vision und lernen dein Business kennen.",
    icon: <img src={meeting} alt="Kennenlernen" className="w-12 h-12 mx-auto" />
  },
  {
    step: "2",
    title: "Gemeinsam planen",
    description: "Zusammen entwickeln wir die perfekte Strategie für dein Projekt.",
    icon: <img src={task} alt="Gemeinsam planen" className="w-12 h-12 mx-auto" />
  },
  {
    step: "3",
    title: "Transparent entwickeln",
    description: "Du bist immer im Loop – regelmäßige Updates und offene Kommunikation.",
    icon: <img src={develope} alt="Transparent entwickeln" className="w-12 h-12 mx-auto" />
  },
  {
    step: "4",
    title: "Langfristig betreuen",
    description: "Auch nach dem Launch sind wir dein Partner für Updates und Weiterentwicklung.",
    icon: <img src={consulting} alt="Langfristig betreuen" className="w-12 h-12 mx-auto" />
  }
];

const LandingSection3 = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center py-12 sm:py-20 px-4">
      <div className="w-full max-w-7xl mx-auto my-16">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
            Echte Partnerschaft
          </h2>
          <p className="text-[#f0ebd8] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
            Wir glauben an langfristige Partnerschaften, nicht an einmalige Projekte. 
            Dein Erfolg ist unser Erfolg – deshalb arbeiten wir eng zusammen, von der ersten Idee bis weit über den Launch hinaus.
          </p>
        </div>

        {/* Partnership Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partnershipSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line (hidden on mobile) */}
              {index < partnershipSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#748cab] to-[#3e5c76] transform -translate-x-4 z-0"></div>
              )}
              
              {/* Step Card */}
              <div className="relative bg-[#3e5c76]/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 hover:scale-105 text-center z-10 max-w-xs w-full mx-auto lg:max-w-[300px] h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#748cab] to-[#3e5c76] rounded-full text-[#f0ebd8] font-bebas text-xl font-bold mb-4">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4">{step.icon}</div>
                
                {/* Title */}
                <h3 className="font-bebas text-xl sm:text-2xl text-[#f0ebd8] mb-3 tracking-wide">
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#748cab] text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <div className="text-center">
          <Link
          href="/kontakt"
          className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          Werde unser Partner
        </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingSection3;