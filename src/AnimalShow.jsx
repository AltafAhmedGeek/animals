import { useState } from "react";
import "./css/AnimalShow.css";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import heart from "./images/heart.svg";
import horse from "./images/horse.svg";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  heart,
  horse,
};
const AnimalShow = ({ type }) => {
  const [click, setClick] = useState(0);
  const handleClick = () => {
    setClick(click + 1);
  };
  const heartStyle = {
    width: 10 + 10 * click + "px",
  };
  return (
    <div className="animal-show">
      <img
        className="animal"
        src={svgMap[type]}
        alt="animal"
        onClick={handleClick}
      />
      <img className="heart" src={heart} alt="heart" style={heartStyle} />
    </div>
  );
};

export default AnimalShow;
