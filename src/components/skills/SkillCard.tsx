"use client";

import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { RevealWrapper } from "next-reveal";

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
  return (
    <RevealWrapper className={"col-span-3"} delay={delay}>
      <Card className="bg-[#18181b] text-white">
        <CardHeader className="flex">
          <div className="pl-2 pt-5">
            <p className="text-2xl font-semibold">{skillType}</p>
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
              <div className="flex flex-col text-xl">
                <p className="text-md">{skill.name}</p>
                <p className="text-small text-default-500">{skill.subtitle}</p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </RevealWrapper>
  );
};
