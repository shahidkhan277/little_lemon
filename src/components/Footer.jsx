import { FaHome , FaPhone , FaFacebook , FaInstagram , FaLinkedin , FaGithub } from "react-icons/fa";
import {MdEmail} from "react-icons/md";


const Footer = () => {
  return (
    <footer className='footerSection'>
        <div className="footerContainer">
        <div className="footerimage">
          <img src="../images/restaurantfood.jpg" alt="RestaurantFood" />
        </div>
        <div className="footerNavSection">
        <div className="footerNav">
            <h3>Doormat Navigation</h3>
            <div className='footerNavbar'>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Menu</a>
              <a href="#">Reservation</a>
              <a href="#">Order Online</a>
            </div>
        </div>
        <div className="contact">
          <h3>Contact us</h3>
          <div className="contacts">
            <p><span><FaHome /> </span>Peshawar City, Pakistan</p>
            <p><span><FaPhone /></span> +923422534816</p>
            <p><span><MdEmail /></span> afridi.sk1720@gmail.com</p>
            </div>
        </div>
        <div className="socialmediaLinks">
            <h3>Social Media</h3>
            <div className="socialmediaIcons">
            <FaFacebook className="fb" />
            <FaInstagram className="insta" />
            <FaLinkedin className="linkedIn" />
            <FaGithub  className="gitHub"/>
            </div>
         </div>
             </div>
          </div>
    </footer>
  )
}

export default Footer
