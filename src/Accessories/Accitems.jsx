import React from "react";
import { motion } from "framer-motion";

const accItems = [
  { img: "a1.png", label: "Women Belts" },
  { img: "a2.png", label: "Men Socks" },
  { img: "a3.png", label: "Men Wallets" },
  { img: "a4.png", label: "Renew" },
  { img: "a5.png", label: "Shoe Care" },
  { img: "a6.png", label: "Moccasins" },
  { img: "a7.png", label: "Spray" },
  { img: "a8.png", label: "Slippers" },
];

// Animation Variants
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

const Accitems = () => {
  return (
    <motion.div
      className="items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-6 justify-center px-4 sm:px-6 pb-10 text-sm text-gray-700 cursor-pointer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {accItems.map((item, i) => (
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

export default Accitems;
