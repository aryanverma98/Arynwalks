import React, { createContext, useContext, useState, useRef } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const wishlistIconRef = useRef(null);

  const addToWishlist = (item) => {
    setWishlist((prev) => {
      if (prev.find((s) => s.id === item.id)) return prev; // avoid duplicates
      return [...prev, item]; // ✅ includes {id, name, price, src}
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, wishlistIconRef }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
