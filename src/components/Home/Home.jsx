import React from 'react'
import TopBar from '../Navbar/TopBar'
import MainHeader from '../Navbar/MainHeader'
import Navigation from '../Navbar/Navigation'
import HeroSection from '../Hero/Hero'
import AboutDukaanWala from '../About/About'
import HowItWorks from '../HowItWork/HowItWork'
import BuyerBenefits from '../BuyerBenefits/BuyerBenefits'
import FeaturedShops from '../Featured/FeaturedShop'
import Testimonials from '../Testimonial/Testimonial'
import CTASection from '../CTA/CTA'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      <TopBar />
      <MainHeader />
      <Navigation />
      <HeroSection />
      <AboutDukaanWala />
      <HowItWorks />   
      <BuyerBenefits />
      <FeaturedShops />
      <Testimonials/>
      <CTASection/>
      <Footer />
    </div>
  )
}

export default Home
