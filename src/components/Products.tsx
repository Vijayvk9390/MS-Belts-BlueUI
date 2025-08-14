import React from 'react';
import { motion } from 'framer-motion';
import { Cog, Shield, Zap, Star, CheckCircle, TrendingUp, Award, Globe } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: "Cigarette Conveyor Belts",
      description: "High-performance belts designed specifically for cigarette manufacturing, ensuring smooth operation and minimal maintenance.",
      features: ["Heat resistant", "Low friction", "Precision timing", "Long lifespan"],
      image: "/images/BELT.png", // Using existing image first
      category: "Tobacco Industry",
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Filter Production Belts",
      description: "Specialized belts for filter manufacturing with superior grip and durability for high-speed production lines.",
      features: ["Superior grip", "High-speed compatible", "Chemical resistant", "Easy maintenance"],
      image: "/images/BELTRR.JPG", // Using existing image first
      category: "Filter Manufacturing",
      color: "from-indigo-500 to-purple-500"
    },
    {
      name: "Industrial Conveyor Belts",
      description: "Heavy-duty belts for various industrial applications, built to withstand harsh conditions and heavy loads.",
      features: ["Heavy load capacity", "Weather resistant", "High durability", "Versatile design"],
      image: "/images/BELT.png", // Using existing image first
      category: "General Industry",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Custom Belt Solutions",
      description: "Tailored conveyor belt solutions designed to meet your specific requirements and industry standards.",
      features: ["Custom specifications", "Industry compliance", "Technical support", "Quality assurance"],
      image: "/images/BELTRR.JPG", // Using existing image first
      category: "Custom Solutions",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Manufactured using the finest materials and advanced technology for exceptional performance and longevity.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Cog,
      title: "Precision Engineering",
      description: "Every belt is engineered with exact specifications to ensure optimal performance in your specific application.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "Designed to operate at maximum efficiency with minimal maintenance requirements and extended service life.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Star,
      title: "Industry Leading",
      description: "Trusted by leading manufacturers worldwide for their reliability, quality, and innovative design.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="products" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-flex items-center bg-white/5 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Cog className="w-5 h-5 mr-3 text-blue-400" />
            <span className="font-semibold">Our Solutions</span>
            <Star className="w-4 h-4 ml-3 text-yellow-400" />
          </motion.div>
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Premium Conveyor Belts
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Discover our comprehensive range of high-quality conveyor belts designed for various industries, 
            from tobacco manufacturing to heavy industrial applications.
          </motion.p>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          className="grid md:grid-cols-2 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
              }}
            >
              <div className="relative mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${product.color} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                  {product.category}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {product.name}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-2">
                {product.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Section */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.05 }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h4>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact our expert team to discuss your specific requirements and discover how our conveyor belts 
            can enhance your manufacturing processes.
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
