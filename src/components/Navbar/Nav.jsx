import { useState } from 'react'
import "./Navbar.css";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import Login from './Login';



const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const [seen, setSeen] = useState(false)

  function togglePop() {
    setSeen(!seen);
  };
  return (
    <nav className='navbar'>
      <button
        id="mobile-menu-toggle"
        className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
        onClick={toggleMobileMenu}
      >
        <IoMdMenu />
      </button>
      <div className='nav-logo'>
        <img src="../images/logo.png" alt="logo" />
      </div>
      <ul className={`navItems ${mobileMenuOpen ? 'active' : ''}`}>
        <li><Link to="/"><a className='tag'>Home</a></Link></li>
        <li><a href="#about" className='tag'>About</a></li>
        <li><a href="#menu" className='tag'>Menu</a></li>
        <li><Link to="/ReserveTable"><a className='tag'>Reservation</a></Link></li>
        <li><a href="#" className='tag'>Order Online</a></li>
        <div>
        <button className='nav-btn' onClick={togglePop}>Login</button>
              {seen ? <Login toggle={togglePop} /> : null}
          </div>
      </ul>
    </nav>
  )
}

export default Nav
