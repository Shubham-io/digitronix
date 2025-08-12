import React from "react";
import logo from "../assets/digitronics_logo.png";
import { motion, useScroll, useTransform } from "motion/react";

const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="py-8 md:py-12 bg-transparent" name="About">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 md:gap-12 items-center">
          {/* Left section - Image */}
          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex justify-center">
              <motion.img
                src={logo}
                alt="Bhushan Digitronix team"
                className="w-[75%] h-auto rounded-lg md:ml-18 object-cover"
                style={{ y }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Right section - Text content */}
          <motion.div
            className="order-2 lg:order-1 w-full px-4 md:px-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              className="text-4xl md:text-start text-center lg:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              About Us
            </motion.h2>

            <div className="prose prose-lg text-gray-700 leading-relaxed">
              <motion.p
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                At{" "}
                <span className="font-semibold text-gray-900">
                  Bhushan Digitronix
                </span>
                , we're more than a digital marketing agency. We're your
                strategic growth partner. Our mission is to empower businesses
                with innovative marketing solutions that drive measurable
                results and lasting impact, helping businesses unlock their full
                potential.
              </motion.p>

              <motion.p
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                From local startups to global enterprises, we tailor strategies
                to meet each client's unique goals and challenges.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                As a forward-thinking digital marketing and branding agency, we
                don't just work with businesses; we also inspire, educate, and
                empower the next generation of digital marketers.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
