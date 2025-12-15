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
    { icon: Users, label: "500K+ Users", color: "from-violet-500 to-violet-600" },
    { icon: Globe, label: "150+ Countries", color: "from-cyan-500 to-cyan-600" },
    { icon: TrendingUp, label: "99.9% Uptime", color: "from-indigo-500 to-indigo-600" },
    { icon: Target, label: "Industry Leader", color: "from-violet-600 to-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8 relative overflow-hidden">
      
      {/* Animated background particles */}
      {particlePositions.map((particle) => {
        const yOffset = ((time * particle.speed * 10) % 100);
        const xWobble = Math.sin(time * particle.speed + particle.id) * 5;
        
        return (
          <div
            key={particle.id}
            className={`absolute rounded-full ${
              particle.id % 3 === 0 ? 'bg-violet-300' : particle.id % 3 === 1 ? 'bg-cyan-300' : 'bg-indigo-300'
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

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="inline-block px-6 py-2 bg-gradient-to-r from-violet-100 via-cyan-100 to-indigo-100 rounded-full border-2 border-violet-200">
              <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-cyan-600 to-indigo-600">
                ✨ About Our Company
              </span>
            </div>
            
            <h1 className="text-7xl font-bold leading-tight">
              <span className="text-gray-900">Connecting</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-cyan-500 to-indigo-600 mt-2">
                The World
              </span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
            We're on a mission to transform how businesses communicate. With cutting-edge VoIP technology and a passion for innovation, we're making crystal-clear communication accessible to everyone, everywhere.
          </p>

          {/* Mini stats */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-violet-50 to-violet-100 border-2 border-violet-200 hover:shadow-lg hover:shadow-violet-200/50 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-violet-700">2015</div>
              <div className="text-sm text-gray-600 mt-1">Founded</div>
            </div>
            <div className="p-5 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 border-2 border-cyan-200 hover:shadow-lg hover:shadow-cyan-200/50 transition-all duration-300">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-700">500K+</div>
              <div className="text-sm text-gray-600 mt-1">Active Users</div>
            </div>
          </div>
          
          <div className="flex gap-4 pt-2">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 via-cyan-500 to-indigo-600 text-white rounded-full font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-violet-300/50 hover:scale-105">
              <span className="relative z-10">Learn More</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-violet-500 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white hover:shadow-xl transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side - 3D Globe Network Animation */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Glowing background orbs */}
          <div className="absolute inset-0">
            <div 
              className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-violet-300/40 to-violet-400/40 rounded-full blur-3xl"
              style={{ transform: `scale(${1 + Math.sin(time) * 0.2})` }}
            />
            <div 
              className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-br from-cyan-300/40 to-cyan-400/40 rounded-full blur-3xl"
              style={{ transform: `scale(${1 + Math.cos(time * 0.8) * 0.2})` }}
            />
            <div 
              className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-indigo-300/30 to-indigo-400/30 rounded-full blur-3xl"
              style={{ transform: `translate(-50%, -50%) scale(${1 + Math.sin(time * 1.2) * 0.15})` }}
            />
          </div>

          {/* Central globe */}
          <div className="relative">
            <div 
              className="w-64 h-64 rounded-full border-4 border-dashed border-violet-300 flex items-center justify-center"
              style={{ 
                transform: `rotate(${time * 20}deg)`,
                boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)'
              }}
            >
              <div 
                className="w-56 h-56 rounded-full border-4 border-dashed border-cyan-300"
                style={{ 
                  transform: `rotate(-${time * 30}deg)`,
                  boxShadow: '0 0 40px rgba(6, 182, 212, 0.3)'
                }}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-500 via-cyan-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-violet-300/50">
                  <Globe className="w-24 h-24 text-white" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting feature icons */}
          {features.map((feature, index) => {
            const angle = (time * 0.4 + (index * Math.PI * 2) / features.length);
            const radius = 220;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                }}
              >
                <div className={`group relative w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" strokeWidth={2} />
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-lg">
                      {feature.label}
                    </div>
                  </div>
                </div>

                {/* Connection line to center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ left: `-${x}px, top: -${y}px, width: ${Math.abs(x) * 2}px`, height: `${Math.abs(y) * 2}px` }}>
                  <line
                    x1={x > 0 ? 0 : Math.abs(x) * 2}
                    y1={y > 0 ? 0 : Math.abs(y) * 2}
                    x2={x > 0 ? Math.abs(x) * 2 : 0}
                    y2={y > 0 ? Math.abs(y) * 2 : 0}
                    stroke={index % 3 === 0 ? '#8b5cf6' : index % 3 === 1 ? '#06b6d4' : '#6366f1'}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    opacity="0.4"
                  />
                </svg>
              </div>
            );
          })}

          {/* Pulsing rings around globe */}
          {[0, 1, 2, 3].map((i) => {
            const ringSize = 280 + i * 40;
            const opacity = 0.5 - ((time * 30 + i * 20) % 100) / 200;
            const colors = ['#8b5cf6', '#06b6d4', '#6366f1'];
            
            return (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
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
            const distance = 180 + Math.sin(time + i) * 20;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;
            const colors = ['bg-violet-500', 'bg-cyan-500', 'bg-indigo-500'];
            const shadowColors = ['#8b5cf6', '#06b6d4', '#6366f1'];
            
            return (
              <div
                key={`particle-${i}`}
                className={`absolute w-3 h-3 rounded-full ${colors[i % 3]}`}
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
            className="absolute top-[10%] right-[5%] bg-white border-2 border-violet-200 rounded-xl p-4 shadow-lg"
            style={{ 
              transform: `translateY(${Math.sin(time * 2) * 10}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-violet-600 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-bold text-lg">500K+</div>
                <div className="text-gray-600 text-xs">Users</div>
              </div>
            </div>
          </div>

          <div 
            className="absolute bottom-[15%] left-[5%] bg-white border-2 border-cyan-200 rounded-xl p-4 shadow-lg"
            style={{ 
              transform: `translateY(${Math.cos(time * 2.5) * 10}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-bold text-lg">150+</div>
                <div className="text-gray-600 text-xs">Countries</div>
              </div>
            </div>
          </div>

          <div 
            className="absolute top-[50%] right-[2%] bg-white border-2 border-indigo-200 rounded-xl p-4 shadow-lg"
            style={{ 
              transform: `translateY(${Math.sin(time * 1.8 + 1) * 12}px)`,
              transition: 'transform 0.3s ease-out'
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-gray-900 font-bold text-lg">99.9%</div>
                <div className="text-gray-600 text-xs">Uptime</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}