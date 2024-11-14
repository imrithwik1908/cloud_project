import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonial from '../components/Testimonial';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

function LoginPage() {
  return (
    <div className='mx-2'>
      <Navbar/>
      <Hero/>
      {/* <Features/>       */}
      <Testimonial />
      {/* <CallToAction /> */}
      {/* <Footer />        */}
    </div>
    
  )
}

export default LoginPage