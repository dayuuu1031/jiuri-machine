
import { Product } from './types';

export const COLORS = {
  primary: '#004ea1',
  secondary: '#003366',
  accent: '#00a8ff',
  text: '#2d3436',
  lightGray: '#f8f9fa',
  industrialGray: 'rgba(31, 31, 31, 0.6)',
  highlight: '#00d4ff'
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

export const CORPORATE_SPIRIT = [
  { 
    word: 'Professionalism', 
    cn: '专业', 
    desc: 'Deep industrial expertise and rigorous technical standards.', 
    cnDesc: '深厚的行业沉淀与严苛的技术标准。',
    icon: 'fa-microchip'
  },
  { 
    word: 'Focus', 
    cn: '专注', 
    desc: 'Unwavering commitment to core pipe-forming equipment.', 
    cnDesc: '始终如一，深耕直缝焊管核心装备领域。',
    icon: 'fa-bullseye'
  },
  { 
    word: 'Craftsmanship', 
    cn: '精工', 
    desc: 'Precision engineering and pursuit of absolute quality.', 
    cnDesc: '精益求精，对每一个零件、每一道工序的极致追求。',
    icon: 'fa-compass-drafting'
  },
  { 
    word: 'Innovation', 
    cn: '创新', 
    desc: 'Breaking monopolies with self-developed high-end tech.', 
    cnDesc: '坚持自主研发，不断突破行业技术瓶颈。',
    icon: 'fa-lightbulb'
  }
];

export const CORE_VALUES = [
  { 
    id: '01', 
    title: '市场导向', 
    subtitle: '以客户为中心', 
    enTitle: 'Market Orientation', 
    enSubtitle: 'Customer-Centric',
    icon: 'fa-users-gear' 
  },
  { 
    id: '02', 
    title: '技术引领', 
    subtitle: '以创新驱动发展', 
    enTitle: 'Technological Leadership', 
    enSubtitle: 'Innovation-Led',
    icon: 'fa-diagram-project' 
  },
  { 
    id: '03', 
    title: '质量为本', 
    subtitle: '以品质赢得信任', 
    enTitle: 'Quality as Foundation', 
    enSubtitle: 'Quality Foundation of Trust',
    icon: 'fa-shield-halved' 
  },
  { 
    id: '04', 
    title: '高效务实', 
    subtitle: '以效益促进成长', 
    enTitle: 'Efficiency & Pragmatism', 
    enSubtitle: 'Efficiency for Growth',
    icon: 'fa-bolt-lightning' 
  },
  { 
    id: '05', 
    title: '安全环保', 
    subtitle: '以责任践行使命', 
    enTitle: 'Safety & Environment', 
    enSubtitle: 'Safety Responsibility',
    icon: 'fa-leaf' 
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
      about_tech: '制造能力',
      products: '产品展示',
      products_core: '核心设备',
      products_video: '产品视频',
      advantages: '核心优势',
      contact: '联系我们',
      lang: 'English'
    },
    hero: {
      title: '久专于技 · 日臻于精',
      sub: '专注JCOE/UOE直缝焊管装备',
      tagline: '赋能全球之冠产业高质量发展',
      btn1: '搜索核心产品',
      btn2: '在线咨询',
      mission_title: '企业使命',
      mission_text: '专注焊管装备，赋能全球制管产业高质量发展',
      vision_title: '企业愿景',
      vision_text: '成为全球领先的 JCOE/UOE 制管装备解决方案提供商',
      values_title: '价值观',
      values_text: '创新 · 精工 · 专业 · 可靠',
      brand_prop_1: '久专于技，久日以工程师精神为全球客户提供值得信赖的制管解决方案。',
      brand_prop_2: '以精密机械连接世界。',
      industry_tag: '赋能核心产业',
      industry_title: '赋能核心能源产业',
      partners_title: '合作伙伴',
      partners_sub: '与全球能源领军企业及行业标杆并肩前行，共创制管未来'
    },
    about: {
      overview_title: '企业介绍',
      overview_text: '江苏久日机床科技有限公司（JIANGSU JIURI MACHINE TOOL）专注于JCOE/UOE直缝焊管成套生产线装备的研发与制造。我们致力于为全球石油、天然气、氢能、风能及城市管网建设提供高品质、高稳定性的管材成型装备，助力全球能源工业高质量发展。公司占地总面积66000平。总装基地11000平，办公研发基地3000平，生产基地15000平。',
      main_product: '核心产品：JCOE / UOE 全工艺管材成型生产线',
      culture_title: '企业文化',
      mission: '使命',
      mission_text: '专注焊管装备研发，提升中国制造核心竞争力。',
      vision: '愿景',
      vision_text: '成为全球领先的直缝焊管成套装备供应商。',
      values: '价值观',
      values_text: '创新 · 精工 · 专业 · 可靠',
      spirit: '企业精神',
      spirit_text: '专业、专注、精工、创新',
      talent_title: '人才理念',
      talent_text: '久日科技视技术为核心生命力，致力于培养焊管装备领域的尖端工程师、工匠型制造人才及前瞻性研发人才，构建以“匠心精神”为驱动的高素质人才梯队。',
      talent_philosophy: '以技术为本，以匠心为魂，以创新为驱动。',
      talent_keywords: '崇尚技术 · 尊重匠心 · 鼓励创新',
      core_values_title: '核心价值观',
      core_values_list: ['以客户为中心', '技术领先', '质量为基', '高效产出', '安全第一']
    },
    footer: {
      desc: '专注于 JCOE/UOE 大口径直缝焊管装备研发与制造，致力为全球能源工程提供核心动力支持。',
      products_list: ['JCOE 渐进成型机', 'XB 双边铣边机', 'NHJ 焊管内焊机', '机械扩径机']
    },
    contact: {
      title: '联系我们',
      phone: '座机电话',
      mobile: '移动手机',
      email: '企业邮箱',
      address: '公司地址',
      address_text: '江苏省海安市李堡工业集中区',
      recruitment_title: '加入我们',
      recruitment: '招聘联系：我们正在寻找优秀人才！请将您的个人简历发送至企业邮箱。'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      about_overview: 'Overview',
      about_culture: 'Culture',
      about_history: 'History',
      about_honors: 'Honors',
      about_tech: 'Manufacturing',
      products: 'Products',
      products_core: 'Core Equipment',
      products_video: 'Videos',
      advantages: 'Advantages',
      contact: 'Contact',
      lang: '中文'
    },
    hero: {
      title: 'Expertise & Excellence',
      sub: 'Specialist in JCOE / UOE Pipe Forming Equipment',
      tagline: 'Empowering Global Energy Infrastructure',
      btn1: 'Search Core Products',
      btn2: 'Inquiry Online',
      mission_title: 'Mission',
      mission_text: 'Empowering the global pipe-making industry through specialized welding equipment.',
      vision_title: 'Vision',
      vision_text: 'To be the world’s leading provider of JCOE/UOE pipe equipment solutions.',
      values_title: 'Values',
      values_text: 'Innovation · Precision · Professionalism · Reliability',
      brand_prop_1: 'Focused on core pipe-making technologies, Jiuri delivers reliable, engineer-driven solutions trusted by customers worldwide.',
      brand_prop_2: 'Connecting the world through precision machinery.',
      industry_tag: 'Industrial Empowerment',
      industry_title: 'Empowering Core Energy Industries',
      partners_title: 'Partners',
      partners_sub: 'Working alongside global energy leaders and industry benchmarks to create the future of pipe-making.'
    },
    about: {
      overview_title: 'Company Overview',
      overview_text: 'Jiangsu Jiuri Machine Tool Technology Co., Ltd. focuses on the R&D and manufacturing of JCOE/UOE longitudinal welded pipe production lines. We provide high-quality pipe forming equipment for global oil, gas, hydrogen, and wind energy sectors. The total area of the company is 66,000 square meters. Final assembly base 11,000 sqm, R&D base 3,000 sqm, and production base 15,000 sqm.',
      main_product: 'Core Product: JCOE / UOE Full Process Pipe Forming Lines',
      culture_title: 'Corporate Culture',
      mission: 'Mission',
      mission_text: 'Focus on pipe equipment R&D, enhancing the core competitiveness of Chinese manufacturing.',
      vision: 'Vision',
      vision_text: 'To become the world’s leading supplier of complete straight seam welded pipe equipment.',
      values: 'Values',
      values_text: 'Innovation · Precision · Professional · Reliable',
      spirit: 'Spirit',
      spirit_text: 'Professionalism, Focus, Craftsmanship, Innovation',
      talent_title: 'Talent Philosophy',
      talent_text: 'Jiuri views technology as the core life force, committed to cultivating cutting-edge engineers, craftsman-type manufacturing talents, and forward-looking R&D talents.',
      talent_philosophy: 'Technology as the foundation, craftsmanship as the spirit, innovation as the driving force.',
      talent_keywords: 'Advocate Tech · Respect Craft · Encourage Innovation',
      core_values_title: 'Core Values',
      core_values_list: ['Customer Centric', 'Tech Leadership', 'Quality First', 'High Efficiency', 'Safety Always']
    },
    footer: {
      desc: 'Focused on R&D and manufacturing of JCOE/UOE large-diameter longitudinal welded pipe equipment, committed to providing core power support for global energy engineering.',
      products_list: ['JCOE Progressive Forming Machine', 'XB Dual-side Edge Milling Machine', 'NHJ Internal Pipe Welder', 'Mechanical Pipe Expander']
    },
    contact: {
      title: 'Contact Us',
      phone: 'Office Tel',
      mobile: 'Mobile',
      email: 'E-mail',
      address: 'Location',
      address_text: 'Libao Industrial Zone, Haian City, Jiangsu Province, China',
      recruitment_title: 'Join Our Team',
      recruitment: 'Careers: We are looking for talents! Please send your resume to our official email address.'
    }
  }
};

