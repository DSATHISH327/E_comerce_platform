import { Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage';
import Login from './Login';
import Signup from './Signup';
import Navbar from './Navbar';
import Portfolio from './Portfolio';
import Portfolio_home from './Portfolio_home';
import Skills from './Skills';
import Projects from './Projects';
import Educational_qualifications from './Educational_qualifications';
import Apple from './Apple';
import Acer from './Acer';
import Lenova from './Lenova';
import Dell from './Dell';
import Hp from "./HP";
import Asus from './Asus';
import ReactGA from "react-ga4";  // Import Google Analytics

const MEASUREMENT_ID = "G-17H232CPRP"; // Replace with your GA4 Measurement ID

// Initialize Google Analytics
ReactGA.initialize(MEASUREMENT_ID);
ReactGA.send("pageview"); // Track page views

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Portfolio Section */}
        <Route path="/portfolio" element={<Portfolio />}>
          <Route index element={<Portfolio_home />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="educational-qualifications" element={<Educational_qualifications />} />
        </Route>

        {/* Laptop Brands Section */}
        <Route path="/apple" element={<Apple />} />
        <Route path="/hp" element={<Hp />} />
        <Route path="/asus" element={<Asus />} />
        <Route path="/dell" element={<Dell />} />
        <Route path="/lenova" element={<Lenova />} />
        <Route path="/acer" element={<Acer />} />
      </Routes>
    </>
  );
}

export default App;
