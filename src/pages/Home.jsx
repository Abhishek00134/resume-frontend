import React from 'react'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import Testimonial from '../components/home/Testimonial'
import CalltoAction from '../components/home/CalltoAction'
import Footer from '../components/home/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Testimonial/>
      <CalltoAction/>
      <Footer/>
    </div>
  )
}

export default Home
