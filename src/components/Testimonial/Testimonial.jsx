import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Frequent Shopper",
      comment: "I've been using DukaanWala for all my household needs. The delivery is always on time and the product quality is excellent!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Patel",
      role: "Small Business Owner",
      comment: "As a seller, this platform has helped me reach customers I never could before. The seller dashboard is very intuitive.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Arjun Mehta",
      role: "Tech Enthusiast",
      comment: "Found great deals on electronics that were nowhere else. Customer support resolved my issue within hours!",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of happy customers and sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <FaQuoteLeft className="text-green-200 text-4xl mb-4" />
              <p className="text-gray-700 mb-6">{testimonial.comment}</p>
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-${i < testimonial.rating ? 'yellow-400' : 'gray-300'} text-lg`}
                  />
                ))}
              </div>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;