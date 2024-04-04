"use client";

import { SectionHeader } from "../text/SectionHeader";
import { SkillCard } from "./SkillCard";
import { skills } from "./skillData";

export const Skills = () => {
  return (
    <div id="skills" className="mt-[-1rem]">
      <div className="grid grid-cols-9 mt-32">
        <div className="mb-5 md:mb-0 col-start-2 col-span-7 xl:col-start-2 xl:col-span-5 3xl:col-start-3 3xl:col-span-3">
          <SectionHeader
            subtitle="An Abundance of Experience."
            title="Technical Experience"
          />
        </div>
        <div className="col-start-2 col-span-7 3xl:col-start-3 3xl:col-span-4 flex flex-row">
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
