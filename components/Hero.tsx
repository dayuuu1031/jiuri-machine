
import React from 'react';
import { TRANSLATIONS } from '../constants';

const Hero: React.FC = () => {
  // We can detect language via current context or props. 
  // For simplicity since context isn't set up yet, we'll use a basic check or just pass it down if needed.
  // Assuming App.tsx handles state, we can use window.__lang or just keep it dynamic.
  // In a real app we'd use a Context Provider. Let's assume zh for now or adapt if possible.
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 z-10"></div>
      
      <img 
        src="https://i.postimg.cc/NfwtZk6J/Chat-GPT-Image-2026nian1yue4ri-13-50-09.png" 
        alt="JCOE Machine Banner" 
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      <div className="container mx-auto px-6 relative z-20 text-center">
        <div className="inline-block px-4 py-1 mb-8 bg-blue-600/20 border border-blue-400/30 text-blue-300 rounded-full text-xs font-bold animate-pulse backdrop-blur-md">
          <i className="fa-solid fa-gear mr-2"></i> 中国领先的直缝焊管装备制造商
        </div>
        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 drop-shadow-2xl">
          久专于技 · <span className="text-blue-500">日臻于精</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-12 font-light tracking-widest max-w-4xl mx-auto">
          专注 JCOE / UOE 直缝焊管核心装备研发与制造
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="#products-page" className="bg-[#004ea1] hover:bg-blue-700 text-white px-10 py-4 rounded-lg font-bold text-lg shadow-2xl transition-all transform hover:scale-105 active:scale-95">
            探索核心技术
          </a>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-10 py-4 rounded-lg font-bold text-lg backdrop-blur-md transition-all">
            在线咨询方案
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#industry" className="text-white text-3xl opacity-50 hover:opacity-100 transition-opacity"><i className="fa-solid fa-angles-down"></i></a>
      </div>
    </section>
  );
};

export default Hero;
