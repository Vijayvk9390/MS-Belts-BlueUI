import React, { useState } from 'react';
import { Package, Layers, Settings, CheckCircle, Thermometer, Zap, Ruler, Droplets } from 'lucide-react';

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
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Our Product Range
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive conveyor Belts engineered for the tobacco industry's most demanding applications
          </p>
        </div>

        {/* Product Features */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Products
          </button>
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-red-800 to-red-900 text-white shadow-lg'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category.title}
            </button>
          ))}
                  </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Product Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                  <div className="bg-gradient-to-r from-red-800 to-red-900 text-white px-3 py-1 rounded-full text-sm font-bold">
                          {product.code}
                        </div>
                      </div>
                
                <h4 className="font-bold text-slate-800 mb-3 text-lg">{product.name}</h4>
                
                {/* Specifications */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Package className="w-4 h-4 text-red-800" />
                    <span className="text-slate-600">{product.specs.material}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Thermometer className="w-4 h-4 text-red-800" />
                    <span className="text-slate-600">{product.specs.temperature}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Zap className="w-4 h-4 text-red-800" />
                    <span className="text-slate-600">Strength: {product.specs.strength}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2 text-sm">
                    <Ruler className="w-4 h-4 text-red-800" />
                    <span className="text-slate-600">Thickness: {product.specs.thickness}</span>
                  </div>
                  
                  {product.specs.airFlow && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Droplets className="w-4 h-4 text-red-800" />
                      <span className="text-slate-600">Air Flow: {product.specs.airFlow}</span>
                    </div>
                  )}
                  
                  {product.specs.texture && (
                    <div className="flex items-center space-x-2 text-sm">
                      <Layers className="w-4 h-4 text-red-800" />
                      <span className="text-slate-600">Texture: {product.specs.texture}</span>
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                    {product.specs.application}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Applications */}
        <div className="mt-16 bg-gradient-to-r from-red-800 to-red-900 rounded-2xl text-white p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Applications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 mb-4">
                <Package className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold">Cigarette Making</h4>
                <p className="text-sm opacity-90">Suction belts for tobacco rod formation</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 mb-4">
                <Settings className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold">Filter Manufacturing</h4>
                <p className="text-sm opacity-90">Precision belts for filter production lines</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/20 rounded-lg p-6 mb-4">
                <Layers className="w-12 h-12 mx-auto mb-3" />
                <h4 className="font-semibold">Tobacco Delivery</h4>
                <p className="text-sm opacity-90">Conveyor systems for tobacco processing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
