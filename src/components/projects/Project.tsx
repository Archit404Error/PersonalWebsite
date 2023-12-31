"use client";

import { faAppStore, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import { RoundButton } from "./RoundButton";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  url?: string;
  appStore?: string;
  github?: string;
  impact?: string;
}

export const Project = ({
  title,
  description,
  image,
  url,
  appStore,
  github,
  impact,
}: ProjectProps) => {
  return (
    <RevealWrapper>
      <div className="md:pr-10 md:pl-10">
        <div className="bg-gradient-to-br from-[#011f3d] via-[#1d4975] to-[#366a9e] pt-10 pb-10 rounded-xl">
          <div className="pl-3 md:pl-0 md:grid md:grid-cols-12 gap-20">
            <div className="col-span-12 xl:col-start-2 xl:col-span-5 flex items-center justify-center">
              <Image
                alt={description}
                src={image}
                width={500}
                height={500}
                className="md:w-[50%] md:h-full xl:w-full xl:h-full"
              />
            </div>
            <div className="col-start-3 col-span-9 md:col-start-2 md:col-span-10 xl:col-span-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">{title}</h1>
              <div className="flex flex-row gap-5">
                {url && (
                  <RoundButton
                    faIcon={faGlobe}
                    buttonText="Website"
                    url={url}
                  />
                )}
                {appStore && (
                  <RoundButton
                    faIcon={faAppStore}
                    buttonText="App Store"
                    url={appStore}
                  />
                )}
                {github && (
                  <RoundButton
                    faIcon={faGithub}
                    buttonText="GitHub"
                    url={github}
                  />
                )}
              </div>
              <p className="text-xl md:text-2xl mt-4">{description}</p>
              {impact && (
                <p className="text-xl md:text-2xl mt-5 font-semibold">
                  Impact: {impact}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
};
