import { useState, useEffect } from 'react';
import { Phone, Shield, Zap, Globe, Users, BarChart3, CheckCircle2} from 'lucide-react';

const VoIPFeaturesPage = () => {
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
      description: 'Crystal-clear voice calls with advanced noise cancellation and echo suppression for professional communication.',
      color: 'blue',
      stats: [
        { label: 'Audio Quality', value: 'HD' },
        { label: 'Codec', value: 'Opus' },
        { label: 'Bitrate', value: '128kbps' }
      ],
      benefits: ['Crystal Clear Audio', 'Noise Cancellation', 'Echo Suppression', 'Adaptive Bitrate']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption with end-to-end security protocols to protect your sensitive business communications.',
      color: 'blue',
      stats: [
        { label: 'Encryption', value: 'AES-256' },
        { label: 'Compliance', value: 'GDPR' },
        { label: 'Security', value: '99.9%' }
      ],
      benefits: ['End-to-End Encryption', 'Secure Protocols', 'Compliance Ready', 'Data Protection']
    },
    {
      icon: Globe,
      title: 'Global Connectivity',
      description: 'Connect seamlessly across 150+ countries with our worldwide network infrastructure and local numbers.',
      color: 'blue',
      stats: [
        { label: 'Countries', value: '150+' },
        { label: 'POPs', value: '200+' },
        { label: 'Latency', value: '<50ms' }
      ],
      benefits: ['Global Coverage', 'Local Numbers', 'Low Latency', 'Regional POPs']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Empower your team with advanced collaboration tools including video conferencing and instant messaging.',
      color: 'blue',
      stats: [
        { label: 'Participants', value: '1000+' },
        { label: 'Screen Share', value: 'Yes' },
        { label: 'Recording', value: 'Cloud' }
      ],
      benefits: ['Video Conferencing', 'Screen Sharing', 'Team Chat', 'File Sharing']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time analytics and detailed reporting to help you make data-driven decisions for your business.',
      color: 'blue',
      stats: [
        { label: 'Real-time', value: 'Yes' },
        { label: 'Reports', value: '50+' },
        { label: 'Dashboard', value: 'Custom' }
      ],
      benefits: ['Call Analytics', 'Performance Metrics', 'Custom Reports', 'Live Monitoring']
    },
    {
      icon: Zap,
      title: 'Instant Deployment',
      description: 'Get started in minutes with our cloud-based infrastructure. No hardware required, just plug and play.',
      color: 'blue',
      stats: [
        { label: 'Setup Time', value: '5 min' },
        { label: 'Hardware', value: 'None' },
        { label: 'Uptime', value: '99.9%' }
      ],
      benefits: ['Quick Setup', 'Cloud Based', 'Auto Scaling', 'Zero Downtime']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-200/30 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Header */}
          {/* <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 text-sm font-semibold">Powerful Features</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Everything You Need for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Modern Communication
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover the comprehensive suite of features designed to elevate your business communications to the next level.
            </p>
          </div> */}

          {/* Main Features Section */}
          <div className="space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Core Features
              </h2>
              <p className="text-slate-600 text-lg">
                Explore the features that make our VoIP platform stand out
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        ? 'border-blue-600 shadow-2xl shadow-blue-200/50 scale-105'
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
                      <Icon className={`w-8 h-8 transition-colors ${
                        isActive || isHovered ? 'text-white' : 'text-blue-600'
                      }`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-slate-200">
                      {feature.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                          <div className="text-xs text-slate-500">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Benefits */}
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-700 ${
                          isActive || isHovered ? 'w-full' : 'w-0'
                        }`}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 shadow-2xl shadow-blue-300/50">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Communication?
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of businesses already using our platform to enhance their communication capabilities.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
                  Start Free Trial
                  <Zap className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-blue-700 text-white rounded-full font-semibold text-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 border-2 border-white/30">
                  <Phone className="w-5 h-5" />
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          {/* Feature Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveFeature(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeFeature === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-slate-300 hover:bg-blue-400'
                }`}
                aria-label={`Go to feature ${index + 1}`}
              ></button>
            ))}
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
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
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
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.6s ease-out forwards;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default VoIPFeaturesPage;