import React from 'react'
import {Navbar, Footer, ContactusIntro, ContactusForm, Gmap} from '../components'


const Contactus = () => {
  return (
    <div>
          <Navbar />
          <ContactusIntro />
          <ContactusForm />
          <Gmap />
          <Footer />
    </div>
  )
}

export default Contactus
