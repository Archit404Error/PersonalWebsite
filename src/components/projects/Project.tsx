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
      <div className="pr-10 pl-10">
        <div className="inline-block bg-gradient-to-br from-[#011f3d] via-[#1d4975] to-[#366a9e] pt-10 pb-10 rounded-xl">
          <div className="grid grid-cols-12 gap-20">
            <div className="col-start-2 col-span-5 flex items-center">
              <Image
                alt={description}
                src={image}
                width={500}
                height={500}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="col-span-5">
              <h1 className="text-6xl mb-4">{title}</h1>
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
              <p className="text-3xl mt-4">{description}</p>
              {impact && (
                <p className="text-3xl mt-5 font-semibold">Impact: {impact}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </RevealWrapper>
  );
};
