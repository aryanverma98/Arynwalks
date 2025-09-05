import React, { useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Index.css"; 

const Hero = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pb-10 sm:pb-20">
      {/* Hero Banner Image */}
      <motion.img
        className="mt-37 sm:mt-28 w-full shadow-lg rounded-xl"
        src="src/assets/photo/q.webp"
        alt="Hero Banner"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />

      {/* Categories Section */}
      <div className="category pt-16 sm:pt-24 px-4 sm:px-6">
        <div className="heading text-2xl sm:text-3xl font-semibold">
          <h2 className="pb-6 pl-15 sm:pb-10">SHOP BY CATEGORIES</h2>
        </div>

        <div className="buttons flex flex-wrap gap-4 text-sm justify-center rounded-full cursor-pointer pb-10">
          {[
            { img: "men.jpg", label: "Men", link: "/Men" },
            { img: "women.jpg", label: "Women", link: "/Women" },
            { img: "kids.jpg", label: "Kids", link: "/Kids" },
            { img: "accessories.jpg", label: "Accessories", link: "/Accessories" },
          ].map((item, i) => (
            <Link to={item.link} key={i}>
              <motion.div
                className="content border border-gray-300 rounded-3xl flex items-center px-3 sm:px-4 py-1 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  className="rounded-full w-8 h-8 sm:w-10 sm:h-10 object-cover"
                  src={`src/assets/photo/${item.img}`}
                  alt={item.label}
                />
                <p className="ml-2 text-sm sm:text-base">{item.label}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Items Section */}
      <div className="items grid grid-cols-2 sm:grid-cols-3 md:grid-cols-8 gap-6 justify-center px-4 pb-10 text-sm text-gray-700">
        {[
          { img: "Mochi-Icon-Sandals.jpg", label: "Sandals" },
          { img: "Mochi-Ic-on-Kolhapuris.jpg", label: "Kolhapuris" },
          { img: "Mochi-Icon-Jutis.jpg", label: "Jutis" },
          { img: "Mochi-Icon-LaceUp.jpg", label: "Lace Up" },
          { img: "Mochi-Icon-Loafers.jpg", label: "Loafers" },
          { img: "Mochi-Icon-Moccasins.jpg", label: "Moccasins" },
          { img: "Mochi-Icon-Oxford.jpg", label: "Oxfords" },
          { img: "Mochi-Icon-Slippers.jpg", label: "Slippers" },
        ].map((item, i) => (
          <Link to="/Men" key={i}>
            <motion.div
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="border border-blue-900 rounded-full w-28 h-28 sm:w-36 sm:h-36 p-3 sm:p-5 flex items-center justify-center shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={`src/assets/photo/${item.img}`}
                  alt={item.label}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <p className="py-3 sm:py-5 text-sm sm:text-base">{item.label}</p>
            </motion.div>
          </Link>
        ))}
      </div>

      {/* Banner Section */}
      <div className="banner flex flex-col sm:flex-row gap-6 sm:gap-10 px-4 pb-10 sm:pb-[60px]">
        {[
          { img: "2.webp", link: "/Women" },
          { img: "1.webp", link: "/Men" },
        ].map((item, i) => (
          <Link to={item.link} key={i} className="w-full sm:w-1/2">
            <motion.img
              src={`src/assets/photo/${item.img}`}
              alt="Promo Banner"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}
              transition={{ duration: 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl w-full h-auto"
            />
          </Link>
        ))}
      </div>

      {/* Season Picks Section with Arrows */}
      <div className="season relative px-4 sm:px-6 pb-10">
        <div className="font-semibold text-2xl sm:text-3xl pb-6 sm:pb-10">
          <h1>SEASON'S TOP PICKS</h1>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <FaChevronLeft className="text-gray-700" />
        </button>

        {/* Scrollable Section */}
        <div ref={scrollRef} className="h-72 sm:h-80 overflow-x-auto scrollbar-hide">
          <div className="photos flex cursor-pointer gap-4 sm:gap-6 px-6 sm:px-12">
            {[
              { img: "3.jpg", brand: "Mochi", desc: "Casual Slippers" },
              { img: "5.jpg", brand: "Mochi", desc: "Casual Slippers" },
              { img: "6.jpg", brand: "Mochi", desc: "Casual Slippers" },
              { img: "7.jpeg", brand: "Mochi", desc: "Casual Slippers" },
              { img: "8.jpg", brand: "Fila", desc: "Casual Shoes" },
              { img: "9.jpg", brand: "JFontini", desc: "Casual Shoes" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="border border-gray-300 rounded-lg p-3 sm:p-4 min-w-[160px] sm:min-w-[220px] bg-white shadow-lg hover:shadow-2xl transition"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={`src/assets/photo/${item.img}`}
                  alt={item.brand}
                  className="w-full h-40 sm:h-48 object-cover rounded-md shadow-md"
                />
                <h2 className="mt-2 sm:mt-3 text-sm font-semibold">{item.brand}</h2>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 z-10 hover:bg-gray-100"
        >
          <FaChevronRight className="text-gray-700" />
        </button>
      </div>

      {/* Rain Banner */}
      <motion.div
        className="rain w-full px-4 sm:px-0 pb-10 sm:pb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          className="w-full rounded-lg shadow-lg"
          src="src/assets/photo/rain.webp"
          alt="Rain Banner"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
