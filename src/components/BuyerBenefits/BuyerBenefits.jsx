import { FaShippingFast, FaShieldAlt, FaTags, FaHeadset } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BuyerBenefits = () => {
  const benefits = [
    {
      icon: <FaShippingFast className="text-3xl" />,
      title: "Fast Delivery",
      description: "Get your orders delivered within 10-15 minutes.",
      color: "text-blue-500"
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "100% Authentic",
      description: "Guaranteed genuine products from verified sellers",
      color: "text-green-500"
    },
    {
      icon: <FaTags className="text-3xl" />,
      title: "Best Prices",
      description: "Competitive pricing with regular discounts and offers",
      color: "text-purple-500"
    },
    {
      icon: <FaHeadset className="text-3xl" />,
      title: "24/7 Support",
      description: "Dedicated customer care for all your shopping needs",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Shop With Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience shopping that's convenient, reliable, and rewarding
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className={`${benefit.color} mb-6`}>{benefit.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyerBenefits;