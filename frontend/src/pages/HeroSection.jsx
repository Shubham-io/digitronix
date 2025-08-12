import img1 from "../assets/hero-img1.png";
import img2 from "../assets/hero-img2.png";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import {textVariants, imageVariants, containerVariants, buttonVariants} from "../components/MotionVariants";

const HeroSection = () => {
 

  return (
    <section
      className="relative bg-transparent md:py-10 lg:py-16 mt-10 overflow-hidden"
      name="Home"
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 lg:space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight block"
              variants={textVariants}
            >
              Bhushan
              <br />
              Digitronix
            </motion.span>

            <motion.p
              className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-2 max-w-lg"
              variants={textVariants}
            >
              Extract real business value from social media. Ensuring the best
              return on investment for your bespoke SEO campaign requirement.
            </motion.p>

            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.6, duration: 0.6 },
              }}
            >
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                CONTACT TODAY
              </Link>
            </motion.button>
          </motion.div>

          {/* Right Visual Elements */}
          <motion.div
            className="relative flex flex-col   items-center  md:flex-row justify-center md:items-start"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Main Image Cards */}
            <motion.div
              variants={imageVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={img1}
                alt="Digital Marketing Hero"
                className="w-[300px] md:w-7xl"
              />
            </motion.div>

            <motion.div
              variants={imageVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <img
                src={img2}
                alt="Business Growth"
                className="w-[300px]  md:w-3xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
