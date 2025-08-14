import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Shield, Zap, Globe, TrendingUp } from 'lucide-react';

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

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Counting animations for stats
  const countriesCount = useCountUp(25);
  const yearsCount = useCountUp(60);
  const projectsCount = useCountUp(1000);
  const supportCount = useCountUp(24);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background Elements with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: y1 }}
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </motion.div>

      {/* Grid Pattern Overlay with Parallax */}
      <motion.div 
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"
        style={{ y: y2 }}
      />

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20"
        style={{ opacity }}
      >
        <div className="relative">
          {/* Video Background */}
          <motion.div
            className="w-full flex justify-center -mt-20"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <video
              className="w-full max-w-6xl h-[800px] shadow-2xl shadow-black transform rotate-[30deg]"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src="/images/belt_animation.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Content Overlay on Video */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center max-w-4xl mx-auto px-4">
              {/* Badge with enhanced animations */}
              <motion.div
                className="inline-flex items-center bg-white/5 backdrop-blur-md text-white px-6 py-3 rounded-full text-sm font-medium mb-8 border border-white/10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.5)"
                }}
              >
                <div className="animate-spin-slow">
                  <Shield className="w-4 h-4 mr-2 text-blue-400" />
                </div>
                <span>60+ Years of Excellence</span>
                <div className="animate-bounce-slow">
                  <Zap className="w-4 h-4 ml-2 text-yellow-400" />
                </div>
              </motion.div>

              {/* Main Heading with character-by-character animation */}
              <motion.h1
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div 
                  className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Your Conveyor Belt
                </motion.div>
                <motion.div 
                  className="text-white"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Performance Partner
                </motion.div>
              </motion.h1>

              {/* Subtitle with enhanced animation */}
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Let's make conveyor belt solutions a strength for your business. We're here to help with everything 
                from custom manufacturing and quality assurance to global support and continuous innovation.
              </motion.p>

              {/* CTA Buttons with enhanced hover effects */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.button
                  className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    Discover Our Solutions
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.div>
                  </span>
                </motion.button>

                <motion.button
                  className="group bg-white/5 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255, 255, 255, 0.15)",
                    borderColor: "rgba(59, 130, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center">
                    <div className="animate-pulse-slow">
                      <Play className="w-5 h-5 mr-2" />
                    </div>
                    Watch Our Story
                  </span>
                </motion.button>
              </motion.div>

              {/* Stats Grid with enhanced animations */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto lg:mx-0">
                {[
                  { icon: Globe, number: countriesCount.count, label: "Countries Served", ref: countriesCount.ref },
                  { icon: Shield, number: yearsCount.count, label: "Years Experience", ref: yearsCount.ref },
                  { icon: TrendingUp, number: projectsCount.count, label: "Projects Completed", ref: projectsCount.ref },
                  { icon: Zap, number: supportCount.count, label: "Global Support", ref: supportCount.ref }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group"
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    whileHover={{ 
                      y: -10,
                      scale: 1.05
                    }}
                  >
                    <div className="w-16 h-16 bg-white/5 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/10 group-hover:bg-white/20 transition-all duration-300">
                      <div className="animate-spin-slow">
                        <stat.icon className="w-8 h-8 text-blue-400" />
                      </div>
                    </div>
                    <motion.div 
                      ref={stat.ref} 
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                    >
                      {stat.number}+
                    </motion.div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Floating Elements with Parallax */}
      <motion.div
        className="absolute bottom-20 left-10 hidden lg:block"
        style={{ y: y3 }}
      >
        <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full backdrop-blur-md border border-white/20 animate-float" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-10 hidden lg:block"
        style={{ y: y2 }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-md border border-white/20 animate-float" style={{ animationDelay: '1s' }} />
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 hidden lg:block"
        style={{ y: y1 }}
      >
        <div className="w-12 h-12 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full backdrop-blur-md border border-white/20 animate-float" style={{ animationDelay: '2s' }} />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-1/4 hidden lg:block"
        style={{ y: y2 }}
      >
        <div className="w-14 h-14 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full backdrop-blur-md border border-white/20 animate-float" style={{ animationDelay: '3s' }} />
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer hover:border-blue-400 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* Particle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;