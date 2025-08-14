import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Globe, Star, Shield, Zap } from 'lucide-react';
import { useInView } from 'framer-motion';

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

const Footer = () => {
  // Counting animations for stats
  const experienceCount = useCountUp(60);
  const countriesCount = useCountUp(25);
  const projectsCount = useCountUp(1000);
  const supportCount = useCountUp(24);

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/MSBELTWHITE.png" 
                alt="MSBELT Logo" 
                className="h-12 w-auto" 
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Leading manufacturer of high-quality conveyor belts with over 60 years of excellence. 
              Delivering innovative solutions for industries worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Globe className="w-5 h-5 text-blue-400" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Star className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                <Shield className="w-5 h-5 text-green-400" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#home' },
                { name: 'Products', href: '#products' },
                { name: 'About Us', href: '#about' },
                { name: 'Global Presence', href: '#global' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Our Products</h3>
            <ul className="space-y-3">
              {[
                'Cigarette Conveyor Belts',
                'Filter Production Belts',
                'Industrial Conveyor Belts',
                'Custom Belt Solutions',
                'Quality Assurance'
              ].map((product, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                    {product}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>S.Y.NO: 494/5A,6,7B</p>
                  <p>THOTAVARIPALEM,</p>
                  <p>GAVINIVARIPALEM ROAD,</p>
                  <p>CHIRALA - 523166,</p>
                  <p>ANDHRA PRADESH, INDIA.</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div className="text-gray-300 text-sm">
                  <p>+91 9441516789</p>
                  <p>+91 9000868509</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300 text-sm">msb@msbelt.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-400" />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
          {[
            { icon: Star, number: experienceCount.count, label: "Years Experience", color: "from-yellow-500 to-orange-500", ref: experienceCount.ref },
            { icon: Globe, number: countriesCount.count, label: "Countries Served", color: "from-blue-500 to-indigo-500", ref: countriesCount.ref },
            { icon: Shield, number: projectsCount.count, label: "Projects Completed", color: "from-green-500 to-emerald-500", ref: projectsCount.ref },
            { icon: Zap, number: supportCount.count, label: "Global Support", color: "from-purple-500 to-pink-500", ref: supportCount.ref }
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div ref={stat.ref} className="text-2xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}+
              </div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              <p>© 2024 MSBELT. All rights reserved. | Best Quality Conveyor Belts Since 1963</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;