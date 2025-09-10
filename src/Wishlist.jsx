// src/Wishlist.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, X } from "lucide-react";
import { useWishlist } from "./WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className=" min-h-130   bg-gradient-to-b from-purple-50 to-white px-6 py-20 mt-35 ">
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ❤️ My Wishlist
      </motion.h1>

      {/* Empty State */}
      {wishlist.length === 0 ? (
        <motion.div
          className="flex flex-col items-center justify-center h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Heart className="w-16 h-16 text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {wishlist.map((item) => (
            <motion.div
              key={item.id}
              className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
              whileHover={{ scale: 1.03 }}
            >
              {/* Image */}
              <img
                src={item.src} // ✅ Corrected from item.image
                alt={item.name}
                className="w-full h-56 object-cover rounded-2xl"
              />

              {/* Remove Button */}
              <motion.button
                onClick={() => removeFromWishlist(item.id)}
                className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-red-500" />
              </motion.button>

              {/* Footer */}
              <div className="absolute bottom-0 w-full bg-white/90 p-3 flex items-center justify-between rounded-t-xl backdrop-blur-sm">
                <p className="font-semibold text-gray-800">{item.name}</p>
                <span className="text-purple-600 font-bold">{item.price}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Wishlist;
