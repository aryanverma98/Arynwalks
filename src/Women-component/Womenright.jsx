import React from "react";
import { motion } from "framer-motion";

const Womenright = () => {
  // Container for stagger effect
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
    <div className="right pb-10 w-full">
      <motion.div
        className="img grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pr-0 md:pr-6 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[
          "src/assets/photo/ws1.jpg",
          "src/assets/photo/ws5.jpg",
          "src/assets/photo/ws6.jpg",
          "src/assets/photo/ws2.jpg",
          "src/assets/photo/ws3.jpg",
          "src/assets/photo/ws4.jpg",
          "src/assets/photo/ws5.jpg",
          "src/assets/photo/ws6.jpg",
        ].map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`ws${i + 1}`}
            className="rounded-lg shadow-md cursor-pointer w-full h-auto"
            variants={itemVariants}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Womenright;
