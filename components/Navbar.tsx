
import React, { useState, useEffect } from 'react';
import { TRANSLATIONS } from '../constants';
import { Section } from '../types';

interface NavbarProps {
  lang: 'zh' | 'en';
  setLang: (l: 'zh' | 'en') => void;
  currentView: Section;
  onNavigate: (v: Section, tab?: any) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  const brandBlue = "#004ea1";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.home, view: Section.HOME },
    { 
      name: t.about, 
      view: Section.ABOUT,
      dropdown: [
        { name: t.about_overview, tab: 'overview' },
        { name: t.about_culture, tab: 'culture' },
        { name: t.about_history, tab: 'history' },
        { name: t.about_honors, tab: 'honors' },
        { name: t.about_tech, tab: 'tech' }
      ]
    },
    { 
      name: t.products, 
      view: Section.PRODUCTS,
      dropdown: [
        { name: t.products_core, tab: 'core' },
        { name: t.products_video, tab: 'video' }
      ]
    },
    { name: t.advantages, view: Section.ADVANTAGES },
    { name: t.contact, view: Section.CONTACT }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-[#000a1a]/95 backdrop-blur-md shadow-2xl py-3 border-b border-[#00d4ff]/10' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        <div onClick={() => onNavigate(Section.HOME)} className="flex items-center space-x-3 cursor-pointer group shrink-0">
          <div className={`bg-white p-1 rounded-none shadow-lg flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-105 border border-gray-100 ${isScrolled ? 'h-10 w-10' : 'h-16 w-16'}`}>
            <img src="https://i.postimg.cc/PfFjfq6G/jiang-su-jiu-rilogo-Picsart-Background-Remover.png" alt="JIURI LOGO" className="h-full w-full object-contain" />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className={`font-black tracking-tighter leading-none transition-all duration-500 ${isScrolled ? 'text-xl' : 'text-3xl'}`} style={{ color: isScrolled ? '#ffffff' : brandBlue }}>江苏久日</h1>
            <p className={`font-black tracking-tight uppercase transition-all duration-500 mt-1 ${isScrolled ? 'text-[7px]' : 'text-[10px]'}`} style={{ color: isScrolled ? 'rgba(255,255,255,0.6)' : brandBlue }}>Jiangsu Jiuri Machine Tool Technology</p>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <div key={item.name} className="relative group h-full flex items-center">
              <button 
                onClick={() => onNavigate(item.view)}
                className={`flex items-center gap-2 font-bold text-base tracking-widest transition-all hover:text-blue-400 group h-full py-4 ${currentView === item.view ? 'text-[#00d4ff]' : (isScrolled ? 'text-white' : 'text-white drop-shadow-md')}`}
              >
                {item.name}
                {item.dropdown && <i className="fa-solid fa-chevron-down text-[10px] opacity-40 group-hover:rotate-180 transition-transform"></i>}
              </button>
              
              {item.dropdown && (
                <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-max min-w-[160px] bg-[#0f0f0f]/95 backdrop-blur-[20px] rounded-none border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-[1001] animate-nav-dropdown mt-1 border-t-2 border-blue-600">
                  <div className="py-2 flex flex-col items-center">
                    {item.dropdown.map(sub => (
                      <button key={sub.name} onClick={() => onNavigate(item.view, sub.tab)} className="w-full text-center px-6 py-3 text-xs font-bold text-gray-400 hover:text-white hover:bg-[#00d4ff]/10 transition-all block border-b border-white/5 last:border-none">
                        <span className="relative z-10 whitespace-nowrap">{sub.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center shrink-0">
          <div className={`flex items-center border rounded-none overflow-hidden backdrop-blur-md transition-all duration-500 ${isScrolled ? 'border-white/10 bg-white/5' : 'border-white/20 bg-black/10'}`}>
            <button onClick={() => setLang('zh')} className={`px-4 py-2 text-[11px] font-black tracking-widest transition-all duration-300 relative group ${lang === 'zh' ? (isScrolled ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white bg-white/20') : 'text-gray-400 hover:text-white'}`}>中</button>
            <div className={`w-[1px] h-3 bg-white/10`}></div>
            <button onClick={() => setLang('en')} className={`px-4 py-2 text-[11px] font-black tracking-widest transition-all duration-300 relative group ${lang === 'en' ? (isScrolled ? 'text-[#00d4ff] bg-[#00d4ff]/10' : 'text-white bg-white/20') : 'text-gray-400 hover:text-white'}`}>EN</button>
          </div>
          <button className="lg:hidden ml-6 text-2xl text-white transition-transform active:scale-90" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}><i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i></button>
        </div>
      </div>

      <div className={`lg:hidden fixed inset-0 bg-[#000a1a] z-[999] p-8 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
         <div className="flex flex-col space-y-6 overflow-y-auto max-h-screen pt-24 text-center">
            {navItems.map(item => (
              <div key={item.name} className="flex flex-col">
                <button onClick={() => { onNavigate(item.view); setIsMobileMenuOpen(false); }} className="text-xl font-bold text-white border-b border-white/10 pb-4 mx-auto w-full max-w-xs">{item.name}</button>
              </div>
            ))}
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
