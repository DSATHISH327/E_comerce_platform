import React, { useState } from "react";
import Marquee from "./Marquee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import laptopImage from "./assets/hd-flip-laptop.jpeg";
import Contactus from "./Contactus";
const Login = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const showError = () => {
    toast.error("❌ Please fill in both fields!",);
  };

  const showSuccess = () => {
    toast.success("✅ Login Successful!",);
  };

  const handleLogin = () => {
    if (Name.trim() === "" || Password.trim() === "") {
      showError();
    } else {
      showSuccess();
    }
  };

  return (
    <div>
      <Marquee />
      <main className="container">
        <div className="image-container">
          <img className="laptop-image" src={laptopImage} alt="Flip laptop" />
        </div>
        <div className="login-section">
        <legend><h2>Login</h2></legend>
          <label htmlFor="Username">Email:</label>
          <br />
          <input type="email" id="Username" value={Name} onChange={(e) => setName(e.target.value)} />
          <br />
          <label htmlFor="Password">Password:</label>
          <br />
          <input type="password" id="Password" value={Password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button className="Login-btn" type="submit" onClick={handleLogin}>LOGIN</button>
        </div>
      </main>
      <Marquee />
      <ToastContainer /> 
      <Contactus></Contactus>
    </div>
  );
};

export default Login;
