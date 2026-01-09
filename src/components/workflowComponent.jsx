"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Link from "next/link";

const services = [
  {
    title: "Webseiten",
    lottie: "rocket",
    angebote: ["Landingpages", "Websites", "Unternehmensseiten", "Online-Shops"],
    description: "Individuell – modern und responsiv. Dein Webauftritt wird zum digitalen Erlebnis, maßgeschneidert für deine Zielgruppe.",
    link: "/webseiten"
  },
  {
    title: "Individuelle Software",
    lottie: "software",
    angebote: ["Webanwendungen", "Schnittstellen", "Tools", "Automatisierungen", "AI-Lösungen"],
    description: "Maßgeschneidert – exakt auf deine Anforderungen zugeschnitten. Wir lösen komplexe Aufgaben mit smarten Lösungen, die wirklich zu dir passen.",
    link: "/software"
  },
  {
    title: "Social Media Marketing",
    lottie: "socialMedia",
    angebote: ["Strategie", "Content", "Kampagnen", "Wachstum"],
    description: "Wir bringen deine Marke auf die relevanten Plattformen und sorgen für Reichweite, Interaktion und Wachstum.",
    link: "/socialmediamarketing"
  },
];

const lottieImporters = {
  rocket: () => import("../assets/lotti/lottiRocketDisplay22Orbit.json"),
  software: () => import("../assets/lotti/lottiSoftware.json"),
  socialMedia: () => import("../assets/lotti/lottiSocialMedia.json"),
};

const lottieStyle = { width: 150, height: 150 };

const ServiceItem = ({ service }) => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const importer = lottieImporters[service.lottie];
      if (!importer) return;
      const mod = await importer();
      if (!cancelled) setAnimationData(mod.default);
    })();
    return () => {
      cancelled = true;
    };
  }, [service.lottie]);

  return (
    <div className="bg-[#3e5c76]/20 backdrop-blur-sm shadow-xl rounded-xl h-full border border-[#748cab]/30 hover:border-[#748cab]/60 transition-all duration-300 flex flex-col">
      <div className="p-6 md:p-12 flex-1 flex flex-col">
        <div className="w-[150px] h-[150px]  flex justify-center items-center mb-6 ">
          {animationData ? (
            <Lottie animationData={animationData} loop autoplay style={lottieStyle} />
          ) : null}
        </div>
        <h4 className="text-2xl mb-6 font-bold font-bebas text-[#f0ebd8] tracking-wider">{service.title}</h4>
        
        {/* Angebote Liste */}
        <div className="mb-4">
          {service.angebote.map((angebot) => (
            <span key={angebot} className="flex items-center mb-2">
              <span className="text-[#748cab]  font-bold mr-2">•</span>
              <span className="text-[#f0ebd8] text-sm font-light">{angebot}</span>
            </span>
          ))}
        </div>
        
        <p className="text-[#748cab] leading-[1.8] text-sm font-light flex-1">{service.description}</p>
        
        {/* Button */}
        <div className="mt-6">
          <Link
            href={service.link}
            className="inline-block py-2 px-4 rounded-full bg-gradient-to-r from-[#748cab] to-[#3e5c76] hover:scale-105 text-[#f0ebd8] duration-300 font-bebas tracking-wide shadow-lg text-lg"
          >
            Mehr erfahren
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  return (
    <section className="py-28 md:py-28 bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] text-[#f0ebd8] relative z-[1]">
      <div className="absolute bottom-0 left-0 right-0 h-1/2 w-full bg-[#748cab] bg-opacity-10 -z-[1]" />
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-6 justify-between mb-12">
          <div className="max-w-xl">
            <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-widest">
              Unsere Leistungen
            </h1>
            <p className="text-lg text-[#748cab] font-light">
              Webdesign, Webentwicklung und Online Marketing für Unternehmen in Magdeburg und Umgebung – von <Link href="/webseiten" className="text-[#f0ebd8] hover:text-[#748cab] transition-colors">Webseiten</Link> über <Link href="/software" className="text-[#f0ebd8] hover:text-[#748cab] transition-colors">Software</Link> bis zu <Link href="/socialmediamarketing" className="text-[#f0ebd8] hover:text-[#748cab] transition-colors">Social Media</Link>.
            </p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
              href="/kontakt"
              className="py-3 px-7 rounded-full bg-gradient-to-r from-[#748cab] to-[#3e5c76] hover:scale-105 text-[#f0ebd8] duration-300 font-bebas tracking-wide shadow-xl"
            >
              Projekt starten
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-6 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <div className="col-span-6 md:col-span-3 lg:col-span-2" key={i}>
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;