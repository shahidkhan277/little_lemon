import { FaHome, FaPhone, FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css"


const Footer = () => {
  return (
    <footer className='footerSection'>
      <div className="footerContainer">
        <div className="footerimage">
          <img src="../images/flogo.png" alt="RestaurantFood" />
          <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
        </div>
        <div className="footerNavSection">
          <div className="footerNav">
            <div className="locations">
              <h3>Doormat Navigation</h3>
              <ul>
                <li> <a href="#" className="tag">Home</a></li>
                <li><a href="#" className="tag">About</a></li>
                <li><a href="#" className="tag">Menu</a></li>
                <li><a href="#" className="tag">Reservation</a></li>
                <li><a href="#" className="tag">Order Online</a></li>
              </ul>
            </div>
          </div>
          <div className="contact">
            <h3>Contact us</h3>
            <ul>
              <li><span><FaHome /> </span>Peshawar City, Pakistan</li>
              <li><span><FaPhone /></span> +923422534816</li>
              <li><span><MdEmail /></span> afridi.sk1720@gmail.com</li>
            </ul>
          </div>
          <div className="socialmediaLinks">
            <h3>Social Media</h3>
            <div className="socialmediaIcons">
              <FaFacebook className="fb" />
              <FaInstagram className="insta" />
              <FaLinkedin className="linkedIn" />
              <FaGithub className="gitHub" />
            </div>
          </div>
        </div>
      </div>
      <p style={{textAlign:"center", color:"white" ,}}>© 2023 Little Lemon Ltd. All rights reserved. @MSK </p>
    </footer>

  )
}

export default Footer
