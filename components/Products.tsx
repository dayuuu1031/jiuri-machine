
import React from 'react';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">核心产品</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">精益求精 智造重器</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
            我们提供从标准加工到非标定制的全系列高精度加工解决方案，满足不同行业的多样化需求。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full img-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="space-y-2 mb-6 flex-grow">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <i className="fa-solid fa-circle-check text-blue-500"></i>
                      {feature}
                    </div>
                  ))}
                </div>
                <button className="w-full py-3 border border-blue-600 text-blue-600 font-bold rounded hover:bg-blue-600 hover:text-white transition-all text-sm">
                  查看详情
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
            查看更多产品系列 <i className="fa-solid fa-arrow-right-long"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
