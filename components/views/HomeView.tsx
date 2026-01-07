
import React from 'react';
import { TRANSLATIONS, INDUSTRIES } from '../../constants';

interface HomeViewProps {
  lang: 'zh' | 'en';
  onExplore: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ lang, onExplore }) => {
  const t = TRANSLATIONS[lang].hero;

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10"></div>
        <img 
          src="https://i.postimg.cc/NfwtZk6J/Chat-GPT-Image-2026nian1yue4ri-13-50-09.png" 
          alt="JCOE Banner" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <p className="text-blue-400 font-black tracking-[0.4em] uppercase text-xl md:text-3xl mb-8 animate-slideUp">
            {t.tagline}
          </p>
          <h1 className="text-6xl md:text-9xl font-black text-[#004ea1] mb-8 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)] animate-slideUp delay-100">
            {t.title}
          </h1>
          <p className="text-xl md:text-4xl text-gray-100 font-black tracking-widest max-w-5xl mx-auto mb-12 animate-slideUp delay-200">
            {t.sub}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 animate-slideUp delay-300">
            <button 
              onClick={onExplore}
              className="bg-[#004ea1] hover:bg-blue-700 text-white px-12 py-5 rounded-lg font-bold text-lg shadow-2xl transition-all transform hover:scale-105"
            >
              {t.btn1}
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-12 py-5 rounded-lg font-bold text-lg backdrop-blur-md transition-all">
              {t.btn2}
            </button>
          </div>
        </div>
      </section>

      {/* Industry Application Icons Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#004ea1] font-bold tracking-widest uppercase text-sm">{t.industry_tag}</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-2">{t.industry_title}</h2>
            <div className="w-20 h-1.5 bg-[#004ea1] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {INDUSTRIES.map((item) => (
              <div key={item.name} className="group relative h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white mb-6">
                    <i className={`fa-solid ${item.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{lang === 'zh' ? item.name : item.nameEn}</h3>
                  <div className="w-0 group-hover:w-full h-1 bg-blue-400 transition-all duration-700 mt-4 opacity-0 group-hover:opacity-100"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
