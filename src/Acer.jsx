import React from 'react'
import apple_powerbook_g4 from './assets/apple powerbook g4.jpg'
import apple_macbook from './assets/Apple macbook.jpg'
import Apple_macbook_air from './assets/Apple macbook air.jpeg'
import Marquee from './Marquee'
import './Apple.css'
const Acer = () => {
  return (
    <div>
      <Marquee></Marquee>
      <div className='Apple'>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h1>Apple powerbook</h1>
              <p>Version:G4</p>
              <h3>&#8377; 45,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 1456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={apple_powerbook_g4} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h1>Apple Macbook</h1>
              <p>Version:Macbook</p>
              <h3>&#8377; 67,590/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={apple_macbook} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h1>Apple_macbook_air</h1>
              <p>Version:G4</p>
              <h3>&#8377; 76,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 5456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Apple_macbook_air} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h1>Apple Macbook</h1>
              <p>Version:Macbook</p>
              <h3>&#8377; 67,590/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={apple_macbook} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h1>Apple powerbook</h1>
              <p>Version:G4</p>
              <h3>&#8377; 45,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 1456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={apple_powerbook_g4} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h1>Apple Macbook</h1>
              <p>Version:Macbook</p>
              <h3>&#8377; 67,590/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={apple_macbook} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
      </div>
      <Marquee></Marquee>
    </div>
  )
}

export default Acer
