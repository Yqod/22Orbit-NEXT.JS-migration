"use client";



const Gplusgportfolio = () => (
  <section className="w-full min-h-[400px] bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex items-center justify-center py-10 px-4 mb-16">
    <div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
      {/* Textbereich */}
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1">
        <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#f0ebd8] font-bold tracking-widest mb-6 drop-shadow-lg">
          Grün + Grund
        </h2>
        <span className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-xs px-4 py-2 rounded-full mb-4 tracking-widest shadow">
          Unternehmenswebsite • Portfolio
        </span>
        <p className="text-[#748cab] text-base sm:text-lg font-light mb-8 leading-relaxed max-w-md">
          Responsive Website, die die Dienstleistungen und das Portfolio von Grün + Grund präsentiert.
          <br />
          <span className="text-[#f0ebd8]">Features:</span> Portfolio-Grid, Kontaktformular, Animationen, mobile Optimierung.
        </p>
        <a
          href="https://grünplusgrund.de/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
        >
          Website besuchen
        </a>
      </div>
      {/* Bildbereich */}
      <div className="flex-1 flex items-center justify-center order-1 md:order-2 z-10">
        <img
          src="/grünplusgrundmockup.png"
          alt="GplusG Website Mockup"
          className="w-full max-w-[480px]  object-contain"
        />
      </div>
    </div>
  </section>
);

export default Gplusgportfolio;