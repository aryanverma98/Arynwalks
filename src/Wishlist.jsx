// src/Wishlist.jsx
import React from "react";
import { motion } from "framer-motion";
import { Heart, Plus, X } from "lucide-react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = wishlist.reduce((total, item) => {
    const priceNumber = parseFloat((item.price || "0").replace(/[^0-9.]/g, ""));
    return total + priceNumber;
  }, 0);

  return (
    <div className="min-h-[32rem] bg-gradient-to-b from-purple-50 to-white px-6 py-20 mt-35">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ❤️ My Wishlist
      </motion.h1>

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
        <>
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
              >
                <img
                  src={item.image || "/placeholder.png"}
                  alt={item.name}
                  className="w-full h-56 object-cover rounded-2xl"
                />

                <motion.button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-5 h-5 text-red-500" />
                </motion.button>

                <motion.button
                  onClick={() => addToCart(item)}
                  className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus className="w-5 h-5 text-black" />
                </motion.button>

                <div className="absolute bottom-0 w-full bg-white/90 p-3 flex items-center justify-between rounded-t-xl backdrop-blur-sm">
                  <p className="font-semibold text-gray-800">{item.name}</p>
                  <span className="text-purple-600 font-bold">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-8 text-right text-xl md:text-2xl font-bold text-gray-800">
            Total Items: {wishlist.length} | Total: ₹{totalPrice.toLocaleString("en-IN")}
          </div>

          <div className="mt-4 text-right">
            <button
              onClick={() => navigate("/cart")}
              className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
            >
              Go to Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Wishlist;
