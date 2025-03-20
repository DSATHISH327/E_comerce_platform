import React from 'react'
import Marquee from "./Marquee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from './assets/sign-up.jpg';
import { useState } from 'react';
import './Signup.css';
import Contactus from './Contactus';
const Signup = () => {
    const [Name, setName] = useState("");
    const [Number,setNumber]=useState("");
    const [Dateofbirth,setDateofbirth]=useState("");
    const [Password, setPassword] = useState("");
    const [rePassword,setrePassword]=useState("");
    const [Address,setAddress]=useState("");
      const showError = () => {
        toast.error("Error! Something went wrong.", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
      };
    
      const showSuccess = () => {
        toast.success("Success! Operation completed.", {
          position: "top-right",
          autoClose: 3000, 
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      };
    
      const handleLogin = () => {
        if (Name.trim() === "" || Password.trim() === "" || Number.trim() === "" || Dateofbirth.trim() ==="" || rePassword.trim() ==="" || Address.trim() ==="") {
          showError();
        } else {
          showSuccess();
        }
      };
  return (
    <div>
      <Marquee />
      <div className="container">
        <div className="image_Section">
          <img className="laptop-image" src="https://5.imimg.com/data5/SELLER/Default/2023/5/305813111/GV/YX/EV/186092245/asus-vivobook-14-laptop.jpg" alt="Laptop Image"  />
          <h2>Welcome to Sign-up Page</h2>
          <p>💻 "A laptop is not just a device; it's a gateway to knowledge, creativity, and success."</p>
        </div>
        <div className="sign_Up_section">
          <fieldset>
            <legend><h2>Sign up</h2></legend>
            <label htmlFor="Username">Email:</label>
            <br />
            <input type="email" id="Username" value={Name} onChange={(e) => setName(e.target.value)} />
            <br />
            <label htmlFor="Phonenumber">Phone number:</label>
            <br />
            <input type="number" id="phoneno" value={Number} onChange={(e) => setNumber(e.target.value)} />
            <br />
            <label htmlFor="Dateofbirth">Date of birth:</label>
            <br />
            <input type="Date" id="Dateofbirth" value={Dateofbirth} onChange={(e) => setDateofbirth(e.target.value)} />
            <br />
            <label htmlFor="Password">Password:</label>
            <br />
            <input type="password" id="password" value={Password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <label htmlFor="reenterpassword">Re-Enter Password:</label>
            <br />
            <input type="password" id="reenterpassword" value={rePassword} onChange={(e) => setrePassword(e.target.value)} />
            <br />
            <label htmlFor="Address">Address:</label>
            <br />
            <textarea type="textarea" id="Address" value={Address} onChange={(e) => setAddress(e.target.value)} />
            <br />
            <button className="signup-btn"type="submit" onClick={handleLogin}>Sign up</button>
          </fieldset>
        </div>
      </div>
      <Marquee />
      <ToastContainer /> 
      <Contactus></Contactus>
    </div>
    
  )
}

export default Signup
