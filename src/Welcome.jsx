import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    // Show toast when the site loads
    toast.success("🎉 Welcome to my website!", {  
      position: "top-center",  
      autoClose: 1000,  
      hideProgressBar: false,  
      icon:"🎉" ,
      closeOnClick: true,  
      draggable: true,  
      theme: "colored"
    });
    

  }, []); 

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default App;
