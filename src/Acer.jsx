import React from 'react'
import apple_powerbook_g4 from './assets/apple powerbook g4.jpg'
import apple_macbook from './assets/Apple macbook.jpg'
import Apple_macbook_air from './assets/Apple macbook air.jpeg'
import Acer_swift from './assets/Acer swift.jpg'
import Acer_Aspire_3 from './assets/Acer Aspire 3.jpg'
import Marquee from './Marquee'
import './Apple.css'
const Acer = () => {
  return (
    <div>
      <Marquee></Marquee>
      <div className='Apple'>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Acer_Aspire_3</h2>
              <p>Acer Aspire 3 A324-51</p>
              <p>12th Gen Intel Core i7 processor</p>
              <p>16 GB RAM</p>
              <p>14-inch Full HD display</p>
              <h3>&#8377; 43,990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 1456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Acer_Aspire_3} alt="Acer_Aspire_3" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Acer Swift Go 14 SFG14-41</h2>
              <p>AMD Ryzen 5 processor,</p>
              <p>16 GB RAM</p>
              <p>14-inch Full HD display</p>
              <h3>&#8377; 50,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Acer_swift} alt="Acer_swift" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Acer Nitro V ANV15-41</h2>
              <p>Acer Nitro V ANV15-41</p>
              <p>7th Gen AMD Ryzen 5 processor</p>
              <p>16 GB RAM</p>
              <p>15.8-inch Full HD display</p>
              <h3>&#8377; 62990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 2456/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://product.hstatic.net/200000837185/product/acer-gaming-nitro-v-2023-2_78e713ee01be4291aea487be120b2248_master.jpg" alt="Acer Nitro" className='Image'  />
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
            <img href="https://cdn.uc.assets.prezly.com/6a900ac1-dab3-46c3-8b4f-644b2a862123/-/format/auto/PREDATOR-HELIOS-16-AI_PH16-73-03.jpg" alt="Acer Predator" className='Image'  />
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
    </div>
  )
}

export default Acer
