
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Plus, Heart } from "lucide-react";
import { useWishlist } from "../WishlistContext";
import { useCart } from "../CartContext";

const AccCard = ({ item, addToWishlist, addToCart }) => {
  const wishlistControls = useAnimation();
  const cartControls = useAnimation();

  // Wishlist click
  const handleWishlistClick = async () => {
    addToWishlist(item);

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
    addToCart(item);

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
      key={item.id}
      className="relative rounded-xl overflow-hidden shadow-lg group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Accessory Image */}
      <motion.img
        src={item.src}
        alt={item.name}
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
      />

      {/* Price */}
      <span className="absolute top-2 left-2 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-lg">
        {item.price}
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

const Accright = () => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart(); 

  const accessories = [
    { id: 1, name: "Accessory 1", src: "/ac1.jpg", price: "₹1200" },
    { id: 2, name: "Accessory 2", src: "/ac5.jpg", price: "₹1800" },
    { id: 3, name: "Accessory 3", src: "/ac6.jpg", price: "₹1500" },
    { id: 4, name: "Accessory 4", src: "/ac2.jpg", price: "₹1000" },
    { id: 5, name: "Accessory 5", src: "/ac3.jpg", price: "₹1600" },
    { id: 6, name: "Accessory 6", src: "/ac4.jpg", price: "₹1400" },
    { id: 7, name: "Accessory 7", src: "/ac5.jpg", price: "₹1300" },
    { id: 8, name: "Accessory 8", src: "/ac6.jpg", price: "₹1100" },
  ];

  return (
    <div className="right pb-10 px-4 sm:px-6">
      <motion.div
        className="img grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full"
        initial="hidden"
        animate="visible"
      >
        {accessories.map((item) => (
          <AccCard
            key={item.id}
            item={item}
            addToWishlist={addToWishlist}
            addToCart={addToCart} 
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Accright;
