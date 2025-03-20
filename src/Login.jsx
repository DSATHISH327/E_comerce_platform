import React, { useState } from "react";
import Marquee from "./Marquee";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import Contactus from "./Contactus";
const Login = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
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
      progress: undefined,
      theme: "colored",
    });
  }
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
          <img className="laptop-image" src="https://www.jktgadget.com/wp-content/uploads/2022/09/ASUS-TN3402QA-Silver-2.png" alt="Flip laptop" />
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
