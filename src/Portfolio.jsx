import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioNavbar from './Portfolio_navbar';
import Skills from './Skills';
import Portfolio_home from './Portfolio_home';
import Educational_qualifications from './Educational_qualifications';
import Contactus from './Contactus';
const Portfolio = () => {
  return (
    <div>
      <PortfolioNavbar />
      <Portfolio_home /> 
      <div className='Navbar'>
        
      </div>
      <Educational_qualifications></Educational_qualifications>
      <Skills />
      <PortfolioNavbar />
      <Contactus></Contactus>
    </div>
  );
}

export default Portfolio;
