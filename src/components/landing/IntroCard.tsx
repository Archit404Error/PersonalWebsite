import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const IntroCard = () => {
  return (
    <div className="flex flex-col items-center text-center justify-center p-10">
      <Image
        alt="Archit Mehta, programmer, entrepreneur, and student."
        width="350"
        height="350"
        src={"/Archit_Headshot.jpg"}
        className="rounded-xl mb-4"
      />
      <h1 className="sm:text-3xl md:text-6xl mb-4">Archit Mehta</h1>
      <div className="flex space-x-10">
        <a target="_blank" href="https://www.instagram.com/archit_mehta/?hl=en">
          <FontAwesomeIcon icon={faInstagram} size="3x" className="flex-1" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/4architmehta/"
        >
          <FontAwesomeIcon icon={faLinkedin} size="3x" className="flex-1" />
        </a>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.github.com/Archit404Error"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" className="flex-1" />
        </a>
      </div>
    </div>
  );
};
