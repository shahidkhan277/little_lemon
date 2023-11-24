import React from 'react'
import HeroSection from './Main/HeroSection'
import Highlights from './Main/Highlights'
import Testimonials from './Main/Testimonials'
import About from './About/About'


const Main = () => {
  return (
    <>
    <main className='main'>
      <section className='heroSection' >
        <HeroSection/>
      </section>
      <section className='highlightsSection'>
          <Highlights/>
      </section>
      <section  className="testimonialsSection">
        <Testimonials/>
      </section>
    </main>
    <About/>
    </>
  )
}

export default Main
