import { Phone, Mail, MapPin, Globe, Sparkles, Award, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="flex items-center p-3 bg-white/10 rounded-2xl backdrop-blur-sm border border-white/20">
                <img 
                  src="/images/MSBELTWHITE.png" 
                  alt="MSBELT Logo" 
                  className="h-14 w-auto"
                />
              </div>
              <div className="ml-4">
                <p className="text-white text-lg font-semibold">Conveyor Belts</p>
                <p className="text-white/70 text-sm">Since 1963</p>
              </div>
            </div>
            <p className="text-white/80 mb-6 max-w-md text-lg leading-relaxed">
              Manufacturing high-performance conveyor tapes and suction belts for cigarette 
              and filter production. Over 60 years of excellence in precision engineering.
            </p>
            <div className="flex items-center space-x-6 p-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-lg font-bold">60+</span>
              </div>
              <div>
                <div className="text-white font-bold text-base">Years of Excellence</div>
                <div className="text-white/80 text-sm">Trusted worldwide since 1963</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mr-3">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {[
                { href: '#home', label: 'Home' },
                { href: '#products', label: 'Products' },
                { href: '#about', label: 'About Us' },
                { href: '#global', label: 'Global Presence' },
                { href: '#contact', label: 'Contact' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block group"
                  >
                    <span className="relative">
                      {link.label}
                      <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg mr-3">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Contact Info</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  color: "from-blue-500 to-indigo-500",
                  details: [
                    "S.Y.NO: 494/5A,6,7B",
                    "THOTAVARIPALEM,",
                    "GAVINIVARIPALEM ROAD,",
                    "CHIRALA - 523166,",
                    "ANDHRA PRADESH, INDIA."
                  ]
                },
                {
                  icon: Phone,
                  color: "from-green-500 to-emerald-500",
                  details: [
                    "+91 9441516789",
                    "+91 9000868509"
                  ]
                },
                {
                  icon: Mail,
                  color: "from-purple-500 to-pink-500",
                  details: [
                    "msb@msbelt.com"
                  ],
                  isLink: true
                },
                {
                  icon: Globe,
                  color: "from-orange-500 to-red-500",
                  details: [
                    "www.msbelt.com"
                  ],
                  isLink: true
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`p-2 bg-gradient-to-r ${item.color} rounded-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white/70 text-sm leading-relaxed">
                    {item.details.map((detail, detailIndex) => (
                      <div key={detailIndex}>
                        {item.isLink ? (
                          <a 
                            href={detail.startsWith('www') ? `http://${detail}` : `mailto:${detail}`}
                            className="hover:text-white transition-colors duration-300"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p>{detail}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-base mb-6 md:mb-0">
              © 2025 MSBELT, S.L. All rights reserved.
            </div>
            <div className="flex items-center space-x-8 text-sm text-white/70">
              {[
                "Privacy Policy",
                "Terms of Service", 
                "Quality Assurance"
              ].map((item, index) => (
                <span key={index} className="hover:text-white transition-colors duration-300 cursor-pointer">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 z-50 group"
      >
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;