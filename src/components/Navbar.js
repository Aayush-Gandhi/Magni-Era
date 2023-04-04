import React, { useState } from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa'
import { IoMdMailOpen } from 'react-icons/io'
import { Navigate, useNavigate } from 'react-router-dom'
// import {  }


export default function Navbar() {
     const Navigate = useNavigate()
     const [open, setOpen] = useState(true)

     const handleOpen = () => {
          setOpen(!open)
     }
     return (
          <div>
               <nav className=''>
                    <div className="flex ">
                         <div className="flex flex-col justify-center w-[100%] md:ml-14">
                              <a>
                                   <img src={"/Images/Logo.png"} className="w-[50%] md:w-[90%] lg:w-[50%] xl:w-[20%] xl:ml-20" />
                              </a>
                              {/* <h1>Magniera</h1> */}
                         </div>
                         <div className="lg:pr-[5%]">
                              <div className="px-9 ">
                                   <ul className=" hidden 
                                   md:block md:flex space-x-6 py-5 pr-[1rem] justify-end">
                                        <li><a rel="stylesheet" href="" ><AiFillFacebook /></a></li>
                                        <li><a rel="stylesheet" href="" ><AiOutlineTwitter /></a></li>
                                        <li><a rel="stylesheet" href="" ><FaLinkedinIn /></a></li>
                                        <li><a rel="stylesheet" href="" ><AiFillYoutube /></a></li>
                                        <li><a rel="stylesheet" href="" ><IoMdMailOpen /></a></li>
                                   </ul>
                              </div>
                              <div>
                                   {
                                        open ? <div className="hidden lg:block">
                                             <ul className="
                                   mx-4 flex 
                                   text-center space-x-5
                                   text-base font-semibold 
                                   pb-5">
                                                  <li><a rel="stylesheet" href="" onClick={() => Navigate('/')}>Home </a></li>
                                                  <li><a rel="stylesheet" href="" onClick={() => Navigate('/Products')} >Products </a>
                                                  </li>
                                                  <li><a rel="stylesheet" href="" onClick={() => Navigate('/Aboutus')}>Aboutus </a></li>
                                                  <li><a rel="stylesheet" href="" onClick={() => Navigate('/Contactus')}>Contactus </a></li>
                                             </ul>
                                        </div>
                                             :
                                             <div className="">
                                                  <ul className="mx-5 flex flex-col 
                                         px-10 pt-10 text-center left-0 w-[95%] 
                                        text-base font-semibold 
                                         mt-[13%] md:mt-[4%] bg-white space-y-5 z-10 absolute pb-5
                                         ">
                                                       <li><a rel="stylesheet" href="" onClick={() => Navigate('/')}>Home </a></li>
                                                       <li><a rel="stylesheet" href="" onClick={() => Navigate('/Products')} >Products </a>
                                                       </li>
                                                       <li><a rel="stylesheet" href="" onClick={() => Navigate('/Aboutus')}>About us </a></li>
                                                       <li><a rel="stylesheet" href="" onClick={() => Navigate('/Contactus')}>Contact us </a></li>
                                                  </ul>
                                             </div>
                                   }
                              </div>
                         </div>
                         <div className="mailinfo py-4 px-2 mr-5 flex flex-col bg-[#DCDDE2]  h-24 hidden sm:block sm:text-xs sm:h-20 md:block lg:mr-20">
                              <p className='text-center'>Have a question? Mail</p>
                              <a href='#' className='font-semibold text-center text-base sm:text-sm'>Magnieraexim@gmail.com</a>
                         </div>
                         <div className='mt-5'>
                              {
                                   open ?
                                        <div className="btn block lg:hidden">
                                             <button onClick={handleOpen} className='py-3 px-3 bg'><FaBars /></button>
                                        </div> : <div className="btn block lg:hidden">
                                             <button onClick={handleOpen} className='py-3 px-3 '><FaTimes /></button>
                                        </div>
                              }
                         </div>
                    </div>
               </nav>
          </div>
     )
}


{/* <div className="nav">
<div className="logo">
     <img src="/Images/Logo.png" alt="" />
</div>
<div className="menu">
     <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Contact us</a></li>
     </ul>
</div>
<div className="mail">
     <p>Have a question? Mail</p>
     <a href='#'>Magnieraexim@gmail.com</a>
</div>
</div> */}