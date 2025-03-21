import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faLink } from "@fortawesome/free-solid-svg-icons"; 

const Projects = () => {
  return (
    <div className="projects-container">
      <h3 className="projects-title">Projects</h3>
      <h2 className="arrow-icon"><FontAwesomeIcon icon={faArrowDown} size="2x" /></h2>
      <div className='projects'>
        <div className='project-card project1'>
          <p className="project-name">Train & Buses Cancelled Tickets Portal</p>
          <h3 className="github-link">GitHub Link: <FontAwesomeIcon icon={faLink} size="1x" /></h3>
          <h6 className="arrow-icon"><FontAwesomeIcon icon={faArrowDown} size="1x" /></h6>
          <a href="https://github.com/DSATHISH327/Train-bus-cancelled-tickets" title="Train & Bus Cancelled Tickets Portal" target="_blank" rel="noopener noreferrer">
            Train & Bus Cancelled Tickets Portal
          </a>
          <p className='Project_Description'>
            If you cancel your train or bus ticket on the official portal, you 
            only get a 70-90% refund. But on our platform, you get a full refund 
            by simply uploading your ticket for others to use.
          </p>
        </div>
        <div className='project-card project2'>
          <p className="project-name">Laptops E-Commerce Platform</p>
          <h3 className="github-link">GitHub Link: <FontAwesomeIcon icon={faLink} size="1x" /></h3>
          <h6 className="arrow-icon"><FontAwesomeIcon icon={faArrowDown} size="1x" /></h6>
          <a href="https://github.com/DSATHISH327/E_comerce_platform" target="_blank"  rel="noopener noreferrer" title="Laptops E-Commerce Platform">
            Laptops E-Commerce Platform
          </a>
          <p className='Project_Description'>
            Buy and sell laptops effortlessly with our platform! Upgrade your tech for career growth, 
            enhance your knowledge with the right device, and invest in education with the perfect laptop. 🚀💻
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
