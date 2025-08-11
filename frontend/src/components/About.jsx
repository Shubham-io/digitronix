import React from "react";
import logo from "../assets/digitronics_logo.png";

const About = () => {
  return (
    <section className="py-12 bg-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left section - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* REPLACE WITH YOUR ABOUT IMAGE - Team photo, office space, or company representative */}
              <img
                src={logo}
                alt="Bhushan Digitronix team"
                className="w-full h-auto rounded-lg  object-cover transition-transform duration-500 ease-in hover:scale-105"
              />
            </div>
          </div>

          {/* Right section - Text content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl  lg:text-5xl   font-bold text-gray-900 mb-4">
              About Us
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <p className="mb-6">
                At{" "}
                <span className="font-semibold text-gray-900">
                  Bhushan Digitronix
                </span>
                , we're more than a digital marketing agency. We're your
                strategic growth partner. Our mission is to empower businesses
                with innovative marketing solutions that drive measurable
                results and lasting impact, helping businesses unlock their full
                potential.
              </p>
              <p className="mb-6">
                From local startups to global enterprises, we tailor strategies
                to meet each client's unique goals and challenges.
              </p>
              <p>
                As a forward-thinking digital marketing and branding agency, we
                don't just work with businesses; we also inspire, educate, and
                empower the next generation of digital marketers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
