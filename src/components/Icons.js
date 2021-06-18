import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faUserCog,
  faUserCircle,
  faAddressBook,
  faDragon,
  faArrowCircleUp,
  faArrowCircleDown,
  faHeart,
  faGripLines,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

export const Component = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faEye} />
    </span>
  );
};
export const ComponentEye = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faEyeSlash} />
    </span>
  );
};
export const ComponentUser = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faUserCog} />
    </span>
  );
};
export const ComponentAvatar = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faUserCircle} />
    </span>
  );
};
export const ComponentAdress = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faAddressBook} />
    </span>
  );
};
export const ComponentDragon = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faDragon} />
    </span>
  );
};
export const ComponentArrow = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faArrowCircleUp} />
    </span>
  );
};

export const ComponentArrowDown = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faArrowCircleDown} />
    </span>
  );
};
export const ComponentHeartFull = () => {
  return (
    <span>
      <FontAwesomeIcon icon={faHeart} />
    </span>
  );
};
export const ComponentMenu = () => {
  return <FontAwesomeIcon icon={faGripLines} />;
};
export const ComponentCloseMenu = () => {
  return <FontAwesomeIcon icon={faTimes} />;
};
