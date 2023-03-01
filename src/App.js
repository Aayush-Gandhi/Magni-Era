import React from 'react';
import { Home, Products, Contactus, Aboutus } from './routes'
import './App.css';
import './style.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Aboutus' element={<Aboutus />} />
        <Route path='/Contactus' element={<Contactus />} />
      </Routes>
      {/* <Home/> */}
      {/* <Navbar /> */}


    </>
  );
}

export default App;
