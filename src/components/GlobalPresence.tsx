import React from 'react';
import { Globe, MapPin, Users, Handshake } from 'lucide-react';

const GlobalPresence = () => {
  const regions = [
    {
      name: "Europe",
      icon: <MapPin className="w-6 h-6" />,
      description: "Headquarters in Spain with extensive European network",
      highlight: "Primary Operations"
    },
    {
      name: "Asia",
      icon: <MapPin className="w-6 h-6" />,
      description: "Strategic partnerships across Asian markets",
      highlight: "Growing Markets"
    },
    {
      name: "Americas",
      icon: <MapPin className="w-6 h-6" />,
      description: "Established presence in North and South America",
      highlight: "Key Partnerships"
    },
    {
      name: "Africa",
      icon: <MapPin className="w-6 h-6" />,
      description: "Expanding operations across African territories",
      highlight: "Emerging Markets"
    }
  ];

  return (
    <section id="global" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
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
        <div className="relative bg-slate-800 rounded-2xl p-8 mb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-orange-500/20 to-red-600/20"></div>
          </div>
          <div className="relative text-center py-12">
            <Globe className="w-24 h-24 mx-auto text-orange-400 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Connecting Continents</h3>
            <p className="text-slate-300 max-w-2xl mx-auto">
              From our headquarters in Spain, we've built a network of trusted partners 
              and collaborators spanning four continents, ensuring global reach and local expertise.
            </p>
          </div>
        </div>

        {/* Regional Presence */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {regions.map((region, index) => (
            <div key={index} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-700 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-orange-500 p-3 rounded-lg">
                  {region.icon}
                </div>
                <span className="text-xs bg-orange-600/20 text-orange-400 px-2 py-1 rounded-full">
                  {region.highlight}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2">{region.name}</h3>
              <p className="text-slate-300 text-sm">{region.description}</p>
            </div>
          ))}
        </div>

        {/* Headquarters Information */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Headquarters</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">BVM MSBELT, S.L.</p>
                    <p className="text-sm opacity-90">Tornosol Industrial Area</p>
                    <p className="text-sm opacity-90">C/ Vinyals 16, Polígono Industrial "La Serra"</p>
                    <p className="text-sm opacity-90">12790 La Pobla, Spain</p>
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
            <div className="text-3xl font-bold text-orange-400 mb-2">4</div>
            <div className="text-slate-400">Continents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">60+</div>
            <div className="text-slate-400">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">100+</div>
            <div className="text-slate-400">Global Partners</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-slate-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;