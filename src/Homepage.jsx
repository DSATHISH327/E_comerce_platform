import React from "react";
import "./Homepage.css";
import Image from './assets/apple (2).jpeg';
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
        <Link to="/Dell"><img className="hp_page_image" src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/g-series/g16-7630/media-gallery/white/notebook-g16-7630-nt-white-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=3500&hei=2625&qlt=100,1&resMode=sharp2&size=3500,2625&chrss=full&imwidth=5000" alt="HP-laptop-image" title="DELL BRAND" /></Link>
        <Link to="/Lenova"><img className="HP_page_image" src="https://p4-ofp.static.pub//fes/cms/2024/04/01/e47jgbqu8opa29egu1gx8xxszlfaam697265.png" alt="HP-laptop-image" title="LENOVO BRAND" /></Link>
        <Link to="/Acer"><img className="Hp_page_image" src="https://bjs.scene7.com/is/image/bjs/312649__alt7?$bjs-Zoom$" alt="HP-laptop-image" title="ACER BRAND" /></Link>
      </div>
      <div>
      </div>
      <Marquee></Marquee>
      <Contactus></Contactus>
    </>
  );
};

export default Homepage;
