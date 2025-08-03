import React from 'react';
import { FaPhone, FaChevronDown } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="bg-gray-900 text-white text-sm py-2 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        {/* Left: Contact Info */}
        <div className="flex items-center gap-4">
          <a 
            href="tel:+919876543210" 
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <FaPhone className="text-green-500 text-sm" />
            <span className="hidden sm:inline">+91 98765 43210</span>
          </a>
          <a 
            href="https://wa.me/919876543210" 
            className="flex items-center gap-2 hover:text-green-400 transition-colors"
          >
            <FaWhatsapp className="text-green-500 text-base" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </a>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <a href="/help" className="hover:text-green-400 transition-colors">Help Center</a>
          <a href="/track" className="hover:text-green-400 transition-colors">Track Order</a>

          <div className="relative group flex items-center">
            <select className="bg-gray-900 text-white px-1 py-1 focus:outline-none appearance-none hover:text-green-400 cursor-pointer">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <FaChevronDown className="text-xs ml-1 text-gray-400 group-hover:text-green-400" />
          </div>

          <div className="relative group flex items-center">
            <select className="bg-gray-900 text-white px-1 py-1 focus:outline-none appearance-none hover:text-green-400 cursor-pointer">
              <option>INR ₹</option>
              <option>USD $</option>
            </select>
            <FaChevronDown className="text-xs ml-1 text-gray-400 group-hover:text-green-400" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;