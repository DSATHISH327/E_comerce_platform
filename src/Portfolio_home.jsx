import React from 'react'
import './Portfolio_home.css'
import Educational_qualifications from './Educational_qualifications'
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
const Portfolio_home = () => {
  return (
    <div>
    <div className='heading-background'>
      <h1>Desaboina Satish</h1>
    </div>
    <div className='resume'> 
      <h3>My resume</h3>
    <i class="fa-regular fa-file"></i>
    <i class="fa-solid fa-download"></i>
    <a href="public\Desaboina_satish_resume_web_developer.pdf" download><h3>Desaboina Satish Resume</h3></a>
    </div>
    </div>
  )
}

export default Portfolio_home
