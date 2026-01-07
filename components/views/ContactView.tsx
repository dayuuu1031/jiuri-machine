
import React from 'react';
import { TRANSLATIONS } from '../../constants';

interface ContactViewProps {
  lang: 'zh' | 'en';
}

const ContactView: React.FC<ContactViewProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;

  return (
    <div className="pt-24 min-h-screen bg-gray-50 animate-fadeIn">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slideUp">
            <h2 className="text-5xl font-black text-gray-900 mb-16">{t.title}</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-[#004ea1] text-2xl flex-shrink-0 transition-transform group-hover:scale-110">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-2">{t.phone}</p>
                  <p className="text-3xl font-black text-gray-800 tracking-tighter">0513-88211688</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-[#004ea1] text-2xl flex-shrink-0 transition-transform group-hover:scale-110">
                  <i className="fa-solid fa-mobile-screen"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-2">{t.mobile}</p>
                  <p className="text-3xl font-black text-gray-800 tracking-tighter">18801759985</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-[#004ea1] text-2xl flex-shrink-0 transition-transform group-hover:scale-110">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-2">{t.email}</p>
                  <p className="text-2xl font-black text-gray-800 underline decoration-blue-500/30 underline-offset-8">284933015@qq.com</p>
                </div>
              </div>

              <div className="flex gap-8 items-start group">
                <div className="w-16 h-16 bg-blue-100 rounded-3xl flex items-center justify-center text-[#004ea1] text-2xl flex-shrink-0 transition-transform group-hover:scale-110">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-2">{t.address}</p>
                  <p className="text-xl font-black text-gray-800 leading-snug">{t.address_text}</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-br from-[#004ea1] to-blue-800 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-2xl font-black mb-4">{t.recruitment_title}</h4>
                <p className="font-bold opacity-80 leading-relaxed text-lg">{t.recruitment}</p>
              </div>
              <i className="fa-solid fa-user-plus absolute -right-10 -bottom-10 text-9xl opacity-10 group-hover:scale-110 transition-transform"></i>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="bg-white rounded-[3rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden border border-gray-100 min-h-[600px] animate-slideUp delay-200">
            <div className="h-full w-full bg-slate-100 flex items-center justify-center text-gray-400 text-center p-16">
               <div className="max-w-md">
                  <i className="fa-solid fa-map-location-dot text-8xl mb-10 text-blue-200"></i>
                  <h3 className="font-black text-2xl text-gray-800 mb-4">江苏久日机床科技有限公司</h3>
                  <p className="text-sm font-bold opacity-60 leading-relaxed">
                    江苏省海安市李堡工业集中区<br />
                    Libao Industrial Concentration Zone, Haian City, Jiangsu Province
                  </p>
                  <div className="mt-10 px-8 py-4 border-2 border-dashed border-gray-300 rounded-2xl text-xs font-black uppercase tracking-widest">
                    Google / Baidu Map Placeholder
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
