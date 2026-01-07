
import React from 'react';
import { PRODUCTS, TRANSLATIONS } from '../constants';

interface ProductsPageProps {
  lang: 'zh' | 'en';
}

const ProductsPage: React.FC<ProductsPageProps> = ({ lang }) => {
  // Use safe access to TRANSLATIONS to prevent errors if property is missing
  const t = (TRANSLATIONS[lang] as any).products || { 
    title: lang === 'zh' ? '产品展示' : 'Our Products', 
    sub: lang === 'zh' ? '核心设备' : 'Core Equipment',
    detail: lang === 'zh' ? '查看详情' : 'View Detail'
  };

  return (
    <div className="pt-20 animate-fadeIn">
      {/* Header */}
      <section className="bg-slate-900 py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h1>
          <p className="text-blue-400 text-lg uppercase tracking-widest">{t.sub}</p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={p.image} 
                    alt={lang === 'zh' ? p.name : p.nameEn} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-[#004ea1] text-white text-[10px] px-3 py-1 rounded-full font-bold">
                    {/* Fixed: Property 'categoryEn' does not exist on type 'Product'; using 'category' instead */}
                    {p.category}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#004ea1] transition-colors">
                    {lang === 'zh' ? p.name : p.nameEn}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed line-clamp-2">
                    {lang === 'zh' ? p.description : p.descEn}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {p.features.map((f, i) => (
                      <span key={i} className="text-[10px] bg-blue-50 text-blue-700 px-2 py-1 rounded border border-blue-100">
                        {f}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 bg-[#004ea1] text-white rounded-lg font-bold text-sm hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                    {t.detail} <i className="fa-solid fa-arrow-right text-[10px]"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consulting */}
      <section className="py-20 bg-[#004ea1] text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            {lang === 'zh' ? '定制化直缝焊管生产线解决方案' : 'Custom LSAW Production Line Solutions'}
          </h2>
          <p className="opacity-80 mb-10 max-w-2xl mx-auto">
            {lang === 'zh' 
              ? '我们的工程团队可根据您的厂房布局、管径范围、年产量要求，提供全套交钥匙工程咨询。' 
              : 'Our engineering team can provide full turnkey consulting based on your factory layout and production requirements.'}
          </p>
          <a href="#contact" className="inline-block bg-white text-[#004ea1] px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors">
            {lang === 'zh' ? '立即咨询' : 'Contact Us'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
