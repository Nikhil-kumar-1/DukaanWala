import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaHeart, FaShoppingBag, FaSearch } from "react-icons/fa";

const MainHeader = () => {
  return (
    <header className="py-4 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="Logo.png"
            alt="DukaanWala"
            className="h-12 md:h-16 w-auto"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "Logo.png";
            }}
          />
        </Link>

        {/* Search Bar */}
        <div className="w-full md:max-w-xl mx-0 md:mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products, brands and more..."
              className="w-full px-5 py-2.5 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm placeholder-gray-500"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600">
              <FaSearch />
            </button>
          </div>
        </div>

        {/* Account, Wishlist, Cart */}
        <div className="flex items-center gap-4 md:gap-6 text-sm">
          {/* Account */}
          <Link
            to="/login"
            className="flex flex-col items-center text-gray-700 hover:text-green-600 transition-colors"
          >
            <FaUser className="text-xl" />
            <span className="text-xs mt-1 hidden md:block">Account</span>
          </Link>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="flex flex-col items-center text-gray-700 hover:text-green-600 transition-colors relative"
          >
            <FaHeart className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
            <span className="text-xs mt-1 hidden md:block">Wishlist</span>
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="flex flex-col items-center text-gray-700 hover:text-green-600 transition-colors relative"
          >
            <FaShoppingBag className="text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
            <span className="text-xs mt-1 hidden md:block">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
