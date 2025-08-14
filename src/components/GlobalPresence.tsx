import React from 'react';
import { Globe, MapPin, Users, Handshake } from 'lucide-react';

const GlobalPresence = () => {
  const locations = [
    {
      name: "Germany",
      x: 52.5,
      y: 15,
      description: "Central European operations",
      highlight: "Primary Market"
    },
    {
      name: "Albania",
      x: 55,
      y: 22,
      description: "Southeastern European presence",
      highlight: "Growing Market"
    },
    {
      name: "Switzerland",
      x: 50,
      y: 18,
      description: "Central European hub",
      highlight: "Key Partner"
    },
    {
      name: "Spain",
      x: 45,
      y: 25,
      description: "Headquarters & main operations",
      highlight: "HQ"
    },
    {
      name: "United Arab Emirates",
      x: 60,
      y: 35,
      description: "Middle East operations",
      highlight: "Regional Hub"
    },
    {
      name: "Madagascar",
      x: 58,
      y: 65,
      description: "African island operations",
      highlight: "Emerging Market"
    },
    {
      name: "Singapore",
      x: 75,
      y: 45,
      description: "Southeast Asian hub",
      highlight: "Asia Pacific"
    },
    {
      name: "South Africa",
      x: 55,
      y: 75,
      description: "Southern African operations",
      highlight: "African Hub"
    }
  ];

  return (
    <section id="global" className="py-20 bg-gradient-to-br from-red-800 to-red-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Globe className="w-4 h-4 mr-2" />
            Worldwide Operations
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Global Presence
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Operating internationally with key partners across multiple continents, 
            delivering excellence in conveyor belts worldwide.
          </p>
        </div>

        {/* World Map Visualization */}
        <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 mb-16 overflow-hidden border-2 border-white/30">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23cbd5e1' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative">
            <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">Our Global Network</h3>
            
            {/* Two Column Layout: Content Left, Map Right */}
            <div className="grid lg:grid-cols-2 gap-8 items-start mb-8">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div className="bg-white/90 rounded-xl p-6 border border-white/20">
                  <h4 className="text-xl font-bold mb-4 text-slate-800">Global Operations</h4>
                  <p className="text-slate-600 mb-4">
                    From our headquarters in Spain, we've built a network of trusted partners 
                    and collaborators spanning multiple continents, ensuring global reach and local expertise.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-800 mb-1">8</div>
                      <div className="text-sm text-red-700">Countries</div>
                    </div>
                    <div className="text-center p-3 bg-red-50 rounded-lg">
                      <div className="text-2xl font-bold text-red-800 mb-1">4</div>
                      <div className="text-sm text-red-700">Continents</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Map */}
              <div className="flex justify-center lg:justify-end">
                <div className="w-full max-w-md">
                  <img 
                    src="/images/Locations.png" 
                    alt="World Map with Global Locations" 
                    className="w-full h-auto rounded-lg shadow-lg border-4 border-white/30"
                  />
                </div>
              </div>
            </div>

            {/* Location Cards Grid - Full Width */}
            <div className="grid grid-cols-4 gap-4">
              {locations.map((location, index) => (
                <div key={index} className="bg-white/90 rounded-xl p-4 hover:bg-white transition-all duration-300 border border-white/20 shadow-lg hover:shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-red-800 p-2 rounded-lg">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full font-medium">
                      {location.highlight}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-slate-800">{location.name}</h4>
                  <p className="text-slate-600 text-sm">{location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Headquarters Information */}
        <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-2xl p-8 border-2 border-white/30">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Headquarters</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">S.Y.NO: 494/5A,6,7B</p>
                    <p className="text-sm opacity-90">THOTAVARIPALEM,</p>
                    <p className="text-sm opacity-90">GAVINIVARIPALEM ROAD,</p>
                    <p className="text-sm opacity-90">CHIRALA - 523166,</p>
                    <p className="text-sm opacity-90">ANDHRA PRADESH, INDIA.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-4 mb-2">
                  <Users className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-sm font-semibold">Global Team</div>
                <div className="text-xs opacity-90">Expert professionals</div>
              </div>
              <div className="text-center">
                <div className="bg-white/20 rounded-lg p-4 mb-2">
                  <Handshake className="w-8 h-8 mx-auto" />
                </div>
                <div className="text-sm font-semibold">Partnerships</div>
                <div className="text-xs opacity-90">Trusted collaborations</div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-white mb-2">8</div>
            <div className="text-white/80">Countries</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">60+</div>
            <div className="text-white/80">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">100+</div>
            <div className="text-white/80">Global Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/80">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;