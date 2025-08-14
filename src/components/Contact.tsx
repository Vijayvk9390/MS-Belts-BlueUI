import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe, Sparkles, MessageCircle, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    country: '',
    request: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', phone: '', email: '', company: '', country: '', request: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // List of countries for the dropdown
  const countries = [
    'Select Country',
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan',
    'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor',
    'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland',
    'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea',
    'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq',
    'Ireland', 'Israel', 'Italy', 'Ivory Coast', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati',
    'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania',
    'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius',
    'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia',
    'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway',
    'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland',
    'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino',
    'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
    'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey',
    'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu',
    'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-indigo-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-white/5 text-blue-400 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-white/10 backdrop-blur-sm">
            <MessageCircle className="w-5 h-5 mr-3 text-blue-400" />
            <span className="font-semibold">Let's Connect</span>
            <Sparkles className="w-4 h-4 ml-3 text-yellow-400" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-100 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your conveyor belt requirements? Our expert team is here to help 
            you find the perfect solution for your manufacturing needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-4">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                  Contact Information
                </h3>
              </div>
              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    title: "Head Office",
                    details: [
                      "S.Y.NO: 494/5A,6,7B",
                      "THOTAVARIPALEM,",
                      "GAVINIVARIPALEM ROAD, CHIRALA - 523166",
                      "ANDHRA PRADESH, INDIA."
                    ],
                    color: "from-blue-500 to-indigo-500"
                  },
                  {
                    icon: Phone,
                    title: "Phone Numbers",
                    details: [
                      "+91 9441516789",
                      "+91 9000868509"
                    ],
                    color: "from-green-500 to-emerald-500"
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    details: [
                      "msb@msbelt.com",
                      "www.msbelt.com"
                    ],
                    color: "from-purple-500 to-pink-500"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    details: [
                      "Monday - Friday: 8:00 AM - 6:00 PM",
                      "Saturday: 9:00 AM - 2:00 PM",
                      "Sunday: Closed"
                    ],
                    color: "from-orange-500 to-red-500"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className={`p-4 bg-gradient-to-r ${item.color} rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-lg">{item.title}</h4>
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-300 mb-1 leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/10">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl mr-3">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-bold text-white text-lg">Why Choose MSBELT?</h4>
              </div>
              <div className="space-y-3">
                {[
                  "60+ years of industry expertise",
                  "Global presence and support",
                  "Custom solutions for your needs",
                  "Premium quality materials"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="p-1.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-md rounded-3xl shadow-2xl p-8 pb-6 border border-white/10">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-4">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Send Us a Message
              </h3>
            </div>
            
            {isSubmitted && (
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-green-400 font-semibold text-lg">Message sent successfully!</span>
                </div>
                <p className="text-green-300 text-base mt-2">We'll get back to you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 mb-0">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white placeholder-gray-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white placeholder-gray-400"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-semibold text-gray-300 mb-3">
                    Country *
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white"
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country === 'Select Country' ? '' : country} className="bg-gray-800 text-white">
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-3">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white placeholder-gray-400"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="request" className="block text-sm font-semibold text-gray-300 mb-3">
                  Request/Message *
                </label>
                <textarea
                  id="request"
                  name="request"
                  value={formData.request}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-4 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your conveyor belt requirements, specifications, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-2xl hover:shadow-blue-500/25 group"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                <span className="text-lg">Send Message</span>
              </button>
            </form>
            
            {/* Additional Info to balance height */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium text-gray-300">24/7 Support</span>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full mx-auto mb-2"></div>
                  <span className="text-sm font-medium text-gray-300">Quick Response</span>
                </div>
              </div>
              
              <div className="text-center space-y-2">
                <p className="text-xs text-gray-500">We typically respond within 2-4 hours during business days</p>
                <div className="flex items-center justify-center space-x-6 text-xs text-gray-500">
                  <span className="flex items-center space-x-1">
                    <Globe className="w-3 h-3" />
                    <span>Global Service</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle className="w-3 h-3" />
                    <span>Quality Assured</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;