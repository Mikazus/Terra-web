import React from 'react'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats' 
import About from '../pages/About'
import Program from '../pages/Program'
import Article from '../pages/Article'
import Donate from '../pages/Donate'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats /> 
      <About />
      <Program />
      <Article />
      <Donate />
    </div>
  )
}

export default Home