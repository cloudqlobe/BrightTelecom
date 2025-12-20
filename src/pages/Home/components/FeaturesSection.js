import React, { useState, useEffect } from 'react';
import { Phone, Shield, Zap, Globe, Users, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
 
const VoIPFeaturesSection = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
 
  const features = [
    {
      icon: Phone,
      title: 'HD Call Quality',
      description: 'Crystal-clear voice calls with advanced noise cancellation and echo suppression.',
      stats: { value: 'HD', label: 'Opus Codec' },
      gradient: 'from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50',
      border: 'border-blue-200',
      hoverBorder: 'hover:border-blue-400',
      shadow: 'shadow-blue-200/50',
      glowBg: 'bg-blue-100/80',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      textColor: 'text-blue-600',
      badgeBg: 'bg-blue-50',
      badgeBorder: 'border-blue-200'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade AES-256 encryption with end-to-end security protocols.',
      stats: { value: 'AES-256', label: 'Encryption' },
      gradient: 'from-purple-500 to-purple-600',
      lightBg: 'bg-purple-50',
      border: 'border-purple-200',
      hoverBorder: 'hover:border-purple-400',
      shadow: 'shadow-purple-200/50',
      glowBg: 'bg-purple-100/80',
      iconBg: 'bg-purple-100',
      iconColor: 'text-purple-600',
      textColor: 'text-purple-600',
      badgeBg: 'bg-purple-50',
      badgeBorder: 'border-purple-200'
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Connect seamlessly across 150+ countries with local numbers.',
      stats: { value: '150+', label: 'Countries' },
      gradient: 'from-emerald-500 to-emerald-600',
      lightBg: 'bg-emerald-50',
      border: 'border-emerald-200',
      hoverBorder: 'hover:border-emerald-400',
      shadow: 'shadow-emerald-200/50',
      glowBg: 'bg-emerald-100/80',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      textColor: 'text-emerald-600',
      badgeBg: 'bg-emerald-50',
      badgeBorder: 'border-emerald-200'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Video conferencing, screen sharing, and team chat in one platform.',
      stats: { value: '1000+', label: 'Participants' },
      gradient: 'from-orange-500 to-orange-600',
      lightBg: 'bg-orange-50',
      border: 'border-orange-200',
      hoverBorder: 'hover:border-orange-400',
      shadow: 'shadow-orange-200/50',
      glowBg: 'bg-orange-100/80',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      textColor: 'text-orange-600',
      badgeBg: 'bg-orange-50',
      badgeBorder: 'border-orange-200'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time analytics and detailed reporting for data-driven decisions.',
      stats: { value: '50+', label: 'Reports' },
      gradient: 'from-pink-500 to-pink-600',
      lightBg: 'bg-pink-50',
      border: 'border-pink-200',
      hoverBorder: 'hover:border-pink-400',
      shadow: 'shadow-pink-200/50',
      glowBg: 'bg-pink-100/80',
      iconBg: 'bg-pink-100',
      iconColor: 'text-pink-600',
      textColor: 'text-pink-600',
      badgeBg: 'bg-pink-50',
      badgeBorder: 'border-pink-200'
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Get started in minutes with our cloud-based infrastructure.',
      stats: { value: '5 min', label: 'Setup' },
      gradient: 'from-amber-500 to-amber-600',
      lightBg: 'bg-amber-50',
      border: 'border-amber-200',
      hoverBorder: 'hover:border-amber-400',
      shadow: 'shadow-amber-200/50',
      glowBg: 'bg-amber-100/80',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-600',
      textColor: 'text-amber-600',
      badgeBg: 'bg-amber-50',
      badgeBorder: 'border-amber-200'
    }
  ];
 
  return (
    <section className="relative bg-white overflow-hidden py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 h-48 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-purple-200/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-emerald-200/10 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '4s' }}></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px] sm:bg-[size:48px_48px] md:bg-[size:64px_64px]"></div>
      </div>
 
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slate-900 mb-4 sm:mb-6 leading-tight px-4">
            Everything You Need for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
              Modern Communication
            </span>
          </h2>
 
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Discover the comprehensive suite of features designed to elevate your business communications.
          </p>
        </div>
 
        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            const isHovered = hoveredCard === index;
 
            return (
              <div
                key={index}
                className={`
                  group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 transition-all duration-500 cursor-pointer overflow-hidden
                  ${isActive || isHovered
                    ? `${feature.border} shadow-2xl ${feature.shadow} scale-105 -translate-y-2`
                    : `border-slate-200 ${feature.hoverBorder} hover:shadow-xl`
                  }
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${feature.gradient} rounded-full animate-ping`}></div>
                )}
 
                {/* Glow Effect */}
                {(isActive || isHovered) && (
                  <div className={`absolute inset-0 ${feature.glowBg} rounded-2xl sm:rounded-3xl blur-2xl -z-10 animate-pulse-glow`}></div>
                )}
 
                {/* Gradient Orb Background */}
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 ${feature.lightBg} rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-50`}></div>
 
                {/* Icon */}
                <div className={`
                  relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 transition-all duration-300
                  ${isActive || isHovered
                    ? `bg-gradient-to-br ${feature.gradient} scale-110 rotate-3 shadow-lg ${feature.shadow}`
                    : `${feature.iconBg}`
                  }
                `}>
                  <Icon className={`w-6 h-6 sm:w-8 sm:h-8 transition-colors ${isActive || isHovered ? 'text-white' : feature.iconColor
                    }`} />
                </div>
 
                {/* Title */}
                <h3 className={`text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3 transition-colors ${isActive || isHovered ? feature.textColor : ''}`}>
                  {feature.title}
                </h3>
 
                {/* Description */}
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">
                  {feature.description}
                </p>
 
                {/* Stats Badge */}
                <div className={`inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 ${feature.badgeBg} rounded-lg sm:rounded-xl border ${feature.badgeBorder}`}>
                  <div className="text-center">
                    <div className={`text-base sm:text-lg font-bold ${feature.textColor}`}>{feature.stats.value}</div>
                    <div className="text-xs text-slate-500">{feature.stats.label}</div>
                  </div>
                </div>
 
                {/* Progress Bar */}
                <div className="mt-4 sm:mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${feature.gradient} transition-all duration-700 ${isActive || isHovered ? 'w-full' : 'w-0'
                      }`}
                  ></div>
                </div>
 
                {/* Arrow Indicator */}
                <div className={`
                  absolute bottom-6 sm:bottom-8 right-6 sm:right-8 transition-all duration-300
                  ${isActive || isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                `}>
                  <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.textColor}`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
 
      <style jsx>{`
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-20px, -20px);
          }
        }
        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
      `}</style>
    </section>
  );
};
 
export default VoIPFeaturesSection;