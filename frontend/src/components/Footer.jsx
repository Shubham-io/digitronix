import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Footer = () => {
  const navLinks = ["Home", "About", "Services", "Contact"];

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

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <footer className="flex flex-col bg-gray-800 items-center justify-around w-full py-16 text-sm relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full"
            initial={{
              x: Math.random() * window?.innerWidth || 1200,
              y: Math.random() * 400,
              opacity: 0,
            }}
            animate={{
              y: [null, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 text-center"
      >
        <motion.ul
          className="flex items-center justify-center text-gray-200 gap-8"
          variants={itemVariants}
        >
          {navLinks.map((item, index) => (
            <motion.li
              key={index}
              className="text-gray-200 font-medium cursor-pointer text-sm"
              variants={itemVariants}
            >
              <Link
                to={item}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          className="flex items-center justify-center gap-4 mt-8 text-gray-200"
          variants={itemVariants}
        >
          {[
            // Facebook
            {
              key: "facebook",
              path: (
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              ),
            },
            // Instagram
            {
              key: "instagram",
              paths: [
                <path
                  key="1"
                  d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5"
                />,
                <path
                  key="2"
                  d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37m1.5-4.87h.01"
                />,
              ],
            },
            // LinkedIn
            {
              key: "linkedin",
              path: (
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6M6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
              ),
            },
            // Twitter
            {
              key: "twitter",
              path: (
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2" />
              ),
            },
            // GitHub
            {
              key: "github",
              paths: [
                <path
                  key="1"
                  d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"
                />,
                <path key="2" d="M9 18c-4.51 2-5-2-7-2" />,
              ],
            },
          ].map((socialIcon, index) => (
            <motion.a
              key={socialIcon.key}
              href="#"
              variants={socialIconVariants}
              className="cursor-pointer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {socialIcon.paths ? (
                  socialIcon.paths.map((path, i) => (
                    <path
                      key={i}
                      d={path.props.d}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ))
                ) : (
                  <path
                    d={socialIcon.path.props.d}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          className="mt-8 text-center text-gray-200"
          variants={itemVariants}
          whileInView={{
            opacity: [0, 1],
            transition: { duration: 1, delay: 0.5 },
          }}
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            transition={{ duration: 2, delay: 1 }}
            className="inline-block overflow-hidden whitespace-nowrap"
          >
            Copyright © 2025{" "}
            <a href="/" className="text-gray-200">
              Bhushan Digitronix
            </a>
            . All rights reserved.
          </motion.span>
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
