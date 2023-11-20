import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";


const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
 
  return (
    <nav className='navbar container'>
       <button
        id="mobile-menu-toggle"
        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
        >
          <IoMdMenu/>
    </button>
      <div className='logo'>
        <img src="../images/logo.png" alt="logo" />
      </div>
        <ul  className={`navItems ${mobileMenuOpen ? 'active' : ''}`}>
         <li><a href="#" className='tag'>Home</a></li>
         <li><a href="#" className='tag'>About</a></li>
         <li><a href="#" className='tag'>Menu</a></li>
         <li><a href="#" className='tag'>Reservation</a></li>
         <li><a href="#" className='tag'>Order Online</a></li>
         <li><a href="#" className='tag'>Login</a></li>
        </ul>
    </nav>
  )
}

export default Nav
