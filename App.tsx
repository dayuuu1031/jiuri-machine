
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeView from './components/views/HomeView';
import AboutView from './components/views/AboutView';
import ProductsView from './components/views/ProductsView';
import NewsView from './components/views/NewsView';
import ContactView from './components/views/ContactView';
import Footer from './components/Footer';
import AIChat from './components/AIChat';
import { Section } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');
  const [currentView, setCurrentView] = useState<Section>(Section.HOME);
  const [currentAboutTab, setCurrentAboutTab] = useState<'overview' | 'culture' | 'history' | 'honors' | 'tech'>('overview');

  // Handle SPA routing manually for smoother transitions
  const navigate = (view: Section, tab?: any) => {
    setCurrentView(view);
    if (tab) setCurrentAboutTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        currentView={currentView} 
        onNavigate={navigate} 
      />
      
      <main className="transition-opacity duration-300">
        {currentView === Section.HOME && (
          <HomeView lang={lang} onExplore={() => navigate(Section.PRODUCTS)} />
        )}
        
        {currentView === Section.ABOUT && (
          <AboutView lang={lang} activeTab={currentAboutTab} onTabChange={setCurrentAboutTab} />
        )}
        
        {currentView === Section.PRODUCTS && (
          <ProductsView lang={lang} />
        )}

        {currentView === Section.NEWS && (
          <NewsView lang={lang} />
        )}

        {currentView === Section.CONTACT && (
          <ContactView lang={lang} />
        )}
      </main>

      <Footer lang={lang} onNavigate={navigate} />
      <AIChat />
    </div>
  );
};

export default App;
