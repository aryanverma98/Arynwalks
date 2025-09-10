
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { Plus, Heart } from "lucide-react";
import { useWishlist } from "../../WishlistContext";
import { useCart } from "../../CartContext";

const ShoeCard = ({ shoe, addToWishlist, addToCart }) => {
  const wishlistControls = useAnimation();
  const cartControls = useAnimation();


  const handleWishlistClick = async () => {
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

  // Add to cart click
  const handleAddToCart = async () => {
    addToCart(shoe);

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
      className="relative rounded-xl overflow-hidden shadow-lg group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Product Image */}
      <img
        src={shoe.image}
        alt={shoe.name}
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl"
      />

      {/* Price Tag */}
      <span className="absolute top-2 left-2 bg-black/70 text-white text-sm font-semibold px-3 py-1 rounded-lg">
        {shoe.price}
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

const Kidsright = () => {
  const { addToWishlist } = useWishlist();
  const { addToCart } = useCart();

  const kidsShoes = [
    { id: 1, image: "/ks.jpg", price: "₹900", name: "Kids Shoe 1" },
    { id: 2, image: "/ks5.jpg", price: "₹1200", name: "Kids Shoe 2" },
    { id: 3, image: "/ks6.jpg", price: "₹1000", name: "Kids Shoe 3" },
    { id: 4, image: "/ks2.jpg", price: "₹800", name: "Kids Shoe 4" },
    { id: 5, image: "/ks3.jpg", price: "₹1100", name: "Kids Shoe 5" },
    { id: 6, image: "/ks4.jpg", price: "₹950", name: "Kids Shoe 6" },
    { id: 7, image: "/ks5.jpg", price: "₹1050", name: "Kids Shoe 7" },
    { id: 8, image: "/ks6.jpg", price: "₹990", name: "Kids Shoe 8" },
  ];

  return (
    <div className="right pb-10 w-full">
      <div className="img grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pr-0 md:pr-6 w-full">
        {kidsShoes.map((shoe) => (
          <ShoeCard
            key={shoe.id}
            shoe={shoe}
            addToWishlist={addToWishlist}
            addToCart={addToCart} 
          />
        ))}
      </div>
    </div>
  );
};

export default Kidsright;
