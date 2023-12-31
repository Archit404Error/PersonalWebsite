import { useIsVisible } from "@/hooks/useIsVisible";
import { useRef } from "react";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
}

export const SectionHeader = ({ subtitle, title }: SectionHeaderProps) => {
  const subtitleRef = useRef(null);
  const subtitleVisible = useIsVisible(subtitleRef);

  const titleRef = useRef(null);
  const titleVisible = useIsVisible(titleRef);

  return (
    <>
      <div
        ref={subtitleRef}
        className={`transition-transform ease-in duration-1000 ${
          subtitleVisible ? "translate-y-0" : "translate-y-20"
        }`}
      >
        <h1 className="text-base md:text-2xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          {subtitle}
        </h1>
      </div>
      <div
        ref={titleRef}
        className={`transition-transform ease-in duration-1000 ${
          titleVisible ? "translate-y-0" : "translate-y-[-80px]"
        }`}
      >
        <h1 className="text-4xl md:text-section md:leading-[6.75rem]">
          {title}
        </h1>
      </div>
    </>
  );
};
