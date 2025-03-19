import React from 'react'
import './Projects.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
const Projects = () => {
  return (
    <div>
        <h2>PROJECTS</h2>
        <div className='projects'>
          <div className='project1'>
              <p>Train & Buses Cancelled Tickets Portal</p>
              <h3>Git Hub Link:<i class="fa-solid fa-link"></i><i class="fa-thin fa-down-long"></i></h3>
              <a href="https://github.com/DSATHISH327/Train-bus-cancelled-tickets" title='Train & Bus Cancelled Tickets Porta' target='_blank' rel="noopener noreferrer">Train & Bus Cancelled Tickets Portal</a>
              <p>If you cancel your train or bus ticket on the official portal, you 
                only get a 70-90% refund. But on our platform, you get a full refund 
                by simply uploading your ticket for others to use.
              </p>
          </div>
          <div className='project2'>
            <p>Laptops E_Comerce Platform</p>
            <h3>Git Hub Link:<i class="fa-solid fa-link"></i><i class="fa-thin fa-down-long"></i></h3>
            <a href="https://github.com/DSATHISH327/E_comerce_platform" target="_blank" rel="noopener noreferrer" title='Laptops E_Comerce Platform'>Laptops E_Comerce Platform</a>
            <p>Buy a Laptop here...</p>
          </div>

        </div>
    </div>
  )
}

export default Projects
