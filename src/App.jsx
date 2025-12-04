import { useState } from 'react'
import Header from './pages/Header'
import './index.css'
import Hero from './pages/Hero'
import Hero2 from './pages/Hero2'
import Footer from './pages/Footer'
import Carousel from './pages/Carousel'


function App() {

  return (
    <>
    <Header/>
    <Hero/>
    <Hero2/>
    <div style={{ height: '600px', position: 'relative' }}>
    <Carousel
    baseWidth={300}
    autoplay={true}
    autoplayDelay={3000}
    pauseOnHover={true}
    loop={true}
    round={false}
    />
    </div>
    <Footer/>


      
    </>
  )
}

export default App