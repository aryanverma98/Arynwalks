
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useCart } from "./CartContext";


const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerParent = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cartItems } = useCart(); // ✅ dynamic cart count

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Black Strip */}
      <motion.div
        className="black bg-black text-white text-xs h-8 flex justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={fadeInDown}
      >
        <p>Get 5% extra discount on Prepaid orders</p>
      </motion.div>

      {/* Service Bar */}
      <motion.div
        className="
          service flex flex-col sm:flex-row justify-between items-center
          h-auto sm:h-12 text-xs sm:text-sm px-4 sm:px-10 font-semibold bg-white py-2 sm:py-0
        "
        initial="hidden"
        animate="visible"
        variants={staggerParent}
      >
        {/* Left side */}
        <motion.p
          variants={fadeInDown}
          className="mb-2 sm:mb-0 text-gray-700 text-center sm:text-left"
        >
          Customer Service
        </motion.p>

        {/* Right side */}
        <motion.div
          className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-4 cursor-pointer items-center text-gray-700"
          variants={staggerParent}
        >
          {/* User / Sign In */}
          <motion.div
            className="flex items-center gap-1 hover:text-purple-900"
            variants={fadeInDown}
            whileHover={{ scale: 1.1, color: "#6B21A8" }}
          >
            <Link to="/Signin" className="flex items-center gap-1">
              <i className="fa-solid fa-user"></i>
              <span className="hidden sm:inline">Sign In</span>
            </Link>
          </motion.div>

          {/* Track Order */}
          <motion.div
            className="hover:text-purple-900"
            variants={fadeInDown}
            whileHover={{ scale: 1.1, color: "#6B21A8" }}
          >
            <p>Track Order</p>
          </motion.div>

          {/* Nearby Stores */}
          <motion.div
            className="hover:text-purple-900"
            variants={fadeInDown}
            whileHover={{ scale: 1.1, color: "#6B21A8" }}
          >
            <p>Nearby Stores</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <hr className="opacity-70" />

      {/* Navbar */}
      <nav className="flex items-center justify-between h-16 px-4 sm:px-8 bg-white shadow-md relative">
        {/* Logo */}
        <motion.div
          className="logo"
          initial={{ scale: 0.5, opacity: 0, rotate: -15 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/" className="cursor-pointer">
            <motion.img
              className="w-28 sm:w-36"
              src="\new.png"
              alt="logo"
              whileHover={{ rotate: -5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <motion.ul
            className="flex gap-10 items-center font-semibold text-sm"
            initial="hidden"
            animate="visible"
            variants={staggerParent}
          >
            {["MENS", "WOMEN", "KIDS", "ACCESSORIES", "BAGS", "MORE"].map(
              (item, i) => (
                <motion.li
                  key={i}
                  variants={fadeInDown}
                  whileHover={{ scale: 1.1, color: "#6B21A8" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={`/${
                      item === "MENS"
                        ? "Men"
                        : item.charAt(0) + item.slice(1).toLowerCase()
                    }`}
                  >
                    {item}
                  </Link>
                </motion.li>
              )
            )}
          </motion.ul>
        </div>

        {/* Right Icons */}
        <motion.div
          className="hidden md:flex gap-4 cursor-pointer text-lg"
          variants={staggerParent}
          initial="hidden"
          animate="visible"
        >
          {/* Search */}
          <motion.div
            whileHover={{ scale: 1.2, color: "#6B21A8" }}
            variants={fadeInDown}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </motion.div>

          {/* Wishlist */}
          <motion.div
            whileHover={{ scale: 1.2, color: "#6B21A8" }}
            variants={fadeInDown}
          >
            <Link to="/wishlist">
              <i className="fa-solid fa-heart"></i>
            </Link>
          </motion.div>

          {/* Cart with dynamic count */}
          <motion.div
            whileHover={{ scale: 1.2, color: "#6B21A8" }}
            className="flex items-center"
            variants={fadeInDown}
          >
            <Link to="/cart" className="flex items-center">
              <i className="fa-solid fa-bag-shopping"></i>
              <span className="text-xs font-medium pl-1">
                {cartItems.length} items
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <HiX className="text-2xl" /> : <HiMenuAlt3 className="text-2xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <motion.div
            className="pl-10 absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 gap-4 z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {["MENS", "WOMEN", "KIDS", "ACCESSORIES", "BAGS", "MORE"].map(
              (item, i) => (
                <Link
                  key={i}
                  to={`/${
                    item === "MENS"
                      ? "Men"
                      : item.charAt(0) + item.slice(1).toLowerCase()
                  }`}
                  onClick={() => setMobileMenu(false)}
                  className="font-semibold text-sm hover:text-purple-900"
                >
                  {item}
                </Link>
              )
            )}
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
