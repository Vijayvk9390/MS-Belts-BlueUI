import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe, Sparkles, MessageCircle, Building, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: 'home', label: 'Home' },
    { href: 'products', label: 'Products' },
    { href: 'about', label: 'About' },
    { href: 'global', label: 'Global Presence' },
    { href: 'contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white py-2 relative overflow-hidden border-b border-gray-800">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm relative z-10">
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-1 bg-white/10 rounded-full">
                <Phone className="w-3 h-3" />
              </div>
              <span className="font-medium text-xs">+91 9441516789, +91 9000868509</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-1 bg-white/10 rounded-full">
                <Mail className="w-3 h-3" />
              </div>
              <span className="font-medium text-xs">msb@msbelt.com</span>
            </motion.div>
          </motion.div>
          <motion.div 
            className="hidden md:flex items-center space-x-2 bg-white/5 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
          >
            <Sparkles className="w-3 h-3 text-yellow-400" />
            <span className="text-white font-semibold text-xs">60+ Years of Excellence</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 w-full bg-gray-800 z-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg"
          style={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>

      {/* Main Header */}
      <motion.header 
        className="bg-black/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <motion.div 
              className="flex items-center group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center p-2 rounded-xl group-hover:bg-white/5 transition-all duration-300">
                <img 
                  src="/images/MSBELTWHITE.png" 
                  alt="MSBELT Logo" 
                  className="h-16 w-auto" 
                />
              </div>
              <motion.div 
                className="ml-3 hidden sm:block"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <p className="text-white text-sm font-semibold">Best Quality Conveyor Belts</p>
                <p className="text-blue-400 text-xs font-medium">Since 1963</p>
              </motion.div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:flex space-x-1"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {navItems.map((item, index) => (
                <motion.a 
                  key={item.href}
                  href={`#${item.href}`} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="nav-link relative px-4 py-2 text-white hover:text-blue-400 font-medium transition-all duration-300 group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileHover={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div 
                    className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%', left: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 1 }}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-blue-400" /> : <Menu className="w-6 h-6 text-white" />}
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden py-2 border-t border-gray-800 bg-black/50 rounded-b-xl overflow-hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <nav className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.a 
                      key={item.href}
                      href={`#${item.href}`} 
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="nav-link px-4 py-3 text-white hover:text-blue-400 hover:bg-white/5 font-medium transition-all duration-300 rounded-lg hover:scale-105 transform"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
};

export default Header;