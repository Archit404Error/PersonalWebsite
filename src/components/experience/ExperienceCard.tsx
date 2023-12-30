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
    <div className="grid grid-cols-12 mb-5">
      <Image
        src={image}
        alt={`Archit Mehta: ${title} ${organization}`}
        width={300}
        height={300}
        className="col-span-4 rounded-xl"
      />
      <div className="col-span-12 lg:col-start-6 lg:col-span-6 macpro:col-span-8">
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