export const INDUSTRIES = [
  { name: '石油', nameEn: 'Oil', img: 'https://i.postimg.cc/28Z5p5L1/shi-you.jpg', icon: 'fa-oil-well' },
  { name: '天然气', nameEn: 'Natural Gas', img: 'https://i.postimg.cc/fWFbgdyd/tian-ran-qi.jpg', icon: 'fa-fire-flame-simple' },
  { name: '氢能', nameEn: 'Hydrogen', img: 'https://i.postimg.cc/kXb5r5RW/qing-neng.png', icon: 'fa-vial-circle-check' },
  { name: '风能', nameEn: 'Wind Power', img: 'https://i.postimg.cc/B67v3LCg/feng-dian-ta-tong.jpg', icon: 'fa-wind' },
  { name: '城市管网', nameEn: 'Urban Grid', img: 'https://i.postimg.cc/ZqC4QkY4/cheng-shi-guan-wang-tu.jpg', icon: 'fa-city' }
];

export const HONORS = [
  { 
    img: 'https://i.postimg.cc/ZY24JRRh/24834bb6-4af0-47b6-9e9e-fd7132353488.png', 
    cn: '资信等级证书', 
    en: 'Credit Rating Certificate' 
  },
  { 
    img: 'https://i.postimg.cc/kMzq7443/43a92fa5-65b7-4312-b399-4f250304eb65.png', 
    cn: '质量服务示范单位等级证书', 
    en: 'Quality Service Demonstration Unit Rating Certificate' 
  },
  { 
    img: 'https://i.postimg.cc/zD68qBBm/9001ren-zheng-zhong-wen-ban-(2)-fu-ben.jpg', 
    cn: '质量管理体系认证', 
    en: 'Quality Management System Certification' 
  },
  { 
    img: 'https://i.postimg.cc/J0fLxTgP/9f0f26fd-18a9-40f9-b4a5-fee902683e2a.png', 
    cn: '售后服务守信单位等级证书', 
    en: 'After-sales Service Creditworthy Unit Rating Certificate' 
  },
  { 
    img: 'https://i.postimg.cc/3rVY3RRy/b2e0ffe7-f512-4cd6-860a-aff81aff8b0f.png', 
    cn: '诚信经营示范单位等级证书', 
    en: 'Integrity Management Demonstration Unit Rating Certificate' 
  },
  { 
    img: 'https://i.postimg.cc/Y2ZMt99G/b4d0b622-e268-4407-92ee-8e8ee93d6886.png', 
    cn: '信用等级证书', 
    en: 'Credit Grade Certificate' 
  },
  { 
    img: 'https://i.postimg.cc/WpCTs33k/cb1aa8a6-4bf5-41c8-8d05-efa640a6fb66.png', 
    cn: '重合同守信用单位等级证书', 
    en: 'Contract-honoring and Credit-worthy Unit Rating Certificate' 
  },
  { 
    img: 'https://i.postimg.cc/8k9NT55M/eb9cdc0a-327c-49db-abae-ddcbf3318bb1.png', 
    cn: '中国诚信经理人认证证书', 
    en: 'China Honest Manager Certification' 
  },
  { 
    img: 'https://i.postimg.cc/66gtB33T/ruan-jian-zhe-zuo-quan-zheng-1-fu-ben.jpg', 
    cn: '计算机软件著作权登记证书', 
    en: 'Computer Software Copyright Registration Certificate' 
  },
  { 
    img: 'https://i.postimg.cc/h46cKjjf/ruan-jian-zhe-zuo-quan-zheng-2-fu-ben.jpg', 
    cn: '计算机软件著作权登记证书', 
    en: 'Computer Software Copyright Registration Certificate' 
  },
  { 
    img: 'https://i.postimg.cc/v8kbGBBw/gao-qi-zheng-shu-fu-ben.jpg', 
    cn: '高新技术企业证书', 
    en: 'High-Tech Enterprise Certificate' 
  }
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
