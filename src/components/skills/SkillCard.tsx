"use client";

import { useIsVisibleOnce } from "@/hooks/useIsVisibleOnce";
import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { useRef } from "react";

interface Skill {
  imageUrl: string;
  name: string;
  subtitle: string;
}

export interface SkillCardProps {
  skillType: string;
  skills: Skill[];
  delay?: number;
}

export const SkillCard = ({ skillType, skills, delay }: SkillCardProps) => {
  const cardRef = useRef(null);
  const cardVisible = useIsVisibleOnce(cardRef);

  return (
    <div
      ref={cardRef}
      className={`col-span-12 md:col-span-4 lg:col-span-3 ease-in transition-all ${
        cardVisible ? "translate-y-0" : "translate-y-32"
      } ${cardVisible ? "opacity-100" : "opacity-0"} delay-${delay}`}
    >
      <Card className="bg-[#18181b] text-white">
        <CardHeader className="flex">
          <div className="pl-2 pt-5">
            <p className="text-xl font-semibold">{skillType}</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className="gap-5">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-row gap-5">
              <Image
                alt={`${skill.name} logo`}
                height={40}
                radius="sm"
                src={skill.imageUrl}
                width={40}
              />
              <div className="flex flex-col">
                <p className="text-md">{skill.name}</p>
                <p className="text-sm text-default-500">{skill.subtitle}</p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </div>
  );
};
