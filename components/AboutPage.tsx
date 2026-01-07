
import React from 'react';
import { TRANSLATIONS } from '../constants';

interface AboutPageProps {
  lang: 'zh' | 'en';
}

const AboutPage: React.FC<AboutPageProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;

  return (
    <div className="pt-20 animate-fadeIn">
      {/* Header Overlay */}
      <section className="bg-gradient-to-r from-[#003366] to-[#004ea1] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{t.title}</h1>
          <div className="w-16 h-1 bg-blue-400 mx-auto"></div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 border-l-4 border-[#004ea1] pl-4">
                {lang === 'zh' ? '深耕装备制造，打破国际垄断' : 'Deep in Equipment Manufacturing'}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {lang === 'zh' 
                  ? '江苏久日机床科技有限公司座落于江苏海安。作为国家高新技术企业，公司专注于大口径直缝埋弧焊管（LSAW）成套生产线装备的研发与制造。我们的 JCOE 成型技术在行业内处于领先地位，为全球能源管网建设提供了强有力的装备支撑。'
                  : 'Located in Hai\'an, Jiangsu, Jiuri Machine Tool is a national high-tech enterprise specialized in LSAW pipe production line equipment. Our JCOE forming technology is at the forefront of the industry, providing critical support for global energy pipeline construction.'}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-[#004ea1] font-bold text-2xl mb-1">JCOE/UOE</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{lang === 'zh' ? '核心技术' : 'Core Tech'}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-[#004ea1] font-bold text-2xl mb-1">12,000T</div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{lang === 'zh' ? '压制能力' : 'Pressing Capacity'}</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://i.postimg.cc/x1dkm5NP/image-no-watermark.png" 
                alt="Tech Strength" 
                className="rounded-xl shadow-2xl ring-8 ring-blue-50 transition-transform hover:scale-105 duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-slate-900 text-white relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.history}</h2>
            <p className="text-blue-400 font-medium">2006 — 2026</p>
          </div>
          <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border-4 border-blue-900/50">
            <img 
              src="https://i.postimg.cc/6ph8KNNf/qi-ye-fa-zhan-li-cheng.png" 
              alt="History Timeline" 
              className="w-full h-auto brightness-90 hover:brightness-100 transition-all duration-700"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://i.postimg.cc/6ph8KNNf/qi-ye-fa-zhan-li-cheng.png')] bg-cover opacity-5 blur-xl"></div>
      </section>

      {/* Honors Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.honor}</h2>
            <div className="w-12 h-1 bg-[#004ea1] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white p-4 rounded-xl shadow-sm group hover:shadow-xl transition-all duration-300">
                <div className="aspect-[3/4] overflow-hidden rounded-lg mb-4 bg-gray-100 relative">
                  <img 
                    src="https://i.postimg.cc/NjbR4XLB/gao-qi-zheng-shu.jpg" 
                    alt="Certificate" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <i className="fa-solid fa-magnifying-glass-plus text-white text-2xl"></i>
                  </div>
                </div>
                <p className="text-center text-sm font-bold text-gray-700">
                  {lang === 'zh' ? '荣誉资质展示' : 'Excellence Award'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
