import React from 'react'
import About from './About'
import HeroSection from './Main/HeroSection'
import Highlights from './Main/Highlights'

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
      <section className="testimonialsSection">
        <h1>TestiMonilas</h1>
      </section>
    </main>
    <About/>
    </>
  )
}

export default Main
