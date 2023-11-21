import React from 'react'
import "./HeroSection.css"

const HeroSection = () => {
  return (
    <div className='heroSection'>
      <div className='heroSectionContainer'>
        <div className='sectionLeft'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <button className='btn'>Reserve Table</button>
        </div>
        <div className='sectionRight'>
            <div className="imgBox">
            <img src="../images/restaurantfood.jpg" alt="Restaurant Food" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
