import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Plus, Heart } from "lucide-react";
import { useWishlist } from "./WishlistContext";
import { useCart } from "./CartContext"; // ✅ import CartContext

const Right = () => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart(); // ✅ get addToCart
  const wishlistControls = useAnimation(); 
  const cartControls = useAnimation(); // separate animation for cart

  const shoes = [
    { id: 1, src: "/s1.jpg", price: "RS 520", name: "Shoe 1" },
    { id: 2, src: "/s2.jpg", price: "RS 420", name: "Shoe 2" },
    { id: 3, src: "/s3.jpg", price: "RS 720", name: "Shoe 3" },
    { id: 4, src: "/s4.jpg", price: "RS 620", name: "Shoe 4" },
    { id: 5, src: "/s5.jpg", price: "RS 550", name: "Shoe 5" },
    { id: 6, src: "/s6.jpg", price: "RS 890", name: "Shoe 6" },
    { id: 7, src: "/s2.jpg", price: "RS 420", name: "Shoe 7" },
    { id: 8, src: "/s3.jpg", price: "RS 520", name: "Shoe 8" },
  ];

  // Wishlist animation
  const handleWishlistClick = async (shoe) => {
    addToWishlist(shoe);

    await wishlistControls.start({
      x: 200,
      y: -200,
      scale: 0.2,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });

    wishlistControls.set({ x: 0, y: 0, scale: 1, opacity: 1 });
  };

  // Cart animation
  const handleAddToCart = async (shoe) => {
    addToCart(shoe);

    await cartControls.start({
      x: 200,
      y: -200,
      scale: 0.2,
      opacity: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    });

    cartControls.set({ x: 0, y: 0, scale: 1, opacity: 1 });

    // Optionally redirect to Cart page
    // window.location.href = "/cart";
  };

  return (
    <div className="right pb-10 w-full">
      <motion.div
        className="img grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pr-0 md:pr-6 w-full"
        initial="hidden"
        animate="visible"
      >
        {shoes.map((shoe) => (
          <motion.div
            key={shoe.id}
            className="relative rounded-xl overflow-hidden shadow-lg group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Product Image */}
            <motion.img
              src={shoe.src}
              alt={shoe.name}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
            />

            {/* Price Tag */}
            <span className="absolute top-2 left-2 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-lg">
              {shoe.price}
            </span>

            {/* Wishlist Button */}
            <motion.button
              onClick={() => handleWishlistClick(shoe)}
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
              onClick={() => handleAddToCart(shoe)}
              className="absolute bottom-2 right-2 bg-white/90 rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div animate={cartControls}>
                <Plus className="w-5 h-5 text-black" />
              </motion.div>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Right;
