"use client";

import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import FooterLegal from "../components/FooterLegal";

const serviceList = [
    {
        title: "Webseiten & Landing Pages",
        emoji: "🚀",
        description:
            "Hochkonvertierende Webseiten, die deine Besucher zu Kunden machen. Optimiert für Performance und Conversion-Rate.",
    },
    {
        title: "Online Shops",
        emoji: "🛒",
        description:
            "Vollständige E-Commerce-Lösungen mit modernem Design, sicheren Zahlungsabwicklungen und intuitivem Produktmanagement.",
    },
    {
        title: "Webdesign",
        emoji: "🎨",
        description:
            "Kreatives und benutzerfreundliches Design, das deine Marke perfekt repräsentiert und deine Zielgruppe anspricht.",
    },
    {
        title: "Responsive Design",
        emoji: "📱",
        description:
            "Perfekte Darstellung auf allen Geräten - Desktop, Tablet und Smartphone. Optimiert für beste Nutzererfahrung.",
    },
    {
        title: "Performance",
        emoji: "⚡",
        description:
            "Blitzschnelle Ladezeiten und optimierte Performance für bessere Rankings und zufriedene Nutzer.",
    },
    {
        title: "SEO-Optimiert",
        emoji: "🔍",
        description:
            "Suchmaschinenoptimiert von Anfang an. Structured Data, Meta-Tags und technische SEO-Optimierung inklusive.",
    },
];



const ServiceItem = ({ service, isRightAlign }) => (
    <div className={`flex items-start mt-12 ${isRightAlign ? "lg:flex-row-reverse lg:text-right" : ""}`}>
        <div className={`flex-shrink-0 ${isRightAlign ? "ml-4" : "mr-4"}`}>
            <span
                className={`bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] w-16 h-16 rounded-full text-2xl inline-flex justify-center items-center shadow-lg`}
            >
                {service.emoji}
            </span>
        </div>
        <div className="flex-1">
            <h4 className="text-2xl font-bebas tracking-wide text-[#f0ebd8] ml-4 mb-4">{service.title}</h4>
            <p className="text-[#748cab] font-light leading-relaxed">{service.description}</p>
        </div>
    </div>
);


const WebseitenLeistung = () => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 0);
    }, []);

    useEffect(() => {
        let cancelled = false;
        (async () => {
            const mod = await import("../assets/lotti/lottiLeistungWebsite4.json");
            if (!cancelled) setAnimationData(mod.default);
        })();
        return () => {
            cancelled = true;
        };
    }, []);


    return (
        <>
            <Navbar />
            <section className="py-28 md:py-28 bg-gradient-to-b from-[#1d2d44] to-[#0d1321] text-[#f0ebd8] min-h-screen">
                <div className="container px-4 mx-auto max-w-7xl">
                    {/* Zurück Button */}
                    <div className="mb-8">
                        <Link
                            href="/services"
                            className="inline-flex items-center text-[#748cab] hover:text-[#f0ebd8] transition-colors duration-300 font-light"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Zurück zu den Leistungen
                        </Link>
                    </div>
                    <div className="flex items-center justify-center mb-12 sm:mb-16">
                        <div className="w-full max-w-4xl text-center">
                            <h1 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest drop-shadow-lg mb-6">
                                Webdesign & Webseiten Entwicklung
                            </h1>
                            <p className="text-lg sm:text-xl text-[#748cab] font-light max-w-3xl mx-auto leading-relaxed">
                                Von der ersten Idee bis zur fertigen Website – wir entwickeln moderne,
                                responsive und SEO-optimierte Webseiten für Unternehmen in Magdeburg und Umgebung,
                                die deine Marke stärken und deine Ziele erreichen.
                                <span className="block mt-3">
                                    Wenn du zusätzlich ein Kundenportal, Tool oder eine Web-App brauchst: <Link href="/software" className="text-[#f0ebd8] hover:text-[#748cab] transition-colors">individuelle Softwareentwicklung</Link>.
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 lg:gap-12 pt-12">
                        {/* Linke Spalte */}
                        <div className="col-span-3 lg:col-span-1">
                            <div className="lg:my-12">
                                {serviceList.slice(0, 3).map((service, i) => (
                                    <ServiceItem service={service} key={i} isRightAlign={false} />
                                ))}
                            </div>
                        </div>
                        
                        {/* Mittleres Bild */}
                        <div className="col-span-3 lg:col-span-1">
                            <div
                                className="bg-gradient-to-br from-[#3e5c76]/30 to-[#748cab]/20 backdrop-blur-sm rounded-2xl h-full min-h-[400px] border border-[#748cab]/30 flex items-center justify-center"
                            >
                                <div className="text-center p-8">
                                    <div className="w-60 h-60   flex items-center justify-center mb-6 mx-auto ">
                                        {animationData ? (
                                            <Lottie
                                                animationData={animationData}
                                                loop
                                                autoplay
                                                style={{ width: 240, height: 240 }}
                                            />
                                        ) : null}
                                    </div>
                                    <h3 className="font-bebas text-2xl text-[#f0ebd8] tracking-wide mb-4">
                                        Individuelle Entwicklung
                                    </h3>
                                    <p className="text-[#748cab] font-light">
                                        Jede Website wird individuell programmiert – 
                                        kein Baukasten, sondern maßgeschneiderte Lösungen.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Rechte Spalte */}
                        <div className="col-span-3 lg:col-span-1">
                            <div className="lg:my-12">
                                {serviceList.slice(3, 6).map((service, i) => (
                                    <ServiceItem service={service} key={i} isRightAlign={true} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center mt-16 pt-12 border-t border-[#748cab]/20">
                        <h3 className="font-bebas text-3xl text-[#f0ebd8] tracking-wide mb-6">
                            Bereit für deine neue Website?
                        </h3>
                        <p className="text-[#748cab] mb-8 max-w-2xl mx-auto">
                            Lass uns gemeinsam deine Vision umsetzen. Kontaktiere uns für ein 
                            unverbindliches Beratungsgespräch und erfahre, wie wir dein Projekt realisieren können.
                        </p>
                        <a
                            href="/kontakt"
                            className="inline-block py-4 px-8 rounded-full bg-gradient-to-r from-[#748cab] to-[#3e5c76] hover:scale-105 text-[#f0ebd8] duration-300 font-bebas tracking-wide shadow-xl text-lg"
                        >
                            Jetzt Projekt starten
                        </a>
                    </div>
                </div>
            </section>
            <FooterLegal />
        </>
    );
};

export default WebseitenLeistung;