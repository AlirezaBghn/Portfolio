import React from "react";
import TextParalaxEffect from "@/components/global/TextParalaxEffect";
import HeroSection from "./sections/HeroSection";
import LogoSlideSection from "./sections/LogoSlideSection";
import ProjectSection from "./sections/ProjectSection";

import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import SectionBackgrpound1 from "@/components/global/SectionBackgrpound1";
import ContactSection from "./sections/ContactSection";
import FooterSection from "./sections/FooterSection";

const Home: React.FC = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>
      <div className="relative">
        <SectionBackgrpound1 />

        <LogoSlideSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="skills">
          <SkillSection />
        </div>

        <TextParalaxEffect />
        <div id="projects">
          <ProjectSection />
        </div>
        <div id="contact" className="w-full flex justify-center">
          <ContactSection />
        </div>
      </div>

      <FooterSection />
    </>
  );
};

export default Home;
