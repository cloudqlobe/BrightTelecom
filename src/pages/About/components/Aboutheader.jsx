import React, { useState, useEffect } from 'react';
import { Users, Target, Globe, TrendingUp } from 'lucide-react';

export default function AboutUsHeader() {
  const [time, setTime] = useState(0);
  const [particlePositions, setParticlePositions] = useState([]);

  useEffect(() => {
    // Initialize particles
    const particles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 0.5 + 0.2
    }));
    setParticlePositions(particles);

    const interval = setInterval(() => {
      setTime(prev => prev + 0.02);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Users, label: "500K+ Users", color: "from-orange-500 to-orange-600" },
    { icon: Globe, label: "150+ Countries", color: "from-green-500 to-green-600" },
    { icon: TrendingUp, label: "99.9% Uptime", color: "from-red-500 to-red-600" },
    { icon: Target, label: "Industry Leader", color: "from-violet-600 to-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">

      {/* Animated background particles */}
      {particlePositions.map((particle) => {
        const yOffset = ((time * particle.speed * 10) % 100);
        const xWobble = Math.sin(time * particle.speed + particle.id) * 5;

        return (
          <div
            key={particle.id}
            className={`absolute rounded-full ${particle.id % 3 === 0 ? 'bg-violet-300' : particle.id % 3 === 1 ? 'bg-cyan-300' : 'bg-indigo-300'
              }`}
            style={{
              left: `${particle.x + xWobble}%`,
              top: `${(particle.y + yOffset) % 100}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: 0.25,
              transition: 'all 0.3s ease-out'
            }}
          />
        );
      })}

      <div className="max-w-7xl w-full grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center relative z-10">

        {/* Left Side - Content */}
        <div className="space-y-6 sm:space-y-8 flex flex-col items-center text-center xl:items-start xl:text-left xl:mt-[-80px]">
          <div className="space-y-3 sm:space-y-4">
            <div className="inline-block px-4 sm:px-6 py-2 bg-white rounded-full border-2 border-gray-400">
              <span className="text-xs sm:text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                ✨ About Our Company
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              <span className="text-gray-900">Powering </span>
              <span className="text-transparent bg-clip-text bg-orange-600">
                Global Communication
              </span>
            </h1>
          </div>

          <p className="font-sans text-gray-600 text-base sm:text-[17px] leading-6 sm:leading-7 tracking-normal text-justify px-2 sm:px-0">
            We're on a mission to transform how businesses communicate. With cutting-edge VoIP technology and a passion for innovation, we're making crystal-clear communication accessible to everyone, everywhere.
          </p>

          {/* Mini stats */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full max-w-md xl:max-w-none">
            <div className="w-full sm:flex-1 xl:w-full xl:max-w-[228px] text-center p-3 sm:p-4 bg-gradient-to-br from-violet-50 to-violet-100">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-700">
                2024
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Founded</div>
            </div>

            <div className="w-full sm:flex-1 xl:w-full xl:max-w-[228px] text-center p-3 sm:p-4 bg-gradient-to-br from-cyan-50 to-cyan-100">
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-indigo-700">
                500K+
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">Active Users</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 w-full max-w-md xl:max-w-none">
            <button className="w-full sm:flex-1 xl:w-full xl:max-w-[228px] group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 via-cyan-500 to-indigo-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-300/50 hover:scale-105">
              <span className="relative z-10 text-sm sm:text-base">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="w-full sm:flex-1 xl:w-full xl:max-w-[228px] px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white hover:shadow-xl transition-all duration-300 text-sm sm:text-base">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side - 3D Globe Network Animation */}
        <div className="hidden lg:flex relative h-[400px] sm:h-[480px] md:h-[520px] flex items-center justify-center xl:mt-[-130px] xl:ml-[130px]">
          {/* Glowing background orbs */}
          <div className="absolute inset-0">
            <div
              className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-white rounded-full blur-3xl"
              style={{ transform: `scale(${1 + Math.sin(time) * 0.2})` }}
            />
            <div
              className="absolute bottom-1/3 right-1/4 w-56 h-56 sm:w-68 sm:h-68 md:w-80 md:h-80 bg-white rounded-full blur-3xl"
              style={{ transform: `scale(${1 + Math.cos(time * 0.8) * 0.2})` }}
            />
            <div
              className="absolute top-1/2 left-1/2 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white rounded-full blur-3xl"
              style={{ transform: `translate(-50%, -50%) scale(${1 + Math.sin(time * 1.2) * 0.15})` }}
            />
          </div>

          {/* Central globe */}
          <div className="relative">
            <div
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-2 sm:border-4 border-dashed border-violet-300 flex items-center justify-center"
              style={{
                transform: `rotate(${time * 20}deg)`,
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)'
              }}
            >
              <div
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-2 sm:border-4 border-dashed border-cyan-300"
                style={{
                  transform: `rotate(-${time * 30}deg)`,
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)'
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 via-cyan-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-violet-300/50">
                  <Globe className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting feature icons */}
          {features.map((feature, index) => {
            const angle = (time * 0.4 + (index * Math.PI * 2) / features.length);
            const radius = window.innerWidth < 640 ? 140 : window.innerWidth < 768 ? 180 : 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={index}
                className="absolute hidden sm:block"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className={`group relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" strokeWidth={2} />

                  {/* Tooltip */}
                  <div className="absolute -bottom-10 sm:-bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg">
                      {feature.label}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Pulsing rings around globe */}
          {[0, 1, 2, 3].map((i) => {
            const baseSize = window.innerWidth < 640 ? 200 : window.innerWidth < 768 ? 240 : 280;
            const ringSize = baseSize + i * 40;
            const opacity = 0.5 - ((time * 30 + i * 20) % 100) / 200;
            const colors = ['#8b5cf6', '#06b6d4', '#6366f1'];

            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 hidden sm:block"
                style={{
                  width: `${ringSize + ((time * 30 + i * 20) % 100)}px`,
                  height: `${ringSize + ((time * 30 + i * 20) % 100)}px`,
                  borderColor: colors[i % 3],
                  opacity: Math.max(0, opacity)
                }}
              />
            );
          })}

          {/* Data flow particles */}
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const angle = time * 2 + i * 1.2;
            const baseDistance = window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 150 : 180;
            const distance = baseDistance + Math.sin(time + i) * 20;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const colors = ['bg-violet-500', 'bg-cyan-500', 'bg-indigo-500'];
            const shadowColors = ['#8b5cf6', '#06b6d4', '#6366f1'];

            return (
              <div
                key={`particle-${i}`}
                className={`absolute w-2 h-2 sm:w-3 sm:h-3 rounded-full ${colors[i % 3]} hidden sm:block`}
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  boxShadow: `0 0 10px ${shadowColors[i % 3]}`
                }}
              />
            );
          })}

          {/* Floating info cards */}
          <div
            className="absolute top-[5%] sm:top-[10%] right-[2%] sm:right-[5%] bg-white border-2 border-violet-200 rounded-xl p-3 sm:p-4 shadow-lg hidden md:block"
            style={{
              transform: `translateY(${Math.sin(time * 2) * 10}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-bold text-base sm:text-lg">500K+</div>
                <div className="text-gray-600 text-xs">Users</div>
              </div>
            </div>
          </div>

          <div
            className="absolute bottom-[10%] sm:bottom-[15%] left-[2%] sm:left-[5%] bg-white border-2 border-cyan-200 rounded-xl p-3 sm:p-4 shadow-lg hidden md:block"
            style={{
              transform: `translateY(${Math.cos(time * 2.5) * 10}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-bold text-base sm:text-lg">150+</div>
                <div className="text-gray-600 text-xs">Countries</div>
              </div>
            </div>
          </div>

          <div
            className="absolute top-[50%] right-[1%] sm:right-[2%] bg-white border-2 border-indigo-200 rounded-xl p-3 sm:p-4 shadow-lg hidden md:block"
            style={{
              transform: `translateY(${Math.sin(time * 1.8 + 1) * 12}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-bold text-base sm:text-lg">99.9%</div>
                <div className="text-gray-600 text-xs">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}