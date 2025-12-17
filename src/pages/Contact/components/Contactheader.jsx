import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';

export default function ContactHeader() {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes orbit {
          from {
            transform: rotate(0deg) translateX(120px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(120px) rotate(-360deg);
          }
        }
        
        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
        
        @keyframes slide-in {
          from {
            transform: translateX(-20px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }
        
        .animate-orbit {
          animation: orbit 15s linear infinite;
        }
        
        .animate-scale-pulse {
          animation: scale-pulse 2s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slide-in 0.6s ease-out forwards;
        }
      `}</style>

      <header className=" bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen flex items-center relative overflow-hidden pt-[35px] pb-[35px]">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-0 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">

            {/* Left Content */}
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <div className="inline-block animate-slide-in">
                <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                  We'd Love to Hear From You
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-slide-in" style={{ animationDelay: '0.1s' }}>
                Get in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
                  Touch
                </span>
              </h1>

              <p className="font-inter text-justify text-lg text-gray-600 leading-relaxed max-w-xl animate-slide-in">
                Have questions or ready to start your journey with us? Our team is here to help you every step of the way.
                To make this responsive and center-aligned on mobile, but keep the left-aligned layout on desktop, you only need to adjust the grid + left content alignment using Tailwind responsive utilities.
              </p>

              {/* Contact Info Cards */}
              <div className="space-y-4 animate-slide-in w-full max-w-md lg:max-w-none">
                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="text-gray-900 font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-gray-900 font-semibold">hello@company.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Location</p>
                    <p className="text-gray-900 font-semibold">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              {/* <div className="flex flex-wrap gap-6 pt-4 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm text-gray-600 font-medium">24/7 Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-gray-600 font-medium">Quick Response</span>
                </div>
              </div> */}
            </div>

            {/* Right Side - Interactive Contact Visual */}
            <div className="relative hidden lg:flex items-center justify-center h-96 md:h-[500px]">
              {/* Rotating Circle Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-dashed border-indigo-200 animate-rotate-slow"></div>
              </div>

              {/* Main Contact Icon Container */}
              <div className="relative z-10">
                <div className="relative w-28 h-28 md:w-36 md:h-36 
    bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
    rounded-full shadow-2xl flex items-center justify-center animate-scale-pulse">

                  <div className="w-20 h-20 md:w-28 md:h-28 
      bg-white rounded-full flex items-center justify-center">

                    <Send
                      className="w-10 h-10 md:w-14 md:h-14 text-indigo-600 transform -rotate-45"
                      strokeWidth={1.5}
                    />
                  </div>

                </div>
              </div>


              {/* Orbiting Contact Icons */}
              <div className="absolute inset-0 flex items-center justify-center hidden md:block">
                {/* Mail Icon - Orbiting */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-orbit" style={{ animationDuration: '12s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Phone Icon - Orbiting */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-orbit" style={{ animationDuration: '12s', animationDelay: '-3s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Map Icon - Orbiting */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-orbit" style={{ animationDuration: '12s', animationDelay: '-6s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>

                {/* Message Icon - Orbiting */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-orbit" style={{ animationDuration: '12s', animationDelay: '-9s' }}>
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-2xl shadow-xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                      <MessageSquare className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Particles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 right-8 w-3 h-3 bg-indigo-400 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
                <div className="absolute top-1/2 right-12 w-2 h-2 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-1/4 right-16 w-3 h-3 bg-pink-400 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/3 left-8 w-2 h-2 bg-indigo-300 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute bottom-1/3 left-12 w-3 h-3 bg-purple-300 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
              </div>

              {/* Glowing Effect */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-56 h-56 md:w-64 md:h-64 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 animate-scale-pulse"></div>
              </div>
            </div>

          </div>

          {/* Bottom CTA Section */}
          {/* <div className="mt-16 text-center animate-slide-in" style={{ animationDelay: '0.5s' }}>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Start Conversation
                <Send className="w-5 h-5" />
              </span>
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></span>
            </button>
          </div> */}
        </div>
      </header>
    </>
  );
}