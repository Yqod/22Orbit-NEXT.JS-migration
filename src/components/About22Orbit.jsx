"use client";

import React from "react";

const About22Orbit = () => (
  <section id="About22Orbit" className="w-full bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] py-2 px-4 my-0 flex items-center justify-center pt-2">
    <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-0 md:gap-20">
      {/* Mobile: Überschrift, Bild, Text */}
      <div className="block md:hidden w-full max-w-xl mx-auto text-center mb-12">
        <h2 className="font-bebas text-4xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">
          Wer wir sind ? 
        </h2>
       
        <p className="text-[#f0ebd8] text-lg font-light mb-6 leading-relaxed">
          <span className="font-bebas text-xl text-[#f0ebd8]">22Orbit</span> ist eine Webagentur im Herzen <span className="font-bebas text-xl text-[#f0ebd8]">Magdeburgs</span>,mit einer großen Liebe zur <span className="font-bebas text-xl text-[#f0ebd8]">Webentwicklung</span> und digitalen Innovation.
        </p>
         <img
          src="astronautNachUnten.png"
          alt="Webentwicklung für deine Stadt"
          className="w-[100px] max-w-full object-contain drop-shadow-2xl mb-0 mx-auto"
          style={{ pointerEvents: "none"}}
        />
      </div>
      {/* Desktop: Bild und Text nebeneinander */}
      <div className="flex-1 flex justify-end items-center hidden md:flex">
        <img
          src="AstronautLaptop.png"
          alt="Astronaut mit Laptop"
          className="w-[340px] max-w-full md:w-[400px] lg:w-[480px] object-contain drop-shadow-2xl"
          style={{ pointerEvents: "none" }}
        />
      </div>
      <div className="flex-1 w-full max-w-xl mx-auto text-center md:max-w-none md:mx-0 md:text-left px-4 py-8 sm:px-0 sm:py-0 hidden md:block">
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl text-[#f0ebd8] font-bold tracking-widest mb-6 drop-shadow-lg">
          Wer wir sind ?
        </h2>
        <p className="text-[#f0ebd8] text-lg sm:text-2xl font-light mb-6 leading-relaxed">
          <span className="font-bebas text-2xl text-[#f0ebd8]">22Orbit</span> ist eine Webagentur im Herzen <span className="font-bebas text-2xl text-[#f0ebd8]">Magdeburgs</span>, mit einer großen Liebe zur <span className="font-bebas text-2xl text-[#f0ebd8]">Webentwicklung</span> und digitalen Innovation.
        </p>
      </div>
    </div>
  </section>
);

export default About22Orbit;