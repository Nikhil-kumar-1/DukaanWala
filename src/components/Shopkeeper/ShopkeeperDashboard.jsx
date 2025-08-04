import React, { useState } from "react";
import {
  FaStore,
  FaBoxes,
  FaClipboardList,
  FaTruck,
  FaChartLine,
  FaSignOutAlt,
  FaEdit,
  FaPlus,
  FaTrash,
  FaCheck,
  FaTimes,
  FaUserCog,
  FaBell,
  FaSearch,
  FaQrcode,
  FaFileExport,
  FaShoppingCart,
  FaStar,
  FaComments,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ShopkeeperDashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [editMode, setEditMode] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "New order received #104",
      time: "2 mins ago",
      read: false,
    },
    {
      id: 2,
      message: "Product 'Organic Apples' is low in stock",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      message: "Monthly sales report is ready",
      time: "1 day ago",
      read: true,
    },
  ]);
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [shopData, setShopData] = useState({
    name: "FreshMart Groceries",
    address: "123 Market Street, Gola Road, Patna",
    category: "Grocery Store",
    phone: "+91 9876543210",
    email: "contact@freshmart.com",
    openingHours: "9:00 AM - 9:00 PM",
    description: "Your one-stop shop for fresh groceries and daily essentials",
  });

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Organic Apples",
      price: 120,
      stock: 45,
      image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb",
      category: "Fruits",
    },
    {
      id: 2,
      name: "Fresh Milk 1L",
      price: 55,
      stock: 32,
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150",
      category: "Dairy",
    },
    {
      id: 3,
      name: "Whole Wheat Bread",
      price: 35,
      stock: 18,
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
      category: "Bakery",
    },
    {
      id: 4,
      name: "Free Range Eggs (Dozen)",
      price: 60,
      stock: 24,
      image: "https://images.unsplash.com/photo-1587486913049-53fc88980bea",
      category: "Dairy",
    },
  ]);

  const [orders, setOrders] = useState([
    {
      id: 101,
      customer: "Rahul Sharma",
      items: "Apples, Milk",
      total: 175,
      status: "Processing",
      date: "2023-06-15",
    },
    {
      id: 102,
      customer: "Priya Patel",
      items: "Bread, Eggs",
      total: 95,
      status: "Shipped",
      date: "2023-06-14",
    },
    {
      id: 103,
      customer: "Amit Singh",
      items: "Apples, Bread",
      total: 155,
      status: "Delivered",
      date: "2023-06-13",
    },
    {
      id: 104,
      customer: "Neha Gupta",
      items: "Milk, Eggs",
      total: 115,
      status: "Processing",
      date: "2023-06-15",
    },
  ]);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      customer: "Rahul Sharma",
      rating: 5,
      comment: "Excellent quality products!",
      date: "2023-06-10",
    },
    {
      id: 2,
      customer: "Priya Patel",
      rating: 4,
      comment: "Fast delivery, fresh items",
      date: "2023-06-08",
    },
    {
      id: 3,
      customer: "Amit Singh",
      rating: 3,
      comment: "Good but some items were missing",
      date: "2023-06-05",
    },
  ]);

  const stats = {
    todaySales: 5240,
    monthlySales: 87650,
    totalOrders: 128,
    pendingOrders: 3,
    totalProducts: products.length,
    averageRating: 4.2,
  };

  // Filter products based on search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filter orders based on search query
  const filteredOrders = orders.filter(
    (order) =>
      order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.items.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate();
  const [logoutLoading, setLogoutLoading] = useState(false);

  const handleLogout = async () => {
    setLogoutLoading(true);
    try {
      // Optional: Send logout request to backend
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (err) {
      console.error("Logout error:", err);
      // Continue with logout even if API call fails
    } finally {
      // Clear client-side storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      // Redirect to login
      navigate("/login");
      setLogoutLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShopData((prev) => ({ ...prev, [name]: value }));
  };

  const saveProfile = () => {
    setEditMode(false);
    // API call to save data would go here
  };

  const addProduct = (product) => {
    const newProduct = {
      id: products.length + 1,
      ...product,
      price: Number(product.price),
      stock: Number(product.stock),
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150", // Default image
    };
    setProducts([...products, newProduct]);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const updateOrderStatus = (id, status) => {
    setOrders(
      orders.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  const markNotificationAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Dashboard Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md"
      >
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold flex items-center">
                <FaStore className="mr-3" />
                Shopkeeper Dashboard
              </h1>

              {/* Search Bar */}
              <div className="hidden md:block relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 rounded-lg text-gray-800 w-64 focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
            </div>

            <div className="flex items-center ml-20">
              {/* Notifications */}
              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 mr-10 rounded-full relative"
                >
                  <FaBell className="text-xl" />
                  {notifications.some((n) => !n.read) && (
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                  )}
                </button>

                <AnimatePresence>
                  {showNotifications && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute  right-0 mt-2 w-72 bg-black rounded-lg shadow-xl z-50"
                    >
                      <div className="p-3 border-b">
                        <h3 className="font-medium text-white-800">
                          Notifications
                        </h3>
                      </div>
                      <div className="max-h-80 overflow-y-auto">
                        {notifications.map((notification) => (
                          <div
                            key={notification.id}
                            className={`p-3 border-b hover:bg-green-500 cursor-pointer ${!notification.read}`}
                            onClick={() =>
                              markNotificationAsRead(notification.id)
                            }
                          >
                            <p className="text-sm">{notification.message}</p>
                            <p className="text-xs text-white-500 mt-1">
                              {notification.time}
                            </p>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 text-center text-sm text-black-600 hover:bg-red-500">
                        View All Notifications
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={handleLogout}
                disabled={logoutLoading}
                className={` flex items-center bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg transition-all ${
                  logoutLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {logoutLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Logging out...
                  </>
                ) : (
                  <>
                    <FaSignOutAlt className="mr-2" />
                    <span className="hidden md:inline">Logout</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Dashboard */}
      <div className="flex-1 container mx-auto p-6">
        {/* Navigation Tabs */}
        <motion.div
          className="flex overflow-x-auto mb-8 bg-white rounded-xl shadow-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {[
            { id: "profile", icon: <FaStore />, label: "Shop Profile" },
            { id: "products", icon: <FaBoxes />, label: "Products" },
            { id: "orders", icon: <FaClipboardList />, label: "Orders" },
            { id: "analytics", icon: <FaChartLine />, label: "Analytics" },
            { id: "reviews", icon: <FaStar />, label: "Customer Reviews" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-4 font-medium text-sm md:text-base transition-all ${
                activeTab === tab.id
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Mobile Search */}
        <div className="md:hidden mb-6">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-lg text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-green-300 border"
            />
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <AnimatePresence mode="wait">
            {/* Shop Profile Section */}
            {activeTab === "profile" && (
              <motion.div
                key="profile"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="p-6 md:p-8"
              >
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <FaStore className="mr-3 text-green-600" />
                    Shop Profile
                  </h2>
                  {editMode ? (
                    <div className="flex space-x-3">
                      <button
                        onClick={saveProfile}
                        className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                      >
                        <FaCheck className="mr-2" /> Save
                      </button>
                      <button
                        onClick={() => setEditMode(false)}
                        className="flex items-center bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
                      >
                        <FaTimes className="mr-2" /> Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setEditMode(true)}
                      className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                    >
                      <FaEdit className="mr-2" /> Edit Profile
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Shop Name
                    </label>
                    {editMode ? (
                      <input
                        type="text"
                        name="name"
                        value={shopData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {shopData.name}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Category</label>
                    {editMode ? (
                      <input
                        type="text"
                        name="category"
                        value={shopData.category}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {shopData.category}
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                      Description
                    </label>
                    {editMode ? (
                      <textarea
                        name="description"
                        value={shopData.description}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                        rows="2"
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {shopData.description}
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Address</label>
                    {editMode ? (
                      <textarea
                        name="address"
                        value={shopData.address}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                        rows="3"
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {shopData.address}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Phone Number
                    </label>
                    {editMode ? (
                      <input
                        type="text"
                        name="phone"
                        value={shopData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {shopData.phone}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    {editMode ? (
                      <input
                        type="email"
                        name="email"
                        value={shopData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {shopData.email}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Opening Hours
                    </label>
                    {editMode ? (
                      <input
                        type="text"
                        name="openingHours"
                        value={shopData.openingHours}
                        onChange={handleInputChange}
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                      />
                    ) : (
                      <div className="p-3 bg-gray-50 rounded-lg">
                        {shopData.openingHours}
                      </div>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">
                      QR Code for Customers
                    </label>
                    <div className="p-4 bg-gray-50 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <FaQrcode className="text-6xl mx-auto text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500">
                          Scan to visit your store
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Product Management Section */}
            {activeTab === "products" && (
              <motion.div
                key="products"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <FaBoxes className="mr-3 text-green-600" />
                    Product Management
                  </h2>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setActiveTab("products")}
                      className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                    >
                      <FaPlus className="mr-2" /> Add Product
                    </button>
                    <button className="flex items-center bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg">
                      <FaFileExport className="mr-2" /> Export
                    </button>
                  </div>
                </div>

                {/* Products List */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Product
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Image
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Category
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Stock
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredProducts.map((product) => (
                        <motion.tr
                          key={product.id}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                            {product.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            {product.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                            ₹{product.price}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 py-1 rounded-full text-xs ${
                                product.stock > 10
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {product.stock} in stock
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-green-600 hover:text-green-900 mr-3">
                              Edit
                            </button>
                            <button
                              onClick={() => deleteProduct(product.id)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Delete
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {/* Order Management Section */}
            {activeTab === "orders" && (
              <motion.div
                key="orders"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="p-6 md:p-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <h2 className="text-xl font-bold text-gray-800 flex items-center">
                    <FaClipboardList className="mr-3 text-green-600" />
                    Order Management
                  </h2>
                  <div className="flex space-x-3">
                    <div className="relative">
                      <select className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500">
                        <option>Filter by status</option>
                        <option>Processing</option>
                        <option>Shipped</option>
                        <option>Delivered</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg
                          className="fill-current h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </div>
                    </div>
                    <button className="flex items-center bg-white border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded-lg">
                      <FaFileExport className="mr-2" /> Export
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredOrders.map((order) => (
                    <motion.div
                      key={order.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="bg-gray-50 px-6 py-4 border-b">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-medium">Order #{order.id}</h3>
                            <p className="text-sm text-gray-500 mt-1">
                              {order.date}
                            </p>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                          {order.customer}
                        </p>
                      </div>
                      <div className="p-6">
                        <p className="mb-3">
                          <span className="font-medium">Items:</span>{" "}
                          {order.items}
                        </p>
                        <p className="mb-4">
                          <span className="font-medium">Total:</span> ₹
                          {order.total}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          <button
                            onClick={() =>
                              updateOrderStatus(order.id, "Processing")
                            }
                            className={`px-3 py-1 rounded-lg text-xs ${
                              order.status === "Processing"
                                ? "bg-yellow-600 text-white"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            Processing
                          </button>
                          <button
                            onClick={() =>
                              updateOrderStatus(order.id, "Shipped")
                            }
                            className={`px-3 py-1 rounded-lg text-xs ${
                              order.status === "Shipped"
                                ? "bg-blue-600 text-white"
                                : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            Shipped
                          </button>
                          <button
                            onClick={() =>
                              updateOrderStatus(order.id, "Delivered")
                            }
                            className={`px-3 py-1 rounded-lg text-xs ${
                              order.status === "Delivered"
                                ? "bg-green-600 text-white"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            Delivered
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Analytics Section */}
            {activeTab === "analytics" && (
              <motion.div
                key="analytics"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-gray-800 flex items-center mb-8">
                  <FaChartLine className="mr-3 text-green-600" />
                  Shop Analytics
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500"
                  >
                    <h3 className="text-gray-500 font-medium">Today's Sales</h3>
                    <p className="text-3xl font-bold mt-2">
                      ₹{stats.todaySales.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      +12% from yesterday
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500"
                  >
                    <h3 className="text-gray-500 font-medium">Monthly Sales</h3>
                    <p className="text-3xl font-bold mt-2">
                      ₹{stats.monthlySales.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      +8% from last month
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500"
                  >
                    <h3 className="text-gray-500 font-medium">Total Orders</h3>
                    <p className="text-3xl font-bold mt-2">
                      {stats.totalOrders}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      +15 new this week
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-yellow-500"
                  >
                    <h3 className="text-gray-500 font-medium">
                      Average Rating
                    </h3>
                    <div className="flex items-center mt-2">
                      <div className="text-3xl font-bold mr-2">
                        {stats.averageRating}
                      </div>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <FaStar
                            key={star}
                            className={`text-lg ${
                              star <= Math.round(stats.averageRating)
                                ? "text-yellow-500"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Based on {reviews.length} reviews
                    </p>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-medium text-lg mb-4">Sales Overview</h3>
                    <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                      <p className="text-gray-400">
                        Sales chart will appear here
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-medium text-lg mb-4">
                      Top Selling Products
                    </h3>
                    <div className="space-y-4">
                      {products.slice(0, 4).map((product, index) => (
                        <div key={product.id} className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4 font-medium">
                            {index + 1}
                          </div>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-10 h-10 rounded-full object-cover mr-3"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{product.name}</h4>
                            <p className="text-sm text-gray-500">
                              {product.category}
                            </p>
                          </div>
                          <div className="text-green-600 font-medium">
                            ₹{product.price}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Customer Reviews Section */}
            {activeTab === "reviews" && (
              <motion.div
                key="reviews"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="p-6 md:p-8"
              >
                <h2 className="text-xl font-bold text-gray-800 flex items-center mb-8">
                  <FaStar className="mr-3 text-green-600" />
                  Customer Reviews
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {reviews.map((review) => (
                    <motion.div
                      key={review.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-medium">{review.customer}</h3>
                            <p className="text-sm text-gray-500">
                              {review.date}
                            </p>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <FaStar
                                key={star}
                                className={`text-lg ${
                                  star <= review.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                        <div className="mt-4 pt-4 border-t flex justify-end">
                          <button className="text-sm text-green-600 hover:text-green-800 flex items-center">
                            <FaComments className="mr-1" /> Reply
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">FreshMart</h3>
              <p className="text-gray-400">
                Your neighborhood grocery store providing fresh products daily.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <address className="not-italic text-gray-400">
                <p>123 Market Street</p>
                <p>Gola Road, Patna</p>
                <p className="mt-2">+91 9876543210</p>
                <p>contact@freshmart.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} FreshMart Groceries. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ShopkeeperDashboard;
