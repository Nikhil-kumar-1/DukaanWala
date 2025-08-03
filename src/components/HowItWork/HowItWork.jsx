import { FaStoreAlt, FaBoxOpen, FaChartLine, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaStoreAlt className="text-2xl" />,
      title: "Create Your Digital Store",
      description: "Sign up and set up your shop profile in minutes. No technical skills needed.",
      color: "from-green-400 to-green-600"
    },
    {
      icon: <FaBoxOpen className="text-2xl" />,
      title: "Add Your Products",
      description: "Upload products with photos, prices and categories easily with our simple dashboard.",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: <FaChartLine className="text-2xl" />,
      title: "Start Selling & Growing",
      description: "Manage orders, track sales, and reach more customers in your area with our tools.",
      color: "from-purple-400 to-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm font-semibold mb-3">
            For Sellers
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Grow Your Business with <span className="text-green-600">DukaanWala</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to start, run, and grow your online store - simple, fast, and effective.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r opacity-75 rounded-xl blur transition-all duration-300 group-hover:opacity-100 group-hover:-inset-2"></div>
              <div className="relative bg-white p-8 rounded-xl shadow-lg h-full flex flex-col items-center text-center transition-all duration-300 group-hover:shadow-xl">
                <div className={`bg-gradient-to-r ${step.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 text-white shadow-md`}>
                  {step.icon}
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 border-gray-100 absolute -top-6 left-1/2 transform -translate-x-1/2 font-bold text-gray-700">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{step.description}</p>
                <button className="flex items-center text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
                  Learn more <FaArrowRight className="ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Selling Online?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Join thousands of sellers who are growing their business with DukaanWala every day.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg">
                Add Your Free Store
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;