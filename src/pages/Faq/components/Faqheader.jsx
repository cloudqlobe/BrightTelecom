import React, { useState, useEffect } from 'react';
import { HelpCircle, Search, Book, FileText, Lightbulb, MessageCircle, ChevronRight, Zap, Shield, DollarSign, Settings, Users, TrendingUp } from 'lucide-react';

const VoIPFAQHeader = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchActive, setSearchActive] = useState(false);
  const [floatingIndex, setFloatingIndex] = useState(0);

  useEffect(() => {
    const categoryInterval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(categoryInterval);
  }, []);

useEffect(() => {
  const floatInterval = setInterval(() => {
    setFloatingIndex((prev) => (prev + 1) % 3);
  }, 2000);

  return () => clearInterval(floatInterval); // ✅ FIX
}, []);


  const categories = [
    { 
      icon: Zap, 
      title: 'Getting Started', 
      count: 12,
      color: 'violet',
      x: 30,
      y: 20
    },
    { 
      icon: DollarSign, 
      title: 'Pricing & Plans', 
      count: 8,
      color: 'pink',
      x: 70,
      y: 20
    },
    { 
      icon: Settings, 
      title: 'Technical', 
      count: 15,
      color: 'blue',
      x: 85,
      y: 50
    },
    { 
      icon: Shield, 
      title: 'Security', 
      count: 10,
      color: 'violet',
      x: 70,
      y: 80
    },
    { 
      icon: Users, 
      title: 'Account', 
      count: 9,
      color: 'pink',
      x: 30,
      y: 80
    },
    { 
      icon: TrendingUp, 
      title: 'Features', 
      count: 14,
      color: 'blue',
      x: 15,
      y: 50
    }
  ];

  const quickHelp = [
    { icon: Book, text: 'Documentation', desc: 'Detailed guides' },
    { icon: MessageCircle, text: 'Live Chat', desc: 'Instant help' },
    { icon: FileText, text: 'Tutorials', desc: 'Video guides' }
  ];

  const popularQuestions = [
    'How do I get started?',
    'What are the pricing plans?',
    'Is my data secure?'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900">
        {/* Question Mark Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="questions" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                <text x="50" y="80" fontSize="60" fill="#8b5cf6" opacity="0.3" fontWeight="bold">?</text>
                <text x="100" y="40" fontSize="40" fill="#ec4899" opacity="0.3" fontWeight="bold">?</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#questions)"/>
          </svg>
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-blob-morph"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob-morph" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob-morph" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* Left Side Content */}
          <div className="space-y-8 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/30 rounded-full animate-fade-in">
              <HelpCircle className="w-4 h-4 text-violet-400 animate-spin-slow" />
              <span className="text-violet-400 text-sm font-semibold">Frequently Asked Questions</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Find Your
                <br />
                <span className="relative inline-block mt-2">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-blue-400">
                    Answers
                  </span>
                  <div className="absolute -bottom-3 left-0 right-0">
                    {/* Animated dots */}
                    <div className="flex justify-center gap-2">
                      <div className="w-2 h-2 bg-violet-500 rounded-full animate-bounce-dot"></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce-dot" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce-dot" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </span>
                <br />
                Instantly
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Browse through our comprehensive knowledge base or search for specific 
              topics. Get instant answers to common questions about our VoIP services.
            </p>

            {/* Search Bar */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div 
                className={`relative flex items-center gap-3 p-4 bg-gray-800/50 backdrop-blur-xl 
                  border-2 rounded-2xl transition-all duration-300
                  ${searchActive ? 'border-violet-500 shadow-lg shadow-violet-500/20' : 'border-gray-700'}
                `}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
              >
                <Search className={`w-5 h-5 transition-colors ${searchActive ? 'text-violet-400' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-lg 
                  font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/50 transition-all">
                  Search
                </button>
              </div>

              {/* Popular Searches */}
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-gray-400 text-sm">Popular:</span>
                {popularQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 text-xs
                      hover:border-violet-500 hover:text-violet-400 transition-all"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Help */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {quickHelp.map((help, index) => {
                const Icon = help.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-5 bg-gray-800/30 backdrop-blur-sm 
                      border border-gray-700 rounded-xl hover:bg-gray-800/50 hover:border-violet-500/50 
                      transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-violet-600/20 rounded-xl flex items-center justify-center 
                      group-hover:bg-violet-600/30 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-violet-400" />
                    </div>
                    <div className="text-center">
                      <div className="text-white font-semibold text-sm mb-1">{help.text}</div>
                      <div className="text-gray-400 text-xs">{help.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400">Articles</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-sm text-gray-400">Solved</div>
              </div>
              <div className="w-px h-12 bg-gray-700"></div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <button className="group px-8 py-4 bg-gradient-to-r from-violet-600 to-pink-600 
                       text-white rounded-full font-semibold text-lg 
                       hover:shadow-2xl hover:shadow-violet-500/50 
                       transition-all duration-500 hover:scale-105 
                       flex items-center gap-2 relative overflow-hidden">
                <span className="relative z-10">Browse All Topics</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Category Network */}
          <div className="hidden lg:flex relative h-[600px] items-center justify-center">
            <div className="relative w-full h-full">

              {/* Central Knowledge Hub */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative">
                  
                  {/* Pulsing Rings */}
                  {[1, 2, 3, 4].map((ring) => (
                    <div
                      key={ring}
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        border-2 border-violet-500/20 rounded-full animate-pulse-ring"
                      style={{
                        width: `${100 + ring * 50}px`,
                        height: `${100 + ring * 50}px`,
                        animationDelay: `${ring * 0.4}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}

                  {/* Center Icon */}
                  <div className="relative">
                    <div className="w-28 h-28 bg-gradient-to-br from-violet-600 via-pink-600 to-blue-600 
                      rounded-full flex items-center justify-center shadow-2xl shadow-violet-500/50 
                      border-4 border-gray-900 animate-float-center">
                      <Lightbulb className="w-14 h-14 text-white animate-lightbulb-glow" />
                    </div>

                    {/* Orbiting Particles */}
                    {[0, 120, 240].map((angle, idx) => (
                      <div
                        key={idx}
                        className="absolute left-1/2 top-1/2 w-3 h-3 bg-violet-400 rounded-full shadow-lg shadow-violet-400/50"
                        style={{
                          animation: `orbit-particle 4s linear infinite`,
                          animationDelay: `${idx * 1.33}s`,
                          transformOrigin: '0 0'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Category Cards */}
              {categories.map((category, index) => {
                const Icon = category.icon;
                const isActive = activeCategory === index;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700"
                    style={{
                      left: `${category.x}%`,
                      top: `${category.y}%`,
                      transform: `translate(-50%, -50%) scale(${isActive ? 1.08 : 1})`,
                    }}
                  >
                    {/* Connection Line */}
                    <svg className="absolute w-screen h-screen pointer-events-none" 
                      style={{ 
                        left: '50%', 
                        top: '50%',
                        transform: 'translate(-50%, -50%)'
                      }}>
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${category.x}%`}
                        y2={`${category.y}%`}
                        stroke={isActive ? 'rgba(139, 92, 246, 0.5)' : 'rgba(75, 85, 99, 0.2)'}
                        strokeWidth={isActive ? '2' : '1'}
                        className="transition-all duration-500"
                        strokeDasharray={isActive ? '0' : '4,4'}
                      />
                      
                      {/* Energy Particle */}
                      {isActive && (
                        <circle r="4" fill="#ec4899" className="animate-glow-particle">
                          <animateMotion
                            dur="2s"
                            repeatCount="indefinite"
                            path={`M ${window.innerWidth * 0.5} ${window.innerHeight * 0.5} 
                                   L ${window.innerWidth * category.x / 100} ${window.innerHeight * category.y / 100}`}
                          />
                        </circle>
                      )}
                    </svg>

                    {/* Category Card */}
                    <div className={`relative group cursor-pointer animate-scale-in`} 
                      style={{ animationDelay: `${index * 0.12}s` }}>
                      
                      {/* Active Glow */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/40 to-pink-500/40 
                          rounded-2xl blur-2xl animate-glow-expand"></div>
                      )}

                      {/* Card */}
                      <div className={`
                        relative bg-gray-800/80 backdrop-blur-xl 
                        border-2 rounded-2xl p-5 w-44
                        shadow-xl transition-all duration-500
                        ${isActive 
                          ? 'border-violet-500 shadow-violet-500/50' 
                          : 'border-gray-700 hover:border-gray-600'
                        }
                      `}>
                        {/* Icon & Count Badge */}
                        <div className="flex items-start justify-between mb-3">
                          <div className={`
                            w-12 h-12 rounded-xl flex items-center justify-center
                            transition-all duration-500
                            ${category.color === 'violet' ? 'bg-violet-600/20' :
                              category.color === 'pink' ? 'bg-pink-600/20' :
                              'bg-blue-600/20'
                            }
                            ${isActive ? 'animate-icon-rotate' : ''}
                          `}>
                            <Icon className={`
                              w-6 h-6
                              ${category.color === 'violet' ? 'text-violet-400' :
                                category.color === 'pink' ? 'text-pink-400' :
                                'text-blue-400'
                              }
                            `} />
                          </div>
                          <div className="px-2 py-1 bg-gray-700/50 rounded-full">
                            <span className="text-xs text-gray-300 font-semibold">{category.count}</span>
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-white font-bold text-sm mb-2">
                          {category.title}
                        </h3>

                        {/* Arrow */}
                        <div className="flex items-center gap-1 text-violet-400 text-xs font-semibold 
                          opacity-0 group-hover:opacity-100 transition-opacity">
                          <span>Explore</span>
                          <ChevronRight className="w-3 h-3" />
                        </div>

                        {/* Progress Indicator */}
                        <div className="mt-3 h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-700 ${
                              category.color === 'violet' ? 'bg-violet-500' :
                              category.color === 'pink' ? 'bg-pink-500' :
                              'bg-blue-500'
                            }`}
                            style={{ width: isActive ? '100%' : '0%' }}
                          ></div>
                        </div>
                      </div>

                      {/* Active Indicators */}
                      {isActive && (
                        <>
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-violet-500 rounded-full animate-ping"></div>
                          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-pink-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                        </>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Floating Info Cards */}
              <div className={`absolute top-[10%] right-[5%] transition-all duration-500 ${floatingIndex === 0 ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'}`}>
                <div className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <HelpCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">Quick Answer</div>
                      <div className="text-gray-400 text-xs">In seconds</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`absolute bottom-[15%] left-[5%] transition-all duration-500 ${floatingIndex === 1 ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'}`}>
                <div className="bg-gray-800/70 backdrop-blur-xl border border-gray-700 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Book className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">68 Topics</div>
                      <div className="text-gray-400 text-xs">Categories</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sparkle Particles */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full animate-sparkle-float"
                  style={{
                    left: `${15 + Math.random() * 70}%`,
                    top: `${15 + Math.random() * 70}%`,
                    background: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#ec4899' : '#3b82f6',
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 3}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blob-morph {
          0%, 100% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: scale(1) rotate(0deg);
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: scale(1.1) rotate(180deg);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-dot {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0;
          }
        }
        @keyframes float-center {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        @keyframes lightbulb-glow {
          0%, 100% {
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.8));
          }
        }
        @keyframes orbit-particle {
          from {
            transform: rotate(0deg) translateX(60px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(60px) rotate(-360deg);
          }
        }
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes glow-expand {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }
        @keyframes icon-rotate {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
        }
        @keyframes sparkle-float {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-30px) scale(1.5);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-blob-morph {
          animation: blob-morph 15s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-bounce-dot {
          animation: bounce-dot 1s ease-in-out infinite;
        }
        .animate-pulse-ring {
          animation: pulse-ring ease-out infinite;
        }
        .animate-float-center {
          animation: float-center 4s ease-in-out infinite;
        }
        .animate-lightbulb-glow {
          animation: lightbulb-glow 2s ease-in-out infinite;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-glow-expand {
          animation: glow-expand 2s ease-in-out infinite;
        }
        .animate-icon-rotate {
          animation: icon-rotate 2s ease-in-out infinite;
        }
        .animate-sparkle-float {
          animation: sparkle-float ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default VoIPFAQHeader;