import React from "react";
import { motion } from "framer-motion";

const clothes = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Denim Jacket",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Casual Jeans",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/2983466/pexels-photo-2983466.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Trench Coat",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "T-Shirt",
  },
  {
    id: 6,
    src: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Summer Dress",
  },
  {
    id: 8,
    src: "https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Blazer",
  },
];

const MoreSection = () => {
  return (
    <div className="right pb-10 flex justify-center mt-52 sm:mt-40 lg:mt-52 mb-20 px-4">
      <div className="img w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {clothes.map((item) => (
          <motion.div
            key={item.id}
            className="relative flex flex-col items-center pb-6 sm:pb-10"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.id * 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src={item.src}
              alt={item.title}
              className="w-full h-52 sm:h-60 lg:h-72 object-cover rounded-lg shadow-md"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            {/* Hover effect only on text */}
            <motion.p
              className="pt-4 sm:pt-6 text-sm sm:text-base font-medium text-gray-700 cursor-pointer text-center"
              whileHover={{ scale: 1.05, color: "purple" }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MoreSection;
