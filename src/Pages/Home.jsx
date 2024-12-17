import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Featured from '../components/Featured'
import Tops from '../components/Tops'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Services />
        <Featured />
        <Tops/>
    </div>
  )
}

export default Home