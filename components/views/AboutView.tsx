
import React from 'react';
import { TRANSLATIONS, HONORS, INDUSTRIES, HISTORY_ITEMS } from '../../constants';

interface AboutViewProps {
  lang: 'zh' | 'en';
  activeTab: 'overview' | 'culture' | 'history' | 'honors' | 'tech';
  onTabChange: (t: any) => void;
}

const AboutView: React.FC<AboutViewProps> = ({ lang, activeTab, onTabChange }) => {
  const t = TRANSLATIONS[lang].nav;
  const ab = TRANSLATIONS[lang].about;

  const tabs = [
    { id: 'overview', name: t.about_overview },
    { id: 'culture', name: t.about_culture },
    { id: 'history', name: t.about_history },
    { id: 'honors', name: t.about_honors },
    { id: 'tech', name: t.about_tech },
  ];

  return (
    <div 
      className="pt-24 min-h-screen animate-fadeIn relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('https://i.postimg.cc/wvGLDYfM/Chat-GPT-Image-2026nian1yue6ri-12-19-16.png')" }}
    >
      {/* Dark Overlay for the entire page background to ensure content pops */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-0"></div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Nav */}
          <aside className="lg:w-1/4">
            <div className="bg-white/95 backdrop-blur-md rounded-[2rem] shadow-2xl border border-white/20 overflow-hidden sticky top-32">
              <div className="p-10 bg-[#004ea1] text-white">
                <h2 className="text-3xl font-black">{lang === 'zh' ? '关于久日' : 'ABOUT US'}</h2>
                <p className="text-[10px] opacity-60 mt-2 tracking-widest uppercase">Industrial Excellence</p>
              </div>
              <div className="flex flex-col">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`w-full text-left px-10 py-6 font-black text-sm transition-all flex items-center justify-between group ${
                      activeTab === tab.id ? 'bg-blue-50 text-[#004ea1] border-r-8 border-[#004ea1]' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    {tab.name}
                    <i className={`fa-solid fa-arrow-right text-[10px] transition-transform ${activeTab === tab.id ? 'translate-x-2' : 'opacity-0'}`}></i>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content Area */}
          <main className="lg:w-3/4 bg-white/95 backdrop-blur-lg rounded-[2.5rem] shadow-2xl border border-white/20 p-8 md:p-20 overflow-hidden relative min-h-[800px]">
            
            {/* 3.1 Company Overview */}
            {activeTab === 'overview' && (
              <div className="animate-fadeIn">
                <h3 className="text-4xl font-black text-gray-900 mb-10 pb-6 border-b border-gray-100">{ab.overview_title}</h3>
                <div className="prose prose-blue max-w-none text-gray-600 leading-loose space-y-8">
                  <p className="text-xl font-medium text-gray-800">
                    {ab.overview_text}
                  </p>
                  <div className="bg-blue-50 p-8 rounded-2xl border-l-8 border-[#004ea1]">
                    <p className="text-[#004ea1] font-black text-lg">{ab.main_product}</p>
                  </div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
                   {INDUSTRIES.map(ind => (
                     <div key={ind.name} className="flex flex-col items-center p-6 bg-gray-50 rounded-2xl transition-transform hover:-translate-y-2">
                        <i className={`fa-solid ${ind.icon} text-3xl text-[#004ea1] mb-4`}></i>
                        <span className="text-xs font-bold text-gray-700">{lang === 'zh' ? ind.name : ind.nameEn}</span>
                     </div>
                   ))}
                </div>
              </div>
            )}

            {/* 3.2 Corporate Culture */}
            {activeTab === 'culture' && (
              <div className="animate-fadeIn">
                <h3 className="text-4xl font-black text-gray-900 mb-12">{ab.culture_title}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-10 bg-blue-50 rounded-3xl border border-blue-100 shadow-sm transition-all hover:shadow-xl">
                    <h4 className="text-2xl font-black text-[#004ea1] mb-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#004ea1] text-white rounded-xl flex items-center justify-center"><i className="fa-solid fa-rocket"></i></div>
                      {ab.mission}
                    </h4>
                    <p className="text-gray-700 font-bold leading-relaxed">{ab.mission_text}</p>
                  </div>
                  <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-xl">
                    <h4 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-800 text-white rounded-xl flex items-center justify-center"><i className="fa-solid fa-eye"></i></div>
                      {ab.vision}
                    </h4>
                    <p className="text-gray-700 font-bold leading-relaxed">{ab.vision_text}</p>
                  </div>
                </div>

                <div className="mt-12 p-10 bg-gradient-to-br from-[#004ea1] to-[#003366] rounded-3xl text-white shadow-2xl">
                   <h4 className="text-xl font-bold mb-8 uppercase tracking-widest opacity-60">{ab.values}</h4>
                   <p className="text-4xl md:text-5xl font-black tracking-tighter mb-10">{ab.values_text}</p>
                   
                   <h4 className="text-xl font-bold mb-6 uppercase tracking-widest opacity-60">{ab.spirit}</h4>
                   <p className="text-3xl font-black">{ab.spirit_text}</p>
                </div>

                <div className="mt-16">
                   <h4 className="text-2xl font-black mb-8">{ab.core_values_title}</h4>
                   <div className="flex flex-wrap gap-4">
                      {ab.core_values_list.map((val: string) => (
                        <span key={val} className="px-8 py-4 bg-gray-100 text-gray-800 rounded-full font-black text-sm border border-gray-200">
                          {val}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            )}

            {/* 3.3 History */}
            {activeTab === 'history' && (
              <div className="animate-fadeIn relative -mx-8 md:-mx-20 -mt-8 md:-mt-20 -mb-8 md:-mb-20 min-h-[900px] overflow-hidden flex flex-col">
                <div 
                  className="absolute inset-0 bg-fixed bg-cover bg-center z-0"
                  style={{ backgroundImage: "url('https://i.postimg.cc/6ph8KNNf/qi-ye-fa-zhan-li-cheng.png')" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#001e50]/95 via-[#001e50]/85 to-[#003366]/95"></div>
                </div>

                <div className="relative z-10 flex-grow py-24 px-8 md:px-20">
                  <div className="text-center mb-24">
                    <h3 className="text-5xl font-black text-white mb-6 tracking-tighter uppercase">
                      {lang === 'zh' ? '发展历程' : 'Our History'}
                    </h3>
                    <div className="w-24 h-2 bg-cyan-400 mx-auto shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
                  </div>

                  <div className="relative max-w-5xl mx-auto pb-20">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent hidden md:block"></div>

                    <div className="space-y-32">
                      {HISTORY_ITEMS.map((item, idx) => (
                        <div 
                          key={item.year} 
                          className={`relative flex flex-col md:flex-row items-center gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                        >
                          <div className={`w-full md:w-[45%] p-10 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:bg-white/10 hover:border-cyan-400/30 group animate-slideUp`} style={{ animationDelay: `${idx * 150}ms` }}>
                            <div className="flex flex-col">
                              <span className="text-6xl font-black text-cyan-400 mb-6 group-hover:scale-110 transition-transform origin-left drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
                                {item.year}
                              </span>
                              <div className="space-y-6">
                                <p className="text-2xl font-black text-white leading-tight">
                                  {item.cn}
                                </p>
                                <p className="text-sm font-bold text-blue-200/60 leading-relaxed uppercase tracking-widest italic">
                                  {item.en}
                                </p>
                              </div>
                            </div>
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                               <i className="fa-solid fa-clock-rotate-left text-4xl text-white"></i>
                            </div>
                          </div>

                          <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 bg-[#001e50] border-4 border-cyan-400 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.8)] z-20 hidden md:block group-hover:scale-125 transition-transform">
                             <div className="w-full h-full rounded-full animate-ping bg-cyan-400/30"></div>
                          </div>

                          <div className="hidden md:block w-[45%]"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 3.4 Honors */}
            {activeTab === 'honors' && (
              <div className="animate-fadeIn">
                <h3 className="text-4xl font-black text-gray-900 mb-12">{t.about_honors}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {HONORS.map((img, i) => (
                    <div key={i} className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                       <img src={img} className="w-full h-full object-cover" alt="Honor Certificate" />
                       <div className="absolute inset-0 bg-[#004ea1]/80 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                         <i className="fa-solid fa-magnifying-glass-plus text-white text-3xl"></i>
                       </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3.5 Tech Strength */}
            {activeTab === 'tech' && (
              <div className="animate-fadeIn">
                <h3 className="text-4xl font-black text-gray-900 mb-12">{t.about_tech}</h3>
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border-8 border-gray-50">
                   <img 
                    src="https://i.postimg.cc/x1dkm5NP/image-no-watermark.png" 
                    className="w-full h-auto transition-transform duration-[2s] group-hover:scale-110" 
                    alt="Tech Strength Display" 
                   />
                   <div className="absolute bottom-10 left-10 dark-glass p-8 rounded-2xl text-white max-w-md">
                      <h4 className="text-2xl font-black mb-4">智能控制系统</h4>
                      <p className="text-sm opacity-80 leading-relaxed font-bold">集成了先进的步进控制与闭环反馈，确保 12000t 压力下的成型精度误差控制在极小范围内。</p>
                   </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AboutView;
