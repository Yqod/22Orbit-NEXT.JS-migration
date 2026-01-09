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
import Link from "next/link";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function Landingpage({ latestPosts = [] }) {
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

        {/* Neu im Blog */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-[#f0ebd8] font-bebas text-3xl tracking-wide">
                Neu im Blog
              </h2>
              <p className="text-[#748cab] mt-2 max-w-2xl">
                Frische Guides und praktische Tipps rund um Webseiten, Software, SEO und
                Online-Marketing.
              </p>
            </div>

            <Link
              href="/blog"
              className="text-[#f0ebd8] font-bebas text-lg tracking-wide hover:text-[#748cab] transition-colors"
            >
              Alle Artikel ansehen
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {(latestPosts || []).slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="border border-white/10 rounded-xl p-6 hover:border-white/20 transition-colors bg-[#1d2d44]/30"
              >
                <div className="text-white/60 text-sm">{formatDate(post.date)}</div>
                <h3 className="text-white text-xl font-semibold mt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-white/90 hover:text-white"
                  >
                    {post.title}
                  </Link>
                </h3>
                {post.excerpt ? (
                  <p className="text-white/80 mt-3">{post.excerpt}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <CTA />
        <Footer />
      </div>
  );
}

export default Landingpage;