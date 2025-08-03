import React from 'react';
import { FaStore, FaUpload, FaShoppingCart, FaMapMarkerAlt, FaRupeeSign } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';

const AboutDukaanWala = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Empowering Local Businesses Digitally
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            DukaanWala bridges the gap between traditional local shops and modern e-commerce, helping small businesses thrive in the digital age.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left Column - Image */}
          <div className="lg:w-1/2">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db" 
                alt="Local shop owner using DukaanWala"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              What is DukaanWala?
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              DukaanWala is an online platform designed to bring local shops and small businesses into the digital world. 
              Our goal is to create a smart, user-friendly e-commerce solution where any seller can easily list their products, 
              manage orders, and reach more customers online — without needing technical knowledge.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 mt-1">
                  <FaStore className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">For Local Businesses</h4>
                  <p className="text-gray-600">
                    Kirana shops, general stores, and retailers can easily go digital with our simple platform
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 mt-1">
                  <FaUpload className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Easy Product Management</h4>
                  <p className="text-gray-600">
                    Upload products with categories, prices, and images in just a few clicks
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 mt-1">
                  <FaShoppingCart className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Seamless Shopping</h4>
                  <p className="text-gray-600">
                    Customers enjoy a smooth shopping experience with local sellers
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 mt-1">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Local Discovery</h4>
                  <p className="text-gray-600">
                    Buyers find products from trusted sellers in their neighborhood
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600 mt-1">
                  <MdPayment className="text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Flexible Payments</h4>
                  <p className="text-gray-600">
                    Coming soon: COD and online payment options for customer convenience
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Register Your Shop
              </button>
              <button className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDukaanWala;