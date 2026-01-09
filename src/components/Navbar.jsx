"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth Scroll Funktion
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
    setIsMenuOpen(false); // Mobile Menu schließen
  };

  // Scroll to top Funktion
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Unser Team", href: "team-section", type: "scroll" },
    { label: "Portfolio", href: "portfolio-section", type: "scroll" },
    { label: "Preise", href: "/preisliste", type: "route" },
    { label: "Leistungen", href: "/services", type: "route" },
    { label: "Kontakt", href: "/kontakt", type: "route" },
    ];

  const handleClick = (item, e) => {
    if (item.type === "scroll") {
      e.preventDefault();
      
      // Wenn wir nicht auf der Landingpage sind, erst dahin navigieren
      if (pathname !== "/") {
        router.push("/#" + item.href);
      } else {
        scrollToSection(item.href);
      }
    } else if (item.type === "home") {
      e.preventDefault();
      
      // Wenn wir bereits auf der Landingpage sind, nur nach oben scrollen
      if (pathname === "/") {
        scrollToTop();
      } else {
        // Sonst zur Landingpage navigieren und dann nach oben scrollen
        router.push("/");
        setTimeout(() => scrollToTop(), 100);
      }
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 fixed top-0 left-0 z-20 bg-[#1d2d44]/80 backdrop-blur-md shadow-lg">
      {/* Branding */}
      <button
        onClick={(e) => handleClick({ type: "home" }, e)}
        className="font-bebas text-2xl sm:text-3xl text-[#f0ebd8] tracking-widest hover:text-[#748cab] transition-colors cursor-pointer"
      >
        <img
          src="/22OrbitLogoPngWhite.png" // Pfad zu deinem Logo im public-Ordner
          alt="22Orbit Logo"
          className="h-10 w-auto mr-2"
        />
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-8">
        {navItems.map((item, idx) => (
          <li key={idx}>
            {item.type === "route" ? (
              <Link
                href={item.href}
                className="text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                onClick={(e) => handleClick(item, e)}
                className="text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
  className="md:hidden flex items-center justify-center w-10 h-10"
  onClick={toggleMenu}
  aria-label={isMenuOpen ? "Menü schließen" : "Menü öffnen"}
>
  {isMenuOpen ? (
    // Close (X) Icon als SVG
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-[#f0ebd8]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="6" y1="18" x2="18" y2="6" />
    </svg>
  ) : (
    // Hamburger Icon
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-[#f0ebd8]"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  )}
</button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#1d2d44]/95 backdrop-blur-md border-t border-[#748cab]/20 md:hidden transition-all duration-300 ${
          isMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <ul className="py-4">
          {navItems.map((item, idx) => (
            <li key={idx}>
              {item.type === "route" ? (
                <Link
                  href={item.href}
                  className="block px-8 py-3 text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] hover:bg-[#3e5c76]/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={(e) => handleClick(item, e)}
                  className="block w-full text-left px-8 py-3 text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] hover:bg-[#3e5c76]/20 transition-all duration-200"
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          style={{ top: '100px' }}
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;