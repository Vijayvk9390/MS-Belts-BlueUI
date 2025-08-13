import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-black via-red-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <img 
                  src="/images/MSBELTWHITE.png" 
                  alt="MSBELT Logo" 
                  className="h-14 w-auto"
                />
              </div>
              <div className="ml-3">
                <p className="text-white text-sm font-medium">Conveyor Belts</p>
                <p className="text-white/60 text-xs">Since 1963</p>
              </div>
            </div>
            <p className="text-white/60 mb-6 max-w-md">
              Manufacturing high-performance conveyor tapes and suction belts for cigarette 
              and filter production. Over 60 years of excellence in precision engineering.
            </p>
            <div className="flex items-center space-x-4">
              <div className="bg-red-800 text-white w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">60+</span>
              </div>
              <div>
                <div className="text-white font-semibold">Years of Excellence</div>
                <div className="text-white/60 text-sm">Trusted worldwide since 1963</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="text-white/70 hover:text-white transition-colors">Products</a></li>
              <li><a href="#about" className="text-white/70 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#global" className="text-white/70 hover:text-white transition-colors">Global Presence</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <div className="text-white/70 text-sm">
                  <p>S.Y.NO: 494/5A,6,7B</p>
                  <p>THOTAVARIPALEM,</p>
                  <p>GAVINIVARIPALEM ROAD,</p>
                  <p>CHIRALA - 523166,</p>
                  <p>ANDHRA PRADESH, INDIA.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <div className="text-white/70 text-sm">
                  <p>+91 9441516789</p>
                  <p>+91 9000868509</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <a href="mailto:msb@msbelt.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  msb@msbelt.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-white" />
                <a href="http://www.msbelt.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  www.msbelt.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © 2025 MSBELT, S.L. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-white/70">
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