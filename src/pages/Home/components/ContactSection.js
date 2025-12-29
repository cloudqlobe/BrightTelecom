import React, { useState } from 'react';
import { Phone, Mail, User, Building2, MessageSquare, Globe, Zap, Shield, Headphones, ArrowRight, Users } from 'lucide-react';

const VoIPRegister = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    employees: '',
    message: ''
  });

  const features = [
    { icon: Phone, title: 'Crystal Clear Calls', desc: 'HD voice quality for every conversation', color: 'from-blue-500 to-blue-600' },
    { icon: Zap, title: 'Instant Setup', desc: 'Get started in less than 5 minutes', color: 'from-purple-500 to-purple-600' },
    { icon: Shield, title: 'Bank-Level Security', desc: 'End-to-end encryption for all calls', color: 'from-green-500 to-green-600' },
    { icon: Headphones, title: '24/7 Support', desc: 'Expert help whenever you need it', color: 'from-orange-500 to-orange-600' }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-3 sm:p-4 md:p-6">
      <div className="w-full max-w-7xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[600px] sm:min-h-[700px]">
          
          {/* Left Side - Registration Form */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-md mx-auto w-full">
              {/* Header */}
              <div className="mb-6 sm:mb-8">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <Phone className="text-white" size={24} />
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">Let's Connect</h1>
                <p className="text-gray-600 text-sm sm:text-base md:text-lg">Fill in your details and our team will reach out to you within 24 hours</p>
              </div>

              {/* Form */}
              <div className="space-y-3 sm:space-y-4 md:space-y-5">
                <div className="relative group">
                  <User className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all duration-200 bg-white"
                  />
                </div>

                <div className="relative group">
                  <Mail className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all duration-200 bg-white"
                  />
                </div>

                <div className="relative group">
                  <Phone className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all duration-200 bg-white"
                  />
                </div>

                <div className="relative group">
                  <Building2 className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name *"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all duration-200 bg-white"
                  />
                </div>

                <div className="relative group">
                  <MessageSquare className="absolute left-3 sm:left-4 top-3 sm:top-4 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 rounded-xl focus:border-blue-600 focus:outline-none transition-all duration-200 bg-white resize-none"
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 sm:py-4 rounded-xl text-sm sm:text-base font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>

              <p className="text-center text-gray-500 text-xs sm:text-sm mt-4 sm:mt-6 px-2">
                By submitting, you agree to our <span className="text-blue-600 font-medium cursor-pointer hover:underline">Privacy Policy</span>
              </p>
            </div>
          </div>

          {/* Right Side - Features & Design */}
          <div className="w-full lg:w-1/2 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 max-w-md mx-auto w-full">
              {/* Hero Content */}
              <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-xl sm:rounded-2xl backdrop-blur-sm mb-4 sm:mb-5 md:mb-6 shadow-xl">
                  <Globe className="text-white" size={28} />
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
                  Welcome to the Future of Communication
                </h2>
                <p className="text-blue-100 text-sm sm:text-base md:text-lg px-2">
                  Join over 50,000+ businesses transforming their communication with our VoIP solution
                </p>
              </div>

              {/* Features Grid */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:bg-opacity-20 transition-all duration-300 border border-white border-opacity-20 hover:scale-105 cursor-pointer group"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className={`bg-gradient-to-r ${feature.color} p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                          <Icon className="text-white" size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">
                            {feature.title}
                          </h3>
                          <p className="text-blue-100 text-xs sm:text-sm">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-7 md:pt-8 border-t border-white border-opacity-20">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">99.9%</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">500+</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">24/7</div>
                  <div className="text-blue-100 text-xs sm:text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default VoIPRegister;