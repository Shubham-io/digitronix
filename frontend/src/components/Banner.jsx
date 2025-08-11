import React from "react";
import bannerGirl from "../assets/banner-girl.png";

const Banner = () => {
  return (
    <section className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-b from-[#88C0D0] to-[#A5DCEA]">
      {/* Background Text Layer - Behind the image */}
      <div className="absolute top-12 inset-x-0 md:top-16 md:left-40  flex items-center justify-center">
        <div className="text-white text-3xl md:text-5xl lg:text-8xl font-bold opacity-90 select-none pointer-events-none">
          <div className="flex flex-wrap  justify-center leading-18 gap-2  md:gap-4">
            <span>Social</span>
            <span>Media</span>
            <span className="ml-2 md:ml-16">Marketing</span>
            <span>SEO</span>
          </div>
        </div>
      </div>

      {/* Main Image - Middle layer */}
      <div className="absolute inset-0 flex items-center justify-center z-10 transition-transform duration-400 ease-in hover:scale-110">
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 ">
          {/* REPLACE WITH YOUR IMAGE: Woman with red headband holding phone */}
          <img
            src={bannerGirl}
            alt="Happy woman with phone"
            className="w-full h-full object-cover rounded-full "
          />
        </div>
      </div>

      {/* Foreground Text Layer - In front of the image */}
      <div className="absolute inset-0  top-12 md:top-16 md:left-20 flex items-center justify-center z-20">
        <div className="text-white text-3xl md:text-5xl lg:text-6xl font-bold select-none pointer-events-none">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <span className="opacity-100">Optimization</span>
            <span className="opacity-100">Strategy</span>
          </div>
        </div>
      </div>

      {/* Optional overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
    </section>
  );
};

export default Banner;
