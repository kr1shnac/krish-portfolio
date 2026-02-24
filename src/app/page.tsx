import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Extracurriculars from "@/components/Extracurriculars";
import Blogs from "@/components/Blogs";
import { TracingBeamWrapper } from "@/components/TracingBeamWrapper";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      {/* TracingBeam wraps all content sections after Hero */}
      <TracingBeamWrapper>
        <div className="flex flex-col gap-24 pt-8">
          <Projects />
          <Achievements />
          <Education />
          <Extracurriculars />
          <Experience />
          <Blogs />
        </div>
      </TracingBeamWrapper>
    </div>
  );
}
