import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar container'>
      <div className='logo'>
        <img src="../images/logo.png" alt="logo" />
      </div>
        <ul className='navItems'>
         <li><a href="#">Home</a></li>
         <li><a href="#">About</a></li>
         <li><a href="#">Menu</a></li>
         <li><a href="#">Reservation</a></li>
         <li><a href="#">Order Online</a></li>
         <li><a href="#">Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav
