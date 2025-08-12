import { useState } from "react";
import logo from "../assets/digitronics_logo.png";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { buttonVariants } from "./MotionVariants";
import { motion } from "motion/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = ["Home", "About", "Services"];

  return (
    <nav className="bg-white   shadow-md border-b border-gray-100   sticky top-0 z-50">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Company Name */}
          <Link
            to="Home"
            smooth={true}
            duration={500}
            offset={-70}
            activeClass="active"
          >
            <div className="flex items-center space-x-2 cursor-pointer">
              <motion.img
                src={logo}
                alt="logo"
                className="w-12 h-12"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              />

              <div className="flex flex-col justify-center">
                <span className="font-bold text-gray-900 text-lg leading-none">
                  Bhushan Digitronix
                </span>
                <span className="text-xs text-gray-600 leading-none">
                  Marketing Agency
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-700 hover:text-black font-medium cursor-pointer text-sm  transition-all duration-300"
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
                </li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween", stiffness: 300 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white px-6 py-2 font-medium text-sm"
            >
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
              >
                Contact Us
              </Link>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-black focus:outline-none  transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-transparent">
            <ul className="px-2 pt-2 pb-3 flex flex-col justify-center items-center space-y-1">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="block text-gray-700  hover:text-black font-medium cursor-pointer    transition-all duration-300"
                >
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    offset={-250}
                    activeClass="active"
                    className="hover:text-black hover:cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <div className="pt-2">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600  hover:scale-[1.01] text-white px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200">
                  <Link
                    to="Contact"
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </button>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
