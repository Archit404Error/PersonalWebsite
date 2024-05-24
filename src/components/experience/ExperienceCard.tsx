import { useIsVisibleOnce } from "@/hooks/useIsVisibleOnce";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { useRef } from "react";

export interface ExperienceCardProps {
  title: string;
  organization: string;
  description: string[];
  image: string;
  startDate: string;
  endDate: string;
  delay?: number;
}

type ExperienceOutlineCardProps = Partial<ExperienceCardProps> & {
  visible: boolean;
};

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
        <ExperienceOutlineCard
          title={title}
          organization={organization}
          description={description}
          startDate={startDate}
          endDate={endDate}
          visible={isVisible}
        />
      </div>
    </div>
  );
};

const ExperienceOutlineCard = ({
  title,
  organization,
  description,
  startDate,
  endDate,
  visible,
}: ExperienceOutlineCardProps) => {
  return (
    <div className="grid grid-cols-1">
      <Card
        className={`bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 row-start-1 col-start-1 ease-in transition-all delay-800 ${
          visible
            ? "md:translate-x-5 md:translate-y-5"
            : "md:translate-x-2.5 md:translate-y-2.5"
        }`}
      />
      <Card
        className={`p-10 row-start-1 col-start-1 m-[1px] ease-in transition-all delay-800 ${
          visible
            ? "translate-x-0 translate-y-0"
            : "md:translate-x-2.5 md:translate-y-2.5"
        }`}
      >
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-xl font-thin mb-2">
          {organization} ({startDate} - {endDate})
        </p>
        {description!.map((descStr) => (
          <p key={descStr} className="text-lg mb-1 font-light">
            •&nbsp;{descStr}
          </p>
        ))}
      </Card>
    </div>
  );
};
