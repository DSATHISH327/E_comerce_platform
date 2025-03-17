import React from 'react'
import './Portfolio_navbar.css';
import Marquee from 'react-fast-marquee';
import htmlLogo from './assets/html.png';
import cssLogo from './assets/css.png';
import jsLogo from './assets/javascript.png';
import reactLogo from './assets/react_logo.png';
import githubLogo from './assets/github.png';
const PortfolioNavbar = () => {
  return (
    <div>
      <div className='Skill_logos'>
        <Marquee direction="right" speed={50}>
          <img src={htmlLogo} alt="HTML LOGO" className='Skill_logo' />
          <img src={cssLogo} alt="CSS LOGO" className='Skill_logo' />
          <img src={jsLogo} alt="JAVASCRIPT LOGO" className='Skill_logo' />
          <img src={reactLogo} alt="REACT JS LOGO" className='Skill_logo' />
          <img src={githubLogo} alt="GITHUB LOGO" className='Skill_logo' />
          <img src={htmlLogo} alt="HTML LOGO" className='Skill_logo' />
          <img src={cssLogo} alt="CSS LOGO" className='Skill_logo' />
          <img src={jsLogo} alt="JAVASCRIPT LOGO" className='Skill_logo' />
          <img src={reactLogo} alt="REACT JS LOGO" className='Skill_logo' />
          <img src={githubLogo} alt="GITHUB LOGO" className='Skill_logo' />
          <img src={htmlLogo} alt="HTML LOGO" className='Skill_logo' />
          <img src={cssLogo} alt="CSS LOGO" className='Skill_logo' />
          <img src={jsLogo} alt="JAVASCRIPT LOGO" className='Skill_logo' />
          <img src={reactLogo} alt="REACT JS LOGO" className='Skill_logo' />
          <img src={githubLogo} alt="GITHUB LOGO" className='Skill_logo' />
        </Marquee>
      </div>
    </div>
  )
}
export default PortfolioNavbar;
