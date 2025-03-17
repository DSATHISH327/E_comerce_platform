import React from "react";
import "./Homepage.css";
import Image from './assets/apple.jpeg';
import Hp from './assets/HP-image.jpg'
import Marquee from './Marquee';
import Asus from './assets/ASUS-Image.jpg'
import Contactus from "./Contactus";
import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <>
      <Marquee></Marquee>
      <div className="header">
         <video src="public\advertisement.mp4" autoPlay loop controls width="100%" height="750" />  
      </div>
      <div className="brands">
        <Link to="/Apple"><img className="Home_page_image" src={Image} alt="Apple-laptop-image" title="Apple -BRAND" /></Link>
        <Link to="/HP"><img className="Hp_page_image" src={Hp} alt="HP-laptop-image" title="HP BRAND" /></Link>
        <Link to="/Asus"><img className="HP_page_image" src={Asus} alt="HP-laptop-image" title="ASUS BRAND" /></Link>
        <Link to="/Dell"><img className="HP_page_image" src="https://shop-cdn.bharathisystems.com/media/2023/11/Refurbished-Dell-Latitude-3410-Laptop.webp" alt="HP-laptop-image" title="DELL BRAND" /></Link>
        <Link to="/Lenova"><img className="HP_page_image" src="https://p4-ofp.static.pub//fes/cms/2024/04/01/e47jgbqu8opa29egu1gx8xxszlfaam697265.png" alt="HP-laptop-image" title="LENOVO BRAND" /></Link>
        <Link to="/Acer"><img className="Hp_page_image" src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/23/full/1721720304-2501.jpg?im=FitAndFill=(1200,800)" alt="HP-laptop-image" title="ACER BRAND" /></Link>
      </div>
      <div>
      </div>
      <Marquee></Marquee>
      <Contactus></Contactus>
    </>
  );
};

export default Homepage;
