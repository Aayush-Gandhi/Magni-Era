import React from 'react'

export default function AboutCompany() {
     return (
          <div className='flex flex-col mt-10 mb-20 lg:flex-row'>
               <div className="lg:w-[50%]">
                    <img src="/Images/AboutCompany.png" alt="" className='about-img h-[15rem] w-full xl:h-[30rem]' />
               </div>
               <div className=" pl-2 pt-16 lg:pl-20 lg:pt-8 lg:w-[40%]">
                    <p className='about-company font-medium text-xs text-[black]/[.55] xl:text-base'>ABOUT OUR COMPANY</p>
                    <p className='font-bold text-sm mt-10 lg:mt-5 xl:text-5xl'>Magniera Exim</p>
                    <p className='about-company text-xs mt-5 text-[black]/[.55] lg:text-xl'>Megniera Exim was established in 2020 to meet the needs and demands of varied verticals of industries with outstanding solutions.
                                   <br /> <br />
                    We have carved a niche as a prominent  Exporter and Supplier of the Material handling equipment’s, Civil, Insulation, Welding, Packaging, Water treatment chemicals and other needs of the Patrons.</p>

                    
               </div>
               <div className='horizontal-line'>
               </div> 
          </div>
     )
}
