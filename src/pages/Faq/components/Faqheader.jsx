import React, { useState, useEffect } from 'react';
import { HelpCircle, Search, Book, MessageCircle, ChevronRight, Zap, Shield, DollarSign, Settings, Users, TrendingUp } from 'lucide-react';

const VoIPFAQHeader = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [activeOrbit, setActiveOrbit] = useState(0);

  useEffect(() => {
    const orbitInterval = setInterval(() => {
      setActiveOrbit((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(orbitInterval);
  }, []);

  const faqCategories = [
    { icon: Zap, title: 'Getting Started', color: 'cyan' },
    { icon: DollarSign, title: 'Pricing', color: 'purple' },
    { icon: Settings, title: 'Technical', color: 'green' },
    { icon: Shield, title: 'Security', color: 'rose' },
    { icon: Users, title: 'Account', color: 'amber' },
    { icon: TrendingUp, title: 'Features', color: 'blue' }
  ];

  const popularQuestions = [
    'How do I get started?',
    'What are the pricing plans?',
    'Is my data secure?'
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Question Mark Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="questions" x="0" y="0" width="150" height="150" patternUnits="userSpaceOnUse">
                <text x="50" y="80" fontSize="60" fill="#06b6d4" opacity="0.3" fontWeight="bold">?</text>
                <text x="100" y="40" fontSize="40" fill="#6366f1" opacity="0.3" fontWeight="bold">?</text>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#questions)"/>
          </svg>
        </div>

        {/* Gradient Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-blob-morph"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-blob-morph" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-blob-morph" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[85vh]">

          {/* Left Side Content */}
          <div className="space-y-8 text-center lg:text-left ">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-indigo-100 border border-cyan-300 rounded-full animate-fade-in">
              <HelpCircle className="w-4 h-4 text-indigo-600 animate-spin-slow" />
              <span className="text-indigo-700 text-sm font-semibold">Frequently Asked Questions</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-3xl md:text-4xl  text-gray-900 leading-tight">
                Find Your{" "}
               
                <span className="relative mt-2">
                  <span className="text-transparent bg-clip-text bg-orange-600">
                    Answers {" "}
                    
                  </span>
                
                </span>

                Instantly
              </h1>
            </div>

            {/* Description */}
            <p className="text-[17px] text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Browse through our comprehensive knowledge base or search for specific 
              topics. Get instant answers to common questions about our VoIP services.
            </p>

            {/* Search Bar */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div 
                className={`relative flex items-center gap-3 p-4 bg-white backdrop-blur-xl 
                  border-2 rounded-2xl transition-all duration-300 shadow-lg
                  ${searchActive ? 'border-cyan-500 shadow-cyan-500/20 shadow-2xl' : 'border-gray-200'}
                `}
                onFocus={() => setSearchActive(true)}
                onBlur={() => setSearchActive(false)}
              >
                <Search className={`w-5 h-5 transition-colors ${searchActive ? 'text-cyan-600' : 'text-gray-400'}`} />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 outline-none"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-600 to-indigo-600 text-white rounded-xl 
                  font-semibold text-sm hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transition-all">
                  Search
                </button>
              </div>

              {/* Popular Searches */}
             
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent mb-1">500+</div>
                <div className="text-sm text-gray-600 font-medium">Articles</div>
              </div>
              <div className="w-px h-14 bg-gradient-to-b from-cyan-300 to-indigo-300"></div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent mb-1">98%</div>
                <div className="text-sm text-gray-600 font-medium">Solved</div>
              </div>
              <div className="w-px h-14 bg-gradient-to-b from-cyan-300 to-indigo-300"></div>
              <div className="text-center lg:text-left">
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-indigo-600 bg-clip-text text-transparent mb-1">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support</div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <button className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-indigo-600 
                       text-white squared-full font-semibold text-lg 
                       hover:shadow-2xl hover:shadow-cyan-500/50 
                       transition-all duration-500 hover:scale-105 
                       flex items-center gap-2 relative overflow-hidden">
                <span className="relative z-10">Browse All Topics</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>
          </div>

          {/* Right Side - Animated Design */}
          <div className="hidden lg:flex relative h-[500px] items-center justify-center mt-[-300px]">
            <div className="relative w-full h-full scale-90">

              {/* Central Hub */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative">
                  
                  {/* Pulsing Rings */}
                  {[1, 2, 3, 4].map((ring) => (
                    <div
                      key={ring}
                      className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        border-2 rounded-full animate-pulse-ring"
                      style={{
                        width: `${100 + ring * 50}px`,
                        height: `${100 + ring * 50}px`,
                        borderColor: ring % 2 === 0 ? 'rgba(6, 182, 212, 0.2)' : 'rgba(99, 102, 241, 0.2)',
                        animationDelay: `${ring * 0.4}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}

                  {/* Center Icon */}
                  <div className="relative ml-[100px] mt-[150px]">
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-500 via-indigo-500 to-blue-600 
                      rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 
                      border-4 border-white animate-float">
                      <HelpCircle className="w-16 h-16 text-white animate-pulse-glow" />
                    </div>

                    {/* Orbiting Particles */}
                    {[0, 60, 120, 180, 240, 300].map((angle, idx) => (
                      <div
                        key={idx}
                        className={`absolute left-1/2 top-1/2 w-4 h-4 rounded-full shadow-lg transition-all duration-500
                          ${idx % 3 === 0 ? 'bg-cyan-400 shadow-cyan-400/50' : 
                            idx % 3 === 1 ? 'bg-indigo-400 shadow-indigo-400/50' : 
                            'bg-blue-400 shadow-blue-400/50'}
                          ${activeOrbit === idx ? 'scale-150' : 'scale-100'}
                        `}
                        style={{
                          animation: `orbit 8s linear infinite`,
                          animationDelay: `${idx * 0.5}s`
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Category Cards Orbiting */}
              {faqCategories.map((category, index) => {
                const Icon = category.icon;
                const angle = (index * 360) / faqCategories.length;
                const radius = 220;
                const x = 50 + (radius * Math.cos((angle * Math.PI) / 180)) / 6;
                const y = 50 + (radius * Math.sin((angle * Math.PI) / 180)) / 6;

                return (
                  <div
                    key={index}
                    className="absolute transition-all duration-700 animate-scale-in"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      animationDelay: `${index * 0.15}s`
                    }}
                  >
                    {/* Connection Line */}
                    <svg className="absolute w-full h-full pointer-events-none" 
                      style={{ 
                        left: '50%', 
                        top: '50%',
                        width: '600px',
                        height: '600px',
                        transform: 'translate(-50%, -50%)'
                      }}>
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke={category.color === 'cyan' ? 'rgba(6, 182, 212, 0.3)' : 
                                category.color === 'purple' ? 'rgba(168, 85, 247, 0.3)' :
                                category.color === 'green' ? 'rgba(34, 197, 94, 0.3)' :
                                category.color === 'rose' ? 'rgba(244, 63, 94, 0.3)' :
                                category.color === 'amber' ? 'rgba(251, 191, 36, 0.3)' :
                                'rgba(59, 130, 246, 0.3)'}
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        className="animate-dash"
                      />
                    </svg>

                    {/* Category Card */}
                    <div className="relative group cursor-pointer">
                      <div className={`
                        relative bg-white backdrop-blur-xl 
                        border-2 rounded-2xl p-4 w-32 h-32
                        shadow-xl transition-all duration-500
                        hover:scale-110 hover:shadow-2xl
                        flex flex-col items-center justify-center gap-2
                        ${category.color === 'cyan' ? 'border-cyan-300 hover:border-cyan-500 hover:shadow-cyan-500/50' :
                          category.color === 'purple' ? 'border-purple-300 hover:border-purple-500 hover:shadow-purple-500/50' :
                          category.color === 'green' ? 'border-green-300 hover:border-green-500 hover:shadow-green-500/50' :
                          category.color === 'rose' ? 'border-rose-300 hover:border-rose-500 hover:shadow-rose-500/50' :
                          category.color === 'amber' ? 'border-amber-300 hover:border-amber-500 hover:shadow-amber-500/50' :
                          'border-blue-300 hover:border-blue-500 hover:shadow-blue-500/50'
                        }
                      `}>
                        {/* Icon */}
                        <div className={`
                          w-12 h-12 rounded-xl flex items-center justify-center
                          transition-all duration-500 group-hover:rotate-12
                          ${category.color === 'cyan' ? 'bg-gradient-to-br from-cyan-100 to-cyan-200' :
                            category.color === 'purple' ? 'bg-gradient-to-br from-purple-100 to-purple-200' :
                            category.color === 'green' ? 'bg-gradient-to-br from-green-100 to-green-200' :
                            category.color === 'rose' ? 'bg-gradient-to-br from-rose-100 to-rose-200' :
                            category.color === 'amber' ? 'bg-gradient-to-br from-amber-100 to-amber-200' :
                            'bg-gradient-to-br from-blue-100 to-blue-200'
                          }
                        `}>
                          <Icon className={`
                            w-6 h-6
                            ${category.color === 'cyan' ? 'text-cyan-600' :
                              category.color === 'purple' ? 'text-purple-600' :
                              category.color === 'green' ? 'text-green-600' :
                              category.color === 'rose' ? 'text-rose-600' :
                              category.color === 'amber' ? 'text-amber-600' :
                              'text-blue-600'
                            }
                          `} />
                        </div>

                        {/* Title */}
                        <h3 className="text-gray-900 font-bold text-xs text-center">
                          {category.title}
                        </h3>

                        {/* Hover Glow */}
                        <div className={`
                          absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl
                          ${category.color === 'cyan' ? 'bg-cyan-400/30' :
                            category.color === 'purple' ? 'bg-purple-400/30' :
                            category.color === 'green' ? 'bg-green-400/30' :
                            category.color === 'rose' ? 'bg-rose-400/30' :
                            category.color === 'amber' ? 'bg-amber-400/30' :
                            'bg-blue-400/30'
                          }
                        `}></div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Floating Particles */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full animate-float-particle"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    background: i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#6366f1' : '#3b82f6',
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${3 + Math.random() * 3}s`,
                  }}
                ></div>
              ))}

              {/* Info Badges */}
              <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl border-2 border-cyan-200 rounded-2xl p-4 shadow-xl animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-100 to-indigo-100 rounded-lg flex items-center justify-center">
                    <Book className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold text-sm">68 Topics</div>
                    <div className="text-gray-500 text-xs">Categories</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl border-2 border-indigo-200 rounded-2xl p-4 shadow-xl animate-fade-in" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-100 to-cyan-100 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-bold text-sm">Quick Help</div>
                    <div className="text-gray-500 text-xs">Always Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.3);
            opacity: 0;
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.5)); }
          50% { filter: drop-shadow(0 0 40px rgba(99, 102, 241, 0.8)); }
        }
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(70px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(70px) rotate(-360deg); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes float-particle {
          0%, 100% {
            opacity: 0;
            transform: translateY(0) scale(0);
          }
          50% {
            opacity: 1;
            transform: translateY(-40px) scale(1.5);
          }
        }
        @keyframes dash {
          to { stroke-dashoffset: -20; }
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
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-float-particle {
          animation: float-particle ease-in-out infinite;
        }
        .animate-dash {
          animation: dash 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default VoIPFAQHeader;