import React from "react";
import { motion } from "framer-motion";

const numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const filters = [
  "Discount",
  "Brand",
  "Lining Material",
  "Occasion",
  "Heel Type",
  "Colors",
];

const Left = () => {
  return (
    <motion.div
      className="cursor-pointer font-semibold w-full"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="left-side text-xs flex flex-col items-center gap-6 w-full sm:w-11/12 lg:w-full px-4 sm:px-6 pb-10">
        {/* Numbers Section */}
        <div className="flex flex-wrap justify-center gap-3 w-full">
          {numbers.map((num) => (
            <motion.div
              key={num}
              className="numbers border border-purple-700 w-12 sm:w-14 h-10 rounded-2xl flex justify-center items-center transition text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
              whileHover={{
                y: -4,
                scale: 1.12,
                boxShadow: "0px 6px 15px rgba(0,0,0,0.15)",
                background: "linear-gradient(135deg, #6366f1, #a855f7)",
                color: "#fff",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <p>{num}</p>
            </motion.div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="offer text-sm w-full max-w-xs sm:max-w-sm flex flex-col items-center">
          {filters.map((filter, i) => (
            <motion.div
              key={i}
              className={`w-full text-center border-b p-3 sm:p-4 border-gray-300 ${
                i === 0 ? "border-t" : ""
              }`}
              whileHover={{
                scale: 1.03,
                backgroundColor: "rgba(0,0,0,0.05)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <p>{filter}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Left;
