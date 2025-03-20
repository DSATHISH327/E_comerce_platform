import React from "react";
import "./Portfolio_home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"; // Correct Import

const Portfolio_home = () => {
  return (
    <div>
      <div className="heading-background">
        <h1>Desaboina Satish</h1>
        <h4>Front End Developer....</h4>
      </div>     
      <div className="resume">
        <h3>My Resume</h3>
        <h5>
          <FontAwesomeIcon icon={faArrowDown} size="6x"/>
        </h5>
        <a href="/Desaboina_satish_resume_web_developer.pdf" download title="Desaboina Satish Web Developer Resume">
          <h3>Desaboina Satish Resume</h3>
        </a>
      </div>
    </div>
  );
};

export default Portfolio_home;
