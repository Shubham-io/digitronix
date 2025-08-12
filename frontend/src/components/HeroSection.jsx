import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

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
          <div className="relative  -left-15 h-96 lg:h-[500px]">
            {/* Main Image Cards */}

            {/* Top Right - Yellow Card */}
            <div className="absolute  top-6 left-20 w-40 h-32 sm:w-62 sm:h-50 rounded-2xl  ">
              {/* REPLACE WITH YOUR IMAGE: Happy woman in glasses making hand gestures */}
              <img
                src={person1}
                alt="Happy woman making hand gestures"
                className="w-full h-full object-cover hover:scale-105 transition-transform ease-in duration-300"
              />
            </div>

            {/* Middle Right - Pink Card */}
            <div className="absolute top-24 right-13 sm:top-50 sm:right-25 w-40 h-46 sm:w-44 sm:h-64   rounded-2xl    ">
              {/* REPLACE WITH YOUR IMAGE: Man in blue shirt */}
              <img
                src={person2}
                alt="Professional man in blue shirt"
                className="w-full h-full object-cover hover:scale-105 transition-all ease-in duration-300"
              />
            </div>

            {/* Bottom Center - Teal Card */}
            <div className="absolute bottom-12 left-74 sm:bottom-2 sm:left-12 w-30 h-28 sm:w-48 sm:h-40  rounded-2xl  ">
              {/* REPLACE WITH YOUR IMAGE: Woman in striped shirt */}
              <img
                src={person3}
                alt="Woman in striped shirt thinking"
                className="w-full h-full object-cover hover:scale-105 transition-all ease-in duration-300"
              />
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
