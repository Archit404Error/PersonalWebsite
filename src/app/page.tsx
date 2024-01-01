import { Contact } from "@/components/contact/Contact";
import { WorkExperience } from "@/components/experience/WorkExperience";
import { Introduction } from "@/components/intro/Introduction";
import { CodePanel } from "@/components/landing/CodePanel";
import { IntroCard } from "@/components/landing/IntroCard";
import { MatrixCanvas } from "@/components/landing/MatrixCanvas";
import { NavHeader } from "@/components/navigation/NavHeader";
import { Projects } from "@/components/projects/Projects";
import { Skills } from "@/components/skills/Skills";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className="dark text-white flex flex-col items-center justify-center bg-black">
      <NavHeader />
      <MatrixCanvas />
      <div className="z-10 w-full">
        <div id="home" className={"grid grid-cols-2 w-full h-screen p-10"}>
          <IntroCard />
          <CodePanel />
        </div>
        <Introduction />
        <Projects />
        <Skills />
        <WorkExperience />
        <Contact />
      </div>
    </main>
  );
}
