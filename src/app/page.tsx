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
import { FileText } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-8 sm:gap-10">
      <Hero />
      <TracingBeamWrapper>
        <div className="flex flex-col gap-12 sm:gap-20 pt-8">
          
          <div className="flex sm:hidden justify-start -mb-4">
            <a 
                href={siteData.personal.resumeUrl}
                target="_blank"
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-zinc-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:bg-white/10 hover:text-white hover:border-white/20 transition-all shadow-sm"
            >
                <FileText className="w-3.5 h-3.5" />
                New Resume
            </a>
          </div>

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

