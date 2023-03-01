import { data } from 'autoprefixer'
import React from 'react'


const products = [
     {
          primg: "/Images/Sugar.png",
          Title: "Sugar"
     },
     {
          primg: "/Images/EdibleOil.png",
          Title: "Edible Oil"
     },
     {
          primg: "/Images/FMCG.png",
          Title: "FMCG"
     },
     {
          primg: "/Images/Chemicals.png",
          Title: "Chemicals"
     },
     {
          primg: "/Images/MetalsMinerals.png",
          Title: "Metals & Minerals"
     },
     {
          primg: "/Images/HunterChapman.png",
          Title: "Hunter Chapman"
     },
]



export default function OurProducts() {
     return (
          <div className='Products'>
               <div className="mt-5">
                    <p className='text-center text-sm font-semibold text-[black]/[.55] md:mt-32 xl:text-lg'>OUR PRODUCTS</p>
                    <p className='text-center text-md font-bold xl:text-5xl'>Explore Our Products Categories</p>
               </div>
               <div className="grid grid-cols-1 gap-y-5 mt-10 pr-img-all mx-10 md:grid-cols-2 lg:grid-cols-3">


                    {
                         products.map((data) => {
                              return (
                                   <div className="relative pr-img">
                                        <img src={data.primg} alt="" />
                                        <div className=' -translate-y-10 translate-x-5 text-black bg-[white] w-[90%] h-14 pl-4 pt-1 xl:translate-x-12'>
                                             <p className='text-sm font-semibold py-2 xl:text-lg'>{data.Title}</p>
                                             <a href=" " className='text-xs font-black text-[black]/[.55] xl:text-base'>Learn more</a>
                                        </div>
                                   </div>)
                         })
                    }

                    {/*<div className="relative pr-img">
                    <img src="/Images/Sugar.png" alt=""  />     
                    <div className=' -translate-y-14 translate-x-20 text-black bg-[white] w-[90%] h-24 pl-5 pt-3'> 
                         <p className='text-2xl font-semibold py-2'>Sugar</p>
                         <a href=" " className='text-xl font-black text-[black]/[.55]'>Learn more</a>
                     </div>
               </div>     
               <div className="relative pr-img">
                    <img src={"/Images/EdibleOil.png"} alt="" />
                    <div className=' -translate-y-14 translate-x-20 text-black bg-[white] w-[90%] h-24 pl-5 pt-3'> 
                         <p className='text-2xl font-semibold py-2'>Edible Oil</p>
                         <a href=" " className='text-xl font-black text-[black]/[.55]'>Learn more</a>
                     </div>     
               </div>     
               <div className="relative pr-img">
                    <img src="/Images/FMCG.png" alt="" />
                    <div className=' -translate-y-14 translate-x-20 text-black bg-[white] w-[90%] h-24 pl-5 pt-3'> 
                         <p className='text-2xl font-semibold py-2'>FMCG</p>
                         <a href=" " className='text-xl font-black text-[black]/[.55]'>Learn more</a>
                     </div>     
               </div>     
               <div className="relative pr-img">
                    <img src="/Images/Chemicals.png" alt="" />   
                    <div className=' -translate-y-14 translate-x-20 text-black bg-[white] w-[90%] h-24 pl-5 pt-3' > 
                         <p className='text-2xl font-semibold py-2'>Chemicals</p>
                         <a href=" " className='text-xl font-black text-[black]/[.55]'>Learn more</a>
                     </div>  
               </div>     
               <div className="relative pr-img">
                    <img src="/Images/MetalsMinerals.png" alt="" /> 
                    <div className=' -translate-y-14 translate-x-20 text-black bg-[white] w-[90%] h-24 pl-5 pt-3'> 
                         <p className='text-2xl font-semibold py-2'>Metals and Minerals</p>
                         <a href=" " className='text-xl font-black text-[black]/[.55]'>Learn more</a>
                     </div>    
               </div>     
               <div className="relative pr-img">
                    <img src="/Images/HunterChapman.png" alt="" />
                    <div className=' -translate-y-14 translate-x-20 text-black bg-[white] w-[90%] h-24 pl-5 pt-3'> 
                         <p className='text-2xl font-semibold py-2'>Hunter Chapman</p>
                         <a href=" " className='text-xl font-black text-[black]/[.55]'>Learn more</a>
                     </div>     
               </div>      */}

               </div>
          </div>
     )
}
