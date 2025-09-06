import React from "react";
import { motion } from "framer-motion";

const Bagsright = () => {
  // Container animation (staggered appearance)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  // Each image animation
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6, type: "spring" },
    },
  };

  return (
    <div className="right pb-10 px-4 sm:px-6">
      <motion.div
        className="img grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pr-0 md:pr-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          "bg1.jpg",
          "bg5.jpg",
          "bg6.jpg",
          "bg2.jpg",
          "bg3.jpg",
          "bg4.jpg",
          "bg5.jpg",
          "bg6.jpg",
        ].map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`bg${i + 1}`}
            className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg shadow-md cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Bagsright;
