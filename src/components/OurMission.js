import React from "react";

export default function OurMission() {
  return (
    <div className="flex flex-col border-t-2 justify-center lg:flex-row lg:gap-20 lg:ml-10 xl:mx-10">
      <div className="mt-10  px-4 lg:w-1/3 lg:pl-20 xl:pl-5">
      {/* w-1/3 */}
        <p className="text-md font-bold xl:text-5xl">Our Mission, Vision & Values</p>
        <p className="text-sm font-semibold mt-10 text-[black]/[.55] xl:text-xl">
          Helping & providing The best services to our client Business since
          2013
        </p>
        <p className="text-xs font-normal mt-8 text-[black]/[.55] xl:text-lg">
          To Understand and Beyond the Expectations of our Valued Customers,
          While Delivering a High-Quality Product, and Solutions to their Most
          Demanding Requirements.!
        </p>
        <img src="/Images/Map.png" alt=""  className="mt-10  lg:ml-[5%]"/>
      </div>

      <div className="mt-10 ml-2 flex flex-col justify-center lg:w-[20%] ">
      {/* w-1/3 */}
        <img src="/Images/mission.png" alt="" className="w-[30%]  lg:w-[20%] xl:w-[30%]"/>
        <p className="text-md font-bold xl:text-2xl  xl:mt-10">Our Mission</p>
        <p className="mt-5 text-[black]/[.55] text-xs xl:text-lg">
          To provide high quality service to our clients through total
          commitment to innovative engineering and use of best combination of
          technical resources for the benefit of society.
        </p>
      </div>

      <div className="mt-10 flex flex-row gap-10 lg:w-1/3 lg:flex-col xl:w-[20%]">
      {/* w-1/3 */}
        <div className="w-1/2 lg:w-[70%]">
          <img src="/Images/vision.png" alt="" className="w-[40%] xl:w-[30%]"/>
          <p className="text-md font-bold mt-8 xl:text-2xl"> Our Vision</p>
          <p className="mt-5 text-xs text-[black]/[.55] xl:text-lg">
            Providing quality products and services to clients exhibiting total
            commitment, accountability and quality management to our operations,
            without compromising.
          </p>
        </div>
        
        <div className="w-1/2 block">
          <img src="/Images/value.png" alt="" className="w-[34%] xl:w-[30%]"/>
          <p className="text-md font-bold mt-5 xl:text-2xl"> Core Values</p>
          <p className="mt-5 text-sm text-[black]/[.55] xl:text-lg">Honesty <br /> Integrity <br /> Enthusiasm  <br /> Dedication <br /> Operational Excellence</p>
        </div>
      </div>
    </div>
  );
}
