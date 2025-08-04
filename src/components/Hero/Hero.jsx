import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaMapMarkerAlt, FaChevronRight, FaShoppingBag, FaMobileAlt, FaTshirt, FaHome, FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Fresh Groceries Delivered",
      subtitle: "Get farm-fresh vegetables, fruits and daily essentials delivered to your doorstep",
      cta: "Shop Now",
      link: "/category/grocery",
      icon: <FaShoppingBag className="text-4xl mb-4 text-green-600" />,
      bgColor: "from-green-100 to-green-50"
    },
    {
      image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Premium Electronics",
      subtitle: "Latest smartphones, laptops and home appliances at unbeatable prices",
      cta: "Explore Electronics",
      link: "/category/electronics",
      icon: <FaMobileAlt className="text-4xl mb-4 text-blue-600" />,
      bgColor: "from-blue-100 to-blue-50"
    },
    {
      image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Kitchen Essentials",
      subtitle: "Premium cookware and utensils to elevate your cooking experience",
      cta: "View Collection",
      link: "/category/kitchen",
      icon: <FaHome className="text-4xl mb-4 text-orange-600" />,
      bgColor: "from-orange-100 to-orange-50"
    },
    {
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Fashion & Lifestyle",
      subtitle: "Trendy outfits and accessories for every season and occasion",
      cta: "Discover Fashion",
      link: "/category/fashion",
      icon: <FaTshirt className="text-4xl mb-4 text-purple-600" />,
      bgColor: "from-purple-100 to-purple-50"
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
    if (isHovering) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovering]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0.5
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring', stiffness: 400, damping: 30 },
        opacity: { duration: 0.8 }
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0.5,
      transition: {
        x: { type: 'spring', stiffness: 400, damping: 30 },
        opacity: { duration: 0.8 }
      }
    })
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Main Slider */}
      <div 
        className="relative h-[80vh] min-h-[500px] max-h-[800px]"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slides[currentSlide].bgColor}`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[currentSlide].image})`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
            </div>
            
            <div className="container mx-auto px-4 h-full flex items-center relative z-10">
              <motion.div 
                variants={contentVariants}
                initial="hidden"
                animate="visible"
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

        {/* Navigation Arrows - More Visible */}
        <motion.button 
          onClick={prevSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-xl z-20 transition-all hidden sm:flex items-center justify-center"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-2xl" />
        </motion.button>
        <motion.button 
          onClick={nextSlide}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,1)" }}
          whileTap={{ scale: 0.9 }}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-xl z-20 transition-all hidden sm:flex items-center justify-center"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-2xl" />
        </motion.button>

        {/* Dots Indicator - More Interactive */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              whileHover={{ scale: 1.3 }}
              className={`h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white' : 'bg-white/60 hover:bg-white/80'}`}
              animate={{
                width: index === currentSlide ? 28 : 12,
                opacity: index === currentSlide ? 1 : 0.8
              }}
              aria-label={`Go to slide ${index + 1}`}
            ></motion.button>
          ))}
        </div>
      </div>

      {/* Shop by Location - Enhanced Card Design */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Shop by Location
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover local businesses and services near you
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { 
              name: "Gola Road", 
              image: "https://images.unsplash.com/photo-1580655653888-3a4a5d5d9a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              shops: 42,
              distance: "1.5 km",
              category: "Popular"
            },
            { 
              name: "Vijay Nagar", 
              image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              shops: 38,
              distance: "2.3 km",
              category: "Trending"
            },
            { 
              name: "Raza Bazar", 
              image: "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              shops: 56,
              distance: "3.1 km",
              category: "Busy"
            },
            { 
              name: "Boring Road", 
              image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              shops: 29,
              distance: "4.5 km",
              category: "Premium"
            }
          ].map((location, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="h-72 overflow-hidden">
                <motion.img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                {location.category && (
                  <motion.span 
                    className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {location.category}
                  </motion.span>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{location.name}</h3>
                    <p className="text-white/90">{location.shops} shops available</p>
                  </div>
                  <motion.div 
                    className="bg-green-600 text-white px-4 py-2 rounded-full text-sm flex items-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    <FaMapMarkerAlt className="mr-2" />
                    {location.distance}
                  </motion.div>
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
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Link 
            to="/locations"
            className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white rounded-lg font-medium text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View All Locations
            <FaChevronRight className="ml-2" />
          </Link>
        </motion.div>
      </div>

      {/* Quick Categories - More Engaging */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center text-gray-800 mb-16"
          >
            Shop by Category
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {[
              { name: "Grocery", icon: <FaShoppingBag className="text-4xl" />, color: "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white" },
              { name: "Electronics", icon: <FaMobileAlt className="text-4xl" />, color: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white" },
              { name: "Fashion", icon: <FaTshirt className="text-4xl" />, color: "bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white" },
              { name: "Home", icon: <FaHome className="text-4xl" />, color: "bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white" },
              { name: "Toys", icon: <FaGamepad className="text-4xl" />, color: "bg-red-100 text-red-600 hover:bg-red-600 hover:text-white" }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <Link 
                  to={`/category/${category.name.toLowerCase()}`}
                  className={`flex flex-col items-center justify-center p-8 rounded-2xl ${category.color} transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2`}
                >
                  <motion.div 
                    className="mb-6 p-5 bg-white rounded-full shadow-sm group-hover:bg-transparent group-hover:shadow-none transition-all duration-500"
                    whileHover={{ rotate: 10 }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
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