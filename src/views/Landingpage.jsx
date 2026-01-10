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
            alphaParticles={true}
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
        {/* SEO / Schnellzugriff */}
        <section className="relative z-20 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-[#f0ebd8] font-bebas text-3xl tracking-wide">
                Webdesign & Webentwicklung in Magdeburg – 22Orbit
              </h2>
              <div className="text-white/80 mt-4 space-y-4 leading-relaxed">
                <p>
                  Du suchst eine Webagentur in Magdeburg, die nicht nur „schönes Design“ liefert,
                  sondern Ergebnisse? Bei 22Orbit verbinden wir modernes Webdesign mit sauberer
                  Webentwicklung, Performance und SEO-Basics – damit deine Website gefunden wird
                  und sich für Besucher richtig gut anfühlt.
                </p>
                <p>
                  Ob neue Homepage, Landingpage für Kampagnen, Relaunch oder ein kompletter
                  Online-Shop: Wir planen Struktur und Inhalte gemeinsam, bauen schnell und
                  mobilfreundlich, achten auf Core Web Vitals und sorgen für eine solide technische
                  Grundlage. Danach unterstützen wir dich bei Wartung, Weiterentwicklung und beim
                  Ausbau deiner Sichtbarkeit – lokal in Magdeburg und darüber hinaus.
                </p>
                <p>
                  Wenn du schon weißt, was du brauchst, spring direkt zu den passenden Seiten.
                  Wenn nicht: Starte mit unseren Leistungen oder melde dich kurz – wir beraten
                  unverbindlich und geben dir eine klare Einschätzung zu Aufwand, Kosten und dem
                  besten nächsten Schritt.
                </p>
              </div>
            </div>

            <aside className="border border-white/10 rounded-xl p-6 bg-[#1d2d44]/30">
              <h3 className="text-[#f0ebd8] font-bebas text-2xl tracking-wide">
                Schnellzugriff
              </h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <Link href="/services" className="text-white/90 hover:text-white underline">
                    Leistungen & SEO
                  </Link>
                </li>
                <li>
                  <Link href="/webseiten" className="text-white/90 hover:text-white underline">
                    Webseiten / Webdesign
                  </Link>
                </li>
                <li>
                  <Link href="/software" className="text-white/90 hover:text-white underline">
                    Individuelle Software
                  </Link>
                </li>
                <li>
                  <Link
                    href="/socialmediamarketing"
                    className="text-white/90 hover:text-white underline"
                  >
                    Social Media Marketing
                  </Link>
                </li>
                <li>
                  <Link href="/preisliste" className="text-white/90 hover:text-white underline">
                    Preisliste
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white/90 hover:text-white underline">
                    Blog & Guides
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="text-white/90 hover:text-white underline">
                    Kontakt aufnehmen
                  </Link>
                </li>
              </ul>
            </aside>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/webseiten"
              className="border border-white/10 rounded-xl p-5 bg-[#1d2d44]/30 hover:border-white/20 transition-colors"
            >
              <div className="text-[#f0ebd8] font-bebas text-xl tracking-wide">Webdesign</div>
              <div className="text-white/70 mt-1">Homepages, Landingpages, Relaunch.</div>
            </Link>
            <Link
              href="/software"
              className="border border-white/10 rounded-xl p-5 bg-[#1d2d44]/30 hover:border-white/20 transition-colors"
            >
              <div className="text-[#f0ebd8] font-bebas text-xl tracking-wide">Webentwicklung</div>
              <div className="text-white/70 mt-1">Apps, Portale, Schnittstellen.</div>
            </Link>
            <Link
              href="/services"
              className="border border-white/10 rounded-xl p-5 bg-[#1d2d44]/30 hover:border-white/20 transition-colors"
            >
              <div className="text-[#f0ebd8] font-bebas text-xl tracking-wide">SEO & Performance</div>
              <div className="text-white/70 mt-1">Technik, Struktur, Inhalte.</div>
            </Link>
            <Link
              href="/kontakt"
              className="border border-white/10 rounded-xl p-5 bg-[#1d2d44]/30 hover:border-white/20 transition-colors"
            >
              <div className="text-[#f0ebd8] font-bebas text-xl tracking-wide">Beratung</div>
              <div className="text-white/70 mt-1">Kostenloses Erstgespräch.</div>
            </Link>
          </div>
        </section>
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