import React from 'react'
import apple_powerbook_g4 from './assets/apple powerbook g4.jpg'
import apple_macbook from './assets/Apple macbook.jpg'
import Apple_macbook_air from './assets/Apple macbook air.jpeg'
import Marquee from './Marquee'
import './Apple.css'
import Contactus from './Contactus'
const Dell = () => {
  return (
    <div>
      <Marquee></Marquee>
      <div className='Apple'>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Dell Inspire</h2>
              <p>Inspiron 14 5410</p>
              <p>11th Gen Intel Core i3 processor</p>
              <p>8GB RAM</p>
              <p>256 GB SSD</p>
              <h3>&#8377; 69,695/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 1456/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5440/media-gallery/ice-blue/laptop-inspiron-14-5440nt-ice-bl-metal-fpr-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=1921&hei=1588&qlt=100,1&resMode=sharp2&size=1921,1588&chrss=full&imwidth=5000" alt="DELL INSPIRE SERIES" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>DELL VOSTRO</h2>
              <p>Vostro 3520</p>
              <p>12th Gen Intel Core i3 processor</p>
              <p>8GB RAM</p>
              <p>512 GB SSD</p>
              <h3>&#8377; 41,990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://www.digitaldreamsjaipur.com/wp-content/uploads/2020/06/Dell-Vostro-5490-C553503WIN9.jpg" alt="DELL VOSTRO SERIES" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Dell Gaming Laptop</h2>
              <p>G15 Gaming Laptop (Model 5530)</p>
              <h3>&#8377; 76,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 5456/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/computer/z/v/m/g15-gaming-laptop-dell-original-imagqzfyapzdzt4z.jpeg?q=90&crop=false" alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Apple Macbook</h2>
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
              <h2>Apple powerbook</h2>
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
              <h2>Apple Macbook</h2>
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
      <Contactus></Contactus>
    </div>
  )
}

export default Dell
