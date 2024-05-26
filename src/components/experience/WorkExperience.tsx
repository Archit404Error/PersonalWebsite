"use client";

import { SectionHeader } from "../text/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";
import { experienceData } from "./ExperienceData";

export const WorkExperience = () => {
  return (
    <div id="work-experience" className="mt-0 md:mt-10 bg-black">
      <div className="grid grid-cols-12">
        <div className="col-start-2 col-span-10 md:col-start-3 md:col-span-9 3xl:col-start-3 3xl:col-span-9 mt-20 mb-10">
          <SectionHeader
            subtitle="Putting My Skills to the Test."
            title="Work Experience"
          />
        </div>
        <div className="col-start-1 col-span-12 pl-5 pr-5 md:p-0 md:col-start-3 md:col-span-9 macpro:col-start-3 macpro:col-span-8 3xl:col-start-3 3xl:col-span-7">
          {experienceData.map((experience, i) => (
            <ExperienceCard
              key={experience.title + experience.organization}
              {...experience}
              delay={200}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
