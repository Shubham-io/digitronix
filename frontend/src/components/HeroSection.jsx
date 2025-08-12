import React from "react";
import img1 from "../assets/hero-img1.png";
import img2 from "../assets/hero-img2.png";

const HeroSection = () => {
  return (
    <section className="relative bg-transparent py-12 md:py-20 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <span className="text-4xl sm:text-5xl lg:text-7xl font-bold  text-gray-900 leading-tight">
              Bhushan
              <br />
              Digitronix
            </span>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-2 max-w-lg">
              Extract real business value from social media. Ensuring the best
              return on investment for your bespoke SEO campaign requirement.
            </p>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-[1.01] duration-300">
              CONTACT TODAY
            </button>
          </div>

          {/* Right Visual Elements */}
          <div className="relative flex flex-col md:flex-row  justify-center  items-start">
            {/* Main Image Cards */}
            <div  >
              <img src={img1} alt="img1" className="w-full md:w-7xl" />
            </div>
            <div>
              <img src={img2} alt="img2" className="w-full md:w-3xl" />
            </div>

            {/* Decorative Elements */}

            {/* Lightbulb Icon */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
