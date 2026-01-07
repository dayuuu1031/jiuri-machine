
import React from 'react';

const NewsView: React.FC<{ lang: string }> = ({ lang }) => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">新闻中心 / News Center</h2>
        <div className="grid gap-12">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col md:flex-row gap-8 border-b border-gray-100 pb-12 group">
              <div className="md:w-1/3 aspect-video bg-gray-100 rounded-2xl overflow-hidden">
                <img src={`https://images.unsplash.com/photo-1540339832862-47452993c66b?auto=format&fit=crop&q=80&w=800&sig=${i}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <div className="md:w-2/3">
                <span className="text-blue-600 font-bold text-xs uppercase tracking-widest">Enterprise News</span>
                <h3 className="text-2xl font-bold mt-2 mb-4 group-hover:text-blue-600">久日科技成功交付全球首台 12000t 智能 JCO 成型机</h3>
                <p className="text-gray-500 leading-relaxed">近日，江苏久日机床科技有限公司研发生产的 12000t 超大吨位 JCO 渐进式步进成型机在客户现场顺利投产。该设备集成了最新一代工业人工智能控制系统...</p>
                <p className="mt-6 text-gray-400 text-sm">2026.05.18</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsView;
