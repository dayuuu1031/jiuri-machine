
import { Product } from './types';

export const COLORS = {
  primary: '#004ea1',
  secondary: '#003366',
  accent: '#00a8ff',
  text: '#2d3436',
  lightGray: '#f8f9fa'
};

export const HISTORY_ITEMS = [
  {
    year: '2006',
    cn: '公司成立，专注钣金机械及焊管装备研发制造',
    en: 'Established, focusing on sheet-metal machinery and welded pipe equipment R&D and manufacturing.'
  },
  {
    year: '2010',
    cn: '新工厂建成投产，聚焦石油制管装备技术升级与研发',
    en: 'New plant commissioned, accelerating technological upgrades for oil & gas pipe equipment.'
  },
  {
    year: '2012',
    cn: '首台 JCO 成型设备成功交付，奠定国内 JCOE 技术布局基础',
    en: 'First JCO forming system successfully delivered, laying the foundation for Jiuri’s domestic JCOE deployment.'
  },
  {
    year: '2018',
    cn: '首条 JCOE 成套生产线出口乌克兰国家石油公司，开启久日国际化进程',
    en: 'Jiuri successfully delivered its first complete JCOE production line to Ukraine’s national oil company, marking the official launch of Jiuri’s global expansion.'
  },
  {
    year: '2023',
    cn: '全球化布局加速，成为国际知名的 JCOE / UOE 装备制造企业',
    en: 'Global footprint expanded, becoming an internationally recognized manufacturer of JCOE/UOE pipe-forming equipment.'
  },
  {
    year: '2026',
    cn: '持续研发高品质、高标准制管装备，迈向行业技术新高度',
    en: 'Advancing toward higher precision and quality standards through continuous innovation in pipe-making technology.'
  }
];

export const TRANSLATIONS = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      about_overview: '企业介绍',
      about_culture: '企业文化',
      about_history: '发展历程',
      about_honors: '荣誉资质',
      about_tech: '技术实力',
      products: '产品展示',
      products_core: '核心设备展示',
      news: '新闻中心',
      contact: '联系我们',
      lang: 'English'
    },
    hero: {
      title: '久专于技 · 日臻于精',
      sub: '专注JCOE/UOE直缝焊管装备',
      tagline: '赋能全球之冠产业高质量发展',
      btn1: '搜索核心产品',
      btn2: '在线咨询',
      industry_tag: '赋能核心产业',
      industry_title: '赋能核心能源产业'
    },
    about: {
      overview_title: '企业介绍',
      overview_text: '江苏久日机床科技有限公司（JIANGSU JIURI MACHINE TOOL）专注于JCOE/UOE直缝焊管成套生产线装备的研发与制造。我们致力于为全球石油、天然气、氢能、风能及城市管网建设提供高品质、高稳定性的管材成型装备，助力全球能源工业高质量发展。',
      main_product: '核心产品：JCOE / UOE 全工艺管材成型生产线',
      culture_title: '企业文化',
      mission: '使命',
      mission_text: '专注焊管装备研发，提升中国制造核心竞争力。',
      vision: '愿景',
      vision_text: '成为全球领先的直缝焊管成套装备供应商。',
      values: '价值观',
      values_text: '创新 · 精工 · 专业 · 可靠',
      spirit: '企业精神',
      spirit_text: '专业、专注、匠心、创新',
      core_values_title: '核心价值',
      core_values_list: ['以客户为中心', '技术领先', '质量为基', '高效产出', '安全第一']
    },
    contact: {
      title: '联系我们',
      phone: '座机电话',
      mobile: '移动手机',
      email: '企业邮箱',
      address: '公司地址',
      address_text: '江苏省海安市李堡工业集中区',
      recruitment_title: '加入我们 / Join Us',
      recruitment: '招聘联系：请将简历发送至企业邮箱'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      about_overview: 'Company Overview',
      about_culture: 'Corporate Culture',
      about_history: 'History',
      about_honors: 'Honors',
      about_tech: 'Tech Strength',
      products: 'Products',
      products_core: 'Core Equipment',
      news: 'News Center',
      contact: 'Contact Us',
      lang: '中文'
    },
    hero: {
      title: 'Mastering Technology with Dedication',
      sub: 'Specialist in JCOE / UOE Longitudinal Welded Pipe Equipment',
      tagline: 'Empowering the Global Pipe Manufacturing Industry',
      btn1: 'Search Core Products',
      btn2: 'Consult Now',
      industry_tag: 'Industrial Empowerment',
      industry_title: 'Empowering Core Energy Industries'
    },
    about: {
      overview_title: 'Company Overview',
      overview_text: 'Jiangsu Jiuri Machine Tool Technology Co., Ltd. focuses on JCOE/UOE longitudinal welded pipe equipment R&D. We serve Oil, Gas, Hydrogen, Wind Power and Urban Pipeline industries with high-performance manufacturing solutions.',
      main_product: 'Main Product: JCOE / UOE Full Process Pipe Forming Lines',
      culture_title: 'Corporate Culture',
      mission: 'Mission',
      mission_text: 'Dedicated to advancing welding pipe equipment and Chinese manufacturing.',
      vision: 'Vision',
      vision_text: 'To emerge as the world’s leading provider of full process pipe forming lines.',
      values: 'Values',
      values_text: 'Innovation · Precision · Expertise · Trustworthiness',
      spirit: 'Spirit',
      spirit_text: 'Professionalism, Focus, Craftsmanship, Innovation',
      core_values_title: 'Core Values',
      core_values_list: ['Customer-Centric', 'Tech Leadership', 'Quality Foundation', 'Efficiency', 'Safety']
    },
    contact: {
      title: 'Contact Us',
      phone: 'Telephone',
      mobile: 'Mobile',
      email: 'Email',
      address: 'Address',
      address_text: 'Libao Industrial Zone, Haian City, Jiangsu, China',
      recruitment_title: 'Join Us / Recruitment',
      recruitment: 'Recruitment: Please send your CV to our corporate email.'
    }
  }
};

