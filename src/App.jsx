import React, { useState, useEffect } from 'react';
import {
  Cpu, Zap, Shield, Database,
  TrendingUp, Users, Lock, Server,
  Globe, Briefcase, Coins,
  Menu, X, ChevronRight, Terminal, Activity, ArrowRight, Check,
  Phone, User, Building2, Send, CheckCircle2,
  Target, Dna, BarChart4
} from 'lucide-react';

const Logo = ({ className }) => (
  <svg className={className} viewBox="0 0 938 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M318.58 53.74L315.16 50.32H356.56L306.52 110.8L301.3 152.2H266.74L271.96 110.8L242.62 55.36L237.4 50.32H273.76L292.66 88.3L318.58 53.74ZM416.622 50.32L404.562 134.92H445.962L458.202 55.36L451.182 50.32H492.762L478.902 152.2H380.442C376.962 152.2 374.322 151.06 372.522 148.78C370.842 146.5 370.002 143.62 370.002 140.14L382.062 55.36L376.842 50.32H416.622ZM614.165 50.32L627.845 152.2H596.885L593.285 124.48H550.085L538.025 152.2H508.685L548.465 55.36L543.245 50.32H614.165ZM574.385 67.6L557.105 107.2H591.665L586.445 67.6H574.385ZM692.114 50.32L728.294 114.22L736.934 50.32H766.454L752.594 152.2H718.034L683.474 89.92L674.834 152.2H643.694L657.554 57.16L650.534 50.32H692.114ZM818.017 134.92L828.457 57.16L823.237 50.32H863.017L850.957 140.14C849.997 143.62 848.317 146.5 845.917 148.78C843.517 151.06 840.577 152.2 840.577 152.2H780.037L783.457 128.08L790.477 134.92H818.017ZM928.561 50.32L912.901 152.2H880.141L892.201 57.16L886.981 50.32H928.561Z" fill="white"/>
    <path d="M179.25 39C192.261 55.8803 200 77.0333 200 99.9941C200 153.546 157.906 197.266 105 199.871H85V191.871H69V167.871H78V152.871H81V147.871H76V137.871H86V128.871H102V136.871H105V129.84C129.116 128.353 150.341 116.181 164 98V93H167.468C172.654 84.8809 176.415 75.7635 178.397 66H175V61H179.248C179.743 57.4021 180 53.7281 180 49.9941C180 49.3275 179.989 48.6628 179.973 48H175V43H179.697C179.581 41.6569 179.432 40.3233 179.25 39ZM66 193.871H56V183.871H66V193.871ZM52 180.871H42V170.871H52V180.871ZM79 175.871H85V179.871H88V168.871H79V175.871ZM54 153.871H58V156.871H59V164.871H67V159.871H62V154.871H77V164.871H68V174.871H58V166.871H49V151.871H54V153.871ZM46 159.871H41V169.871H36V172.871H31V164.871H26V159.871H36V154.871H46V159.871ZM115 8H131V32H122V47H119V52H124V62H114V71H98V63H95V70.0312C70.8837 71.5184 49.6591 83.6905 36 101.871V106.871H32.5322C27.346 114.99 23.5852 124.108 21.6025 133.871H25V138.871H20.752C20.2569 142.469 20 146.143 20 149.877C20 150.544 20.0111 151.208 20.0273 151.871H25V156.871H20.3027C20.4192 158.214 20.5681 159.548 20.75 160.871C7.73896 143.991 0 122.838 0 99.877C0 46.3251 42.0944 2.60516 95 0H115V8ZM94 160.871H102V152.871H94V160.871ZM40 152.871H35V147.871H40V152.871ZM73 126.871H83V136.871H73V131.871H64V135.871H67V137.871H72V152.871H57V148.871H47V143.871H57V147.871H62V143.871H58V140.871H54V135.871H55V131.871H50V126.871H60V130.871H63V126.871H60V121.871H73V126.871ZM86 147.871H89V144.871H86V147.871ZM63 142.871H67V140.871H63V142.871ZM52 140.871H47V135.871H52V140.871ZM59 138.871H62V135.871H59V138.871ZM37 135.871H32V130.871H37V135.871ZM50 126.871H45V121.871H50V126.871ZM37 121.871H32V116.871H37V121.871ZM52 120.871H47V115.871H52V120.871ZM59 120.871H54V115.871H59V120.871ZM146 84H141V79H146V84ZM153 84H148V79H153V84ZM168 83H163V78H168V83ZM143 51H153V56H143V52H138V56H142V59H146V64H145V68H150V73H140V69H137V73H140V78H127V73H117V63H127V68H136V64H133V62H128V47H143V51ZM155 78H150V73H155V78ZM168 69H163V64H168V69ZM138 64H141V61H138V64ZM153 64H148V59H153V64ZM133 59H137V57H133V59ZM111 55H114V52H111V55ZM165 52H160V47H165V52ZM142 33H151V48H146V46H142V43H141V35H133V40H138V45H123V35H132V25H142V33ZM98 47H106V39H98V47ZM169 35H174V40H164V45H154V40H159V30H164V27H169V35ZM112 31H121V24H115V20H112V31ZM158 29H148V19H158V29ZM144 16H134V6H144V16Z" fill="url(#yuanji-gradient)"/>
    <defs>
      <linearGradient id="yuanji-gradient" x1="100" y1="0" x2="100" y2="199.871" gradientUnits="userSpaceOnUse">
        <stop stopColor="#CCECFF"/>
        <stop offset="0.240385" stopColor="#48DAFD"/>
        <stop offset="1" stopColor="#162974"/>
      </linearGradient>
    </defs>
  </svg>
);

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#050505] relative overflow-hidden animate-[fadeIn_0.5s_ease-out]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00b4ff]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0a4b9c]/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'about'
                  ? 'bg-gradient-to-r from-[#00b4ff] to-[#0a4b9c] text-white shadow-[0_0_15px_rgba(0,180,255,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              关于我们
            </button>
            <button
              onClick={() => setActiveTab('team')}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'team'
                  ? 'bg-gradient-to-r from-[#00b4ff] to-[#0a4b9c] text-white shadow-[0_0_15px_rgba(0,180,255,0.4)]'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              团队介绍
            </button>
          </div>
        </div>

        {activeTab === 'about' && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">
              <div className="space-y-8 text-gray-300 text-lg leading-relaxed font-medium">
                <p>
                  元基智能（YUANJI.AI）是全球领先的<strong className="text-white">行业级 AI 终端基础设施开创者</strong>。我们坚信，在通用大模型爆发的时代，真正能为企业构建护城河的，是深度定制、数据私有且能独立运转的专属算力。
                </p>
                <p>
                  我们的使命是将行业顶尖的认知体系、决策逻辑与专业能力，凝结为一台触手可及的智能终端。让 AI 跨越虚无缥缈的云端代码，化身为企业与个人主权在握的<strong className="text-[#00b4ff]">核心生息资产</strong>。
                </p>
                <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl border-l-4 border-l-[#00b4ff]">
                  <p className="text-sm text-gray-400">
                    "元基智能正引领一场从'软件订阅付费'到'物理节点生息'的生产力范式革命。一台机器，足以拉开一个时代的差距。"
                  </p>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative w-48 h-48 border border-[#00b4ff]/30 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="absolute inset-0 border border-[#00b4ff]/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-0 bg-[#00b4ff] blur-[60px] opacity-20 rounded-full"></div>
                  <Globe className="w-16 h-16 text-[#00b4ff]" />
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-16">
              <h3 className="text-2xl font-bold text-white mb-10 text-center">双引擎强力驱动</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 rounded-2xl hover:border-[#00b4ff]/40 transition-colors">
                  <Server className="w-10 h-10 text-[#00b4ff] mb-6" />
                  <h4 className="text-xl font-bold text-white mb-2">TradingBase.AI <span className="text-xs font-normal text-gray-500 ml-2 border border-white/20 px-2 py-0.5 rounded">技术引擎</span></h4>
                  <p className="text-gray-400 text-sm leading-relaxed">深耕人工智能底层技术研发的基建级科技平台，以自研多 Agent 协同系统与垂直领域深度模型为技术内核，为元基提供从算法层到应用层的全栈 AI 技术支撑。</p>
                </div>
                <div className="p-8 bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 rounded-2xl hover:border-[#00b4ff]/40 transition-colors">
                  <Globe className="w-10 h-10 text-[#00b4ff] mb-6" />
                  <h4 className="text-xl font-bold text-white mb-2">中国三信资本 <span className="text-xs font-normal text-gray-500 ml-2 border border-white/20 px-2 py-0.5 rounded">资本引擎</span></h4>
                  <p className="text-gray-400 text-sm leading-relaxed">立足香港、深耕亚太的综合性投资机构。依托国际金融机构深度合作，为元基智能构建覆盖资金链、产业链、资源链的全球化资本支撑体系与长期价值投资。</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="animate-[fadeIn_0.4s_ease-out]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#00b4ff]/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00b4ff]/5 blur-3xl group-hover:bg-[#00b4ff]/10 transition-colors"></div>
                <div className="w-20 h-20 rounded-full border border-[#00b4ff]/30 p-1 mb-6 relative">
                  <div className="absolute inset-0 bg-[#00b4ff] blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
                  <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center relative z-10 overflow-hidden">
                     <User className="w-8 h-8 text-[#00b4ff]/80" />
                  </div>
                </div>
                <div className="mb-5 relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2">联合创始人 / CEO</h4>
                  <div className="inline-block px-2 py-1 bg-[#00b4ff]/10 border border-[#00b4ff]/20 text-[#00b4ff] text-xs font-mono rounded">
                    [ 跨界资源架构师 ]
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  曾主导巨额规模的加密资产与传统量化基金运作。具备极强的全球化资本调度能力，致力于将华尔街顶尖决策逻辑封装进算力节点，重构 AI 时代的财富分配体系与终端基建。
                </p>
              </div>

              <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#00b4ff]/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
                <div className="w-20 h-20 rounded-full border border-cyan-500/30 p-1 mb-6 relative">
                  <div className="absolute inset-0 bg-cyan-500 blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
                  <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center relative z-10 overflow-hidden">
                     <Cpu className="w-8 h-8 text-cyan-500/80" />
                  </div>
                </div>
                <div className="mb-5 relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2">首席人工智能官</h4>
                  <div className="inline-block px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono rounded">
                    [ TradingBase 核心科学家 ]
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  全球顶尖 AI 算法专家，主导了元基智能"多 Agent 协同系统"与垂直领域模型的技术攻坚。在分布式算力网络与底层大模型优化领域拥有深厚造诣，构筑了平台坚实的技术壁垒。
                </p>
              </div>

              <div className="p-8 bg-[#0a0a0a] border border-white/10 rounded-3xl hover:border-[#00b4ff]/40 hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 blur-3xl group-hover:bg-yellow-500/10 transition-colors"></div>
                <div className="w-20 h-20 rounded-full border border-yellow-500/30 p-1 mb-6 relative">
                  <div className="absolute inset-0 bg-yellow-500 blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
                  <div className="w-full h-full bg-[#050505] rounded-full flex items-center justify-center relative z-10 overflow-hidden">
                     <TrendingUp className="w-8 h-8 text-yellow-500/80" />
                  </div>
                </div>
                <div className="mb-5 relative z-10">
                  <h4 className="text-2xl font-bold text-white mb-2">首席量化架构师</h4>
                  <div className="inline-block px-2 py-1 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-mono rounded">
                    [ 高频交易与风控大脑 ]
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                  拥有十余年全球顶尖量化私募实战经验。深度参与 YUANJI T 系列交易终端的策略引擎搭建，将复杂机构级交易逻辑转化为 AI 可执行动作，让机器超越人类的贪婪与恐惧。
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [reservationModalOpen, setReservationModalOpen] = useState(false);
  const [reservationModel, setReservationModel] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [liveHtkYield, setLiveHtkYield] = useState(2450.89);

  useEffect(() => {
    const yieldTimer = setInterval(() => {
      setLiveHtkYield(prev => +(prev + Math.random() * 0.05).toFixed(4));
    }, 2000);
    return () => clearInterval(yieldTimer);
  }, []);

  useEffect(() => {
    if (activeModal || reservationModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal, reservationModalOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (currentPage === 'home') {
        const sections = ['hardware', 'ecosystem', 'models', 'tokenomics'];
        let current = '';
        if (window.scrollY < 200) {
          current = '';
        } else {
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150 && rect.bottom >= 150) {
                current = `#${section}`;
                break;
              }
            }
          }
        }
        if (current !== activeSection) {
          setActiveSection(current);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage, activeSection]);

  const handleNavigate = (page, hash = '') => {
    setMobileMenuOpen(false);
    if (page === 'home') {
      if (currentPage !== 'home') {
        setCurrentPage('home');
        setTimeout(() => {
          if (hash) {
            const el = document.querySelector(hash);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo(0, 0);
          }
        }, 100);
      } else {
        if (hash) {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    } else if (page === 'about') {
      setCurrentPage('about');
      window.scrollTo(0, 0);
    }
  };

  const handleOpenReservation = (modelName) => {
    setReservationModel(modelName);
    setFormSubmitted(false);
    setReservationModalOpen(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormSubmitted(true);
    }, 600);
  };

  const navLinks = [
    { name: '首页', page: 'home', hash: '' },
    { name: 'YUANJI 终端', page: 'home', hash: '#hardware' },
    { name: '行业生态', page: 'home', hash: '#ecosystem' },
    { name: '节点型号', page: 'home', hash: '#models' },
    { name: '算力经济', page: 'home', hash: '#tokenomics' },
    { name: '关于元基', page: 'about', hash: '' },
  ];

  const isLinkActive = (link) => {
    if (link.page === 'about') return currentPage === 'about';
    if (currentPage === 'home') {
      return activeSection === link.hash;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-300 font-sans selection:bg-[#00b4ff] selection:text-white overflow-x-hidden">

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* 导航栏 */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-[#050505]/80 backdrop-blur-xl border-white/10 py-4 shadow-xl' : 'bg-transparent border-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigate('home')}>
              <Logo className="h-8 md:h-10 w-auto" />
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigate(link.page, link.hash)}
                  className={`text-sm font-bold transition-all duration-300 ${
                    isLinkActive(link)
                    ? 'text-[#00b4ff] scale-105'
                    : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isLinkActive(link) && (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00b4ff] rounded-full shadow-[0_0_8px_#00b4ff]"></span>
                  )}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-400 hover:text-white">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a0a] border-b border-white/10 px-4 py-6 space-y-4 shadow-2xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigate(link.page, link.hash)}
                className={`block w-full text-left text-base font-medium px-4 py-2 rounded-lg transition-colors ${
                  isLinkActive(link)
                  ? 'text-[#00b4ff] bg-[#00b4ff]/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {currentPage === 'home' ? (
        <>
          {/* Hero Section */}
          <section className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02]"></div>
            <div className="absolute top-[20%] left-[10%] w-[600px] h-[500px] bg-[#00b4ff]/15 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                <div className="w-full lg:w-[45%] text-center lg:text-left relative z-20">
                  <h1 className="text-[2.75rem] sm:text-5xl md:text-[4rem] lg:text-[4.5rem] font-black text-white tracking-tight mb-8 leading-[1.15]">
                    行业级 AI 终端的<br />
                    <span className="text-[#00b4ff] drop-shadow-[0_0_25px_rgba(0,180,255,0.4)] relative inline-block mt-2">
                      底层缔造者
                      <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-[#00b4ff] to-transparent rounded-full opacity-60"></span>
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-gray-400/90 mb-8 max-w-xl mx-auto lg:mx-0 font-medium leading-[1.8]">
                    为垂直行业打造专属 AI 专家矩阵。一台独立运转的专业智能终端，让顶尖决策逻辑成为你触手可及、主权在握的<strong className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">核心生息资产</strong>。
                  </p>
                </div>

                {/* 右侧：3D 智能生态终端 */}
                <div className="w-full lg:w-[55%] relative h-[500px] sm:h-[600px] flex items-center justify-center mt-10 lg:mt-0">
                  <style>
                    {`
                      @keyframes dashFlow {
                        from { stroke-dashoffset: 40; }
                        to { stroke-dashoffset: 0; }
                      }
                      .animate-dash-flow {
                        animation: dashFlow 1.5s linear infinite;
                      }
                      @keyframes float-1 { 0%, 100% { transform: translateY(0px) rotate(-4deg); } 50% { transform: translateY(-10px) rotate(-2deg); } }
                      @keyframes float-2 { 0%, 100% { transform: translateY(0px) rotate(8deg); } 50% { transform: translateY(-12px) rotate(6deg); } }
                      @keyframes float-3 { 0%, 100% { transform: translateY(0px) rotate(-10deg); } 50% { transform: translateY(-8px) rotate(-8deg); } }
                      @keyframes float-4 { 0%, 100% { transform: translateY(0px) rotate(6deg); } 50% { transform: translateY(-15px) rotate(8deg); } }
                      @keyframes float-5 { 0%, 100% { transform: translateY(0px) rotate(3deg); } 50% { transform: translateY(-8px) rotate(5deg); } }
                    `}
                  </style>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[#00b4ff]/20 to-[#00b4ff]/5 rounded-full blur-[80px] pointer-events-none"></div>

                  <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ filter: 'drop-shadow(0 0 5px rgba(0,180,255,0.5))' }}>
                    <line x1="50%" y1="50%" x2="25%" y2="20%" stroke="#00b4ff" strokeWidth="1.5" strokeDasharray="6,4" className="animate-dash-flow opacity-70" />
                    <line x1="50%" y1="50%" x2="20%" y2="70%" stroke="#00b4ff" strokeWidth="1.5" strokeDasharray="6,4" className="animate-dash-flow opacity-70" />
                    <line x1="50%" y1="50%" x2="80%" y2="15%" stroke="#00b4ff" strokeWidth="1.5" strokeDasharray="6,4" className="animate-dash-flow opacity-70" />
                    <line x1="50%" y1="50%" x2="90%" y2="50%" stroke="#00b4ff" strokeWidth="1.5" strokeDasharray="6,4" className="animate-dash-flow opacity-70" />
                    <line x1="50%" y1="50%" x2="80%" y2="85%" stroke="#00b4ff" strokeWidth="1.5" strokeDasharray="6,4" className="animate-dash-flow opacity-70" />
                  </svg>

                  {/* 中心终端 */}
                  <div className="relative z-20 w-[280px] h-[200px] bg-gradient-to-b from-[#ffffff] via-[#e2e8f0] to-[#64748b] rounded-3xl shadow-[0_50px_80px_rgba(0,0,0,0.9),_inset_0_-16px_20px_rgba(15,23,42,0.3),_inset_0_2px_4px_rgba(255,255,255,1)] flex flex-col items-center justify-start pt-7 transform hover:scale-105 transition-transform duration-700 group border border-white/50">
                    <div className="absolute top-0 left-0 w-full h-[35%] bg-gradient-to-b from-white to-transparent rounded-t-3xl pointer-events-none opacity-90"></div>
                    <div className="flex items-center gap-3 z-10 mb-4 relative">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-[inset_0_1px_5px_rgba(0,0,0,0.9),_0_1px_2px_rgba(255,255,255,0.6)]">
                        <Cpu className="w-4.5 h-4.5 text-[#00b4ff]" />
                      </div>
                      <span className="text-slate-800 font-black text-[26px] tracking-widest drop-shadow-[0_1px_1px_rgba(255,255,255,0.8)]">TradingBase</span>
                    </div>
                    <div className="absolute bottom-5 w-[88%] h-[56px] bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] rounded-xl border-t border-slate-500/60 border-x border-slate-600/30 flex justify-between items-center px-5 shadow-[inset_0_4px_15px_rgba(0,0,0,0.9),_0_3px_6px_rgba(255,255,255,0.15)] z-10">
                      <div className="flex gap-3">
                        <div className="w-7 h-3.5 bg-black rounded-[3px] border-t border-slate-600 flex justify-center items-end pb-[1.5px] shadow-inner">
                           <div className="w-4.5 h-[2px] bg-[#00b4ff] opacity-90"></div>
                        </div>
                        <div className="w-7 h-3.5 bg-black rounded-[3px] border-t border-slate-600 flex justify-center items-end pb-[1.5px] shadow-inner">
                           <div className="w-4.5 h-[2px] bg-[#00b4ff] opacity-90"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3.5">
                        <div className="w-2.5 h-2.5 bg-[#00b4ff] rounded-full shadow-[0_0_12px_#00b4ff] animate-pulse"></div>
                        <div className="w-6 h-6 rounded-full border-2 border-slate-500/80 flex items-center justify-center bg-gradient-to-b from-slate-600 to-slate-900 shadow-[0_2px_4px_rgba(0,0,0,0.8)] cursor-pointer hover:border-[#00b4ff]/50 transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-white/40"></div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute -bottom-[2px] left-[5%] w-[90%] h-6 bg-black/60 blur-md rounded-full -z-10"></div>
                  </div>

                  {/* AI 工牌 */}
                  {[
                    { anim: 'float-1 6s', pos: 'top-[12%] left-[10%]', icon: <User className="w-7 h-7 text-[#00b4ff]" />, label: '量化架构师', code: 'AGENT-01', tone: '#00b4ff' },
                    { anim: 'float-2 7s 1s', pos: 'top-[5%] right-[10%]', icon: <Target className="w-7 h-7 text-purple-400" />, label: '营销增长官', code: 'AGENT-02', tone: 'purple-500' },
                    { anim: 'float-3 6.5s 0.5s', pos: 'bottom-[15%] left-[8%]', icon: <Shield className="w-7 h-7 text-[#00b4ff]" />, label: '风控分析师', code: 'AGENT-03', tone: '#00b4ff' },
                    { anim: 'float-5 5.5s 0.2s', pos: 'top-[40%] right-[0%] hidden md:flex', icon: <TrendingUp className="w-7 h-7 text-cyan-400" />, label: '数据精算师', code: 'AGENT-04', tone: 'cyan-500' },
                    { anim: 'float-4 7.5s 1.5s', pos: 'bottom-[10%] right-[15%]', icon: <Dna className="w-7 h-7 text-green-400" />, label: '大健康专家', code: 'AGENT-05', tone: 'green-500' },
                  ].map((card, i) => (
                    <div key={i} className={`absolute z-30 ${card.pos} w-24 bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-2xl flex flex-col items-center hover:border-[#00b4ff]/50 hover:z-40 transition-colors`} style={{ animation: `${card.anim} ease-in-out infinite` }}>
                      <div className="w-6 h-1.5 bg-[#111] rounded-full mb-2 shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)] border border-white/5"></div>
                      <div className="w-full aspect-square bg-[#111] rounded-lg mb-2 flex items-center justify-center border border-white/5 relative overflow-hidden">
                        <div className={`absolute inset-0 bg-${card.tone}/5`}></div>
                        {card.icon}
                      </div>
                      <div className="text-white text-[10px] font-bold truncate w-full text-center">{card.label}</div>
                      <div className="text-[#00b4ff]/70 text-[8px] font-mono mt-0.5">{card.code}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="border-y border-white/10 bg-white/[0.02]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
                {[
                  { label: '支持垂直领域', value: '3+', unit: '赛道' },
                  { label: '模型部署时间', value: '0', unit: '秒' },
                  { label: '算力节点在线', value: '7×24', unit: 'H' },
                  { label: '用户数据所有权', value: '100', unit: '%' },
                ].map((stat, i) => (
                  <div key={i} className="text-center px-4">
                    <p className="text-sm font-medium text-gray-500 mb-2 uppercase tracking-wider">{stat.label}</p>
                    <div className="text-3xl md:text-4xl font-black text-white flex items-baseline justify-center gap-1">
                      {stat.value} <span className="text-lg text-[#00b4ff]">{stat.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 双引擎背书 */}
          <section className="py-12 overflow-hidden bg-[#050505]">
            <div className="text-center mb-8">
              <span className="text-xs font-bold text-gray-500 tracking-[0.2em] uppercase">核心基建由以下双引擎强力驱动</span>
            </div>
            <div className="flex justify-center items-center gap-16 md:gap-32 px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
              <div className="flex items-center gap-3">
                <Server className="w-8 h-8 text-[#00b4ff]" />
                <div>
                  <div className="text-2xl font-black text-white leading-none">TradingBase.AI</div>
                  <div className="text-[10px] text-[#00b4ff] tracking-widest uppercase mt-1">核心技术引擎</div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/20"></div>
              <div className="flex items-center gap-3">
                <Globe className="w-8 h-8 text-[#00b4ff]" />
                <div>
                  <div className="text-2xl font-black text-white leading-none">中国三信资本</div>
                  <div className="text-[10px] text-[#00b4ff] tracking-widest uppercase mt-1">全球资本引擎</div>
                </div>
              </div>
            </div>
          </section>

          {/* YUANJI 硬件终端 */}
          <section id="hardware" className="py-24 relative border-t border-white/5">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00b4ff]/10 blur-[120px] pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                  <div className="inline-block px-3 py-1 bg-[#00b4ff]/10 border border-[#00b4ff]/20 text-[#00b4ff] text-xs font-bold uppercase tracking-widest rounded mb-6">
                    硬件基础设施
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                    小到能放在桌角<br />
                    强到装下<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4ff] to-[#0a4b9c]">整个行业的智囊团</span>
                  </h2>
                  <p className="text-lg text-gray-400 mb-8">
                    YUANJI 系列是行业级 AI 硬件终端产品线。每一款一体机针对垂直赛道深度定制，内置专属 AI 员工库。你得到的不是设备，而是随时待命的专业团队。
                  </p>

                  <div className="space-y-4">
                    {[
                      { title: "三位一体架构", desc: "硬件终端 × 专属 AI 员工库 × 即插即用" },
                      { title: "开机即行家", desc: "零代码、零部署。不需要十年积累，插上电就是专家。" },
                      { title: "数据绝对主权", desc: "本地算力运行，数据不出手，你的核心资产只有自己能碰。" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#00b4ff]/30 transition-colors">
                        <div className="p-2 bg-[#00b4ff]/10 rounded-lg text-[#00b4ff]">
                          <Cpu className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{item.title}</h4>
                          <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 硬件视觉 */}
                <div className="relative flex justify-center items-end h-[500px] w-full rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#050505] border border-white/10 shadow-2xl overflow-hidden group">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1/4 bg-[#00b4ff] rounded-[100%] blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>

                  <div className="absolute inset-0 z-30 pointer-events-none">
                     <div className="absolute top-[12%] left-[8%] md:left-[12%] w-36 bg-[#0a192f]/90 backdrop-blur-md border border-[#00b4ff]/50 rounded-xl p-3 shadow-[0_0_30px_rgba(0,180,255,0.4)] transform -rotate-6 animate-[bounce_4s_infinite] group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-2">
                           <TrendingUp className="w-5 h-5 text-[#00b4ff]" />
                           <span className="text-xs text-white font-bold">量化策略大脑</span>
                        </div>
                        <div className="text-[9px] text-gray-400 mb-2 font-mono">STATUS: ACTIVE</div>
                        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-[#00b4ff] rounded-full shadow-[0_0_8px_#00b4ff]"></div></div>
                     </div>
                     <div className="absolute top-[6%] right-[8%] md:right-[12%] w-40 bg-[#1e102f]/90 backdrop-blur-md border border-purple-500/50 rounded-xl p-3 shadow-[0_0_30px_rgba(168,85,247,0.4)] transform rotate-6 animate-[bounce_5s_infinite_0.5s] group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-2">
                           <Briefcase className="w-5 h-5 text-purple-400" />
                           <span className="text-xs text-white font-bold">营销增长引擎</span>
                        </div>
                        <div className="text-[9px] text-gray-400 mb-2 font-mono">STATUS: STANDBY</div>
                        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden"><div className="w-[60%] h-full bg-purple-400 rounded-full shadow-[0_0_8px_#a855f7]"></div></div>
                     </div>
                     <div className="absolute top-[38%] right-[15%] md:right-[20%] w-32 bg-[#051f15]/90 backdrop-blur-md border border-green-500/50 rounded-xl p-3 shadow-[0_0_30px_rgba(34,197,94,0.4)] transform -rotate-3 animate-[bounce_3s_infinite_1s] group-hover:scale-105 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-2">
                           <Shield className="w-4 h-4 text-green-400" />
                           <span className="text-[10px] text-white font-bold">风控合规模型</span>
                        </div>
                        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden"><div className="w-full h-full bg-green-400 rounded-full shadow-[0_0_8px_#22c55e]"></div></div>
                     </div>
                  </div>

                  <div className="relative w-[280px] h-[120px] mb-10 z-20 group-hover:-translate-y-2 transition-transform duration-700 flex flex-col shadow-[0_40px_50px_rgba(0,0,0,0.9)] rounded-xl">
                     <div className="w-full h-8 bg-gradient-to-b from-[#475569] to-[#334155] rounded-t-xl border-t border-white/30 border-x border-white/10 flex justify-center items-center relative overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-4 bg-black rounded-full border border-[#00b4ff]/40 shadow-[0_0_15px_rgba(0,180,255,0.8)_inset] flex items-center justify-center">
                           <div className="w-12 h-1 bg-[#00b4ff] blur-[2px] animate-pulse"></div>
                        </div>
                     </div>
                     <div className="flex-1 w-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] rounded-b-xl border-x border-b border-white/10 p-4 flex flex-col justify-between relative">
                        <div className="flex justify-between items-start">
                           <div className="font-black italic tracking-widest text-2xl text-white/90 drop-shadow-md">YUANJI<span className="text-[#00b4ff]">.</span></div>
                           <div className="flex gap-2 bg-black/40 p-1.5 rounded-lg border border-white/5 shadow-inner">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e]"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#00b4ff] animate-pulse shadow-[0_0_8px_#00b4ff]"></div>
                           </div>
                        </div>
                        <div className="w-full h-10 bg-black/50 rounded-md border border-white/5 shadow-inner flex items-center px-4 justify-between">
                           <div className="flex gap-3">
                              <div className="w-6 h-2.5 bg-black border border-slate-700 flex justify-center items-end pb-[1px] rounded-sm">
                                 <div className="w-4 h-[2px] bg-blue-600"></div>
                              </div>
                              <div className="w-6 h-2.5 bg-black border border-slate-700 flex justify-center items-end pb-[1px] rounded-sm">
                                 <div className="w-4 h-[2px] bg-blue-600"></div>
                              </div>
                           </div>
                           <div className="w-3 h-1.5 bg-black border border-slate-600 rounded-full"></div>
                           <div className="w-6 h-6 rounded-full border border-slate-500 bg-gradient-to-b from-slate-600 to-slate-800 shadow-[0_2px_5px_rgba(0,0,0,0.5)] flex items-center justify-center cursor-pointer">
                              <div className="w-2.5 h-2.5 rounded-full border-2 border-white/40 border-t-transparent relative">
                                 <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-white/60"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="absolute bottom-[20%] left-6 bg-[#0a192f]/90 backdrop-blur border border-[#00b4ff]/30 px-3 py-1.5 rounded-lg flex items-center gap-2 z-40">
                    <Database className="w-3.5 h-3.5 text-[#00b4ff]" />
                    <span className="text-[10px] font-bold text-[#00b4ff]">模型装载完毕</span>
                  </div>
                  <div className="absolute bottom-[10%] right-6 bg-[#051f15]/90 backdrop-blur border border-green-500/30 px-3 py-1.5 rounded-lg flex items-center gap-2 z-40">
                    <Shield className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-[10px] font-bold text-green-400">局域网隔离</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

{/* 行业生态 (Ecosystem / Vertical Tracks) */}
          <section id="ecosystem" className="py-24 bg-[#0a0a0a] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">跨行业的 AI 能力网络</h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-16">
                不是做一个简单的 AI 工具，而是为你的行业打造一台专属智能中枢。
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    id: "HUB-Q1",
                    icon: <BarChart4 className="w-8 h-8 text-[#00b4ff]" />,
                    title: "量化交易",
                    desc: "专属赛道深度定制，内置垂直领域顶尖认知体系与高频决策逻辑。",
                    metric: "处理并发",
                    value: "1.2M req/s",
                    themeColor: "from-[#00b4ff]/20 to-transparent",
                    borderColor: "hover:border-[#00b4ff]/50",
                    ringColor: "border-[#00b4ff]/30",
                    textColor: "text-[#00b4ff]",
                    accentBg: "bg-[#00b4ff]",
                    accentShadow: "shadow-[0_0_8px_#00b4ff]"
                  },
                  {
                    id: "HUB-M2",
                    icon: <Target className="w-8 h-8 text-purple-400" />,
                    title: "营销获客",
                    desc: "封装全域增长专家模型，自主完成用户画像分析与触达策略生成。",
                    metric: "人群画像解析",
                    value: "50k+/h",
                    themeColor: "from-purple-500/20 to-transparent",
                    borderColor: "hover:border-purple-500/50",
                    ringColor: "border-purple-500/30",
                    textColor: "text-purple-400",
                    accentBg: "bg-purple-400",
                    accentShadow: "shadow-[0_0_8px_#a855f7]"
                  },
                  {
                    id: "HUB-H3",
                    icon: <Dna className="w-8 h-8 text-green-400" />,
                    title: "大健康",
                    desc: "私有化医疗知识图谱，构建绝对安全的数据隔离墙与健康精算网络。",
                    metric: "数据隔离率",
                    value: "99.99%",
                    themeColor: "from-green-500/20 to-transparent",
                    borderColor: "hover:border-green-500/50",
                    ringColor: "border-green-500/30",
                    textColor: "text-green-400",
                    accentBg: "bg-green-400",
                    accentShadow: "shadow-[0_0_8px_#22c55e]"
                  },
                ].map((track, i) => (
                  <div key={i} className={`group relative p-8 bg-[#050505] rounded-3xl border border-white/10 ${track.borderColor} transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex flex-col text-left`}>

                    {/* 背景光晕扩散 */}
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl ${track.themeColor} rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

                    {/* 硬件中枢状态栏 */}
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/5 relative z-10">
                      <div className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">{track.id}</div>
                      <div className="flex items-center gap-1.5 bg-black/50 px-2 py-1 rounded-full border border-white/5">
                         <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]"></div>
                         <span className="text-green-500 text-[9px] font-bold tracking-widest uppercase">Active</span>
                      </div>
                    </div>

                    {/* 行业专属金属一体机 (替代原有的雷达光圈，强化硬件物理感) */}
                    <div className="relative w-full h-32 mb-6 flex flex-col items-center justify-end group-hover:-translate-y-2 transition-transform duration-500">

                      {/* 迷你金属一体机 (CNC 切割质感) */}
                      <div className="relative w-40 h-[60px] bg-gradient-to-b from-[#f8fafc] via-[#cbd5e1] to-[#64748b] rounded-xl shadow-[0_20px_25px_rgba(0,0,0,0.8),_inset_0_2px_4px_rgba(255,255,255,1)] border border-white/50 flex flex-col justify-end overflow-hidden z-10">

                        {/* 顶部高光与工业散热刻线 */}
                        <div className="absolute top-0 left-0 w-full h-[60%] bg-gradient-to-b from-white/90 to-transparent pointer-events-none"></div>
                        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-16 h-[3px] bg-slate-400/50 rounded-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]"></div>

                        {/* 前面板主体 (深色接口区) */}
                        <div className="w-full h-8 bg-gradient-to-b from-[#1e293b] to-[#020617] border-t border-slate-400/80 flex items-center justify-between px-3.5 shadow-[inset_0_3px_6px_rgba(0,0,0,0.9)] z-10 relative">

                           {/* USB 接口组合 */}
                           <div className="flex gap-2 items-center">
                             <div className="w-5 h-2.5 bg-black border-t border-slate-600 flex justify-center items-end pb-[1.5px] rounded-[2px] shadow-inner">
                               <div className={`w-3 h-[2px] ${track.accentBg} opacity-90`}></div>
                             </div>
                             <div className="w-5 h-2.5 bg-black border-t border-slate-600 flex justify-center items-end pb-[1.5px] rounded-[2px] shadow-inner">
                               <div className={`w-3 h-[2px] ${track.accentBg} opacity-90`}></div>
                             </div>
                           </div>

                           {/* 电源键与状态指示灯 (随行业主题色发光) */}
                           <div className="flex items-center gap-2">
                             <div className={`w-1.5 h-1.5 rounded-full ${track.accentBg} animate-pulse ${track.accentShadow}`}></div>
                             <div className="w-4 h-4 rounded-full border border-slate-500 bg-gradient-to-b from-slate-600 to-slate-800 shadow-[0_1px_3px_rgba(0,0,0,0.8)] flex items-center justify-center">
                               <div className="w-2 h-2 rounded-full border-[1px] border-white/60"></div>
                             </div>
                           </div>
                        </div>
                      </div>

                      {/* 设备底部环境重力阴影 */}
                      <div className="absolute -bottom-3 w-[85%] h-5 bg-black/80 blur-md rounded-full -z-10"></div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{track.title}</h3>
                    <p className="text-sm text-gray-400 mb-8 flex-1 leading-relaxed relative z-10">{track.desc}</p>

                    {/* 实时监控面板 (增强物理运转感) */}
                    <div className="w-full bg-black/60 border border-white/5 rounded-xl p-3.5 flex justify-between items-center relative z-10 shadow-inner group-hover:bg-black/80 transition-colors">
                       <span className="text-xs text-gray-500 font-medium">{track.metric}</span>
                       <div className="flex items-center gap-2">
                          {/* 扫描跳动的小波浪形指示 */}
                          <div className="flex items-end gap-[2px] h-3 opacity-70">
                            <div className={`w-[2px] h-full ${track.themeColor.split(' ')[0].replace('from-', 'bg-').split('/')[0]} animate-[pulse_1s_infinite]`}></div>
                            <div className={`w-[2px] h-2/3 ${track.themeColor.split(' ')[0].replace('from-', 'bg-').split('/')[0]} animate-[pulse_1.5s_infinite]`}></div>
                            <div className={`w-[2px] h-full ${track.themeColor.split(' ')[0].replace('from-', 'bg-').split('/')[0]} animate-[pulse_0.8s_infinite]`}></div>
                          </div>
                          <span className={`text-sm font-mono font-bold ${track.textColor}`}>{track.value}</span>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center text-sm font-mono text-gray-500">
                <span className="animate-pulse inline-block mr-2 text-[#00b4ff]">_</span> 更多行业模块持续扩展中...
              </div>
            </div>
          </section>

          {/* 终端型号 (Hardware Models) */}
          <section id="models" className="py-24 relative bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#00b4ff]/50 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <div className="inline-block px-3 py-1 bg-[#00b4ff]/10 border border-[#00b4ff]/20 text-[#00b4ff] text-xs font-bold uppercase tracking-widest rounded mb-4">
                  量化交易系列
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4">量化交易专属系列</h2>
                <p className="text-gray-400">选择适合您的算力节点，立刻开启您的 AI 财富引擎。</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* YUANJI T Card */}
                <div className="relative group rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-[#00b4ff]/50 transition-all duration-500 overflow-hidden flex flex-col">
                  <div className="p-8 pb-0">
                    <h3 className="text-3xl font-black text-white mb-2">YUANJI <span className="text-[#00b4ff]">T</span></h3>
                    <p className="text-sm text-gray-400 mb-6 font-medium">标准量化交易节点 / 个人宽客优选</p>
                    <div className="flex items-end gap-2 mb-8">
                      <span className="text-4xl font-bold text-white">STANDARD</span>
                      <span className="text-gray-500 text-sm mb-1 uppercase tracking-widest">NODE</span>
                    </div>
                  </div>

                  {/* 替换为：实体硬件微缩渲染图 (YUANJI T) */}
                  <div className="relative h-56 w-full bg-gradient-to-b from-transparent to-[#00b4ff]/5 border-y border-white/5 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    {/* 硬件小主机 */}
                    <div className="w-36 h-40 flex flex-col justify-end relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                      {/* 顶部金属散热格栅 */}
                      <div className="w-full h-8 bg-gradient-to-b from-[#475569] to-[#334155] rounded-t-lg border-t border-x border-white/20 flex flex-col justify-center px-4 py-1 gap-1 shadow-[0_-5px_15px_rgba(0,0,0,0.5)_inset]">
                         <div className="w-full h-[1.5px] bg-[#0f172a] opacity-60 shadow-inner"></div>
                         <div className="w-full h-[1.5px] bg-[#0f172a] opacity-60 shadow-inner"></div>
                         <div className="w-full h-[1.5px] bg-[#0f172a] opacity-60 shadow-inner"></div>
                      </div>

                      {/* 前面板主体 (深色拉丝) */}
                      <div className="w-full h-24 bg-gradient-to-b from-[#1e293b] to-[#050505] rounded-b-lg border-x border-b border-white/10 p-3 flex flex-col justify-between shadow-[0_20px_30px_rgba(0,0,0,0.8)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                        <div className="flex justify-between items-start z-10">
                           <span className="text-[10px] font-black italic text-white/80 tracking-widest drop-shadow">YUANJI</span>
                           <div className="w-1.5 h-1.5 rounded-full bg-[#00b4ff] animate-pulse shadow-[0_0_8px_#00b4ff]"></div>
                        </div>

                        {/* 中央底纹 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
                           <Cpu className="w-10 h-10 text-[#00b4ff]" />
                        </div>

                        {/* 底部硬件接口区 */}
                        <div className="w-full h-7 bg-black/80 rounded border border-white/5 flex items-center justify-between px-2.5 z-10 shadow-inner">
                           {/* USB x1 */}
                           <div className="w-4 h-2 bg-black border border-slate-700 flex justify-center items-end pb-[1px] rounded-sm">
                             <div className="w-2.5 h-[1.5px] bg-blue-600"></div>
                           </div>

                           {/* Type-C */}
                           <div className="w-2 h-1 bg-slate-800 rounded-full border border-slate-600"></div>

                           {/* 电源键 */}
                           <div className="w-3.5 h-3.5 rounded-full border border-slate-500 bg-slate-700 flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
                             <div className="w-1.5 h-1.5 rounded-full border border-white/40 border-t-transparent"></div>
                           </div>
                        </div>
                      </div>

                      {/* 悬浮光晕 */}
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-3 bg-[#00b4ff]/30 blur-lg rounded-full z-0"></div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    {/* 硬件配置网格 */}
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                        <div className="text-gray-500 text-[10px] mb-1 font-mono">CPU / 算力芯片</div>
                        <div className="text-white text-sm font-bold">NPU-1 8核引擎</div>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                        <div className="text-gray-500 text-[10px] mb-1 font-mono">RAM / 运行内存</div>
                        <div className="text-white text-sm font-bold">32GB LPDDR5</div>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                        <div className="text-gray-500 text-[10px] mb-1 font-mono">ROM / 存储空间</div>
                        <div className="text-white text-sm font-bold">1TB NVMe</div>
                      </div>
                      <div className="bg-white/[0.02] border border-white/5 rounded-lg p-3">
                        <div className="text-gray-500 text-[10px] mb-1 font-mono">AI / 本地模型</div>
                        <div className="text-[#00b4ff] text-sm font-bold">已内置 (7B模型)</div>
                      </div>
                    </div>

                    <ul className="space-y-4 flex-1 pt-4 border-t border-white/5">
                      {[
                        "基础本地算力引擎",
                        "内置核心量化策略 Agent",
                        "标准 HTK 算力收益产出",
                        "7×24H 自动化交易执行",
                        "本地数据隔离与隐私保护"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <div className="w-5 h-5 rounded-full bg-[#00b4ff]/10 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-[#00b4ff]" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* YUANJI T Pro Card */}
                <div className="relative group rounded-3xl bg-gradient-to-b from-[#0a0a0a] to-[#050505] border border-[#00b4ff]/30 hover:border-[#00b4ff] hover:shadow-[0_0_50px_rgba(0,180,255,0.15)] transition-all duration-500 overflow-hidden flex flex-col scale-100 md:scale-105 z-10">
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-gradient-to-r from-[#00b4ff] to-[#0a4b9c] text-white text-xs font-bold uppercase tracking-wider rounded-bl-xl">
                    旗舰算力款
                  </div>

                  <div className="p-8 pb-0">
                    <h3 className="text-3xl font-black text-white mb-2">YUANJI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00b4ff] to-cyan-300">T Pro</span></h3>
                    <p className="text-sm text-[#00b4ff] mb-6 font-medium">高性能专业量化节点 / 机构与高净值优选</p>
                    <div className="flex items-end gap-2 mb-8">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">PRO</span>
                      <span className="text-gray-500 text-sm mb-1 uppercase tracking-widest">NODE</span>
                    </div>
                  </div>

                  {/* 替换为：旗舰硬件微缩渲染图 (YUANJI T Pro) */}
                  <div className="relative h-56 w-full bg-gradient-to-b from-transparent to-[#00b4ff]/10 border-y border-[#00b4ff]/20 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00b4ff] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>

                    {/* 旗舰款硬件小主机 */}
                    <div className="w-44 h-44 flex flex-col justify-end relative z-10 group-hover:-translate-y-2 transition-transform duration-500">
                      {/* 顶部金属散热格栅 (带发光灯槽) */}
                      <div className="w-full h-10 bg-gradient-to-b from-[#334155] to-[#1e293b] rounded-t-xl border-t border-x border-[#00b4ff]/40 flex flex-col justify-center px-5 py-1.5 gap-1.5 shadow-[0_-5px_15px_rgba(0,180,255,0.15)_inset] relative overflow-hidden">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-[#00b4ff] shadow-[0_0_10px_#00b4ff]"></div>
                         <div className="w-full h-[2px] bg-[#0f172a] opacity-80 shadow-inner"></div>
                         <div className="w-full h-[2px] bg-[#0f172a] opacity-80 shadow-inner"></div>
                         <div className="w-full h-[2px] bg-[#0f172a] opacity-80 shadow-inner"></div>
                      </div>

                      {/* 前面板主体 (更深邃的质感与高光) */}
                      <div className="w-full h-[110px] bg-gradient-to-b from-[#0f172a] to-[#020617] rounded-b-xl border-x border-b border-[#00b4ff]/20 p-3.5 flex flex-col justify-between shadow-[0_25px_40px_rgba(0,0,0,0.9)] relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#00b4ff]/10 to-transparent pointer-events-none"></div>

                        <div className="flex justify-between items-start z-10">
                           <span className="text-xs font-black italic text-white drop-shadow-[0_0_5px_rgba(0,180,255,0.5)] tracking-widest">YUANJI<span className="text-[#00b4ff]">.PRO</span></span>
                           <div className="flex gap-1.5 bg-black/60 p-1 rounded border border-white/10">
                             <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_6px_#22c55e]"></div>
                             <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
                           </div>
                        </div>

                        {/* 中央双路 CPU 底纹 */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 opacity-30">
                           <Cpu className="w-9 h-9 text-[#00b4ff]" />
                           <Cpu className="w-9 h-9 text-cyan-400" />
                        </div>

                        {/* 底部硬件接口区 (更丰富的旗舰接口) */}
                        <div className="w-full h-8 bg-black/90 rounded border border-[#00b4ff]/20 flex items-center justify-between px-3 z-10 shadow-[0_0_10px_rgba(0,0,0,0.8)_inset]">
                           <div className="flex gap-2 items-center">
                               {/* USB x2 */}
                               <div className="w-4.5 h-2.5 bg-[#111] border border-slate-700 flex justify-center items-end pb-[1.5px] rounded-[2px]">
                                 <div className="w-3 h-[1.5px] bg-blue-500"></div>
                               </div>
                               <div className="w-4.5 h-2.5 bg-[#111] border border-slate-700 flex justify-center items-end pb-[1.5px] rounded-[2px]">
                                 <div className="w-3 h-[1.5px] bg-blue-500"></div>
                               </div>
                               {/* Type-C */}
                               <div className="w-2.5 h-1 bg-slate-800 rounded-full border border-slate-600 mt-[2px]"></div>
                           </div>

                           {/* Pro 专属发光电源键 */}
                           <div className="w-4 h-4 rounded-full border border-cyan-500/50 bg-gradient-to-b from-slate-600 to-slate-800 flex items-center justify-center shadow-[0_0_5px_rgba(34,211,238,0.3)] cursor-pointer">
                             <div className="w-2 h-2 rounded-full border-[1.5px] border-cyan-400 border-t-transparent relative">
                                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-cyan-400"></div>
                             </div>
                           </div>
                        </div>
                      </div>

                      {/* 旗舰款专属宽大底座悬浮光 */}
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] h-5 bg-[#00b4ff]/40 blur-xl rounded-full z-0"></div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    {/* 硬件配置网格 (Pro 版专属样式) */}
                    <div className="mb-6 grid grid-cols-2 gap-3">
                      <div className="bg-[#00b4ff]/5 border border-[#00b4ff]/20 rounded-lg p-3">
                        <div className="text-[#00b4ff] text-[10px] mb-1 font-mono">CPU / 算力芯片</div>
                        <div className="text-white text-sm font-bold">NPU-2 Max 16核双路</div>
                      </div>
                      <div className="bg-[#00b4ff]/5 border border-[#00b4ff]/20 rounded-lg p-3">
                        <div className="text-[#00b4ff] text-[10px] mb-1 font-mono">RAM / 运行内存</div>
                        <div className="text-white text-sm font-bold">128GB LPDDR5X</div>
                      </div>
                      <div className="bg-[#00b4ff]/5 border border-[#00b4ff]/20 rounded-lg p-3">
                        <div className="text-[#00b4ff] text-[10px] mb-1 font-mono">ROM / 存储空间</div>
                        <div className="text-white text-sm font-bold">4TB PCIe 4.0</div>
                      </div>
                      <div className="bg-[#00b4ff]/5 border border-[#00b4ff]/20 rounded-lg p-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 px-2 py-0.5 bg-gradient-to-r from-[#00b4ff] to-[#0a4b9c] text-white text-[8px] font-bold rounded-bl-lg">旗舰版</div>
                        <div className="text-[#00b4ff] text-[10px] mb-1 font-mono">AI / 本地模型</div>
                        <div className="text-cyan-300 text-sm font-bold drop-shadow-[0_0_5px_rgba(0,180,255,0.5)]">已内置 (72B模型)</div>
                      </div>
                    </div>

                    <ul className="space-y-4 flex-1 pt-4 border-t border-[#00b4ff]/20">
                      {[
                        "双核增强型本地算力基座",
                        "进阶高频交易与深度风控 Agent",
                        "300% 算力收益产出加成",
                        "多策略矩阵并发执行",
                        "专属数据通道与极速响应"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-white font-medium">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#00b4ff] to-[#0a4b9c] flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 算力经济模型 (Tokenomics Flywheel) - 极致财富张力重构 */}
      <section id="tokenomics" className="py-32 relative overflow-hidden bg-[#020202]">
        {/* 背景金矿级极光特效 */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col lg:flex-row gap-20 items-center">

            {/* 左侧：财富引擎主张与跳动的数据板 */}
            <div className="w-full lg:w-[45%]">
              <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 text-yellow-400 text-xs font-bold uppercase tracking-widest rounded-full mb-8 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                算力经济飞轮
              </div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-[1.1]">
                这是一台<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]">会赚钱的印钞机</span>
              </h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">
                最好的商业模式，是你在睡觉时资产仍在飙升。别人买的是消耗型硬件，你买的是一个永不休眠的算力矿机。一人胜一司，省就是赚。
              </p>

              {/* 实时挖矿收益看板 (视觉锚点) */}
              <div className="p-[2px] rounded-2xl bg-gradient-to-r from-yellow-500/40 via-orange-500/40 to-[#00b4ff]/40 shadow-[0_0_30px_rgba(234,179,8,0.15)] transform hover:scale-[1.02] transition-transform duration-500">
                <div className="bg-[#0a0a0a] rounded-xl p-6 relative overflow-hidden">
                   {/* 面板内部泛光 */}
                   <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/20 blur-2xl rounded-full"></div>

                   <div className="text-sm text-gray-400 mb-3 flex items-center gap-2 font-mono">
                     <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                     全网节点实时挖矿收益监控
                   </div>

                   <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-5xl font-black text-white tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        {liveHtkYield.toFixed(4)}
                      </span>
                      <span className="text-xl font-bold text-yellow-500 drop-shadow-[0_0_5px_rgba(234,179,8,0.8)]">HTK</span>
                   </div>

                   <div className="mt-5 pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono">
                      <span className="text-gray-500">当前节点算力 (Hashrate)</span>
                      <span className="text-[#00b4ff] bg-[#00b4ff]/10 px-2 py-1 rounded border border-[#00b4ff]/20">14.2 TH/s</span>
                   </div>
                </div>
              </div>
            </div>

            {/* 右侧：四大金库级核心机制卡片 */}
            <div className="w-full lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
              {/* 中央发光连接点 (纯视觉) */}
              <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-yellow-500/10 rounded-full blur-xl z-0"></div>

              {[
                { icon: <Zap className="w-7 h-7 text-yellow-400" />, title: "开机即收益", desc: "设备在线即自动接入底层算力网络，财富从按下开机键那一刻开始无感累积。", color: "yellow" },
                { icon: <TrendingUp className="w-7 h-7 text-orange-400" />, title: "使用即加成", desc: "本地调用 AI 模型即可获得额外算力奖励乘数，HTK 越用越多，越算越赚。", color: "orange" },
                { icon: <Activity className="w-7 h-7 text-[#00b4ff]" />, title: "HTK 抵消耗", desc: "产出的 HTK 直接无缝抵扣高阶 AI 服务的算力消耗，彻底实现免费使用的闭环。", color: "blue" },
                { icon: <Coins className="w-7 h-7 text-yellow-500" />, title: "资产可变现", desc: "完全映射 Web3 链上自由交易，资产流动性与未来增值空间由你完全掌控。", color: "yellow" },
              ].map((item, i) => (
                <div key={i} className={`group relative p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-${item.color}-500/50 hover:to-transparent transition-all duration-500 hover:-translate-y-1 z-10`}>
                   {/* 内部毛玻璃金库质感 */}
                   <div className="relative h-full bg-[#0d0d0d]/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/5 flex flex-col overflow-hidden">
                       {/* 悬浮内发光 */}
                       <div className={`absolute -top-10 -right-10 w-24 h-24 bg-${item.color}-500/10 rounded-full blur-2xl group-hover:bg-${item.color}-500/20 transition-colors duration-500`}></div>

                       <div className={`w-14 h-14 rounded-xl flex items-center justify-center border mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg ${
                         item.color === 'yellow' ? 'bg-yellow-500/10 border-yellow-500/30 shadow-yellow-500/20' :
                         item.color === 'orange' ? 'bg-orange-500/10 border-orange-500/30 shadow-orange-500/20' :
                         'bg-[#00b4ff]/10 border-[#00b4ff]/30 shadow-[#00b4ff]/20'
                       }`}>
                          {item.icon}
                       </div>

                       <div>
                         <h4 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{item.title}</h4>
                         <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                       </div>
                   </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

          {/* CTA */}
          <section className="py-24 relative border-t border-white/5">
            <div className="absolute inset-0 bg-gradient-to-t from-[#00b4ff]/5 to-transparent"></div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                准备好拥有一台<br /><span className="text-[#00b4ff]">属于你自己的 AI 专家团队</span>了吗？
              </h2>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                每一次工业革命都有一台标志性机器。AI 时代的这台，就在这里。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => handleOpenReservation('')}
                  className="px-10 py-4 bg-gradient-to-r from-[#00b4ff] to-[#0a4b9c] text-white font-bold rounded-xl hover:shadow-[0_0_40px_rgba(0,180,255,0.6)] transition-all duration-300 active:scale-95 text-lg"
                >
                  立即预定
                </button>
                <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 hover:border-[#00b4ff]/30 transition-all duration-300 backdrop-blur-md">
                  获取白皮书
                </button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 py-12 bg-[#050505]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                  <Logo className="h-6 w-auto" />
                </div>
                <div className="flex gap-6 text-sm text-gray-500">
                  <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors">隐私政策</button>
                  <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors">服务条款</button>
                  <span className="text-gray-700">|</span>
                  <span>© 2026 元基智能 YUANJI.AI</span>
                </div>
              </div>
            </div>
          </footer>
        </>
      ) : (
        <AboutPage />
      )}

      {/* 预定弹窗 */}
      {reservationModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl">
            <button onClick={() => setReservationModalOpen(false)} className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>

            {!formSubmitted ? (
              <>
                <div className="mb-8 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#00b4ff]/10 border border-[#00b4ff]/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-[#00b4ff]" />
                  </div>
                  <h3 className="text-2xl font-black text-white">
                    {reservationModel ? `预定 ${reservationModel}` : '预定 YUANJI 终端'}
                  </h3>
                  <p className="text-sm text-gray-400 mt-2">填写以下信息，我们将尽快与您联系</p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <input type="text" placeholder="您的姓名" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00b4ff]/50 transition-colors" />
                  </div>
                  <div>
                    <input type="email" placeholder="电子邮箱" required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00b4ff]/50 transition-colors" />
                  </div>
                  <div>
                    <input type="tel" placeholder="手机号码" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00b4ff]/50 transition-colors" />
                  </div>
                  {!reservationModel && (
                    <div>
                      <select defaultValue="" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#00b4ff]/50 transition-colors">
                        <option value="" disabled className="bg-[#0a0a0a]">选择型号</option>
                        <option value="T" className="bg-[#0a0a0a]">YUANJI T - 量化交易</option>
                        <option value="M" className="bg-[#0a0a0a]">YUANJI M - 营销增长</option>
                        <option value="H" className="bg-[#0a0a0a]">YUANJI H - 大健康</option>
                      </select>
                    </div>
                  )}
                  <button type="submit" className="w-full py-3.5 bg-gradient-to-r from-[#00b4ff] to-[#0a4b9c] text-white font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,180,255,0.5)] transition-all duration-300 active:scale-95">
                    提交预定
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">预定成功！</h3>
                <p className="text-gray-400 text-sm mb-6">我们的团队将在 24 小时内与您联系</p>
                <button onClick={() => setReservationModalOpen(false)} className="px-8 py-3 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                  返回
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 隐私政策弹窗 */}
      {activeModal === 'privacy' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl max-h-[80vh] overflow-y-auto">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-black text-white mb-6">隐私政策</h3>
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>元基智能（以下简称"我们"）深知数据隐私对您的重要性。本隐私政策说明了我们如何收集、使用和保护您的个人信息。</p>
              <h4 className="text-white font-bold mt-4">1. 数据本地化</h4>
              <p>所有 AI 推理计算在 YUANJI 终端本地完成。您的业务数据、用户数据绝不上传至云端，完全由您掌控。</p>
              <h4 className="text-white font-bold mt-4">2. 信息收集</h4>
              <p>我们仅收集设备激活、固件更新、服务优化所需的最小必要信息，包括设备 ID 和运行状态日志。</p>
              <h4 className="text-white font-bold mt-4">3. 信息安全</h4>
              <p>我们采用端到端加密、安全飞地（Secure Enclave）等业界领先技术保护您的数据。</p>
            </div>
          </div>
        </div>
      )}

      {/* 服务条款弹窗 */}
      {activeModal === 'terms' && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]">
          <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-white/10 rounded-3xl p-8 shadow-2xl max-h-[80vh] overflow-y-auto">
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-black text-white mb-6">服务条款</h3>
            <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
              <p>使用元基智能产品和服务即表示您同意以下条款。请仔细阅读。</p>
              <h4 className="text-white font-bold mt-4">1. 硬件所有权</h4>
              <p>购买 YUANJI 终端即获得设备的完整物理所有权。设备内置的基础模型与操作系统使用权随设备永久授权。</p>
              <h4 className="text-white font-bold mt-4">2. 软件更新</h4>
              <p>我们持续为设备提供固件升级与模型迭代服务，确保您的终端始终保持行业前沿能力。</p>
              <h4 className="text-white font-bold mt-4">3. 免责声明</h4>
              <p>AI 模型输出仅供参考，不构成任何形式的专业建议。用户应独立验证关键决策依据。</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
