import React from "react";
import Marquee from "react-fast-marquee";
import "./Marquee.css";
import acer from "./assets/acer.png";
import apple from "./assets/apple (2).jpeg";
import asus from "./assets/asus.png";
import dell from "./assets/dell.png";
import hp from "./assets/hp.png";
import lenovo from "./assets/lenova.png";
import microsoft from "./assets/microsoft.png";

const images = [acer, apple, asus, dell, hp, lenovo, microsoft,acer, apple, asus, dell, hp, lenovo, microsoft];

const LaptopMarquee = () => {
  return (
    <div className="marquee-container">
      <Marquee speed={70}>
        {images.map((img, index) => (
          <img key={index} className="Laptop-image" src={img} alt="Laptop Brand" />
        ))}
      </Marquee>
    </div>
  );
};

export default LaptopMarquee;