export const INDUSTRIES = [
  { name: '石油', nameEn: 'Oil', img: 'https://i.postimg.cc/28Z5p5L1/shi-you.jpg', icon: 'fa-oil-well' },
  { name: '天然气', nameEn: 'Gas', img: 'https://i.postimg.cc/fWFbgdyd/tian-ran-qi.jpg', icon: 'fa-fire-flame-simple' },
  { name: '氢能', nameEn: 'Hydrogen', img: 'https://i.postimg.cc/kXb5r5RW/qing-neng.png', icon: 'fa-vial-circle-check' },
  { name: '风能', nameEn: 'Wind/Clean Energy', img: 'https://i.postimg.cc/B67v3LCg/feng-dian-ta-tong.jpg', icon: 'fa-wind' },
  { name: '城市管网', nameEn: 'Urban Pipeline', img: 'https://i.postimg.cc/ZqC4QkY4/cheng-shi-guan-wang-tu.jpg', icon: 'fa-city' }
];

export const HONORS = [
  'https://i.postimg.cc/NjbR4XLB/gao-qi-zheng-shu.jpg',
  'https://i.postimg.cc/0QKmPHnC/9001ren-zheng-zhong-wen-ban-(1)-fu-ben.jpg',
  'https://i.postimg.cc/RhrtFQp6/9001ren-zheng-zhong-wen-ban-(2)-fu-ben.jpg',
  'https://i.postimg.cc/2jvvtM3g/jiang-su-jiu-ri-ji-chuang-ke-ji-you-xian-gong-si-zi-xin-zheng-shu-fu-ben.png',
  'https://i.postimg.cc/MHkBTb3j/ruan-jian-zhe-zuo-quan-zheng-1-fu-ben.jpg',
  'https://i.postimg.cc/qqfKRXD6/ruan-jian-zhe-zuo-quan-zheng-2-fu-ben.jpg'
];

