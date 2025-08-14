import { ArrowRight, Award, Globe, Cog, Sparkles, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden min-h-screen flex items-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/80 to-purple-900/80"></div>
        
        {/* Background Image with enhanced overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("/images/MSB_BUILDING.JPG")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }} />
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium border border-white/20 hover:scale-105 transition-transform duration-300 group">
                <Award className="w-5 h-5 mr-3 text-yellow-300 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-semibold">Established 1963 • 60+ Years of Excellence</span>
                <Sparkles className="w-4 h-4 ml-2 text-yellow-300" />
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Premium
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300"> Conveyor </span>
                  Belts
                </h1>
                <p className="text-xl text-blue-100/80 leading-relaxed max-w-2xl">
                  Manufacturing high-performance conveyor tapes and suction belts for cigarette and filter production. 
                  Mobilizing ideas and delivering precision engineering worldwide.
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="group border-2 border-white/30 hover:border-white/50 text-white hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                <span>Contact Us</span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              {[
                { number: "60+", label: "Years Experience", icon: Star },
                { number: "4", label: "Continents", icon: Globe },
                { number: "100+", label: "Product Variants", icon: Award }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-100/80 text-sm font-medium">{stat.label}</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 mx-auto mt-2 group-hover:w-12 transition-all duration-300"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
              <img 
                src="/images/BELT.png" 
                alt="MSBELT Manufacturing" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              
              {/* Floating Icon */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Cog className="w-8 h-8 animate-spin-slow" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            
            {/* Floating Cards */}
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-white to-blue-50 text-slate-800 p-4 rounded-2xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-300 group">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-base">Global Reach</div>
                  <div className="text-sm text-slate-600">Worldwide Partners</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-ping"></div>
            </div>
            
            {/* Additional floating element */}
            <div className="absolute top-1/2 -right-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-3 rounded-2xl border border-white/20">
              <div className="text-center">
                <div className="text-xl font-bold text-white">8</div>
                <div className="text-xs text-white/80">Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;