import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Close mobile menu if open
      setIsMenuOpen(false);
      
      // Calculate actual header height dynamically
      const topBar = document.querySelector('.bg-gradient-to-r');
      const mainHeader = document.querySelector('header');
      const topBarHeight = topBar ? topBar.getBoundingClientRect().height : 0;
      const mainHeaderHeight = mainHeader ? mainHeader.getBoundingClientRect().height : 0;
      const totalHeaderHeight = topBarHeight + mainHeaderHeight;
      
      // Smooth scroll to section with additional offset for better positioning
      const elementPosition = element.offsetTop - totalHeaderHeight - -40;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-blue-900 via-navy-800 to-indigo-900 text-white py-3 px-4 relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm relative z-10">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-white/20 rounded-full">
                <Phone className="w-3 h-3" />
              </div>
              <span className="font-medium text-xs">+91 9441516789, +91 9000868509</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="p-1 bg-white/20 rounded-full">
                <Mail className="w-3 h-3" />
              </div>
              <span className="font-medium text-xs">msb@msbelt.com</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2 bg-white/10 px-3 py-1.5 rounded-full">
            <Sparkles className="w-3 h-3 text-yellow-300" />
            <span className="text-white font-semibold text-xs">60+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full bg-slate-200 z-50">
        <div 
          className="h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 ease-out shadow-lg"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-2xl sticky top-0 z-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            <div className="flex items-center group">
              <div className="flex items-center p-2 rounded-xl group-hover:bg-gradient-to-r">
                <img 
                  src="/images/MSBELT.png" 
                  alt="MSBELT Logo" 
                  className="h-14 w-auto" 
                />
              </div>
              <div className="ml-3 hidden sm:block">
                <p className="text-slate-700 text-sm font-semibold">Best Quality Conveyor Belts</p>
                <p className="text-blue-600 text-xs font-medium">Since 1963</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {[
                { href: 'home', label: 'Home' },
                { href: 'products', label: 'Products' },
                { href: 'about', label: 'About' },
                { href: 'global', label: 'Global Presence' },
                { href: 'contact', label: 'Contact' }
              ].map((item) => (
                <a 
                  key={item.href}
                  href={`#${item.href}`} 
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="nav-link relative px-4 py-2 text-slate-700 hover:text-blue-600 font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 w-0 h-px bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full group-hover:left-0 transition-all duration-300 rounded-full"></div>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-blue-600" /> : <Menu className="w-6 h-6 text-slate-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-2 border-t border-blue-100 bg-gradient-to-b from-white to-blue-50/30 rounded-b-xl">
              <nav className="flex flex-col space-y-2">
                {[
                  { href: 'home', label: 'Home' },
                  { href: 'products', label: 'Products' },
                  { href: 'about', label: 'About' },
                  { href: 'global', label: 'Global Presence' },
                  { href: 'contact', label: 'Contact' }
                ].map((item) => (
                  <a 
                    key={item.href}
                    href={`#${item.href}`} 
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="nav-link px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 rounded-lg hover:scale-105 transform"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;