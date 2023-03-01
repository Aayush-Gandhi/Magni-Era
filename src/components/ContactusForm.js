import React from 'react'

export default function ContactusForm() {
     return (
          <div>
               <div className='mt-10 text-center lg:mt-40'>
                    <p className=' text-xl font-semibold lg:text-5xl'>What can we do for your business?</p>
                    <p className='text-lg font-normal text-[grey] mt-5 lg:text-2xl'>We want to hear from you. Let us know how we can help.</p>
               </div>
               <div className='w-[90%] mx-[5%] mt-20 mb-32 md:w-[70%] md:mx-[20%] lg:mx-[25%] lg:w-[50%] xl:mx-[35%] xl:w-[30%]'>
                    <form action="">
                         <div className='grid grid-cols-2 gap-y-10 lg:grid-cols-2 gap-5'>
                              <div className='flex flex-col'>
                                   <label htmlFor="Name" className=' text-[grey] ml-5'> FULL NAME </label>

                                   <input type="text"
                                        className='border-2 rounded-full px-1 lg:px-3 py-2 bg-[#ffffffcc] font-medium' />
                              </div>
                              <div className='flex flex-col'>
                                   <label htmlFor="Name" className=' text-[grey] ml-5'> E-MAIL </label>
                                   <input type="email"
                                        className='border-2 rounded-full px-1 lg:px-3 py-2 bg-[#ffffffcc] font-medium' />
                              </div>
                              <div className='flex flex-col'>
                                   <label htmlFor="Phone Number" className=' text-[grey] ml-5'> PHONE NUMBER </label>
                                   <input type="number"
                                        className='border-2  rounded-full px-1 lg:px-3 py-2 bg-[#ffffffcc] font-medium' />
                              </div>
                              <div className='flex flex-col'>
                                   <label htmlFor="Name" className=' text-[grey] ml-5'> SELECT INDUSTRY </label>
                                   <select name="cars" id="cars" className='border-2  rounded-full px-3 py-2 bg-[#ffffffcc] font-medium text-[grey]'>
                                        <option value="Product Categories">Product Categories</option>
                                   </select>
                              </div>
                              <div className='flex flex-col col-start-1 col-end-3'>
                                   <label htmlFor="message" className=' text-[grey] ml-5'> YOUR MESSAGE </label>
                                   <textarea name="" id=""

                                        placeholder='Additional Details!'
                                        className='border-2 rounded-xl w-[100%] h-[25vh] bg-[#ffffffcc] font-medium'></textarea>
                              </div>
                              <div>
                                   <button className='px-20 py-4 md:px-10 rounded-full bg-[#2E3B95] text-white '>Send Now</button>
                              </div>
                         </div>
                    </form>
               </div>
          </div>
     )
}
