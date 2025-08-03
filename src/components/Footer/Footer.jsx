import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Newsletter Subscription */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Get the latest updates on new products and upcoming sales
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 hover:bg-green-700 px-2 py-3 rounded-lg font-medium whitespace-nowrap transition-colors">
                Subscribe
              </button>
            </div>
            <div className="mt-4 flex gap-4">
              <span className="text-gray-400">Follow us:</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl ml-4 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 ml-4">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</a></li>
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Refunds</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shop Categories</h3>
            <ul className="space-y-2">
              <li><a href="/category/grocery" className="text-gray-400 hover:text-white transition-colors">Groceries</a></li>
              <li><a href="/category/electronics" className="text-gray-400 hover:text-white transition-colors">Electronics</a></li>
              <li><a href="/category/fashion" className="text-gray-400 hover:text-white transition-colors">Fashion</a></li>
              <li><a href="/category/home" className="text-gray-400 hover:text-white transition-colors">Home & Kitchen</a></li>
              <li><a href="/category/beauty" className="text-gray-400 hover:text-white transition-colors">Beauty</a></li>
              <li><a href="/category/toys" className="text-gray-400 hover:text-white transition-colors">Toys & Games</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-green-500" />
                <span className="text-gray-400">
                  123 Business Street, City Center, Patna, Bihar 800001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-green-500" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                <a href="mailto:contact@dukaanwala.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@dukaanwala.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="/" className="text-2xl font-bold">
              <span className="text-green-500">Dukaan</span>
              <span className="text-white">Wala</span>
            </a>
          </div>
          
          <div className="text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} DukaanWala. All rights reserved.</p>
          </div>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <img src="/images/payment-methods/visa.png" alt="Visa" className="h-6" />
            <img src="/images/payment-methods/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/images/payment-methods/upi.png" alt="UPI" className="h-6" />
            <img src="/images/payment-methods/cod.png" alt="Cash on Delivery" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;