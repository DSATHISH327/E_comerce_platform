import React from "react";
import "./Portfolio_navbar.css";
import Marquee from "react-fast-marquee";
import htmlLogo from "./assets/html.png";
import cssLogo from "./assets/css.jpg";
import jsLogo from "./assets/javascript.png";
import reactLogo from "./assets/react_logo.png";
import githubLogo from "./assets/github.png";

const logos = [htmlLogo, cssLogo, jsLogo, reactLogo, githubLogo];
const LOGOS=[...logos, ...logos, ...logos, ...logos];

const PortfolioNavbar = () => {
  return (
    <div className="Skill_logos">
      <Marquee direction="right" speed={50} gradient={false}>
        {LOGOS.map((logo, index) => (
          <img key={index} src={logo} alt="Skill Logo" className="Skill_logo" />
        ))}
      </Marquee>
    </div>
  );
};

export default PortfolioNavbar;
