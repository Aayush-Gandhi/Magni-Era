import React from 'react'
import { Navigate, useNavigate} from 'react-router-dom'

export default function Intro() {
     const Navigate = useNavigate()
     return (
          <div className='mt-5 intro-img ' style={{
               // background: linear-gradient( rgba(3,3,3,0.5), rgba(3,3,3,0.5)),url({'/Images/value.png'}),
               // backgroundImage: "url(/Images/main.png)",
               // backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               // height: "45rem",

          }}
          >
               
               <div className="pt-[5%] mx-[8%]">
                    <p className=' font-bold text-white text-sm sm:w-[40%]  lg:text-3xl lg:w-[45%] lg:mt-20 xl:text-6xl xl:w-[65%]'>Provide EXIM solutions to your business! </p>
                    <p className=' pt-4 text-xs text-white sm:w-[50%] lg:text-xl lg:w-[60%] xl:text-lg'>Precision machining in <span className=' font-semibold' > 3axis-5axis machines </span> with minimizing the tolerance. Since its foundation the company has doubled its turnover year on year, with its staff numbers swelling accordingly.</p>
                    <div className="mt-2 pb-2 sm:mt-8 lg:pb-32">
                         <button type='' onClick={() => Navigate('/Aboutus')}  className='bg-white rounded-md p-1 text-xs font-semibold lg:text-base xl:p-3' >More About Us!</button>
                         <button type='' className='bg-white mx-4 rounded-md p-1 text-xs font-semibold  lg:text-base xl:p-3 xl:px-8'>Get A Quote</button>
                    </div>
               </div>
          </div>
     )
}

