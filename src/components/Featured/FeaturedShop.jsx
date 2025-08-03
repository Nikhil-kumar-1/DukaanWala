import { useState } from 'react';
import { FaStore, FaStar, FaRegStar, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FeaturedShops = () => {
  const locations = [
    "Gola Road",
    "Vijay Nagar",
    "Raza Bazar",
    "Boring Road",
    "Patliputra Colony",
    "Kankarbagh"
  ];

  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  const shops = {
    "Gola Road": [
      {
        name: "Gola Road Supermart",
        category: "Groceries",
        rating: 4.5,
        products: 320,
        distance: "0.5 km",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9"
      },
      {
        name: "Gola Electronics",
        category: "Electronics",
        rating: 4.3,
        products: 150,
        distance: "0.8 km",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
      },
      {
        name: "Gola Electronics",
        category: "Electronics",
        rating: 4.3,
        products: 150,
        distance: "0.8 km",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
      }
    ],
    "Vijay Nagar": [
      {
        name: "Vijay Fashion Hub",
        category: "Clothing",
        rating: 4.7,
        products: 280,
        distance: "1.2 km",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba"
      },
      {
        name: "Vijay Fresh Mart",
        category: "Groceries",
        rating: 4.6,
        products: 420,
        distance: "0.9 km",
        image: "https://images.unsplash.com/photo-1542838132-92c53300491e"
      },
      {
        name: "Vijay Fashion Hub",
        category: "Clothing",
        rating: 4.7,
        products: 280,
        distance: "1.2 km",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba"
      },
    ],
    "Raza Bazar": [
      {
        name: "Raza Kirana Store",
        category: "Groceries",
        rating: 4.4,
        products: 380,
        distance: "1.5 km",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9"
      },
      {
        name: "Raza Home Decor",
        category: "Home Decor",
        rating: 4.2,
        products: 210,
        distance: "1.3 km",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba"
      },
      {
        name: "Raza Kirana Store",
        category: "Groceries",
        rating: 4.4,
        products: 380,
        distance: "1.5 km",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9"
      },
    ],
    "Boring Road": [
      {
        name: "Boring Road Electronics",
        category: "Electronics",
        rating: 4.8,
        products: 190,
        distance: "2.1 km",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
      },
      {
        name: "Boring Fashion",
        category: "Clothing",
        rating: 4.5,
        products: 260,
        distance: "1.8 km",
        image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9"
      },{
        name: "Boring Road Electronics",
        category: "Electronics",
        rating: 4.8,
        products: 190,
        distance: "2.1 km",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
      },
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= Math.floor(rating) ? (
          <FaStar key={i} className="text-yellow-400" />
        ) : (
          <FaRegStar key={i} className="text-yellow-400" />
        )
      );
    }
    return stars;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Local Shops Near You</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover shops in your neighborhood
          </p>
        </div>

        {/* Location Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {locations.map((location) => (
            <button
              key={location}
              onClick={() => setSelectedLocation(location)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                selectedLocation === location
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {location}
            </button>
          ))}
        </div>

        {/* Shops Grid */}
        {shops[selectedLocation] ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shops[selectedLocation]
                .sort((a, b) => parseFloat(a.distance) - parseFloat(b.distance))
                .map((shop, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={shop.image}
                        alt={shop.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute bottom-2 left-2 bg-white/90 px-2 py-1 rounded flex items-center text-sm">
                        <FaMapMarkerAlt className="text-green-600 mr-1" />
                        <span className="font-medium">{shop.distance} away</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <FaStore className="text-gray-400 mr-2" />
                        <span className="text-sm text-gray-500">{shop.category}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{shop.name}</h3>
                      <div className="flex items-center mb-3">
                        {renderStars(shop.rating)}
                        <span className="ml-2 text-sm text-gray-600">
                          {shop.rating} ({Math.floor(shop.rating * 20)} reviews)
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{shop.products}+ products available</p>
                      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition-colors">
                        Visit Store
                      </button>
                    </div>
                  </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
              <button className="px-8 py-3 bg-white border-2 border-green-600 text-green-600 hover:bg-green-50 rounded-lg font-semibold transition-all">
                View All Shops in {selectedLocation}
              </button>
            </div>
          </>
        ) : (
          <div className="text-center py-12 bg-white rounded-xl shadow-sm">
            <p className="text-gray-600 text-lg">No shops found in {selectedLocation} yet</p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg">
              Be the first to register
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedShops;