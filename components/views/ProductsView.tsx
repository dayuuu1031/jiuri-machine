
import React from 'react';
import { PRODUCTS, TRANSLATIONS } from '../../constants';

interface ProductsViewProps {
  lang: 'zh' | 'en';
}

const ProductsView: React.FC<ProductsViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].nav;

  return (
    <div className="pt-24 min-h-screen bg-gray-50 animate-fadeIn">
      <section className="bg-slate-900 py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.products}</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {lang === 'zh' ? '从铣边、成型到焊接检测，我们提供 JCOE/UOE 全生命周期装备解决方案。' : 'From edge milling to welding and testing, we provide full lifecycle solutions.'}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((p) => (
              <div key={p.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-2xl transition-all duration-500">
                <div className="h-72 overflow-hidden relative">
                  <img src={p.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={p.name} />
                  <div className="absolute top-6 left-6 bg-[#004ea1] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                    {p.category}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {lang === 'zh' ? p.name : p.nameEn}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {lang === 'zh' ? p.description : p.descEn}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.features.map(f => (
                      <span key={f} className="bg-gray-100 text-gray-500 text-[10px] font-bold px-2 py-1 rounded uppercase">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsView;
