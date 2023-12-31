import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const IntroCard = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center p-10 col-span-2 md:col-span-1">
      <Image
        alt="Archit Mehta, programmer, entrepreneur, and student."
        width="350"
        height="350"
        src={"/Archit_Headshot.jpg"}
        className="rounded-xl mb-4"
      />
      <h1 className="text-[2rem] font-bold md:font-normal sm:text-5xl md:text-6xl mb-4">
        Archit Mehta
      </h1>
      <div className="flex space-x-10">
        <a href="mailto:4architmehta@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelopeSquare}
            className="flex-1 text-4xl sm:text-5xl"
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/4architmehta/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="flex-1 text-4xl sm:text-5xl"
          />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.github.com/Archit404Error"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="flex-1 text-4xl sm:text-5xl"
          />
        </a>
      </div>
    </div>
  );
};
