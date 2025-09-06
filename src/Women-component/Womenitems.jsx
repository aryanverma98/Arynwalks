import React from "react";
import { motion } from "framer-motion";

const womenItems = [
  { img: "w1.png", label: "Sandals" },
  { img: "w2.png", label: "Kolhapuris" },
  { img: "w3.png", label: "Moccasins" },
  { img: "w4.png", label: "Jutis" },
  { img: "w5.png", label: "Lace Up" },
  { img: "w6.png", label: "Loafers" },
  { img: "w7.png", label: "Moccasins" },
  { img: "w2.png", label: "Oxfords" },
];

// Variants for stagger animation
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

const Womenitems = () => {
  return (
    <motion.div
      className="items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6 justify-center px-4 sm:px-6 pb-10 text-sm text-gray-700 cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {womenItems.map((item, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center"
          variants={itemVariants}
          whileHover={{ scale: 1.1, rotate: 3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 flex items-center justify-center">
            <img
           src={`/${item.img}`}
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

export default Womenitems;
