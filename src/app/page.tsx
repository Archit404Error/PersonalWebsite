import { CodePanel } from "@/components/CodePanel";
import { IntroCard } from "@/components/IntroCard";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className={"grid grid-cols-2 w-full p-10"}>
        <IntroCard />
        <CodePanel />
      </div>
    </main>
  );
}
