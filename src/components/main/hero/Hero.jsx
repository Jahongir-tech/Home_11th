import React from "react";
import "./Hero.scss";
import photo_hero from "../../../assets/images/iPhone16Pro.jpg";

const Hero = ({ title, desc, textColor, image }) => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})`, color: textColor }}>
      <div className="hero__context">
        <h2 className="hero__title">{title}</h2>
        <p className="hero__desc">{desc}</p>
        <div className="hero__btns">
          <button>Learn more</button>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
