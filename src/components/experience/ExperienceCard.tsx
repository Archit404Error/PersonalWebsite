import { useIsVisibleOnce } from "@/hooks/useIsVisibleOnce";
import Image from "next/image";
import { useRef } from "react";
import { GradientCard } from "../animation/gradientCard";

export interface ExperienceCardProps {
  title: string;
  organization: string;
  description: string[];
  image: string;
  startDate: string;
  endDate: string;
  delay?: number;
}

export const ExperienceCard = ({
  title,
  organization,
  description,
  image,
  startDate,
  endDate,
  delay,
}: ExperienceCardProps) => {
  const experienceRef = useRef(null);
  const isVisible = useIsVisibleOnce(experienceRef);

  return (
    <div
      ref={experienceRef}
      className={`grid grid-cols-12 mb-10 md:mb-16 ease-in transition-all ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-60 opacity-0"
      } delay-${delay ?? 0}`}
    >
      <Image
        src={image}
        alt={`Archit Mehta: ${title} ${organization}`}
        width={300}
        height={300}
        className="hidden mb-0 rounded-xl col-span-3 md:block xl:col-span-4"
      />
      <Image
        src={image}
        alt={`Archit Mehta: ${title} ${organization}`}
        width={300}
        height={300}
        className="col-span-12 mb-5 rounded-xl w-[50%] justify-self-center md:hidden"
      />
      <div className="col-span-12 md:col-start-6 lg:col-start-5 lg:col-span-6 macpro:col-span-8">
        <GradientCard visible={isVisible}>
          <div className="p-10">
            <p className="text-3xl font-semibold">{title}</p>
            <p className="text-xl font-thin mb-2">
              {organization} ({startDate} - {endDate})
            </p>
            {description!.map((descStr) => (
              <p key={descStr} className="text-lg mb-1 font-light">
                •&nbsp;{descStr}
              </p>
            ))}
          </div>
        </GradientCard>
      </div>
    </div>
  );
};
