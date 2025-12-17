import { useState, useEffect } from 'react';
import { Mic, Volume2, Wifi, Radio, Smartphone, Headphones, Zap, Signal } from 'lucide-react';

export default function VoIPHeader() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 0.02);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const floatingIcons = [
    { Icon: Mic, color: 'from-orange-500 to-orange-600', delay: 0, size: 'large' },
    { Icon: Volume2, color: 'from-green-500 to-green-600', delay: 1.2, size: 'medium' },
    { Icon: Wifi, color: 'from-yellow-500 to-yellow-600', delay: 2.4, size: 'large' },
    { Icon: Radio, color: 'from-indigo-400 to-violet-500', delay: 3.6, size: 'small' },
    { Icon: Smartphone, color: 'from-violet-400 to-cyan-500', delay: 4.8, size: 'medium' },
    { Icon: Headphones, color: 'from-red-400 to-red-500', delay: 0.6, size: 'large' },
    { Icon: Zap, color: 'from-indigo-600 to-violet-700', delay: 1.8, size: 'small' },
    { Icon: Signal, color: 'from-cyan-600 to-violet-600', delay: 3, size: 'medium' }
  ];

  const particles = Array.from({ length: 30 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    speed: Math.random() * 0.5 + 0.2,
    delay: i * 0.3
  }));

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8 overflow-hidden">
      <div className="max-w-7xl w-full grid grid-cols-1 xl:grid-cols-2 gap-16 items-center relative z-10">

        {/* Left Side - Content */}
        <div className="space-y-8 flex flex-col items-center text-center xl:items-start xl:text-left xl:mt-[-80px]">
          <div className="space-y-2">
            <h1 style={{ fontSize: "38px" }} className="text-3xl leading-tight">
              <span className="text-gray-600">Crystal Clear </span>
              <span className="text-transparent bg-clip-text bg-orange-500 mt-2">
                Communication
              </span>
            </h1>
          </div>

          <p className="font-inter text-gray-600 text-[17px] leading-7 tracking-normal text-justify">
            Transform your business communications with enterprise-grade VoIP solutions.
            Experience unparalleled call quality, seamless integration, and advanced features
            that scale with your growing team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 w-full">
            <div className="w-full text-center p-4 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-700">
                99.9%
              </div>
              <div className="text-sm text-gray-600 mt-1">Uptime</div>
            </div>

            <div className="w-full text-center p-4 bg-gradient-to-br from-violet-50 to-violet-100">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-700">
                HD
              </div>
              <div className="text-sm text-gray-600 mt-1">Quality</div>
            </div>

            <div className="w-full text-center p-4 bg-gradient-to-br from-cyan-50 to-cyan-100">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">
                24/7
              </div>
              <div className="text-sm text-gray-600 mt-1">Support</div>
            </div>
          </div>


          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-2 w-full md:justify-center">
            <button
              className="w-full sm:w-[200px] group relative px-8 py-4 
      bg-gradient-to-r from-indigo-500 via-violet-600 to-cyan-600 
      text-white squared-full font-semibold overflow-hidden 
      transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-violet-600 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              className="w-full sm:w-[200px] px-8 py-4 
      border-2 border-gray-900 text-gray-900 
      squared-full font-semibold relative overflow-hidden group
      hover:bg-gray-900 hover:text-white hover:shadow-xl 
      transition-all duration-300"
            >
              <span className="relative z-10">Get Connected</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </button>
          </div>

        </div>

        {/* Right Side - New 3D Network Design */}
        <div className="relative h-[600px] items-center justify-center mt-[-150px] ml-[150px] hidden xl:flex">

          {/* Animated gradient mesh background */}
          <div className="absolute inset-0">
            <div
              className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
              style={{
                transform: `translate(${Math.sin(time * 0.5) * 80}px, ${Math.cos(time * 0.3) * 60}px) scale(${1 + Math.sin(time * 0.4) * 0.3})`
              }}
            />
            <div
              className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
              style={{
                transform: `translate(${Math.cos(time * 0.4) * -70}px, ${Math.sin(time * 0.5) * -50}px) scale(${1 + Math.cos(time * 0.5) * 0.3})`
              }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-violet-300/15 to-cyan-300/15 rounded-full blur-3xl"
              style={{
                transform: `translate(-50%, -50%) translate(${Math.sin(time * 0.6) * 50}px, ${Math.cos(time * 0.7) * 50}px)`
              }}
            />
          </div>

          {/* Central hub with geometric design */}
          <div className="relative z-10">
            {/* Rotating hexagon rings */}
            {[0, 1, 2].map((ring) => (
              <div
                key={ring}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{
                  width: `${120 + ring * 60}px`,
                  height: `${120 + ring * 60}px`,
                  transform: `translate(-50%, -50%) rotate(${time * 20 * (ring % 2 === 0 ? 1 : -1)}deg)`,
                  opacity: 0.6 - ring * 0.15
                }}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: ring % 3 === 0
                      ? 'linear-gradient(90deg, #6366f1, #8b5cf6)'
                      : ring % 3 === 1
                        ? 'linear-gradient(90deg, #8b5cf6, #06b6d4)'
                        : 'linear-gradient(90deg, #06b6d4, #6366f1)',
                    clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
                    border: '2px solid currentColor',
                    boxShadow: `0 0 20px ${ring % 3 === 0 ? '#6366f1' : ring % 3 === 1 ? '#8b5cf6' : '#06b6d4'}`
                  }}
                />
              </div>
            ))}

            {/* Center core */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24"
              style={{ transform: `translate(-50%, -50%) scale(${1 + Math.sin(time * 1.5) * 0.15})` }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-600 flex items-center justify-center shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-transparent animate-pulse" />
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center relative z-10">
                  <Wifi className="w-8 h-8 text-transparent bg-clip-text" style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }} />
                </div>
              </div>
            </div>
          </div>

          {/* Floating icons in orbital pattern */}
          {floatingIcons.map(({ Icon, color, delay, size }, index) => {
            const angle = (time * 0.4 + delay) * Math.PI / 2;
            const orbitRadius = size === 'large' ? 220 : size === 'medium' ? 180 : 140;
            const radius = orbitRadius + Math.sin(time * 0.8 + delay) * 20;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const iconSize = size === 'large' ? 'w-14 h-14' : size === 'medium' ? 'w-12 h-12' : 'w-10 h-10';
            const iconInnerSize = size === 'large' ? 'w-7 h-7' : size === 'medium' ? 'w-6 h-6' : 'w-5 h-5';
            const iconScale = 1 + Math.sin(time * 1.5 + delay) * 0.1;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${iconScale})`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className={`${iconSize} bg-gradient-to-br ${color} rounded-xl flex items-center justify-center shadow-xl backdrop-blur-sm border border-white/20 hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${iconInnerSize} text-white`} strokeWidth={2.5} />
                </div>
                {/* Connection pulse */}
                <div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: `linear-gradient(135deg, ${index % 3 === 0 ? '#6366f1' : index % 3 === 1 ? '#8b5cf6' : '#06b6d4'}, transparent)`,
                    opacity: 0.3 + Math.sin(time * 2 + delay) * 0.2,
                    transform: `scale(${1.2 + Math.sin(time * 2 + delay) * 0.3})`,
                    filter: 'blur(8px)'
                  }}
                />
              </div>
            );
          })}

          {/* Data flow lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
              </linearGradient>
            </defs>
            {floatingIcons.map((_, index) => {
              const angle = (time * 0.4 + index * 1.2) * Math.PI / 2;
              const orbitRadius = 200;
              const radius = orbitRadius + Math.sin(time * 0.8 + index * 1.2) * 20;
              const x = 50 + (Math.cos(angle) * radius * 100) / 600;
              const y = 50 + (Math.sin(angle) * radius * 100) / 600;

              return (
                <g key={index}>
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="url(#line-grad)"
                    strokeWidth="1.5"
                    strokeDasharray="8,4"
                    style={{
                      strokeDashoffset: -time * 15
                    }}
                  />
                  <circle
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r="3"
                    fill={index % 3 === 0 ? '#6366f1' : index % 3 === 1 ? '#8b5cf6' : '#06b6d4'}
                    opacity={0.6 + Math.sin(time * 3 + index) * 0.4}
                  />
                </g>
              );
            })}
          </svg>

          {/* Pulsing rings */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
              style={{
                width: `${100 + ((time * 40 + i * 40) % 200)}px`,
                height: `${100 + ((time * 40 + i * 40) % 200)}px`,
                opacity: 0.4 - ((time * 40 + i * 40) % 200) / 500,
                border: `2px solid ${i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'}`,
                boxShadow: `0 0 20px ${i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#8b5cf6' : '#06b6d4'}`
              }}
            />
          ))}

        </div>

      </div>
    </div>
  );
}