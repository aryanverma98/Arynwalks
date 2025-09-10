// src/Cart.jsx
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Cart = () => {
  const { cartItems: cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // ✅ Initialize navigate

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return total + priceNumber;
  }, 0);

  return (
    <div className="min-h-[32rem] bg-gradient-to-b from-purple-50 to-white px-6 py-20 mt-35">
      {/* Title */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-20 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛒 My Cart
      </motion.h1>

      {/* Empty State */}
      {cart.length === 0 ? (
        <motion.div
          className="flex flex-col items-center justify-center h-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-lg">Your cart is empty</p>
        </motion.div>
      ) : (
        <>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {cart.map((item) => (
              <motion.div
                key={item.id}
                className="relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
                whileHover={{ scale: 1.03 }}
              >
                {/* Image */}
                <img
                  src={item.src || item.image || "/placeholder.png"}
                  alt={item.name || "Cart Item"}
                  className="w-full h-56 object-cover rounded-2xl"
                />

                {/* Remove Button */}
                <motion.button
                  onClick={() => removeFromCart(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
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

          {/* Total Price */}
          <div className="mt-8 text-right text-xl md:text-2xl font-bold text-gray-800">
            Total: ₹{totalPrice.toLocaleString("en-IN")}
          </div>

          {/* Checkout Button */}
          <div className="mt-4 text-right">
            <button
              onClick={() => navigate("/checkout")} // ✅ Navigate to /checkout
              className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
