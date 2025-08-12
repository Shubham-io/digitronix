import React from "react";

import {motion } from "framer-motion";

const Services = () => {
  // Animation variants for mobile-friendly performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth feel
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
         
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-2 md:py-12 bg-transparent" name="Services">
      <motion.h2
        className="text-4xl lg:text-5xl text-center font-bold text-gray-900 mb-8"
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Our Services
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Search Engine Optimization Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Search Engine Optimization
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Maecenas elementum sapien in metus placerat finibus lorem ipsum
              dolor sit amet.
            </p>
          </motion.div>

          {/* Social Media Strategy Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center mb-6"
              
            >
              <svg
                className="w-8 h-8 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Social Media Strategy
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Maecenas elementum sapien in metus placerat finibus lorem ipsum
              dolor sit amet.
            </p>
          </motion.div>

          {/* Reporting & Analysis Card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div
              className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6"
               
            >
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </motion.div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Reporting & Analysis
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Maecenas elementum sapien in metus placerat finibus lorem ipsum
              dolor sit amet.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
