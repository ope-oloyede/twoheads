import React from 'react'
import Navbar from './components/navbar/page'
import HeroSection from './components/hero-section/page'
import WhyTwoHeads from './components/why/page'
import Footer from './components/footer/page'

export default function TwoHeads() {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <WhyTwoHeads />
        <Footer />
    </div>
  )
}
