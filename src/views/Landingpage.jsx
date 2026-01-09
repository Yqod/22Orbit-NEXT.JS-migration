"use client";

import Particles from '../components/Galaxy.jsx';
import Hero from '../components/Hero.jsx';
import Navbar from '../components/Navbar.jsx';
import LandingSection1 from '../components/LandingSection1.jsx';
import LandingSection2 from '../components/LandingSection2.jsx';
import LandingSection3 from '../components/LandingSection3.jsx';
import LandingSection4 from '../components/LandingSection4.jsx'; 
import LandingSection5 from '../components/LandingSection5.jsx'; 
import Team from '../components/Team.jsx';
import Footer from '../components/FooterLegal.jsx';
import CTA from '../components/CTA.jsx';
import { useEffect } from 'react';
import About22Orbit from '../components/About22Orbit.jsx';
import Bewertungen from '../components/bewertung.jsx';

function Landingpage() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, []);

  return (
    <div className="bg-[#0d1321] w-full relative scroll-smooth">
        
        {/* Particles als fixer Hintergrund */}
        <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
          <Particles
            particleColors={['#f0ebd8', '#748cab']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={130}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false} />
        </div>
        {/* Navbar mit extra hohem z-index */}
        <div className="fixed top-0 left-0 w-full z-30">
          <Navbar
            items={[
              { href: "#leistungen", label: "Leistungen" },
              { href: "#referenzen", label: "Referenzen" },
              { href: "#kontakt", label: "Kontakt" },
            ]} />
        </div>
        {/* Hero Section über Particles */}
        <div className="relative z-20">
          <Hero />
        </div>
        {/* Restlicher Content */}
        <LandingSection1 />
        <About22Orbit />

        <Team />
        <LandingSection2 />
        <LandingSection4 />
        <LandingSection5 />
        <LandingSection3 />
        <Bewertungen />
        <CTA />
        <Footer />
      </div>
  );
}

export default Landingpage;