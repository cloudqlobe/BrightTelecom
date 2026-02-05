import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight, Send, Globe, Headphones, Shield, Zap, Cloud, Users, Award, TrendingUp } from 'lucide-react';

const AnimatedFooter = () => {
  const [email, setEmail] = useState('');
  const [hoveredService, setHoveredService] = useState(null);
  const [animatedStats, setAnimatedStats] = useState({ users: 0, calls: 0, uptime: 0 });

  useEffect(() => {
    // Animate stats on load
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { users: 500, calls: 2500000, uptime: 99.9 };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setAnimatedStats({
        users: Math.floor((targets.users / steps) * step),
        calls: Math.floor((targets.calls / steps) * step),
        uptime: ((targets.uptime / steps) * step).toFixed(1)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const services = [
    { icon: Phone, name: 'Business VoIP', color: 'text-blue-400' },
    { icon: Cloud, name: 'Cloud PBX', color: 'text-purple-400' },
    { icon: Users, name: 'Video Conferencing', color: 'text-green-400' },
    { icon: Headphones, name: 'Call Center', color: 'text-orange-400' },
    { icon: Shield, name: 'Security Solutions', color: 'text-red-400' },
    { icon: Globe, name: 'International Calling', color: 'text-teal-400' }
  ];

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Faq', href: '/faq' },
    { label: 'Contact', href: '/contact' },
    { label: 'Register', href: '/register' }
  ];


  const socialLinks = [
    { icon: Facebook, color: 'hover:bg-blue-600' },
    { icon: Twitter, color: 'hover:bg-sky-500' },
    { icon: Linkedin, color: 'hover:bg-blue-700' },
    { icon: Instagram, color: 'hover:bg-pink-600' },
    { icon: Youtube, color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="bg-gray-400 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 md:pt-16 pb-6 sm:pb-8">

        {/* Top Section - Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 mb-12 sm:mb-14 md:mb-16">

          {/* Company Info & Newsletter */}
          <div className="lg:col-span-1 space-y-5 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3 mb-5 sm:mb-6">
              <div className="bg-white p-2 sm:p-3 rounded-xl ">
                <img
                  src="/assets/logo1.png"
                  alt="Logo"
                  style={{ width: "68px", height: "50px", marginRight: "15px" }}
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">GIANT VOIP</h3>
                <p className="text-xs sm:text-sm text-gray-600">Future of Communication</p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              Transform your business communication with our cutting-edge VoIP solutions. Trusted by thousands worldwide.
            </p>

            {/* Newsletter */}
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-blue-200 hover:shadow-xl transition-all duration-300">
              <h4 className="font-semibold text-sm sm:text-base text-gray-800 mb-3 flex items-center gap-2">
                <Send size={16} className="text-blue-600" />
                Subscribe to Newsletter
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none bg-white transition-all duration-200"
                />
                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 sm:px-5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg group">
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-blue-600">{animatedStats.users.toLocaleString()}+</div>
                <div className="text-xs text-gray-600 mt-1">Active Users</div>
              </div>
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-purple-600">{(animatedStats.calls / 1000000).toFixed(1)}M+</div>
                <div className="text-xs text-gray-600 mt-1">Calls/Month</div>
              </div>
              <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-3 sm:p-4 text-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">{animatedStats.uptime}%</div>
                <div className="text-xs text-gray-600 mt-1">Uptime</div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-5 sm:mb-6 flex items-center gap-2">
              <Zap className="text-blue-600" size={20} />
              Our Services
            </h4>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    className={`bg-white bg-opacity-60 backdrop-blur-sm rounded-xl p-3 sm:p-4 cursor-pointer transition-all duration-300 border-2 ${hoveredService === index
                      ? 'border-blue-500 shadow-xl scale-105 bg-opacity-90'
                      : 'border-transparent shadow-md hover:shadow-lg'
                      }`}
                  >
                    <Icon className={`${service.color} mb-2 transition-transform duration-300 ${hoveredService === index ? 'scale-110' : ''}`} size={20} />
                    <p className="text-xs sm:text-sm font-medium text-gray-800">{service.name}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Links & Contact */}
          <div className="lg:col-span-1 space-y-6 sm:space-y-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-5 sm:mb-6 flex items-center gap-2">
                <TrendingUp className="text-blue-600" size={20} />
                Quick Links
              </h4>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {quickLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="group bg-white bg-opacity-60 backdrop-blur-sm
        rounded-lg px-3 sm:px-4 py-2 sm:py-3
        cursor-pointer transition-all duration-200
        hover:bg-opacity-90 hover:translate-x-2
        shadow-md hover:shadow-lg
        border border-transparent hover:border-blue-300"
                  >
                    <p className="text-xs sm:text-sm font-medium text-gray-700
        group-hover:text-blue-600 transition-colors
        flex items-center gap-2">
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      {link.label}
                    </p>
                  </a>
                ))}
              </div>
            </div>


            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-5 sm:p-6 text-white shadow-xl">
              <h4 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 flex items-center gap-2">
                <Headphones size={18} />
                Contact Us
              </h4>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-200">
                  <Phone size={16} className="text-blue-200 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">+44 7476 658542</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-200">
                  <Mail size={16} className="text-blue-200 flex-shrink-0" />
                  <span className="text-xs sm:text-sm break-all">support@giantvoip.com</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 hover:translate-x-2 transition-transform duration-200">
                  <MapPin size={16} className="text-blue-200 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">123 Tech Street, Silicon Valley, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-blue-200 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6">

            {/* Social Links */}
            <div className="flex items-center gap-2 sm:gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white bg-opacity-60 backdrop-blur-sm p-2 sm:p-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg ${social.color}`}
                  >
                    <Icon className="text-gray-700 hover:text-white transition-colors" size={18} />
                  </div>
                );
              })}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right order-last md:order-none">
              <p className="text-sm sm:text-base text-gray-700 font-medium">© 2024 VoIP Connect. All rights reserved.</p>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-600">
                <span className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</span>
                <span className="text-gray-400">|</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">Terms of Service</span>
                <span className="text-gray-400">|</span>
                <span className="hover:text-blue-600 cursor-pointer transition-colors">Cookie Policy</span>
              </div>
            </div>

            {/* Awards Badge */}
            <div className="flex items-center gap-2 sm:gap-3 bg-white bg-opacity-60 backdrop-blur-sm rounded-xl px-3 sm:px-4 py-2 shadow-md">
              <Award className="text-yellow-500 animate-pulse-slow" size={20} />
              <div>
                <p className="text-xs font-semibold text-gray-800">Award Winning</p>
                <p className="text-xs text-gray-600">VoIP Solution 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </footer>
  );
};

export default AnimatedFooter;