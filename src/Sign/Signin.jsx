import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Signin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-100 to-indigo-200 px-4 sm:px-6 lg:px-8 pt-50 mb-10 pb-20">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md sm:max-w-lg p-6 sm:p-8 relative overflow-hidden">
        {/* Toggle Buttons */}
        <div className="flex justify-between mb-6">
          <button
            className={`w-1/2 py-2 text-base sm:text-lg font-medium transition-all ${
              isLogin
                ? "text-purple-600 border-b-4 border-purple-600"
                : "text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`w-1/2 py-2 text-base sm:text-lg font-medium transition-all ${
              !isLogin
                ? "text-purple-600 border-b-4 border-purple-600"
                : "text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Animated Form Switching */}
        <AnimatePresence mode="wait">
          {isLogin ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.2 }}
              className="form flex flex-col gap-4 pt-5"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="p-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <a
                href="#"
                className="text-xs sm:text-sm text-purple-500 hover:underline"
              >
                Forgot Password?
              </a>
              <button className="mt-2 py-2 rounded-lg bg-purple-600 text-white font-semibold text-sm sm:text-base hover:bg-purple-700 transition">
                Login
              </button>
              <p className="text-xs sm:text-sm text-gray-500 text-center">
                Not a member?{" "}
                <span
                  className="text-purple-600 font-medium cursor-pointer hover:underline"
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up now
                </span>
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="signup"
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.2 }}
              className="signup flex flex-col gap-4 pt-5"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="p-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="password"
                placeholder="Confirm password"
                className="p-3 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button className="mt-2 py-2 rounded-lg bg-purple-600 text-white font-semibold text-sm sm:text-base hover:bg-purple-700 transition">
                Register
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Signin;
