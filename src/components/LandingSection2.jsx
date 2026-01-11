"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";

const heart = "/assets/heart.svg";
const rocket = "/assets/rocket.svg";
const individuell = "/assets/individuell.svg";
const fastdeliver = "/assets/fastdeliver.svg";
const handshake = "/assets/handshake.svg";
const wrench = "/assets/wrench.svg";


const reasons = [
  {
    icon: <img src={wrench} alt="Alles aus einer Hand" className="w-14 h-14 mx-auto" />,
    title: "Alles aus einer Hand",
    description: "Design, Technik, Hosting und Support – du hast nur einen Ansprechpartner und wir kümmern uns um alles."
  },
  {
    icon: <img src={rocket} alt="Innovativ & modern" className="w-14 h-14 mx-auto" />,
    title: "Innovativ & modern",
    description: "Deine Website wird mit aktuellen Technologien und frischen Ideen umgesetzt – damit du immer einen Schritt voraus bist."
  },
  {
    icon: <img src={individuell} alt="Individuell für dein Unternehmen" className="w-14 h-14 mx-auto" />,
    title: "Individuell für dein Unternehmen",
    description: "Wir entwickeln Lösungen, die genau zu deinem Unternehmen und deinen Zielen passen – keine Website von der Stange."
  },
  {
    icon: <img src={heart} alt="Echte Leidenschaft" className="w-14 h-14 mx-auto" />,
    title: "Echte Leidenschaft",
    description: "Wir lieben, was wir tun – und das merkt man an jedem Projekt. Persönlich, engagiert und zuverlässig."
  },
  {
    icon: <img src={fastdeliver} alt="Schnell online" className="w-14 h-14 mx-auto" />,
    title: "Schnell online",
    description: "Kurze Umsetzungszeiten, klare Kommunikation und ein reibungsloser Ablauf – damit du schnell startest."
  },
  {
    icon: <img src={handshake} alt="Partnerschaftlich & fair" className="w-14 h-14 mx-auto" />,
    title: "Partnerschaftlich & fair",
    description: "Wir begleiten dich von der ersten Idee bis zur fertigen Website und sind auch danach für dich da."
  },
  
];

const LandingSection2 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const scrollSpeed = 0.8;
    let isAnimating = true;
    let isInteracting = false; 
    // dragging state is handled via scrollContainer events

    const animate = () => {
      if (!isAnimating || !scrollContainer || isInteracting) return;

      scrollPosition += scrollSpeed;
      const containerWidth = scrollContainer.scrollWidth / 2;
      
      if (scrollPosition >= containerWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start the animation loop
    animationId = requestAnimationFrame(animate);

    // Desktop Mouse Events
    const handleMouseEnter = () => {
      isInteracting = true;
      scrollContainer.style.overflowX = 'auto';
      scrollContainer.style.cursor = 'grab';
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      isInteracting = false;
      scrollContainer.style.overflowX = 'auto'; 
      scrollContainer.style.cursor = 'pointer';
      
      scrollPosition = scrollContainer.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => {
      if (isInteracting) {
        scrollContainer.style.cursor = 'grabbing';
      }
    };

    const handleMouseUp = () => {
      if (isInteracting) {
        scrollContainer.style.cursor = 'grab';
      }
    };

    // Touch Events für Mobile
    const handleTouchStart = () => {
      isInteracting = true;
      scrollContainer.style.overflowX = 'auto';
      cancelAnimationFrame(animationId);
    };

    const handleTouchEnd = () => {
      isInteracting = false;
      scrollContainer.style.overflowX = 'auto'; 
      
      scrollPosition = scrollContainer.scrollLeft;
      animationId = requestAnimationFrame(animate);
    };

    // Desktop Events
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseup', handleMouseUp);

    // Touch Events
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      isAnimating = false;
      cancelAnimationFrame(animationId);
      
      if (scrollContainer) {
        // Desktop Events
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('mousedown', handleMouseDown);
        scrollContainer.removeEventListener('mouseup', handleMouseUp);
        
        // Touch Events
        scrollContainer.removeEventListener('touchstart', handleTouchStart);
        scrollContainer.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, []);

  return (
    <section className="min-h-[80vh] sm:min-h-screen bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex flex-col items-center justify-center  py-12 sm:py-20 px-4">
      <div className="w-full max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-4 sm:mb-6">
          Warum 22Orbit?
        </h2>
        <p className="text-[#f0ebd8] text-lg sm:text-xl md:text-2xl font-light mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          Software-Entwicklung ist mehr als nur Code – es ist unsere Leidenschaft. 
          Wir brennen für innovative Lösungen und digitale Erlebnisse, die begeistern.
        </p>

        {/* Auto-Scroll Container */}
        <div 
          ref={scrollRef}
          className="overflow-x-auto overflow-y-hidden cursor-pointer transition-all duration-300 touch-pan-x mb-12 sm:mb-16"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x'
          }}
        >
          <div className="inline-flex space-x-4 sm:space-x-6 md:space-x-8 pl-4 pr-4" style={{ width: 'max-content' }}>
            {/* Doppelte Items für nahtloses Looping */}
            {[...reasons, ...reasons].map((reason, index) => (
              (() => {
                const isDuplicate = index >= reasons.length;

                return (
              <div 
                key={`${reason.title}-${index}`} 
                aria-hidden={isDuplicate ? "true" : undefined}
                className="flex-shrink-0 w-72 sm:w-80 md:w-80 bg-[#3e5c76]/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-[#748cab]/20 hover:border-[#748cab]/50 hover:bg-[#3e5c76]/40 transition-all duration-300 hover:scale-105 select-none"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{reason.icon}</div>
                {isDuplicate ? (
                  <div className="font-bebas text-lg sm:text-xl text-[#f0ebd8] mb-2 sm:mb-3 tracking-wide">
                    {reason.title}
                  </div>
                ) : (
                  <h3 className="font-bebas text-lg sm:text-xl text-[#f0ebd8] mb-2 sm:mb-3 tracking-wide">
                    {reason.title}
                  </h3>
                )}
                <p className="text-[#748cab] text-sm sm:text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
                );
              })()
            ))}
          </div>
        </div>
            {/* CTA */}
      <div className="text-center">
        <Link
          href="/services"
          className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-5 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          entdecke unser Angebot
        </Link>
      </div>
        
        </div>
      </section>
  );
};

export default LandingSection2;