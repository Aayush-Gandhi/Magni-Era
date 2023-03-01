import React from 'react'
import {Navbar, Footer, ProductsMain, Testimonials, ContactForm, OurProducts} from '../components'

const Products = () => {
  return (
    <div>
          <Navbar /> 
          <ProductsMain />
          <OurProducts />

          <Testimonials />
          <ContactForm />
          <Footer /> 
    </div>
  )
}

export default Products
