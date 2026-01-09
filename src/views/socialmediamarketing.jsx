"use client";

import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useLottie } from "lottie-react";
import lottiLeistungSocialMedia from "../assets/lotti/lottiLeistungSocialMedia.json";
import Link from "next/link";
import FooterLegal from "../components/FooterLegal";

const serviceList = [
    {
        title: "Social Media Strategie",
        emoji: "📊",
        description:
            "Entwicklung einer maßgeschneiderten Social Media Strategie, die deine Zielgruppe erreicht und deine Marke stärkt.",
    },
    {
        title: "Content Creation",
        emoji: "🎨",
        description:
            "Professionelle Inhalte für alle Plattformen - von Posts und Stories bis hin zu Videos und Grafiken.",
    },
    {
        title: "Community Management",
        emoji: "💬",
        description:
            "Aktive Betreuung deiner Community mit authentischer Kommunikation und professionellem Kundenservice.",
    },
    {
        title: "Influencer Marketing",
        emoji: "🌟",
        description:
            "Strategische Partnerschaften mit relevanten Influencern für maximale Reichweite und Glaubwürdigkeit.",
    },
    {
        title: "Paid Advertising",
        emoji: "🎯",
        description:
            "Zielgerichtete Werbekampagnen auf Facebook, Instagram, LinkedIn und anderen Plattformen für optimale ROI.",
    },
    {
        title: "Analytics & Reporting",
        emoji: "📈",
        description:
            "Detaillierte Erfolgsanalysen und regelmäßige Reports zur kontinuierlichen Optimierung deiner Kampagnen.",
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

const SocialMediaMarketingLeistung = () => {
    useEffect(() => {
        setTimeout(() => window.scrollTo(0, 0), 0);
    }, []);

     const { View } = useLottie({
            animationData: lottiLeistungSocialMedia,
            loop: true,
            autoplay: true,
            style: { width: 350, height: 400 }
        });

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
                            <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest drop-shadow-lg mb-6">
                                Social Media Marketing
                            </h2>
                            <p className="text-lg sm:text-xl text-[#748cab] font-light max-w-3xl mx-auto leading-relaxed">
                                Wir bringen deine Marke auf die relevanten Social Media Plattformen und sorgen für 
                                authentische Reichweite, echte Interaktion und nachhaltiges Wachstum deiner Community.
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
                                <div className="text-center mt-20 p-8">
                                    <div className="w-24 h-24 bg-gradient-to-r from-[#748cab] to-[#3e5c76] rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                                        <span className="text-3xl">{View}</span>
                                    </div>
                                    <h3 className="font-bebas text-2xl text-[#f0ebd8] tracking-wide mt-32 mb-4">
                                        Authentisches Marketing
                                    </h3>
                                    <p className="text-[#748cab] font-light">
                                        Echte Verbindungen statt gekaufte Follower – 
                                        wir setzen auf nachhaltiges Wachstum und authentische Interaktion.
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
                            Bereit für mehr Reichweite?
                        </h3>
                        <p className="text-[#748cab] mb-8 max-w-2xl mx-auto">
                            Lass uns deine Social Media Präsenz auf das nächste Level bringen. 
                            Gemeinsam entwickeln wir eine Strategie, die deine Zielgruppe begeistert.
                        </p>
                        <a
                            href="/kontakt"
                            className="inline-block py-4 px-8 rounded-full bg-gradient-to-r from-[#748cab] to-[#3e5c76] hover:scale-105 text-[#f0ebd8] duration-300 font-bebas tracking-wide shadow-xl text-lg"
                        >
                            Strategie entwickeln
                        </a>
                    </div>
                </div>
            </section>
            <FooterLegal />
        </>
    );
};

export default SocialMediaMarketingLeistung;