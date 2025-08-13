import React from 'react';
import { ArrowRight, Award, Globe, Cog } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-orange-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                Established 1963 • 60+ Years of Excellence
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Premium
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500"> Conveyor </span>
                Belts
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Manufacturing high-performance conveyor tapes and suction belts for cigarette and filter production. 
                Mobilizing ideas and delivering precision engineering worldwide.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-slate-600 hover:border-orange-500 text-white hover:text-orange-400 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">60+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">4</div>
                <div className="text-slate-400 text-sm">Continents</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400">100+</div>
                <div className="text-slate-400 text-sm">Product Variants</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 shadow-2xl">
              <img 
                src="/images/DSC03557_2_11zon.jpg" 
                alt="MSBELT Manufacturing" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg">
                <Cog className="w-8 h-8" />
              </div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-800 p-4 rounded-lg shadow-xl">
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-orange-500" />
                <div>
                  <div className="font-semibold">Global Reach</div>
                  <div className="text-sm text-slate-600">Worldwide Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;