import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {FaMapMarkerAlt, FaUser, FaLock, FaStore, FaShoppingCart, FaEnvelope, FaPhone, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import axios from 'axios';

const AuthPage = ({ type }) => {
  const navigate = useNavigate();
  const isLogin = type === 'login';
  
  // Common state
  const [userType, setUserType] = useState('customer');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Register specific state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [shopName, setShopName] = useState('');
  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [categories, setCategories] = useState(['general']);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (isLogin) {
        // Login validation
        if (!email || !password) {
          throw new Error('Please fill in all fields');
        }

        // Login API call
        const { data } = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password
        });

        // Store token and user data
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redirect based on role
        if (data.user.role === 'shopkeeper') {
          navigate('/shopkeeper');
        } else {
          navigate('/');
        }

      } else {
        // Register validation
        if (!name || !email || !phone || !password || !confirmPassword) {
          throw new Error('Please fill in all fields');
        }
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
        }

        // Prepare register data
        const registerData = {
          name,
          email,
          phone,
          password,
          confirmPassword,
          userType
        };

        // Add shopkeeper specific fields if needed
        if (userType === 'shopkeeper') {
          registerData.shopName = shopName || `${name}'s Shop`;
          registerData.address = address || 'Address not provided';
          registerData.coordinates = coordinates;
          registerData.categories = categories;
        }

        // Register API call
        const { data } = await axios.post('http://localhost:5000/api/auth/register', registerData);

        // Store token and user data
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redirect based on role
        if (data.user.role === 'shopkeeper') {
          navigate('/shopkeeper');
        } else {
          navigate('/');
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden p-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 to-purple-900/70"></div>
      </div>

      {/* Back Button */}
      <motion.button
        onClick={() => navigate(-1)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-6 left-6 z-20 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg"
        aria-label="Go back"
      >
        <FaArrowLeft className="text-xl" />
      </motion.button>

      {/* Auth Card - Adjusted for Register Form */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl relative z-10 border border-white/20 ${
          isLogin ? 'p-8 w-full max-w-md' : 'p-8 w-full max-w-2xl'
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {isLogin ? 'Welcome Back!' : 'Create Account'}
          </h2>
          <p className="text-gray-600">
            {isLogin ? 'Login to continue shopping' : 'Join us to explore amazing products'}
          </p>
        </div>
        
        {error && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded mb-6"
          >
            {error}
          </motion.div>
        )}
        
        <form onSubmit={handleSubmit} className={!isLogin ? "grid grid-cols-1 md:grid-cols-2 gap-6" : ""}>
          {/* Register Form - Two Columns */}
          {!isLogin && (
            <>
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-5"
                >
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                    <FaUser className="inline mr-2 text-blue-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="John Doe"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-5"
                >
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                    <FaEnvelope className="inline mr-2 text-blue-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-5"
                >
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
                    <FaPhone className="inline mr-2 text-blue-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="+91 9876543210"
                    required
                  />
                </motion.div>

                {/* Shopkeeper specific fields */}
                {userType === 'shopkeeper' && (
                  <>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-5"
                    >
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="shopName">
                        <FaStore className="inline mr-2 text-green-500" />
                        Shop Name
                      </label>
                      <input
                        type="text"
                        id="shopName"
                        value={shopName}
                        onChange={(e) => setShopName(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        placeholder="My Awesome Shop"
                      />
                    </motion.div>
                  </>
                )}
              </div>
              
              <div>
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mb-5"
                >
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="password">
                    <FaLock className="inline mr-2 text-blue-500" />
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="********"
                    required
                    minLength="6"
                  />
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6"
                >
                  <label className="block text-gray-700 mb-2 font-medium" htmlFor="confirmPassword">
                    <FaLock className="inline mr-2 text-blue-500" />
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="********"
                    required
                    minLength="6"
                  />
                </motion.div>

                {/* More shopkeeper specific fields */}
                {userType === 'shopkeeper' && (
                  <>
                    <motion.div 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mb-5"
                    >
                      <label className="block text-gray-700 mb-2 font-medium" htmlFor="address">
                        <FaMapMarkerAlt className="inline mr-2 text-green-500" />
                        Shop Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
                        placeholder="123 Main St, City"
                      />
                    </motion.div>
                  </>
                )}
              </div>
            </>
          )}
          
          {/* Login Form - Single Column */}
          {isLogin && (
            <>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-5"
              >
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                  <FaEnvelope className="inline mr-2 text-blue-500" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-5"
              >
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="password">
                  <FaLock className="inline mr-2 text-blue-500" />
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="********"
                  required
                />
              </motion.div>
            </>
          )}
          
          {/* User Type Selection - Full Width */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className={!isLogin ? "md:col-span-2 mb-6" : "mb-6"}
          >
            <label className="block text-gray-700 mb-3 font-medium">
              {isLogin ? 'Login as:' : 'Register as:'}
            </label>
            <div className="flex space-x-4">
              <motion.button
                type="button"
                onClick={() => setUserType('customer')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 py-3 rounded-lg border-2 transition-all flex items-center justify-center ${
                  userType === 'customer' 
                    ? 'bg-blue-500 text-white border-blue-500 shadow-md' 
                    : 'bg-white border-gray-300 hover:border-blue-300'
                }`}
              >
                <FaShoppingCart className="mr-2" /> Customer
              </motion.button>
              <motion.button
                type="button"
                onClick={() => setUserType('shopkeeper')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 py-3 rounded-lg border-2 transition-all flex items-center justify-center ${
                  userType === 'shopkeeper' 
                    ? 'bg-green-500 text-white border-green-500 shadow-md' 
                    : 'bg-white border-gray-300 hover:border-green-300'
                }`}
              >
                <FaStore className="mr-2" /> Shopkeeper
              </motion.button>
            </div>
          </motion.div>
          
          {/* Submit Button - Full Width */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white py-3 rounded-lg font-semibold transition-all shadow-lg ${
              !isLogin ? "md:col-span-2 py-4 text-lg" : ""
            } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : isLogin ? 'Login' : 'Register'}
          </motion.button>
        </form>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center"
        >
          <p className="text-gray-600">
            {isLogin ? (
              <>
                Don't have an account?{' '}
                <Link 
                  to="/register" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Register here
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link 
                  to="/login" 
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  Login here
                </Link>
              </>
            )}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AuthPage;