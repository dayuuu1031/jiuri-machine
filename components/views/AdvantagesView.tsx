
import React from 'react';

interface AdvantagesViewProps {
  lang: 'zh' | 'en';
  onConsult: () => void;
}

const AdvantagesView: React.FC<AdvantagesViewProps> = ({ lang, onConsult }) => {
  const isZh = lang === 'zh';
  const mapUrl = "https://surl.amap.com/PQDyDgefRf";
  
  const advantagesData = {
    title: isZh ? '重新定义制管标准，为什么选择久日JCOE系列设备' : 'Redefining Pipe Standards, Why Choose Jiuri JCOE Series Equipment',
    sub: isZh 
      ? '源于对制管工艺的深度理解，我们在结构、智能与服务上实现了全面超越。' 
      : 'Based on a deep understanding of the piping process, we have achieved full transcendence in structure, intelligence, and service.',
    intro: isZh 
      ? '在大型厚壁管材成型领域，江苏久日机床不只是设备的制造者，更是全流程成型解决方案的提供商。我们深耕龙门架构技术，彻底解决了传统制管设备“开口变形大、成型精度低、能耗高”的行业痛点。不同于市面上只做通用机床的厂商，久日专精于“制管工艺系统”，将液压控制、伺服同步与龙门高刚性结构完美融合，只为做出一根完美的管。' 
      : 'In the field of heavy wall pipe forming, Jiangsu Jiuri is not just a manufacturer but a full-process solution provider. We solve traditional industry pain points such as large openings, low precision, and high energy consumption. Unlike generic manufacturers, Jiuri specializes in "Piping Process Systems," merging hydraulic control and gantry rigidity for the perfect pipe.',
    tableHeader: isZh 
      ? ['对比维度', '江苏久日机床', '传统行业巨头', '普通同类竞品'] 
      : ['Dimension', 'Jiangsu Jiuri', 'Traditional Giants', 'Generic Competitors'],
    rows: [
      {
        label: isZh ? '核心架构' : 'Architecture',
        jiuri: isZh ? '新一代龙门闭式架构，抗偏载能力极强' : 'Next-gen closed gantry, ultra-high offset load resistance',
        giant: isZh ? '传统锻压架构，设备笨重，对地基要求极高' : 'Traditional forging structure, heavy, high foundation requirements',
        others: isZh ? '常规通用架构，极限工况下易变形' : 'Standard general structure, prone to deformation'
      },
      {
        label: isZh ? '系统智能化' : 'Intelligence',
        jiuri: isZh ? '深度定制制管系统，含回弹自动补偿算法' : 'Deeply customized piping system with auto-springback compensation',
        giant: isZh ? '通用型数控系统，操作极其复杂' : 'General CNC system, extremely complex operation',
        others: isZh ? '基础PLC控制，功能单一传统' : 'Basic PLC control, limited traditional functions'
      },
      {
        label: isZh ? '定制灵活性' : 'Customization',
        jiuri: isZh ? '极速响应，可按客户个性化需求改变结构与配置' : 'Fast response, structure and configuration can be changed according to personalized needs',
        giant: isZh ? '体制僵化，标准化程度高，特殊需求往往拒接或收取天价非标费' : 'Rigid system, high standardization, special requirements are often rejected or charged high non-standard fees',
        others: isZh ? '技术储备不足，仅支持通用配置微调，无法对核心结构进行深度整改' : 'Insufficient technical reserves, only supports fine-tuning of general configurations, and core structures cannot be deeply rectified'
      },
      {
        label: isZh ? '投资回报率' : 'ROI',
        jiuri: isZh ? '极高，60%的投入实现95%性能' : 'Extreme, 95% performance with 60% investment',
        giant: isZh ? '中等，品牌溢价严重，回本周期长' : 'Medium, high brand premium, long payback period',
        others: isZh ? '中等偏下，长期维护与升级成本高' : 'Low-medium, high long-term maintenance costs'
      },
      {
        label: isZh ? '售后服务' : 'After-sales',
        jiuri: isZh ? '24h技术直连，无层层审批' : '24h direct tech link, no bureaucratic delays',
        giant: isZh ? '流程繁琐，响应慢' : 'Complex workflow, slow response',
        others: isZh ? '服务半径有限，跨省响应难' : 'Limited service radius, difficult inter-province response'
      }
    ],
    techGrid: [
      {
        title: isZh ? '刚性与精度平衡' : 'Rigidity & Precision',
        desc: isZh ? '经有限元分析优化，满负荷运作下机身变形量减少 30%。' : 'FEA optimized, reduces body deformation by 30% under full load.',
        icon: 'fa-cube'
      },
      {
        title: isZh ? '智能大脑算法' : 'Smart Brain Algorithm',
        desc: isZh ? '独家研发算法，自动记忆不同材质回弹系数，调试时间缩短 40%。' : 'Proprietary algorithm, auto-remembers springback factors, cuts tuning time by 40%.',
        icon: 'fa-brain'
      },
      {
        title: isZh ? '多缸同步伺服' : 'Multi-cylinder Servo',
        desc: isZh ? '采用电液比例伺服技术，高速下行平行度控制在 ±0.05mm 以内。' : 'Electro-hydraulic servo, keeps high-speed parallelism within ±0.05mm.',
        icon: 'fa-arrows-down-to-line'
      },
      {
        title: isZh ? '全工艺适配能力' : 'Full Process Adaptability',
        desc: isZh ? '完美适配 JCOE 及直缝埋弧焊管的前置成型工艺。' : 'Perfectly adapts to JCOE and LSAW pre-forming processes.',
        icon: 'fa-layer-group'
      }
    ],
    ctaTitle: isZh ? '“不选贵的，只选对的。”' : '"Choose right, not just expensive."',
    ctaText: isZh 
      ? '许多客户在考察了行业巨头后，因高昂预算和漫长交期止步；在对比了普通竞品后，因技术上限担忧。最终，他们选择了江苏久日——实现了高精度与高回报的最佳平衡。' 
      : 'Many stop at giants due to budget, or avoid generics due to technical limits. They choose Jiuri for the best balance of precision and ROI.',
    ctaBtn: isZh ? '预约工厂实地考察' : 'Book a Factory Visit'
  };

  return (
    <div className="pt-40 min-h-screen relative overflow-hidden">
      {/* 全屏固定虚化背景图 */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://i.postimg.cc/x1dkm5NP/image-no-watermark.png" 
          className="w-full h-full object-cover blur-[12px] scale-110 brightness-[0.7] contrast-[0.9]"
          alt="Jiuri Factory Background"
        />
        <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pb-24">
        {/* Header Section */}
        <header className="mb-20 animate-fadeIn">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-tight max-w-none lg:whitespace-nowrap">
            {advantagesData.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-bold max-w-none leading-relaxed">
            {advantagesData.sub}
          </p>
        </header>

        {/* Intro Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
          <div className="space-y-8 animate-slideUp">
            <h3 className="text-3xl font-black text-white italic">{isZh ? '深度解析：久日机床的独特价值' : 'Deep Dive: Jiuri Unique Value'}</h3>
            <p className="text-lg text-gray-200 leading-relaxed font-medium bg-gray-100/10 p-8 border-l-4 border-[#00d4ff] backdrop-blur-md shadow-2xl">
              {advantagesData.intro}
            </p>
          </div>
          <div className="relative aspect-video bg-gray-800/30 border border-white/10 overflow-hidden group backdrop-blur-sm shadow-2xl">
            <img 
              src="https://i.postimg.cc/x1dkm5NP/image-no-watermark.png" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-90 group-hover:brightness-105" 
              alt="Jiuri Core Technology" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent"></div>
          </div>
        </section>

        {/* Comparison Table Section - Header matched with Deep Dive size */}
        <section className="mb-32 animate-fadeIn">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-10 w-2 bg-[#00d4ff] shadow-[0_0_15px_#00d4ff]"></div>
            <h3 className="text-3xl font-black text-white tracking-tighter leading-tight">
              {isZh ? '行业横向对比' : 'Industry Comparison'}
            </h3>
          </div>
          
          <div className="overflow-x-auto shadow-2xl rounded-none border border-white/10 backdrop-blur-xl bg-black/30">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-900/80 border-b border-white/10">
                  <th className="p-8 text-gray-400 font-black text-xl uppercase tracking-tighter">{advantagesData.tableHeader[0]}</th>
                  <th className="p-8 text-[#00d4ff] font-black text-xl bg-[#004ea1]/30 border-x border-white/10">{advantagesData.tableHeader[1]}</th>
                  <th className="p-8 text-gray-400 font-black text-lg opacity-60">{advantagesData.tableHeader[2]}</th>
                  <th className="p-8 text-gray-400 font-black text-lg opacity-40">{advantagesData.tableHeader[3]}</th>
                </tr>
              </thead>
              <tbody>
                {advantagesData.rows.map((row, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="p-8 text-white font-black text-lg bg-slate-900/40 whitespace-nowrap">{row.label}</td>
                    <td className="p-8 text-white font-bold bg-[#004ea1]/20 border-x border-white/10 shadow-inner">{row.jiuri}</td>
                    <td className="p-8 text-gray-300 font-bold opacity-70">{row.giant}</td>
                    <td className="p-8 text-gray-400 font-bold opacity-50">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Technical Grid Section - Header matched with Deep Dive size */}
        <section className="mb-32">
          <div className="flex items-center gap-4 mb-16">
            <div className="h-10 w-2 bg-[#00d4ff] shadow-[0_0_15px_#00d4ff]"></div>
            <h3 className="text-3xl font-black text-white tracking-tighter leading-tight">
              {isZh ? '四大硬核技术指标' : 'Four Core Technical Specs'}
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantagesData.techGrid.map((tech, i) => (
              <div key={i} className="group industrial-glass p-12 transition-all hover:border-[#00d4ff] hover:bg-white/10 relative overflow-hidden backdrop-blur-md bg-white/5">
                <div className="flex items-start gap-8 relative z-10">
                  <div className="w-16 h-16 bg-blue-600/20 flex items-center justify-center text-[#00d4ff] text-3xl border border-[#00d4ff]/20">
                    <i className={`fa-solid ${tech.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-white mb-4 group-hover:text-[#00d4ff] transition-colors">{tech.title}</h4>
                    <p className="text-gray-300 font-bold leading-relaxed">{tech.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white/5 backdrop-blur-3xl border border-white/10 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-black text-[#00d4ff] mb-8 drop-shadow-[0_0_10px_rgba(0,212,255,0.4)]">{advantagesData.ctaTitle}</h3>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto mb-16 leading-relaxed font-medium">
              {advantagesData.ctaText}
            </p>
            <button 
              onClick={onConsult}
              className="bg-[#004ea1] hover:bg-blue-600 text-white px-16 py-6 rounded-none font-black text-xl transition-all shadow-2xl hover:scale-105 active:scale-95 border-l-4 border-white"
            >
              {advantagesData.ctaBtn}
            </button>
          </div>
        </section>

        {/* Location & Navigation Section */}
        <section className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
           <div className="lg:col-span-1 space-y-8 p-12 bg-white/5 border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-black text-white">{isZh ? '实地考察' : 'Field Investigation'}</h3>
              <p className="text-gray-300 text-sm leading-loose">
                {isZh ? '我们建议每一位意向客户实地参观久日海安制造中心，亲身感受 12000t 级压力下龙门架构的沉稳表现。' : 'We recommend visiting our Haian center to experience the stability of the gantry system under 12000t pressure.'}
              </p>
              <div className="space-y-4">
                 <div className="flex gap-4">
                    <i className="fa-solid fa-location-dot text-blue-500 mt-1"></i>
                    <span className="text-white text-sm font-bold">{isZh ? '江苏省海安市李堡工业集中区' : 'Libao Industrial Zone, Haian City'}</span>
                 </div>
              </div>
           </div>
           
           <div className="lg:col-span-2 min-h-[400px] bg-slate-900 border border-white/10 relative overflow-hidden shadow-2xl group flex items-center justify-center p-16">
              <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-110 transition-transform duration-[20s]"></div>
              <div className="relative z-10 text-center max-w-md">
                 <div className="relative mb-10 flex justify-center">
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-none scale-150 animate-pulse"></div>
                    <i className="fa-solid fa-map-location-dot text-8xl text-[#00d4ff] relative z-10 drop-shadow-[0_0_20px_rgba(0,212,255,0.5)]"></i>
                 </div>
                 <h3 className="font-black text-2xl text-white mb-6 tracking-tight">江苏久日机床科技有限公司</h3>
                 <a 
                    href={mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 bg-[#00d4ff] hover:bg-white text-[#001428] px-10 py-5 rounded-none font-black text-sm uppercase tracking-[0.2em] transition-all transform hover:scale-105 active:scale-95 shadow-[0_15px_35px_rgba(0,212,255,0.4)] border-l-4 border-white"
                 >
                    <i className="fa-solid fa-diamond-turn-right text-lg"></i>
                    {lang === 'zh' ? '开启高德导航' : 'Open Amap Navigation'}
                 </a>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default AdvantagesView;
