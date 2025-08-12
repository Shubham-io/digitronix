import React from "react";
import bannerGirl from "../assets/banner-girl.png";

import { motion } from "framer-motion";

const Banner = () => {
  // Animation variants for text words
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Container variants for staggered children
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

  // Image animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  // Foreground text variants
  const foregroundVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.6,
      },
    },
  };

  return (
    <section className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-b from-[#88C0D0] to-[#A5DCEA]">
      {/* Background Text Layer - Behind the image */}
      <div className="absolute top-12 inset-x-0 md:top-16 md:left-40 flex items-center justify-center">
        <motion.div
          className="text-white text-3xl md:text-5xl lg:text-8xl font-bold opacity-90 select-none pointer-events-none"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-wrap justify-center leading-18 gap-2 md:gap-4">
            <motion.span variants={textVariants}>Social</motion.span>
            <motion.span variants={textVariants}>Media</motion.span>
            <motion.span variants={textVariants} className="ml-2 md:ml-16">
              Marketing
            </motion.span>
            <motion.span variants={textVariants}>SEO</motion.span>
          </div>
        </motion.div>
      </div>

      {/* Main Image - Middle layer */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.div
          className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.3 },
          }}
        >
          <img
            src={bannerGirl}
            alt="Happy woman with phone"
            className="w-full h-full object-cover rounded-full"
          />
        </motion.div>
      </div>

      {/* Foreground Text Layer - In front of the image */}
      <div className="absolute inset-0 top-12 md:top-16 md:left-20 flex items-center justify-center z-20">
        <motion.div
          className="text-white text-3xl md:text-5xl lg:text-6xl font-bold select-none pointer-events-none"
          variants={foregroundVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <span className="opacity-100">Optimization</span>
            <span className="opacity-100">Strategy</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
