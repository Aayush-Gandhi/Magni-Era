import React from 'react'
import { AiFillFacebook, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoMdMailOpen } from 'react-icons/io'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Footer() {
     const Navigate = useNavigate()
     return (
          <div className='bg-[#13193E] lg:pt-32'>
               <div className="flex text-white">
                    <div className="pt-20 ml-[10%] w-[80%] sm:w-[30%] xl:ml-[8%]">
                         <p className='font-bold text-xs xl:text-2xl'>Quick Contact</p>
                         <p className='font-medium text-xs text-[white]/[.55] mt-5 xl:text-base'>+91 909-970-0079</p>
                    </div>
                    <div className="pt-20 sm:w-[40%] md:ml-20 lg:ml-0">
                         <p className='font-bold text-xs xl:text-2xl'>Address</p>
                         <p className='font-medium text-xs mt-5 text-[white]/[.55] xl:text-base'>219 R K Prime, Next to silver heights, <br />
                              Nana mava circle 150 feet ring road, Rajkot 360005</p>
                    </div>
               </div>

               <div className='px-4 border-t-2 border-b-2 mt-20 py-20 flex flex-col justify-between md:mx-20 lg:mx-20 lg:flex-row lg:w-[80%] xl:w-[84%] xl:mx-24 '>
                    <div className='text-white md:border-r-2 lg:w-[50%] xl:w-[40%]'>
                         <img src="/Images/FLogo.png" alt="" className='w-[70%] sm:w-[30%]' />
                         <p className='font-semibold mt-5 text-sm xl:text-2xl'>SUBSCRIBE TO OUR NEWSLETTER</p>
                         <p className='mt-2 font-normal text-[white]/[.55] text-sm  xl:text-base'>The latest news, articles, and resources, sent  to
                              your inbox monthly.</p>




                         <div className=" mt-5 hero bg-gredient-dark h-400px flex flex-col pr-5 lg:-w-[30%]">
                              <div className="search-box mx-auto my-auto w-full sm:w-[50%] md:w-[50%] lg:w-[100%] xl:w-full">
                                   <form className="flex flex-row">
                                        <input
                                             className="h-10 rounded-xl rounded-r-none bg-white opacity-[0.4] text-grey-darker py-2 font-normal text-grey-darkest border border-gray-100 font-bold w-full py-1 px-2 outline-none text-xs text-gray-900 xl:py-8 xl:text-base"
                                             type="text" placeholder="Enter Your Email" />
                                        <span
                                             className="flex items-center bg-white bg-opacity-[0.4] rounded-xl rounded-l-none border-0 px-3 font-bold ">
                                             <button
                                                  className="bg-[#2E3B95] hover:bg-gredient-light text-xs text-white font-semibold py-2 px-3 rounded xl:text-base ">Subscribe</button>
                                        </span>
                                   </form>
                              </div>
                         </div>


                         {/* <div className='relative w-[100%]  sm:w-[60%] md:w-[50%] lg:w-[30%]'>
                              <input type="text" placeholder='Enter your email' className='p-4 pr-10 rounded-xl mt-4 bg-slate-400 placeholder-white text-sm font-semibold ' /> 
                              <button type='' className='bg-[#2E3B95] rounded-md p-2 text-xs font-semibold translate-x-[0%]  ml-[70%] sm:translate-x-[30%] md:translate-x-[40%] lg:left-[12%] xl:translate-x-[20%] absolute top-7' >Subscribe</button>
                         </div> */}
                    </div>
                    <div className='flex flex-col justify-between lg:flex-row lg:gap-8 lg:ml-14 xl:ml-32  '>
                         <div className='mt-10 text-center text-[white]/[.55] lg:text-left'>
                              <p className='font-bold text-white mb-4'>QUICK LINK</p>
                              <p> <a rel="stylesheet" href="" onClick={() => Navigate('/Products')} >Our Products </a> </p>
                              <p> <a rel="stylesheet" href="" onClick={() => Navigate('/Aboutus')} >About </a> </p>
                              <p> <a rel="stylesheet" href="" onClick={() => Navigate('/Contactus')}>Contact </a> </p>
                         </div>
                         <div className='mt-10 text-center text-[white]/[.55] lg:text-left lg:w-32 lg:ml-5 '>
                              <p className='font-bold text-white mb-4'>Products</p>
                              <p> <a href=''> FMC </a></p>
                              <p> <a href=''> Sugar </a></p>
                              <p> <a href=''> Edibal Oil </a></p>
                              <p> <a href=''> Chemicals </a></p>
                              <p> <a href=''> Metal & Minerals </a></p>
                              <p> <a href=''> Construction </a></p>
                         </div>
                         <div className='text-white'>
                              <p className='mt-10 text-center font-bold lg:text-left'>Contact</p>
                              <ul className='flex flex-row justify-center mt-5 gap-4'>
                                   <li><a rel="stylesheet" href="" ><AiFillFacebook /> </a> </li>
                                   <li><a rel="stylesheet" href="" ><AiOutlineTwitter /> </a> </li>
                                   <li><a rel="stylesheet" href="" ><FaLinkedinIn /> </a> </li>
                                   <li><a rel="stylesheet" href="" ><AiFillYoutube /> </a> </li>
                                   <li><a rel="stylesheet" href="" ><IoMdMailOpen /> </a> </li>
                              </ul>
                         </div>
                    </div>
               </div>
               <div className='flex flex-col text-[white]/[.55] justify-between mx-5 py-10 md:mx-20 xl:ml-24 xl:mr-28'>
                    <p>2019-2020 © Magniera Exim </p>
                    <ul className='flex mt-5 space-x-10 justify-between'>
                         <li><a rel="stylesheet" href=""> Privacy Policy </a></li>
                         <li><a rel="stylesheet" href=""> Terms & Conditions </a></li>
                    </ul>
               </div>

          </div>
     )
}
