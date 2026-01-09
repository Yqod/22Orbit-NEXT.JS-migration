"use client";

import React from "react";

const RobertAndWoodman = () => (
	<section className="w-full min-h-[400px] bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321] flex items-center justify-center py-10 px-4 mb-16">
		<div className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 p-0">
			{/* Bildbereich */}
			<div className="flex-1 flex items-center justify-center z-10">
				<img
					src="/mockuprobert.png"
					alt="Robert & Woodman Website Mockup"
					className="w-full max-w-[480px] object-contain"
				/>
			</div>
			{/* Textbereich */}
			<div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
				<h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl text-[#f0ebd8] font-bold tracking-widest mb-6 drop-shadow-lg">
					ROBERT &amp; WOODMAN
				</h2>
				<span className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-xs px-4 py-2 rounded-full mb-4 tracking-widest shadow">
					Holzarbeiten • Kunst
				</span>
				<p className="text-[#748cab] text-base sm:text-lg font-light mb-8 leading-relaxed max-w-md">
					Handgefertigte Holzkunst und Unikate aus der Werkstatt.
					<br />
					<span className="text-[#f0ebd8]">Features:</span> Galerie/Portfolio, Anfragen
					&amp; Auftragsarbeiten, mobile-optimiert, SEO-freundlich und schnell.
				</p>
				<a
					href="https://rober-and-woodman.vercel.app/"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] font-bebas text-lg px-8 py-4 rounded-full shadow-xl tracking-widest hover:scale-105 transition-all duration-300 hover:shadow-2xl"
				>
					Website besuchen
				</a>
			</div>
		</div>
	</section>
);

export default RobertAndWoodman;
