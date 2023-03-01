import React from 'react'

export default function OurTeam() {
     return (
          <div>
               <div className='bg-slate-200 w-[95%] ml-5 text-center relative mb-[30%] mt-32 lg:ml-[20%] lg:w-[60%]'>
                    <p className='pt-20 font-semibold text-md lg:text-2xl'>Our Team</p>
                    <p className='mt-10 px-2 pb-32 text-center text-sm font-normal text-[#2E3B95] lg:px-28 lg:text-xl'>The company is expanding into newer horizons with a missionary zeal and a dynamic team under the leadership of a strong visionary Mr. Sitaram Patel. Rapid Overseas as a team modest , multi-disciplinary, committed to customer satisfaction.</p>

                    <div className="flex  w-[100%] px-20 gap-6 absolute top-[88%] ">
                         <div>
                              <img src="./Images/CEO.png" alt="" className='opacity-90 w-full' />
                              <p className='font-semibold text-md text-[#2E3B95] mt-2 lg:mt-10 xl:text-2xl'>Mr. Malay Patel</p>
                              <p className='font-black text-md text-black/[.55] xl:text-xl'>CEO</p>
                         </div>
                         <div>
                              <img src="./Images/Founder.png" alt="" />
                              <p className='font-semibold text-md text-[#2E3B95] mt-2 lg:mt-10 xl:text-2xl'>Mr. Sanjay Patel</p>
                              <p className='font-black text-md text-black/[.55] xl:text-xl'>Founder</p>
                         </div>
                    </div>
               </div>
               {/* <div className="flex w-[20%] ml-[28%] gap-20 absolute top-5">
                    <img src="./Images/CEO.png" alt="" />
                    <img src="./Images/Founder.png" alt="" />
               </div> */}
          </div>
     )
}
