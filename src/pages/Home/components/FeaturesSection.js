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
      stats: { value: 'HD', label: 'Opus Codec' }
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade AES-256 encryption with end-to-end security protocols.',
      stats: { value: 'AES-256', label: 'Encryption' }
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Connect seamlessly across 150+ countries with local numbers.',
      stats: { value: '150+', label: 'Countries' }
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Video conferencing, screen sharing, and team chat in one platform.',
      stats: { value: '1000+', label: 'Participants' }
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time analytics and detailed reporting for data-driven decisions.',
      stats: { value: '50+', label: 'Reports' }
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Get started in minutes with our cloud-based infrastructure.',
      stats: { value: '5 min', label: 'Setup' }
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200/20 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", fontWeight: "300" }} className="text-4xl md:text-5xl text-slate-900 mb-4">
            Everything You Need for
            <br />
            <span style={{ marginLeft: "15px" }} className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
              Modern Communication
            </span>
          </h2>

          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Discover the comprehensive suite of features designed to elevate your business communications.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className={`
                  group relative bg-white rounded-2xl p-8 border-2 transition-all duration-500 cursor-pointer
                  ${isActive || isHovered
                    ? 'border-blue-600 shadow-2xl shadow-blue-200/50 scale-105 -translate-y-2'
                    : 'border-slate-200 hover:border-blue-300 hover:shadow-lg'
                  }
                `}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-600 rounded-full animate-ping"></div>
                )}

                {/* Glow Effect */}
                {(isActive || isHovered) && (
                  <div className="absolute inset-0 bg-blue-100/50 rounded-2xl blur-xl -z-10 animate-pulse-glow"></div>
                )}

                {/* Icon */}
                <div className={`
                  w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                  ${isActive || isHovered
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 scale-110 rotate-3'
                    : 'bg-blue-100'
                  }
                `}>
                  <Icon className={`w-8 h-8 transition-colors ${isActive || isHovered ? 'text-white' : 'text-blue-600'
                    }`} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-600">{feature.stats.value}</div>
                    <div className="text-xs text-slate-500">{feature.stats.label}</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-700 ${isActive || isHovered ? 'w-full' : 'w-0'
                      }`}
                  ></div>
                </div>

                {/* Arrow Indicator */}
                <div className={`
                  absolute bottom-8 right-8 transition-all duration-300
                  ${isActive || isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}
                `}>
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Indicators */}
        <div className="flex justify-center gap-2">
          {features.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`h-1 rounded-full transition-all duration-300 ${activeFeature === index
                  ? 'bg-blue-600 w-8'
                  : 'bg-slate-300 hover:bg-blue-400 w-1'
                }`}
              aria-label={`Go to feature ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-300/50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              Explore All Features
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contact Sales
            </button>
          </div>
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
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default VoIPFeaturesSection;