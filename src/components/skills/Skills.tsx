"use client";

import { RevealWrapper } from "next-reveal";
import { SkillCard } from "./SkillCard";
import { skills } from "./skillData";

export const Skills = () => {
  return (
    <div className="mt-52">
      <div className="grid grid-cols-9">
        <div className="col-start-2 col-span-5">
          <RevealWrapper origin="bottom">
            <h1 className="text-3xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              An Abundance of Experience.
            </h1>
          </RevealWrapper>
          <RevealWrapper origin="top">
            <h1 className="text-section">Technical Experience</h1>
          </RevealWrapper>
        </div>
        <div className="col-start-2 col-span-7 flex flex-row">
          <div className="grid grid-cols-12 gap-5">
            {skills.map((skillProps, idx) => (
              <SkillCard
                key={skillProps.skillType}
                {...skillProps}
                delay={idx * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
