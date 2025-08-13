import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-lg font-bold text-xl">
                MSBELT
              </div>
              <div className="ml-3">
                <p className="text-slate-300 text-sm font-medium">Conveyor Belts</p>
                <p className="text-slate-400 text-xs">Since 1963</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Manufacturing high-performance conveyor tapes and suction belts for cigarette 
              and filter production. Over 60 years of excellence in precision engineering.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">60+</span>
              </div>
              <div>
                <div className="text-orange-400 font-semibold">Years of Excellence</div>
                <div className="text-slate-400 text-sm">Trusted worldwide since 1963</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-slate-300 hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#products" className="text-slate-300 hover:text-orange-400 transition-colors">Products</a></li>
              <li><a href="#about" className="text-slate-300 hover:text-orange-400 transition-colors">About Us</a></li>
              <li><a href="#global" className="text-slate-300 hover:text-orange-400 transition-colors">Global Presence</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-orange-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div className="text-slate-300 text-sm">
                  <p>C/ Vinyals 16, Polígono Industrial "La Serra"</p>
                  <p>12790 La Pobla, Spain</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <div className="text-slate-300 text-sm">
                  <p>+34 961 540 042</p>
                  <p>+34 609 464 049</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <a href="mailto:ms@msbelt.com" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">
                  ms@msbelt.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-orange-400" />
                <a href="http://www.msbelt.com" className="text-slate-300 hover:text-orange-400 transition-colors text-sm">
                  www.msbelt.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 BVM MSBELT, S.L. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Quality Assurance</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;