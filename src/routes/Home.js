import React from 'react'
import { Navbar, Intro, AboutCompany, OurMission, OurProducts, Testimonials, ContactForm, Footer } from '../components';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutCompany />
      <OurMission />
      <OurProducts />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default Home;