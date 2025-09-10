// src/Bagsright.jsx
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Plus, Heart } from "lucide-react";
import { useWishlist } from "../WishlistContext";
import { useCart } from "../CartContext"; // ✅ import CartContext

const BagCard = ({ bag, addToWishlist, addToCart }) => {
  const wishlistControls = useAnimation();
  const cartControls = useAnimation();

  // Wishlist click
  const handleWishlistClick = async () => {
    addToWishlist(bag);

    await wishlistControls.start({
      x: 200,
      y: -200,
      scale: 0.2,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });

    wishlistControls.set({ x: 0, y: 0, scale: 1, opacity: 1 });
  };

  // Add to cart click
  const handleAddToCart = async () => {
    addToCart(bag);

    await cartControls.start({
      x: 200,
      y: -200,
      scale: 0.2,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });

    cartControls.set({ x: 0, y: 0, scale: 1, opacity: 1 });
  };

  return (
    <motion.div
      key={bag.id}
      className="relative rounded-xl overflow-hidden shadow-lg group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Bag Image */}
      <motion.img
        src={bag.src}
        alt={bag.name}
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
      />

      {/* Price */}
      <span className="absolute top-2 left-2 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-lg">
        {bag.price}
      </span>

      {/* Wishlist Button */}
      <motion.button
        onClick={handleWishlistClick}
        className="absolute top-2 right-2 bg-white/90 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div animate={wishlistControls}>
          <Heart className="w-5 h-5 text-red-500" />
        </motion.div>
      </motion.button>

      {/* Add to Cart Button */}
      <motion.button
        onClick={handleAddToCart}
        className="absolute bottom-2 right-2 bg-white/90 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition duration-300"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div animate={cartControls}>
          <Plus className="w-5 h-5 text-black" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
};

const Bagsright = () => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart(); // ✅ get addToCart

  const bags = [
    { id: 1, name: "Bag 1", src: "/bg1.jpg", price: "₹1800" },
    { id: 2, name: "Bag 2", src: "/bg5.jpg", price: "₹2200" },
    { id: 3, name: "Bag 3", src: "/bg6.jpg", price: "₹2000" },
    { id: 4, name: "Bag 4", src: "/bg2.jpg", price: "₹1500" },
    { id: 5, name: "Bag 5", src: "/bg3.jpg", price: "₹2500" },
    { id: 6, name: "Bag 6", src: "/bg4.jpg", price: "₹2100" },
    { id: 7, name: "Bag 7", src: "/bg5.jpg", price: "₹2300" },
    { id: 8, name: "Bag 8", src: "/bg6.jpg", price: "₹1950" },
  ];

  return (
    <div className="right pb-10 px-4 sm:px-6">
      <motion.div
        className="img grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full"
        initial="hidden"
        animate="visible"
      >
        {bags.map((bag) => (
          <BagCard
            key={bag.id}
            bag={bag}
            addToWishlist={addToWishlist}
            addToCart={addToCart} // ✅ pass addToCart
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Bagsright;
