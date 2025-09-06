import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="text-gray-800 pb-10 px-4 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-20 text-center sm:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-lg font-bold mb-4 text-purple-600">ARYN</h2>
          <ul className="space-y-1 text-base">
            {["About us", "Careers", "FAQs", "Store Locator", "Site Map"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#7c3aed" }}
                  className="cursor-pointer transition"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Customer Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer</h2>
          <ul className="space-y-1 text-base">
            {["Contact us", "Buying Guide", "Track Order", "Blogs"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#7c3aed" }}
                  className="cursor-pointer transition"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Collection Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Collection</h2>
          <ul className="space-y-1 text-base">
            {["Men Shoes", "Women Shoes", "Girls Shoes", "Boys Shoes", "Bags"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#7c3aed" }}
                  className="cursor-pointer transition"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Partners Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Partners</h2>
          <ul className="space-y-1 text-base">
            {["Metro Shoes", "Walkway Shoes", "Fitflop", "Fila India", "New Era Cap"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 5, color: "#7c3aed" }}
                  className="cursor-pointer transition"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Stay in the Loop</h2>
          <p className="text-base mb-3">Sign up for email updates today</p>
          <div className="flex flex-col sm:flex-row items-center sm:items-stretch mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full sm:flex-1 rounded-lg sm:rounded-l-lg sm:rounded-r-none border border-gray-300 focus:outline-none text-gray-700 text-sm"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 sm:mt-0 sm:ml-2 px-4 bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium rounded-lg sm:rounded-r-lg sm:rounded-l-none transition h-10 cursor-pointer"
            >
              Join
            </motion.button>
          </div>

          {/* Social Media Links */}
          <p className="text-xs mb-2">Follow me</p>
          <div className="flex justify-center sm:justify-start gap-4">
            {/* Instagram */}
            <a
              href="https://instagram.com/aryan1_786"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="public\ig-instagram-icon.svg"
                alt="Instagram"
                className="w-6 cursor-pointer hover:scale-110 transition"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aryan-verma-7545a4303"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#0A66C2] hover:scale-110 transition"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.635-1.852 3.367-1.852 3.598 0 4.262 2.368 4.262 5.455v6.288zM5.337 7.433a2.07 2.07 0 110-4.141 2.07 2.07 0 010 4.141zM6.914 20.452H3.66V9h3.254v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            {/* GitHub (SVG) */}
            <a
              href="https://github.com/aryanverma98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-gray-900 hover:text-purple-600 hover:scale-110 transition"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.582 
                  0-.288-.01-1.05-.016-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 
                  1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.776.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.933 
                  0-1.31.47-2.382 1.236-3.222-.124-.304-.536-1.527.117-3.183 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 013.003-.404c1.018.005 
                  2.045.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.656.243 2.879.12 3.183.77.84 
                  1.235 1.912 1.235 3.222 0 4.61-2.807 5.624-5.479 5.922.43.372.823 1.102.823 2.222 
                  0 1.606-.015 2.898-.015 3.293 0 .322.217.7.825.58C20.565 21.796 24 17.297 24 12 
                  24 5.37 18.63 0 12 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
