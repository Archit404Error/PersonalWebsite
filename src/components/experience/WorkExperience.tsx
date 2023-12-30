"use client";

import { SectionHeader } from "../text/SectionHeader";
import { ExperienceCard } from "./ExperienceCard";
import { experienceData } from "./ExperienceData";

export const WorkExperience = () => {
  return (
    <div id="work-experience" className="mt-10 bg-black">
      <div className="grid grid-cols-9">
        <div className="col-start-2 col-span-5 mt-20 mb-10">
          <SectionHeader
            subtitle="Putting My Skills to the Test."
            title="Work Experience"
          />
        </div>
        <div className="col-start-2 col-span-6">
          {experienceData.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
};
