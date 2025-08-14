import React, { useState } from 'react';
import { Package, Layers, Settings, CheckCircle, Thermometer, Zap, Ruler, Droplets, Sparkles, Award, Globe } from 'lucide-react';

interface ProductSpecs {
  material: string;
  temperature: string;
  elongation?: string;
  strength: string;
  texture?: string;
  thickness: string;
  application: string;
  airFlow?: string;
}

interface Product {
  code: string;
  name: string;
  image: string;
  specs: ProductSpecs;
}

interface ProductCategory {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  products: Product[];
}

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const productCategories: ProductCategory[] = [
    {
      id: 'suction-bands',
      title: "Suction Bands",
      icon: <Layers className="w-8 h-8" />,
      description: "High-performance woven suction belts for tobacco rod formation",
      products: [
        {
          code: "MRS 135",
          name: "Linen Suction Band",
          image: "/images/Belts/MRS135.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 120°C",
            elongation: "0.7%",
            strength: "2500 N/cm",
            texture: "soft",
            thickness: "0.50mm",
            application: "Cigarette production"
          }
        },
        {
          code: "MRS 126",
          name: "Linen Suction Band",
          image: "/images/Belts/MRS126.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 120°C",
            elongation: "0.65%",
            strength: "2650 N/cm",
            texture: "soft",
            thickness: "0.52mm",
            application: "Cigarette production"
          }
        },
        {
          code: "MRS 135B",
          name: "Linen Suction Band",
          image: "/images/Belts/MRS135B.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 120°C",
            elongation: "0.72%",
            strength: "2600 N/cm",
            texture: "soft",
            thickness: "0.58mm",
            application: "Cigarette production"
          }
        },
        {
          code: "MRS 126B",
          name: "Linen Suction Band",
          image: "/images/Belts/MRS126B.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 120°C",
            elongation: "0.7%",
            strength: "2650 N/cm",
            texture: "soft",
            thickness: "0.65mm",
            application: "Cigarette filter production"
          }
        },
        {
          code: "MSS 032",
          name: "Linen Suction Band",
          image: "/images/Belts/MSS 032.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 180°C",
            elongation: "0.7%",
            strength: "5400 N/cm",
            texture: "soft",
            thickness: "0.50mm",
            application: "Cigarette production"
          }
        }
      ]
    },
    {
      id: 'cigar-belts',
      title: "Cigar Belts",
      icon: <Package className="w-8 h-8" />,
      description: "Specialized belts for cigar manufacturing and processing",
      products: [
        {
          code: "LKP066.12",
          name: "Linen Cigar Belt",
          image: "/images/Belts/LKP066.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 180°C",
            elongation: "0.7%",
            strength: "5400 N/cm",
            texture: "soft",
            thickness: "0.50mm",
            application: "Cigar production"
          }
        },
        {
          code: "LKP066.36",
          name: "Linen Cigar Belt",
          image: "/images/Belts/LKP066.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 180°C",
            elongation: "0.7%",
            strength: "5400 N/cm",
            texture: "soft",
            thickness: "0.50mm",
            application: "Cigar production"
          }
        }
      ]
    },
    {
      id: 'garniture-tapes',
      title: "Garniture Tapes",
      icon: <Settings className="w-8 h-8" />,
      description: "Precision tapes for tobacco delivery and processing",
      products: [
        {
          code: "VL 048",
          name: "Garniture Tape",
          image: "/images/Belts/VAL048.JPG",
          specs: {
            material: "Synthetic",
            temperature: "up to 180°C",
            elongation: "0.2%",
            strength: "5400 N/cm",
            airFlow: "53 m³/h",
            thickness: "0.50mm",
            application: "Tobacco delivery"
          }
        },
        {
          code: "MGT 129",
          name: "Garniture Tape",
          image: "/images/Belts/MGT129.JPG",
          specs: {
            material: "Synthetic",
            temperature: "up to 180°C",
            elongation: "0.19%",
            strength: "6200 N/cm",
            airFlow: "53 m³/h",
            thickness: "0.50mm",
            application: "Tobacco delivery"
          }
        },
        {
          code: "MSS 075",
          name: "Garniture Tape",
          image: "/images/Belts/MSS075.JPG",
          specs: {
            material: "Synthetic",
            temperature: "up to 180°C",
            elongation: "0.53%",
            strength: "4200 N/cm",
            airFlow: "53 m³/h",
            thickness: "0.50mm",
            application: "Tobacco delivery"
          }
        },
        {
          code: "MCP 225",
          name: "Garniture Tape",
          image: "/images/Belts/VAL048.JPG",
          specs: {
            material: "Synthetic",
            temperature: "up to 80°C",
            elongation: "0.51%",
            strength: "4250 N/cm",
            airFlow: "53 m³/h",
            thickness: "0.54mm",
            application: "Tobacco delivery"
          }
        }
      ]
    },
    {
      id: 'tobacco-delivery',
      title: "Tobacco Delivery Belts",
      icon: <Layers className="w-8 h-8" />,
      description: "High-performance belts for tobacco transportation and processing",
      products: [
        {
          code: "LPP 057",
          name: "Tobacco Delivery Belt",
          image: "/images/Belts/LKP066.JPG",
          specs: {
            material: "Synthetic",
            temperature: "up to 180°C",
            elongation: "0.2%",
            strength: "5400 N/cm",
            airFlow: "53 m³/h",
            thickness: "0.50mm",
            application: "Tobacco delivery"
          }
        },
        {
          code: "MKK 168",
          name: "Tobacco Delivery Belt",
          image: "/images/Belts/MRS135.JPG",
          specs: {
            material: "Synthetic",
            temperature: "up to 180°C",
            elongation: "0.19%",
            strength: "6200 N/cm",
            airFlow: "53 m³/h",
            thickness: "0.50mm",
            application: "Tobacco delivery"
          }
        },
        {
          code: "MKK 1057.2",
          name: "Tobacco Delivery Belt",
          image: "/images/Belts/MRS126.JPG",
          specs: {
            material: "Synthetic",
            temperature: "up to 180°C",
            elongation: "0.53%",
            strength: "4200 N/cm",
            airFlow: "53 m³/h",
            thickness: "0.50mm",
            application: "Tobacco delivery"
          }
        },
        {
          code: "LKP 033",
          name: "Tobacco Delivery Belt",
          image: "/images/Belts/MRS135B.JPG",
          specs: {
            material: "Synthetic",
            temperature: "up to 80°C",
            elongation: "0.51%",
            strength: "4250 N/cm",
            airFlow: "53 m³/h",
            thickness: "0.54mm",
            application: "Tobacco delivery"
          }
        }
      ]
    },
    {
      id: 'specialty-belts',
      title: "Specialty Belts",
      icon: <Settings className="w-8 h-8" />,
      description: "Custom and specialized belts for unique applications",
      products: [
        {
          code: "LKP066",
          name: "Specialty Linen Belt",
          image: "/images/Belts/LKP066.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 180°C",
            elongation: "0.7%",
            strength: "5400 N/cm",
            texture: "soft",
            thickness: "0.50mm",
            application: "Specialty applications"
          }
        },
        {
          code: "LKP066C",
          name: "Specialty Linen Belt",
          image: "/images/Belts/MRS126B.JPG",
          specs: {
            material: "Linen",
            temperature: "up to 180°C",
            elongation: "0.7%",
            strength: "5400 N/cm",
            texture: "soft",
            thickness: "0.50mm",
            application: "Specialty applications"
          }
        }
      ]
    }
  ];

  const allProducts = productCategories.flatMap(category => category.products);
  const filteredProducts: Product[] = selectedCategory === 'all' ? allProducts : 
    productCategories.find(cat => cat.id === selectedCategory)?.products || [];

  const features = [
    "High wear resistance",
    "Optimal grip for tobacco manufacturing",
    "Precise tracking on conveyor systems",
    "Variety of materials and patterns",
    "Temperature resistant up to 180°C",
    "Custom specifications available"
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500/10 to-indigo-500/10 text-blue-700 px-6 py-3 rounded-full text-sm font-medium mb-6 border border-blue-200/50 backdrop-blur-sm">
            <Package className="w-5 h-5 mr-3 text-blue-600" />
            <span className="font-semibold">Premium Quality</span>
            <Sparkles className="w-4 h-4 ml-3 text-blue-600" />
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            Our Product Range
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive conveyor Belts engineered for the tobacco industry's most demanding applications
          </p>
        </div>

        {/* Product Features */}
        <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-10 mb-20 shadow-2xl border border-blue-200/50 backdrop-blur-sm">
          <div className="flex items-center justify-center mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl mr-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-blue-800 bg-clip-text text-transparent">
              Key Features
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 group">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-slate-700 font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25'
                : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200/50 hover:border-blue-300/50 shadow-lg hover:shadow-xl'
            }`}
          >
            All Products
          </button>
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white shadow-2xl shadow-blue-500/25'
                  : 'bg-white text-slate-700 hover:bg-blue-50 border border-blue-200/50 hover:border-blue-300/50 shadow-lg hover:shadow-xl'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200/30 group backdrop-blur-sm">
              {/* Product Image */}
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="relative w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    {product.code}
                  </div>
                </div>
                
                <h4 className="font-bold text-slate-800 mb-3 text-lg group-hover:text-blue-700 transition-colors duration-300">
                  {product.name}
                </h4>
                
                {/* Specifications */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="p-1.5 bg-blue-100 rounded-lg">
                      <Package className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-600 font-medium">{product.specs.material}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="p-1.5 bg-red-100 rounded-lg">
                      <Thermometer className="w-4 h-4 text-red-600" />
                    </div>
                    <span className="text-slate-600 font-medium">{product.specs.temperature}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="p-1.5 bg-green-100 rounded-lg">
                      <Zap className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-slate-600 font-medium">Strength: {product.specs.strength}</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <div className="p-1.5 bg-purple-100 rounded-lg">
                      <Ruler className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-slate-600 font-medium">Thickness: {product.specs.thickness}</span>
                  </div>
                  
                  {product.specs.airFlow && (
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="p-1.5 bg-cyan-100 rounded-lg">
                        <Droplets className="w-4 h-4 text-cyan-600" />
                      </div>
                      <span className="text-slate-600 font-medium">Air Flow: {product.specs.airFlow}</span>
                    </div>
                  )}
                  
                  {product.specs.texture && (
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="p-1.5 bg-orange-100 rounded-lg">
                        <Layers className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-slate-600 font-medium">Texture: {product.specs.texture}</span>
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <span className="text-xs bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 px-3 py-1.5 rounded-full font-semibold border border-blue-200/50">
                    {product.specs.application}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl text-white p-10 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-white/20 rounded-xl mr-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Applications</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Package,
                  title: "Cigarette Making",
                  description: "Suction belts for tobacco rod formation"
                },
                {
                  icon: Settings,
                  title: "Filter Manufacturing",
                  description: "Precision belts for filter production lines"
                },
                {
                  icon: Layers,
                  title: "Tobacco Delivery",
                  description: "Conveyor systems for tobacco processing"
                }
              ].map((app, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-white/20 rounded-2xl p-8 mb-4 group-hover:scale-110 transition-transform duration-300">
                    <app.icon className="w-12 h-12 mx-auto mb-4" />
                    <h4 className="font-semibold text-lg mb-2">{app.title}</h4>
                    <p className="text-sm text-white/80 leading-relaxed">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
