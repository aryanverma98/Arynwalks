import React from "react";
import { motion } from "framer-motion";
import Womenitems from "./Women-component/Womenitems";
import Left from "./Left";
import Womenright from "./Women-component/Womenright";

const Women = () => {
  return (
    <div>
      <div className="pt-50 sm:pt-52">
        {/* Heading */}
        <div className="px-4 sm:pl-8 text-xs sm:text-sm pb-15 sm:pb-10">
          <h2 className="text-xl sm:text-2xl font-semibold text-black pb-2">
            SHOES FOR WOMEN
          </h2>
          <p>
            Explore a wide range of stylish shoes for women, designed to suit
            every occasion with comfort and style.
          </p>
        </div>
      </div>

      {/* Items */}
      <Womenitems />

      {/* Filters Section */}
      <motion.div
        className="filters sticky top-20 sm:top-36 z-10 bg-white w-full shadow-sm"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <hr className="opacity-20" />

        <div className="h-12 sm:h-15 flex items-center text-xs justify-between px-4 sm:px-10">
          {/* Left Side: Hide Filters */}
          <div className="flex justify-between items-center">
            <motion.img
              className="pr-2 w-5 h-5"
              src="src/assets/photo/filter-toggle.svg"
              alt="Filter Toggle"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            />
            <div className="border-r border-gray-300 h-6 sm:h-15 flex items-center">
              <motion.p
                className="pr-4 sm:pr-8 cursor-pointer"
                whileHover={{ x: 3, color: "#7c3aed" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Hide Filters
              </motion.p>
            </div>
          </div>

          {/* Right Side: Sort By */}
          <div className="border-l border-gray-300 h-6 sm:h-15 flex items-center">
            <motion.p
              className="pl-4 sm:pl-8 cursor-pointer"
              whileHover={{ x: -3, color: "#7c3aed" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              Sort by: Popularity
            </motion.p>
          </div>
        </div>

        <hr className="opacity-20" />
      </motion.div>

      {/* Size Section */}
      <div className="size px-4 sm:pl-10 pb-4 text-sm pt-6 sm:pt-10">
        <h2>Size</h2>
      </div>

      {/* Main Section */}
      <div className="main flex flex-col lg:flex-row gap-6 lg:gap-8 pb-20 px-4 sm:px-6">
        <div className="w-full lg:w-1/4">
          <Left />
        </div>
        <div className="w-full lg:w-3/4">
          <Womenright />
        </div>
      </div>
    </div>
  );
};

export default Women;