export const PRODUCTS: (Product & { nameEn: string, descEn: string })[] = [
  {
    id: 'xb',
    name: 'XB – 钢板双边铣边机',
    nameEn: 'XB – Dual-Side Plate Milling Machine',
    category: 'Milling',
    image: 'https://i.postimg.cc/Yqv130Y4/image.png',
    description: '用于JCOE生产线钢板两长边的精密铣削加工，支持各种复杂坡口。',
    descEn: 'Used for precision bevel processing of plate edges in JCOE production lines.',
    features: ['Bevel processing', 'Digital control', 'Auto-centering']
  },
  {
    id: 'yw2',
    name: 'YW2 – 钢板双边预弯机',
    nameEn: 'YW2 – Dual-Side Plate Pre-Bending Machine',
    category: 'Pre-bending',
    image: 'https://i.postimg.cc/6psGf09w/image.png',
    description: '框架式双模系统，对钢板两边缘进行高效预弯，消除成型死区。',
    descEn: 'Frame-type dual-mold system for efficient pre-bending of plate edges.',
    features: ['Frame structure', 'Dual-mold system', 'High precision']
  },
  {
    id: 'jco',
    name: 'JCO 成型机',
    nameEn: 'JCO Forming Machine',
    category: 'Forming',
    image: 'https://i.postimg.cc/SN9nRMcH/image.png',
    description: '久日核心专利产品，渐进式成型工艺，是大口径管材的核心品质基础。',
    descEn: 'Core quality foundation, utilizing patented incremental JCO forming process.',
    features: ['8000t-12000t', 'Incremental forming', 'PLC Control']
  },
  {
    id: 'jhf',
    name: 'JHF – 钢管合缝机',
    nameEn: 'JHF – Pipe Tack-Welding Machine',
    category: 'Tack-welding',
    image: 'https://i.postimg.cc/d1X0ts3V/image.png',
    description: '对成型后的钢管进行精确合缝与高速预焊。',
    descEn: 'Ensures continuous alignment and high-speed tack welding of pipes.',
    features: ['Continuous alignment', 'Laser tracking', 'High speed']
  },
  {
    id: 'nhj',
    name: 'NHJ – 内焊机',
    nameEn: 'NHJ – Internal Welding Machine',
    category: 'Welding',
    image: 'https://i.postimg.cc/FHgV6RsH/image.png',
    description: '多丝埋弧焊工艺，适配 Φ406mm-Φ1420mm 钢管内缝焊接。',
    descEn: 'Multi-wire SAW process, suitable for Φ406mm-Φ1420mm pipe internal welding.',
    features: ['SAW process', 'Multi-wire', 'Internal seam']
  },
  {
    id: 'whj',
    name: '钢管外焊机',
    nameEn: 'External Welding Machine',
    category: 'Welding',
    image: 'https://i.postimg.cc/kM6FmwXc/image.png',
    description: '全自动外缝焊接，同时进行椭圆度校正，确保管材品质。',
    descEn: 'Automated external seam welding with ovality correction feature.',
    features: ['Auto welding', 'Ovality correction', 'High efficiency']
  },
  {
    id: 'dl',
    name: '管口倒棱机',
    nameEn: 'Pipe End Beveling Machine',
    category: 'Finishing',
    image: 'https://i.postimg.cc/13HDHjJ4/image.png',
    description: '对钢管两端进行平头、倒棱加工，满足工地安装要求。',
    descEn: 'End-facing and beveling processing for pipe installation requirements.',
    features: ['End-facing', 'Beveling', 'Precision cut']
  },
  {
    id: 'kjj',
    name: 'KJJ — 扩径机',
    nameEn: 'KJJ — Pipe Expander',
    category: 'Finishing',
    image: 'https://i.postimg.cc/sx7hZ6M9/image.png',
    description: '机械扩径工艺，范围 Φ406mm～1420mm，大幅提升管材几何尺寸精度。',
    descEn: 'Mechanical expansion process for Φ406mm～1420mm pipe diameter adjustment.',
    features: ['Mechanical expansion', 'Stress relief', 'Size precision']
  },
  {
    id: 'sy',
    name: '水压试验机',
    nameEn: 'Hydrostatic Pipe Testing Machine',
    category: 'Testing',
    image: 'https://i.postimg.cc/6p9vyhtw/image.png',
    description: '采用油水平衡原理，对成品钢管进行严苛的压力性能测试。',
    descEn: 'Stringent pressure testing using the oil-water balance principle.',
    features: ['Pressure test', 'Safety record', 'High pressure']
  }
];
