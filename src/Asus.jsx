import React from 'react'
import Asus_zenbook from './assets/Asus zenbook.png'
import Asus_Tuf from './assets/Asus Tuf series.jpg'
import Asus_ROG from './assets/Asus Rog.png'
import Asus_vivobook from './assets/Asus Vivobook.jpeg'
import Asus_Tuf_series_1 from './assets/Asus Tuf series -1.png'
import Asus_Rog_1 from './assets/Asus Rog-2.jpg'
import Marquee from './Marquee'
import './Apple.css'
import Contactus from './Contactus'
const Asus = () => {
  return (
    <div>
      <Marquee></Marquee>
      <div className='Apple'>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Asus Zenbook</h2>
              <p>ASUS Zenbook A14 UX3407RA-QD054WS</p>
              <p>Snapdragon X Elite X1E 78 100 processor</p>
              <p>16GB RAM</p>
              <p>512GB SSD</p>
              <h3>&#8377; 1,29,990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 5416/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Asus_zenbook} alt="Asus_zenbook" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>ASUS TUF</h2>
              <p>ASUS TUF Gaming F16 FX607VB-RL087WS</p>
              <p>Intel Core i5-210H processor</p>
              <p>16GB RAM</p>
              <p>512GB SSD</p>
              <p>4GB NVIDIA GeForce RTX 3050A graphics card.</p>
              <h3>&#8377; 67,590/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Asus_Tuf} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Asus_ROG</h2>
              <p>ASUS ROG Zephyrus G16 GA605WV-QP478WS</p>
              <p>AMD Ryzen 9 AI HX 370 processor</p>
              <p>16GB RAM</p>
              <p>1TB SSD</p>
              <p>an 8GB NVIDIA GeForce RTX 4060 graphics card</p>
              <h3>&#8377; 120990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 5042/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Asus_ROG} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Asus vivobook</h2>
              <p>ASUS Vivobook 14 X1404VA-NK804W</p>
              <p>13th Gen Intel Core i5 processor</p>
              <p>8GB RAM</p>
              <p>512GB SSD</p>
              <h3>&#8377; 54,990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 2345/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Asus_vivobook} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Asus Tuf series</h2>
              <p>ASUS TUF Gaming F16 FX607VB-RL076WS</p>
              <p>Intel Core i5-210H processor</p>
              <p>16GB RAM</p>
              <p>512GB SSD</p>
              <p>4GB NVIDIA GeForce RTX 3050A graphics card.</p>
              <h3>&#8377; 80990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3450/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Asus_Tuf_series_1} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Asus Rog</h2>
              <p>ASUS ROG Strix G16 G614JV-N4474WS</p>
              <p>AMD Ryzen 9 AI HX 370 processor</p>
              <p>16GB RAM</p>
              <p>1TB SSD</p>
              <p>8GB NVIDIA GeForce RTX 4060 graphics card</p>
              <h3>&#8377; 149,990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 6260/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Asus_Rog_1} alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
      </div>
      <Marquee></Marquee>
      <Contactus></Contactus>
    </div>
  )
}

export default Asus
