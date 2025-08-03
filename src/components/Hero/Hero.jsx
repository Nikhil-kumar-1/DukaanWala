import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaMapMarkerAlt, FaChevronRight, FaShoppingBag, FaMobileAlt, FaTshirt, FaHome, FaSmile, FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      title: "Fresh Groceries Delivered",
      subtitle: "Get farm-fresh vegetables, fruits and daily essentials delivered to your doorstep",
      cta: "Shop Now",
      link: "/category/grocery",
      icon: <FaShoppingBag className="text-4xl mb-4 text-green-600" />
    },
    {
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4",
      title: "Premium Electronics",
      subtitle: "Latest smartphones, laptops and home appliances at unbeatable prices",
      cta: "Explore Electronics",
      link: "/category/electronics",
      icon: <FaMobileAlt className="text-4xl mb-4 text-blue-600" />
    },
    {
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
      title: "Kitchen Essentials",
      subtitle: "Premium cookware and utensils to elevate your cooking experience",
      cta: "View Collection",
      link: "/category/kitchen",
      icon: <FaHome className="text-4xl mb-4 text-orange-600" />
    },
    {
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      title: "Fashion & Lifestyle",
      subtitle: "Trendy outfits and accessories for every season and occasion",
      cta: "Discover Fashion",
      link: "/category/fashion",
      icon: <FaTshirt className="text-4xl mb-4 text-purple-600" />
    }
  ];

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.3 }
      }
    })
  };

  return (
    <section className="relative bg-gray-50 overflow-hidden">
      {/* Main Slider */}
      <div className="relative h-[70vh] min-h-[500px] max-h-[700px]">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10"></div>
            </div>
            
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20"
              >
                {slides[currentSlide].icon}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-gray-600 mb-8 text-lg md:text-xl">
                  {slides[currentSlide].subtitle}
                </p>
                <Link 
                  to={slides[currentSlide].link}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  {slides[currentSlide].cta}
                  <FaChevronRight className="ml-2" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <motion.button 
          onClick={prevSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-20 transition-all hidden sm:block"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xl" />
        </motion.button>
        <motion.button 
          onClick={nextSlide}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg z-20 transition-all hidden sm:block"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xl" />
        </motion.button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.2 }}
              className={`h-3 rounded-full transition-all ${index === currentSlide ? 'bg-green-600' : 'bg-white/80 hover:bg-white'}`}
              animate={{
                width: index === currentSlide ? 24 : 16
              }}
              aria-label={`Go to slide ${index + 1}`}
            ></motion.button>
          ))}
        </div>
      </div>

      {/* Shop by Location */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
          >
            Shop by Location
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Discover local businesses and services near you
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              name: "Gola Road", 
              image: "https://images.unsplash.com/photo-1580655653888-3a4a5d5d9a9a",
              shops: 42,
              distance: "1.5 km",
              category: "Popular"
            },
            { 
              name: "Vijay Nagar", 
              image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00",
              shops: 38,
              distance: "2.3 km",
              category: "Trending"
            },
            { 
              name: "Raza Bazar", 
              image: "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2",
              shops: 56,
              distance: "3.1 km",
              category: "Busy"
            },
            { 
              name: "Boring Road", 
              image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
              shops: 29,
              distance: "4.5 km",
              category: "Premium"
            }
          ].map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                {location.category && (
                  <span className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {location.category}
                  </span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{location.name}</h3>
                    <p className="text-white/90">{location.shops} shops available</p>
                  </div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-full text-sm flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    {location.distance}
                  </div>
                </div>
              </div>
              <Link 
                to={`/locations/${location.name.toLowerCase().replace(' ', '-')}`}
                className="absolute inset-0 z-10"
                aria-label={`Shop in ${location.name}`}
              ></Link>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link 
            to="/locations"
            className="inline-flex items-center justify-center px-8 py-3 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-md"
          >
            View All Locations
            <FaChevronRight className="ml-2" />
          </Link>
        </motion.div>
      </div>

      {/* Quick Categories */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-gray-800 mb-12"
          >
            Shop by Category
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              { name: "Grocery", icon: <FaShoppingBag className="text-3xl" />, color: "bg-green-100 text-green-600" },
              { name: "Electronics", icon: <FaMobileAlt className="text-3xl" />, color: "bg-blue-100 text-blue-600" },
              { name: "Fashion", icon: <FaTshirt className="text-3xl" />, color: "bg-purple-100 text-purple-600" },
              { name: "Home", icon: <FaHome className="text-3xl" />, color: "bg-orange-100 text-orange-600" },
              { name: "Toys", icon: <FaGamepad className="text-3xl" />, color: "bg-red-100 text-red-600" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link 
                  to={`/category/${category.name.toLowerCase()}`}
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl ${category.color} transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1`}
                >
                  <div className="mb-4 p-4 bg-white rounded-full shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.name}</h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;