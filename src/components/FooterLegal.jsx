"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const FooterLegal = () => {
  const pathname = usePathname();

  // Smooth Scroll Funktion (gleiche wie in Navbar)
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Navbar Höhe berücksichtigen
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollClick = (sectionId, e) => {
    e.preventDefault();
    
    // Wenn wir nicht auf der Landingpage sind, erst dahin navigieren
    if (pathname !== "/") {
      window.location.href = "/#" + sectionId;
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="bg-[#0d1321] border-t border-[#748cab]/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <h3 className="font-bebas text-2xl text-[#f0ebd8] mb-4 tracking-wide">
              22Orbit
            </h3>
            <p className="text-[#748cab] text-sm leading-relaxed mb-4">
              Deine Webagentur aus Magdeburg für moderne Webseiten, Shops und Software-Lösungen. 
              Individuell, innovativ und mit Leidenschaft entwickelt.
            </p>
            <div className="text-[#748cab] text-sm">
              <p>
                E-Mail: <a href="mailto:info@22orbit.de" className="hover:text-[#f0ebd8] transition-colors underline">info@22orbit.de</a>
              </p>
              <p>
                Tel: <a href="tel:+4917664637327" className="hover:text-[#f0ebd8] transition-colors underline">+4917664637327</a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bebas text-lg text-[#f0ebd8] mb-4 tracking-wide">
              Services
            </h4>
            <ul className="space-y-2 text-[#748cab] text-sm">
              <li><Link href="/webseiten" className="hover:text-[#f0ebd8] transition-colors">Landing Pages</Link></li>
              <li><Link href="/webseiten" className="hover:text-[#f0ebd8] transition-colors">Online Shops</Link></li>
              <li><Link href="/software" className="hover:text-[#f0ebd8] transition-colors">Web Applications</Link></li>
              <li><Link href="/software" className="hover:text-[#f0ebd8] transition-colors">Custom Software</Link></li>
              <li><Link href="/software" className="hover:text-[#f0ebd8] transition-colors">Plugins</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bebas text-lg text-[#f0ebd8] mb-4 tracking-wide">
              Unternehmen
            </h4>
            <ul className="space-y-2 text-[#748cab] text-sm">
              <li>
                <button 
                  onClick={(e) => handleScrollClick("team-section", e)}
                  className="hover:text-[#f0ebd8] transition-colors cursor-pointer text-left"
                >
                  Unser Team
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => handleScrollClick("portfolio-section", e)}
                  className="hover:text-[#f0ebd8] transition-colors cursor-pointer text-left"
                >
                  Portfolio
                </button>
              </li>
              <li><Link href="/karriere" className="hover:text-[#f0ebd8] transition-colors">Karriere</Link></li>
              <li><Link href="/kontakt" className="hover:text-[#f0ebd8] transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bebas text-lg text-[#f0ebd8] mb-4 tracking-wide">
              Support
            </h4>
            <ul className="space-y-2 text-[#748cab] text-sm">
              <li><Link href="/preisliste" className="hover:text-[#f0ebd8] transition-colors">Preise</Link></li>
              <li><Link href="/faq" className="hover:text-[#f0ebd8] transition-colors">FAQ</Link></li>
              <li><a href="mailto:info@22orbit.de" className="hover:text-[#f0ebd8] transition-colors">E-Mail Support</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#748cab]/20 pt-8">
          
          {/* Social Media & Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/22orbit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3e5c76]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#3e5c76]/40 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/22orbit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3e5c76]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#3e5c76]/40 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/22orbit.de/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#3e5c76]/20 rounded-full flex items-center justify-center text-[#748cab] hover:text-[#f0ebd8] hover:bg-[#3e5c76]/40 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C8.396 0 7.9.01 6.71.048 5.522.085 4.73.222 4.058.42a5.919 5.919 0 0 0-2.136 1.391A5.919 5.919 0 0 0 .531 4.047c-.198.672-.335 1.464-.372 2.653C.119 7.9.01 8.396.01 12.017s.109 4.117.149 5.551c.037 1.189.174 1.981.372 2.653a5.919 5.919 0 0 0 1.391 2.136 5.919 5.919 0 0 0 2.136 1.391c.672.198 1.464.335 2.653.372 1.434.04 1.93.049 5.551.049s4.117-.01 5.551-.049c1.189-.037 1.981-.174 2.653-.372a5.919 5.919 0 0 0 2.136-1.391 5.919 5.919 0 0 0 1.391-2.136c.198-.672.335-1.464.372-2.653.04-1.434.049-1.93.049-5.551s-.01-4.117-.049-5.551c-.037-1.189-.174-1.981-.372-2.653a5.919 5.919 0 0 0-1.391-2.136A5.919 5.919 0 0 0 19.75.42c-.672-.198-1.464-.335-2.653-.372C16.117.01 15.621.001 12.017.001h0zm-.764 1.969c.375-.001.804-.001 1.201-.001 3.584 0 4.008.015 5.425.052 1.309.06 2.021.278 2.496.46.627.244 1.075.536 1.546 1.006s.762.919 1.006 1.546c.182.475.4 1.187.46 2.496.037 1.417.052 1.841.052 5.425s-.015 4.008-.052 5.425c-.06 1.309-.278 2.021-.46 2.496a4.168 4.168 0 0 1-1.006 1.546 4.168 4.168 0 0 1-1.546 1.006c-.475.182-1.187.4-2.496.46-1.417.037-1.841.052-5.425.052s-4.008-.015-5.425-.052c-1.309-.06-2.021-.278-2.496-.46a4.168 4.168 0 0 1-1.546-1.006 4.168 4.168 0 0 1-1.006-1.546c-.182-.475-.4-1.187-.46-2.496-.037-1.417-.052-1.841-.052-5.425s.015-4.008.052-5.425c.06-1.309.278-2.021.46-2.496a4.168 4.168 0 0 1 1.006-1.546 4.168 4.168 0 0 1 1.546-1.006c.475-.182 1.187-.4 2.496-.46 1.241-.056 1.724-.071 4.224-.071h0zm0 3.356a5.686 5.686 0 1 0 0 11.372 5.686 5.686 0 0 0 0-11.372zm0 9.372a3.686 3.686 0 1 1 0-7.372 3.686 3.686 0 0 1 0 7.372zm7.238-9.647a1.329 1.329 0 1 1-2.658 0 1.329 1.329 0 0 1 2.658 0z"/>
              </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[#748cab] text-sm">
              <Link href="/impressum" className="hover:text-[#f0ebd8] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#f0ebd8] transition-colors">
                Datenschutz
              </Link>
              <Link href="/agb" className="hover:text-[#f0ebd8] transition-colors">
                AGB
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-6 border-t border-[#748cab]/10">
            <p className="text-[#748cab] text-sm">
              © {new Date().getFullYear()} 22Orbit. Alle Rechte vorbehalten.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterLegal;