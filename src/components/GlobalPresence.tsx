import { Globe, MapPin, Users, Handshake, Sparkles, Award, TrendingUp } from 'lucide-react';

const GlobalPresence = () => {
  const locations = [
    {
      name: "Germany",
      x: 52.5,
      y: 15,
      description: "Central European operations",
      highlight: "Primary Market",
      icon: "🇩🇪"
    },
    {
      name: "Albania",
      x: 55,
      y: 22,
      description: "Southeastern European presence",
      highlight: "Growing Market",
      icon: "🇦🇱"
    },
    {
      name: "Switzerland",
      x: 50,
      y: 18,
      description: "Central European hub",
      highlight: "Key Partner",
      icon: "🇨🇭"
    },
    {
      name: "Spain",
      x: 45,
      y: 25,
      description: "Headquarters & main operations",
      highlight: "HQ",
      icon: "🇪🇸"
    },
    {
      name: "United Arab Emirates",
      x: 60,
      y: 35,
      description: "Middle East operations",
      highlight: "Regional Hub",
      icon: "🇦🇪"
    },
    {
      name: "Madagascar",
      x: 58,
      y: 65,
      description: "African island operations",
      highlight: "Emerging Market",
      icon: "🇲🇬"
    },
    {
      name: "Singapore",
      x: 75,
      y: 45,
      description: "Southeast Asian hub",
      highlight: "Asia Pacific",
      icon: "🇸🇬"
    },
    {
      name: "South Africa",
      x: 55,
      y: 75,
      description: "Southern African operations",
      highlight: "African Hub",
      icon: "🇿🇦"
    }
  ];

  return (
    <section id="global" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-200/50 backdrop-blur-sm">
            <Globe className="w-5 h-5 mr-3 text-blue-600" />
            <span className="font-semibold">Worldwide Operations</span>
            <Sparkles className="w-4 h-4 ml-3 text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Global Presence
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Operating internationally with key partners across multiple continents, 
            delivering excellence in conveyor belts worldwide.
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-10 mb-20 overflow-hidden border border-blue-200/50 shadow-2xl backdrop-blur-sm">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative">
            <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Our Global Network
            </h3>
            
            {/* Two Column Layout: Content Left, Map Right */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 border border-blue-200/50 shadow-2xl group h-[400px] w-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-4">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
                        Global Operations
                      </h4>
                    </div>
                    <p className="text-slate-600 mb-6 leading-relaxed text-lg">
                      From our headquarters in Spain, we've built a network of trusted partners 
                      and collaborators spanning multiple continents, ensuring global reach and local expertise.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50 hover:scale-105 transition-transform duration-300 group cursor-pointer">
                      <div className="text-3xl font-bold text-blue-700 mb-2 group-hover:scale-110 transition-transform duration-300">8</div>
                      <div className="text-sm text-blue-600 font-semibold">Countries</div>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200/50 hover:scale-105 transition-transform duration-300 group cursor-pointer">
                      <div className="text-4xl font-bold text-indigo-700 mb-3 group-hover:scale-110 transition-transform duration-300">4</div>
                      <div className="text-base text-indigo-600 font-semibold">Continents</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-lg relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-2xl blur-2xl opacity-0"></div>
                  <div className="w-full h-[400px] rounded-2xl shadow-2xl border-4 border-white/50 overflow-hidden">
                    <img 
                      src="/images/Locations.png" 
                      alt="World Map with Global Locations" 
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Location Cards Grid - Full Width */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {locations.map((location, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-4 hover:scale-105 transition-all duration-500 border border-blue-200/30 shadow-lg hover:shadow-2xl group backdrop-blur-sm">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-2xl">{location.icon}</div>
                    <span className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-2 py-1 rounded-full font-semibold border border-blue-200/50">
                      {location.highlight}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-slate-800 group-hover:text-blue-700 transition-colors duration-300">
                    {location.name}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Headquarters Information */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 border border-blue-500/30 shadow-2xl relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-white/20 rounded-xl mr-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">Headquarters</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-white/20 rounded-lg mt-1 flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-white/90">
                    <p className="font-semibold text-lg">S.Y.NO: 494/5A,6,7B</p>
                    <p className="text-sm opacity-90">THOTAVARIPALEM,</p>
                    <p className="text-sm opacity-90">GAVINIVARIPALEM ROAD,</p>
                    <p className="text-sm opacity-90">CHIRALA - 523166,</p>
                    <p className="text-sm opacity-90">ANDHRA PRADESH, INDIA.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="bg-white/20 rounded-2xl p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 mx-auto text-white" />
                </div>
                <div className="text-lg font-semibold text-white">Global Team</div>
                <div className="text-sm text-white/80">Expert professionals</div>
              </div>
              <div className="text-center group">
                <div className="bg-white/20 rounded-2xl p-6 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Handshake className="w-10 h-10 mx-auto text-white" />
                </div>
                <div className="text-lg font-semibold text-white">Partnerships</div>
                <div className="text-sm text-white/80">Trusted collaborations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "8", label: "Countries", icon: Globe },
            { number: "60+", label: "Years Experience", icon: Award },
            { number: "100+", label: "Global Partners", icon: Handshake },
            { number: "24/7", label: "Support", icon: TrendingUp }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className="relative">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3 group-hover:w-16 transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;