import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe, Headphones, CheckCircle, ArrowRight } from 'lucide-react';
import { PhoneCall } from 'lucide-react';

// Individual Contact Card Component
const ContactCard = ({ method, index, isActive, radius, mobileTop }) => {
  const Icon = method.icon;
  const angleInRadians = (method.angle * Math.PI) / 180;
  const x = Math.cos(angleInRadians) * radius;
  const y = Math.sin(angleInRadians) * radius;

  return (
    <div
      className="absolute left-1/2 transition-all duration-700"
      style={{
        top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? '50%' : mobileTop,
        transform:
          typeof window !== 'undefined' && window.innerWidth >= 1024
            ? `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${isActive ? 1.05 : 1})`
            : 'translate(-50%, 0)',
      }}
    >
      {/* Connection Line - Only on desktop */}
      <svg className="hidden lg:block absolute w-screen h-screen pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
        <line
          x1="50%"
          y1="50%"
          x2={`calc(50% + ${x}px)`}
          y2={`calc(50% + ${y}px)`}
          stroke={isActive ? 'rgba(139, 92, 246, 0.4)' : 'rgba(203, 213, 225, 0.5)'}
          strokeWidth={isActive ? '2' : '1'}
          className="transition-all duration-500"
        />

        {/* Traveling Dot */}
        {isActive && (
          <circle r="5" fill="#8b5cf6" className="animate-travel-dot">
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path={`M ${typeof window !== 'undefined' ? window.innerWidth * 0.5 : 500} ${typeof window !== 'undefined' ? window.innerHeight * 0.5 : 300} 
                     L ${typeof window !== 'undefined' ? window.innerWidth * 0.5 + x : 500 + x} ${typeof window !== 'undefined' ? window.innerHeight * 0.5 + y : 300 + y}`}
            />
          </circle>
        )}
      </svg>

      {/* Card */}
      <div className={`relative group cursor-pointer animate-pop-in`}
        style={{ animationDelay: `${index * 0.15}s` }}>

        {/* Glow Effect */}
        {isActive && (
          <div className={`absolute inset-0 rounded-2xl blur-xl animate-glow-pulse
            ${method.color === 'violet' ? 'bg-violet-400/30' :
              method.color === 'cyan' ? 'bg-cyan-400/30' :
                method.color === 'pink' ? 'bg-pink-400/30' :
                  'bg-indigo-400/30'
            }`}></div>
        )}

        {/* Card Content */}
        <div className={`
          relative ${method.bgColor} text-white
          rounded-xl p-3 sm:p-4 w-44 sm:w-52 md:w-56 lg:w-40
          shadow-lg transition-all duration-500
          ${isActive
            ? 'shadow-2xl scale-105'
            : 'hover:shadow-xl hover:scale-102'
          }
        `}>
          {/* Icon */}
          <div className={`
            w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 rounded-xl flex items-center justify-center mb-2 sm:mb-3
            bg-white/20 backdrop-blur-sm
            transition-all duration-500
            ${isActive ? 'animate-icon-bounce bg-white/30' : ''}
          `}>
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-white text-xs sm:text-sm md:text-base mb-2 font-semibold">
            {method.title}
          </h3>

          {/* Action Arrow */}
          <div className="flex items-center gap-2 text-xs
            group-hover:gap-3 transition-all text-white">
            <span className="text-xs">Connect Now</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>

          {/* Decorative corner accent */}
          <div className="absolute top-2 right-2 w-6 h-6 sm:w-7 sm:h-7 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 sm:w-7 sm:h-7 border-b-2 border-l-2 border-white/30 rounded-bl-xl"></div>
        </div>

        {/* Active Indicator */}
        {isActive && (
          <>
            <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          </>
        )}
      </div>
    </div>
  );
};

