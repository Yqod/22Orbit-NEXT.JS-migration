"use client";

import RotatingText from "./RotatingText";


const Hero = () => {
    return (
        <div
  className="relative bg-gradient-to-b from-[#0d1321] via-[#1d2d44] to-[#0d1321]"
  style={{ clipPath: "polygon(100% 0, 100% 94%, 64% 100%, 0 91%, 0 0)" }}
>
    

    <section className="overflow-hidden pt-12 pb-6 lg:pt-[48px] lg:pb-[10px]">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-screen lg:max-h-screen">
            <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                <div className="h-full px-4 pt-16 pb-4 sm:px-6 lg:px-24 2xl:px-32 lg:pt-40 lg:pb-14">
                    <div className="flex flex-col justify-between flex-1 h-full pt-12 lg:pt-16">
                        <div>
                            <h1 className="font-bebas text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6">Webseiten aus Magdeburg<br />
                            
                               Die <span className="inline-block rounded-lg bg-gradient-to-r from-[#748cab] to-[#3e5c76] text-[#f0ebd8] text-black px-2 py-0.5">
                                <RotatingText
                                 texts={['Begeistern', 'Inspirieren', 'mitreißen', 'faszinieren', 'verbinden', 'verkaufen', 'bewegen']}
                                 mainClassName="px-1 sm:px-1 md:px-2  text-[#f0ebd8] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                                 staggerFrom={"last"}
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                  exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                               splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                               transition={{ type: "spring", damping: 20, stiffness: 200 }}
                              rotationInterval={2000}
                            />
                            </span>
                            </h1>
                            <p className="text-[#748cab] text-lg font-light mb-2 leading-relaxed">
                             <span className="font-bebas text-xl text-[#f0ebd8]">Webentwicklung</span> im Herzen <span className="font-bebas text-xl text-[#f0ebd8]">Magdeburgs</span> – von der Landing Page bis zur individuellen Software: Webdesign, Entwicklung und SEO aus einer Hand.
                                 </p>

                        </div>

                        <div className="mt-8 border-t-2 border-[#f0ebd8] lg:mt-12 sm:mt-20">
                            <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                                <p className="text-base font-semibold text-[#f0ebd8]">Kunden vertrauen uns</p>
                                <div className="flex items-center gap-8 mt-8 sm:mt-0 justify-center">
                                <a
                                    href="https://www.google.com/search?client=firefox-b-d&sca_esv=c0ca25e8fd581d08&tbm=lcl&sxsrf=AE3TifOi2-gCihEglyXSi3Wy0Nsq4seAxQ:1757593849842&q=22Orbit+Rezensionen&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDY0MDa0MDO1MDewtDAyMTYxMd3AyPiKUdjIyL8oKbNEISi1KjWvODM_LzVvESs2UQA96ccgRwAAAA&rldimm=13103186587098243445&hl=de-DE&sa=X&ved=2ahUKEwjv9NCo29CPAxXi1wIHHR0xGfkQ9fQKegQIVBAH&biw=1440&bih=768&dpr=2#lkt=LocalPoiReviews"
                                    title="Google Rezensionen"
                                    className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                                    role="button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img className="w-auto rounded h-14 sm:h-16" src="/Google5.png" alt="Google Rezensionen" />
                                </a>
                                <a
                                    href="https://de.trustpilot.com/review/22orbit.de"
                                    title="Trustpilot Rezensionen"
                                    className="block transition-all duration-200 hover:opacity-80 focus:opacity-80"
                                    role="button"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img className="w-auto rounded h-8 sm:h-12" src="/Trustpilo1.png" alt="Trustpilot Rezensionen" />
                                </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1 pt-6">
    <div className="lg:absolute lg:bottom-0 lg:left-0 -mt-24 sm:-mt-12 md:-mt-8 lg:mt-0 lg:translate-y-40 md:translate-y-32 sm:translate-y-24">
        <img className="w-full" src="/webentwicklungWebdesignMagdeburg2(2)1.webp" alt="Webentwicklung für Magdeburg" />
    </div>
</div>
        </div>
    </section>
</div>

    )
}

export default Hero;