import Image1 from "../Assets/Images/restaurant1.jpg";
import Image2 from "../Assets/Images/restaurant2.jpg";
import "./About.css";

const About = () => {
  return (
    <article id="about" className='aboutSection'>
         <h2 style={{textAlign:"center"}}>About us</h2>
      <div className="aboutContainer">
        <div className="aboutLeftSection">
        <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist and taste.<br></br>The main Purpose of this restaurant is to provide quality services and Food. Our Happiness is in Customer Satisfications. </p>
        </div>
        <div className="aboutRightSection">
            <div className="about_imgBox">
            <img src={Image2} alt="Our Restaurant" />
            </div>
        </div>
      </div>
    </article>
  )
}

export default About
