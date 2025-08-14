import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Globe, MapPin, Building, Users, Award, TrendingUp, Star, Zap } from 'lucide-react';

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

const GlobalPresence = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  // Counting animations for stats
  const countriesCount = useCountUp(25);
  const officesCount = useCountUp(8);
  const clientsCount = useCountUp(1000);
  const experienceCount = useCountUp(60);

  return (
    <section ref={containerRef} id="global" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements with parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <motion.div 
          className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div 
          className="absolute top-1/2 right-1/3 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with enhanced animations */}
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
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(59, 130, 246, 0.5)"
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-5 h-5 mr-3 text-blue-400" />
            </motion.div>
            <span className="font-semibold">Global Reach</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            >
              <Star className="w-4 h-4 ml-3 text-yellow-400" />
            </motion.div>
          </motion.div>
          <motion.h2 
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Worldwide Presence
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From our headquarters in India, we've built a network of trusted partners 
            and collaborators spanning multiple continents, ensuring global reach and local expertise.
          </motion.p>
        </motion.div>

        {/* Stats Grid with enhanced animations */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {[
            { icon: Globe, number: countriesCount.count, label: "Countries Served", color: "from-blue-500 to-indigo-500", ref: countriesCount.ref },
            { icon: Building, number: officesCount.count, label: "Global Offices", color: "from-indigo-500 to-purple-500", ref: officesCount.ref },
            { icon: Users, number: clientsCount.count, label: "Happy Clients", color: "from-purple-500 to-pink-500", ref: clientsCount.ref },
            { icon: Award, number: experienceCount.count, label: "Years Experience", color: "from-yellow-500 to-orange-500", ref: experienceCount.ref }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.05
              }}
            >
              <motion.div
                className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <stat.icon className="w-10 h-10 text-white" />
                </motion.div>
              </motion.div>
              <motion.div 
                ref={stat.ref} 
                className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}+
              </motion.div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Two Column Layout with enhanced animations */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div 
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl group h-[400px] w-full flex flex-col justify-between"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 35px 60px -12px rgba(0, 0, 0, 0.6)"
              }}
            >
              <div>
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Globe className="w-6 h-6 text-white" />
                  </motion.div>
                  <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Global Operations
                  </h4>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  From our headquarters in India, we've built a network of trusted partners 
                  and collaborators spanning multiple continents, ensuring global reach and local expertise.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "8", color: "blue", label: "Countries" },
                  { number: "4", color: "indigo", label: "Continents" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="text-center p-6 bg-white/5 rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300 group cursor-pointer"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(255, 255, 255, 0.1)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div 
                      className={`text-3xl font-bold text-${item.color}-400 mb-2 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.number}
                    </motion.div>
                    <div className="text-sm text-gray-300 font-semibold">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Map with enhanced animations */}
          <div className="flex justify-center lg:justify-end">
            <motion.div 
              className="w-full max-w-lg relative group"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                scale: 1.02,
                rotateY: 2
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                whileHover={{ scale: 1.1 }}
              />
              <motion.div 
                className="w-full h-[400px] rounded-2xl shadow-2xl border-4 border-white/10 overflow-hidden"
                whileHover={{ 
                  boxShadow: "0 35px 60px -12px rgba(59, 130, 246, 0.3)"
                }}
              >
                <motion.img 
                  src="/images/locationb.png" 
                  alt="World Map with Global Locations" 
                  className="w-full h-full object-cover rounded-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Additional Features with enhanced animations */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {[
            {
              icon: TrendingUp,
              title: "Continuous Growth",
              description: "Expanding our global footprint year after year with strategic partnerships and local expertise.",
              color: "from-green-500 to-emerald-500"
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Quick response times and efficient service delivery across all time zones and locations.",
              color: "from-yellow-500 to-orange-500"
            },
            {
              icon: Star,
              title: "Premium Quality",
              description: "Maintaining the highest standards of quality and service excellence worldwide.",
              color: "from-purple-500 to-pink-500"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ 
                  scale: 1.2,
                  rotate: 10
                }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default GlobalPresence;