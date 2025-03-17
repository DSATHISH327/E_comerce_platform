import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/login">LOGIN</Link></li>
        <li><Link to="/signup">SIGN-UP</Link></li>
        <li><Link to="/Portfolio">PORTFOLIO</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
