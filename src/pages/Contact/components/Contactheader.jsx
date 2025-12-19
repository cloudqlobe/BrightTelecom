import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Wifi, Zap } from 'lucide-react';

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
    transform: rotate(0deg) translateX(160px) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(160px) rotate(-360deg);
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

        <div className="max-w-7xl mx-auto px-6 lg:px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center text-center lg:text-left">

            {/* Left Content */}
            <div className="space-y-8 mt-[-57px]">

              <h1 className="text-3xl lg:text-3xl  text-gray-600 leading-tight">
                Let’s Start the {" "}
                <span className=" text-transparent bg-clip-text bg-orange-400">
                  Conversation
                </span>
              </h1>

            <p className="font-inter text-gray-600 text-sm sm:text-base md:text-[17px] leading-6 sm:leading-7 tracking-normal text-justify sm:text-left max-w-xl mx-auto lg:mx-0 md:text-justify lg:text-justify">
                Have questions about our services or need expert assistance?
                Our team is always ready to help you with reliable and timely support.
                Reach out to us for sales inquiries, technical help, or general information.
                We value your time and ensure quick responses to all messages.
                Let’s connect and build seamless communication solutions together.
              </p>

          <div className="flex flex-col sm:flex-row md:justify-center lg:justify-start gap-4 pt-2 w-full">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white squared-xl font-semibold text-lg shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-600/60 transition-all duration-300 hover:scale-105">
                  Get Started
                  <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></span>
                </button>

                <button className="px-8 py-4 bg-white text-gray-900 squared-xl font-semibold text-lg border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105">
                  Get Connected
                </button>
              </div>

<div className="hidden sm:flex md:justify-center lg:justify-start items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm text-gray-600 font-medium">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-green-500" />
                  <span className="text-sm text-gray-600 font-medium">HD Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-indigo-500" />
                  <span className="text-sm text-gray-600 font-medium">24/7 Support</span>
                </div>
              </div>
            </div>

            {/* Right Side - Interactive Contact Visual */}
            <div className="relative hidden lg:flex items-center justify-center 
  h-[600px] xl:h-[700px]"
              style={{ marginTop: "-82px", marginLeft:"100px" }}>
              {/* Rotating Circle Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 xl:w-96 xl:h-96 
  rounded-full border-2 border-dashed border-indigo-200 
  animate-rotate-slow">
                </div>
              </div>

              {/* Main Contact Icon Container */}
              <div className="relative z-10">
                <div className="relative w-36 h-36 xl:w-44 xl:h-44 
  bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
  rounded-full shadow-2xl flex items-center justify-center animate-scale-pulse">

                  <div className="w-28 h-28 xl:w-36 xl:h-36 
    bg-white rounded-full flex items-center justify-center">

                    <Send
                      className="w-14 h-14 xl:w-18 xl:h-18 text-indigo-600 -rotate-45"
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
                <div className="w-72 h-72 xl:w-96 xl:h-96 
  bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 
  rounded-full blur-3xl opacity-25 animate-scale-pulse">
                </div>
              </div>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}