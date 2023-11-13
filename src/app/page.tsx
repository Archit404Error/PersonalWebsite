import { Introduction } from "@/components/intro/Introduction";
import { CodePanel } from "@/components/landing/CodePanel";
import { IntroCard } from "@/components/landing/IntroCard";
import { MatrixCanvas } from "@/components/landing/MatrixCanvas";
import { Projects } from "@/components/projects/Projects";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-[#0e1116]">
      <MatrixCanvas />
      <div className="z-10 w-full">
        <div className={"grid grid-cols-2 w-full h-screen p-10"}>
          <IntroCard />
          <CodePanel />
        </div>

        <div className="z-10 w-full h-screen">
          <Introduction />
        </div>

        <Projects />
      </div>
    </main>
  );
}
