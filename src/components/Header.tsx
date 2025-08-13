import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

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
      const topBar = document.querySelector('.bg-slate-800');
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
      <div className="bg-red-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+91 9441516789, +91 9000868509</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>msb@msbelt.com</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span className="text-white-400 font-semibold">60+ Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full bg-slate-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-red-800 to-red-900 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                <img 
                  src="/images/MSBELT.png" 
                  alt="MSBELT Logo" 
                  className="h-16 w-auto" 
                />
              </div>
              <div className="ml-3 hidden sm:block">
                <p className="text-slate-600 text-sm font-medium">Best Quality Conveyor Belts</p>
                <p className="text-slate-500 text-xs">Since 1963</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a 
                href="#home" 
                onClick={(e) => handleNavClick(e, 'home')}
                className="nav-link text-slate-700 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
              >
                Home
              </a>
              <a 
                href="#products" 
                onClick={(e) => handleNavClick(e, 'products')}
                className="nav-link text-slate-700 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
              >
                Products
              </a>
              <a 
                href="#about" 
                onClick={(e) => handleNavClick(e, 'about')}
                className="nav-link text-slate-700 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
              >
                About
              </a>
              <a 
                href="#global" 
                onClick={(e) => handleNavClick(e, 'global')}
                className="nav-link text-slate-700 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
              >
                Global Presence
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, 'contact')}
                className="nav-link text-slate-700 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a 
                  href="#home" 
                  onClick={(e) => handleNavClick(e, 'home')}
                  className="nav-link text-slate-700 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
                >
                  Home
                </a>
                <a 
                  href="#products" 
                  onClick={(e) => handleNavClick(e, 'products')}
                  className="nav-link text-slate-600 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
                >
                  Products
                </a>
                <a 
                  href="#about" 
                  onClick={(e) => handleNavClick(e, 'about')}
                  className="nav-link text-slate-600 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
                >
                  About
                </a>
                <a 
                  href="#global" 
                  onClick={(e) => handleNavClick(e, 'global')}
                  className="nav-link text-slate-600 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
                >
                  Global Presence
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="nav-link text-slate-600 hover:text-red-800 font-medium transition-all duration-300 hover:scale-105"
                >
                  Contact
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;