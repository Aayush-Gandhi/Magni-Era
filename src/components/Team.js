import React from 'react'

export default function Team() {
     return (
          <div>
               <div className="flex flex-col lg:gap-8">
                    <div className='lg:flex mx-[25%] lg:px-[10%] lg:mx-[0%] xl:px-[5%] xl:pl-[10%]'>
                         <img src="./Images/Team1.png" alt="" className='max-w-[100%] mt-20 my-10 lg:max-w-[30%] xl:w-[25%]' />
                         <img src="./Images/Team2.png" alt="" className='max-w-[100%] lg:max-w-[40%] lg:mx-5 xl:w-[28%]'/>

                         <p className='text-center my-10 text-xl font-semibold text-[#2E3B95] lg:text-left lg:w-[50%] lg:mt-32 xl:text-5xl xl:w-[40%] xl:mt-44'>
                              The Team Behind Magniera <br />
                              <span className='font-sm text-lg text-black/[.55] xl:text-base'>This is how passion is born and nurtured. </span>
                         </p>

                    </div>
                    <div className='lg:flex px-[25%] lg:px-[10%]'>
                         <img src="./Images/Team3.png" alt="" className='max-w-[100%] lg:max-w-[45%]' />
                         <img src="./Images/Team4.png" alt="" className='max-w-[100%] mt-10 lg:ml-20 lg:max-w-[45%]' />

                    </div>
               </div>








               {/* <div className="grid grid-cols-1 mx-[15%] items-center justify-center ">
                    <div className=' lg:col-start-1 lg:col-end-3 '>
                         <img src="./Images/Team1.png" alt="" className='max-w-xs'/>
                    </div>
                    <div className='lg:col-start-3 lg:col-end-5'>
                    <img src="./Images/Team2.png" alt="" className='max-w-sm'/>
                    </div>
                    <div className='lg:col-start-5 lg:col-end-7'>
                         <p className='text-5xl font-semibold text-[#2E3B95]'> The Team Behind Magniera</p>
                         <p className='font-normal text-lg text-black/[.55]'>This is how passion is born and nurtured. </p>
                    </div>
                    <div className='lg:col-start-1 lg:col-end-4 mt-10'>
                         <img src="./Images/Team3.png" alt="" className='max-w-xl'/>
                    </div >
                    <div className='col-start-4 col-end-7 mt-10'>
                         <img src="./Images/Team4.png" alt="" className='max-w-lg'/>
                    </div>

               </div> */}
          </div>
     )
}
