import React from "react";
import { motion } from "framer-motion";

const bagsItems = [
  { img: "b1.png", label: "Evening Bags" },
  { img: "b2.png", label: "Sling Bags" },
  { img: "b3.png", label: "Hand Bags" },
  { img: "b4.png", label: "Potlis" },
  { img: "b5.png", label: "Satchel Bags" },
  { img: "a6.png", label: "Moccasins" },
  { img: "a7.png", label: "Spray" },
  { img: "a8.png", label: "Slippers" },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Bagsitems = () => {
  return (
    <motion.div
      className="
        items
        grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
        lg:flex lg:overflow-x-auto lg:space-x-8
        justify-center px-4 sm:px-6 pb-10 text-sm text-gray-700 cursor-pointer
        scrollbar-hide
      "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {bagsItems.map((item, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center text-center flex-shrink-0 lg:w-40"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 flex items-center justify-center">
            <img
              src={`src/assets/photo/${item.img}`}
              alt={item.label}
              className="max-w-full h-auto"
            />
          </div>
          <p className="py-3 sm:py-5 text-xs sm:text-sm md:text-base">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Bagsitems;
