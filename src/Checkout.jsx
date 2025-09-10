// src/Checkout.jsx
import React from "react";
import { motion } from "framer-motion";
import { useCart } from "./CartContext";

const Checkout = () => {
  const { cartItems: cart } = useCart();

  const totalPrice = cart.reduce((total, item) => {
    const priceNumber = parseFloat(item.price.replace(/[^0-9.]/g, ""));
    return total + priceNumber;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white px-6 py-20">
      <motion.h1
        className="text-4xl font-bold text-gray-800 mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛒 Checkout
      </motion.h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Product List */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {cart.map((item) => (
            <motion.div
              key={item.id}
              className="flex items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={item.src || item.image || "/placeholder.png"}
                alt={item.name}
                className="w-24 h-24 rounded-xl object-cover"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                <p className="text-purple-600 font-bold mt-1">{item.price}</p>
              </div>
              <p className="text-gray-500 font-medium">{item.quantity || 1}x</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment Options */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 flex flex-col space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-800">Order Summary</h2>
          <div className="flex justify-between text-gray-700">
            <span>Items ({cart.length})</span>
            <span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>
          <div className="flex justify-between text-gray-700 font-semibold text-lg">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString("en-IN")}</span>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-800">Payment Method</h3>
            <label className="flex items-center space-x-3 p-3 border rounded-xl hover:bg-purple-50 cursor-pointer transition">
         
              <span>Credit / Debit Card</span>
            </label>
            <label className="flex items-center space-x-3 p-3 border rounded-xl hover:bg-purple-50 cursor-pointer transition">
            
              <span>PayPal</span>
            </label>
            <label className="flex items-center space-x-3 p-3 border rounded-xl hover:bg-purple-50 cursor-pointer transition">
             
              <span>Cash on Delivery</span>
            </label>
          </div>

          <button className="mt-6 w-full px-6 py-3 bg-purple-600 text-white rounded-xl font-bold text-lg hover:bg-purple-700 transition-all transform hover:scale-105">
            Place Order
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout;
