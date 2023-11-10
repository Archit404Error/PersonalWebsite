import Image from "next/image";

export const IntroCard = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center p-10">
      <Image
        alt="Archit Mehta, programmer, entrepreneur, and student."
        width="300"
        height="300"
        src={"/Archit_Headshot.jpg"}
        className="rounded-xl mb-4"
      />
      <h1 className="sm:text-3xl md:text-6xl">Archit Mehta</h1>
    </div>
  );
};
