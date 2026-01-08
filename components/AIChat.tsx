
import React, { useState, useRef, useEffect } from 'react';
import { askJiuriAssistant } from '../services/geminiService';

interface AIChatProps {
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: '您好！我是久日科技智能技术支持，专注JCOE/UOE直缝焊管装备咨询。请问有什么可以帮您？' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsLoading(true);

    const response = await askJiuriAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[2000]">
      {/* Floating Button */}
      <button 
        onClick={() => onToggle(!isOpen)}
        className="w-20 h-20 bg-[#004ea1] rounded-none shadow-[0_20px_50px_rgba(0,78,161,0.4)] flex items-center justify-center text-white text-3xl hover:scale-105 active:scale-95 transition-all relative group overflow-hidden border-l-4 border-[#00d4ff]"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? <i className="fa-solid fa-xmark relative z-10"></i> : <i className="fa-solid fa-microchip relative z-10 animate-pulse"></i>}
        
        {!isOpen && (
          <div className="absolute right-full mr-6 bg-slate-900 text-white text-xs font-black py-3 px-5 rounded-none border-l-2 border-[#00d4ff] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0 shadow-2xl">
             AI 技术咨询
             <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[380px] md:w-[450px] h-[650px] bg-white rounded-none shadow-[0_30px_100px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden border border-gray-100 animate-slideUp">
          {/* Header */}
          <div className="bg-slate-900 p-8 flex items-center justify-between border-l-8 border-[#004ea1]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-none flex items-center justify-center shadow-lg shadow-blue-600/30">
                <i className="fa-solid fa-robot text-white text-xl"></i>
              </div>
              <div>
                <h4 className="text-white font-black text-lg tracking-tight">久日科技 · 智能助手</h4>
                <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                   <p className="text-blue-300/60 text-[10px] font-bold uppercase tracking-widest">Expert System Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => onToggle(false)} className="text-white/20 hover:text-white transition-colors">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-grow p-8 overflow-y-auto bg-gray-50/50 space-y-6">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-none text-sm leading-relaxed shadow-sm border-l-4 ${
                  m.role === 'user' 
                    ? 'bg-[#004ea1] text-white border-blue-400 font-medium' 
                    : 'bg-white text-gray-700 border-[#004ea1] font-medium'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white px-6 py-4 rounded-none shadow-sm border border-gray-100 flex gap-2 items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-none animate-bounce"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-none animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-none animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-8 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="咨询 JCOE/UOE 装备参数..."
                className="w-full bg-gray-50 border-none rounded-none px-6 py-5 pr-16 text-sm font-bold focus:ring-2 focus:ring-blue-500/20 transition-all border-l-2 border-transparent focus:border-blue-500"
                autoFocus
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                className="absolute right-3 w-10 h-10 bg-[#004ea1] text-white rounded-none flex items-center justify-center disabled:bg-gray-200 transition-all active:scale-90"
              >
                <i className="fa-solid fa-paper-plane text-sm"></i>
              </button>
            </div>
            <p className="mt-4 text-center text-[10px] font-bold text-gray-300 uppercase tracking-widest">Powered by Jiuri Intelligence Engine</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChat;
