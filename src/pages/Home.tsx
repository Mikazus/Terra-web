import React from 'react'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats' 
import About from '../pages/About'
import Program from '../pages/Program'
import Donate from '../pages/Donate'

const Home: React.FC = () => {
  return (
    <div>
      <section id="home">
        <Hero />
      </section>
      <section id="stats">
        <Stats /> 
      </section>
      <section id="about">
        <About />
      </section>
      <section id="program">
        <Program />
      </section>
      <section id="donate">
        <Donate />
      </section>
    </div>
  )
}

export default Home