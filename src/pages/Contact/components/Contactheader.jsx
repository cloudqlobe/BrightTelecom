import React from 'react';
import { Phone, Wifi, Zap } from 'lucide-react';

export default function VoIPHeader() {
  return (
    <header className="bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <span className="text-indigo-600 font-semibold text-sm tracking-wider uppercase bg-indigo-50 px-4 py-2 rounded-full">
                Next-Gen Communication
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Crystal Clear
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                VoIP Calls
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Experience seamless voice communication with enterprise-grade quality. 
              Connect your team anywhere, anytime with our cutting-edge VoIP solution.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-600/60 transition-all duration-300 hover:scale-105">
                Get Started
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></span>
              </button>
              
              <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg border-2 border-gray-200 hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300 hover:scale-105">
                Get Connected
              </button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
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
          
          {/* Right Side - VoIP Visual Design */}
          <div className="relative flex items-center justify-center">
            {/* Main Phone Icon Container */}
            <div className="relative z-10">
              <div className="w-64 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <Phone className="w-32 h-32 text-white" strokeWidth={1.5} />
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute inset-0">
              {/* Signal Waves - Top Left */}
              <div className="absolute top-8 left-8 animate-pulse">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-indigo-400 rounded-full opacity-60"></div>
                  <div className="absolute inset-2 w-12 h-12 border-4 border-indigo-500 rounded-full opacity-80"></div>
                  <div className="absolute inset-4 w-8 h-8 bg-indigo-600 rounded-full"></div>
                </div>
              </div>
              
              {/* Connection Dots - Bottom Right */}
              <div className="absolute bottom-12 right-12">
                <div className="flex gap-2">
                  <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                  <div className="w-4 h-4 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
              
              {/* Decorative Cards */}
              <div className="absolute top-24 right-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                    <Wifi className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="text-sm font-bold text-gray-900">Connected</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-24 left-4 bg-white p-4 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Quality</p>
                    <p className="text-sm font-bold text-gray-900">HD Audio</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Gradient Blur */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>
          </div>
          
        </div>
      </div>
    </header>
  );
}