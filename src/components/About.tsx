import React from 'react';
import { Award, Target, Users, Wrench } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-slate-800 mb-6">
                Six Decades of 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-900"> Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Since 1963, MSBELT has been at the forefront of conveyor belt innovation, 
                specializing in high-performance solutions for the tobacco industry. Our mission 
                is to mobilize ideas and deliver exceptional belt solutions for specialized 
                industrial applications worldwide.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                With over 60 years of expertise, we've built lasting partnerships with global 
                tobacco machinery brands, continuously improving belt durability and precision 
                to meet the evolving needs of modern manufacturing.
              </p>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Quality Excellence</h3>
                  <p className="text-slate-600 text-sm">Uncompromising standards in every product</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Target className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Precision Engineering</h3>
                  <p className="text-slate-600 text-sm">Exact specifications for optimal performance</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Global Partnership</h3>
                  <p className="text-slate-600 text-sm">Trusted by industry leaders worldwide</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-lg">
                  <Wrench className="w-6 h-6 text-red-800" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-800">Innovation Focus</h3>
                  <p className="text-slate-600 text-sm">Continuous improvement and development</p>
                </div>
              </div>
            </div>
          </div>

          {/* Images */}
          <div className="space-y-6">
            <div className="relative">
              <img 
                src="/images/msbcompany.jpg" 
                alt="MSBELT Manufacturing Facility" 
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                <span className="text-slate-800 font-semibold">Manufacturing Excellence</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/BELTRR.JPG" 
                alt="Quality Control" 
                className="w-full h-32 object-cover rounded-xl shadow-md"
              />
              <div className="bg-gradient-to-r from-red-800 to-red-900 rounded-xl p-6 text-white flex flex-col justify-center">
                <div className="text-3xl font-bold text-white">1963</div>
                <div className="text-sm">Established</div>
                <div className="text-xs text-slate-300 mt-2">Building trust through quality</div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Commitment */}
        <div className="mt-20 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Quality Commitment</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-red-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">60+</span>
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Years of Experience</h4>
              <p className="text-slate-600 text-sm">Over six decades of manufacturing expertise and industry knowledge</p>
            </div>
            <div className="text-center">
              <div className="bg-red-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Global Collaboration</h4>
              <p className="text-slate-600 text-sm">Partnerships with leading tobacco machinery brands worldwide</p>
            </div>
            <div className="text-center">
              <div className="bg-red-800 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-slate-800 mb-2">Continuous Innovation</h4>
              <p className="text-slate-600 text-sm">Ongoing improvements in belt durability and precision engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;