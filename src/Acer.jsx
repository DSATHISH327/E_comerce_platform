import React from 'react'
import Acer_swift from './assets/Acer swift.jpg'
import Acer_Aspire_3 from './assets/Acer Aspire 3.jpg'
import Acer_nitro from './assets/Acer nitro.jpg'
import Acer_swift_0 from './assets/Acer Swift -1.jpg'
import Acer_predator from './assets/Acer predator.jpg'
import Acer_ryzen from './assets/Acer Ryzen.jpg'
import Contactus from './Contactus'
import Marquee from './Marquee'
import './Apple.css'
const Acer = () => {
  return (
    <div>
      <Marquee></Marquee>
      <div className='Apple'>
        <header className="section-1">
          <a href="#Acer_Aspire_3">Acer_Aspire_3</a>
          <a href="#Acer Swift Go">Acer Swift Go</a>
          <a href="#Acer Nitro V">Acer Nitro V</a>
          <a href="#Acer Predator">Acer Predator</a>
          <a href="#Acer Swift Go1">Acer Swift Go</a>
          <a href="#Acer AMD">Acer AMD Ryzen 3</a>
        </header>
        <div id="Acer_Aspire_3" className='apple_powerbook_G4'>
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
        <div id="Acer Swift Go" className='apple_powerbook_G4'>
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
        <div id="Acer Nitro V" className='apple_powerbook_G4'>
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
            <img src={Acer_nitro} alt="Acer Nitro" className='Image'  />
            </div>
        </div>
        <div  id="Acer Predator" className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Acer Predator Helios 16</h2>
              <p>14th Gen Intel Core i9 processor</p>
              <p>32GB RAM 1TB SSD</p>
              <p>VIDIA GeForce RTX 4080 graphics</p>
              <p>16-inch WQXGA LED-backlit IPS display with a 240 Hz </p>
              <h3>&#8377; 2,49,999/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Acer_predator} alt="Acer Predator" className='Image'  />
            </div>
        </div>
        <div id="Acer Swift Go1" className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Acer Swift Go</h2>
              <p>Acer Swift Go 14 SFG14-01 AI</p>
              <p>Qualcomm Snapdragon X Plus processor</p>
              <p>16GB LPDDR5X RAM</p>
              <p>512GB SSD</p>
              <p>14.5-inch 2K touch display</p>
              <h3>&#8377; 54,000/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 1456/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Acer_swift_0} alt="Acer_swift_0" className='Image'  />
            </div>
        </div>
        <div id="Acer AMD"className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Acer AMD Ryzen 3</h2>
              <p>Acer AMD Ryzen 3 Quad Core 5300U</p>
              <p>16 GB</p>
              <p>512 GB</p>
              <p>Windows 11</p>
              <h3>&#8377; 29990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 1055/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Acer_ryzen} alt="Acer_ryzen" className='Image'  />
            </div>
        </div>
      </div>
      <Marquee></Marquee>
      <Contactus></Contactus>
    </div>
  )
}

export default Acer
