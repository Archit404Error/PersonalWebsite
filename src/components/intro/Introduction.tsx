"use client";

import { Link } from "@nextui-org/react";
import { RevealWrapper } from "next-reveal";
import { ParallaxOrgs } from "./ParallaxOrgs";

export const Introduction = () => {
  return (
    <div className="grid grid-cols-12 pt-20 pb-20 pl-3 sm:pl-10 md:pl-20 sm:pr-10 lg:pr-0 bg-gradient-to-br from-[#011f3d] via-[#1d4975] to-[#366a9e] z-10 w-full">
      <div className="col-span-12 lg:col-start-2 lg:col-span-7 flex gap-8 flex-col">
        <RevealWrapper delay={0} origin="left">
          <h1 className="text-5xl md:text-7xl 2xl:text-8xl font-medium">
            Hi, I&apos;m Archit!
          </h1>
        </RevealWrapper>
        <RevealWrapper delay={200}>
          <p className="text-2xl 2xl:text-3xl 3xl:text-4xl">
            I&apos;m an avid programmer and entrepreneur who recently graduated
            from Cornell University with a degree in Computer Science and minor
            in Applied Mathematics.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={400}>
          <p className="text-2xl 2xl:text-3xl 3xl:text-4xl">
            I&apos;ve built dozens of{" "}
            <Link
              href="#projects"
              className="text-2xl 2xl:text-3xl 3xl:text-4xl text-[#63a7f2]"
            >
              projects
            </Link>{" "}
            with tens of thousands of users, and as an avid entrepreneur
            I&apos;m always tinkering and building new ideas with the potential
            to revolutionize the world.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={600}>
          <p className="text-2xl 2xl:text-3xl 3xl:text-4xl">
            On campus, I was President of{" "}
            <Link
              href="https://cornellappdev.com"
              target="_blank"
              className="text-2xl 2xl:text-3xl 3xl:text-4xl text-[#63a7f2]"
            >
              Cornell AppDev
            </Link>
            , a team of 50 students building apps with over 15,000 combined
            active users. Our apps solve Cornellians&apos; daily headaches,
            aiding students in everything from browsing dining hall menus to
            campus transit.
          </p>
        </RevealWrapper>
        <RevealWrapper delay={800}>
          <p className="text-2xl 2xl:text-3xl 3xl:text-4xl">
            I&apos;ve also grown as an engineer through industry experience.
            Most recently, I worked on HDMaps at{" "}
            <Link
              href="https://www.apple.com/maps/"
              target="_blank"
              className="text-2xl 2xl:text-3xl 3xl:text-4xl text-[#63a7f2]"
            >
              Apple
            </Link>
            , helping deliver maps for autonomous systems. Now, I&apos;m working
            as a Software Engineer at{" "}
            <Link
              href="https://stripe.com"
              target="_blank"
              className="text-2xl 2xl:text-3xl 3xl:text-4xl text-[#63a7f2]"
            >
              Stripe
            </Link>
            !
          </p>
        </RevealWrapper>
      </div>
      <div className="hidden lg:block col-start-9 col-span-3">
        <ParallaxOrgs />
      </div>
    </div>
  );
};
