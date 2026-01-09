import { Link } from "react-router-dom";
import Koenigskristall from "./Koenigskristall";
import HkiPortfolio from "./hki";
import SperryPortfolio from "./sperry";
import Gplusgportfolio from "./gplusg";
import RobertAndWoodman from "./RobertAndWoodman";

const LandingSection4 = () => {
  return (
    <>
      <section id="portfolio-section" className="w-full  py-16 px-4">
        <div className="max-w-5xl mx-auto text-center mb-4 sm:mb-12">
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f0ebd8] font-bold tracking-widest drop-shadow-lg mb-6 ">
            Unsere Projekte
          </h2>
          <p className="text-[#f0ebd8] text-lg sm:text-xl md:text-2xl font-light max-w-4xl mx-auto px-4">
            Ausgewählte Projekte aus unserem Orbit. <br />
            
          </p>
        </div>
      </section>
      <Koenigskristall className="z-[10001]" />
      <Gplusgportfolio className="z-[10001]" />
      <RobertAndWoodman className="z-[10001]" />
      <HkiPortfolio className="z-[10001]" />
      <SperryPortfolio className="z-[10001]" />
      </>
  );
};

export default LandingSection4; 