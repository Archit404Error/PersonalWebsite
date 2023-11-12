import { Introduction } from "@/components/intro/Introduction";
import { CodePanel } from "@/components/landing/CodePanel";
import { IntroCard } from "@/components/landing/IntroCard";
import { MatrixCanvas } from "@/components/landing/MatrixCanvas";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <MatrixCanvas />
      <div className="snap-y snap-mandatory h-screen overflow-scroll z-10 w-full h-screen">
        <div className="snap-center">
          <div className={"grid grid-cols-2 w-full h-screen p-10 snap-center"}>
            <IntroCard />
            <CodePanel />
          </div>
        </div>

        <div className="z-10 w-full h-screen snap-center">
          <Introduction />
        </div>
      </div>
    </main>
  );
}
