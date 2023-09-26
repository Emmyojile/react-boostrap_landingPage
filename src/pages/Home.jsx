import React from 'react'
import Carousel from '../components/Carousel'
import About from '../components/About'
import Service from '../components/Service'
import Portfolio from '../components/Portfolio'
import Team from '../components/Team'
import Contact from '../components/Contact'
import CustomNav from '../components/Nav'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <CustomNav/>
    <Carousel />
      <About />
      <Service />
      <Portfolio />
      <Team />
      <Contact />
      <Footer/>
    </div>
  )
}

export default Home