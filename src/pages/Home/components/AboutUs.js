import React, { useState } from 'react';
import { Phone, Users, Award, Target, CheckCircle, Mail, Building, User, ArrowRight } from 'lucide-react';

export default function VoIPAboutPage() {
  const [activeTab, setActiveTab] = useState('story');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', phone: '' });

  const tabs = [
    { id: 'story', label: 'Our Story', icon: Award },
    { id: 'mission', label: 'Mission & Vision', icon: Target },
    { id: 'team', label: 'Our Team', icon: Users },
    { id: 'values', label: 'Core Values', icon: CheckCircle }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will connect with you soon.');
  };

  return (
    <div className="min-h-screen">
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-6 mt-12" >
            <div>
              <h1
                style={{ fontWeight: "300" }}
                className="text-5xl lg:text-4xl text-gray-600 leading-tight max-w-[620px]"
              >
                The Future of{" "}
                <span className="text-transparent bg-clip-text bg-orange-600">
                  Connectivity
                </span>
              </h1>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Founded in 2015, VoiceLink Pro emerged from a simple observation: businesses
                deserved better communication tools. What started as a small team of five
                telecommunication enthusiasts has grown into a leading VoIP solutions provider
                serving over 10,000 businesses worldwide.
              </p>
              <p className="text-lg">
                Our founders, veterans of the telecommunications industry, recognized the
                limitations of traditional phone systems and the untapped potential of
                Voice over Internet Protocol technology.
              </p>
              <p className="text-lg">
                Today, we process over 50 million calls per month, maintaining a 99.99% uptime
                guarantee while continuously innovating to meet the evolving needs of modern businesses.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
                <div className="text-sm text-gray-600">Businesses</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">99.99%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">50M+</div>
                <div className="text-sm text-gray-600">Calls/Month</div>
              </div>
            </div>
          </div>

          {/* Right Side - Registration & Connect Form */}
          <div className="lg:sticky lg:top-6">
            <div className="bg-white rounded-2xl p-8 border-2 border-blue-100 animate-pulse-slow">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Let's Connect</h2>
                <p className="text-gray-600">Start your VoIP journey with us today</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <Building className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Company Name"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold transform hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  🔒 Your information is secure and will never be shared
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Tabs Section */}
      <div className="bg-white py-16 px-6">


      </div>
    </div>
  );
}
