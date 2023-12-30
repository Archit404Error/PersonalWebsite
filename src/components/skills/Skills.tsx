"use client";

import { SectionHeader } from "../text/SectionHeader";
import { SkillCard } from "./SkillCard";
import { skills } from "./skillData";

export const Skills = () => {
  return (
    <div id="skills">
      <div className="grid grid-cols-9 mt-32">
        <div className="col-start-2 col-span-7 xl:col-start-2 xl:col-span-5">
          <SectionHeader
            subtitle="An Abundance of Experience."
            title="Technical Experience"
          />
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
