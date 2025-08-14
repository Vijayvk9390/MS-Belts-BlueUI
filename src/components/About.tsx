import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Users, Globe, TrendingUp, Shield, Zap, Star, CheckCircle } from 'lucide-react';

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * end);
        
        setCount(currentCount);
        
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [isInView, end, duration]);

  return { count, ref };
};

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  // Counting animations for stats
  const experienceCount = useCountUp(60);
  const countriesCount = useCountUp(25);
  const projectsCount = useCountUp(1000);
  const supportCount = useCountUp(24);

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="inline-flex items-center bg-white/5 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/10 backdrop-blur-sm"
            variants={itemVariants}
          >
            <Award className="w-5 h-5 mr-3 text-blue-400" />
            <span className="font-semibold">Our Story</span>
            <Star className="w-4 h-4 ml-3 text-yellow-400" />
          </motion.div>
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            About MSBELT
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            For over six decades, we've been at the forefront of conveyor belt innovation, 
            delivering exceptional quality and reliability to industries worldwide.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white leading-tight">
                Pioneering 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"> Conveyor Belt </span>
                Excellence Since 1963
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                MSBELT has been manufacturing high-performance conveyor belts and suction belts for cigarette 
                and filter production, mobilizing ideas and delivering precision engineering worldwide.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted partner 
                for industries across the globe, from automotive to food processing, pharmaceuticals to mining.
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "Quality Assured", description: "Premium materials and rigorous testing" },
                { icon: Globe, title: "Global Reach", description: "Serving 25+ countries worldwide" },
                { icon: Users, title: "Expert Team", description: "60+ years of combined experience" },
                { icon: TrendingUp, title: "Innovation", description: "Cutting-edge technology solutions" }
              ].map((feature, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div 
            className="relative"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/10">
              <img 
                src="/images/MSB_BUILDING.JPG" 
                alt="MSBELT Manufacturing Facility" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Icon */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { number: experienceCount.count, label: "Years Experience", icon: Award, color: "from-blue-500 to-indigo-500", ref: experienceCount.ref },
            { number: countriesCount.count, label: "Countries Served", icon: Globe, color: "from-indigo-500 to-purple-500", ref: countriesCount.ref },
            { number: projectsCount.count, label: "Projects Completed", icon: TrendingUp, color: "from-purple-500 to-pink-500", ref: projectsCount.ref },
            { number: supportCount.count, label: "Global Support", icon: Zap, color: "from-yellow-500 to-orange-500", ref: supportCount.ref }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <stat.icon className="w-10 h-10 text-white" />
              </motion.div>
              <div ref={stat.ref} className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}+
              </div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            {
              icon: Shield,
              title: "Quality Excellence",
              description: "We maintain the highest standards in every product we manufacture, ensuring reliability and performance that exceeds expectations.",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Users,
              title: "Customer Focus",
              description: "Our success is built on understanding and meeting our customers' unique needs with personalized solutions and exceptional service.",
              color: "from-blue-500 to-indigo-500"
            },
            {
              icon: TrendingUp,
              title: "Innovation",
              description: "We continuously invest in research and development to bring cutting-edge conveyor belt solutions to the market.",
              color: "from-purple-500 to-pink-500"
            }
          ].map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {value.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 rounded-3xl p-10 border border-white/10 relative overflow-hidden"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mr-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              To be the global leader in conveyor belt solutions, driving innovation and excellence 
              while providing sustainable, reliable products that empower industries to achieve their goals. 
              We are committed to building lasting partnerships and contributing to the success of our customers worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;