const VoIPContactHeader = () => {
  const [activeContact, setActiveContact] = useState(0);
  const [messageCount, setMessageCount] = useState(0);
  const [pulseActive, setPulseActive] = useState(false);

  useEffect(() => {
    const contactInterval = setInterval(() => {
      setActiveContact((prev) => (prev + 1) % 4);
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 1000);
    }, 3000);
    return () => clearInterval(contactInterval);
  }, []);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageCount((prev) => (prev + 1) % 100);
    }, 50);
    setTimeout(() => clearInterval(messageInterval), 2000);
    return () => clearInterval(messageInterval);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      info: 'support@voip.com',
      desc: 'Get responses within 2 hours',
      color: 'violet',
      bgColor: 'bg-gradient-to-br from-red-400 to-rose-600',
      angle: 0
    },
    {
      icon: Phone,
      title: 'Call Center',
      info: '+1 (800) 123-4567',
      desc: 'Speak with our experts',
      color: 'cyan',
      bgColor: 'bg-gradient-to-br from-orange-300 to-amber-500',
      angle: 90
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      info: 'Chat Now',
      desc: 'Instant messaging support',
      color: 'indigo',
      bgColor: 'bg-gradient-to-br from-green-500 to-emerald-500',
      angle: 180
    },
    {
      icon: MapPin,
      title: 'Our Office',
      info: '123 VoIP Street',
      desc: 'Visit us in person',
      color: 'pink',
      bgColor: 'bg-gradient-to-br from-indigo-400 to-blue-600',
      angle: 270
    }
  ];

  return (
<div className="min-h-auto sm:min-h-screen relative overflow-hidden bg-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="2" fill="#8b5cf6" />
                <line x1="50" y1="50" x2="100" y2="50" stroke="#8b5cf6" strokeWidth="1" />
                <line x1="50" y1="50" x2="50" y2="0" stroke="#06b6d4" strokeWidth="1" />
                <circle cx="100" cy="50" r="2" fill="#06b6d4" />
                <circle cx="50" cy="0" r="2" fill="#6366f1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Soft Gradient Spheres */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-violet-200/20 rounded-full blur-3xl animate-float-sphere"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cyan-200/20 rounded-full blur-3xl animate-float-sphere" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-indigo-200/20 rounded-full blur-3xl animate-float-sphere" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2
gap-8 sm:gap-10 md:gap-12 lg:gap-16
items-center
min-h-auto sm:min-h-[500px] lg:min-h-[85vh]">

          {/* Left Side Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 sm:space-y-6 lg:space-y-8 lg:mt-[-250px] lg:ml-[66px] px-2 sm:px-4 lg:px-0">

            {/* Main Heading */}
            <div className="space-y-3 sm:space-y-4 animate-slide-up mt-8 sm:mt-12 lg:mt-[100px]" style={{ animationDelay: '0.1s' }}>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gray-600 leading-tight max-w-full lg:max-w-[620px] font-light">
                The Future of{" "}
                <span className="text-transparent bg-clip-text bg-orange-600">
                  Connectivity
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="font-sans text-gray-600 text-sm sm:text-base md:text-[17px] leading-6 sm:leading-7 tracking-normal text-justify max-w-full lg:max-w-[620px]">
              Experience crystal-clear voice quality. Designed for reliability and performance, our platform delivers ultra-low latency, intelligent call routing, and 99.9% uptime—keeping your business seamlessly connected.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full max-w-md lg:max-w-none">
              <button className="group w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 via-cyan-600 to-indigo-600 text-white text-sm sm:text-base md:text-lg hover:shadow-2xl hover:shadow-violet-400/50 transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 relative overflow-hidden">
                <span className="relative z-10">Get Started Free</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>

              <button className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-3 md:py-4 bg-white border-2 border-gray-300 text-gray-900 text-sm sm:text-base md:text-lg hover:bg-violet-50 hover:border-violet-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Request Demo
              </button>
            </div>
          </div>

          {/* Right Side - Contact Methods Circle */}
          <div className="hidden lg:flex relative h-[400px] sm:h-[450px] md:h-[480px] flex items-center justify-center lg:mt-[-180px] lg:ml-[30px]">
            <div className="relative w-full h-full">
              {/* Central Phone Icon */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative">
                  {/* Pulsing Ring Background */}
                  <div className="absolute inset-0 -m-6 sm:-m-8">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-violet-400/20 animate-phone-pulse"></div>
                  </div>
                  <div className="absolute inset-0 -m-4 sm:-m-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-violet-400/30 animate-phone-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </div>

                  {/* Center Card with Phone Icon */}
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-violet-600 via-cyan-600 to-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center animate-phone-ring">
                    <PhoneCall className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />

                    {/* Corner Decorations */}
                    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-t-2 border-r-2 border-white/50 rounded-tr-lg"></div>
                    <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2 w-2.5 h-2.5 sm:w-3 sm:h-3 border-b-2 border-l-2 border-white/50 rounded-bl-lg"></div>
                  </div>

                  {/* Rotating Signal Waves */}
                  <div className="absolute inset-0 -m-3 sm:-m-4 animate-phone-rotate">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-violet-400/40 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Contact Method Cards */}
              <ContactCard
                method={contactMethods[0]}
                index={0}
                isActive={activeContact === 0}
                radius={window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 140 : window.innerWidth < 1024 ? 160 : 170}
                mobileTop="8%"
              />

              <ContactCard
                method={contactMethods[1]}
                index={1}
                isActive={activeContact === 1}
                radius={window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 140 : window.innerWidth < 1024 ? 160 : 170}
                mobileTop="33%"
              />

              <ContactCard
                method={contactMethods[2]}
                index={2}
                isActive={activeContact === 2}
                radius={window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 140 : window.innerWidth < 1024 ? 160 : 170}
                mobileTop="58%"
              />

              <ContactCard
                method={contactMethods[3]}
                index={3}
                isActive={activeContact === 3}
                radius={window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 140 : window.innerWidth < 1024 ? 160 : 170}
                mobileTop="83%"
              />

              {/* Floating Stats */}
              <div className="hidden lg:block absolute top-[10%] right-[16%] animate-float-gentle">
                <div style={{ background: "#ffbe00" }} className="border-2 border-gray-200 rounded-xl p-3 sm:p-3.5 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg">98%</div>
                      <div className="text-white text-xs">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block absolute bottom-[13%] left-[13%] animate-float-gentle" style={{ animationDelay: '1s' }}>
                <div className="bg-gradient-to-br from-pink-400 to-rose-500 border-2 border-gray-200 rounded-xl p-3 sm:p-3.5 shadow-lg">
                  <div className="flex items-center gap-2 sm:gap-2.5">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 bg-white rounded-lg flex items-center justify-center">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base sm:text-lg">24/7</div>
                      <div className="text-white text-xs">Available</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="hidden lg:block absolute w-1.5 h-1.5 rounded-full animate-twinkle"
                  style={{
                    left: `${25 + Math.random() * 50}%`,
                    top: `${25 + Math.random() * 50}%`,
                    background: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#06b6d4' : '#6366f1',
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float-sphere {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.95);
          }
        }
        @keyframes pop-in {
          from {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(1.05);
          }
        }
        @keyframes icon-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes float-gentle {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        @keyframes phone-ring {
          0%, 100% {
            transform: rotate(0deg);
          }
          10% {
            transform: rotate(-15deg);
          }
          20% {
            transform: rotate(15deg);
          }
          30% {
            transform: rotate(-15deg);
          }
          40% {
            transform: rotate(15deg);
          }
          50% {
            transform: rotate(0deg);
          }
        }
        @keyframes phone-pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        @keyframes phone-rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animate-float-sphere {
          animation: float-sphere 12s ease-in-out infinite;
        }
        .animate-pop-in {
          animation: pop-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          opacity: 0;
        }
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }
        .animate-icon-bounce {
          animation: icon-bounce 1.5s ease-in-out infinite;
        }
        .animate-float-gentle {
          animation: float-gentle 5s ease-in-out infinite;
        }
        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }
        .animate-phone-ring {
          animation: phone-ring 2s ease-in-out infinite;
        }
        .animate-phone-pulse {
          animation: phone-pulse 2s ease-out infinite;
        }
        .animate-phone-rotate {
          animation: phone-rotate 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default VoIPContactHeader;