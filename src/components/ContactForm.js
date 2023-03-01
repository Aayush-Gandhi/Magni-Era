import React from 'react'

export default function ContactForm() {
     return (
          <div className='ship px-4 mt-20 flex flex-col lg:pl-20'>
               <div className='ml-2 pt-1  text-white pt-[3%]'>
                    <p className='font-medium text-xs xl:text-lg'>Contact</p>
                    <p className='font-bold text-sm xl:text-5xl'>Request a Quote</p>
                    <p className='font-light text-xs xl:text-sm xl:w-[90%]'>Complete control over products allows us to ensure our customers receive the best quality prices and service.</p>
               </div>


               <div className='ml-2 mt-5'>
                    <form action="">
                         <div className='grid grid-cols-2  w-[60%] md:w-[50%] md:mt-3 md:gap-y-4 lg:grid-cols-2  lg:w-[40%] xl:gap-10'>
                              <div>
                                   <input type="text"
                                        placeholder='Full Name'
                                        className='border-2 rounded-lg h-[50%] w-[90%] text-xs px- py-2 bg-[#ffffffea] font-medium md:py-4 md:px-3  xl:py-6 xl:text-lg' />
                              </div>
                              <div>
                                   <input type="email"
                                        placeholder='Your Email'
                                        className='border-2 rounded-lg h-[50%] w-[100%] text-xs px-1 py-2 bg-[#ffffffea] font-medium md:py-4 md:px-3 xl:py-6 xl:text-lg' />
                              </div>
                              <div>
                                   <input type="number"
                                        placeholder='Phone Number'
                                        className='border-2 rounded-lg h-[50%] w-[90%] text-xs px-1 py-2 bg-[#ffffffea] font-medium md:py-4 md:px-3 xl:py-6 xl:text-lg' />
                              </div>
                              <div>
                                   <input type="email"
                                        placeholder='Select Industry'
                                        className='border-2 rounded-lg h-[50%] w-[100%] text-xs px-1 py-2 bg-[#ffffffea] font-medium md:py-4 md:px-3 xl:py-6 xl:text-lg' />
                              </div>

                              <div className='col-span-2'>
                                   <textarea name="" id=""
                                        placeholder='Additional Details!'
                                        cols="20" rows="2"
                                        className='border-2 rounded-lg bg-[#ffffffea] font-medium w-[15rem] md:w-[100%] md:h-[100%] lg:py-4 xl:py-4 xl:w-[32rem] xl:text-lg'></textarea>
                              </div>
                              <br />
                              <div>
                                   <button className='mx-5 px-2 mt-4 whitespace-nowrap py-1 mb-8 rounded-lg text-xs bg-[#2E3B95] text-white  lg:px-10 xl:text-lg'>Send Now</button>
                              </div>

                         </div>
                    </form>
               </div>










               {/* <div className="mt-10 sm:mt-0 w-[50%] ml-[16%]">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                         <div className="mt-5 md:col-span-2 md:mt-0">
                              <form action="#" method="POST">
                                   <div className="overflow-hidden shadow sm:rounded-md">
                                        <div className=" px-4 py-5 sm:p-6">
                                             <div className="grid grid-cols-6 gap-6">

                                                  <div className="col-span-6 sm:col-span-3">
                                                       <label htmlFor="first-name" className="block text-sm font-medium text-white">
                                                            
                                                       </label>
                                                       <input
                                                            type="text"
                                                            name="first-name"
                                                            id="first-name"
                                                            autoComplete="given-name"
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                       />
                                                  </div>

                                                  <div className="col-span-6 sm:col-span-3">
                                                       <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                                                             
                                                       </label>
                                                       <input
                                                            type="text"
                                                            name="email-address"
                                                            id="email-address"
                                                            autoComplete="email"
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                       />
                                                  </div>

                                                  <div className="col-span-6 sm:col-span-3">
                                                       <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                             
                                                       </label>
                                                       <input
                                                            type="number"
                                                            name="phone-number"
                                                            id="phone-number"
                                                            autoComplete="email"
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                       />
                                                  </div>
                                                  <div className="col-span-6 sm:col-span-3">
                                                       <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                                       </label>
                                                       <input
                                                            type="text"
                                                            placeholder='Select Industry'
                                                            name="select-industry"
                                                            id="Select-Industry"
                                                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                             <button
                                                  type="submit"
                                                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                             >
                                                  Save
                                             </button>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div> */}
          </div>
     )
}
