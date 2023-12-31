import Image from "next/image";

export interface ExperienceCardProps {
  title: string;
  organization: string;
  description: string[];
  image: string;
  startDate: string;
  endDate: string;
}

export const ExperienceCard = ({
  title,
  organization,
  description,
  image,
  startDate,
  endDate,
}: ExperienceCardProps) => {
  return (
    <div className="grid grid-cols-12 mb-10 md:mb-5">
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
        className="col-span-12 mb-5 rounded-xl w-[50%] md:hidden"
      />
      <div className="col-span-12 md:col-start-6 lg:col-start-5 lg:col-span-6 macpro:col-span-8">
        <p className="text-3xl font-semibold">{title}</p>
        <p className="text-xl font-thin mb-2">
          {organization} ({startDate} - {endDate})
        </p>
        {description.map((descStr) => (
          <p key={descStr} className="text-lg mb-1 font-light">
            - {descStr}
          </p>
        ))}
      </div>
    </div>
  );
};
