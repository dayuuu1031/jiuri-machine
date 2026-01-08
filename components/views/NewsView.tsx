
import React from 'react';

const NewsView: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className="pt-28 min-h-screen relative overflow-hidden">
      
      {/* 全屏固定虚化背景图 */}
      <div className="fixed inset-0 z-0">
        <img 
          src="https://i.postimg.cc/x1dkm5NP/image-no-watermark.png" 
          className="w-full h-full object-cover blur-[12px] scale-110 brightness-[0.7]"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gray-500/20 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="bg-gray-100/10 backdrop-blur-3xl border border-white/20 rounded-none p-12 md:p-16 shadow-2xl border-l-8 border-blue-600">
          <h2 className="text-4xl font-black mb-12 text-white flex items-center gap-4">
            <span className="w-2 h-10 bg-[#004ea1] inline-block shadow-[0_0_15px_#004ea1]"></span>
            新闻中心 / News Center
          </h2>
          <div className="grid gap-12">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex flex-col md:flex-row gap-8 border-b border-white/5 pb-12 group last:border-none">
                <div className="md:w-1/3 aspect-video bg-gray-500/20 rounded-none overflow-hidden border border-white/10">
                  <img src={`https://images.unsplash.com/photo-1540339832862-47452993c66b?auto=format&fit=crop&q=80&w=800&sig=${i}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="md:w-2/3">
                  <span className="text-[#00d4ff] font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    <i className="fa-solid fa-bolt-lightning"></i> Enterprise News
                  </span>
                  <h3 className="text-2xl font-black mt-3 mb-4 text-white group-hover:text-[#00d4ff] transition-colors">久日科技成功交付全球首台 12000t 智能 JCO 成型机</h3>
                  <p className="text-gray-300 font-bold leading-relaxed mb-6 opacity-70">近日，江苏久日机床科技有限公司研发生产的 12000t 超大吨位 JCO 渐进式步进成型机在客户现场顺利投产。该设备集成了最新一代工业人工智能控制系统...</p>
                  <p className="text-blue-300/40 text-sm font-mono-tech uppercase tracking-widest">Post Date: 2026.05.18</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsView;
