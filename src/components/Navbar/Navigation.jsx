import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaChevronDown, FaChevronUp, FaMapMarkerAlt } from 'react-icons/fa';

const Navigation = () => {
  const [location, setLocation] = useState('Delhi');
  const [showCategories, setShowCategories] = useState(false);

  const locations = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai', 'Hyderabad', 'Pune'];
  const categories = [
    'Electronics', 'Fashion', 'Home & Kitchen', 'Beauty', 'Grocery',
    'Toys & Games', 'Books', 'Sports', 'Automotive', 'Health'
  ];

  return (
    <nav className="bg-green-600 text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-start md:items-center justify-between relative">
        
        {/* Left: All Categories */}
        <div className="relative w-full md:w-auto mb-3 md:mb-0">
          <button
            className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md w-full md:w-auto justify-between"
            onClick={() => setShowCategories(!showCategories)}
          >
            <div className="flex items-center gap-2">
              <FaBars />
              <span>All Categories</span>
            </div>
            {showCategories ? <FaChevronUp className="md:hidden" /> : <FaChevronDown className="md:hidden" />}
          </button>

          {/* Categories Dropdown (overlay, not inline) */}
          {showCategories && (
            <div className="absolute left-0 top-full mt-2 w-64 bg-white text-gray-800 rounded-md shadow-lg border border-gray-200 z-50">
              <ul className="py-2">
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      to={`/category/${category.toLowerCase().replace(' & ', '-').replace(/\s+/g, '-')}`}
                      className="block  px-4 py-2 hover:bg-green-50 hover:text-green-600"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-green-200 transition-colors">Home</Link>
          <Link to="/categories" className="hover:text-green-200 transition-colors">Categories</Link>
          <Link to="/products" className="hover:text-green-200 transition-colors">Products</Link>
          <Link to="/blog" className="hover:text-green-200 transition-colors">Blog</Link>
          <Link to="/offers" className="hover:text-green-200 transition-colors">Hot Offers</Link>
          <Link to="/contact-us" className="hover:text-green-200 transition-colors">Contact</Link>
        </div>

        {/* Right: Location Dropdown */}
        <div className="flex items-center gap-2 bg-green-700 hover:bg-green-800 px-3 py-2 rounded-md mt-3 md:mt-0 w-full md:w-auto justify-between cursor-pointer">
          <FaMapMarkerAlt />
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-transparent border-none text-white focus:outline-none appearance-none cursor-pointer"
          >
            {locations.map((loc) => (
              <option key={loc} value={loc} className="bg-green-600">
                {loc}
              </option>
            ))}
          </select>
          <FaChevronDown className="text-xs ml-1" />
        </div>

      </div>
    </nav>
  );
};

export default Navigation;
