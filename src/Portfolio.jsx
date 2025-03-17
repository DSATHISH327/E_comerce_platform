import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioNavbar from './Portfolio_navbar';
import Skills from './Skills';
import Portfolio_home from './Portfolio_home';

const Portfolio = () => {
  return (
    <div>
      <PortfolioNavbar />
      <Portfolio_home /> 
      <div className='Navbar'>
        {/* <ul>
          <li><Link to="/Portfolio/Portfolio_home">HOME</Link></li> 
          <li><Link to="/Portfolio/Skills">SKILLS</Link></li>
          <li><Link to="/Portfolio/projects">PROJECTS</Link></li>
          <li><Link to="/Portfolio/Educational_qualifications">EDUCATIONAL QUALIFICATIONS</Link></li>
        </ul> */}
      </div>
      <Skills />
    </div>
  );
}

export default Portfolio;
