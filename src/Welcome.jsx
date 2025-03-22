import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    // Show toast when the site loads
    toast.success("Welcome to my website! Today is My Birthday", {
      position: "top-center",  
      autoClose: 5000,         
      hideProgressBar: false,  
      closeOnClick: true,      
      draggable: true,
      theme: "light",
    });
  }, []); 

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default App;
