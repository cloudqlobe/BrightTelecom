import React from 'react';
import { Star, Globe, Clock, Shield, Zap, Users } from 'lucide-react';

export default function VoipFeatures() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Main Content Area */}
        <div className="bg-gray-100 rounded-3xl p-8 md:p-12">
          
          {/* Service Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-default text-gray-900 mb-2">
              Advanced VoIP <span className='text-orange-400'>Communication Solutions</span>
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-Grade Voice Communication
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                HD Voice Quality
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Crystal-clear HD voice with advanced audio codecs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-400 to-indigo-600 mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Secure Calling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                End-to-end encrypted VoIP calls with carrier-grade security.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-400 to-violet-600 mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Global VoIP Reach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Make and receive calls worldwide with seamless connectivity.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-400 to-indigo-600 mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ultra-Low Latency
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized routing ensures minimal delay and smooth conversations.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-600 mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Network Monitoring
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Continuous monitoring to maintain consistent call performance.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
              <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-600 mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Scalable Connections
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easily scale users and call volumes as your business grows.
              </p>
            </div>

          </div>

          <div className="text-center"></div>
        </div>
      </div>
    </div>
  );
}
