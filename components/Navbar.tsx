
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
        { name: t.products_core, tab: 'all' }
      ]
    },
    { name: t.news, view: Section.NEWS },
    { name: t.contact, view: Section.CONTACT }
  ];

  return (
    <nav className={`fixed top-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? 'bg-white/98 backdrop-blur-md shadow-2xl py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section - Enlarged as requested */}
        <div 
          onClick={() => onNavigate(Section.HOME)} 
          className="flex items-center space-x-6 group cursor-pointer"
        >
          <div className={`bg-white p-1.5 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:shadow-blue-300/50 ${isScrolled ? 'h-20 w-20' : 'h-24 w-24'}`}>
            <img 
              src="https://i.postimg.cc/wTrzWQbs/jiang-su-jiu-rilogo.jpg" 
              alt="JIURI LOGO" 
              className="h-full w-full object-contain"
              style={{ mixBlendMode: 'multiply' }}
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-black tracking-tighter transition-all duration-500 leading-none ${isScrolled ? 'text-4xl text-[#004ea1]' : 'text-5xl text-white'}`}>
              江苏久日
            </span>
            <span className={`font-black tracking-[0.08em] uppercase transition-colors mt-2 ${isScrolled ? 'text-[11px] text-[#004ea1]' : 'text-[12px] text-blue-100 opacity-90'}`}>
              JIANGSU JIURI MACHINE TOOL TECHNOLOGY
            </span>
          </div>
        </div>

        {/* Desktop Navigation - Larger Font Sizes as requested */}
        <div className="hidden lg:flex items-center space-x-12">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <button 
                onClick={() => onNavigate(item.view)}
                className={`flex items-center gap-2 font-black text-lg tracking-widest transition-all hover:text-blue-400 group ${
                  currentView === item.view 
                    ? (isScrolled ? 'text-blue-600 scale-105' : 'text-blue-300 scale-105') 
                    : (isScrolled ? 'text-gray-900' : 'text-white')
                }`}
              >
                {item.name}
                {item.dropdown && <i className="fa-solid fa-chevron-down text-xs opacity-40 group-hover:rotate-180 transition-transform"></i>}
              </button>
              
              {item.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-72 bg-white rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.15)] border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <div className="py-4 px-3">
                    {item.dropdown.map(sub => (
                      <button 
                        key={sub.name}
                        onClick={() => onNavigate(item.view, sub.tab)}
                        className="w-full text-left px-8 py-5 text-sm font-black text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-2xl transition-all"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Lang Toggle - Enlarged */}
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className={`px-7 py-3 rounded-full border-2 font-black text-sm transition-all flex items-center gap-3 ${
              isScrolled 
                ? 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg' 
                : 'border-white text-white hover:bg-white hover:text-blue-900 shadow-xl'
            }`}
          >
            <i className="fa-solid fa-language text-xl"></i>
            {lang === 'zh' ? 'ENGLISH' : '中文'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden text-3xl transition-transform active:scale-90 ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Mobile Menu - Enhanced Font Sizes */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[999] p-8 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
         <div className="flex flex-col space-y-8 overflow-y-auto max-h-screen">
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center space-x-4">
                <img src="https://i.postimg.cc/wTrzWQbs/jiang-su-jiu-rilogo.jpg" className="h-16 w-auto rounded-xl shadow-md" alt="Logo" />
                <span className="text-3xl font-black text-[#004ea1]">久日科技</span>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"
              >
                <i className="fa-solid fa-xmark text-2xl"></i>
              </button>
            </div>
            {navItems.map(item => (
              <div key={item.name} className="flex flex-col">
                <button 
                  onClick={() => { onNavigate(item.view); setIsMobileMenuOpen(false); }}
                  className="text-4xl font-black text-gray-900 text-left border-b-2 border-gray-50 pb-4"
                >
                  {item.name}
                </button>
                {item.dropdown && (
                  <div className="flex flex-wrap gap-4 mt-6 mb-8">
                    {item.dropdown.map(sub => (
                      <button 
                        key={sub.name}
                        onClick={() => { onNavigate(item.view, sub.tab); setIsMobileMenuOpen(false); }}
                        className="px-6 py-3 bg-gray-100 rounded-xl text-base font-black text-gray-500 active:bg-blue-600 active:text-white transition-all"
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => { setLang(lang === 'zh' ? 'en' : 'zh'); setIsMobileMenuOpen(false); }}
              className="mt-10 w-full py-6 bg-blue-600 text-white rounded-3xl font-black tracking-widest text-xl shadow-2xl"
            >
              SWITCH TO {lang === 'zh' ? 'ENGLISH' : 'CHINESE'}
            </button>
         </div>
      </div>
    </nav>
  );
};

export default Navbar;
