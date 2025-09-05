import React from "react";
import { motion } from "framer-motion";

const items = [
  { img: "Mochi-Icon-Sandals.jpg", label: "Sandals" },
  { img: "Mochi-Ic-on-Kolhapuris.jpg", label: "Kolhapuris" },
  { img: "Mochi-Icon-Moccasins.jpg", label: "Moccasins" },
  { img: "Mochi-Icon-Jutis.jpg", label: "Jutis" },
  { img: "Mochi-Icon-LaceUp.jpg", label: "Lace Up" },
  { img: "Mochi-Icon-Loafers.jpg", label: "Loafers" },
  { img: "Mochi-Icon-Moccasins.jpg", label: "Moccasins" },
  { img: "Mochi-Icon-Oxford.jpg", label: "Oxfords" },
];

// Animation container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Animation for each item
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Items = () => {
  return (
    <motion.div
      className="items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 justify-center pb-10 text-sm text-gray-700 cursor-pointer px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item, i) => (
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

export default Items;
