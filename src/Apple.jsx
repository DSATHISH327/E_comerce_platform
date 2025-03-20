import React from 'react'
import Apple_core_i5 from './assets/Apple core i5.jpg'
import Apple_M1 from './assets/Apple M1.png'
import Apple_M3 from './assets/apple-macbook-air-m3.jpg'
import Apple_M4 from './assets/Apple M4.jpeg'
import Marquee from './Marquee'
import './Apple.css'
import Contactus from './Contactus'
const Apple = () => {
  return (
    <div>
      <Marquee></Marquee>
      <div className='Apple'>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Apple_core_i5</h2>
              <p>Apple MacBook Pro Intel Core i5 8th Gen</p>
              <p>8GB RAM</p>
              <p>512 SSD</p>
              <h3>&#8377; 1,63,449/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 5747/- per month</p>
            </div>
            <div className='image-section' >
            <img src={Apple_core_i5} alt="Apple_core_i5" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Apple Macbook i3</h2>
              <p>Apple MacBook Air Intel Core i3 10th Gen</p>
              <p>8GB RAM</p>
              <p>256 SSD</p>
              <h3>&#8377; 92,990/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3270/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://ozmobiles.com.au/cdn/shop/files/macbook-air-13-2019-apple-by-ozmobiles_c57d65ba-f286-4b93-92f8-0f89606e4af5_1000x.jpg?v=1727177295" alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Apple_macbook M1</h2>
              <p>Apple MacBook Air Apple M1</p>
              <p>8GB RAM</p>
              <p>512 SSD</p>
              <h3>&#8377; 1,06,999/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3,762/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Apple_M1} alt="APPLE M1" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2 id='Apple MacBook M2'>Apple MacBook M2</h2>
              <p>Apple MacBook AIR Apple M2</p>
              <p>8GB RAM</p>
              <p>512 SSD</p>
              <h3>&#8377; 84,999/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 2,989/- per month</p>
            </div>
            <div className='image-section'>
            <img src="https://www.cnet.com/a/img/resize/9624241ec6785ab68e2092e9656bc16c73d75cb1/hub/2023/01/21/ec79d7fc-9235-4830-8fc1-77db12800b97/apple-macbook-pro-16-2023-3214.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="apple_powerbook_g4" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Apple MACBOOK M3</h2>
              <p>Apple MacBook Air Apple M3</p>
              <p>8GB RAM</p>
              <p>256 SSD</p>
              <h3>&#8377; 95,099/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 3344/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Apple_M3} alt="Apple Macbook M3" className='Image'  />
            </div>
        </div>
        <div className='apple_powerbook_G4'>
            <div className='Description-section'>
              <h2>Apple Macbook M4</h2>
              <p>Apple MacBook Air Apple M4</p>
              <p>16GB RAM</p>
              <p>256 SSD</p>
              <h3>&#8377; 99,849/-</h3>
              <button type="submit">BUY NOW</button>
              <p>EMI Available &#8377; 11,095/- per month</p>
            </div>
            <div className='image-section'>
            <img src={Apple_M4} alt="apple Macbook M4" className='Image'  />
            </div>
        </div>
      </div>
      <Marquee></Marquee>
      <Contactus></Contactus>
    </div>
  )
}

export default Apple
