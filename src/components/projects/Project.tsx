"use client";

import { useIsVisibleOnce } from "@/hooks/useIsVisibleOnce";
import { faAppStore, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useRef } from "react";
import { GradientCard } from "../animation/gradientCard";
import { RoundButton } from "./RoundButton";

export interface ProjectData {
  title: string;
  description: string;
  image: string;
  url?: string;
  appStore?: string;
  github?: string;
  impact?: string;
  tech?: string;
}

type ProjectCardProps = Partial<ProjectData> & { visible: boolean };

export const Project = ({
  title,
  description,
  image,
  url,
  appStore,
  github,
  impact,
  tech,
}: ProjectData) => {
  const projectRef = useRef(null);
  const isVisible = useIsVisibleOnce(projectRef);

  return (
    <div
      ref={projectRef}
      className={`ease-in transition-all delay-300 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      } `}
    >
      <div className="pl-3 pr-3 md:pl-0 md:pr-0 md:grid md:grid-cols-12 gap-10">
        <div className="col-span-12 xl:col-start-2 xl:col-span-5 flex items-center justify-center">
          <Image
            alt={description}
            src={image}
            width={500}
            height={500}
            className="mb-5 md:mb-0 md:w-[50%] md:h-full xl:w-full xl:h-full"
          />
        </div>
        <div className="col-start-3 col-span-9 md:col-start-2 md:col-span-10 xl:col-span-5">
          <AnimatedCard
            title={title}
            description={description}
            url={url}
            appStore={appStore}
            github={github}
            impact={impact}
            tech={tech}
            visible={isVisible}
          />
        </div>
      </div>
    </div>
  );
};

const AnimatedCard = ({
  title,
  description,
  url,
  appStore,
  github,
  impact,
  tech,
  visible,
}: ProjectCardProps) => {
  return (
    <GradientCard visible={visible}>
      <div className="p-5 bg-[#18181b]">
        <CardBody>
          <h1 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl mb-4 font-bold">
            {title}
          </h1>
          <div className="flex flex-row gap-5">
            {url && (
              <RoundButton faIcon={faGlobe} buttonText="Website" url={url} />
            )}
            {appStore && (
              <RoundButton
                faIcon={faAppStore}
                buttonText="App Store"
                url={appStore}
              />
            )}
            {github && (
              <RoundButton faIcon={faGithub} buttonText="GitHub" url={github} />
            )}
          </div>
          <p className="text-xl md:text-2xl mt-4">{description}</p>
          {impact && (
            <p className="text-xl md:text-xl mt-5">
              <span className="font-semibold">Impact:</span> {impact}
            </p>
          )}
          {tech && (
            <p className="text-xl md:text-xl mt-5">
              <span className="font-semibold">Tech:</span> {tech}
            </p>
          )}
        </CardBody>
      </div>
    </GradientCard>
  );
};
