
import React, { useEffect, useRef } from 'react';
import { PRODUCTS, TRANSLATIONS } from '../../constants';

interface ProductsViewProps {
  lang: 'zh' | 'en';
  activeTab?: string;
  onConsult: () => void;
}

const ProductsView: React.FC<ProductsViewProps> = ({ lang, activeTab, onConsult }) => {
  const t = TRANSLATIONS[lang].nav;
  const videoSectionRef = useRef<HTMLElement>(null);
  const coreSectionRef = useRef<HTMLElement>(null);

  // 处理从导航栏点击下拉项时的平滑滚动
  useEffect(() => {
    if (activeTab === 'video' && videoSectionRef.current) {
      const offset = videoSectionRef.current.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    } else if (activeTab === 'core' && coreSectionRef.current) {
      const offset = coreSectionRef.current.offsetTop - 100;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }, [activeTab]);

  const productVideos = [
    { 
      id: 'v1', 
      url: 'https://streamable.com/e/suggqq', 
      title: lang === 'zh' ? '钢板双边预弯机' : 'Plate Pre-bending Machine',
      desc: lang === 'zh' 
        ? '用于将已铣边的制管钢板依次送入上下模具之间，通过框架式双模具同步压制，使钢板两侧同时产生弯曲变形。通过调整模具位置，可获得与成品钢管曲率高度匹配的预弯效果，为后续成型提供精准板边。'
        : 'Used to feed the milled steel plates between upper and lower molds, simultaneously pressing both sides to create curved edges that perfectly match final pipe curvature.'
    },
    { 
      id: 'v2', 
      url: 'https://streamable.com/e/sskzmb', 
      title: lang === 'zh' ? 'JCO 成型机' : 'JCO Machine',
      desc: lang === 'zh'
        ? '将已预弯的制管钢板送入上下模具，在压力作用下实现精准弯曲，压制成符合要求的开口管坯，为后续成型奠定核心质量基础。'
        : 'Feeds pre-bent plates into molds to achieve precise progressive bending under high pressure, forming the open pipe shell that defines core quality.'
    },
    { 
      id: 'v3', 
      url: 'https://streamable.com/e/t9jiie', 
      title: lang === 'zh' ? '钢管合缝机' : 'Tack-welding Machine',
      desc: lang === 'zh'
        ? '本机是大口径直缝埋弧焊管生产线的重要设备之一，用于将预弯后的开口管坯高效、连续合缝并对接预焊，使其形成圆形封闭管状结构。设备为后续内焊、外焊工序提供稳定可靠的合缝质量，适用于专业直缝焊管制造企业。'
        : 'One of the key equipment in the LSAW production line, used for efficient and continuous alignment and tack-welding of pre-bent pipe shells into circular closed pipes. It provides stable and reliable seam quality for subsequent internal and external welding processes, suitable for professional LSAW manufacturing enterprises.'
    },
    {
      id: 'v4',
      url: 'https://streamable.com/e/m6abd0',
      title: lang === 'zh' ? 'Y4-3000T/1422-12200钢管缩径精整机' : 'Y4-3000T/1422-12200 Pipe Sizing & Finishing Machine',
      desc: lang === 'zh'
        ? '对圆度欠佳的长圆管逐段从外部圆周施加强大压力，以改善长圆管圆度，使之达到有关标准或使用要求。同时对于管径700以下直线度较差的钢管可以校直。'
        : 'Applies powerful pressure circumferentially to out-of-round pipes section by section to improve roundness, meeting relevant standards. It can also straighten pipes with diameters below 700mm and poor straightness.'
    }
  ];

  return (
    <div className="pt-28 min-h-screen relative overflow-hidden">
      
      {/* 全屏固定虚化背景图 - 灰色工业调 */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://i.postimg.cc/x1dkm5NP/image-no-watermark.png" 
          className="w-full h-full object-cover blur-[15px] scale-110 brightness-[0.6] grayscale-[0.2]"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gray-600/20 backdrop-blur-[3px]"></div>
      </div>

      <div className="relative z-10">
        {/* 顶部标题区域 - 灰色半透明磨砂 */}
        <section className="bg-gray-100/10 backdrop-blur-3xl border-b border-white/10 py-24 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 uppercase tracking-tighter text-[#00d4ff] drop-shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              {t.products}
            </h2>
            <div className="w-24 h-1.5 bg-[#00d4ff] mx-auto mb-8 shadow-[0_0_15px_#00d4ff]"></div>
            <p className="text-blue-100/70 max-w-3xl mx-auto font-bold tracking-widest text-lg">
              {lang === 'zh' ? '专注JCOE/UOE工艺，提供从原材料铣边到成品管检测的全线自动化装备。' : 'Specializing in JCOE/UOE processes, providing full-line automated equipment.'}
            </p>
          </div>
        </section>

        {/* 1. 核心设备卡片 (Core Equipment) - 9张图 */}
        <section ref={coreSectionRef} id="core-products" className="py-24">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h3 className="text-3xl font-black text-white flex items-center gap-5">
                <span className="w-2 h-10 bg-[#00d4ff] inline-block shadow-[0_0_15px_#00d4ff]"></span>
                {t.products_core} / {lang === 'zh' ? '核心设备展示' : 'Core Equipment'}
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {PRODUCTS.map((p) => (
                <div key={p.id} className="bg-gray-100/10 backdrop-blur-2xl rounded-none shadow-2xl border border-white/10 overflow-hidden group hover:border-[#00d4ff]/50 transition-all duration-500 hover:-translate-y-2 border-l-4 border-transparent hover:border-blue-500">
                  <div className="h-64 overflow-hidden relative bg-black/40">
                    <img 
                      src={p.image} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-105" 
                      alt={p.name} 
                    />
                    <div className="absolute top-0 left-0 bg-[#004ea1] text-white text-[10px] font-black px-4 py-1.5 uppercase tracking-widest shadow-lg rounded-none border-b border-r border-white/20">
                      {p.category}
                    </div>
                  </div>
                  <div className="p-10">
                    <h3 className="text-2xl font-black text-white mb-4 group-hover:text-[#00d4ff] transition-colors leading-tight">
                      {lang === 'zh' ? p.name : p.nameEn}
                    </h3>
                    <p className="text-gray-300/70 text-[15px] leading-relaxed mb-8 font-medium">
                      {lang === 'zh' ? p.description : p.descEn}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {p.features.map(f => (
                        <span key={f} className="bg-white/5 text-gray-400 text-[11px] font-bold px-4 py-1.5 uppercase border border-white/10 rounded-none">
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

        {/* 2. 产品视频板块 (Product Videos) - 同步标题样式 */}
        <section ref={videoSectionRef} id="product-videos" className="py-32 bg-gray-500/10 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="mb-16">
              <h3 className="text-3xl font-black text-white flex items-center gap-5">
                <span className="w-2 h-10 bg-[#00d4ff] inline-block shadow-[0_0_15px_#00d4ff]"></span>
                {t.products_video} / {lang === 'zh' ? '现场演示' : 'VIDEO DEMO'}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {productVideos.map((video) => (
                <div key={video.id} className="bg-gray-100/10 backdrop-blur-3xl border border-white/10 rounded-none p-6 shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden group flex flex-col h-full border-l-8 border-blue-600">
                  <div className="relative aspect-video rounded-none overflow-hidden bg-black/60 border border-white/10 mb-8 shadow-inner">
                    <iframe 
                      src={video.url} 
                      className="w-full h-full"
                      frameBorder="0" 
                      allow="autoplay; fullscreen" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="px-4 pb-4 flex flex-col flex-grow">
                    <h4 className="text-2xl font-black text-white mb-6 group-hover:text-[#00d4ff] transition-colors">
                      {video.title}
                    </h4>
                    <p className="text-gray-300 font-bold leading-relaxed text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                      {video.desc}
                    </p>
                    <div className="mt-auto pt-8 flex items-center justify-end">
                       <i className="fa-solid fa-circle-play text-blue-500/20 text-3xl"></i>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 咨询板块 - 磨砂 */}
        <section className="py-24 bg-gray-100/10 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-3xl font-black text-white mb-8">
              {lang === 'zh' ? '获取 JCOE / UOE 成套生产线详细参数？' : 'Get Full JCOE / UOE Line Specifications?'}
            </h3>
            <button 
              onClick={onConsult}
              className="bg-[#004ea1] hover:bg-blue-600 text-white px-16 py-5 rounded-none font-black text-lg transition-all shadow-2xl hover:shadow-blue-500/30 flex items-center gap-4 mx-auto group border-l-4 border-[#00d4ff]"
            >
              {lang === 'zh' ? '立即联系技术专家' : 'Contact Tech Expert'}
              <i className="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductsView;
