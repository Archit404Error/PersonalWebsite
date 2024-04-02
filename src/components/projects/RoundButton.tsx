import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface RoundButtonProps {
  faIcon: IconProp;
  buttonText: string;
  url: string;
}

export const RoundButton = ({ faIcon, buttonText, url }: RoundButtonProps) => {
  return (
    <a href={url} target="_blank">
      <button className="flex flex-row bg-white text-black rounded-lg items-center gap-3 p-2">
        <FontAwesomeIcon icon={faIcon} className="text-lg" />
        <p className="text-md 2xl:text-lg">{buttonText}</p>
      </button>
    </a>
  );
};
