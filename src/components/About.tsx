import React from 'react';
import { Award, Target, Users, Wrench, Sparkles, Clock, Globe, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-blue-50/30 to-indigo-100/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-200/50 backdrop-blur-sm">
                <Clock className="w-5 h-5 mr-3 text-blue-600" />
                <span className="font-semibold">Established 1963</span>
                <Sparkles className="w-4 h-4 ml-3 text-blue-600" />
              </div>
              
              <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Six Decades of 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"> Excellence</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Since 1963, MSBELT has been at the forefront of conveyor belt innovation, 
                specializing in high-performance solutions for the tobacco industry. Our mission 
                is to mobilize ideas and deliver exceptional belt solutions for specialized 
                industrial applications worldwide.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                With over 60 years of expertise, we've built lasting partnerships with global 
                tobacco machinery brands, continuously improving belt durability and precision 
                to meet the evolving needs of modern manufacturing.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: Award,
                  title: "Quality Excellence",
                  description: "Uncompromising standards in every product",
                  color: "from-blue-500 to-indigo-500"
                },
                {
                  icon: Target,
                  title: "Precision Engineering",
                  description: "Exact specifications for optimal performance",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Users,
                  title: "Global Partnership",
                  description: "Trusted by industry leaders worldwide",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  icon: Wrench,
                  title: "Innovation Focus",
                  description: "Continuous improvement and development",
                  color: "from-orange-500 to-red-500"
                }
              ].map((value, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className={`p-2 bg-gradient-to-r ${value.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 text-base mb-1">{value.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-3xl blur-2xl opacity-0"></div>
              <img 
                src="/images/msbcompany.jpg" 
                alt="MSBELT Manufacturing Facility" 
                className="relative w-full h-72 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-slate-800 font-semibold">Manufacturing Excellence</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <img 
                src="/images/BELTRR.JPG" 
                alt="Quality Control" 
                className="w-full h-40 object-cover rounded-2xl shadow-xl"
              />
              <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white flex flex-col justify-center shadow-2xl hover:scale-105 transition-transform duration-300 group">
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">1963</div>
                <div className="text-lg font-semibold mb-2">Established</div>
                <div className="text-sm text-blue-100 leading-relaxed">Building trust through quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="mt-24 bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-12 shadow-2xl border border-blue-200/50 backdrop-blur-sm">
          <div className="flex items-center justify-center mb-10">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Our Quality Commitment
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Clock,
                number: "60+",
                title: "Years of Experience",
                description: "Over six decades of manufacturing expertise and industry knowledge",
                color: "from-blue-500 to-indigo-500"
              },
              {
                icon: Globe,
                iconDisplay: <Award className="w-8 h-8" />,
                title: "Global Collaboration",
                description: "Partnerships with leading tobacco machinery brands worldwide",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: TrendingUp,
                iconDisplay: <Target className="w-8 h-8" />,
                title: "Continuous Innovation",
                description: "Ongoing improvements in belt durability and precision engineering",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className={`bg-gradient-to-r ${item.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {item.number || item.iconDisplay}
                </div>
                <h4 className="font-semibold text-slate-800 mb-3 text-xl">{item.title}</h4>
                <p className="text-slate-600 text-base leading-relaxed">{item.description}</p>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-4 group-hover:w-16 transition-all duration-300 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;