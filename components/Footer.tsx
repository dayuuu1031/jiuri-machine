
import React from 'react';
import { Section } from '../types';
import { TRANSLATIONS } from '../constants';

interface FooterProps {
  lang: 'zh' | 'en';
  onNavigate: (v: Section) => void;
}

const Footer: React.FC<FooterProps> = ({ lang, onNavigate }) => {
  const t = TRANSLATIONS[lang].nav;
  const tc = TRANSLATIONS[lang].contact;

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <div className="flex items-center space-x-3 mb-8">
               <img src="https://i.postimg.cc/wTrzWQbs/jiang-su-jiu-rilogo.jpg" className="h-10 w-auto rounded bg-white p-0.5" alt="JIURI" />
               <span className="font-bold text-2xl tracking-tighter">江苏久日</span>
            </div>
            <p className="text-gray-400 text-sm leading-loose">
              专注于 JCOE/UOE 大口径直缝焊管装备研发与制造，致力为全球能源工程提供核心动力支持。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-blue-600 pl-4">{t.products}</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><button onClick={() => onNavigate(Section.PRODUCTS)} className="hover:text-blue-500 transition-colors">JCOE 渐进成型机</button></li>
              <li><button onClick={() => onNavigate(Section.PRODUCTS)} className="hover:text-blue-500 transition-colors">XB 双边铣边机</button></li>
              <li><button onClick={() => onNavigate(Section.PRODUCTS)} className="hover:text-blue-500 transition-colors">NHJ 焊管内焊机</button></li>
              <li><button onClick={() => onNavigate(Section.PRODUCTS)} className="hover:text-blue-500 transition-colors">机械扩径机</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-blue-600 pl-4">{t.about}</h4>
            <ul className="space-y-4 text-gray-400 text-sm font-medium">
              <li><button onClick={() => onNavigate(Section.ABOUT)} className="hover:text-blue-500 transition-colors">{t.about_overview}</button></li>
              <li><button onClick={() => onNavigate(Section.ABOUT)} className="hover:text-blue-500 transition-colors">{t.about_history}</button></li>
              <li><button onClick={() => onNavigate(Section.ABOUT)} className="hover:text-blue-500 transition-colors">{t.about_honors}</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-blue-600 pl-4">{t.contact}</h4>
            <div className="space-y-4 text-gray-400 text-sm">
              <p className="flex items-center gap-3"><i className="fa-solid fa-phone text-blue-500"></i> 0513-88211688</p>
              <p className="flex items-center gap-3"><i className="fa-solid fa-location-dot text-blue-500"></i> {tc.address_text}</p>
              <p className="text-xs mt-6 opacity-60 font-light">{tc.recruitment}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center text-gray-500 text-[10px] font-bold tracking-widest uppercase">
          <p>© 2026 JIANGSU JIURI MACHINE TOOL TECHNOLOGY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
