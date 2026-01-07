
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800" 
                alt="Factory" 
                className="w-full h-auto img-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-600 -z-0 rounded-2xl hidden md:block opacity-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-blue-500 rounded-full opacity-20 hidden md:block"></div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-8">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">公司简介</span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">十五年深耕机床研发<br />铸就工业之基</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              江苏久日机床科技有限公司（Jiuri Machine Tool）是一家集研发、设计、制造、销售及服务于一体的国家高新技术企业。我们专注于数控机床中高端市场的开拓。
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              凭借深厚的行业积淀和对品质的极致追求，公司已开发出一系列具有自主知识产权的立式、卧式加工中心，以及精密数控车床。我们的设备广泛应用于汽车、模具、通用机械及航空航天等多个核心工业领域。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 flex-shrink-0 flex items-center justify-center rounded-lg text-blue-600">
                  <i className="fa-solid fa-award text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">卓越品质</h4>
                  <p className="text-sm text-gray-500">每一台设备均通过严格的德国标准品质检测流程。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 flex-shrink-0 flex items-center justify-center rounded-lg text-blue-600">
                  <i className="fa-solid fa-headset text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">贴心服务</h4>
                  <p className="text-sm text-gray-500">24小时响应，全国覆盖的快速售后保障体系。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
