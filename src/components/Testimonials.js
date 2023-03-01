import React from "react";

export default function Testimonials() {
     return (
          <div className="mx-[10%] Review mt-10 ">
               <div className="mt-20  xl:ml-32">
                    <p className="font-medium text-sm xl:text-lg">Testimonials</p>
                    <p className="font-bold text-md xl:text-5xl xl:w-[60%]">Check what our client say about us!</p>
               </div>
               <div className="flex flex-col mt-10 lg:flex-row">
                    <img src="/Images/Review.png" alt="" className="w-[100%] md:w-[20%] lg:w-[40%]" />
                    <div className="flex flex-col mt-4">
                         <p className="font-normal text-xs text-[black]/[.55] flex flex-row xl:text-lg xl:w-[90%] ">
                              <img src="/Images/Quotes.png" alt="" className="w-[5%] h-[5%] mr-2 lg:w-[10%] lg:h-[25%] lg:ml-10 xl:mr-5" />
                              Having a home based business is a wonderful asset to your life. The
                              problem still stands, when it comes timeadvertise your business for
                              a cheap cost. I know you have looked for to answer everywhere; I am
                              here to share a few simple creative ways,
                         </p>
                         <div className="lg:ml-[15%]">
                         <p className="font-bold text-sm mt-3 xl:text-xl">Valdemar Forsberg</p>
                         <p className="font-medium text-xs text-blue-500 xl:text-sm">Founder, Musk family</p>
                         </div>
                    </div>
               </div>
          </div>
     );
}
