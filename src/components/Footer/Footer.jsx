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
            {/* <h3>Doormat <br></br>Navigation</h3>
            <div className='footerNavbar'>
              <a href="#" className="tag">Home</a>
              <a href="#" className="tag">About</a>
              <a href="#" className="tag">Menu</a>
              <a href="#" className="tag">Reservation</a>
              <a href="#" className="tag">Order Online</a>
            </div> */}
          </div>
          <div className="contact">
            <h3>Contact us</h3>
            <ul>
              <li><span><FaHome /> </span>Peshawar City, Pakistan</li>
              <li><span><FaPhone /></span> +923422534816</li>
              <li><span><MdEmail /></span> afridi.sk1720@gmail.com</li>
            </ul>
          </div>
          {/* <div className="contact">
          <h3>Contact us</h3>
          <div className="contacts">
            <p><span><FaHome /> </span>Peshawar City, Pakistan</p>
            <p><span><FaPhone /></span> +923422534816</p>
            <p><span><MdEmail /></span> afridi.sk1720@gmail.com</p>
            </div>
        </div> */}
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
    </footer>
    //     <div>
    //     <div className="footer-background">
    //         <div className="footer-container">
    //             <img src="../images/logo.png" alt="Little Lemon logo" />
    //             <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally sourced menu with daily specials.</p>
    //             <div className="footer-content">
    //                 <div className="locations">
    //                     <h5>LOCATIONS</h5>
    //                     <ul>
    //                         <li>Accra</li>
    //                         <li>Kumasi</li>
    //                         <li>Cape Coast</li>
    //                         <li>Tamale</li>
    //                     </ul>
    //                 </div>
    //                 <div className="opening-times">
    //                     <h5>OPENING TIMES</h5>
    //                     <ul>
    //                         <li>Mon - Wed: 10:30AM - 12:00AM</li>
    //                         <li>Fri: 12:00PM - 1:00AM</li>
    //                         <li>Sat - Sun: 10:30AM - 12:00AM</li>
    //                     </ul>
    //                 </div>
    //                 <div className="contact">
    //                     <h5>CONTACT US</h5>
    //                     <ul>
    //                         <li>96 Abafom Road, North Ridge - Accra</li>
    //                         <li>Tel: 020 7928 0678</li>
    //                         <li>Email: info@littlelemon.com</li>
    //                     </ul>
    //                 </div>
    //         </div>
    //         <div className="copyright">
    //             <p>© 2023 Little Lemon Ltd. All rights reserved.</p>
    //         </div>
    //     </div>
    //     </div>
    // </div>
  )
}

export default Footer
