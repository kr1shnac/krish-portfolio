import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Achievements from "@/components/Achievements";
import BeyondKeyboard from "@/components/BeyondKeyboard";
import { TracingBeamWrapper } from "@/components/TracingBeamWrapper";

import { siteData } from "@/data/siteData";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <Hero />
      <TracingBeamWrapper>
        <div className="flex flex-col gap-12 sm:gap-20 pt-8">
          <Experience />
          <Skills />
          <Projects />
          <CurrentlyBuilding />
          <Achievements />
          <Education />
          <BeyondKeyboard />
        </div>
      </TracingBeamWrapper>
    </div>
  );
}

