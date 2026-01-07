
import React from 'react';

const industries = [
  { name: '石油', img: 'https://i.postimg.cc/28Z5p5L1/shi-you.jpg', icon: 'fa-oil-well' },
  { name: '天然气', img: 'https://i.postimg.cc/fWFbgdyd/tian-ran-qi.jpg', icon: 'fa-fire-flame-simple' },
  { name: '氢能', img: 'https://i.postimg.cc/kXb5r5RW/qing-neng.png', icon: 'fa-vial' },
  { name: '风能', img: 'https://i.postimg.cc/B67v3LCg/feng-dian-ta-tong.jpg', icon: 'fa-wind' },
  { name: '城市管网', img: 'https://i.postimg.cc/ZqC4QkY4/cheng-shi-guan-wang-tu.jpg', icon: 'fa-city' }
];

const IndustrySection: React.FC = () => {
  return (
    <section id="industry" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Industry Application</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">多元化行业应用</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {industries.map((item) => (
            <div key={item.name} className="relative group w-full sm:w-[45%] lg:w-[18%] h-[400px] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-4">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full img-fit transition-transform duration-700 group-hover:scale-125" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg flex items-center justify-center text-white mb-4">
                  <i className={`fa-solid ${item.icon} text-xl`}></i>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  为{item.name}运输提供高品质、高稳定性的直缝焊管装备支持。
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;
