"use client";

import { RevealWrapper } from "next-reveal";
import { Computer } from "../threejs/Computer";
import { ParallaxOrgs } from "./ParallaxOrgs";

export const Introduction = () => {
  return (
    <div className="grid grid-cols-12 pt-20 pl-3 sm:pl-10 md:pl-20 bg-gradient-to-br from-[#011f3d] via-[#1d4975] to-[#366a9e] z-10 w-full">
      <div className="col-span-12 lg:col-start-2 lg:col-span-7 flex gap-8 flex-col">
        <RevealWrapper delay={0} origin="left">
          <h1 className="text-5xl md:text-7xl font-medium">
            Hi, I&apos;m Archit!
          </h1>
        </RevealWrapper>
        <RevealWrapper delay={200}>
          <p className="text-2xl">
            I&apos;m an avid programmer and entrepreneur currently studing
            Computer Science at Cornell univerity.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={400}>
          <p className="text-2xl">
            I&apos;ve built dozens of projects with tens of thousands of users,
            and as an avid entrepreneur I&apos;m always tinkering and building
            new ideas with the potential to revolutionize the world around me.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={600}>
          <p className="text-2xl">
            On campus I&apos;m President of Cornell AppDev, a team of 50
            students building apps with over 20,000 combined active users,
            helping Cornellians with everything ranging from Dining Hall Menus
            to Transit.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={800}>
          <p className="text-2xl">
            I&apos;ve also grown as an engineer through industry experience.
            Most recently, I worked on HDMaps at Apple, helping deliver maps for
            autonomous systems.
          </p>
        </RevealWrapper>
        <Computer />
      </div>
      <div className="hidden md:block col-start-9 col-span-3">
        <ParallaxOrgs />
      </div>
    </div>
  );
};
