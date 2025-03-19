import React from 'react'
import apple_powerbook_g4 from './assets/apple powerbook g4.jpg'
import apple_macbook from './assets/Apple macbook.jpg'
import Apple_macbook_air from './assets/Apple macbook air.jpeg'
import Hp_Pavilion from './assets/Hp_pavilion.jpg'
import Hp_Spectra from './assets/Hp spectra.png'
import Marquee from './Marquee'
import './Apple.css'
import Contactus from './Contactus'
const Hp = () => {
  return (
    <div>
      <Marquee></Marquee>
      <div className='Apple'>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>HP Pavilion</h2>
              <p>HP Pavilion 15-eh3036AU</p>
              <p>AMD Ryzen 5 processor</p>
              <p>8 GB RAM</p>
              <p>512 GB SSD</p>
              <h3>&#8377; 60,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 1456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Hp_Pavilion} alt="HP Pavilion" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Hp_Spectra</h2>
              <p>HP Spectre x360 14</p>
              <p>13th Gen Intel Core i7 processor</p>
              <p>16GB RAM</p>
              <p>1TB SSD</p>
              <h3>&#8377; 1,50,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://store.hp.com/app/assets/images/uploads/prod/hp-spectre-folio-complete-review-11543792267392.png?imwidth=600&imdensity=1" alt="HP Spectra laptop" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Apple_macbook_air</h2>
              <p>Version:G4</p>
              <h3>&#8377; 76,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 5456/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://m.media-amazon.com/images/I/61ybbjUQ-kL._AC_UF894,1000_QL80_.jpg" alt="HP ENVY SERIES" className='Image'  />
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
              <h2>HP Omen Series</h2>
              <p>Display: 16-inch 2560 x 1600 IPS display with a 240Hz refresh rate</p>
              <h3>&#8377; 45,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 1456/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://computechstore.in/wp-content/uploads/2023/12/HP-OMEN-Gaming-Laptop-40.9-cm16-xf0060AX-2.jpg" alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>HP ELITEBOOK</h2>
              <p>HP EliteBook 840 G10</p>
              <p>Display: 14-inch, Full HD (1920 x 1080) IPS, anti-glare, 400 nits brightness</p>
              <p>Processor: Intel® Core™ i7-1355U (up to 5.0 GHz, 10 cores, 12 threads)</p>
              <p>Graphics: Intel® Iris Xe Graphics</p>
              <p>Memory: 16 GB DDR5-4800 MHz.</p>
              <p>Storage: 1 TB PCIe® NVMe™ TLC M.2 SSD</p>
              <h3>&#8377; 33,302.56./-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://smart-laptop.com/cdn/shop/files/as_e266d020-4234-4273-8f4d-82ee9b23f900.jpg?v=1712092599" alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
      </div>
      <Marquee></Marquee>
      <Contactus></Contactus>
    </div>
  )
}

export default Hp
