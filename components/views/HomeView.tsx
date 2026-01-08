
import React from 'react';
import { TRANSLATIONS, INDUSTRIES, CORPORATE_SPIRIT } from '../../constants';

interface HomeViewProps {
  lang: 'zh' | 'en';
  onExplore: () => void;
  onConsult: () => void;
}

const HomeView: React.FC<HomeViewProps> = ({ lang, onExplore, onConsult }) => {
  const t = TRANSLATIONS[lang].hero;

  // 合作伙伴数据：调整了特定企业的 padding 以缩小其 logo 视觉大小
  const partners = [
    { 
      name: '上海中油天宝钢管公司', 
      enName: 'Shanghai Zhongyou Tianbao Steel Pipe Co., Ltd.',
      logo: 'https://i.postimg.cc/Yq2FsyBx/shang-hai-zhong-you-tian-bao-gang-guan-gong-si.png',
      padding: 'px-6 md:px-8' 
    },
    { 
      name: '乌克兰国家能源部石油公司', 
      enName: 'Ukraine National Ministry of Energy Oil Company',
      logo: 'https://i.postimg.cc/PfQZKn9k/wu-ke-lan-guo-jia-neng-yuan-bu-shi-you-gong-si.png',
      padding: 'px-6 md:px-8' 
    },
    { 
      name: '海天鑫业（天津）科技有限公司', 
      enName: 'Haitian Xinye (Tianjin) Technology Co., Ltd.',
      logo: 'https://i.postimg.cc/025SBH1d/tian-jin-hai-tian-xin-ye-gang-guan-you-xian-gong-si.png',
      padding: 'px-6 md:px-8' 
    },
    { 
      name: '广东金溢特材有限公司', 
      enName: 'Guangdong Jinyi Special Materials Co., Ltd.',
      logo: 'https://i.postimg.cc/PrfDRFn1/guang-dong-jin-yi-te-cai-you-xian-gong-si.png',
      padding: 'px-4 md:px-6' 
    },
    { 
      name: '江苏银环精密钢管有限公司', 
      enName: 'Jiangsu Yinhuan Precision Steel Pipe Co., Ltd.',
      logo: 'https://i.postimg.cc/sDnWd93L/jiang-su-yin-huan-jing-mi-gang-guan-you-xian-gong-si.jpg',
      padding: 'px-4 md:px-6' 
    },
    { 
      name: '河北沧海核装备科技股份有限公司', 
      enName: 'Hebei Canghai Nuclear Equipment Technology Co., Ltd.',
      logo: 'https://i.postimg.cc/zXdhZSqM/he-bei-cang-hai-he-zhuang-bei-ke-ji-gu-fen-you-xian-gong-si.jpg',
      padding: 'px-6 md:px-8' 
    },
    { 
      name: '浙江钢一控股集团', 
      enName: 'Zhejiang Gangyi Holding Group',
      logo: 'https://i.postimg.cc/28HWRFCT/zhe-jiang-gang-yi-kong-gu-ji-tuan.png',
      padding: 'px-4 md:px-6' 
    },
    { 
      name: '浙江德威不锈钢管业股份有限公司', 
      enName: 'Zhejiang Dewei Stainless Steel Pipe Co., Ltd.',
      logo: 'https://i.postimg.cc/gkMhFqGM/zhe-jiang-de-wei-bu-xiu-gang-guan-gu-fen-you-xian-gong-si.jpg',
      padding: 'px-2 md:px-4' 
    },
    { 
      name: '陕西华建集团', 
      enName: 'Shaanxi Huajian Group',
      logo: 'https://i.postimg.cc/ZKfNtFJs/shan-xi-hua-jian-ji-tuan.jpg',
      padding: 'px-6 md:px-8' 
    },
    {
      name: '中兴能源装备有限公司',
      enName: 'Zhongxing Energy Equipment Co., Ltd.',
      logo: 'https://i.postimg.cc/FsxM9zqs/zhong-xing-neng-yuan-zhuang-bei-you-xian-gong-si.png',
      padding: 'px-4 md:px-6' 
    }
  ];

  const valuesList = t.values_text.split(' · ');

  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10"></div>
        <img 
          src="https://i.postimg.cc/NfwtZk6J/Chat-GPT-Image-2026nian1yue4ri-13-50-09.png" 
          alt="JCOE Banner" 
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="container mx-auto px-6 relative z-20 text-center">
          <p className="text-blue-400 font-black tracking-[0.4em] uppercase text-xl md:text-3xl mb-8 animate-slideUp">
            {t.tagline}
          </p>
          <h1 className="text-6xl md:text-9xl font-black mb-8 animate-slideUp delay-100 text-[#004ea1] tracking-tighter drop-shadow-2xl">
            {t.title}
          </h1>
          <p className="text-xl md:text-4xl text-gray-100 font-black tracking-widest max-w-5xl mx-auto mb-12 animate-slideUp delay-200">
            {t.sub}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 animate-slideUp delay-300">
            <button 
              onClick={onExplore}
              className="bg-[#004ea1] hover:bg-blue-700 text-white px-12 py-5 rounded-none font-bold text-lg shadow-2xl transition-all transform hover:scale-105 border-l-4 border-[#00d4ff]"
            >
              {t.btn1}
            </button>
            <button 
              onClick={onConsult}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-12 py-5 rounded-none font-bold text-lg backdrop-blur-md transition-all"
            >
              {t.btn2}
            </button>
          </div>
        </div>
      </section>

      {/* Corporate Philosophy Section - Optimized Sizing and Alignment */}
      <section className="py-24 relative overflow-hidden bg-[#000a1a]">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#00d4ff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-[1700px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 企业使命 */}
            <div className="group relative p-8 md:p-10 xl:p-12 bg-[#004ea1]/5 backdrop-blur-3xl border border-[#004ea1]/20 rounded-none shadow-2xl transition-all hover:bg-[#004ea1]/10 overflow-hidden border-l-8 border-[#00d4ff]">
              <div className="absolute -right-8 -top-8 text-7xl md:text-8xl text-white/5 font-black uppercase tracking-tighter pointer-events-none select-none group-hover:opacity-10 transition-opacity">Mission</div>
              <div className="relative z-10">
                <span className="inline-block text-xl md:text-2xl lg:text-3xl font-black text-[#00d4ff] tracking-tighter mb-8 drop-shadow-xl uppercase">
                  {t.mission_title}
                </span>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.4rem] xl:text-[1.8rem] 2xl:text-[2.1rem] font-black text-white leading-tight mb-8 group-hover:text-[#00d4ff] transition-colors whitespace-nowrap">
                  {t.mission_text}
                </h2>
                <div className="w-16 h-1 bg-[#00d4ff] group-hover:w-full transition-all duration-700 shadow-[0_0_10px_rgba(0,212,255,0.8)]"></div>
              </div>
            </div>

            {/* 企业愿景 */}
            <div className="group relative p-8 md:p-10 xl:p-12 bg-[#004ea1]/5 backdrop-blur-3xl border border-[#004ea1]/20 rounded-none shadow-2xl transition-all hover:bg-[#004ea1]/10 overflow-hidden border-l-8 border-[#00d4ff]">
               <div className="absolute -right-8 -top-8 text-7xl md:text-8xl text-white/5 font-black uppercase tracking-tighter pointer-events-none select-none group-hover:opacity-10 transition-opacity">Vision</div>
               <div className="relative z-10">
                <span className="inline-block text-xl md:text-2xl lg:text-3xl font-black text-[#00d4ff] tracking-tighter mb-8 drop-shadow-xl uppercase">
                  {t.vision_title}
                </span>
                <h2 className="text-base sm:text-lg md:text-xl lg:text-[1.4rem] xl:text-[1.8rem] 2xl:text-[2.1rem] font-black text-white leading-tight mb-8 group-hover:text-[#00d4ff] transition-colors whitespace-nowrap">
                  {t.vision_text}
                </h2>
                <div className="w-16 h-1 bg-[#00d4ff] group-hover:w-full transition-all duration-700 shadow-[0_0_10px_rgba(0,212,255,0.8)]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-10 bg-[#004ea1] relative overflow-hidden group">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-row flex-wrap items-center justify-between gap-4 md:gap-8">
            <div className="flex flex-col items-center flex-1 min-w-[120px]">
               <span className="text-2xl md:text-3xl lg:text-4xl font-black text-[#00d4ff] drop-shadow-xl tracking-tighter whitespace-nowrap">
                  {t.values_title}
               </span>
               <div className="w-6 h-[2px] bg-[#00d4ff] mt-4 shadow-[0_0_8px_#00d4ff]"></div>
               <span className="mt-2 text-[8px] font-mono-tech text-white/30 uppercase tracking-[0.3em]">Core Values</span>
            </div>
            <div className="hidden lg:block w-[1px] h-12 bg-white/10 mx-4"></div>
            {valuesList.map((val, idx) => (
              <div key={idx} className="flex flex-col items-center flex-1 min-w-[100px] group/item">
                <span className="text-2xl md:text-3xl lg:text-4xl font-black text-white hover:text-[#00d4ff] transition-all cursor-default transform group-hover/item:scale-105 drop-shadow-xl tracking-tighter whitespace-nowrap">
                  {val}
                </span>
                <div className="w-6 h-[2px] bg-[#00d4ff] mt-4 opacity-0 group-hover/item:opacity-100 transition-all duration-500 shadow-[0_0_8px_#00d4ff]"></div>
                <span className="mt-2 text-[8px] font-mono-tech text-white/20 uppercase tracking-[0.3em]">
                  {idx === 0 && "Innovation"}
                  {idx === 1 && "Precision"}
                  {idx === 2 && "Expertise"}
                  {idx === 3 && "Reliability"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Spirit Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight">
              {lang === 'zh' ? '企业精神' : 'CORPORATE SPIRIT'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CORPORATE_SPIRIT.map((spirit) => (
              <div key={spirit.word} className="group relative p-10 bg-gray-50 border border-gray-100 rounded-none overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2 border-l-4 border-transparent hover:border-blue-600">
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-none bg-blue-100 flex items-center justify-center text-blue-600 mb-8 transition-all group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white border border-blue-200">
                    <i className={`fa-solid ${spirit.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight">
                    {lang === 'zh' ? spirit.cn : spirit.word}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {lang === 'zh' ? spirit.cnDesc : spirit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Empowerment Section */}
      <section className="py-24 bg-[#000a1a] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[#00d4ff] font-bold tracking-widest uppercase text-sm">{t.industry_tag}</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-2">{t.industry_title}</h2>
            <div className="w-20 h-1.5 bg-[#00d4ff] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {INDUSTRIES.map((item) => (
              <div key={item.name} className="group relative h-[500px] rounded-none overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-white/5">
                <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" alt={item.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-900/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-none flex items-center justify-center text-white mb-6 border border-white/20">
                    <i className={`fa-solid ${item.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">{lang === 'zh' ? item.name : item.nameEn}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section - Redesigned to a single line layout */}
      <section id="partners" className="py-32 bg-gray-50/50 border-t border-gray-200 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">{t.partners_title}</h2>
            <div className="w-16 h-1 bg-[#004ea1] mx-auto"></div>
          </div>
          
          {/* Desktop: Single Row Grid | Mobile: Marquee */}
          <div className="relative">
            {/* Desktop 10-column layout */}
            <div className="hidden lg:grid grid-cols-10 gap-2 xl:gap-4 items-stretch">
              {partners.map((partner) => (
                <div 
                  key={partner.name} 
                  className="group flex flex-col items-center p-2 bg-white border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-b-2 border-transparent hover:border-blue-600 cursor-default"
                >
                  <div className={`w-full aspect-square flex items-center justify-center mb-2 relative overflow-hidden ${partner.padding}`}>
                    <img 
                      src={partner.logo} 
                      alt={lang === 'zh' ? partner.name : partner.enName} 
                      className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110" 
                    />
                  </div>
                  <h3 className="text-[9px] font-black text-gray-400 text-center uppercase tracking-tight leading-tight group-hover:text-gray-900 transition-colors h-8 flex items-center px-1">
                    {lang === 'zh' ? partner.name : partner.enName}
                  </h3>
                </div>
              ))}
            </div>

            {/* Mobile/Tablet Marquee for "One Line" presentation */}
            <div className="lg:hidden overflow-hidden flex">
              <div className="animate-marquee flex whitespace-nowrap py-4">
                {[...partners, ...partners].map((partner, idx) => (
                  <div 
                    key={`${partner.name}-${idx}`} 
                    className="flex flex-col items-center p-3 bg-white border border-gray-100 mx-2 w-40 flex-shrink-0"
                  >
                    <div className={`w-full aspect-video flex items-center justify-center mb-2 ${partner.padding}`}>
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain" 
                      />
                    </div>
                    <h3 className="text-[10px] font-black text-gray-400 text-center whitespace-normal h-8 flex items-center line-clamp-2 leading-tight">
                      {lang === 'zh' ? partner.name : partner.enName}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
